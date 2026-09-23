import React from 'react';
import { Calendar, Heart, Leaf, ShoppingBag, Users } from 'lucide-react';
import { LocationIcon, SearchIcon } from './PetIcons';
import HeroScene from './HeroScene';
import CloudWaveDivider from './CloudWaveDivider';

const features = [
  { icon: '🐾', label: 'Evcil dost kabul eden oteller', tone: 'lilac' },
  { icon: <Heart size={26} strokeWidth={2.6} />, label: 'Güvenli rezervasyon', tone: 'pink' },
  { icon: <ShoppingBag size={25} strokeWidth={2.5} />, label: 'Seyahatini kolay planla', tone: 'yellow' },
  { icon: <Leaf size={27} strokeWidth={2.5} />, label: 'Daha mutlu tatiller', tone: 'mint' },
];

export default function HeroSection({ activeTab, setActiveTab, destination, setDestination, travelDates, setTravelDates, petType, setPetType, handleSearch }) {
  return (
    <section className="patili-hero">
      <div className="patili-hero__wash patili-hero__wash--left" aria-hidden="true" />
      <div className="patili-hero__wash patili-hero__wash--right" aria-hidden="true" />
      <div className="patili-hero__inner">
        <div className="patili-hero__stage">
          <div className="patili-hero__copy">
            <span className="patili-hero__eyebrow">🐾 &nbsp; Birlikte çıkılan en güzel yolculuk</span>
            <h1 className="patili-hero__title"><span>Patili</span><span>Tatiller</span></h1>
            <p className="patili-hero__tagline">Patini de al, keşfet.<span aria-hidden="true" /></p>
            <p className="patili-hero__description">Dostunla konaklayacağın en güzel yerleri bul. Her pati için yepyeni bir macera seni bekliyor!</p>
            <div className="patili-hero__tabs" role="group" aria-label="Arama türü">
              <button type="button" className={activeTab === 'hotel' ? 'is-active' : ''} aria-pressed={activeTab === 'hotel'} onClick={() => setActiveTab('hotel')}>Oteller</button>
              <button type="button" className={activeTab === 'venue' ? 'is-active' : ''} aria-pressed={activeTab === 'venue'} onClick={() => setActiveTab('venue')}>Patili Mekanlar</button>
            </div>
          </div>
          <HeroScene />
        </div>

        <form className="patili-search" onSubmit={handleSearch}>
          <label className="patili-search__field patili-search__field--destination" htmlFor="home-destination">
            <LocationIcon className="patili-search__icon" />
            <span><strong>Nereye gitmek istiyorsun?</strong><input id="home-destination" name="destination" type="text" placeholder={activeTab === 'hotel' ? 'Şehir, ilçe veya otel adı' : 'Şehir, kafe veya restoran'} value={destination} onChange={(event) => setDestination(event.target.value)} /></span>
          </label>
          <label className="patili-search__field" htmlFor="home-dates">
            <Calendar className="patili-search__icon" />
            <span><strong>Giriş – Çıkış tarihleri</strong><input id="home-dates" type="text" placeholder="Tarihleri seçin" value={travelDates} onChange={(event) => setTravelDates(event.target.value)} /></span>
          </label>
          <label className="patili-search__field" htmlFor="home-pet-type">
            <Users className="patili-search__icon" />
            <span><strong>Patili dostunla</strong><select id="home-pet-type" name="petType" value={petType} onChange={(event) => setPetType(event.target.value)}><option value="all">Kedi & Köpek</option><option value="dog">Köpek dostumla</option><option value="cat">Kedi dostumla</option><option value="bird">Kuş & diğer dostlar</option></select></span>
          </label>
          <button className="patili-search__submit" type="submit"><SearchIcon className="w-6 h-6" /><span>{activeTab === 'hotel' ? 'Otel Ara' : 'Mekan Ara'}</span></button>
        </form>

        <div className="patili-hero__features">
          {features.map(({ icon, label, tone }, index) => <div className="patili-hero__feature" style={{ '--feature-delay': `${index * 95}ms` }} key={label}><span className={`patili-hero__feature-icon patili-hero__feature-icon--${tone}`}>{icon}</span><span>{label}</span></div>)}
        </div>
      </div>
      <CloudWaveDivider fill="#fefcef" className="patili-hero__divider" />
    </section>
  );
}
