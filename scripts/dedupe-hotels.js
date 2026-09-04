import 'dotenv/config';
import { parseArgs } from 'node:util';
import { recordId } from '../lib/input.js';
import { boundedInteger, isMain } from './database-preflight.js';

export function mergeRequest(values) {
  const keeperId = recordId(values['keeper-id']);
  const duplicateId = recordId(values['duplicate-id']);
  if (keeperId === duplicateId) throw new Error('Keeper and duplicate IDs must differ.');
  return {
    keeperId, duplicateId,
    keeperVersion: boundedInteger(values['keeper-version'], 1, 2147483647, 'keeper version'),
    duplicateVersion: boundedInteger(values['duplicate-version'], 1, 2147483647, 'duplicate version')
  };
}

export async function dedupe(values, { env = process.env, fetchImpl = fetch } = {}) {
  const body = mergeRequest(values);
  const endpoint = '/api/admin/hotels/merge';
  if (!values.apply) return { applied: false, method: 'POST', endpoint, body, note: 'Explicit pair only. Re-read current versions before --apply; deployment must include the merge endpoint.' };
  if (!env.API_URL || !env.ADMIN_TOKEN) throw new Error('API_URL and ADMIN_TOKEN are required for --apply.');
  const url = new URL(env.API_URL);
  if (url.username || url.password || url.search || url.hash || url.pathname !== '/') throw new Error('API_URL must be an origin without credentials.');
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname))) throw new Error('API_URL must use HTTPS except on loopback.');
  const response = await fetchImpl(new URL(endpoint, url), {
    method: 'POST', redirect: 'error', signal: AbortSignal.timeout(15000),
    headers: { 'Content-Type': 'application/json', 'x-admin-token': env.ADMIN_TOKEN },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error(`Merge failed (HTTP ${response.status}); no fallback or automatic retry. Re-read both records before another attempt.`);
  return { applied: true, body };
}

async function main() {
  const { values } = parseArgs({ options: {
    apply: { type: 'boolean', default: false },
    'keeper-id': { type: 'string' }, 'duplicate-id': { type: 'string' },
    'keeper-version': { type: 'string' }, 'duplicate-version': { type: 'string' }
  } });
  console.log(JSON.stringify(await dedupe(values), null, 2));
}

if (isMain(import.meta.url)) main().catch(error => { console.error(error.message); process.exitCode = 1; });
