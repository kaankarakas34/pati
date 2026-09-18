import 'dotenv/config';
import axios from 'axios';

const HOST = process.env.SITE_HOST || 'patili.co';
const KEY = '5a5f0f10ad0bd7b5';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Default critical routes to ping if no arguments are passed
const DEFAULT_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/evcil-hayvan-dostu-oteller`,
  `https://${HOST}/kedi-kopek-otelleri`,
  `https://${HOST}/kopek-otelleri`,
  `https://${HOST}/kedi-otelleri`,
  `https://${HOST}/kopek-parklari`,
  `https://${HOST}/kopek-plajlari`,
  `https://${HOST}/veterinerler`,
  `https://${HOST}/7-24-veterinerler`,
  `https://${HOST}/acil-veterinerler`,
  `https://${HOST}/hayvan-hastaneleri`,
  `https://${HOST}/pet-taksi`,
  `https://${HOST}/patili-mekanlar`,
  `https://${HOST}/kopek-gezdiricileri`,
  `https://${HOST}/evcil-hayvanla-gezilecek-yerler`,
  `https://${HOST}/evcil-hayvan-seyahat-rehberi`,
  `https://${HOST}/blog`,
  `https://${HOST}/kedi-kabul-eden-oteller`,
  `https://${HOST}/kopek-kabul-eden-oteller`
];

async function submitToIndexNow(urls = []) {
  const targetUrls = urls.length > 0 ? urls : DEFAULT_URLS;
  
  console.log(`[IndexNow] ${targetUrls.length} adet URL gönderiliyor...`);
  console.log(`[IndexNow] Host: ${HOST}`);
  console.log(`[IndexNow] Key Location: ${KEY_LOCATION}`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: targetUrls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`[IndexNow] İstek gönderiliyor: ${endpoint}`);
      const response = await axios.post(endpoint, payload, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        timeout: 10000
      });

      console.log(`[IndexNow] Başarılı (${endpoint}): Status ${response.status} ${response.statusText}`);
    } catch (error) {
      if (error.response) {
        console.error(`[IndexNow] Yanıt (${endpoint}): HTTP ${error.response.status} - ${JSON.stringify(error.response.data || '')}`);
      } else {
        console.error(`[IndexNow] Bağlantı Hatası (${endpoint}):`, error.message);
      }
    }
  }
}

const args = process.argv.slice(2);
const cliUrls = args.filter(arg => arg.startsWith('http://') || arg.startsWith('https://'));

submitToIndexNow(cliUrls);
