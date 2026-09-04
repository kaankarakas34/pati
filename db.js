import pg from 'pg';
import 'dotenv/config';
import { databaseConfig } from './lib/database-config.js';
import { createRepository } from './lib/repository.js';

const connection = databaseConfig(process.env.DATABASE_URL);
const max = Number(process.env.DATABASE_POOL_MAX || 3);
if (!Number.isInteger(max) || max < 1 || max > 20) throw new Error('DATABASE_POOL_MAX must be between 1 and 20.');
export const pool = new pg.Pool({
  ...connection, max, idleTimeoutMillis: 10000, connectionTimeoutMillis: 5000,
  statement_timeout: 15000, query_timeout: 16000,
  application_name: 'pati-api', options: '-c role=pati_api'
});
pool.on('error', error => console.error('Database pool error:', error.code));
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
