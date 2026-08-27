import React from 'react';

export default function PetTaxiAdBanner({ onViewChange, compact = false }) {
  return (
    <div className={`bg-gradient-to-r from-brand-navy via-[#0c3859] to-brand-navy text-white rounded-3xl shadow-xl overflow-hidden border-2 border-brand-yellow/30 relative ${compact ? 'p-6' : 'p-8 md:p-10'}`}>
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>📢 Reklam & Sponsorluk Alanı</span>
          </div>
          <h3 className={`${compact ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold font-title text-white`}>
            Pet Taksi ve Transfer Hizmetinizi Burada Tanıtın!
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
            Türkiye'nin ilk evcil hayvan seyahat platformunda seyahat eden patili dost sahiplerine ulaşın. 
            Pet transfer, şehir içi ve şehirler arası VIP pet taksi ilanlarınızı ön planda sergileyin.
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1 text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full text-gray-200">🎯 Doğrudan Hedef Kitle</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-gray-200">🚕 Şehir İçi & Şehirler Arası</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-gray-200">📞 Doğrudan Arama & WhatsApp</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[200px] w-full md:w-auto">
          <button
            onClick={() => onViewChange ? onViewChange('trust-ads') : (window.location.href = '/trust-ads')}
            className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold px-6 py-3.5 rounded-full transition-all shadow-md text-center text-sm border-2 border-brand-navy font-title whitespace-nowrap"
          >
            📢 Reklam / Sponsor Ol
          </button>
          <a
            href="mailto:reklam@patiyleseyahat.com?subject=Pet%20Taksi%20Reklam%20Talebi"
            className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-full transition-all text-center text-xs border border-white/20 whitespace-nowrap"
          >
            ✉️ Bilgi Al (reklam@patiyleseyahat.com)
          </a>
        </div>
      </div>
    </div>
  );
}
