import pg from 'pg';
import 'dotenv/config';
import { databaseTls } from '../lib/database-config.js';
import { createInterface } from 'node:readline';

const lines = createInterface({ input: process.stdin, terminal: false });
const input = await new Promise((resolve) => lines.once('line', resolve));
lines.close();

let pool;
try {
  const credentials = JSON.parse(input);
  pool = new pg.Pool({
    host: credentials.host,
    port: Number(credentials.port || 5432),
    database: credentials.database || 'postgres',
    user: credentials.user,
    password: credentials.password,
    ssl: databaseTls(),
    connectionTimeoutMillis: 15000,
    max: 1
  });

  const identity = await pool.query('select current_database() as database, current_user as user, version() as version');
  await pool.query('begin');
  await pool.query('create temp table codex_connection_test (id int primary key, value text)');
  await pool.query("insert into codex_connection_test values (1, 'ok')");
  const write = await pool.query('select value from codex_connection_test where id = 1');
  await pool.query('rollback');
  const tables = await pool.query("select count(*)::int as count from information_schema.tables where table_schema = 'public'");
  const hotelCount = tables.rows[0].count > 0
    ? (await pool.query('select count(*)::int as count from public.hotels')).rows[0].count
    : 0;
  const rls = await pool.query(`
    select count(*)::int as total,
           count(*) filter (where relrowsecurity)::int as enabled
    from pg_class
    where relnamespace = 'public'::regnamespace and relkind = 'r'
  `);

  console.log(JSON.stringify({
    connected: true,
    database: identity.rows[0].database,
    user: identity.rows[0].user,
    postgres: identity.rows[0].version.split(' ').slice(0, 2).join(' '),
    transactionWrite: write.rows[0].value,
    publicTables: tables.rows[0].count,
    hotels: hotelCount,
    rlsTables: rls.rows[0]
  }));
} catch (error) {
  console.error(JSON.stringify({ connected: false, error: error.message, code: error.code }));
  process.exitCode = 1;
} finally {
  if (pool) await pool.end();
}
