/**
 * Agent 4: Information Gain Scanner
 * Ref: Google Patent US20220245182A1 - Contextual Estimation of Information Gain
 * 
 * Verifies if a page introduces unique empirical data beyond SERP consensus:
 * - Specific numerical benchmarks / pricing ranges
 * - Unique survey/catalog statistics
 * - Explicit trade-offs & limitations
 * - Actionable decision metrics
 */

export function scanInformationGain(contentObj) {
  let score = 0;
  const detectedGains = [];
  const missingOpportunities = [];

  const fullText = JSON.stringify(contentObj);

  // 1. Numerical & Empirical Data (Numbers, %, ₺, kg, km)
  const numbersCount = (fullText.match(/\d+([.,]\d+)?\s*(kg|tl|₺|km|saat|gün|%|adet|otel|klinik)/gi) || []).length;
  if (numbersCount >= 3) {
    score += 30;
    detectedGains.push(`Tespit edilen ampirik veri birimi: ${numbersCount} adet (kg, TL, km vb.).`);
  } else {
    missingOpportunities.push('Yetersiz ampirik veri: Ortalama ek pet ücreti (TL), kilo sınırı (kg) veya veteriner mesafesi gibi net sayılar ekleyin.');
  }

  // 2. Tabular Comparison Data
  if (contentObj.comparisonTable && contentObj.comparisonTable.rows?.length > 0) {
    score += 25;
    detectedGains.push(`Özgün karşılaştırma tablosu mevcut (${contentObj.comparisonTable.rows.length} veri satırı).`);
  } else {
    missingOpportunities.push('Karşılaştırma tablosu eksik: Tesis türleri, fiyat ve kısıtlamaları kıyaslayan HTML tablosu ekleyin.');
  }

  // 3. Trade-offs / Limitations / Warnings ("Dikkat", "Sınır", "Kabul edilmeyen")
  const hasTradeoffs = /(kısıt|sınır|kabul edilmez|yasak|dikkat|risk|uygun değil|istisna)/i.test(fullText);
  if (hasTradeoffs) {
    score += 20;
    detectedGains.push('Gerçekçi sınırlılıklar ve kullanım şartları (trade-offs) belirtilmiş.');
  } else {
    missingOpportunities.push('Sınırlılık eksik: Hangi hayvanların veya durumların kabul edilmediğini net belirtin (Trust signal).');
  }

  // 4. Primary Verification / Source / Methodology
  const hasVerificationNote = /(doğrulan|kontrol edil|güncellen|protokol|editoryal)/i.test(fullText);
  if (hasVerificationNote) {
    score += 25;
    detectedGains.push('Editoryal doğrulama ve son güncelleme referansı mevcut.');
  } else {
    missingOpportunities.push('Doğrulama metodolojisi eksik: Verilerin işletmeyle nasıl teyit edildiği bilgisini ekleyin.');
  }

  return {
    informationGainScore: score,
    grade: score >= 75 ? 'A (Yüksek Bilgi Kazanımı)' : score >= 50 ? 'B (Orta)' : 'C (Yeniden Yazım Riski - SERP Kloni)',
    detectedGains,
    missingOpportunities
  };
}
