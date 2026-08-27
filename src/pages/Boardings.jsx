import React, { useState } from 'react';
import { DogIcon, CatIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';

export default function Boardings({ boardings, onViewChange }) {
  // Local filters state
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState('');
  const [cameraRequired, setCameraRequired] = useState(false);
  const [noCageRequired, setNoCageRequired] = useState(false);
  const [staff247Required, setStaff247Required] = useState(false);
  const [vetRequired, setVetRequired] = useState(false);

  const categories = [
    { id: 'all', label: 'Tüm Kategoriler' },
    { id: 'Kedi otelleri', label: 'Kedi Otelleri' },
    { id: 'Köpek otelleri', label: 'Köpek Otelleri' },
    { id: 'Kedi ve köpek kabul eden karma tesisler', label: 'Karma Tesisler' },
    { id: 'Ev tipi bakım merkezleri', label: 'Ev Tipi Bakım' },
    { id: 'Gündüz bakım merkezleri', label: 'Gündüz Bakım' },
  ];

  // Dynamic filter application
  const filteredBoardings = boardings.filter(b => {
    // Category check
    if (categoryFilter !== 'all' && b.category !== categoryFilter) {
      return false;
    }

    // City check
    if (selectedCity && !b.city.toLowerCase().includes(selectedCity.toLowerCase()) && !b.district.toLowerCase().includes(selectedCity.toLowerCase())) {
      return false;
    }

    // Features check
    if (cameraRequired && !b.features.includes('Canlı kamera')) {
      return false;
    }
    if (noCageRequired && !b.features.includes('Kafessiz konaklama')) {
      return false;
    }
    if (staff247Required && !b.features.includes('7/24 personel')) {
      return false;
    }
    if (vetRequired && !b.features.includes('Veteriner desteği')) {
      return false;
    }

    return true;
  });

  const resetFilters = () => {
    setCategoryFilter('all');
    setSelectedCity('');
    setCameraRequired(false);
    setNoCageRequired(false);
    setStaff247Required(false);
    setVetRequired(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="border-b border-brand-beige pb-6 mb-8 text-left">
        <h1 className="text-3xl font-bold font-title text-brand-navy">Kedi ve Köpek Otelleri</h1>
        <p className="text-gray-600 text-sm mt-1.5">
          Seyahatiniz sırasında gözünüz arkada kalmadan kedi veya köpeğinizi emanet edebileceğiniz doğrulanmış pet otellerini karşılaştırın.
        </p>
        <div className="bg-brand-orange-light border border-brand-orange/20 rounded-xl p-4 mt-4 flex items-center gap-3 text-sm text-brand-navy max-w-3xl">
          <span className="text-xl">🛡️</span>
          <span>
            <strong>Güven Güvencesi:</strong> Listelenen tüm tesisler yerinde incelenmiş, resmi ruhsatları kontrol edilmiş ve acil sağlık prosedürleri doğrulanmış işletmelerdir. <strong>İnsan otelleri bu arama sonuçlarında asla gösterilmez.</strong>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left">
          <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
            <h3 className="font-title font-bold text-lg text-gray-900">Merkez Filtreleri</h3>
            <button onClick={resetFilters} className="text-xs text-brand-navy font-bold hover:underline">Temizle</button>
          </div>

          {/* Category Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Kategori</label>
            <div className="space-y-1">
              {categories.map(cat => (
                <label key={cat.id} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer py-1">
                  <input
                    type="radio"
                    name="category"
                    checked={categoryFilter === cat.id}
                    onChange={() => setCategoryFilter(cat.id)}
                    className="text-brand-navy focus:ring-brand-navy"
                  />
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Şehir / İlçe</label>
            <input
              type="text"
              placeholder="Örn: İstanbul"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0"
            />
          </div>

          {/* Critical Boarding Amenities */}
          <div className="space-y-3 pt-3 border-t border-brand-beige">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Kriterler</label>
            
            <label className="flex items-start gap-2.5 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={cameraRequired}
                onChange={(e) => setCameraRequired(e.target.checked)}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy mt-0.5"
              />
              <span>Canlı Kamera (7/24 İzleme)</span>
            </label>

            <label className="flex items-start gap-2.5 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={noCageRequired}
                onChange={(e) => setNoCageRequired(e.target.checked)}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy mt-0.5"
              />
              <span>Kafessiz Konaklama Odaları</span>
            </label>

            <label className="flex items-start gap-2.5 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={staff247Required}
                onChange={(e) => setStaff247Required(e.target.checked)}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy mt-0.5"
              />
              <span>Geceleri Nöbetçi Personel (7/24)</span>
            </label>

            <label className="flex items-start gap-2.5 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={vetRequired}
                onChange={(e) => setVetRequired(e.target.checked)}
                className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy mt-0.5"
              />
              <span>Anlaşmalı Veteriner Kliniği</span>
            </label>
          </div>
        </aside>

        {/* Listings Grid */}
        <section className="col-span-1 lg:col-span-3 space-y-6">
          {filteredBoardings.length === 0 ? (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto mt-8 shadow-sm">
              <span className="text-5xl block mb-4">😿</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Uyumlu Bakım Merkezi Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Kriterlerinizle eşleşen kedi veya köpek oteli bulunmamaktadır. Lütfen arama filtrelerini sıfırlayın.
              </p>
              <button
                onClick={resetFilters}
                className="bg-brand-navy hover:bg-brand-navy-hover text-white font-bold px-6 py-3 rounded-full text-sm mt-6 border-2 border-brand-navy transition-colors font-title"
              >
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBoardings.map(boarding => (
                <div
                  key={boarding.id}
                  onClick={() => onViewChange('boarding-detail', boarding.id)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs border-2 border-brand-navy/10 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col md:flex-row text-left"
                >
                  {/* Image */}
                  <div className="md:w-1/3 h-52 md:h-auto bg-gray-200 relative">
                    <img src={boarding.imageUrl} alt={boarding.name} className="w-full h-full object-cover" />
                    {/* Camera Badge Overlay */}
                    {boarding.features.includes('Canlı kamera') && (
                      <span className="absolute bottom-3 left-3 bg-red-600 text-white text-3xs font-extrabold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Canlı Yayın
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-2xs font-bold text-brand-navy uppercase tracking-wider bg-brand-earth-light px-2.5 py-0.5 rounded-md">
                          {boarding.category}
                        </span>
                        <div className="flex items-center text-xs text-white bg-brand-navy px-2.5 py-1 rounded-full text-3xs">
                          <VerifiedBadge className="w-3.5 h-3.5 mr-0.5" /> Doğrulandı
                        </div>
                      </div>

                      <h3 className="font-title text-xl font-bold text-gray-900 group-hover:text-brand-navy transition-colors">
                        {boarding.name}
                      </h3>
                      
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <LocationIcon className="w-3.5 h-3.5 text-brand-navy" /> {boarding.city}, {boarding.district}
                      </p>

                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{boarding.description}</p>
                    </div>

                    {/* Features list & details */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-beige items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {boarding.features.slice(0, 3).map((feat, i) => (
                          <span key={i} className="text-3xs bg-brand-beige px-2.5 py-1 rounded-full text-brand-navy font-bold text-3xs">
                            {feat}
                          </span>
                        ))}
                        {boarding.features.length > 3 && (
                          <span className="text-3xs bg-brand-beige px-2.5 py-1 rounded-full text-brand-navy/60 font-bold text-3xs">
                            +{boarding.features.length - 3} daha
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-3xs text-gray-400 block font-light">Başlangıç fiyatı</span>
                          <span className="text-sm font-bold text-brand-navy">{boarding.price}</span>
                        </div>
                        <button className="bg-brand-navy hover:bg-brand-navy-hover text-white transition-colors px-5 py-2.5 rounded-full text-xs font-bold border border-brand-navy/10 font-title transition-colors">
                          Detayları İncele &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <SeoContentSection content={seoContent.boardings} />
    </div>
  );
}
