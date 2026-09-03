/**
 * Agent 1: Query Fan-Out Generator
 * Ref: Google AI Mode & Perplexity Multi-Hop Query Deconstruction
 * 
 * Takes a seed topic and builds a 360-degree intent tree across 8 dimensions.
 */

export const FAN_OUT_DIMENSIONS = [
  'comparison',       // Kıyaslama ve alternatifler
  'price_cost',       // Gerçek maliyet, ek ücretler, depozito
  'trust_compliance', // Aşı, sağlık belgeleri, mevzuat, denetim
  'entity_limits',    // Irk, kilo sınırları, hayvan türü spesifikleri
  'location_context', // Plaj, park, veteriner yakınlığı, ulaşım
  'negative_risk',    // Şikayetler, hijyen, ses izolasyonu, oda yalnızlığı
  'conversational',   // LLM prompt paraphrase varyasyonları
  'actionable_tools'  // Hesaplayıcı, checklist, rezervasyon teyit formatı
];

export function generateFanOutCluster(seedQuery, context = {}) {
  const { city = 'Antalya', category = 'otel', animal = 'köpek' } = context;
  const cleanSeed = seedQuery.trim();

  const cluster = {
    seed: cleanSeed,
    generatedAt: new Date().toISOString(),
    intents: {
      comparison: [
        `${cleanSeed} vs standart oteller: hangisi daha ekonomik?`,
        `${city} bölgesinde en iyi 5 ${category} karşılaştırma tablosu`,
        `Bungalov mu, butik otel mi: ${animal} ile hangisi daha rahat?`,
        `${city} ${animal} dostu oteller ve misafir puanı sıralaması`
      ],
      price_cost: [
        `${cleanSeed} 2026 gecelik ortalama konaklama fiyatları`,
        `Gecelik ek evcil hayvan ücreti almayan ${city} otelleri`,
        `${animal} için depozito ve temizlik ücreti ne kadar?`,
        `Gizli ücretler: ${cleanSeed} rezervasyonunda dikkat edilecek ek masraflar`
      ],
      trust_compliance: [
        `${cleanSeed} için zorunlu aşılar ve mikroçip kontrolü`,
        `Tarım Bakanlığı kayıtlı ve denetlenen ${animal} tesisleri`,
        `Otel girişinde aşı karnesi kabul prosedürü ve veteriner onayı`,
        `${city} bölgesinde 7/24 nöbetçi veteriner anlaşmalı oteller`
      ],
      entity_limits: [
        `25 kg ve üzeri büyük ırk ${animal} kabul eden ${city} otelleri`,
        `Yasaklı ırk ve kilo sınırı uygulamayan ${cleanSeed}`,
        `Kedi ve ${animal} aynı anda kabul eden aile odaları`,
        `Oda içinde serbest dolaşım ve kafes şartı olmayan tesisler`
      ],
      location_context: [
        `${city} köpekle girilebilen ücretsiz ve özel plajlar`,
        `${cleanSeed} çevresindeki yürüyüş parkurları ve çim alanlar`,
        `${city} havalimanından otele evcil hayvan transferi (pet taksi)`,
        `Şehir merkezine ve acil kliniğe 10 dk mesafedeki tesisler`
      ],
      negative_risk: [
        `${cleanSeed} hakkında en sık yapılan şikayetler ve çözümleri`,
        `${animal} odada yalnız bırakılabilir mi: havlama ve ceza kuralları`,
        `Otelde diğer hayvanlarla karşılaşma ve güvenlik riskleri`,
        `Alerji ve hijyen: otel odaları her çıkışta nasıl dezenfekte ediliyor?`
      ],
      conversational_paraphrases: [
        `"${city}'da ${animal}imle tatile gitmek istiyorum, en sakin ve güvenilir yer neresi?"`,
        `"Büyük köpeğim var, kilo kısıtlaması olmayan ${city} oteli önerir misin?"`,
        `"${city} pet friendly otel fiyatları 2026 yılında ortalama ne kadar?"`,
        `"Kedimi otele götürürken hangi aşıları yaptırmam şart?"`,
        `"Ek pet ücreti almayan, bahçeli ${city} otelleri hangileridir?"`
      ],
      actionable_tools: [
        `Evcil hayvan seyahat hazırlık kontrol listesi (İndirilebilir PDF)`,
        `Otel pet ücreti ve toplam konaklama maliyeti hesaplama aracı`,
        `Otel rezervasyonuna eklenecek 'Pet Teyit Protokolü' şablonu`
      ]
    },
    totalQueries: 0
  };

  cluster.totalQueries = Object.values(cluster.intents).reduce((sum, arr) => sum + arr.length, 0);
  return cluster;
}

if (process.argv[1] && process.argv[1].endsWith('fan-out-generator.js')) {
  const result = generateFanOutCluster('Antalya evcil hayvan kabul eden oteller', { city: 'Antalya', category: 'otel', animal: 'köpek' });
  console.log(JSON.stringify(result, null, 2));
}
