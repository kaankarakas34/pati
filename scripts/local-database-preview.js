// Disposable in-memory PostgreSQL preview. Never reads .env or connects remotely.
import { PGlite } from '@electric-sql/pglite';
import { pg_trgm } from '@electric-sql/pglite/contrib/pg_trgm';
import { randomBytes } from 'node:crypto';
import { applyMigrations } from '../lib/migrations.js';
import { createRepository } from '../lib/repository.js';
import * as fixtures from '../src/data/mockData.js';

if(process.env.NODE_ENV==='production' || process.env.VERCEL) throw new Error('The fixture preview is local development only.');
process.env.DOTENV_CONFIG_PATH='./tests/nonexistent.env';
process.env.VERCEL='1';
process.env.DATABASE_URL='';
process.env.SUBMISSION_HASH_SECRET=randomBytes(32).toString('hex');
process.env.ADMIN_TOKEN=randomBytes(32).toString('hex');
process.env.ADMIN_USERNAME='preview-admin';
process.env.ADMIN_PASSWORD=process.env.PREVIEW_ADMIN_PASSWORD || randomBytes(16).toString('hex');
const db=new PGlite({extensions:{pg_trgm}});
const query=async(sql,values)=>values?db.query(sql,values):((await db.exec(sql)).at(-1)||{rows:[]});
await applyMigrations({query});
// Serialize each transaction on PGlite's single connection.
let tail=Promise.resolve();
async function acquire() {
  const previous=tail; let release;
  tail=new Promise(resolve=>{release=resolve;});
  await previous;
  return release;
}
const adapter={
  query:async(...args)=>{const release=await acquire();try{return await query(...args);}finally{release();}},
  connect:async()=>({query,release:await acquire()})
};
const repo=createRepository(adapter);
const groups={hotels:'initialHotels',boardings:'initialBoardings',guides:'initialGuides',pet_taxis:'initialTaxis',vets:'initialVets',experiences:'initialExperiences',ads:'initialAds'};
for(const [table,key] of Object.entries(groups)) {
  for(const item of fixtures[key].slice(0,table==='hotels'?30:3)) {
    const payload={...item};
    if(table==='guides') {payload.publishedAt='2026-09-01';payload.updatedAt='2026-09-01';}
    await repo.save(table,payload,{preserveId:true});
  }
}
await db.exec('SET ROLE pati_api');
const {pool}=await import('../db.js');
pool.query=adapter.query;
pool.connect=adapter.connect;
const {default:app}=await import('../server.js');
const server=app.listen(Number(process.env.PREVIEW_PORT||3234),'127.0.0.1',()=>{
  console.log('DISPOSABLE FIXTURE PREVIEW http://127.0.0.1:'+server.address().port);
  console.log('Admin username: '+process.env.ADMIN_USERNAME);
  console.log('Set PREVIEW_ADMIN_PASSWORD before startup to enable a known local editor password.');
});
const stop=()=>server.close(async()=>{await db.close();await pool.end();process.exit(0);});
process.once('SIGINT',stop);
process.once('SIGTERM',stop);
