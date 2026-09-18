import React, { useState, useMemo, useEffect } from 'react';
import { useCatalog } from '../lib/useCatalog';
import CatalogPagination from '../components/CatalogPagination';
import { DogIcon, CatIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import { getBoardingPath } from '../../lib/seo-slugs';
import staticPetHotels from '../data/petHotels.json';

export default function Boardings({ onViewChange }) {
  // Filters state
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState('all');
  const [sortBy, setSortBy] = useState('popular'); // popular, rating, name, city

  // Preset quick filters
  const [activeChip, setActiveChip] = useState('all');
  const [hasPhoneOnly, setHasPhoneOnly] = useState(false);
  const [hasWebOnly, setHasWebOnly] = useState(false);
  const [richGalleryOnly, setRichGalleryOnly] = useState(false);
  const [cameraRequired, setCameraRequired] = useState(false);

  // Lightbox Modal state for full photo gallery
  const [galleryModal, setGalleryModal] = useState({
    isOpen: false,
    hotelName: '',
    city: '',
    images: [],
    currentIndex: 0
  });

  // Fetch from catalog with fallback
  const catalogQuery = useMemo(() => {
    return {
      q: searchQuery || (selectedCity !== 'all' ? selectedCity : ''),
      category: categoryFilter !== 'all' ? categoryFilter : undefined,
    };
  }, [searchQuery, selectedCity, categoryFilter]);

  const page = useCatalog('boardings', catalogQuery, false, true, true);

  // Combine items: prefer live catalog items if available, otherwise static curated dataset
  const baseItems = useMemo(() => {
    if (page.items && page.items.length > 0) {
      const staticMap = new Map(staticPetHotels.map(item => [item.id, item]));
      return page.items.map(item => {
        const enriched = staticMap.get(item.id);
        return {
          ...enriched,
          ...item,
          gallery_images: (item.galleryImages && item.galleryImages.length > 0) 
            ? item.galleryImages 
            : (enriched?.gallery_images || enriched?.galleryImages || []),
          image_url: item.imageUrl || enriched?.image_url || enriched?.imageUrl,
          rating: item.rating ?? enriched?.rating,
          review_count: item.reviewCount ?? enriched?.review_count ?? enriched?.reviewCount ?? 0,
          google_maps_linki: item.googleMapsLinki || enriched?.google_maps_linki || enriched?.bookingLinks?.google_maps,
          phone: item.phone || enriched?.phone,
          website: item.website || enriched?.website,
          address: item.address || enriched?.address,
          category: item.category || enriched?.category
        };
      });
    }
    return staticPetHotels;
  }, [page.items]);

  // Extract unique cities with counts
  const cityStats = useMemo(() => {
    const counts = {};
    for (const item of staticPetHotels) {
      const city = item.city?.trim() || 'Diğer';
      counts[city] = (counts[city] || 0) + 1;
    }
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  // Extract districts for selected city
  const districtList = useMemo(() => {
    if (selectedCity === 'all') return [];
    const set = new Set();
    for (const item of staticPetHotels) {
      if (item.city === selectedCity && item.district && item.district !== 'Merkez') {
        set.add(item.district);
      }
    }
    return Array.from(set).sort();
  }, [selectedCity]);

  // Apply all client-side filters
  const filteredBoardings = useMemo(() => {
    return baseItems.filter(item => {
      // City filter
      if (selectedCity !== 'all' && item.city !== selectedCity) return false;

      // District filter
      if (selectedDistrict !== 'all' && item.district !== selectedDistrict) return false;

      // Category filter
      if (categoryFilter !== 'all') {
        if (categoryFilter === 'Köpek otelleri' && !item.category?.includes('Köpek') && !item.service_type?.includes('Köpek')) return false;
        if (categoryFilter === 'Kedi otelleri' && !item.category?.includes('Kedi') && !item.service_type?.includes('Kedi')) return false;
        if (categoryFilter === 'Karma' && !item.category?.includes('karma') && !item.service_type?.includes('Kedi & Köpek')) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name?.toLowerCase().includes(q);
        const matchesCity = item.city?.toLowerCase().includes(q);
        const matchesDistrict = item.district?.toLowerCase().includes(q);
        const matchesAddress = item.address?.toLowerCase().includes(q);
        if (!matchesName && !matchesCity && !matchesDistrict && !matchesAddress) return false;
      }

      // Min rating
      if (minRating !== 'all') {
        const r = parseFloat(item.rating) || 0;
        if (r < parseFloat(minRating)) return false;
      }

      // Chip filters
      if (hasPhoneOnly && !item.phone) return false;
      if (hasWebOnly && !item.website) return false;
      if (richGalleryOnly && (!item.gallery_images || item.gallery_images.length < 5)) return false;
      if (cameraRequired && !item.camera_support && !item.cameraSupport) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') {
        return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);
      }
      if (sortBy === 'reviews') {
        return (parseInt(b.review_count || 0, 10) - parseInt(a.review_count || 0, 10));
      }
      if (sortBy === 'city') {
        return (a.city || '').localeCompare(b.city || '', 'tr');
      }
      if (sortBy === 'name') {
        return (a.name || '').localeCompare(b.name || '', 'tr');
      }
      const scoreA = (parseFloat(a.rating) || 4.0) * Math.log10((parseInt(a.review_count, 10) || 1) + 10);
      const scoreB = (parseFloat(b.rating) || 4.0) * Math.log10((parseInt(b.review_count, 10) || 1) + 10);
      return scoreB - scoreA;
    });
  }, [baseItems, selectedCity, selectedDistrict, categoryFilter, searchQuery, minRating, sortBy, hasPhoneOnly, hasWebOnly, richGalleryOnly, cameraRequired]);

  // Reset all filters
  const resetFilters = () => {
    setCategoryFilter('all');
    setSelectedCity('all');
    setSelectedDistrict('all');
    setSearchQuery('');
    setMinRating('all');
    setSortBy('popular');
    setActiveChip('all');
    setHasPhoneOnly(false);
    setHasWebOnly(false);
    setRichGalleryOnly(false);
    setCameraRequired(false);
  };

  // Quick Preset Chip Click Handler
  const handleChipClick = (chipKey) => {
    setActiveChip(chipKey);
    if (chipKey === 'all') {
      resetFilters();
    } else if (chipKey === 'dog') {
      setCategoryFilter('Köpek otelleri');
      setMinRating('all');
      setHasPhoneOnly(false);
      setHasWebOnly(false);
      setRichGalleryOnly(false);
    } else if (chipKey === 'cat') {
      setCategoryFilter('Kedi otelleri');
      setMinRating('all');
      setHasPhoneOnly(false);
      setHasWebOnly(false);
      setRichGalleryOnly(false);
    } else if (chipKey === 'karma') {
      setCategoryFilter('Karma');
      setMinRating('all');
      setHasPhoneOnly(false);
      setHasWebOnly(false);
      setRichGalleryOnly(false);
    } else if (chipKey === 'top-rated') {
      setMinRating('4.5');
    } else if (chipKey === 'phone') {
      setHasPhoneOnly(prev => !prev);
    } else if (chipKey === 'web') {
      setHasWebOnly(prev => !prev);
    } else if (chipKey === 'gallery') {
      setRichGalleryOnly(prev => !prev);
    } else if (chipKey === 'camera') {
      setCameraRequired(prev => !prev);
    }
  };

  // Open modal lightbox
  const openGalleryModal = (hotel, startIndex = 0) => {
    const images = (hotel.gallery_images && hotel.gallery_images.length > 0)
      ? hotel.gallery_images
      : [hotel.image_url].filter(Boolean);
    
    setGalleryModal({
      isOpen: true,
      hotelName: hotel.name,
      city: hotel.city,
      images,
      currentIndex: startIndex
    });
  };

  // Close modal lightbox
  const closeGalleryModal = () => {
    setGalleryModal(prev => ({ ...prev, isOpen: false }));
  };

  // Navigate lightbox modal
  const nextImage = (e) => {
    e?.stopPropagation();
    setGalleryModal(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setGalleryModal(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (!galleryModal.isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeGalleryModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryModal.isOpen]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header & Badges */}
      <div className="border-b border-brand-beige pb-6 mb-6 text-left">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="bg-emerald-100 text-emerald-800 text-3xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            ✓ Doğrudan Google Maps Doğrulamalı
          </span>
          <span className="bg-brand-navy-light text-brand-navy text-3xs font-bold px-3 py-1 rounded-full">
            📍 39 İl Kapsamı
          </span>
          <span className="bg-amber-100 text-amber-900 text-3xs font-bold px-3 py-1 rounded-full">
            📸 990+ Özgün Fotoğraf Kataloğu
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold font-title text-brand-navy">
          Türkiye Pet Otelleri & Kedi-Köpek Pansiyonları Rehberi
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-4xl leading-relaxed">
          Seyahatiniz, tatiliniz veya iş programınız sırasında gözünüz arkada kalmadan patili dostunuzu emanet edebileceğiniz 
          <strong> 131 doğrudan evcil hayvan oteli ve bakım merkezini</strong> tüm fotoğrafları, telefonları, adresleri ve gerçek misafir puanlarıyla inceleyin.
        </p>

        {/* Passage-First Direct Answer Block (GEMINI.md Rule 2) */}
        <div className="bg-brand-orange-light/60 border border-brand-orange/30 rounded-2xl p-4 sm:p-5 mt-4 text-sm text-brand-navy max-w-4xl leading-relaxed shadow-xs">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">🛡️</span>
            <div>
              <p className="font-bold text-brand-navy text-base mb-1">
                Doğrudan Pet Oteli Güvencesi & Kabul Standartları
              </p>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Bu sayfada yalnızca <strong>doğrudan evcil hayvan konaklama ve pansiyon hizmeti veren işletmeler</strong> listelenir; 
                insan otelleri bu dizinde kesinlikle yer almaz. Listelenen tüm tesislerin kabul koşulları için <strong>resmi aşı karnesi, güncel kuduz ve karma aşılar ile parazit uygulamalarının tamamlanmış olması zorunludur.</strong> Rezervasyon yapmadan önce işletmenin canlı kamera, açık bahçe ve nöbetçi veteriner imkanlarını doğrudan teyit edebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preset Filter Chips (GEMINI.md Rule 2) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar text-xs">
        <button
          onClick={() => handleChipClick('all')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeChip === 'all' && selectedCity === 'all' && !hasPhoneOnly && !hasWebOnly && !richGalleryOnly && !cameraRequired
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          🐾 Tüm Tesisler ({staticPetHotels.length})
        </button>
        <button
          onClick={() => handleChipClick('dog')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            categoryFilter === 'Köpek otelleri'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>🐶</span> Köpek Otelleri (54)
        </button>
        <button
          onClick={() => handleChipClick('cat')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            categoryFilter === 'Kedi otelleri'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>🐱</span> Kedi Otelleri (30)
        </button>
        <button
          onClick={() => handleChipClick('karma')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            categoryFilter === 'Karma'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>🐾</span> Karma Tesisler (47)
        </button>
        <button
          onClick={() => handleChipClick('top-rated')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            minRating === '4.5'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>⭐</span> 4.5+ Puanlılar
        </button>
        <button
          onClick={() => handleChipClick('phone')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            hasPhoneOnly
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>📞</span> Telefonu Olanlar
        </button>
        <button
          onClick={() => handleChipClick('web')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            hasWebOnly
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>🌐</span> Web Sitesi Olanlar
        </button>
        <button
          onClick={() => handleChipClick('gallery')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            richGalleryOnly
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>📸</span> Zengin Fotoğraflı (5+)
        </button>
        <button
          onClick={() => handleChipClick('camera')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            cameraRequired
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>📹</span> Canlı Kamera
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left h-fit lg:sticky lg:top-6">
          <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
            <div>
              <h3 className="font-title font-bold text-lg text-gray-900">Merkez Filtreleri</h3>
              <span className="text-3xs text-gray-500 font-medium">
                {filteredBoardings.length} tesis eşleşti
              </span>
            </div>
            <button
              onClick={resetFilters}
              className="text-xs text-brand-navy font-bold hover:underline cursor-pointer"
            >
              Temizle
            </button>
          </div>

          {/* Search Box */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">İşletme veya İlçe Ara</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Örn: Pati Oteli, Çankaya..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm border-2 border-brand-navy/30 rounded-xl p-2.5 pl-8 outline-none focus:border-brand-navy transition-colors"
              />
              <span className="absolute left-2.5 top-2.5 text-gray-400 text-xs">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* City Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Şehir / İl</label>
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedDistrict('all');
              }}
              className="w-full text-xs sm:text-sm border-2 border-brand-navy/30 rounded-xl p-2.5 bg-white outline-none focus:border-brand-navy font-medium cursor-pointer"
            >
              <option value="all">Tüm Şehirler (39 İl - 131 Tesis)</option>
              {cityStats.map(([city, count]) => (
                <option key={city} value={city}>
                  {city} ({count} Tesis)
                </option>
              ))}
            </select>
          </div>

          {/* District Selector (if city selected) */}
          {districtList.length > 0 && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">{selectedCity} İlçeleri</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full text-xs sm:text-sm border-2 border-brand-navy/30 rounded-xl p-2.5 bg-white outline-none focus:border-brand-navy font-medium cursor-pointer"
              >
                <option value="all">Tüm {selectedCity} İlçeleri</option>
                {districtList.map(dist => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Hizmet Türü / Category */}
          <div className="space-y-2 pt-3 border-t border-brand-beige">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Hizmet Türü</label>
            <div className="space-y-1 text-xs sm:text-sm text-gray-700">
              {[
                { id: 'all', label: 'Tüm Tesisler' },
                { id: 'Köpek otelleri', label: '🐶 Köpek Oteli / Pansiyonu' },
                { id: 'Kedi otelleri', label: '🐱 Kedi Oteli / Pansiyonu' },
                { id: 'Karma', label: '🐾 Karma Pet Oteli (Kedi & Köpek)' }
              ].map(cat => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer py-1 hover:text-brand-navy">
                  <input
                    type="radio"
                    name="category"
                    checked={categoryFilter === cat.id}
                    onChange={() => setCategoryFilter(cat.id)}
                    className="text-brand-navy focus:ring-brand-navy cursor-pointer"
                  />
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-1.5 pt-3 border-t border-brand-beige">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Minimum Google Puanı</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="w-full text-xs sm:text-sm border-2 border-brand-navy/30 rounded-xl p-2.5 bg-white outline-none focus:border-brand-navy cursor-pointer"
            >
              <option value="all">Tüm Puanlar</option>
              <option value="4.8">⭐ 4.8 ve Üzeri (Olağanüstü)</option>
              <option value="4.5">⭐ 4.5 ve Üzeri (Mükemmel)</option>
              <option value="4.0">⭐ 4.0 ve Üzeri (Çok İyi)</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-1.5 pt-3 border-t border-brand-beige">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Sıralama</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full text-xs sm:text-sm border-2 border-brand-navy/30 rounded-xl p-2.5 bg-white outline-none focus:border-brand-navy cursor-pointer"
            >
              <option value="popular">En Çok Tercih Edilen (Puan & Yorum)</option>
              <option value="rating">En Yüksek Puan</option>
              <option value="reviews">En Çok Değerlendirilen</option>
              <option value="city">Şehir (A'dan Z'ye)</option>
              <option value="name">İsim (A'dan Z'ye)</option>
            </select>
          </div>
        </aside>

        {/* Listings Section */}
        <section className="col-span-1 lg:col-span-3 space-y-6">
          {/* Results bar */}
          <div className="flex justify-between items-center flex-wrap gap-2 text-xs text-gray-600 bg-brand-cream/30 p-3 rounded-2xl border border-brand-beige">
            <span>
              <strong>{filteredBoardings.length}</strong> pet oteli listeleniyor
              {selectedCity !== 'all' && <span> • <strong>{selectedCity}</strong></span>}
              {categoryFilter !== 'all' && <span> • <strong>{categoryFilter}</strong></span>}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-3xs text-gray-500">
                Görseller doğrudan Google Maps CDN üzerinden aktarılır
              </span>
            </div>
          </div>

          {filteredBoardings.length === 0 ? (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto mt-8 shadow-sm">
              <span className="text-5xl block mb-4">😿</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Eşleşen Pet Oteli Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Arama kriterlerinizle uyumlu kedi veya köpek oteli bulunamadı. Lütfen filtreleri sıfırlayarak tekrar deneyin.
              </p>
              <button
                onClick={resetFilters}
                className="bg-brand-navy hover:bg-brand-navy-hover text-white font-bold px-6 py-3 rounded-full text-sm mt-6 border-2 border-brand-navy transition-colors font-title cursor-pointer"
              >
                Tüm Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBoardings.map(boarding => {
                const images = (boarding.gallery_images && boarding.gallery_images.length > 0)
                  ? boarding.gallery_images
                  : (boarding.image_url ? [boarding.image_url] : []);
                
                const coverImage = boarding.image_url || images[0] || 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80';
                const hasLiveCamera = boarding.features?.some(f => f.toLowerCase().includes('kamera')) || boarding.camera_support;
                const path = getBoardingPath(boarding);

                return (
                  <div
                    key={boarding.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-xs border-2 border-brand-navy/10 hover:shadow-md transition-all duration-200 text-left group flex flex-col md:flex-row"
                  >
                    {/* Media Column (Cover Image + Thumbnails) */}
                    <div className="md:w-5/12 bg-gray-100 flex flex-col justify-between p-3">
                      {/* Main Cover Image */}
                      <div 
                        className="relative h-56 md:h-60 rounded-2xl overflow-hidden cursor-pointer bg-gray-200"
                        onClick={() => openGalleryModal(boarding, 0)}
                        title="Tüm fotoğrafları büyütmek için tıklayın"
                      >
                        <img
                          src={coverImage}
                          alt={`${boarding.name} - ${boarding.city} Pet Oteli`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80';
                          }}
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
                          <span className="bg-brand-navy/90 text-white text-3xs font-black px-2.5 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                            📍 {boarding.city}
                          </span>
                          {hasLiveCamera && (
                            <span className="bg-red-600 text-white text-3xs font-extrabold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 shadow-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                              Canlı Kamera
                            </span>
                          )}
                        </div>

                        {/* Bottom Image Count Overlay */}
                        <div className="absolute bottom-2.5 right-2.5 bg-black/75 text-white text-3xs font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                          <span>📸 {images.length} Fotoğraf</span>
                        </div>
                      </div>

                      {/* Thumbnail Gallery Strip */}
                      {images.length > 1 && (
                        <div className="flex items-center gap-2 mt-2 pt-1 overflow-x-auto no-scrollbar">
                          {images.slice(0, 4).map((imgUrl, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                openGalleryModal(boarding, idx);
                              }}
                              className="w-14 h-12 rounded-lg overflow-hidden border border-gray-200 shrink-0 hover:opacity-80 transition-opacity cursor-pointer relative"
                              title={`Fotoğraf ${idx + 1}`}
                            >
                              <img
                                src={imgUrl}
                                alt={`Önizleme ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </button>
                          ))}
                          {images.length > 4 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openGalleryModal(boarding, 4);
                              }}
                              className="h-12 px-2.5 bg-brand-beige/60 hover:bg-brand-beige text-brand-navy font-bold text-3xs rounded-lg shrink-0 flex items-center justify-center transition-colors cursor-pointer"
                            >
                              +{images.length - 4} daha
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        {/* Service Type & Trust Badge */}
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <span className="text-2xs font-bold text-brand-navy uppercase tracking-wider bg-brand-earth-light px-2.5 py-0.5 rounded-md">
                            {boarding.service_type || boarding.category || 'Pet Oteli'}
                          </span>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {boarding.rating && (
                              <span className="text-xs font-black bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                ★ {boarding.rating} / 5.0
                                {boarding.review_count > 0 && (
                                  <span className="text-3xs text-gray-600 font-normal">
                                    ({boarding.review_count} yorum)
                                  </span>
                                )}
                              </span>
                            )}
                            <span className="inline-flex items-center text-3xs text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                              ✓ Doğrulandı
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="font-title text-xl font-bold text-gray-900 group-hover:text-brand-navy transition-colors">
                          <a
                            href={path}
                            onClick={(e) => {
                              e.preventDefault();
                              onViewChange('boarding-detail', boarding.id, path);
                            }}
                            className="hover:underline"
                          >
                            {boarding.name}
                          </a>
                        </h2>

                        {/* Location & Contact Info */}
                        <div className="space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-start gap-1.5">
                            <span className="text-brand-navy shrink-0 mt-0.5">📍</span>
                            <span className="font-medium text-gray-700">
                              <strong>{boarding.city}</strong>, {boarding.district || 'Merkez'}
                              {boarding.address && (
                                <span className="text-gray-500 block text-3xs mt-0.5 line-clamp-1">
                                  {boarding.address}
                                </span>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {boarding.description}
                        </p>

                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {(boarding.features || []).slice(0, 3).map((feat, i) => (
                            <span
                              key={i}
                              className="text-3xs bg-brand-beige/50 px-2 py-0.5 rounded-md text-brand-navy font-medium"
                            >
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA Bar */}
                      <div className="pt-4 border-t border-brand-beige flex flex-wrap items-center justify-between gap-3">
                        {/* Direct Contacts */}
                        <div className="flex items-center gap-2 flex-wrap">
                          {boarding.phone && (
                            <a
                              href={`tel:${boarding.phone.replace(/\s+/g, '')}`}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl transition-colors border border-emerald-200"
                              title="İşletmeyi doğrudan ara"
                            >
                              <span>📞</span>
                              <span>{boarding.phone}</span>
                            </a>
                          )}
                          {boarding.website && (
                            <a
                              href={boarding.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-3xs rounded-xl transition-colors"
                              title="Resmi web sitesini ziyaret et"
                            >
                              <span>🌐 Web</span>
                            </a>
                          )}
                          {boarding.google_maps_linki && (
                            <a
                              href={boarding.google_maps_linki}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-brand-navy-light hover:bg-brand-navy-light/80 text-brand-navy font-bold text-3xs rounded-xl transition-colors"
                              title="Google Haritalar'da yol tarifi al"
                            >
                              <span>🗺️ Harita</span>
                            </a>
                          )}
                          <button
                            onClick={() => openGalleryModal(boarding, 0)}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-3xs rounded-xl transition-colors border border-amber-200 cursor-pointer"
                            title="Tüm fotoğrafları incele"
                          >
                            <span>📸 Fotoğraflar ({images.length})</span>
                          </button>
                        </div>

                        {/* Detail Link */}
                        <a
                          href={path}
                          onClick={(e) => {
                            e.preventDefault();
                            onViewChange('boarding-detail', boarding.id, path);
                          }}
                          className="bg-brand-navy hover:bg-brand-navy-hover text-white transition-colors px-4 py-2 rounded-full text-xs font-bold border border-brand-navy/10 font-title cursor-pointer ml-auto"
                        >
                          Detayları İncele &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* Lightbox / Modal for Photo Gallery */}
      {galleryModal.isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-sm"
          onClick={closeGalleryModal}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center text-white pb-3 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
            <div>
              <h3 className="font-title font-bold text-base sm:text-lg">
                {galleryModal.hotelName}
              </h3>
              <p className="text-xs text-gray-300">
                📍 {galleryModal.city} • Fotoğraf {galleryModal.currentIndex + 1} / {galleryModal.images.length}
              </p>
            </div>
            <button
              onClick={closeGalleryModal}
              className="text-white hover:text-gray-300 text-2xl font-bold p-2 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Main Large Image */}
          <div className="relative flex-1 flex items-center justify-center my-4" onClick={(e) => e.stopPropagation()}>
            {galleryModal.images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-10 bg-black/60 hover:bg-black text-white p-3 sm:p-4 rounded-full transition-colors cursor-pointer text-base sm:text-xl"
                title="Önceki Görsel (Sol Ok)"
              >
                &#10094;
              </button>
            )}

            <img
              src={galleryModal.images[galleryModal.currentIndex]}
              alt={`${galleryModal.hotelName} Görsel ${galleryModal.currentIndex + 1}`}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            {galleryModal.images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-10 bg-black/60 hover:bg-black text-white p-3 sm:p-4 rounded-full transition-colors cursor-pointer text-base sm:text-xl"
                title="Sonraki Görsel (Sağ Ok)"
              >
                &#10095;
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          {galleryModal.images.length > 1 && (
            <div
              className="flex items-center gap-2 overflow-x-auto py-2 max-w-4xl mx-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryModal.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryModal(prev => ({ ...prev, currentIndex: idx }))}
                  className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    galleryModal.currentIndex === idx ? 'border-brand-orange scale-105' : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Catalog Pagination (if server pagination is used) */}
      <CatalogPagination page={page} />

      {/* Strict 300+ Word SEO Content Section (GEMINI.md Rule 2) */}
      <div className="mt-12">
        <SeoContentSection content={seoContent.boardings} />
      </div>
    </div>
  );
}
