import pg from 'pg';
import 'dotenv/config';
import { readFileSync } from 'node:fs';
import { databaseConfig } from './lib/database-config.js';
import { createRepository } from './lib/repository.js';
import { restrictPoolRole } from './lib/role-pool.js';

const connection = databaseConfig(process.env.DATABASE_URL);
const max = Number(process.env.DATABASE_POOL_MAX || (process.env.VERCEL ? 1 : 3));
if (!Number.isInteger(max) || max < 1 || max > 20) throw new Error('DATABASE_POOL_MAX must be between 1 and 20.');
const rawPool = new pg.Pool({
  ...connection, max, idleTimeoutMillis: process.env.VERCEL ? 5000 : 10000, connectionTimeoutMillis: 5000,
  statement_timeout: 15000, query_timeout: 16000,
  application_name: 'pati-api', allowExitOnIdle: true
});
rawPool.on('error', error => console.error('Database pool error:', error.code));
const transactionPooling = new URL(connection.connectionString || 'postgresql://localhost').port === '6543';
export const pool = restrictPoolRole(rawPool, 'pati_api', { transactionPooling });
export const repository = createRepository(pool);
export async function checkDatabaseConnection() {
  const result = await pool.query('SELECT current_database() AS database, NOW() AS checked_at');
  return result.rows[0];
}
export async function initDatabase() {
  throw new Error('Schema initialization is explicit. Run npm run db:migrate with a migration connection.');
}
export const getHotels = async (query = {}) => (await repository.page('hotels',query)).data;
export const saveHotel = payload => repository.save('hotels',payload);
export const deleteHotel = (id,version) => repository.remove('hotels',id,version);
export const getBoardings = async (query = {}) => (await repository.page('boardings',query)).data;
export const saveBoarding = payload => repository.save('boardings',payload);
export const deleteBoarding = (id,version) => repository.remove('boardings',id,version);
export const getGuides = async (query = {}) => (await repository.page('guides',query)).data;
export const saveGuide = payload => repository.save('guides',payload);
export const deleteGuide = (id,version) => repository.remove('guides',id,version);
export const getPetTaxis = async (query = {}) => (await repository.page('pet_taxis',query)).data;
export const savePetTaxi = payload => repository.save('pet_taxis',payload);
export const deletePetTaxi = (id,version) => repository.remove('pet_taxis',id,version);
export const getVets = async (query = {}) => (await repository.page('vets',query)).data;
export const saveVet = payload => repository.save('vets',payload);
export const deleteVet = (id,version) => repository.remove('vets',id,version);
export const getExperiences = async (query = {}) => {
  await ensureExperiencesTableAndSeed().catch(() => {});
  return (await repository.page('experiences',query)).data;
};
export const saveExperience = payload => repository.save('experiences',payload);
export const deleteExperience = (id,version) => repository.remove('experiences',id,version);
export const getAds = async (query = {}) => (await repository.page('ads',query)).data;
export const saveAd = payload => repository.save('ads',payload);
export const deleteAd = (id,version) => repository.remove('ads',id,version);
export const getCorrections = async query => (await repository.feedbackPage('corrections',query,true)).data;
export const getComplaints = async query => (await repository.feedbackPage('complaints',query)).data;
export const getReviews = async targetId => (await repository.feedbackPage('reviews',{targetId})).data;
export const saveCorrection = payload => repository.submit('corrections',payload);
export const saveComplaint = payload => repository.submit('complaints',payload);
export const saveReview = payload => repository.submit('reviews',payload);
export const getAdApplications = async query => (await repository.feedbackPage('ad_applications',query,true)).data;
export async function saveAdApplication(a) {
  const result = await pool.query(`INSERT INTO public.ad_applications(id,business_name,business_type,contact_name,email,phone,website,city,message)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id,created_at`,
    [a.id,a.businessName,a.businessType,a.contactName,a.email,a.phone,a.website||null,a.city,a.message||null]);
  return result.rows[0];
}

function mapDogWalkerRow(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    fullName: row.full_name || row.name,
    email: row.email,
    phone: row.phone,
    city: row.city,
    district: row.district,
    hasDogExperience: row.has_dog_experience,
    hourlyRate: row.hourly_rate,
    services: typeof row.services === 'string' ? JSON.parse(row.services) : (row.services || ['Bireysel Yürüyüş', 'Günlük Egzersiz']),
    experience: row.experience,
    bio: row.bio,
    avatar: row.avatar,
    rating: Number(row.rating || 5.0),
    reviewCount: Number(row.review_count || 0),
    walkCount: Number(row.walk_count || 0),
    verified: Boolean(row.verified),
    status: row.status,
    createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at
  };
}

let tableEnsured = false;
async function ensureDogWalkerTable() {
  if (tableEnsured) return;
  try {
    await rawPool.query(`
      CREATE TABLE IF NOT EXISTS public.dog_walker_applications (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        full_name VARCHAR(120) NOT NULL,
        email VARCHAR(180) NOT NULL,
        phone VARCHAR(40) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        has_dog_experience TEXT NOT NULL,
        hourly_rate VARCHAR(50) NOT NULL,
        services JSONB DEFAULT '["Bireysel Yürüyüş", "Günlük Egzersiz"]'::jsonb,
        experience VARCHAR(100) DEFAULT 'Yeni Başvuru',
        bio TEXT,
        avatar VARCHAR(500),
        rating NUMERIC(3,1) DEFAULT 5.0,
        review_count INT DEFAULT 0,
        walk_count INT DEFAULT 0,
        verified BOOLEAN DEFAULT FALSE,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS dog_walker_applications_created_idx ON public.dog_walker_applications (created_at DESC);
      CREATE INDEX IF NOT EXISTS dog_walker_applications_status_idx ON public.dog_walker_applications (status);
      DO $$ BEGIN
        IF EXISTS (SELECT FROM pg_roles WHERE rolname = 'pati_api') THEN
          GRANT SELECT,INSERT,UPDATE,DELETE ON public.dog_walker_applications TO pati_api;
          IF NOT EXISTS (
            SELECT 1 FROM pg_policies 
            WHERE schemaname = 'public' 
              AND tablename = 'dog_walker_applications' 
              AND policyname = 'api_access'
          ) THEN
            ALTER TABLE public.dog_walker_applications ENABLE ROW LEVEL SECURITY;
            CREATE POLICY api_access ON public.dog_walker_applications TO pati_api USING (true) WITH CHECK (true);
          END IF;
        END IF;
      END $$;
    `);
    tableEnsured = true;
  } catch (err) {
    console.warn('[DB] ensureDogWalkerTable warning:', err.message);
  }
}

let expTableEnsured = false;
export async function ensureExperiencesTableAndSeed() {
  if (expTableEnsured) return;
  try {
    await rawPool.query(`
      CREATE TABLE IF NOT EXISTS public.experiences (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        image_url VARCHAR(2000) NOT NULL,
        pet_policy TEXT NOT NULL,
        allowed_pets JSONB NOT NULL,
        features JSONB NOT NULL,
        description TEXT NOT NULL,
        address TEXT,
        phone VARCHAR(255),
        website VARCHAR(2000),
        map_url VARCHAR(2000),
        best_time TEXT,
        rules TEXT,
        verified BOOLEAN DEFAULT TRUE,
        base_trust_score NUMERIC(3,1) NOT NULL,
        verification_note VARCHAR(255) DEFAULT 'Doğrulandı',
        last_verified DATE DEFAULT CURRENT_DATE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        version INT DEFAULT 1,
        modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      DO $$ BEGIN
        IF EXISTS (SELECT FROM pg_roles WHERE rolname = 'pati_api') THEN
          GRANT SELECT,INSERT,UPDATE,DELETE ON public.experiences TO pati_api;
        END IF;
      END $$;
    `);
    const countRes = await rawPool.query('SELECT COUNT(*)::int as count FROM public.experiences');
    if (countRes.rows[0]?.count === 0) {
      const items = JSON.parse(readFileSync(new URL('./data/experiences.json', import.meta.url), 'utf8'));
      for (const item of items) {
        await rawPool.query(`
          INSERT INTO public.experiences (
            id, name, category, city, district, image_url,
            pet_policy, allowed_pets, features, description,
            address, phone, website, map_url, best_time, rules,
            verified, base_trust_score, verification_note, last_verified
          ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8::jsonb,$9::jsonb,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20::date)
          ON CONFLICT (id) DO UPDATE SET
            name = EXCLUDED.name,
            category = EXCLUDED.category,
            city = EXCLUDED.city,
            district = EXCLUDED.district,
            image_url = EXCLUDED.image_url,
            pet_policy = EXCLUDED.pet_policy,
            allowed_pets = EXCLUDED.allowed_pets,
            features = EXCLUDED.features,
            description = EXCLUDED.description,
            address = EXCLUDED.address,
            phone = EXCLUDED.phone,
            website = EXCLUDED.website,
            map_url = EXCLUDED.map_url,
            best_time = EXCLUDED.best_time,
            rules = EXCLUDED.rules,
            verified = EXCLUDED.verified,
            base_trust_score = EXCLUDED.base_trust_score,
            verification_note = EXCLUDED.verification_note,
            last_verified = EXCLUDED.last_verified
        `, [
          item.id, item.name, item.category, item.city, item.district, item.imageUrl,
          item.petPolicy, JSON.stringify(item.allowedPets), JSON.stringify(item.features), item.description,
          item.address, item.phone, item.website, item.mapUrl, item.bestTime, item.rules,
          item.verified, item.baseTrustScore, item.lastVerified, item.lastVerified
        ]);
      }
    }
    expTableEnsured = true;
  } catch (err) {
    // Database connection may not be running; repository static fallback will be used
  }
}

export async function saveDogWalkerApplication(w) {
  await ensureDogWalkerTable();
  const query = `
    INSERT INTO public.dog_walker_applications (
      id, name, full_name, email, phone, city, district,
      has_dog_experience, hourly_rate, services, experience,
      bio, avatar, rating, review_count, walk_count, verified, status, created_at
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7,
      $8, $9, $10, $11,
      $12, $13, $14, $15, $16, $17, $18, $19
    )
    ON CONFLICT (id) DO UPDATE SET
      status = EXCLUDED.status,
      verified = EXCLUDED.verified
    RETURNING *
  `;
  const values = [
    String(w.id),
    String(w.name || w.fullName || ''),
    String(w.fullName || w.name || ''),
    String(w.email || ''),
    String(w.phone || ''),
    String(w.city || ''),
    String(w.district || 'Merkez'),
    String(w.hasDogExperience || ''),
    String(w.hourlyRate || '350 ₺'),
    JSON.stringify(w.services || ['Bireysel Yürüyüş', 'Günlük Egzersiz']),
    String(w.experience || 'Yeni Başvuru'),
    String(w.bio || ''),
    w.avatar ? String(w.avatar) : null,
    Number(w.rating || 5.0),
    Number(w.reviewCount || 0),
    Number(w.walkCount || 0),
    Boolean(w.verified),
    String(w.status || 'pending'),
    w.createdAt || new Date().toISOString()
  ];
  const result = await pool.query(query, values);
  return mapDogWalkerRow(result.rows[0]);
}

export async function getDogWalkerApplications(filter = {}) {
  await ensureDogWalkerTable();
  let query = `SELECT * FROM public.dog_walker_applications`;
  const where = [];
  const values = [];
  if (filter.status && filter.status !== 'all') {
    values.push(filter.status);
    where.push(`status = $${values.length}`);
  }
  if (filter.city && filter.city !== 'all') {
    values.push(filter.city.toLowerCase());
    where.push(`LOWER(city) = $${values.length}`);
  }
  if (where.length) {
    query += ` WHERE ` + where.join(' AND ');
  }
  query += ` ORDER BY created_at DESC`;
  const result = await pool.query(query, values);
  return result.rows.map(mapDogWalkerRow);
}

export async function updateDogWalkerApplication(id, { status, verified }) {
  const sets = [];
  const values = [];
  if (status !== undefined) {
    values.push(status);
    sets.push(`status = $${values.length}`);
  }
  if (typeof verified === 'boolean') {
    values.push(verified);
    sets.push(`verified = $${values.length}`);
  }
  if (sets.length === 0) return null;
  values.push(String(id));
  const query = `UPDATE public.dog_walker_applications SET ${sets.join(', ')} WHERE id = $${values.length} RETURNING *`;
  const result = await pool.query(query, values);
  return result.rows[0] ? mapDogWalkerRow(result.rows[0]) : null;
}

export async function deleteDogWalkerApplication(id) {
  const result = await pool.query(`DELETE FROM public.dog_walker_applications WHERE id = $1 RETURNING id`, [String(id)]);
  return result.rowCount > 0;
}

