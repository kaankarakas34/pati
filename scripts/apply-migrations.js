import 'dotenv/config';
import pg from 'pg';
import { databaseConfig } from '../lib/database-config.js';
import { applyMigrations } from '../lib/migrations.js';

if(!process.env.MIGRATION_DATABASE_URL)throw new Error('MIGRATION_DATABASE_URL is required; runtime credentials are not used.');
const client=new pg.Client(databaseConfig(process.env.MIGRATION_DATABASE_URL));
try { await client.connect(); await applyMigrations(client); console.log('Migrations applied.'); }
finally { await client.end(); }
