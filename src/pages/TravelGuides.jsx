import { useCatalog } from '../lib/useCatalog';
import CatalogPagination from '../components/CatalogPagination';
import React, { useState } from 'react';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';

export default function TravelGuides({ guides, onViewChange }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Tüm Rehberler' },
    { id: 'Evcil Hayvanla Seyahat', label: '✈️ Seyahat' },
    { id: 'Köpek Davranışları ve Günlük Yaşam', label: '🐕 Köpek Yaşamı' },
    { id: 'Kedi Davranışları ve Günlük Yaşam', label: '🐈 Kedi Yaşamı' },
    { id: 'Pet Hizmeti Seçim Rehberleri', label: '🏨 Hizmet Seçimi' },
    { id: 'Sahiplenme ve İlk Günler', label: '🏡 Sahiplenme' },
    { id: 'Mevsimsel Güvenlik ve Bakım', label: '☀️ Mevsimsel Bakım' },
    { id: 'Yerel Keşif ve Patili Yaşam', label: '🌲 Yerel Keşif' }
  ];

  // Dynamic filtering
  const page = useCatalog('guides', { q: searchQuery, category: selectedCategory }, false, true, true);
  const filteredGuides = page.items;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      {/* Header */}
      <div className="border-b border-brand-beige pb-6 mb-8">
        <h1 className="text-3xl font-bold font-title text-brand-navy">Evcil Hayvan Seyahat & Blog Rehberleri</h1>
        <p className="text-gray-600 text-sm mt-1.5">
          Kedi ve köpek dostlarınızla sorunsuz seyahat, davranış çözümleri, mevsimsel bakım ve pet hizmeti seçim rehberleri.
        </p>
      </div>

      {/* Category Pills & Search Grid */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-navy text-white shadow-xs'
                  : 'bg-white border-2 border-brand-navy/15 text-gray-700 hover:bg-brand-navy-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="w-full md:w-80">
          <input
            type="text"
            placeholder="Rehberlerde ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs border-2 border-brand-navy rounded-full py-2 px-4 outline-none focus:ring-0 bg-white shadow-inner"
          />
        </div>
      </div>

      {/* Guides Grid */}
      {filteredGuides.length === 0 ? (
        <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-12 text-center text-gray-500 max-w-md mx-auto">
          <span className="text-4xl block mb-3">📰</span>
          <p className="text-sm font-semibold">Eşleşen bir seyahat veya blog rehberi bulunamadı.</p>
          <button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }} className="text-xs text-brand-navy underline mt-2 font-bold">
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map(guide => {
            const isBlog = Boolean(guide.clusterId || guide.code);
            const guideUrl = isBlog ? `/blog/${guide.slug || guide.id}` : `/rehber/${guide.slug || guide.id}`;
            const authorName = typeof guide.author === 'string'
              ? guide.author
              : (guide.author?.name || 'Patili.co Editör Masası');
            const authorRole = typeof guide.author === 'object' && guide.author?.role
              ? guide.author.role
              : (guide.clusterTitle || 'Blog Rehberi');
            const authorImg = typeof guide.author === 'object' ? guide.author?.imageUrl : null;

            return (
              <a
                key={guide.id}
                href={guideUrl}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    onViewChange('guide-detail', guide.slug || guide.id, guideUrl);
                  }
                }}
                className="bg-white rounded-3xl overflow-hidden border border-brand-beige hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between block text-left"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-3xs font-bold">
                    <span className="bg-brand-navy-light text-brand-navy px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                      {guide.clusterTitle || guide.category}
                    </span>
                    <span className="text-gray-400 font-medium">Güncelleme: {guide.updatedAt || guide.publishedAt}</span>
                  </div>
                  <h3 className="font-title text-lg font-bold text-gray-900 hover:text-brand-navy transition-colors line-clamp-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {guide.summary}
                  </p>
                </div>

                {/* Footer row with author and vet checked indicator */}
                <div className="px-6 pb-6 pt-3 border-t border-brand-beige flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {authorImg ? (
                      <img src={authorImg} alt={authorName} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                        🐾
                      </div>
                    )}
                    <div className="text-left">
                      <p className="text-2xs font-bold text-gray-800 line-clamp-1">{authorName}</p>
                      <p className="text-4xs text-gray-400 line-clamp-1">{authorRole}</p>
                    </div>
                  </div>
                  {guide.vetChecked && (
                    <span className="text-4xs bg-brand-orange-light text-brand-orange hover:bg-brand-orange hover:text-white px-2 py-0.5 rounded font-bold border border-brand-orange/30">
                      🩺 Vet Onaylı
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      )}
      <CatalogPagination page={page} />
      <SeoContentSection content={seoContent.guides} />
    </div>
  );
}
