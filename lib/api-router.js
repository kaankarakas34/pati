import express from 'express';
import { createHmac } from 'node:crypto';
import { repository, pool, checkDatabaseConnection } from '../db.js';
import { resources } from './catalog-schema.js';
import { InputError, boundedText, recordId } from './input.js';
import { getSupabaseServerClient } from './supabase/server.js';

export const asyncRoute = action => (req,res,next) => Promise.resolve(action(req,res,next)).catch(next);
export async function limitSubmission(req) {
  const secret = process.env.SUBMISSION_HASH_SECRET || process.env.ADMIN_TOKEN;
  if (!secret) throw new InputError('Gonderim servisi yapilandirilmamis.',503);
  const key = createHmac('sha256',secret).update(req.ip || 'unknown').digest('hex');
  await repository.consumeLimit(key);
}
async function verifyUser(req) {
  const authorization = req.get('authorization') || '';
  if (!authorization.startsWith('Bearer ')) throw new InputError('Oturum acmaniz gerekli.',401);
  const {data,error} = await getSupabaseServerClient().auth.getUser(authorization.slice(7));
  if(error || !data.user) throw new InputError('Gecersiz oturum.',401);
  const name = String(data.user.user_metadata?.display_name || 'Kullanici').slice(0,120);
  await pool.query('INSERT INTO public.profiles(id,display_name) VALUES($1,$2) ON CONFLICT(id) DO UPDATE SET display_name=EXCLUDED.display_name',[data.user.id,name]);
  return data.user.id;
}
function sendPage(req,res,page) {
  res.set('Cache-Control','no-store');
  if(page.nextCursor) res.set('X-Next-Cursor',page.nextCursor);
  return res.json(req.query.envelope === 'true' ? page : page.data);
}
export function createApiRouter(requireAdmin) {
  const router=express.Router();
  router.post('/admin/hotels/merge',requireAdmin,asyncRoute(async(req,res)=>res.json({success:true,data:await repository.mergeHotels(req.body)})));
  router.patch('/admin/ads/:id/counters',requireAdmin,asyncRoute(async(req,res)=>res.json({success:true,data:await repository.incrementAd(req.params.id,req.body)})));
  router.get('/complaints/count',asyncRoute(async(req,res)=>res.json({count:await repository.complaintCount(req.query.targetId)})));
  router.get('/health/database',asyncRoute(async(req,res)=>res.json({ok:true,...await checkDatabaseConnection()})));
  router.get('/admin/:resource',requireAdmin,asyncRoute(async(req,res)=>{
    const resource=recordId(req.params.resource);
    const table=Object.hasOwn(resources,resource)?resources[resource]:null;
    const page=table?await repository.page(table,req.query,true):await repository.feedbackPage(resource.replaceAll('-','_'),req.query,true);
    sendPage(req,res,page);
  }));
  router.patch('/admin/:resource/:id/status',requireAdmin,asyncRoute(async(req,res)=>{
    const result=await repository.moderate(recordId(req.params.resource),recordId(req.params.id),req.body?.status,req.body?.version);
    res.json({success:true,data:result});
  }));
  router.get('/favorites',asyncRoute(async(req,res)=>res.json(await repository.favorites(await verifyUser(req),req.query))));
  router.post('/favorites/:id',asyncRoute(async(req,res)=>{
    await repository.favorite(await verifyUser(req),req.params.id); res.status(201).json({success:true});
  }));
  router.delete('/favorites/:id',asyncRoute(async(req,res)=>{
    await repository.favorite(await verifyUser(req),req.params.id,true);res.json({success:true});
  }));
  router.get('/locations',asyncRoute(async(req,res)=>{
    const city=typeof req.query.city==='string'?boundedText(req.query.city,100):null;
    const result=city?await pool.query('SELECT id,city,district FROM public.locations WHERE city=$1 ORDER BY district LIMIT 200',[city]):
      await pool.query('SELECT DISTINCT city FROM public.locations ORDER BY city LIMIT 200');
    res.json(result.rows);
  }));
  router.get('/source/:provider/:externalId',requireAdmin,asyncRoute(async(req,res)=>{
    const result=await pool.query('SELECT place_id FROM public.place_sources WHERE provider=$1 AND external_id=$2',[boundedText(req.params.provider,80),boundedText(req.params.externalId,255)]);
    if(!result.rows.length)return res.status(404).json({error:'Kayit bulunamadi.'});
    const place=await pool.query('SELECT kind FROM public.places WHERE id=$1',[result.rows[0].place_id]);
    res.json(await repository.one(place.rows[0].kind,result.rows[0].place_id));
  }));
  for(const [resource,table] of Object.entries(resources)) {
    router.get('/'+resource,asyncRoute(async(req,res)=>sendPage(req,res,await repository.page(table,req.query))));
    router.get('/'+resource+'/:id',asyncRoute(async(req,res)=>{
      const id=recordId(req.params.id);
      const data=await repository.one(table,id);
      if(!data || (table==='ads' && (data.status!=='active' || data.startsAt>new Date().toISOString().slice(0,10) || data.endsAt<new Date().toISOString().slice(0,10))))return res.status(404).json({error:'Kayit bulunamadi.'});
      res.json(data);
    }));
    router.post('/'+resource,requireAdmin,asyncRoute(async(req,res)=>{
      res.json({success:true,data:await repository.save(table,req.body)});
    }));
    router.delete('/'+resource+'/:id',requireAdmin,asyncRoute(async(req,res)=>{
      recordId(req.params.id);
      await repository.remove(table,req.params.id,req.get('if-match'));
      res.json({success:true});
    }));
  }
  for(const table of ['reviews','complaints','corrections']) {
    router.get('/'+table,...(table==='corrections'?[requireAdmin]:[]),asyncRoute(async(req,res)=>sendPage(req,res,await repository.feedbackPage(table,req.query,table==='corrections'))));
    router.post('/'+table,asyncRoute(async(req,res)=>{
      await limitSubmission(req);
      const userId=req.get('authorization')?await verifyUser(req):null;
      res.status(201).json({success:true,data:await repository.submit(table,req.body || {},userId)});
    }));
  }
  return router;
}
