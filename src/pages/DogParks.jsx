import React, { useState, useMemo } from 'react';
import { DOG_WALKING_LOCATIONS, CITY_GUIDE_INTROS, VENUE_TYPES, EDITORIAL_CHECKLIST } from '../data/dogWalkingGuides';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';

export default function DogParks({ onViewChange }) {
  const [selectedCity, setSelectedCity] = useState('all'); // all, istanbul, ankara, izmir, antalya
  const [selectedVenueType, setSelectedVenueType] = useState('all'); // all, dog_park, pet_course, leash_walk
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [activeEditorNoteId, setActiveEditorNoteId] = useState(null);
  const [showChecklist, setShowChecklist] = useState(false);

  // Filtered locations
  const filteredLocations = useMemo(() => {
    return DOG_WALKING_LOCATIONS.filter(item => {
      // City filter
      if (selectedCity !== 'all' && item.citySlug !== selectedCity) return false;

      // Venue type filter
      if (selectedVenueType !== 'all' && item.venueType !== selectedVenueType) return false;

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inDistrict = item.district.toLowerCase().includes(q);
        const inCity = item.city.toLowerCase().includes(q);
        const inContent = item.content.toLowerCase().includes(q);
        if (!inTitle && !inDistrict && !inCity && !inContent) return false;
      }

      return true;
    });
  }, [selectedCity, selectedVenueType, searchQuery]);

  // City counts
  const countsByCity = useMemo(() => {
    const counts = { all: DOG_WALKING_LOCATIONS.length, istanbul: 0, ankara: 0, izmir: 0, antalya: 0 };
    for (const loc of DOG_WALKING_LOCATIONS) {
      if (counts[loc.citySlug] !== undefined) counts[loc.citySlug]++;
    }
    return counts;
  }, []);

  // Venue type counts
  const countsByType = useMemo(() => {
    const counts = { all: DOG_WALKING_LOCATIONS.length, dog_park: 0, pet_course: 0, leash_walk: 0 };
    for (const loc of DOG_WALKING_LOCATIONS) {
      if (counts[loc.venueType] !== undefined) counts[loc.venueType]++;
    }
    return counts;
  }, []);

  const resetFilters = () => {
    setSelectedCity('all');
    setSelectedVenueType('all');
    setSearchQuery('');
  };

  const toggleExpand = (id) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  const toggleEditorNote = (id) => {
    setActiveEditorNoteId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
      {/* Top Badges & Header */}
      <div className="border-b border-brand-beige pb-6 mb-6">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="bg-emerald-100 text-emerald-800 text-3xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            ✓ 4 Büyükşehir Saha Rehberi (18 Eylül 2026)
          </span>
          <span className="bg-brand-navy-light text-brand-navy text-3xs font-bold px-3 py-1 rounded-full">
            📍 32 Tekil Konum
          </span>
          <span className="bg-amber-100 text-amber-900 text-3xs font-bold px-3 py-1 rounded-full">
            🛡️ 3 Farklı Güvenlik Kategorisi
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold font-title text-brand-navy">
          İstanbul, Ankara, İzmir ve Antalya Köpek Gezdirme Rehberi
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-4xl leading-relaxed">
          Halka açık özel köpek parkları, belediye evcil hayvan parkurları ve köpekle tasmalı yürüyüşe uygun kamusal rota rehberi. 
          Çevrili alan güvenliği, zemin yapısı, gölgelikler ve sahadan doğrulanan pratik ziyaret notları.
        </p>

        {/* Passage-First Direct Answer Block (GEMINI.md Rule 2) */}
        <div className="bg-brand-orange-light/60 border border-brand-orange/30 rounded-2xl p-4 sm:p-5 mt-4 text-sm text-brand-navy max-w-4xl leading-relaxed shadow-xs">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">🛡️</span>
            <div>
              <p className="font-bold text-brand-navy text-base mb-1">
                Alan Türü Ayrımı & Güvenli Köpek Gezdirme Standartları
              </p>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Bu rehberde üç farklı alan türü özellikle ayrılmıştır: 
                <strong> 1) Özel köpek alanı</strong> (belediyelerce ayrılmış çevrili ve kurallarda izin verilen tasmasız parklar), 
                <strong> 2) Evcil hayvan parkuru</strong> (kamusal park içindeki tırmanma ve çeviklik ekipmanları), 
                <strong> 3) Tasmalı yürüyüş rotası</strong> (kamusal park, sahil ve vadi yolları). 
                Geniş çim alanlar veya sahil promenadları köpek parkı değildir; köpeklerin ortak alanlarda kısa tasma ile kontrol altında tutulması, dışkı poşetinin taşınması ve yerel tabelalara uyulması zorunludur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* City Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
        {[
          { id: 'all', label: 'Tüm Şehirler', count: countsByCity.all, icon: '🇹🇷' },
          { id: 'istanbul', label: 'İstanbul', count: countsByCity.istanbul, icon: '🏙️' },
          { id: 'ankara', label: 'Ankara', count: countsByCity.ankara, icon: '🏛️' },
          { id: 'izmir', label: 'İzmir', count: countsByCity.izmir, icon: '🌊' },
          { id: 'antalya', label: 'Antalya', count: countsByCity.antalya, icon: '🌴' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedCity(tab.id)}
            className={`px-4 py-2 rounded-2xl font-bold text-xs transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedCity === tab.id
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white border-2 border-brand-navy/10 text-gray-700 hover:bg-brand-navy-light'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            <span className={`text-3xs px-2 py-0.5 rounded-full font-black ${
              selectedCity === tab.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Dynamic City Introductory Guidance Block */}
      {selectedCity !== 'all' && CITY_GUIDE_INTROS[selectedCity] && (
        <div className="bg-brand-cream/40 border border-brand-beige rounded-2xl p-4 sm:p-5 mb-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <h2 className="font-bold text-brand-navy text-base mb-1">
            {CITY_GUIDE_INTROS[selectedCity].title}
          </h2>
          <p>{CITY_GUIDE_INTROS[selectedCity].description}</p>
        </div>
      )}

      {/* Preset Filter Chips (GEMINI.md Rule 2) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar text-xs">
        <button
          onClick={() => setSelectedVenueType('all')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
            selectedVenueType === 'all'
              ? 'bg-brand-navy text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          🐾 Tüm Türler ({countsByType.all})
        </button>
        <button
          onClick={() => setSelectedVenueType(selectedVenueType === 'dog_park' ? 'all' : 'dog_park')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            selectedVenueType === 'dog_park'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200'
          }`}
        >
          <span>🐕</span> Özel Köpek Alanları ({countsByType.dog_park})
        </button>
        <button
          onClick={() => setSelectedVenueType(selectedVenueType === 'pet_course' ? 'all' : 'pet_course')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            selectedVenueType === 'pet_course'
              ? 'bg-amber-800 text-white shadow-xs'
              : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
          }`}
        >
          <span>🎯</span> Evcil Hayvan Parkurları ({countsByType.pet_course})
        </button>
        <button
          onClick={() => setSelectedVenueType(selectedVenueType === 'leash_walk' ? 'all' : 'leash_walk')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            selectedVenueType === 'leash_walk'
              ? 'bg-sky-800 text-white shadow-xs'
              : 'bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200'
          }`}
        >
          <span>🦮</span> Tasmalı Yürüyüş Rotaları ({countsByType.leash_walk})
        </button>
      </div>

      {/* Search & Counter Bar */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6 bg-white p-3.5 rounded-2xl border-2 border-brand-navy/10 shadow-xs">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="Park, ilçe veya rota ara... (Örn: Avcılar, Göksu, Bostanlı)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs sm:text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 pl-8 outline-none focus:border-brand-navy transition-colors"
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

        <div className="flex items-center gap-3 text-xs text-gray-600">
          <span>
            <strong>{filteredLocations.length}</strong> konum listeleniyor
          </span>
          {(selectedCity !== 'all' || selectedVenueType !== 'all' || searchQuery) && (
            <button
              onClick={resetFilters}
              className="text-brand-navy font-bold hover:underline cursor-pointer"
            >
              Filtreleri Temizle
            </button>
          )}
        </div>
      </div>

      {/* Locations List Grid */}
      {filteredLocations.length === 0 ? (
        <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto my-8 shadow-sm">
          <span className="text-5xl block mb-4">🐕</span>
          <h3 className="font-title font-bold text-xl text-gray-800">Eşleşen Konum Bulunamadı</h3>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Seçili filtrelerle eşleşen park veya yürüyüş rotası bulunamadı. Lütfen arama terimini temizleyin.
          </p>
          <button
            onClick={resetFilters}
            className="bg-brand-navy hover:bg-brand-navy-hover text-white font-bold px-6 py-2.5 rounded-full text-xs mt-6 border-2 border-brand-navy transition-colors cursor-pointer"
          >
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredLocations.map(location => {
            const venue = VENUE_TYPES[location.venueType] || VENUE_TYPES.leash_walk;
            const isExpanded = expandedCardId === location.id;
            const showEditor = activeEditorNoteId === location.id;

            return (
              <article
                key={location.id}
                className="bg-white rounded-3xl border-2 border-brand-navy/10 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="p-6 space-y-3.5">
                  {/* Card Header & Badge */}
                  <div className="flex justify-between items-start gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1 text-3xs font-extrabold px-2.5 py-1 rounded-full border ${venue.badgeClass}`}>
                      <span>{venue.icon}</span>
                      <span>{location.venueTypeLabel}</span>
                    </span>
                    <span className="text-3xs font-bold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                      📍 {location.city} • {location.district}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-title text-lg font-bold text-gray-900 group-hover:text-brand-navy leading-snug">
                    {location.title}
                  </h3>

                  {/* Location address */}
                  <p className="text-xs text-gray-600 flex items-start gap-1 font-medium">
                    <span className="text-brand-navy shrink-0 mt-0.5">📌</span>
                    <span>{location.location}</span>
                  </p>

                  {/* Meta description */}
                  <p className="text-xs text-gray-600 leading-relaxed bg-brand-cream/30 p-3 rounded-xl border border-brand-beige">
                    {location.metaDescription}
                  </p>

                  {/* Expandable full content */}
                  {isExpanded && (
                    <div className="text-xs text-gray-700 leading-relaxed space-y-2 pt-2 border-t border-brand-beige animate-fadeIn">
                      {location.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {/* Editor note toggleable drawer */}
                  {showEditor && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-3xs text-amber-900 space-y-1 animate-fadeIn">
                      <p className="font-bold">⚠️ Editör Teyidi & Doğrulama:</p>
                      <p>{location.editorNote}</p>
                      <p className="text-gray-500 font-medium">
                        <strong>Dayanak:</strong> {location.sources}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Action Bar */}
                <div className="p-4 bg-gray-50/80 border-t border-brand-beige flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <a
                      href={location.mapQuery}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-brand-navy text-white text-3xs font-bold rounded-xl hover:bg-brand-navy-hover transition-colors"
                      title="Google Haritalar'da konumu ara"
                    >
                      <span>🗺️ Haritada Ara</span>
                    </a>
                    <button
                      onClick={() => toggleEditorNote(location.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white border border-gray-200 text-gray-600 text-3xs font-medium rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                      title="Editör notu ve kaynak teyidi"
                    >
                      <span>🛡️ Teyit Notu</span>
                    </button>
                  </div>

                  <button
                    onClick={() => toggleExpand(location.id)}
                    className="text-xs text-brand-navy font-bold hover:underline cursor-pointer ml-auto"
                  >
                    {isExpanded ? 'Daha Az Gör ▲' : 'Rehberi Oku ▼'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Editorial Checklist & CMS Standard Section */}
      <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-6 sm:p-8 mb-12 shadow-xs">
        <div className="flex justify-between items-center flex-wrap gap-4 pb-4 border-b border-brand-beige">
          <div>
            <h3 className="font-title font-bold text-lg text-brand-navy">
              patili.co Köpek Parkı Yayına Alma ve Doğrulama Standartları
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Topluluk ve saha ekibimizin her bir konumu teyit ederken uyguladığı 11 maddelik yayın öncesi güvenlik protokolü.
            </p>
          </div>
          <button
            onClick={() => setShowChecklist(!showChecklist)}
            className="px-4 py-2 bg-brand-cream border border-brand-beige text-brand-navy font-bold text-xs rounded-xl hover:bg-brand-beige transition-colors cursor-pointer"
          >
            {showChecklist ? 'Kontrol Listesini Kapat ▲' : '11 Maddelik Listeyi İncele ▼'}
          </button>
        </div>

        {showChecklist && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 animate-fadeIn">
            {EDITORIAL_CHECKLIST.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-emerald-700 font-bold">☑</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Strict 300+ Word SEO Content Section (GEMINI.md Rule 2) */}
      <SeoContentSection content={seoContent.parksAndBeaches} />
    </div>
  );
}
