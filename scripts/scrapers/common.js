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
    source: { provider: source, externalId: String(id).startsWith(`${source}-`) ? String(id).slice(source.length + 1) : String(id) },
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

  const apiUrl = process.env.API_URL || API_URL;
  const headers = { 'Content-Type': 'application/json', 'x-admin-token': process.env.ADMIN_TOKEN };
  let operationCount = 0;

  return {
    async save(candidate) {
      // Older callers carry source identity in the candidate ID.
      const legacySource = /^(enuygun|otelz)-(.+)$/.exec(candidate.id || '');
      const source = (candidate.source && typeof candidate.source === 'object')
        ? candidate.source
        : (legacySource && { provider: legacySource[1], externalId: legacySource[2] });
      if (typeof source?.provider !== 'string' || !source.provider.trim() || source.provider.length > 80
        || typeof source?.externalId !== 'string' || !source.externalId.trim() || source.externalId.length > 255) {
        throw new Error('Gecerli kaynak ve harici kayit kimligi gerekli.');
      }
      const identity = { provider: source.provider.trim(), externalId: source.externalId.trim() };
      const lookupResponse = await fetch(`${apiUrl}/api/source/${encodeURIComponent(identity.provider)}/${encodeURIComponent(identity.externalId)}`, { headers });
      let existing = null;
      if (lookupResponse.status !== 404) {
        existing = await lookupResponse.json();
        if (!lookupResponse.ok) throw new Error(existing?.error || `Kaynak sorgulanamadi: ${lookupResponse.status}`);
        if (!existing?.id || !Number.isInteger(existing.version) || existing.version < 1) {
          throw new Error('Kaynak sorgusu gecerli kayit kimligi ve surum dondurmedi.');
        }
      }

      const hotel = { ...mergeCandidate(existing, candidate) };
      delete hotel.id;
      delete hotel.version;
      delete hotel.source;
      if (existing) {
        hotel.id = existing.id;
        hotel.version = existing.version;
      } else {
        hotel.source = identity;
      }
      const saveResponse = await fetch(`${apiUrl}/api/hotels`, {
        method: 'POST', headers, body: JSON.stringify(hotel)
      });
      const result = await saveResponse.json();
      if (!saveResponse.ok || result?.success !== true) throw new Error(result?.error || `${hotel.name} kaydedilemedi (${saveResponse.status}).`);
      if (!result.data?.id || !Number.isInteger(result.data.version) || result.data.version < 1) {
        throw new Error('Kaydetme yaniti gecerli kayit kimligi ve surum dondurmedi.');
      }

      operationCount += 1;
      console.log(`[kayıt] ${result.data.name}${existing ? ' (kaynaklar birleştirildi)' : ''}`);
      return result.data;
    },
    get operationCount() {
      return operationCount;
    },
    get hotelCount() {
      // The paginated API does not expose a catalog total.
      return null;
    }
  };
}

export async function saveCandidates(candidates) {
  const saver = await createCandidateSaver();
  const saved = [];
  for (const candidate of candidates) saved.push(await saver.save(candidate));
  return saved;
}
