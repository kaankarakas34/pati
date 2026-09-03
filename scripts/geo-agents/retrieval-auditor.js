/**
 * Agent 3: Technical Retrieval Auditor
 * Ref: PDF Page 4 & 6 - "Retrieval önce, citation sonra", "JavaScript'te saklı kritik bilgiden kaçın"
 * 
 * Inspects content blocks and structures to ensure AI retrieval bots can extract
 * passages without executing complex client-side JavaScript.
 */

export function auditContentRetrieval(pageData) {
  const issues = [];
  const passes = [];
  let score = 100;

  // 1. Passage-First Check (Direct answer within first 350 chars)
  if (!pageData.directAnswer && (!pageData.paragraphs || pageData.paragraphs.length === 0)) {
    issues.push({
      severity: 'CRITICAL',
      message: 'Sayfada doğrudan tanımlayıcı yanıt (Direct Answer) veya giriş paragrafı bulunamadı. AI alıntı yapamaz.'
    });
    score -= 30;
  } else {
    const primaryText = pageData.directAnswer || pageData.paragraphs[0];
    if (primaryText.length < 50 || primaryText.length > 400) {
      issues.push({
        severity: 'MEDIUM',
        message: `Giriş yanıtı ideal passage uzunluğunda değil (${primaryText.length} karakter). İdeal: 120-300 karakter.`
      });
      score -= 10;
    } else {
      passes.push('Giriş cevabı LLM snippet/citation için ideal uzunlukta (Passage-First).');
    }
  }

  // 2. Structured Extraction (Tables / Bullets check)
  if (!pageData.highlights || pageData.highlights.length < 3) {
    issues.push({
      severity: 'HIGH',
      message: 'Yapılandırılmış özet maddeleri (highlights/bullet points) yetersiz. Extractability düşük.'
    });
    score -= 20;
  } else {
    passes.push(`${pageData.highlights.length} adet yapılandırılmış özet maddesi mevcut.`);
  }

  // 3. Information Gain & Comparison Tables
  if (!pageData.comparisonTable && !pageData.benchmarkData) {
    issues.push({
      severity: 'HIGH',
      message: 'Karşılaştırma tablosu veya kıyaslama verisi yok. AI motorlarının tablo alıntılama şansı zayıf.'
    });
    score -= 15;
  } else {
    passes.push('Makinece taranabilir karşılaştırma tablosu mevcut.');
  }

  // 4. FAQ Structure
  if (!pageData.faqs || pageData.faqs.length < 3) {
    issues.push({
      severity: 'MEDIUM',
      message: 'Sık sorulan sorular (FAQ) az veya eksik. Query fan-out kapsaması zayıf kalabilir.'
    });
    score -= 15;
  } else {
    passes.push(`${pageData.faqs.length} adet soru-cevap çifti tanımlı.`);
  }

  // 5. Internal Links Relevance
  if (!pageData.links || pageData.links.length < 2) {
    issues.push({
      severity: 'LOW',
      message: 'Doğal iç link sayısı az. Varlık ilişkileri zayıf kalabilir.'
    });
    score -= 10;
  } else {
    passes.push(`${pageData.links.length} adet bağlamsal iç link tanımlı.`);
  }

  return {
    score: Math.max(0, score),
    status: score >= 75 ? 'PASSED' : score >= 50 ? 'WARNING' : 'FAILED',
    passes,
    issues
  };
}
