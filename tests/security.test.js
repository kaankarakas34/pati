import test from 'node:test';
import assert from 'node:assert/strict';
import { databaseConfig, databaseTls } from '../lib/database-config.js';
import { matchesSecret, validateRecordId } from '../lib/admin-security.js';
import { isPublicAddress, resolvePublicUrl, getPublicUrl } from '../lib/public-http.js';
import { migrationSql, TABLES } from '../lib/migration-sql.js';
import pg from 'pg';
import axios from 'axios';

test('remote PostgreSQL always verifies certificates, including URL overrides', () => {
  for (const suffix of ['', '?sslmode=no-verify', '?sslmode=disable&sslcert=bad&sslkey=bad&sslrootcert=bad', '?host=localhost&sslmode=require']) {
    const config = databaseConfig('postgresql://user@example.com/db' + suffix, {});
    assert.equal(config.ssl.rejectUnauthorized, true);
    assert.equal(new pg.Client(config).connectionParameters.ssl.rejectUnauthorized, true);
    assert.equal(new URL(config.connectionString).search, '');
  }
  assert.equal(databaseConfig('postgresql://localhost.attacker.com/pati_db', {}).ssl.rejectUnauthorized, true);
  assert.equal(databaseConfig('postgresql://localhost@example.com/db', {}).ssl.rejectUnauthorized, true);
  assert.equal(databaseConfig('postgresql://user@localhost:5436/db', {}).ssl, false);
  assert.equal(databaseConfig(undefined, {}).password, undefined);
  assert.throws(() => databaseConfig('https://example.com/db', {}));
  assert.throws(() => databaseTls({ DATABASE_SSL_CA_FILE: './does-not-exist.pem' }));
});

test('admin secrets fail closed when missing or malformed', () => {
  for (const [provided, expected] of [[undefined, undefined], ['', ''], ['', 'token'], ['wrong', 'token'], [[], 'token']]) {
    assert.equal(matchesSecret(provided, expected), false);
  }
  assert.equal(matchesSecret('correct-token', 'correct-token'), true);
});

test('delete ID validation accepts existing IDs and rejects hostile or oversized IDs', () => {
  for (const id of ['hotel-123', 'exp-1', '93ef86b7-8827-47fc-8ee6-326da980452c', '1']) {
    const res = { locals: {} };
    let called = false;
    validateRecordId({ params: { id } }, res, () => { called = true; });
    assert.equal(called, true);
    assert.equal(res.locals.recordId, id);
  }
  for (const id of ['', '../secret', "1' OR '1'='1", 'a'.repeat(101), undefined, ['id'], 'id\n']) {
    const res = { locals: {}, status(code) { assert.equal(code, 400); return this; }, json() {} };
    validateRecordId({ params: { id } }, res, () => assert.fail('Invalid ID reached handler'));
    assert.equal(res.locals.recordId, undefined);
  }
});

test('SSRF blocks private, loopback, link-local and mapped IPv6 addresses', async () => {
  for (const address of ['127.0.0.1', '10.0.0.1', '172.16.0.1', '192.168.1.1', '169.254.169.254', '0.0.0.0', '100.64.0.1', '::1', '::', 'fc00::1', 'fe80::1', '::ffff:127.0.0.1']) {
    assert.equal(isPublicAddress(address), false, address);
  }
  for (const url of ['file:///etc/passwd', 'http://user:password@example.com', 'http://example.com:22', 'http://2130706433', 'http://[::ffff:127.0.0.1]', 'http://169.254.169.254/latest/meta-data']) {
    await assert.rejects(resolvePublicUrl(url), undefined, url);
  }
  await assert.rejects(getPublicUrl('http://127.0.0.1:80'));
});

test('SSRF rejects internal DNS and mixed answers, returns vetted public results', async () => {
  const publicIp = { address: '93.184.216.34', family: 4 };
  for (const addresses of [[], [{ address: '127.0.0.1', family: 4 }], [publicIp, { address: '::1', family: 6 }]]) {
    await assert.rejects(resolvePublicUrl('https://example.com', async () => addresses));
  }
  const resolved = await resolvePublicUrl('https://example.com/path', async () => [publicIp]);
  assert.deepEqual(resolved.addresses, [publicIp]);
  assert.equal(resolved.url.href, 'https://example.com/path');
});

test('migration SQL restricts identifiers and keeps values parameterized', () => {
  for (const table of TABLES) {
    const queries = migrationSql(table, ['id', 'content']);
    assert.match(queries.insert, /VALUES \(\$1, \$2\)$/);
    assert.ok(queries.enableRls.endsWith('ENABLE ROW LEVEL SECURITY'));
    assert.match(queries.select, /ORDER BY id LIMIT \$1$/);
    assert.ok(!queries.select.includes('*'));
  }
  assert.throws(() => migrationSql('hotels; DROP TABLE hotels'));
  assert.throws(() => migrationSql('pg_authid'));
  assert.throws(() => migrationSql('hotels', ['id) VALUES (1); --']));
  assert.throws(() => migrationSql('hotels', ['id\n']));
  assert.ok(TABLES.includes('ad_applications'));
});

test('HTTP transport pins DNS, disables redirects/proxies and caps response size', async (t) => {
  t.mock.method(axios, 'get', async (url, options) => {
    assert.equal(url, 'https://93.184.216.34/path');
    assert.equal(options.maxRedirects, 0);
    assert.equal(options.proxy, false);
    assert.equal(options.maxContentLength, 2 * 1024 * 1024);
    assert.equal(options.httpsAgent.options.rejectUnauthorized, true);
    const addresses = await new Promise((resolve, reject) => {
      options.httpsAgent.options.lookup('attacker.example', { all: true }, (err, result) => err ? reject(err) : resolve(result));
    });
    assert.deepEqual(addresses, [{ address: '93.184.216.34', family: 4 }]);
    return { status: 200, data: 'ok' };
  });
  const result = await getPublicUrl('https://93.184.216.34/path');
  assert.equal(result.data, 'ok');
});
