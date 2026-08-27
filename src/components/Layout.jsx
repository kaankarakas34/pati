import React, { useState } from 'react';
import { ShieldCheckIcon } from './PetIcons';

export default function Layout({ children, currentView, onViewChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'accommodations', label: 'Pet Dostu Oteller' },
    { id: 'vets', label: 'Acil Veteriner' },
    { id: 'guides', label: 'Seyahat Rehberi' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-cream selection:bg-brand-yellow selection:text-brand-navy">
      {/* Top Header Promo */}
      <div className="bg-brand-navy text-white text-xs py-2.5 px-4 text-center flex items-center justify-center gap-2 font-medium tracking-wide border-b border-white/10">
        <ShieldCheckIcon className="w-4 h-4 text-brand-yellow" />
        <span>Türkiye'nin ilk %100 doğrulanmış, editör denetimli evcil hayvan seyahat platformu</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-brand-beige sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => onViewChange('home')}>
              <span className="text-2xl font-bold font-title text-brand-navy flex items-center gap-1.5">
                <span className="text-3xl">🐾</span>
                <span>Patiyle</span>
                <span>Seyahat</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-1.5 ${
                    currentView === item.id || 
                    (item.id === 'guides' && currentView === 'guide-detail') || 
                    (item.id === 'accommodations' && currentView === 'accommodation-detail') || 
                    (item.id === 'vets' && currentView === 'vet-detail')
                      ? 'bg-brand-navy text-white font-bold'
                      : 'text-gray-700 hover:text-brand-navy hover:bg-brand-navy-light'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-brand-navy focus:outline-none p-2 rounded-md hover:bg-brand-beige"
                aria-expanded="false"
              >
                <span className="sr-only">Menüyü aç</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand-beige shadow-inner py-3 px-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onViewChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                  currentView === item.id
                    ? 'bg-brand-navy text-white font-bold'
                    : 'text-gray-700 hover:bg-brand-navy-light'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white mt-20">
        {/* Newsletter Promo Box */}
        <div className="border-b border-brand-navy/30 bg-[#072438]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold font-title text-white">Yeni Pet-Friendly Otellerden İlk Siz Haberdar Olun</h3>
                <p className="text-gray-300 text-sm mt-1">Haftalık editör bültenimizle gizli kalmış patili seyahat noktalarını keşfedin.</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); alert("Bülten kaydınız başarıyla alındı!"); }} className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  required
                  className="bg-white text-gray-800 px-4 py-3 rounded-full text-sm outline-none w-full md:w-64 focus:ring-2 focus:ring-brand-yellow"
                />
                <button
                  type="submit"
                  className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold px-8 py-3 rounded-full transition-colors whitespace-nowrap border-2 border-brand-navy"
                >
                  Kaydol
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <span className="text-xl font-bold font-title text-white flex items-center gap-1.5">
              <span>🐾</span>
              <span>Patiyle Seyahat</span>
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">
              Türkiye'nin doğrulanmış evcil hayvan dostu otel ve seyahat rehberi. Editörlerimiz tarafından yerinde denetlenen ve doğruluğu kanıtlanan seyahat noktaları.
            </p>
            <div className="text-brand-yellow text-xs font-semibold">
              Son Güncelleme: Ağustos 2026
            </div>
          </div>

          {/* Platform Hizmetleri */}
          <div>
            <h4 className="font-title text-lg font-bold text-brand-yellow mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button onClick={() => onViewChange('accommodations')} className="hover:text-white transition-colors">
                  Pati Dostu Oteller
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('vets')} className="hover:text-white transition-colors">
                  7/24 Acil Veterinerler
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('guides')} className="hover:text-white transition-colors">
                  Seyahat Rehberleri
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('methodology')} className="hover:text-white transition-colors">
                  Değerlendirme Kriterleri
                </button>
              </li>
            </ul>
          </div>

          {/* Güven ve Şeffaflık */}
          <div>
            <h4 className="font-title text-lg font-bold text-brand-yellow mb-4">Güven & Şeffaflık</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button onClick={() => onViewChange('trust-how')} className="hover:text-white transition-colors">
                  Nasıl Doğruluyoruz?
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('trust-editorial')} className="hover:text-white transition-colors">
                  Editoryal İlkelerimiz
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('trust-correction')} className="hover:text-white transition-colors">
                  Düzeltme Politikası
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('trust-ads')} className="hover:text-white transition-colors">
                  Reklam ve Sponsorluk
                </button>
              </li>
            </ul>
          </div>

          {/* Yasal Sayfalar */}
          <div>
            <h4 className="font-title text-lg font-bold text-brand-yellow mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><button onClick={() => onViewChange('legal-kvkk')} className="hover:text-white transition-colors">KVKK Aydınlatma Metni</button></li>
              <li><button onClick={() => onViewChange('legal-terms')} className="hover:text-white transition-colors">Kullanım Koşulları</button></li>
              <li><button onClick={() => onViewChange('legal-privacy')} className="hover:text-white transition-colors">Gizlilik Politikası</button></li>
              <li><button onClick={() => onViewChange('legal-cookies')} className="hover:text-white transition-colors">Çerez Politikası</button></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#051c2c] py-6 border-t border-brand-navy/30 text-center text-xs text-gray-400">
          <p>© 2026 patiyleseyahat.com. Tüm hakları saklıdır. Hiçbir içerik izinsiz kopyalanamaz.</p>
        </div>
      </footer>
    </div>
  );
}
