import { useCatalog } from '../lib/useCatalog';
import CatalogPagination from '../components/CatalogPagination';
import DetailLoader from '../components/DetailLoader';
import React, { useState } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, LocationIcon, VerifiedBadge } from '../components/PetIcons';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';
import { slugify } from '../../lib/seo-slugs';

export default function Experiences() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPet, setSelectedPet] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['all', 'Plaj & Sahil', 'Kafe & Restoran', 'Rota & Aktivite'];

  const page = useCatalog('experiences', { q: slugify(selectedCity).length >= 3 ? selectedCity : '', category: selectedCategory, pet: selectedPet });
  const filteredExperiences = page.items;

  const resetFilters = () => {
    setSelectedCity('');
    setSelectedCategory('all');
    setSelectedPet('all');
  };

  const renderPetIcons = (allowedPets = []) => (
    <div className="flex gap-1.5 text-gray-600">
      {allowedPets.includes('dog') && <DogIcon className="w-4.5 h-4.5 text-brand-navy" />}
      {allowedPets.includes('cat') && <CatIcon className="w-4.5 h-4.5 text-amber-600" />}
      {allowedPets.includes('bird') && <BirdIcon className="w-4.5 h-4.5 text-sky-600" />}
      {allowedPets.includes('other') && <OtherIcon className="w-4.5 h-4.5 text-purple-600" />}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="border-b border-brand-beige pb-6 mb-8 text-left">
        <h1 className="text-3xl font-bold font-title text-brand-navy">Evcil Hayvanla Gezilecek Yerler</h1>
        <p className="text-gray-600 text-sm mt-1.5 max-w-3xl">
          Tatilde sadece nerede kalacağınızı değil, dostunuzla nerede yürüyebileceğinizi, kahve içebileceğinizi, denize girebileceğinizi ve acil durumda nereye yakın olduğunuzu keşfedin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-6 bg-white p-6 rounded-3xl border-2 border-brand-navy/10 shadow-sm text-left">
          <div className="flex justify-between items-center pb-4 border-b border-brand-beige">
            <h3 className="font-title font-bold text-lg text-gray-900">Deneyim Filtreleri</h3>
            <button onClick={resetFilters} className="text-xs text-brand-navy font-bold hover:underline">Temizle</button>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Şehir / İlçe</label>
            <input
              type="text"
              placeholder="Örn: Bodrum, Kadıköy"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Kategori</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none bg-white cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category === 'all' ? 'Tüm Kategoriler' : category}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Dost Türü</label>
            <select
              value={selectedPet}
              onChange={(e) => setSelectedPet(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none bg-white cursor-pointer"
            >
              <option value="all">Tüm Dostlar</option>
              <option value="dog">Köpek Uygun</option>
              <option value="cat">Kedi Uygun</option>
              <option value="bird">Kuş Uygun</option>
              <option value="other">Diğer Dostlar</option>
            </select>
          </div>
        </aside>

        <section className="col-span-1 lg:col-span-3">
          {page.loading || page.error ? <CatalogPagination page={page} /> : filteredExperiences.length === 0 ? (
            <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-xl mx-auto mt-8">
              <span className="text-5xl block mb-4">🔎</span>
              <h3 className="font-title font-bold text-xl text-gray-800">Uygun Deneyim Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">Filtreleri gevşeterek yakın şehir veya farklı kategori deneyebilirsiniz.</p>
              <button onClick={resetFilters} className="bg-brand-navy text-white font-bold px-6 py-3 rounded-full text-sm mt-6 border-2 border-brand-navy hover:bg-brand-navy-hover transition-colors">
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredExperiences.map(item => (
                <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xs border-2 border-brand-navy/10 hover:border-brand-navy hover:shadow-md transition-all duration-200 text-left">
                  <div className="relative h-52 bg-gray-200">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-brand-navy text-white text-3xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                      <VerifiedBadge className="w-4 h-4 text-white" />
                      <span>Doğrulandı</span>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-white/95 text-brand-navy text-3xs font-extrabold px-3 py-1 rounded-full shadow-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <LocationIcon className="w-3.5 h-3.5 text-brand-navy" /> {item.city}, {item.district}
                      </span>
                      <span className="text-brand-green font-bold">{item.baseTrustScore}/10</span>
                    </div>
                    <h2 className="font-title text-lg font-bold text-gray-900">{item.name}</h2>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{item.description}</p>

                    <div className="flex items-center gap-2 pt-2 border-t border-brand-beige">
                      <span className="text-2xs text-gray-400">Uygun:</span>
                      {renderPetIcons(item.allowedPets)}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {(item.features || []).slice(0, 4).map(feature => (
                        <span key={feature} className="text-3xs bg-brand-beige text-brand-navy px-2.5 py-1 rounded-full font-bold">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-3">
                      <button type="button" aria-expanded={expandedId === item.id} onClick={() => setExpandedId(current => current === item.id ? null : item.id)} className="text-brand-navy underline text-sm">
                        {expandedId === item.id ? 'Detayları Kapat' : 'Detayları Gör'}
                      </button>
                      {item.mapUrl && (
                        <a href={item.mapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-brand-navy text-white px-4 py-2.5 rounded-full text-xs font-bold font-title">
                          Haritada Aç
                        </a>
                      )}
                      {item.website && (
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border-2 border-brand-navy text-brand-navy px-4 py-2 rounded-full text-xs font-bold font-title">
                          Web Sitesi
                        </a>
                      )}
                    </div>
                    {expandedId === item.id && <DetailLoader resource="experiences" id={item.id}>
                      {detail => <div className="space-y-3 text-sm">
                        <p>{detail.description}</p>
                        {detail.petPolicy && <p><strong>Pet politikası:</strong> {detail.petPolicy}</p>}
                        {detail.rules && <p>{detail.rules}</p>}
                        {detail.mapUrl && <a className="block underline" href={detail.mapUrl} target="_blank" rel="noopener noreferrer">Haritada Aç</a>}
                        {detail.website && <a className="block underline" href={detail.website} target="_blank" rel="noopener noreferrer">Web Sitesi</a>}
                      </div>}
                    </DetailLoader>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
      <CatalogPagination page={page} />
      <SeoContentSection content={seoContent.experiences} />
    </div>
  );
}
