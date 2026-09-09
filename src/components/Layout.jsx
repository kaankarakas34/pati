import React, { useState } from 'react';
import { ShieldCheckIcon } from './PetIcons';

export default function Layout({ children, currentView, onViewChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'accommodations', label: 'Patili Seyahat' },
    { id: 'experiences', label: 'Patili Mekanlar' },
    { id: 'dog-walkers', label: 'Köpek Gezdirici' },
    { id: 'vets', label: 'Acil Veteriner' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-cream selection:bg-brand-yellow selection:text-brand-navy">
      {/* Top Header Promo */}
      <div className="bg-brand-navy text-white text-xs py-2.5 px-4 text-center flex items-center justify-center gap-2 font-medium tracking-wide border-b border-white/10">
        <ShieldCheckIcon className="w-4 h-4 text-brand-yellow" />
        <span>Türkiye'nin ilk %100 doğrulanmış evcil hayvan seyahat, mekan ve hizmet platformu</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-brand-beige sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer select-none py-2" onClick={() => onViewChange('home')}>
              <img
                src="/logo.png"
                alt="patili.co"
                className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-105"
              />
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
                    (item.id === 'vets' && currentView === 'vet-detail') ||
                    (item.id === 'experiences' && currentView === 'experiences') ||
                    (item.id === 'dog-walkers' && currentView === 'dog-walkers')
                      ? 'bg-brand-navy text-white font-bold'
                      : 'text-gray-700 hover:text-brand-navy hover:bg-brand-navy-light'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}

              <button
                onClick={() => onViewChange('add-business')}
                className="ml-3 px-4 py-2 bg-brand-c2 hover:bg-brand-c1 text-white rounded-full text-xs font-bold border border-brand-c2 shadow-xs flex items-center gap-1.5 transition-all hover:scale-105 font-title"
              >
                <span>İşletmeni Ekle</span>
              </button>
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
            <button
              onClick={() => {
                onViewChange('add-business');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-bold bg-brand-c2 text-white border border-brand-c2 mt-2 flex items-center justify-between shadow-xs font-title"
            >
              <span>İşletmeni Ekle</span>
              <span>&rarr;</span>
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Social Media Follow Section */}
      <section className="mt-14 bg-gradient-to-r from-amber-50/70 via-purple-50/50 to-pink-50/60 border-t border-brand-navy/10 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xs shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.09-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <span className="font-title font-extrabold text-sm sm:text-base text-brand-navy">Bizi Sosyal Medyada Takip Edin</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-extrabold bg-pink-100 text-pink-700 tracking-wide">@patili.co_</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">
                  En yeni pati dostu mekanlar, seyahat rehberleri ve topluluk paylaşımları için Instagram'da bize katılın.
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/patili.co_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 hover:scale-[1.02] transition-all whitespace-nowrap shadow-xs"
            >
              <span>Instagram'da Takip Et</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white">
        {/* Newsletter Promo Box */}
        <div className="border-b border-white/10 bg-[#191528]">
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
                  className="bg-white text-gray-800 px-4 py-3 rounded-full text-sm outline-none w-full md:w-64 focus:ring-2 focus:ring-brand-c4"
                />
                <button
                  type="submit"
                  className="bg-brand-c4 hover:bg-brand-c3 text-brand-c1 font-bold px-8 py-3 rounded-full transition-colors whitespace-nowrap"
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
            <div className="cursor-pointer inline-block select-none" onClick={() => onViewChange('home')}>
              <div className="bg-white/95 hover:bg-white transition-colors px-3.5 py-1.5 rounded-2xl inline-flex items-center shadow-xs">
                <img
                  src="/logo.png"
                  alt="patili.co"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Türkiye'nin doğrulanmış evcil hayvan dostu otel, mekan (kafe & restoran), pet taksi, pet otel ve sağlık rehberi. Patili dostlarınızla birlikte hayatı kolaylaştıran güvenilir platform.
            </p>
            <div className="pt-1">
              <a
                href="https://www.instagram.com/patili.co_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors group"
              >
                <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.09-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <span>Bizi Instagram'da takip edin: <strong className="text-white font-semibold">@patili.co_</strong></span>
              </a>
            </div>
            <div className="text-brand-c4 text-xs font-semibold">
              Son Güncelleme: Eylül 2026
            </div>
          </div>

          {/* Platform Hizmetleri */}
          <div>
            <h4 className="font-title text-lg font-bold text-brand-c4 mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button onClick={() => onViewChange('accommodations')} className="hover:text-white transition-colors">
                  Patili Seyahat (Oteller)
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('experiences')} className="hover:text-white transition-colors">
                  Patili Mekanlar (Kafe & Bar)
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('taxis')} className="hover:text-white transition-colors">
                  Pet Taksi
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('boardings')} className="hover:text-white transition-colors">
                  Pet Otel & Pansiyon
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('dog-walkers')} className="hover:text-white transition-colors">
                  Köpek Gezdiricileri
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('vets')} className="hover:text-white transition-colors">
                  7/24 Acil Veterinerler
                </button>
              </li>
            </ul>
          </div>

          {/* Güven ve Şeffaflık */}
          <div>
            <h4 className="font-title text-lg font-bold text-brand-c4 mb-4">Güven & Şeffaflık</h4>
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
              <li>
                <button onClick={() => onViewChange('add-business')} className="hover:text-brand-c4 font-bold text-white transition-colors flex items-center gap-1">
                  <span>İşletmeni Ekle (Ücretsiz)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Yasal & Sözleşmeler */}
          <div>
            <h4 className="font-title text-lg font-bold text-brand-c4 mb-4">Hukuk & KVKK</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button onClick={() => onViewChange('kullanim-kosullari')} className="hover:text-white transition-colors text-left">
                  Kullanım Koşulları
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('ziyaretci-ve-uye')} className="hover:text-white transition-colors text-left">
                  KVKK Aydınlatma Metni
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('cerez-politikasi')} className="hover:text-white transition-colors text-left">
                  Çerez Politikası
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('acik-riza-metni')} className="hover:text-white transition-colors text-left">
                  Açık Rıza Metni
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('ticari-elektronik-ileti')} className="hover:text-white transition-colors text-left">
                  Ticari Elektronik İleti Onayı
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => onViewChange('legal-hub')} 
                  className="text-brand-c4 hover:text-white font-bold text-xs flex items-center gap-1 transition-colors"
                >
                  <span>📜 Tüm Sözleşmeler (18 Belge)</span>
                  <span>&rarr;</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Kapsamlı Hukuki Metinler ve Sözleşmeler Bölümü (PDF Paketi) */}
        <div className="border-t border-white/10 bg-[#161224] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h4 className="font-title text-base font-bold text-white flex items-center gap-2">
                  <span className="text-brand-c4">⚖️</span>
                  <span>Patili.co Hukuki Metinler ve Sözleşmeler Paketi</span>
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Listeleme platformu, oteller, mekânlar, pet taksi, gezdiriciler, veterinerler ve KVKK uyumlu resmi sözleşme metinleri (Sürüm: v1.0 — 9 Eylül 2026).
                </p>
              </div>
              <button
                onClick={() => onViewChange('legal-hub')}
                className="self-start sm:self-auto px-4 py-2 bg-white/10 hover:bg-white/20 text-brand-c4 border border-brand-c4/30 rounded-full text-xs font-bold transition-all whitespace-nowrap"
              >
                Hukuk Portalı Dizinini Aç &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
              {/* Kolon 1: Kullanıcı & Platform */}
              <div className="space-y-3">
                <h5 className="font-bold text-brand-c4 text-2xs uppercase tracking-wider">
                  Genel & Kullanıcı Şartları
                </h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <button onClick={() => onViewChange('kullanim-kosullari')} className="hover:text-white transition-colors text-left">
                      • Genel Platform Kullanım Koşulları & Sorumluluk Sınırları
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('kullanici-yorumlari')} className="hover:text-white transition-colors text-left">
                      • Kullanıcı İçeriği, Puanlama ve Yorum Sözleşmesi
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('fikri-mulkiyet-ve-telif')} className="hover:text-white transition-colors text-left">
                      • Fikri Mülkiyet, Marka ve İçerik Kullanım Koşulları
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('icerik-sikayet-kaldirma')} className="hover:text-white transition-colors text-left">
                      • İçerik Şikâyet, İtiraz ve Yayından Kaldırma Politikası
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('dogrulama-rozeti')} className="hover:text-white transition-colors text-left">
                      • Doğrulanmış İşletme ve Rozet Kullanım Koşulları
                    </button>
                  </li>
                </ul>
              </div>

              {/* Kolon 2: İşletme & Hizmet Sağlayıcı */}
              <div className="space-y-3">
                <h5 className="font-bold text-brand-c4 text-2xs uppercase tracking-wider">
                  İşletme & Hizmet Listeleme Sözleşmeleri
                </h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <button onClick={() => onViewChange('otel-listeleme')} className="hover:text-white transition-colors text-left">
                      • Evcil Hayvan Kabul Eden Otel Listeleme Sözleşmesi
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('mekan-listeleme')} className="hover:text-white transition-colors text-left">
                      • Restoran, Kafe ve Mekân Listeleme Sözleşmesi
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('pet-otel-listeleme')} className="hover:text-white transition-colors text-left">
                      • Pet Otel / Ev Hayvanı Barınma Yeri Sözleşmesi
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('pet-taksi-listeleme')} className="hover:text-white transition-colors text-left">
                      • Pet Taksi / Transfer Hizmeti Listeleme Sözleşmesi
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('kopek-gezdirici-listeleme')} className="hover:text-white transition-colors text-left">
                      • Köpek Gezdirici / Pet Walker Listeleme Sözleşmesi
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('veteriner-listeleme')} className="hover:text-white transition-colors text-left">
                      • Veteriner Muayenehane ve Hastane Listeleme Sözleşmesi
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('isletme-bilgi-beyani')} className="hover:text-white transition-colors text-left">
                      • İşletme Bilgi Beyanı, Belge Doğruluğu & Taahhüdü
                    </button>
                  </li>
                </ul>
              </div>

              {/* Kolon 3: KVKK, İletişim ve Reklam */}
              <div className="space-y-3">
                <h5 className="font-bold text-brand-c4 text-2xs uppercase tracking-wider">
                  KVKK, Gizlilik, İletişim & Reklam
                </h5>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <button onClick={() => onViewChange('ziyaretci-ve-uye')} className="hover:text-white transition-colors text-left">
                      • Ziyaretçi ve Üye KVKK Aydınlatma Metni
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('isletme-yetkilisi')} className="hover:text-white transition-colors text-left">
                      • İşletme Yetkilisi & Sağlayıcı KVKK Aydınlatma Metni
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('acik-riza-metni')} className="hover:text-white transition-colors text-left">
                      • Açık Rıza Metni Şablonu ve Prensipleri
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('cerez-politikasi')} className="hover:text-white transition-colors text-left">
                      • Çerez Politikası ve Tercih Yönetimi Metni
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('ticari-elektronik-ileti')} className="hover:text-white transition-colors text-left">
                      • Ticari Elektronik İleti Onay Metni (İYS)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onViewChange('reklam-ve-premium')} className="hover:text-white transition-colors text-left">
                      • Ücretli, Vitrin & Premium Listeleme Kuralları
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Internal Link Hub for Crawlers & Users */}
        <div className="border-t border-white/10 bg-[#191528] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div>
              <h4 className="font-title text-sm font-bold text-brand-c4 uppercase tracking-wider mb-3">Popüler Evcil Hayvan Konaklama Konseptleri</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-300">
                <a href="/buyuk-kopek-kabul-eden-oteller" className="hover:text-brand-c4 underline transition-colors">Büyük Köpek Kabul Eden Oteller</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-bungalovlar" className="hover:text-brand-c4 underline transition-colors">Evcil Hayvan Dostu Bungalovlar</a>
                <span className="text-gray-600">•</span>
                <a href="/kopek-kabul-eden-bungalovlar" className="hover:text-brand-c4 underline transition-colors">Köpek Kabul Eden Bungalovlar</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-villalar" className="hover:text-brand-c4 underline transition-colors">Evcil Hayvan Dostu Villalar</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-butik-oteller" className="hover:text-brand-c4 underline transition-colors">Pet Friendly Butik Oteller</a>
                <span className="text-gray-600">•</span>
                <a href="/her-sey-dahil-evcil-hayvan-dostu-oteller" className="hover:text-brand-c4 underline transition-colors">Her Şey Dahil Pet Oteller</a>
                <span className="text-gray-600">•</span>
                <a href="/kedi-kabul-eden-oteller" className="hover:text-brand-c4 underline transition-colors">Kedi Kabul Eden Oteller</a>
                <span className="text-gray-600">•</span>
                <a href="/kopek-kabul-eden-oteller" className="hover:text-brand-c4 underline transition-colors">Köpek Kabul Eden Oteller</a>
                <span className="text-gray-600">•</span>
                <a href="/bahceli-evcil-hayvan-dostu-oteller" className="hover:text-brand-c4 underline transition-colors">Bahçeli Pet Friendly Oteller</a>
                <span className="text-gray-600">•</span>
                <a href="/otel-zincirleri" className="hover:text-brand-c4 underline transition-colors">Otel Zincirleri Pet Politikaları</a>
              </div>
            </div>

            <div>
              <h4 className="font-title text-sm font-bold text-brand-c4 uppercase tracking-wider mb-3">Popüler Şehir & Bölge Rehberleri</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-300">
                <a href="/evcil-hayvan-dostu-oteller/antalya" className="hover:text-brand-c4 underline transition-colors">Antalya Evcil Hayvan Dostu Oteller</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/mugla" className="hover:text-brand-c4 underline transition-colors">Muğla & Bodrum Pet Friendly</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/izmir" className="hover:text-brand-c4 underline transition-colors">İzmir & Çeşme Otelleri</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/balikesir" className="hover:text-brand-c4 underline transition-colors">Balıkesir & Ayvalık Tesisleri</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/canakkale" className="hover:text-brand-c4 underline transition-colors">Çanakkale & Assos Otelleri</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/sakarya" className="hover:text-brand-c4 underline transition-colors">Sapanca Bungalov & Villalar</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/bolu" className="hover:text-brand-c4 underline transition-colors">Bolu & Abant Doğa Otelleri</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/istanbul" className="hover:text-brand-c4 underline transition-colors">İstanbul Evcil Hayvan Otelleri</a>
                <span className="text-gray-600">•</span>
                <a href="/evcil-hayvan-dostu-oteller/nevsehir" className="hover:text-brand-c4 underline transition-colors">Kapadokya Mağara Otelleri</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#120f1e] py-6 border-t border-white/10 text-center text-xs text-gray-400">
          <p>© 2026 patili.co. Tüm hakları saklıdır. Hiçbir içerik izinsiz kopyalanamaz.</p>
        </div>
      </footer>
    </div>
  );
}
