import React from 'react';
import { ArrowRightIcon } from './PetIcons';

export default function PetTaxiAdBanner({ onViewChange, compact = false }) {
  return (
    <div className={`bg-gradient-to-r from-brand-c1 via-brand-c2 to-brand-c1 text-white rounded-3xl shadow-xl overflow-hidden border border-brand-c4/30 relative ${compact ? 'p-6' : 'p-8 md:p-10'}`}>
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-brand-c4/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-c5 border border-white/15 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Reklam & Sponsorluk Alanı</span>
          </div>
          <h3 className={`${compact ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold font-title text-white`}>
            Pet Taksi ve Transfer Hizmetinizi Burada Tanıtın!
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
            Türkiye'nin ilk evcil hayvan seyahat platformunda seyahat eden patili dost sahiplerine ulaşın. 
            Pet transfer, şehir içi ve şehirler arası VIP pet taksi ilanlarınızı ön planda sergileyin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={() => onViewChange ? onViewChange('trust-ads') : (window.location.href = '/trust-ads')}
            className="w-full bg-brand-c4 hover:bg-brand-c3 text-brand-c1 hover:text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-center text-sm font-title whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Reklam & Sponsorluk Başvurusu</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
