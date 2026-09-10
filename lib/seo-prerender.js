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

import { getHotelPath, getVetPath, getBoardingPath, slugify } from './seo-slugs.js';
import { boardingFaqs, boardingSeoMetadata } from './boarding-seo.js';

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

            <section class="border-2 border-brand-navy/15 rounded-2xl p-6 bg-brand-navy-light/25 space-y-3">
              <h2 class="text-lg font-bold font-title text-brand-navy">${escapeHtml(hotel.name)} Köpek Dostu Otel mi? Evcil Hayvan Seyahati Koşulları</h2>
              <div class="bg-white p-4 rounded-xl border border-brand-beige">
                <p class="text-xs sm:text-sm text-gray-800 leading-relaxed">
                  <strong>Özet & Doğrudan Bilgi (GEO):</strong> ${escapeHtml(hotel.name)}, ${escapeHtml(hotel.city)} ${escapeHtml(hotel.district || '')} bölgesinde kedi ve köpek kabul eden teyitli bir konaklama tesisidir. 
                  ${hotel.weightLimit > 0 ? `Tesis için maksimum kilo sınırı ${hotel.weightLimit} kg olarak belirlenmiştir.` : 'Tesiste evcil hayvanlar için herhangi bir kilo kısıtlaması aranmamaktadır.'} 
                  ${hotel.extraFee === 'no' ? 'Köpek ve kediler için oda konaklamasında hiçbir ek ücret talep edilmemektedir.' : 'Tesis evcil hayvan kabulünde ek temizlik ücreti uygulayabilmektedir.'} 
                  Girişte güncel aşı karnesi ve mikroçip kontrolü yapılmaktadır.
                </p>
              </div>
            </section>

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

            <section class="space-y-4 pt-6 border-t border-brand-beige">
              <h3 class="text-base font-bold font-title text-brand-navy">${escapeHtml(hotel.name)} Sıkça Sorulan Sorular</h3>
              <div class="space-y-3 text-xs sm:text-sm">
                <div class="p-4 bg-white rounded-xl border border-brand-beige">
                  <h4 class="font-bold text-gray-900 mb-1">Soru: ${escapeHtml(hotel.name)} köpek kabul ediyor mu?</h4>
                  <p class="text-gray-600">Cevap: Evet, ${escapeHtml(hotel.name)} evcil hayvan dostu bir tesis olup köpek kabul etmektedir. ${hotel.weightLimit > 0 ? `Kabul edilen maksimum ağırlık ${hotel.weightLimit} kg'dır.` : 'Kilo sınırı uygulanmamaktadır.'}</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-brand-beige">
                  <h4 class="font-bold text-gray-900 mb-1">Soru: ${escapeHtml(hotel.name)} için evcil hayvan konaklama ücreti ne kadar?</h4>
                  <p class="text-gray-600">Cevap: ${hotel.extraFee === 'no' ? 'Tesiste evcil hayvan konaklaması tamamen ücretsizdir, ek ücret alınmaz.' : 'Tesis evcil hayvan kabulünde oda temizlik/dezenfeksiyon ücreti talep edebilmektedir.'}</p>
                </div>
                <div class="p-4 bg-white rounded-xl border border-brand-beige">
                  <h4 class="font-bold text-gray-900 mb-1">Soru: ${escapeHtml(hotel.name)} nerede bulunur ve yakınında veteriner var mı?</h4>
                  <p class="text-gray-600">Cevap: Tesis, ${escapeHtml(hotel.city)} ili ${escapeHtml(hotel.district || '')} bölgesindedir. Bölgedeki 7/24 acil veteriner kliniklerine ve nöbetçi sağlık merkezlerine Patili.co üzerinden kolayca ulaşabilirsiniz.</p>
                </div>
              </div>
            </section>

            <section class="p-5 bg-brand-navy-light/40 rounded-2xl border border-brand-navy/15 text-xs text-gray-700 space-y-2">
              <h4 class="font-bold text-brand-navy uppercase tracking-wider text-2xs">İlgili Kategoriler & Rehberler</h4>
              <p class="flex flex-wrap gap-2 pt-1">
                <a href="/evcil-hayvan-dostu-oteller/${citySlug}" class="text-brand-c2 font-bold hover:underline">${escapeHtml(hotel.city)} Evcil Hayvan Dostu Oteller</a> &bull;
                <a href="/kopek-kabul-eden-oteller" class="text-brand-c2 font-bold hover:underline">Köpek Kabul Eden Oteller</a> &bull;
                <a href="/ucretsiz-evcil-hayvan-kabul-eden-oteller" class="text-brand-c2 font-bold hover:underline">Ücretsiz Pet Kabul Edenler</a> &bull;
                <a href="/rehber/kopek-dostu-oteller-rehberi-nedir-fiyatlari-nasil-secilir" class="text-brand-c2 font-bold hover:underline">Köpek Dostu Oteller Rehberi</a> &bull;
                <a href="/rehber/evcil-hayvan-seyahati-rehberi-ucak-araba-fiyatlar-ve-kurallar" class="text-brand-c2 font-bold hover:underline">Evcil Hayvan Seyahat Rehberi</a>
              </p>
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

export function renderGuidePreRenderHtml(guide) {
  return `
    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
      <nav aria-label="breadcrumb" class="mb-6 py-2.5 px-4 bg-brand-navy-light/40 border-b border-brand-beige rounded-2xl">
        <ol class="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
          <li><a href="/" class="hover:underline text-gray-600">Ana Sayfa</a></li>
          <li class="text-gray-400">/</li>
          <li><a href="/evcil-hayvan-seyahat-rehberi" class="hover:underline text-gray-600">Seyahat Rehberleri</a></li>
          <li class="text-gray-400">/</li>
          <li class="text-brand-navy font-extrabold" aria-current="page">${escapeHtml(guide.title)}</li>
        </ol>
      </nav>

      <article class="space-y-6">
        <header class="space-y-3">
          <div class="flex items-center gap-3 text-xs font-semibold text-gray-500">
            <span class="bg-brand-navy text-white px-3 py-1 rounded-full font-bold uppercase text-3xs">${escapeHtml(guide.category || 'Seyahat')}</span>
            <span>Yayınlanma: ${escapeHtml(guide.publishedAt || '2026-09-09')}</span>
            <span>&bull;</span>
            <span>Güncelleme: ${escapeHtml(guide.updatedAt || '2026-09-09')}</span>
          </div>

          <h1 class="text-2xl sm:text-4xl font-extrabold font-title text-gray-900 leading-tight">${escapeHtml(guide.title)}</h1>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed font-normal">${escapeHtml(guide.summary || '')}</p>

          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-y border-brand-beige mt-4">
            <div class="flex items-center gap-3">
              ${guide.author?.imageUrl ? `<img src="${escapeHtml(guide.author.imageUrl)}" alt="${escapeHtml(guide.author.name || 'Editör')}" class="w-10 h-10 rounded-full object-cover" width="40" height="40" />` : ''}
              <div>
                <p class="text-sm font-bold text-gray-800">${escapeHtml(guide.author?.name || 'patili.co Editör Masası')}</p>
                <p class="text-xs text-gray-500">${escapeHtml(guide.author?.role || 'Evcil Hayvan Seyahat Araştırmacısı')}</p>
              </div>
            </div>
            ${guide.vetChecked ? `
              <div class="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-amber-900">
                <span>🩺</span>
                <span>Tıbbi Kontrol: ${escapeHtml(guide.vetName || 'Veteriner Hekim Onaylı')}</span>
              </div>
            ` : ''}
          </div>
        </header>

        ${guide.shortAnswer ? `
          <section class="bg-brand-navy-light/35 border-2 border-brand-navy/15 rounded-3xl p-6 my-6 text-sm">
            <h2 class="font-title font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
              <span>💡</span> Özet & Hızlı Cevap (GEO / VEO)
            </h2>
            <p class="text-gray-800 leading-relaxed font-medium">${escapeHtml(guide.shortAnswer)}</p>
          </section>
        ` : ''}

        <div class="prose prose-sm md:prose max-w-none text-gray-800 leading-relaxed text-sm md:text-base space-y-6 pt-2">
          ${guide.content || ''}
        </div>

        ${Array.isArray(guide.checklist) && guide.checklist.length > 0 ? `
          <section class="bg-brand-navy-light/30 border-2 border-brand-navy/15 rounded-3xl p-6 mt-8">
            <h3 class="font-title font-bold text-brand-navy text-base mb-4 flex items-center gap-2">
              <span>✓</span> Seyahat Hazırlık Kontrol Listesi
            </h3>
            <ul class="space-y-2 text-xs md:text-sm text-gray-700">
              ${guide.checklist.map(item => `<li class="flex items-start gap-2"><span>✔</span><span>${escapeHtml(item)}</span></li>`).join('')}
            </ul>
          </section>
        ` : ''}

        ${Array.isArray(guide.faq) && guide.faq.length > 0 ? `
          <section class="space-y-4 pt-8 border-t border-brand-beige mt-8">
            <h3 class="font-title text-xl font-bold text-gray-950">Sıkça Sorulan Sorular (SSS)</h3>
            <div class="space-y-3">
              ${guide.faq.map(qna => `
                <div class="bg-white border border-brand-navy/10 p-5 rounded-2xl">
                  <h4 class="font-bold text-gray-900 text-sm md:text-base flex items-start gap-2">
                    <span class="text-brand-orange">S:</span>
                    <span>${escapeHtml(qna.q)}</span>
                  </h4>
                  <p class="text-xs md:text-sm text-gray-600 mt-2 pl-5 leading-relaxed">${escapeHtml(qna.a)}</p>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <footer class="pt-8 border-t border-brand-beige mt-8">
          <div class="bg-brand-cream/50 p-6 rounded-2xl border border-brand-beige flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 class="font-title font-bold text-brand-navy text-sm">Tatil İçin Doğrulanmış Otel mi Arıyorsunuz?</h4>
              <p class="text-xs text-gray-600 mt-1">Kilo sınırı olmayan, ek ücret talep etmeyen ve bahçeli 320'den fazla oteli inceleyin.</p>
            </div>
            <a href="/evcil-hayvan-dostu-oteller" class="py-2.5 px-5 bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-bold rounded-full whitespace-nowrap transition-colors">
              Otelleri Keşfet &rarr;
            </a>
          </div>
        </footer>
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

export function renderBoardingPreRenderHtml(boarding, relatedBoardings = []) {
  const citySlug = slugify(boarding.city || '');
  const districtSlug = slugify(boarding.district || '');
  const boardingPath = getBoardingPath(boarding);
  const trustScore = Number(boarding.baseTrustScore || 9.0).toFixed(1);
  const seo = boardingSeoMetadata(boarding);
  const faqs = boardingFaqs(boarding);

  const breadcrumbsHtml = `
    <nav aria-label="breadcrumb" class="mb-6 py-2.5 px-4 bg-brand-navy-light/40 border-b border-brand-beige rounded-2xl">
      <ol class="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
        <li><a href="/" class="hover:underline text-gray-600">Ana Sayfa</a></li>
        <li class="text-gray-400">/</li>
        <li><a href="/kedi-kopek-otelleri" class="hover:underline text-gray-600">Kedi ve Köpek Otelleri</a></li>
        <li class="text-gray-400">/</li>
        <li><a href="/kedi-kopek-otelleri?city=${citySlug}" class="hover:underline text-gray-600">${escapeHtml(boarding.city)} Pet Otelleri</a></li>
        ${boarding.district ? `
          <li class="text-gray-400">/</li>
          <li><a href="/kedi-kopek-otelleri?city=${citySlug}&district=${districtSlug}" class="hover:underline text-gray-600">${escapeHtml(boarding.district)}</a></li>
        ` : ''}
        <li class="text-gray-400">/</li>
        <li class="text-brand-navy font-extrabold" aria-current="page">${escapeHtml(boarding.name)}</li>
      </ol>
    </nav>
  `;

  const relatedHtml = relatedBoardings.length > 0 ? `
    <section class="mt-12 pt-8 border-t border-gray-200">
      <h2 class="text-xl font-bold font-title text-brand-navy mb-4">${escapeHtml(boarding.city)} ve Çevresindeki Diğer Pet Otelleri</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${relatedBoardings.map(b => `
          <article class="border border-brand-beige rounded-2xl p-4 bg-white hover:shadow-md transition-shadow">
            <h3 class="font-bold text-brand-navy text-base">
              <a href="${getBoardingPath(b)}" class="hover:underline">${escapeHtml(b.name)}</a>
            </h3>
            <p class="text-xs text-gray-500 mt-1">${escapeHtml(b.district || '')}, ${escapeHtml(b.city || '')}</p>
            <p class="text-xs text-brand-navy font-semibold mt-2">${escapeHtml(b.category || 'Pet Oteli')}</p>
            <a href="${getBoardingPath(b)}" class="inline-block mt-3 text-xs font-bold text-brand-c2 hover:underline">Tesisi İncele &rarr;</a>
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
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-1 bg-brand-navy text-white text-xs font-bold rounded-full">${escapeHtml(boarding.category || 'Pet Oteli')}</span>
            <span class="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">✓ Doğrulanmış Bakım Merkezi</span>
            <span class="px-2.5 py-1 bg-brand-yellow/30 text-brand-earth-dark text-xs font-black rounded-full">★ Pati Güven Endeksi: ${trustScore}/10</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-bold font-title text-brand-navy">${escapeHtml(boarding.name)}</h1>
          <p class="text-sm text-gray-600">${escapeHtml(boarding.district || '')}, ${escapeHtml(boarding.city || '')} — Son Teyit: ${escapeHtml(boarding.lastVerified || 'işletmeyle doğrulayın')}</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-6">
            ${boarding.imageUrl ? `
              <div class="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100">
                <img src="${escapeHtml(boarding.imageUrl)}" alt="${escapeHtml(boarding.name)}" class="w-full h-full object-cover" loading="eager" fetchpriority="high" width="800" height="450" />
              </div>
            ` : ''}

            <!-- GEO direct answer: concise, factual and consistent with the record -->
            <div class="bg-brand-navy-light/40 border-2 border-brand-navy/15 rounded-3xl p-5 md:p-6 text-sm">
              <h2 class="font-title font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
                <span>💡</span> ${escapeHtml(boarding.name)} hakkında hızlı cevap
              </h2>
              <p class="text-gray-800 leading-relaxed font-medium text-xs md:text-sm">
                <strong>${escapeHtml(boarding.name)}</strong>, ${escapeHtml(seo.location)} konumunda listelenen ${escapeHtml((boarding.category || 'evcil hayvan konaklama tesisi').toLocaleLowerCase('tr-TR'))} türünde bir tesistir.
                ${escapeHtml(seo.acceptedPets)}. ${boarding.cameraSupport === true ? 'Kamera desteği kayıtta mevcuttur.' : 'Kamera desteği kayıtta belirtilmemiştir.'}
              </p>
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs text-gray-700">
                <div><dt class="font-bold">Konaklama modeli</dt><dd>${escapeHtml(boarding.boardingModel || 'İşletmeyle doğrulayın')}</dd></div>
                <div><dt class="font-bold">Fiyat</dt><dd>${escapeHtml(boarding.price || 'İşletmeden bilgi alın')}</dd></div>
                <div><dt class="font-bold">Veteriner desteği</dt><dd>${escapeHtml(boarding.accreditedVet || 'İşletmeyle doğrulayın')}</dd></div>
                <div><dt class="font-bold">Bilgi kaynağı</dt><dd>${escapeHtml(boarding.infoSource || 'patili.co kaydı')}</dd></div>
              </dl>
            </div>

            <section class="space-y-3">
              <h2 class="text-lg font-bold font-title text-brand-navy">Tesis ve Bakım Hakkında</h2>
              <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(boarding.description)}</p>
            </section>

            <section class="border border-brand-beige rounded-2xl p-5 bg-brand-cream/30 space-y-3">
              <h2 class="text-base font-bold font-title text-brand-navy">Öne Çıkan Tesis Olanakları</h2>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                ${(boarding.features || []).slice(0, 10).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('')}
              </ul>
            </section>

            <section class="p-4 bg-gray-50 border border-gray-200 rounded-2xl">
              <h2 class="text-base font-bold text-brand-navy mb-3">Sık sorulan sorular</h2>
              <div class="space-y-3">
                ${faqs.map(item => `
                  <article>
                    <h3 class="text-sm font-bold text-gray-800">${escapeHtml(item.question)}</h3>
                    <p class="text-xs text-gray-700 leading-relaxed mt-1">${escapeHtml(item.answer)}</p>
                  </article>
                `).join('')}
              </div>
            </section>
          </div>

          <aside class="space-y-4">
            <div class="border border-brand-beige rounded-2xl p-5 bg-white space-y-3">
              <h2 class="text-base font-bold font-title text-brand-navy">İletişim ve Rezervasyon</h2>
              <p class="text-xs text-gray-600"><strong>Konum:</strong> ${escapeHtml(boarding.district || '')}, ${escapeHtml(boarding.city || '')}</p>
              ${boarding.phone ? `<p class="text-xs text-gray-600"><strong>Telefon:</strong> <a href="tel:${escapeHtml(boarding.phone)}" class="text-brand-c2 font-bold underline">${escapeHtml(boarding.phone)}</a></p>` : ''}
              ${boarding.website ? `<p class="text-xs text-gray-600"><strong>Web Sitesi:</strong> <a href="${escapeHtml(boarding.website)}" target="_blank" rel="noopener noreferrer" class="text-brand-c2 font-bold underline truncate block">${escapeHtml(boarding.website)}</a></p>` : ''}
              <div class="pt-2">
                <a href="${boardingPath}" class="w-full block text-center py-2.5 px-4 bg-brand-c2 text-white font-bold text-xs rounded-xl hover:bg-brand-c1 transition-colors">Detayları İncele & İletişime Geç</a>
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

/**
 * Render complete semantic HTML for Category, Cluster or Regional Landing Pages
 * Includes breadcrumbs, direct answer GEO box, 6-7 curated hotel cards with internal links,
 * comparison table, deep editorial guide, FAQs and contextual cross-links.
 */
export function renderCategoryOrClusterPreRenderHtml({
  title = '',
  h1 = '',
  cityName = '',
  citySlug = '',
  clusterSlug = '',
  hotels = [],
  articleData = {},
  currentPath = ''
}) {
  const curatedHotels = (hotels || []).slice(0, 7);

  // 1. Breadcrumbs
  const breadcrumbsHtml = `
    <nav aria-label="breadcrumb" class="mb-6 py-2.5 px-4 bg-brand-navy-light/40 border-b border-brand-beige rounded-2xl">
      <ol class="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
        <li><a href="/" class="hover:underline text-gray-600">Ana Sayfa</a></li>
        <li class="text-gray-400">/</li>
        <li><a href="/evcil-hayvan-dostu-oteller" class="hover:underline text-gray-600">Evcil Hayvan Dostu Oteller</a></li>
        ${cityName ? `
          <li class="text-gray-400">/</li>
          <li class="text-brand-navy font-extrabold" aria-current="page">${escapeHtml(cityName)}</li>
        ` : clusterSlug ? `
          <li class="text-gray-400">/</li>
          <li class="text-brand-navy font-extrabold" aria-current="page">${escapeHtml(h1 || title)}</li>
        ` : ''}
      </ol>
    </nav>
  `;

  // 2. Direct Answer / AI Overview Box (GEO)
  const directAnswerHtml = articleData.directAnswer ? `
    <div class="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-2">
      <div class="flex items-center gap-2 text-emerald-800 font-bold text-xs">
        <span class="text-base">💡</span>
        <span>Hızlı Özet & Kabul Kriterleri (AI Snapshot & GEO Verisi)</span>
      </div>
      <p class="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
        ${escapeHtml(articleData.directAnswer)}
      </p>
    </div>
  ` : '';

  // 3. 6-7 Curated Hotels List with Crawlable Internal Links
  const hotelCardsHtml = curatedHotels.length > 0 ? `
    <section class="space-y-6">
      <div class="text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-brand-beige pb-3">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold font-title text-brand-navy">
            ${escapeHtml(cityName ? `${cityName} Bölgesinde Öne Çıkan ${curatedHotels.length} Seçkin Otel` : `Öne Çıkan ${curatedHotels.length} Doğrulanmış Otel`)}
          </h2>
          <p class="text-xs text-gray-600 mt-1">Her tesisin evcil hayvan kabul şartları, kilo sınırları ve ek ücret politikaları doğrulanmıştır.</p>
        </div>
        <span class="text-xs font-bold text-brand-c2">✓ Editör Doğrulamalı</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${curatedHotels.map(h => {
          const hotelPath = getHotelPath(h);
          const trustScore = (h.baseTrustScore || (h.suitability === 3 ? 9.5 : h.suitability === 2 ? 8.5 : 7.2)).toFixed(1);
          return `
            <article class="bg-white border border-brand-beige rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between text-left">
              <div>
                <div class="relative h-48 bg-gray-100 overflow-hidden">
                  <a href="${hotelPath}" tabindex="-1" aria-hidden="true">
                    <img
                      src="${escapeHtml(h.imageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=75')}"
                      alt="${escapeHtml(h.name)}"
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="400"
                      height="200"
                    />
                  </a>
                  <div class="absolute top-3 left-3 bg-brand-navy text-white text-3xs px-2.5 py-1 rounded-full font-bold">
                    ✓ Doğrulanmış Tesis
                  </div>
                  <div class="absolute bottom-3 right-3 bg-brand-navy/90 text-white text-xs px-2.5 py-1 rounded-xl font-bold">
                    ⭐ Skor: <span class="text-brand-yellow">${trustScore}/10</span>
                  </div>
                </div>

                <div class="p-5 space-y-3">
                  <div class="flex justify-between items-center text-xs text-gray-500 font-medium">
                    <span>${escapeHtml(h.type || 'Otel')}</span>
                    <span>📍 ${escapeHtml(h.district || '')}, ${escapeHtml(h.city || '')}</span>
                  </div>

                  <h3 class="font-title text-base font-bold text-brand-navy">
                    <a href="${hotelPath}" class="hover:underline">${escapeHtml(h.name)}</a>
                  </h3>

                  <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    ${escapeHtml(h.description || 'Bu tesis evcil hayvan kabul etmektedir.')}
                  </p>

                  <div class="pt-1">
                    ${h.extraFee === 'no' ? `
                      <span class="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-800 text-3xs font-extrabold rounded-lg border border-emerald-200">
                        🟢 ÜCRETSİZ PET KABULÜ
                      </span>
                    ` : `
                      <span class="inline-block px-2.5 py-1 bg-slate-50 text-slate-700 text-3xs font-bold rounded-lg border border-slate-200">
                        💬 Ek Ücret: ${escapeHtml(h.extraFee || 'Tesisle Teyit Edin')}
                      </span>
                    `}
                  </div>

                  <div class="flex items-center justify-between text-xs pt-2 border-t border-brand-beige">
                    <span class="text-3xs bg-brand-navy-light px-2 py-0.5 rounded-full text-brand-navy font-bold">
                      ⚖️ ${h.weightLimit > 0 ? `Maks. ${h.weightLimit} kg` : 'Kilo Sınırı Yok'}
                    </span>
                    <span class="text-3xs text-gray-600">
                      ${h.hasGarden ? '🌿 Bahçeli' : 'Oda İçi'}
                    </span>
                  </div>
                </div>
              </div>

              <div class="p-4 border-t border-brand-beige/50 bg-brand-cream/10">
                <a href="${hotelPath}" class="w-full block text-center py-2.5 px-4 bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-bold rounded-xl transition-colors">
                  Tesis Detaylarını ve Politikalarını İncele &rarr;
                </a>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  ` : '';

  // 4. Comparison Table (GEO)
  const comparisonTable = articleData.comparisonTable;
  const comparisonTableHtml = comparisonTable ? `
    <section class="space-y-4 text-left">
      <h2 class="text-xl sm:text-2xl font-bold font-title text-brand-navy">
        ${escapeHtml(cityName ? `${cityName} Konaklama Türleri & Fiyat Karşılaştırması` : 'Konaklama Türleri ve Pet Politikaları Karşılaştırması')}
      </h2>
      <div class="overflow-x-auto border border-brand-beige rounded-2xl bg-white shadow-xs">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-brand-navy text-white font-title text-3xs uppercase tracking-wider">
              ${comparisonTable.headers.map(h => `<th class="p-3.5 border-b border-brand-navy-light/20">${escapeHtml(h)}</th>`).join('')}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            ${comparisonTable.rows.map((row, idx) => `
              <tr class="${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}">
                <td class="p-3.5 font-bold text-brand-navy">${escapeHtml(row.type)}</td>
                <td class="p-3.5 text-gray-700">${escapeHtml(row.fee)}</td>
                <td class="p-3.5 text-gray-700 font-semibold">${escapeHtml(row.limit)}</td>
                <td class="p-3.5 text-gray-700">${escapeHtml(row.outdoor)}</td>
                <td class="p-3.5 text-gray-700">${escapeHtml(row.vetDist)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  ` : '';

  // 5. Deep Editorial Article
  const paragraphs = articleData.paragraphs || [];
  const editorialArticleHtml = paragraphs.length > 0 ? `
    <section class="space-y-4 text-left border-t border-brand-beige pt-8">
      <h2 class="text-xl sm:text-2xl font-bold font-title text-brand-navy">
        ${escapeHtml(cityName ? `${cityName} Evcil Hayvanla Seyahat ve Konaklama Rehberi` : `${h1 || title} Rehberi`)}
      </h2>
      <div class="space-y-4 text-sm text-gray-700 leading-relaxed">
        ${paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
      </div>
    </section>
  ` : '';

  // 6. FAQs
  const faqs = articleData.faqs || [];
  const faqsHtml = faqs.length > 0 ? `
    <section class="space-y-4 text-left border-t border-brand-beige pt-8">
      <h2 class="text-xl sm:text-2xl font-bold font-title text-brand-navy">Sıkça Sorulan Sorular</h2>
      <div class="space-y-3">
        ${faqs.map(faq => `
          <details class="group bg-white border border-brand-beige rounded-2xl p-4 transition-all">
            <summary class="font-bold text-sm text-brand-navy cursor-pointer flex justify-between items-center select-none">
              <span>${escapeHtml(faq.question)}</span>
              <span class="text-brand-c2 group-open:rotate-180 transition-transform">&darr;</span>
            </summary>
            <p class="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-brand-beige/50 pt-3">
              ${escapeHtml(faq.answer)}
            </p>
          </details>
        `).join('')}
      </div>
    </section>
  ` : '';

  // 7. Internal Cross-Link Matrix
  const crossLinksHtml = `
    <section class="space-y-6 text-left border-t border-brand-beige pt-8">
      <h2 class="text-lg sm:text-xl font-bold font-title text-brand-navy">İlgili Kategoriler ve Popüler Seyahat Noktaları</h2>
      
      <div class="space-y-3">
        <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Popüler Şehirler</h3>
        <div class="flex flex-wrap gap-2 text-xs">
          <a href="/evcil-hayvan-dostu-oteller/istanbul" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">İstanbul Otelleri</a>
          <a href="/evcil-hayvan-dostu-oteller/mugla" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">Muğla / Bodrum / Fethiye</a>
          <a href="/evcil-hayvan-dostu-oteller/antalya" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">Antalya / Kaş / Kemer</a>
          <a href="/evcil-hayvan-dostu-oteller/izmir" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">İzmir / Çeşme / Alaçatı</a>
          <a href="/evcil-hayvan-dostu-oteller/nevsehir" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">Kapadokya Mağara Otelleri</a>
          <a href="/evcil-hayvan-dostu-oteller/sapanca" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">Sapanca Göl Bungalovları</a>
          <a href="/evcil-hayvan-dostu-oteller/canakkale" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">Çanakkale / Bozcaada / Assos</a>
          <a href="/evcil-hayvan-dostu-oteller/balikesir" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">Balıkesir / Cunda / Ayvalık</a>
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Konaklama ve Kabul Türleri</h3>
        <div class="flex flex-wrap gap-2 text-xs">
          <a href="/kopek-kabul-eden-oteller" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🐶 Köpek Kabul Eden Oteller</a>
          <a href="/kedi-kabul-eden-oteller" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🐱 Kedi Kabul Eden Oteller</a>
          <a href="/buyuk-kopek-kabul-eden-oteller" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🐕 Büyük Köpek & Kilo Sınırsız</a>
          <a href="/ucretsiz-evcil-hayvan-kabul-eden-oteller" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🟢 Ek Ücret Almayan Oteller</a>
          <a href="/evcil-hayvan-dostu-bungalovlar" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🏡 Doğa Bungalovları</a>
          <a href="/evcil-hayvan-dostu-villalar" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🏊 Kiralık Müstakil Villalar</a>
          <a href="/her-sey-dahil-evcil-hayvan-dostu-oteller" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🍽️ Her Şey Dahil Oteller</a>
          <a href="/bahceli-evcil-hayvan-dostu-oteller" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🌿 Bahçeli Oteller</a>
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Diğer Patili Hizmetler</h3>
        <div class="flex flex-wrap gap-2 text-xs">
          <a href="/patili-mekanlar" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">☕ Patili Kafe & Restoranlar</a>
          <a href="/veterinerler" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🏥 7/24 Acil Nöbetçi Veterinerler</a>
          <a href="/pet-taksi" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🚕 Pet Taksi Hizmeti</a>
          <a href="/kedi-kopek-otelleri" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🐾 Kedi & Köpek Bakım Otelleri</a>
          <a href="/kopek-gezdiricileri" class="px-3 py-1.5 bg-white border border-brand-beige rounded-lg hover:border-brand-navy text-gray-700 font-medium">🦮 Köpek Gezdiricileri</a>
        </div>
      </div>
    </section>
  `;

  return `
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      ${breadcrumbsHtml}

      <header class="text-left space-y-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2.5 py-1 bg-brand-cream text-brand-navy text-xs font-bold rounded-full">🐾 patili.co Doğrulanmış Konaklama Ağı</span>
          <span class="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">✓ Eylül 2026 Güncellemesi</span>
          <span class="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">0 Komisyon</span>
        </div>
        <h1 class="text-2xl sm:text-4xl font-bold font-title text-brand-navy">${escapeHtml(h1 || title)}</h1>
        <p class="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
          ${escapeHtml(articleData.metaDesc || 'Kedi ve köpek kabul eden tesisleri, kilo sınırlarını, ek ücretleri ve doğrulanmış evcil hayvan politikalarını inceleyin.')}
        </p>
      </header>

      ${directAnswerHtml}
      ${hotelCardsHtml}
      ${comparisonTableHtml}
      ${editorialArticleHtml}
      ${faqsHtml}
      ${crossLinksHtml}
    </main>
  `;
}

/**
 * Render dedicated pre-render HTML for /patili-mekanlar and /kopek-gezdiricileri
 */
export function renderServicePreRenderHtml({ serviceType, items = [] }) {
  if (serviceType === 'patili-mekanlar') {
    return `
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <nav aria-label="breadcrumb" class="mb-6 py-2.5 px-4 bg-brand-navy-light/40 border-b border-brand-beige rounded-2xl">
          <ol class="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
            <li><a href="/" class="hover:underline text-gray-600">Ana Sayfa</a></li>
            <li class="text-gray-400">/</li>
            <li class="text-brand-navy font-extrabold" aria-current="page">Patili Mekanlar</li>
          </ol>
        </nav>

        <header class="text-left space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-cream rounded-full text-xs font-bold text-brand-c2">
            <span>🍽️ Kedi & Köpek Dostu Kafe ve Restoran Rehberi</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-bold font-title text-brand-navy">Patili Mekanlar: Evcil Hayvan Kabul Eden Kafe ve Restoranlar</h1>
          <p class="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
            Dostunuzla kahve içebileceğiniz, açık bahçesinde oturabileceğiniz veya akşam yemeği yiyebileceğiniz teyitli pet friendly mekanlar. Su kabı, bahçe kabulü ve tasmalı oturma kuralları.
          </p>
        </header>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          ${items.slice(0, 6).map(item => `
            <article class="bg-white border border-brand-beige rounded-2xl p-5 space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <span class="text-3xs bg-brand-navy-light px-2.5 py-1 rounded-full font-bold text-brand-navy">${escapeHtml(item.type || 'Kafe')}</span>
              <h3 class="font-title text-base font-bold text-brand-navy">${escapeHtml(item.name)}</h3>
              <p class="text-xs text-gray-500">📍 ${escapeHtml(item.district || '')}, ${escapeHtml(item.city || '')}</p>
              <p class="text-xs text-gray-600 leading-relaxed">${escapeHtml(item.description || 'Evcil hayvan kabul eden mekan.')}</p>
              <div class="pt-2 text-3xs text-emerald-700 font-bold">✓ Tasmalı kabul serbest</div>
            </article>
          `).join('')}
        </section>

        <section class="p-6 bg-brand-cream/30 border border-brand-beige rounded-2xl text-left space-y-3">
          <h2 class="text-lg font-bold font-title text-brand-navy">Patili Mekan Kuralları & Adabı</h2>
          <p class="text-xs text-gray-700 leading-relaxed">
            Mekanlara giderken köpeğinizin tasmasını takılı tutmanız, diğer misafirlerin ve servis personelinin rahatsız olmaması için masa altında oturmasını sağlamanız rica edilir. Birçok kafe kapıda taze su kabı ikram etmektedir.
          </p>
        </section>
      </main>
    `;
  }

  if (serviceType === 'kopek-gezdiricileri') {
    return `
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <nav aria-label="breadcrumb" class="mb-6 py-2.5 px-4 bg-brand-navy-light/40 border-b border-brand-beige rounded-2xl">
          <ol class="flex items-center flex-wrap gap-2 text-xs font-bold text-gray-600">
            <li><a href="/" class="hover:underline text-gray-600">Ana Sayfa</a></li>
            <li class="text-gray-400">/</li>
            <li class="text-brand-navy font-extrabold" aria-current="page">Köpek Gezdiricileri</li>
          </ol>
        </nav>

        <header class="text-left space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-cream rounded-full text-xs font-bold text-brand-c2">
            <span>🦮 Güvenilir & Referanslı Köpek Gezdirme Hizmeti</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-bold font-title text-brand-navy">Köpek Gezdiricileri & Profesyonel Pet Bakıcıları</h1>
          <p class="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
            Yoğun iş temponuzda veya seyahatlerinizde köpeğinizin günlük egzersiz ve tuvalet ihtiyacını karşılayan doğrulanmış gezdiriciler. patili.co gezdiricilerden hiçbir komisyon talep etmez.
          </p>
        </header>

        <section class="p-6 bg-amber-50 border border-amber-200 rounded-2xl text-left space-y-2">
          <h2 class="text-sm font-bold text-amber-900">⚠️ patili.co Sorumluluk Reddi ve Güvenlik Bildirimi</h2>
          <p class="text-xs text-amber-800 leading-relaxed">
            patili.co köpek gezdiricilerinden veya köpek sahiplerinden hiçbir komisyon talep etmez ve aracılık yapmaz. Lütfen gezdirici seçimi yaparken geçmiş tecrübelerini, referanslarını ve ilk buluşmayı daima halka açık bir alanda gerçekleştiriniz.
          </p>
        </section>

        <section class="p-8 bg-white border-2 border-brand-navy/10 rounded-3xl text-center space-y-4">
          <h2 class="text-xl font-bold font-title text-brand-navy">Köpek Gezdiricisi Olmak İster misiniz?</h2>
          <p class="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Hayvan sevginizi profesyonel bir ek gelire dönüştürün. Profilinizi oluşturun, bölgenizdeki köpek sahipleriyle doğrudan iletişime geçin.
          </p>
          <a href="/kopek-gezdiricileri" class="inline-block py-3 px-6 bg-brand-c2 hover:bg-brand-c1 text-white font-bold text-xs rounded-xl transition-colors">
            Gezdirici Başvurusu Yap &rarr;
          </a>
        </section>
      </main>
    `;
  }

  return '';
}
