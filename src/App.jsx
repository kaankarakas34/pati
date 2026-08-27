import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Boardings from './pages/Boardings';
import DetailView from './pages/DetailView';
import TravelGuides from './pages/TravelGuides';
import GuideDetail from './pages/GuideDetail';
import Methodology from './pages/Methodology';
import AdminPanel from './pages/AdminPanel';
import Wizard from './pages/Wizard';
import Taxis from './pages/Taxis';
import Vets from './pages/Vets';
import Experiences from './pages/Experiences';
import {
  initialHotels,
  initialBoardings,
  initialGuides,
  initialCorrections,
  initialComplaints
} from './data/mockData';
import { findHotelBySlugs, getHotelPath, slugify } from '../lib/seo-slugs';

async function fetchTable(path, fallback = []) {
  try {
    const response = await fetch(path);
    const data = await response.json();

    if (!response.ok || !Array.isArray(data)) {
      throw new Error(data?.error || `${path} gecersiz yanit dondu`);
    }

    return data;
  } catch (error) {
    console.error(`Failed to load ${path}:`, error);
    return fallback;
  }
}

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
  }
};

function App() {
  // 1. Initialize DB states from PostgreSQL Backend API
  const [hotels, setHotels] = useState(initialHotels);
  const [boardings, setBoardings] = useState(initialBoardings);
  const [guides, setGuides] = useState(initialGuides);
  const [corrections, setCorrections] = useState(initialCorrections);
  const [complaints, setComplaints] = useState(initialComplaints);
  const [taxis, setTaxis] = useState([]);
  const [vets, setVets] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Routing state
  const [currentView, setCurrentView] = useState('home');
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Load database on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [hotelsRes, boardingsRes, guidesRes, correctionsRes, complaintsRes, taxisRes, vetsRes, experiencesRes, adsRes] = await Promise.all([
          fetchTable('/api/hotels', initialHotels),
          fetchTable('/api/boardings', initialBoardings),
          fetchTable('/api/guides', initialGuides),
          fetchTable('/api/corrections', initialCorrections),
          fetchTable('/api/complaints', initialComplaints),
          fetchTable('/api/taxis'),
          fetchTable('/api/vets'),
          fetchTable('/api/experiences'),
          fetchTable('/api/ads')
        ]);

        setHotels(hotelsRes);
        setBoardings(boardingsRes);
        setGuides(guidesRes);
        setCorrections(correctionsRes);
        setComplaints(complaintsRes);
        setTaxis(taxisRes);
        setVets(vetsRes);
        setExperiences(experiencesRes);
        setAds(adsRes);
      } catch (err) {
        console.error("Failed to load PostgreSQL database tables:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // 3. Search parameters passed between home search and accommodations list
  const [searchFilters, setSearchFilters] = useState({
    destination: '',
    petType: 'all',
    accType: 'all',
    suitability: 'all',
    weightLimit: 'all',
    extraFeeOnly: false,
    features: [],
    customFilter: null,
    filterTitle: null
  });

  // DB Sync Proxy Wrapper Functions (syncs state updates with Postgres DB via API)
  const updateHotelsStateAndDb = async (newHotels) => {
    const adminToken = sessionStorage.getItem('admin_token');
    try {
      if (newHotels.length < hotels.length) {
        // Deletion
        const deleted = hotels.find(h => !newHotels.some(nh => nh.id === h.id));
        if (deleted) {
          await fetch(`/api/hotels/${deleted.id}`, { method: 'DELETE', headers: { 'x-admin-token': adminToken || '' } });
        }
      } else {
        // Insertion or modification
        const altered = newHotels.find(nh => {
          const match = hotels.find(h => h.id === nh.id);
          return !match || JSON.stringify(match) !== JSON.stringify(nh);
        });
        if (altered) {
          await fetch('/api/hotels', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken || '' },
            body: JSON.stringify(altered)
          });
        }
      }
    } catch (err) {
      console.error("Failed to sync hotel change to Postgres:", err);
    }
    setHotels(newHotels);
  };

  const updateBoardingsStateAndDb = async (newBoardings) => {
    const adminToken = sessionStorage.getItem('admin_token');
    try {
      if (newBoardings.length < boardings.length) {
        // Deletion
        const deleted = boardings.find(b => !newBoardings.some(nb => nb.id === b.id));
        if (deleted) {
          await fetch(`/api/boardings/${deleted.id}`, { method: 'DELETE', headers: { 'x-admin-token': adminToken || '' } });
        }
      } else {
        // Insertion or modification
        const altered = newBoardings.find(nb => {
          const match = boardings.find(b => b.id === nb.id);
          return !match || JSON.stringify(match) !== JSON.stringify(nb);
        });
        if (altered) {
          await fetch('/api/boardings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken || '' },
            body: JSON.stringify(altered)
          });
        }
      }
    } catch (err) {
      console.error("Failed to sync boarding change to Postgres:", err);
    }
    setBoardings(newBoardings);
  };

  const updateGuidesStateAndDb = async (newGuides) => {
    const adminToken = sessionStorage.getItem('admin_token');
    try {
      if (newGuides.length < guides.length) {
        // Deletion
        const deleted = guides.find(g => !newGuides.some(ng => ng.id === g.id));
        if (deleted) {
          await fetch(`/api/guides/${deleted.id}`, { method: 'DELETE', headers: { 'x-admin-token': adminToken || '' } });
        }
      } else {
        // Insertion or modification
        const altered = newGuides.find(ng => {
          const match = guides.find(g => g.id === ng.id);
          return !match || JSON.stringify(match) !== JSON.stringify(ng);
        });
        if (altered) {
          await fetch('/api/guides', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken || '' },
            body: JSON.stringify(altered)
          });
        }
      }
    } catch (err) {
      console.error("Failed to sync guide change to Postgres:", err);
    }
    setGuides(newGuides);
  };

  const updateCorrectionsStateAndDb = async (newCorrections) => {
    try {
      const altered = newCorrections.find(nc => {
        const match = corrections.find(c => c.id === nc.id);
        return !match || JSON.stringify(match) !== JSON.stringify(nc);
      });
      if (altered) {
        await fetch('/api/corrections', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(altered)
        });
      }
    } catch (err) {
      console.error("Failed to sync correction to Postgres:", err);
    }
    setCorrections(newCorrections);
  };

  const updateComplaintsStateAndDb = async (newComplaints) => {
    try {
      const altered = newComplaints.find(nc => {
        const match = complaints.find(c => c.id === nc.id);
        return !match || JSON.stringify(match) !== JSON.stringify(nc);
      });
      if (altered) {
        await fetch('/api/complaints', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(altered)
        });
      }
    } catch (err) {
      console.error("Failed to sync complaint status to Postgres:", err);
    }
    setComplaints(newComplaints);
  };

  const updateTaxisStateAndDb = async (newTaxis) => {
    const adminToken = sessionStorage.getItem('admin_token');
    try {
      if (newTaxis.length < taxis.length) {
        const deleted = taxis.find(t => !newTaxis.some(nt => nt.id === t.id));
        if (deleted) await fetch(`/api/taxis/${deleted.id}`, { method: 'DELETE', headers: { 'x-admin-token': adminToken || '' } });
      } else {
        const altered = newTaxis.find(nt => {
          const match = taxis.find(t => t.id === nt.id);
          return !match || JSON.stringify(match) !== JSON.stringify(nt);
        });
        if (altered) {
          await fetch('/api/taxis', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken || '' },
            body: JSON.stringify(altered)
          });
        }
      }
    } catch (err) {
      console.error("Failed to sync taxi to Postgres:", err);
    }
    setTaxis(newTaxis);
  };

  const updateVetsStateAndDb = async (newVets) => {
    const adminToken = sessionStorage.getItem('admin_token');
    try {
      if (newVets.length < vets.length) {
        const deleted = vets.find(v => !newVets.some(nv => nv.id === v.id));
        if (deleted) await fetch(`/api/vets/${deleted.id}`, { method: 'DELETE', headers: { 'x-admin-token': adminToken || '' } });
      } else {
        const altered = newVets.find(nv => {
          const match = vets.find(v => v.id === nv.id);
          return !match || JSON.stringify(match) !== JSON.stringify(nv);
        });
        if (altered) {
          await fetch('/api/vets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken || '' },
            body: JSON.stringify(altered)
          });
        }
      }
    } catch (err) {
      console.error("Failed to sync vet to Postgres:", err);
    }
    setVets(newVets);
  };

  const updateExperiencesStateAndDb = async (newExperiences) => {
    const adminToken = sessionStorage.getItem('admin_token');
    try {
      if (newExperiences.length < experiences.length) {
        const deleted = experiences.find(e => !newExperiences.some(ne => ne.id === e.id));
        if (deleted) await fetch(`/api/experiences/${deleted.id}`, { method: 'DELETE', headers: { 'x-admin-token': adminToken || '' } });
      } else {
        const altered = newExperiences.find(ne => {
          const match = experiences.find(e => e.id === ne.id);
          return !match || JSON.stringify(match) !== JSON.stringify(ne);
        });
        if (altered) {
          await fetch('/api/experiences', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken || '' },
            body: JSON.stringify(altered)
          });
        }
      }
    } catch (err) {
      console.error("Failed to sync experience to Postgres:", err);
    }
    setExperiences(newExperiences);
  };

  const updateAdsStateAndDb = async (newAds) => {
    const adminToken = sessionStorage.getItem('admin_token');
    try {
      if (newAds.length < ads.length) {
        const deleted = ads.find(ad => !newAds.some(nad => nad.id === ad.id));
        if (deleted) await fetch(`/api/ads/${deleted.id}`, { method: 'DELETE', headers: { 'x-admin-token': adminToken || '' } });
      } else {
        const altered = newAds.find(nad => {
          const match = ads.find(ad => ad.id === nad.id);
          return !match || JSON.stringify(match) !== JSON.stringify(nad);
        });
        if (altered) {
          await fetch('/api/ads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken || '' },
            body: JSON.stringify(altered)
          });
        }
      }
    } catch (err) {
      console.error("Failed to sync ad to Postgres:", err);
    }
    setAds(newAds);
  };

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedItemId]);

  useEffect(() => {
    const hotel = currentView === 'accommodation-detail'
      ? hotels.find(item => item.id === selectedItemId)
      : null;
    const cityLanding = currentView === 'accommodations' && searchFilters.cityLanding
      ? searchFilters.destination
      : null;
    const categoryMeta = CATEGORY_SEO[currentView];
    const canonicalPath = hotel ? getHotelPath(hotel) : cityLanding ? window.location.pathname : categoryMeta?.path || window.location.pathname;
    const canonicalUrl = `https://www.patiyleseyahat.com${canonicalPath}`;
    const title = hotel
      ? `${hotel.name} | ${hotel.district}, ${hotel.city} Evcil Hayvan Dostu Otel | Patiyle Seyahat`
      : cityLanding
      ? `${cityLanding} Evcil Hayvan Dostu Oteller | Patiyle Seyahat`
      : categoryMeta?.title
      ? categoryMeta.title
      : "Patiyle Seyahat | Türkiye'nin Evcil Hayvan Dostu Seyahat Rehberi";
    const description = hotel
      ? `${hotel.name}, ${hotel.district}/${hotel.city} evcil hayvan kabul koşulları, tesis özellikleri ve fotoğrafları.`
      : cityLanding
      ? `${cityLanding} ilinde evcil hayvan kabul eden otelleri, pet politikalarını ve tesis özelliklerini karşılaştırın.`
      : categoryMeta?.description
      ? categoryMeta.description
      : 'Türkiye genelindeki evcil hayvan dostu otelleri ve seyahat noktalarını keşfedin.';

    document.title = title;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', description);

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', currentView === 'admin'
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [currentView, selectedItemId, hotels, searchFilters]);

  // URL Path Router (supports /otel/il/ilce/otel-ismi and legacy hotel IDs)
  useEffect(() => {
    const handleLocationRouting = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '/home') {
        setCurrentView('home');
      } else if (path === '/yonetici') {
        setCurrentView('admin');
      } else if (path === '/sihirbaz') {
        setCurrentView('wizard');
      } else if (path === '/evcil-hayvan-dostu-oteller' || path === '/accommodations') {
        setSearchFilters(current => ({ ...current, destination: '', cityLanding: false, citySlug: null }));
        setCurrentView('accommodations');
        if (path !== CATEGORY_SEO.accommodations.path) window.history.replaceState(null, '', CATEGORY_SEO.accommodations.path);
      } else if (path === '/kedi-kopek-otelleri' || path === '/boardings') {
        setCurrentView('boardings');
        if (path !== CATEGORY_SEO.boardings.path) window.history.replaceState(null, '', CATEGORY_SEO.boardings.path);
      } else if (path === '/evcil-hayvan-seyahat-rehberi' || path === '/guides') {
        setCurrentView('guides');
        if (path !== CATEGORY_SEO.guides.path) window.history.replaceState(null, '', CATEGORY_SEO.guides.path);
      } else if (path === '/evcil-hayvanla-gezilecek-yerler' || path === '/gezilecek-yerler') {
        setCurrentView('experiences');
        if (path !== CATEGORY_SEO.experiences.path) window.history.replaceState(null, '', CATEGORY_SEO.experiences.path);
      } else if (path.startsWith('/evcil-hayvan-dostu-oteller/')) {
        const citySlug = path.split('/').filter(Boolean)[1];
        const cityName = hotels.find(hotel => slugify(hotel.city) === citySlug)?.city
          || citySlug.split('-').map(part => part.charAt(0).toLocaleUpperCase('tr-TR') + part.slice(1)).join(' ');
        setSearchFilters({
          destination: cityName,
          citySlug,
          petType: 'all',
          accType: 'all',
          suitability: 'all',
          weightLimit: 'all',
          extraFeeOnly: false,
          features: [],
          customFilter: null,
          filterTitle: null,
          cityLanding: true
        });
        setCurrentView('accommodations');
      } else if (path.startsWith('/otel/')) {
        const segments = path.split('/').filter(Boolean).map(segment => decodeURIComponent(segment));
        const hotel = segments.length >= 4
          ? findHotelBySlugs(hotels, segments[1], segments[2], segments[3])
          : hotels.find(item => item.id === segments[1]);
        const id = hotel?.id || segments.at(-1);
        setCurrentView('accommodation-detail');
        setSelectedItemId(id);
        if (hotel) {
          const canonicalPath = getHotelPath(hotel);
          if (path !== canonicalPath) {
            window.history.replaceState(null, '', canonicalPath);
          }
        }
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
        const id = path.split('/veteriner/')[1];
        setCurrentView('vet-detail');
        setSelectedItemId(id);
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
  }, [hotels]);

  // Navigation controller helper
  const handleViewChange = (view, id = null) => {
    setCurrentView(view);
    if (id) {
      setSelectedItemId(id);
      const hotel = view === 'accommodation-detail' ? hotels.find(item => item.id === id) : null;
      const cleanPath = view === 'accommodation-detail' ? getHotelPath(hotel)
                      : view === 'boarding-detail' ? `/bakim/${id}` 
                      : view === 'taxi-detail' ? `/taksi/${id}` 
                      : view === 'vet-detail' ? `/veteriner/${id}` 
                      : view === 'guide-detail' ? `/rehber/${id}` 
                      : `/${view}`;
      window.history.pushState(null, '', cleanPath);
    } else {
      let cleanPath = view === 'home' ? '/' : CATEGORY_SEO[view]?.path || `/${view}`;
      if (view === 'accommodations' && searchFilters.cityLanding) {
        setSearchFilters(current => ({ ...current, destination: '', cityLanding: false, citySlug: null }));
      }
      if (view === 'admin') {
        cleanPath = '/yonetici';
      } else if (view === 'wizard') {
        cleanPath = '/sihirbaz';
      }
      window.history.pushState(null, '', cleanPath);
    }
  };

  const addCorrection = async (newCorr) => {
    const finalCorr = {
      ...newCorr,
      id: `corr-${Date.now()}`
    };
    try {
      await fetch('/api/corrections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalCorr)
      });
      setCorrections([finalCorr, ...corrections]);
    } catch (err) {
      console.error("Failed to add correction:", err);
    }
  };

  const addComplaint = async (newComp) => {
    const finalComp = {
      ...newComp,
      id: `comp-${Date.now()}`
    };
    try {
      await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalComp)
      });
      setComplaints([finalComp, ...complaints]);
    } catch (err) {
      console.error("Failed to add complaint:", err);
    }
  };

  // Render view conditionally based on routing state
  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home
            hotels={hotels}
            boardings={boardings}
            guides={guides}
            experiences={experiences}
            ads={ads}
            onViewChange={handleViewChange}
            setSearchFilters={setSearchFilters}
          />
        );

      case 'accommodations':
        return (
          <Accommodations
            hotels={hotels}
            searchFilters={searchFilters}
            setSearchFilters={setSearchFilters}
            onViewChange={handleViewChange}
          />
        );

      case 'accommodation-detail':
        return (
          <DetailView
            id={selectedItemId}
            isBoarding={false}
            hotels={hotels}
            boardings={boardings}
            complaints={complaints}
            addComplaint={addComplaint}
            onViewChange={handleViewChange}
            addCorrection={addCorrection}
          />
        );

      case 'boardings':
        return (
          <Boardings
            boardings={boardings}
            onViewChange={handleViewChange}
          />
        );

      case 'boarding-detail':
        return (
          <DetailView
            id={selectedItemId}
            isBoarding={true}
            hotels={hotels}
            boardings={boardings}
            complaints={complaints}
            addComplaint={addComplaint}
            onViewChange={handleViewChange}
            addCorrection={addCorrection}
          />
        );

      case 'guides':
        return (
          <TravelGuides
            guides={guides}
            onViewChange={handleViewChange}
          />
        );

      case 'guide-detail':
        return (
          <GuideDetail
            id={selectedItemId}
            guides={guides}
            hotels={hotels}
            onViewChange={handleViewChange}
          />
        );

      case 'wizard':
        return (
          <Wizard
            hotels={hotels}
            boardings={boardings}
            onViewChange={handleViewChange}
          />
        );

      // Trust/Methodology & Legal sub-pages
      case 'methodology':
      case 'trust-how':
      case 'trust-editorial':
      case 'trust-correction':
      case 'trust-ads':
      case 'legal-kvkk':
      case 'legal-terms':
      case 'legal-privacy':
      case 'legal-cookies':
        return (
          <Methodology activeSubView={currentView} />
        );

      case 'taxis':
        return (
          <Taxis
            taxis={taxis}
            onViewChange={handleViewChange}
          />
        );

      case 'taxi-detail':
        return (
          <DetailView
            id={selectedItemId}
            isTaxi={true}
            taxis={taxis}
            complaints={complaints}
            addComplaint={addComplaint}
            onViewChange={handleViewChange}
            addCorrection={addCorrection}
          />
        );

      case 'vets':
        return (
          <Vets
            vets={vets}
            onViewChange={handleViewChange}
          />
        );

      case 'experiences':
        return (
          <Experiences
            experiences={experiences}
            onViewChange={handleViewChange}
          />
        );

      case 'vet-detail':
        return (
          <DetailView
            id={selectedItemId}
            isVet={true}
            vets={vets}
            complaints={complaints}
            addComplaint={addComplaint}
            onViewChange={handleViewChange}
            addCorrection={addCorrection}
          />
        );

      case 'admin':
        return (
          <AdminPanel
            hotels={hotels}
            setHotels={updateHotelsStateAndDb}
            boardings={boardings}
            setBoardings={updateBoardingsStateAndDb}
            guides={guides}
            setGuides={updateGuidesStateAndDb}
            corrections={corrections}
            setCorrections={updateCorrectionsStateAndDb}
            complaints={complaints}
            setComplaints={updateComplaintsStateAndDb}
            taxis={taxis}
            setTaxis={updateTaxisStateAndDb}
            vets={vets}
            setVets={updateVetsStateAndDb}
            experiences={experiences}
            setExperiences={updateExperiencesStateAndDb}
            ads={ads}
            setAds={updateAdsStateAndDb}
          />
        );

      default:
        return (
          <Home
            hotels={hotels}
            boardings={boardings}
            guides={guides}
            experiences={experiences}
            ads={ads}
            onViewChange={handleViewChange}
            setSearchFilters={setSearchFilters}
          />
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <div className="text-center space-y-3">
          <span className="text-4xl block animate-spin">🐾</span>
          <p className="font-title font-bold text-gray-700">Patiyle Seyahat Veritabanı Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout currentView={currentView} onViewChange={handleViewChange}>
      {renderActiveView()}
    </Layout>
  );
}

export default App;
