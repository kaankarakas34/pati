import 'dotenv/config';
import pg from 'pg';
import { parseArgs } from 'node:util';
import { databaseConfig } from '../lib/database-config.js';
import { buildCatalogQuery } from '../lib/repository.js';

const {values}=parseArgs({options:{analyze:{type:'boolean',default:false},city:{type:'string',default:'istanbul'},q:{type:'string',default:'otel'},target:{type:'string'}}});
if(!process.env.AUDIT_DATABASE_URL) throw new Error('AUDIT_DATABASE_URL is required; use a read-only login.');
const client=new pg.Client({...databaseConfig(process.env.AUDIT_DATABASE_URL),statement_timeout:15000,application_name:'pati-explain'});
await client.connect();
try {
  await client.query('BEGIN READ ONLY');
  const queries=[
    ['hotel-city',buildCatalogQuery('hotels',{citySlug:values.city,limit:24})],
    ['hotel-search',buildCatalogQuery('hotels',{q:values.q,limit:24})],
    ['hotel-features',buildCatalogQuery('hotels',{citySlug:values.city,pet:'dog',limit:24})]
  ];
  if(values.target) queries.push(['approved-reviews',{text:"SELECT id,rating,text,created_at FROM public.reviews WHERE target_id=$1 AND status='approved' ORDER BY created_at DESC,id DESC LIMIT 25",values:[values.target]}]);
  for(const [name,query] of queries) {
    const prefix=values.analyze?'EXPLAIN (ANALYZE,BUFFERS,FORMAT JSON) ':'EXPLAIN (FORMAT JSON) ';
    const result=await client.query(prefix+query.text,query.values);
    console.log(JSON.stringify({name,analyzed:values.analyze,plan:result.rows[0]['QUERY PLAN']}));
  }
} finally {
  await client.query('ROLLBACK').catch(()=>{});
  await client.end();
}
