import React from 'react';

export default function SeoContentSection({ content }) {
  if (!content) return null;

  return (
    <section className="mt-16 border-t border-brand-beige pt-12 text-left" aria-labelledby={`${content.id}-title`}>
      <div className="max-w-5xl">
        <h2 id={`${content.id}-title`} className="font-title text-2xl font-bold text-brand-navy">
          {content.title}
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-7 text-gray-650">
          {content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>

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
