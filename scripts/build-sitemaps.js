import 'dotenv/config';
import pg from 'pg';
import format from 'pg-format';
import { mkdir, writeFile, rename } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { parseArgs } from 'node:util';
import { databaseConfig } from '../lib/database-config.js';
import { getHotelPath, getVetPath, slugify, PROGRAMMATIC_CLUSTERS } from '../lib/seo-slugs.js';
import { boundedInteger, isMain, keysetRows } from './database-preflight.js';

const namespace = 'http://www.sitemaps.org/schemas/sitemap/0.9';
const header = '<?xml version="1.0" encoding="UTF-8"?>\n';
const staticPaths = [
  '/', '/evcil-hayvan-dostu-oteller', '/kedi-kopek-otelleri', '/pet-taksi', '/veterinerler',
  '/evcil-hayvanla-gezilecek-yerler', '/evcil-hayvan-seyahat-rehberi', '/trust-ads', '/otel-zincirleri',
  '/kedi-kabul-eden-oteller', '/kopek-kabul-eden-oteller', ...PROGRAMMATIC_CLUSTERS.map(c => '/' + c.slug)
];
export function xmlEscape(value) {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);
}
export function siteOrigin(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error('Site URL must be an HTTPS origin without credentials or a path.');
  return url.origin;
}

export async function generateSitemaps(client, emit, { origin, batchSize = 250, chunkSize = 5000, runId = randomUUID() } = {}) {
  origin = siteOrigin(origin);
  boundedInteger(batchSize, 1, 1000, 'batch size');
  boundedInteger(chunkSize, 1, 10000, 'chunk size');
  if (!/^[a-zA-Z0-9-]{1,80}$/.test(runId)) throw new Error('Invalid build identifier.');
  const chunks = [];
  let nodes = [];
  let bytes = 0;
  let total = 0;
  async function flush() {
    if (!nodes.length) return;
    if (chunks.length >= 10000) throw new Error('Sitemap index cap reached; partition the build.');
    const name = `sitemap-${runId}-${chunks.length + 1}.xml`;
    await emit(name, `${header}<urlset xmlns="${namespace}">\n${nodes.join('')}<\/urlset>\n`);
    chunks.push(name);
    nodes = [];
    bytes = 0;
  }
  async function add(path, modified) {
    const loc = origin + path;
    if (!path.startsWith('/') || loc.length > 2048 || /[\u0000-\u001f]/.test(loc)) throw new Error('Invalid sitemap URL.');
    let lastmod = '';
    if (modified != null) {
      const parsed = new Date(modified);
      if (!Number.isFinite(parsed.getTime())) throw new Error('Invalid sitemap modification timestamp.');
      lastmod = `<lastmod>${parsed.toISOString()}</lastmod>`;
    }
    const node = `<url><loc>${xmlEscape(loc)}</loc>${lastmod}</url>\n`;
    const size = Buffer.byteLength(node);
    if (nodes.length >= chunkSize || bytes + size > 10 * 1024 * 1024) await flush();
    nodes.push(node);
    bytes += size;
    total++;
  }
  await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
  try {
    await client.query("SET LOCAL TIME ZONE 'UTC'");
    // Duplicate canonical URLs are an operator decision, never silently collapsed.
    const duplicate = await client.query(`SELECT 1 FROM public.hotels
      GROUP BY city_slug,district_slug,name_slug HAVING count(*) > 1 LIMIT 1`);
    if (duplicate.rows.length) throw new Error('Duplicate hotel slugs; run preflight and reconcile before building.');
    for (const path of new Set(staticPaths)) await add(path);
    for await (const rows of keysetRows(client, 'hotels', batchSize, 'id,name,city,district,city_slug,district_slug,name_slug,modified_at::text AS modified_at')) {
      for (const row of rows) {
        if (['city', 'district', 'name'].some(field => !row[`${field}_slug`] || row[`${field}_slug`] !== slugify(row[field]))) throw new Error('Hotel canonical URL and database slug disagree; reconcile slug normalization before publishing.');
        await add(getHotelPath(row), row.modified_at);
      }
    }
    for await (const rows of keysetRows(client, 'vets', batchSize, 'id,name,city,district,modified_at::text AS modified_at')) {
      for (const row of rows) await add(getVetPath(row), row.modified_at);
    }
    for (const [table, prefix] of [['boardings', '/bakim/'], ['pet_taxis', '/taksi/'], ['guides', '/rehber/']]) {
      for await (const rows of keysetRows(client, table, batchSize, 'id,modified_at::text AS modified_at')) {
        for (const row of rows) await add(prefix + encodeURIComponent(row.id), row.modified_at);
      }
    }
    // Location pages use the existing hotel location index and a tuple cursor.
    let cursor;
    let previousCity;
    while (true) {
      const result = await client.query(format(`SELECT DISTINCT city_slug,district_slug FROM public.hotels
        %s ORDER BY city_slug,district_slug LIMIT $1`, cursor ? 'WHERE (city_slug,district_slug) > ($2,$3)' : ''), cursor ? [batchSize, ...cursor] : [batchSize]);
      if (!result.rows.length) break;
      for (const row of result.rows) {
        if (row.city_slug !== previousCity) {
          await add('/evcil-hayvan-dostu-oteller/' + encodeURIComponent(row.city_slug));
          previousCity = row.city_slug;
        }
        await add('/evcil-hayvan-dostu-oteller/' + encodeURIComponent(row.city_slug) + '/' + encodeURIComponent(row.district_slug));
      }
      const last = result.rows.at(-1);
      const next = [last.city_slug, last.district_slug];
      if (cursor && next.every((v, i) => v === cursor[i])) throw new Error('Location keyset did not advance.');
      cursor = next;
    }
    await flush();
    await client.query('ROLLBACK');
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    throw error;
  }
  const index = `${header}<sitemapindex xmlns="${namespace}">\n${chunks.map(name => `<sitemap><loc>${xmlEscape(origin + '/sitemaps/' + name)}</loc></sitemap>\n`).join('')}</sitemapindex>\n`;
  // The index is emitted last so a failed build never advertises incomplete chunks.
  await emit('index.xml', index);
  return { urls: total, chunks: chunks.length, index: 'public/sitemaps/index.xml' };
}

async function main() {
  const { values } = parseArgs({ options: {
    'site-url': { type: 'string' }, 'batch-size': { type: 'string', default: '250' }, 'chunk-size': { type: 'string', default: '5000' }
  } });
  const origin = siteOrigin(values['site-url'] || process.env.SITE_URL);
  const batchSize = boundedInteger(values['batch-size'], 1, 1000, 'batch size');
  const chunkSize = boundedInteger(values['chunk-size'], 1, 10000, 'chunk size');
  if (!process.env.SITEMAP_DATABASE_URL) throw new Error('SITEMAP_DATABASE_URL is required for this offline build job.');
  const client = new pg.Client({ ...databaseConfig(process.env.SITEMAP_DATABASE_URL), options: '-c role=pati_api', connectionTimeoutMillis: 10000, statement_timeout: 60000 });
  const directory = fileURLToPath(new URL('../public/sitemaps/', import.meta.url));
  const runId = randomUUID();
  try {
    await client.connect();
    await mkdir(directory, { recursive: true });
    const emit = async (name, contents) => {
      if (name !== 'index.xml') return writeFile(join(directory, name), contents, { flag: 'wx' });
      const staging = join(directory, `index-${runId}.tmp`);
      await writeFile(staging, contents, { flag: 'wx' });
      await rename(staging, join(directory, 'index.xml'));
    };
    console.log(JSON.stringify(await generateSitemaps(client, emit, { origin, batchSize, chunkSize, runId })));
  } finally { await client.end(); }
}

if (isMain(import.meta.url)) main().catch(error => { console.error(error.message); process.exitCode = 1; });
