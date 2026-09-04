import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as ftp from 'basic-ftp';
import { initialHotels, initialBoardings } from '../src/data/mockData.js';

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const FTP_CONFIG = {
  host: process.env.FTP_HOST || '89.19.30.15',
  port: 21,
  user: process.env.FTP_USER || '',
  password: process.env.FTP_PASSWORD || '',
  secure: false
};

const CDN_BASE_URL = 'http://cdn.patiyleseyahat.com/oteller';
const TEMP_DIR = path.resolve(process.cwd(), 'scratch', 'temp_images');

if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

let ftpClient = null;

async function getFtpClient() {
  if (ftpClient && !ftpClient.closed) {
    return ftpClient;
  }
  ftpClient = new ftp.Client();
  ftpClient.ftp.verbose = false;
  await ftpClient.access(FTP_CONFIG);
  await ftpClient.ensureDir('oteller');
  return ftpClient;
}

async function downloadImage(url, localPath) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(localPath);
      response.data.pipe(writer);
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (err) {
    throw new Error(`Download failed (${url}): ${err.message}`);
  }
}

async function run() {
  try {
    const client = await getFtpClient();
    console.log('✅ FTP Connected successfully.');

    // 1. Process initialHotels & initialBoardings from mockData.js
    console.log('\n--- Checking initialHotels and initialBoardings ---');
    
    for (const h of [...initialHotels, ...initialBoardings]) {
      const slug = slugify(h.name);
      
      const imagesToProcess = [];
      if (h.imageUrl && !h.imageUrl.includes('cdn.patiyleseyahat.com')) imagesToProcess.push(h.imageUrl);
      if (Array.isArray(h.galleryImages)) {
        h.galleryImages.forEach(img => {
          if (img && !img.includes('cdn.patiyleseyahat.com') && !imagesToProcess.includes(img)) imagesToProcess.push(img);
        });
      }

      if (imagesToProcess.length === 0) continue;
      console.log(`Processing remaining images for: ${h.name} (${slug})`);

      const newCdnUrls = [];

      for (let i = 0; i < imagesToProcess.length; i++) {
        const origUrl = imagesToProcess[i];
        const filename = `${slug}-${i + 1}.jpg`;
        const localPath = path.join(TEMP_DIR, filename);
        const cdnUrl = `${CDN_BASE_URL}/${filename}`;

        try {
          console.log(`  [${i + 1}/${imagesToProcess.length}] Downloading ${origUrl}...`);
          await downloadImage(origUrl, localPath);

          console.log(`  [${i + 1}/${imagesToProcess.length}] Uploading to FTP: oteller/${filename}...`);
          const activeClient = await getFtpClient();
          await activeClient.cd('/');
          await activeClient.cd('oteller');
          await activeClient.uploadFrom(localPath, filename);

          newCdnUrls.push(cdnUrl);
          console.log(`  ✅ Synced: ${cdnUrl}`);

          if (fs.existsSync(localPath)) fs.unlinkSync(localPath);
        } catch (err) {
          console.warn(`  ⚠️ Failed image ${origUrl}: ${err.message}`);
        }
      }

      if (newCdnUrls.length > 0) {
        h.imageUrl = newCdnUrls[0];
        h.galleryImages = newCdnUrls;
      }
    }

    // Update src/data/mockData.js file
    const mockDataPath = path.resolve(process.cwd(), 'src/data/mockData.js');
    let mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

    const hotelsExportCode = `export const initialHotels = ${JSON.stringify(initialHotels, null, 2)};`;
    const boardingsExportCode = `export const initialBoardings = ${JSON.stringify(initialBoardings, null, 2)};`;

    mockDataContent = mockDataContent.replace(/export const initialHotels = \[[\s\S]*?\];/, hotelsExportCode);
    mockDataContent = mockDataContent.replace(/export const initialBoardings = \[[\s\S]*?\];/, boardingsExportCode);

    fs.writeFileSync(mockDataPath, mockDataContent, 'utf8');
    console.log('✅ Updated src/data/mockData.js');

    // 2. Process scraper-results JSON files
    const scraperDir = path.resolve(process.cwd(), 'data', 'scraper-results');
    const files = fs.readdirSync(scraperDir).filter(f => f.endsWith('.json'));

    console.log(`\n--- Sweep checking ${files.length} Scraper Result Files ---`);

    for (const file of files) {
      const filePath = path.join(scraperDir, file);
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const hotels = JSON.parse(fileContent);
        if (!Array.isArray(hotels) || hotels.length === 0) continue;

        let updatedCount = 0;

        for (const h of hotels) {
          if (!h.name) continue;
          const slug = slugify(h.name);
          const imagesToProcess = [];
          
          if (h.imageUrl && !h.imageUrl.includes('cdn.patiyleseyahat.com')) imagesToProcess.push(h.imageUrl);
          if (Array.isArray(h.galleryImages)) {
            h.galleryImages.forEach(img => {
              if (img && !img.includes('cdn.patiyleseyahat.com') && !imagesToProcess.includes(img)) imagesToProcess.push(img);
            });
          }

          if (imagesToProcess.length === 0) continue;

          const newCdnUrls = h.galleryImages ? [...h.galleryImages.filter(g => g.includes('cdn.patiyleseyahat.com'))] : [];

          for (let i = 0; i < Math.min(imagesToProcess.length, 6); i++) {
            const origUrl = imagesToProcess[i];
            const filename = `${slug}-${newCdnUrls.length + 1}.jpg`;
            const localPath = path.join(TEMP_DIR, filename);
            const cdnUrl = `${CDN_BASE_URL}/${filename}`;

            try {
              console.log(`  [${h.name}] Downloading ${origUrl}...`);
              await downloadImage(origUrl, localPath);

              console.log(`  [${h.name}] FTP Uploading oteller/${filename}...`);
              const activeClient = await getFtpClient();
              await activeClient.cd('/');
              await activeClient.cd('oteller');
              await activeClient.uploadFrom(localPath, filename);

              newCdnUrls.push(cdnUrl);
              if (fs.existsSync(localPath)) fs.unlinkSync(localPath);
            } catch (err) {
              console.warn(`  ⚠️ Skipped ${filename}: ${err.message}`);
            }
          }

          if (newCdnUrls.length > 0) {
            h.imageUrl = newCdnUrls[0];
            h.galleryImages = newCdnUrls;
            updatedCount++;
          }
        }

        fs.writeFileSync(filePath, JSON.stringify(hotels, null, 2), 'utf8');
        if (updatedCount > 0) console.log(`✅ File synced: ${file} (${updatedCount} remaining hotels uploaded)`);

      } catch (fileErr) {
        console.error(`Error processing file ${file}:`, fileErr.message);
      }
    }

    console.log('\n🎉 ALL HOTEL IMAGES FULLY SYNCED TO CDN FTP!');

  } catch (err) {
    console.error('❌ Process Error:', err.message);
  } finally {
    if (ftpClient) ftpClient.close();
  }
}

run();
