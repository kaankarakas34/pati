import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';
import dotenv from 'dotenv';
import { createCandidateSaver, findChrome, findDuplicate, mergeCandidate, slugify } from './scrapers/common.js';
import { scrapeEnuygun } from './scrapers/enuygun.js';
import { POPULAR_DESTINATIONS, scrapeOtelz } from './scrapers/otelz.js';

dotenv.config();

const args = process.argv.slice(2);
const valueOf = (name, fallback) => args.find((arg) => arg.startsWith(`--${name}=`))?.split('=').slice(1).join('=') || fallback;
const source = valueOf('source', 'all').toLocaleLowerCase('tr-TR');
const city = valueOf('city', 'Antalya');
const allCities = city.toLocaleLowerCase('tr-TR') === 'all';
const popularDestinations = city.toLocaleLowerCase('tr-TR') === 'popular';
const shouldSave = args.includes('--save');
const parsedLimit = Number(valueOf('limit', 'Infinity'));
const limit = Number.isFinite(parsedLimit) ? Math.max(1, parsedLimit) : Infinity;

if (!['all', 'enuygun', 'otelz'].includes(source)) {
  console.error('Kaynak --source=all, --source=enuygun veya --source=otelz olmalı.');
  process.exit(1);
}

function deduplicateRun(candidates) {
  const result = [];
  for (const candidate of candidates) {
    const duplicate = findDuplicate(result, candidate);
    if (!duplicate) {
      result.push(candidate);
      continue;
    }
    result[result.indexOf(duplicate)] = mergeCandidate(duplicate, candidate);
  }
  return result;
}

async function main() {
  const executablePath = findChrome();
  if (!executablePath) throw new Error('Google Chrome bulunamadı. CHROME_PATH ile konumunu belirtin.');
  const saver = shouldSave ? await createCandidateSaver() : null;
  const onCandidate = saver ? (candidate) => saver.save(candidate) : null;
  const browser = await chromium.launch({ headless: true, executablePath });
  const collected = [];
  const popularNames = new Set(POPULAR_DESTINATIONS.map((destination) => slugify(destination.name)));
  const candidateFilter = popularDestinations
    ? (candidate) => {
        const cityName = slugify(candidate.city);
        const districtName = slugify(candidate.district);
        return [...popularNames].some((name) => cityName.includes(name) || districtName.includes(name));
      }
    : null;

  try {
    if (source === 'all' || source === 'enuygun') {
      collected.push(...await scrapeEnuygun({
        browser,
        citySlug: allCities || popularDestinations ? 'all' : slugify(city),
        limit,
        onCandidate,
        candidateFilter
      }));
    }
    if (source === 'all' || source === 'otelz') {
      collected.push(...await scrapeOtelz({
        browser,
        city,
        allCities,
        popularDestinations,
        limit,
        onCandidate
      }));
    }
  } finally {
    await browser.close();
  }

  const candidates = deduplicateRun(collected);
  const outputDir = 'data/scraper-results';
  await mkdir(outputDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = `${outputDir}/${source}-${slugify(city)}-${stamp}.json`;
  await writeFile(outputPath, `${JSON.stringify(candidates, null, 2)}\n`, 'utf8');
  console.log(`\n${candidates.length} benzersiz tesis yerel rapora yazıldı: ${outputPath}`);

  if (shouldSave) {
    console.log(`${saver.operationCount} kaynak kaydı işlendi; veritabanında toplam ${saver.hotelCount} tesis var.`);
  } else {
    console.log('Veritabanı değiştirilmedi. İçe aktarmak için komuta --save ekleyin.');
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
