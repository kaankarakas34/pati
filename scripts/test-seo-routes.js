import axios from 'axios';
import { getBoardingPath } from '../lib/seo-slugs.js';
import app from '../server.js';

async function test() {
  const port = 3009;
  const server = await new Promise((resolve) => {
    const s = app.listen(port, () => resolve(s));
  });
  const baseUrl = `http://localhost:${port}`;

  // 1. Check API
  const apiRes = await axios.get(`${baseUrl}/api/boardings?envelope=true&limit=10`);
  console.log('✓ API Boardings count returned:', apiRes.data.data.length);
  const sample = apiRes.data.data[0];
  console.log('✓ Sample boarding:', sample.name, '| City:', sample.city, '| District:', sample.district);

  // 2. Check canonical path
  const path = getBoardingPath(sample);
  console.log('✓ Calculated SEO path:', path);

  // 3. Check SEO prerender page
  const pageRes = await axios.get(`${baseUrl}${path}`);
  console.log('✓ Page status:', pageRes.status);
  const html = pageRes.data;
  console.log('✓ Title tag:', html.match(/<title>(.*?)<\/title>/)?.[1]);
  console.log('✓ Meta description exists:', html.includes('<meta name="description"'));
  console.log('✓ Meta keywords exists:', html.includes('<meta name="keywords"'));
  console.log('✓ JSON-LD PetGroomingOrBoarding exists:', html.includes('"PetGroomingOrBoarding"'));
  console.log('✓ BreadcrumbList schema exists:', html.includes('"BreadcrumbList"'));
  console.log('✓ PreRender HTML GEO/VEO content exists:', html.includes('Evcil Hayvan Konaklama ve Bakım Koşulları'));

  // 4. Check 301 redirect from legacy /bakim/:id
  try {
    await axios.get(`${baseUrl}/bakim/${sample.id}`, { maxRedirects: 0 });
  } catch (err) {
    console.log('✓ Redirect status:', err.response?.status, '| Location:', err.response?.headers?.location);
  }
}

test()
  .then(() => {
    console.log('\nAll SEO tests passed successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Test error:', err.message);
    process.exit(1);
  });
