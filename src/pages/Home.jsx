import React, { useState } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';
import { slugify } from '../../lib/seo-slugs';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import PetTaxiAdBanner from '../components/PetTaxiAdBanner';

export default function Home({ hotels = [], boardings = [], guides = [], experiences = [], ads = [], onViewChange, setSearchFilters }) {
  const [destination, setDestination] = useState('');
  const [petType, setPetType] = useState('all');
  const [accType, setAccType] = useState('all');

  const safeHotels = Array.isArray(hotels) ? hotels : [];
  const safeBoardings = Array.isArray(boardings) ? boardings : [];
  const safeGuides = Array.isArray(guides) ? guides : [];
  const safeExperiences = Array.isArray(experiences) ? experiences : [];

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
  const goToAccWithFilter = (filterFn, title) => {
    setSearchFilters({
      destination: '',
      petType: 'all',
      accType: 'all',
      features: [],
      suitability: 'all',
      weightLimit: 'all',
      extraFeeOnly: false,
      customFilter: filterFn,
      filterTitle: title
    });
    onViewChange('accommodations');
  };

  const featuredHotels = safeHotels
    .filter(h => h.extraFee === 'no')
    .concat(safeHotels.filter(h => h.extraFee !== 'no'))
    .slice(0, 3);
  const featuredBoardings = safeBoardings.slice(0, 2);
  const featuredGuides = safeGuides.slice(0, 3);
  const featuredExperiences = safeExperiences.slice(0, 3);
  const cityLinks = Array.from(safeHotels.reduce((cities, hotel) => {
    if (!hotel || !hotel.city) return cities;
    const citySlug = slugify(hotel.city);
    if (!citySlug) return cities;

    const current = cities.get(citySlug);
    cities.set(citySlug, {
      name: current?.name || hotel.city,
      slug: citySlug,
      count: (current?.count || 0) + 1
    });
    return cities;
  }, new Map()).values()).sort((a, b) => a.name.localeCompare(b.name, 'tr'));

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-brand-yellow/30 via-brand-beige/50 to-brand-cream py-12 md:py-16 border-b border-brand-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-brand-navy/10 rounded-full text-xs font-bold text-brand-navy shadow-sm">
            <span>🐾 Türkiye'nin İlk Doğrulanmış Pet Seyahat Rehberi</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-title text-brand-navy leading-tight">
            Patili Dostunuzla Yolculuğa Çıkın,<br />
            <span className="text-brand-navy underline decoration-brand-yellow decoration-4">Kural Sürprizi Yaşamayın</span>
          </h1>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Türkiye genelindeki evcil hayvan kabul eden otelleri, kabul şartlarını ve acil nöbetçi veteriner kliniklerini editör doğrulamasıyla tek adreste keşfedin.
          </p>

          {/* Quick Filter Bar */}
          <form onSubmit={handleSearch} className="bg-white p-4 md:p-6 rounded-3xl shadow-xl border-2 border-brand-navy/10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            {/* Destination Input */}
            <div className="flex flex-col text-left px-2 border-b md:border-b-0 md:border-r border-brand-beige pb-2 md:pb-0">
              <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider mb-1">Nereye?</label>
              <div className="flex items-center gap-2">
                <LocationIcon className="w-4 h-4 text-brand-navy flex-shrink-0" />
                <input
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
              <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider mb-1">Patili Dostunuz</label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="bg-transparent border-none py-1 text-sm font-medium outline-none cursor-pointer focus:ring-0 focus:border-brand-navy"
              >
                <option value="all">Tüm Evcil Hayvanlar</option>
                <option value="dog">Köpek</option>
                <option value="cat">Kedi</option>
                <option value="bird">Kuş / Diğer</option>
              </select>
            </div>

            {/* Accommodation Type */}
            <div className="flex flex-col text-left px-2 border-t md:border-t-0 md:border-l border-brand-beige pt-2 md:pt-0">
              <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider mb-1">Konaklama Türü</label>
              <select
                value={accType}
                onChange={(e) => setAccType(e.target.value)}
                className="bg-transparent border-none py-1 text-sm font-medium outline-none cursor-pointer focus:ring-0 focus:border-brand-navy"
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

      {/* Main Two Directions Cards */}
      {/* Category Cards - Clean 2-Col Active Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Card 1: Oteller */}
          <div
            onClick={() => onViewChange('accommodations')}
            className="bg-white border-2 border-brand-navy rounded-3xl p-7 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
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

          {/* Active Card 2: Acil Veteriner */}
          <div
            onClick={() => onViewChange('vets')}
            className="bg-white border-2 border-brand-navy/20 hover:border-brand-navy rounded-3xl p-7 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-red-100 text-red-700 text-xs font-bold px-3.5 py-1.5 rounded-bl-xl font-title">
              🏥 7/24 Acil
            </div>
            <div>
              <div className="text-5xl mb-4">🏥</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">7/24 Acil Veterinerler</h2>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                Seyahatinizde acil durumlar için nöbetçi veteriner klinikleri, iletişim numaraları ve acil müdahale noktaları.
              </p>
            </div>
            <span className="text-brand-navy font-bold flex items-center gap-2 mt-6 group-hover:underline text-sm sm:text-base">
              Nöbetçi Klinik Bul &rarr;
            </span>
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
            Tümünü Gör ({hotels.length}) &rarr;
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
                  <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover" />
                  
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
                  
                  {/* Prominent Extra Fee Box */}
                  <div className="pt-1">
                    {hotel.extraFee !== 'no' ? (
                      <div className="bg-red-50 border border-red-200 text-red-700 font-black text-3xs px-3 py-1.5 rounded-xl flex items-center justify-between">
                        <span>🔴 EK PET ÜCRETLİ</span>
                        <span className="font-extrabold">{hotel.extraFee === 'Teyit bekliyor' ? 'Danışınız' : hotel.extraFee}</span>
                      </div>
                    ) : (
                      <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 font-extrabold text-3xs px-3 py-1.5 rounded-xl flex items-center justify-between">
                        <span>🟢 ÜCRETSİZ PET KABULÜ</span>
                        <span>Ek Ücret Alınmıyor</span>
                      </div>
                    )}
                  </div>

                  {/* Accepted Pets & Weight Limit Bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-brand-beige text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <span className="text-3xs text-gray-400 font-medium">Kabul:</span>
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
                <span className="text-xs text-gray-400 group-hover:text-brand-navy" aria-label={`${city.count} tesis`}>{city.count}</span>
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
                filter: (h) => h.extraFee === 'no',
              },
              {
                title: "Kendi Pet Plajı Olan Tesisler",
                desc: "Köpeğinizle beraber güneşlenip yüzebileceğiniz özel plajlı tatil köyleri.",
                icon: "🏖️",
                filter: (h) => h.features.includes("Pet plajı bulunan"),
              },
              {
                title: "Kilo Sınırı Olmayan Oteller",
                desc: "Büyük ırk köpek sahipleri için herhangi bir ağırlık kısıtlaması uygulamayan yerler.",
                icon: "⚖️",
                filter: (h) => h.weightLimit === 0,
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

      {/* Verified Boardings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold font-title text-brand-navy">Doğrulanmış Kedi ve Köpek Otelleri</h2>
            <p className="text-gray-600 text-sm mt-1">Seyahate çıkarken patili dostlarınızı gözünüz arkada kalmadan teslim edebileceğiniz bakım merkezleri</p>
          </div>
          <button onClick={() => onViewChange('boardings')} className="text-brand-navy font-bold hover:underline text-sm hidden sm:block">
            Tümünü Gör ({boardings.length}) &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredBoardings.map(boarding => (
            <div
              key={boarding.id}
              onClick={() => onViewChange('boarding-detail', boarding.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-xs border border-brand-beige hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200">
                <img src={boarding.imageUrl} alt={boarding.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">{boarding.category}</span>
                    <div className="flex items-center text-xs text-brand-green font-bold">
                      <VerifiedBadge className="w-4 h-4 mr-0.5" /> Doğrulandı
                    </div>
                  </div>
                  <h3 className="font-title text-lg font-bold text-gray-900 mt-1">{boarding.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <LocationIcon className="w-3.5 h-3.5 text-brand-earth" /> {boarding.city}, {boarding.district}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-2 leading-relaxed">{boarding.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-beige">
                  {boarding.features.slice(0, 3).map((feat, i) => (
                    <span key={i} className="text-2xs bg-brand-navy-light px-2.5 py-1 rounded text-brand-navy font-bold">
                      {feat}
                    </span>
                  ))}
                  {boarding.features.length > 3 && (
                    <span className="text-2xs bg-brand-beige px-2 py-1 rounded text-gray-500 font-medium">
                      +{boarding.features.length - 3} daha
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pet-Friendly Experiences */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold font-title text-brand-navy">Gidilecek Yerler ve Pet Dostu Deneyimler</h2>
            <p className="text-gray-600 text-sm mt-1">Plaj, yürüyüş rotası, kafe ve şehir içi aktivite önerileri</p>
          </div>
          <button onClick={() => onViewChange('experiences')} className="text-brand-navy font-bold hover:underline text-sm hidden sm:block">
            Tümünü Gör ({experiences.length}) &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredExperiences.map(item => (
            <div
              key={item.id}
              onClick={() => onViewChange('experiences')}
              className="bg-white rounded-3xl overflow-hidden border border-brand-beige hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            >
              <img src={item.imageUrl} alt={item.name} className="w-full h-44 object-cover" />
              <div className="p-5 text-left space-y-2">
                <span className="text-3xs bg-brand-navy-light text-brand-navy px-2.5 py-1 rounded-full font-bold">{item.category}</span>
                <h3 className="font-title text-base font-bold text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.city}, {item.district}</p>
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{item.petPolicy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Travel Guides */}
      <div className="bg-brand-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold font-title text-brand-navy">Popüler Seyahat Rehberleri</h2>
              <p className="text-gray-600 text-sm mt-1">Uçuş kuralları, kedi hazırlığı, köpek rotaları ve uzman veteriner görüşleri</p>
            </div>
            <button onClick={() => onViewChange('guides')} className="text-brand-navy font-bold hover:underline text-sm hidden sm:block">
              Tüm Rehberleri Gör &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map(guide => (
              <div
                key={guide.id}
                onClick={() => onViewChange('guide-detail', guide.id)}
                className="bg-white rounded-3xl overflow-hidden border border-brand-beige hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-brand-navy-light text-brand-navy px-2.5 py-0.5 rounded-full font-bold">
                      {guide.category}
                    </span>
                    <span className="text-gray-400 font-medium">{guide.updatedAt}</span>
                  </div>
                  <h3 className="font-title text-base font-bold text-gray-900 hover:text-brand-navy transition-colors line-clamp-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-650 line-clamp-3 leading-relaxed">
                    {guide.summary}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-brand-beige flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={guide.author.imageUrl} alt={guide.author.name} className="w-8 h-8 rounded-full object-cover" />
                    <div className="text-left">
                      <p className="text-xs font-bold text-gray-800">{guide.author.name}</p>
                      <p className="text-3xs text-gray-400">{guide.author.role}</p>
                    </div>
                  </div>
                  {guide.vetChecked && (
                    <span className="text-3xs bg-brand-orange-light text-brand-orange hover:bg-brand-orange hover:text-white px-2 py-1 rounded font-bold border border-brand-orange/30">
                      🩺 Veteriner Onaylı
                    </span>
                  )}
                </div>
              </div>
            ))}
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
