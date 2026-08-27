import React, { useState } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';

export default function Taxis({ taxis, onViewChange }) {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPet, setSelectedPet] = useState('all');

  const filteredTaxis = taxis.filter(t => {
    // City check
    if (selectedCity && !t.city.toLowerCase().includes(selectedCity.toLowerCase()) && !t.district.toLowerCase().includes(selectedCity.toLowerCase())) {
      return false;
    }
    // Pet check
    if (selectedPet !== 'all' && !t.allowedPets.includes(selectedPet)) {
      return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedCity('');
    setSelectedPet('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-brand-beige pb-6 mb-8 text-left">
        <h1 className="text-3xl font-bold font-title text-brand-navy">Pet Taksi Hizmetleri</h1>
        <p className="text-gray-600 text-sm mt-1.5">
          Patili dostlarınızın güvenli transferi için özel donanımlı, havalandırmalı ve doğrulanmış pet taksi servisleri.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left">
          <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
            <h3 className="font-title font-bold text-lg text-gray-900">Transfer Arama</h3>
            <button onClick={resetFilters} className="text-xs text-brand-navy font-bold hover:underline">Temizle</button>
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Şehir / İlçe</label>
            <input
              type="text"
              placeholder="Örn: Kadıköy veya Bodrum"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0"
            />
          </div>

          {/* Pet Allowed */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Dost Türü</label>
            <select
              value={selectedPet}
              onChange={(e) => setSelectedPet(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none bg-white cursor-pointer focus:ring-0"
            >
              <option value="all">Tüm Dostlar</option>
              <option value="dog">Köpek Taşıyan</option>
              <option value="cat">Kedi Taşıyan</option>
              <option value="bird">Kuş Taşıyan</option>
            </select>
          </div>
        </aside>

        {/* Listings Grid */}
        <section className="col-span-1 lg:col-span-3 space-y-6">
          {filteredTaxis.length === 0 ? (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto mt-8">
              <span className="text-5xl block mb-4">🚕</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Uyumlu Pet Taksi Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Aradığınız kriterlerle eşleşen doğrulanmış transfer servisi şu an bulunmamaktadır.
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
              {filteredTaxis.map(taxi => (
                <div
                  key={taxi.id}
                  onClick={() => onViewChange('taxi-detail', taxi.id)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs border-2 border-brand-navy/10 hover:border-brand-navy hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-48 bg-gray-200">
                      <img src={taxi.imageUrl} alt={taxi.name} className="w-full h-full object-cover" />
                      
                      {/* Verification Badge */}
                      <div className="absolute top-3 left-3 bg-brand-navy text-white text-3xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                        <VerifiedBadge className="w-4 h-4 text-white" />
                        <span>Doğrulandı</span>
                      </div>
                    </div>

                    {/* Specs content */}
                    <div className="p-5 text-left space-y-3">
                      <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                        <span>Pet Taksi</span>
                        <span className="flex items-center gap-1">
                          <LocationIcon className="w-3.5 h-3.5 text-brand-navy" /> {taxi.city}, {taxi.district}
                        </span>
                      </div>

                      <h3 className="font-title text-lg font-bold text-gray-900 line-clamp-1">{taxi.name}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{taxi.description}</p>

                      {/* Pet Icons Row */}
                      <div className="flex items-center gap-2 pt-3 border-t border-brand-beige">
                        <span className="text-2xs text-gray-400">Taşıma Kapasitesi:</span>
                        <div className="flex gap-1.5 text-gray-600">
                          {taxi.allowedPets.includes('dog') && <DogIcon className="w-4.5 h-4.5 text-brand-navy" title="Köpek" />}
                          {taxi.allowedPets.includes('cat') && <CatIcon className="w-4.5 h-4.5 text-amber-600" title="Kedi" />}
                          {taxi.allowedPets.includes('bird') && <BirdIcon className="w-4.5 h-4.5 text-sky-600" title="Kuş" />}
                        </div>
                      </div>

                      {/* Pricing Tag */}
                      <div className="pt-1.5">
                        <span className="text-2xs bg-brand-navy-light px-2.5 py-1 rounded-full text-brand-navy font-bold">
                          💰 Fiyat: {taxi.price}
                        </span>
                      </div>

                      {/* Features tags */}
                      <div className="flex flex-wrap gap-1 pt-1.5">
                        {taxi.features.slice(0, 3).map((feat, idx) => (
                          <span key={idx} className="text-3xs bg-brand-beige text-brand-navy px-2.5 py-1 rounded-full font-bold">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-5 pt-0 text-left flex justify-between items-center border-t border-brand-beige/50 mt-4 bg-brand-cream/20">
                    <span className="text-3xs text-gray-400">Son Doğrulama: {taxi.lastVerified}</span>
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
    </div>
  );
}
