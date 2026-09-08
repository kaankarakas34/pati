import React, { useState } from 'react';
import { VerifiedBadge, LocationIcon } from '../components/PetIcons';

const MOCK_WALKERS = [
  {
    id: 'walker-1',
    name: 'Caner & Elif Pet Hizmetleri',
    city: 'İstanbul',
    district: 'Kadıköy / Moda',
    rating: 4.9,
    reviewCount: 48,
    walkCount: 320,
    hourlyRate: '350 ₺',
    services: ['Bireysel Yürüyüş', 'Grup Yürüyüşü', 'Evde Ziyaret & Besleme'],
    experience: '5 yıl deneyim',
    bio: 'Veteriner teknikerliği geçmişimizle köpeklerinizin karakterine uygun güvenli, tempolu yürüyüşler ve tuvalet rutinleri sağlıyoruz. Canlı GPS takibi ve fotoğraf güncellemeleri dahildir.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces',
    verified: true
  },
  {
    id: 'walker-2',
    name: 'Mert Aksoy (PatiDost)',
    city: 'İstanbul',
    district: 'Beşiktaş / Levent',
    rating: 5.0,
    reviewCount: 62,
    walkCount: 510,
    hourlyRate: '400 ₺',
    services: ['Bireysel Yürüyüş', 'Temel İtaat Pekiştirme', 'Koşu & Egzersiz'],
    experience: '4 yıl deneyim',
    bio: 'Pozitif pekiştirme ve köpek davranışları sertifikalıyım. Büyük ırk ve enerjik köpekler için tempolu park koşuları ve güvenli yürüyüş seansları sunuyorum.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    verified: true
  },
  {
    id: 'walker-3',
    name: 'Zeynep Kaya',
    city: 'Ankara',
    district: 'Çankaya / Tunalı',
    rating: 4.8,
    reviewCount: 31,
    walkCount: 195,
    hourlyRate: '300 ₺',
    services: ['Bireysel Yürüyüş', 'Yavru Köpek Rutini', 'İlaç Takibi'],
    experience: '3 yıl deneyim',
    bio: 'Hassas ve çekingen köpeklerle sabırla iletişim kuruyorum. Seans sonu detaylı rota raporu, tuvalet bilgisi ve fotoğraf paylaşımı yapıyorum.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    verified: true
  },
  {
    id: 'walker-4',
    name: 'Ege & Pati Ekibi',
    city: 'İzmir',
    district: 'Karşıyaka / Bostanlı',
    rating: 4.9,
    reviewCount: 55,
    walkCount: 420,
    hourlyRate: '320 ₺',
    services: ['Sahil Yürüyüşü', 'Grup Sosyalleşme', 'Gündüz Bakımı'],
    experience: '4 yıl deneyim',
    bio: 'Bostanlı sahil hattında güvenli kayış protokolleriyle düzenli yürüyüşler yapıyoruz. Sosyalleşme odaklı grup turları veya bireysel yürüyüş seçenekleri mevcuttur.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
    verified: true
  }
];

export default function DogWalkers({ onViewChange }) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [contactModal, setContactModal] = useState(null);
  const [requestSent, setRequestSent] = useState(false);

  const filteredWalkers = selectedCity === 'all' 
    ? MOCK_WALKERS 
    : MOCK_WALKERS.filter(w => w.city.toLowerCase() === selectedCity.toLowerCase());

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
      setContactModal(null);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="border-b border-brand-beige pb-6 mb-8 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow/30 border border-brand-yellow text-brand-navy rounded-full text-xs font-bold mb-3">
          <span>🦮 patili.co Gezdirici Ağı</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-title text-brand-navy">
          Köpek Gezdiricileri & Profesyonel Pet Bakıcıları
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
          Yoğun günlerde veya tatildeyken köpeğinizin günlük tuvalet, egzersiz ve yürüyüş ihtiyacını aksatmayın. patili.co güvencesiyle kimlik ve referans doğrulaması yapılmış gezdiricileri keşfedin.
        </p>

        {/* Güvenlik Standartları Şeridi */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border-2 border-brand-navy/10 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <div className="font-bold text-xs text-brand-navy">Kimlik & Referans Kontrolü</div>
              <div className="text-3xs text-gray-500">Tüm gezdiriciler güvenlik ve tecrübe testinden geçer</div>
            </div>
          </div>
          <div className="bg-white border-2 border-brand-navy/10 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <div className="font-bold text-xs text-brand-navy">Canlı GPS & Rota Takibi</div>
              <div className="text-3xs text-gray-500">Yürüyüş rotasını ve süresini canlı takip edin</div>
            </div>
          </div>
          <div className="bg-white border-2 border-brand-navy/10 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">📸</span>
            <div>
              <div className="font-bold text-xs text-brand-navy">Fotoğraflı & Raporlu Seans</div>
              <div className="text-3xs text-gray-500">Her yürüyüş sonu tuvalet ve neşe raporu alın</div>
            </div>
          </div>
        </div>
      </div>

      {/* Şehir Filtresi */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-brand-navy">Şehir:</label>
          <select 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
            className="text-sm border-2 border-brand-navy rounded-xl px-3 py-1.5 bg-white outline-none font-medium"
          >
            <option value="all">Tüm Şehirler</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
          </select>
        </div>
        <div className="text-xs text-gray-500 font-medium">
          Toplam <strong>{filteredWalkers.length}</strong> doğrulanmış gezdirici listeleniyor
        </div>
      </div>

      {/* Gezdiriciler Kart Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredWalkers.map(walker => (
          <div 
            key={walker.id}
            className="bg-white rounded-3xl border-2 border-brand-navy/15 hover:border-brand-navy hover:shadow-lg transition-all duration-200 p-6 flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img 
                    src={walker.avatar} 
                    alt={walker.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-yellow shadow-xs"
                  />
                  <div>
                    <h2 className="font-title font-bold text-lg text-brand-navy flex items-center gap-1.5">
                      {walker.name}
                      {walker.verified && <VerifiedBadge className="w-4 h-4 text-emerald-600" />}
                    </h2>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                      <LocationIcon className="w-3.5 h-3.5 text-brand-earth" />
                      <span>{walker.district}, {walker.city}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-gray-400 block">Saatlik</span>
                  <span className="text-lg font-black font-title text-brand-navy">{walker.hourlyRate}</span>
                </div>
              </div>

              {/* Puan ve İstatistikler */}
              <div className="flex items-center gap-3 text-xs bg-brand-cream p-2.5 rounded-xl border border-brand-beige">
                <span className="font-bold text-brand-navy flex items-center gap-1">
                  ⭐ {walker.rating} <span className="text-gray-400 font-normal">({walker.reviewCount} yorum)</span>
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600">🦮 <strong>{walker.walkCount}+</strong> Yürüyüş</span>
                <span className="text-gray-300">|</span>
                <span className="text-emerald-700 font-bold">✓ {walker.experience}</span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {walker.bio}
              </p>

              {/* Hizmet Etiketleri */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {walker.services.map((srv, idx) => (
                  <span key={idx} className="text-3xs bg-brand-beige text-brand-navy font-bold px-2.5 py-1 rounded-full">
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-brand-beige flex items-center gap-3">
              <button
                onClick={() => setContactModal(walker)}
                className="flex-1 bg-brand-navy hover:bg-brand-navy-hover text-white py-2.5 px-4 rounded-full font-bold font-title text-xs transition-colors text-center"
              >
                Yürüyüş Talebi Oluştur
              </button>
              <button
                onClick={() => setContactModal(walker)}
                className="px-4 py-2.5 border-2 border-brand-navy hover:bg-brand-navy-light text-brand-navy rounded-full font-bold font-title text-xs transition-colors"
              >
                Detay & İletişim
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Gezdirici Olun Banner */}
      <div className="mt-12 bg-gradient-to-r from-brand-navy to-[#072438] text-white rounded-3xl p-8 text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider">Kariyer & Ek Gelir</span>
          <h3 className="font-title font-bold text-2xl mt-1">Köpek Gezdiricisi Olmak İster misiniz?</h3>
          <p className="text-gray-300 text-sm mt-1.5 max-w-xl">
            Hayvansever misiniz? patili.co gezdirici ağına katılın, mahallenizdeki köpeklerle yürüyerek ek gelir elde edin.
          </p>
        </div>
        <button 
          onClick={() => alert("patili.co Gezdirici Başvuru Formu çok yakında aktif olacaktır. İlginiz için teşekkürler!")}
          className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold px-6 py-3 rounded-full text-sm font-title whitespace-nowrap transition-colors"
        >
          Gezdirici Başvurusu Yap
        </button>
      </div>

      {/* Contact / Request Modal */}
      {contactModal && (
        <div className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-brand-navy relative">
            <button 
              onClick={() => setContactModal(null)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy font-bold text-xl"
            >
              ✕
            </button>
            
            {requestSent ? (
              <div className="py-8 text-center space-y-3">
                <span className="text-5xl">🎉</span>
                <h3 className="font-title font-bold text-2xl text-brand-navy">Talebiniz Alındı!</h3>
                <p className="text-gray-600 text-sm">
                  {contactModal.name} yürüyüş talebinizi aldı. En kısa sürede sizinle iletişime geçecektir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4 text-left">
                <div>
                  <span className="text-2xs font-bold text-brand-orange uppercase">Yürüyüş Talebi</span>
                  <h3 className="font-title font-bold text-xl text-brand-navy">
                    {contactModal.name} ile İletişim
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Bölge: {contactModal.district}, {contactModal.city} • Saatlik: {contactModal.hourlyRate}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Adınız & Soyadınız</label>
                  <input required type="text" placeholder="Örn: Ayşe Yılmaz" className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Telefon</label>
                    <input required type="tel" placeholder="05XX XXX XX XX" className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Köpeğinizin Irkı / Yaşı</label>
                    <input required type="text" placeholder="Örn: Golden, 2 yaşında" className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Tercih Edilen Gün & Saat / Notlar</label>
                  <textarea rows="3" placeholder="Örn: Hafta içi her gün sabah 08:30 ve akşam 19:00 yürüyüşü..." className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy" />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-3 rounded-full font-bold font-title text-sm transition-colors shadow-md"
                >
                  Talebi Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
