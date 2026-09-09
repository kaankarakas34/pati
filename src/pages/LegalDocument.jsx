import React, { useState, useMemo } from 'react';
import { LEGAL_DOCUMENTS, LEGAL_CATEGORIES } from '../data/legalDocuments';
import { ShieldCheckIcon } from '../components/PetIcons';

export default function LegalDocument({ activeDocSlug, onViewChange }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [copied, setCopied] = useState(false);

  // Find currently active document if any
  const currentDoc = useMemo(() => {
    if (!activeDocSlug) return null;
    return LEGAL_DOCUMENTS.find(
      d => d.slug === activeDocSlug || d.id === activeDocSlug || d.path === activeDocSlug
    ) || null;
  }, [activeDocSlug]);

  // Filtered documents for the hub/sidebar list
  const filteredDocs = useMemo(() => {
    return LEGAL_DOCUMENTS.filter(doc => {
      const matchesCategory = selectedCategory === 'ALL' || doc.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        doc.title.toLowerCase().includes(query) || 
        doc.shortTitle.toLowerCase().includes(query) ||
        doc.summary.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Convert markdown headings/tables to structured HTML elements cleanly
  const renderMarkdownContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let inTable = false;
    let tableRows = [];

    const flushTable = (key) => {
      if (tableRows.length > 0) {
        const headerRow = tableRows[0];
        const bodyRows = tableRows.slice(1);
        elements.push(
          <div key={`table-${key}`} className="overflow-x-auto my-6 border border-brand-beige rounded-2xl shadow-xs">
            <table className="min-w-full divide-y divide-brand-beige text-xs text-left">
              <thead className="bg-brand-navy/5 font-bold font-title text-brand-navy">
                <tr>
                  {headerRow.map((cell, cIdx) => (
                    <th key={cIdx} className="px-4 py-3 border-r border-brand-beige last:border-r-0">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-beige bg-white">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-brand-cream/40 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 border-r border-brand-beige last:border-r-0 text-gray-700 leading-relaxed font-normal">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table line detection
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        // Ignore separator line like | :--- | :--- |
        if (!trimmed.includes('---')) {
          const cells = trimmed.split('|').slice(1, -1);
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        flushTable(index);
      }

      if (!trimmed) {
        return;
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-bold font-title text-brand-navy mt-8 mb-3 pb-2 border-b border-brand-beige flex items-center gap-2">
            <span>§</span> {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-base font-bold font-title text-brand-navy mt-6 mb-2">
            {trimmed.replace('#### ', '')}
          </h4>
        );
      } else if (trimmed === '---') {
        elements.push(<hr key={index} className="my-6 border-brand-beige" />);
      } else if (trimmed.startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-5 list-disc text-sm text-gray-700 leading-relaxed my-1">
            {trimmed.replace('- ', '')}
          </li>
        );
      } else if (trimmed.startsWith('> ')) {
        elements.push(
          <blockquote key={index} className="p-4 my-4 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 leading-relaxed">
            {trimmed.replace('> ', '')}
          </blockquote>
        );
      } else {
        elements.push(
          <p key={index} className="text-sm text-gray-700 leading-relaxed my-3 font-normal">
            {trimmed}
          </p>
        );
      }
    });

    if (inTable) flushTable('end');
    return elements;
  };

  return (
    <div className="bg-brand-cream/40 min-h-screen py-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Actions Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-beige mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
              <button onClick={() => onViewChange('home')} className="hover:text-brand-navy">
                Ana Sayfa
              </button>
              <span>/</span>
              <button onClick={() => onViewChange('legal-hub')} className="hover:text-brand-navy">
                Hukuki Metinler & Sözleşmeler
              </button>
              {currentDoc && (
                <>
                  <span>/</span>
                  <span className="text-brand-navy font-bold truncate max-w-xs">{currentDoc.shortTitle}</span>
                </>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-title text-brand-navy flex items-center gap-2">
              <ShieldCheckIcon className="w-7 h-7 text-brand-c2 shrink-0" />
              <span>{currentDoc ? currentDoc.title : 'Hukuki Metinler ve Sözleşmeler Portalı'}</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentDoc && (
              <>
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 text-xs font-bold border border-brand-navy/20 bg-white hover:bg-brand-cream text-brand-navy rounded-full transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <span>🔗</span> {copied ? 'Kopyalandı!' : 'Bağlantıyı Kopyala'}
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-2 text-xs font-bold bg-brand-navy hover:bg-brand-navy-hover text-white rounded-full transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <span>🖨️</span> Yazdır / PDF
                </button>
              </>
            )}
            {currentDoc && (
              <button
                onClick={() => onViewChange('legal-hub')}
                className="px-3.5 py-2 text-xs font-bold border border-brand-beige bg-brand-cream hover:bg-white text-gray-700 rounded-full transition-colors"
              >
                Tüm Belgeler ({LEGAL_DOCUMENTS.length})
              </button>
            )}
          </div>
        </div>

        {/* Layout Grid: Sidebar Navigation + Main Document View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar: Contract Navigation */}
          <aside className="lg:col-span-4 bg-white border border-brand-beige rounded-3xl p-5 shadow-xs sticky top-28 space-y-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold font-title text-brand-navy uppercase tracking-wider">
                  📜 Belgeler ({filteredDocs.length})
                </span>
                <span className="text-3xs bg-brand-navy/5 text-brand-navy px-2 py-0.5 rounded-full font-bold">
                  v1.0 (Eylül 2026)
                </span>
              </div>

              {/* Search input */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Sözleşme veya kural ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs border border-brand-beige rounded-xl px-3 py-2 pl-8 outline-none focus:border-brand-navy bg-brand-cream/30"
                />
                <span className="absolute left-2.5 top-2.5 text-xs text-gray-400">🔍</span>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1 mb-4">
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className={`text-3xs px-2.5 py-1 rounded-full font-bold transition-colors ${
                    selectedCategory === 'ALL'
                      ? 'bg-brand-navy text-white'
                      : 'bg-brand-cream text-gray-600 hover:bg-brand-beige'
                  }`}
                >
                  Tümü
                </button>
                {Object.values(LEGAL_CATEGORIES).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-3xs px-2.5 py-1 rounded-full font-bold transition-colors truncate max-w-[150px] ${
                      selectedCategory === cat
                        ? 'bg-brand-navy text-white'
                        : 'bg-brand-cream text-gray-600 hover:bg-brand-beige'
                    }`}
                    title={cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Document List */}
            <div className="space-y-1.5 max-h-[65vh] overflow-y-auto pr-1">
              {filteredDocs.map((doc) => {
                const isActive = currentDoc && currentDoc.id === doc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => onViewChange(doc.slug)}
                    className={`w-full text-left p-3 rounded-2xl transition-all border ${
                      isActive
                        ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                        : 'bg-white hover:bg-brand-cream/60 border-brand-beige/70 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-3xs font-extrabold uppercase tracking-wider ${isActive ? 'text-brand-yellow' : 'text-gray-400'}`}>
                        Bölüm {doc.number}
                      </span>
                      <span className={`text-4xs px-2 py-0.5 rounded-full font-semibold ${isActive ? 'bg-white/15 text-white' : 'bg-brand-beige/60 text-gray-600'}`}>
                        {doc.version}
                      </span>
                    </div>
                    <div className="text-xs font-bold font-title mt-1 leading-snug">
                      {doc.shortTitle}
                    </div>
                    <div className={`text-3xs mt-1 line-clamp-2 leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>
                      {doc.summary}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Main Content Area */}
          <main className="lg:col-span-8 space-y-6">
            {currentDoc ? (
              /* Single Document View */
              <div className="bg-white border border-brand-beige rounded-3xl p-6 sm:p-10 shadow-xs">
                {/* Document Header Metadata */}
                <div className="border-b border-brand-beige pb-6 mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-brand-yellow/30 text-brand-navy text-3xs font-black uppercase px-3 py-1 rounded-full border border-brand-yellow/40">
                      Bölüm {currentDoc.number} • {currentDoc.category}
                    </span>
                    <span className="bg-brand-cream text-gray-600 text-3xs font-bold px-2.5 py-1 rounded-full border border-brand-beige">
                      Sürüm: {currentDoc.version}
                    </span>
                    <span className="bg-brand-cream text-gray-600 text-3xs font-bold px-2.5 py-1 rounded-full border border-brand-beige">
                      Yürürlük: {currentDoc.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-title text-brand-navy leading-tight">
                    {currentDoc.title}
                  </h2>

                  <div className="mt-4 p-4 bg-brand-cream/60 border border-brand-beige rounded-2xl text-xs text-gray-600 leading-relaxed flex items-start gap-3">
                    <span className="text-lg shrink-0">ℹ️</span>
                    <div>
                      <strong className="font-bold text-brand-navy block mb-0.5">Özet ve Kapsam:</strong>
                      {currentDoc.summary}
                    </div>
                  </div>
                </div>

                {/* Rendered Text Content */}
                <div className="prose prose-sm max-w-none text-gray-800">
                  {renderMarkdownContent(currentDoc.content)}
                </div>

                {/* Footer of the Document */}
                <div className="mt-12 pt-6 border-t border-brand-beige flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                  <span>© 2026 patili.co • Hukuki Metinler ve Sözleşmeler Paketi</span>
                  <div className="flex items-center gap-3">
                    <button onClick={handleCopyLink} className="hover:text-brand-navy underline">
                      Bağlantıyı Paylaş
                    </button>
                    <span>•</span>
                    <button onClick={handlePrint} className="hover:text-brand-navy underline">
                      Yazdır
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Legal Hub / Directory Index View */
              <div className="space-y-8">
                {/* Hero Box */}
                <div className="bg-gradient-to-r from-brand-navy to-[#191528] text-white rounded-3xl p-8 sm:p-10 shadow-md">
                  <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider">
                    Resmi Hukuki Çerçeve
                  </span>
                  <h2 className="font-title font-bold text-3xl mt-2 text-white">
                    patili.co Hukuki Metinler ve Sözleşmeler Portalı
                  </h2>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed max-w-2xl">
                    Türkiye’de evcil hayvan sahipleri ile üçüncü taraf otel, mekân, pet oteli, pet taksi, köpek gezdirici ve veteriner sağlık kuruluşlarını buluşturan keşif ve listeleme platformumuzun tüm yürürlükteki sözleşme ve politikaları aşağıda yer almaktadır.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-300">
                    <span>📄 Toplam <strong>{LEGAL_DOCUMENTS.length}</strong> Hukuki Belge</span>
                    <span>•</span>
                    <span>🗓️ Sürüm: <strong>v1.0 (9 Eylül 2026)</strong></span>
                    <span>•</span>
                    <span>⚖️ KVKK, Tüketici ve Borçlar Kanunu Uyumlu</span>
                  </div>
                </div>

                {/* Grouped Category Cards */}
                {Object.values(LEGAL_CATEGORIES).map(category => {
                  const docsInCategory = LEGAL_DOCUMENTS.filter(d => d.category === category);
                  if (docsInCategory.length === 0) return null;

                  return (
                    <div key={category} className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-brand-beige pb-2">
                        <span className="text-lg">📌</span>
                        <h3 className="font-title font-bold text-lg text-brand-navy">
                          {category}
                        </h3>
                        <span className="text-xs text-gray-400 font-semibold">({docsInCategory.length})</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {docsInCategory.map(doc => (
                          <div
                            key={doc.id}
                            onClick={() => onViewChange(doc.slug)}
                            className="bg-white border border-brand-beige hover:border-brand-navy/30 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-3xs font-extrabold text-gray-400 uppercase">
                                <span>Bölüm {doc.number}</span>
                                <span className="bg-brand-cream text-brand-navy px-2 py-0.5 rounded-full font-bold">
                                  {doc.version}
                                </span>
                              </div>
                              <h4 className="font-title font-bold text-base text-brand-navy group-hover:text-brand-c2 transition-colors">
                                {doc.shortTitle}
                              </h4>
                              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                                {doc.summary}
                              </p>
                            </div>

                            <div className="pt-4 mt-3 border-t border-brand-beige flex items-center justify-between text-xs font-bold text-brand-navy group-hover:translate-x-0.5 transition-transform">
                              <span>Metni İncele</span>
                              <span>&rarr;</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
