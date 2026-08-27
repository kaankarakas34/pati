import React, { useEffect } from 'react';
import { VerifiedBadge, CheckIcon } from '../components/PetIcons';

export default function GuideDetail({ id, guides, hotels, onViewChange }) {
  const guide = guides.find(g => g.id === id);

  if (!guide) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
        <h2 className="text-2xl font-bold font-title">Rehber bulunamadı</h2>
        <button onClick={() => onViewChange('guides')} className="mt-4 bg-brand-navy text-white px-6 py-2.5 rounded-full font-bold text-sm">Tüm Rehberlere Dön</button>
      </div>
    );
  }

  // SEO/GEO/VEO JSON-LD Structured Data Injection
  useEffect(() => {
    // Clean old script
    const oldScript = document.getElementById('jsonld-guide-schema');
    if (oldScript) {
      oldScript.remove();
    }

    // Article schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": guide.title,
      "description": guide.summary,
      "datePublished": guide.publishedAt,
      "dateModified": guide.updatedAt,
      "author": {
        "@type": "Person",
        "name": guide.author.name,
        "jobTitle": guide.author.role
      },
      "publisher": {
        "@type": "Organization",
        "name": "Patiyle Seyahat",
        "logo": {
          "@type": "ImageObject",
          "url": "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐾</text></svg>"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };

    // If guide has FAQs, append FAQPage schema
    if (guide.faq && guide.faq.length > 0) {
      jsonLd.mainEntity = guide.faq.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }));
    }

    const script = document.createElement('script');
    script.id = 'jsonld-guide-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('jsonld-guide-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [guide]);

  // Find related hotels based on location matching in title/content
  const relatedHotels = hotels.filter(h => 
    guide.title.toLowerCase().includes(h.city.toLowerCase()) || 
    guide.title.toLowerCase().includes(h.district.toLowerCase()) ||
    (guide.category === 'Kediyle Seyahat' && h.allowedPets.includes('cat')) ||
    (guide.category === 'Köpekle Seyahat' && h.allowedPets.includes('dog'))
  ).slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      {/* Back button */}
      <button
        onClick={() => onViewChange('guides')}
        className="text-xs text-brand-navy font-bold flex items-center gap-1.5 mb-6 hover:underline"
      >
        &larr; Seyahat Rehberlerine Dön
      </button>

      {/* Meta Head */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
          <span className="bg-brand-navy-light text-brand-navy px-3 py-1.5 rounded-full font-bold uppercase">
            {guide.category}
          </span>
          <span>Yayınlanma: {guide.publishedAt}</span>
          <span>•</span>
          <span>Güncelleme: {guide.updatedAt}</span>
        </div>

        <h1 className="font-title text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          {guide.title}
        </h1>

        <p className="text-gray-600 text-sm md:text-base italic leading-relaxed font-light">
          {guide.summary}
        </p>

        {/* Author & Vet row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-y border-brand-beige mt-6">
          <div className="flex items-center gap-3">
            <img src={guide.author.imageUrl} alt={guide.author.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
            <div>
              <p className="text-sm font-bold text-gray-800">{guide.author.name}</p>
              <p className="text-xs text-gray-500">{guide.author.role}</p>
            </div>
          </div>

          {guide.vetChecked && (
            <div className="bg-brand-orange-light border border-brand-orange/30 px-4 py-2 rounded-xl flex items-center gap-2">
              <span className="text-lg">🩺</span>
              <div className="text-left">
                <span className="text-3xs font-extrabold text-brand-orange block uppercase">Tıbbi/Veteriner Kontrolü</span>
                <span className="text-xs font-bold text-gray-800">{guide.vetName}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* VEO Direct Answer Box */}
      <div className="bg-brand-navy-light border-2 border-brand-navy/15 rounded-3xl p-6 mb-8 text-sm">
        <h3 className="font-title font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
          <span>💡</span> Özet & Hızlı Cevap (VEO)
        </h3>
        <p className="text-gray-700 leading-relaxed font-medium">
          {guide.shortAnswer}
        </p>
      </div>

      {/* Grid for Table of Contents and Main Body */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents sidebar */}
        <aside className="lg:col-span-1 bg-brand-beige p-5 rounded-3xl h-fit border-2 border-brand-navy/10">
          <h4 className="font-title font-bold text-gray-800 text-xs uppercase tracking-wider mb-3">İçindekiler</h4>
          <ul className="space-y-2 text-xs text-gray-600 font-medium">
            <li className="hover:text-brand-navy cursor-pointer">1. Giriş ve Temel Bilgiler</li>
            <li className="hover:text-brand-navy cursor-pointer">2. En İyi Ulaşım ve Konumlar</li>
            <li className="hover:text-brand-navy cursor-pointer">3. Sağlık & Güvenlik Önlemleri</li>
            <li className="hover:text-brand-navy cursor-pointer">4. Kontrol Listesi (Checklist)</li>
            <li className="hover:text-brand-navy cursor-pointer">5. Sık Sorulan Sorular</li>
          </ul>
        </aside>

        {/* Main Body Column */}
        <div className="lg:col-span-3 space-y-8">
          {/* Article Text Content */}
          <article 
            className="prose prose-sm md:prose max-w-none text-gray-800 leading-relaxed text-sm md:text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />

          {/* Checklist Area */}
          <div className="bg-brand-navy-light border-2 border-brand-navy/15 rounded-3xl p-6 mt-8">
            <h3 className="font-title font-bold text-brand-navy text-base mb-4 flex items-center gap-2">
              <VerifiedBadge className="w-5 h-5" /> Seyahat Hazırlık Kontrol Listesi
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-gray-700">
              {guide.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-brand-navy font-bold text-base mt-0.5"><CheckIcon className="w-4.5 h-4.5" /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial FAQ section */}
          <div className="space-y-6 pt-6 border-t border-brand-beige">
            <h3 className="font-title text-xl font-bold text-gray-950">
              Sıkça Sorulan Sorular
            </h3>
            <div className="space-y-4">
              {guide.faq.map((qna, idx) => (
                <div key={idx} className="bg-white border-2 border-brand-navy/10 p-5 rounded-2xl">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base flex items-start gap-2">
                    <span className="text-brand-orange">S:</span>
                    <span>{qna.q}</span>
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-2 pl-6 leading-relaxed">
                    {qna.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Accommodations Block */}
          {relatedHotels.length > 0 && (
            <div className="pt-8 border-t border-brand-beige">
              <h3 className="font-title text-lg font-bold text-gray-900 mb-4">Bu Rota İçin Önerilen Doğrulanmış Oteller</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedHotels.map(h => (
                  <div
                    key={h.id}
                    onClick={() => onViewChange('accommodation-detail', h.id)}
                    className="border-2 border-brand-navy/10 rounded-2xl overflow-hidden flex cursor-pointer hover:border-brand-navy hover:shadow-md transition-shadow bg-white"
                  >
                    <img src={h.imageUrl} alt={h.name} className="w-24 h-24 object-cover" />
                    <div className="p-3 text-left flex flex-col justify-between">
                      <div>
                        <h4 className="font-title font-bold text-sm text-gray-900 line-clamp-1">{h.name}</h4>
                        <span className="text-3xs text-gray-400 block">{h.city}, {h.district}</span>
                      </div>
                      <span className="text-3xs text-brand-navy font-bold flex items-center gap-0.5">
                        <VerifiedBadge className="w-3.5 h-3.5" /> Doğrulandı
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
