import React, { useState } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';

export default function Home({ hotels, boardings, guides, experiences = [], ads = [], onViewChange, setSearchFilters }) {
  const [destination, setDestination] = useState('');
  const [petType, setPetType] = useState('all');
  const [accType, setAccType] = useState('all');

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

  const featuredHotels = hotels.slice(0, 3);
  const featuredBoardings = boardings.slice(0, 2);
  const featuredGuides = guides.slice(0, 3);
  const featuredExperiences = experiences.slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <div className="relative bg-brand-navy text-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1600&q=80"
            alt="Evcil hayvanla seyahat eden insan"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-title leading-tight">
            Dostunuzla birlikte kalabileceğiniz yerleri keşfedin
          </h1>
          <p className="text-lg sm:text-xl text-gray-250 font-light max-w-2xl mx-auto">
            Kedi, köpek, kuş ve diğer dostlarınızı hangi koşullarda kabul ettiğini açıkça belirten doğrulanmış tesisleri karşılaştırın
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white p-4 rounded-3xl border-2 border-brand-navy shadow-xl grid grid-cols-1 md:grid-cols-4 gap-3 text-gray-900 mt-10">
            {/* Destination */}
            <div className="flex flex-col text-left px-2">
              <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider mb-1">Nereye?</label>
              <input
                type="text"
                placeholder="Şehir veya ilçe girin"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-transparent border-0 border-b border-transparent hover:border-gray-300 focus:border-brand-navy focus:ring-0 py-1 text-sm font-medium outline-none"
              />
            </div>

            {/* Pet Type */}
            <div className="flex flex-col text-left px-2 border-t md:border-t-0 md:border-l border-brand-beige pt-2 md:pt-0">
              <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider mb-1">Hangi Dostunuzla?</label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="bg-transparent border-none py-1 text-sm font-medium outline-none cursor-pointer focus:ring-0 focus:border-brand-navy"
              >
                <option value="all">Farketmez</option>
                <option value="dog">Köpek</option>
                <option value="cat">Kedi</option>
                <option value="bird">Kuş</option>
                <option value="other">Diğer Dostlar</option>
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
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold rounded-full flex items-center justify-center gap-2 py-3 px-6 transition-colors shadow-md mt-2 md:mt-0 font-title border-2 border-brand-navy"
            >
              <span>🔍</span> Tesis Ara
            </button>
          </form>
        </div>
      </div>

      {/* Main Two Directions Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { view: 'accommodations', icon: '🏨', title: 'Konakla', text: 'Otel, villa, bungalov ve kamp alanlarını pet politikalarıyla karşılaştır.' },
          { view: 'boardings', icon: '🏡', title: 'Bırak', text: 'Kedi ve köpek otelleri, gündüz bakım ve ev tipi bakım merkezleri.' },
          { view: 'experiences', icon: '🌊', title: 'Gez', text: 'Plaj, park, kafe, rota ve şehir içi pet dostu deneyimler.' },
          { view: 'taxis', icon: '🚕', title: 'Git', text: 'Pet taksi, şehir içi transfer ve veteriner ulaşımı.' },
          { view: 'vets', icon: '🏥', title: 'Acil', text: '7/24 veteriner, yoğun bakım ve nöbetçi klinik bilgileri.' },
        ].map(item => (
          <div
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className="bg-white border-2 border-brand-navy/10 rounded-3xl p-5 hover:shadow-lg hover:border-brand-navy transition-all duration-300 cursor-pointer flex flex-col justify-between group min-h-[190px]"
          >
            <div>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h2 className="text-xl font-bold font-title text-brand-navy group-hover:opacity-80 transition-opacity">{item.title}</h2>
              <p className="text-gray-700 mt-2 leading-relaxed text-xs">{item.text}</p>
            </div>
            <span className="text-brand-navy font-bold flex items-center gap-2 mt-5 group-hover:underline text-xs">
              Keşfet &rarr;
            </span>
          </div>
        ))}
      </div>

      {/* Featured Pet-Friendly Hotels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold font-title text-brand-navy">Öne Çıkan Pet-Friendly Oteller</h2>
            <p className="text-gray-600 text-sm mt-1">Editör ekibimiz tarafından test edilip tam doğrulanan seçkin tesisler</p>
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
              className="bg-white rounded-3xl overflow-hidden shadow-xs border border-brand-beige hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 bg-gray-200">
                  <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-brand-navy text-white text-3xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                    <VerifiedBadge className="w-3.5 h-3.5 text-white" />
                    <span>Doğrulandı</span>
                  </div>
                  {/* Suitability Level */}
                  <div className={`absolute bottom-3 right-3 text-3xs px-3 py-1 rounded-md font-bold text-white shadow-md ${
                    hotel.suitability === 3 ? 'bg-indigo-650' : hotel.suitability === 2 ? 'bg-brand-green' : 'bg-brand-earth'
                  }`}>
                    {hotel.suitability === 3 ? 'Deneyim Sunuyor' : hotel.suitability === 2 ? 'Pet Dostu' : 'Kabul Ediyor'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-3xs text-gray-500 font-medium">
                    <span>{hotel.type}</span>
                    <span className="flex items-center gap-1">
                      <LocationIcon className="w-3.5 h-3.5 text-brand-earth" /> {hotel.city}, {hotel.district}
                    </span>
                  </div>
                  <h3 className="font-title text-base font-bold text-gray-900 line-clamp-1">{hotel.name}</h3>
                  
                  {/* Accepted Pets Bar */}
                  <div className="flex items-center gap-2 pt-1 border-t border-brand-beige">
                    <span className="text-3xs text-gray-400">Kabul Edilen:</span>
                    <div className="flex gap-1.5 text-gray-600">
                      {hotel.allowedPets.includes('dog') && <DogIcon className="w-4 h-4 text-brand-green" title="Köpek" />}
                      {hotel.allowedPets.includes('cat') && <CatIcon className="w-4 h-4 text-amber-600" title="Kedi" />}
                      {hotel.allowedPets.includes('bird') && <BirdIcon className="w-4 h-4 text-sky-600" title="Kuş" />}
                      {hotel.allowedPets.includes('other') && <OtherIcon className="w-4 h-4 text-purple-600" title="Diğer Dostlar" />}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-4xs bg-brand-beige px-2 py-0.5 rounded text-gray-600 font-medium">
                      {hotel.weightLimit > 0 ? `Max ${hotel.weightLimit} Kg` : 'Kilo Sınırı Yok'}
                    </span>
                    <span className="text-4xs bg-brand-beige px-2 py-0.5 rounded text-gray-600 font-medium">
                      {hotel.extraFee === 'no' ? 'Ek Ücretsiz' : 'Ek Ücretli'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button className="w-full bg-brand-navy-light hover:bg-brand-navy text-brand-navy hover:text-white transition-colors py-2 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 border border-brand-navy/10">
                  Detayları İncele
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore by City */}
      <div className="bg-brand-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-title text-brand-navy">Şehre Göre Keşfet</h2>
            <p className="text-gray-600 mt-2">Türkiye'nin en popüler evcil hayvan dostu destinasyonlarını listeledik</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Bodrum', count: '45 Tesis', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80', query: 'Bodrum' },
              { name: 'Antalya', count: '32 Tesis', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=300&q=80', query: 'Antalya' },
              { name: 'Kapadokya', count: '18 Tesis', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80', query: 'Nevşehir' },
              { name: 'Fethiye', count: '24 Tesis', img: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=300&q=80', query: 'Fethiye' },
            ].map(city => (
              <div
                key={city.name}
                onClick={() => {
                  setSearchFilters({
                    destination: city.query,
                    petType: 'all',
                    accType: 'all',
                    features: [],
                    suitability: 'all',
                    weightLimit: 'all',
                    extraFeeOnly: false
                  });
                  onViewChange('accommodations');
                }}
                className="relative rounded-3xl overflow-hidden h-40 group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                  <h4 className="font-title font-bold text-lg">{city.name}</h4>
                  <span className="text-xs text-gray-300 font-light">{city.count} doğrulanmış</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
              alert("Otel önerme formu yakında aktif olacaktır! İlginiz için teşekkürler.");
            }}
            className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-3 rounded-full text-sm font-bold transition-colors font-title shadow-sm border border-brand-navy/10"
          >
            Tesis Önerisinde Bulun
          </button>
        </div>
      </div>
    </div>
  );
}
