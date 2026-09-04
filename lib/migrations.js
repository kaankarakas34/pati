import { readdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

export async function applyMigrations(client) {
  const directory = new URL('../supabase/migrations/',import.meta.url);
  const files = (await readdir(directory)).filter(name=>/^\d+_[a-z0-9_]+\.sql$/.test(name)).sort();
  await client.query('BEGIN');
  try {
    await client.query("SET LOCAL lock_timeout = '5s'");
    await client.query("SELECT pg_advisory_xact_lock(73024119)");
    await client.query('CREATE SCHEMA IF NOT EXISTS private');
    await client.query('CREATE TABLE IF NOT EXISTS private.app_migrations(name text PRIMARY KEY, checksum text NOT NULL, applied_at timestamptz NOT NULL DEFAULT now())');
    for(const name of files) {
      const sql=await readFile(new URL(name,directory),'utf8');
      const checksum=createHash('sha256').update(sql).digest('hex');
      const existing=await client.query('SELECT checksum FROM private.app_migrations WHERE name=$1',[name]);
      if(existing.rows.length) {
        if(existing.rows[0].checksum!==checksum)throw new Error('Applied migration changed: '+name);
        continue;
      }
      await client.query(sql);
      await client.query('INSERT INTO private.app_migrations(name,checksum) VALUES($1,$2)',[name,checksum]);
    }
    await client.query('COMMIT');
  } catch(error){await client.query('ROLLBACK');throw error;}
}
