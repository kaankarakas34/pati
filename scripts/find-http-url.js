import { getPublicUrl } from '../lib/public-http.js';

const candidateUrls = [
  'http://cdn.patiyleseyahat.com/test.txt',
  'https://cdn.patiyleseyahat.com/test.txt',
  'http://patiyleseyahat.com/test.txt',
  'http://patiyleseyahat.com/cdn/test.txt',
  'http://patiyleseyahat.com/cdnpati/test.txt',
  'http://esmaboutique.com/test.txt',
  'http://esmaboutique.com/cdnpati/test.txt',
  'http://89.19.30.15/test.txt',
  'http://89.19.30.15/~cdnpati/test.txt'
];

async function probeUrls() {
  for (const url of candidateUrls) {
    try {
      const res = await getPublicUrl(url, { timeout: 3000 });
      console.log(`✅ BULUNDU (${res.status}): ${url} => ${res.data.trim()}`);
    } catch (err) {
      console.log(`❌ (${url}): ${err.response ? err.response.status : err.message}`);
    }
  }
}

probeUrls();
