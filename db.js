import pg from 'pg';
import 'dotenv/config';
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
export const getExperiences = async (query = {}) => (await repository.page('experiences',query)).data;
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

export async function saveDogWalkerApplication(w) {
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
    String(w.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces'),
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

