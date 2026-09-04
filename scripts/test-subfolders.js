import * as ftp from 'basic-ftp';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const subfolders = ['', 'public_html', 'httpdocs', 'www', 'images', 'uploads'];

async function testSubfolders() {
  const client = new ftp.Client();
  const localFile = path.resolve(process.cwd(), 'scratch', 'test.txt');

  try {
    await client.access({
      host: '89.19.30.15',
      port: 21,
      user: process.env.FTP_USER || '',
      password: process.env.FTP_PASSWORD || '',
      secure: false
    });

    for (const folder of subfolders) {
      if (folder) {
        try {
          await client.ensureDir(folder);
          console.log(`FTP klasörü oluşturuldu/girildi: ${folder}`);
        } catch (e) {
          console.log(`Klasör erişim hatası (${folder}):`, e.message);
          continue;
        }
      }
      await client.uploadFrom(localFile, 'test.txt');
      console.log(`Dosya yüklendi: ${folder ? folder + '/' : ''}test.txt`);
      await client.cd('/');
    }

    console.log('\n--- HTTP URL Probları Yapılıyor ---');
    for (const folder of subfolders) {
      const pathPart = folder ? `${folder}/test.txt` : 'test.txt';
      const url = `http://cdn.patiyleseyahat.com/${pathPart}`;
      const urlDirect = `http://cdn.patiyleseyahat.com/test.txt`;
      
      try {
        const res = await axios.get(url, { headers: { Host: 'cdn.patiyleseyahat.com' }, timeout: 4000 });
        console.log(`🎉 BAŞARILI URL (${url}): Status ${res.status}`);
      } catch (e) {
        console.log(`❌ (${url}): ${e.response ? e.response.status : e.message}`);
      }
    }

  } catch (err) {
    console.error('❌ FTP Hatası:', err.message);
  } finally {
    client.close();
  }
}

testSubfolders();
