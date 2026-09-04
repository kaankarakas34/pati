import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';
import { pg_trgm } from '@electric-sql/pglite/contrib/pg_trgm';
import { JSDOM } from 'jsdom';
import { applyMigrations } from '../lib/migrations.js';
import { slugify } from '../lib/seo-slugs.js';
import { LEGACY_TABLES, legacySlugSql, preflight, rowIssues, validDate } from '../scripts/database-preflight.js';
import { migrate, transformLegacyRow } from '../scripts/migrate-to-supabase.js';
import { dedupe } from '../scripts/dedupe-hotels.js';
import { prepareVets, importVets } from '../scripts/import-vets-data.js';
import { retentionPolicies, retentionQuery, maintain } from '../scripts/database-maintenance.js';
import { generateSitemaps, siteOrigin, xmlEscape } from '../scripts/build-sitemaps.js';

function memoryDatabase(observe = () => {}) {
  const db = new PGlite({ extensions: { pg_trgm } });
  // Match the existing PGlite adapter, including pg's query-config overload.
  const client = { query: async (query, values) => {
    const text = typeof query === 'string' ? query : query.text;
    const parameters = typeof query === 'string' ? values : query.values;
    observe(query, parameters);
    return parameters?.length ? db.query(text, parameters) : ((await db.exec(text)).at(-1) || { rows: [] });
  } };
  return { db, client };
}

const vetInput = externalId => ({ title: `Clinic ${externalId}`, city: 'City', district: 'Town', placeId: externalId });

test('operation exports validate input, preserve source identity and preview merge without network', async () => {
  assert.equal(LEGACY_TABLES.length, 11);
  assert.ok(LEGACY_TABLES.includes('ad_applications'));
  assert.equal(validDate('2024-02-29'), true);
  assert.equal(validDate('2026-02-29'), false);
  const transformed = transformLegacyRow('vets', { last_verified: 'Unverified', city: ' City ', district: ' Town ' });
  assert.equal(transformed.last_verified, null);
  assert.equal(transformed.verification_note, 'Unverified');
  const jsonColumns = ['rules', 'booking_links'].map(column_name => ({ column_name, data_type: 'jsonb' }));
  assert.deepEqual(rowIssues('hotels', { rules: {}, booking_links: {}, city: 'City', district: 'Town' }, jsonColumns), []);
  assert.ok(rowIssues('hotels', { rules: [], booking_links: {}, city: 'City', district: 'Town' }, jsonColumns).length);
  assert.ok(rowIssues('guides', { author: [] }, [{ column_name: 'author', data_type: 'jsonb' }]).length);
  assert.ok(rowIssues('guides', { faq: null, __sql_null_faq: false }, [{ column_name: 'faq', data_type: 'jsonb' }]).length);

  const [vet] = prepareVets([vetInput('stable')], 'google_maps');
  const [renamed] = prepareVets([{ ...vetInput('stable'), title: 'Renamed clinic' }], 'google_maps');
  assert.equal(vet.id, renamed.id);
  assert.deepEqual(vet.features, []);
  assert.equal(vet.baseTrustScore, 0);
  assert.equal(vet.lastVerified, null);
  assert.throws(() => prepareVets([{ title: 'Missing identity' }], 'google_maps'));
  assert.throws(() => prepareVets([vetInput('same'), vetInput('same')], 'google_maps'));
  assert.throws(() => retentionPolicies({}));
  const [policy] = retentionPolicies({ 'pending-days': '30' }, new Date('2026-09-04T00:00:00Z'));
  assert.doesNotMatch(retentionQuery(policy, 2, null, false).text, /DELETE/);
  assert.match(retentionQuery(policy, 2, null, true).text, /FOR UPDATE SKIP LOCKED/);
  assert.throws(() => retentionQuery({ ...policy, table: 'hotels' }, 2, null, true));

  const pair = { 'keeper-id': 'keeper', 'duplicate-id': 'duplicate', 'keeper-version': '1', 'duplicate-version': '2' };
  const preview = await dedupe(pair, { fetchImpl: () => assert.fail('Preview must not access the network') });
  assert.equal(preview.applied, false);
  let calls = 0;
  const env = { API_URL: 'https://example.test', ADMIN_TOKEN: 'test-only' };
  await dedupe({ ...pair, apply: true }, { env, fetchImpl: async (url, options) => {
    calls++;
    assert.equal(url.pathname, '/api/admin/hotels/merge');
    assert.equal(options.method, 'POST');
    assert.equal(options.redirect, 'error');
    assert.deepEqual(JSON.parse(options.body), { keeperId: 'keeper', duplicateId: 'duplicate', keeperVersion: 1, duplicateVersion: 2 });
    return { ok: true };
  } });
  assert.equal(calls, 1);
  calls = 0;
  await assert.rejects(dedupe({ ...pair, apply: true }, { env, fetchImpl: async () => {
    calls++;
    return { ok: false, status: 409 };
  } }), /409/);
  assert.equal(calls, 1, 'Conflicts must not trigger a retry or delete fallback');
  assert.equal(xmlEscape('A&B<C'), 'A&amp;B&lt;C');
  assert.throws(() => siteOrigin('https://example.test/path'));
});

test('legacy migration audits all eleven tables, rolls back failures and preserves exact values', async () => {
  let aggregateQueries = 0;
  let tableLocks = 0;
  const source = memoryDatabase(query => {
    if (typeof query === 'object' && query.text.includes('count(*) OVER()')) {
      aggregateQueries++;
      assert.match(query.text, /LIMIT \$1$/);
      assert.deepEqual(query.values, [20]);
    }
  });
  const target = memoryDatabase(query => {
    if (typeof query === 'object' && query.text.startsWith('LOCK TABLE ')) {
      tableLocks++;
      assert.deepEqual(query.values, []);
      assert.match(query.text, /public\.ad_applications/);
      assert.match(query.text, / IN EXCLUSIVE MODE$/);
    }
  });
  try {
    const sql = await readFile(new URL('../supabase/migrations/20260904170923_database_integrity.sql', import.meta.url), 'utf8');
    const baselineEnd = sql.indexOf('-- Existing invalid');
    assert.ok(baselineEnd > 0, 'Legacy fixture requires the migration baseline boundary');
    await source.db.exec(sql.slice(0, baselineEnd));
    await target.db.exec(sql.slice(0, baselineEnd));
    await target.db.exec('CREATE INDEX ad_applications_created_idx ON public.ad_applications(created_at)');
    await applyMigrations(target.client);
    await target.db.exec("SET TIME ZONE 'UTC'");
    assert.deepEqual((await target.db.query(`SELECT
      to_regclass('public.ad_applications_created_idx') IS NULL AS old_removed,
      to_regclass('public.ad_applications_page_idx') IS NOT NULL AS replacement_exists`)).rows[0], { old_removed: true, replacement_exists: true });
    for (const name of ["\u00c7e\u015fme'de Ch\u00e2teau \u00d6l\u00fcdeniz", 'L\u2019h\u00f4tel & Caf\u00e9', '\u0130stanbul I\u011eDIR']) {
      const result = await target.db.query('SELECT private.slug(value) AS current,' + legacySlugSql('value') + ' AS legacy FROM (SELECT $1::text AS value) input', [name]);
      assert.deepEqual(result.rows[0], { current: slugify(name), legacy: slugify(name) });
    }
    await source.db.exec(`
      INSERT INTO hotels(id,name,city,district,type,allowed_pets,suitability,weight_limit,extra_fee,features,quiz_tags,base_trust_score,last_verified,image_url,description,rules,booking_links)
      VALUES ('h1','Hotel Alpha','City','Town','Hotel','[]',3,10,'no','[]','[]',5,'Unverified','','Test','{}','{}'),
             ('h2','Hotel Beta','CITY','TOWN','Hotel','[]',3,10,'no','[]','[]',5,'2026-09-01','','Test','{}','{}');
      INSERT INTO vets(id,name,city,district,image_url,address,features,description,base_trust_score,last_verified)
      VALUES ('v1','Clinic','City','Town','','','[]','',0,'Unverified'),('v2','Clinic','City','Town','','','[]','',0,'Unverified');
      INSERT INTO boardings(id,name,category,city,district,image_url,allowed_pets,features,quiz_tags,price,description,boarding_model,base_trust_score,last_verified)
      VALUES ('b1','Boarding','Care','City','Town','','[]','[]','[]','Ask','','Day',0,'Unverified');
      INSERT INTO pet_taxis(id,name,city,district,image_url,allowed_pets,features,price,description,base_trust_score,last_verified)
      VALUES ('t1','Taxi','City','Town','','[]','[]','Ask','',0,'Unverified');
      INSERT INTO experiences(id,name,category,city,district,image_url,pet_policy,allowed_pets,features,description,base_trust_score,last_verified)
      VALUES ('e1','Park','Park','City','Town','','Ask','[]','[]','',0,'Unverified');
      INSERT INTO guides(id,slug,title,category,short_answer,summary,published_at,updated_at,author,content,checklist,faq)
      VALUES ('g1','guide-one','Guide','Guide','','','2026-01-01','2026-02-01','{}','','[]','[{"large":9007199254740993,"decimal":0.123456789012345678901}]');
      INSERT INTO ads(id,title,sponsor,placement,target_url,starts_at,ends_at)
      VALUES ('a1','Ad','Sponsor','Home','https://example.test','2026-01-01','2026-12-31');
      INSERT INTO reviews(id,target_id,author,rating,text,date,status) VALUES ('r1','v1','Author',8,'Review','2020-01-01','rejected');
      INSERT INTO complaints(id,target_id,target_name,author,text,date,status) VALUES ('c1','h1','Hotel','Author','Complaint','2020-01-01','pending');
      INSERT INTO corrections(id,hotel_id,hotel_name,text,date,status) VALUES ('x1','h1','Hotel','Correction','2020-01-01','rejected');
      INSERT INTO ad_applications(id,business_name,business_type,contact_name,email,phone,city,created_at)
      VALUES ('00000000-0000-4000-8000-000000000001','B','B','C','e','p','City','2020-01-01T01:02:03.123456Z');
    `);
    const clean = await preflight(source.client, { batchSize: 1 });
    assert.equal(clean.issueCount, 0);
    assert.ok(LEGACY_TABLES.every(table => clean.counts[table] > 0));
    await source.db.exec(`UPDATE hotels SET name='Hotel Alpha',features='{}',rules='[]' WHERE id='h2';
      INSERT INTO reviews(id,target_id,author,rating,text,date,status) VALUES ('bad','missing','Author',8,'Bad','2026-02-30','pending')`);
    const invalid = await preflight(source.client, { batchSize: 1 });
    for (const kind of ['duplicate slug tuple', 'features: expected JSON array', 'rules: expected JSON object', 'orphan feedback', 'date: incompatible date']) {
      assert.ok(invalid.issues.some(issue => issue.kind === kind), kind);
    }
    await assert.rejects(migrate(source.client, target.client, { apply: true, batchSize: 1 }), /Source preflight/);
    await source.db.exec("UPDATE hotels SET name='Hotel Beta',features='[]',rules='{}' WHERE id='h2'; DELETE FROM reviews WHERE id='bad'");
    assert.equal((await migrate(source.client, target.client, { batchSize: 1 })).applied, false);
    assert.equal((await target.db.query('SELECT count(*)::int AS n FROM hotels')).rows[0].n, 0);
    const failing = { query: async (query, values) => {
      const text = typeof query === 'string' ? query : query.text;
      if (text.includes('actual.id=expected.id')) return { rows: [{ count: 0 }] };
      return target.client.query(query, values);
    } };
    await assert.rejects(migrate(source.client, failing, { apply: true, batchSize: 1 }), /copied value validation failed/);
    assert.equal((await target.db.query('SELECT count(*)::int AS n FROM places')).rows[0].n, 0);
    const copied = await migrate(source.client, target.client, { apply: true, batchSize: 1 });
    assert.deepEqual(copied.counts, clean.counts);
    assert.deepEqual((await target.db.query("SELECT city,district FROM hotels WHERE id='h2'")).rows[0], { city: 'City', district: 'Town' });
    assert.deepEqual((await target.db.query("SELECT last_verified,verification_note FROM vets WHERE id='v1'")).rows[0], { last_verified: null, verification_note: 'Unverified' });
    assert.equal((await target.db.query('SELECT faq::text AS raw FROM guides')).rows[0].raw, (await source.db.query('SELECT faq::text AS raw FROM guides')).rows[0].raw);
    assert.equal((await target.db.query('SELECT created_at::text AS at FROM ad_applications')).rows[0].at, '2020-01-01 01:02:03.123456+00');
    await assert.rejects(migrate(source.client, target.client, { apply: true, batchSize: 1 }), /not empty/);
    assert.ok(aggregateQueries > 0);
    assert.ok(tableLocks > 0);
  } finally {
    await source.db.close();
    await target.db.close();
  }
});

test('PGlite imports are repeatable, retention is bounded and sitemap publication is complete', async () => {
  const { db, client } = memoryDatabase();
  try {
    await applyMigrations(client);
    await db.exec("SET TIME ZONE 'UTC'");
    await db.exec('SET ROLE pati_api');
    const records = prepareVets([vetInput('p1'), vetInput('p2')], 'google_maps');
    assert.equal((await importVets(client, records, 1)).inserted, 2);
    const rerun = await importVets(client, records, 1);
    assert.equal(rerun.inserted, 0);
    assert.equal(rerun.existing, 2);
    const [failedVet] = prepareVets([vetInput('rollback')], 'google_maps');
    const failedImport = { query: async (query, values) => {
      if (typeof query === 'string' && query.startsWith('INSERT INTO public.place_sources')) throw new Error('injected source failure');
      return client.query(query, values);
    } };
    await assert.rejects(importVets(failedImport, [failedVet], 1), /injected source failure/);
    assert.equal((await db.query('SELECT id FROM places WHERE id=$1', [failedVet.id])).rows.length, 0);
    await db.exec('RESET ROLE');
    assert.equal((await db.query("SELECT has_table_privilege('pati_api','private.submission_limits','DELETE') AS allowed")).rows[0].allowed, false);
    const placeId = records[0].id;
    await db.query(`INSERT INTO reviews(id,target_id,author,rating,text,date,status,created_at,modified_at)
      SELECT id,$1,'Author',5,'Review','2020-01-01',status,'2020-01-01',modified::timestamptz
      FROM (VALUES ('pending1','pending','2020-01-01'),('pending2','pending','2020-01-01'),
        ('approved','approved','2020-01-01'),('rejected','rejected','2020-01-01'),
        ('recent-edit','rejected','2026-09-04')) fixture(id,status,modified)`, [placeId]);
    await db.exec(`INSERT INTO ad_applications(id,business_name,business_type,contact_name,email,phone,city,created_at,modified_at)
      VALUES ('00000000-0000-4000-8000-000000000001','B','B','C','e','p','City','2020-01-01','2020-01-01');
      INSERT INTO private.submission_limits(key_hash,window_start,attempts)
      VALUES ('expired','2020-01-01',1),('fresh','2026-09-04',1)`);
    const policies = retentionPolicies({ 'rejected-days': '30', 'pending-days': '30', 'ad-application-days': '30', 'expired-rate-limits': true }, new Date('2026-09-04T00:00:00Z'));
    const preview = await maintain(client, policies, { batchSize: 1, maxBatches: 1 });
    assert.equal(preview.applied, false);
    assert.ok(preview.reports.some(report => report.capped));
    assert.equal((await db.query('SELECT count(*)::int AS n FROM reviews')).rows[0].n, 5);
    const limited = await maintain(client, policies, { apply: true, batchSize: 1, maxBatches: 1 });
    assert.equal(limited.reports.find(report => report.table === 'public.reviews' && report.status === 'pending').deleted, 1);
    await maintain(client, policies, { apply: true, batchSize: 1, maxBatches: 10 });
    assert.deepEqual((await db.query('SELECT id FROM reviews ORDER BY id')).rows, [{ id: 'approved' }, { id: 'recent-edit' }]);
    assert.equal((await db.query('SELECT count(*)::int AS n FROM ad_applications')).rows[0].n, 0);
    assert.deepEqual((await db.query('SELECT key_hash FROM private.submission_limits')).rows, [{ key_hash: 'fresh' }]);

    await db.exec('SET ROLE pati_api');
    const files = new Map();
    const result = await generateSitemaps(client, async (name, xml) => files.set(name, xml), { origin: 'https://example.test', batchSize: 1, chunkSize: 3, runId: 'test' });
    assert.equal([...files.keys()].at(-1), 'index.xml');
    assert.ok(result.chunks > 1);
    const dom = new JSDOM();
    const parser = new dom.window.DOMParser();
    const urls = [];
    try {
      for (const [name, xml] of files) {
        const document = parser.parseFromString(xml, 'application/xml');
        assert.equal(document.querySelector('parsererror'), null);
        const locations = [...document.querySelectorAll('loc')].map(node => node.textContent);
        if (name === 'index.xml') {
          for (const url of locations) {
            assert.ok(url.startsWith('https://example.test/sitemaps/'));
            assert.ok(files.has(url.split('/').at(-1)));
          }
        } else {
          assert.ok(locations.length <= 3);
          urls.push(...locations);
        }
      }
    } finally { dom.window.close(); }
    assert.equal(urls.length, result.urls);
    assert.equal(new Set(urls).size, urls.length);
    for (const record of records) assert.ok(urls.includes('https://example.test/veteriner/' + record.id));
    const unpublished = [];
    const failingRead = { query: async (query, values) => {
      const text = typeof query === 'string' ? query : query.text;
      if (text.includes('FROM public.vets')) throw new Error('injected read failure');
      return client.query(query, values);
    } };
    await assert.rejects(generateSitemaps(failingRead, async name => unpublished.push(name), { origin: 'https://example.test', batchSize: 1, chunkSize: 3, runId: 'failure' }), /injected read failure/);
    assert.ok(!unpublished.includes('index.xml'));
  } finally { await db.close(); }
});
