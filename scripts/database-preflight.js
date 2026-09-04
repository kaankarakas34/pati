import 'dotenv/config';
import pg from 'pg';
import format from 'pg-format';
import { parseArgs } from 'node:util';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { databaseConfig } from '../lib/database-config.js';
import { placeTables } from '../lib/catalog-schema.js';

// Parents precede feedback; all eleven legacy tables are required, even if empty.
export const LEGACY_TABLES = Object.freeze([
  'hotels', 'boardings', 'guides', 'pet_taxis', 'vets', 'experiences', 'ads',
  'corrections', 'complaints', 'reviews', 'ad_applications'
]);
export const isMain = url => Boolean(process.argv[1]) && pathToFileURL(resolve(process.argv[1])).href === url;
export function boundedInteger(value, min, max, label) {
  const number = Number(value);
  if (!Number.isSafeInteger(number) || number < min || number > max) throw new Error(`${label} must be an integer between ${min} and ${max}.`);
  return number;
}
export function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || value.startsWith('0000')) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}
export async function columnsFor(client, table) {
  if (!LEGACY_TABLES.includes(table)) throw new Error('Unsupported table.');
  const result = await client.query(`SELECT column_name,data_type,is_generated FROM information_schema.columns
    WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`, [table]);
  if (!result.rows.some(c => c.column_name === 'id')) throw new Error(`Missing required table or id: ${table}`);
  return result.rows;
}
export function selectColumns(columns, rawJson = false) {
  return columns.map(c => ['date', 'timestamp with time zone', 'timestamp without time zone'].includes(c.data_type) || (rawJson && ['json', 'jsonb'].includes(c.data_type))
    ? format('%I::text AS %I', c.column_name, c.column_name) : format('%I', c.column_name)).join(',');
}
export async function* keysetRows(client, table, batchSize = 250, selected) {
  if (!LEGACY_TABLES.includes(table)) throw new Error('Unsupported table.');
  boundedInteger(batchSize, 1, 1000, 'batch size');
  selected ??= selectColumns(await columnsFor(client, table));
  let cursor;
  while (true) {
    const result = await client.query(format('SELECT %s FROM public.%I%s ORDER BY id LIMIT $1', selected, table, cursor === undefined ? '' : ' WHERE id > $2'), cursor === undefined ? [batchSize] : [batchSize, cursor]);
    if (!result.rows.length) return;
    const next = result.rows.at(-1).id;
    if (next == null || next === cursor) throw new Error(`${table}: invalid keyset cursor.`);
    yield result.rows;
    cursor = next;
  }
}

// Match private.slug in the checked-in integrity migration, including its limits.
export const legacySlugSql = column => format(`trim(both '-' from regexp_replace(regexp_replace(
  replace(replace(lower(translate(normalize(%I,NFKD),
    '\u00c7\u011e\u0130I\u00d6\u015e\u00dc\u00e7\u011f\u0131\u00f6\u015f\u00fc', 'CGiiOSUcgiosu')), '''', ''), '\u2019', ''),
  U&'[\\0300-\\036f]', '', 'g'), '[^a-z0-9]+', '-', 'g'))`, column);

export function rowIssues(table, row, columns) {
  const issues = [];
  for (const column of columns) {
    const name = column.column_name;
    const value = row[name];
    if (['json', 'jsonb'].includes(column.data_type)) {
      const objectRequired = ['author', 'rules', 'booking_links'].includes(name);
      const arrayLimit = name === 'features' ? 100 : name === 'allowed_pets' ? 20 : name === 'gallery_images' ? 50 : null;
      if (value === null && row[`__sql_null_${name}`] !== false && !['features', 'allowed_pets', 'author'].includes(name)) continue;
      if (objectRequired && (!value || typeof value !== 'object' || Array.isArray(value))) issues.push(`${name}: expected JSON object`);
      if (!objectRequired && !Array.isArray(value)) issues.push(`${name}: expected JSON array`);
      if (arrayLimit !== null && (!Array.isArray(value) || value.length > arrayLimit)) issues.push(`${name}: expected array of at most ${arrayLimit} items`);
      const limit = ['features', 'checklist'].includes(name) ? 12000 : 50000;
      // PostgreSQL jsonb adds spaces; use the server's byte count when available.
      if (limit && (row[`__bytes_${name}`] ?? Buffer.byteLength(JSON.stringify(value) ?? 'null')) > limit) issues.push(`${name}: JSON exceeds byte limit`);
    }
    if (['date', 'published_at', 'updated_at', 'starts_at', 'ends_at', 'last_verified'].includes(name)) {
      const day = value instanceof Date ? value.toISOString().slice(0, 10) : value;
      if (name === 'last_verified' && placeTables.includes(table)) {
        if (value == null && column.data_type === 'date') continue;
        if (typeof day === 'string' && !/^\d{4}-\d{2}-\d{2}$/.test(day)) continue;
      }
      if (!validDate(day)) issues.push(`${name}: incompatible date`);
    }
  }
  if (table === 'ads' && row.ends_at < row.starts_at) issues.push('ends_at precedes starts_at');
  if (placeTables.includes(table) && (!row.city?.trim() || !row.district?.trim())) issues.push('empty city or district');
  return issues;
}

export async function preflight(client, { batchSize = 250, sampleLimit = 20 } = {}) {
  boundedInteger(batchSize, 1, 1000, 'batch size');
  boundedInteger(sampleLimit, 1, 100, 'sample limit');
  const report = { issueCount: 0, counts: {}, issues: [], limitations: ['Read-only checks can scan all rows; query timeout aborts rather than returning a clean result.', 'Samples contain IDs only. This is not an exhaustive validation of every target constraint.'] };
  const groups = new Map();
  function record(kind, table, id, amount = 1) {
    const key = `${table}:${kind}`;
    if (!groups.has(key)) { const issue = { table, kind, count: 0, sampleIds: [] }; groups.set(key, issue); report.issues.push(issue); }
    const issue = groups.get(key);
    issue.count += amount;
    report.issueCount += amount;
    if (id !== undefined && issue.sampleIds.length < sampleLimit) issue.sampleIds.push(String(id));
  }
  for (const table of LEGACY_TABLES) {
    const columns = await columnsFor(client, table);
    const sizes = columns.filter(c => ['json', 'jsonb'].includes(c.data_type))
      .flatMap(c => [format('octet_length(%I::jsonb::text) AS %I', c.column_name, `__bytes_${c.column_name}`), format('%I IS NULL AS %I', c.column_name, `__sql_null_${c.column_name}`)]);
    let count = 0;
    for await (const rows of keysetRows(client, table, batchSize, [selectColumns(columns), ...sizes].join(','))) {
      count += rows.length;
      for (const row of rows) for (const issue of rowIssues(table, row, columns)) record(issue, table, row.id);
    }
    report.counts[table] = count;
  }
  async function relational(kind, table, sql) {
    // sql is an internal query fragment; identifiers are fixed or %I-escaped.
    const result = await client.query({
      text: format('SELECT count(*) OVER()::int AS total,id FROM (%s) problems LIMIT $1', sql),
      values: [sampleLimit]
    });
    if (result.rows.length) {
      record(kind, table, undefined, result.rows[0].total);
      groups.get(`${table}:${kind}`).sampleIds = result.rows.map(row => String(row.id));
    }
  }
  const places = placeTables.map(table => format('SELECT id FROM public.%I', table)).join(' UNION ALL ');
  await relational('cross-catalog duplicate IDs', 'places', `SELECT min(id) AS id FROM (${places}) p GROUP BY id HAVING count(*)>1`);
  await relational('duplicate slug', 'guides', 'SELECT min(id) AS id FROM public.guides GROUP BY slug HAVING count(*)>1');
  for (const table of ['hotels']) {
    await relational('duplicate slug tuple', table, format('SELECT min(id) AS id FROM public.%I GROUP BY %s HAVING count(*)>1', table, ['city', 'district', 'name'].map(legacySlugSql).join(',')));
    await relational('empty slug component', table, format('SELECT id FROM public.%I WHERE %s', table, ['city', 'district', 'name'].map(c => `(${legacySlugSql(c)})=''`).join(' OR ')));
  }
  for (const table of ['corrections', 'complaints', 'reviews']) {
    const target = table === 'corrections' ? 'hotel_id' : 'target_id';
    const parent = table === 'corrections' ? 'SELECT id FROM public.hotels' : places;
    await relational('orphan feedback', table, format('SELECT f.id FROM public.%I f WHERE NOT EXISTS (SELECT 1 FROM (%s) p WHERE p.id=f.%I)', table, parent, target));
  }
  const hasNewSchema = (await client.query("SELECT to_regclass('public.places') IS NOT NULL AS present")).rows[0].present;
  if (hasNewSchema) {
    for (const table of placeTables) {
      await relational('missing or wrong place registration', table, format('SELECT c.id FROM public.%I c LEFT JOIN public.places p ON p.id=c.id AND p.kind=%L WHERE p.id IS NULL', table, table));
      await relational('orphan place registration', table, format('SELECT p.id FROM public.places p LEFT JOIN public.%I c ON c.id=p.id WHERE p.kind=%L AND c.id IS NULL', table, table));
      await relational('invalid location registration', table, format('SELECT c.id FROM public.%I c LEFT JOIN public.locations l ON l.id=c.location_id AND l.city=c.city AND l.district=c.district WHERE l.id IS NULL', table));
    }
    await relational('orphan source identity', 'place_sources', 'SELECT s.place_id AS id FROM public.place_sources s LEFT JOIN public.places p ON p.id=s.place_id WHERE p.id IS NULL');
    await relational('orphan favorite', 'favorites', 'SELECT f.place_id AS id FROM public.favorites f LEFT JOIN public.places p ON p.id=f.place_id LEFT JOIN public.profiles u ON u.id=f.user_id WHERE p.id IS NULL OR u.id IS NULL');
  }
  return report;
}

async function main() {
  const { values } = parseArgs({ options: { 'batch-size': { type: 'string', default: '250' }, 'sample-limit': { type: 'string', default: '20' } } });
  const batchSize = boundedInteger(values['batch-size'], 1, 1000, 'batch size');
  const sampleLimit = boundedInteger(values['sample-limit'], 1, 100, 'sample limit');
  const connectionString = process.env.PREFLIGHT_DATABASE_URL || process.env.AUDIT_DATABASE_URL;
  if (!connectionString) throw new Error('PREFLIGHT_DATABASE_URL or AUDIT_DATABASE_URL is required; no runtime fallback.');
  const client = new pg.Client({ ...databaseConfig(connectionString), connectionTimeoutMillis: 10000, statement_timeout: 60000 });
  try {
    await client.connect();
    await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
    await client.query("SET LOCAL TIME ZONE 'UTC'");
    await client.query('SET LOCAL row_security = off');
    const report = await preflight(client, { batchSize, sampleLimit });
    console.log(JSON.stringify(report, null, 2));
    if (report.issueCount) process.exitCode = 2;
  } finally {
    await client.query('ROLLBACK').catch(() => {});
    await client.end();
  }
}

if (isMain(import.meta.url)) main().catch(error => { console.error(error.message); process.exitCode = 1; });
