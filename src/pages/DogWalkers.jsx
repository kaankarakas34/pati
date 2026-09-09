import React, { useState, useEffect } from 'react';
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
  const [walkers, setWalkers] = useState(MOCK_WALKERS);
  const [selectedCity, setSelectedCity] = useState('all');
  const [contactModal, setContactModal] = useState(null);
  const [requestSent, setRequestSent] = useState(false);

  // Gezdirici Ol / Başvuru Modal States
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyForm, setApplyForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'İstanbul',
    district: '',
    hasDogExperience: '',
    hourlyRate: '350',
    bio: ''
  });
  const [applyLoading, setApplyLoading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyError, setApplyError] = useState('');

  // Sadece admin onaylı gezdiricileri sunucudan çek
  useEffect(() => {
    const fetchApprovedWalkers = async () => {
      try {
        const res = await fetch('/api/dog-walkers');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setWalkers(data);
          }
        }
      } catch (err) {
        console.warn('Gezdiriciler yüklenirken hata oluştu, varsayılan liste kullanılıyor:', err);
      }
    };
    fetchApprovedWalkers();
  }, []);

  const filteredWalkers = selectedCity === 'all' 
    ? walkers 
    : walkers.filter(w => (w.city || '').toLowerCase() === selectedCity.toLowerCase());

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
      setContactModal(null);
    }, 2500);
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setApplyLoading(true);
    setApplyError('');
    try {
      const res = await fetch('/api/dog-walker-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applyForm)
      });
      const data = await res.json();
      if (!res.ok) {
        setApplyError(data.error || 'Başvuru gönderilirken bir hata oluştu.');
        return;
      }
      setApplySuccess(true);
      setApplyForm({
        fullName: '',
        email: '',
        phone: '',
        city: 'İstanbul',
        district: '',
        hasDogExperience: '',
        hourlyRate: '350',
        bio: ''
      });
    } catch (err) {
      setApplyError('Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyiniz.');
    } finally {
      setApplyLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="border-b border-brand-beige pb-6 mb-8 text-left">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow/30 border border-brand-yellow text-brand-navy rounded-full text-xs font-bold">
            <span>🦮 patili.co Gezdirici Ağı</span>
          </div>
          <button
            onClick={() => { setApplySuccess(false); setApplyError(''); setIsApplyModalOpen(true); }}
            className="bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-bold font-title px-4 py-2 rounded-full shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <span>🐾</span> Gezdirici Ol (Başvuru Yap)
          </button>
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

      {/* Önemli Bilgilendirme Notu / Disclaimer */}
      <div className="bg-amber-50/90 border border-amber-200/90 text-amber-950 rounded-2xl p-4 sm:p-5 mb-8 flex items-start gap-3.5 text-left shadow-xs">
        <span className="text-2xl shrink-0 select-none">⚖️</span>
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="font-bold text-amber-900">Önemli Bilgilendirme: </strong>
          patili.co köpek gezdiricilerinden hiçbir komisyon talep etmez ve sorumluluk kabul etmez; yorumlar ve tecrübesine göre karar veriniz.
        </div>
      </div>

      {/* Şehir Filtresi ve Hızlı Başvuru Butonu */}
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
            <option value="Antalya">Antalya</option>
            <option value="Bursa">Bursa</option>
            <option value="Muğla">Muğla</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-gray-500 font-medium">
            Toplam <strong>{filteredWalkers.length}</strong> onaylı gezdirici listeleniyor
          </div>
          <button 
            onClick={() => { setApplySuccess(false); setApplyError(''); setIsApplyModalOpen(true); }}
            className="text-xs font-bold text-brand-navy bg-brand-yellow/50 hover:bg-brand-yellow px-3 py-1.5 rounded-full border border-brand-yellow transition-colors"
          >
            + Gezdirici Ol
          </button>
        </div>
      </div>

      {/* Gezdiriciler Kart Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredWalkers.map(walker => (
          <div 
            key={walker.id}
            className="bg-white rounded-3xl border border-brand-beige hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between text-left relative overflow-hidden"
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
            Hayvansever misiniz? patili.co gezdirici ağına katılın, mahallenizdeki köpeklerle yürüyerek ek gelir elde edin. Başvurunuz admin onayından sonra sayfada yayınlanır.
          </p>
        </div>
        <button 
          onClick={() => { setApplySuccess(false); setApplyError(''); setIsApplyModalOpen(true); }}
          className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold px-6 py-3 rounded-full text-sm font-title whitespace-nowrap transition-colors shadow-sm"
        >
          Gezdirici Başvurusu Yap
        </button>
      </div>

      {/* Gezdirici Ol / Başvuru Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-brand-navy relative my-8 text-left max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsApplyModalOpen(false)} 
              className="absolute top-5 right-5 text-gray-400 hover:text-brand-navy font-bold text-xl leading-none"
            >
              ✕
            </button>

            {applySuccess ? (
              <div className="py-8 text-center space-y-4">
                <span className="text-5xl block">🎉</span>
                <h3 className="font-title font-bold text-2xl text-brand-navy">Başvurunuz Alındı!</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                  Köpek gezdirici profil başvurunuz editörlerimize iletildi. Profil bilgileriniz ve tecrübeniz incelenip onaylandıktan sonra listede yayınlanacaktır.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsApplyModalOpen(false)}
                    className="bg-brand-navy hover:bg-brand-navy-hover text-white px-6 py-2.5 rounded-full text-xs font-bold font-title"
                  >
                    Tamam
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-brand-yellow/30 text-brand-navy text-3xs font-extrabold rounded-full mb-1">
                    <span>🦮 Gezdirici Ağı</span>
                  </div>
                  <h3 className="font-title font-bold text-2xl text-brand-navy">
                    Köpek Gezdiricisi Olun
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    patili.co köpek gezdiricilerinden <strong>hiçbir komisyon talep etmez</strong>. Başvurunuz admin editörleri tarafından incelenip onaylandıktan sonra profiliniz sayfada yayınlanacaktır.
                  </p>
                </div>

                {applyError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                    {applyError}
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-brand-navy block mb-1">İsim Soyisim *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Örn: Ayşe Demir" 
                    value={applyForm.fullName}
                    onChange={(e) => setApplyForm({ ...applyForm, fullName: e.target.value })}
                    className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-brand-navy block mb-1">E-posta Adresi *</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="ornek@mail.com" 
                      value={applyForm.email}
                      onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                      className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-navy block mb-1">Telefon Numarası *</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="05XX XXX XX XX" 
                      value={applyForm.phone}
                      onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                      className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-brand-navy block mb-1">Hizmet Şehri *</label>
                    <select 
                      value={applyForm.city}
                      onChange={(e) => setApplyForm({ ...applyForm, city: e.target.value })}
                      className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium bg-white"
                    >
                      <option value="İstanbul">İstanbul</option>
                      <option value="Ankara">Ankara</option>
                      <option value="İzmir">İzmir</option>
                      <option value="Antalya">Antalya</option>
                      <option value="Bursa">Bursa</option>
                      <option value="Muğla">Muğla</option>
                      <option value="Eskişehir">Eskişehir</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-navy block mb-1">İlçe / Bölge *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Örn: Kadıköy / Moda" 
                      value={applyForm.district}
                      onChange={(e) => setApplyForm({ ...applyForm, district: e.target.value })}
                      className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-brand-navy block mb-1">
                    Daha önce köpek sahibi oldunuz mu veya gezdirme tecrübeniz var mı? *
                  </label>
                  <textarea 
                    required 
                    rows="3" 
                    placeholder="Örn: 4 yıldır köpek sahibiyim. Daha önce komşularımın köpeklerini gezdirdim, büyük ve küçük ırklarla rahat iletişim kurabiliyorum..." 
                    value={applyForm.hasDogExperience}
                    onChange={(e) => setApplyForm({ ...applyForm, hasDogExperience: e.target.value })}
                    className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-brand-navy block mb-1">Saatlik Ücret Beklentisi (₺)</label>
                    <input 
                      type="text" 
                      placeholder="Örn: 350 ₺" 
                      value={applyForm.hourlyRate}
                      onChange={(e) => setApplyForm({ ...applyForm, hourlyRate: e.target.value })}
                      className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-navy block mb-1">Kısa Tanıtım / Bio</label>
                    <input 
                      type="text" 
                      placeholder="Örn: Pozitif ve enerjik köpek aşığı..." 
                      value={applyForm.bio}
                      onChange={(e) => setApplyForm({ ...applyForm, bio: e.target.value })}
                      className="w-full text-sm border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy font-medium" 
                    />
                  </div>
                </div>

                <div className="bg-brand-cream/60 p-3 rounded-xl border border-brand-beige text-3xs text-gray-600">
                  🔒 Bilgileriniz güvenle işlenecek olup, editör incelemesinden sonra profiliniz onaylanıp yayına alınacaktır.
                </div>

                <button 
                  type="submit" 
                  disabled={applyLoading}
                  className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-3 rounded-full font-bold font-title text-sm transition-colors shadow-md disabled:opacity-50"
                >
                  {applyLoading ? 'Gönderiliyor...' : 'Gezdirici Başvurusunu Tamamla'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

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
