import { classifyHotel, createCandidate, unique } from './common.js';

const GLOBAL_THEME_URL = 'https://www.enuygun.com/otel/tema/evcil-hayvan-dostu-oteller/';

function buildThemeUrl(citySlug) {
  return citySlug === 'all'
    ? GLOBAL_THEME_URL
    : `https://www.enuygun.com/otel/tema/${citySlug}-evcil-hayvan-dostu-oteller/`;
}

async function collectDetailUrls(page, citySlug, limit) {
  const discovered = new Set();
  let pageNumber = 1;
  let totalPages = 1;

  while (pageNumber <= totalPages && discovered.size < limit) {
    const baseUrl = buildThemeUrl(citySlug);
    const url = pageNumber === 1 ? baseUrl : `${baseUrl}?page=${pageNumber}`;
    let loaded = false;
    for (let attempt = 1; attempt <= 2; attempt += 1) {
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForSelector('a[href*="/otel/detay/"]', { state: 'attached', timeout: 45000 });
        loaded = true;
        break;
      } catch (error) {
        console.warn(`[enuygun] Liste ${pageNumber} deneme ${attempt} başarısız: ${error.message.split('\n')[0]}`);
      }
    }
    if (!loaded) {
      console.warn(`[enuygun] Liste ${pageNumber} atlandı; diğer sayfalarla devam ediliyor.`);
      pageNumber += 1;
      continue;
    }

    const result = await page.evaluate(() => {
      const links = [...new Set([...document.querySelectorAll('a[href*="/otel/detay/"]')].map((link) => link.href))];
      const match = document.body.innerText.match(/([\d.]+)\s+sonuç bulundu/i);
      return { links, total: Number((match?.[1] || '0').replace(/\./g, '')) };
    });

    totalPages = Math.max(1, Math.ceil(result.total / 20));
    const before = discovered.size;
    result.links.forEach((url) => discovered.add(url));
    console.log(`[enuygun] Liste ${pageNumber}/${totalPages}: toplam ${discovered.size} bağlantı`);
    if (discovered.size === before) break;
    pageNumber += 1;
  }

  return [...discovered].slice(0, limit);
}

async function extractDetail(page, sourceUrl) {
  await page.goto(sourceUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#__NEXT_DATA__', { state: 'attached', timeout: 30000 });

  const extracted = await page.evaluate(() => {
    const nextData = JSON.parse(document.querySelector('#__NEXT_DATA__').textContent);
    const details = nextData.props?.pageProps?.detailInfo?.hotel?.details;
    const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .map((script) => {
        try { return JSON.parse(script.textContent); } catch { return null; }
      })
      .flatMap((entry) => entry?.['@graph'] || (entry ? [entry] : []))
      .find((entry) => entry?.['@type'] === 'Hotel');
    const text = document.createElement('div');
    text.innerHTML = jsonLd?.description || '';
    return {
      details,
      canonicalUrl: document.querySelector('link[rel="canonical"]')?.href || location.href,
      description: text.textContent?.replace(/\s+/g, ' ').trim() || ''
    };
  });

  const details = extracted.details;
  if (!details?.id || !details?.name) throw new Error('Detay verisi bulunamadı.');
  const facilitiesPriority = Array.isArray(details.facilitiesPriority)
    ? details.facilitiesPriority
    : Object.values(details.facilitiesPriority || {});
  const features = facilitiesPriority
    .filter((facility) => facility.availability)
    .map((facility) => facility.details)
    .filter(Boolean);
  const images = unique((details.images || []).map((image) => image?.url)).slice(0, 6);
  const canonicalUrl = extracted.canonicalUrl || sourceUrl;

  return createCandidate({
    id: `enuygun-${details.id}`,
    name: details.name,
    city: details.address?.city || details.address?.state,
    district: details.address?.town || details.address?.subTown,
    type: classifyHotel(details.name),
    features,
    galleryImages: images,
    description: extracted.description,
    source: 'enuygun',
    sourceUrl: canonicalUrl,
    address: [details.address?.address, details.address?.town, details.address?.city].filter(Boolean).join(', ')
  });
}

export async function scrapeEnuygun({ browser, citySlug = 'all', limit = Infinity, onCandidate = null, candidateFilter = null }) {
  const context = await browser.newContext({ locale: 'tr-TR' });
  const page = await context.newPage();
  const candidates = [];

  try {
    const detailUrls = await collectDetailUrls(page, citySlug, limit);
    for (let index = 0; index < detailUrls.length; index += 1) {
      try {
        const candidate = await extractDetail(page, detailUrls[index]);
        if (candidateFilter && !candidateFilter(candidate)) {
          console.log(`[enuygun] Kapsam dışı: ${candidate.name} (${candidate.district}, ${candidate.city})`);
          continue;
        }
        candidates.push(candidate);
        if (onCandidate) await onCandidate(candidate);
        console.log(`[enuygun] ${index + 1}/${detailUrls.length}: ${candidate.name}`);
      } catch (error) {
        console.warn(`[enuygun] Atlandı: ${detailUrls[index]} (${error.message})`);
      }
    }
  } finally {
    await context.close();
  }

  return candidates;
}
