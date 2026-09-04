import { useCatalog } from '../lib/useCatalog';
import CatalogPagination from '../components/CatalogPagination';
import React, { useState, useEffect } from 'react';
import { LocationIcon } from '../components/PetIcons';
import AdBanner from '../components/AdBanner';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import { slugify } from '../../lib/seo-slugs';

export default function Vets({ onViewChange }) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hasICU, setHasICU] = useState(false);

  const [cities, setCities] = useState([]);
  const [citiesError, setCitiesError] = useState('');
  const [citiesAttempt, setCitiesAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setCitiesError('');
    fetch('/api/locations', { signal: controller.signal })
      .then(async response => {
        const data = await response.json();
        if (!response.ok || !Array.isArray(data)) throw new Error(data.error || 'Şehirler yüklenemedi.');
        if (!controller.signal.aborted) setCities(data.map(location => location.city));
      })
      .catch(error => { if (!controller.signal.aborted) setCitiesError(error.message); });
    return () => controller.abort();
  }, [citiesAttempt]);

  const page = useCatalog('vets', { q: slugify(searchQuery).length >= 3 ? searchQuery : '', city: selectedCity, feature: hasICU ? ['Yoğun Bakım Ünitesi'] : [] });
  const filteredVets = page.items;

  const resetFilters = () => {
    setSelectedCity('all');
    setSearchQuery('');
    setHasICU(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-brand-beige pb-6 mb-8 text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-3xs font-extrabold mb-2">
            <span>🚨 7/24 NÖBETÇİ VE ACİL SERVİS KLİNİKLERİ</span>
          </div>
          <h1 className="text-3xl font-bold font-title text-brand-navy">7/24 Acil Nöbetçi Veterinerler</h1>
          <p className="text-gray-600 text-sm mt-1.5">
            Seyahatiniz sırasında acil durumlar için 24 saat kesintisiz hizmet veren, cerrahi ve yoğun bakım altyapısına sahip veteriner klinikleri.
          </p>
        </div>
        <div className="bg-brand-navy text-white text-xs font-bold px-4 py-2 rounded-2xl whitespace-nowrap self-start md:self-auto shadow-xs">
          <span>🏥 {filteredVets.length} Nöbetçi Klinik Listeleniyor</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="space-y-6">
          <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left">
            <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
              <h3 className="font-title font-bold text-lg text-gray-900">Klinik Filtrele</h3>
              <button onClick={resetFilters} className="text-xs text-brand-navy font-bold hover:underline">Filtreleri Sıfırla</button>
            </div>

            {/* City Dropdown */}
            <div className="space-y-2">
              <label htmlFor="vet-city-select" className="text-xs font-bold text-gray-600 uppercase tracking-wider block">Şehir Seçin</label>
              <select
                id="vet-city-select"
                aria-label="Veteriner şehir seçin"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0 bg-white cursor-pointer font-medium"
              >
                <option value="all">Tüm Şehirler</option>
                {cities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
              {citiesError && <div><p role="alert">{citiesError}</p><button className="underline" onClick={() => setCitiesAttempt(value => value + 1)}>Tekrar dene</button></div>}
            </div>

            {/* Text Search Input */}
            <div className="space-y-2">
              <label htmlFor="vet-search-input" className="text-xs font-bold text-gray-600 uppercase tracking-wider block">İlçe veya Klinik Adı</label>
              <input
                id="vet-search-input"
                aria-label="Aramak istediğiniz ilçe veya veteriner kliniği adı"
                type="text"
                placeholder="Örn: Kepez, Muratpaşa, Gala..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0"
              />
            </div>

            {/* Emergency ICU Checkbox */}
            <div className="space-y-2 pt-2 border-t border-brand-beige">
              <label className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasICU}
                  onChange={(e) => setHasICU(e.target.checked)}
                  className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
                />
                <span className="font-medium text-xs">Yoğun Bakım Ünitesi Olanlar</span>
              </label>
            </div>
          </aside>

          {/* Standalone Fixed Sticky Ad Banner */}
          <div className="sticky top-24">
            <AdBanner type="square" onViewChange={onViewChange} />
          </div>
        </div>

        {/* Listings Grid */}
        <section className="col-span-1 lg:col-span-3 space-y-6">
          {page.loading || page.error ? <CatalogPagination page={page} /> : filteredVets.length === 0 ? (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto mt-8">
              <span className="text-5xl block mb-4">🏥</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Acil Klinik Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Seçtiğiniz filtreye uygun 24 saat kesintisiz hizmet veren veteriner kliniği bulunamamıştır.
              </p>
              <button
                onClick={resetFilters}
                className="bg-brand-navy text-white font-bold px-6 py-3 rounded-full text-sm mt-6 border-2 border-brand-navy hover:bg-brand-navy-hover transition-colors font-title"
              >
                Tüm Klinikleri Göster
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVets.map(vet => (
                <div
                  key={vet.id}
                  className="bg-white rounded-3xl p-6 shadow-xs border-2 border-brand-navy/10 hover:border-brand-navy/30 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3 text-left">
                    {/* Header Row with Badges */}
                    <div className="flex items-center justify-between gap-2 border-b border-brand-beige pb-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="bg-red-600 text-white text-3xs font-black px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                          🔴 7/24 ACİL SERVİS
                        </span>
                        <span className="bg-emerald-100 text-emerald-800 text-3xs font-extrabold px-2.5 py-1 rounded-full">
                          Nöbetçi Hekim Var
                        </span>
                      </div>
                    </div>

                    {/* Clinic Name & Location */}
                    <div>
                      <h3
                        onClick={() => onViewChange && onViewChange('vet-detail', vet.id)}
                        className="font-title text-lg font-bold text-gray-950 hover:text-brand-navy cursor-pointer transition-colors"
                      >
                        {vet.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 font-semibold">
                        <LocationIcon className="w-3.5 h-3.5 text-brand-earth flex-shrink-0" />
                        <span>{vet.city}, {vet.district}</span>
                      </p>
                    </div>

                    {/* Address details */}
                    <div className="text-xs text-gray-700 leading-relaxed bg-brand-cream/50 p-3 rounded-2xl border border-brand-navy/10 font-medium">
                      📍 {vet.address}
                    </div>

                    {/* Description if present */}
                    {vet.description && (
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {vet.description}
                      </p>
                    )}

                    {/* Features Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {(vet.features || []).map((feat, idx) => (
                        <span key={idx} className="text-3xs bg-brand-beige text-brand-navy px-2.5 py-1 rounded-full font-bold">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Phone Call & Website Actions (No card click, No 'Hemencek Ara') */}
                  <div className="pt-4 mt-4 border-t border-brand-beige flex flex-col sm:flex-row items-center gap-2">
                    <a
                      href={`/veteriner/${encodeURIComponent(vet.id)}`}
                      onClick={event => { event.preventDefault(); onViewChange('vet-detail', vet.id); }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 px-4 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-xs font-title"
                    >
                      <span>📞 {vet.phone || 'İletişim Bilgileri'}</span>
                    </a>
                    {vet.website && (
                      <a
                        href={vet.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-brand-navy-light hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-xs py-3 px-4 rounded-2xl transition-colors flex items-center justify-center whitespace-nowrap border border-brand-navy/10"
                      >
                        🌐 Web Sitesi
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <CatalogPagination page={page} />
      <SeoContentSection content={seoContent.vets || {}} />
    </div>
  );
}
