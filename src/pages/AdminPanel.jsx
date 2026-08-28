import React, { useEffect, useMemo, useState } from 'react';
import { EditIcon, PlusIcon, CheckIcon } from '../components/PetIcons';

export default function AdminPanel({
  hotels, setHotels,
  boardings, setBoardings,
  guides, setGuides,
  corrections, setCorrections,
  complaints = [], setComplaints,
  experiences = [], setExperiences,
  ads = [], setAds
}) {
  const [activeSubTab, setActiveSubTab] = useState('hotels');
  
  // Edit states
  const [editingItem, setEditingItem] = useState(null); // { type: 'hotel'|'boarding'|'guide', id }
  const [isAdding, setIsAdding] = useState(false);
  const [hotelSearch, setHotelSearch] = useState('');
  const [hotelVerificationFilter, setHotelVerificationFilter] = useState('all');
  const [hotelPage, setHotelPage] = useState(1);

  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('admin_authenticated') === 'true' && Boolean(sessionStorage.getItem('admin_token'))
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [adApplications, setAdApplications] = useState([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);
  const [applicationsError, setApplicationsError] = useState('');

  const loadAdApplications = async () => {
    const token = sessionStorage.getItem('admin_token');
    if (!token) return;
    setApplicationsLoading(true);
    setApplicationsError('');
    try {
      const response = await fetch('/api/ad-applications', { headers: { 'x-admin-token': token } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Başvurular yüklenemedi.');
      setAdApplications(Array.isArray(data) ? data : []);
    } catch (error) {
      setApplicationsError(error.message);
    } finally {
      setApplicationsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) loadAdApplications();
  }, [isAuthenticated]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || 'Hatalı kullanıcı adı veya şifre!');
        return;
      }
      sessionStorage.setItem('admin_authenticated', 'true');
      sessionStorage.setItem('admin_token', data.token);
      setIsAuthenticated(true);
      setLoginError('');
    } catch (err) {
      setLoginError('Giriş servisine ulaşılamadı.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  // URL Scraper states
  const [scrapeUrl, setScrapeUrl] = useState('');
  const [scrapingLoading, setScrapingLoading] = useState(false);
  const [scrapeError, setScrapeError] = useState('');

  const handleScrapeHotel = async () => {
    if (!scrapeUrl) return;
    setScrapingLoading(true);
    setScrapeError('');
    try {
      const res = await fetch('/api/scrape-hotel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: scrapeUrl })
      });
      const data = await res.json();
      if (data.error) {
        setScrapeError(data.error);
      } else {
        // Auto populate fields
        setHotelForm(prev => ({
          ...prev,
          name: data.name || prev.name,
          city: data.city || prev.city,
          district: data.district || prev.district,
          imageUrl: data.imageUrl || prev.imageUrl,
          description: data.description || prev.description,
          features: data.features && data.features.length > 0 ? data.features : prev.features,
          website: data.website || prev.website || '',
          bookingLinks: {
            ...prev.bookingLinks,
            enuygun: scrapeUrl
          }
        }));
      }
    } catch (err) {
      setScrapeError('URL taranamadı. Lütfen sunucunun ve internetinizin aktif olduğunu doğrulayın.');
    } finally {
      setScrapingLoading(false);
    }
  };

  // Form fields
  const [hotelForm, setHotelForm] = useState({
    name: '', city: '', district: '', type: 'Otel', suitability: 1, weightLimit: 0, verified: false,
    extraFee: 'no', allowedPets: ['dog'], features: [], quizTags: [], imageUrl: '', galleryImages: '', description: '',
    whySelected: '', suitableFor: '', notSuitableFor: '', disallowedPets: '',
    breedRestrictions: '', maxPetsPerRoom: 1, depositInfo: 'Alınmıyor',
    requiredDocs: 'Aşı karnesi', canLeaveInRoomAlone: true, rules: { pool: '', beach: '', restaurant: '' }, bookingLinks: { enuygun: '', otelz: '', booking: '' },
    veterinarySupport: '', phone: '', email: '', website: '', editorNote: '', infoSource: '',
    faq: [{ q: '', a: '' }], lastVerified: new Date().toISOString().split('T')[0], baseTrustScore: 9.5
  });

  const [boardingForm, setBoardingForm] = useState({
    name: '', category: 'Kedi otelleri', city: '', district: '', imageUrl: '', galleryImages: '',
    allowedPets: ['cat'], features: [], quizTags: [], price: 'Günlük 400 TL', description: '',
    boardingModel: 'Bireysel Odalı', dailyProgram: '', accreditedVet: '',
    phone: '', email: '', website: '', bookingLinks: { enuygun: '', otelz: '', booking: '' }, cameraSupport: true, requiredDocs: 'Karma aşı',
    neuteringRequired: 'Zorunlu', aggressionPolicy: 'Uysal hayvan kabulü',
    infoSource: 'İşletme beyanı', lastVerified: new Date().toISOString().split('T')[0], baseTrustScore: 9.5
  });

  const [guideForm, setGuideForm] = useState({
    title: '', category: 'Köpekle Seyahat', shortAnswer: '', summary: '',
    content: '', checklist: '', faq: [{ q: '', a: '' }],
    authorName: '', authorRole: '', authorImage: '',
    vetChecked: false, vetName: '', seoTitle: '', seoDesc: '',
    publishedAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0]
  });

  const [experienceForm, setExperienceForm] = useState({
    name: '', category: 'Kafe & Restoran', city: '', district: '', imageUrl: '',
    petPolicy: '', allowedPets: 'dog,cat', features: '', description: '', address: '',
    phone: '', website: '', mapUrl: '', bestTime: '', rules: '',
    baseTrustScore: 9.0, lastVerified: new Date().toISOString().split('T')[0]
  });

  const [adForm, setAdForm] = useState({
    title: '', sponsor: '', placement: 'home-hero', targetUrl: '', imageUrl: '',
    city: '', category: 'Konaklama', startsAt: new Date().toISOString().split('T')[0],
    endsAt: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
    status: 'active', impressions: 0, clicks: 0
  });

  // Stats calculations
  const pendingCorrectionsCount = corrections.filter(c => c.status === 'pending').length;
  const pendingComplaintsCount = complaints.filter(c => c.status === 'pending').length;
  const verifiedHotelsCount = hotels.filter(hotel => hotel.verified === true).length;
  const unverifiedHotelsCount = hotels.length - verifiedHotelsCount;
  const filteredHotels = useMemo(() => {
    const query = hotelSearch.trim().toLocaleLowerCase('tr-TR');
    return hotels.filter(hotel => {
      const matchesQuery = !query || [hotel.name, hotel.city, hotel.district]
        .some(value => String(value || '').toLocaleLowerCase('tr-TR').includes(query));
      const matchesVerification = hotelVerificationFilter === 'all'
        || (hotelVerificationFilter === 'verified' && hotel.verified === true)
        || (hotelVerificationFilter === 'unverified' && hotel.verified !== true);
      return matchesQuery && matchesVerification;
    });
  }, [hotels, hotelSearch, hotelVerificationFilter]);
  const hotelsPerPage = 25;
  const hotelPageCount = Math.max(1, Math.ceil(filteredHotels.length / hotelsPerPage));
  const visibleHotels = filteredHotels.slice((hotelPage - 1) * hotelsPerPage, hotelPage * hotelsPerPage);

  useEffect(() => {
    setHotelPage(1);
  }, [hotelSearch, hotelVerificationFilter]);

  useEffect(() => {
    setHotelPage(current => Math.min(current, hotelPageCount));
  }, [hotelPageCount]);

  const handleEditHotel = (hotel) => {
    setEditingItem({ type: 'hotel', id: hotel.id });
    setHotelForm({
      ...hotel,
      suitableFor: hotel.suitableFor.join('\n'),
      notSuitableFor: hotel.notSuitableFor.join('\n'),
      disallowedPets: hotel.disallowedPets ? hotel.disallowedPets.join('\n') : '',
      galleryImages: (hotel.galleryImages || []).join('\n'),
      features: hotel.features || [], quizTags: hotel.quizTags || [], bookingLinks: hotel.bookingLinks || { enuygun: '', otelz: '', booking: '' }
    });
    setIsAdding(true);
  };

  const handleEditBoarding = (boarding) => {
    setEditingItem({ type: 'boarding', id: boarding.id });
    setBoardingForm({
      ...boarding,
      galleryImages: (boarding.galleryImages || []).join('\n'),
      features: boarding.features || [], quizTags: boarding.quizTags || [], bookingLinks: boarding.bookingLinks || { enuygun: '', otelz: '', booking: '' }
    });
    setIsAdding(true);
  };

  const handleEditGuide = (guide) => {
    setEditingItem({ type: 'guide', id: guide.id });
    setGuideForm({
      ...guide,
      checklist: guide.checklist.join('\n'),
      authorName: guide.author.name,
      authorRole: guide.author.role,
      authorImage: guide.author.imageUrl
    });
    setIsAdding(true);
  };

  const handleDeleteItem = (type, id) => {
    if (!window.confirm('Bu kaydı tamamen silmek istediğinize emin misiniz?')) return;
    if (type === 'hotel') {
      setHotels(hotels.filter(h => h.id !== id));
    } else if (type === 'boarding') {
      setBoardings(boardings.filter(b => b.id !== id));
    } else {
      setGuides(guides.filter(g => g.id !== id));
    }
  };

  const handleSaveHotel = (e) => {
    e.preventDefault();
    const formattedHotel = {
      ...hotelForm,
      id: editingItem ? editingItem.id : `hotel-${Date.now()}`,
      suitability: parseInt(hotelForm.suitability),
      weightLimit: parseInt(hotelForm.weightLimit),
      maxPetsPerRoom: parseInt(hotelForm.maxPetsPerRoom),
      suitableFor: hotelForm.suitableFor.split('\n').filter(Boolean),
      notSuitableFor: hotelForm.notSuitableFor.split('\n').filter(Boolean),
      disallowedPets: hotelForm.disallowedPets.split('\n').filter(Boolean),
      galleryImages: typeof hotelForm.galleryImages === 'string' ? hotelForm.galleryImages.split('\n').map(url => url.trim()).filter(Boolean) : hotelForm.galleryImages,
      features: hotelForm.features,
      quizTags: hotelForm.quizTags,
      baseTrustScore: parseFloat(hotelForm.baseTrustScore || 9.5),
      verified: hotelForm.verified === true || hotelForm.verified === 'true'
    };

    if (editingItem) {
      setHotels(hotels.map(h => h.id === editingItem.id ? formattedHotel : h));
    } else {
      setHotels([formattedHotel, ...hotels]);
    }
    setIsAdding(false);
    setEditingItem(null);
  };

  const handleSaveBoarding = (e) => {
    e.preventDefault();
    const formattedBoarding = {
      ...boardingForm,
      id: editingItem ? editingItem.id : `boarding-${Date.now()}`,
      cameraSupport: boardingForm.cameraSupport === true || boardingForm.cameraSupport === 'true', bookingLinks: boardingForm.bookingLinks,
      galleryImages: typeof boardingForm.galleryImages === 'string' ? boardingForm.galleryImages.split('\n').map(url => url.trim()).filter(Boolean) : boardingForm.galleryImages,
      baseTrustScore: parseFloat(boardingForm.baseTrustScore || 9.5),
      quizTags: boardingForm.quizTags,
      verified: true
    };

    if (editingItem) {
      setBoardings(boardings.map(b => b.id === editingItem.id ? formattedBoarding : b));
    } else {
      setBoardings([formattedBoarding, ...boardings]);
    }
    setIsAdding(false);
    setEditingItem(null);
  };

  const handleSaveGuide = (e) => {
    e.preventDefault();
    const formattedGuide = {
      ...guideForm,
      id: editingItem ? editingItem.id : `guide-${Date.now()}`,
      slug: guideForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      checklist: guideForm.checklist.split('\n').filter(Boolean),
      author: {
        name: guideForm.authorName,
        role: guideForm.authorRole,
        imageUrl: guideForm.authorImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      }
    };

    if (editingItem) {
      setGuides(guides.map(g => g.id === editingItem.id ? formattedGuide : g));
    } else {
      setGuides([formattedGuide, ...guides]);
    }
    setIsAdding(false);
    setEditingItem(null);
  };

  const handleSaveExperience = (e) => {
    e.preventDefault();
    const formattedExperience = {
      ...experienceForm,
      id: `exp-${Date.now()}`,
      allowedPets: experienceForm.allowedPets.split(',').map(item => item.trim()).filter(Boolean),
      features: experienceForm.features.split('\n').map(item => item.trim()).filter(Boolean),
      baseTrustScore: parseFloat(experienceForm.baseTrustScore || 9.0),
      verified: true
    };
    setExperiences([formattedExperience, ...experiences]);
    setExperienceForm({
      name: '', category: 'Kafe & Restoran', city: '', district: '', imageUrl: '',
      petPolicy: '', allowedPets: 'dog,cat', features: '', description: '', address: '',
      phone: '', website: '', mapUrl: '', bestTime: '', rules: '',
      baseTrustScore: 9.0, lastVerified: new Date().toISOString().split('T')[0]
    });
  };

  const handleSaveAd = (e) => {
    e.preventDefault();
    const formattedAd = {
      ...adForm,
      id: `ad-${Date.now()}`,
      impressions: parseInt(adForm.impressions || 0),
      clicks: parseInt(adForm.clicks || 0)
    };
    setAds([formattedAd, ...ads]);
    setAdForm({
      title: '', sponsor: '', placement: 'home-hero', targetUrl: '', imageUrl: '',
      city: '', category: 'Konaklama', startsAt: new Date().toISOString().split('T')[0],
      endsAt: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
      status: 'active', impressions: 0, clicks: 0
    });
  };

  const handleCorrectionAction = (id, newStatus) => {
    setCorrections(corrections.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  const handleComplaintAction = (id, newStatus) => {
    setComplaints(complaints.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white border-2 border-brand-navy/15 p-10 rounded-3xl shadow-lg text-left">
          <div className="text-center space-y-2">
            <span className="text-5xl block animate-pulse">🔒</span>
            <h2 className="font-title text-3xl font-extrabold text-brand-navy">Editör Girişi</h2>
            <p className="text-xs text-gray-505">patiyleseyahat.com yönetim paneline erişmek için bilgilerinizi girin.</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="mt-8 space-y-6">
            {loginError && (
              <div className="bg-red-50 border-l-4 border-red-550 p-4 rounded text-xs text-red-700 font-medium">
                ⚠️ {loginError}
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block">Kullanıcı Adı</label>
                <input
                  type="text"
                  required
                  placeholder="Kullanıcı adınızı girin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full text-sm border-2 border-brand-navy rounded-xl p-3 outline-none focus:ring-0"
                />
              </div>

              <div className="space-y-1">
                <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block">Şifre</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm border-2 border-brand-navy rounded-xl p-3 outline-none focus:ring-0"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-3 rounded-full text-sm font-bold font-title transition-colors shadow-md border border-brand-navy/10 mt-4"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      {/* Header & Dashboard Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-brand-beige pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-title text-brand-navy">Editör Yönetim Paneli</h1>
          <p className="text-gray-600 text-sm mt-1">İçerik, evcil hayvan politikaları, güven puanı ve şikayetlerin yönetimi.</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-50 hover:bg-red-100 text-red-600 border-2 border-red-200/50 text-xs font-bold px-5 py-2.5 rounded-full transition-colors font-title flex items-center gap-1"
        >
          <span>🔓</span> Çıkış Yap
        </button>
        <div className="flex gap-3 text-center">
          <div className="bg-white border border-brand-beige rounded-xl p-3 shadow-2xs min-w-[90px]">
            <span className="text-lg font-bold text-brand-green block">{hotels.length}</span>
            <span className="text-4xs text-gray-500 font-semibold uppercase">Otel</span>
          </div>
          <div className="bg-white border border-brand-beige rounded-xl p-3 shadow-2xs min-w-[90px]">
            <span className="text-lg font-bold text-brand-earth-dark block">{boardings.length}</span>
            <span className="text-4xs text-gray-500 font-semibold uppercase">Pet Oteli</span>
          </div>
          <div className="bg-white border border-brand-beige rounded-xl p-3 shadow-2xs min-w-[90px]">
            <span className="text-lg font-bold text-sky-600 block">{guides.length}</span>
            <span className="text-4xs text-gray-500 font-semibold uppercase">Rehber</span>
          </div>
          <div className="bg-white border border-brand-beige rounded-xl p-3 shadow-2xs min-w-[90px]">
            <span className="text-lg font-bold text-brand-orange block">{pendingCorrectionsCount}</span>
            <span className="text-4xs text-gray-500 font-semibold uppercase">Bildirim</span>
          </div>
          <div className="bg-white border border-brand-beige rounded-xl p-3 shadow-2xs min-w-[90px]">
            <span className="text-lg font-bold text-red-650 block">{pendingComplaintsCount}</span>
            <span className="text-4xs text-gray-500 font-semibold uppercase">Şikayet</span>
          </div>
        </div>
      </div>

      {/* Sub tabs navigation */}
      <div className="flex border-b border-brand-beige mb-6 gap-6 text-sm font-semibold overflow-x-auto">
        <button onClick={() => { setActiveSubTab('hotels'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'hotels' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Oteller</button>
        <button onClick={() => { setActiveSubTab('boardings'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'boardings' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Bakım Evleri</button>
        <button onClick={() => { setActiveSubTab('guides'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'guides' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Rehberler</button>
        <button onClick={() => { setActiveSubTab('experiences'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'experiences' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Gezilecek Yerler</button>
        <button onClick={() => { setActiveSubTab('ads'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'ads' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Reklamlar</button>
        <button onClick={() => { setActiveSubTab('ad-applications'); setIsAdding(false); loadAdApplications(); }} className={`pb-3 border-b-2 relative whitespace-nowrap ${activeSubTab === 'ad-applications' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
          Reklam Başvuruları
        </button>
        <button onClick={() => { setActiveSubTab('corrections'); setIsAdding(false); }} className={`pb-3 border-b-2 relative whitespace-nowrap ${activeSubTab === 'corrections' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
          Düzeltmeler
          {pendingCorrectionsCount > 0 && <span className="ml-1 bg-brand-orange text-white text-4xs rounded-full px-1.5 py-0.5 font-bold">{pendingCorrectionsCount}</span>}
        </button>
        <button onClick={() => { setActiveSubTab('complaints-inbox'); setIsAdding(false); }} className={`pb-3 border-b-2 relative whitespace-nowrap ${activeSubTab === 'complaints-inbox' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
          Şikayet Kutusu
          {pendingComplaintsCount > 0 && <span className="ml-1 bg-red-650 text-white text-4xs rounded-full px-1.5 py-0.5 font-bold animate-pulse">{pendingComplaintsCount}</span>}
        </button>
      </div>

      {/* Adding/Editing View */}
      {isAdding ? (
        <div className="bg-white border border-brand-beige rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex justify-between items-center pb-4 border-b border-brand-beige mb-6">
            <h3 className="font-title font-bold text-lg text-gray-900">
              {editingItem ? 'Kaydı Düzenle' : 'Yeni Kayıt Ekle'}
            </h3>
            <button onClick={() => { setIsAdding(false); setEditingItem(null); }} className="text-xs text-red-500 font-semibold hover:underline">Vazgeç</button>
          </div>

          {/* Form 1: Hotel Form */}
          {activeSubTab === 'hotels' && (
            <div>
              {/* URL Scraper Assistant */}
              {!editingItem && (
                <div className="bg-brand-navy-light/45 border-2 border-brand-navy/15 rounded-3xl p-5 mb-6 text-left">
                  <h4 className="font-title font-bold text-brand-navy text-sm mb-1 flex items-center gap-1">
                    <span>🤖</span> Otomatik Otel Bilgisi Doldurucu (URL Taraması)
                  </h4>
                  <p className="text-4xs text-gray-500 mb-3 leading-normal">
                    Bir Enuygun otel detay URL'si girin. Başlık, açıklama, konum, görsel ve oda özellikleri otomatik olarak çekilecektir.
                  </p>
                  
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Örn: https://www.enuygun.com/otel/detay/merit-park-hotel-547506/..."
                      value={scrapeUrl}
                      onChange={(e) => setScrapeUrl(e.target.value)}
                      className="flex-grow text-xs border-2 border-brand-navy/30 rounded-xl px-3 py-2.5 outline-none focus:border-brand-navy bg-white"
                    />
                    <button
                      type="button"
                      disabled={scrapingLoading}
                      onClick={handleScrapeHotel}
                      className="bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-bold px-6 py-2.5 rounded-full border border-brand-navy/10 flex items-center gap-1 disabled:opacity-50 transition-all whitespace-nowrap"
                    >
                      {scrapingLoading ? 'Taranıyor...' : 'Bilgileri Çek'}
                    </button>
                  </div>
                  {scrapeError && <p className="text-4xs text-red-500 font-bold mt-2">⚠️ {scrapeError}</p>}
                </div>
              )}

              <form onSubmit={handleSaveHotel} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {/* Hotel basic information */}
              <div className="space-y-4 text-left">
                <h4 className="font-title font-bold text-brand-green border-b pb-1">Temel Otel Bilgileri</h4>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Otel Adı</label>
                  <input type="text" required value={hotelForm.name} onChange={(e) => setHotelForm({...hotelForm, name: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none focus:border-brand-green" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Şehir</label>
                    <input type="text" required value={hotelForm.city} onChange={(e) => setHotelForm({...hotelForm, city: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">İlçe</label>
                    <input type="text" required value={hotelForm.district} onChange={(e) => setHotelForm({...hotelForm, district: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Tesis Türü</label>
                    <select value={hotelForm.type} onChange={(e) => setHotelForm({...hotelForm, type: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none bg-white">
                      <option value="Otel">Otel</option>
                      <option value="Butik Otel">Butik Otel</option>
                      <option value="Bungalov">Bungalov</option>
                      <option value="Villa">Villa</option>
                      <option value="Glamping tesisi">Glamping</option>
                      <option value="Tatil köyü">Tatil Köyü</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Dost Seviyesi</label>
                    <select value={hotelForm.suitability} onChange={(e) => setHotelForm({...hotelForm, suitability: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none bg-white">
                      <option value="1">1. Kabul Ediyor</option>
                      <option value="2">2. Pet Dostu</option>
                      <option value="3">3. Deneyim Sunuyor</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Baz Güven Puanı</label>
                    <input type="number" step="0.1" max="10" min="1" value={hotelForm.baseTrustScore} onChange={(e) => setHotelForm({...hotelForm, baseTrustScore: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>
                <label className="flex items-start gap-3 border border-brand-beige rounded-lg p-3 bg-brand-cream/40 cursor-pointer">
                  <input type="checkbox" checked={hotelForm.verified === true} onChange={(e) => setHotelForm({...hotelForm, verified: e.target.checked})} className="w-4 h-4 mt-0.5 accent-brand-green" />
                  <span>
                    <strong className="block text-xs text-gray-800">İşletme bilgileri doğrulandı</strong>
                    <span className="block text-3xs text-gray-500 mt-1">Yalnızca tesisle doğrudan iletişim kurup bilgileri teyit ettiyseniz işaretleyin.</span>
                  </span>
                </label>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Görsel URL</label>
                  <input type="text" placeholder="https://..." value={hotelForm.imageUrl} onChange={(e) => setHotelForm({...hotelForm, imageUrl: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Galeri Görselleri (Satır satır URL)</label>
                  <textarea rows="3" placeholder="https://..." value={hotelForm.galleryImages} onChange={(e) => setHotelForm({...hotelForm, galleryImages: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Editoryal Özet (Açıklama)</label>
                  <textarea rows="4" value={hotelForm.description} onChange={(e) => setHotelForm({...hotelForm, description: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
                
                {/* quizTags Checkboxes */}
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Sihirbaz Etiketleri (quizTags)</label>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                    {[
                      { tag: 'birlikte', label: 'Birlikte Kalma' },
                      { tag: 'kopek', label: 'Köpek Dostu' },
                      { tag: 'kedi', label: 'Kedi Dostu' },
                      { tag: 'kus', label: 'Kuş Dostu' },
                      { tag: 'buyuk-irk', label: 'Büyük Irk' },
                      { tag: 'kucuk-irk', label: 'Küçük Irk' },
                      { tag: 'ucretsiz-pet', label: 'Ek Ücretsiz' },
                      { tag: 'ek-ucretli', label: 'Ek Ücretli' },
                      { tag: 'bahceli', label: 'Bahçeli' },
                      { tag: 'pet-menusu', label: 'Pet Menülü' },
                      { tag: 'restoran-izni', label: 'Restoran İzinli' },
                      { tag: 'odada-yalniz', label: 'Odada Yalnız Kalabilir' },
                      { tag: 'doga-icinde', label: 'Doğa İçinde' },
                      { tag: 'denize-sifir', label: 'Denize Sıfır' },
                      { tag: 'pet-plaji', label: 'Pet Plajı' },
                      { tag: 'coklu-pet', label: 'Birden Fazla Hayvan' }
                    ].map(item => (
                      <label key={item.tag} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={hotelForm.quizTags ? hotelForm.quizTags.includes(item.tag) : false}
                          onChange={(e) => {
                            const tags = hotelForm.quizTags || [];
                            if (e.target.checked) {
                              setHotelForm({ ...hotelForm, quizTags: [...tags, item.tag] });
                            } else {
                              setHotelForm({ ...hotelForm, quizTags: tags.filter(t => t !== item.tag) });
                            }
                          }}
                          className="rounded text-brand-green focus:ring-brand-green"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Policies inputs */}
              <div className="space-y-4">
                <h4 className="font-title font-bold text-brand-green border-b pb-1">Evcil Hayvan Politikası</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Kilo Sınırı (0 = Limitsiz)</label>
                    <input type="number" value={hotelForm.weightLimit} onChange={(e) => setHotelForm({...hotelForm, weightLimit: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Ek Ücret Politikası</label>
                    <input type="text" placeholder="no veya Gecelik 200 TL" value={hotelForm.extraFee} onChange={(e) => setHotelForm({...hotelForm, extraFee: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Bu otel neden seçildi?</label>
                  <input type="text" value={hotelForm.whySelected} onChange={(e) => setHotelForm({...hotelForm, whySelected: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Kimler İçin Uygun? (Satır satır yazın)</label>
                  <textarea rows="2" value={hotelForm.suitableFor} onChange={(e) => setHotelForm({...hotelForm, suitableFor: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Kimler İçin Uygun Değil? (Satır satır yazın)</label>
                  <textarea rows="2" value={hotelForm.notSuitableFor} onChange={(e) => setHotelForm({...hotelForm, notSuitableFor: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Resmi Web Sitesi</label>
                    <input type="text" value={hotelForm.website} onChange={(e) => setHotelForm({...hotelForm, website: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Acil Vet Bilgisi</label>
                    <input type="text" value={hotelForm.veterinarySupport} onChange={(e) => setHotelForm({...hotelForm, veterinarySupport: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>

                <div className="space-y-4 pt-3 border-t border-dashed border-gray-200">
                  <h5 className="text-3xs font-bold text-brand-navy uppercase tracking-wider">Oda Rezervasyon Acenta Linkleri</h5>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-4xs font-bold text-gray-500 block mb-1">Enuygun Rezervasyon Linki</label>
                      <input type="text" placeholder="https://www.enuygun.com/..." value={hotelForm.bookingLinks?.enuygun || ''} onChange={(e) => setHotelForm({...hotelForm, bookingLinks: { ...hotelForm.bookingLinks, enuygun: e.target.value }})} className="w-full border rounded-lg p-2 outline-none text-xs" />
                    </div>
                    <div>
                      <label className="text-4xs font-bold text-gray-500 block mb-1">Otelz Rezervasyon Linki</label>
                      <input type="text" placeholder="https://www.otelz.com/..." value={hotelForm.bookingLinks?.otelz || ''} onChange={(e) => setHotelForm({...hotelForm, bookingLinks: { ...hotelForm.bookingLinks, otelz: e.target.value }})} className="w-full border rounded-lg p-2 outline-none text-xs" />
                    </div>
                    <div>
                      <label className="text-4xs font-bold text-gray-500 block mb-1">Booking.com Rezervasyon Linki</label>
                      <input type="text" placeholder="https://www.booking.com/..." value={hotelForm.bookingLinks?.booking || ''} onChange={(e) => setHotelForm({...hotelForm, bookingLinks: { ...hotelForm.bookingLinks, booking: e.target.value }})} className="w-full border rounded-lg p-2 outline-none text-xs" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="md:col-span-2 pt-6 border-t border-brand-beige flex justify-end gap-3">
                <button type="button" onClick={() => { setIsAdding(false); setEditingItem(null); }} className="border px-6 py-2.5 rounded-xl font-semibold text-gray-700">Vazgeç</button>
                <button type="submit" className="bg-brand-green hover:bg-brand-green-hover text-white px-8 py-2.5 rounded-xl font-bold">Kaydet</button>
              </div>
            </form>
          </div>
          )}

          {/* Form 2: Boarding Form */}
          {activeSubTab === 'boardings' && (
            <form onSubmit={handleSaveBoarding} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <h4 className="font-title font-bold text-brand-earth border-b pb-1">Temel Bakım Merkezi Bilgileri</h4>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Merkez Adı</label>
                  <input type="text" required value={boardingForm.name} onChange={(e) => setBoardingForm({...boardingForm, name: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Kategori</label>
                    <select value={boardingForm.category} onChange={(e) => setBoardingForm({...boardingForm, category: e.target.value})} className="w-full border rounded-lg p-2.5 bg-white outline-none">
                      <option value="Kedi otelleri">Kedi Oteli</option>
                      <option value="Köpek otelleri">Köpek Oteli</option>
                      <option value="Kedi ve köpek kabul eden karma tesisler">Karma Tesis</option>
                      <option value="Ev tipi bakım merkezleri">Ev Tipi Bakım</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Gecelik Fiyat</label>
                    <input type="text" required value={boardingForm.price} onChange={(e) => setBoardingForm({...boardingForm, price: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Güven Puanı</label>
                    <input type="number" step="0.1" max="10" min="1" value={boardingForm.baseTrustScore} onChange={(e) => setBoardingForm({...boardingForm, baseTrustScore: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Şehir</label>
                    <input type="text" required value={boardingForm.city} onChange={(e) => setBoardingForm({...boardingForm, city: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">İlçe</label>
                    <input type="text" required value={boardingForm.district} onChange={(e) => setBoardingForm({...boardingForm, district: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Görsel URL</label>
                  <input type="text" value={boardingForm.imageUrl} onChange={(e) => setBoardingForm({...boardingForm, imageUrl: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Galeri Görselleri (Satır satır URL)</label>
                  <textarea rows="3" placeholder="https://..." value={boardingForm.galleryImages} onChange={(e) => setBoardingForm({...boardingForm, galleryImages: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
                
                {/* quizTags Checkboxes for Boarding */}
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Sihirbaz Etiketleri (quizTags)</label>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                    {[
                      { tag: 'birak', label: 'Bakım Oteli' },
                      { tag: 'kedi', label: 'Kedi Kabulü' },
                      { tag: 'kopek', label: 'Köpek Kabulü' },
                      { tag: 'kafessiz', label: 'Kafessiz Alan' },
                      { tag: 'cam-oda', label: 'Şeffaf Cam Oda' },
                      { tag: '724-gozetim', label: '7/24 Personel' },
                      { tag: 'canli-yayin', label: 'Canlı Kamera' },
                      { tag: 'vet-gozetim', label: 'Veteriner Desteği' },
                      { tag: 'ilac-takip', label: 'İlaç Takibi' },
                      { tag: 'transfer-var', label: 'Transfer/Pet Taksi' },
                      { tag: 'bahceli-oyun', label: 'Açık Oyun Bahçesi' },
                      { tag: 'ev-ortami', label: 'Ev Ortamı' }
                    ].map(item => (
                      <label key={item.tag} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={boardingForm.quizTags ? boardingForm.quizTags.includes(item.tag) : false}
                          onChange={(e) => {
                            const tags = boardingForm.quizTags || [];
                            if (e.target.checked) {
                              setBoardingForm({ ...boardingForm, quizTags: [...tags, item.tag] });
                            } else {
                              setBoardingForm({ ...boardingForm, quizTags: tags.filter(t => t !== item.tag) });
                            }
                          }}
                          className="rounded text-brand-earth-dark focus:ring-brand-earth"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-title font-bold text-brand-earth border-b pb-1">Bakım Politikaları ve İrtibat</h4>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Konaklama Modeli</label>
                  <input type="text" value={boardingForm.boardingModel} onChange={(e) => setBoardingForm({...boardingForm, boardingModel: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Günlük Aktivite Programı</label>
                  <textarea rows="3" value={boardingForm.dailyProgram} onChange={(e) => setBoardingForm({...boardingForm, dailyProgram: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Resmi Web Sitesi / Instagram</label>
                    <input type="text" value={boardingForm.website} onChange={(e) => setBoardingForm({...boardingForm, website: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Anlaşmalı Veteriner</label>
                    <input type="text" value={boardingForm.accreditedVet} onChange={(e) => setBoardingForm({...boardingForm, accreditedVet: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>

                <div className="space-y-4 pt-3 border-t border-dashed border-gray-200">
                  <h5 className="text-3xs font-bold text-brand-navy uppercase tracking-wider">Rezervasyon ve İrtibat Linkleri</h5>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-4xs font-bold text-gray-500 block mb-1">Enuygun İletişim Linki</label>
                      <input type="text" placeholder="https://www.enuygun.com/..." value={boardingForm.bookingLinks?.enuygun || ''} onChange={(e) => setBoardingForm({...boardingForm, bookingLinks: { ...boardingForm.bookingLinks, enuygun: e.target.value }})} className="w-full border rounded-lg p-2 outline-none text-xs" />
                    </div>
                    <div>
                      <label className="text-4xs font-bold text-gray-500 block mb-1">Otelz İletişim Linki</label>
                      <input type="text" placeholder="https://www.otelz.com/..." value={boardingForm.bookingLinks?.otelz || ''} onChange={(e) => setBoardingForm({...boardingForm, bookingLinks: { ...boardingForm.bookingLinks, otelz: e.target.value }})} className="w-full border rounded-lg p-2 outline-none text-xs" />
                    </div>
                    <div>
                      <label className="text-4xs font-bold text-gray-500 block mb-1">Booking.com İletişim Linki</label>
                      <input type="text" placeholder="https://www.booking.com/..." value={boardingForm.bookingLinks?.booking || ''} onChange={(e) => setBoardingForm({...boardingForm, bookingLinks: { ...boardingForm.bookingLinks, booking: e.target.value }})} className="w-full border rounded-lg p-2 outline-none text-xs" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Açıklama</label>
                  <textarea rows="3" value={boardingForm.description} onChange={(e) => setBoardingForm({...boardingForm, description: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
              </div>

              <div className="md:col-span-2 pt-6 border-t border-brand-beige flex justify-end gap-3">
                <button type="button" onClick={() => { setIsAdding(false); setEditingItem(null); }} className="border px-6 py-2.5 rounded-xl font-semibold text-gray-700">Vazgeç</button>
                <button type="submit" className="bg-brand-earth hover:bg-brand-earth-hover text-white px-8 py-2.5 rounded-xl font-bold">Kaydet</button>
              </div>
            </form>
          )}

          {/* Form 3: Guide Form */}
          {activeSubTab === 'guides' && (
            <form onSubmit={handleSaveGuide} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <h4 className="font-title font-bold text-sky-600 border-b pb-1">Makale Bilgileri</h4>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Makale Başlığı</label>
                  <input type="text" required value={guideForm.title} onChange={(e) => setGuideForm({...guideForm, title: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Kategori</label>
                  <select value={guideForm.category} onChange={(e) => setGuideForm({...guideForm, category: e.target.value})} className="w-full border rounded-lg p-2.5 bg-white outline-none">
                    <option value="Köpekle Seyahat">Köpekle Seyahat</option>
                    <option value="Kediyle Seyahat">Kediyle Seyahat</option>
                    <option value="Destinasyon Rehberleri">Destinasyon Rehberleri</option>
                    <option value="Ulaşım Rehberleri">Ulaşım Rehberleri</option>
                    <option value="Kedi ve Köpek Oteli Rehberleri">Kedi/Köpek Oteli Rehberi</option>
                  </select>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">VEO Hızlı Özet (Cevap Kutusu için)</label>
                  <textarea rows="3" value={guideForm.shortAnswer} onChange={(e) => setGuideForm({...guideForm, shortAnswer: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Kısa Açıklama (Summary)</label>
                  <textarea rows="2" value={guideForm.summary} onChange={(e) => setGuideForm({...guideForm, summary: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-title font-bold text-sky-600 border-b pb-1">SEO & Yazar Parametreleri</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">SEO Title</label>
                    <input type="text" value={guideForm.seoTitle} onChange={(e) => setGuideForm({...guideForm, seoTitle: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">SEO Description</label>
                    <input type="text" value={guideForm.seoDesc} onChange={(e) => setGuideForm({...guideForm, seoDesc: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Yazar Adı</label>
                    <input type="text" value={guideForm.authorName} onChange={(e) => setGuideForm({...guideForm, authorName: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Yazar Rolü</label>
                    <input type="text" value={guideForm.authorRole} onChange={(e) => setGuideForm({...guideForm, authorRole: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 items-center">
                  <label className="flex items-center gap-2 cursor-pointer pt-4">
                    <input type="checkbox" checked={guideForm.vetChecked} onChange={(e) => setGuideForm({...guideForm, vetChecked: e.target.checked})} className="rounded text-brand-green" />
                    <span>🩺 Veteriner Kontrollü</span>
                  </label>
                  <div>
                    <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Veteriner Adı</label>
                    <input type="text" disabled={!guideForm.vetChecked} value={guideForm.vetName} onChange={(e) => setGuideForm({...guideForm, vetName: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none disabled:bg-gray-100" />
                  </div>
                </div>
                <div>
                  <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Kontrol Listesi (Checklist - Satır satır yazın)</label>
                  <textarea rows="3" value={guideForm.checklist} onChange={(e) => setGuideForm({...guideForm, checklist: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none"></textarea>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-3xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Makale İçeriği (HTML formatında)</label>
                <textarea rows="8" value={guideForm.content} onChange={(e) => setGuideForm({...guideForm, content: e.target.value})} className="w-full border rounded-lg p-2.5 outline-none font-mono text-xs"></textarea>
              </div>

              <div className="md:col-span-2 pt-6 border-t border-brand-beige flex justify-end gap-3">
                <button type="button" onClick={() => { setIsAdding(false); setEditingItem(null); }} className="border px-6 py-2.5 rounded-xl font-semibold text-gray-700">Vazgeç</button>
                <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-2.5 rounded-xl font-bold">Kaydet</button>
              </div>
            </form>
          )}
        </div>
      ) : (
        /* LISTING CRUD TABLES FOR EACH TAB */
        <div className="bg-white border border-brand-beige rounded-3xl p-6 shadow-sm overflow-x-auto">
          {activeSubTab === 'hotels' && (
            <div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-title font-bold text-lg text-gray-950">Tüm Oteller</h3>
                  <p className="text-xs text-gray-500 mt-1">Toplam {hotels.length} tesis · {verifiedHotelsCount} doğrulanmış · {unverifiedHotelsCount} doğrulanmamış</p>
                </div>
                <button onClick={() => { setIsAdding(true); setEditingItem(null); setHotelForm({ name: '', city: '', district: '', type: 'Otel', suitability: 1, weightLimit: 0, verified: false, extraFee: 'no', allowedPets: ['dog'], features: [], quizTags: [], imageUrl: '', galleryImages: '', description: '', whySelected: '', suitableFor: '', notSuitableFor: '', disallowedPets: '', breedRestrictions: '', maxPetsPerRoom: 1, depositInfo: 'Alınmıyor', requiredDocs: 'Aşı karnesi', canLeaveInRoomAlone: true, rules: { pool: '', beach: '', restaurant: '' }, bookingLinks: { enuygun: '', otelz: '', booking: '' }, veterinarySupport: '', phone: '', email: '', website: '', editorNote: '', infoSource: '', faq: [{ q: '', a: '' }], lastVerified: new Date().toISOString().split('T')[0], baseTrustScore: 9.5 }); }} className="bg-brand-green text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1 self-start lg:self-auto">
                  <PlusIcon className="w-4 h-4" /> Yeni Otel Ekle
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_220px] gap-3 mb-5">
                <input type="search" value={hotelSearch} onChange={(e) => setHotelSearch(e.target.value)} className="form-input" placeholder="Otel adı, şehir veya ilçe ara" />
                <select value={hotelVerificationFilter} onChange={(e) => setHotelVerificationFilter(e.target.value)} className="form-input bg-white">
                  <option value="all">Tüm doğrulama durumları</option>
                  <option value="unverified">Doğrulanmamış</option>
                  <option value="verified">Doğrulanmış</option>
                </select>
              </div>

              <p className="text-xs text-gray-500 mb-3">{filteredHotels.length} kayıt bulundu · Sayfa {hotelPage}/{hotelPageCount}</p>
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-brand-beige text-gray-500 font-medium text-xs">
                    <th className="py-3 px-2">Otel Adı</th>
                    <th className="py-3 px-2">Konum</th>
                    <th className="py-3 px-2">Tür</th>
                    <th className="py-3 px-2">Dost Seviyesi</th>
                    <th className="py-3 px-2">Doğrulama</th>
                    <th className="py-3 px-2">Güven Puanı</th>
                    <th className="py-3 px-2 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-beige/55">
                  {visibleHotels.map(h => (
                    <tr key={h.id} className="hover:bg-brand-cream/30">
                      <td className="py-3.5 px-2 font-semibold text-gray-900">{h.name}</td>
                      <td className="py-3.5 px-2 text-xs text-gray-600">{h.city}, {h.district}</td>
                      <td className="py-3.5 px-2 text-xs">{h.type}</td>
                      <td className="py-3.5 px-2 text-xs font-bold text-brand-green">Seviye {h.suitability}</td>
                      <td className="py-3.5 px-2 text-xs">
                        <span className={`inline-flex px-2 py-1 rounded font-bold ${h.verified === true ? 'bg-brand-green-light text-brand-green' : 'bg-amber-100 text-amber-800'}`}>
                          {h.verified === true ? 'Doğrulanmış' : 'Doğrulanmamış'}
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-xs font-bold text-brand-earth-dark">{h.baseTrustScore || 9.5}/10</td>
                      <td className="py-3.5 px-2 text-right space-x-2 whitespace-nowrap">
                        <button onClick={() => handleEditHotel(h)} className="text-brand-green hover:underline text-xs font-bold">Düzenle</button>
                        <button onClick={() => handleDeleteItem('hotel', h.id)} className="text-red-500 hover:underline text-xs font-bold">Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredHotels.length === 0 && <p className="text-center py-10 text-sm text-gray-500">Aramanızla eşleşen otel bulunamadı.</p>}
              {hotelPageCount > 1 && (
                <div className="flex items-center justify-between gap-3 border-t border-brand-beige mt-4 pt-4">
                  <button type="button" disabled={hotelPage === 1} onClick={() => setHotelPage(page => Math.max(1, page - 1))} className="border border-gray-300 px-4 py-2 rounded-lg text-xs font-bold disabled:opacity-40">Önceki</button>
                  <span className="text-xs text-gray-500">{(hotelPage - 1) * hotelsPerPage + 1}-{Math.min(hotelPage * hotelsPerPage, filteredHotels.length)} / {filteredHotels.length}</span>
                  <button type="button" disabled={hotelPage === hotelPageCount} onClick={() => setHotelPage(page => Math.min(hotelPageCount, page + 1))} className="border border-gray-300 px-4 py-2 rounded-lg text-xs font-bold disabled:opacity-40">Sonraki</button>
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'boardings' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-title font-bold text-lg text-gray-950">Kedi ve Köpek Otelleri</h3>
                <button onClick={() => { setIsAdding(true); setEditingItem(null); setBoardingForm({ name: '', category: 'Kedi otelleri', city: '', district: '', imageUrl: '', galleryImages: '', allowedPets: ['cat'], features: [], quizTags: [], price: 'Günlük 400 TL', description: '', boardingModel: 'Bireysel Odalı', dailyProgram: '', accreditedVet: '', phone: '', email: '', website: '', bookingLinks: { enuygun: '', otelz: '', booking: '' }, cameraSupport: true, requiredDocs: 'Karma aşı', neuteringRequired: 'Zorunlu', aggressionPolicy: 'Uysal hayvan kabulü', infoSource: 'İşletme beyanı', lastVerified: new Date().toISOString().split('T')[0], baseTrustScore: 9.5 }); }} className="bg-brand-earth text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1">
                  <PlusIcon className="w-4 h-4" /> Yeni Merkez Ekle
                </button>
              </div>
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-brand-beige text-gray-500 font-medium text-xs">
                    <th className="py-3 px-2">Merkez Adı</th>
                    <th className="py-3 px-2">Konum</th>
                    <th className="py-3 px-2">Kategori</th>
                    <th className="py-3 px-2">Fiyat</th>
                    <th className="py-3 px-2">Güven Puanı</th>
                    <th className="py-3 px-2 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-beige/55">
                  {boardings.map(b => (
                    <tr key={b.id} className="hover:bg-brand-cream/30">
                      <td className="py-3.5 px-2 font-semibold text-gray-900">{b.name}</td>
                      <td className="py-3.5 px-2 text-xs text-gray-600">{b.city}, {b.district}</td>
                      <td className="py-3.5 px-2 text-xs text-brand-earth-dark">{b.category}</td>
                      <td className="py-3.5 px-2 text-xs font-bold">{b.price}</td>
                      <td className="py-3.5 px-2 text-xs font-bold text-brand-earth-dark">{b.baseTrustScore || 9.5}/10</td>
                      <td className="py-3.5 px-2 text-right space-x-2 whitespace-nowrap">
                        <button onClick={() => handleEditBoarding(b)} className="text-brand-earth-dark hover:underline text-xs font-bold">Düzenle</button>
                        <button onClick={() => handleDeleteItem('boarding', b.id)} className="text-red-500 hover:underline text-xs font-bold">Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSubTab === 'guides' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-title font-bold text-lg text-gray-950">Seyahat Rehberleri</h3>
                <button onClick={() => { setIsAdding(true); setEditingItem(null); setGuideForm({ title: '', category: 'Köpekle Seyahat', shortAnswer: '', summary: '', content: '', checklist: '', faq: [{ q: '', a: '' }], authorName: '', authorRole: '', authorImage: '', vetChecked: false, vetName: '', seoTitle: '', seoDesc: '', publishedAt: new Date().toISOString().split('T')[0], updatedAt: new Date().toISOString().split('T')[0] }); }} className="bg-sky-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1">
                  <PlusIcon className="w-4 h-4" /> Yeni Rehber Yaz
                </button>
              </div>
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-brand-beige text-gray-500 font-medium text-xs">
                    <th className="py-3 px-2">Başlık</th>
                    <th className="py-3 px-2">Kategori</th>
                    <th className="py-3 px-2">Yazar</th>
                    <th className="py-3 px-2">Durum</th>
                    <th className="py-3 px-2 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-beige/55">
                  {guides.map(g => (
                    <tr key={g.id} className="hover:bg-brand-cream/30">
                      <td className="py-3.5 px-2 font-semibold text-gray-900 line-clamp-1 max-w-[300px]">{g.title}</td>
                      <td className="py-3.5 px-2 text-xs text-sky-600 font-semibold">{g.category}</td>
                      <td className="py-3.5 px-2 text-xs">{g.author.name}</td>
                      <td className="py-3.5 px-2 text-xs">
                        {g.vetChecked ? (
                          <span className="text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded text-3xs font-bold">Vet Onaylı</span>
                        ) : (
                          <span className="text-gray-400 text-3xs font-bold">Standart</span>
                        )}
                      </td>
                      <td className="py-3.5 px-2 text-right space-x-2 whitespace-nowrap">
                        <button onClick={() => handleEditGuide(g)} className="text-sky-600 hover:underline text-xs font-bold">Düzenle</button>
                        <button onClick={() => handleDeleteItem('guide', g.id)} className="text-red-500 hover:underline text-xs font-bold">Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSubTab === 'experiences' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-title font-bold text-lg text-gray-950 mb-4">Pet Dostu Deneyim Ekle</h3>
                <form onSubmit={handleSaveExperience} className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm bg-brand-cream/40 border border-brand-beige rounded-2xl p-4">
                  <input required placeholder="Mekan / rota adı" value={experienceForm.name} onChange={(e) => setExperienceForm({...experienceForm, name: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input required placeholder="Kategori" value={experienceForm.category} onChange={(e) => setExperienceForm({...experienceForm, category: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input required placeholder="Şehir" value={experienceForm.city} onChange={(e) => setExperienceForm({...experienceForm, city: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input required placeholder="İlçe" value={experienceForm.district} onChange={(e) => setExperienceForm({...experienceForm, district: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input required placeholder="Görsel URL" value={experienceForm.imageUrl} onChange={(e) => setExperienceForm({...experienceForm, imageUrl: e.target.value})} className="border rounded-lg p-2.5 outline-none md:col-span-2" />
                  <input placeholder="Kabul edilen türler: dog,cat" value={experienceForm.allowedPets} onChange={(e) => setExperienceForm({...experienceForm, allowedPets: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input placeholder="Harita URL" value={experienceForm.mapUrl} onChange={(e) => setExperienceForm({...experienceForm, mapUrl: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input placeholder="En iyi zaman" value={experienceForm.bestTime} onChange={(e) => setExperienceForm({...experienceForm, bestTime: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <textarea required rows="2" placeholder="Pet politikası" value={experienceForm.petPolicy} onChange={(e) => setExperienceForm({...experienceForm, petPolicy: e.target.value})} className="border rounded-lg p-2.5 outline-none md:col-span-3" />
                  <textarea required rows="2" placeholder="Açıklama" value={experienceForm.description} onChange={(e) => setExperienceForm({...experienceForm, description: e.target.value})} className="border rounded-lg p-2.5 outline-none md:col-span-2" />
                  <textarea rows="2" placeholder="Özellikler - satır satır" value={experienceForm.features} onChange={(e) => setExperienceForm({...experienceForm, features: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <button type="submit" className="bg-brand-navy text-white px-5 py-2.5 rounded-xl font-bold md:col-span-3">Deneyimi Kaydet</button>
                </form>
              </div>

              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-brand-beige text-gray-500 font-medium text-xs">
                    <th className="py-3 px-2">Ad</th>
                    <th className="py-3 px-2">Kategori</th>
                    <th className="py-3 px-2">Konum</th>
                    <th className="py-3 px-2">Puan</th>
                    <th className="py-3 px-2 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-beige/55">
                  {experiences.map(item => (
                    <tr key={item.id} className="hover:bg-brand-cream/30">
                      <td className="py-3.5 px-2 font-semibold text-gray-900">{item.name}</td>
                      <td className="py-3.5 px-2 text-xs">{item.category}</td>
                      <td className="py-3.5 px-2 text-xs text-gray-600">{item.city}, {item.district}</td>
                      <td className="py-3.5 px-2 text-xs font-bold text-brand-green">{item.baseTrustScore}/10</td>
                      <td className="py-3.5 px-2 text-right">
                        <button onClick={() => setExperiences(experiences.filter(e => e.id !== item.id))} className="text-red-500 hover:underline text-xs font-bold">Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSubTab === 'ads' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-title font-bold text-lg text-gray-950 mb-4">Sponsorlu Reklam Alanı Ekle</h3>
                <form onSubmit={handleSaveAd} className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm bg-brand-cream/40 border border-brand-beige rounded-2xl p-4">
                  <input required placeholder="Reklam başlığı" value={adForm.title} onChange={(e) => setAdForm({...adForm, title: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input required placeholder="Sponsor" value={adForm.sponsor} onChange={(e) => setAdForm({...adForm, sponsor: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <select value={adForm.placement} onChange={(e) => setAdForm({...adForm, placement: e.target.value})} className="border rounded-lg p-2.5 outline-none bg-white">
                    <option value="home-hero">Ana sayfa sponsor alanı</option>
                    <option value="listing-sidebar">Listeleme yan alan</option>
                    <option value="detail-banner">Detay sayfası banner</option>
                  </select>
                  <input required placeholder="Hedef URL" value={adForm.targetUrl} onChange={(e) => setAdForm({...adForm, targetUrl: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input placeholder="Görsel URL" value={adForm.imageUrl} onChange={(e) => setAdForm({...adForm, imageUrl: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input placeholder="Şehir" value={adForm.city} onChange={(e) => setAdForm({...adForm, city: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input type="date" value={adForm.startsAt} onChange={(e) => setAdForm({...adForm, startsAt: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <input type="date" value={adForm.endsAt} onChange={(e) => setAdForm({...adForm, endsAt: e.target.value})} className="border rounded-lg p-2.5 outline-none" />
                  <select value={adForm.status} onChange={(e) => setAdForm({...adForm, status: e.target.value})} className="border rounded-lg p-2.5 outline-none bg-white">
                    <option value="active">Aktif</option>
                    <option value="paused">Duraklatıldı</option>
                    <option value="expired">Süresi doldu</option>
                  </select>
                  <button type="submit" className="bg-brand-yellow text-brand-navy px-5 py-2.5 rounded-xl font-bold md:col-span-3 border border-brand-navy/20">Reklamı Kaydet</button>
                </form>
              </div>

              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-brand-beige text-gray-500 font-medium text-xs">
                    <th className="py-3 px-2">Başlık</th>
                    <th className="py-3 px-2">Sponsor</th>
                    <th className="py-3 px-2">Yerleşim</th>
                    <th className="py-3 px-2">Durum</th>
                    <th className="py-3 px-2">Performans</th>
                    <th className="py-3 px-2 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-beige/55">
                  {ads.map(ad => (
                    <tr key={ad.id} className="hover:bg-brand-cream/30">
                      <td className="py-3.5 px-2 font-semibold text-gray-900">{ad.title}</td>
                      <td className="py-3.5 px-2 text-xs">{ad.sponsor}</td>
                      <td className="py-3.5 px-2 text-xs">{ad.placement}</td>
                      <td className="py-3.5 px-2 text-xs font-bold text-brand-green">{ad.status}</td>
                      <td className="py-3.5 px-2 text-xs">{ad.impressions} gösterim / {ad.clicks} tık</td>
                      <td className="py-3.5 px-2 text-right">
                        <button onClick={() => setAds(ads.filter(item => item.id !== ad.id))} className="text-red-500 hover:underline text-xs font-bold">Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSubTab === 'ad-applications' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-title font-bold text-lg text-gray-950">Reklam ve Sponsorluk Başvuruları</h3>
                  <p className="text-xs text-gray-500 mt-1">Reklam formundan gönderilen işletme ve iletişim bilgileri.</p>
                </div>
                <button type="button" onClick={loadAdApplications} className="border border-brand-navy text-brand-navy px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-navy-light">
                  Listeyi yenile
                </button>
              </div>

              {applicationsError && <p className="mb-4 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{applicationsError}</p>}
              {applicationsLoading ? (
                <p className="text-center py-10 text-sm text-gray-500">Başvurular yükleniyor...</p>
              ) : adApplications.length === 0 ? (
                <p className="text-center py-10 text-sm text-gray-500 italic">Henüz reklam başvurusu bulunmuyor.</p>
              ) : (
                <div className="space-y-4">
                  {adApplications.map(application => (
                    <article key={application.id} className="border border-brand-beige rounded-lg bg-white p-5 shadow-2xs">
                      <div>
                        <h4 className="font-title font-bold text-base text-brand-navy">{application.businessName}</h4>
                        <p className="text-xs text-gray-500 mt-1">{application.businessType} · {application.city} · {new Date(application.createdAt).toLocaleDateString('tr-TR')}</p>

                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 mt-4 text-xs">
                          <div><dt className="text-gray-500">Yetkili</dt><dd className="font-semibold text-gray-800">{application.contactName}</dd></div>
                          <div><dt className="text-gray-500">E-posta</dt><dd><a className="font-semibold text-brand-navy hover:underline break-all" href={`mailto:${application.email}`}>{application.email}</a></dd></div>
                          <div><dt className="text-gray-500">Telefon</dt><dd><a className="font-semibold text-brand-navy hover:underline" href={`tel:${application.phone}`}>{application.phone}</a></dd></div>
                        </dl>

                        {application.website && <a href={application.website} target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-brand-green hover:underline mt-3 break-all">{application.website}</a>}
                        {application.message && <p className="text-sm text-gray-700 bg-brand-cream/45 border border-brand-beige rounded-lg p-3 mt-4 leading-relaxed">{application.message}</p>}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'corrections' && (
            <div>
              <h3 className="font-title font-bold text-lg text-gray-950 mb-6">Kullanıcı Bilgi Düzeltme İstekleri</h3>
              {corrections.length === 0 ? (
                <p className="text-center py-6 text-sm text-gray-500 italic">Şu anda incelenecek düzeltme bildirim bulunmamaktadır.</p>
              ) : (
                <div className="space-y-4">
                  {corrections.map(corr => (
                    <div key={corr.id} className="border border-brand-beige rounded-2xl p-5 bg-brand-cream/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-gray-900">{corr.hotelName}</span>
                          <span className={`text-3xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            corr.status === 'pending' ? 'bg-amber-100 text-amber-700 animate-pulse' : corr.status === 'approved' ? 'bg-brand-green-light text-brand-green' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {corr.status === 'pending' ? 'Bekliyor' : corr.status === 'approved' ? 'Uygulandı' : 'Reddedildi'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Tarih: {corr.date}</p>
                        <p className="text-sm text-gray-700 bg-white p-3 rounded-lg border border-brand-beige leading-relaxed italic">"{corr.text}"</p>
                      </div>

                      {corr.status === 'pending' && (
                        <div className="flex gap-2 whitespace-nowrap">
                          <button
                            onClick={() => {
                              handleCorrectionAction(corr.id, 'approved');
                              alert('Bildirim onaylandı olarak işaretlendi. İlgili tesis bilgilerini form üzerinden güncelleyebilirsiniz.');
                            }}
                            className="bg-brand-green hover:bg-brand-green-hover text-white text-xs px-3.5 py-2 rounded-lg font-bold flex items-center gap-1"
                          >
                            <CheckIcon className="w-3.5 h-3.5 text-white" /> Onayla
                          </button>
                          <button
                            onClick={() => handleCorrectionAction(corr.id, 'rejected')}
                            className="border border-gray-300 text-gray-600 text-xs px-3 py-2 rounded-lg font-bold hover:bg-gray-50"
                          >
                            Yoksay
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'complaints-inbox' && (
            <div>
              <h3 className="font-title font-bold text-lg text-gray-950 mb-6">Kullanıcı Şikayet & İhlal Bildirimleri</h3>
              <p className="text-xs text-gray-500 mb-6">
                Buradaki şikayetleri onayladığınızda, şikayet ilgili tesisin detay sayfasındaki "Güven & Şikayetler" sekmesinde yayınlanır ve **güven puanını dinamik olarak 0.5 puan düşürür**.
              </p>

              {complaints.length === 0 ? (
                <p className="text-center py-6 text-sm text-gray-500 italic">Şu anda gelen şikayet kaydı bulunmamaktadır.</p>
              ) : (
                <div className="space-y-4">
                  {complaints.map(comp => (
                    <div key={comp.id} className="border border-brand-beige rounded-2xl p-5 bg-red-50/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left shadow-2xs">
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-gray-900">{comp.targetName}</span>
                          <span className={`text-3xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            comp.status === 'pending' ? 'bg-amber-100 text-amber-700 animate-pulse' : comp.status === 'approved' ? 'bg-red-650 text-white' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {comp.status === 'pending' ? 'İncelemede' : comp.status === 'approved' ? 'Onaylandı (Ceza Puanı Aktif)' : 'Reddedildi'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Bildiren: <strong>{comp.author}</strong> | Tarih: {comp.date}</p>
                        <p className="text-sm text-gray-700 bg-white p-3 rounded-lg border border-brand-beige leading-relaxed italic">"{comp.text}"</p>
                      </div>

                      {comp.status === 'pending' && (
                        <div className="flex gap-2 whitespace-nowrap">
                          <button
                            onClick={() => {
                              handleComplaintAction(comp.id, 'approved');
                              alert('Şikayet onaylandı! İlgili tesisin güven puanı 0.5 puan düşürüldü ve detay sayfasında yayına alındı.');
                            }}
                            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs px-3.5 py-2 rounded-lg font-bold flex items-center gap-1"
                          >
                            <CheckIcon className="w-3.5 h-3.5 text-white" /> Onayla & Yayınla
                          </button>
                          <button
                            onClick={() => handleComplaintAction(comp.id, 'rejected')}
                            className="border border-gray-300 text-gray-600 text-xs px-3 py-2 rounded-lg font-bold hover:bg-gray-50"
                          >
                            Yoksay / Reddet
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
