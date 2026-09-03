import React, { useState, useEffect } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon, StarIcon, CheckIcon, XIcon, GlobeIcon, PhoneIcon, MailIcon, AlertIcon } from '../components/PetIcons';
import AdBanner from '../components/AdBanner';

const hotelGalleryFallbacks = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=900&q=80"
];

const boardingGalleryFallbacks = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=900&q=80"
];

function uniqueItems(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function makeAmenityGroups(item, isBoarding) {
  if (isBoarding) {
    return [
      {
        title: 'Konaklama Modeli',
        icon: '▦',
        items: uniqueItems([item.boardingModel, ...(item.features || []).filter(f => /oda|kafes|konaklama|bahçe/i.test(f))])
      },
      {
        title: 'Kamera & Takip',
        icon: '◉',
        items: uniqueItems([
          item.cameraSupport ? 'Canlı kamera desteği' : '',
          ...(item.features || []).filter(f => /kamera|fotoğraf|video|personel|takip/i.test(f))
        ])
      },
      {
        title: 'Sağlık & Veteriner',
        icon: '+',
        items: uniqueItems([
          item.accreditedVet ? `Anlaşmalı veteriner: ${item.accreditedVet}` : '',
          ...(item.features || []).filter(f => /veteriner|ilaç|aşı|sağlık/i.test(f))
        ])
      },
      {
        title: 'Kabul Koşulları',
        icon: '✓',
        items: uniqueItems([item.requiredDocs, item.neuteringRequired, item.aggressionPolicy])
      },
      {
        title: 'Günlük Bakım',
        icon: '☼',
        items: uniqueItems([item.dailyProgram, ...(item.features || []).filter(f => /mama|oyun|günlük|egzersiz/i.test(f))])
      },
      {
        title: 'İletişim & Rezervasyon',
        icon: '☎',
        items: uniqueItems([item.phone, item.email, item.website ? 'Web sitesi üzerinden iletişim' : ''])
      }
    ].filter(group => group.items.length > 0);
  }

  const petFeatures = item.features || [];
  return [
    {
      title: 'Evcil Hayvan Hizmetleri',
      icon: '🐾',
      items: uniqueItems([
        ...petFeatures,
        item.maxPetsPerRoom ? `Oda başına ${item.maxPetsPerRoom} evcil hayvan` : '',
        item.canLeaveInRoomAlone ? 'Odada yalnız kalabilir' : 'Odada yalnız bırakılamaz'
      ])
    },
    {
      title: 'Yeme & İçme',
      icon: '♨',
      items: uniqueItems([
        petFeatures.includes('Pet menüsü bulunan') ? 'Pet menüsü' : '',
        item.rules?.restaurant ? `Restoran: ${item.rules.restaurant}` : '',
        petFeatures.includes('Mama ve su kabı sağlayan') ? 'Mama ve su kabı' : ''
      ])
    },
    {
      title: 'Plaj & Açık Alan',
      icon: '≈',
      items: uniqueItems([
        petFeatures.includes('Pet plajı bulunan') ? 'Pet plajı' : '',
        petFeatures.includes('Bahçesi bulunan') ? 'Bahçe alanı' : '',
        petFeatures.includes('Denize sıfır') ? 'Denize sıfır' : '',
        item.rules?.beach ? `Plaj: ${item.rules.beach}` : '',
        item.rules?.pool ? `Havuz: ${item.rules.pool}` : ''
      ])
    },
    {
      title: 'Oda & Konfor',
      icon: '▣',
      items: uniqueItems([
        petFeatures.includes('Evcil hayvan yatağı sağlayan') ? 'Evcil hayvan yatağı' : '',
        item.weightLimit > 0 ? `${item.weightLimit} kg kilo sınırı` : 'Kilo sınırı yok',
        item.depositInfo ? `Depozito: ${item.depositInfo}` : ''
      ])
    },
    {
      title: 'Sağlık & Güvenlik',
      icon: '+',
      items: uniqueItems([
        item.veterinarySupport,
        item.requiredDocs ? `Gerekli belgeler: ${item.requiredDocs}` : '',
        item.breedRestrictions ? `Irk politikası: ${item.breedRestrictions}` : ''
      ])
    },
    {
      title: 'Ücret & Rezervasyon',
      icon: '₺',
      items: uniqueItems([
        item.extraFee === 'no' ? 'Evcil hayvan için ek ücret yok' : `Evcil hayvan ücreti: ${item.extraFee}`,
        item.website ? 'Resmi web sitesi mevcut' : '',
        item.bookingLinks?.enuygun ? 'Enuygun rezervasyon linki' : '',
        item.bookingLinks?.otelz ? 'Otelz rezervasyon linki' : '',
        item.bookingLinks?.booking ? 'Booking.com rezervasyon linki' : ''
      ])
    }
  ].filter(group => group.items.length > 0);
}

export default function DetailView({
  id,
  isBoarding,
  isTaxi,
  isVet,
  hotels,
  boardings,
  taxis = [],
  vets = [],
  complaints = [],
  addComplaint,
  onViewChange,
  addCorrection
}) {
  const [activeTab, setActiveTab] = useState('editorial');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Complaints form states
  const [complaintOpen, setComplaintOpen] = useState(false);
  const [complaintAuthor, setComplaintAuthor] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  // Reviews system states
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(10);
  const [reviewText, setReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      if (!id) return;
      setReviewsLoading(true);
      try {
        const res = await fetch(`/api/reviews?targetId=${id}`);
        const data = await res.json();
        setReviews(res.ok && Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setReviewsLoading(false);
      }
    }
    fetchReviews();
    setReviewSubmitted(false);
    setReviewAuthor('');
    setReviewText('');
    setReviewRating(10);
    setSelectedGalleryIndex(0);
  }, [id]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!reviewAuthor || !reviewText) return;

    const newReview = {
      id: `rev-${Date.now()}`,
      targetId: id,
      author: reviewAuthor,
      rating: parseInt(reviewRating),
      text: reviewText,
      date: new Date().toISOString().split('T')[0],
      status: 'approved'
    };

    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
      setReviews([newReview, ...reviews]);
      setReviewSubmitted(true);
      setReviewAuthor('');
      setReviewText('');
      setReviewRating(10);
    } catch (err) {
      console.error("Failed to submit review:", err);
    }
  };

  // Retrieve correct item
  let item = null;
  if (isBoarding) {
    item = boardings.find(b => b.id === id);
  } else if (isTaxi) {
    item = taxis.find(t => t.id === id);
  } else if (isVet) {
    item = vets.find(v => v.id === id);
  } else {
    item = hotels.find(h => h.id === id);
  }

  const isUtility = isTaxi || isVet;

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
        <h2 className="text-2xl font-bold font-title text-gray-850">Tesis bulunamadı</h2>
        <button onClick={() => onViewChange('home')} className="mt-4 bg-brand-navy text-white px-6 py-2.5 rounded-full font-bold text-sm">Ana Sayfaya Dön</button>
      </div>
    );
  }

  // Calculate dynamic Trust Score
  const approvedComplaints = complaints.filter(c => c.targetId === item.id && c.status === 'approved');
  const trustScore = item.verified === false
    ? null
    : Math.max(1.0, (item.baseTrustScore ?? 9.5) - (approvedComplaints.length * 0.5)).toFixed(1);
  const shouldShowGallery = !isTaxi && !isVet;
  const galleryFallbacks = isBoarding ? boardingGalleryFallbacks : hotelGalleryFallbacks;
  const galleryImages = Array.from(new Set([item.imageUrl, ...(item.galleryImages || []), ...galleryFallbacks].filter(Boolean))).slice(0, 6);
  const selectedGalleryImage = galleryImages[Math.min(selectedGalleryIndex, galleryImages.length - 1)] || item.imageUrl;
  const amenityGroups = makeAmenityGroups(item, isBoarding);

  // SEO/GEO/VEO JSON-LD Schema Generator
  useEffect(() => {
    // Clean old script if exists
    const oldScript = document.getElementById('jsonld-schema');
    if (oldScript) {
      oldScript.remove();
    }

    // Generate JSON-LD object
    let jsonLd = {};

    if (isBoarding) {
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": item.name,
        "image": item.imageUrl,
        "telephone": item.phone,
        "email": item.email,
        "url": item.website,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": item.district,
          "addressRegion": item.city,
          "addressCountry": "TR"
        },
        "description": item.description,
        "priceRange": "$$",
        "additionalType": "https://schema.org/AnimalShelter"
      };
    } else {
      // Hotel Schema
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": item.name,
        "image": item.imageUrl,
        "telephone": item.phone,
        "email": item.email,
        "url": item.website,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": item.district,
          "addressRegion": item.city,
          "addressCountry": "TR"
        },
        "description": item.description,
        "starRating": {
          "@type": "Rating",
          "ratingValue": item.suitability === 3 ? "5" : item.suitability === 2 ? "4" : "3"
        },
        "amenityFeature": item.features.map(feat => ({
          "@type": "LocationFeatureSpecification",
          "name": feat,
          "value": true
        }))
      };
    }

    // Embed FAQ to support VEO/Voice search directly
    if (item.faq && item.faq.length > 0) {
      jsonLd.mainEntity = item.faq.map(qna => ({
        "@type": "Question",
        "name": qna.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": qna.a
        }
      }));
      jsonLd["@type"] = ["Hotel", "FAQPage"]; 
    }

    // Create script element
    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById('jsonld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [item, isBoarding]);

  // Handle reporting form submission
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    addCorrection({
      hotelId: item.id,
      hotelName: item.name,
      text: feedbackText,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    });

    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackOpen(false);
      setFeedbackSubmitted(false);
      setFeedbackText('');
    }, 2500);
  };

  // Handle complaint submission
  const handleSubmitComplaint = (e) => {
    e.preventDefault();
    if (!complaintText.trim() || !complaintAuthor.trim()) return;

    addComplaint({
      targetId: item.id,
      targetName: item.name,
      author: complaintAuthor,
      text: complaintText,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    });

    setComplaintSubmitted(true);
    setTimeout(() => {
      setComplaintOpen(false);
      setComplaintSubmitted(false);
      setComplaintText('');
      setComplaintAuthor('');
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-6 flex items-center gap-1.5 font-medium">
        <span className="cursor-pointer hover:text-brand-navy" onClick={() => onViewChange('home')}>Ana Sayfa</span>
        <span>/</span>
        <span className="cursor-pointer hover:text-brand-navy" onClick={() => onViewChange(isBoarding ? 'boardings' : 'accommodations')}>
          {isBoarding ? 'Güvenle Bırak' : 'Patiyle Konakla'}
        </span>
        <span>/</span>
        <span className="text-gray-900 font-semibold">{item.name}</span>
      </div>

      {/* Hero Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 space-y-3">
          {isVet ? (
            <div className="bg-gradient-to-br from-brand-navy/5 via-brand-cream/30 to-red-50/40 border-2 border-brand-navy/15 rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-6 h-full min-h-[380px]">
              <div>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-xs animate-pulse flex items-center gap-1">
                    🚨 7/24 ACİL SERVİS
                  </span>
                  <span className="bg-brand-navy text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1">
                    <VerifiedBadge className="w-4 h-4 text-white" />
                    <span>Doğrulanmış Klinik</span>
                  </span>
                </div>

                <h2 className="font-title text-2xl md:text-3xl font-bold text-gray-950 mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>

                <div className="space-y-3 bg-white p-5 rounded-2xl border border-brand-navy/10 shadow-xs">
                  <div className="flex items-start gap-2.5 text-sm">
                    <span className="text-lg">📍</span>
                    <div>
                      <strong className="text-gray-900 block text-xs uppercase tracking-wider font-bold">Klinik Adresi:</strong>
                      <span className="text-gray-700 font-medium">{item.address}</span>
                    </div>
                  </div>
                  {item.phone && (
                    <div className="flex items-center gap-2.5 text-sm pt-2.5 border-t border-brand-beige">
                      <span className="text-lg">📞</span>
                      <div>
                        <strong className="text-gray-900 block text-xs uppercase tracking-wider font-bold">Acil İletişim:</strong>
                        <a href={`tel:${item.phone}`} className="text-brand-navy font-bold text-base hover:underline">{item.phone}</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-beige/50">
                {item.features?.map((feat, idx) => (
                  <span key={idx} className="text-xs bg-brand-beige text-brand-navy px-3 py-1 rounded-full font-bold">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-72 md:h-[450px] bg-gray-200 rounded-3xl overflow-hidden shadow-sm relative">
              <img src={shouldShowGallery ? selectedGalleryImage : item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
            
              <div className={`absolute top-4 left-4 text-white text-xs px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1 shadow-md ${item.verified === false ? 'bg-amber-600' : 'bg-brand-navy'}`}>
                {item.verified === false ? <AlertIcon className="w-4 h-4 text-white" /> : <VerifiedBadge className="w-4 h-4 text-white" />}
                <span>{item.verified === false ? 'Doğrulama Bekliyor' : 'Doğrulanmış Tesis'}</span>
              </div>

              {/* Dynamic Badge for Suitability or Boarding category */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">
                {isBoarding ? item.category : `Dost Uygunluk Seviyesi: Seviye ${item.suitability}`}
              </div>
            </div>
          )}

          {shouldShowGallery && (
            <div className="grid grid-cols-5 gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedGalleryIndex(index)}
                  className={`relative h-16 md:h-20 rounded-2xl overflow-hidden border-2 transition-all bg-gray-100 ${
                    selectedGalleryIndex === index ? 'border-brand-navy shadow-sm' : 'border-transparent hover:border-brand-navy/40'
                  }`}
                  aria-label={`${item.name} galeri görseli ${index + 1}`}
                >
                  <img src={image} alt={`${item.name} galeri ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Info Box Card */}
        <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">
              {isBoarding ? 'Bakım ve Konaklama' : item.type}
            </span>
            <h1 className="font-title text-2xl font-bold text-gray-950 mt-1">{item.name}</h1>
            
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <LocationIcon className="w-4 h-4 text-brand-earth" />
              <span>{item.city}, {item.district}</span>
            </p>

            {/* Pati Güven Endeksi (Trust Index) - Trustpilot style */}
            <div className="flex items-center gap-3 mt-4 bg-brand-navy-light/40 border border-brand-navy/10 rounded-2xl p-3.5">
              <span className="text-2xl">🛡️</span>
              <div className="text-left">
                <span className="text-4xs font-extrabold text-gray-400 block uppercase tracking-wider">Pati Güven Endeksi</span>
                <div className="flex items-center gap-2 mt-0.5">
                  {trustScore === null ? (
                    <span className="text-2xs font-bold text-amber-700">İşletme teyidi bekleniyor</span>
                  ) : (
                    <>
                      <span className={`text-sm font-black px-2 py-0.5 rounded text-white shadow-xs ${
                        trustScore >= 9.0 ? 'bg-brand-green' : trustScore >= 7.0 ? 'bg-amber-500' : 'bg-red-650'
                      }`}>
                        {trustScore} / 10
                      </span>
                      <span className="text-2xs font-bold text-gray-700">
                        {trustScore >= 9.0 ? 'Tam Güvenilir' : trustScore >= 7.0 ? 'Doğrulanmış' : 'Dikkat Gerekli'}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Suitability Level Info Card (For Hotels only) */}
            {!isBoarding && (
              <div className="bg-brand-navy-light/30 border border-brand-navy/20 rounded-2xl p-4 mt-4">
                <span className="text-xs font-bold text-brand-navy block mb-1">
                  {item.suitability === 3 ? '🏆 Seviye 3: Deneyim Sunuyor' : item.suitability === 2 ? '🌱 Seviye 2: Evcil Hayvan Dostu' : '🐾 Seviye 1: Evcil Hayvan Kabul Ediyor'}
                </span>
                <p className="text-3xs text-gray-600 leading-normal">
                  {item.suitability === 3 
                    ? 'Evcil hayvanlara özel plaj/havuz, mama menüsü, yatak, 7/24 veteriner desteği vb. üst düzey deneyimler sunulur.'
                    : item.suitability === 2
                    ? 'Odada mama kabı, bahçe kullanım alanı ve açık restorana tasmalı kabul gibi temel pet kolaylıkları sağlar.'
                    : 'Evcil hayvan kabulüne izin verir ancak mama kabı, yatak vb. hizmetler bulunmaz, kısıtlamalar mevcuttur.'
                  }
                </p>
                <button
                  onClick={() => onViewChange('methodology')}
                  className="text-3xs text-brand-navy font-bold underline mt-2 hover:opacity-80"
                >
                  Kriterleri Gör &rarr;
                </button>
              </div>
            )}

            {/* Boarding Info Card */}
            {isBoarding && (
              <div className="space-y-3 mt-4 text-sm text-gray-700">
                <div className="flex justify-between py-1.5 border-b border-brand-beige">
                  <span className="text-gray-500">Konaklama Modeli:</span>
                  <span className="font-semibold text-right text-xs">{item.boardingModel}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-brand-beige">
                  <span className="text-gray-500">Kamera Desteği:</span>
                  <span className="font-semibold text-xs">{item.cameraSupport ? '✔️ Canlı HD' : '❌ Bulunmuyor'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-brand-beige">
                  <span className="text-gray-500">Anlaşmalı Veteriner:</span>
                  <span className="font-semibold text-xs text-right max-w-[150px]">{item.accreditedVet}</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-3xs text-gray-400">Son Doğrulama: {item.lastVerified}</span>
              <span className="text-3xs text-gray-400">Kaynak: {item.infoSource}</span>
            </div>
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full block text-center font-bold py-3 rounded-full text-sm font-title shadow-sm transition-colors text-white border-2 border-brand-navy ${
                'bg-brand-navy hover:bg-brand-navy-hover'
              }`}
            >
              {isBoarding ? 'İşletmeyle İletişime Geç' : 'Resmi Web Sitesinden Rezervasyon Yap'}
            </a>
            
            <button
              onClick={() => setFeedbackOpen(true)}
              className="w-full border-2 border-brand-navy/35 hover:border-brand-navy text-brand-navy font-bold py-2.5 rounded-full text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>🔔</span> Bilgiler Değiştiyse Bildir
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="border-b border-brand-beige mb-8 flex space-x-6 text-sm font-semibold overflow-x-auto">
        <button
          onClick={() => setActiveTab('editorial')}
          className={`pb-4 border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'editorial' ? 'border-brand-navy text-brand-navy font-bold' : 'border-transparent text-gray-500 hover:text-gray-850'
          }`}
        >
          Editoryal İnceleme
        </button>
        <button
          onClick={() => setActiveTab('policies')}
          className={`pb-4 border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'policies' ? 'border-brand-navy text-brand-navy font-bold' : 'border-transparent text-gray-500 hover:text-gray-850'
          }`}
        >
          Evcil Hayvan Politikası & Kurallar
        </button>
        {!isUtility && (
          <button
            onClick={() => setActiveTab('amenities')}
            className={`pb-4 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'amenities' ? 'border-brand-navy text-brand-navy font-bold' : 'border-transparent text-gray-500 hover:text-gray-850'
            }`}
          >
            {isBoarding ? 'Tesis Özellikleri' : 'Otel Özellikleri'}
          </button>
        )}
        <button
          onClick={() => setActiveTab('faq')}
          className={`pb-4 border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'faq' ? 'border-brand-navy text-brand-navy font-bold' : 'border-transparent text-gray-500 hover:text-gray-850'
          }`}
        >
          Sıkça Sorulan Sorular (SSS)
        </button>
        <button
          onClick={() => setActiveTab('complaints')}
          className={`pb-4 border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'complaints' ? 'border-brand-navy text-brand-navy font-bold' : 'border-transparent text-gray-500 hover:text-gray-850'
          }`}
        >
          Güven & Şikayetler ({approvedComplaints.length})
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-6 md:p-8 shadow-sm">
        {/* Tab 1: Editorial */}
        {activeTab === 'editorial' && (
          <div className="space-y-8">
            {/* Editorial Summary */}
            <div className="space-y-3">
              <h3 className="font-title text-xl font-bold text-gray-950">Editoryal İnceleme Özeti</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>

            {/* Why Chosen */}
            {item.whySelected && (
              <div className="bg-brand-navy-light/35 border-l-4 border-brand-navy p-5 rounded-r-2xl">
                <h4 className="font-title font-bold text-brand-navy text-base mb-1">Patiyle Seyahat Neden Bu Tesisi Seçti?</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.whySelected}</p>
              </div>
            )}

            {/* Suitable / Not Suitable */}
            {!isBoarding && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-beige">
                <div className="space-y-3">
                  <h4 className="font-title font-bold text-brand-navy text-sm flex items-center gap-1.5">
                    <CheckIcon className="w-5 h-5" /> Kimler İçin Uygun?
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600 list-disc pl-5">
                    {item.suitableFor.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-title font-bold text-brand-navy text-sm flex items-center gap-1.5">
                    <XIcon className="w-5 h-5" /> Kimler İçin Uygun Olmayabilir?
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600 list-disc pl-5">
                    {item.notSuitableFor.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {/* Boarding Program */}
            {isBoarding && item.dailyProgram && (
              <div className="space-y-3 pt-4 border-t border-brand-beige">
                <h4 className="font-title font-bold text-gray-900 text-sm">Günlük Bakım ve Aktivite Programı</h4>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.dailyProgram}</p>
              </div>
            )}

            {/* Editor's Note */}
            {item.editorNote && (
              <div className="bg-brand-navy-light/30 border-l-4 border-brand-navy p-5 rounded-r-2xl mt-6">
                <h4 className="font-title font-bold text-brand-green-dark text-sm mb-1">🐾 Editörümüzün Notu</h4>
                <p className="text-xs text-gray-700 leading-relaxed">{item.editorNote}</p>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Policies */}
        {activeTab === 'policies' && (
          <div className="space-y-8">
            <h3 className="font-title text-xl font-bold text-gray-950 pb-2 border-b border-brand-beige">
              {isBoarding ? 'Kabul Koşulları ve Acil Durum Bilgileri' : 'Evcil Hayvan Konaklama Politikası'}
            </h3>

            {!isBoarding ? (
              /* HOTEL POLICIES GRID */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
                <div>
                  <h4 className="font-title font-bold text-gray-800 border-b border-brand-beige pb-1 mb-3">Temel Kabul Kriterleri</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span className="text-gray-500">Kabul Edilen Hayvanlar:</span> <span className="font-semibold">{item.allowedPets.join(', ').replace('dog', 'Köpek').replace('cat', 'Kedi').replace('bird', 'Kuş').replace('other', 'Diğer')}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Kabul Edilmeyen Hayvanlar:</span> <span className="font-semibold">{item.disallowedPets ? item.disallowedPets.join(', ') : 'Belirtilmedi'}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Kilo Sınırı:</span> <span className="font-semibold">{item.weightLimit > 0 ? `${item.weightLimit} kg` : 'Kilo Sınırı Yok'}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Oda Başına Limit:</span> <span className="font-semibold">{item.maxPetsPerRoom} Evcil Hayvan</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Irk Kısıtlaması:</span> <span className="font-semibold text-right text-xs max-w-[200px]">{item.breedRestrictions}</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-title font-bold text-gray-800 border-b border-brand-beige pb-1 mb-3">Ücret ve Evraklar</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span className="text-gray-500">Evcil Hayvan Ücreti:</span> <span className="font-semibold text-brand-earth-dark">{item.extraFee === 'no' ? 'Ek Ücretsiz' : item.extraFee}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Hasar Depozitosu:</span> <span className="font-semibold">{item.depositInfo}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">İstenen Belgeler:</span> <span className="font-semibold text-right text-xs max-w-[200px]">{item.requiredDocs}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Odada Yalnız Kalabilir mi:</span> <span className="font-semibold">{item.canLeaveInRoomAlone ? '✔️ Evet, kalabilir' : '❌ Hayır, bırakılamaz'}</span></li>
                  </ul>
                </div>

                <div className="md:col-span-2 pt-4 border-t border-brand-beige">
                  <h4 className="font-title font-bold text-gray-800 mb-3">Ortak Alan Kullanım Kuralları</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600 bg-brand-cream/55 p-4 rounded-xl">
                    <div>
                      <span className="font-bold text-gray-850 block mb-1">Restoran & Kahvaltı</span>
                      <span>{item.rules?.restaurant || 'Yasak'}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-850 block mb-1">Plaj / Havuz</span>
                      <span>{item.rules?.pool || 'Yasak'} / {item.rules?.beach || 'Yasak'}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-850 block mb-1">Tasarım & Ekipman</span>
                      <span>Mama kabı ve yatak otel tarafından odada sağlanır. Ortak alanda tasmalı olması mecburidir.</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 pt-4">
                  <h4 className="font-title font-bold text-gray-850 mb-2">Yakındaki Veterinerler</h4>
                  <p className="text-xs text-gray-600 flex items-center gap-1.5">
                    <span className="text-base">🏥</span>
                    <span>{item.veterinarySupport}</span>
                  </p>
                </div>
              </div>
            ) : (
              /* BOARDING POLICIES GRID */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
                <div>
                  <h4 className="font-title font-bold text-gray-800 border-b border-brand-beige pb-1 mb-3">Kabul Kriterleri</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span className="text-gray-500">Kabul Edilen Hayvanlar:</span> <span className="font-semibold">{item.allowedPets.join(', ').replace('dog', 'Köpek').replace('cat', 'Kedi')}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Aşı ve Evrak Zorunluluğu:</span> <span className="font-semibold text-right text-xs max-w-[200px]">{item.requiredDocs}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Kısırlaştırma Şartı:</span> <span className="font-semibold">{item.neuteringRequired}</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Mizaç/Agresyon Politikası:</span> <span className="font-semibold text-right text-xs max-w-[200px]">{item.aggressionPolicy}</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-title font-bold text-gray-800 border-b border-brand-beige pb-1 mb-3">Güvenlik ve Sağlık Kontrolü</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span className="text-gray-500">Gece Nöbetçi Personel:</span> <span className="font-semibold">✔️ Tesiste mevcuttur</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Yangın ve Tahliye Planı:</span> <span className="font-semibold">✔️ Doğrulandı ve Ruhsatlandırıldı</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Günlük Bilgilendirme:</span> <span className="font-semibold">Fotoğraf & Video gönderilir</span></li>
                    <li className="flex justify-between"><span className="text-gray-500">Acil Durum Protokolü:</span> <span className="font-semibold text-right text-xs max-w-[200px]">En yakın hayvan hastanesine ambulansla nakil.</span></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Amenities */}
        {activeTab === 'amenities' && !isUtility && (
          <div className="space-y-7">
            <div className="border-b border-brand-beige pb-4">
              <h3 className="font-title text-2xl font-bold text-gray-950">
                {isBoarding ? 'Tesis Özellikleri' : 'Otel Özellikleri'}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Editör doğrulamasıyla öne çıkan hizmetler, pet politikaları ve tesis olanakları.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-8">
              {amenityGroups.map(group => (
                <section key={group.title} className="space-y-3">
                  <h4 className="font-title font-bold text-brand-navy text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-navy-light text-brand-navy flex items-center justify-center text-xs font-black">
                      {group.icon}
                    </span>
                    {group.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {group.items.slice(0, 8).map(feature => {
                      const isPaid = /ücret|depozito|provizyon|₺|tl/i.test(feature) && !/ek ücret yok/i.test(feature);
                      return (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-650 leading-relaxed">
                          <CheckIcon className="w-4 h-4 text-gray-900 mt-0.5 shrink-0" />
                          <span>
                            {feature}
                            {isPaid && (
                              <span className="ml-1.5 bg-brand-yellow/35 text-brand-earth-dark px-1.5 py-0.5 rounded text-4xs font-extrabold align-middle">
                                Ücretli
                              </span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: FAQ */}
        {activeTab === 'faq' && (
          <div className="space-y-6">
            <h3 className="font-title text-xl font-bold text-gray-950 pb-2 border-b border-brand-beige">
              Sık Sorulan Sorular
            </h3>

            {item.faq && item.faq.length > 0 ? (
              <div className="space-y-4">
                {item.faq.map((qna, idx) => (
                  <div key={idx} className="border-b border-brand-beige pb-4">
                    <h4 className="font-bold text-gray-850 text-sm md:text-base flex items-start gap-2">
                      <span className="text-brand-orange">S:</span>
                      <span>{qna.q}</span>
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-2 pl-6 leading-relaxed">
                      {qna.a}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">Bu tesise ait sık sorulan sorular bulunmamaktadır.</p>
            )}
          </div>
        )}

        {/* Tab 4: Complaints & Trust Record */}
        {activeTab === 'complaints' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-3 border-b border-brand-beige gap-3">
              <div>
                <h3 className="font-title text-xl font-bold text-gray-950">Tesis Güvenlik Kaydı ve Şikayetler</h3>
                <p className="text-xs text-gray-500 mt-1">Bu işletme hakkında doğrulanmış olumsuz geri bildirimler listelenir.</p>
              </div>
              <button
                onClick={() => setComplaintOpen(true)}
                className="bg-brand-navy hover:bg-brand-navy-hover text-white text-xs font-bold px-5 py-2.5 rounded-full font-title shadow-sm whitespace-nowrap flex items-center gap-1.5"
              >
                <span>⚠️</span> Olumsuz Deneyim / Şikayet Bildir
              </button>
            </div>

            <div className="bg-brand-navy-light/30 border border-brand-navy/20 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
              <strong>Şikayet Değerlendirme Politikası:</strong> Kullanıcıların ilettiği şikayetler editörlerimizce otel yönetimi nezdinde incelenir. Kanıtlanmış ve doğrulanmış her şikayet kaydı platformda listelenir ve tesisin <strong>Pati Güven Endeksini (Güven Puanı) 0.5 puan düşürür</strong>.
            </div>

            {approvedComplaints.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 border border-dashed rounded-2xl text-gray-500 text-sm space-y-2">
                <span className="text-3xl block">🛡️</span>
                <p className="font-semibold text-gray-800">Doğrulanmış Şikayet Bulunmamaktadır</p>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">Tesisin şu ana kadar doğrulanmış herhangi bir taahhüt ihlali veya olumsuz deneyim kaydı bulunmamaktadır.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {approvedComplaints.map(comp => (
                  <div key={comp.id} className="border-2 border-brand-navy/10 p-5 rounded-3xl bg-brand-navy-light/10 text-left space-y-2 shadow-2xs">
                    <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                      <span className="font-bold text-gray-700">👤 {comp.author} (Doğrulanmış Misafir)</span>
                      <span>📅 {comp.date}</span>
                    </div>
                    <p className="text-sm text-gray-750 leading-relaxed italic font-light">
                      "{comp.text}"
                    </p>
                    <div className="text-3xs text-brand-orange font-bold flex items-center gap-1 bg-brand-orange-light w-fit px-2 py-0.5 rounded border border-brand-orange/20">
                      <span>⚠️</span> Editör Doğrulamalı Politika İhlali (-0.5 Puan)
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Horizontal Banner ad spacer */}
      <AdBanner type="banner" className="mt-8" />

      {/* Interlinked Travel Guides box */}
      {!isBoarding && (
        <div className="mt-12 bg-brand-navy-light border-2 border-brand-navy/15 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <span className="bg-brand-navy text-white text-3xs font-bold uppercase px-3 py-1 rounded-full tracking-wider">İlgili Rehber</span>
            <h4 className="font-title text-lg font-bold text-brand-navy mt-2">Dostunuzla yola çıkmadan önce rehberimizi okudunuz mu?</h4>
            <p className="text-xs text-gray-600 mt-1 leading-normal">
              Uçuş kuralları, çanta seçimleri, Leishmania sivrisinek riskleri ve seyahat kontrol listelerini içeren güncel rehberlerimize göz atın.
            </p>
          </div>
          <button
            onClick={() => onViewChange('guides')}
            className="bg-brand-navy hover:bg-brand-navy-hover text-white px-6 py-2.5 rounded-full text-xs font-bold font-title border-2 border-brand-navy whitespace-nowrap transition-colors"
          >
            Seyahat Rehberlerini Oku
          </button>
        </div>
      )}

      {/* Feedback Correction Form Modal */}
      {feedbackOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl border-2 border-brand-navy p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setFeedbackOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold focus:outline-none"
            >
              &times;
            </button>

            {feedbackSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <span className="text-5xl block animate-bounce">📬</span>
                <h3 className="font-title font-bold text-lg text-brand-green">Bildiriminiz Alındı!</h3>
                <p className="text-sm text-gray-600">
                  Düzeltme talebiniz editörlerimize ulaştırılmıştır. Gerekli doğrulamalar yapıldıktan sonra güncelleme yansıtılacaktır. Teşekkür ederiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-brand-beige pb-3 mb-2">
                  <span className="text-xl">🔔</span>
                  <h3 className="font-title font-bold text-lg text-gray-900">Bilgi Düzeltme Bildirimi</h3>
                </div>

                <p className="text-xs text-gray-500 leading-normal">
                  <strong>{item.name}</strong> hakkında değiştiğini fark ettiğiniz ücret, kilo sınırı veya kuralları bize yazın. Editörlerimiz otel yönetimi ile iletişime geçerek bilgileri güncelleyecektir.
                </p>

                <div className="space-y-1">
                  <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Düzeltme Notu</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Örn: Evcil hayvan konaklama ücreti artık gecelik 300 TL olmuştur."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full text-sm border-2 border-brand-navy rounded-xl p-3 outline-none focus:ring-0"
                  ></textarea>
                </div>

                <div className="flex gap-2 justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setFeedbackOpen(false)}
                    className="border-2 border-gray-300 px-5 py-2 rounded-full text-xs font-bold text-gray-700 hover:bg-gray-50"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    className="bg-brand-navy hover:bg-brand-navy-hover text-white px-6 py-2 rounded-full text-xs font-bold border border-brand-navy/10"
                  >
                    Editöre Gönder
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Dispute Complaint Form Modal */}
      {complaintOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl border-2 border-brand-navy p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setComplaintOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold focus:outline-none"
            >
              &times;
            </button>

            {complaintSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <span className="text-5xl block animate-bounce">📬</span>
                <h3 className="font-title font-bold text-lg text-brand-orange">Şikayetiniz Kaydedildi!</h3>
                <p className="text-sm text-gray-600">
                  Şikayet bildiriminiz editör ekibimize ulaşmıştır. Otel yönetimi ile görüşülüp teyit edildikten sonra yayına alınarak güven puanına yansıtılacaktır.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitComplaint} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-brand-beige pb-3 mb-2 text-brand-orange-hover">
                  <span className="text-xl">⚠️</span>
                  <h3 className="font-title font-bold text-lg text-gray-900">Olumsuz Deneyim / Şikayet Bildir</h3>
                </div>

                <p className="text-2xs text-gray-500 leading-normal">
                  <strong>{item.name}</strong> bünyesinde yaşadığınız taahhüt ihlallerini (örn: belirtilenden yüksek ücret alınması, pet plajına izin verilmemesi, kötü muamele vb.) yazın. Bildiriminiz editör teyidinden geçerek güven skoruna etki edecektir.
                </p>

                <div className="space-y-1">
                  <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Adınız Soyadınız / Rumuz</label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ahmet Y."
                    value={complaintAuthor}
                    onChange={(e) => setComplaintAuthor(e.target.value)}
                    className="w-full text-sm border-2 border-brand-navy rounded-xl p-2.5 outline-none focus:ring-0"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-2xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Şikayet Detayı</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Yaşadığınız olumsuz deneyimi detaylıca tarif ediniz..."
                    value={complaintText}
                    onChange={(e) => setComplaintText(e.target.value)}
                    className="w-full text-sm border-2 border-brand-navy rounded-xl p-3 outline-none focus:ring-0"
                  ></textarea>
                </div>

                <div className="flex gap-2 justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setComplaintOpen(false)}
                    className="border-2 border-gray-300 px-5 py-2 rounded-full text-xs font-bold text-gray-700 hover:bg-gray-50"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    className="bg-brand-navy hover:bg-brand-navy-hover text-white px-6 py-2 rounded-full text-xs font-bold border border-brand-navy/10"
                  >
                    Şikayeti İlet
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
