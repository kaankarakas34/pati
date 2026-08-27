import dotenv from 'dotenv';
import { API_URL, findDuplicate, mergeCandidate } from './scrapers/common.js';

dotenv.config();

const shouldSave = process.argv.includes('--save');

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, options);
  const result = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(result?.error || `API hatası: ${response.status}`);
  return result;
}

async function main() {
  if (shouldSave && !process.env.ADMIN_TOKEN) throw new Error('.env dosyasında ADMIN_TOKEN bulunmalı.');
  const hotels = await request('/api/hotels');
  const canonical = [];
  const duplicates = [];

  for (const hotel of hotels) {
    const match = findDuplicate(canonical, hotel);
    if (!match) {
      canonical.push(hotel);
      continue;
    }

    const keeper = hotel.verified === true && match.verified !== true ? hotel : match;
    const removed = keeper === hotel ? match : hotel;
    const merged = mergeCandidate(keeper, removed);
    const index = canonical.indexOf(match);
    canonical[index] = merged;
    duplicates.push({ keeper: merged, removed });
  }

  if (duplicates.length === 0) {
    console.log(`${hotels.length} tesis kontrol edildi; mükerrer bulunmadı.`);
    return;
  }

  for (const { keeper, removed } of duplicates) {
    console.log(`${removed.name} [${removed.id}] -> ${keeper.name} [${keeper.id}]`);
    if (!shouldSave) continue;
    await request('/api/hotels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': process.env.ADMIN_TOKEN },
      body: JSON.stringify(keeper)
    });
    await request(`/api/hotels/${encodeURIComponent(removed.id)}`, {
      method: 'DELETE',
      headers: { 'x-admin-token': process.env.ADMIN_TOKEN }
    });
  }

  console.log(`${duplicates.length} mükerrer ${shouldSave ? 'birleştirildi' : 'bulundu (değişiklik yapılmadı)'}.`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
