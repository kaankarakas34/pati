import React from 'react';

export default function AdBanner({ type = 'banner', className = '', onViewChange }) {
  const handleClick = () => {
    if (onViewChange) {
      onViewChange('trust-ads');
    } else {
      window.location.href = '/trust-ads';
    }
  };

  const getBannerConfig = () => {
    switch (type) {
      case 'leaderboard':
        return {
          title: "📢 SPONSORLU REKLAM ALANI",
          desc: "Tesisinizi ve markanızı Patiyle Seyahat ziyaretçileriyle buluşturun. Sponsorluk tekliflerimizi inceleyin.",
          cta: "Reklam Başvurusu Yap",
          bg: "bg-gradient-to-r from-amber-50 to-orange-100 border border-brand-orange/30 text-brand-earth-dark",
          layout: "flex flex-col sm:flex-row items-center justify-between px-6 py-3.5 rounded-xl gap-4 text-xs"
        };
      case 'square':
        return {
          title: "📢 Sponsorlu Reklam Alanı",
          desc: "Evcil hayvan dostu tesisinizi veya markanızı binlerce hayvanseverle buluşturun.",
          cta: "Reklam Ver & Öne Çık",
          bg: "bg-gradient-to-br from-brand-navy/5 to-brand-cream border border-brand-navy/15 text-brand-navy",
          layout: "flex flex-col p-5 rounded-2xl gap-3 text-xs text-left"
        };
      case 'banner':
      default:
        return {
          title: "📢 Patiyle Seyahat Sponsorlu Alan",
          desc: "Evcil hayvan kabul eden otel, pet taksi, klinik veya pet markanızı hedef kitlenizle buluşturmak için sponsor olun.",
          cta: "Sponsorluk Detayları",
          bg: "bg-gradient-to-r from-brand-navy-light to-brand-cream border border-brand-navy/15 text-brand-navy",
          layout: "flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl gap-4 text-sm text-left"
        };
    }
  };

  const config = getBannerConfig();

  return (
    <div className={`shadow-2xs select-none overflow-hidden relative group transition-all duration-300 ${config.bg} ${config.layout} ${className}`}>
      {/* Sponsor Label */}
      <span className="absolute top-1 right-2 text-4xs uppercase tracking-wider font-extrabold text-brand-navy/60">Sponsorlu Reklam</span>
      
      <div>
        <h4 className="font-title font-bold text-sm md:text-base flex items-center gap-1 text-brand-navy">
          {config.title}
        </h4>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-xl">{config.desc}</p>
      </div>

      <button
        onClick={handleClick}
        className="px-4 py-2 bg-brand-navy hover:bg-brand-navy-hover text-white rounded-xl font-bold font-title text-xs transition-colors shrink-0 shadow-xs cursor-pointer"
      >
        {config.cta} &rarr;
      </button>
    </div>
  );
}
