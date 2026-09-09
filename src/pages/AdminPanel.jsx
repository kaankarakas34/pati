import React, { useState } from 'react';
import { EditIcon, PlusIcon, CheckIcon } from '../components/PetIcons';
import CatalogPagination from '../components/CatalogPagination';
import { useAdminCollection } from '../lib/useAdminCollection';

export default function AdminPanel() {
  const [activeSubTab, setActiveSubTab] = useState('hotels');
  
  // Edit states
  const [editingItem, setEditingItem] = useState(null); // { type: 'hotel'|'boarding'|'guide', id }
  const [isAdding, setIsAdding] = useState(false);
  const [hotelSearch, setHotelSearch] = useState('');
  const [hotelVerificationFilter, setHotelVerificationFilter] = useState('all');
  const [feedbackStatus, setFeedbackStatus] = useState('pending');

  // Authentication & Role states
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('admin_authenticated') === 'true' && Boolean(sessionStorage.getItem('admin_token'))
  );
  const [userRole, setUserRole] = useState(
    () => sessionStorage.getItem('admin_role') || 'admin'
  );
  const [ambassadorName, setAmbassadorName] = useState(
    () => sessionStorage.getItem('admin_ambassador_name') || 'Pati Elçisi'
  );
  const [loginTab, setLoginTab] = useState('admin'); // 'admin' or 'ambassador'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [ambassadorApps, setAmbassadorApps] = useState([]);
  const [appsLoading, setAppsLoading] = useState(false);

  // Business Submissions ("İşletmeni Ekle") State
  const [bizSubmissions, setBizSubmissions] = useState([]);
  const [bizLoading, setBizLoading] = useState(false);

  // Dog Walker Applications ("Köpek Gezdiricileri") State
  const [dogWalkerApps, setDogWalkerApps] = useState([]);
  const [dogWalkerLoading, setDogWalkerLoading] = useState(false);
  const [dogWalkerFilter, setDogWalkerFilter] = useState('all'); // all, pending, approved, rejected

  // Ambassador Management State (Only Admins Can Add/Delete)
  const [ambassadorsList, setAmbassadorsList] = useState([]);
  const [ambassadorsLoading, setAmbassadorsLoading] = useState(false);
  const [isAddingAmbassador, setIsAddingAmbassador] = useState(false);
  const [ambassadorFormState, setAmbassadorFormState] = useState({
    fullName: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    city: '',
    notes: ''
  });

  const resource = activeSubTab === 'complaints-inbox' ? 'complaints' : activeSubTab;
  const isFeedback = ['reviews', 'corrections', 'complaints'].includes(resource);
  const collection = useAdminCollection(resource, resource === 'hotels' ? {
    q: hotelSearch.trim(),
    verified: hotelVerificationFilter === 'all' ? undefined : String(hotelVerificationFilter === 'verified')
  } : isFeedback ? { status: feedbackStatus } : {}, isAuthenticated);
  const hotels = resource === 'hotels' ? collection.items : [];
  const boardings = resource === 'boardings' ? collection.items : [];
  const guides = resource === 'guides' ? collection.items : [];
  const experiences = resource === 'experiences' ? collection.items : [];
  const ads = resource === 'ads' ? collection.items : [];
  const adApplications = resource === 'ad-applications' ? collection.items : [];
  const applicationsLoading = collection.loading;
  const applicationsError = collection.error;
  const loadAdApplications = collection.reload;

  const loadBizSubmissions = async () => {
    setBizLoading(true);
    try {
      const res = await fetch('/api/business-submissions', {
        headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
      });
      if (res.ok) {
        const data = await res.json();
        setBizSubmissions(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.warn('Biz submissions fetch failed', e);
    } finally {
      setBizLoading(false);
    }
  };

  const handleDeleteBizSubmission = async (id) => {
    if (!window.confirm('Bu işletme başvurusunu silmek istediğinize emin misiniz?')) return;
    try {
      const res = await fetch(`/api/business-submissions/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
      });
      if (res.ok) {
        setBizSubmissions(prev => prev.filter(b => b.id !== id));
      }
    } catch (err) {
      console.warn('Biz delete failed', err);
    }
  };

  const handleApproveBizSubmission = async (item) => {
    try {
      await fetch(`/api/business-submissions/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': sessionStorage.getItem('admin_token') || ''
        },
        body: JSON.stringify({ status: 'approved' })
      });
      item.status = 'approved';
      setBizSubmissions([...bizSubmissions]);
      alert(`"${item.businessName}" işletme başvurusu onaylandı!`);
    } catch (err) {
      alert('Onaylama işlemi başarısız oldu.');
    }
  };

  const loadDogWalkerApps = async () => {
    setDogWalkerLoading(true);
    try {
      const res = await fetch('/api/admin/dog-walker-applications', {
        headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
      });
      if (res.ok) {
        const data = await res.json();
        setDogWalkerApps(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.warn('Dog walker apps fetch failed', e);
    } finally {
      setDogWalkerLoading(false);
    }
  };

  const handleUpdateDogWalkerStatus = async (id, status, verified = false) => {
    try {
      const res = await fetch(`/api/admin/dog-walker-applications/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': sessionStorage.getItem('admin_token') || ''
        },
        body: JSON.stringify({ status, verified })
      });
      if (res.ok) {
        setDogWalkerApps(prev => prev.map(w => w.id === id ? { ...w, status, verified } : w));
        alert(`Gezdirici durumu "${status === 'approved' ? 'Onaylandı (Yayında)' : status === 'rejected' ? 'Reddedildi' : 'Beklemede'}" olarak güncellendi!`);
      }
    } catch (err) {
      alert('Durum güncellenirken hata oluştu.');
    }
  };

  const handleDeleteDogWalker = async (id) => {
    if (!window.confirm('Bu köpek gezdiricisi başvurusunu silmek istediğinize emin misiniz?')) return;
    try {
      const res = await fetch(`/api/admin/dog-walker-applications/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
      });
      if (res.ok) {
        setDogWalkerApps(prev => prev.filter(w => w.id !== id));
      }
    } catch (err) {
      console.warn('Gezdirici silinemedi', err);
    }
  };

  const loadAmbassadors = async () => {
    setAmbassadorsLoading(true);
    try {
      const res = await fetch('/api/admin/ambassadors', {
        headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
      });
      if (res.ok) {
        const data = await res.json();
        setAmbassadorsList(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.warn('Ambassadors fetch failed', e);
    } finally {
      setAmbassadorsLoading(false);
    }
  };

  const handleCreateAmbassador = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/ambassadors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': sessionStorage.getItem('admin_token') || ''
        },
        body: JSON.stringify(ambassadorFormState)
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Elçi oluşturulamadı.');
        return;
      }
      alert(`Pati Elçisi "${ambassadorFormState.fullName}" başarıyla eklendi!`);
      setIsAddingAmbassador(false);
      setAmbassadorFormState({
        fullName: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        city: '',
        notes: ''
      });
      loadAmbassadors();
    } catch (err) {
      alert('İşlem başarısız oldu.');
    }
  };

  const handleDeleteAmbassador = async (id) => {
    if (!window.confirm('Bu Pati Elçisi hesabını silmek istediğinize emin misiniz?')) return;
    try {
      const res = await fetch(`/api/admin/ambassadors/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
      });
      if (res.ok) {
        setAmbassadorsList(prev => prev.filter(a => a.id !== id));
      }
    } catch (err) {
      console.warn('Ambassador delete failed', err);
    }
  };

  // Load ambassador applications when admin views that tab
  const loadAmbassadorApps = async () => {
    setAppsLoading(true);
    try {
      const res = await fetch('/api/ambassador-applications', {
        headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
      });
      if (res.ok) {
        const data = await res.json();
        setAmbassadorApps(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.warn('Ambassador apps fetch failed', e);
    } finally {
      setAppsLoading(false);
    }
  };

  const [loginLoading, setLoginLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password: password.trim() })
      });
      const data = await res.json();
      if (!res.ok || !data.token) {
        setLoginError(data.error || 'Hatalı kullanıcı adı veya şifre!');
        return;
      }
      const role = data.role || (loginTab === 'ambassador' ? 'ambassador' : 'admin');
      const name = data.name || (role === 'ambassador' ? 'Pati Elçisi' : 'Yönetici');
      sessionStorage.setItem('admin_authenticated', 'true');
      sessionStorage.setItem('admin_token', data.token);
      sessionStorage.setItem('admin_role', role);
      sessionStorage.setItem('admin_ambassador_name', name);
      setIsAuthenticated(true);
      setUserRole(role);
      setAmbassadorName(name);
      setLoginError('');
      if (role === 'ambassador') {
        setActiveSubTab('experiences');
      }
    } catch (err) {
      setLoginError('Giriş servisine ulaşılamadı. Lütfen sunucu durumunu kontrol edin.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_role');
    sessionStorage.removeItem('admin_ambassador_name');
    setIsAuthenticated(false);
    setUserRole('admin');
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
        headers: { 'Content-Type': 'application/json', 'x-admin-token': sessionStorage.getItem('admin_token') || '' },
        body: JSON.stringify({ url: scrapeUrl })
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setScrapeError(data.error || 'URL taranamadı.');
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

  // Counts describe only the currently loaded page.
  const verifiedHotelsCount = hotels.filter(hotel => hotel.verified === true).length;
  const unverifiedHotelsCount = hotels.length - verifiedHotelsCount;

  const handleEditHotel = (hotel) => {
    setEditingItem({ type: 'hotel', id: hotel.id, version: hotel.version });
    setHotelForm({
      ...hotel,
      suitableFor: (hotel.suitableFor || []).join('\n'),
      notSuitableFor: (hotel.notSuitableFor || []).join('\n'),
      disallowedPets: hotel.disallowedPets ? hotel.disallowedPets.join('\n') : '',
      galleryImages: (hotel.galleryImages || []).join('\n'),
      features: hotel.features || [], quizTags: hotel.quizTags || [], bookingLinks: hotel.bookingLinks || { enuygun: '', otelz: '', booking: '' }
    });
    setIsAdding(true);
  };

  const handleEditBoarding = (boarding) => {
    setEditingItem({ type: 'boarding', id: boarding.id, version: boarding.version });
    setBoardingForm({
      ...boarding,
      galleryImages: (boarding.galleryImages || []).join('\n'),
      features: boarding.features || [], quizTags: boarding.quizTags || [], bookingLinks: boarding.bookingLinks || { enuygun: '', otelz: '', booking: '' }
    });
    setIsAdding(true);
  };

  const handleEditGuide = (guide) => {
    setEditingItem({ type: 'guide', id: guide.id, version: guide.version });
    setGuideForm({
      ...guide,
      checklist: (guide.checklist || []).join('\n'),
      authorName: guide.author?.name || '',
      authorRole: guide.author?.role || '',
      authorImage: guide.author?.imageUrl || ''
    });
    setIsAdding(true);
  };

  const handleDeleteItem = async (type, id) => {
    if (!window.confirm('Bu kaydı tamamen silmek istediğinize emin misiniz?')) return;
    const item = collection.items.find(record => record.id === id);
    if (item) await collection.remove(item);
  };

  const handleSaveHotel = async (e) => {
    e.preventDefault();
    const formattedHotel = {
      ...hotelForm,
      ...(editingItem ? { id: editingItem.id, version: editingItem.version } : {}),
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

    if (!await collection.save(formattedHotel)) return;
    setIsAdding(false);
    setEditingItem(null);
  };

  const handleSaveBoarding = async (e) => {
    e.preventDefault();
    const formattedBoarding = {
      ...boardingForm,
      ...(editingItem ? { id: editingItem.id, version: editingItem.version } : {}),
      cameraSupport: boardingForm.cameraSupport === true || boardingForm.cameraSupport === 'true', bookingLinks: boardingForm.bookingLinks,
      galleryImages: typeof boardingForm.galleryImages === 'string' ? boardingForm.galleryImages.split('\n').map(url => url.trim()).filter(Boolean) : boardingForm.galleryImages,
      baseTrustScore: parseFloat(boardingForm.baseTrustScore || 9.5),
      quizTags: boardingForm.quizTags,
      verified: true
    };

    if (!await collection.save(formattedBoarding)) return;
    setIsAdding(false);
    setEditingItem(null);
  };

  const handleSaveGuide = async (e) => {
    e.preventDefault();
    const formattedGuide = {
      ...guideForm,
      ...(editingItem ? { id: editingItem.id, version: editingItem.version } : {}),
      checklist: guideForm.checklist.split('\n').filter(Boolean),
      author: {
        name: guideForm.authorName,
        role: guideForm.authorRole,
        imageUrl: guideForm.authorImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      }
    };

    if (!await collection.save(formattedGuide)) return;
    setIsAdding(false);
    setEditingItem(null);
  };

  const handleSaveExperience = async (e) => {
    e.preventDefault();
    const formattedExperience = {
      ...experienceForm,
      allowedPets: experienceForm.allowedPets.split(',').map(item => item.trim()).filter(Boolean),
      features: experienceForm.features.split('\n').map(item => item.trim()).filter(Boolean),
      baseTrustScore: parseFloat(experienceForm.baseTrustScore || 9.0),
      verified: true
    };
    if (!await collection.save(formattedExperience)) return;
    setExperienceForm({
      name: '', category: 'Kafe & Restoran', city: '', district: '', imageUrl: '',
      petPolicy: '', allowedPets: 'dog,cat', features: '', description: '', address: '',
      phone: '', website: '', mapUrl: '', bestTime: '', rules: '',
      baseTrustScore: 9.0, lastVerified: new Date().toISOString().split('T')[0]
    });
  };

  const handleSaveAd = async (e) => {
    e.preventDefault();
    const formattedAd = {
      ...adForm,
      impressions: parseInt(adForm.impressions || 0),
      clicks: parseInt(adForm.clicks || 0)
    };
    if (!await collection.save(formattedAd)) return;
    setAdForm({
      title: '', sponsor: '', placement: 'home-hero', targetUrl: '', imageUrl: '',
      city: '', category: 'Konaklama', startsAt: new Date().toISOString().split('T')[0],
      endsAt: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
      status: 'active', impressions: 0, clicks: 0
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 bg-white border-2 border-brand-navy/20 p-8 md:p-10 rounded-3xl shadow-xl text-left">
          {/* Giriş Türü Seçici Sekmeleri */}
          <div className="flex bg-brand-cream border border-brand-beige p-1 rounded-2xl mb-2">
            <button
              type="button"
              onClick={() => { setLoginTab('ambassador'); setLoginError(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                loginTab === 'ambassador' ? 'bg-brand-yellow text-brand-navy shadow-xs' : 'text-gray-500 hover:text-brand-navy'
              }`}
            >
              <span>🐾</span> Pati Elçisi Girişi
            </button>
            <button
              type="button"
              onClick={() => { setLoginTab('admin'); setLoginError(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                loginTab === 'admin' ? 'bg-brand-navy text-white shadow-xs' : 'text-gray-500 hover:text-brand-navy'
              }`}
            >
              <span>🔒</span> Yönetici Girişi
            </button>
          </div>

          <div className="text-center space-y-2">
            <span className="text-4xl block">
              {loginTab === 'ambassador' ? '⭐🐾' : '🛡️'}
            </span>
            <h2 className="font-title text-2xl md:text-3xl font-extrabold text-brand-navy">
              {loginTab === 'ambassador' ? 'Pati Elçisi Girişi' : 'Yönetici Girişi'}
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              {loginTab === 'ambassador' 
                ? 'Mekan eklemek, gezi rehberi yazmak ve otel özelliklerini güncellemek için elçi hesabınıza giriş yapın.'
                : 'patili.co sistem moderasyon ve yönetim paneline erişmek için bilgilerinizi girin.'}
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {loginError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded text-xs text-red-700 font-medium">
                ⚠️ {loginError}
              </div>
            )}

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block">Kullanıcı Adı / E-posta</label>
                <input
                  type="text"
                  required
                  disabled={loginLoading}
                  placeholder={loginTab === 'ambassador' ? 'elci veya e-postanız' : 'Kullanıcı adınız'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy disabled:bg-gray-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block">Şifre</label>
                <input
                  type="password"
                  required
                  disabled={loginLoading}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy disabled:bg-gray-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-3 rounded-full text-sm font-bold font-title transition-colors shadow-md border border-brand-navy/10 mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loginLoading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                  <span>Giriş Yapılıyor...</span>
                </>
              ) : (
                loginTab === 'ambassador' ? 'Pati Elçisi Olarak Giriş Yap' : 'Yönetici Girişi Yap'
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      {/* Header & Dashboard Stats */}
      {userRole === 'ambassador' ? (
        <div className="bg-gradient-to-r from-brand-yellow/30 via-white to-brand-beige border-2 border-brand-navy rounded-3xl p-6 md:p-8 mb-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow text-brand-navy rounded-full text-xs font-bold font-title border border-brand-navy mb-2 shadow-2xs">
              <span>⭐🐾 Onaylı Pati Elçisi Hesabı</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-title text-brand-navy">
              Hoş Geldiniz, {ambassadorName}!
            </h1>
            <p className="text-gray-600 text-xs md:text-sm mt-1">
              Topluluğa kedi-köpek dostu mekanlar ekleyebilir, gezi rehberleri yazabilir ve otel özelliklerini güncelleyebilirsiniz.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-50 hover:bg-red-100 text-red-600 border-2 border-red-200/50 text-xs font-bold px-5 py-2.5 rounded-full transition-colors font-title flex items-center gap-1 shrink-0"
          >
            <span>🔓</span> Çıkış Yap
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-brand-beige pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-title text-brand-navy">Editör Yönetim Paneli</h1>
            <p className="text-gray-600 text-sm mt-1">İçerik, evcil hayvan politikaları, elçi başvuruları ve moderasyon.</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-50 hover:bg-red-100 text-red-600 border-2 border-red-200/50 text-xs font-bold px-5 py-2.5 rounded-full transition-colors font-title flex items-center gap-1"
          >
            <span>🔓</span> Çıkış Yap
          </button>
        </div>
      )}

      {/* Pati Elçisi Hızlı Eylemleri */}
      {userRole === 'ambassador' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => { setActiveSubTab('experiences'); setIsAdding(true); setEditingItem(null); }}
            className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy p-4 rounded-2xl text-left hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🍽️</div>
            <div className="font-title font-bold text-xs text-brand-navy">Yeni Mekan Ekle</div>
            <div className="text-3xs text-gray-500 mt-0.5">Kafe, Restoran, Bar</div>
          </button>
          <button
            onClick={() => { setActiveSubTab('guides'); setIsAdding(true); setEditingItem(null); }}
            className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy p-4 rounded-2xl text-left hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">📝</div>
            <div className="font-title font-bold text-xs text-brand-navy">Gezi Rehberi Yaz</div>
            <div className="text-3xs text-gray-500 mt-0.5">Seyahat deneyimleri</div>
          </button>
          <button
            onClick={() => { setActiveSubTab('hotels'); setIsAdding(false); }}
            className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy p-4 rounded-2xl text-left hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🏨</div>
            <div className="font-title font-bold text-xs text-brand-navy">Otel & Kural Güncelle</div>
            <div className="text-3xs text-gray-500 mt-0.5">Ek ücret, bahçe, kilo</div>
          </button>
          <button
            onClick={() => { setActiveSubTab('reviews'); setIsAdding(false); }}
            className="bg-white border-2 border-brand-navy/15 hover:border-brand-navy p-4 rounded-2xl text-left hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">⭐</div>
            <div className="font-title font-bold text-xs text-brand-navy">Elçi Yorumları</div>
            <div className="text-3xs text-gray-500 mt-0.5">Öncelikli incelemeler</div>
          </button>
        </div>
      )}

      <fieldset disabled={collection.busy} className="min-w-0">
      {/* Sub tabs navigation */}
      <div className="flex border-b border-brand-beige mb-6 gap-6 text-sm font-semibold overflow-x-auto">
        {userRole === 'ambassador' ? (
          <>
            <button onClick={() => { setActiveSubTab('experiences'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'experiences' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}><span>🍽️</span> Patili Mekanlar</button>
            <button onClick={() => { setActiveSubTab('guides'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'guides' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}><span>📝</span> Gezi Rehberleri</button>
            <button onClick={() => { setActiveSubTab('hotels'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'hotels' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}><span>🏨</span> Oteller & Özellikler</button>
            <button onClick={() => { setActiveSubTab('reviews'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'reviews' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}><span>⭐</span> Yorumlar</button>
          </>
        ) : (
          <>
            <button onClick={() => { setActiveSubTab('hotels'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'hotels' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Oteller</button>
            <button onClick={() => { setActiveSubTab('boardings'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'boardings' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Bakım Evleri</button>
            <button onClick={() => { setActiveSubTab('guides'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'guides' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Rehberler</button>
            <button onClick={() => { setActiveSubTab('experiences'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'experiences' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Gezilecek Yerler</button>
            <button onClick={() => { setActiveSubTab('ads'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'ads' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Reklamlar</button>
            <button onClick={() => { setActiveSubTab('business-submissions'); setIsAdding(false); loadBizSubmissions(); }} className={`pb-3 border-b-2 relative whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'business-submissions' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
              <span>🏢</span> İşletme Başvuruları
            </button>
            <button onClick={() => { setActiveSubTab('dog-walkers-mgmt'); setIsAdding(false); loadDogWalkerApps(); }} className={`pb-3 border-b-2 relative whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'dog-walkers-mgmt' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
              <span>🦮</span> Gezdirici Başvuruları
            </button>
            <button onClick={() => { setActiveSubTab('ambassadors-mgmt'); setIsAdding(false); loadAmbassadors(); }} className={`pb-3 border-b-2 relative whitespace-nowrap flex items-center gap-1.5 ${activeSubTab === 'ambassadors-mgmt' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
              <span>🐾</span> Pati Elçileri
            </button>
            <button onClick={() => { setActiveSubTab('ad-applications'); setIsAdding(false); }} className={`pb-3 border-b-2 relative whitespace-nowrap ${activeSubTab === 'ad-applications' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
              Reklam Başvuruları
            </button>
            <button onClick={() => { setActiveSubTab('corrections'); setIsAdding(false); }} className={`pb-3 border-b-2 relative whitespace-nowrap ${activeSubTab === 'corrections' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
              Düzeltmeler
            </button>
            <button onClick={() => { setActiveSubTab('complaints-inbox'); setIsAdding(false); }} className={`pb-3 border-b-2 relative whitespace-nowrap ${activeSubTab === 'complaints-inbox' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>
              Şikayet Kutusu
            </button>
            <button onClick={() => { setActiveSubTab('reviews'); setIsAdding(false); }} className={`pb-3 border-b-2 whitespace-nowrap ${activeSubTab === 'reviews' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500'}`}>Yorumlar</button>
          </>
        )}
      </div>
      </fieldset>

      {collection.error && <p role="alert" className="mb-4 text-red-700">{collection.error}</p>}
      {collection.mutationError && <p role="alert" className="mb-4 text-red-700">{collection.mutationError}</p>}
      {collection.message && <p role="status" className="mb-4 text-brand-green">{collection.message}</p>}
      <fieldset disabled={collection.busy} className="min-w-0" aria-busy={collection.busy}>
      {!isAdding && <CatalogPagination page={collection} />}
      {collection.mutationError && <button type="button" onClick={collection.reload} className="mb-4 border rounded-lg px-3 py-2">Listeyi yenile</button>}
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
                  <p className="text-xs text-gray-500 mt-1">Bu sayfada {hotels.length} tesis · {verifiedHotelsCount} doğrulanmış · {unverifiedHotelsCount} doğrulanmamış</p>
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
                  {hotels.map(h => (
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
              {!collection.loading && !collection.error && hotels.length === 0 && <p className="text-center py-10 text-sm text-gray-500">Aramanızla eşleşen otel bulunamadı.</p>}
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
                        <button onClick={() => handleDeleteItem('experience', item.id)} className="text-red-500 hover:underline text-xs font-bold">Sil</button>
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
                        <button onClick={() => handleDeleteItem('ad', ad.id)} className="text-red-500 hover:underline text-xs font-bold">Sil</button>
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

          {/* Tab 1: İşletme Başvuruları */}
          {activeSubTab === 'business-submissions' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-title font-bold text-lg text-gray-950 flex items-center gap-2">
                    <span>🏢</span> İşletme Başvuruları ("İşletmeni Ekle")
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Ana sayfa ve işletme formundan gönderilen otel, mekan ve pet işletmesi kayıtları.</p>
                </div>
                <button type="button" onClick={loadBizSubmissions} className="border border-brand-navy text-brand-navy px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-navy-light">
                  Listeyi Yenile
                </button>
              </div>

              {bizLoading ? (
                <p className="text-center py-10 text-sm text-gray-500">İşletme başvuruları yükleniyor...</p>
              ) : bizSubmissions.length === 0 ? (
                <div className="bg-brand-cream border border-brand-beige rounded-2xl p-8 text-center text-gray-500 text-sm">
                  <span className="text-3xl block mb-2">🏢</span>
                  Henüz yeni bir işletme başvurusu bulunmuyor.
                </div>
              ) : (
                <div className="space-y-6">
                  {bizSubmissions.map(biz => (
                    <article key={biz.id} className="border-2 border-brand-navy/15 rounded-3xl bg-white p-6 shadow-xs text-left space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center flex-wrap gap-2">
                            <h4 className="font-title font-bold text-lg text-brand-navy">{biz.businessName}</h4>
                            <span className="bg-brand-yellow text-brand-navy text-3xs font-extrabold px-3 py-1 rounded-full border border-brand-navy/20">
                              {biz.businessType}
                            </span>
                            <span className={`text-3xs font-bold px-2.5 py-0.5 rounded-full ${biz.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                              {biz.status === 'approved' ? '✓ Onaylandı' : '⏳ İnceleme Bekliyor'}
                            </span>
                          </div>

                          <p className="text-xs text-gray-500">
                            📍 <strong>{biz.city}{biz.district ? ` / ${biz.district}` : ''}</strong> {biz.address ? `(${biz.address})` : ''} · 📅 {new Date(biz.createdAt || Date.now()).toLocaleDateString('tr-TR')}
                          </p>

                          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1.5 pt-2 text-xs">
                            <div><dt className="text-gray-400 text-3xs uppercase font-bold">Yetkili Kişi</dt><dd className="font-semibold text-gray-800">{biz.contactName}</dd></div>
                            <div><dt className="text-gray-400 text-3xs uppercase font-bold">Telefon</dt><dd><a className="font-semibold text-brand-navy hover:underline" href={`tel:${biz.phone}`}>{biz.phone}</a></dd></div>
                            <div><dt className="text-gray-400 text-3xs uppercase font-bold">E-posta</dt><dd><a className="font-semibold text-brand-navy hover:underline break-all" href={`mailto:${biz.email}`}>{biz.email}</a></dd></div>
                          </dl>

                          {biz.website && (
                            <div className="text-xs pt-1">
                              <span className="text-gray-400 text-3xs uppercase font-bold mr-1">Web/Sosyal:</span>
                              <a href={biz.website.startsWith('http') ? biz.website : `https://${biz.website}`} target="_blank" rel="noreferrer" className="text-brand-green font-bold hover:underline break-all">
                                {biz.website}
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="flex sm:flex-col gap-2 shrink-0">
                          {biz.status !== 'approved' && (
                            <button
                              type="button"
                              onClick={() => handleApproveBizSubmission(biz)}
                              className="bg-brand-green hover:bg-brand-green-hover text-white text-xs px-4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                            >
                              <CheckIcon className="w-4 h-4" /> Onayla & Yayınla
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleDeleteBizSubmission(biz.id)}
                            className="border border-red-200 hover:bg-red-50 text-red-600 text-xs px-4 py-2.5 rounded-xl font-bold transition-colors"
                          >
                            Başvuruyu Sil
                          </button>
                        </div>
                      </div>

                      {/* Fotoğraflar (1-2 Fotoğraf) */}
                      {(biz.photo1 || biz.photo2) && (
                        <div className="pt-2 border-t border-brand-beige">
                          <span className="text-3xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Gönderilen Fotoğraflar:</span>
                          <div className="flex flex-wrap gap-4">
                            {biz.photo1 && (
                              <div className="relative w-40 h-28 rounded-xl overflow-hidden border border-brand-navy/20 shadow-xs group bg-gray-100">
                                <img src={biz.photo1} alt="1. Fotoğraf" className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 left-1 bg-black/70 text-white text-4xs px-1.5 py-0.5 rounded">1. Fotoğraf</span>
                              </div>
                            )}
                            {biz.photo2 && (
                              <div className="relative w-40 h-28 rounded-xl overflow-hidden border border-brand-navy/20 shadow-xs group bg-gray-100">
                                <img src={biz.photo2} alt="2. Fotoğraf" className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 left-1 bg-black/70 text-white text-4xs px-1.5 py-0.5 rounded">2. Fotoğraf</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Açıklama & Pet Koşulları */}
                      <div className="bg-brand-cream/50 p-4 rounded-2xl border border-brand-beige text-xs space-y-2">
                        <div className="flex flex-wrap gap-3 items-center">
                          <span className="font-bold text-brand-navy">Pet Politikası:</span>
                          <span className={`px-2 py-0.5 rounded-full text-3xs font-bold ${biz.extraFee === 'no' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                            {biz.extraFee === 'no' ? '🟢 Ek Ücret Alınmıyor' : '🟡 Ek Ücretli'}
                          </span>
                          {Array.isArray(biz.allowedPets) && (
                            <span className="text-gray-600">Kabul: <strong>{biz.allowedPets.join(', ')}</strong></span>
                          )}
                        </div>
                        {biz.description && (
                          <p className="text-gray-700 leading-relaxed pt-1">
                            {biz.description}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Pati Elçileri Yönetimi (Sadece Admin Ekleyebilir) */}
          {activeSubTab === 'ambassadors-mgmt' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-title font-bold text-lg text-gray-950 flex items-center gap-2">
                    <span>🐾</span> Pati Elçileri Yönetimi
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Yalnızca yöneticiler yeni Pati Elçisi tanımlayabilir. Tanımlanan elçiler giriş yaparak mekan ve rehber ekleyebilir.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingAmbassador(!isAddingAmbassador)}
                    className="bg-brand-navy hover:bg-brand-navy-hover text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1"
                  >
                    <span>+</span> {isAddingAmbassador ? 'Formu Kapat' : 'Yeni Pati Elçisi Ekle'}
                  </button>
                  <button type="button" onClick={loadAmbassadors} className="border border-brand-navy text-brand-navy px-3 py-2 rounded-xl text-xs font-bold hover:bg-brand-navy-light">
                    Yenile
                  </button>
                </div>
              </div>

              {/* Yeni Elçi Ekleme Formu */}
              {isAddingAmbassador && (
                <form onSubmit={handleCreateAmbassador} className="bg-brand-yellow/10 border-2 border-brand-navy rounded-3xl p-6 mb-8 text-left space-y-4 shadow-md">
                  <div className="border-b border-brand-navy/20 pb-3">
                    <h4 className="font-title font-bold text-base text-brand-navy flex items-center gap-2">
                      <span>⭐</span> Yeni Pati Elçisi Hesabı Tanımla
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Pati elçisi hesabı açtığınız kullanıcı, bu kullanıcı adı ve şifreyle sisteme giriş yapabilecektir.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-3xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Ad Soyad *</label>
                      <input
                        required
                        type="text"
                        placeholder="Örn: Merve Kaya"
                        value={ambassadorFormState.fullName}
                        onChange={e => setAmbassadorFormState({ ...ambassadorFormState, fullName: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-3xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Kullanıcı Adı (Giriş için) *</label>
                      <input
                        required
                        type="text"
                        placeholder="Örn: merve"
                        value={ambassadorFormState.username}
                        onChange={e => setAmbassadorFormState({ ...ambassadorFormState, username: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-3xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Şifre *</label>
                      <input
                        required
                        type="text"
                        placeholder="En az 8 karakterli güçlü şifre"
                        value={ambassadorFormState.password}
                        onChange={e => setAmbassadorFormState({ ...ambassadorFormState, password: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-3xs font-bold text-gray-700 uppercase tracking-wider block mb-1">E-posta</label>
                      <input
                        type="email"
                        placeholder="merve@example.com"
                        value={ambassadorFormState.email}
                        onChange={e => setAmbassadorFormState({ ...ambassadorFormState, email: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-3xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Telefon</label>
                      <input
                        type="tel"
                        placeholder="05XX XXX XX XX"
                        value={ambassadorFormState.phone}
                        onChange={e => setAmbassadorFormState({ ...ambassadorFormState, phone: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-3xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Şehir / Bölge</label>
                      <input
                        type="text"
                        placeholder="Örn: İstanbul / Kadıköy"
                        value={ambassadorFormState.city}
                        onChange={e => setAmbassadorFormState({ ...ambassadorFormState, city: e.target.value })}
                        className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-3xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Notlar / Açıklama</label>
                    <input
                      type="text"
                      placeholder="Örn: Kadıköy ve Moda bölgesi kedi & köpek mekan temsilcisi"
                      value={ambassadorFormState.notes}
                      onChange={e => setAmbassadorFormState({ ...ambassadorFormState, notes: e.target.value })}
                      className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-2.5 outline-none focus:border-brand-navy bg-white"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="bg-brand-green hover:bg-brand-green-hover text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-colors"
                    >
                      ✓ Elçi Hesabını Kaydet
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingAmbassador(false)}
                      className="border border-gray-300 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors"
                    >
                      Vazgeç
                    </button>
                  </div>
                </form>
              )}

              {/* Mevcut Elçiler Listesi */}
              {ambassadorsLoading ? (
                <p className="text-center py-10 text-sm text-gray-500">Pati Elçileri listesi yükleniyor...</p>
              ) : ambassadorsList.length === 0 ? (
                <div className="bg-brand-cream border border-brand-beige rounded-2xl p-8 text-center text-gray-500 text-sm">
                  <span className="text-3xl block mb-2">🐾</span>
                  Kayıtlı Pati Elçisi bulunmuyor. Yukarıdaki butondan yeni bir elçi tanımlayabilirsiniz.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ambassadorsList.map(ambassador => (
                    <article key={ambassador.id} className="border-2 border-brand-navy/15 rounded-2xl bg-white p-5 shadow-xs text-left flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-title font-bold text-base text-brand-navy">{ambassador.fullName}</h4>
                            <span className="text-3xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                              @{ambassador.username}
                            </span>
                          </div>
                          <span className="bg-brand-yellow text-brand-navy text-4xs font-extrabold px-2.5 py-0.5 rounded-full border border-brand-navy/20 shrink-0">
                            ⭐ Pati Elçisi
                          </span>
                        </div>

                        <div className="bg-brand-cream/60 p-3 rounded-xl border border-brand-beige text-xs space-y-1">
                          <div className="flex justify-between text-3xs">
                            <span className="text-gray-500">Giriş Şifresi:</span>
                            <span className="font-mono font-bold text-brand-navy">{ambassador.password}</span>
                          </div>
                          {ambassador.city && (
                            <div className="flex justify-between text-3xs">
                              <span className="text-gray-500">Bölge:</span>
                              <span className="font-bold text-gray-700">{ambassador.city}</span>
                            </div>
                          )}
                          {ambassador.email && (
                            <div className="flex justify-between text-3xs">
                              <span className="text-gray-500">E-posta:</span>
                              <span className="font-medium text-brand-navy truncate max-w-[150px]">{ambassador.email}</span>
                            </div>
                          )}
                          {ambassador.phone && (
                            <div className="flex justify-between text-3xs">
                              <span className="text-gray-500">Telefon:</span>
                              <span className="font-medium text-gray-700">{ambassador.phone}</span>
                            </div>
                          )}
                        </div>

                        {ambassador.notes && (
                          <p className="text-3xs text-gray-600 italic">
                            "{ambassador.notes}"
                          </p>
                        )}
                      </div>

                      <div className="pt-2 border-t border-brand-beige flex items-center justify-between">
                        <span className="text-4xs text-gray-400">
                          {ambassador.createdAt ? new Date(ambassador.createdAt).toLocaleDateString('tr-TR') : 'Aktif'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDeleteAmbassador(ambassador.id)}
                          className="text-red-600 hover:text-red-800 text-xs font-bold hover:underline"
                        >
                          Yetkiyi Kaldır / Sil
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab: Köpek Gezdiricileri Başvuruları */}
          {activeSubTab === 'dog-walkers-mgmt' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-title font-bold text-lg text-gray-950 flex items-center gap-2">
                    <span>🦮</span> Köpek Gezdiricileri Başvuruları
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Gezdirici olmak isteyenlerin başvuruları. Sadece "Onaylandı" durumundaki profiller <a href="/kopek-gezdiricileri" target="_blank" rel="noreferrer" className="text-brand-navy underline font-semibold">/kopek-gezdiricileri</a> sayfasında yayınlanır.
                  </p>
                </div>
                <button 
                  type="button" 
                  onClick={loadDogWalkerApps} 
                  className="border border-brand-navy text-brand-navy px-4 py-2 rounded-xl text-xs font-bold hover:bg-brand-navy-light"
                >
                  Listeyi Yenile
                </button>
              </div>

              {/* Filtreleme Butonları */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setDogWalkerFilter('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${dogWalkerFilter === 'all' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Tümü ({dogWalkerApps.length})
                </button>
                <button
                  type="button"
                  onClick={() => setDogWalkerFilter('pending')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${dogWalkerFilter === 'pending' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'}`}
                >
                  ⏳ İnceleme Bekleyenler ({dogWalkerApps.filter(w => w.status === 'pending').length})
                </button>
                <button
                  type="button"
                  onClick={() => setDogWalkerFilter('approved')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${dogWalkerFilter === 'approved' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'}`}
                >
                  ✓ Yayında / Onaylananlar ({dogWalkerApps.filter(w => w.status === 'approved').length})
                </button>
                <button
                  type="button"
                  onClick={() => setDogWalkerFilter('rejected')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${dogWalkerFilter === 'rejected' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-800 border border-red-200 hover:bg-red-100'}`}
                >
                  ✕ Reddedilenler ({dogWalkerApps.filter(w => w.status === 'rejected').length})
                </button>
              </div>

              {dogWalkerLoading ? (
                <p className="text-center py-10 text-sm text-gray-500">Gezdirici başvuruları yükleniyor...</p>
              ) : dogWalkerApps.length === 0 ? (
                <div className="bg-brand-cream border border-brand-beige rounded-2xl p-8 text-center text-gray-500 text-sm">
                  <span className="text-3xl block mb-2">🦮</span>
                  Henüz kayıtlı veya yeni bir gezdirici başvurusu bulunmuyor.
                </div>
              ) : (
                <div className="space-y-6">
                  {dogWalkerApps
                    .filter(w => dogWalkerFilter === 'all' ? true : w.status === dogWalkerFilter)
                    .map(walker => (
                      <article key={walker.id} className="border-2 border-brand-navy/15 rounded-3xl bg-white p-6 shadow-xs text-left space-y-4">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center flex-wrap gap-2">
                              <h4 className="font-title font-bold text-lg text-brand-navy">{walker.fullName || walker.name}</h4>
                              <span className={`text-3xs font-bold px-2.5 py-0.5 rounded-full ${
                                walker.status === 'approved' 
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                                  : walker.status === 'rejected'
                                  ? 'bg-red-100 text-red-800 border border-red-300'
                                  : 'bg-amber-100 text-amber-800 border border-amber-300'
                              }`}>
                                {walker.status === 'approved' ? '✓ Yayında (Onaylandı)' : walker.status === 'rejected' ? '✕ Reddedildi' : '⏳ Onay Bekliyor'}
                              </span>
                              {walker.verified && (
                                <span className="bg-blue-100 text-blue-800 text-3xs font-bold px-2 py-0.5 rounded-full">
                                  ✓ Doğrulanmış Profil
                                </span>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-600">
                              <span>📍 <strong>{walker.district}, {walker.city}</strong></span>
                              <span>📞 <a href={`tel:${walker.phone}`} className="underline font-semibold text-brand-navy">{walker.phone}</a></span>
                              <span>✉️ <a href={`mailto:${walker.email}`} className="underline text-brand-navy">{walker.email}</a></span>
                              <span>💰 Saatlik Ücret: <strong>{walker.hourlyRate}</strong></span>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 shrink-0">
                            {walker.status !== 'approved' && (
                              <button
                                type="button"
                                onClick={() => handleUpdateDogWalkerStatus(walker.id, 'approved', true)}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-xs"
                              >
                                ✓ Onayla & Yayına Al
                              </button>
                            )}
                            {walker.status === 'approved' && (
                              <button
                                type="button"
                                onClick={() => handleUpdateDogWalkerStatus(walker.id, 'pending', false)}
                                className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors shadow-xs"
                              >
                                Onayı Kaldır (Beklet)
                              </button>
                            )}
                            {walker.status !== 'rejected' && (
                              <button
                                type="button"
                                onClick={() => handleUpdateDogWalkerStatus(walker.id, 'rejected', false)}
                                className="border border-red-300 text-red-700 hover:bg-red-50 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
                              >
                                Reddet
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleDeleteDogWalker(walker.id)}
                              className="text-red-500 hover:text-red-700 text-xs font-semibold px-2 py-2 hover:underline"
                            >
                              Sil
                            </button>
                          </div>
                        </div>

                        {/* Deneyim ve Köpek Sahipliği Cevabı */}
                        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs space-y-1.5">
                          <span className="font-bold text-amber-900 block text-2xs uppercase tracking-wider">
                            🐕 Daha önce köpek sahibi oldunuz mu veya gezdirme tecrübeniz var mı?
                          </span>
                          <p className="text-amber-950 font-medium leading-relaxed">
                            {walker.hasDogExperience || 'Belirtilmedi'}
                          </p>
                        </div>

                        {/* Tanıtım / Bio */}
                        {walker.bio && (
                          <div className="bg-brand-cream/50 border border-brand-beige rounded-2xl p-4 text-xs space-y-1">
                            <span className="font-bold text-brand-navy block text-3xs uppercase tracking-wider">
                              Kısa Tanıtım / Özgeçmiş:
                            </span>
                            <p className="text-gray-700 leading-relaxed">
                              {walker.bio}
                            </p>
                          </div>
                        )}

                        <div className="pt-2 border-t border-brand-beige flex items-center justify-between text-4xs text-gray-400">
                          <span>Kayıt ID: {walker.id}</span>
                          <span>Başvuru Tarihi: {walker.createdAt ? new Date(walker.createdAt).toLocaleString('tr-TR') : 'Bilinmiyor'}</span>
                        </div>
                      </article>
                    ))}
                </div>
              )}
            </div>
          )}

          {isFeedback && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h3 className="font-title font-bold text-lg text-gray-950">
                  {resource === 'reviews' ? 'Kullanıcı Yorumları' : resource === 'corrections' ? 'Bilgi Düzeltme İstekleri' : 'Şikayet ve İhlal Bildirimleri'}
                </h3>
                <select aria-label="Moderasyon durumu" value={feedbackStatus} onChange={event => setFeedbackStatus(event.target.value)} className="border rounded-lg p-2 text-sm">
                  <option value="pending">Bekliyor</option>
                  <option value="approved">Onaylandı</option>
                  <option value="rejected">Reddedildi</option>
                  <option value="all">Tümü</option>
                </select>
              </div>
              {!collection.loading && !collection.error && collection.items.length === 0 && <p className="py-6 text-sm text-gray-500">Kayıt bulunamadı.</p>}
              <div className="divide-y divide-brand-beige">
                {collection.items.map(item => (
                  <article key={item.id} className="py-5 flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2 min-w-0">
                      <h4 className="font-bold text-sm break-words">{item.hotelName || item.targetName || item.hotelId || item.targetId}</h4>
                      <p className="text-xs text-gray-500 break-words">{item.author || ''} · {item.date} · {{ pending: 'Bekliyor', approved: 'Onaylandı', rejected: 'Reddedildi' }[item.status]}</p>
                      {resource === 'reviews' && <p className="font-bold text-sm">{item.rating}/10</p>}
                      <p className="text-sm whitespace-pre-wrap break-words">{item.text}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-start shrink-0">
                      {item.status !== 'approved' && <button type="button" onClick={async () => { await collection.moderate(item, 'approved'); }} className="bg-brand-green text-white text-xs px-3 py-2 rounded-lg font-bold flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5" />Onayla</button>}
                      {item.status !== 'rejected' && <button type="button" onClick={async () => { await collection.moderate(item, 'rejected'); }} className="border border-gray-300 text-xs px-3 py-2 rounded-lg font-bold">Reddet</button>}
                      {item.status !== 'pending' && <button type="button" onClick={async () => { await collection.moderate(item, 'pending'); }} className="border border-gray-300 text-xs px-3 py-2 rounded-lg font-bold">İncelemeye al</button>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      </fieldset>
    </div>
  );
}
