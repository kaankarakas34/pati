import { classifyHotel, createCandidate, slugify, unique } from './common.js';

export const TURKEY_CITIES = [
  'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan',
  'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu',
  'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne',
  'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay',
  'Iğdır', 'Isparta', 'İstanbul', 'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu',
  'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
  'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize',
  'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Şanlıurfa', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon',
  'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
];

export const POPULAR_DESTINATIONS = [
  { name: 'Antalya', slug: 'antalya' },
  { name: 'Alanya', slug: 'alanya' },
  { name: 'Kemer', slug: 'kemer' },
  { name: 'Side', slug: 'manavgat-side' },
  { name: 'Belek', slug: 'serik-belek' },
  { name: 'Kaş', slug: 'kas' },
  { name: 'Lara', slug: 'muratpasa-lara' },
  { name: 'Adrasan', slug: 'kumluca-adrasan' },
  { name: 'Muğla', slug: 'mugla' },
  { name: 'Bodrum', slug: 'bodrum' },
  { name: 'Fethiye', slug: 'fethiye' },
  { name: 'Marmaris', slug: 'marmaris' },
  { name: 'Datça', slug: 'datca' },
  { name: 'Ölüdeniz', slug: 'oludeniz' },
  { name: 'İzmir', slug: 'izmir' },
  { name: 'Çeşme', slug: 'cesme' },
  { name: 'Alaçatı', slug: 'cesme-alacati' },
  { name: 'Aydın', slug: 'aydin' },
  { name: 'Kuşadası', slug: 'kusadasi' },
  { name: 'Didim', slug: 'didim' },
  { name: 'Balıkesir', slug: 'balikesir' },
  { name: 'Ayvalık', slug: 'ayvalik' },
  { name: 'Cunda', slug: 'ayvalik-cunda-adasi' },
  { name: 'Çanakkale', slug: 'canakkale' },
  { name: 'Bozcaada', slug: 'bozcaada' },
  { name: 'Assos', slug: 'ayvacik-canakkale-assos' },
  { name: 'İstanbul', slug: 'istanbul' },
  { name: 'Şile', slug: 'sile' },
  { name: 'Ağva', slug: 'agva' },
  { name: 'Nevşehir', slug: 'nevsehir' },
  { name: 'Kapadokya', slug: 'kapadokya' },
  { name: 'Sakarya', slug: 'sakarya' },
  { name: 'Sapanca', slug: 'sapanca' },
  { name: 'Bolu', slug: 'bolu' },
  { name: 'Abant', slug: 'abant-bolu' },
  { name: 'Bartın', slug: 'bartin' },
  { name: 'Amasra', slug: 'amasra' },
  { name: 'Bursa', slug: 'bursa' },
  { name: 'Uludağ', slug: 'uludag' },
  { name: 'Mersin', slug: 'mersin' }
];

function dateString(date) {
  return date.toISOString().slice(0, 10);
}

function buildSearchUrl(place, pageNumber) {
  const checkin = new Date();
  checkin.setDate(checkin.getDate() + 1);
  const checkout = new Date(checkin);
  checkout.setDate(checkout.getDate() + 1);
  const payload = {
    c: place.cCode || 'TR', p: place.id, t: place.type, g: 5, lt: place.lat, ln: place.lng,
    n: place.name, sp: place.searchName, cu: 1, s: dateString(checkin), e: dateString(checkout),
    q: 1, rt: 0, d: 0, z: 0, r: [{ a: 2, g: [] }], o: 0,
    f: [{ id: 197, group: 10 }], tn: 1, ps: 20, pn: pageNumber, ie: false, imr: false
  };
  return `https://www.otelz.com/search/s/${Buffer.from(JSON.stringify(payload)).toString('base64')}`;
}

async function getPlace(page, destination) {
  const slug = destination.slug || slugify(destination.name);
  await page.goto(`https://www.otelz.com/${slug}-otelleri`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#__NEXT_DATA__', { state: 'attached', timeout: 30000 });
  return page.evaluate(() => {
    const pageProps = JSON.parse(document.querySelector('#__NEXT_DATA__').textContent).props?.pageProps;
    return pageProps?.breadCrumbData?.places?.at(-1) || null;
  });
}

async function collectCityDetailUrls(page, place, remainingLimit) {
  const discovered = new Set();
  let pageNumber = 1;

  while (discovered.size < remainingLimit) {
    await page.goto(buildSearchUrl(place, pageNumber), { waitUntil: 'domcontentloaded', timeout: 60000 });
    try {
      await page.waitForSelector('a[href*="/hotel/"]', { timeout: 30000 });
    } catch {
      break;
    }
    const links = await page.evaluate(() => [...new Set(
      [...document.querySelectorAll('a[href*="/hotel/"]')]
        .map((link) => link.href)
        .filter((href) => /otelz\.com\/hotel\/[^/]+\/\d+/.test(href))
    )]);
    const before = discovered.size;
    links.forEach((url) => discovered.add(url));
    console.log(`[otelz] ${place.name} liste ${pageNumber}: toplam ${discovered.size} bağlantı`);
    if (links.length < 20 || discovered.size === before) break;
    pageNumber += 1;
  }

  return [...discovered].slice(0, remainingLimit);
}

async function extractDetail(page, sourceUrl) {
  await page.goto(sourceUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#__NEXT_DATA__', { state: 'attached', timeout: 30000 });
  const extracted = await page.evaluate(() => {
    const pageProps = JSON.parse(document.querySelector('#__NEXT_DATA__').textContent).props?.pageProps;
    const facility = pageProps?.facility;
    const features = (pageProps?.attributes || []).flatMap((group) => (group.items || []).map((item) => item.name));
    const cleaner = document.createElement('div');
    cleaner.innerHTML = facility?.description || facility?.summary || '';
    return {
      facility,
      features,
      description: cleaner.textContent?.replace(/\s+/g, ' ').trim() || facility?.summary || '',
      canonicalUrl: document.querySelector('link[rel="canonical"]')?.href || location.href
    };
  });

  const facility = extracted.facility;
  const petFriendly = facility?.petPolicy === 1 || extracted.features.some((feature) => /evcil hayvan/i.test(feature));
  if (!facility?.facilityId || !facility?.name) throw new Error('Detay verisi bulunamadı.');
  if (!petFriendly) throw new Error('Detay sayfasında evcil hayvan dostu işareti doğrulanamadı.');

  const locationParts = (facility.parentName || '').split(',').map((part) => part.trim()).filter(Boolean);
  const city = locationParts.at(-1) || 'Belirtilmedi';
  const district = locationParts.at(-2) || locationParts[0] || 'Belirtilmedi';
  const galleryImages = unique((facility.photos || []).map((path) => `https://imgkit.otelz.com/${path}`)).slice(0, 6);
  const mapUrl = facility.latitude && facility.longitude
    ? `https://maps.google.com/?q=${facility.latitude},${facility.longitude}`
    : '';

  return createCandidate({
    id: `otelz-${facility.facilityId}`,
    name: facility.name,
    city,
    district,
    type: classifyHotel(facility.name),
    features: extracted.features,
    galleryImages,
    description: extracted.description,
    source: 'otelz',
    sourceUrl: extracted.canonicalUrl || sourceUrl,
    address: facility.address,
    mapUrl
  });
}

export async function scrapeOtelz({ browser, city = 'Antalya', allCities = false, popularDestinations = false, limit = Infinity, onCandidate = null }) {
  const context = await browser.newContext({ locale: 'tr-TR' });
  const page = await context.newPage();
  const destinations = popularDestinations
    ? POPULAR_DESTINATIONS
    : (allCities ? TURKEY_CITIES.map((name) => ({ name })) : [{ name: city }]);
  const candidates = [];
  const processedDetailUrls = new Set();

  try {
    for (const destination of destinations) {
      if (candidates.length >= limit) break;
      const cityName = destination.name;
      try {
        const place = await getPlace(page, destination);
        if (!place?.id) {
          console.warn(`[otelz] ${cityName}: şehir metadata bulunamadı.`);
          continue;
        }
        const urls = await collectCityDetailUrls(page, place, limit - candidates.length);
        for (let index = 0; index < urls.length && candidates.length < limit; index += 1) {
          const detailKey = urls[index].split('?')[0].replace(/\/$/, '');
          if (processedDetailUrls.has(detailKey)) {
            console.log(`[otelz] Tekrar atlandı: ${detailKey}`);
            continue;
          }
          processedDetailUrls.add(detailKey);
          try {
            const candidate = await extractDetail(page, urls[index]);
            candidates.push(candidate);
            if (onCandidate) await onCandidate(candidate);
            console.log(`[otelz] ${cityName} ${index + 1}/${urls.length}: ${candidate.name}`);
          } catch (error) {
            console.warn(`[otelz] Atlandı: ${urls[index]} (${error.message})`);
          }
        }
      } catch (error) {
        console.warn(`[otelz] ${cityName} atlandı: ${error.message}`);
      }
    }
  } finally {
    await context.close();
  }

  return candidates;
}
