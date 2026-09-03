import React from 'react';

export default function Breadcrumbs({ items = [], onViewChange }) {
  if (!items || items.length === 0) return null;

  // JSON-LD BreadcrumbList Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.url ? `https://www.patiyleseyahat.com${item.url}` : undefined
    }))
  };

  return (
    <nav aria-label="breadcrumb" className="w-full bg-brand-navy-light/40 border-b border-brand-beige py-2.5 px-4 mb-6 rounded-2xl text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-400 font-normal">/</span>}
              {isLast || !item.view ? (
                <span className="text-brand-navy font-extrabold line-clamp-1">{item.label}</span>
              ) : (
                <button
                  type="button"
                  onClick={() => onViewChange && onViewChange(item.view, item.id)}
                  className="text-gray-600 hover:text-brand-navy hover:underline transition-colors"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
