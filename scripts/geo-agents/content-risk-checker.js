/**
 * Agent 5: Content Risk Checker
 * Ref: PDF Page 4, 9, 11 - Google Scaled Content Abuse & Site Reputation Abuse
 * 
 * Flags programmatic duplication, low-inventory thin pages, and keyword stuffing patterns.
 */

export function checkProgrammaticRisk(pages = []) {
  const reports = [];

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const risks = [];

    // 1. Thin inventory check
    if (page.itemCount !== undefined && page.itemCount < 3) {
      risks.push({
        type: 'THIN_LOCATION_PAGE',
        severity: 'HIGH',
        message: `Sayfada listelenen gerçek işletme/otel sayısı çok düşük (${page.itemCount} adet). Google Thin Content riski.`
      });
    }

    // 2. Exact template overlap calculation with previous page
    if (i > 0 && pages[i - 1]) {
      const prevText = (pages[i - 1].paragraphs || []).join(' ');
      const currText = (page.paragraphs || []).join(' ');

      const similarity = calculateWordOverlap(prevText, currText);
      if (similarity > 0.85) {
        risks.push({
          type: 'SCALED_CONTENT_ABUSE_RISK',
          severity: 'CRITICAL',
          message: `Bir önceki sayfa ile şablon benzerliği %${(similarity * 100).toFixed(1)} seviyesinde. Yalnızca şehir adı değiştirilerek üretilmiş template riski!`
        });
      }
    }

    // 3. Keyword Stuffing Check
    const fullText = (page.paragraphs || []).join(' ') + ' ' + (page.title || '');
    const kwMatches = (fullText.match(/evcil hayvan|pet friendly|köpek kabul/gi) || []).length;
    const totalWords = fullText.split(/\s+/).length;
    const density = totalWords > 0 ? (kwMatches / totalWords) * 100 : 0;

    if (density > 5.0) {
      risks.push({
        type: 'KEYWORD_STUFFING',
        severity: 'MEDIUM',
        message: `Anahtar kelime yoğunluğu %${density.toFixed(1)} seviyesinde. Doğal dilden uzaklaşma riski.`
      });
    }

    reports.push({
      pageId: page.id || page.title || `page-${i}`,
      riskCount: risks.length,
      isHighRisk: risks.some(r => r.severity === 'CRITICAL' || r.severity === 'HIGH'),
      risks
    });
  }

  return reports;
}

function calculateWordOverlap(textA, textB) {
  if (!textA || !textB) return 0;
  const setA = new Set(textA.toLocaleLowerCase('tr-TR').split(/\s+/));
  const setB = new Set(textB.toLocaleLowerCase('tr-TR').split(/\s+/));
  if (setA.size === 0 || setB.size === 0) return 0;

  let intersection = 0;
  for (const word of setA) {
    if (setB.has(word)) intersection++;
  }

  return intersection / Math.min(setA.size, setB.size);
}
