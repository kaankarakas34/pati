import { existsSync } from 'node:fs';

export const API_URL = process.env.API_URL || 'http://localhost:3000';

export function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ].filter(Boolean);
  return candidates.find((candidate) => existsSync(candidate));
}

export function slugify(value = '') {
  return value
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function normalizeName(value = '') {
  const aliases = {
    otel: 'hotel',
    butik: 'boutique',
    bungalov: 'bungalow',
    pansiyon: 'pension',
    suit: 'suite'
  };
  return slugify(value)
    .split('-')
    .filter(Boolean)
    .filter((token) => !['turkiye', 'turkey'].includes(token))
    .map((token) => aliases[token] || token)
    .sort()
    .join('-');
}

export function unique(values = []) {
  return [...new Set(values.filter(Boolean))];
}

export function classifyHotel(name = '') {
  const normalized = name.toLocaleLowerCase('tr-TR');
  if (/bungalov|bungalow/.test(normalized)) return 'Bungalov';
  if (/villa/.test(normalized)) return 'Villa';
  if (/glamping/.test(normalized)) return 'Glamping tesisi';
  if (/tatil köyü|holiday village/.test(normalized)) return 'Tatil köyü';
  if (/apart/.test(normalized)) return 'Apart Otel';
  if (/pansiyon|pension/.test(normalized)) return 'Pansiyon';
  if (/butik|boutique/.test(normalized)) return 'Butik Otel';
  return 'Otel';
}

export function createCandidate({
  id,
  name,
  city,
  district,
  type,
  features,
  galleryImages,
  description,
  source,
  sourceUrl,
  address = '',
  mapUrl = ''
}) {
  const discoveredAt = new Date().toISOString().slice(0, 10);
  const sourceLabel = source === 'enuygun' ? 'Enuygun' : 'Otelz';

  return {
    id,
    name,
    city: city || 'Belirtilmedi',
    district: district || 'Belirtilmedi',
    type: type || classifyHotel(name),
    allowedPets: ['other'],
    suitability: 1,
    weightLimit: 0,
    extraFee: 'Teyit bekliyor',
    features: unique(features),
    quizTags: [],
    baseTrustScore: 0,
    verified: false,
    lastVerified: 'Doğrulanmayı bekliyor',
    imageUrl: galleryImages[0] || '',
    galleryImages: unique(galleryImages).slice(0, 6),
    description: description || `${name}, evcil hayvan kabul eden aday tesis olarak bulundu.`,
    whySelected: `${sourceLabel} evcil hayvan dostu tesisler listesinde aday olarak bulundu.`,
    suitableFor: ['Evcil hayvan kabul bilgisi bulunan aday tesis'],
    notSuitableFor: ['Pet türü, ücret ve kısıtlamalar henüz işletme tarafından doğrulanmadı.'],
    disallowedPets: [],
    breedRestrictions: 'Teyit bekliyor',
    maxPetsPerRoom: 0,
    depositInfo: 'Teyit bekliyor',
    requiredDocs: 'Teyit bekliyor',
    canLeaveInRoomAlone: false,
    rules: { pool: 'Teyit bekliyor', beach: 'Teyit bekliyor', restaurant: 'Teyit bekliyor' },
    veterinarySupport: 'Teyit bekliyor',
    phone: '',
    email: '',
    website: '',
    bookingLinks: { enuygun: source === 'enuygun' ? sourceUrl : '', otelz: source === 'otelz' ? sourceUrl : '', booking: '' },
    editorNote: unique([address && `Adres: ${address}`, mapUrl && `Harita: ${mapUrl}`, `Keşif kaynağı: ${sourceUrl}`]).join('\n'),
    infoSource: `${sourceLabel} aday keşfi - ${discoveredAt}`,
    faq: []
  };
}

export function findDuplicate(hotels, candidate) {
  const candidateName = normalizeName(candidate.name);
  return hotels.find((hotel) => {
    if (normalizeName(hotel.name) !== candidateName) return false;
    const sameCity = slugify(hotel.city) === slugify(candidate.city);
    const sameDistrict = slugify(hotel.district) === slugify(candidate.district);
    return sameCity || sameDistrict || hotel.city === 'Belirtilmedi' || candidate.city === 'Belirtilmedi';
  });
}

export function mergeCandidate(existing, candidate) {
  if (!existing) return candidate;

  const preserveVerified = existing.verified !== false;
  const mergedImages = unique([...(existing.galleryImages || []), ...(candidate.galleryImages || [])]).slice(0, 6);
  const mergedLinks = {
    enuygun: candidate.bookingLinks?.enuygun || existing.bookingLinks?.enuygun || '',
    otelz: candidate.bookingLinks?.otelz || existing.bookingLinks?.otelz || '',
    booking: candidate.bookingLinks?.booking || existing.bookingLinks?.booking || ''
  };
  const sourceNames = unique([existing.infoSource, candidate.infoSource]).join(' | ');

  return {
    ...(preserveVerified ? candidate : existing),
    ...(preserveVerified ? existing : candidate),
    id: existing.id,
    name: existing.name || candidate.name,
    features: unique([...(existing.features || []), ...(candidate.features || [])]),
    galleryImages: mergedImages,
    imageUrl: existing.imageUrl || candidate.imageUrl || mergedImages[0] || '',
    description: preserveVerified
      ? existing.description
      : [existing.description, candidate.description].sort((a = '', b = '') => b.length - a.length)[0],
    bookingLinks: mergedLinks,
    editorNote: unique([existing.editorNote, candidate.editorNote]).join('\n'),
    infoSource: sourceNames,
    verified: existing.verified === true,
    baseTrustScore: existing.verified === true ? existing.baseTrustScore : 0,
    lastVerified: existing.verified === true ? existing.lastVerified : 'Doğrulanmayı bekliyor'
  };
}

export async function createCandidateSaver() {
  if (!process.env.ADMIN_TOKEN) throw new Error('.env dosyasında ADMIN_TOKEN bulunmalı.');

  const response = await fetch(`${API_URL}/api/hotels`);
  if (!response.ok) throw new Error(`Mevcut oteller alınamadı: ${response.status}`);
  const existingHotels = await response.json();
  let operationCount = 0;

  return {
    async save(candidate) {
    const duplicate = findDuplicate(existingHotels, candidate);
    const hotel = mergeCandidate(duplicate, candidate);
    const saveResponse = await fetch(`${API_URL}/api/hotels`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': process.env.ADMIN_TOKEN },
      body: JSON.stringify(hotel)
    });
    const result = await saveResponse.json();
    if (!saveResponse.ok) throw new Error(result.error || `${hotel.name} kaydedilemedi.`);

    const index = duplicate ? existingHotels.indexOf(duplicate) : -1;
    if (index >= 0) existingHotels[index] = hotel;
    else existingHotels.push(hotel);
    operationCount += 1;
    console.log(`[kayıt] ${hotel.name}${duplicate ? ' (kaynaklar birleştirildi)' : ''}`);
    return hotel;
    },
    get operationCount() {
      return operationCount;
    },
    get hotelCount() {
      return existingHotels.length;
    }
  };
}

export async function saveCandidates(candidates) {
  const saver = await createCandidateSaver();
  const saved = [];
  for (const candidate of candidates) saved.push(await saver.save(candidate));
  return saved;
}
