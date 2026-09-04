import { useCatalog } from '../lib/useCatalog';
import CatalogPagination from '../components/CatalogPagination';
import React, { useState } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import PetTaxiAdBanner from '../components/PetTaxiAdBanner';

export default function Taxis({ taxis = [], onViewChange }) {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPet, setSelectedPet] = useState('all');

  const page = useCatalog('taxis', { q: selectedCity, pet: selectedPet });
  const filteredTaxis = page.items;

  const resetFilters = () => {
    setSelectedCity('');
    setSelectedPet('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Prominent Pet Taksi Sponsor Banner */}
      <PetTaxiAdBanner onViewChange={onViewChange} />

      {/* Page Header */}
      <div className="border-b border-brand-beige pb-6 text-left">
        <h1 className="text-3xl font-bold font-title text-brand-navy">Sponsorlu Pet Taksi ve Transfer İlanları</h1>
        <p className="text-gray-600 text-sm mt-1.5">
          Sponsorlu pet taksi ve VIP evcil hayvan transfer işletmelerinin doğrulanmış iletişim bilgileri.
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
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto">
              <span className="text-5xl block mb-4">🚕</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Pet Taksi / Transfer Sponsor İlanı Verin</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Bu bölgede henüz aktif sponsorlu pet taksi bulunmamaktadır. İşletmenizi öne çıkarmak için sponsorluk talebinde bulunabilirsiniz.
              </p>
              <button
                onClick={() => onViewChange ? onViewChange('trust-ads') : (window.location.href = '/trust-ads')}
                className="bg-brand-navy text-white font-bold px-6 py-3 rounded-full text-sm mt-6 border-2 border-brand-navy hover:bg-brand-navy-hover transition-colors"
              >
                📢 Sponsorlu İlan Verin
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTaxis.map(t => (
                <div key={t.id} className="bg-white rounded-3xl p-6 border-2 border-brand-navy/10 hover:border-brand-navy transition-all shadow-sm flex flex-col justify-between text-left">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-xs bg-brand-yellow/30 text-brand-navy font-bold px-2.5 py-0.5 rounded-full">
                          Sponsorlu Transfer
                        </span>
                        <h3 className="text-xl font-bold font-title text-brand-navy mt-2">{t.name}</h3>
                      </div>
                      {t.verified && <VerifiedBadge score={t.baseTrustScore || 9.0} />}
                    </div>
                    <p className="text-gray-600 text-xs flex items-center gap-1 mb-3">
                      <LocationIcon className="w-4 h-4 text-brand-navy" />
                      <span>{t.district}, {t.city}</span>
                    </p>
                    <p className="text-gray-700 text-xs leading-relaxed line-clamp-3 mb-4">{t.description}</p>
                  </div>
                  <div className="pt-4 border-t border-brand-beige flex items-center justify-between">
                    <a href={`tel:${t.phone}`} className="text-brand-navy font-bold text-xs hover:underline flex items-center gap-1">
                      📞 {t.phone || 'Telefonu Göster'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <CatalogPagination page={page} />

      <SeoContentSection data={seoContent.taxis} />
    </div>
  );
}
