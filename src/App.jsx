import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Boardings from './pages/Boardings';
import DetailView from './pages/DetailView';
import DetailLoader from './components/DetailLoader';
import TravelGuides from './pages/TravelGuides';
import GuideDetail from './pages/GuideDetail';
import Methodology from './pages/Methodology';
import AdminPanel from './pages/AdminPanel';
import Wizard from './pages/Wizard';
import Taxis from './pages/Taxis';
import Vets from './pages/Vets';
import Experiences from './pages/Experiences';
import AdApplication from './pages/AdApplication';
import { getHotelPath, getVetPath } from '../lib/seo-slugs';

const CATEGORY_SEO = {
  accommodations: {
    path: '/evcil-hayvan-dostu-oteller',
    title: 'Evcil Hayvan Dostu Oteller | Patiyle Seyahat',
    description: 'Köpek, kedi ve diğer evcil hayvanları kabul eden otelleri; kilo sınırı, ek ücret ve tesis kurallarıyla karşılaştırın.'
  },
  boardings: {
    path: '/kedi-kopek-otelleri',
    title: 'Kedi ve Köpek Otelleri | Güvenli Pet Bakımı',
    description: 'Kedi oteli, köpek oteli, gündüz bakım ve ev tipi pet bakım merkezlerini özellikleri ve kabul şartlarıyla inceleyin.'
  },
  taxis: {
    path: '/pet-taksi',
    title: 'Pet Taksi ve Evcil Hayvan Transferi | Patiyle Seyahat',
    description: 'Veteriner, havaalanı, otel ve bakım merkezi ulaşımı için pet taksi ve güvenli evcil hayvan transfer seçeneklerini karşılaştırın.'
  },
  vets: {
    path: '/veterinerler',
    title: '7/24 Acil Veteriner Klinikleri | Patiyle Seyahat',
    description: 'Yakınınızdaki 7/24 açık acil veteriner kliniklerini, adres ve hizmet olanaklarıyla inceleyin.'
  },
  experiences: {
    path: '/evcil-hayvanla-gezilecek-yerler',
    title: 'Evcil Hayvanla Gezilecek Yerler | Patiyle Seyahat',
    description: 'Köpekle gezilecek park, plaj, yürüyüş rotası ve evcil hayvan kabul eden mekanları keşfedin.'
  },
  guides: {
    path: '/evcil-hayvan-seyahat-rehberi',
    title: 'Evcil Hayvan Seyahat Rehberi | Patiyle Seyahat',
    description: 'Kedi ve köpekle yolculuk, sağlık belgeleri, otel seçimi ve destinasyon hazırlığı için güncel seyahat rehberleri.'
  },
  'trust-ads': {
    path: '/trust-ads',
    title: 'Reklam Başvurusu ve Sponsorluk | Patiyle Seyahat',
    description: 'Patiyle Seyahat reklam ve sponsorluk başvurusu yapın; otel, pet oteli, veteriner, pet taksi ve evcil hayvan markanızı doğru kitleyle buluşturun.'
  },
  chains: {
    path: '/otel-zincirleri',
    title: 'Türkiye Evcil Hayvan Dostu Otel Zincirleri (Hilton, Radisson vb.) | Patiyle Seyahat',
    description: 'Hilton, Radisson, Akra, Swissotel gibi otel zincirlerinin evcil hayvan politikaları, kilo sınırları ve aile dostu konaklama imkanları.'
  }
};

function App() {
  const [detailRecord, setDetailRecord] = useState(null);
  const [hotelSlugs, setHotelSlugs] = useState(null);
  const [vetSlugs, setVetSlugs] = useState(null);

  // Routing state
  const [currentView, setCurrentView] = useState('loading');
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Search parameters passed between home search and accommodations list
  const [searchFilters, setSearchFilters] = useState({
    destination: '',
    citySlug: null,
    districtSlug: null,
    petType: 'all',
    accType: 'all',
    suitability: 'all',
    weightLimit: 'all',
    extraFeeOnly: false,
    features: [],
    filterTitle: null
  });

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedItemId]);

  useEffect(() => {
    const hotel = currentView === 'accommodation-detail'
      ? detailRecord
      : null;
    const vet = currentView === 'vet-detail'
      ? detailRecord
      : null;
    const boarding = currentView === 'boarding-detail'
      ? detailRecord
      : null;
    const taxi = currentView === 'taxi-detail'
      ? detailRecord
      : null;

    const cityLanding = currentView === 'accommodations' && searchFilters.cityLanding
      ? searchFilters.destination
      : null;
    const categoryMeta = CATEGORY_SEO[currentView];
    const canonicalPath = hotel ? getHotelPath(hotel)
      : vet ? getVetPath(vet)
      : boarding ? `/bakim/${boarding.id}`
      : taxi ? `/taksi/${taxi.id}`
      : cityLanding ? window.location.pathname
      : categoryMeta?.path || window.location.pathname;

    const canonicalUrl = `https://www.patiyleseyahat.com${canonicalPath}`;

    const title = hotel
      ? `${hotel.name} | ${hotel.district}, ${hotel.city} Evcil Hayvan Dostu Otel | Patiyle Seyahat`
      : vet
      ? `${vet.name} - 7/24 Acil Nöbetçi Veteriner ${vet.district}, ${vet.city} | Patiyle Seyahat`
      : boarding
      ? `${boarding.name} - Kedi & Köpek Oteli ${boarding.district}, ${boarding.city} | Patiyle Seyahat`
      : taxi
      ? `${taxi.name} - Evcil Hayvan Taksi ${taxi.city} | Patiyle Seyahat`
      : cityLanding
      ? `${cityLanding} Evcil Hayvan Dostu Oteller | Patiyle Seyahat`
      : categoryMeta?.title
      ? categoryMeta.title
      : "Patiyle Seyahat | Türkiye'nin Evcil Hayvan Dostu Seyahat Rehberi";

    const description = hotel
      ? `${hotel.name}, ${hotel.district}/${hotel.city} evcil hayvan kabul koşulları, tesis özellikleri ve fotoğrafları.`
      : vet
      ? `${vet.name}, ${vet.district}/${vet.city} bölgesinde 7/24 acil servis ve veteriner desteği sunmaktadır. Adres: ${vet.address}.`
      : boarding
      ? `${boarding.name}, ${boarding.district}/${boarding.city} kedi ve köpek bakım konaklama hizmetleri.`
      : taxi
      ? `${taxi.name}, ${taxi.city} şehir içi ve şehirler arası pet transfer hizmetleri.`
      : cityLanding
      ? `${cityLanding} ilinde evcil hayvan kabul eden otelleri, pet politikalarını ve tesis özelliklerini karşılaştırın.`
      : categoryMeta?.description
      ? categoryMeta.description
      : 'Türkiye genelindeki evcil hayvan dostu otelleri ve seyahat noktalarını keşfedin.';

    document.title = title;

    // Meta Description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', description);

    // OpenGraph Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', title);

    // OpenGraph Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', description);

    // OpenGraph URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', canonicalUrl);

    // Robots Meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', currentView === 'admin'
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large');

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [currentView, selectedItemId, detailRecord, searchFilters]);

  // URL Path Router (supports /otel/il/ilce/otel-ismi and legacy hotel IDs)
  useEffect(() => {
    const handleLocationRouting = () => {
      const path = window.location.pathname;
      setHotelSlugs(null);
      setVetSlugs(null);
      setDetailRecord(null);
      if (path === '/' || path === '/home') {
        setCurrentView('home');
      } else if (path === '/yonetici') {
        setCurrentView('admin');
      } else if (path === '/sihirbaz') {
        setCurrentView('wizard');
      } else if (path === '/evcil-hayvan-dostu-oteller' || path === '/accommodations') {
        setSearchFilters(current => ({ ...current, destination: '', cityLanding: false, citySlug: null, districtSlug: null }));
        setCurrentView('accommodations');
        if (path !== CATEGORY_SEO.accommodations.path) window.history.replaceState(null, '', CATEGORY_SEO.accommodations.path);
      } else if (path === '/kedi-kopek-otelleri' || path === '/boardings') {
        setCurrentView('boardings');
        if (path !== CATEGORY_SEO.boardings.path) window.history.replaceState(null, '', CATEGORY_SEO.boardings.path);
      } else if (path === '/evcil-hayvan-seyahat-rehberi' || path === '/guides') {
        setCurrentView('guides');
        if (path !== CATEGORY_SEO.guides.path) window.history.replaceState(null, '', CATEGORY_SEO.guides.path);
      } else if (path === '/evcil-hayvanla-gezilecek-yerler' || path === '/gezilecek-yerler' || path === '/experiences') {
        setCurrentView('experiences');
        if (path !== CATEGORY_SEO.experiences.path) window.history.replaceState(null, '', CATEGORY_SEO.experiences.path);
      } else if (
        path.startsWith('/evcil-hayvan-dostu-oteller/') ||
        path.startsWith('/evcil-hayvan-kabul-eden-oteller/') ||
        path.startsWith('/pet-friendly-oteller/') ||
        path.startsWith('/kedi-kabul-eden-oteller/') ||
        path.startsWith('/kopek-kabul-eden-oteller/') ||
        path.startsWith('/her-sey-dahil-evcil-hayvan-dostu-oteller/') ||
        path.startsWith('/buyuk-kopek-kabul-eden-oteller/') ||
        path.startsWith('/ucretsiz-evcil-hayvan-kabul-eden-oteller/') ||
        path.startsWith('/bahceli-evcil-hayvan-dostu-oteller/') ||
        path.startsWith('/evcil-hayvan-dostu-bungalovlar/') ||
        path.startsWith('/kopek-kabul-eden-bungalovlar/') ||
        path.startsWith('/evcil-hayvan-dostu-villalar/') ||
        path.startsWith('/evcil-hayvan-dostu-butik-oteller/') ||
        path.startsWith('/evcil-hayvan-dostu-tatil-koyleri/')
      ) {
        const segments = path.split('/').filter(Boolean);
        const prefix = segments[0];
        const citySlug = segments[1];
        const districtSlug = segments[2] || null;

        let petType = 'all';
        let accType = 'all';
        let filterTitle = null;

        if (prefix.includes('kedi')) {
          petType = 'cat';
          filterTitle = 'Kedi Kabul Eden Oteller';
        } else if (prefix.includes('kopek')) {
          petType = 'dog';
          filterTitle = 'Köpek Kabul Eden Oteller';
        } else if (prefix.includes('her-sey-dahil')) {
          filterTitle = 'Her Şey Dahil Evcil Hayvan Kabul Eden Oteller';
        } else if (prefix.includes('buyuk-kopek')) {
          filterTitle = 'Büyük Köpek Kabul Eden Oteller';
        } else if (prefix.includes('bungalov')) {
          accType = 'Bungalov';
          filterTitle = 'Evcil Hayvan Dostu Bungalovlar';
        } else if (prefix.includes('villa')) {
          accType = 'Villa';
          filterTitle = 'Evcil Hayvan Dostu Villalar';
        } else if (prefix.includes('butik')) {
          accType = 'Butik Otel';
          filterTitle = 'Evcil Hayvan Dostu Butik Oteller';
        } else if (prefix.includes('tatil-koy')) {
          accType = 'Tatil Köyü';
          filterTitle = 'Evcil Hayvan Dostu Tatil Köyleri';
        }

        const cityName = citySlug.split('-').map(part => part.charAt(0).toLocaleUpperCase('tr-TR') + part.slice(1)).join(' ');

        setSearchFilters({
          destination: cityName,
          citySlug,
          districtSlug,
          petType,
          accType,
          suitability: 'all',
          weightLimit: 'all',
          extraFeeOnly: false,
          features: [],
          filterTitle: filterTitle ? `${cityName} ${filterTitle}` : null,
          cityLanding: true
        });
        setCurrentView('accommodations');
      } else if (path === '/her-sey-dahil-evcil-hayvan-dostu-oteller') {
        setSearchFilters(current => ({ ...current, destination: '', petType: 'all', accType: 'all', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Her Şey Dahil Evcil Hayvan Kabul Eden Oteller' }));
        setCurrentView('accommodations');
      } else if (path === '/buyuk-kopek-kabul-eden-oteller') {
        setSearchFilters(current => ({ ...current, destination: '', petType: 'dog', accType: 'all', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Büyük Köpek Kabul Eden Oteller' }));
        setCurrentView('accommodations');
      } else if (path === '/ucretsiz-evcil-hayvan-kabul-eden-oteller') {
        setSearchFilters(current => ({ ...current, destination: '', extraFeeOnly: true, cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Ek Ücret Almayan Evcil Hayvan Dostu Oteller' }));
        setCurrentView('accommodations');
      } else if (path === '/bahceli-evcil-hayvan-dostu-oteller') {
        setSearchFilters(current => ({ ...current, destination: '', features: ['Bahçesi bulunan'], cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Bahçeli Evcil Hayvan Dostu Oteller' }));
        setCurrentView('accommodations');
      } else if (path === '/evcil-hayvan-dostu-bungalovlar') {
        setSearchFilters(current => ({ ...current, destination: '', accType: 'Bungalov', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Evcil Hayvan Dostu Bungalovlar' }));
        setCurrentView('accommodations');
      } else if (path === '/kopek-kabul-eden-bungalovlar') {
        setSearchFilters(current => ({ ...current, destination: '', petType: 'dog', accType: 'Bungalov', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Köpek Kabul Eden Bungalovlar' }));
        setCurrentView('accommodations');
      } else if (path === '/evcil-hayvan-dostu-villalar') {
        setSearchFilters(current => ({ ...current, destination: '', accType: 'Villa', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Evcil Hayvan Dostu Villalar' }));
        setCurrentView('accommodations');
      } else if (path === '/evcil-hayvan-dostu-butik-oteller') {
        setSearchFilters(current => ({ ...current, destination: '', accType: 'Butik Otel', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Evcil Hayvan Dostu Butik Oteller' }));
        setCurrentView('accommodations');
      } else if (path === '/evcil-hayvan-dostu-tatil-koyleri') {
        setSearchFilters(current => ({ ...current, destination: '', accType: 'Tatil Köyü', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Evcil Hayvan Dostu Tatil Köyleri' }));
        setCurrentView('accommodations');
      } else if (path === '/kedi-kabul-eden-oteller') {
        setSearchFilters(current => ({ ...current, destination: '', petType: 'cat', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Kedi Kabul Eden Oteller' }));
        setCurrentView('accommodations');
      } else if (path === '/kopek-kabul-eden-oteller') {
        setSearchFilters(current => ({ ...current, destination: '', petType: 'dog', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Köpek Kabul Eden Oteller' }));
        setCurrentView('accommodations');
      } else if (path === '/otel-zincirleri') {
        setSearchFilters(current => ({ ...current, destination: '', cityLanding: false, citySlug: null, districtSlug: null, filterTitle: 'Otel Zincirleri ve Pet Politikaları' }));
        setCurrentView('accommodations');
      } else if (path.startsWith('/otel/')) {
        const segments = path.split('/').filter(Boolean).map(segment => decodeURIComponent(segment));
        setHotelSlugs(segments.length === 4
          ? { citySlug: segments[1], districtSlug: segments[2], nameSlug: segments[3] }
          : null);
        setCurrentView('accommodation-detail');
        setSelectedItemId(segments.length === 2 ? segments[1] : null);
      } else if (path.startsWith('/bakim/')) {
        const id = path.split('/bakim/')[1];
        setCurrentView('boarding-detail');
        setSelectedItemId(id);
      } else if (path.startsWith('/rehber/')) {
        const id = path.split('/rehber/')[1];
        setCurrentView('guide-detail');
        setSelectedItemId(id);
      } else if (path.startsWith('/taksi/')) {
        const id = path.split('/taksi/')[1];
        setCurrentView('taxi-detail');
        setSelectedItemId(id);
      } else if (path.startsWith('/veteriner/')) {
        const segments = path.split('/').filter(Boolean).map(segment => decodeURIComponent(segment));
        setVetSlugs(segments.length === 4
          ? { citySlug: segments[1], districtSlug: segments[2], nameSlug: segments[3] }
          : null);
        setCurrentView('vet-detail');
        setSelectedItemId(segments.length === 2 ? segments[1] : null);
      } else if (path === '/pet-taksi') {
        setCurrentView('taxis');
      } else if (path === '/veterinerler') {
        setCurrentView('vets');
      } else {
        const view = path.replace('/', '');
        setCurrentView(view || 'home');
      }
    };

    window.addEventListener('popstate', handleLocationRouting);
    window.addEventListener('hashchange', handleLocationRouting);
    
    // Trigger initial routing pass
    handleLocationRouting();

    return () => {
      window.removeEventListener('popstate', handleLocationRouting);
      window.removeEventListener('hashchange', handleLocationRouting);
    };
  }, []);

  // Navigation controller helper
  const handleViewChange = (view, id = null, preferredPath = null) => {
    setCurrentView(view);
    setDetailRecord(null);
    setHotelSlugs(null);
    setVetSlugs(null);
    if (id) {
      setSelectedItemId(id);
      const cleanPath = preferredPath || (view === 'accommodation-detail' ? `/otel/${encodeURIComponent(id)}`
                      : view === 'boarding-detail' ? `/bakim/${id}` 
                      : view === 'taxi-detail' ? `/taksi/${id}` 
                      : view === 'vet-detail' ? `/veteriner/${id}` 
                      : view === 'guide-detail' ? `/rehber/${id}` 
                      : `/${view}`);
      window.history.pushState(null, '', cleanPath);
    } else {
      let cleanPath = view === 'home' ? '/' : CATEGORY_SEO[view]?.path || `/${view}`;
      if (view === 'accommodations' && currentView === 'accommodations' && searchFilters.cityLanding) {
        setSearchFilters(current => ({ ...current, destination: '', cityLanding: false, citySlug: null, districtSlug: null }));
      }
      if (view === 'admin') {
        cleanPath = '/yonetici';
      } else if (view === 'wizard') {
        cleanPath = '/sihirbaz';
      }
      window.history.pushState(null, '', cleanPath);
    }
  };

  async function submitFeedback(resource, payload) {
    const response = await fetch(`/api/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok || result.success !== true) throw new Error(result.error || 'Gonderim basarisiz.');
    return result.data;
  }

  const addCorrection = ({ hotelId, hotelName, text }) => submitFeedback('corrections', { hotelId, hotelName, text });
  const addComplaint = ({ targetId, targetName, author, text }) => submitFeedback('complaints', { targetId, targetName, author, text });

  // Render view conditionally based on routing state
  const renderActiveView = () => {
    switch (currentView) {
      case 'loading':
        return <p role="status" className="p-12 text-center">Yükleniyor...</p>;
      case 'home':
        return (
          <Home
            onViewChange={handleViewChange}
            setSearchFilters={setSearchFilters}
          />
        );

      case 'accommodations':
        return (
          <Accommodations
            searchFilters={searchFilters}
            setSearchFilters={setSearchFilters}
            onViewChange={handleViewChange}
          />
        );

      case 'accommodation-detail':
      case 'boarding-detail':
      case 'taxi-detail':
      case 'vet-detail': {
        const resource = { 'accommodation-detail': 'hotels', 'boarding-detail': 'boardings', 'taxi-detail': 'taxis', 'vet-detail': 'vets' }[currentView];
        return (
          <DetailLoader key={JSON.stringify([resource, selectedItemId, hotelSlugs, vetSlugs])} resource={resource} id={selectedItemId} hotelSlugs={hotelSlugs} vetSlugs={vetSlugs} onLoad={setDetailRecord}>
            {item => <DetailView key={item.id} item={item}
              isBoarding={resource === 'boardings'} isTaxi={resource === 'taxis'} isVet={resource === 'vets'}
              addComplaint={addComplaint} addCorrection={addCorrection} onViewChange={handleViewChange} />}
          </DetailLoader>
        );
      }

      case 'boardings':
        return <Boardings onViewChange={handleViewChange} />;

      case 'guides':
        return (
          <TravelGuides
            onViewChange={handleViewChange}
          />
        );

      case 'guide-detail':
        return <DetailLoader key={selectedItemId} resource="guides" id={selectedItemId}>
          {guide => <GuideDetail key={guide.id} guide={guide} onViewChange={handleViewChange} />}
        </DetailLoader>;

      case 'wizard':
        return (
          <Wizard
            onViewChange={handleViewChange}
          />
        );

      // Trust/Methodology & Legal sub-pages
      case 'methodology':
      case 'trust-how':
      case 'trust-editorial':
      case 'trust-correction':
      case 'legal-kvkk':
      case 'legal-terms':
      case 'legal-privacy':
      case 'legal-cookies':
        return (
          <Methodology activeSubView={currentView} />
        );

      case 'trust-ads':
        return <AdApplication />;

      case 'taxis':
        return <Taxis onViewChange={handleViewChange} />;
      case 'experiences':
        return <Experiences />;
      case 'vets':
        return <Vets onViewChange={handleViewChange} />;

      case 'admin':
        return <AdminPanel />;

      default:
        return (
          <Home
            onViewChange={handleViewChange}
            setSearchFilters={setSearchFilters}
          />
        );
    }
  };

  return (
    <ErrorBoundary>
      <Layout currentView={currentView} onViewChange={handleViewChange}>
        {renderActiveView()}
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
