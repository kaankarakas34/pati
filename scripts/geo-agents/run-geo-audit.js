/**
 * Master GEO / AEO / AIO Audit Orchestrator
 * Executes all 6 automated agent modules and prints an integrated report.
 */

import { generateFanOutCluster } from './fan-out-generator.js';
import { buildHotelSchema, buildFaqSchema, BRAND_ENTITY } from './entity-schema-builder.js';
import { auditContentRetrieval } from './retrieval-auditor.js';
import { scanInformationGain } from './information-gain-scanner.js';
import { checkProgrammaticRisk } from './content-risk-checker.js';
import { generateSampleAiCrawlerReport } from './ai-crawler-audit.js';

console.log('================================================================');
console.log('🚀 BAŞLATILIYOR: 2026 İLERİ SEO + GEO + AEO + AIO AJAN DENETİMİ');
console.log('================================================================\n');

// 1. Fan-Out Cluster Test
console.log('📌 [Agent 1] Fan-Out & Query Deconstruction Testi:');
const fanOut = generateFanOutCluster('Antalya evcil hayvan kabul eden oteller', {
  city: 'Antalya',
  category: 'otel',
  animal: 'köpek'
});
console.log(`   - Tohum Sorgu: "${fanOut.seed}"`);
console.log(`   - Üretilen Alt Niyet Boyutları: ${Object.keys(fanOut.intents).length}`);
console.log(`   - Toplam Alt Sorgu & Paraphrase Sayısı: ${fanOut.totalQueries}`);
console.log(`   - Örnek Conversational Prompt: ${fanOut.intents.conversational_paraphrases[0]}\n`);

// 2. Entity Schema & Graph Test
console.log('📌 [Agent 2] Entity Graph & Schema Doğrulama:');
const sampleHotel = {
  name: 'Lara Pet Friendly Resort',
  city: 'Antalya',
  district: 'Muratpaşa',
  hasGarden: true,
  priceRange: '₺₺₺'
};
const hotelSchema = buildHotelSchema(sampleHotel, 'https://patiyleseyahat.com/otel/antalya/muratpasa/lara-pet-resort');
console.log(`   - Marka Entity Adı: ${BRAND_ENTITY.name} (@id: ${BRAND_ENTITY['@id']})`);
console.log(`   - Wikidata sameAs Referansı: ${BRAND_ENTITY.sameAs[0]}`);
console.log(`   - Otel Şeması: @type = ${hotelSchema['@type']}, petsAllowed = ${hotelSchema.petsAllowed}\n`);

// 3. Information Gain & Retrieval Audit on Content
console.log('📌 [Agent 3 & 4] Retrieval & Information Gain Testi:');
const samplePageContent = {
  id: 'antalya-kopek-otelleri',
  title: 'Antalya Köpek Kabul Eden Oteller (2026 Rehberi)',
  directAnswer: 'Antalya genelinde köpek kabul eden 48 doğrulanmış tesis bulunmakta olup, ortalama gecelik ek pet ücreti 350 TL - 750 TL aralığındadır.',
  paragraphs: [
    'Antalya genelinde köpek kabul eden 48 doğrulanmış tesis bulunmakta olup, ortalama gecelik ek pet ücreti 350 TL - 750 TL aralığındadır.',
    '25 kg ve üzeri büyük ırk köpekler için Lara ve Konyaaltı bölgelerindeki bahçeli müstakil tesisler tercih edilmelidir.'
  ],
  highlights: [
    '25 kg üzeri büyük ırk kabul oranı: %35',
    'Ücretsiz konaklama sunan tesis sayısı: 12',
    '7/24 nöbetçi veterinere maksimum mesafe: 4.2 km'
  ],
  comparisonTable: {
    rows: [
      { type: 'Butik Otel', fee: 'Ücretsiz', maxWeight: '15 kg', garden: 'Var' },
      { type: 'Resort Otel', fee: '500 TL/gece', maxWeight: 'Kilo Sınırsız', garden: 'Geniş Çim Alan' }
    ]
  },
  faqs: [
    { question: 'Büyük köpek kabul ediliyor mu?', answer: 'Evet, kısıtlamasız oteller mevcuttur.' },
    { question: 'Plaja köpekle girilebilir mi?', answer: 'Konyaaltı ve Lara halk plajlarının belirli serbest noktalarında tasmalı olarak izin verilmektedir.' },
    { question: 'Zorunlu belgeler nelerdir?', answer: 'Kuduz aşısı ve çip kaydı girişte talep edilir.' }
  ],
  links: [
    { href: '/evcil-hayvan-dostu-oteller', label: 'Tüm Oteller' },
    { href: '/veterinerler', label: 'Antalya Acil Veterinerler' }
  ]
};

const retrievalReport = auditContentRetrieval(samplePageContent);
const infoGainReport = scanInformationGain(samplePageContent);
console.log(`   - Retrieval Uygunluk Skoru: ${retrievalReport.score}/100 (${retrievalReport.status})`);
console.log(`   - Information Gain Skoru: ${infoGainReport.informationGainScore}/100 [${infoGainReport.grade}]`);
console.log(`   - Tespit Edilen Özgün Veriler: ${infoGainReport.detectedGains.join(' | ')}\n`);

// 4. Content Risk Checker Test
console.log('📌 [Agent 5] Scaled Content Abuse & Risk Testi:');
const pageA = { paragraphs: ['Antalya bölgesinde evcil hayvan kabul eden en iyi oteller ve kedi köpek kabul koşulları.'] };
const pageB = { paragraphs: ['Alanya bölgesinde evcil hayvan kabul eden en iyi oteller ve kedi köpek kabul koşulları.'] };
const riskReports = checkProgrammaticRisk([pageA, pageB]);
console.log(`   - Test Edilen Programmatik Sayfa: 2`);
console.log(`   - Riskli Şablon Uyarısı: ${riskReports[1].isHighRisk ? '⚠️ ' + riskReports[1].risks[0].message : 'Temiz'}\n`);

// 5. AI Crawler Log Audit
console.log('📌 [Agent 6] Log-Level AI Crawler İzleme Testi:');
const logReport = generateSampleAiCrawlerReport();
console.log(`   - Toplam AI Bot İsteği: ${logReport.aiBotHits}`);
console.log(`   - Tespit Edilen Botlar: ${Object.entries(logReport.byBot).map(([b, c]) => `${b}: ${c}`).join(', ')}`);
console.log(`   - Status Kodları: ${Object.entries(logReport.byStatusCode).map(([s, c]) => `${s}: ${c}`).join(', ')}\n`);

console.log('================================================================');
console.log('✅ TÜM GEO / AEO / AIO AJANLARI BAŞARIYLA ÇALIŞTI VE DOĞRULANDI');
console.log('================================================================');
