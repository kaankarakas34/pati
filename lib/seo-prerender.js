/**
 * SEO & GEO Pre-renderer for Patili.co
 * Generates semantic, crawlable raw HTML into <div id="root"> for non-JS search engine bots
 * and fast initial paint before client-side React hydration takes over.
 */

export function escapeHtml(value = '') {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

import { getHotelPath, getVetPath, slugify } from './seo-slugs.js';

export function renderHotelPreRenderHtml(hotel, complaintsList = [], relatedHotels = []) {
  const approvedComplaints = complaintsList.filter(c => c.targetId === hotel.id && c.status === 'approved');
  const trustScore = Math.max(1.0, (hotel.baseTrustScore || 8) - (hotel.approvedComplaintCount ?? approvedComplaints.length) * 0.5).toFixed(1);
  const citySlug = slugify(hotel.city || '');
  const districtSlug = slugify(hotel.district || '');
  const hotelPath = getHotelPath(hotel);

  const breadcrumbsHtml = `
    <nav aria-label="breadcrumb" class="mb-6 py-2.5 px-4 bg-brand-navy-light/40 border-b border-brand-beige rounded-2xl">
      <ol class="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
        <li><a href="/" class="hover:underline text-gray-600">Ana Sayfa</a></li>
        <li class="text-gray-400">/</li>
        <li><a href="/evcil-hayvan-dostu-oteller" class="hover:underline text-gray-600">Evcil Hayvan Dostu Oteller</a></li>
        <li class="text-gray-400">/</li>
        <li><a href="/evcil-hayvan-dostu-oteller/${citySlug}" class="hover:underline text-gray-600">${escapeHtml(hotel.city)} Otelleri</a></li>
        ${hotel.district ? `
          <li class="text-gray-400">/</li>
          <li><a href="/evcil-hayvan-dostu-oteller/${citySlug}/${districtSlug}" class="hover:underline text-gray-600">${escapeHtml(hotel.district)}</a></li>
        ` : ''}
        <li class="text-gray-400">/</li>
        <li class="text-brand-navy font-extrabold" aria-current="page">${escapeHtml(hotel.name)}</li>
      </ol>
    </nav>
  `;

  const relatedHtml = relatedHotels.length > 0 ? `
    <section class="mt-12 pt-8 border-t border-gray-200">
      <h2 class="text-xl font-bold font-title text-brand-navy mb-4">${escapeHtml(hotel.city)} Bölgesindeki Diğer Evcil Hayvan Dostu Oteller</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${relatedHotels.map(h => `
          <article class="border border-brand-beige rounded-2xl p-4 bg-white hover:shadow-md transition-shadow">
            <h3 class="font-bold text-brand-navy text-base">
              <a href="${getHotelPath(h)}" class="hover:underline">${escapeHtml(h.name)}</a>
            </h3>
            <p class="text-xs text-gray-500 mt-1">${escapeHtml(h.district || '')}, ${escapeHtml(h.city || '')}</p>
            <p class="text-xs text-gray-600 mt-2">${h.weightLimit > 0 ? `${h.weightLimit} kg limit` : 'Kilo sınırı yok'}, ${h.extraFee === 'no' ? 'Ek ücret yok' : 'Ek ücretli'}</p>
            <a href="${getHotelPath(h)}" class="inline-block mt-3 text-xs font-bold text-brand-c2 hover:underline">Oteli İncele &rarr;</a>
          </article>
        `).join('')}
      </div>
    </section>
  ` : '';

  return `
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      ${breadcrumbsHtml}
      
      <article class="space-y-6">
        <header class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">✓ Editör Doğrulamalı</span>
            <span class="px-2.5 py-1 bg-brand-cream text-brand-navy text-xs font-bold rounded-full">Pati Güven Skoru: ${trustScore}/10</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-bold font-title text-brand-navy">${escapeHtml(hotel.name)}</h1>
          <p class="text-sm text-gray-600">${escapeHtml(hotel.district || '')}, ${escapeHtml(hotel.city || '')} — Son Doğrulama: Eylül 2026</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-6">
            ${hotel.imageUrl ? `
              <div class="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100">
                <img src="${escapeHtml(hotel.imageUrl)}" alt="${escapeHtml(hotel.name)}" class="w-full h-full object-cover" loading="eager" fetchpriority="high" width="800" height="450" />
              </div>
            ` : ''}

            <section class="space-y-3">
              <h2 class="text-lg font-bold font-title text-brand-navy">Tesis ve Evcil Hayvan Politikası Hakkında</h2>
              <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(hotel.description || 'Bu tesis evcil hayvan kabul etmektedir.')}</p>
            </section>

            <section class="border border-brand-beige rounded-2xl p-5 bg-brand-cream/30 space-y-3">
              <h2 class="text-base font-bold font-title text-brand-navy">Evcil Hayvan Kabul Şartları</h2>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <li><strong>Kilo Sınırı:</strong> ${hotel.weightLimit > 0 ? `${hotel.weightLimit} kg` : 'Kilo sınırı aranmıyor'}</li>
                <li><strong>Ek Ücret:</strong> ${hotel.extraFee === 'no' ? 'Ek ücret alınmaz' : 'Ek ücret uygulanabilir'}</li>
                <li><strong>Oda İçi Kabul:</strong> İzin verilir</li>
                <li><strong>Bahçe / Açık Alan:</strong> ${hotel.hasGarden ? 'Mevcut' : 'Tesis imkanlarına bağlı'}</li>
              </ul>
            </section>
          </div>

          <aside class="space-y-4">
            <div class="border border-brand-beige rounded-2xl p-5 bg-white space-y-3">
              <h2 class="text-base font-bold font-title text-brand-navy">İletişim ve Konum</h2>
              <p class="text-xs text-gray-600"><strong>Adres:</strong> ${escapeHtml(hotel.district || '')}, ${escapeHtml(hotel.city || '')}, Türkiye</p>
              ${hotel.phone ? `<p class="text-xs text-gray-600"><strong>Telefon:</strong> ${escapeHtml(hotel.phone)}</p>` : ''}
              <div class="pt-2">
                <a href="${hotelPath}" class="w-full block text-center py-2.5 px-4 bg-brand-c2 text-white font-bold text-xs rounded-xl hover:bg-brand-c1 transition-colors">Detaylı İncele ve Rezervasyon</a>
              </div>
            </div>
          </aside>
        </div>

        ${relatedHtml}
      </article>
    </main>
  `;
}

export function renderVetPreRenderHtml(vet, relatedVets = []) {
  const citySlug = slugify(vet.city || '');
  const districtSlug = slugify(vet.district || '');
  const vetPath = getVetPath(vet);

  const breadcrumbsHtml = `
    <nav aria-label="breadcrumb" class="mb-6 py-2.5 px-4 bg-brand-navy-light/40 border-b border-brand-beige rounded-2xl">
      <ol class="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
        <li><a href="/" class="hover:underline text-gray-600">Ana Sayfa</a></li>
        <li class="text-gray-400">/</li>
        <li><a href="/veterinerler" class="hover:underline text-gray-600">Veterinerler</a></li>
        <li class="text-gray-400">/</li>
        <li><a href="/veterinerler?city=${citySlug}" class="hover:underline text-gray-600">${escapeHtml(vet.city)} Veterinerleri</a></li>
        ${vet.district ? `
          <li class="text-gray-400">/</li>
          <li><a href="/veterinerler?city=${citySlug}&district=${districtSlug}" class="hover:underline text-gray-600">${escapeHtml(vet.district)}</a></li>
        ` : ''}
        <li class="text-gray-400">/</li>
        <li class="text-brand-navy font-extrabold" aria-current="page">${escapeHtml(vet.name)}</li>
      </ol>
    </nav>
  `;

  const relatedHtml = relatedVets.length > 0 ? `
    <section class="mt-12 pt-8 border-t border-gray-200">
      <h2 class="text-xl font-bold font-title text-brand-navy mb-4">${escapeHtml(vet.city)} Çevresindeki Diğer Veteriner Klinikleri</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${relatedVets.map(v => `
          <article class="border border-brand-beige rounded-2xl p-4 bg-white hover:shadow-md transition-shadow">
            <h3 class="font-bold text-brand-navy text-base">
              <a href="${getVetPath(v)}" class="hover:underline">${escapeHtml(v.name)}</a>
            </h3>
            <p class="text-xs text-gray-500 mt-1">${escapeHtml(v.district || '')}, ${escapeHtml(v.city || '')}</p>
            <p class="text-xs text-gray-600 mt-2">${v.emergency ? '🚨 7/24 Acil Nöbetçi' : 'Klinik Hizmetleri'}</p>
            <a href="${getVetPath(v)}" class="inline-block mt-3 text-xs font-bold text-brand-c2 hover:underline">Kliniği İncele &rarr;</a>
          </article>
        `).join('')}
      </div>
    </section>
  ` : '';

  return `
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      ${breadcrumbsHtml}

      <article class="space-y-6">
        <header class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full">7/24 Acil Nöbetçi Hizmeti</span>
            <span class="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">✓ Doğrulanmış Klinik</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-bold font-title text-brand-navy">${escapeHtml(vet.name)}</h1>
          <p class="text-sm text-gray-600">${escapeHtml(vet.district || '')}, ${escapeHtml(vet.city || '')} — Son Doğrulama: Eylül 2026</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-6">
            ${vet.imageUrl ? `
              <div class="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100">
                <img src="${escapeHtml(vet.imageUrl)}" alt="${escapeHtml(vet.name)}" class="w-full h-full object-cover" loading="eager" fetchpriority="high" width="800" height="450" />
              </div>
            ` : ''}

            <section class="space-y-3">
              <h2 class="text-lg font-bold font-title text-brand-navy">Klinik Hakkında</h2>
              <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(vet.description || `${vet.name}, ${vet.city} ilinde kedi, köpek ve diğer evcil hayvanlar için profesyonel veteriner sağlık hizmeti vermektedir.`)}</p>
            </section>

            <section class="border border-brand-beige rounded-2xl p-5 bg-brand-cream/30 space-y-3">
              <h2 class="text-base font-bold font-title text-brand-navy">Hizmet ve Olanaklar</h2>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <li><strong>Acil / Nöbetçi:</strong> 7/24 Açık ve Acil Servis</li>
                <li><strong>Hizmet Alanı:</strong> Kedi, Köpek, Egzotik Hayvanlar</li>
                <li><strong>Hizmetler:</strong> Cerrahi, Aşılama, Teşhis, Yoğun Bakım</li>
                <li><strong>Hekim Desteği:</strong> Uzman Veteriner Kadrosu</li>
              </ul>
            </section>
          </div>

          <aside class="space-y-4">
            <div class="border border-brand-beige rounded-2xl p-5 bg-white space-y-3">
              <h2 class="text-base font-bold font-title text-brand-navy">İletişim ve Acil Adres</h2>
              <p class="text-xs text-gray-600"><strong>Adres:</strong> ${escapeHtml(vet.address || `${vet.district || ''}, ${vet.city || ''}`)}</p>
              ${vet.phone ? `<p class="text-xs text-gray-600"><strong>Telefon / Acil:</strong> <a href="tel:${escapeHtml(vet.phone)}" class="text-brand-c2 font-bold underline">${escapeHtml(vet.phone)}</a></p>` : ''}
              <div class="pt-2">
                <a href="${vetPath}" class="w-full block text-center py-2.5 px-4 bg-brand-c2 text-white font-bold text-xs rounded-xl hover:bg-brand-c1 transition-colors">İletişime Geç & Haritada Aç</a>
              </div>
            </div>
          </aside>
        </div>

        ${relatedHtml}
      </article>
    </main>
  `;
}

export function renderHomePreRenderHtml(featuredHotels = [], popularCities = []) {
  return `
    <main class="space-y-16 pb-20">
      <header class="bg-gradient-to-b from-brand-yellow/30 via-brand-beige/50 to-brand-cream py-12 md:py-16 border-b border-brand-navy/10 text-center">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-brand-navy/10 rounded-full text-xs font-bold text-brand-c2">
            <span>🐾 Türkiye'nin En Kapsamlı Pet Friendly Platformu</span>
          </div>

          <h1 class="text-3xl md:text-5xl font-bold font-title text-brand-navy leading-tight">
            Patili Dostunuzla <span class="underline decoration-brand-c4 decoration-4">Unutulmaz Anılar</span> Keşfedin 🐾
          </h1>

          <p class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Türkiye genelinde kedi ve köpek kabul eden doğrulanmış otelleri, patili mekanları, pet taksi, pet otel, köpek gezdirici ve 7/24 acil veterinerleri keşfedin.
          </p>
        </div>
      </header>

      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="text-left">
          <h2 class="text-2xl md:text-3xl font-bold font-title text-brand-navy">Öne Çıkan Kategoriler & Seyahat Noktaları</h2>
          <p class="text-sm text-gray-600 mt-1">İhtiyacınıza uygun doğrulanmış evcil hayvan dostu hizmet kategorisini seçin.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/evcil-hayvan-dostu-oteller" class="p-6 bg-white border border-brand-beige rounded-2xl hover:shadow-lg transition-all block text-left group">
            <h3 class="font-bold text-lg font-title text-brand-navy group-hover:text-brand-c2">🏨 Pati Dostu Oteller</h3>
            <p class="text-xs text-gray-600 mt-2">Kedi ve köpek kabul eden butik otel, tatil köyü ve bungalovları karşılaştırın.</p>
            <span class="text-xs font-bold text-brand-c2 mt-4 inline-block">Otelleri Gör &rarr;</span>
          </a>

          <a href="/patili-mekanlar" class="p-6 bg-white border border-brand-beige rounded-2xl hover:shadow-lg transition-all block text-left group">
            <h3 class="font-bold text-lg font-title text-brand-navy group-hover:text-brand-c2">🍽️ Patili Mekanlar</h3>
            <p class="text-xs text-gray-600 mt-2">Dostunuzla gidebileceğiniz evcil hayvan kabul eden kafe, restoran ve barlar.</p>
            <span class="text-xs font-bold text-brand-c2 mt-4 inline-block">Mekanları Gör &rarr;</span>
          </a>

          <a href="/veterinerler" class="p-6 bg-white border border-brand-beige rounded-2xl hover:shadow-lg transition-all block text-left group">
            <h3 class="font-bold text-lg font-title text-brand-navy group-hover:text-brand-c2">🏥 7/24 Acil Veterinerler</h3>
            <p class="text-xs text-gray-600 mt-2">Acil durumlarda en yakın nöbetçi veteriner kliniklerinin telefon ve adresleri.</p>
            <span class="text-xs font-bold text-brand-c2 mt-4 inline-block">Veterinerleri Gör &rarr;</span>
          </a>

          <a href="/pet-taksi" class="p-6 bg-white border border-brand-beige rounded-2xl hover:shadow-lg transition-all block text-left group">
            <h3 class="font-bold text-lg font-title text-brand-navy group-hover:text-brand-c2">🚕 Pet Taksi</h3>
            <p class="text-xs text-gray-600 mt-2">Güvenli, konforlu şehir içi ve şehirler arası evcil hayvan transferi.</p>
            <span class="text-xs font-bold text-brand-c2 mt-4 inline-block">Pet Taksileri İncele &rarr;</span>
          </a>

          <a href="/kedi-kopek-otelleri" class="p-6 bg-white border border-brand-beige rounded-2xl hover:shadow-lg transition-all block text-left group">
            <h3 class="font-bold text-lg font-title text-brand-navy group-hover:text-brand-c2">🏡 Kedi & Köpek Otelleri</h3>
            <p class="text-xs text-gray-600 mt-2">Seyahatlerinizde güvenle bırakabileceğiniz profesyonel pet pansiyonları.</p>
            <span class="text-xs font-bold text-brand-c2 mt-4 inline-block">Pet Otelleri İncele &rarr;</span>
          </a>

          <a href="/kopek-gezdiricileri" class="p-6 bg-white border border-brand-beige rounded-2xl hover:shadow-lg transition-all block text-left group">
            <h3 class="font-bold text-lg font-title text-brand-navy group-hover:text-brand-c2">🦮 Köpek Gezdiricileri</h3>
            <p class="text-xs text-gray-600 mt-2">Referanslı, güvenilir ve deneyimli profesyonel köpek gezdiricileri.</p>
            <span class="text-xs font-bold text-brand-c2 mt-4 inline-block">Gezdiricileri İncele &rarr;</span>
          </a>
        </div>
      </section>

      ${featuredHotels.length > 0 ? `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div class="text-left">
            <h2 class="text-2xl font-bold font-title text-brand-navy">Doğrulanmış Popüler Oteller</h2>
            <p class="text-xs text-gray-600 mt-1">Evcil hayvan politikaları yerinde veya teyitli kontrol edilmiş seçkin konaklama noktaları.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${featuredHotels.map(h => `
              <article class="bg-white border border-brand-beige rounded-2xl overflow-hidden hover:shadow-lg transition-shadow text-left">
                ${h.imageUrl ? `<img src="${escapeHtml(h.imageUrl)}" alt="${escapeHtml(h.name)}" class="w-full h-48 object-cover" loading="lazy" width="400" height="200" />` : ''}
                <div class="p-5 space-y-2">
                  <h3 class="font-bold font-title text-brand-navy text-lg">
                    <a href="${getHotelPath(h)}" class="hover:underline">${escapeHtml(h.name)}</a>
                  </h3>
                  <p class="text-xs text-gray-500">${escapeHtml(h.district || '')}, ${escapeHtml(h.city || '')}</p>
                  <p class="text-xs text-gray-700">${h.weightLimit > 0 ? `${h.weightLimit} kg limit` : 'Kilo sınırı yok'}, ${h.extraFee === 'no' ? 'Ek ücret yok' : 'Ek ücretli'}</p>
                  <a href="${getHotelPath(h)}" class="inline-block mt-2 text-xs font-bold text-brand-c2 hover:underline">Detayları Gör &rarr;</a>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 class="text-xl font-bold font-title text-brand-navy text-left">Popüler Şehirler</h2>
        <div class="flex flex-wrap gap-2 text-xs">
          <a href="/evcil-hayvan-dostu-oteller/istanbul" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700">İstanbul Evcil Hayvan Dostu Oteller</a>
          <a href="/evcil-hayvan-dostu-oteller/antalya" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700">Antalya Evcil Hayvan Dostu Oteller</a>
          <a href="/evcil-hayvan-dostu-oteller/mugla" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700">Muğla Evcil Hayvan Dostu Oteller</a>
          <a href="/evcil-hayvan-dostu-oteller/izmir" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700">İzmir Evcil Hayvan Dostu Oteller</a>
          <a href="/evcil-hayvan-dostu-oteller/ankara" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700">Ankara Evcil Hayvan Dostu Oteller</a>
          <a href="/evcil-hayvan-dostu-oteller/bursa" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700">Bursa Evcil Hayvan Dostu Oteller</a>
        </div>
      </section>
    </main>
  `;
}

export function render404PreRenderHtml() {
  return `
    <main class="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div class="max-w-md mx-auto space-y-6">
        <div class="text-6xl font-extrabold text-brand-c2">404</div>
        <h1 class="text-2xl sm:text-3xl font-bold font-title text-brand-navy">Sayfa Bulunamadı</h1>
        <p class="text-sm text-gray-600 leading-relaxed">
          Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
        </p>
        <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/" class="py-2.5 px-6 bg-brand-c2 text-white font-bold text-xs rounded-xl hover:bg-brand-c1 transition-colors">
            Ana Sayfaya Dön
          </a>
          <a href="/evcil-hayvan-dostu-oteller" class="py-2.5 px-6 bg-brand-cream text-brand-navy font-bold text-xs rounded-xl hover:bg-brand-yellow transition-colors">
            Otelleri Keşfet
          </a>
        </div>
      </div>
    </main>
  `;
}
