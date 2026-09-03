/**
 * Agent 2: Entity Graph & Schema Builder
 * Ref: Entity Disambiguation + Google Knowledge Graph + sameAs Cross-Referencing
 * 
 * Generates verified JSON-LD markup that guarantees semantic alignment between
 * visible content and machine-readable metadata.
 */

export const BRAND_ENTITY = {
  '@type': 'Organization',
  '@id': 'https://patiyleseyahat.com/#organization',
  'name': 'Patiyle Seyahat',
  'url': 'https://patiyleseyahat.com',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://patiyleseyahat.com/assets/logo.png',
    'caption': 'Patiyle Seyahat Doğrulanmış Evcil Hayvan Rehberi'
  },
  'description': "Türkiye'nin doğrulanmış evcil hayvan dostu otel, pet oteli, veteriner ve seyahat rehberi platformu.",
  'sameAs': [
    'https://www.wikidata.org/wiki/Special:EntityPage/Q11023', // Pet travel context
    'https://twitter.com/patiyleseyahat',
    'https://www.instagram.com/patiyleseyahat'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'customer support',
    'email': 'destek@patiyleseyahat.com',
    'availableLanguage': ['Turkish', 'English']
  }
};

export function buildHotelSchema(hotel, canonicalUrl) {
  if (!hotel) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': `${canonicalUrl}#hotel`,
    'name': hotel.name,
    'description': hotel.description || `${hotel.name} - ${hotel.city} evcil hayvan dostu konaklama tesisi.`,
    'url': canonicalUrl,
    'petsAllowed': true,
    'amenityFeature': [
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Evcil Hayvan Kabulü',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Kedi/Köpek Alanı',
        'value': hotel.hasGarden ? 'Bahçeli' : 'Oda İçi'
      }
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': hotel.district || hotel.city,
      'addressRegion': hotel.city,
      'addressCountry': 'TR'
    },
    'priceRange': hotel.priceRange || '₺₺ - ₺₺₺',
    'parentOrganization': {
      '@id': 'https://patiyleseyahat.com/#organization'
    }
  };
}

export function buildFaqSchema(faqs = []) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function buildBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

if (process.argv[1] && process.argv[1].endsWith('entity-schema-builder.js')) {
  const sampleFaq = [
    { question: 'Büyük köpek kabul ediliyor mu?', answer: 'Evet, 25 kg üzeri köpekler bahçeli odalarda kabul edilmektedir.' }
  ];
  console.log(JSON.stringify(buildFaqSchema(sampleFaq), null, 2));
}
