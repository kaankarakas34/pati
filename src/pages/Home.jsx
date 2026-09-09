import React, { useState, useEffect } from 'react';
import { 
  DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon, StarIcon,
  HotelIcon, DiningIcon, TaxiCarIcon, BoardingHomeIcon, DogWalkerIcon, VetClinicIcon,
  MoneyIcon, BeachIcon, ScaleIcon, SearchIcon, ArrowRightIcon
} from '../components/PetIcons';
import { slugify } from '../../lib/seo-slugs';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import PetTaxiAdBanner from '../components/PetTaxiAdBanner';

export default function Home({ onViewChange, setSearchFilters }) {
  const [activeTab, setActiveTab] = useState('hotel'); // 'hotel' | 'venue'
  const [destination, setDestination] = useState('');
  const [petType, setPetType] = useState('all');
  const [accType, setAccType] = useState('all');

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
    if (activeTab === 'venue') {
      onViewChange('experiences');
      return;
    }
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-brand-navy/10 rounded-full text-xs font-bold text-brand-c2 shadow-xs">
            <span>🐾 Türkiye'nin En Kapsamlı Pet Friendly Platformu</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-title text-brand-navy leading-tight">
            Patili Dostunuzla <span className="text-brand-navy underline decoration-brand-c4 decoration-4">Unutulmaz Anılar</span> Keşfedin 🐾
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Türkiye'nin en kapsamlı pet friendly platformunda doğrulanmış otelleri, patili mekanları ve tüm hizmetleri güvenle keşfedin.
          </p>

          {/* Search Type Tabs (Otel / Mekan) */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="inline-flex p-1 bg-white/80 backdrop-blur-xs border border-brand-beige rounded-full shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('hotel')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === 'hotel'
                    ? 'bg-brand-c2 text-white shadow-sm'
                    : 'text-brand-c3 hover:text-brand-c1 hover:bg-brand-cream/60'
                }`}
              >
                <HotelIcon className={`w-4 h-4 ${activeTab === 'hotel' ? 'text-white' : 'text-brand-c3'}`} />
                <span>Otel & Konaklama</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('venue')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === 'venue'
                    ? 'bg-brand-c2 text-white shadow-sm'
                    : 'text-brand-c3 hover:text-brand-c1 hover:bg-brand-cream/60'
                }`}
              >
                <DiningIcon className={`w-4 h-4 ${activeTab === 'venue' ? 'text-white' : 'text-brand-c3'}`} />
                <span>Patili Mekan</span>
              </button>
            </div>
          </div>

          {/* Quick Filter Bar */}
          <form onSubmit={handleSearch} className="bg-white p-3 md:py-2.5 md:pl-6 md:pr-2.5 rounded-3xl md:rounded-full shadow-xl border border-brand-beige max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-3">
            {/* Destination Input */}
            <div className="flex-1 flex flex-col text-left px-2 w-full md:w-auto border-b md:border-b-0 md:border-r border-brand-beige pb-2 md:pb-0">
              <label htmlFor="home-destination" className="text-2xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                {activeTab === 'hotel' ? 'Nereye?' : 'Hangi Şehir veya Mekan?'}
              </label>
              <div className="flex items-center gap-2">
                <LocationIcon className="w-4 h-4 text-brand-c2 flex-shrink-0" />
                <input
                  id="home-destination"
                  name="destination"
                  aria-label={activeTab === 'hotel' ? 'Nereye seyahat etmek istiyorsunuz?' : 'Hangi mekanda vakit geçirmek istiyorsunuz?'}
                  type="text"
                  placeholder={activeTab === 'hotel' ? 'İl, ilçe veya otel adı...' : 'İl, ilçe, kafe, restoran veya plaj adı...'}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent border-none p-0 text-sm font-medium focus:ring-0 text-brand-navy placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Pet Type */}
            <div className="flex flex-col text-left px-2 w-full md:w-auto pb-2 md:pb-0 min-w-[170px]">
              <label htmlFor="home-pet-type" className="text-2xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Patili Dostunuz</label>
              <select
                id="home-pet-type"
                name="petType"
                aria-label="Patili dostunuzun türünü seçin"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="bg-transparent border-none py-0 text-sm font-medium text-brand-navy outline-none cursor-pointer focus:ring-0 focus:border-brand-navy"
              >
                <option value="all">Tüm Evcil Hayvanlar</option>
                <option value="dog">Köpek</option>
                <option value="cat">Kedi</option>
                <option value="bird">Kuş / Diğer</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-brand-c2 hover:bg-brand-c1 text-white font-bold rounded-full flex items-center justify-center gap-2 py-3 px-7 transition-all shadow-md w-full md:w-auto font-title cursor-pointer"
            >
              <SearchIcon className="w-4 h-4 text-white" />
              <span>{activeTab === 'hotel' ? 'Otel Ara' : 'Mekan Ara'}</span>
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
            className="bg-white border border-brand-beige rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-brand-cream border border-brand-beige flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <HotelIcon className="w-7 h-7 text-brand-c2" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-brand-c1 group-hover:text-brand-c2 transition-colors">Pati Dostu Oteller</h2>
              <p className="text-gray-600 mt-2.5 leading-relaxed text-sm sm:text-base">
                Türkiye'nin dört bir yanındaki kedi ve köpek kabul eden otelleri; kilo sınırı, pet ücreti ve bahçe imkanlarıyla karşılaştırın.
              </p>
            </div>
            <span className="text-brand-c2 font-bold flex items-center gap-2 mt-6 group-hover:translate-x-1 transition-transform text-sm sm:text-base">
              <span>Otelleri İncele</span>
              <ArrowRightIcon className="w-4 h-4 text-brand-c2" />
            </span>
          </div>

          {/* Ana Odak 2: Patili Mekanlar (Kafe, Restoran & Bar) */}
          <div
            onClick={() => onViewChange('experiences')}
            className="bg-white border border-brand-beige rounded-3xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
          >
            <div>
              <div className="w-14 h-14 rounded-full bg-brand-cream border border-brand-beige flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <DiningIcon className="w-7 h-7 text-brand-c2" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-brand-c1 group-hover:text-brand-c2 transition-colors">Patili Mekanlar</h2>
              <p className="text-gray-600 mt-2.5 leading-relaxed text-sm sm:text-base">
                Dostunuzla keyifle vakit geçirebileceğiniz kedi ve köpek dostu kafe, restoran, meyhane ve barları keşfedin.
              </p>
            </div>
            <span className="text-brand-c2 font-bold flex items-center gap-2 mt-6 group-hover:translate-x-1 transition-transform text-sm sm:text-base">
              <span>Mekanları Keşfet</span>
              <ArrowRightIcon className="w-4 h-4 text-brand-c2" />
            </span>
          </div>
        </div>

        {/* 4 Tamamlayıcı Hizmet Kutusu */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-title text-brand-c1">
                Patili Hizmetler & Acil Çözümler
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
              className="bg-white border border-brand-beige rounded-3xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-beige flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <TaxiCarIcon className="w-6 h-6 text-brand-c2" />
                </div>
                <h4 className="text-lg font-bold font-title text-brand-c1 group-hover:text-brand-c2 transition-colors">Pet Taksi</h4>
              </div>
              <span className="text-brand-c2 font-bold flex items-center gap-1.5 mt-5 group-hover:translate-x-1 transition-transform text-xs">
                <span>Taksileri İncele</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-brand-c2" />
              </span>
            </div>

            {/* Kutu 2: Pet Otel */}
            <div
              onClick={() => onViewChange('boardings')}
              className="bg-white border border-brand-beige rounded-3xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-beige flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BoardingHomeIcon className="w-6 h-6 text-brand-c2" />
                </div>
                <h4 className="text-lg font-bold font-title text-brand-c1 group-hover:text-brand-c2 transition-colors">Pet Otel</h4>
              </div>
              <span className="text-brand-c2 font-bold flex items-center gap-1.5 mt-5 group-hover:translate-x-1 transition-transform text-xs">
                <span>Pet Otelleri Gör</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-brand-c2" />
              </span>
            </div>

            {/* Kutu 3: Köpek Gezdiriciler */}
            <div
              onClick={() => onViewChange('dog-walkers')}
              className="bg-white border border-brand-beige rounded-3xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-beige flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <DogWalkerIcon className="w-6 h-6 text-brand-c2" />
                </div>
                <h4 className="text-lg font-bold font-title text-brand-c1 group-hover:text-brand-c2 transition-colors">Köpek Gezdiriciler</h4>
              </div>
              <span className="text-brand-c2 font-bold flex items-center gap-1.5 mt-5 group-hover:translate-x-1 transition-transform text-xs">
                <span>Gezdirici Bul</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-brand-c2" />
              </span>
            </div>

            {/* Kutu 4: 7-24 Veterinerler */}
            <div
              onClick={() => onViewChange('vets')}
              className="bg-white border border-brand-beige rounded-3xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-beige flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <VetClinicIcon className="w-6 h-6 text-brand-c2" />
                </div>
                <h4 className="text-lg font-bold font-title text-brand-c1 group-hover:text-brand-c2 transition-colors">7/24 Veterinerler</h4>
              </div>
              <span className="text-brand-c2 font-bold flex items-center gap-1.5 mt-5 group-hover:translate-x-1 transition-transform text-xs">
                <span>Nöbetçi Klinik Bul</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-brand-c2" />
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-c2/10 text-brand-c2 rounded-full text-3xs font-extrabold mb-2">
              <span>ÜCRETSİZ PET KABUL EDEN SEÇKİN TESİSLER</span>
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
              className="bg-white rounded-3xl overflow-hidden shadow-xs border border-brand-beige hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
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
                  <div className="absolute bottom-3 right-3 text-xs px-3.5 py-1 rounded-full font-black text-white shadow-md bg-brand-navy/90 backdrop-blur-xs flex items-center gap-1.5 border border-white/20">
                    <StarIcon className="w-3.5 h-3.5 text-brand-c4 fill-current" />
                    <span>Dost Uygunluğu:</span>
                    <span className="text-brand-c4 font-extrabold">
                      {(hotel.baseTrustScore || (hotel.suitability === 3 ? 9.5 : hotel.suitability === 2 ? 8.5 : 7.2)).toFixed(1)} / 10
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 text-left">
                  <div className="flex items-center justify-between text-3xs text-gray-500 font-medium">
                    <span>{hotel.type}</span>
                    <span className="flex items-center gap-1">
                      <LocationIcon className="w-3.5 h-3.5 text-brand-c3" /> {hotel.city}, {hotel.district}
                    </span>
                  </div>
                  <h3 className="font-title text-base font-bold text-gray-900 line-clamp-1">{hotel.name}</h3>
                  
                  {/* Pet Fee Info Box */}
                  <div className="pt-1">
                    {hotel.extraFee === 'no' ? (
                      <div className="bg-brand-c2/10 border border-brand-c2/20 text-brand-c2 font-extrabold text-3xs px-3.5 py-1.5 rounded-full flex items-center justify-between">
                        <span>ÜCRETSİZ PET KABULÜ</span>
                        <span>Ek Ücret Alınmıyor</span>
                      </div>
                    ) : (
                      <div className="bg-brand-cream border border-brand-beige text-brand-c2 font-bold text-3xs px-3.5 py-1.5 rounded-full flex items-center justify-between">
                        <span>PET ÜCRET POLİTİKASI</span>
                        <span className="font-bold">{hotel.extraFee === 'Teyit bekliyor' || !hotel.extraFee ? 'Tesisle Teyit Edin' : hotel.extraFee}</span>
                      </div>
                    )}
                  </div>

                  {/* Accepted Pets & Weight Limit Bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-brand-beige text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <span className="text-3xs text-gray-700 font-bold">Kabul:</span>
                      {hotel.allowedPets.includes('dog') && <DogIcon className="w-4 h-4 text-brand-c2" title="Köpek" />}
                      {hotel.allowedPets.includes('cat') && <CatIcon className="w-4 h-4 text-brand-c2" title="Kedi" />}
                      {hotel.allowedPets.includes('bird') && <BirdIcon className="w-4 h-4 text-brand-c2" title="Kuş" />}
                      {hotel.allowedPets.includes('other') && <OtherIcon className="w-4 h-4 text-brand-c2" title="Diğer Dostlar" />}
                    </div>

                    <span className="text-3xs bg-brand-c2/10 px-2.5 py-1 rounded-full text-brand-c2 font-bold">
                      {hotel.weightLimit > 0 ? `Max ${hotel.weightLimit} kg` : 'Kilo Sınırı Yok'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 text-right border-t border-brand-beige/50 bg-brand-cream/20">
                <button className="w-full bg-brand-navy hover:bg-brand-c2 text-white transition-colors py-2.5 rounded-full text-xs font-bold border border-brand-navy/10 font-title">
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
                <span><span aria-hidden="true" className="mr-2 text-brand-c3">•</span>{city.name} Otelleri</span>
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
            { id: 'dog', label: 'Köpekler', icon: <DogIcon className="w-8 h-8 text-brand-c2" />, desc: 'Büyük ırk, plaj izni, pet menüsü sunanlar' },
            { id: 'cat', label: 'Kediler', icon: <CatIcon className="w-8 h-8 text-brand-c2" />, desc: 'Odada serbestlik, sineklik güvencesi olanlar' },
            { id: 'bird', label: 'Kuşlar', icon: <BirdIcon className="w-8 h-8 text-brand-c2" />, desc: 'Kafes kabulü ve rüzgarsız oda sağlayanlar' },
            { id: 'other', label: 'Diğer Dostlar', icon: <OtherIcon className="w-8 h-8 text-brand-c2" />, desc: 'Kemirgenler, tavşanlar ve sürüngenler için' },
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
              className="bg-white border border-brand-beige p-6 rounded-3xl text-center cursor-pointer hover:shadow-xl transition-all group"
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
                icon: <MoneyIcon className="w-6 h-6 text-brand-c2" />,
                filter: { extraFeeOnly: true },
              },
              {
                title: "Kendi Pet Plajı Olan Tesisler",
                desc: "Köpeğinizle beraber güneşlenip yüzebileceğiniz özel plajlı tatil köyleri.",
                icon: <BeachIcon className="w-6 h-6 text-brand-c2" />,
                filter: { features: ["Pet plajı bulunan"] },
              },
              {
                title: "Kilo Sınırı Olmayan Oteller",
                desc: "Büyük ırk köpek sahipleri için ağırlık kısıtlaması uygulamayan tesisler.",
                icon: <ScaleIcon className="w-6 h-6 text-brand-c2" />,
                filter: { petType: 'dog', weightLimit: 'no-limit' },
              }
            ].map((collection, idx) => (
              <div
                key={idx}
                onClick={() => goToAccWithFilter(collection.filter, collection.title)}
                className="bg-white p-6 rounded-3xl border border-brand-beige cursor-pointer hover:shadow-xl transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-brand-c2/10 rounded-full shrink-0">
                  {collection.icon}
                </div>
                <div>
                  <h3 className="font-title font-bold text-lg text-brand-navy">{collection.title}</h3>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{collection.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* İşletmeni Ekle Bölümü */}
      <div id="isletmeni-ekle" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-gradient-to-br from-brand-c1 via-brand-c2 to-brand-c1 text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden border border-brand-c2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Sol Kolon: Başlık ve Açıklama (7 Kolon) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-brand-c4 rounded-full text-xs font-bold border border-white/15 shadow-sm font-title">
                <span>patili.co İşletme Ağı</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-title text-white leading-tight">
                İşletmenizi <span className="text-brand-c4 underline decoration-brand-c4/50 decoration-4">patili.co'ya</span> Ekleyin!
              </h2>

              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl">
                Evcil hayvan kabul eden <strong>otel, butik otel, kafe, restoran, pet oteli, 7/24 veteriner</strong> veya <strong>pet taksi</strong> işletmeniz mi var? İşletme türünüzü seçin, 1-2 fotoğraf ve iletişim bilgilerinizi iletin; işletmenizi Türkiye'nin en büyük hayvan dostu platformunda binlerce patili aileyle buluşturalım.
              </p>

              {/* 4 Öne Çıkan Fayda Kartı */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-3xl p-3.5 flex items-start gap-3">
                  <div className="p-2 bg-brand-c4/20 rounded-full shrink-0 text-brand-c4">
                    <VerifiedBadge className="w-5 h-5 text-brand-c4" />
                  </div>
                  <div>
                    <h4 className="font-bold font-title text-xs text-white">Doğrudan Hedef Kitle</h4>
                    <p className="text-3xs text-gray-300 mt-0.5">Pet dostu arayan aileler doğrudan işletmenize ulaşsın.</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-3xl p-3.5 flex items-start gap-3">
                  <div className="p-2 bg-brand-c4/20 rounded-full shrink-0 text-brand-c4">
                    <HotelIcon className="w-5 h-5 text-brand-c4" />
                  </div>
                  <div>
                    <h4 className="font-bold font-title text-xs text-white">Fotoğraflı Tesis Profili</h4>
                    <p className="text-3xs text-gray-300 mt-0.5">Mekan fotoğraflarınız ve kabul kurallarınız öne çıkar.</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-3xl p-3.5 flex items-start gap-3">
                  <div className="p-2 bg-brand-c4/20 rounded-full shrink-0 text-brand-c4">
                    <StarIcon className="w-5 h-5 text-brand-c4 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold font-title text-xs text-white">Doğrulanmış Rozet</h4>
                    <p className="text-3xs text-gray-300 mt-0.5">Pet dostu güvenilirlik puanıyla müşteri güvenini artırın.</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-3xl p-3.5 flex items-start gap-3">
                  <div className="p-2 bg-brand-c4/20 rounded-full shrink-0 text-brand-c4">
                    <ArrowRightIcon className="w-5 h-5 text-brand-c4" />
                  </div>
                  <div>
                    <h4 className="font-bold font-title text-xs text-white">Hızlı & Kolay Başvuru</h4>
                    <p className="text-3xs text-gray-300 mt-0.5">Formu doldurun, ekibimiz inceleyip hemen listelesin.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Kolon: CTA Aksiyon Kartı (5 Kolon) */}
            <div className="lg:col-span-5 bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-c3/20 space-y-6">
              <div className="space-y-2 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-c2/10 flex items-center justify-center mx-auto mb-2 text-brand-c2">
                  <HotelIcon className="w-6 h-6 text-brand-c2" />
                </div>
                <h3 className="font-title font-bold text-2xl text-brand-navy">
                  İşletme Formuna Git
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Tesis türü, 1-2 fotoğraf, telefon ve adres bilgilerinizi girerek birkaç dakikada işletmenizi kaydedin.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-gray-700 bg-brand-cream/60 p-4 rounded-3xl border border-brand-beige">
                <div className="flex items-center gap-2">
                  <span className="text-brand-c2 font-bold">✓</span>
                  <span>Otel, Butik Otel, Bungalov, Villa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-c2 font-bold">✓</span>
                  <span>Patili Kafe, Restoran & Bar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-c2 font-bold">✓</span>
                  <span>Pet Taksi, Pet Oteli & 7/24 Veterinerler</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-c2 font-bold">✓</span>
                  <span>Ücretsiz & Doğrulanmış Tesis Listeleme</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onViewChange('add-business')}
                className="w-full bg-brand-c2 hover:bg-brand-c1 text-white py-4 rounded-full font-title font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>İşletmeni Ekle</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>

              <p className="text-3xs text-center text-gray-400">
                Başvurunuz editörlerimiz tarafından 24 saat içinde incelenir.
              </p>
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
            patili.co tesisleri nasıl doğruluyor?
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
