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

export default function Home({ onViewChange, setSearchFilters }) {
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
      read('/api/locations')
    ]).then(([page, cities]) => {
      if (!isMounted) return;
      if (Array.isArray(page?.data) && page.data.length > 0) {
        setPreview(prev => ({
          ...prev,
          hotels: page.data,
          cities: Array.isArray(cities) && cities.length > 0 ? cities : prev.cities,
          loading: false,
          error: ''
        }));
      } else if (Array.isArray(cities) && cities.length > 0) {
        setPreview(prev => ({ ...prev, cities, loading: false }));
      }
    }).catch(error => {
      if (!isMounted) return;
      // Retain fallback hotels silently without breaking user interface
      setPreview(prev => ({
        ...prev,
        hotels: prev.hotels.length > 0 ? prev.hotels : FALLBACK_FEATURED_HOTELS,
        loading: false,
        error: error?.message || ''
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

  const featuredHotels = preview.hotels.length > 0 ? preview.hotels : FALLBACK_FEATURED_HOTELS;
  const cityLinks = preview.cities.length > 0
    ? preview.cities.map(({ city }) => ({ name: city, slug: slugify(city) }))
    : FALLBACK_CITIES;

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section - Matching Mockup Pixel-for-Pixel */}
      <div className="relative overflow-hidden bg-brand-lavender pt-8 pb-14 md:pt-12 md:pb-20 border-b border-purple-200/60">
        {/* Playful Floating Bubbles in Background */}
        <div className="absolute top-10 left-8 w-28 h-28 rounded-full bg-purple-300/30 blur-xl animate-float-slow pointer-events-none" />
        <div className="absolute top-1/3 right-12 w-48 h-48 rounded-full bg-pink-200/40 blur-2xl animate-float-medium pointer-events-none" />
        <div className="absolute bottom-16 left-1/4 w-36 h-36 rounded-full bg-blue-200/30 blur-lg animate-float-fast pointer-events-none" />
        <div className="absolute top-20 right-1/3 w-20 h-20 rounded-full bg-yellow-200/40 blur-md animate-wobble-slow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 md:space-y-12">
          
          {/* Top Row: Heading on Left, Mascot Illustration on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left Column: Playful Bubbly Titles */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-xs border border-purple-200 rounded-full text-xs font-bold text-brand-purple shadow-xs">
                <span>🐾 Türkiye'nin En Kapsamlı Pet Friendly Platformu</span>
              </div>

              <div className="relative inline-block text-left">
                <div className="flex items-start justify-center lg:justify-start gap-3">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-title text-brand-dark leading-[1.05] tracking-tight">
                    Patili<br />Tatiller
                  </h1>
                  <span className="text-3xl sm:text-4xl text-brand-purple font-title animate-bounce">彡</span>
                </div>
                
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-2">
                  <p className="text-xl sm:text-2xl font-bold font-title text-brand-purple">
                    Patini de al, keşfet.
                  </p>
                  <svg className="w-20 sm:w-28 h-3 text-brand-purple/70" viewBox="0 0 100 12" fill="none">
                    <path d="M2 9C25 3 75 3 98 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Dostunla birlikte unutulmaz tatiller! Kedi ve köpek kabul eden doğrulanmış oteller, patili mekanlar ve güvenilir bakım servisleri bir arada.
              </p>

              {/* Mode Switcher Tabs */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-xs border border-purple-200/80 rounded-full shadow-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('hotel')}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      activeTab === 'hotel'
                        ? 'bg-brand-dark text-white shadow-sm'
                        : 'text-brand-purple hover:bg-brand-lavender/60'
                    }`}
                  >
                    <HotelIcon className={`w-4 h-4 ${activeTab === 'hotel' ? 'text-white' : 'text-brand-purple'}`} />
                    <span>Otel & Konaklama</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('venue')}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      activeTab === 'venue'
                        ? 'bg-brand-dark text-white shadow-sm'
                        : 'text-brand-purple hover:bg-brand-lavender/60'
                    }`}
                  >
                    <DiningIcon className={`w-4 h-4 ${activeTab === 'venue' ? 'text-white' : 'text-brand-purple'}`} />
                    <span>Patili Mekan</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Mascot Illustration in Purple Car */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative max-w-md sm:max-w-lg w-full group">
                <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/90 bg-white">
                  <img
                    src="/images/hero-pets.jpg"
                    alt="Patili Tatiller - Sevimli köpek ve kedi seyahatte"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Hotel Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-purple-100 flex items-center gap-1.5 animate-bounce">
                    <span className="text-sm">🌴</span>
                    <span className="text-2xs sm:text-xs font-extrabold font-title text-brand-dark uppercase tracking-wider">🐾 HOTEL</span>
                  </div>
                </div>

                {/* Floating Sweet Sticker */}
                <div className="absolute -bottom-4 -left-4 bg-brand-dark text-white px-4 py-2 rounded-full shadow-xl border-2 border-white flex items-center gap-2 animate-float-medium">
                  <span className="text-base">🐶🐱</span>
                  <span className="text-xs font-bold font-title">Dostunla Özgür Seyahat</span>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Pill Search Bar (Matching Mockup) */}
          <div className="pt-2">
            <form 
              onSubmit={handleSearch} 
              className="bg-white p-3 md:py-3 md:px-5 rounded-3xl md:rounded-full shadow-2xl border-2 border-purple-100 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-3 md:gap-4 transition-all hover:border-purple-300"
            >
              {/* Destination Input */}
              <div className="flex-1 flex flex-col text-left px-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-purple-100 pb-2 md:pb-0">
                <label htmlFor="home-destination" className="text-2xs font-extrabold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span>Nereye gitmek istiyorsun?</span>
                </label>
                <div className="flex items-center gap-2.5">
                  <LocationIcon className="w-5 h-5 text-brand-purple shrink-0" />
                  <input
                    id="home-destination"
                    name="destination"
                    aria-label={activeTab === 'hotel' ? 'Nereye seyahat etmek istiyorsunuz?' : 'Hangi mekanda vakit geçirmek istiyorsunuz?'}
                    type="text"
                    placeholder={activeTab === 'hotel' ? 'Şehir, ilçe veya otel...' : 'Şehir, kafe veya restoran...'}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-sm sm:text-base font-bold text-brand-dark placeholder-gray-400 outline-none focus:ring-0 font-title"
                  />
                </div>
              </div>

              {/* Date Input */}
              <div className="flex-1 flex flex-col text-left px-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-purple-100 pb-2 md:pb-0">
                <label htmlFor="home-dates" className="text-2xs font-extrabold text-gray-500 uppercase tracking-wider mb-1">
                  Giriş – Çıkış tarihleri
                </label>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-brand-blue shrink-0" />
                  <input
                    id="home-dates"
                    type="text"
                    placeholder="Tarihleri seçin..."
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-sm font-bold text-brand-dark placeholder-gray-400 outline-none focus:ring-0 font-title cursor-pointer"
                  />
                </div>
              </div>

              {/* Guests & Pet Selector */}
              <div className="flex flex-col text-left px-3 w-full md:w-auto pb-2 md:pb-0 min-w-[210px]">
                <label htmlFor="home-pet-type" className="text-2xs font-extrabold text-gray-500 uppercase tracking-wider mb-1">
                  2 Misafir, 1 Patili Dost
                </label>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-coral shrink-0" />
                  <select
                    id="home-pet-type"
                    name="petType"
                    aria-label="Patili dostunuzun türünü seçin"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    className="bg-transparent border-none py-0 text-sm font-bold text-brand-dark outline-none cursor-pointer focus:ring-0 font-title"
                  >
                    <option value="all">Köpek & Kedi (Tüm Dostlar)</option>
                    <option value="dog">🐶 Köpek Dostumla</option>
                    <option value="cat">🐱 Kedi Dostumla</option>
                    <option value="bird">🦜 Kuş & Diğer Dostlar</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-brand-dark hover:bg-brand-purple text-white font-extrabold rounded-full flex items-center justify-center gap-2.5 py-3.5 px-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full md:w-auto font-title cursor-pointer text-base tracking-wide"
              >
                <SearchIcon className="w-5 h-5 text-white" />
                <span>{activeTab === 'hotel' ? 'Otel Ara' : 'Mekan Ara'}</span>
              </button>
            </form>
          </div>

          {/* 4 Circular Feature Badges (Matching Mockup) */}
          <div className="pt-2 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              
              {/* Badge 1: Evcil dost kabul eden oteller */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-purple-200/60 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#dfd5f5] text-brand-dark flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-xl">🐾</span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-brand-dark leading-snug">
                    Evcil dost kabul eden oteller
                  </p>
                </div>
              </div>

              {/* Badge 2: Güvenli rezervasyon */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-purple-200/60 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#fedcd4] text-brand-coral flex items-center justify-center shrink-0 shadow-xs">
                  <Heart className="w-6 h-6 text-brand-coral fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-brand-dark leading-snug">
                    Güvenli rezervasyon
                  </p>
                </div>
              </div>

              {/* Badge 3: Seyahatini kolay planla */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-purple-200/60 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#eff5cd] text-brand-lime flex items-center justify-center shrink-0 shadow-xs">
                  <ShoppingBag className="w-6 h-6 text-[#727d14]" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-brand-dark leading-snug">
                    Seyahatini kolay planla
                  </p>
                </div>
              </div>

              {/* Badge 4: Daha mutlu tatiller */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-purple-200/60 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#d5f2e3] text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-brand-dark leading-snug">
                    Daha mutlu tatiller
                  </p>
                </div>
              </div>

            </div>

            {/* Decorative Floating Paw Watermark on Bottom Right */}
            <div className="hidden lg:block absolute -right-6 -bottom-6 opacity-30 text-6xl select-none pointer-events-none">
              🐾
            </div>
          </div>

        </div>
      </div>

      {/* HappiLoop-Style Dual Marquee Ticker */}
      <div className="overflow-hidden border-y-2 border-brand-dark/10 shadow-inner -mt-16 sm:-mt-16">
        {/* Ribbon 1: Brand Purple Marquee */}
        <div className="bg-brand-purple text-white py-3 overflow-hidden select-none font-title text-xs sm:text-sm font-extrabold tracking-wider uppercase">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            <span>🐾 %100 Doğrulanmış Pet Otelleri</span>
            <span>•</span>
            <span>🚗 Güvenli Pet Taksi Servisi</span>
            <span>•</span>
            <span>🌴 Bahçeli & Plaj Tesisleri</span>
            <span>•</span>
            <span>🦴 Sıfır Ek Ücretli Seçenekler</span>
            <span>•</span>
            <span>🐱 Kedi & Köpek Dostu Mekanlar</span>
            <span>•</span>
            <span>🩺 7/24 Acil Nöbetçi Klinikler</span>
            <span>•</span>
            <span>🐕 Profesyonel Köpek Gezdiricileri</span>
            <span>•</span>
            <span>🐾 %100 Doğrulanmış Pet Otelleri</span>
            <span>•</span>
            <span>🚗 Güvenli Pet Taksi Servisi</span>
            <span>•</span>
            <span>🌴 Bahçeli & Plaj Tesisleri</span>
            <span>•</span>
            <span>🦴 Sıfır Ek Ücretli Seçenekler</span>
            <span>•</span>
            <span>🐱 Kedi & Köpek Dostu Mekanlar</span>
            <span>•</span>
            <span>🩺 7/24 Acil Nöbetçi Klinikler</span>
            <span>•</span>
            <span>🐕 Profesyonel Köpek Gezdiricileri</span>
          </div>
        </div>

        {/* Ribbon 2: Warm Coral Marquee (Counter-scrolling) */}
        <div className="bg-brand-coral text-white py-2 overflow-hidden select-none font-title text-2xs sm:text-xs font-bold tracking-widest uppercase">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-8">
            <span>💖 Patini de Al Keşfet</span>
            <span>•</span>
            <span>⭐ Türkiye'nin En Sevimli Pet Seyahat Platformu</span>
            <span>•</span>
            <span>🏖️ Plaj, Doğa ve Butik Kaçamaklar</span>
            <span>•</span>
            <span>🐶 Mutlu Kuyruklar, Güvenli Rezervasyon</span>
            <span>•</span>
            <span>💖 Patini de Al Keşfet</span>
            <span>•</span>
            <span>⭐ Türkiye'nin En Sevimli Pet Seyahat Platformu</span>
            <span>•</span>
            <span>🏖️ Plaj, Doğa ve Butik Kaçamaklar</span>
            <span>•</span>
            <span>🐶 Mutlu Kuyruklar, Güvenli Rezervasyon</span>
          </div>
        </div>
      </div>

      {/* 2 Ana Odak Kartı: Pati Dostu Oteller & Patili Mekanlar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-extrabold uppercase font-title">
            Nereye Gitmek İstersin?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-title text-brand-dark">
            Patili Dostunla Hayatın Tadını Çıkar
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Türkiye'nin dört bir yanındaki doğrulanmış otelleri ve sosyal mekanları keşfet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ana Odak 1: Patili Seyahat (Pati Dostu Oteller) */}
          <a
            href="/evcil-hayvan-dostu-oteller"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                e.preventDefault();
                onViewChange('accommodations');
              }
            }}
            className="group bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-2 border-purple-100/80 hover:border-brand-purple shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
          >
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-lavender">
                <img
                  src="/images/pet-hotel.jpg"
                  alt="Pati Dostu Oteller"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/90 text-white text-xs px-3.5 py-1.5 rounded-full font-extrabold font-title shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                  <span>🐾</span>
                  <span>100+ Doğrulanmış Otel</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-brand-lavender text-brand-purple flex items-center justify-center font-bold text-sm">
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

            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between border-t border-purple-100/60">
              <span className="text-xs sm:text-sm font-extrabold text-brand-purple font-title">
                Sıfır Ek Ücretli Tesisleri Keşfet
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple text-white shadow-md group-hover:scale-110 group-hover:bg-brand-dark transition-all">
                <ArrowRightIcon className="w-4 h-4 text-white" />
              </span>
            </div>
          </a>

          {/* Ana Odak 2: Patili Mekanlar (Kafe, Restoran & Bar) */}
          <a
            href="/patili-mekanlar"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                e.preventDefault();
                onViewChange('experiences');
              }
            }}
            className="group bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-2 border-orange-100/80 hover:border-brand-coral shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between block no-underline text-inherit cursor-pointer"
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
                  <span>Kafe, Restoran & Plaj</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-brand-softcoral text-brand-coral flex items-center justify-center font-bold text-sm">
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

            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between border-t border-orange-100/60">
              <span className="text-xs sm:text-sm font-extrabold text-brand-coral font-title">
                Şehrindeki Mekanları İncele
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-coral text-white shadow-md group-hover:scale-110 group-hover:bg-brand-dark transition-all">
                <ArrowRightIcon className="w-4 h-4 text-white" />
              </span>
            </div>
          </a>
        </div>

        {/* 4 Tamamlayıcı Hizmet Kutusu: Pet Taksi, Pet Otel, Köpek Gezdirici, 7/24 Veteriner */}
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
            <p className="text-xs sm:text-sm text-gray-500 max-w-md text-center sm:text-right">
              Yolculuktan konaklamaya, günlük gezintiden 7/24 veteriner desteğine kadar her an yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Kutu 1: Pet Taksi */}
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

            {/* Kutu 2: Pet Otel */}
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

            {/* Kutu 3: Köpek Gezdiriciler */}
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

            {/* Kutu 4: 7-24 Veterinerler */}
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

        {/* Pet Taksi Reklam Banner Section */}
        <PetTaxiAdBanner onViewChange={onViewChange} compact={true} />
      </div>

      {/* Featured Pet-Friendly Hotels (Prioritizing No Extra Fee) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-extrabold mb-2 font-title">
              <span>🐾 ÜCRETSİZ PET KABUL EDEN SEÇKİN TESİSLER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-title text-brand-dark">
              Öne Çıkan Pet Dostu Oteller
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Ek pet ücreti talep etmeyen ve evcil hayvanlara en yüksek konforu sunan doğrulanmış oteller
            </p>
          </div>
          <button 
            onClick={() => onViewChange('accommodations')} 
            className="text-brand-purple hover:text-brand-dark font-extrabold text-sm font-title flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
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
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border-2 border-purple-100 hover:border-brand-purple transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between block no-underline text-inherit"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-video w-full bg-gray-200 overflow-hidden">
                    <img
                      src={hotel.imageUrl?.includes('images.unsplash.com') ? hotel.imageUrl.replace(/w=\d+/, 'w=400').replace(/q=\d+/, 'q=70') : hotel.imageUrl}
                      alt={hotel.name}
                      width="400"
                      height="225"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {hotel.verified !== false && (
                      <div className="absolute top-3 left-3 bg-brand-dark text-white text-3xs px-2.5 py-1 rounded-full font-extrabold font-title flex items-center gap-1 shadow-sm">
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
                        <LocationIcon className="w-3.5 h-3.5 text-brand-purple" /> {hotel.city}, {hotel.district}
                      </span>
                    </div>
                    <h3 className="font-title text-lg font-extrabold text-brand-dark group-hover:text-brand-purple transition-colors line-clamp-1">
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
                    <div className="flex items-center justify-between pt-2 border-t border-purple-100 text-xs">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <span className="text-3xs text-gray-700 font-bold">Kabul:</span>
                        {(hotel.allowedPets || hotel.acceptedPets || ['dog']).includes('dog') && <DogIcon className="w-4 h-4 text-brand-purple" title="Köpek" />}
                        {(hotel.allowedPets || hotel.acceptedPets || []).includes('cat') && <CatIcon className="w-4 h-4 text-brand-purple" title="Kedi" />}
                        {(hotel.allowedPets || hotel.acceptedPets || []).includes('bird') && <BirdIcon className="w-4 h-4 text-brand-purple" title="Kuş" />}
                        {(hotel.allowedPets || hotel.acceptedPets || []).includes('other') && <OtherIcon className="w-4 h-4 text-brand-purple" title="Diğer Dostlar" />}
                      </div>

                      <span className="text-3xs bg-brand-purple/10 px-2.5 py-1 rounded-full text-brand-purple font-extrabold font-title">
                        {hotel.weightLimit > 0 ? `Max ${hotel.weightLimit} kg` : 'Kilo Sınırı Yok'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 text-right border-t border-purple-100 bg-brand-cream/60">
                  <span className="w-full bg-brand-dark group-hover:bg-brand-purple text-white transition-all duration-200 py-2.5 rounded-full text-xs font-bold font-title flex items-center justify-center gap-1 shadow-sm">
                    <span>Tesis Detaylarını İncele</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Crawlable province links */}
      <section className="border-y border-purple-100 bg-white py-14" aria-labelledby="city-links-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-left">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-extrabold uppercase font-title">
              Şehir Rehberi
            </span>
            <h2 id="city-links-title" className="text-2xl sm:text-3xl font-extrabold font-title text-brand-dark mt-1">
              İllere Göre Evcil Hayvan Dostu Oteller
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Konaklama seçeneklerini doğrudan il sayfasında inceleyin.
            </p>
          </div>

          <nav aria-label="İllere göre oteller" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {cityLinks.map(city => (
              <a
                key={city.slug}
                href={`/evcil-hayvan-dostu-oteller/${city.slug}`}
                className="group flex items-center gap-2 p-3 rounded-2xl bg-brand-lavender/40 hover:bg-brand-purple hover:text-white border border-purple-100 transition-all duration-200 text-xs sm:text-sm font-bold font-title text-brand-dark no-underline shadow-xs hover:shadow-md hover:-translate-y-0.5"
                title={`${city.name} evcil hayvan dostu otelleri`}
              >
                <span className="text-brand-purple group-hover:text-white transition-colors">🐾</span>
                <span>{city.name} Otelleri</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Explore by Pet Type */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 bg-brand-coral/10 text-brand-coral rounded-full text-xs font-extrabold uppercase font-title">
            Özel İhtiyaçlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-title text-brand-dark">
            Dost Türüne Göre Keşfet
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Dostunuzun cinsine özel kabul kriterleri ve ortam sunan işletmeler
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { id: 'dog', label: 'Köpekler', icon: <DogIcon className="w-8 h-8 text-brand-purple" />, desc: 'Büyük ırk, plaj izni, pet menüsü sunanlar', bg: 'hover:border-brand-purple' },
            { id: 'cat', label: 'Kediler', icon: <CatIcon className="w-8 h-8 text-brand-coral" />, desc: 'Odada serbestlik, sineklik güvencesi olanlar', bg: 'hover:border-brand-coral' },
            { id: 'bird', label: 'Kuşlar', icon: <BirdIcon className="w-8 h-8 text-brand-blue" />, desc: 'Kafes kabulü ve rüzgarsız oda sağlayanlar', bg: 'hover:border-brand-blue' },
            { id: 'other', label: 'Diğer Dostlar', icon: <OtherIcon className="w-8 h-8 text-brand-lime" />, desc: 'Kemirgenler, tavşanlar ve sürüngenler için', bg: 'hover:border-brand-lime' },
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
              className={`bg-white border-2 border-purple-100/80 p-6 rounded-3xl text-center cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${pet.bg}`}
            >
              <div className="inline-flex p-4 rounded-full bg-brand-lavender/60 group-hover:scale-110 transition-transform mb-4 shadow-xs">
                {pet.icon}
              </div>
              <h3 className="font-title font-extrabold text-xl text-brand-dark group-hover:text-brand-purple transition-colors">
                {pet.label}
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed font-medium">
                {pet.desc}
              </p>
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
