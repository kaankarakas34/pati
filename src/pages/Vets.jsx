import React, { useState } from 'react';
import { VerifiedBadge, LocationIcon } from '../components/PetIcons';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';

function trNormalize(str) {
  if (!str) return '';
  return str.toString()
    .replace(/İ/g, 'i').replace(/I/g, 'ı').replace(/Ğ/g, 'g').replace(/Ü/g, 'u').replace(/Ş/g, 's').replace(/Ö/g, 'o').replace(/Ç/g, 'c')
    .replace(/i̇/g, 'i').toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c');
}

export default function Vets({ vets = [], onViewChange }) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hasICU, setHasICU] = useState(false);

  // Extract unique cities list
  const cities = Array.from(new Set((vets || []).map(v => v.city).filter(Boolean))).sort((a, b) => a.localeCompare(b, 'tr'));

  const filteredVets = (vets || []).filter(v => {
    // City Dropdown Filter
    if (selectedCity !== 'all' && trNormalize(v.city) !== trNormalize(selectedCity)) {
      return false;
    }
    // Search Query (City, District, Name, Address)
    if (searchQuery.trim() !== '') {
      const q = trNormalize(searchQuery);
      const nameMatch = trNormalize(v.name).includes(q);
      const cityMatch = trNormalize(v.city).includes(q);
      const districtMatch = trNormalize(v.district).includes(q);
      const addressMatch = trNormalize(v.address).includes(q);
      if (!nameMatch && !cityMatch && !districtMatch && !addressMatch) {
        return false;
      }
    }
    // ICU Filter
    if (hasICU) {
      const featuresStr = trNormalize((v.features || []).join(' '));
      if (!featuresStr.includes('yogun bakim')) {
        return false;
      }
    }
    return true;
  });

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
            Seyahatiniz sırasında acil durumlar için 24 saat kesintisiz hizmet veren, cerrahi ve yoğun bakım altyapısına sahip doğrulanmış veteriner klinikleri.
          </p>
        </div>
        <div className="bg-brand-navy text-white text-xs font-bold px-4 py-2 rounded-2xl whitespace-nowrap self-start md:self-auto shadow-xs">
          <span>🏥 {filteredVets.length} Nöbetçi Klinik Listeleniyor</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left">
          <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
            <h3 className="font-title font-bold text-lg text-gray-900">Klinik Filtrele</h3>
            <button onClick={resetFilters} className="text-xs text-brand-navy font-bold hover:underline">Filtreleri Sıfırla</button>
          </div>

          {/* City Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Şehir Seçin</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0 bg-white cursor-pointer font-medium"
            >
              <option value="all">Tüm Şehirler ({vets.length} Klinik)</option>
              {cities.map(c => {
                const count = vets.filter(v => v.city === c).length;
                return (
                  <option key={c} value={c}>{c} ({count} Klinik)</option>
                );
              })}
            </select>
          </div>

          {/* Text Search Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">İlçe veya Klinik Adı</label>
            <input
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

        {/* Listings Grid */}
        <section className="col-span-1 lg:col-span-3 space-y-6">
          {filteredVets.length === 0 ? (
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
                  onClick={() => onViewChange('vet-detail', vet.id)}
                  className="bg-white rounded-3xl p-5 shadow-xs border-2 border-brand-navy/10 hover:border-brand-navy hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3 text-left">
                    {/* Header Row with Badges */}
                    <div className="flex items-center justify-between gap-2 border-b border-brand-beige pb-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="bg-red-600 text-white text-3xs font-black px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                          🔴 7/24 ACİL
                        </span>
                        <span className="bg-emerald-100 text-emerald-800 text-3xs font-bold px-2.5 py-1 rounded-full">
                          Nöbetçi Hekim
                        </span>
                      </div>

                      <div className="text-2xs font-extrabold text-brand-navy bg-brand-navy-light px-2.5 py-1 rounded-full flex items-center gap-1">
                        <VerifiedBadge className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Doğrulanmış</span>
                      </div>
                    </div>

                    {/* Clinic Name & Location */}
                    <div>
                      <h3 className="font-title text-base font-bold text-gray-950 line-clamp-1">{vet.name}</h3>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 font-medium">
                        <LocationIcon className="w-3.5 h-3.5 text-brand-earth flex-shrink-0" />
                        <span>{vet.city}, {vet.district}</span>
                      </p>
                    </div>

                    {/* Address details */}
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed bg-brand-cream/40 p-2.5 rounded-xl border border-brand-navy/5">
                      📍 {vet.address}
                    </p>

                    {/* Features Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {(vet.features || []).map((feat, idx) => (
                        <span key={idx} className="text-3xs bg-brand-beige text-brand-navy px-2.5 py-0.5 rounded-full font-bold">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Phone Call Action Bar */}
                  <div className="pt-4 mt-3 border-t border-brand-beige/60 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-gray-800">
                      📞 {vet.phone || 'Telefon Teyit Edin'}
                    </span>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-xs font-title">
                      <span>Hemencek Ara</span> &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <SeoContentSection content={seoContent.vets || {}} />
    </div>
  );
}
