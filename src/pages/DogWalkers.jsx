import React, { useState, useEffect } from 'react';
import { VerifiedBadge, LocationIcon, DogWalkerIcon } from '../components/PetIcons';
import SeoContentSection from '../components/SeoContentSection';
import { seoContent } from '../data/seoContent';

const CITY_DISTRICTS = {
  'İstanbul': [
    'Kadıköy', 'Beşiktaş', 'Sarıyer', 'Şişli', 'Üsküdar', 'Maltepe', 
    'Bakırköy', 'Ataşehir', 'Beyoğlu', 'Beylikdüzü', 'Kartal', 'Pendik'
  ],
  'Ankara': [
    'Çankaya', 'Yenimahalle', 'Keçiören', 'Etimesgut', 'Gölbaşı'
  ],
  'İzmir': [
    'Karşıyaka', 'Konak', 'Bornova', 'Buca', 'Çiğli', 'Urla', 'Gaziemir'
  ],
  'Antalya': [
    'Muratpaşa', 'Konyaaltı', 'Kepez', 'Alanya', 'Kaş'
  ],
  'Bursa': [
    'Nilüfer', 'Osmangazi', 'Yıldırım'
  ],
  'Muğla': [
    'Bodrum', 'Fethiye', 'Marmaris', 'Datça'
  ]
};

const MOCK_WALKERS = [
  {
    id: 'walker-1',
    name: 'Caner & Elif Pet Hizmetleri',
    phone: '0532 214 55 80',
    email: 'caner.elif@example.com',
    city: 'İstanbul',
    district: 'Kadıköy / Moda',
    rating: 4.9,
    reviewCount: 48,
    walkCount: 320,
    hourlyRate: '350 ₺',
    services: ['Bireysel Yürüyüş', 'Grup Yürüyüşü', 'Evde Ziyaret & Besleme'],
    experience: '5 yıl deneyim',
    bio: 'Veteriner teknikerliği geçmişimizle Kadıköy, Moda ve Caferağa çevresinde güvenli, tempolu yürüyüşler ve tuvalet rutinleri sağlıyoruz. Canlı GPS takibi ve fotoğraf güncellemeleri dahildir.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-2',
    name: 'Selin Arslan (Pati Koçu)',
    phone: '0533 415 62 90',
    email: 'selin.arslan@example.com',
    city: 'İstanbul',
    district: 'Kadıköy / Caddebostan & Bağdat Caddesi',
    rating: 5.0,
    reviewCount: 39,
    walkCount: 280,
    hourlyRate: '380 ₺',
    services: ['Bireysel Yürüyüş', 'Koşu & Egzersiz', 'Temel Sosyalleşme'],
    experience: '4 yıl deneyim',
    bio: 'Bağdat Caddesi ve Caddebostan sahil parkurunda enerjik köpekler için güvenli kayış protokolleriyle bireysel yürüyüş ve egzersiz yaptırıyorum.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-3',
    name: 'Barış & Bulut Köpek Eğitimi',
    phone: '0535 770 14 25',
    email: 'baris.bulut@example.com',
    city: 'İstanbul',
    district: 'Kadıköy / Fenerbahçe & Kalamış',
    rating: 4.9,
    reviewCount: 52,
    walkCount: 410,
    hourlyRate: '400 ₺',
    services: ['Bireysel Yürüyüş', 'Temel İtaat Pekiştirme', 'Grup Yürüyüşü'],
    experience: '6 yıl deneyim',
    bio: 'Kalamış Parkı ve Fenerbahçe sahilinde kayış çekiştirme problemini önleyen sakin ve kontrollü yürüyüşler sunuyoruz.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-4',
    name: 'Mert Aksoy (PatiDost)',
    phone: '0533 111 22 33',
    email: 'mert.aksoy@example.com',
    city: 'İstanbul',
    district: 'Beşiktaş / Levent & Akatlar',
    rating: 5.0,
    reviewCount: 62,
    walkCount: 510,
    hourlyRate: '400 ₺',
    services: ['Bireysel Yürüyüş', 'Temel İtaat Pekiştirme', 'Koşu & Egzersiz'],
    experience: '4 yıl deneyim',
    bio: 'Pozitif pekiştirme ve köpek davranışları sertifikalıyım. Büyük ırk ve enerjik köpekler için tempolu park koşuları ve güvenli yürüyüş seansları sunuyorum.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-5',
    name: 'Defne Çelik (Sahil Yürüyüşleri)',
    phone: '0536 890 34 12',
    email: 'defne.celik@example.com',
    city: 'İstanbul',
    district: 'Sarıyer / Yeniköy & Tarabya',
    rating: 4.9,
    reviewCount: 44,
    walkCount: 310,
    hourlyRate: '420 ₺',
    services: ['Bireysel Yürüyüş', 'Sahil Yürüyüşü', 'Yavru Köpek Rutini'],
    experience: '4 yıl deneyim',
    bio: 'Yeniköy, Tarabya ve İstinye sahil hattında koklama odaklı, zihinsel ve bedensel rahatlama sağlayan yürüyüş seansları sunuyorum.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-6',
    name: 'Burak Şen',
    phone: '0537 210 93 44',
    email: 'burak.sen@example.com',
    city: 'İstanbul',
    district: 'Şişli / Nişantaşı & Maçka',
    rating: 4.8,
    reviewCount: 29,
    walkCount: 190,
    hourlyRate: '350 ₺',
    services: ['Bireysel Yürüyüş', 'Park Egzersizi', 'İlaç Takibi'],
    experience: '3 yıl deneyim',
    bio: 'Maçka Demokrasi Parkı ve Nişantaşı bölgesinde her ırktan köpeğin temposuna uygun düzenli seanslar. Detaylı fotoğraf ve rota paylaşımı.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-7',
    name: 'Cem & Can Doğa Yürüyüşleri',
    phone: '0538 450 71 63',
    email: 'cem.can@example.com',
    city: 'İstanbul',
    district: 'Maltepe / Dragos Sahili',
    rating: 4.9,
    reviewCount: 37,
    walkCount: 260,
    hourlyRate: '340 ₺',
    services: ['Bireysel Yürüyüş', 'Grup Sosyalleşme', 'Koşu & Egzersiz'],
    experience: '3 yıl deneyim',
    bio: 'Maltepe dolgu alanı ve Dragos sahil şeridinde geniş yeşil alanlarda güvenli, neşeli ve bol enerjili yürüyüş seansları.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-8',
    name: 'Büşra Kurt',
    phone: '0537 905 43 21',
    email: 'busra.kurt@example.com',
    city: 'İstanbul',
    district: 'Üsküdar / Kuzguncuk & Çamlıca',
    rating: 4.9,
    reviewCount: 33,
    walkCount: 215,
    hourlyRate: '330 ₺',
    services: ['Bireysel Yürüyüş', 'Evde Ziyaret', 'Yavru Köpek Rutini'],
    experience: '3 yıl deneyim',
    bio: 'Kuzguncuk Bostanı ve Çamlıca çevresinde sabırlı, sevgi dolu yürüyüşler. Yaşlı ve hassas köpekler için özel tempo ayarı yapıyorum.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-9',
    name: 'Zeynep Kaya',
    phone: '0535 620 44 55',
    email: 'zeynep.kaya@example.com',
    city: 'Ankara',
    district: 'Çankaya / Tunalı & Kuğulu',
    rating: 4.8,
    reviewCount: 31,
    walkCount: 195,
    hourlyRate: '300 ₺',
    services: ['Bireysel Yürüyüş', 'Yavru Köpek Rutini', 'İlaç Takibi'],
    experience: '3 yıl deneyim',
    bio: 'Hassas ve çekingen köpeklerle sabırla iletişim kuruyorum. Seans sonu detaylı rota raporu, tuvalet bilgisi ve fotoğraf paylaşımı yapıyorum.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-10',
    name: 'Ege & Pati Ekibi',
    phone: '0536 410 50 60',
    email: 'ege.pati@example.com',
    city: 'İzmir',
    district: 'Karşıyaka / Bostanlı',
    rating: 4.9,
    reviewCount: 55,
    walkCount: 420,
    hourlyRate: '320 ₺',
    services: ['Sahil Yürüyüşü', 'Grup Sosyalleşme', 'Gündüz Bakımı'],
    experience: '4 yıl deneyim',
    bio: 'Bostanlı sahil hattında güvenli kayış protokolleriyle düzenli yürüyüşler yapıyoruz. Sosyalleşme odaklı grup turları veya bireysel yürüyüş seçenekleri mevcuttur.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-11',
    name: 'Barış Korkmaz',
    phone: '0544 310 82 91',
    email: 'baris.korkmaz@example.com',
    city: 'Antalya',
    district: 'Muratpaşa / Lara & Falezler',
    rating: 4.9,
    reviewCount: 27,
    walkCount: 180,
    hourlyRate: '350 ₺',
    services: ['Bireysel Yürüyüş', 'Koşu & Egzersiz', 'Sabah Erken Rutini'],
    experience: '3 yıl deneyim',
    bio: 'Antalya sıcağında sabah serinliğinde Falez parkı ve Lara sahilinde tempolu, güvenli ve bol su molalı köpek yürüyüşleri.',
    verified: true,
    status: 'approved'
  },
  {
    id: 'walker-12',
    name: 'Ece Gündoğan',
    phone: '0530 812 40 55',
    email: 'ece.gundogan@example.com',
    city: 'Muğla',
    district: 'Bodrum / Bitez & Ortakent',
    rating: 5.0,
    reviewCount: 22,
    walkCount: 140,
    hourlyRate: '450 ₺',
    services: ['Bireysel Yürüyüş', 'Doğa Yürüyüşü', 'Evde Ziyaret'],
    experience: '4 yıl deneyim',
    bio: 'Bodrum yarımadasında mandalina bahçeleri ve sakin patikalarda patili dostlarınıza özel güvenli ve keyifli yürüyüşler sunuyorum.',
    verified: true,
    status: 'approved'
  }
];

export default function DogWalkers({ onViewChange }) {
  const [walkers, setWalkers] = useState(MOCK_WALKERS);
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('all');

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

  // Telefon Temizleme ve WhatsApp URL Oluşturucu
  const cleanPhone = (phone) => (phone || '').replace(/\D/g, '');
  
  const getWhatsAppUrl = (phone, walkerName) => {
    let digits = cleanPhone(phone);
    if (!digits) return '#';
    if (digits.startsWith('0')) digits = '9' + digits;
    else if (!digits.startsWith('90')) digits = '90' + digits;
    const msg = encodeURIComponent(`Merhaba ${walkerName}, Patili.co üzerinden köpek gezdirme hizmetiniz için ulaştım. Bölgeniz ve müsaitliğiniz hakkında bilgi alabilir miyim?`);
    return `https://wa.me/${digits}?text=${msg}`;
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedDistrict('all');
  };

  const resetAllFilters = () => {
    setSelectedCity('all');
    setSelectedDistrict('all');
    setSearchQuery('');
    setSelectedService('all');
  };

  // Dinamik İlçe Seçenekleri
  const availableDistricts = selectedCity !== 'all' && CITY_DISTRICTS[selectedCity]
    ? CITY_DISTRICTS[selectedCity]
    : Object.values(CITY_DISTRICTS).flat();

  // Filtreleme Mantığı
  const filteredWalkers = walkers.filter(w => {
    const cityMatch = selectedCity === 'all' || (w.city || '').toLowerCase() === selectedCity.toLowerCase();
    
    const districtMatch = selectedDistrict === 'all' || 
      (w.district || '').toLowerCase().includes(selectedDistrict.toLowerCase());
      
    const q = searchQuery.trim().toLowerCase();
    const searchMatch = !q || 
      (w.name || '').toLowerCase().includes(q) ||
      (w.district || '').toLowerCase().includes(q) ||
      (w.city || '').toLowerCase().includes(q) ||
      (w.bio || '').toLowerCase().includes(q) ||
      (w.services || []).some(s => s.toLowerCase().includes(q));

    const serviceMatch = selectedService === 'all' || 
      (w.services && w.services.some(s => s.toLowerCase().includes(selectedService.toLowerCase())));
      
    return cityMatch && districtMatch && searchMatch && serviceMatch;
  });

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

  const isFilterActive = selectedCity !== 'all' || selectedDistrict !== 'all' || selectedService !== 'all' || searchQuery.trim() !== '';

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
          Köpek Gezdiricileri & Doğrudan İletişim Rehberi
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
          Köpeğinizin günlük tuvalet, egzersiz ve sosyalleşme ihtiyaçları için mahallenizdeki tecrübeli köpek gezdiricilerini bulun. 
          Aracı veya komisyon olmadan, doğrudan telefonla arayabilir veya WhatsApp üzerinden hemen konuşabilirsiniz.
        </p>

        {/* Güvenlik Standartları Şeridi */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border-2 border-brand-navy/10 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">📞</span>
            <div>
              <div className="font-bold text-xs text-brand-navy">Doğrudan & Komisyonsuz İletişim</div>
              <div className="text-3xs text-gray-500">Gezdiriciyi hemen arayın, detayları birebir görüşün</div>
            </div>
          </div>
          <div className="bg-white border-2 border-brand-navy/10 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <div className="font-bold text-xs text-brand-navy">Mahalle & İlçe Bazlı Filtreleme</div>
              <div className="text-3xs text-gray-500">Kadıköy, Beşiktaş, Sarıyer gibi tam bölgenizdeki uzmanlar</div>
            </div>
          </div>
          <div className="bg-white border-2 border-brand-navy/10 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <div className="font-bold text-xs text-brand-navy">Doğrulanmış Profiller & Raporlama</div>
              <div className="text-3xs text-gray-500">Canlı rota takibi, fotoğraf ve yürüyüş raporları</div>
            </div>
          </div>
        </div>
      </div>

      {/* Önemli Bilgilendirme Notu / Disclaimer */}
      <div className="bg-amber-50/90 border border-amber-200/90 text-amber-950 rounded-2xl p-4 sm:p-5 mb-8 flex items-start gap-3.5 text-left shadow-xs">
        <span className="text-2xl shrink-0 select-none">⚖️</span>
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="font-bold text-amber-900">Önemli Bilgilendirme: </strong>
          patili.co köpek sahipleri ile gezdiricileri doğrudan buluşturur; aracı kurum komisyonu almaz ve sorumluluk kabul etmez. 
          Gezdiricilerin profillerini, tecrübelerini ve kullanıcı yorumlarını inceleyerek doğrudan telefon veya WhatsApp üzerinden iletişime geçebilirsiniz.
        </div>
      </div>

      {/* Popüler İlçe Hızlı Filtre Çipleri (Preset Chips) */}
      <div className="space-y-2 mb-6 text-left">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Hızlı İlçe Seçimi:</div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
          <button
            onClick={() => { setSelectedCity('all'); setSelectedDistrict('all'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'all' && selectedDistrict === 'all' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Tüm Türkiye
          </button>
          <button
            onClick={() => { setSelectedCity('İstanbul'); setSelectedDistrict('Kadıköy'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'İstanbul' && selectedDistrict === 'Kadıköy' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Kadıköy (İstanbul)
          </button>
          <button
            onClick={() => { setSelectedCity('İstanbul'); setSelectedDistrict('Beşiktaş'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'İstanbul' && selectedDistrict === 'Beşiktaş' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Beşiktaş (İstanbul)
          </button>
          <button
            onClick={() => { setSelectedCity('İstanbul'); setSelectedDistrict('Sarıyer'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'İstanbul' && selectedDistrict === 'Sarıyer' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Sarıyer (İstanbul)
          </button>
          <button
            onClick={() => { setSelectedCity('İstanbul'); setSelectedDistrict('Şişli'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'İstanbul' && selectedDistrict === 'Şişli' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Şişli (İstanbul)
          </button>
          <button
            onClick={() => { setSelectedCity('Ankara'); setSelectedDistrict('Çankaya'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'Ankara' && selectedDistrict === 'Çankaya' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Çankaya (Ankara)
          </button>
          <button
            onClick={() => { setSelectedCity('İzmir'); setSelectedDistrict('Karşıyaka'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'İzmir' && selectedDistrict === 'Karşıyaka' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Karşıyaka (İzmir)
          </button>
          <button
            onClick={() => { setSelectedCity('Antalya'); setSelectedDistrict('Muratpaşa'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'Antalya' && selectedDistrict === 'Muratpaşa' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Muratpaşa (Antalya)
          </button>
          <button
            onClick={() => { setSelectedCity('Muğla'); setSelectedDistrict('Bodrum'); }}
            className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedCity === 'Muğla' && selectedDistrict === 'Bodrum' ? 'bg-brand-navy text-white shadow-xs' : 'bg-brand-cream text-brand-navy border border-brand-beige hover:bg-brand-beige'}`}
          >
            📍 Bodrum (Muğla)
          </button>
        </div>
      </div>

      {/* Hizmet Türü Filtreleri */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar text-xs">
        <button
          onClick={() => setSelectedService('all')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${selectedService === 'all' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Tüm Hizmetler
        </button>
        <button
          onClick={() => setSelectedService(selectedService === 'Bireysel' ? 'all' : 'Bireysel')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedService === 'Bireysel' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <span>🚶‍♂️</span> Bireysel Yürüyüş
        </button>
        <button
          onClick={() => setSelectedService(selectedService === 'Grup' ? 'all' : 'Grup')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedService === 'Grup' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <span>🐕‍🦺</span> Grup Sosyalleşme
        </button>
        <button
          onClick={() => setSelectedService(selectedService === 'Koşu' ? 'all' : 'Koşu')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedService === 'Koşu' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <span>🏃</span> Koşu & Egzersiz
        </button>
        <button
          onClick={() => setSelectedService(selectedService === 'İlaç' ? 'all' : 'İlaç')}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${selectedService === 'İlaç' ? 'bg-brand-navy text-white shadow-xs' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <span>💊</span> İlaç Takibi
        </button>
      </div>

      {/* Arama ve Şehir / İlçe Filtre Kontrolleri */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-brand-navy/10 shadow-xs mb-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Arama Kutusu */}
          <div className="relative">
            <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
              İlçe, Semt veya Gezdirici Ara
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Örn: Kadıköy, Beşiktaş, Moda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm border-2 border-brand-navy/20 rounded-xl pl-9 pr-8 py-2 outline-none focus:border-brand-navy font-medium bg-brand-cream/30"
              />
              <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-gray-400 hover:text-brand-navy text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Şehir Seçimi */}
          <div>
            <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
              Şehir
            </label>
            <select
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy/20 rounded-xl px-3 py-2 bg-white outline-none focus:border-brand-navy font-medium"
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

          {/* İlçe Seçimi */}
          <div>
            <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
              İlçe / Bölge
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full text-sm border-2 border-brand-navy/20 rounded-xl px-3 py-2 bg-white outline-none focus:border-brand-navy font-medium"
            >
              <option value="all">Tüm İlçeler</option>
              {Array.from(new Set(availableDistricts)).map(dist => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sonuç Özeti ve Filtre Temizleme */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-3 mt-3 border-t border-brand-beige text-xs">
          <div className="text-gray-500 font-medium">
            Toplam <strong className="text-brand-navy font-bold">{filteredWalkers.length}</strong> onaylı gezdirici listeleniyor
            {selectedDistrict !== 'all' && <span> • <strong>{selectedDistrict}</strong> bölgesinde</span>}
            {selectedCity !== 'all' && selectedDistrict === 'all' && <span> • <strong>{selectedCity}</strong> genelinde</span>}
          </div>
          {isFilterActive && (
            <button
              onClick={resetAllFilters}
              className="text-brand-orange font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>✕</span> Filtreleri Sıfırla
            </button>
          )}
        </div>
      </div>

      {/* Gezdiriciler Kart Listesi */}
      {filteredWalkers.length === 0 ? (
        <div className="bg-white rounded-3xl border-2 border-dashed border-brand-navy/20 p-12 text-center my-6 space-y-4">
          <span className="text-5xl block">🐕‍🦺</span>
          <h3 className="font-title font-bold text-xl text-brand-navy">
            Aradığınız Kriterlere Uygun Gezdirici Bulunamadı
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            {selectedDistrict !== 'all' ? `"${selectedDistrict}" ilçesinde ` : ''}henüz kayıtlı gezdirici bulunmuyor olabilir. Filtreleri sıfırlayarak çevre ilçelerdeki gezdiricileri görüntüleyebilirsiniz.
          </p>
          <button
            onClick={resetAllFilters}
            className="bg-brand-navy hover:bg-brand-navy-hover text-white px-6 py-2.5 rounded-full font-bold font-title text-xs transition-colors"
          >
            Tüm Gezdiricileri Göster
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredWalkers.map(walker => (
            <div 
              key={walker.id}
              className="bg-white rounded-3xl border border-brand-beige hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between text-left relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-beige flex items-center justify-center text-brand-navy shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <DogWalkerIcon className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <h2 className="font-title font-bold text-lg text-brand-navy flex items-center gap-1.5">
                        {walker.name}
                        {walker.verified && <VerifiedBadge className="w-4 h-4 text-emerald-600" />}
                      </h2>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                        <LocationIcon className="w-3.5 h-3.5 text-brand-earth" />
                        <span className="font-medium text-brand-navy/80">{walker.district}, {walker.city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-3xs font-bold text-gray-400 block uppercase tracking-wider">Saatlik</span>
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

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {walker.bio}
                </p>

                {/* Hizmet Etiketleri */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(walker.services || []).map((srv, idx) => (
                    <span key={idx} className="text-3xs bg-brand-beige text-brand-navy font-bold px-2.5 py-1 rounded-full">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Doğrudan İletişim & Arama Alanı (Form yok, doğrudan arama ve whatsapp) */}
              <div className="pt-4 mt-4 border-t border-brand-beige space-y-2.5">
                <div className="flex items-center justify-between text-xs bg-brand-cream/70 px-3 py-2 rounded-xl border border-brand-beige">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <span>📞</span> İletişim:
                  </span>
                  <a
                    href={`tel:${cleanPhone(walker.phone)}`}
                    className="font-bold text-brand-navy hover:text-brand-orange transition-colors"
                  >
                    {walker.phone || '05XX XXX XX XX'}
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${cleanPhone(walker.phone)}`}
                    className="bg-brand-navy hover:bg-brand-navy-hover text-white py-2.5 px-3 rounded-full font-bold font-title text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
                  >
                    <span>📞</span> Hemen Ara
                  </a>
                  <a
                    href={getWhatsAppUrl(walker.phone, walker.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-full font-bold font-title text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs text-center active:scale-95"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                </div>

                <div className="text-3xs text-center text-gray-400">
                  Komisyonsuz doğrudan görüşme • Müsaitlik ve rotayı kendiniz planlayın
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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

      {/* Detailed Turkish SEO & GEO Content Section (>= 300 words) */}
      <SeoContentSection content={seoContent.dogWalkers || {}} />
    </div>
  );
}
