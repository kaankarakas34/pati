import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';
import dotenv from 'dotenv';

import { getComplaints, getAdApplications, saveAdApplication } from './db.js';
import { matchesSecret } from './lib/admin-security.js';
import { getPublicUrl } from './lib/public-http.js'; // guardvibe-ignore VG678 -- outbound fetch; responses use global nosniff.
import { sendServerError, redirectToLocalPath, handleRequestError } from './lib/http-responses.js';
import { getIndexHtmlTemplate } from './lib/html-template.js';
import { createApiRouter, limitSubmission, asyncRoute } from './lib/api-router.js';
import { repository } from './db.js';
import { seoContent } from './src/data/seoContent.js';
import { findHotelBySlugs, getHotelPath, getVetPath, slugify, PROGRAMMATIC_CLUSTERS } from './lib/seo-slugs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

app.disable('x-powered-by');
app.use((_req,res,next)=>{ res.setHeader('X-Content-Type-Options','nosniff'); next(); });
app.use(cors());
app.use(express.json());

// Normalize Vercel serverless request path
app.use((req, res, next) => {
  if (req.query?.vetCity && req.query?.vetDistrict && req.query?.vetName) {
    req.url = `/veteriner/${encodeURIComponent(req.query.vetCity)}/${encodeURIComponent(req.query.vetDistrict)}/${encodeURIComponent(req.query.vetName)}`;
  } else if (req.query?.vetId) {
    req.url = `/veteriner/${encodeURIComponent(req.query.vetId)}`;
  } else if (req.query && req.query.path) {
    const subPath = Array.isArray(req.query.path) ? req.query.path.join('/') : req.query.path;
    req.url = `/api/${subPath}`;
  } else if (req.url.startsWith('/api/index')) {
    req.url = req.url.replace('/api/index', '/api');
  }
  next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function requireAdmin(req, res, next) {
  const token = req.headers['x-admin-token'];
  if (!matchesSecret(token, ADMIN_TOKEN)) {
    return res.status(401).json({ error: 'Admin yetkisi gerekli.' });
  }
  next();
}

function serializeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeText(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function isValidHttpUrl(value) {
  if (!value) return true;
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

app.post('/api/admin/login', (req, res) => {
  if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !ADMIN_TOKEN) {
    return res.status(503).json({ error: 'Admin girisi sunucuda yapilandirilmamis.' });
  }
  const { username, password } = req.body || {};
  if (matchesSecret(username, ADMIN_USERNAME) && matchesSecret(password, ADMIN_PASSWORD)) {
    return res.json({ success: true, token: ADMIN_TOKEN });
  }
  res.status(401).json({ error: 'Hatalı kullanıcı adı veya şifre.' });
});

// ----------------------------------------------------
// REST API ENDPOINTS
// ----------------------------------------------------

app.use('/api', createApiRouter(requireAdmin));

// Advertising Applications API
app.post('/api/ad-applications', async (req, res, next) => {
  try {
    if (req.body?.company) return res.status(201).json({ success: true });
    await limitSubmission(req);

    const application = {
      id: randomUUID(),
      businessName: normalizeText(req.body?.businessName, 160),
      businessType: normalizeText(req.body?.businessType, 100),
      contactName: normalizeText(req.body?.contactName, 120),
      email: normalizeText(req.body?.email, 180).toLowerCase(),
      phone: normalizeText(req.body?.phone, 40),
      website: normalizeText(req.body?.website, 500),
      city: normalizeText(req.body?.city, 100),
      message: normalizeText(req.body?.message, 1500)
    };

    if (!application.businessName || !application.businessType || !application.contactName ||
        !application.email || !application.phone || !application.city ||
        req.body?.kvkkConsent !== true) {
      return res.status(400).json({ error: 'Zorunlu alanları ve iletişim iznini kontrol edin.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(application.email)) {
      return res.status(400).json({ error: 'Geçerli bir e-posta adresi girin.' });
    }
    if (!isValidHttpUrl(application.website)) {
      return res.status(400).json({ error: 'Web sitesi adresi http:// veya https:// ile başlamalıdır.' });
    }

    const data = await saveAdApplication(application);
    res.status(201).json({ success: true, id: data.id });
  } catch (err) {
    next(err);
  }
});

app.get('/api/ad-applications', requireAdmin, async (req, res) => {
  try {
    res.json(await getAdApplications());
  } catch (err) {
    res.status(500).json({ error: 'Başvurular yüklenemedi.' });
  }
});

// URL Auto-Scrape/Fetch API
app.post('/api/scrape-hotel', requireAdmin, async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL parametresi zorunludur.' });
    }
    // Fetch HTML using axios
    const response = await getPublicUrl(url, { // guardvibe-ignore VG678 -- fetched HTML is parsed, never served.
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'
      },
      timeout: 10000
    });

    const html = response.data;

    let scrapedData = {
      name: '',
      city: 'Kıbrıs', // default fallbacks
      district: 'Girne',
      imageUrl: '',
      description: '',
      features: [],
      website: url
    };

    // Try finding JSON-LD script blocks
    const jsonLdRegex = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
    let match;
    while ((match = jsonLdRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(match[1].trim());
        const graph = parsed['@graph'] || (Array.isArray(parsed) ? parsed : [parsed]);
        const hotelObj = graph.find(item => item['@type'] === 'Hotel' || item['@type'] === 'LodgingBusiness');
        
        if (hotelObj) {
          scrapedData.name = hotelObj.name || '';
          scrapedData.description = hotelObj.description ? hotelObj.description.replace(/<[^>]*>/g, '').trim() : '';
          
          if (hotelObj.address) {
            const region = hotelObj.address.addressRegion || '';
            const parts = region.split(/\s+/);
            if (parts.length >= 2) {
              scrapedData.district = parts[0];
              scrapedData.city = parts.slice(1).join(' ');
            } else if (parts.length === 1) {
              scrapedData.district = parts[0];
              scrapedData.city = parts[0];
            }
            if (hotelObj.address.streetAddress && scrapedData.description) {
              // Append address info to description as structured context if desired
            }
          }
          
          if (hotelObj.image) {
            scrapedData.imageUrl = Array.isArray(hotelObj.image) ? hotelObj.image[0] : (hotelObj.image.contentURL || hotelObj.image);
          } else if (hotelObj.photo) {
            scrapedData.imageUrl = hotelObj.photo.contentURL || hotelObj.photo;
          }

          if (hotelObj.amenityFeature && Array.isArray(hotelObj.amenityFeature)) {
            scrapedData.features = hotelObj.amenityFeature.map(f => f.name).slice(0, 10);
          }
          break;
        }
      } catch (e) {
        // ignore JSON errors
      }
    }

    // Fallbacks if JSON-LD parsing didn't find all details
    if (!scrapedData.name) {
      const titleMatch = html.match(/<title>(.*?)<\/title>/i);
      if (titleMatch) scrapedData.name = titleMatch[1].replace(' | Enuygun', '').split(',')[0].trim();
    }
    
    if (!scrapedData.imageUrl) {
      const ogImageMatch = html.match(/<meta property="og:image" content="(.*?)"/i);
      if (ogImageMatch) scrapedData.imageUrl = ogImageMatch[1];
    }
    
    if (!scrapedData.description) {
      const descMatch = html.match(/<meta name="description" content="(.*?)"/i) || html.match(/<meta property="og:description" content="(.*?)"/i);
      if (descMatch) scrapedData.description = descMatch[1];
    }

    res.json(scrapedData);
  } catch (err) {
    console.error("Scraping error:", err);
    res.status(500).json({ error: 'URL taranamadı. Lütfen geçerli bir otel linki girin.' });
  }
});

// ----------------------------------------------------
// SEO & GEO DYNAMIC HTML PRERENDERING (META INJECTION)
// ----------------------------------------------------

// Serve static assets in production built directory
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/public', express.static(path.join(__dirname, 'public')));

async function getHotelSeoData(query = {}) {
  try {
    const hotels = (await repository.page('hotels', query, Boolean(query.id || query.nameSlug))).data;
    const complaints = hotels.length === 1 ? await getComplaints({ targetId: hotels[0].id, limit: 100 }) : [];
    if (hotels.length === 1) hotels[0].approvedComplaintCount = await repository.complaintCount(hotels[0].id);
    return { hotels, complaints };
  } catch (error) {
    console.error('SEO database fallback:', error);
    throw error;
  }
}

function renderHotelSeoPage(res, hotel, complaintsList) {
  try {
    // Approved complaints count check
    const approvedComplaints = complaintsList.filter(c => c.targetId === hotel.id && c.status === 'approved');
    const trustScore = Math.max(1.0, (hotel.baseTrustScore || 8) - (hotel.approvedComplaintCount ?? approvedComplaints.length) * 0.5).toFixed(1);
    const canonicalUrl = `https://www.patiyleseyahat.com${getHotelPath(hotel)}`;

    let html = getIndexHtmlTemplate();

    // 1. Inject custom title for search engines
    const title = escapeHtml(`${hotel.name} | ${hotel.city} Evcil Hayvan Dostu Otel Detayları | Patiyle Seyahat`);
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

    // 2. Inject custom meta description
    const desc = escapeHtml(`${hotel.name} evcil hayvan kuralları: ${hotel.weightLimit > 0 ? `${hotel.weightLimit} kg kilo sınırı` : 'kilo sınırı yok'}, ${hotel.extraFee === 'no' ? 'ek ücret yok' : 'ek ücret uygulanır'}. ${(hotel.description || '').slice(0, 130)}...`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);
    
    // Inject OpenGraph social tags dynamically
    const ogTags = `
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:image" content="${escapeHtml(hotel.imageUrl)}" />
      <meta property="og:type" content="place" />
      <meta property="og:url" content="${canonicalUrl}" />
      <link rel="canonical" href="${canonicalUrl}" />
    `;
    html = html.replace('</head>', `${ogTags}\n</head>`);

    // 3. Inject dynamic JSON-LD Schema (Hotel + FAQPage) for GEO / VEO engines
    const faqEntity = hotel.faq ? hotel.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    })) : [];

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": ["Hotel", "FAQPage"],
      "name": hotel.name,
      "description": hotel.description,
      "image": hotel.imageUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": hotel.district,
        "addressRegion": hotel.city,
        "addressCountry": "TR"
      },
      "telephone": hotel.phone || "+90 252 444 0000",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": trustScore,
        "bestRating": "10",
        "worstRating": "1",
        "ratingCount": approvedComplaints.length + 1
      },
      "url": canonicalUrl,
      "amenityFeature": (hotel.features || []).map(feat => ({
        "@type": "LocationFeatureSpecification",
        "name": feat,
        "value": true
      })),
      "mainEntity": faqEntity
    };

    const schemaScript = `<script type="application/ld+json">\n${serializeJsonLd(jsonLd)}\n</script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);

    res.send(html);
  } catch (err) {
    console.error("SEO Prerender Error:", err);
    res.status(500).send("Bir hata oluştu.");
  }
}

const categorySeoPages = {
  '/evcil-hayvan-dostu-oteller': { title: 'Evcil Hayvan Dostu Oteller | Patiyle Seyahat', description: 'Köpek, kedi ve diğer evcil hayvanları kabul eden otelleri; kilo sınırı, ek ücret ve tesis kurallarıyla karşılaştırın.', content: seoContent.accommodations },
  '/kedi-kopek-otelleri': { title: 'Kedi ve Köpek Otelleri | Güvenli Pet Bakımı', description: 'Kedi oteli, köpek oteli, gündüz bakım ve ev tipi pet bakım merkezlerini özellikleri ve kabul şartlarıyla inceleyin.', content: seoContent.boardings },
  '/pet-taksi': { title: 'Pet Taksi ve Evcil Hayvan Transferi | Patiyle Seyahat', description: 'Veteriner, havaalanı, otel ve bakım merkezi ulaşımı için pet taksi ve güvenli evcil hayvan transfer seçeneklerini karşılaştırın.', content: seoContent.taxis },
  '/veterinerler': { title: '7/24 Acil Veteriner Klinikleri | Patiyle Seyahat', description: 'Yakınınızdaki 7/24 açık acil veteriner kliniklerini, adres ve hizmet olanaklarıyla inceleyin.', content: seoContent.vets },
  '/evcil-hayvanla-gezilecek-yerler': { title: 'Evcil Hayvanla Gezilecek Yerler | Patiyle Seyahat', description: 'Köpekle gezilecek park, plaj, yürüyüş rotası ve evcil hayvan kabul eden mekanları keşfedin.', content: seoContent.experiences },
  '/evcil-hayvan-seyahat-rehberi': { title: 'Evcil Hayvan Seyahat Rehberi | Patiyle Seyahat', description: 'Kedi ve köpekle yolculuk, sağlık belgeleri, otel seçimi ve destinasyon hazırlığı için güncel seyahat rehberleri.', content: seoContent.guides },
  '/otel-zincirleri': { title: 'Türkiye Evcil Hayvan Dostu Otel Zincirleri (Hilton, Radisson vb.) | Patiyle Seyahat', description: 'Hilton, Radisson, Akra, Swissotel gibi otel zincirlerinin evcil hayvan politikaları, kilo sınırları ve aile dostu konaklama imkanları.', content: seoContent.chains }
};

app.get(Object.keys(categorySeoPages), (req, res) => {
  const page = categorySeoPages[req.path];
  const canonicalUrl = `https://www.patiyleseyahat.com${req.path}`;
  const description = page.description;
  const escapedTitle = escapeHtml(page.title);
  const escapedDescription = escapeHtml(description);
  let html = getIndexHtmlTemplate();

  html = html.replace(/<title>.*?<\/title>/, `<title>${escapedTitle}</title>`);
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapedDescription}" />`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': canonicalUrl,
        name: page.content.title,
        description,
        url: canonicalUrl,
        isPartOf: { '@type': 'WebSite', name: 'Patiyle Seyahat', url: 'https://www.patiyleseyahat.com/' }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.patiyleseyahat.com/' },
          { '@type': 'ListItem', position: 2, name: page.content.title, item: canonicalUrl }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.content.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      }
    ]
  };

  html = html.replace('</head>', `
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${escapedTitle}" />
    <meta property="og:description" content="${escapedDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <script type="application/ld+json">${serializeJsonLd(jsonLd)}</script>
  </head>`);
  res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.send(html);
});

const legacyCategoryRedirects = {
  '/accommodations': '/evcil-hayvan-dostu-oteller',
  '/boardings': '/kedi-kopek-otelleri',
  '/guides': '/evcil-hayvan-seyahat-rehberi',
  '/gezilecek-yerler': '/evcil-hayvanla-gezilecek-yerler'
};

app.get(Object.keys(legacyCategoryRedirects), (req, res) => redirectToLocalPath(res, legacyCategoryRedirects[req.path]));

// Indexable province landing pages with unique metadata and structured data.
app.get('/evcil-hayvan-dostu-oteller/:citySlug', asyncRoute(async (req, res) => {
  const { hotels } = await getHotelSeoData({ citySlug: req.params.citySlug, limit: 100 });
  const cityHotels = hotels.filter(hotel => slugify(hotel.city) === req.params.citySlug);

  if (cityHotels.length === 0) {
    return res.status(404).send('Bu il için listelenmiş tesis bulunamadı.');
  }

  const cityName = cityHotels[0].city;
  const verifiedHotelCount = cityHotels.filter(hotel => hotel.verified).length;
  const canonicalUrl = `https://www.patiyleseyahat.com/evcil-hayvan-dostu-oteller/${req.params.citySlug}`;
  const title = escapeHtml(`${cityName} Evcil Hayvan Dostu Oteller | Patiyle Seyahat`);
  const description = escapeHtml(`${cityName} ilinde evcil hayvan kabul eden ${cityHotels.length} oteli; pet politikaları, tesis özellikleri ve konumlarıyla karşılaştırın.`);
  let html = getIndexHtmlTemplate();

  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`);

  const socialAndCanonicalTags = `
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
  `;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': canonicalUrl,
        name: `${cityName} Evcil Hayvan Dostu Oteller`,
        description,
        url: canonicalUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Patiyle Seyahat',
          url: 'https://www.patiyleseyahat.com/'
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: 'https://www.patiyleseyahat.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${cityName} Evcil Hayvan Dostu Oteller`,
            item: canonicalUrl
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: `${cityName} Evcil Hayvan Dostu Oteller`,
        numberOfItems: cityHotels.length,
        itemListElement: cityHotels.map((hotel, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: hotel.name,
          url: `https://www.patiyleseyahat.com${getHotelPath(hotel)}`
        }))
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `${cityName}'da evcil hayvan dostu otel var mı?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${cityName} ilinde ${cityHotels.length} tesis adayı listeleniyor. ${verifiedHotelCount} tesisin ayrıntılı pet politikası doğrulanmıştır; diğer tesisler için rezervasyon öncesinde işletmeden yazılı onay alınmalıdır.`
            }
          },
          {
            '@type': 'Question',
            name: `${cityName}'daki oteller evcil hayvan için ücret alıyor mu?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pet ücreti ve depozito koşulları tesise göre değişir. Güncel tutar rezervasyon öncesinde doğrudan işletmeden doğrulanmalıdır.'
            }
          },
          {
            '@type': 'Question',
            name: `${cityName}'da büyük ırk köpek kabul eden otel bulunur mu?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kilo ve ırk kısıtlamaları tesis bazında değişir. Büyük ırk köpek için rezervasyondan önce tesisten açık onay alınmalıdır.'
            }
          },
          {
            '@type': 'Question',
            name: `${cityName}'da kedi kabul eden oteller nasıl bulunur?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kedi kabulü, taşıma çantası ve odada yalnız kalma kuralları tesis bazında değişir. Tesis detayını inceleyin ve rezervasyon öncesinde yazılı onay alın.'
            }
          },
          {
            '@type': 'Question',
            name: `${cityName}'da evcil hayvan dostu bungalov var mı?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Konaklama türü filtresinden bungalov seçilerek mevcut seçenekler ayrılabilir. Müstakil tesislerde de kilo, ırk ve ek ücret koşulları uygulanabilir.'
            }
          },
          {
            '@type': 'Question',
            name: `${cityName}'daki pet friendly oteller hangi belgeleri ister?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Güncel aşı karnesi, mikroçip bilgisi veya veteriner sağlık kaydı istenebilir. Belge şartı seyahatten önce doğrudan tesisten doğrulanmalıdır.'
            }
          }
        ]
      }
    ]
  };

  html = html.replace('</head>', `${socialAndCanonicalTags}\n<script type="application/ld+json">${serializeJsonLd(jsonLd)}</script>\n</head>`);
  res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.send(html);
}));

function formatW3CDate(rawDate) {
  const fallback = '2026-09-03';
  if (!rawDate) return fallback;
  const str = String(rawDate).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    return str;
  }
  const d = new Date(str);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split('T')[0];
  }
  return fallback;
}

app.use('/sitemaps', express.static(path.join(__dirname,'public','sitemaps'), { index:false, dotfiles:'deny', maxAge:'1h' }));
app.get('/sitemap.xml', async (req,res,next) => {
  try {
    const paths = new Set([
      '/', '/evcil-hayvan-dostu-oteller', '/kedi-kopek-otelleri', '/pet-taksi', '/veterinerler',
      '/evcil-hayvanla-gezilecek-yerler', '/evcil-hayvan-seyahat-rehberi', '/trust-ads', '/otel-zincirleri',
      ...PROGRAMMATIC_CLUSTERS.map(cluster => '/' + cluster.slug)
    ]);
    async function addCatalog(resource, pathFor) {
      let cursor;
      do {
        const page = await repository.page(resource, { limit: 100, ...(cursor ? { cursor } : {}) });
        for (const item of page.data) paths.add(pathFor(item));
        cursor = page.nextCursor;
      } while (cursor);
    }
    await addCatalog('hotels', getHotelPath);
    await addCatalog('vets', getVetPath);
    await addCatalog('boardings', item => `/bakim/${encodeURIComponent(item.id)}`);
    await addCatalog('pet_taxis', item => `/taksi/${encodeURIComponent(item.id)}`);
    await addCatalog('guides', item => `/rehber/${encodeURIComponent(item.id)}`);
    const origin = 'https://www.patiyleseyahat.com';
    const escapeXml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]);
    const body = [...paths].map(item => `<url><loc>${escapeXml(origin + item)}</loc></url>`).join('');
    res.set('Cache-Control', 'public, max-age=0, s-maxage=3600').type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`);
  } catch (error) {
    next(error);
  }
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send([
    'User-agent: *',
    'Allow: /',
    'Disallow: /yonetici',
    '',
    'Sitemap: https://www.patiyleseyahat.com/sitemap.xml'
  ].join('\n'));
});

app.get('/yonetici', (req, res) => {
  let html = getIndexHtmlTemplate();
  html = html.replace(
    /<meta name="robots" content=".*?" \/>/,
    '<meta name="robots" content="noindex, nofollow" />'
  );
  return res.send(html);
});

app.get('/trust-ads', (req, res) => {
  let html = getIndexHtmlTemplate();
  const title = 'Reklam Başvurusu ve Sponsorluk | Patiyle Seyahat';
  const description = 'Otel, pet oteli, veteriner, pet taksi ve evcil hayvan markaları için Patiyle Seyahat reklam ve sponsorluk başvurusu.';
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`);
  html = html.replace('</head>', `
    <link rel="canonical" href="https://www.patiyleseyahat.com/trust-ads" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.patiyleseyahat.com/trust-ads" />
  </head>`);
  res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.send(html);
});

// SEO-friendly hotel path: /otel/il/ilce/otel-ismi
app.get('/otel/:city/:district/:hotelSlug', asyncRoute(async (req, res) => {
  const { hotels, complaints } = await getHotelSeoData({ citySlug: req.params.city, districtSlug: req.params.district, nameSlug: req.params.hotelSlug, limit: 1 });
  const hotel = findHotelBySlugs(hotels, req.params.city, req.params.district, req.params.hotelSlug);

  if (!hotel) {
    return res.status(404).send("Tesis bulunamadı.");
  }

  return renderHotelSeoPage(res, hotel, complaints);
}));

// Preserve old links and consolidate SEO signals on the canonical URL.
app.get('/otel/:id', asyncRoute(async (req, res) => {
  const hotel = await repository.one('hotels', req.params.id);

  if (!hotel) {
    return res.status(404).send("Tesis bulunamadı.");
  }

  return redirectToLocalPath(res, getHotelPath(hotel));
}));

// Intercept Boarding Detail page request for SEO & GEO
app.get('/bakim/:id', async (req, res) => {
  try {
    const boardingId = req.params.id;
    const boarding = await repository.one('boardings', boardingId);

    if (!boarding) {
      return res.status(404).send("Bakım merkezi bulunamadı.");
    }

    let html = getIndexHtmlTemplate();

    const title = escapeHtml(`${boarding.name} | ${boarding.city} Doğrulanmış Kedi/Köpek Oteli | Patiyle Seyahat`);
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

    const desc = escapeHtml(`${boarding.name} evcil hayvan bakım merkezi: ${boarding.boardingModel}, ${boarding.price}. ${boarding.description.slice(0, 130)}...`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": boarding.name,
      "description": boarding.description,
      "image": boarding.imageUrl,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": boarding.district,
        "addressRegion": boarding.city,
        "addressCountry": "TR"
      },
      "telephone": boarding.phone
    };

    const schemaScript = `<script type="application/ld+json">\n${serializeJsonLd(jsonLd)}\n</script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);

    res.send(html);

  } catch (err) {
    res.status(500).send("Bir hata oluştu.");
  }
});

// Intercept Pet Taxi page request for SEO & GEO
app.get('/taksi/:id', async (req, res) => {
  try {
    const taxiId = req.params.id;
    const taxi = await repository.one('pet_taxis', taxiId);

    if (!taxi) {
      return res.status(404).send("Pet taksi bulunamadı.");
    }


    let html = getIndexHtmlTemplate();

    const title = escapeHtml(`${taxi.name} | ${taxi.city} Evcil Hayvan Taksi Hizmeti | Patiyle Seyahat`);
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

    const desc = escapeHtml(`${taxi.name} evcil hayvan transferi: ${taxi.price}. ${taxi.description.slice(0, 130)}...`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": taxi.name,
      "description": taxi.description,
      "image": taxi.imageUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": taxi.district,
        "addressRegion": taxi.city,
        "addressCountry": "TR"
      },
      "telephone": taxi.phone,
      "provider": {
        "@type": "LocalBusiness",
        "name": taxi.name,
        "telephone": taxi.phone
      }
    };

    const schemaScript = `<script type="application/ld+json">\n${serializeJsonLd(jsonLd)}\n</script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);

    res.send(html);
  } catch (err) {
    res.status(500).send("Bir hata oluştu.");
  }
});

// Intercept Vet page request for SEO & GEO
app.get(['/veteriner/:id', '/veteriner/:city/:district/:name'], async (req, res) => {
  try {
    const vet = req.params.id
      ? await repository.one('vets', req.params.id)
      : (await repository.page('vets', {
          citySlug: req.params.city,
          districtSlug: req.params.district,
          nameSlug: req.params.name,
          limit: 1
        }, true)).data[0];

    if (!vet) {
      return res.status(404).send("Veteriner kliniği bulunamadı.");
    }


    let html = getIndexHtmlTemplate();

    const title = escapeHtml(`${vet.name} | ${vet.city} 7/24 Acil Nöbetçi Veteriner | Patiyle Seyahat`);
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

    const desc = escapeHtml(`${vet.name} 7/24 açık acil veteriner kliniği: ${vet.address || ''}. ${(vet.description || '').slice(0, 130)}...`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "name": vet.name,
      "description": vet.description,
      "image": vet.imageUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": vet.address,
        "addressLocality": vet.district,
        "addressRegion": vet.city,
        "addressCountry": "TR"
      },
      "telephone": vet.phone
    };

    const schemaScript = `<script type="application/ld+json">\n${serializeJsonLd(jsonLd)}\n</script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);

    res.send(html);
  } catch (err) {
    res.status(500).send("Bir hata oluştu.");
  }
});

// Intercept Travel Guide Detail page request for SEO & GEO crawling injection
app.get('/rehber/:id', async (req, res) => {
  try {
    const guideId = req.params.id;
    const guide = await repository.one('guides', guideId);

    if (!guide) {
      return res.status(404).send("Rehber bulunamadı.");
    }

    let html = getIndexHtmlTemplate();

    // Custom titles
    const title = escapeHtml(`${guide.title} | Seyahat Rehberi | Patiyle Seyahat`);
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

    const desc = escapeHtml(guide.summary);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);

    // Injected Article JSON-LD schema
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
          "url": "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=80&q=80"
        }
      }
    };

    const schemaScript = `<script type="application/ld+json">\n${serializeJsonLd(jsonLd)}\n</script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);

    res.send(html);

  } catch (err) {
    res.status(500).send("Bir hata oluştu.");
  }
});

// Fallback: serve standard frontend shell with Home Page SEO & GEO metadata
app.get('*', (req, res) => {
  try {
    let html = getIndexHtmlTemplate();
    
    // If requesting root path, inject organization & website schemas
    const path = req.path;
    if (path === '/' || path === '/home') {
      const title = "Patiyle Seyahat | Türkiye'nin En Kapsamlı Evcil Hayvan Dostu Seyahat Platformu";
      html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

      const desc = "Türkiye genelinde kedi ve köpek kabul eden oteller, pansiyonlar ve bakım merkezleri. Editör onaylı evcil hayvan politikaları ve 10 üzerinden Pati Güven Endeksi.";
      html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);
      html = html.replace('</head>', `
        <link rel="canonical" href="https://www.patiyleseyahat.com/" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.patiyleseyahat.com/" />
      </head>`);

      const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "name": "Patiyle Seyahat",
            "url": "https://www.patiyleseyahat.com/",
            "description": "Evcil hayvan sahipleri için otel arama ve bakım otelleri rehberi.",
            "publisher": {
              "@type": "Organization",
              "name": "Patiyle Seyahat",
              "logo": {
                "@type": "ImageObject",
                "url": "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=80&q=80"
              }
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": seoContent.home.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]
      };

      const schemaScript = `<script type="application/ld+json">\n${serializeJsonLd(jsonLd)}\n</script>`;
      html = html.replace('</head>', `${schemaScript}\n</head>`);
    }

    res.send(html);
  } catch (err) {
    res.status(500).send("Ana sayfa yüklenirken hata oluştu.");
  }
});

app.use(handleRequestError);

export default app;

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`Patiyle Seyahat Full-Stack REST API & Server listening on port ${PORT}`);
    console.log(`Database connected: ${process.env.DATABASE_URL ? 'DATABASE_URL' : 'local PostgreSQL (Port 5436)'}`);
    console.log(`Dynamic HTML Prerender SEO/GEO engine started.`);
    console.log(`==================================================`);
  });
}
