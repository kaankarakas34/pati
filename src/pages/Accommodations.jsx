import React, { useState, useEffect } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';
import AdBanner from '../components/AdBanner';

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
  const filteredHotels = hotels.filter(hotel => {
    // 1. Custom programmatic filter (e.g., from Home selections like "No Extra Fee")
    if (searchFilters.customFilter) {
      return searchFilters.customFilter(hotel);
    }

    // 2. City Filter
    if (selectedCity && !hotel.city.toLowerCase().includes(selectedCity.toLowerCase()) && !hotel.district.toLowerCase().includes(selectedCity.toLowerCase())) {
      return false;
    }

    // 3. Pet Type Filter
    if (selectedPet !== 'all' && !hotel.allowedPets.includes(selectedPet)) {
      return false;
    }

    // 4. Accommodation Type Filter
    if (selectedAccType !== 'all' && hotel.type !== selectedAccType) {
      return false;
    }

    // 5. Suitability Level Filter
    if (selectedSuitability !== 'all' && hotel.suitability !== parseInt(selectedSuitability)) {
      return false;
    }

    // 6. Weight Limit Filter
    if (weightLimitFilter !== 'all') {
      if (weightLimitFilter === 'no-limit') {
        if (hotel.weightLimit !== 0) return false;
      } else {
        const maxWeight = parseInt(weightLimitFilter);
        if (hotel.weightLimit > 0 && hotel.weightLimit < maxWeight) return false;
      }
    }

    // 7. Extra Fee Filter
    if (extraFeeOnly && hotel.extraFee !== 'no') {
      return false;
    }

    // 8. Dynamic Features Filter (must match all selected features)
    for (const feat of selectedFeatures) {
      if (!hotel.features.includes(feat)) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-brand-beige pb-6 mb-8 text-left">
        <h1 className="text-3xl font-bold font-title text-brand-navy">Patiyle Konakla</h1>
        <p className="text-gray-600 text-sm mt-1.5">
          {searchFilters.filterTitle 
            ? `Özel Seçki: ${searchFilters.filterTitle} (${filteredHotels.length} Tesis listeleniyor)`
            : `Dostlarınızla birlikte kalabileceğiniz doğrulanmış konaklama tesisleri (${filteredHotels.length} Tesis listeleniyor)`
          }
        </p>
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
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left max-h-[85vh] overflow-y-auto">
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
              <option value="dog">Köpek Kabul Eden</option>
              <option value="cat">Kedi Kabul Eden</option>
              <option value="bird">Kuş Kabul Eden</option>
              <option value="other">Diğer Hayvanları Kabul Eden</option>
            </select>
          </div>

          {/* Tesis Türü */}
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
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Dost Uygunluk Seviyesi</label>
            <select
              value={selectedSuitability}
              onChange={(e) => setSelectedSuitability(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0 bg-white cursor-pointer"
            >
              <option value="all">Tüm Seviyeler</option>
              <option value="1">1. Evcil Hayvan Kabul Ediyor</option>
              <option value="2">2. Evcil Hayvan Dostu</option>
              <option value="3">3. Evcil Hayvan Deneyimi Sunuyor</option>
            </select>
          </div>

          {/* Kilo Sınırı */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ağırlık / Kilo Sınırı</label>
            <div className="space-y-1 text-sm text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer py-0.5">
                <input
                  type="radio"
                  name="weightLimit"
                  checked={weightLimitFilter === 'all'}
                  onChange={() => setWeightLimitFilter('all')}
                  className="text-brand-navy focus:ring-brand-navy"
                />
                Farketmez
              </label>
              <label className="flex items-center gap-2 cursor-pointer py-0.5">
                <input
                  type="radio"
                  name="weightLimit"
                  checked={weightLimitFilter === '10'}
                  onChange={() => setWeightLimitFilter('10')}
                  className="text-brand-navy focus:ring-brand-navy"
                />
                En az 10 kg kabul eden
              </label>
              <label className="flex items-center gap-2 cursor-pointer py-0.5">
                <input
                  type="radio"
                  name="weightLimit"
                  checked={weightLimitFilter === '15'}
                  onChange={() => setWeightLimitFilter('15')}
                  className="text-brand-navy focus:ring-brand-navy"
                />
                En az 15 kg kabul eden
              </label>
              <label className="flex items-center gap-2 cursor-pointer py-0.5">
                <input
                  type="radio"
                  name="weightLimit"
                  checked={weightLimitFilter === 'no-limit'}
                  onChange={() => setWeightLimitFilter('no-limit')}
                  className="text-brand-navy focus:ring-brand-navy"
                />
                Kilo Sınırı Olmayanlar
              </label>
            </div>
          </div>

          {/* Ek Ücret Durumu */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Konaklama Ücreti</label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={extraFeeOnly}
                onChange={(e) => setExtraFeeOnly(e.target.checked)}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
              />
              Sadece Ek Ücret Almayanlar
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
          <div className="pt-4 border-t border-brand-beige">
            <AdBanner type="square" />
          </div>
        </aside>

        {/* Mobile Filters Toggle Button */}
        <div className="lg:hidden w-full mb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="w-full bg-brand-green hover:bg-brand-navy-hover text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm font-title"
          >
            <span>⚙️</span> Detaylı Filtreleri Aç
          </button>
        </div>

        {/* Mobile Filters Modal */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
            <div className="bg-white w-4/5 max-w-sm h-full overflow-y-auto p-6 text-left flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-brand-beige mb-6">
                  <h3 className="font-title font-bold text-lg text-gray-900">Filtreleri Özelleştir</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-500 font-bold text-xl">&times;</button>
                </div>

                <div className="space-y-6">
                  {/* City */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Şehir / İlçe</label>
                    <input
                      type="text"
                      placeholder="Örn: Bodrum"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full text-sm border border-gray-300 rounded-lg p-2 outline-none focus:border-brand-green"
                    />
                  </div>

                  {/* Pet Allowed */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Kabul Edilen Hayvan</label>
                    <select
                      value={selectedPet}
                      onChange={(e) => setSelectedPet(e.target.value)}
                      className="w-full text-sm border border-gray-300 rounded-lg p-2 outline-none focus:border-brand-green bg-white cursor-pointer"
                    >
                      <option value="all">Tüm Hayvanlar</option>
                      <option value="dog">Köpek Kabul Eden</option>
                      <option value="cat">Kedi Kabul Eden</option>
                      <option value="bird">Kuş Kabul Eden</option>
                      <option value="other">Diğer Hayvanları Kabul Eden</option>
                    </select>
                  </div>

                  {/* Tesis Türü */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tesis Türü</label>
                    <select
                      value={selectedAccType}
                      onChange={(e) => setSelectedAccType(e.target.value)}
                      className="w-full text-sm border border-gray-300 rounded-lg p-2 outline-none focus:border-brand-green bg-white cursor-pointer"
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
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Dost Uygunluk Seviyesi</label>
                    <select
                      value={selectedSuitability}
                      onChange={(e) => setSelectedSuitability(e.target.value)}
                      className="w-full text-sm border border-gray-300 rounded-lg p-2 outline-none focus:border-brand-green bg-white"
                    >
                      <option value="all">Tüm Seviyeler</option>
                      <option value="1">1. Evcil Hayvan Kabul Ediyor</option>
                      <option value="2">2. Evcil Hayvan Dostu</option>
                      <option value="3">3. Evcil Hayvan Deneyimi Sunuyor</option>
                    </select>
                  </div>

                  {/* Kilo Sınırı */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Kilo Sınırı</label>
                    <select
                      value={weightLimitFilter}
                      onChange={(e) => setWeightLimitFilter(e.target.value)}
                      className="w-full text-sm border border-gray-300 rounded-lg p-2 outline-none focus:border-brand-green bg-white"
                    >
                      <option value="all">Farketmez</option>
                      <option value="10">En az 10 kg kabul eden</option>
                      <option value="15">En az 15 kg kabul eden</option>
                      <option value="no-limit">Kilo Sınırı Olmayanlar</option>
                    </select>
                  </div>

                  {/* Fee */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={extraFeeOnly}
                        onChange={(e) => setExtraFeeOnly(e.target.checked)}
                        className="rounded border-gray-300 text-brand-navy"
                      />
                      Sadece Ek Ücret Almayanlar
                    </label>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-2 border-t border-brand-beige">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Hizmetler</label>
                    {filterableFeatures.map(feat => (
                      <label key={feat} className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feat)}
                          onChange={() => handleFeatureToggle(feat)}
                          className="rounded border-gray-300 text-brand-navy mt-0.5"
                        />
                        <span>{feat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-beige flex gap-2">
                <button
                  onClick={() => { resetFilters(); setMobileFiltersOpen(false); }}
                  className="w-1/2 border-2 border-gray-300 text-gray-700 py-2.5 rounded-full text-xs font-bold hover:bg-gray-50"
                >
                  Sıfırla
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-1/2 bg-brand-navy text-white py-2.5 rounded-full text-xs font-bold hover:bg-brand-navy-hover"
                >
                  Uygula
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Accommodations Listings Grid */}
        <section className="col-span-1 lg:col-span-3 space-y-6">
          {filteredHotels.length === 0 ? (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto mt-8">
              <span className="text-5xl block mb-4">🔍</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Aramanızla Eşleşen Tesis Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Seçtiğiniz filtre kombinasyonuna sahip doğrulanmış tesis bulunmamaktadır. Lütfen filtreleri gevşeterek tekrar aramayı deneyin.
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
              {filteredHotels.map(hotel => (
                <div
                  key={hotel.id}
                  onClick={() => onViewChange('accommodation-detail', hotel.id)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs border-2 border-brand-navy/10 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Hotel Image Area */}
                    <div className="relative h-48 bg-gray-200">
                      <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover" />
                      
                      {/* Verification Badge */}
                      <div className="absolute top-3 left-3 bg-brand-navy text-white text-3xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                        <VerifiedBadge className="w-4 h-4 text-white" />
                        <span>Doğrulandı</span>
                      </div>
                      
                      {/* Suitability Level */}
                      <div className={`absolute bottom-3 right-3 text-xs px-3 py-1 rounded-md font-bold text-white shadow-md ${
                        hotel.suitability === 3 ? 'bg-indigo-600' : hotel.suitability === 2 ? 'bg-brand-green' : 'bg-brand-earth'
                      }`}>
                        {hotel.suitability === 3 ? 'Deneyim Sunuyor' : hotel.suitability === 2 ? 'Pet Dostu' : 'Kabul Ediyor'}
                      </div>
                    </div>

                    {/* Hotel Specs content */}
                    <div className="p-5 text-left space-y-3">
                      <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                        <span>{hotel.type}</span>
                        <span className="flex items-center gap-1">
                          <LocationIcon className="w-3.5 h-3.5 text-brand-earth" /> {hotel.city}, {hotel.district}
                        </span>
                      </div>

                      <h3 className="font-title text-lg font-bold text-gray-900 line-clamp-1">{hotel.name}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{hotel.description}</p>

                      {/* Pet Icons Row */}
                      <div className="flex items-center gap-2 pt-3 border-t border-brand-beige">
                        <span className="text-2xs text-gray-400">Dost Uygunluğu:</span>
                        <div className="flex gap-1.5 text-gray-600">
                          {hotel.allowedPets.includes('dog') && <DogIcon className="w-4.5 h-4.5 text-brand-navy" title="Köpek" />}
                          {hotel.allowedPets.includes('cat') && <CatIcon className="w-4.5 h-4.5 text-amber-600" title="Kedi" />}
                          {hotel.allowedPets.includes('bird') && <BirdIcon className="w-4.5 h-4.5 text-sky-600" title="Kuş" />}
                          {hotel.allowedPets.includes('other') && <OtherIcon className="w-4.5 h-4.5 text-purple-600" title="Diğer Dostlar" />}
                        </div>
                      </div>

                      {/* Important highlights */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        <span className="text-2xs bg-brand-navy-light px-2.5 py-1 rounded-full text-brand-navy font-bold text-3xs">
                          ⚖️ {hotel.weightLimit > 0 ? `Limit: ${hotel.weightLimit} kg` : 'Kilo Sınırı Yok'}
                        </span>
                        <span className="text-2xs bg-brand-navy-light px-2.5 py-1 rounded-full text-brand-navy font-bold text-3xs">
                          💰 {hotel.extraFee === 'no' ? 'Ek Ücret Yok' : `Ek Ücret: ${hotel.extraFee}`}
                        </span>
                      </div>

                      {/* Features summary tags */}
                      <div className="flex flex-wrap gap-1 pt-1.5">
                        {hotel.features.slice(0, 2).map((feat, idx) => (
                          <span key={idx} className="text-3xs bg-brand-beige text-brand-navy px-2.5 py-1 rounded-full font-bold text-3xs">
                            {feat}
                          </span>
                        ))}
                        {hotel.features.length > 2 && (
                          <span className="text-3xs bg-brand-beige text-brand-navy/60 px-2.5 py-1 rounded-full font-bold text-3xs">
                            +{hotel.features.length - 2} daha
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Detail Link Footer */}
                  <div className="p-5 pt-0 text-left flex justify-between items-center border-t border-brand-beige/50 mt-4 bg-brand-cream/20">
                    <span className="text-3xs text-gray-400">Son Doğrulama: {hotel.lastVerified}</span>
                    <button className="bg-brand-navy hover:bg-brand-navy-hover text-white transition-colors px-5 py-2.5 rounded-full text-xs font-bold border border-brand-navy/10 font-title">
                      Detayları İncele &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
