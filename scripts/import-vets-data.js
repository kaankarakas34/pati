import 'dotenv/config';
import { readFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { parseArgs } from 'node:util';
import pg from 'pg';
import { databaseConfig } from '../lib/database-config.js';
import { boundedInteger, isMain, validDate } from './database-preflight.js';

const districtCities = {
  Bodrum: ['Mu\u011fla', 'Bodrum'], Fethiye: ['Mu\u011fla', 'Fethiye'], Marmaris: ['Mu\u011fla', 'Marmaris'],
  Alanya: ['Antalya', 'Alanya'], 'Ku\u015fadas\u0131': ['Ayd\u0131n', 'Ku\u015fadas\u0131'],
  'Ala\u00e7at\u0131': ['\u0130zmir', '\u00c7e\u015fme'], '\u00c7e\u015fme': ['\u0130zmir', '\u00c7e\u015fme'],
  Sapanca: ['Sakarya', 'Sapanca'], 'Ayval\u0131k': ['Bal\u0131kesir', 'Ayval\u0131k']
};
function text(value, max, label, required = false) {
  if (value == null && !required) return '';
  if (typeof value !== 'string' || value.trim().length > max || (required && !value.trim())) throw new Error(`Invalid ${label}.`);
  return value.trim();
}

export function prepareVets(data, provider) {
  if (!data || typeof data !== 'object') throw new Error('Input must be an array or an object of location arrays.');
  const groups = Array.isArray(data) ? [['', data]] : Object.entries(data);
  const identities = new Set();
  const prepared = [];
  for (const [location, items] of groups) {
    if (!Array.isArray(items)) throw new Error(`Location ${location} must contain an array.`);
    for (const item of items) {
      if (!item || typeof item !== 'object' || Array.isArray(item)) throw new Error('Invalid vet item.');
      const source = {
        provider: text(item.source?.provider || provider, 80, 'source provider', true),
        externalId: text(item.source?.externalId || item.placeId || item.place_id || item.externalId, 255, 'stable source external ID', true)
      };
      const identity = JSON.stringify([source.provider, source.externalId]);
      if (identities.has(identity)) throw new Error('Repeated source identity in input; reconcile it explicitly.');
      identities.add(identity);
      const [defaultCity, defaultDistrict] = districtCities[location] || [location, location];
      const city = text(item.city || defaultCity, 100, 'city', true);
      const district = text(item.district || defaultDistrict, 100, 'district', true);
      const features = item.features ?? [];
      if (!Array.isArray(features) || features.length > 200 || features.some(f => typeof f !== 'string') || Buffer.byteLength(JSON.stringify(features)) > 11000) throw new Error('Invalid features array.');
      const score = item.baseTrustScore ?? 0;
      if (typeof score !== 'number' || !Number.isFinite(score) || score < 0 || score > 10) throw new Error('Invalid baseTrustScore.');
      const verification = text(item.lastVerified, 255, 'lastVerified');
      if (/^\d{4}-\d{2}-\d{2}$/.test(verification) && !validDate(verification)) throw new Error('Invalid lastVerified date.');
      prepared.push({
        id: 'vet-' + createHash('sha256').update(identity).digest('hex'), source,
        name: text(item.name || item.title, 255, 'name', true), city, district,
        imageUrl: text(item.imageUrl, 2000, 'image URL'), address: text(item.address, 5000, 'address'), features,
        description: text(item.description, 12000, 'description'), phone: text(item.phone, 255, 'phone'),
        email: text(item.email, 255, 'email'), website: text(item.website, 2000, 'website'),
        baseTrustScore: score, lastVerified: validDate(verification) ? verification : null, verificationNote: verification
      });
    }
  }
  return prepared;
}

export async function importVets(client, records, batchSize = 100) {
  boundedInteger(batchSize, 1, 500, 'batch size');
  const counts = { inserted: 0, existing: 0, committedBatches: 0 };
  // A stable lock order also serializes concurrent imports of the same identities.
  const ordered = [...records].sort((a, b) => a.id.localeCompare(b.id));
  for (let offset = 0; offset < ordered.length; offset += batchSize) {
    const batch = ordered.slice(offset, offset + batchSize);
    let inserted = 0;
    let existing = 0;
    await client.query('BEGIN');
    try {
      await client.query("SET LOCAL lock_timeout = '5s'");
      for (const v of batch) {
        await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))', [v.id]);
        const found = await client.query(`SELECT s.place_id,v.id FROM public.place_sources s
          LEFT JOIN public.vets v ON v.id=s.place_id WHERE s.provider=$1 AND s.external_id=$2`, [v.source.provider, v.source.externalId]);
        if (found.rows.length) {
          if (!found.rows[0].id) throw new Error('Source identity belongs to another catalog or an orphan place.');
          existing++;
          continue;
        }
        await client.query(`INSERT INTO public.vets
          (id,name,city,district,image_url,address,features,description,phone,email,website,base_trust_score,last_verified,verification_note)
          VALUES ($1,$2,$3,$4,$5,$6,$7::jsonb,$8,$9,$10,$11,$12,$13,$14)`,
        [v.id,v.name,v.city,v.district,v.imageUrl,v.address,JSON.stringify(v.features),v.description,v.phone,v.email,v.website,v.baseTrustScore,v.lastVerified,v.verificationNote]);
        await client.query('INSERT INTO public.place_sources(provider,external_id,place_id) VALUES($1,$2,$3)', [v.source.provider,v.source.externalId,v.id]);
        inserted++;
      }
      await client.query('SET CONSTRAINTS ALL IMMEDIATE');
      await client.query('COMMIT');
      counts.inserted += inserted;
      counts.existing += existing;
      counts.committedBatches++;
    } catch (error) {
      await client.query('ROLLBACK').catch(() => {});
      error.committed = counts;
      throw error;
    }
  }
  return counts;
}

async function main() {
  const { values } = parseArgs({ options: {
    input: { type: 'string' }, provider: { type: 'string' }, apply: { type: 'boolean', default: false },
    'batch-size': { type: 'string', default: '100' }
  } });
  const batchSize = boundedInteger(values['batch-size'], 1, 500, 'batch size');
  if (!values.input) throw new Error('--input is required.');
  if ((await stat(values.input)).size > 32 * 1024 * 1024) throw new Error('Input exceeds 32 MiB; split the source file.');
  const input = await readFile(values.input, 'utf8');
  if (Buffer.byteLength(input) > 32 * 1024 * 1024) throw new Error('Input exceeds 32 MiB.');
  const records = prepareVets(JSON.parse(input), values.provider);
  if (!values.apply) {
    console.log(JSON.stringify({ applied: false, prepared: records.length, sampleIds: records.slice(0, 10).map(v => v.id), note: 'Source identities required; database conflicts are checked only during apply.' }, null, 2));
    return;
  }
  if (!process.env.IMPORT_DATABASE_URL) throw new Error('IMPORT_DATABASE_URL is required for --apply.');
  const client = new pg.Client({ ...databaseConfig(process.env.IMPORT_DATABASE_URL), options: '-c role=pati_api', connectionTimeoutMillis: 10000, statement_timeout: 30000 });
  try {
    await client.connect();
    console.log(JSON.stringify({ applied: true, ...await importVets(client, records, batchSize) }));
  } finally { await client.end(); }
}

if (isMain(import.meta.url)) main().catch(error => {
  console.error(JSON.stringify({ error: error.message, committed: error.committed }));
  process.exitCode = 1;
});
