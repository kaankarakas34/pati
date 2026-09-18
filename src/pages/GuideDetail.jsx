import React, { useEffect } from 'react';
import { sanitizeGuideHtml } from '../lib/guide-html.js';
import { VerifiedBadge, CheckIcon } from '../components/PetIcons';

export default function GuideDetail({ guide, onViewChange }) {

  // SEO/GEO/VEO JSON-LD Structured Data Injection
  useEffect(() => {
    const oldScript = document.getElementById('jsonld-guide-schema');
    if (oldScript) {
      oldScript.remove();
    }

    const isBlog = Boolean(guide.clusterId || guide.code);
    const basePath = isBlog ? 'blog' : 'rehber';
    const canonicalUrl = `https://patili.co/${basePath}/${encodeURIComponent(guide.slug || guide.id)}`;

    const authorName = typeof guide.author === 'string'
      ? guide.author
      : (guide.author?.name || 'Patili.co İçerik ve Araştırma Kurulu');

    const authorRole = typeof guide.author === 'object' && guide.author?.role
      ? guide.author.role
      : 'Uzman Editör';

    // Article schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": guide.seoTitle || guide.title,
      "description": guide.seoDesc || guide.summary,
      "datePublished": guide.publishedAt,
      "dateModified": guide.updatedAt || guide.publishedAt,
      "author": {
        "@type": "Person",
        "name": authorName,
        "jobTitle": authorRole
      },
      "publisher": {
        "@type": "Organization",
        "name": "patili.co",
        "url": "https://patili.co",
        "logo": {
          "@type": "ImageObject",
          "url": "https://patili.co/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
    };

    // If guide has FAQs, append FAQPage schema
    if (Array.isArray(guide.faq) && guide.faq.length > 0) {
      jsonLd.mainEntity = guide.faq.map(q => ({
        "@type": "Question",
        "name": q.question || q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer || q.a
        }
      }));
    }

    const script = document.createElement('script');
    script.id = 'jsonld-guide-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('jsonld-guide-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [guide]);

  const authorName = typeof guide.author === 'string'
    ? guide.author
    : (guide.author?.name || 'Patili.co Editör Masası');

  const authorRole = typeof guide.author === 'object' && guide.author?.role
    ? guide.author.role
    : 'Uzman Araştırma ve İçerik Kurulu';

  const authorImage = typeof guide.author === 'object' ? guide.author?.imageUrl : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-2 text-xs font-semibold text-gray-500 mb-6 py-2 px-3 bg-brand-navy-light/30 rounded-2xl">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); onViewChange('home'); }}
          className="hover:text-brand-navy hover:underline text-gray-600 transition-colors"
        >
          Ana Sayfa
        </a>
        <span className="text-gray-400">&gt;</span>
        <a
          href="/blog"
          onClick={(e) => { e.preventDefault(); onViewChange('guides'); }}
          className="hover:text-brand-navy hover:underline text-gray-600 transition-colors"
        >
          Blog
        </a>
        {guide.clusterTitle && (
          <>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-700 font-medium">{guide.clusterTitle}</span>
          </>
        )}
        <span className="text-gray-400">&gt;</span>
        <span className="text-brand-navy font-bold truncate max-w-xs sm:max-w-md">{guide.title}</span>
      </nav>

      {/* Meta Head */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-gray-500">
          {guide.clusterTitle && (
            <span className="bg-brand-navy text-white px-3 py-1 rounded-full font-bold uppercase text-3xs tracking-wider">
              {guide.clusterTitle}
            </span>
          )}
          <span className="bg-brand-navy-light text-brand-navy px-3 py-1 rounded-full font-bold uppercase text-3xs tracking-wider">
            {guide.category}
          </span>
          <span>Yayınlanma: {guide.publishedAt}</span>
          <span>•</span>
          <span>Güncelleme: {guide.updatedAt || guide.publishedAt}</span>
        </div>

        <h1 className="font-title text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          {guide.title}
        </h1>

        <p className="text-gray-600 text-sm md:text-base italic leading-relaxed font-light">
          {guide.summary}
        </p>

        {/* Category CTA Chip */}
        {guide.categoryLink && (
          <div className="p-3.5 bg-brand-cream/70 border border-brand-beige rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-xs text-gray-700">
              <span className="font-bold text-brand-navy block">🐾 İlgili Kategori:</span>
              <span>Bu rehberde bahsi geçen onaylı hizmet ve işletmeleri keşfedin.</span>
            </div>
            <a
              href={guide.categoryLink}
              className="px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-hover transition-colors whitespace-nowrap"
            >
              Listeyi Görüntüle &rarr;
            </a>
          </div>
        )}

        {/* Author & Vet row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-y border-brand-beige mt-6">
          <div className="flex items-center gap-3">
            {authorImage ? (
              <img src={authorImage} alt={authorName} className="w-12 h-12 rounded-full object-cover shadow-sm" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-base shadow-sm">
                🐾
              </div>
            )}
            <div>
              <p className="text-sm font-bold text-gray-800">{authorName}</p>
              <p className="text-xs text-gray-500">{authorRole}</p>
            </div>
          </div>

          {guide.vetChecked && (
            <div className="bg-brand-orange-light border border-brand-orange/30 px-4 py-2 rounded-xl flex items-center gap-2">
              <span className="text-lg">🩺</span>
              <div className="text-left">
                <span className="text-3xs font-extrabold text-brand-orange block uppercase">Tıbbi / Davranış Kontrolü</span>
                <span className="text-xs font-bold text-gray-800">{guide.vetName || 'Uzman Hekim Onaylı'}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* VEO Direct Answer Box */}
      {guide.shortAnswer && (
        <div className="bg-brand-navy-light border-2 border-brand-navy/15 rounded-3xl p-6 mb-8 text-sm">
          <h3 className="font-title font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
            <span>💡</span> Özet & Hızlı Cevap (VEO)
          </h3>
          <p className="text-gray-700 leading-relaxed font-medium">
            {guide.shortAnswer}
          </p>
        </div>
      )}

      {/* Grid for Table of Contents and Main Body */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents sidebar */}
        <aside className="lg:col-span-1 bg-brand-beige p-5 rounded-3xl h-fit border-2 border-brand-navy/10">
          <h4 className="font-title font-bold text-gray-800 text-xs uppercase tracking-wider mb-3">İçindekiler</h4>
          <ul className="space-y-2 text-xs text-gray-600 font-medium">
            <li className="hover:text-brand-navy cursor-pointer">1. Kapsam ve Giriş</li>
            <li className="hover:text-brand-navy cursor-pointer">2. Temel İlkeler ve Güvenlik</li>
            <li className="hover:text-brand-navy cursor-pointer">3. Uzman Tavsiyeleri</li>
            {Array.isArray(guide.checklist) && guide.checklist.length > 0 && (
              <li className="hover:text-brand-navy cursor-pointer">4. Kontrol Listesi (Checklist)</li>
            )}
            {Array.isArray(guide.faq) && guide.faq.length > 0 && (
              <li className="hover:text-brand-navy cursor-pointer">5. Sıkça Sorulan Sorular</li>
            )}
          </ul>
        </aside>

        {/* Main Body Column */}
        <div className="lg:col-span-3 space-y-8">
          {/* Article Text Content */}
          <article 
            className="prose prose-sm md:prose max-w-none text-gray-800 leading-relaxed text-sm md:text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: sanitizeGuideHtml(guide.content) }}
          />

          {/* Checklist Area */}
          {Array.isArray(guide.checklist) && guide.checklist.length > 0 && (
            <div className="bg-brand-navy-light border-2 border-brand-navy/15 rounded-3xl p-6 mt-8">
              <h3 className="font-title font-bold text-brand-navy text-base mb-4 flex items-center gap-2">
                <VerifiedBadge className="w-5 h-5" /> Uygulama & Kontrol Listesi
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
          )}

          {/* Contextual Internal Links Section */}
          {Array.isArray(guide.internalLinks) && guide.internalLinks.length > 0 && (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-6 mt-8">
              <h3 className="font-title font-bold text-brand-navy text-base mb-3 flex items-center gap-2">
                <span>🔗</span> İlgili İçerikler ve Bağlantılı Rehberler
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {guide.internalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    onClick={(e) => {
                      if (link.url.startsWith('/blog/') || link.url.startsWith('/rehber/')) {
                        e.preventDefault();
                        const slug = link.url.replace(/^\/(blog|rehber)\//, '');
                        onViewChange('guide-detail', slug);
                      }
                    }}
                    className="p-3.5 rounded-2xl border border-brand-beige hover:border-brand-navy hover:bg-brand-navy-light/20 transition-all text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>{link.text || link.title}</span>
                    <span className="text-brand-navy font-bold">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Editorial FAQ section */}
          {Array.isArray(guide.faq) && guide.faq.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-brand-beige">
              <h3 className="font-title text-xl font-bold text-gray-950">
                Sıkça Sorulan Sorular
              </h3>
              <div className="space-y-4">
                {guide.faq.map((qna, idx) => {
                  const q = qna.question || qna.q;
                  const a = qna.answer || qna.a;
                  return (
                    <div key={idx} className="bg-white border-2 border-brand-navy/10 p-5 rounded-2xl">
                      <h4 className="font-bold text-gray-900 text-sm md:text-base flex items-start gap-2">
                        <span className="text-brand-orange font-black">S:</span>
                        <span>{q}</span>
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 mt-2 pl-6 leading-relaxed">
                        {a}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Editorial Integrity Footer Note */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs text-gray-500 leading-relaxed mt-8">
            <span className="font-bold text-gray-700 block mb-1">🛡️ Patili.co Editoryal İlkeleri:</span>
            Rehberlerimizde yer alan içerikler uzman veteriner hekim görüşleri ve kanıta dayalı hayvan davranışı araştırmaları ışığında hazırlanmıştır. İçeriklerimiz hiçbir ticari işletmeye doğrudan sponsorlu bağlantı vermez; kullanıcı ve hayvan refahını mutlak öncelik kabul eder.
          </div>
        </div>
      </div>
    </div>
  );
}
