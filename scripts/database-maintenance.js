import 'dotenv/config';
import pg from 'pg';
import format from 'pg-format';
import { parseArgs } from 'node:util';
import { databaseConfig } from '../lib/database-config.js';
import { boundedInteger, isMain } from './database-preflight.js';

export function retentionPolicies(values, now = new Date()) {
  const policies = [];
  for (const status of ['rejected', 'pending']) {
    if (values[`${status}-days`] === undefined) continue;
    const days = boundedInteger(values[`${status}-days`], 1, 36500, `${status} retention days`);
    for (const table of ['corrections', 'complaints', 'reviews']) policies.push({
      schema: 'public', table, key: 'id', date: 'created_at', status,
      cutoff: new Date(now.getTime() - days * 86400000).toISOString(), modified: true
    });
  }
  if (values['ad-application-days'] !== undefined) {
    const days = boundedInteger(values['ad-application-days'], 1, 36500, 'ad application retention days');
    policies.push({ schema: 'public', table: 'ad_applications', key: 'id', date: 'created_at', cutoff: new Date(now.getTime() - days * 86400000).toISOString(), modified: true });
  }
  if (values['expired-rate-limits']) policies.push({ schema: 'private', table: 'submission_limits', key: 'key_hash', date: 'window_start', cutoff: new Date(now.getTime() - 3600000).toISOString() });
  if (!policies.length) throw new Error('Select --rejected-days, --pending-days, --ad-application-days or --expired-rate-limits explicitly.');
  return policies;
}

export function retentionQuery(policy, batchSize, cursor, apply) {
  const { schema, table, key, date, cutoff, status, modified } = policy;
  const allowed = table === 'submission_limits' ? schema === 'private' && key === 'key_hash' && date === 'window_start' :
    ['corrections', 'complaints', 'reviews', 'ad_applications'].includes(table) && schema === 'public' && key === 'id' && date === 'created_at';
  if (!allowed || (table !== 'ad_applications' && table !== 'submission_limits' && !['rejected', 'pending'].includes(status))) throw new Error('Unsupported retention policy.');
  boundedInteger(batchSize, 1, 1000, 'batch size');
  const values = [cutoff, batchSize];
  const where = [format('%I < $1::timestamptz', date)];
  if (modified) where.push('modified_at < $1::timestamptz');
  if (status) { values.push(status); where.push('status=$' + values.length); }
  if (cursor) {
    values.push(cursor.at, cursor.id);
    where.push(format('(%I,%I) > ($%s::timestamptz,$%s)', date, key, values.length - 1, values.length));
  }
  const selection = format('SELECT %I AS id,%I::text AS at FROM %I.%I WHERE %s ORDER BY %I,%I LIMIT $2', key, date, schema, table, where.join(' AND '), date, key);
  if (!apply) return { text: selection, values };
  return { text: format(`WITH candidates AS (%s FOR UPDATE SKIP LOCKED), deleted AS (
    DELETE FROM %I.%I target USING candidates WHERE target.%I=candidates.id RETURNING target.%I
    ) SELECT count(*)::int AS count FROM deleted`, selection, schema, table, key, key), values };
}

export async function maintain(client, policies, { apply = false, batchSize = 250, maxBatches = 20 } = {}) {
  boundedInteger(batchSize, 1, 1000, 'batch size');
  boundedInteger(maxBatches, 1, 1000, 'max batches');
  const reports = [];
  for (const policy of policies) {
    const report = { table: `${policy.schema}.${policy.table}`, status: policy.status, cutoff: policy.cutoff, matched: 0, deleted: 0, sampleIds: [], capped: false };
    reports.push(report);
    let cursor;
    for (let batch = 0; batch < maxBatches; batch++) {
      await client.query(apply ? 'BEGIN' : 'BEGIN READ ONLY');
      try {
        await client.query("SET LOCAL lock_timeout = '5s'");
        const query = retentionQuery(policy, batchSize, cursor, apply);
        const result = await client.query(query.text, query.values);
        const count = apply ? result.rows[0].count : result.rows.length;
        await client.query(apply ? 'COMMIT' : 'ROLLBACK');
        report.matched += count;
        if (apply) report.deleted += count;
        else {
          report.sampleIds.push(...result.rows.slice(0, Math.max(0, 10 - report.sampleIds.length)).map(row => row.id));
          const last = result.rows.at(-1);
          if (last) cursor = last;
        }
        if (count < batchSize) break;
        if (batch === maxBatches - 1) report.capped = true;
      } catch (error) {
        await client.query('ROLLBACK').catch(() => {});
        error.progress = reports;
        throw error;
      }
    }
  }
  return { applied: apply, reports, note: 'Counts are bounded observations. Concurrent edits and locked rows may require another run.' };
}

async function main() {
  const { values } = parseArgs({ options: {
    apply: { type: 'boolean', default: false }, 'batch-size': { type: 'string', default: '250' }, 'max-batches': { type: 'string', default: '20' },
    'rejected-days': { type: 'string' }, 'pending-days': { type: 'string' }, 'ad-application-days': { type: 'string' }, 'expired-rate-limits': { type: 'boolean', default: false }
  } });
  const policies = retentionPolicies(values);
  const batchSize = boundedInteger(values['batch-size'], 1, 1000, 'batch size');
  const maxBatches = boundedInteger(values['max-batches'], 1, 1000, 'max batches');
  if (!process.env.MAINTENANCE_DATABASE_URL) throw new Error('MAINTENANCE_DATABASE_URL is required.');
  const client = new pg.Client({ ...databaseConfig(process.env.MAINTENANCE_DATABASE_URL), connectionTimeoutMillis: 10000, statement_timeout: 30000 });
  try {
    await client.connect();
    console.log(JSON.stringify(await maintain(client, policies, { apply: values.apply, batchSize, maxBatches }), null, 2));
  } finally { await client.end(); }
}

if (isMain(import.meta.url)) main().catch(error => {
  console.error(JSON.stringify({ error: error.message, progress: error.progress }));
  process.exitCode = 1;
});
