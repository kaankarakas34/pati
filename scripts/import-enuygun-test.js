import { chromium } from 'playwright-core';
import dotenv from 'dotenv';
import { existsSync } from 'node:fs';

dotenv.config();

const args = process.argv.slice(2);
const searchUrl = args.find((arg) => arg.startsWith('http'));
const shouldSave = args.includes('--save');
const limitArg = args.find((arg) => arg.startsWith('--limit='));
const limit = Math.max(1, Math.min(10, Number(limitArg?.split('=')[1] || 1)));
const apiUrl = process.env.API_URL || 'http://localhost:3000';

if (!searchUrl || !searchUrl.includes('enuygun.com/otel/')) {
  console.error('Kullanim: npm run import:enuygun:test -- "ARAMA_URL" --limit=1 --save');
  process.exit(1);
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
].filter(Boolean);

const executablePath = chromeCandidates.find((candidate) => existsSync(candidate));

function chooseGalleryImages(images = [], count = 6) {
  const selected = [];
  const usedUrls = new Set();
  const preferredTypes = ['pool', 'beach', 'exterior', 'sea', 'view', 'room'];

  for (const type of preferredTypes) {
    const image = images.find((item) => item.type === type && !usedUrls.has(item.url));
    if (image) {
      selected.push(image.url);
      usedUrls.add(image.url);
    }
  }

  for (const image of images) {
    if (selected.length >= count) break;
    if (!image?.url || usedUrls.has(image.url)) continue;
    selected.push(image.url);
    usedUrls.add(image.url);
  }

  return selected.slice(0, count);
}

function normalizeHotel({ details, canonicalUrl, description, sourceUrl }) {
  const activeFacilities = (details.facilitiesPriority || [])
    .filter((facility) => facility.availability)
    .map((facility) => facility.details)
    .filter(Boolean);
  const galleryImages = chooseGalleryImages(details.images);
  const discoveredAt = new Date().toISOString().split('T')[0];

  return {
    id: `enuygun-${details.id}`,
    name: details.name,
    city: details.address?.city || details.address?.state || 'Belirtilmedi',
    district: details.address?.town || details.address?.subTown || 'Belirtilmedi',
    type: 'Otel',
    allowedPets: ['other'],
    suitability: 1,
    weightLimit: 0,
    extraFee: 'Teyit bekliyor',
    features: activeFacilities,
    quizTags: (details.suitabilityItems || []).map((item) => item.slug).filter(Boolean),
    baseTrustScore: 0,
    verified: false,
    lastVerified: 'Doğrulanmayı bekliyor',
    imageUrl: galleryImages[0] || details.extra?.thumbnailImage || '',
    galleryImages,
    description: description || `${details.name}, evcil hayvan kabul eden aday tesis olarak bulundu.`,
    whySelected: 'Enuygun evcil hayvan kabul eden oteller filtresinde aday olarak bulundu.',
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
    bookingLinks: { enuygun: canonicalUrl || sourceUrl, otelz: '', booking: '' },
    editorNote: `Kesif kaynagi: ${sourceUrl}`,
    infoSource: `Enuygun aday kesfi - ${discoveredAt}`,
    faq: []
  };
}

async function extractHotel(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForSelector('#__NEXT_DATA__', { state: 'attached', timeout: 30000 });

  const extracted = await page.evaluate(() => {
    const nextData = JSON.parse(document.querySelector('#__NEXT_DATA__').textContent);
    const details = nextData.props?.pageProps?.detailInfo?.hotel?.details;
    const hotelJsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .map((script) => {
        try {
          return JSON.parse(script.textContent);
        } catch {
          return null;
        }
      })
      .flatMap((entry) => entry?.['@graph'] || (entry ? [entry] : []))
      .find((entry) => entry?.['@type'] === 'Hotel');

    const descriptionElement = document.createElement('div');
    descriptionElement.innerHTML = hotelJsonLd?.description || '';

    return {
      details,
      canonicalUrl: document.querySelector('link[rel="canonical"]')?.href || location.href,
      description: descriptionElement.textContent?.replace(/\s+/g, ' ').trim() || ''
    };
  });

  if (!extracted.details) {
    throw new Error(`Otel detay verisi bulunamadi: ${url}`);
  }

  return normalizeHotel({ ...extracted, sourceUrl: url });
}

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath });
  const context = await browser.newContext({ locale: 'tr-TR' });
  const page = await context.newPage();

  try {
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForSelector('a[href*="/otel/detay/"]', { timeout: 45000 });

    const detailUrls = await page.locator('a[href*="/otel/detay/"]').evaluateAll((links) =>
      [...new Set(links.map((link) => link.href))]
    );

    const selectedUrls = detailUrls.slice(0, limit);
    console.log(`Bulunan aday otel: ${detailUrls.length}. Islenecek: ${selectedUrls.length}.`);

    for (const detailUrl of selectedUrls) {
      const hotel = await extractHotel(page, detailUrl);
      console.log(JSON.stringify({
        id: hotel.id,
        name: hotel.name,
        location: `${hotel.district}, ${hotel.city}`,
        featureCount: hotel.features.length,
        galleryImages: hotel.galleryImages,
        verified: hotel.verified
      }, null, 2));

      if (shouldSave) {
        if (!process.env.ADMIN_TOKEN) {
          throw new Error('Kaydetmek icin .env dosyasinda ADMIN_TOKEN bulunmali.');
        }
        const response = await fetch(`${apiUrl}/api/hotels`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-token': process.env.ADMIN_TOKEN
          },
          body: JSON.stringify(hotel)
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || `API hatasi: ${response.status}`);
        console.log(`${hotel.name} yerel veritabanina kaydedildi.`);
      }
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
