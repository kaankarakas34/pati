import React from 'react';

export default function SeoContentSection({ content }) {
  if (!content) return null;

  // Generate dynamic FAQPage JSON-LD
  const faqSchema = content.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': content.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  } : null;

  return (
    <section className="mt-16 border-t border-brand-beige pt-12 text-left" aria-labelledby={`${content.id}-title`}>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-5xl">
        <h2 id={`${content.id}-title`} className="font-title text-2xl font-bold text-brand-navy">
          {content.title}
        </h2>

        {/* Passage-First Direct Answer Callout for AI Search Citation */}
        {content.directAnswer && (
          <div className="mt-5 rounded-xl border border-brand-green/20 bg-brand-green-light/40 p-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green">
              <span>⚡</span> Hızlı Özet & Doğrulanmış Yanıt
            </div>
            <p className="mt-2 text-sm font-medium leading-relaxed text-brand-navy">
              {content.directAnswer}
            </p>
          </div>
        )}

        <div className="mt-5 space-y-4 text-sm leading-7 text-gray-650">
          {content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>

        {/* Information Gain & Scannability: Extractable Comparison Table */}
        {content.comparisonTable?.rows?.length > 0 && (
          <div className="mt-8 overflow-x-auto rounded-xl border border-brand-beige bg-white shadow-sm">
            <div className="bg-brand-navy px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white">
              📊 2026 Konaklama Türleri & Evcil Hayvan Politikası Karşılaştırması
            </div>
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-brand-beige bg-brand-beige/50 text-brand-navy">
                <tr>
                  {content.comparisonTable.headers.map(h => (
                    <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-beige text-gray-750">
                {content.comparisonTable.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-cream/60 transition-colors">
                    <td className="px-4 py-3 font-medium text-brand-navy">{row.type}</td>
                    <td className="px-4 py-3">{row.fee}</td>
                    <td className="px-4 py-3">{row.limit}</td>
                    <td className="px-4 py-3">{row.outdoor}</td>
                    <td className="px-4 py-3 text-brand-green font-medium">{row.vetDist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {content.highlights?.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3" aria-label="Öne çıkan bilgiler">
            {content.highlights.map(item => (
              <div key={item} className="flex items-start gap-3 border-b border-brand-beige py-3 text-sm text-gray-750">
                <span className="text-brand-earth font-bold" aria-hidden="true">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Conversational CRO / Zero-Click Prevention Teaser Hook */}
        {content.croTeaser && (
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-brand-navy to-brand-navy-hover p-6 text-white shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-title text-lg font-bold text-brand-yellow">
                  {content.croTeaser.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-200">
                  {content.croTeaser.description}
                </p>
              </div>
              <a
                href="/evcil-hayvan-seyahat-rehberi"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-brand-earth px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-brand-earth-hover transition-colors"
              >
                {content.croTeaser.actionLabel}
              </a>
            </div>
          </div>
        )}

        {content.faqs?.length > 0 && (
          <div className="mt-10">
            <h3 className="font-title text-lg font-bold text-brand-navy">Sık Sorulan Sorular</h3>
            <div className="mt-4 divide-y divide-brand-beige border-y border-brand-beige">
              {content.faqs.map(faq => (
                <details key={faq.question} className="group py-4">
                  <summary className="cursor-pointer list-none font-semibold text-sm text-gray-850 flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand-navy text-lg group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="pt-3 pr-8 text-sm leading-6 text-gray-650">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {content.links?.length > 0 && (
          <nav className="mt-9" aria-label="İlgili sayfalar">
            <h3 className="font-title text-base font-bold text-brand-navy">İlgili Sayfalar</h3>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
              {content.links.map(link => (
                <a key={link.href} href={link.href} className="text-sm font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-earth">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
