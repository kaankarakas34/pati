import React, { useState, useEffect } from 'react';
import { 
  DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon, StarIcon,
  HotelIcon, DiningIcon, TaxiCarIcon, BoardingHomeIcon, DogWalkerIcon, VetClinicIcon,
  MoneyIcon, BeachIcon, ScaleIcon, SearchIcon, ArrowRightIcon
} from '../components/PetIcons';
import { Calendar, Users, Heart, ShoppingBag, Leaf, Sparkles } from 'lucide-react';
import { slugify, getHotelPath } from '../../lib/seo-slugs';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import PetTaxiAdBanner from '../components/PetTaxiAdBanner';
import PawAnimationDivider from '../components/PawAnimationDivider';
import CloudWaveDivider from '../components/CloudWaveDivider';
import HeroSection from '../components/HeroSection';

const FALLBACK_CITIES = [
  { name: 'İstanbul', slug: 'istanbul' },
  { name: 'Muğla', slug: 'mugla' },
  { name: 'Antalya', slug: 'antalya' },
  { name: 'İzmir', slug: 'izmir' },
  { name: 'Balıkesir', slug: 'balikesir' },
  { name: 'Aydın', slug: 'aydin' },
  { name: 'Bolu', slug: 'bolu' },
  { name: 'Çanakkale', slug: 'canakkale' },
  { name: 'Nevşehir', slug: 'nevsehir' },
  { name: 'Sakarya', slug: 'sakarya' }
];

const FALLBACK_FEATURED_HOTELS = [
  {
    id: 'labranda-alantur-resort',
    name: 'Labranda Alantur Resort',
    type: 'Tatil Köyü',
    city: 'Antalya',
    district: 'Alanya',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=75',
    verified: true,
    baseTrustScore: 9.6,
    suitability: 3,
    extraFee: 'no',
    weightLimit: 0,
    hasGarden: true,
    allowedPets: ['dog', 'cat']
  },
  {
    id: 'swissotel-the-bosphorus',
    name: 'Swissotel The Bosphorus',
    type: 'Otel',
    city: 'İstanbul',
    district: 'Beşiktaş',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=75',
    verified: true,
    baseTrustScore: 9.4,
    suitability: 3,
    extraFee: 'no',
    weightLimit: 15,
    hasGarden: true,
    allowedPets: ['dog', 'cat']
  },
  {
    id: 'radisson-blu-resort-cesme',
    name: 'Radisson Blu Resort & Spa Çeşme',
    type: 'Resort',
    city: 'İzmir',
    district: 'Çeşme',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=75',
    verified: true,
    baseTrustScore: 9.2,
    suitability: 3,
    extraFee: 'no',
    weightLimit: 0,
    hasGarden: true,
    allowedPets: ['dog', 'cat']
  }
];

export default function Home({ onViewChange, setSearchFilters, setVenueSearch }) {
  const [activeTab, setActiveTab] = useState('hotel'); // 'hotel' | 'venue'
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [guests, setGuests] = useState('2 Misafir, 1 Patili Dost');
  const [petType, setPetType] = useState('all');
  const [accType, setAccType] = useState('all');

  const [preview, setPreview] = useState({
    hotels: FALLBACK_FEATURED_HOTELS,
    cities: [],
    loading: false,
    error: ''
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function read(path) {
      try {
        const response = await fetch(path, { signal: controller.signal });
        if (!response.ok) {
          let errorMsg = 'Kayıtlar yüklenemedi.';
          try {
            const errJson = await response.json();
            if (errJson?.error) errorMsg = errJson.error;
          } catch {}
          throw new Error(errorMsg);
        }
        const text = await response.text();
        try {
          return JSON.parse(text);
        } catch {
          throw new Error('Geçersiz sunucu yanıtı.');
        }
      } catch (err) {
        if (err.name === 'AbortError') return null;
        throw err;
      }
    }

    Promise.all([
      read('/api/hotels?limit=3&envelope=true&extraFeeOnly=true'),
      read('/api/locations/cities')
    ])
      .then(([hotelsData, citiesData]) => {
        if (!isMounted) return;
        setPreview({
          hotels: hotelsData?.items || FALLBACK_FEATURED_HOTELS,
          cities: citiesData?.items || citiesData || [],
          loading: false,
          error: ''
        });
      })
      .catch((err) => {
        if (!isMounted) return;
        setPreview(prev => ({
          ...prev,
          loading: false,
          error: err.message || 'Veriler yüklenirken bir sorun oluştu.'
        }));
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [attempt]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (activeTab === 'venue') {
      setVenueSearch(destination.trim());
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

  const featuredHotels = preview.hotels.length > 0 ? preview.hotels : FALLBACK_FEATURED_HOTELS;
  const cityLinks = preview.cities.length > 0
    ? preview.cities.map(({ city }) => ({ name: city, slug: slugify(city) }))
    : FALLBACK_CITIES;

  return (
    <div className="w-full">
      <HeroSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        destination={destination}
        setDestination={setDestination}
        travelDates={travelDates}
        setTravelDates={setTravelDates}
        petType={petType}
        setPetType={setPetType}
        handleSearch={handleSearch}
      />

      {/* =========================================================================
          SECTION 2: ANA ODAK & HİZMETLER (KATEGORİLER)
          Warm sunny custard cream palette (#fefcef)
          Transition to Section 3: Mint/Sage Cloud Divider (#eff8f3)
          ========================================================================= */}
      <section className="bg-[#fefcef] py-14 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-extrabold uppercase font-title">
              Nereye Gitmek İstersin?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-title text-brand-dark">
              Patili Dostunla Hayatın Tadını Çıkar
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              Türkiye'nin dört bir yanındaki doğrulanmış otelleri ve sosyal mekanları keşfet.
            </p>
          </div>

          {/* 2 Main Hero Focus Cards: Oteller & Patili Mekanlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Pati Dostu Oteller */}
            <a
              href="/evcil-hayvan-dostu-oteller"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  onViewChange('accommodations');
                }
              }}
              className="group bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-3 border-purple-200/80 hover:border-brand-purple shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-lavender">
                  <img
                    src="/images/pet-hotel.jpg"
                    alt="Pati Dostu Oteller"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-dark/95 text-white text-xs px-3.5 py-1.5 rounded-full font-extrabold font-title shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                    <span>🐾</span>
                    <span>100+ Doğrulanmış Otel</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3 text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="w-10 h-10 rounded-full bg-brand-lavender text-brand-purple flex items-center justify-center font-bold text-base shadow-xs">
                      🏨
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-brand-dark group-hover:text-brand-purple transition-colors">
                      Pati Dostu Oteller
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Kedi ve köpek kabul eden tatil köyleri, butik oteller ve bungalovlar. Kilo sınırı, plaj, bahçe ve sıfır ek ücret filtreleriyle arayın.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between border-t border-purple-100">
                <span className="text-xs sm:text-sm font-extrabold text-brand-purple font-title">
                  Sıfır Ek Ücretli Tesisleri Keşfet
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple text-white shadow-md group-hover:scale-110 group-hover:bg-brand-dark transition-all">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </span>
              </div>
            </a>

            {/* Card 2: Patili Mekanlar (Kafe, Restoran & Bar) */}
            <a
              href="/patili-mekanlar"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  onViewChange('experiences');
                }
              }}
              className="group bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-3 border-orange-200/80 hover:border-brand-coral shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-softcoral">
                  <img
                    src="/images/pet-cafe.jpg"
                    alt="Patili Mekanlar - Kafe ve Restoranlar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-coral text-white text-xs px-3.5 py-1.5 rounded-full font-extrabold font-title shadow-md flex items-center gap-1.5">
                    <span>☕</span>
                    <span>60+ Doğrulanmış Mekan</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3 text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="w-10 h-10 rounded-full bg-brand-softcoral text-brand-coral flex items-center justify-center font-bold text-base shadow-xs">
                      ☕
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-brand-dark group-hover:text-brand-coral transition-colors">
                      Patili Mekanlar
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Dostunuzla oturup kahve içebileceğiniz, açık bahçeli veya teraslı kedi ve köpek dostu kafe, restoran ve sosyal mekanları keşfedin.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between border-t border-orange-100">
                <span className="text-xs sm:text-sm font-extrabold text-brand-coral font-title">
                  Şehrindeki Mekanları İncele
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-coral text-white shadow-md group-hover:scale-110 group-hover:bg-brand-dark transition-all">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </span>
              </div>
            </a>
          </div>

          {/* 4 Supporting Service Cards */}
          <div className="space-y-6 pt-4">
            <div className="text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-extrabold uppercase font-title">
                  Tam Kapsamlı Çözümler
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-brand-dark mt-1">
                  Patili Hizmetler & Acil Servisler
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md text-center sm:text-right font-medium">
                Yolculuktan konaklamaya, günlük gezintiden 7/24 veteriner desteğine kadar her an yanınızdayız.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Service 1: Pet Taksi */}
              <a
                href="/pet-taksi"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                    e.preventDefault();
                    onViewChange('taxis');
                  }
                }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-purple-100 hover:border-brand-purple shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-brand-lavender">
                    <img
                      src="/images/pet-taxi.jpg"
                      alt="Pet Taksi Servisi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-left space-y-1.5">
                    <span className="text-2xs font-extrabold uppercase text-brand-purple tracking-wider font-title">Konforlu Ulaşım</span>
                    <h4 className="text-xl font-bold font-title text-brand-dark group-hover:text-brand-purple transition-colors">
                      Pet Taksi
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Kedi ve köpekler için özel donanımlı, güvenli transfer hizmetleri.
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-brand-purple font-title">
                  <span>Taksileri İncele</span>
                  <span>&rarr;</span>
                </div>
              </a>

              {/* Service 2: Pet Otel */}
              <a
                href="/kedi-kopek-otelleri"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                    e.preventDefault();
                    onViewChange('boardings');
                  }
                }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-blue-100 hover:border-brand-blue shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-brand-softblue">
                    <img
                      src="/images/pet-boarding.jpg"
                      alt="Pet Otel & Pansiyon"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-left space-y-1.5">
                    <span className="text-2xs font-extrabold uppercase text-brand-blue tracking-wider font-title">Güvenli Konaklama</span>
                    <h4 className="text-xl font-bold font-title text-brand-dark group-hover:text-brand-blue transition-colors">
                      Pet Otel
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Siz seyahatteyken dostunuza sevgiyle bakan doğrulanmış oteller ve pansiyonlar.
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-brand-blue font-title">
                  <span>Otelleri Gör</span>
                  <span>&rarr;</span>
                </div>
              </a>

              {/* Service 3: Köpek Gezdiriciler */}
              <a
                href="/kopek-gezdiricileri"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                    e.preventDefault();
                    onViewChange('dog-walkers');
                  }
                }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-lime-200 hover:border-brand-lime shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-brand-softlime">
                    <img
                      src="/images/pet-walker.jpg"
                      alt="Köpek Gezdirici Servisi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-left space-y-1.5">
                    <span className="text-2xs font-extrabold uppercase text-brand-lime tracking-wider font-title">Aktif Günler</span>
                    <h4 className="text-xl font-bold font-title text-brand-dark group-hover:text-brand-lime transition-colors">
                      Köpek Gezdiriciler
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Yoğun günlerde dostunuzu güvenle gezdirecek profesyonel gezdiriciler.
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-brand-lime font-title">
                  <span>Gezdirici Bul</span>
                  <span>&rarr;</span>
                </div>
              </a>

              {/* Service 4: 7/24 Veterinerler */}
              <a
                href="/veterinerler"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                    e.preventDefault();
                    onViewChange('vets');
                  }
                }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-coral-200 hover:border-brand-coral shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-brand-softcoral">
                    <img
                      src="/images/pet-vet.jpg"
                      alt="7/24 Acil Veteriner Klinikleri"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-left space-y-1.5">
                    <span className="text-2xs font-extrabold uppercase text-brand-coral tracking-wider font-title">7/24 Kesintisiz Sağlık</span>
                    <h4 className="text-xl font-bold font-title text-brand-dark group-hover:text-brand-coral transition-colors">
                      7/24 Veterinerler
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Acil durumlarda en yakın nöbetçi klinik ve uzman hekim bilgileri.
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-brand-coral font-title">
                  <span>Nöbetçi Klinik Bul</span>
                  <span>&rarr;</span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Scalloped Cloud Divider transitioning into Section 3 (#EFF8F3) */}
        <CloudWaveDivider fill="#eff8f3" className="mt-14 sm:mt-20 -mb-14 sm:-mb-20" />
      </section>


      {/* =========================================================================
          SECTION 3: ÖNE ÇIKAN PET DOSTU OTELLER
          Fresh morning mint / light sage palette (#eff8f3)
          Transition to Section 4: Soft Peach/Coral Cloud Divider (#fef3ed)
          ========================================================================= */}
      <section className="bg-[#eff8f3] py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-extrabold mb-2 font-title shadow-xs">
                <span>🐾 ÜCRETSİZ PET KABUL EDEN SEÇKİN TESİSLER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-title text-brand-dark">
                Öne Çıkan Pet Dostu Oteller
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-1 font-medium">
                Ek pet ücreti talep etmeyen ve evcil hayvanlara en yüksek konforu sunan doğrulanmış oteller
              </p>
            </div>
            
            <button 
              onClick={() => onViewChange('accommodations')} 
              className="text-brand-purple hover:text-brand-dark font-extrabold text-sm sm:text-base font-title flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
            >
              <span>Tüm Otelleri Gör</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHotels.map(hotel => {
              const hotelUrl = getHotelPath(hotel);
              return (
                <a
                  key={hotel.id}
                  href={hotelUrl}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      onViewChange('accommodation-detail', hotel.id);
                    }
                  }}
                  className="group bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl border-2 border-emerald-100/80 hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between block no-underline text-inherit"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-video w-full bg-gray-200 overflow-hidden">
                      <img
                        src={hotel.imageUrl?.includes('images.unsplash.com') ? hotel.imageUrl.replace(/w=\d+/, 'w=600').replace(/q=\d+/, 'q=75') : hotel.imageUrl}
                        alt={hotel.name}
                        width="600"
                        height="338"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {hotel.verified !== false && (
                        <div className="absolute top-3 left-3 bg-brand-dark text-white text-3xs px-3 py-1 rounded-full font-extrabold font-title flex items-center gap-1 shadow-sm">
                          <VerifiedBadge className="w-3.5 h-3.5 text-white" />
                          <span>Doğrulanmış Tesis</span>
                        </div>
                      )}

                      {/* Suitability Score Badge */}
                      <div className="absolute bottom-3 right-3 text-xs px-3.5 py-1 rounded-full font-black text-white shadow-md bg-brand-dark/90 backdrop-blur-xs flex items-center gap-1.5 border border-white/20">
                        <StarIcon className="w-3.5 h-3.5 text-brand-lime fill-current" />
                        <span>Dost Uygunluğu:</span>
                        <span className="text-brand-lime font-extrabold">
                          {(hotel.baseTrustScore || (hotel.suitability === 3 ? 9.5 : hotel.suitability === 2 ? 8.5 : 7.2)).toFixed(1)} / 10
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3 text-left">
                      <div className="flex items-center justify-between text-3xs text-gray-500 font-bold uppercase tracking-wider font-title">
                        <span>{hotel.type}</span>
                        <span className="flex items-center gap-1">
                          <LocationIcon className="w-3.5 h-3.5 text-emerald-600" /> {hotel.city}, {hotel.district}
                        </span>
                      </div>
                      <h3 className="font-title text-lg font-extrabold text-brand-dark group-hover:text-emerald-700 transition-colors line-clamp-1">
                        {hotel.name}
                      </h3>
                      
                      {/* Pet Fee Info Box */}
                      <div className="pt-1">
                        {hotel.extraFee === 'no' ? (
                          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-3xs px-3.5 py-1.5 rounded-full flex items-center justify-between font-title">
                            <span>ÜCRETSİZ PET KABULÜ</span>
                            <span>Ek Ücret Alınmıyor ✓</span>
                          </div>
                        ) : (
                          <div className="bg-brand-lavender/60 border border-purple-200 text-brand-purple font-bold text-3xs px-3.5 py-1.5 rounded-full flex items-center justify-between font-title">
                            <span>PET ÜCRET POLİTİKASI</span>
                            <span className="font-bold">{hotel.extraFee === 'Teyit bekliyor' || !hotel.extraFee ? 'Tesisle Teyit Edin' : hotel.extraFee}</span>
                          </div>
                        )}
                      </div>

                      {/* Accepted Pets & Weight Limit Bar */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <span className="text-3xs text-gray-700 font-bold">Kabul:</span>
                          {(hotel.allowedPets || hotel.acceptedPets || ['dog']).includes('dog') && <DogIcon className="w-4 h-4 text-emerald-700" title="Köpek" />}
                          {(hotel.allowedPets || hotel.acceptedPets || []).includes('cat') && <CatIcon className="w-4 h-4 text-amber-600" title="Kedi" />}
                          {(hotel.allowedPets || hotel.acceptedPets || []).includes('bird') && <BirdIcon className="w-4 h-4 text-sky-600" title="Kuş" />}
                          {(hotel.allowedPets || hotel.acceptedPets || []).includes('other') && <OtherIcon className="w-4 h-4 text-purple-600" title="Diğer Dostlar" />}
                        </div>

                        <span className="text-3xs bg-emerald-100/80 px-2.5 py-1 rounded-full text-emerald-800 font-extrabold font-title">
                          {hotel.weightLimit > 0 ? `Max ${hotel.weightLimit} kg` : 'Kilo Sınırı Yok'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 text-right border-t border-gray-100 bg-emerald-50/50">
                    <span className="w-full bg-emerald-700 group-hover:bg-emerald-800 text-white transition-all duration-200 py-2.5 rounded-full text-xs font-bold font-title flex items-center justify-center gap-1 shadow-sm">
                      <span>Tesis Detaylarını İncele</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

        </div>

        {/* Scalloped Cloud Divider transitioning into Section 4 (#FEF3ED) */}
        <CloudWaveDivider fill="#fef3ed" className="mt-16 sm:mt-24 -mb-16 sm:-mb-24" />
      </section>


      {/* =========================================================================
          SECTION 4: PET TAKSİ & GÜVENLİ TRANSFER
          Warm peach blossom / soft coral palette (#fef3ed)
          Transition to Section 5: Soft Lilac Cloud Divider (#f5f0fb)
          ========================================================================= */}
      <section className="bg-[#fef3ed] py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <PetTaxiAdBanner onViewChange={onViewChange} compact={true} />
        </div>

        {/* Scalloped Cloud Divider transitioning into Section 5 (#F5F0FB) */}
        <CloudWaveDivider fill="#f5f0fb" className="mt-16 sm:mt-24 -mb-16 sm:-mb-24" />
      </section>


      {/* =========================================================================
          SECTION 5: POPÜLER TATİL ROTALARI & İLLERE GÖRE OTELLER
          Soft Lilac / Lavender palette (#f5f0fb)
          Transition to Section 6: Clean White Cloud Divider (#ffffff)
          ========================================================================= */}
      <section className="bg-[#f5f0fb] py-16 sm:py-24 relative" aria-labelledby="city-links-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center sm:text-left">
            <span className="px-3.5 py-1.5 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-extrabold uppercase font-title shadow-xs">
              Şehir Rehberi
            </span>
            <h2 id="city-links-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-title text-brand-dark mt-2">
              İllere Göre Evcil Hayvan Dostu Oteller
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1 font-medium">
              Konaklama seçeneklerini doğrudan il sayfasında inceleyin ve güvenle rezervasyon yapın.
            </p>
          </div>

          <nav aria-label="İllere göre oteller" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {cityLinks.map(city => (
              <a
                key={city.slug}
                href={`/evcil-hayvan-dostu-oteller/${city.slug}`}
                className="group flex items-center gap-2.5 p-3.5 rounded-2xl bg-white hover:bg-brand-purple hover:text-white border-2 border-purple-200/60 transition-all duration-200 text-xs sm:text-sm font-bold font-title text-brand-dark no-underline shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                title={`${city.name} evcil hayvan dostu otelleri`}
              >
                <span className="text-brand-purple group-hover:text-white transition-colors text-base">🐾</span>
                <span>{city.name} Otelleri</span>
              </a>
            ))}
          </nav>

          {/* Specialty Collections Cards */}
          <div className="pt-8">
            <div className="mb-8 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-brand-dark">
                İhtiyacınıza Göre Otel Seçkileri
              </h3>
              <p className="text-gray-600 text-sm mt-1 font-medium">
                Özel tatil tarzları ve gereksinimleri olan patili aileler için editoryal listeler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Ek Ücret Almayan Oteller",
                  desc: "Dostunuz için hiçbir temizlik ya da ek konaklama bedeli talep etmeyen tesisler.",
                  icon: <MoneyIcon className="w-6 h-6 text-brand-purple" />,
                  filter: { extraFeeOnly: true },
                },
                {
                  title: "Kendi Pet Plajı Olan Tesisler",
                  desc: "Köpeğinizle beraber güneşlenip yüzebileceğiniz özel plajlı tatil köyleri.",
                  icon: <BeachIcon className="w-6 h-6 text-brand-coral" />,
                  filter: { features: ["Pet plajı bulunan"] },
                },
                {
                  title: "Kilo Sınırı Olmayan Oteller",
                  desc: "Büyük ırk köpek sahipleri için ağırlık kısıtlaması uygulamayan tesisler.",
                  icon: <ScaleIcon className="w-6 h-6 text-emerald-600" />,
                  filter: { petType: 'dog', weightLimit: 'no-limit' },
                }
              ].map((collection, idx) => (
                <div
                  key={idx}
                  onClick={() => goToAccWithFilter(collection.filter, collection.title)}
                  className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-purple-100 hover:border-brand-purple cursor-pointer shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1.5 flex items-start gap-4"
                >
                  <div className="p-3 bg-brand-lavender/60 rounded-2xl shrink-0 shadow-xs">
                    {collection.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-title font-extrabold text-lg text-brand-dark">{collection.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed font-medium">{collection.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Scalloped Cloud Divider transitioning into Section 6 (#FFFFFF) */}
        <CloudWaveDivider fill="#ffffff" className="mt-16 sm:mt-24 -mb-16 sm:-mb-24" />
      </section>


      {/* =========================================================================
          SECTION 6: DOĞRULUK TAAHHÜDÜ, İŞLETMENİ EKLE & SEO REHBERİ
          Clean White Palette (#ffffff)
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-24 relative space-y-16">
        
        {/* İşletmeni Ekle Bölümü */}
        <div id="isletmeni-ekle" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="bg-gradient-to-br from-[#3c2f4b] via-[#723a8d] to-[#3c2f4b] text-white rounded-3xl sm:rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-brand-purple">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Sol Kolon: Başlık ve Açıklama */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-title text-white leading-tight">
                  İşletmenizi <span className="text-[#bdc52a] underline decoration-[#bdc52a]/50 decoration-4">patili.co'ya</span> Ekleyin!
                </h2>

                <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                  Evcil hayvan kabul eden <strong>otel, butik otel, kafe, restoran, pet oteli, 7/24 veteriner</strong> veya <strong>pet taksi</strong> işletmeniz mi var? İşletme türünüzü seçin, fotoğraf ve iletişim bilgilerinizi iletin; işletmenizi Türkiye'nin en büyük hayvan dostu platformunda binlerce patili aileyle buluşturalım.
                </p>

                {/* 4 Öne Çıkan Fayda Kartı */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <div className="p-2 bg-brand-coral/20 rounded-full shrink-0 text-brand-coral">
                      <VerifiedBadge className="w-5 h-5 text-[#bdc52a]" />
                    </div>
                    <div>
                      <h4 className="font-bold font-title text-xs text-white">Doğrudan Hedef Kitle</h4>
                      <p className="text-3xs text-gray-300 mt-0.5">Pet dostu arayan aileler doğrudan işletmenize ulaşsın.</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <div className="p-2 bg-brand-coral/20 rounded-full shrink-0 text-brand-coral">
                      <HotelIcon className="w-5 h-5 text-[#bdc52a]" />
                    </div>
                    <div>
                      <h4 className="font-bold font-title text-xs text-white">Fotoğraflı Tesis Profili</h4>
                      <p className="text-3xs text-gray-300 mt-0.5">Mekan fotoğraflarınız ve kabul kurallarınız öne çıkar.</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <div className="p-2 bg-brand-coral/20 rounded-full shrink-0 text-brand-coral">
                      <StarIcon className="w-5 h-5 text-[#bdc52a] fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold font-title text-xs text-white">Doğrulanmış Rozet</h4>
                      <p className="text-3xs text-gray-300 mt-0.5">Pet dostu güvenilirlik puanıyla müşteri güvenini artırın.</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-3.5 flex items-start gap-3">
                    <div className="p-2 bg-brand-coral/20 rounded-full shrink-0 text-brand-coral">
                      <ArrowRightIcon className="w-5 h-5 text-[#bdc52a]" />
                    </div>
                    <div>
                      <h4 className="font-bold font-title text-xs text-white">Hızlı & Kolay Başvuru</h4>
                      <p className="text-3xs text-gray-300 mt-0.5">Formu doldurun, ekibimiz inceleyip hemen listelesin.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Kolon: CTA Aksiyon Kartı */}
              <div className="lg:col-span-5 bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-100 space-y-6">
                <div className="space-y-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-lavender flex items-center justify-center mx-auto mb-2 text-brand-purple">
                    <HotelIcon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="font-title font-extrabold text-2xl text-brand-dark">
                    İşletme Formuna Git
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    Tesis türü, fotoğraf, telefon ve adres bilgilerinizi girerek birkaç dakikada işletmenizi kaydedin.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-gray-700 bg-brand-cream/60 p-4 rounded-2xl border border-brand-beige">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-purple font-bold">✓</span>
                    <span>Otel, Butik Otel, Bungalov, Villa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-purple font-bold">✓</span>
                    <span>Patili Kafe, Restoran & Bar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-purple font-bold">✓</span>
                    <span>Pet Taksi, Pet Oteli & 7/24 Veterinerler</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-purple font-bold">✓</span>
                    <span>Ücretsiz & Doğrulanmış Tesis Listeleme</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onViewChange('add-business')}
                  className="w-full bg-brand-purple hover:bg-brand-dark text-white py-4 rounded-full font-title font-extrabold text-sm transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fcfaff] border-2 border-purple-100 rounded-3xl sm:rounded-[2.5rem] p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            <div>
              <span className="bg-brand-purple/10 text-brand-purple text-xs px-3.5 py-1.5 rounded-full font-extrabold uppercase tracking-wider font-title">
                Doğruluk Taahhüdü
              </span>
              <h3 className="text-3xl font-extrabold font-title text-brand-dark mt-4">
                patili.co tesisleri nasıl doğruluyor?
              </h3>
              <p className="text-gray-700 mt-4 leading-relaxed text-sm font-medium">
                İnternetteki "evcil hayvan dostu" ibarelerinin çoğu yanıltıcıdır ve tesise vardığınızda sürprizlerle karşılaşabilirsiniz. Biz bu sorunu çözmek için şunları yapıyoruz:
              </p>
              <ul className="space-y-3 mt-6 text-xs text-gray-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-purple font-extrabold">✓</span>
                  <span><strong>Yerinde Denetim:</strong> Tesislerin büyük kısmını editörlerimiz bizzat köpekleri veya kedileriyle ziyaret edip deneyimler.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-purple font-extrabold">✓</span>
                  <span><strong>Doğrudan İletişim:</strong> Listelenen tüm otel kuralları, işletme yönetimleri aranarak tek tek standartlaştırılıp doğrulanır.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand-purple font-extrabold">✓</span>
                  <span><strong>Düzenli Güncelleme:</strong> Bilgiler 3 ayda bir kontrol edilerek son güncelleme tarihleriyle birlikte yayına sunulur.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl space-y-4 border-2 border-purple-100 shadow-md">
              <h4 className="font-title font-extrabold text-xl text-brand-dark">Otel veya İşletme Önerin</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Bildiğiniz, kaldığınız ve kalitesinden emin olduğunuz evcil hayvan dostu tesisleri veya kedi/köpek otellerini bize bildirin, ekibimiz inceleyerek doğrulasın.
              </p>
              <button
                onClick={() => {
                  alert("Otel önerme talebiniz editör ekibimize iletildi. İlginiz için teşekkür ederiz!");
                }}
                className="w-full bg-brand-dark hover:bg-brand-purple text-white py-3.5 rounded-full text-sm font-extrabold transition-all font-title shadow-md cursor-pointer"
              >
                Tesis Önerisinde Bulun
              </button>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoContentSection content={seoContent.home} />
        </div>

      </section>
    </div>
  );
}
