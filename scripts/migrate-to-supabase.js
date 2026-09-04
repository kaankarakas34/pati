import 'dotenv/config';
import pg from 'pg';
import format from 'pg-format';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { parseArgs } from 'node:util';
import { databaseConfig } from '../lib/database-config.js';
import { placeTables } from '../lib/catalog-schema.js';
import { LEGACY_TABLES, columnsFor, selectColumns, keysetRows, preflight, validDate, boundedInteger, isMain } from './database-preflight.js';

const migrationName = '20260904170923_database_integrity.sql';
const targetTables = [...LEGACY_TABLES, 'places', 'locations', 'profiles', 'favorites', 'place_sources'];

export function transformLegacyRow(table, row) {
  const result = { ...row };
  if (placeTables.includes(table)) {
    result.verification_note = row.last_verified;
    result.last_verified = validDate(row.last_verified) ? row.last_verified : null;
    result.city = row.city.trim();
    result.district = row.district.trim();
  }
  if (['corrections', 'complaints', 'reviews'].includes(table) && !row.created_at) result.created_at = `${row.date}T00:00:00.000Z`;
  return result;
}

export async function assertPreparedTarget(target) {
  const sql = await readFile(new URL(`../supabase/migrations/${migrationName}`, import.meta.url), 'utf8');
  const checksum = createHash('sha256').update(sql).digest('hex');
  const applied = await target.query('SELECT checksum FROM private.app_migrations WHERE name=$1', [migrationName]);
  if (applied.rows[0]?.checksum !== checksum) throw new Error('Target must have the matching, separately applied integrity migration.');
  for (const table of targetTables) {
    const result = await target.query(format('SELECT 1 FROM public.%I LIMIT 1', table));
    if (result.rows.length) throw new Error(`Target ${table} is not empty; use a new empty target.`);
  }
}

export async function copyTable(source, target, table, batchSize) {
  if (!LEGACY_TABLES.includes(table)) throw new Error('Unsupported legacy table.');
  const sourceColumns = await columnsFor(source, table);
  const targetColumns = await columnsFor(target, table);
  if (sourceColumns.some(c => ['verification_note', 'location_id', 'user_id'].includes(c.column_name))) throw new Error(`${table}: source is not a legacy schema; new-schema data needs a separate migration.`);
  const allowed = new Set(targetColumns.filter(c => c.is_generated === 'NEVER').map(c => c.column_name));
  const columns = sourceColumns.map(c => c.column_name);
  if (placeTables.includes(table)) columns.push('verification_note');
  if (['corrections', 'complaints', 'reviews'].includes(table) && !columns.includes('created_at')) columns.push('created_at');
  if (columns.some(c => !allowed.has(c))) throw new Error(`${table}: unmapped source columns; refusing data loss.`);
  const fields = columns.map(c => format('%I', c)).join(',');
  const jsonFields = sourceColumns.filter(c => ['json', 'jsonb'].includes(c.data_type)).map(c => c.column_name);
  // Carry raw JSON as text across JavaScript, then parse it in PostgreSQL so
  // integers/decimals beyond JavaScript's numeric precision remain exact.
  const payloadCte = jsonFields.length ? format(`WITH copy_payload AS (
    SELECT jsonb_agg(item || jsonb_build_object(%s)) AS payload
    FROM jsonb_array_elements($1::jsonb) AS input(item))`,
  jsonFields.map(c => format('%L,(item->>%L)::jsonb', c, c)).join(','))
    : 'WITH copy_payload AS (SELECT $1::jsonb AS payload)';
  const typedRows = format('jsonb_populate_recordset(NULL::public.%I,(SELECT payload FROM copy_payload))', table);
  let copied = 0;
  for await (const rows of keysetRows(source, table, batchSize, selectColumns(sourceColumns, true))) {
    const payload = JSON.stringify(rows.map(row => transformLegacyRow(table, row)));
    // Target type conversion is explicit; omitted columns keep their defaults.
    const inserted = await target.query(payloadCte + format(` INSERT INTO public.%I (%s)
      SELECT %s FROM %s`, table, fields, fields, typedRows), [payload]);
    if (inserted.rowCount !== rows.length) throw new Error(`${table}: insert count mismatch.`);
    if (table === 'hotels') {
      await target.query(`INSERT INTO public.place_sources(provider,external_id,place_id)
        SELECT split_part(id,'-',1),substring(id from position('-' in id)+1),id
        FROM public.hotels WHERE id=ANY($1::text[]) AND id ~ '^(enuygun|otelz)-.+'`,[rows.map(row=>row.id)]);
    }
    const equality = columns.map(c => placeTables.includes(table) && ['city', 'district'].includes(c)
      ? format('private.slug(actual.%I) IS NOT DISTINCT FROM private.slug(expected.%I)', c, c)
      : format('actual.%I IS NOT DISTINCT FROM expected.%I', c, c)).join(' AND ');
    const verified = await target.query(payloadCte + format(` SELECT count(*)::int AS count
      FROM %s expected JOIN public.%I actual ON actual.id=expected.id WHERE %s`, typedRows, table, equality), [payload]);
    if (verified.rows[0].count !== rows.length) throw new Error(`${table}: copied value validation failed.`);
    copied += rows.length;
  }
  const count = await target.query(format('SELECT count(*)::text AS count FROM public.%I', table));
  if (count.rows[0].count !== String(copied)) throw new Error(`${table}: final count mismatch.`);
  return copied;
}

export async function migrate(source, target, { apply = false, batchSize = 250 } = {}) {
  boundedInteger(batchSize, 1, 1000, 'batch size');
  await source.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
  try {
    await source.query("SET LOCAL TIME ZONE 'UTC'");
    await source.query('SET LOCAL row_security = off');
    await target.query(apply ? 'BEGIN' : 'BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
    try {
      await target.query("SET LOCAL TIME ZONE 'UTC'");
      await target.query("SET LOCAL lock_timeout = '5s'");
      await target.query('SET LOCAL row_security = off');
      if (apply) {
        await target.query('SELECT pg_advisory_xact_lock(73024119)');
        await target.query({
          text: format('LOCK TABLE %s IN EXCLUSIVE MODE', targetTables.map(t => format('public.%I', t)).join(',')),
          values: []
        });
      }
      await assertPreparedTarget(target);
      const report = await preflight(source, { batchSize });
      if (report.issueCount) throw new Error(`Source preflight found ${report.issueCount} issues; run database-preflight.js for details.`);
      if (!apply) {
        await target.query('ROLLBACK');
        return { applied: false, report, note: 'No copy attempted. Target constraint validation requires an isolated rehearsal.' };
      }
      const counts = {};
      for (const table of LEGACY_TABLES) {
        counts[table] = await copyTable(source, target, table, batchSize);
        if (counts[table] !== report.counts[table]) throw new Error(`${table}: source snapshot count mismatch.`);
      }
      await target.query('SET CONSTRAINTS ALL IMMEDIATE');
      const validation = await preflight(target, { batchSize });
      if (validation.issueCount) throw new Error(`Target preflight found ${validation.issueCount} issues before commit.`);
      await target.query('COMMIT');
      return { applied: true, counts };
    } catch (error) {
      await target.query('ROLLBACK').catch(() => {});
      throw error;
    }
  } finally {
    await source.query('ROLLBACK');
  }
}

async function main() {
  const { values } = parseArgs({ options: { apply: { type: 'boolean', default: false }, 'batch-size': { type: 'string', default: '250' } } });
  const batchSize = boundedInteger(values['batch-size'], 1, 1000, 'batch size');
  const sourceUrl = process.env.SOURCE_DATABASE_URL;
  const targetUrl = process.env.MIGRATION_DATABASE_URL;
  if (!sourceUrl || !targetUrl) throw new Error('SOURCE_DATABASE_URL and MIGRATION_DATABASE_URL are required; no runtime fallback.');
  const sourceIdentity = new URL(sourceUrl);
  const targetIdentity = new URL(targetUrl);
  if (sourceIdentity.hostname === targetIdentity.hostname && (sourceIdentity.port || '5432') === (targetIdentity.port || '5432') && sourceIdentity.pathname === targetIdentity.pathname) throw new Error('Source and target must be different databases.');
  const options = { connectionTimeoutMillis: 10000, statement_timeout: 60000 };
  const source = new pg.Client({ ...databaseConfig(sourceUrl), ...options });
  const target = new pg.Client({ ...databaseConfig(targetUrl), ...options });
  try {
    await source.connect();
    await target.connect();
    console.log(JSON.stringify(await migrate(source, target, { apply: values.apply, batchSize }), null, 2));
  } finally {
    await source.end();
    await target.end();
  }
}

if (isMain(import.meta.url)) main().catch(error => {
  console.error(JSON.stringify({ applied: false, error: error.message, code: error.code }));
  process.exitCode = 1;
});
