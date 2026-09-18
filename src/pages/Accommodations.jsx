import { useCatalog } from '../lib/useCatalog';
import CatalogPagination from '../components/CatalogPagination';
import React, { useState, useEffect } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon, PetPolicyVerificationBadge } from '../components/PetIcons';
import AdBanner from '../components/AdBanner';
import { slugify, getHotelPath } from '../../lib/seo-slugs';
import { CUSTOM_CITY_CONTENT } from '../../lib/editorial-guides';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent, generateCombinationSeoContent } from '../data/seoContent';



export default function Accommodations({ hotels, onViewChange, searchFilters, setSearchFilters }) {
  // Filters state
  const [selectedCity, setSelectedCity] = useState(searchFilters.destination || '');
  const [selectedPet, setSelectedPet] = useState(searchFilters.petType || 'all');
  const [selectedAccType, setSelectedAccType] = useState(searchFilters.accType || 'all');
  const [selectedSuitability, setSelectedSuitability] = useState(searchFilters.suitability || 'all');
  const [weightLimitFilter, setWeightLimitFilter] = useState(searchFilters.weightLimit || 'all');
  const [extraFeeOnly, setExtraFeeOnly] = useState(searchFilters.extraFeeOnly || false);
  const [selectedFeatures, setSelectedFeatures] = useState(searchFilters.features || []);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync with searchFilters when they change globally (e.g. from home page)
  useEffect(() => {
    setSelectedCity(searchFilters.destination || '');
    setSelectedPet(searchFilters.petType || 'all');
    setSelectedAccType(searchFilters.accType || 'all');
    setSelectedSuitability(searchFilters.suitability || 'all');
    setWeightLimitFilter(searchFilters.weightLimit || 'all');
    setExtraFeeOnly(searchFilters.extraFeeOnly || false);
    setSelectedFeatures(searchFilters.features || []);
  }, [searchFilters]);

  // Features list based on user requirements
  const filterableFeatures = [
    "Bahçesi bulunan",
    "Pet plajı bulunan",
    "Evcil hayvan havuzu bulunan",
    "Mama ve su kabı sağlayan",
    "Evcil hayvan yatağı sağlayan",
    "Pet menüsü bulunan",
    "Veteriner desteği bulunan",
    "Doğa içinde",
    "Denize sıfır"
  ];

  // Handle individual feature checkbox toggle
  const handleFeatureToggle = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    const freshFilters = {
      destination: '',
      petType: 'all',
      accType: 'all',
      suitability: 'all',
      weightLimit: 'all',
      extraFeeOnly: false,
      features: [],
      customFilter: null,
      filterTitle: null
    };
    setSearchFilters(freshFilters);
  };

  // Filter the hotels list
  const page = useCatalog('hotels', { q: selectedCity, citySlug: searchFilters.citySlug, districtSlug: searchFilters.districtSlug, pet: selectedPet, type: selectedAccType, suitability: selectedSuitability, weightLimit: weightLimitFilter === 'no-limit' ? '0' : weightLimitFilter, extraFeeOnly, feature: selectedFeatures, collection: searchFilters.collection }, false, true, true);
  const filteredHotels = page.items;

  const verifiedCityHotels = filteredHotels.filter(hotel => hotel.verified);
  const confirmedDogHotels = filteredHotels.filter(hotel => hotel.allowedPets?.includes('dog'));
  const confirmedNoFeeHotels = verifiedCityHotels.filter(hotel => hotel.extraFee === 'no');
  const confirmedNoLimitHotels = verifiedCityHotels.filter(hotel => hotel.weightLimit === 0);

  // Sorting state
  const [sortBy, setSortBy] = useState('recommended');

  // Quick filter helpers
  const isQuickDog = selectedPet === 'dog';
  const isQuickCat = selectedPet === 'cat';
  const isQuickBigDog = weightLimitFilter === 'no-limit';
  const isQuickGarden = selectedFeatures.includes('Bahçesi bulunan');
  const isQuickBeach = selectedFeatures.includes('Pet plajı bulunan');

  // Sort hotels
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortBy === 'trust') {
      return (b.baseTrustScore || 8) - (a.baseTrustScore || 8);
    }
    if (sortBy === 'verified') {
      return (new Date(b.lastVerified || 0)) - (new Date(a.lastVerified || 0));
    }
    if (sortBy === 'weight') {
      return (b.weightLimit || 999) - (a.weightLimit || 999);
    }
    return 0; // recommended
  });

  const customCity = searchFilters.citySlug ? CUSTOM_CITY_CONTENT[searchFilters.citySlug] : null;

  const intentType = selectedPet === 'cat' ? 'kedi-kabul' : selectedPet === 'dog' ? 'kopek-kabul' : 'pet-friendly';
  const pageSeoContent = customCity
    ? {
        id: `${searchFilters.citySlug}-seo`,
        title: customCity.h1,
        directAnswer: customCity.directAnswer,
        paragraphs: customCity.paragraphs,
        highlights: [
          `${searchFilters.destination} genelinde doğrulanmış pet politikaları`,
          'Kilo sınırı, ek ücret ve bahçe kullanım şartları',
          'Acil veteriner kliniklerine ve sahil/park rotalarına yakınlık',
          'Kedi ve köpekler için oda içi kurallar ve balkon güvenliği'
        ],
        faqs: customCity.faqs,
        links: [
          { href: '/blog/evcil-hayvan-kabul-eden-oteller', label: 'Türkiye Evcil Hayvan Kabul Eden Oteller Rehberi' },
          { href: '/blog/kedi-kopek-kabul-eden-oteller', label: 'Kedi ve Köpek Kabul Eden Oteller Rehberi' },
          { href: '/evcil-hayvan-dostu-oteller', label: 'Tüm Evcil Hayvan Dostu Oteller' },
          { href: '/kedi-kopek-otelleri', label: 'Kedi ve Köpek Otelleri' }
        ]
      }
    : searchFilters.cityLanding
    ? generateCombinationSeoContent(searchFilters.destination, intentType)
    : seoContent.accommodations;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-brand-beige pb-6 mb-6 text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-title text-brand-navy">
              {searchFilters.cityLanding
                ? `${searchFilters.destination} Evcil Hayvan Dostu Oteller`
                : 'Evcil Hayvan Dostu Oteller'}
            </h1>
            <p className="text-gray-600 text-sm mt-1.5">
              {searchFilters.cityLanding
                ? `${searchFilters.destination} ilindeki evcil hayvan kabul eden otel, butik otel, bungalov ve diğer konaklama seçenekleri (${filteredHotels.length} tesis listeleniyor)`
                : searchFilters.filterTitle
                ? `Özel Seçki: ${searchFilters.filterTitle} (${filteredHotels.length} Tesis listeleniyor)`
                : `Dostlarınızla birlikte kalabileceğiniz doğrulanmış konaklama tesisleri (${filteredHotels.length} Tesis listeleniyor)`
              }
            </p>

            {/* Trust & Policy Verification Banner */}
            <div className="mt-3 p-3.5 bg-amber-50/90 border border-amber-200/80 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5">
              <span className="text-base leading-none shrink-0">⚠️</span>
              <div className="leading-relaxed">
                <strong className="font-bold">Önemli Hatırlatma:</strong> Otellerin evcil hayvan kabul politikaları, kilo sınırları ve ek ücret tarifeleri sezonluk olarak değişebilir. Rezervasyon yapmadan önce evcil hayvanınızın türünü, kilosunu ve sayısını belirterek güncel kuralları doğrudan işletmeden teyit ediniz.
              </div>
            </div>

            {/* Flagship Guides Link Pills */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-gray-500">📖 Öne Çıkan Rehberler:</span>
              <a href="/blog/evcil-hayvan-kabul-eden-oteller" className="px-3 py-1 bg-brand-cream border border-brand-yellow/60 rounded-full font-bold text-brand-navy hover:bg-brand-yellow transition-colors">
                Türkiye Evcil Hayvan Kabul Eden Oteller Rehberi &rarr;
              </a>
              <a href="/blog/kedi-kopek-kabul-eden-oteller" className="px-3 py-1 bg-brand-cream border border-brand-yellow/60 rounded-full font-bold text-brand-navy hover:bg-brand-yellow transition-colors">
                Kedi & Köpek Kabul Eden Oteller &rarr;
              </a>
            </div>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-gray-500">Sırala:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-semibold border-2 border-brand-navy/20 rounded-xl px-3 py-2 bg-white text-brand-navy outline-none cursor-pointer focus:border-brand-navy"
            >
              <option value="recommended">⭐ Önerilen Sıralama</option>
              <option value="trust">🛡️ Pet Güven Skoru</option>
              <option value="verified">✓ En Son Doğrulanan</option>
              <option value="weight">⚖️ Kilo Limiti (Yüksek)</option>
            </select>
          </div>
        </div>

        {/* Quick Filter Facet Chips (Enuygun / Otelz Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 no-scrollbar text-xs">
          <button
            onClick={() => { setSelectedPet('all'); setWeightLimitFilter('all'); setExtraFeeOnly(false); setSelectedFeatures([]); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedPet === 'all' && weightLimitFilter === 'all' && !extraFeeOnly && selectedFeatures.length === 0 ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Tümü
          </button>
          <button
            onClick={() => setSelectedPet(selectedPet === 'dog' ? 'all' : 'dog')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedPet === 'dog' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span>🐶</span> Köpek Kabul Eden
          </button>
          <button
            onClick={() => setSelectedPet(selectedPet === 'cat' ? 'all' : 'cat')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedPet === 'cat' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span>🐱</span> Kedi Kabul Eden
          </button>
          <button
            onClick={() => setWeightLimitFilter(weightLimitFilter === 'no-limit' ? 'all' : 'no-limit')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${weightLimitFilter === 'no-limit' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span>⚖️</span> Büyük Köpek (Kilo Sınırsız)
          </button>
          <button
            onClick={() => setExtraFeeOnly(!extraFeeOnly)}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${extraFeeOnly ? 'bg-emerald-700 text-white shadow-xs' : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'}`}
          >
            <span>🟢</span> Ücretsiz Pet
          </button>
          <button
            onClick={() => handleFeatureToggle('Bahçesi bulunan')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedFeatures.includes('Bahçesi bulunan') ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span>🌿</span> Bahçeli / Çim Alan
          </button>
          <button
            onClick={() => handleFeatureToggle('Pet plajı bulunan')}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedFeatures.includes('Pet plajı bulunan') ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span>🏖️</span> Plaj Erişimi
          </button>
        </div>

        {searchFilters.filterTitle && (
          <button 
            onClick={resetFilters}
            className="text-xs bg-brand-navy text-white px-4 py-1.5 rounded-full font-bold mt-3 hover:bg-brand-navy-hover"
          >
            Filtreyi Temizle & Tümünü Göster
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar (Filters + Standalone Fixed Ad Banner) */}
        <div className="hidden lg:block space-y-6">
          <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left max-h-[75vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
              <h3 className="font-title font-bold text-lg text-gray-900">Detaylı Filtreler</h3>
              <button onClick={resetFilters} className="text-xs text-brand-navy font-bold hover:underline">Temizle</button>
            </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Şehir / İlçe</label>
            <input
              type="text"
              placeholder="Örn: Bodrum"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0"
            />
          </div>

          {/* Pet Allowed */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Kabul Edilen Hayvan</label>
            <select
              value={selectedPet}
              onChange={(e) => setSelectedPet(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0 bg-white cursor-pointer"
            >
              <option value="all">Tüm Hayvanlar</option>
              <option value="dog">Köpek Kabul Edenler</option>
              <option value="cat">Kedi Kabul Edenler</option>
              <option value="bird">Kuş Kabul Edenler</option>
              <option value="other">Diğer Hayvanları Kabul Edenler</option>
            </select>
          </div>

          {/* Accommodation Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tesis Türü</label>
            <select
              value={selectedAccType}
              onChange={(e) => setSelectedAccType(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0 bg-white cursor-pointer"
            >
              <option value="all">Tüm Türler</option>
              <option value="Otel">Otel</option>
              <option value="Butik Otel">Butik Otel</option>
              <option value="Bungalov">Bungalov</option>
              <option value="Villa">Villa</option>
              <option value="Glamping tesisi">Glamping</option>
              <option value="Tatil köyü">Tatil Köyü</option>
            </select>
          </div>

          {/* Suitability Level */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Dost Uygunluk Seviyesi</label>
            <select
              value={selectedSuitability}
              onChange={(e) => setSelectedSuitability(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0 bg-white cursor-pointer"
            >
              <option value="all">Tüm Seviyeler</option>
              <option value="1">Seviye 1: Evcil Hayvan Kabul Ediyor</option>
              <option value="2">Seviye 2: Evcil Hayvan Dostu</option>
              <option value="3">Seviye 3: Evcil Hayvan Deneyimi Sunuyor</option>
            </select>
          </div>

          {/* Weight Limit */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Kilo Kısıtlaması</label>
            <select
              value={weightLimitFilter}
              onChange={(e) => setWeightLimitFilter(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0 bg-white cursor-pointer"
            >
              <option value="all">Tüm Kilo Kuralları</option>
              <option value="10">En az 10 kg kabul eden</option>
              <option value="15">En az 15 kg kabul eden</option>
              <option value="no-limit">Kilo Sınırı Olmayanlar</option>
            </select>
          </div>

          {/* Extra Fee Checkbox */}
          <div className="space-y-2 pt-2 border-t border-brand-beige">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer font-medium">
              <input
                type="checkbox"
                checked={extraFeeOnly}
                onChange={(e) => setExtraFeeOnly(e.target.checked)}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
              />
              <span>Sadece Ek Ücret Almayanlar</span>
            </label>
          </div>

          {/* Features Checkbox list */}
          <div className="space-y-3 pt-3 border-t border-brand-beige">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Öne Çıkan Pet Hizmetleri</label>
            {filterableFeatures.map(feat => (
              <label key={feat} className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feat)}
                  onChange={() => handleFeatureToggle(feat)}
                  className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy mt-0.5"
                />
                <span>{feat}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Standalone Fixed / Sticky Ad Banner Box */}
        <div className="sticky top-24">
          <AdBanner type="square" onViewChange={onViewChange} />
        </div>
      </div>

        {/* Mobile Filters Toggle Button */}
        <div className="lg:hidden w-full mb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="w-full bg-brand-green hover:bg-brand-navy-hover text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm font-title"
          >
            <span>⚙️</span> Detaylı Filtreleri Aç
          </button>
        </div>

        {/* Accommodations Listings Grid */}
        <section className="col-span-1 lg:col-span-3 space-y-6">
          {filteredHotels.length === 0 ? (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto mt-8">
              <span className="text-5xl block mb-4">🔍</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Aramanızla Eşleşen Tesis Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Seçtiğiniz filtre kombinasyonuna sahip tesis bulunmamaktadır. Lütfen filtreleri gevşeterek tekrar aramayı deneyin.
              </p>
              <button
                onClick={resetFilters}
                className="bg-brand-navy hover:bg-brand-navy-hover text-white font-bold px-6 py-3 rounded-full text-sm mt-6 border-2 border-brand-navy transition-colors font-title"
              >
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedHotels.map((hotel, index) => (
                <div
                  key={hotel.id}
                  onClick={() => onViewChange('accommodation-detail', hotel.id)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs border border-brand-beige hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Hotel Image Area */}
                    <div className="relative h-48 bg-gray-200">
                      <img
                        src={hotel.imageUrl?.includes('images.unsplash.com') ? hotel.imageUrl.replace(/w=\d+/, 'w=400').replace(/q=\d+/, 'q=70') : hotel.imageUrl}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading={index < 2 ? "eager" : "lazy"}
                        fetchPriority={index < 2 ? "high" : "low"}
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=70';
                        }}
                      />
                      
                      {/* Dynamic Pet Policy Verification Badge */}
                      <div className="absolute top-3 left-3">
                        <PetPolicyVerificationBadge 
                          verified={hotel.verified !== false}
                          policySource={hotel.policySource || (hotel.verified ? 'phone_verified' : 'official_site')}
                          lastVerified={hotel.lastVerified}
                          confidenceScore={(hotel.baseTrustScore || 8.5).toFixed(1)}
                          size="sm"
                        />
                      </div>
                      
                      {/* Suitability Score Badge */}
                      <div className="absolute bottom-3 right-3 text-xs px-3 py-1 rounded-xl font-black text-white shadow-md bg-brand-navy/90 backdrop-blur-xs flex items-center gap-1 border border-white/20">
                        <span>⭐ Pet Skoru:</span>
                        <span className="text-brand-yellow font-extrabold">
                          {(hotel.baseTrustScore || (hotel.suitability === 3 ? 9.5 : hotel.suitability === 2 ? 8.5 : 7.2)).toFixed(1)} / 10
                        </span>
                      </div>
                    </div>

                    {/* Hotel Specs content */}
                    <div className="p-5 text-left space-y-3">
                      <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                        <span className="font-semibold text-brand-navy bg-brand-navy/5 px-2 py-0.5 rounded-md">{hotel.type || 'Konaklama'}</span>
                        <span className="flex items-center gap-1">
                          <LocationIcon className="w-3.5 h-3.5 text-brand-earth" /> {hotel.city}, {hotel.district}
                        </span>
                      </div>

                      <h3 className="font-title text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-brand-c1 transition-colors">
                        <a href={getHotelPath(hotel)} className="hover:underline">{hotel.name}</a>
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{hotel.description}</p>

                      {/* Pet Fee Info Box */}
                      <div className="pt-1">
                        {hotel.extraFee === 'no' ? (
                          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs px-3.5 py-2 rounded-2xl flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <span>🟢</span> ÜCRETSİZ PET KONAKLAMASI
                            </span>
                            <span className="bg-emerald-700 text-white px-2.5 py-0.5 rounded-lg text-3xs font-extrabold">
                              Ek Ücret Yok
                            </span>
                          </div>
                        ) : (
                          <div className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs px-3.5 py-2 rounded-2xl flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <span>💬</span> Pet Ücret Politikası
                            </span>
                            <span className="bg-slate-700 text-white px-2.5 py-0.5 rounded-lg text-3xs font-bold">
                              {hotel.extraFee === 'Teyit bekliyor' || !hotel.extraFee ? 'Tesisle Teyit Edin' : hotel.extraFee}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Pet Icons & Weight Limit Row */}
                      <div className="flex items-center justify-between pt-2 border-t border-brand-beige text-xs">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <span className="text-2xs text-gray-700 font-bold">Kabul:</span>
                          {(hotel.allowedPets || ['dog', 'cat']).includes('dog') && <DogIcon className="w-4 h-4 text-brand-navy" title="Köpek" />}
                          {(hotel.allowedPets || ['dog', 'cat']).includes('cat') && <CatIcon className="w-4 h-4 text-amber-600" title="Kedi" />}
                          {(hotel.allowedPets || []).includes('bird') && <BirdIcon className="w-4 h-4 text-sky-600" title="Kuş" />}
                          {(hotel.allowedPets || []).includes('other') && <OtherIcon className="w-4 h-4 text-purple-600" title="Diğer" />}
                        </div>

                        <span className="text-3xs bg-brand-navy-light px-2.5 py-1 rounded-full text-brand-navy font-extrabold">
                          ⚖️ {hotel.weightLimit > 0 ? `Maks. ${hotel.weightLimit} kg` : 'Kilo Sınırı Yok'}
                        </span>
                      </div>

                      {/* Pet Policy Quick Highlights (Odada Yalnız Kalma / Bahçe / Plaj) */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {hotel.canLeaveInRoomAlone && (
                          <span className="text-3xs bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-md font-bold">
                            🚪 Odada Yalnız Kalabilir
                          </span>
                        )}
                        {(hotel.weightLimit === 0 || hotel.weightLimit >= 20) && (
                          <span className="text-3xs bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded-md font-bold">
                            🐕‍🦺 Büyük Irk Uygun
                          </span>
                        )}
                        {(hotel.features || []).slice(0, 2).map((feat, idx) => (
                          <span key={idx} className="text-3xs bg-brand-beige text-brand-navy px-2 py-0.5 rounded-md font-bold">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Detail Link Footer */}
                  <div className="p-4 text-right border-t border-brand-beige/50 mt-2 bg-brand-cream/20">
                    <a
                      href={getHotelPath(hotel)}
                      className="block w-full text-center bg-brand-navy hover:bg-brand-navy-hover text-white transition-colors py-2.5 rounded-full text-xs font-bold border border-brand-navy/10 font-title shadow-xs"
                    >
                      Pet Politikasını & Detayları Gör &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <CatalogPagination page={page} />
      <SeoContentSection content={pageSeoContent} />
    </div>
  );
}
