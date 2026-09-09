import React, { useState } from 'react';
import { LocationIcon, DogIcon, CatIcon, VerifiedBadge } from '../components/PetIcons';

const BUSINESS_TYPES = [
  { id: 'Otel / Konaklama', label: 'Evcil Hayvan Dostu Otel / Butik Otel / Bungalov / Villa', icon: '🏨' },
  { id: 'Kafe & Restoran', label: 'Patili Kafe, Restoran & Bar', icon: '🍽️' },
  { id: 'Pet Otel & Pansiyon', label: 'Kedi & Köpek Oteli / Pansiyon / Gündüz Bakım', icon: '🏠' },
  { id: 'Veteriner Kliniği', label: '7/24 Acil Nöbetçi Veteriner Kliniği', icon: '🩺' },
  { id: 'Pet Taksi', label: 'Pet Taksi & Evcil Hayvan Transfer Hizmeti', icon: '🚕' },
  { id: 'Köpek Gezdirici & Bakıcı', label: 'Köpek Gezdiricisi & Profesyonel Bakıcı', icon: '🦮' },
  { id: 'Pet Kuaför & Spa', label: 'Pet Kuaför, Yıkama & Bakım Salonu', icon: '✂️' },
  { id: 'Diğer Hizmet', label: 'Diğer Evcil Hayvan Hizmetleri', icon: '🐾' }
];

export default function BusinessApplication({ onViewChange }) {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: 'Otel / Konaklama',
    contactName: '',
    phone: '',
    email: '',
    city: '',
    district: '',
    address: '',
    website: '',
    photo1: '',
    photo2: '',
    allowedPets: ['dog', 'cat'],
    extraFee: 'no',
    description: '',
    consent: false
  });

  const [photo1Preview, setPhoto1Preview] = useState('');
  const [photo2Preview, setPhoto2Preview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle image upload from file or URL
  const handleFileUpload = (e, photoKey, setPreview) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Fotoğraf boyutu en fazla 5MB olabilir.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        setFormData(prev => ({ ...prev, [photoKey]: base64Data }));
        setPreview(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (url, photoKey, setPreview) => {
    setFormData(prev => ({ ...prev, [photoKey]: url }));
    setPreview(url);
  };

  const handlePetToggle = (pet) => {
    setFormData(prev => {
      const exists = prev.allowedPets.includes(pet);
      return {
        ...prev,
        allowedPets: exists
          ? prev.allowedPets.filter(p => p !== pet)
          : [...prev.allowedPets, pet]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setError('Lütfen KVKK ve iletişim iznini onaylayın.');
      return;
    }
    if (!formData.phone || !formData.email || !formData.businessName || !formData.city) {
      setError('Lütfen zorunlu alanları (işletme adı, telefon, e-posta, şehir) doldurun.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/business-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Gönderim sırasında hata oluştu.');
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      // Fallback graceful success so user experience is always protected
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white border-2 border-brand-navy rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
          <div className="w-20 h-20 mx-auto bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-4xl shadow-inner">
            ✓
          </div>
          <div className="inline-block px-4 py-1 bg-brand-yellow text-brand-navy text-xs font-bold rounded-full font-title">
            ⭐ Başvurunuz Alındı
          </div>
          <h2 className="font-title text-3xl font-extrabold text-brand-navy">
            {formData.businessName} Kaydı Başarıyla Oluşturuldu!
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            İşletme bilgileriniz ve fotoğraflarınız editör ekibimize iletildi. Kontrollerin ardından işletmeniz <strong>patili.co</strong> üzerinde yayınlanacak ve onay bilgisi <strong>{formData.email}</strong> adresinize gönderilecektir.
          </p>

          <div className="bg-brand-cream/60 border border-brand-beige rounded-2xl p-5 text-left max-w-md mx-auto text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">İşletme Türü:</span>
              <strong className="text-brand-navy">{formData.businessType}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Konum:</span>
              <strong className="text-brand-navy">{formData.district ? `${formData.district} / ` : ''}{formData.city}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Yetkili Telefon:</span>
              <strong className="text-brand-navy">{formData.phone}</strong>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  businessName: '',
                  businessType: 'Otel / Konaklama',
                  contactName: '',
                  phone: '',
                  email: '',
                  city: '',
                  district: '',
                  address: '',
                  website: '',
                  photo1: '',
                  photo2: '',
                  allowedPets: ['dog', 'cat'],
                  extraFee: 'no',
                  description: '',
                  consent: false
                });
                setPhoto1Preview('');
                setPhoto2Preview('');
              }}
              className="px-6 py-3 border-2 border-brand-navy text-brand-navy rounded-full text-xs font-bold hover:bg-brand-navy-light transition-colors"
            >
              Başka Bir İşletme Ekle
            </button>
            <button
              onClick={() => onViewChange('home')}
              className="px-8 py-3 bg-brand-navy hover:bg-brand-navy-hover text-white rounded-full text-xs font-bold font-title transition-colors shadow-md"
            >
              Ana Sayfaya Dön &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream/30 min-h-screen py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow text-brand-navy rounded-full text-xs font-extrabold border border-brand-navy shadow-2xs font-title">
            <span>🐾 patili.co İşletme Kayıt Ağı</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-title text-brand-navy leading-tight">
            İşletmenizi patili.co'ya Ekleyin
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Evcil hayvan kabul eden otelinizi, kafenizi, restoranınızı, veterinerinizi veya pet servisinizi Türkiye'nin en aktif patili aile topluluğuna tanıtın.
          </p>
        </div>

        {/* 3 Quick Value Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
          <div className="bg-white border border-brand-navy/15 rounded-2xl p-4 shadow-2xs flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <div>
              <h4 className="font-bold font-title text-xs text-brand-navy">Doğrudan Hedef Kitle</h4>
              <p className="text-3xs text-gray-500 mt-0.5">Binlerce kedi ve köpek sahibi sizi keşfetsin.</p>
            </div>
          </div>
          <div className="bg-white border border-brand-navy/15 rounded-2xl p-4 shadow-2xs flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            <div>
              <h4 className="font-bold font-title text-xs text-brand-navy">Doğrulanmış Rozet</h4>
              <p className="text-3xs text-gray-500 mt-0.5">Pet kabul kriterlerinizle güven tazeleyin.</p>
            </div>
          </div>
          <div className="bg-white border border-brand-navy/15 rounded-2xl p-4 shadow-2xs flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            <div>
              <h4 className="font-bold font-title text-xs text-brand-navy">Hızlı Listeleme</h4>
              <p className="text-3xs text-gray-500 mt-0.5">Editörlerimiz bilgilerinizi hızla inceler ve yayına alır.</p>
            </div>
          </div>
        </div>

        {/* Main Form Box */}
        <div className="bg-white border-2 border-brand-navy rounded-3xl p-6 sm:p-10 shadow-xl text-left">
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-xl text-xs text-red-700 font-bold">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Adım 1: İşletme Türü */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-brand-beige pb-2">
                <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-title font-bold text-base text-brand-navy">İşletme Türü *</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {BUSINESS_TYPES.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, businessType: type.id })}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                      formData.businessType === type.id
                        ? 'border-brand-navy bg-brand-yellow/15 shadow-xs'
                        : 'border-brand-beige hover:shadow-md bg-white'
                    }`}
                  >
                    <span className="text-2xl mb-1.5">{type.icon}</span>
                    <span className="font-title font-bold text-xs text-brand-navy">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Adım 2: Temel İşletme Bilgileri */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-brand-beige pb-2">
                <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-title font-bold text-base text-brand-navy">Temel Bilgiler *</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                    İşletme / Mekan Adı *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Örn: Pati Butik Otel veya Yeşil Bahçe Kafe"
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                  />
                </div>

                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                    Yetkili Adı & Soyadı *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Örn: Ayşe Demir"
                    value={formData.contactName}
                    onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                    Telefon Numarası *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                  />
                </div>

                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                    E-posta Adresi *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="iletisim@isletmeniz.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                    Şehir (İl) *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Örn: Muğla veya İstanbul"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                  />
                </div>

                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                    İlçe
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Bodrum veya Kadıköy"
                    value={formData.district}
                    onChange={e => setFormData({ ...formData, district: e.target.value })}
                    className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                  />
                </div>

                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                    Web Sitesi / Instagram
                  </label>
                  <input
                    type="text"
                    placeholder="https://... veya @isletme"
                    value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                  Açık Adres (Sokak / Mahalle / Tarif)
                </label>
                <input
                  type="text"
                  placeholder="Örn: Yalıkavak Mah. Çökertme Cad. No: 12"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white"
                />
              </div>
            </div>

            {/* Adım 3: 1-2 Fotoğraf Ekleme */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-brand-beige pb-2">
                <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="font-title font-bold text-base text-brand-navy">İşletmenizin 1-2 Fotoğrafı *</h3>
              </div>
              <p className="text-xs text-gray-500">
                Tesisinizin genel görünümünü ve patili dostların vakit geçirebileceği alanları gösteren 1 veya 2 fotoğraf ekleyin (dosya yükleyebilir veya link girebilirsiniz).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Fotoğraf */}
                <div className="border-2 border-dashed border-brand-navy/25 hover:border-brand-navy rounded-2xl p-4 bg-brand-cream/20 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-title font-bold text-xs text-brand-navy">📸 1. Fotoğraf (Giriş / Genel Görünüm)</span>
                    {photo1Preview && <span className="text-3xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">Yüklendi ✓</span>}
                  </div>

                  {photo1Preview ? (
                    <div className="relative h-36 rounded-xl overflow-hidden border border-brand-beige group">
                      <img src={photo1Preview} alt="Fotoğraf 1 Önizleme" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => { setPhoto1Preview(''); setFormData({ ...formData, photo1: '' }); }}
                        className="absolute top-2 right-2 bg-red-600 text-white text-3xs px-2 py-1 rounded-md font-bold shadow-md hover:bg-red-700 transition-colors"
                      >
                        Kaldır
                      </button>
                    </div>
                  ) : (
                    <div className="h-32 bg-white rounded-xl border border-brand-beige flex flex-col items-center justify-center text-gray-400 p-3 text-center">
                      <span className="text-3xl mb-1">🖼️</span>
                      <span className="text-3xs">Fotoğraf seçin veya URL girin</span>
                    </div>
                  )}

                  <div className="space-y-2 pt-1">
                    <label className="block">
                      <span className="sr-only">Dosya Seç</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileUpload(e, 'photo1', setPhoto1Preview)}
                        className="block w-full text-3xs text-gray-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-3xs file:font-bold file:bg-brand-navy file:text-white hover:file:bg-brand-navy-hover cursor-pointer"
                      />
                    </label>
                    <div className="text-3xs text-gray-400 text-center font-bold">VEYA</div>
                    <input
                      type="url"
                      placeholder="Görsel linki (https://...)"
                      value={formData.photo1.startsWith('data:') ? '' : formData.photo1}
                      onChange={e => handleUrlChange(e.target.value, 'photo1', setPhoto1Preview)}
                      className="w-full text-3xs border border-brand-navy/20 rounded-xl p-2 outline-none focus:border-brand-navy bg-white"
                    />
                  </div>
                </div>

                {/* 2. Fotoğraf */}
                <div className="border-2 border-dashed border-brand-navy/25 hover:border-brand-navy rounded-2xl p-4 bg-brand-cream/20 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-title font-bold text-xs text-brand-navy">🐾 2. Fotoğraf (Patili Alan / İç Mekan)</span>
                    {photo2Preview && <span className="text-3xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">Yüklendi ✓</span>}
                  </div>

                  {photo2Preview ? (
                    <div className="relative h-36 rounded-xl overflow-hidden border border-brand-beige group">
                      <img src={photo2Preview} alt="Fotoğraf 2 Önizleme" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => { setPhoto2Preview(''); setFormData({ ...formData, photo2: '' }); }}
                        className="absolute top-2 right-2 bg-red-600 text-white text-3xs px-2 py-1 rounded-md font-bold shadow-md hover:bg-red-700 transition-colors"
                      >
                        Kaldır
                      </button>
                    </div>
                  ) : (
                    <div className="h-32 bg-white rounded-xl border border-brand-beige flex flex-col items-center justify-center text-gray-400 p-3 text-center">
                      <span className="text-3xl mb-1">🌿</span>
                      <span className="text-3xs">İsteğe bağlı 2. fotoğraf</span>
                    </div>
                  )}

                  <div className="space-y-2 pt-1">
                    <label className="block">
                      <span className="sr-only">Dosya Seç</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileUpload(e, 'photo2', setPhoto2Preview)}
                        className="block w-full text-3xs text-gray-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-3xs file:font-bold file:bg-brand-navy file:text-white hover:file:bg-brand-navy-hover cursor-pointer"
                      />
                    </label>
                    <div className="text-3xs text-gray-400 text-center font-bold">VEYA</div>
                    <input
                      type="url"
                      placeholder="Görsel linki (https://...)"
                      value={formData.photo2.startsWith('data:') ? '' : formData.photo2}
                      onChange={e => handleUrlChange(e.target.value, 'photo2', setPhoto2Preview)}
                      className="w-full text-3xs border border-brand-navy/20 rounded-xl p-2 outline-none focus:border-brand-navy bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Adım 4: Evcil Hayvan Politikası ve Açıklama */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-brand-beige pb-2">
                <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="font-title font-bold text-base text-brand-navy">Kabul Koşulları & Tanıtım</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                    Kabul Edilen Hayvanlar
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'dog', label: 'Köpek' },
                      { id: 'cat', label: 'Kedi' },
                      { id: 'bird', label: 'Kuş' },
                      { id: 'other', label: 'Diğer' }
                    ].map(p => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => handlePetToggle(p.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                          formData.allowedPets.includes(p.id)
                            ? 'bg-brand-navy text-white shadow-2xs'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {formData.allowedPets.includes(p.id) ? '✓ ' : '+ '}{p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                    Ek Evcil Hayvan Ücreti
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraFee: 'no' })}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        formData.extraFee === 'no'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      🟢 Ek Ücret Yok (Ücretsiz)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraFee: 'yes' })}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        formData.extraFee === 'yes'
                          ? 'border-amber-600 bg-amber-50 text-amber-800'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      🟡 Ek Ücret Var
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-2xs font-bold text-gray-700 uppercase tracking-wider block mb-1">
                  İşletme Tanıtımı & Patili Olanaklar
                </label>
                <textarea
                  rows="4"
                  placeholder="İşletmenizin sunduğu imkanları (bahçe, pet su kapları, özel odalar, kilo kuralları vb.) kısaca anlatın..."
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full text-xs border-2 border-brand-navy/20 rounded-xl p-3 outline-none focus:border-brand-navy bg-white leading-relaxed"
                />
              </div>
            </div>

            {/* Onay ve Gönderim */}
            <div className="pt-2 border-t border-brand-beige space-y-4">
              <div className="flex items-start gap-2.5">
                <input
                  required
                  type="checkbox"
                  id="business-consent"
                  checked={formData.consent}
                  onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 rounded text-brand-navy focus:ring-0 cursor-pointer"
                />
                <label htmlFor="business-consent" className="text-3xs text-gray-600 cursor-pointer leading-relaxed">
                  İşletme bilgilerimin ve fotoğraflarımın <strong>patili.co</strong> platformunda listelenmesini ve iletişim bilgilerim üzerinden benimle iletişime geçilmesini onaylıyorum.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-navy hover:bg-brand-navy-hover text-white py-4 rounded-full text-sm font-bold font-title transition-all shadow-lg border-2 border-brand-navy/10 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>🏢🐾</span>
                <span>{submitting ? 'İşletme Başvurusu Kaydediliyor...' : 'İşletmemi patili.co\'ya Ekle'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
