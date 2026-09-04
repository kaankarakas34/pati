import * as ftp from 'basic-ftp';
import fs from 'fs';
import path from 'path';
import { getPublicUrl } from '../lib/public-http.js';

async function testUploadAndHttp() {
  const client = new ftp.Client();

  const testFilePath = path.resolve(process.cwd(), 'scratch', 'test.txt');
  if (!fs.existsSync(path.dirname(testFilePath))) {
    fs.mkdirSync(path.dirname(testFilePath), { recursive: true });
  }
  fs.writeFileSync(testFilePath, 'PatiyleSeyahat CDN Test File - ' + new Date().toISOString());

  try {
    console.log('FTP sunucusuna bağlanılıyor (89.19.30.15:21)...');
    await client.access({
      host: '89.19.30.15',
      port: 21,
      user: process.env.FTP_USER || '',
      password: process.env.FTP_PASSWORD || '',
      secure: false
    });

    console.log('Dosya FTP sunucusuna yükleniyor: test.txt...');
    await client.uploadFrom(testFilePath, 'test.txt');
    console.log('✅ Dosya FTP sunucusuna başarıyla yüklendi!');

    // Test HTTP Access
    const urlsToTest = [
      'https://cdn.patiyleseyahat.com/test.txt',
      'http://cdn.patiyleseyahat.com/test.txt'
    ];

    for (const url of urlsToTest) {
      try {
        console.log(`HTTP erişimi test ediliyor: ${url}`);
        const res = await getPublicUrl(url, { timeout: 5000 });
        console.log(`✅ HTTP Bağlantısı BAŞARILI (${res.status}): ${res.data}`);
      } catch (httpErr) {
        console.log(`⚠️ HTTP Erişim Notu (${url}): ${httpErr.message}`);
      }
    }

  } catch (err) {
    console.error('❌ Hata:', err.message);
  } finally {
    client.close();
  }
}

testUploadAndHttp();
