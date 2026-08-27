import React, { useState } from 'react';
import { VerifiedBadge, LocationIcon } from '../components/PetIcons';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';

export default function Vets({ vets, onViewChange }) {
  const [selectedCity, setSelectedCity] = useState('');
  const [hasICU, setHasICU] = useState(false);

  const filteredVets = vets.filter(v => {
    // City check
    if (selectedCity && !v.city.toLowerCase().includes(selectedCity.toLowerCase()) && !v.district.toLowerCase().includes(selectedCity.toLowerCase())) {
      return false;
    }
    // ICU check
    if (hasICU && !v.features.some(f => f.toLowerCase().includes('yoğun bakım'))) {
      return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedCity('');
    setHasICU(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-brand-beige pb-6 mb-8 text-left">
        <h1 className="text-3xl font-bold font-title text-brand-navy">7/24 Nöbetçi & Acil Veterinerler</h1>
        <p className="text-gray-600 text-sm mt-1.5">
          Seyahatiniz sırasında yaşanabilecek her türlü sağlık probleminde 24 saat kesintisiz cerrahi müdahale ve acil servis desteği sunan doğrulanmış klinikler.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left">
          <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
            <h3 className="font-title font-bold text-lg text-gray-900">Klinik Arama</h3>
            <button onClick={resetFilters} className="text-xs text-brand-navy font-bold hover:underline">Temizle</button>
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Şehir / İlçe</label>
            <input
              type="text"
              placeholder="Örn: Bodrum veya İstanbul"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0"
            />
          </div>

          {/* Emergency ICU */}
          <div className="space-y-2 pt-2 border-t border-brand-beige">
            <label className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={hasICU}
                onChange={(e) => setHasICU(e.target.checked)}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
              />
              <span className="font-medium text-xs">Yoğun Bakım Ünitesi Olan</span>
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
                Aradığınız bölgede 24 saat kesintisiz hizmet veren doğrulanmış veteriner kliniği bulunamamıştır.
              </p>
              <button
                onClick={resetFilters}
                className="bg-brand-navy text-white font-bold px-6 py-3 rounded-full text-sm mt-6 border-2 border-brand-navy hover:bg-brand-navy-hover transition-colors"
              >
                Aramayı Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVets.map(vet => (
                <div
                  key={vet.id}
                  onClick={() => onViewChange('vet-detail', vet.id)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs border-2 border-brand-navy/10 hover:border-brand-navy hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-48 bg-gray-200">
                      <img src={vet.imageUrl} alt={vet.name} className="w-full h-full object-cover" />
                      
                      {/* Verification Badge */}
                      <div className="absolute top-3 left-3 bg-brand-navy text-white text-3xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                        <VerifiedBadge className="w-4 h-4 text-white" />
                        <span>Doğrulandı</span>
                      </div>

                      {/* 24/7 Red Badge */}
                      <span className="absolute bottom-3 right-3 bg-red-600 text-white text-3xs font-extrabold px-3 py-1.5 rounded-full shadow-md animate-pulse">
                        🔴 7/24 AÇIK ACİL
                      </span>
                    </div>

                    {/* Specs content */}
                    <div className="p-5 text-left space-y-3">
                      <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                        <span>Veteriner Kliniği</span>
                        <span className="flex items-center gap-1">
                          <LocationIcon className="w-3.5 h-3.5 text-brand-navy" /> {vet.city}, {vet.district}
                        </span>
                      </div>

                      <h3 className="font-title text-lg font-bold text-gray-900 line-clamp-1">{vet.name}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{vet.description}</p>
                      <p className="text-3xs text-gray-500 font-medium flex items-start gap-0.5">
                        📍 <strong>Adres:</strong> {vet.address}
                      </p>

                      {/* Features tags */}
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-brand-beige">
                        {vet.features.slice(0, 3).map((feat, idx) => (
                          <span key={idx} className="text-3xs bg-brand-beige text-brand-navy px-2.5 py-1 rounded-full font-bold">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-5 pt-0 text-left flex justify-between items-center border-t border-brand-beige/50 mt-4 bg-brand-cream/20">
                    <span className="text-3xs text-gray-400">Son Doğrulama: {vet.lastVerified}</span>
                    <button className="bg-brand-navy hover:bg-brand-navy-hover text-white transition-colors px-5 py-2.5 rounded-full text-xs font-bold font-title border border-brand-navy/10">
                      Detay & Yorumlar &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <SeoContentSection content={seoContent.vets} />
    </div>
  );
}
