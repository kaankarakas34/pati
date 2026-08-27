import React from 'react';

export default function AdBanner({ type = 'banner', className = '' }) {
  const getBannerConfig = () => {
    switch (type) {
      case 'leaderboard':
        return {
          title: "🐾 PATİ SİGORTASI",
          desc: "Dostunuzun sağlığı güvence altında! İlk poliçede %15 indirim fırsatını kaçırmayın.",
          cta: "Hemen Teklif Al",
          bg: "bg-gradient-to-r from-brand-orange-light to-amber-100 border border-brand-orange/30 text-brand-earth-dark",
          layout: "flex flex-col sm:flex-row items-center justify-between px-6 py-3.5 rounded-xl gap-4 text-xs"
        };
      case 'square':
        return {
          title: "🥩 Royal Canin Premium",
          desc: "Evcil hayvanınızın ırkına ve yaşına özel formüle edilmiş gurme mamalar.",
          cta: "Keşfet",
          bg: "bg-slate-50 border border-slate-200 text-slate-800",
          layout: "flex flex-col p-5 rounded-2xl gap-3 text-xs text-left"
        };
      case 'banner':
      default:
        return {
          title: "🩺 Hill's Vet Essentials",
          desc: "Doğrulanmış klinik koruma sunan veteriner serisi diyet mamaları ile sağlıklı bir yaşam.",
          cta: "Satın Al",
          bg: "bg-gradient-to-r from-brand-green-light to-brand-beige border border-brand-green/20 text-brand-green-dark",
          layout: "flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl gap-4 text-sm text-left"
        };
    }
  };

  const config = getBannerConfig();

  return (
    <div className={`shadow-2xs select-none overflow-hidden relative group transition-all duration-300 ${config.bg} ${config.layout} ${className}`}>
      {/* Sponsor Label */}
      <span className="absolute top-1 right-2 text-4xs uppercase tracking-wider font-extrabold text-gray-400 opacity-60">Sponsorlu Reklam</span>
      
      <div>
        <h4 className="font-title font-bold text-sm md:text-base flex items-center gap-1">
          {config.title}
        </h4>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-xl">{config.desc}</p>
      </div>

      <button
        onClick={() => alert('Sponsor web sitesine yönlendiriliyorsunuz...')}
        className={`px-4 py-2 rounded-lg font-bold font-title text-xs transition-colors shrink-0 ${
          type === 'leaderboard' 
            ? 'bg-brand-earth hover:bg-brand-earth-hover text-white'
            : type === 'square'
            ? 'bg-slate-800 hover:bg-slate-900 text-white'
            : 'bg-brand-green hover:bg-brand-green-hover text-white'
        }`}
      >
        {config.cta}
      </button>
    </div>
  );
}
