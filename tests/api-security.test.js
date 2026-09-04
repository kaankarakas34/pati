import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { randomBytes } from 'node:crypto';
import pg from 'pg';
import fs from 'node:fs';
import { initialHotels } from '../src/data/mockData.js';
import { getHotelPath } from '../lib/seo-slugs.js';

// Prevent initialization and any access to the real database or local credentials.
process.env.DOTENV_CONFIG_PATH = './tests/nonexistent.env';
process.env.VERCEL = '1';
process.env.AUTO_INIT_DATABASE = 'false';
process.env.DATABASE_URL = '';
process.env.ADMIN_TOKEN = randomBytes(32).toString('hex');
process.env.ADMIN_USERNAME = 'local-test-user';
process.env.ADMIN_PASSWORD = randomBytes(32).toString('hex');
const { default: app } = await import('../server.js');

test('actual API rejects unauthorized writes and validates all delete routes', async () => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const resource of ['hotels', 'boardings', 'guides', 'taxis', 'vets', 'experiences', 'ads']) {
      for (const token of ['', 'incorrect']) {
        const response = await fetch(`${base}/api/${resource}/hotel-1`, {
          method: 'DELETE', headers: { 'x-admin-token': token }
        });
        assert.equal(response.status, 401, resource);
        await response.text();
      }
      const invalid = await fetch(`${base}/api/${resource}/bad%27id`, {
        method: 'DELETE', headers: { 'x-admin-token': process.env.ADMIN_TOKEN }
      });
      assert.equal(invalid.status, 400, resource);
      await invalid.text();
      const write = await fetch(`${base}/api/${resource}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}'
      });
      assert.equal(write.status, 401, resource);
      assert.equal(write.headers.get('x-content-type-options'),'nosniff');
      await write.text();
    }
    for(const path of ['/api/admin/__proto__','/api/hotels/bad%27id','/api/hotels?limit=1000','/api/hotels?cursor=invalid']) {
      const invalid=await fetch(base+path,{headers:{'x-admin-token':process.env.ADMIN_TOKEN}});
      assert.equal(invalid.status,400,path);await invalid.text();
    }
    const scrape = await fetch(`${base}/api/scrape-hotel`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'http://127.0.0.1' })
    });
    assert.equal(scrape.status, 401);
    await scrape.text();
    const login = await fetch(`${base}/api/admin/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD })
    });
    assert.equal(login.status, 200);
    assert.equal((await login.json()).token, process.env.ADMIN_TOKEN);
  } finally {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});

test('write failures never expose database details in API responses', async (t) => {
  const privateDetail = 'PRIVATE_DATABASE_DETAILS internal-host SQL constraint stack';
  const queryMock = t.mock.method(pg.Pool.prototype, 'query', async () => { throw new Error(privateDetail); });
  t.mock.method(pg.Pool.prototype, 'connect', async () => { throw new Error(privateDetail); });
  const errorLog = t.mock.method(console, 'error', () => {});
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const resources = ['hotels', 'boardings', 'guides', 'taxis', 'vets', 'experiences', 'ads'];
    const requests = [
      ...resources.map(resource => ({ path: `/api/${resource}/test-id`, method: 'DELETE' })),
      ...[...resources, 'corrections', 'complaints', 'reviews'].map(resource => ({ path: `/api/${resource}`, method: 'POST' }))
    ];
    for (const request of requests) {
      const response = await fetch(base + request.path, {
        method: request.method,
        headers: { 'x-admin-token': process.env.ADMIN_TOKEN, 'Content-Type': 'application/json', 'If-Match':'1' },
        ...(request.method === 'POST' ? { body: JSON.stringify({name:'Test',title:'Test'}) } : {})
      });
      assert.equal(response.status, 500, request.path);
      assert.deepEqual(await response.json(), {
        ok: false, error: 'Islem su anda tamamlanamadi. Lutfen daha sonra tekrar deneyin.'
      });
    }
    assert.ok(queryMock.mock.callCount() >= 3);
    assert.equal(errorLog.mock.callCount(), 17);
    assert.ok(errorLog.mock.calls.some(call => call.arguments[1]?.message === privateDetail));
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test('malformed and oversized JSON gets a generic client error without stack traces', async () => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const [body, expectedStatus, expectedMessage] of [
      ['{"privateMarker":', 400, 'Gecersiz istek.'],
      [JSON.stringify({ value: 'x'.repeat(110 * 1024) }), 413, 'Istek boyutu siniri asildi.']
    ]) {
      const response = await fetch(`${base}/api/admin/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body
      });
      assert.equal(response.status, expectedStatus);
      assert.deepEqual(await response.json(), { error: expectedMessage });
    }
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test('template selection reads only fixed module-relative HTML files', async (t) => {
  let productionExists = true;
  t.mock.method(fs, 'existsSync', file => {
    assert.equal(file.href, new URL('../dist/index.html', import.meta.url).href);
    return productionExists;
  });
  const reads = [];
  t.mock.method(fs, 'readFileSync', (file, encoding) => {
    reads.push(file.href);
    assert.equal(encoding, 'utf8');
    return '<!doctype html><html><head><title>Template</title></head><body></body></html>';
  });
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const exists of [true, false]) {
      productionExists = exists;
      const response = await fetch(`${base}/yonetici?file=../../.env&template=C:/private/credentials`);
      assert.equal(response.status, 200);
      assert.equal(response.headers.get('x-content-type-options'),'nosniff');
      await response.text();
    }
    assert.deepEqual(reads, [
      new URL('../dist/index.html', import.meta.url).href,
      new URL('../index.html', import.meta.url).href
    ]);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test('legacy redirects retain canonical site-local destinations', async (t) => {
  t.mock.method(pg.Pool.prototype, 'query', async () => ({rows:[{...initialHotels[0],created_at:'2026-01-01T00:00:00Z'}]}));
  t.mock.method(console, 'warn', () => {});
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const [path, target] of [
      ['/accommodations', '/evcil-hayvan-dostu-oteller'],
      ['/gezilecek-yerler', '/evcil-hayvanla-gezilecek-yerler'],
      [`/otel/${encodeURIComponent(initialHotels[0].id)}`, getHotelPath(initialHotels[0])]
    ]) {
      const response = await fetch(`${base}${path}?next=https://attacker.example`, { redirect: 'manual' });
      assert.equal(response.status, 301);
      assert.equal(response.headers.get('location'), target);
      await response.text();
    }
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
