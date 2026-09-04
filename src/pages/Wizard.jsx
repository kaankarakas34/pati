import React, { useState, useEffect } from 'react';
import { DogIcon, CatIcon, BirdIcon, OtherIcon, VerifiedBadge, LocationIcon } from '../components/PetIcons';

export default function Wizard({ onViewChange }) {
  const [step, setStep] = useState(1);
  
  // Answers state
  const [answers, setAnswers] = useState({
    intent: '', // 'together' (stay with pet) or 'leave' (pet hotel)
    petType: '', // 'dog', 'cat', 'bird', 'other'
    weight: '', // 'small' (<10kg), 'medium' (10-20kg), 'large' (no-limit)
    netting: '', // 'yes', 'no'
    housing: '', // 'cagefree', 'glass', 'any'
    amenities: [], // selected amenities/tags
  });

  const [candidates, setCandidates] = useState({ items: [], loading: false, error: '' });
  const [attempt, setAttempt] = useState(0);
  const answersKey = JSON.stringify(answers);
  useEffect(() => {
    if (step !== 5) return;
    const controller = new AbortController();
    setCandidates({ items: [], loading: true, error: '' });
    const params = new URLSearchParams({ envelope: 'true', limit: '60', pet: answers.petType });
    if (answers.intent === 'together') {
      if (answers.petType === 'dog') params.set('weightLimit', answers.weight === 'large' ? '0' : answers.weight === 'small' ? '10' : '20');
      if (answers.netting === 'yes') params.append('quizTag', 'sineklik');
    } else if (answers.housing !== 'any') {
      params.append('quizTag', answers.housing === 'glass' ? 'cam-oda' : 'kafessiz');
    }
    fetch(`/api/${answers.intent === 'together' ? 'hotels' : 'boardings'}?${params}`, { signal: controller.signal })
      .then(async response => {
        const page = await response.json();
        if (!response.ok || !Array.isArray(page.data)) throw new Error(page.error || 'Sonuçlar yüklenemedi.');
        if (!controller.signal.aborted) setCandidates({ items: page.data, loading: false, error: '' });
      })
      .catch(error => { if (!controller.signal.aborted) setCandidates({ items: [], loading: false, error: error.message }); });
    return () => controller.abort();
  }, [step, answersKey, attempt]);

  const resetWizard = () => {
    setAnswers({
      intent: '',
      petType: '',
      weight: '',
      netting: '',
      housing: '',
      amenities: [],
    });
    setStep(1);
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const selectIntent = (val) => {
    setAnswers({ ...answers, intent: val });
    handleNextStep();
  };

  const selectPetType = (val) => {
    setAnswers({ ...answers, petType: val });
    handleNextStep();
  };

  const selectWeight = (val) => {
    setAnswers({ ...answers, weight: val });
    handleNextStep();
  };

  const selectNetting = (val) => {
    setAnswers({ ...answers, netting: val });
    handleNextStep();
  };

  const selectHousing = (val) => {
    setAnswers({ ...answers, housing: val });
    handleNextStep();
  };

  const toggleAmenity = (tag) => {
    if (answers.amenities.includes(tag)) {
      setAnswers({
        ...answers,
        amenities: answers.amenities.filter(t => t !== tag)
      });
    } else {
      setAnswers({
        ...answers,
        amenities: [...answers.amenities, tag]
      });
    }
  };

  // Tag scoring algorithm
  const getResults = () => {
    // Generate tags based on choices
    const queryTags = [];
    if (answers.intent === 'together') {
      queryTags.push('birlikte');
      if (answers.petType) queryTags.push(answers.petType);
      if (answers.weight === 'large') queryTags.push('buyuk-irk');
      if (answers.weight === 'small') queryTags.push('kucuk-irk');
      
      answers.amenities.forEach(tag => queryTags.push(tag));

      const scoredHotels = candidates.items.map(hotel => {
        let matches = 0;
        queryTags.forEach(tag => {
          if (hotel.quizTags && hotel.quizTags.includes(tag)) {
            matches += 1;
          }
        });
        const matchPercentage = queryTags.length > 0 
          ? Math.round((matches / queryTags.length) * 100) 
          : 0;

        return { ...hotel, matchPercentage };
      });

      // Sort by score
      return scoredHotels
        .filter(h => h.allowedPets?.includes(answers.petType) && (answers.weight !== 'large' || h.weightLimit === 0))
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
        .slice(0, 3);

    } else {
      // Boarding
      queryTags.push('birak');
      if (answers.petType) queryTags.push(answers.petType);
      if (answers.housing === 'cagefree') queryTags.push('kafessiz');
      if (answers.housing === 'glass') queryTags.push('cam-oda');
      
      answers.amenities.forEach(tag => queryTags.push(tag));

      const scoredBoardings = candidates.items.map(boarding => {
        let matches = 0;
        queryTags.forEach(tag => {
          if (boarding.quizTags && boarding.quizTags.includes(tag)) {
            matches += 1;
          }
        });
        const matchPercentage = queryTags.length > 0 
          ? Math.round((matches / queryTags.length) * 100) 
          : 0;

        return { ...boarding, matchPercentage, isBoarding: true };
      });

      return scoredBoardings
        .filter(b => b.allowedPets?.includes(answers.petType))
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
        .slice(0, 3);
    }
  };

  const results = step === 5 ? getResults() : [];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
      <div className="bg-white border border-brand-beige rounded-3xl p-8 md:p-12 shadow-sm">
        
        {/* Step Indicator */}
        {step < 5 && (
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-gray-400 mb-2.5">
              <span className="text-brand-navy font-title">SIHİRBAZ: ADIM {step} / 4</span>
              <span>%{step * 25} Tamamlandı</span>
            </div>
            <div className="w-full bg-brand-beige h-2 rounded-full overflow-hidden">
              <div 
                className="bg-brand-green h-full transition-all duration-300"
                style={{ width: `${step * 25}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Step 1: Intent */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-4xl">🔮</span>
              <h2 className="font-title text-2xl font-bold text-brand-navy">Bana Uygun Oteli Sen Bul</h2>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Dostunuzun cinsine, boyutuna ve ihtiyaçlarına en uygun doğrulanmış tesisleri birkaç soruda filtreleyelim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <button
                onClick={() => selectIntent('together')}
                className="border-2 border-brand-beige hover:border-brand-green p-6 rounded-2xl text-left hover:bg-brand-green-light/20 transition-all flex flex-col justify-between h-40 group"
              >
                <span className="text-3xl">🏨</span>
                <div>
                  <h3 className="font-title font-bold text-base text-gray-900 group-hover:text-brand-navy">Dostumla Birlikte Kalacağım</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">
                    Evcil hayvan kabul eden otel, villa, bungalov veya glamping tesislerini arıyorum.
                  </p>
                </div>
              </button>

              <button
                onClick={() => selectIntent('leave')}
                className="border-2 border-brand-beige hover:border-brand-earth p-6 rounded-2xl text-left hover:bg-brand-earth-light/20 transition-all flex flex-col justify-between h-40 group"
              >
                <span className="text-3xl">🏡</span>
                <div>
                  <h3 className="font-title font-bold text-base text-gray-900 group-hover:text-brand-navy-dark">Dostumu Güvenle Bırakacağım</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">
                    Kedi oteli, köpek oteli veya ev tipi bakım merkezlerini arıyorum.
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Pet Type */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="font-title text-xl font-bold text-gray-900 text-center">Hangi patili dostunuzla seyahat ediyorsunuz?</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => selectPetType('dog')}
                className="border-2 border-brand-navy/10 hover:border-brand-navy p-6 rounded-3xl flex flex-col items-center gap-3 hover:bg-brand-navy-light/40 transition-all"
              >
                <DogIcon className="w-12 h-12 text-brand-navy" />
                <span className="font-title font-bold text-sm text-gray-800">Köpek</span>
              </button>

              <button
                onClick={() => selectPetType('cat')}
                className="border-2 border-brand-navy/10 hover:border-brand-navy p-6 rounded-3xl flex flex-col items-center gap-3 hover:bg-brand-navy-light/40 transition-all"
              >
                <CatIcon className="w-12 h-12 text-brand-navy" />
                <span className="font-title font-bold text-sm text-gray-800">Kedi</span>
              </button>

              {answers.intent === 'together' && (
                <>
                  <button
                    onClick={() => selectPetType('bird')}
                    className="border-2 border-brand-navy/10 hover:border-brand-navy p-6 rounded-3xl flex flex-col items-center gap-3 hover:bg-brand-navy-light/40 transition-all"
                  >
                    <BirdIcon className="w-12 h-12 text-sky-600" />
                    <span className="font-title font-bold text-sm text-gray-800">Kuş</span>
                  </button>

                  <button
                    onClick={() => selectPetType('other')}
                    className="border-2 border-brand-navy/10 hover:border-brand-navy p-6 rounded-3xl flex flex-col items-center gap-3 hover:bg-brand-navy-light/40 transition-all"
                  >
                    <OtherIcon className="w-12 h-12 text-purple-600" />
                    <span className="font-title font-bold text-sm text-gray-800">Diğer Dostlar</span>
                  </button>
                </>
              )}
            </div>

            <div className="pt-4">
              <button onClick={handlePrevStep} className="text-xs text-gray-500 font-semibold hover:underline">&larr; Geri Dön</button>
            </div>
          </div>
        )}

        {/* Step 3: Size/Netting/Housing criteria */}
        {step === 3 && (
          <div className="space-y-6">
            
            {/* Case A: Together & Dog (Weight cap) */}
            {answers.intent === 'together' && answers.petType === 'dog' && (
              <div className="space-y-4">
                <h2 className="font-title text-xl font-bold text-gray-900 text-center">Köpeğinizin boyutu/ağırlığı nedir?</h2>
                <div className="space-y-2.5">
                  {[
                    { val: 'small', label: 'Küçük Irk (10 kg altı)' },
                    { val: 'medium', label: 'Orta Irk (10 - 20 kg)' },
                    { val: 'large', label: 'Büyük Irk (20 kg üstü - Ağırlık Sınırı Olmayanlar)' }
                  ].map(w => (
                    <button
                      key={w.val}
                      onClick={() => selectWeight(w.val)}
                      className="w-full border-2 border-brand-navy/10 hover:border-brand-navy p-4 rounded-2xl text-left font-semibold text-sm hover:bg-brand-navy-light/40"
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Case B: Together & Cat (Safety netting check) */}
            {answers.intent === 'together' && answers.petType === 'cat' && (
              <div className="space-y-4">
                <h2 className="font-title text-xl font-bold text-gray-900 text-center">Pencere veya balkonlarda özel sineklik/güvenlik teli olması kritik mi?</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => selectNetting('yes')}
                    className="border-2 border-brand-navy/10 hover:border-brand-navy p-6 rounded-2xl font-semibold text-sm hover:bg-brand-navy-light/40"
                  >
                    Evet, sineklik şart
                  </button>
                  <button
                    onClick={() => selectNetting('no')}
                    className="border-2 border-brand-navy/10 hover:border-brand-navy p-6 rounded-2xl font-semibold text-sm hover:bg-brand-navy-light/40"
                  >
                    Farketmez
                  </button>
                </div>
              </div>
            )}

            {/* Case C: Together & Bird/Other (Skip step) */}
            {answers.intent === 'together' && (answers.petType === 'bird' || answers.petType === 'other') && (
              <div className="text-center py-6 space-y-3">
                <p className="text-sm text-gray-600">Dostunuz için kafes içi temel güvenlik koşullarını sağlayan tesisleri listelemek için son adıma geçiyoruz.</p>
                <button onClick={handleNextStep} className="bg-brand-navy text-white px-6 py-2.5 rounded-full font-bold text-sm">Devam Et &rarr;</button>
              </div>
            )}

            {/* Case D: Boarding (Housing type check) */}
            {answers.intent === 'leave' && (
              <div className="space-y-4">
                <h2 className="font-title text-xl font-bold text-gray-900 text-center">Dostunuzun konaklayacağı alan tipi tercihi nedir?</h2>
                <div className="space-y-2.5">
                  {[
                    { val: 'cagefree', label: 'Kafessiz konaklama (Ev ortamı veya serbest odalar)' },
                    { val: 'glass', label: 'Bireysel şeffaf cam oda' },
                    { val: 'any', label: 'Farketmez' }
                  ].map(h => (
                    <button
                      key={h.val}
                      onClick={() => selectHousing(h.val)}
                      className="w-full border-2 border-brand-navy/10 hover:border-brand-navy p-4 rounded-2xl text-left font-semibold text-sm hover:bg-brand-navy-light/40"
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4">
              <button onClick={handlePrevStep} className="text-xs text-gray-500 font-semibold hover:underline">&larr; Geri Dön</button>
            </div>
          </div>
        )}

        {/* Step 4: Amenities (Multi-select checklist) */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="font-title text-xl font-bold text-gray-900 text-center">
              {answers.intent === 'together' 
                ? 'Tatilden beklentileriniz nelerdir? (Önemlileri seçin)' 
                : 'Sizin için en kritik bakım özellikleri hangileridir?'
              }
            </h2>

            {/* Together Amenities */}
            {answers.intent === 'together' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                {[
                  { tag: 'ucretsiz-pet', label: '💰 Ek Ücret Almayanlar' },
                  { tag: 'pet-plaji', label: '🏖️ Pet Plajı / Yüzme Alanı' },
                  { tag: 'pet-menusu', label: '🥩 Özel Pet Yemek Menüsü' },
                  { tag: 'bahceli', label: '🌳 Geniş Yeşil Bahçesi Olan' },
                  { tag: 'restoran-izni', label: '🍳 Restorana Giriş İzni' },
                  { tag: 'odada-yalniz', label: '🔑 Odada Yalnız Kalabilenler' }
                ].map(item => (
                  <button
                    key={item.tag}
                    type="button"
                    onClick={() => toggleAmenity(item.tag)}
                    className={`p-4 border rounded-xl text-left transition-all ${
                      answers.amenities.includes(item.tag)
                        ? 'border-brand-navy bg-brand-navy font-bold text-white'
                        : 'border-2 border-brand-navy/10 bg-white text-gray-700 hover:bg-brand-navy-light/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            {/* Boarding Amenities */}
            {answers.intent === 'leave' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                {[
                  { tag: 'canli-yayin', label: '📹 Canlı HD Kamera İzleme' },
                  { tag: '724-gozetim', label: '💂 7/24 Nöbetçi Personel' },
                  { tag: 'vet-gozetim', label: '🩺 Veteriner Kontrolü / Tıbbi Takip' },
                  { tag: 'transfer-var', label: '🚕 Transfer Hizmeti (Pet Taksi)' },
                  { tag: 'ilac-takip', label: '💊 Düzenli İlaç/Tedavi Takibi' },
                  { tag: 'bahceli-oyun', label: '🌳 Açık Oyun Bahçesi' }
                ].map(item => (
                  <button
                    key={item.tag}
                    type="button"
                    onClick={() => toggleAmenity(item.tag)}
                    className={`p-4 border rounded-xl text-left transition-all ${
                      answers.amenities.includes(item.tag)
                        ? 'border-brand-navy bg-brand-navy font-bold text-white'
                        : 'border-2 border-brand-navy/10 bg-white text-gray-700 hover:bg-brand-navy-light/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center pt-6 border-t border-brand-beige">
              <button onClick={handlePrevStep} className="text-xs text-gray-500 font-semibold hover:underline">&larr; Geri Dön</button>
              <button
                onClick={handleNextStep}
                className="bg-brand-navy hover:bg-brand-navy-hover text-white px-8 py-3 rounded-full font-bold border-2 border-brand-navy text-xs font-title shadow-sm"
              >
                Sonuçları Göster &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Results Display */}
        {step === 5 && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <span className="text-4xl">🎉</span>
              <h2 className="font-title text-2xl font-bold text-brand-navy">Sizin İçin En Uygun Tesisler</h2>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">Tercihlerinize göre önerilen tesisler.</p>
            </div>

            <div className="space-y-4">
              {candidates.loading ? <p role="status">Sonuçlar yükleniyor...</p> : candidates.error ? (
                <div><p role="alert">{candidates.error}</p><button className="underline" onClick={() => setAttempt(value => value + 1)}>Tekrar dene</button></div>
              ) : results.length === 0 ? (
                <div className="text-center py-6 text-gray-500 italic text-sm">Eşleşen tesis bulunamadı. Lütfen daha esnek kriterlerle sihirbazı tekrar deneyin.</div>
              ) : (
                results.map(res => (
                  <div
                    key={res.id}
                    onClick={() => onViewChange(res.isBoarding ? 'boarding-detail' : 'accommodation-detail', res.id)}
                    className="border-2 border-brand-navy/10 hover:border-brand-navy rounded-3xl overflow-hidden flex flex-col sm:flex-row cursor-pointer transition-all hover:shadow-md bg-white text-left"
                  >
                    <img src={res.imageUrl} alt={res.name} className="w-full sm:w-40 h-32 sm:h-auto object-cover" />
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-3xs font-extrabold text-brand-navy uppercase tracking-wider">
                            {res.isBoarding ? res.category : res.type}
                          </span>
                          <span className="text-xs font-black text-brand-navy bg-brand-navy-light px-2.5 py-1 rounded-full font-bold">
                            %{res.matchPercentage} Uyum
                          </span>
                        </div>
                        <h3 className="font-title text-base font-bold text-gray-950 mt-1">{res.name}</h3>
                        <p className="text-3xs text-gray-500 mt-1 flex items-center gap-0.5">
                          <LocationIcon className="w-3.5 h-3.5" /> {res.city}, {res.district}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center pt-3 border-t border-brand-beige mt-3">
                        <span className="text-3xs text-gray-400">Güven Puanı: <strong className="text-brand-navy">{res.baseTrustScore == null ? 'Belirtilmemiş' : `${res.baseTrustScore}/10`}</strong></span>
                        <span className="text-3xs text-brand-navy font-bold flex items-center gap-0.5">
                          {res.verified === true ? <><VerifiedBadge className="w-3.5 h-3.5" /> Doğrulandı</> : null}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-6 border-t border-brand-beige flex justify-between">
              <button onClick={resetWizard} className="border-2 border-gray-300 px-6 py-2.5 rounded-full font-bold text-xs text-gray-700 hover:bg-slate-50">Sıfırla & Yeniden Başla</button>
              <button onClick={() => onViewChange(answers.intent === 'together' ? 'accommodations' : 'boardings')} className="bg-brand-navy hover:bg-brand-navy-hover text-white px-6 py-2.5 rounded-full font-bold border-2 border-brand-navy text-xs font-title">Tüm Tesisleri Gör</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
