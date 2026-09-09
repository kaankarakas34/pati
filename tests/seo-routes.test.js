import test from 'node:test';
import assert from 'node:assert/strict';
import app from '../server.js';

test('All P0 clusters, city landing pages, and service directories return HTTP 200 with rich SEO/GEO HTML', async (t) => {
  const server = await new Promise(resolve => {
    const s = app.listen(0, () => resolve(s));
  });
  const port = server.address().port;
  const baseUrl = `http://localhost:${port}`;

  const routesToTest = [
    {
      path: '/evcil-hayvan-dostu-oteller',
      expectedStatus: 200,
      mustContain: ['Evcil Hayvan Dostu Oteller', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/kopek-kabul-eden-oteller',
      expectedStatus: 200,
      mustContain: ['Köpek Kabul Eden Oteller', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/kedi-kabul-eden-oteller',
      expectedStatus: 200,
      mustContain: ['Kedi Kabul Eden Oteller', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/buyuk-kopek-kabul-eden-oteller',
      expectedStatus: 200,
      mustContain: ['Büyük Köpek', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/ucretsiz-evcil-hayvan-kabul-eden-oteller',
      expectedStatus: 200,
      mustContain: ['Ek Ücret Almayan', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/her-sey-dahil-evcil-hayvan-dostu-oteller',
      expectedStatus: 200,
      mustContain: ['Her Şey Dahil', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/bahceli-evcil-hayvan-dostu-oteller',
      expectedStatus: 200,
      mustContain: ['Bahçeli', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/evcil-hayvan-dostu-bungalovlar',
      expectedStatus: 200,
      mustContain: ['Bungalov', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/kopek-kabul-eden-bungalovlar',
      expectedStatus: 200,
      mustContain: ['Bungalov', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/evcil-hayvan-dostu-villalar',
      expectedStatus: 200,
      mustContain: ['Villa', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/evcil-hayvan-dostu-butik-oteller',
      expectedStatus: 200,
      mustContain: ['Butik Otel', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/evcil-hayvan-dostu-tatil-koyleri',
      expectedStatus: 200,
      mustContain: ['Tatil Köy', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/evcil-hayvan-dostu-oteller/istanbul',
      expectedStatus: 200,
      mustContain: ['İstanbul', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/evcil-hayvan-dostu-oteller/mugla',
      expectedStatus: 200,
      mustContain: ['Muğla', 'ItemList', 'FAQPage', '/otel/']
    },
    {
      path: '/patili-mekanlar',
      expectedStatus: 200,
      mustContain: ['Patili Mekanlar', 'Kafe ve Restoran']
    },
    {
      path: '/kopek-gezdiricileri',
      expectedStatus: 200,
      mustContain: ['Köpek Gezdiricileri', 'komisyon']
    },
    {
      path: '/veterinerler',
      expectedStatus: 200,
      mustContain: ['Veteriner Klinikleri & Hayvan Hastaneleri Rehberi']
    }
  ];

  try {
    for (const route of routesToTest) {
      const res = await fetch(`${baseUrl}${route.path}`);
      assert.equal(res.status, route.expectedStatus, `Expected ${route.path} to return ${route.expectedStatus}, got ${res.status}`);
      const body = await res.text();
      
      // Check canonical apex url
      assert.ok(
        body.includes(`https://patili.co${route.path}`),
        `Expected canonical link for https://patili.co${route.path}`
      );

      // Check required keywords in HTML
      for (const str of route.mustContain) {
        assert.ok(
          body.includes(str),
          `Expected ${route.path} HTML to contain "${str}"`
        );
      }
    }

    // Also test real 404 on invalid route
    const badRes = await fetch(`${baseUrl}/bu-sayfa-kesinlikle-yok-123456`);
    assert.equal(badRes.status, 404, 'Expected non-existent route to return real 404 status');
    const badBody = await badRes.text();
    assert.ok(badBody.includes('Sayfa Bulunamadı'), 'Expected 404 HTML body to have Sayfa Bulunamadı');

  } finally {
    server.close();
  }
});
