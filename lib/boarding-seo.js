import { getBoardingPath, slugify } from './seo-slugs.js';

const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 155;

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

export function truncateSeoText(value, maximum) {
  const text = clean(value);
  if (text.length <= maximum) return text;
  const slice = text.slice(0, Math.max(1, maximum - 1)).trimEnd();
  const boundary = slice.lastIndexOf(' ');
  const shortened = boundary >= Math.floor(maximum * 0.6) ? slice.slice(0, boundary) : slice;
  return shortened.replace(/[\s,;:|&/.-]+$/g, '') + '…';
}

export function normalizeTurkishPhone(value) {
  const raw = clean(value);
  if (!raw) return undefined;
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('0')) return '+90' + digits.slice(1);
  if (digits.length === 10) return '+90' + digits;
  if (digits.length === 12 && digits.startsWith('90')) return '+' + digits;
  return raw;
}

function acceptedPets(boarding) {
  const pets = Array.isArray(boarding?.allowedPets) ? boarding.allowedPets : [];
  const labels = pets.map(pet => ({ cat: 'kedi', dog: 'köpek' })[String(pet).toLowerCase()] || clean(pet)).filter(Boolean);
  if (!labels.length) return 'Kabul edilen evcil hayvan türleri için işletmeyle görüşülmelidir';
  if (labels.length === 1) return `${labels[0][0].toLocaleUpperCase('tr-TR')}${labels[0].slice(1)} kabul edilir`;
  return `${labels.slice(0, -1).join(', ')} ve ${labels.at(-1)} kabul edilir`;
}

export function boardingSeoMetadata(boarding) {
  const name = clean(boarding?.name) || 'Pet Oteli';
  const city = clean(boarding?.city) || 'Türkiye';
  const district = clean(boarding?.district);
  const location = district && district.toLocaleLowerCase('tr-TR') !== city.toLocaleLowerCase('tr-TR')
    ? `${district}/${city}`
    : city;
  const locationTitle = /\b(otel|pansiyon)\b/i.test(name) ? city : `${city} Pet Oteli`;
  const suffix = ` | ${locationTitle} | patili.co`;
  const title = `${truncateSeoText(name, Math.max(18, MAX_TITLE_LENGTH - suffix.length))}${suffix}`;
  const category = clean(boarding?.category).toLocaleLowerCase('tr-TR') || 'evcil hayvan konaklama tesisi';
  const descriptionName = truncateSeoText(name, 60);
  const facts = [
    `${descriptionName}, ${location} konumunda.`,
    `${acceptedPets(boarding)}.`,
    `${category[0].toLocaleUpperCase('tr-TR')}${category.slice(1)}.`,
    boarding?.cameraSupport === true ? 'Kamera desteği bulunur.' : '',
    clean(boarding?.price) && !/bilgi al/i.test(boarding.price) ? `Fiyat: ${clean(boarding.price)}.` : ''
  ].filter(Boolean).join(' ');
  return {
    title,
    description: truncateSeoText(facts, MAX_DESCRIPTION_LENGTH),
    image: clean(boarding?.imageUrl) || 'https://patili.co/logo.png',
    telephone: normalizeTurkishPhone(boarding?.phone),
    location,
    acceptedPets: acceptedPets(boarding)
  };
}

export function boardingFaqs(boarding) {
  const name = clean(boarding?.name) || 'Bu tesis';
  const city = clean(boarding?.city) || 'Türkiye';
  const district = clean(boarding?.district);
  const place = district ? `${district}/${city}` : city;
  const cameraAnswer = boarding?.cameraSupport === true
    ? 'Evet. Kayıtta tesisin kamera desteği sunduğu belirtilmektedir.'
    : 'Kayıtta kamera desteği belirtilmemiştir; güncel durum için işletmeyle görüşün.';
  return [
    {
      question: `${name} hangi evcil hayvanları kabul ediyor?`,
      answer: `${acceptedPets(boarding)}. Kabul koşullarını rezervasyon öncesinde işletmeyle doğrulayın.`
    },
    {
      question: `${name} için aşı belgesi gerekiyor mu?`,
      answer: clean(boarding?.requiredDocs) || 'Gerekli sağlık ve aşı belgelerini rezervasyon öncesinde işletmeyle doğrulayın.'
    },
    {
      question: `${name} kamera desteği sunuyor mu?`,
      answer: cameraAnswer
    },
    {
      question: `${name} nerede?`,
      answer: `${name}, ${place} bölgesinde listelenmektedir. Yol tarifi için sayfadaki Google Haritalar bağlantısını kullanabilirsiniz.`
    }
  ];
}

export function boardingStructuredData(boarding, options = {}) {
  const seo = boardingSeoMetadata(boarding);
  const canonicalUrl = options.canonicalUrl || `https://patili.co${getBoardingPath(boarding)}`;
  const reviewCount = Number(options.reviewCount || 0);
  const ratingValue = options.ratingValue == null ? null : Number(options.ratingValue);
  const mapsUrl = boarding?.bookingLinks?.google_maps || boarding?.bookingLinks?.googleMaps;
  const images = [boarding?.imageUrl, ...(Array.isArray(boarding?.galleryImages) ? boarding.galleryImages : [])].filter(Boolean);
  const faqs = boardingFaqs(boarding);
  const business = {
    '@type': 'PetGroomingOrBoarding',
    '@id': `${canonicalUrl}#business`,
    name: boarding?.name,
    description: boarding?.description || seo.description,
    image: [...new Set(images)],
    address: {
      '@type': 'PostalAddress',
      addressLocality: boarding?.district,
      addressRegion: boarding?.city,
      addressCountry: 'TR'
    },
    ...(seo.telephone ? { telephone: seo.telephone } : {}),
    ...(boarding?.email ? { email: boarding.email } : {}),
    url: canonicalUrl,
    ...(mapsUrl ? { hasMap: mapsUrl } : {}),
    ...(boarding?.website ? { sameAs: [boarding.website] } : {}),
    areaServed: { '@type': 'AdministrativeArea', name: seo.location },
    priceRange: boarding?.price || 'Fiyat bilgisi için işletmeyle görüşün',
    amenityFeature: (boarding?.features || []).slice(0, 20).map(feature => ({
      '@type': 'LocationFeatureSpecification', name: feature, value: true
    })),
    ...(reviewCount > 0 && Number.isFinite(ratingValue) ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue,
        bestRating: 10,
        worstRating: 1,
        ratingCount: reviewCount
      }
    } : {})
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: 'tr-TR',
        mainEntity: { '@id': `${canonicalUrl}#business` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        ...(boarding?.lastVerified || boarding?.modifiedAt ? { dateModified: boarding.lastVerified || boarding.modifiedAt } : {})
      },
      business,
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://patili.co/' },
          { '@type': 'ListItem', position: 2, name: 'Kedi ve Köpek Otelleri', item: 'https://patili.co/kedi-kopek-otelleri' },
          { '@type': 'ListItem', position: 3, name: `${boarding?.city} Pet Otelleri`, item: `https://patili.co/kedi-kopek-otelleri?city=${slugify(boarding?.city || '')}` },
          { '@type': 'ListItem', position: 4, name: boarding?.name, item: canonicalUrl }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: faqs.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      }
    ]
  };
}
