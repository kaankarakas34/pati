import format from 'pg-format';
import { randomUUID } from 'node:crypto';
import { catalogColumns, placeTables, jsonColumns } from './catalog-schema.js';
import { InputError, camel, pageInput, pageResult, recordId, boundedText } from './input.js';
import { slugify } from './seo-slugs.js';

const summaryFields = new Set('id name city district type category image_url allowed_pets features quiz_tags suitability weight_limit extra_fee base_trust_score verified price address camera_support title summary short_answer author published_at updated_at starts_at ends_at status placement target_url sponsor last_verified'.split(' '));
export function mapRow(row) {
  const result = Object.fromEntries(Object.entries(row).map(([key,value]) => [camel(key), value instanceof Date ? value.toISOString() : value]));
  if (result.baseTrustScore !== undefined) result.baseTrustScore = Number(result.baseTrustScore);
  if (result.priceAmount !== undefined && result.priceAmount !== null) result.priceAmount = Number(result.priceAmount);
  if (result.lastVerified === null) result.lastVerified = result.verificationNote || '';
  for (const key of ['lastVerified','date','publishedAt','updatedAt','startsAt','endsAt']) {
    if (typeof result[key] === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(result[key])) result[key] = result[key].slice(0,10);
  }
  return result;
}

export function buildCatalogQuery(table, query = {}, detail = false) {
  const columns = catalogColumns[table];
  if (!columns) throw new InputError('Gecersiz kaynak.');
  const { limit,cursor } = pageInput(query);
  const values = [];
  const where = [];
  const bind = value => { values.push(value); return '$' + values.length; };
  const eq = (field,value) => { if (value !== undefined && value !== '' && value !== 'all') where.push(format('%I = %s',field,bind(boundedText(value,255)))); };
  eq('id',query.id);
  for (const [param,field] of [['citySlug','city_slug'],['districtSlug','district_slug'],['nameSlug','name_slug']]) {
    if (placeTables.includes(table)) eq(field,query[param]);
  }
  for (const field of ['city','district','type','category','slug','placement']) if (columns.includes(field)) eq(field,query[field]);
  if (query.q) {
    const term = slugify(boundedText(query.q,120));
    if (term.length >= 3) where.push('search_text LIKE ' + bind('%' + term + '%'));
  }
  for (const [key,field] of [['pet','allowed_pets'],['feature','features'],['quizTag','quiz_tags']]) {
    if (!query[key] || query[key] === 'all') continue;
    if (!columns.includes(field)) throw new InputError('Desteklenmeyen filtre.');
    const list = Array.isArray(query[key]) ? query[key] : [query[key]];
    if (list.length > 20) throw new InputError('Cok fazla filtre.');
    where.push(format('%I @> %s::jsonb',field,bind(JSON.stringify(list.map(item=>boundedText(item,120))))));
  }
  if (query.suitability && query.suitability !== 'all' && columns.includes('suitability')) {
    const n = Number(query.suitability); if (!Number.isInteger(n) || n < 1 || n > 5) throw new InputError('Gecersiz uygunluk.');
    where.push('suitability = ' + bind(n));
  }
  if (query.weightLimit && query.weightLimit !== 'all' && columns.includes('weight_limit')) {
    const n = Number(query.weightLimit); if (!Number.isFinite(n) || n < 0 || n > 200) throw new InputError('Gecersiz agirlik.');
    where.push(n === 0 ? 'weight_limit = 0' : '(weight_limit = 0 OR weight_limit >= ' + bind(n) + ')');
  }
  if (query.extraFeeOnly === 'true' && columns.includes('extra_fee')) where.push("extra_fee = 'no'");
  if (query.verified !== undefined && columns.includes('verified')) {
    if (!['true','false'].includes(query.verified)) throw new InputError('Gecersiz dogrulama filtresi.');
    where.push('verified = ' + bind(query.verified === 'true'));
  }
  if (table === 'ads' && !detail) where.push("status = 'active' AND starts_at <= CURRENT_DATE AND ends_at >= CURRENT_DATE");
  if (cursor) where.push('(created_at,id) < (' + bind(cursor.createdAt) + '::timestamptz,' + bind(cursor.id) + ')');
  const selected = (detail ? columns : columns.filter(c=>summaryFields.has(c))).map(c=>format('%I',c));
  if (!detail && columns.includes('description')) selected.push('left(description,350) AS description');
  selected.push('created_at::text AS created_at','version','modified_at');
  if (placeTables.includes(table)) selected.push('verification_note');
  if (['boardings','pet_taxis'].includes(table)) selected.push('price_amount','currency');
  const text = format('SELECT %s FROM public.%I%s ORDER BY created_at DESC,id DESC LIMIT %s', selected.join(','),table,
    where.length ? ' WHERE ' + where.join(' AND ') : '',bind(limit + 1));
  return { text,values,limit };
}

export function createRepository(pool) {
  async function transaction(work) {
    const client = await pool.connect();
    try { await client.query('BEGIN'); const result = await work(client); await client.query('COMMIT'); return result; }
    catch (error) { await client.query('ROLLBACK'); throw error; }
    finally { client.release(); }
  }
  async function page(table,query={},detail=false) {
    const built = buildCatalogQuery(table,query,detail);
    return pageResult((await pool.query(built.text,built.values)).rows.map(mapRow),built.limit);
  }
  async function one(table,id) { return (await page(table,{id:recordId(id),limit:1},true)).data[0] || null; }
  async function save(table,payload,{preserveId=false}={}) {
    const columns = catalogColumns[table];
    if (!columns || !payload || typeof payload !== 'object' || Array.isArray(payload)) throw new InputError('Gecersiz kayit.');
    const update = payload.version !== undefined;
    if (update && (!Number.isInteger(payload.version) || payload.version < 1)) throw new InputError('Gecersiz kayit surumu.');
    const id = update || preserveId ? recordId(payload.id) : randomUUID();
    const entries = [];
    for (const column of columns.filter(c=>c !== 'id' && !['impressions','clicks','last_verified'].includes(c))) {
      const key = camel(column);
      let value = payload[key];
      if (column === 'slug' && !value && !update) value = slugify(payload.title) + '-' + id.slice(0,8);
      if (value === undefined) continue;
      if (typeof value === 'string' && value.length > (column === 'content' ? 100000 : 50000)) throw new InputError('Alan cok uzun.');
      if (jsonColumns.has(column) && (column !== 'rules' || table !== 'experiences') && (column !== 'author' || table === 'guides')) {
        if (value !== null && (['author','rules','booking_links'].includes(column) ? (typeof value !== 'object' || Array.isArray(value)) : !Array.isArray(value))) throw new InputError('Gecersiz JSON alan tipi.');
        if (JSON.stringify(value).length > 50000) throw new InputError('JSON alani cok uzun.');
        value = JSON.stringify(value);
      }
      if (['published_at','updated_at','starts_at','ends_at'].includes(column) && value) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new InputError('Tarih YYYY-MM-DD olmali.');
      }
      entries.push([column,value]);
    }
    if (placeTables.includes(table) && payload.lastVerified !== undefined) {
      const note = boundedText(String(payload.lastVerified),255,false);
      entries.push(['verification_note',note],['last_verified', /^\d{4}-\d{2}-\d{2}$/.test(note) ? note : null]);
    }
    for (const column of ['price_amount','currency']) if (['boardings','pet_taxis'].includes(table) && payload[camel(column)] !== undefined) entries.push([column,payload[camel(column)]]);
    if (!entries.length) throw new InputError('Degistirilecek alan yok.');
    return transaction(async client => {
      const values = entries.map(e=>e[1]);
      let result;
      if (update) {
        values.push(id,payload.version);
        result = await client.query(format('UPDATE public.%I SET %s WHERE id = $%s AND version = $%s RETURNING id',table,
          entries.map(([key],i)=>format('%I = $%s',key,i+1)).join(','),values.length-1,values.length),values);
        if (!result.rows.length) throw new InputError('Kayit degisti veya silindi. Yenileyip tekrar deneyin.',409);
      } else {
        values.push(id);
        result = await client.query(format('INSERT INTO public.%I (%s,id) VALUES (%s) RETURNING id',table,
          entries.map(([key])=>format('%I',key)).join(','),values.map((_,i)=>'$'+(i+1)).join(',')),values);
      }
      if (payload.source && placeTables.includes(table)) {
        await client.query('INSERT INTO public.place_sources(provider,external_id,place_id) VALUES($1,$2,$3)',[
          boundedText(payload.source.provider,80),boundedText(payload.source.externalId,255),id]);
      }
      const built = buildCatalogQuery(table,{id,limit:1},true);
      return mapRow((await client.query(built.text,built.values)).rows[0]);
    });
  }
  async function remove(table,id,version) {
    if (!catalogColumns[table]) throw new InputError('Gecersiz kaynak.');
    if (!Number.isInteger(Number(version)) || Number(version) < 1) throw new InputError('Kayit surumu gerekli.',428);
    return transaction(async client=>{
      const result = await client.query(format('DELETE FROM public.%I WHERE id = $1 AND version = $2 RETURNING id',table),[recordId(id),version]);
      if (!result.rows.length) throw new InputError('Kayit degisti veya silindi.',409);
      if (placeTables.includes(table)) await client.query('DELETE FROM public.places WHERE id = $1',[id]);
    });
  }
  async function feedbackPage(table,query={},admin=false) {
    if (!['reviews','complaints','corrections','ad_applications'].includes(table)) throw new InputError('Gecersiz kaynak.');
    const {limit,cursor}=pageInput(query); const values=[]; const where=[];
    const bind=value=>{values.push(value);return '$'+values.length;};
    if (['corrections','ad_applications'].includes(table) && !admin) throw new InputError('Yonetici yetkisi gerekli.',401);
    if (table !== 'ad_applications') {
      if (!admin) where.push("status = 'approved'");
      else if (query.status) { if(!['approved','pending','rejected'].includes(query.status)) throw new InputError('Gecersiz durum.'); where.push('status = '+bind(query.status)); }
      const target = table === 'corrections' ? 'hotel_id' : 'target_id';
      if (query.targetId) where.push(format('%I = %s',target,bind(recordId(query.targetId))));
      else if (!admin) throw new InputError('Mekan kimligi gerekli.');
    }
    if(cursor) where.push('(created_at,id) < ('+bind(cursor.createdAt)+'::timestamptz,'+bind(cursor.id)+')');
    const fields = table === 'ad_applications' ? 'id,business_name,business_type,contact_name,email,phone,website,city,message,created_at::text AS created_at,version' :
      'id,'+(table === 'corrections' ? 'hotel_id,hotel_name' : 'target_id'+(table === 'complaints' ? ',target_name' : ''))+',text,date,status,created_at::text AS created_at,version'+(table !== 'corrections' ? ',author' : '')+(table === 'reviews' ? ',rating' : '');
    const result=await pool.query(format('SELECT %s FROM public.%I%s ORDER BY created_at DESC,id DESC LIMIT %s',fields,table,
      where.length?' WHERE '+where.join(' AND '):'',bind(limit+1)),values);
    return pageResult(result.rows.map(mapRow),limit);
  }
  async function submit(table,payload,userId=null) {
    if(!['reviews','complaints','corrections'].includes(table)) throw new InputError('Gecersiz kaynak.');
    if(payload.id !== undefined || payload.status !== undefined || payload.date !== undefined) throw new InputError('Kimlik, tarih ve durum sunucu tarafindan atanir.');
    const targetId=recordId(table==='corrections'?payload.hotelId:payload.targetId);
    const text=boundedText(payload.text,2000);
    const target=table==='corrections'?'hotel_id':'target_id';
    const fields=['id',target,'text','user_id']; const values=[randomUUID(),targetId,text,userId];
    if(table!=='corrections'){fields.push('author');values.push(boundedText(payload.author,120));}
    if(table==='reviews') { const rating=Number(payload.rating); if(!Number.isInteger(rating)||rating<1||rating>10) throw new InputError('Puan 1-10 arasinda olmali.'); fields.push('rating');values.push(rating); }
    if(table==='complaints'||table==='corrections') {
      fields.push(table==='corrections'?'hotel_name':'target_name');
      const place = await pool.query("SELECT kind FROM public.places WHERE id=$1",[targetId]);
      if(!place.rows.length || (table==='corrections' && place.rows[0].kind!=='hotels')) throw new InputError('Mekan bulunamadi.',404);
      const row = await pool.query(format('SELECT name FROM public.%I WHERE id=$1',place.rows[0].kind),[targetId]);
      if(!row.rows.length) throw new InputError('Mekan bulunamadi.',404);
      values.push(row.rows[0].name);
    }
    const result=await pool.query(format('INSERT INTO public.%I (%s) VALUES (%s) RETURNING id,status,created_at',table,
      fields.map(f=>format('%I',f)).join(','),values.map((_,i)=>'$'+(i+1)).join(',')),values);
    return mapRow(result.rows[0]);
  }
  async function moderate(table,id,status,version) {
    if(!['reviews','complaints','corrections'].includes(table)||!['approved','pending','rejected'].includes(status)) throw new InputError('Gecersiz moderasyon.');
    if(!Number.isInteger(version)||version<1) throw new InputError('Kayit surumu gerekli.',428);
    const result=await pool.query(format('UPDATE public.%I SET status=$1 WHERE id=$2 AND version=$3 RETURNING id,status,version',table),[status,recordId(id),version]);
    if(!result.rows.length) throw new InputError('Kayit degisti veya silindi.',409);
    return mapRow(result.rows[0]);
  }
  async function consumeLimit(key) {
    const result=await pool.query(`INSERT INTO private.submission_limits(key_hash,window_start,attempts) VALUES($1,now(),1)
      ON CONFLICT(key_hash) DO UPDATE SET
        window_start=CASE WHEN submission_limits.window_start < now()-interval '1 hour' THEN now() ELSE submission_limits.window_start END,
        attempts=CASE WHEN submission_limits.window_start < now()-interval '1 hour' THEN 1 ELSE submission_limits.attempts+1 END
      WHERE submission_limits.window_start < now()-interval '1 hour' OR submission_limits.attempts < 10 RETURNING attempts`,[key]);
    if(!result.rows.length) throw new InputError('Cok fazla gonderim. Daha sonra tekrar deneyin.',429);
  }
  async function favorite(userId,placeId,removeFavorite=false) {
    return transaction(async client=>{
      await client.query("SELECT set_config('request.jwt.claim.sub',$1,true)",[userId]);
      if(removeFavorite) await client.query('DELETE FROM public.favorites WHERE user_id=$1 AND place_id=$2',[userId,recordId(placeId)]);
      else await client.query('INSERT INTO public.favorites(user_id,place_id) VALUES($1,$2) ON CONFLICT DO NOTHING',[userId,recordId(placeId)]);
    });
  }
  async function favorites(userId,query={}) {
    const {limit,cursor}=pageInput(query);
    return transaction(async client=>{
      await client.query("SELECT set_config('request.jwt.claim.sub',$1,true)",[userId]);
      const result=cursor
        ? await client.query('SELECT place_id AS id,created_at::text AS created_at FROM public.favorites WHERE user_id=$1 AND (created_at,place_id)<($2::timestamptz,$3) ORDER BY created_at DESC,place_id DESC LIMIT $4',[userId,cursor.createdAt,cursor.id,limit+1])
        : await client.query('SELECT place_id AS id,created_at::text AS created_at FROM public.favorites WHERE user_id=$1 ORDER BY created_at DESC,place_id DESC LIMIT $2',[userId,limit+1]);
      return pageResult(result.rows.map(mapRow),limit);
    });
  }
  async function mergeHotels({keeperId,duplicateId,keeperVersion,duplicateVersion}={}) {
    recordId(keeperId); recordId(duplicateId);
    if(keeperId===duplicateId || ![keeperVersion,duplicateVersion].every(v=>Number.isInteger(v)&&v>0)) throw new InputError('Iki farkli kayit ve guncel surumleri gerekli.');
    return transaction(async client=>{
      const locked=await client.query('SELECT id,version FROM public.hotels WHERE id=ANY($1::text[]) ORDER BY id FOR UPDATE',[[keeperId,duplicateId]]);
      if(locked.rows.length!==2 || locked.rows.some(r=>r.version!==(r.id===keeperId?keeperVersion:duplicateVersion))) throw new InputError('Kayit degisti veya silindi.',409);
      await client.query('UPDATE public.reviews SET target_id=$1 WHERE target_id=$2',[keeperId,duplicateId]);
      await client.query('UPDATE public.complaints SET target_id=$1 WHERE target_id=$2',[keeperId,duplicateId]);
      await client.query('UPDATE public.corrections SET hotel_id=$1 WHERE hotel_id=$2',[keeperId,duplicateId]);
      await client.query('SELECT private.merge_favorites($1,$2)',[keeperId,duplicateId]);
      await client.query('UPDATE public.place_sources SET place_id=$1 WHERE place_id=$2',[keeperId,duplicateId]);
      await client.query('UPDATE public.hotels SET name=name WHERE id=$1',[keeperId]);
      await client.query('DELETE FROM public.hotels WHERE id=$1',[duplicateId]);
      await client.query('DELETE FROM public.places WHERE id=$1',[duplicateId]);
      return {id:keeperId,version:keeperVersion+1};
    });
  }
  async function complaintCount(targetId) {
    const result=await pool.query("SELECT count(*)::int AS count FROM public.complaints WHERE target_id=$1 AND status='approved'",[recordId(targetId)]);
    return result.rows[0].count;
  }
  async function incrementAd(id,{impressions=0,clicks=0}={}) {
    if(![impressions,clicks].every(v=>Number.isInteger(v)&&v>=0&&v<=10000) || impressions+clicks===0) throw new InputError('Gecersiz sayac artisi.');
    const result=await pool.query('UPDATE public.ads SET impressions=impressions+$1,clicks=clicks+$2 WHERE id=$3 RETURNING id,impressions,clicks,version',[impressions,clicks,recordId(id)]);
    if(!result.rows.length) throw new InputError('Reklam bulunamadi.',404);
    return mapRow(result.rows[0]);
  }
  return { mergeHotels,complaintCount,incrementAd,page,one,save,remove,feedbackPage,submit,moderate,consumeLimit,transaction,favorite,favorites };
}
