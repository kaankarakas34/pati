import pg from 'pg';
import { createInterface } from 'node:readline';

const TABLES = [
  'hotels',
  'boardings',
  'guides',
  'corrections',
  'complaints',
  'reviews',
  'pet_taxis',
  'vets',
  'experiences',
  'ads'
];

function quoteIdentifier(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

async function readCredentials() {
  const lines = createInterface({ input: process.stdin, terminal: false });
  const input = await new Promise((resolve) => lines.once('line', resolve));
  lines.close();
  return JSON.parse(input);
}

async function copyTable(source, target, table) {
  const columnsResult = await source.query(`
    SELECT column_name, data_type
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = $1
    ORDER BY ordinal_position
  `, [table]);
  const columnDefinitions = columnsResult.rows;
  const columns = columnDefinitions.map((row) => row.column_name);
  if (columns.length === 0) throw new Error(`${table} kaynak tablosu bulunamadı.`);

  const rows = (await source.query(`SELECT * FROM public.${quoteIdentifier(table)}`)).rows;
  if (rows.length === 0) return 0;

  const columnSql = columns.map(quoteIdentifier).join(', ');
  const placeholders = columns.map((_, index) => `$${index + 1}`).join(', ');
  const insertSql = `INSERT INTO public.${quoteIdentifier(table)} (${columnSql}) VALUES (${placeholders})`;
  for (const row of rows) {
    const values = columnDefinitions.map((column) => {
      const value = row[column.column_name];
      if (value === null || value === undefined) return value;
      return ['json', 'jsonb'].includes(column.data_type) ? JSON.stringify(value) : value;
    });
    try {
      await target.query(insertSql, values);
    } catch (error) {
      throw new Error(`${table} tablosunda ${row.id || 'kimliği bilinmeyen'} kaydı kopyalanamadı: ${error.message}`, { cause: error });
    }
  }
  return rows.length;
}

let source;
let target;
try {
  const credentials = await readCredentials();
  const connectionString = `postgresql://${encodeURIComponent(credentials.user)}:${encodeURIComponent(credentials.password)}`
    + `@${credentials.host}:${Number(credentials.port || 5432)}/${credentials.database || 'postgres'}`;

  process.env.DATABASE_URL = connectionString;
  const { initDatabase } = await import('../db.js');
  await initDatabase();

  source = new pg.Pool({
    connectionString: process.env.SOURCE_DATABASE_URL || 'postgresql://pati_user:pati_password@localhost:5436/pati_db',
    ssl: false,
    max: 1
  });
  target = new pg.Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 1,
    connectionTimeoutMillis: 15000
  });

  await target.query('BEGIN');
  await target.query(`TRUNCATE ${TABLES.map((table) => `public.${quoteIdentifier(table)}`).join(', ')}`);

  const copied = {};
  for (const table of TABLES) {
    copied[table] = await copyTable(source, target, table);
    await target.query(`ALTER TABLE public.${quoteIdentifier(table)} ENABLE ROW LEVEL SECURITY`);
    console.log(`${table}: ${copied[table]} kayıt kopyalandı.`);
  }
  await target.query('COMMIT');

  const verification = {};
  for (const table of TABLES) {
    const result = await target.query(`SELECT COUNT(*)::int AS count FROM public.${quoteIdentifier(table)}`);
    verification[table] = result.rows[0].count;
    if (verification[table] !== copied[table]) throw new Error(`${table} doğrulama sayısı eşleşmedi.`);
  }
  console.log(JSON.stringify({ migrated: true, counts: verification }));
} catch (error) {
  if (target) await target.query('ROLLBACK').catch(() => {});
  console.error(JSON.stringify({ migrated: false, error: error.message, code: error.code }));
  process.exitCode = 1;
} finally {
  if (source) await source.end();
  if (target) await target.end();
}
