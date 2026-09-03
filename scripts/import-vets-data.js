import fs from 'fs';
import path from 'path';
import pg from 'pg';

const { Pool } = pg;

const jsonPath = 'C:\\Users\\murat\\OneDrive\\Desktop\\google map scraper\\veteriner-output\\veteriner_24_7_list.json';
const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const districtCityMap = {
  'Bodrum': { city: 'Muğla', district: 'Bodrum' },
  'Fethiye': { city: 'Muğla', district: 'Fethiye' },
  'Marmaris': { city: 'Muğla', district: 'Marmaris' },
  'Alanya': { city: 'Antalya', district: 'Alanya' },
  'Kuşadası': { city: 'Aydın', district: 'Kuşadası' },
  'Alaçatı': { city: 'İzmir', district: 'Çeşme' },
  'Çeşme': { city: 'İzmir', district: 'Çeşme' },
  'Sapanca': { city: 'Sakarya', district: 'Sapanca' },
  'Ayvalık': { city: 'Balıkesir', district: 'Ayvalık' }
};

let count = 0;
const processed = [];

Object.entries(rawData).forEach(([key, list]) => {
  list.forEach((item) => {
    count++;
    let city = key;
    let district = key;

    if (districtCityMap[key]) {
      city = districtCityMap[key].city;
      district = districtCityMap[key].district;
    }

    if (item.address) {
      const parts = item.address.split(',');
      const lastPart = parts[parts.length - 1].trim();
      const match = lastPart.match(/([A-Za-zÇÇĞğİıÖöŞşAaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpRrSsŞşTtUuÜüVvYyZz\s]+)\/([A-Za-zÇÇĞğİıÖöŞşAaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpRrSsŞşTtUuÜüVvYyZz\s]+)$/);
      if (match) {
        district = match[1].replace(/^\d+\s*/, '').trim();
        city = match[2].trim();
      }
    }

    const rating = item.rating ? Number(item.rating) : 4.8;
    const baseTrustScore = Math.min(10, Math.max(1, Number((rating * 2).toFixed(1))));
    
    const features = ['7/24 Acil Servis', 'Yoğun Bakım Ünitesi', 'Cerrahi Müdahale'];
    if (item.reviews && item.reviews > 80) features.push('Laboratuvar & Röntgen');

    const descRating = item.rating ? ` (Google Haritalar Puanı: ${item.rating}${item.reviews ? `, ${item.reviews} değerlendirme` : ''})` : '';

    processed.push({
      id: `vet-${count}`,
      name: item.title.trim(),
      city: city,
      district: district,
      imageUrl: '',
      address: item.address ? item.address.trim() : '',
      features: features,
      description: `${item.title.trim()}, ${city} ${district} bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır.${descRating}`,
      phone: item.phone ? item.phone.trim() : '',
      email: '',
      website: item.website ? item.website.trim() : '',
      baseTrustScore: baseTrustScore,
      lastVerified: '2026-09-03'
    });
  });
});

console.log(`Prepared ${processed.length} vet records.`);

// Update src/data/mockData.js
const mockDataPath = path.resolve(process.cwd(), 'src/data/mockData.js');
let mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

const exportRegex = /export const initialVets = \[[\s\S]*?\];/;
const newExportCode = `export const initialVets = ${JSON.stringify(processed, null, 2)};`;

if (exportRegex.test(mockDataContent)) {
  mockDataContent = mockDataContent.replace(exportRegex, newExportCode);
  fs.writeFileSync(mockDataPath, mockDataContent, 'utf8');
  console.log('Successfully updated initialVets in src/data/mockData.js');
} else {
  console.error('Could not find initialVets export in src/data/mockData.js');
}

// Database sync if process.env.DATABASE_URL is set
const connectionString = process.env.DATABASE_URL || 'postgresql://pati_user:pati_password@localhost:5436/pati_db';

async function syncDb() {
  const pool = new Pool({
    connectionString,
    ssl: false,
    connectionTimeoutMillis: 3000
  });

  try {
    const client = await pool.connect();
    console.log('Connected to Postgres database. Upserting records...');

    await client.query(`
      CREATE TABLE IF NOT EXISTS vets (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        image_url VARCHAR(2000) NOT NULL,
        address TEXT NOT NULL,
        features JSONB NOT NULL,
        description TEXT NOT NULL,
        phone VARCHAR(255),
        email VARCHAR(255),
        website VARCHAR(2000),
        base_trust_score NUMERIC(3,1) NOT NULL,
        last_verified VARCHAR(255) NOT NULL
      );
    `);

    for (const v of processed) {
      await client.query(`
        INSERT INTO vets (id, name, city, district, image_url, address, features, description, phone, email, website, base_trust_score, last_verified)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          city = EXCLUDED.city,
          district = EXCLUDED.district,
          image_url = EXCLUDED.image_url,
          address = EXCLUDED.address,
          features = EXCLUDED.features,
          description = EXCLUDED.description,
          phone = EXCLUDED.phone,
          email = EXCLUDED.email,
          website = EXCLUDED.website,
          base_trust_score = EXCLUDED.base_trust_score,
          last_verified = EXCLUDED.last_verified;
      `, [
        v.id, v.name, v.city, v.district, v.imageUrl, v.address,
        JSON.stringify(v.features), v.description, v.phone, v.email,
        v.website, v.baseTrustScore, v.lastVerified
      ]);
    }

    console.log(`Successfully synced ${processed.length} vets into database.`);
    client.release();
  } catch (err) {
    console.warn('Database sync note:', err.message);
  } finally {
    await pool.end();
  }
}

syncDb();
