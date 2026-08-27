import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Import database helpers
import { 
  initDatabase,
  checkDatabaseConnection,
  getHotels, saveHotel, deleteHotel,
  getBoardings, saveBoarding, deleteBoarding,
  getGuides, saveGuide, deleteGuide,
  getCorrections, saveCorrection,
  getComplaints, saveComplaint,
  getReviews, saveReview,
  getPetTaxis, savePetTaxi, deletePetTaxi,
  getVets, saveVet, deleteVet,
  getExperiences, saveExperience, deleteExperience,
  getAds, saveAd, deleteAd
} from './db.js';
import axios from 'axios';
import { initialHotels } from './src/data/mockData.js';
import { seoContent } from './src/data/seoContent.js';
import { findHotelBySlugs, getHotelPath, slugify } from './lib/seo-slugs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local development initializes automatically. Production schema changes are explicit.
if (process.env.VERCEL !== '1' || process.env.AUTO_INIT_DATABASE === 'true') {
  await initDatabase();
}

function requireAdmin(req, res, next) {
  const token = req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Admin yetkisi gerekli.' });
  }
  next();
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isAllowedScrapeUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    const hostname = parsed.hostname.toLowerCase();
    if (!['http:', 'https:'].includes(parsed.protocol)) return false;
    if (hostname === 'localhost' || hostname.endsWith('.local')) return false;
    if (/^(10|127|169\.254|192\.168)\./.test(hostname)) return false;
    if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)) return false;
    return true;
  } catch {
    return false;
  }
}

app.post('/api/admin/login', (req, res) => {
  if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !ADMIN_TOKEN) {
    return res.status(503).json({ error: 'Admin girisi sunucuda yapilandirilmamis.' });
  }
  const { username, password } = req.body || {};
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return res.json({ success: true, token: ADMIN_TOKEN });
  }
  res.status(401).json({ error: 'Hatalı kullanıcı adı veya şifre.' });
});

// ----------------------------------------------------
// REST API ENDPOINTS
// ----------------------------------------------------

app.get('/api/health/database', async (req, res) => {
  try {
    const status = await checkDatabaseConnection();
    res.json({ ok: true, database: status.database, checkedAt: status.checked_at });
  } catch (err) {
    res.status(503).json({ ok: false, error: err.message });
  }
});

// Hotels API
app.get('/api/hotels', async (req, res) => {
  try {
    const data = await getHotels();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/hotels', requireAdmin, async (req, res) => {
  try {
    const data = await saveHotel(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/hotels/:id', requireAdmin, async (req, res) => {
  try {
    await deleteHotel(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Boardings API
app.get('/api/boardings', async (req, res) => {
  try {
    const data = await getBoardings();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/boardings', requireAdmin, async (req, res) => {
  try {
    const data = await saveBoarding(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/boardings/:id', requireAdmin, async (req, res) => {
  try {
    await deleteBoarding(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Guides API
app.get('/api/guides', async (req, res) => {
  try {
    const data = await getGuides();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/guides', requireAdmin, async (req, res) => {
  try {
    const data = await saveGuide(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/guides/:id', requireAdmin, async (req, res) => {
  try {
    await deleteGuide(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Corrections API
app.get('/api/corrections', async (req, res) => {
  try {
    const data = await getCorrections();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/corrections', async (req, res) => {
  try {
    const data = await saveCorrection(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Complaints API
app.get('/api/complaints', async (req, res) => {
  try {
    const data = await getComplaints();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/complaints', async (req, res) => {
  try {
    const data = await saveComplaint(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reviews API
app.get('/api/reviews', async (req, res) => {
  try {
    const targetId = req.query.targetId;
    if (!targetId) {
      return res.status(400).json({ error: 'targetId parametresi zorunludur.' });
    }
    const data = await getReviews(targetId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const data = await saveReview(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Pet Taxis API
app.get('/api/taxis', async (req, res) => {
  try {
    const data = await getPetTaxis();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/taxis', requireAdmin, async (req, res) => {
  try {
    const data = await savePetTaxi(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/taxis/:id', requireAdmin, async (req, res) => {
  try {
    await deletePetTaxi(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Vets API
app.get('/api/vets', async (req, res) => {
  try {
    const data = await getVets();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/vets', requireAdmin, async (req, res) => {
  try {
    const data = await saveVet(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/vets/:id', requireAdmin, async (req, res) => {
  try {
    await deleteVet(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Experiences / Places API
app.get('/api/experiences', async (req, res) => {
  try {
    const data = await getExperiences();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/experiences', requireAdmin, async (req, res) => {
  try {
    const data = await saveExperience(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/experiences/:id', requireAdmin, async (req, res) => {
  try {
    await deleteExperience(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Advertising API
app.get('/api/ads', async (req, res) => {
  try {
    const data = await getAds();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/ads', requireAdmin, async (req, res) => {
  try {
    const data = await saveAd(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/ads/:id', requireAdmin, async (req, res) => {
  try {
    await deleteAd(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// URL Auto-Scrape/Fetch API
app.post('/api/scrape-hotel', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL parametresi zorunludur.' });
    }
    if (!isAllowedScrapeUrl(url)) {
      return res.status(400).json({ error: 'Bu URL güvenlik politikası nedeniyle taranamaz.' });
    }

    // Fetch HTML using axios
    const response = await axios.get(url, {
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
    console.error("Scraping error:", err.message);
    res.status(500).json({ error: 'URL taranamadı. Lütfen geçerli bir otel linki girin.' });
  }
});

// ----------------------------------------------------
// SEO & GEO DYNAMIC HTML PRERENDERING (META INJECTION)
// ----------------------------------------------------

// Serve static assets in production built directory
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Helper to load index.html template based on dev or production
function getIndexHtmlTemplate() {
  const prodPath = path.join(__dirname, 'dist/index.html');
  const devPath = path.join(__dirname, 'index.html');
  
  if (fs.existsSync(prodPath)) {
    return fs.readFileSync(prodPath, 'utf8');
  }
  return fs.readFileSync(devPath, 'utf8');
}

async function getHotelSeoData() {
  try {
    const [hotels, complaints] = await Promise.all([getHotels(), getComplaints()]);
    return { hotels, complaints };
  } catch (error) {
    console.error('SEO database fallback:', error.message);
    return { hotels: initialHotels, complaints: [] };
  }
}

function renderHotelSeoPage(res, hotel, complaintsList) {
  try {
    // Approved complaints count check
    const approvedComplaints = complaintsList.filter(c => c.targetId === hotel.id && c.status === 'approved');
    const trustScore = Math.max(1.0, (hotel.baseTrustScore || 8) - approvedComplaints.length * 0.5).toFixed(1);
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

    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
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
  '/evcil-hayvan-seyahat-rehberi': { title: 'Evcil Hayvan Seyahat Rehberi | Patiyle Seyahat', description: 'Kedi ve köpekle yolculuk, sağlık belgeleri, otel seçimi ve destinasyon hazırlığı için güncel seyahat rehberleri.', content: seoContent.guides }
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
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
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

app.get(Object.keys(legacyCategoryRedirects), (req, res) => res.redirect(301, legacyCategoryRedirects[req.path]));

// Indexable province landing pages with unique metadata and structured data.
app.get('/evcil-hayvan-dostu-oteller/:citySlug', async (req, res) => {
  const { hotels } = await getHotelSeoData();
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
          }
        ]
      }
    ]
  };

  html = html.replace('</head>', `${socialAndCanonicalTags}\n<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n</head>`);
  res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.send(html);
});

app.get('/sitemap.xml', async (req, res) => {
  const { hotels } = await getHotelSeoData();
  const citySlugs = [...new Set(hotels.map(hotel => slugify(hotel.city)).filter(Boolean))];
  const urls = [
    { loc: 'https://www.patiyleseyahat.com/', priority: '1.0', frequency: 'daily' },
    ...Object.keys(categorySeoPages).map(categoryPath => ({
      loc: `https://www.patiyleseyahat.com${categoryPath}`,
      priority: '0.9',
      frequency: 'weekly'
    })),
    ...citySlugs.map(citySlug => ({
      loc: `https://www.patiyleseyahat.com/evcil-hayvan-dostu-oteller/${citySlug}`,
      priority: '0.8',
      frequency: 'daily'
    })),
    ...hotels.map(hotel => ({
      loc: `https://www.patiyleseyahat.com${getHotelPath(hotel)}`,
      priority: '0.7',
      frequency: 'weekly',
      lastmod: hotel.updatedAt || hotel.lastVerified
    }))
  ];
  const urlNodes = urls.map(url => `
    <url>
      <loc>${escapeHtml(url.loc)}</loc>
      ${url.lastmod ? `<lastmod>${escapeHtml(url.lastmod)}</lastmod>` : ''}
      <changefreq>${url.frequency}</changefreq>
      <priority>${url.priority}</priority>
    </url>`).join('');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlNodes}
</urlset>`;

  res.set('Content-Type', 'application/xml; charset=utf-8');
  res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.send(sitemap);
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

// SEO-friendly hotel path: /otel/il/ilce/otel-ismi
app.get('/otel/:city/:district/:hotelSlug', async (req, res) => {
  const { hotels, complaints } = await getHotelSeoData();
  const hotel = findHotelBySlugs(hotels, req.params.city, req.params.district, req.params.hotelSlug);

  if (!hotel) {
    return res.status(404).send("Tesis bulunamadı.");
  }

  return renderHotelSeoPage(res, hotel, complaints);
});

// Preserve old links and consolidate SEO signals on the canonical URL.
app.get('/otel/:id', async (req, res) => {
  const { hotels } = await getHotelSeoData();
  const hotel = hotels.find(item => item.id === req.params.id);

  if (!hotel) {
    return res.status(404).send("Tesis bulunamadı.");
  }

  return res.redirect(301, getHotelPath(hotel));
});

// Intercept Boarding Detail page request for SEO & GEO
app.get('/bakim/:id', async (req, res) => {
  try {
    const boardingId = req.params.id;
    const boardings = await getBoardings();
    const boarding = boardings.find(b => b.id === boardingId);

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

    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
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
    const taxis = await getPetTaxis();
    const complaintsList = await getComplaints();
    const taxi = taxis.find(t => t.id === taxiId);

    if (!taxi) {
      return res.status(404).send("Pet taksi bulunamadı.");
    }

    const approvedComplaints = complaintsList.filter(c => c.targetId === taxi.id && c.status === 'approved');
    const trustScore = Math.max(1.0, taxi.baseTrustScore - approvedComplaints.length * 0.5).toFixed(1);

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

    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
    html = html.replace('</head>', `${schemaScript}\n</head>`);

    res.send(html);
  } catch (err) {
    res.status(500).send("Bir hata oluştu.");
  }
});

// Intercept Vet page request for SEO & GEO
app.get('/veteriner/:id', async (req, res) => {
  try {
    const vetId = req.params.id;
    const vets = await getVets();
    const complaintsList = await getComplaints();
    const vet = vets.find(v => v.id === vetId);

    if (!vet) {
      return res.status(404).send("Veteriner kliniği bulunamadı.");
    }

    const approvedComplaints = complaintsList.filter(c => c.targetId === vet.id && c.status === 'approved');
    const trustScore = Math.max(1.0, vet.baseTrustScore - approvedComplaints.length * 0.5).toFixed(1);

    let html = getIndexHtmlTemplate();

    const title = escapeHtml(`${vet.name} | ${vet.city} 7/24 Acil Nöbetçi Veteriner | Patiyle Seyahat`);
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

    const desc = escapeHtml(`${vet.name} 7/24 açık acil veteriner kliniği: ${vet.address}. ${vet.description.slice(0, 130)}...`);
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

    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
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
    const guides = await getGuides();
    const guide = guides.find(g => g.id === guideId);

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

    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
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

      const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
      html = html.replace('</head>', `${schemaScript}\n</head>`);
    }

    res.send(html);
  } catch (err) {
    res.status(500).send("Ana sayfa yüklenirken hata oluştu.");
  }
});

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
