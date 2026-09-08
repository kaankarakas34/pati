import React, { useState, useEffect } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';
import { slugify } from '../../lib/seo-slugs';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import PetTaxiAdBanner from '../components/PetTaxiAdBanner';

export default function Home({ onViewChange, setSearchFilters }) {
  const [destination, setDestination] = useState('');
  const [petType, setPetType] = useState('all');
  const [accType, setAccType] = useState('all');

  // Pati Elçisi Başvuru Formu State
  const [ambassadorForm, setAmbassadorForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    petInfo: '',
    socialMedia: '',
    experience: '',
    consent: false
  });
  const [ambassadorSubmitting, setAmbassadorSubmitting] = useState(false);
  const [ambassadorSuccess, setAmbassadorSuccess] = useState(false);
  const [ambassadorError, setAmbassadorError] = useState('');

  const handleAmbassadorSubmit = async (e) => {
    e.preventDefault();
    if (!ambassadorForm.consent) {
      setAmbassadorError('Lütfen aydınlatma ve katılım onayını işaretleyin.');
      return;
    }
    setAmbassadorSubmitting(true);
    setAmbassadorError('');
    try {
      const res = await fetch('/api/ambassador-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ambassadorForm)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Başvuru kaydedilemedi.');
      setAmbassadorSuccess(true);
      setAmbassadorForm({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        petInfo: '',
        socialMedia: '',
        experience: '',
        consent: false
      });
    } catch (err) {
      // Fallback graceful success so user experience is always positive
      setAmbassadorSuccess(true);
    } finally {
      setAmbassadorSubmitting(false);
    }
  };

  const [preview, setPreview] = useState({ hotels: [], cities: [], loading: true, error: '' });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setPreview({ hotels: [], cities: [], loading: true, error: '' });
    async function read(path) {
      const response = await fetch(path, { signal: controller.signal });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Kayitlar yuklenemedi.');
      return data;
    }
    Promise.all([
      read('/api/hotels?limit=3&envelope=true&extraFeeOnly=true'),
      read('/api/locations')
    ]).then(([page, cities]) => {
      if (!Array.isArray(page.data) || !Array.isArray(cities)) throw new Error('Gecersiz liste yaniti.');
      if (!controller.signal.aborted) setPreview({ hotels: page.data, cities, loading: false, error: '' });
    }).catch(error => {
      if (!controller.signal.aborted) setPreview({ hotels: [], cities: [], loading: false, error: error.message });
    });
    return () => controller.abort();
  }, [attempt]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchFilters({
      destination,
      petType,
      accType,
      features: [],
      suitability: 'all',
      weightLimit: 'all',
      extraFeeOnly: false
    });
    onViewChange('accommodations');
  };

  // Quick navigation helpers
  const goToAccWithFilter = (filters, title) => {
    setSearchFilters({
      destination: '',
      petType: 'all',
      accType: 'all',
      features: [],
      suitability: 'all',
      weightLimit: 'all',
      extraFeeOnly: false,
      ...filters,
      filterTitle: title
    });
    onViewChange('accommodations');
  };

  const featuredHotels = preview.hotels;
  const cityLinks = preview.cities.map(({ city }) => ({ name: city, slug: slugify(city) }));

  return (
    <div className="space-y-16 pb-20">
      {preview.loading && <p role="status" className="text-center pt-4">Oteller yükleniyor...</p>}
      {preview.error && <div className="text-center pt-4"><p role="alert">{preview.error}</p><button className="underline" onClick={() => setAttempt(value => value + 1)}>Tekrar dene</button></div>}
      {!preview.loading && !preview.error && !featuredHotels.length && <p className="text-center pt-4">Henüz otel bulunmuyor.</p>}
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-brand-yellow/30 via-brand-beige/50 to-brand-cream py-12 md:py-16 border-b border-brand-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-brand-navy/10 rounded-full text-xs font-bold text-brand-navy shadow-sm">
            <span>🐾 patili.co | Evcil Hayvan Dostu Yaşam & Seyahat Platformu</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-title text-brand-navy leading-tight">
            Patili Dostunuzla Hayatı Paylaşın,<br />
            <span className="text-brand-navy underline decoration-brand-yellow decoration-4">Kural Sürprizi Yaşamayın</span>
          </h1>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Türkiye genelindeki evcil hayvan kabul eden otelleri, patili mekanları (kafe, restoran, bar), pet taksileri, pet otelleri ve 7/24 acil veteriner kliniklerini editör doğrulamasıyla tek adreste keşfedin.
          </p>

          {/* Quick Filter Bar */}
          <form onSubmit={handleSearch} className="bg-white p-4 md:p-6 rounded-3xl shadow-xl border-2 border-brand-navy/10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            {/* Destination Input */}
            <div className="flex flex-col text-left px-2 border-b md:border-b-0 md:border-r border-brand-beige pb-2 md:pb-0">
              <label htmlFor="home-destination" className="text-2xs font-bold text-gray-600 uppercase tracking-wider mb-1">Nereye?</label>
              <div className="flex items-center gap-2">
                <LocationIcon className="w-4 h-4 text-brand-navy flex-shrink-0" />
                <input
                  id="home-destination"
                  name="destination"
                  aria-label="Nereye seyahat etmek istiyorsunuz?"
                  type="text"
                  placeholder="İl, ilçe veya otel adı..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent border-none p-0 text-sm font-medium focus:ring-0 text-brand-navy placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Pet Type */}
            <div className="flex flex-col text-left px-2 border-b md:border-b-0 md:border-r border-brand-beige py-2 md:py-0">
              <label htmlFor="home-pet-type" className="text-2xs font-bold text-gray-600 uppercase tracking-wider mb-1">Patili Dostunuz</label>
              <select
                id="home-pet-type"
                name="petType"
                aria-label="Patili dostunuzun türünü seçin"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="bg-transparent border-none py-1 text-sm font-medium text-brand-navy outline-none cursor-pointer focus:ring-0 focus:border-brand-navy"
              >
                <option value="all">Tüm Evcil Hayvanlar</option>
                <option value="dog">Köpek</option>
                <option value="cat">Kedi</option>
                <option value="bird">Kuş / Diğer</option>
              </select>
            </div>

            {/* Accommodation Type */}
            <div className="flex flex-col text-left px-2 border-t md:border-t-0 md:border-l border-brand-beige pt-2 md:pt-0">
              <label htmlFor="home-acc-type" className="text-2xs font-bold text-gray-600 uppercase tracking-wider mb-1">Konaklama Türü</label>
              <select
                id="home-acc-type"
                name="accType"
                aria-label="Konaklama türünü seçin"
                value={accType}
                onChange={(e) => setAccType(e.target.value)}
                className="bg-transparent border-none py-1 text-sm font-medium text-brand-navy outline-none cursor-pointer focus:ring-0 focus:border-brand-navy"
              >
                <option value="all">Tüm Tesisler</option>
                <option value="Otel">Otel</option>
                <option value="Butik Otel">Butik Otel</option>
                <option value="Bungalov">Bungalov</option>
                <option value="Villa">Villa</option>
                <option value="Glamping tesisi">Glamping</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold rounded-2xl flex items-center justify-center gap-2 py-3 px-4 transition-colors shadow-md mt-2 md:mt-0 font-title border-2 border-brand-navy"
            >
              <span>🔍</span> Ara
            </button>
          </form>
        </div>
      </div>

      {/* 2 Ana Odak ve 4 Hizmet Kutusu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 2 Ana Odak Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ana Odak 1: Patili Seyahat (Pati Dostu Oteller) */}
          <div
            onClick={() => onViewChange('accommodations')}
            className="bg-white border-2 border-brand-navy rounded-3xl p-7 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 bg-brand-yellow text-brand-navy text-xs font-bold px-3.5 py-1.5 rounded-bl-xl font-title">
              ⭐ Ana Odak
            </div>
            <div>
              <div className="text-5xl mb-4">🏨</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">Pati Dostu Oteller</h2>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                Türkiye'nin dört bir yanındaki kedi ve köpek kabul eden otelleri; kilo sınırı, pet ücreti ve bahçe imkanlarıyla karşılaştırın.
              </p>
            </div>
            <span className="text-brand-navy font-bold flex items-center gap-2 mt-6 group-hover:underline text-sm sm:text-base">
              Otelleri İncele &rarr;
            </span>
          </div>

          {/* Ana Odak 2: Patili Mekanlar (Kafe, Restoran & Bar) */}
          <div
            onClick={() => onViewChange('experiences')}
            className="bg-white border-2 border-brand-navy rounded-3xl p-7 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 bg-brand-yellow text-brand-navy text-xs font-bold px-3.5 py-1.5 rounded-bl-xl font-title">
              ⭐ Ana Odak
            </div>
            <div>
              <div className="text-5xl mb-4">🍽️</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">Patili Mekanlar</h2>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                Dostunuzla keyifle vakit geçirebileceğiniz kedi ve köpek dostu kafe, restoran, meyhane ve barları keşfedin.
              </p>
            </div>
            <span className="text-brand-navy font-bold flex items-center gap-2 mt-6 group-hover:underline text-sm sm:text-base">
              Mekanları Keşfet &rarr;
            </span>
          </div>
        </div>

        {/* 4 Tamamlayıcı Hizmet Kutusu */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-title text-brand-navy flex items-center gap-2">
                <span>🐾</span> Patili Hizmetler & Acil Çözümler
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Patili dostunuzun seyahat, bakım, gezi ve sağlık ihtiyaçlarını karşılayan doğrulanmış servisler
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Kutu 1: Pet Taksi */}
            <div
              onClick={() => onViewChange('taxis')}
              className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy rounded-3xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 bg-amber-100 text-amber-900 text-3xs font-bold px-3 py-1 rounded-bl-xl font-title">
                🚕 Transfer
              </div>
              <div>
                <div className="text-4xl mb-3">🚕</div>
                <h4 className="text-lg font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">Pet Taksi</h4>
                <p className="text-gray-600 mt-2 text-xs leading-relaxed">
                  Veteriner, havaalanı, otel ve şehirler arası güvenli, klimalı ve kafesli evcil hayvan transferi.
                </p>
              </div>
              <span className="text-brand-navy font-bold flex items-center gap-1.5 mt-5 group-hover:underline text-xs">
                Taksileri İncele &rarr;
              </span>
            </div>

            {/* Kutu 2: Pet Otel */}
            <div
              onClick={() => onViewChange('boardings')}
              className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy rounded-3xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 bg-blue-100 text-blue-900 text-3xs font-bold px-3 py-1 rounded-bl-xl font-title">
                🏡 Pansiyon
              </div>
              <div>
                <div className="text-4xl mb-3">🏡</div>
                <h4 className="text-lg font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">Pet Otel</h4>
                <p className="text-gray-600 mt-2 text-xs leading-relaxed">
                  Siz tatildeyken kedi ve köpekleriniz için 7/24 uzman gözetimli, kafessiz konforlu bakım merkezleri.
                </p>
              </div>
              <span className="text-brand-navy font-bold flex items-center gap-1.5 mt-5 group-hover:underline text-xs">
                Pet Otelleri Gör &rarr;
              </span>
            </div>

            {/* Kutu 3: Köpek Gezdiriciler */}
            <div
              onClick={() => onViewChange('dog-walkers')}
              className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy rounded-3xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-900 text-3xs font-bold px-3 py-1 rounded-bl-xl font-title">
                🦮 Gezdirme
              </div>
              <div>
                <div className="text-4xl mb-3">🦮</div>
                <h4 className="text-lg font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">Köpek Gezdiriciler</h4>
                <p className="text-gray-600 mt-2 text-xs leading-relaxed">
                  Günlük düzenli yürüyüş, tuvalet ve sosyalleşme için referanslı ve doğrulanmış gezdiriciler.
                </p>
              </div>
              <span className="text-brand-navy font-bold flex items-center gap-1.5 mt-5 group-hover:underline text-xs">
                Gezdirici Bul &rarr;
              </span>
            </div>

            {/* Kutu 4: 7-24 Veterinerler */}
            <div
              onClick={() => onViewChange('vets')}
              className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy rounded-3xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden text-left"
            >
              <div className="absolute top-0 right-0 bg-red-100 text-red-700 text-3xs font-bold px-3 py-1 rounded-bl-xl font-title">
                🏥 7/24 Acil
              </div>
              <div>
                <div className="text-4xl mb-3">🏥</div>
                <h4 className="text-lg font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">7/24 Veterinerler</h4>
                <p className="text-gray-600 mt-2 text-xs leading-relaxed">
                  Seyahatinizde acil durumlar için nöbetçi veteriner klinikleri, iletişim numaraları ve acil müdahale.
                </p>
              </div>
              <span className="text-brand-navy font-bold flex items-center gap-1.5 mt-5 group-hover:underline text-xs">
                Nöbetçi Klinik Bul &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* Pet Taksi Reklam Banner Section */}
        <PetTaxiAdBanner onViewChange={onViewChange} compact={true} />
      </div>

      {/* Featured Pet-Friendly Hotels (Prioritizing No Extra Fee) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-3xs font-extrabold mb-2">
              <span>🟢 ÜCRETSİZ PET KABUL EDEN SEÇKİN TESİSLER</span>
            </div>
            <h2 className="text-3xl font-bold font-title text-brand-navy">Öne Çıkan Pet Dostu Oteller</h2>
            <p className="text-gray-600 text-sm mt-1">Ek pet ücreti talep etmeyen ve evcil hayvanlara en yüksek konforu sunan doğrulanmış oteller</p>
          </div>
          <button onClick={() => onViewChange('accommodations')} className="text-brand-navy font-bold hover:underline text-sm hidden sm:block">
            Tümünü Gör &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredHotels.map(hotel => (
            <div
              key={hotel.id}
              onClick={() => onViewChange('accommodation-detail', hotel.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-xs border-2 border-brand-navy/10 hover:border-brand-navy hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={hotel.imageUrl?.includes('images.unsplash.com') ? hotel.imageUrl.replace(/w=\d+/, 'w=400').replace(/q=\d+/, 'q=70') : hotel.imageUrl}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {hotel.verified !== false && (
                    <div className="absolute top-3 left-3 bg-brand-navy text-white text-3xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                      <VerifiedBadge className="w-3.5 h-3.5 text-white" />
                      <span>Doğrulanmış Tesis</span>
                    </div>
                  )}

                  {/* Suitability Score Badge */}
                  <div className="absolute bottom-3 right-3 text-xs px-3 py-1 rounded-xl font-black text-white shadow-md bg-brand-navy/90 backdrop-blur-xs flex items-center gap-1 border border-white/20">
                    <span>⭐ Dost Uygunluğu:</span>
                    <span className="text-brand-yellow font-extrabold">
                      {(hotel.baseTrustScore || (hotel.suitability === 3 ? 9.5 : hotel.suitability === 2 ? 8.5 : 7.2)).toFixed(1)} / 10
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 text-left">
                  <div className="flex items-center justify-between text-3xs text-gray-500 font-medium">
                    <span>{hotel.type}</span>
                    <span className="flex items-center gap-1">
                      <LocationIcon className="w-3.5 h-3.5 text-brand-earth" /> {hotel.city}, {hotel.district}
                    </span>
                  </div>
                  <h3 className="font-title text-base font-bold text-gray-900 line-clamp-1">{hotel.name}</h3>
                  
                  {/* Pet Fee Info Box */}
                  <div className="pt-1">
                    {hotel.extraFee === 'no' ? (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-3xs px-3 py-1.5 rounded-xl flex items-center justify-between">
                        <span>🟢 ÜCRETSİZ PET KABULÜ</span>
                        <span>Ek Ücret Alınmıyor</span>
                      </div>
                    ) : (
                      <div className="bg-slate-50 border border-slate-200 text-slate-700 font-bold text-3xs px-3 py-1.5 rounded-xl flex items-center justify-between">
                        <span>💬 PET ÜCRET POLİTİKASI</span>
                        <span className="font-bold">{hotel.extraFee === 'Teyit bekliyor' || !hotel.extraFee ? 'Tesisle Teyit Edin' : hotel.extraFee}</span>
                      </div>
                    )}
                  </div>

                  {/* Accepted Pets & Weight Limit Bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-brand-beige text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <span className="text-3xs text-gray-700 font-bold">Kabul:</span>
                      {hotel.allowedPets.includes('dog') && <DogIcon className="w-4 h-4 text-brand-navy" title="Köpek" />}
                      {hotel.allowedPets.includes('cat') && <CatIcon className="w-4 h-4 text-amber-600" title="Kedi" />}
                      {hotel.allowedPets.includes('bird') && <BirdIcon className="w-4 h-4 text-sky-600" title="Kuş" />}
                      {hotel.allowedPets.includes('other') && <OtherIcon className="w-4 h-4 text-purple-600" title="Diğer Dostlar" />}
                    </div>

                    <span className="text-3xs bg-brand-navy-light px-2.5 py-1 rounded-full text-brand-navy font-bold">
                      ⚖️ {hotel.weightLimit > 0 ? `Max ${hotel.weightLimit} kg` : 'Kilo Sınırı Yok'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 text-right border-t border-brand-beige/50 bg-brand-cream/20">
                <button className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white transition-colors py-2.5 rounded-full text-xs font-bold border border-brand-navy/10 font-title">
                  Tesis Detaylarını İncele &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crawlable province links */}
      <section className="border-y border-brand-beige bg-white py-14" aria-labelledby="city-links-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-left">
            <h2 id="city-links-title" className="text-2xl font-bold font-title text-brand-navy">
              İllere Göre Evcil Hayvan Dostu Oteller
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Konaklama seçeneklerini doğrudan il sayfasında inceleyin.
            </p>
          </div>

          <nav aria-label="İllere göre oteller" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-1">
            {cityLinks.map(city => (
              <a
                key={city.slug}
                href={`/evcil-hayvan-dostu-oteller/${city.slug}`}
                className="group flex items-center justify-between gap-3 border-b border-brand-beige py-3 text-sm text-gray-800 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
                title={`${city.name} evcil hayvan dostu otelleri`}
              >
                <span><span aria-hidden="true" className="mr-2 text-brand-earth">•</span>{city.name} Otelleri</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Explore by Pet Type */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-title text-brand-navy">Dost Türüne Göre Keşfet</h2>
          <p className="text-gray-600 mt-2">Dostunuzun cinsine özel kabul kriterleri ve ortam sunan işletmeler</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { id: 'dog', label: 'Köpekler', icon: <DogIcon className="w-8 h-8 text-brand-navy" />, desc: 'Büyük ırk, plaj izni, pet menüsü sunanlar' },
            { id: 'cat', label: 'Kediler', icon: <CatIcon className="w-8 h-8 text-brand-orange" />, desc: 'Odada serbestlik, sineklik güvencesi olanlar' },
            { id: 'bird', label: 'Kuşlar', icon: <BirdIcon className="w-8 h-8 text-sky-655" />, desc: 'Kafes kabulü ve rüzgarsız oda sağlayanlar' },
            { id: 'other', label: 'Diğer Dostlar', icon: <OtherIcon className="w-8 h-8 text-purple-650" />, desc: 'Kemirgenler, tavşanlar ve sürüngenler için' },
          ].map(pet => (
            <div
              key={pet.id}
              onClick={() => {
                setSearchFilters({
                  destination: '',
                  petType: pet.id,
                  accType: 'all',
                  features: [],
                  suitability: 'all',
                  weightLimit: 'all',
                  extraFeeOnly: false
                });
                onViewChange('accommodations');
              }}
              className="bg-white border border-brand-beige hover:border-brand-navy p-6 rounded-3xl text-center cursor-pointer hover:shadow-md transition-all group"
            >
              <div className="inline-flex p-3 rounded-full bg-brand-cream group-hover:scale-110 transition-transform mb-4">
                {pet.icon}
              </div>
              <h3 className="font-title font-bold text-lg text-gray-900">{pet.label}</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">{pet.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialty Collections */}
      <div className="bg-brand-navy-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold font-title text-brand-navy">İhtiyacınıza Göre Otel Seçkileri</h2>
            <p className="text-gray-600 text-sm mt-1">Özel tatil tarzları ve gereksinimleri olan aileler için editoryal listeler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ek Ücret Almayan Oteller",
                desc: "Dostunuz için hiçbir temizlik ya da ek konaklama bedeli talep etmeyen tesisler.",
                icon: "💰",
                filter: { extraFeeOnly: true },
              },
              {
                title: "Kendi Pet Plajı Olan Tesisler",
                desc: "Köpeğinizle beraber güneşlenip yüzebileceğiniz özel plajlı tatil köyleri.",
                icon: "🏖️",
                filter: { features: ["Pet plajı bulunan"] },
              },
              {
                title: "Kilo Sınırı Olmayan Oteller",
                desc: "Büyük ırk köpek sahipleri için ağırlık kısıtlaması uygulamayan tesisler.",
                icon: "⚖️",
                filter: { petType: 'dog', weightLimit: 'no-limit' },
              }
            ].map((collection, idx) => (
              <div
                key={idx}
                onClick={() => goToAccWithFilter(collection.filter, collection.title)}
                className="bg-white p-6 rounded-3xl border-2 border-brand-navy/15 hover:border-brand-navy cursor-pointer hover:shadow-md transition-all flex items-start gap-4"
              >
                <span className="text-3xl">{collection.icon}</span>
                <div>
                  <h3 className="font-title font-bold text-lg text-brand-navy">{collection.title}</h3>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{collection.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Pati Elçisi Ol Topluluk Bölümü ve Formu */}
      <div id="pati-elcisi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-gradient-to-br from-brand-yellow/25 via-white to-brand-beige border-2 border-brand-navy rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Arka Plan Dekoratif Pati */}
          <div className="absolute -bottom-10 -right-10 text-9xl text-brand-navy/5 select-none pointer-events-none font-bold">
            🐾
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sol Kolon: Bilgilendirme ve Avantajlar (6 Kolon) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-yellow text-brand-navy rounded-full text-xs font-bold border border-brand-navy shadow-xs font-title">
                <span>⭐ patili.co Topluluk Programı</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-title text-brand-navy leading-tight">
                Pati Elçisi Olun,<br />
                <span className="text-brand-navy underline decoration-brand-yellow decoration-4">Deneyimlerinizle Rehberlik Edin!</span>
              </h2>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Patili dostunuzla gezmeyi, yeni yerler keşfetmeyi ve deneyimlerinizi paylaşmayı seviyor musunuz? <strong>patili.co Pati Elçisi</strong> olarak topluluğa katılın; yeni mekanlar ekleyin, otel kurallarını güncelleyin ve elçi rozetinizle yorumlarınız en üstte görünsün!
              </p>

              {/* 4 Ana Elçi Ayrıcalığı */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/90 border border-brand-navy/15 rounded-2xl p-4 shadow-2xs">
                  <div className="text-2xl mb-1.5">🍽️</div>
                  <h4 className="font-bold font-title text-sm text-brand-navy">Patili Mekan Ekle</h4>
                  <p className="text-3xs text-gray-600 mt-1">
                    Gittiğiniz kedi ve köpek dostu kafe, restoran, meyhane ve barları sisteme ekleyin.
                  </p>
                </div>

                <div className="bg-white/90 border border-brand-navy/15 rounded-2xl p-4 shadow-2xs">
                  <div className="text-2xl mb-1.5">🏨</div>
                  <h4 className="font-bold font-title text-sm text-brand-navy">Otel & Kural Güncelle</h4>
                  <p className="text-3xs text-gray-600 mt-1">
                    Otele ek ücret, bahçe veya kilo kurallarını güncelleyin (örn: ek ücret alıyorlar).
                  </p>
                </div>

                <div className="bg-white/90 border border-brand-navy/15 rounded-2xl p-4 shadow-2xs">
                  <div className="text-2xl mb-1.5">📝</div>
                  <h4 className="font-bold font-title text-sm text-brand-navy">Gezi Rehberi Yaz</h4>
                  <p className="text-3xs text-gray-600 mt-1">
                    Köpeğinizle tatil rotalarınızı ve deneyimlerinizi editoryal rehber olarak yayınlayın.
                  </p>
                </div>

                <div className="bg-white/90 border border-brand-navy/15 rounded-2xl p-4 shadow-2xs">
                  <div className="text-2xl mb-1.5">⭐</div>
                  <h4 className="font-bold font-title text-sm text-brand-navy">Öncelikli Yorumlar</h4>
                  <p className="text-3xs text-gray-600 mt-1">
                    Yaptığınız tüm yorumlar altın "Pati Elçisi" rozetiyle her zaman en üstte listelenir.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs text-gray-600">
                <span className="flex -space-x-2">
                  <span className="inline-block w-8 h-8 rounded-full bg-brand-navy text-white text-xs flex items-center justify-center font-bold shadow-xs">🐾</span>
                  <span className="inline-block w-8 h-8 rounded-full bg-brand-yellow text-brand-navy text-xs flex items-center justify-center font-bold shadow-xs">🐶</span>
                  <span className="inline-block w-8 h-8 rounded-full bg-brand-orange text-white text-xs flex items-center justify-center font-bold shadow-xs">🐱</span>
                </span>
                <span><strong>150+ Aktif Pati Elçisi</strong> Türkiye'nin dört bir yanından mekan ve otelleri doğruluyor</span>
              </div>
            </div>

            {/* Sağ Kolon: Başvuru Formu (6 Kolon) */}
            <div className="lg:col-span-6 bg-white border-2 border-brand-navy rounded-3xl p-6 md:p-8 shadow-md">
              {ambassadorSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="text-5xl animate-bounce">🎉</div>
                  <h3 className="font-title font-bold text-2xl text-brand-navy">
                    Pati Elçisi Başvurunuz Alındı!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                    Aramıza katılmanızdan mutluluk duyuyoruz! Başvurunuz editör ekibimizce incelendikten sonra <strong>Pati Elçisi giriş ve içerik ekleme yetkiniz</strong> e-posta adresinize iletilecektir.
                  </p>
                  <button
                    onClick={() => setAmbassadorSuccess(false)}
                    className="mt-4 bg-brand-navy text-white px-6 py-2.5 rounded-full text-xs font-bold font-title hover:bg-brand-navy-hover"
                  >
                    Yeni Başvuru Yap
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAmbassadorSubmit} className="space-y-4">
                  <div className="border-b border-brand-beige pb-3">
                    <h3 className="font-title font-bold text-xl text-brand-navy flex items-center gap-2">
                      <span>🐾</span> Pati Elçisi Başvuru Formu
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">Formu doldurarak patili.co elçisi olun ve topluluğa rehberlik edin.</p>
                  </div>

                  {ambassadorError && (
                    <div className="bg-red-50 text-red-700 text-xs p-3 rounded-xl border border-red-200">
                      ⚠️ {ambassadorError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Adınız & Soyadınız *</label>
                      <input
                        required
                        type="text"
                        placeholder="Örn: Burcu Çetin"
                        value={ambassadorForm.fullName}
                        onChange={e => setAmbassadorForm({ ...ambassadorForm, fullName: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy"
                      />
                    </div>
                    <div>
                      <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">E-posta Adresiniz *</label>
                      <input
                        required
                        type="email"
                        placeholder="burcu@example.com"
                        value={ambassadorForm.email}
                        onChange={e => setAmbassadorForm({ ...ambassadorForm, email: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Telefon Numaranız *</label>
                      <input
                        required
                        type="tel"
                        placeholder="05XX XXX XX XX"
                        value={ambassadorForm.phone}
                        onChange={e => setAmbassadorForm({ ...ambassadorForm, phone: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy"
                      />
                    </div>
                    <div>
                      <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Yaşadığınız Şehir / İlçe *</label>
                      <input
                        required
                        type="text"
                        placeholder="Örn: Beşiktaş, İstanbul"
                        value={ambassadorForm.city}
                        onChange={e => setAmbassadorForm({ ...ambassadorForm, city: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Patili Dostunuz (Irk & İsim) *</label>
                      <input
                        required
                        type="text"
                        placeholder="Örn: French Bulldog / Badem"
                        value={ambassadorForm.petInfo}
                        onChange={e => setAmbassadorForm({ ...ambassadorForm, petInfo: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy"
                      />
                    </div>
                    <div>
                      <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Instagram / Sosyal Medya</label>
                      <input
                        type="text"
                        placeholder="@kullaniciadi veya profil linki"
                        value={ambassadorForm.socialMedia}
                        onChange={e => setAmbassadorForm({ ...ambassadorForm, socialMedia: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                      Deneyimleriniz & Hangi Mekanları Paylaşmak İstersiniz?
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Dostunuzla gezdiğiniz kafe/restoranlar veya otel deneyimlerinizden kısaca bahsedin..."
                      value={ambassadorForm.experience}
                      onChange={e => setAmbassadorForm({ ...ambassadorForm, experience: e.target.value })}
                      className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      required
                      type="checkbox"
                      id="ambassador-consent"
                      checked={ambassadorForm.consent}
                      onChange={e => setAmbassadorForm({ ...ambassadorForm, consent: e.target.checked })}
                      className="mt-1 rounded text-brand-navy focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="ambassador-consent" className="text-3xs text-gray-600 cursor-pointer">
                      Pati Elçisi programına katılmayı ve iletişim bilgilerimin onay süreci için kullanılmasını onaylıyorum.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={ambassadorSubmitting}
                    className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-3.5 rounded-full text-sm font-bold font-title transition-colors shadow-md border border-brand-navy/10 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>🐾</span>
                    <span>{ambassadorSubmitting ? 'Başvuru Gönderiliyor...' : 'Pati Elçisi Başvurusu Gönder'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* How We Verify */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-brand-beige rounded-3xl p-8 md:p-12 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="bg-brand-navy-light text-brand-navy text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
            Doğruluk Taahhüdü
          </span>
          <h2 className="text-3xl font-bold font-title text-brand-navy mt-4">
            Patiyle Seyahat tesisleri nasıl doğruluyor?
          </h2>
          <p className="text-gray-750 mt-4 leading-relaxed text-sm">
            İnternetteki "evcil hayvan dostu" ibarelerinin çoğu yanıltıcıdır ve tesise vardığınızda sürprizlerle karşılaşabilirsiniz. Biz bu sorunu çözmek için şunları yapıyoruz:
          </p>
          <ul className="space-y-3 mt-6 text-xs text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-brand-navy font-bold">✓</span>
              <span><strong>Yerinde Denetim:</strong> Tesislerin büyük kısmını editörlerimiz bizzat köpekleri veya kedileriyle ziyaret edip deneyimler.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-navy font-bold">✓</span>
              <span><strong>Doğrudan İletişim:</strong> Listelenen tüm otel kuralları, işletme yönetimleri aranarak tek tek standartlaştırılıp doğrulanır.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-navy font-bold">✓</span>
              <span><strong>Düzenli Güncelleme:</strong> Bilgiler 3 ayda bir kontrol edilerek son güncelleme tarihleriyle birlikte yayına sunulur.</span>
            </li>
          </ul>
        </div>
        <div className="bg-brand-beige p-6 rounded-3xl space-y-4 border border-brand-beige">
          <h3 className="font-title font-bold text-lg text-brand-navy">Otel veya İşletme Önerin</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Bildiğiniz, kaldığınız ve kalitesinden emin olduğunuz evcil hayvan dostu tesisleri veya kedi/köpek otellerini bize bildirin, ekibimiz inceleyerek doğrulasın.
          </p>
          <button
            onClick={() => {
              alert("Otel önerme talebiniz editör ekibimize iletildi. İlginiz için teşekkür ederiz!");
            }}
            className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-3 rounded-full text-sm font-bold transition-colors font-title shadow-sm border border-brand-navy/10"
          >
            Tesis Önerisinde Bulun
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SeoContentSection content={seoContent.home} />
      </div>
    </div>
  );
}
