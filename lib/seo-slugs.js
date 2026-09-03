const TURKISH_CHARACTERS = {
  'ç': 'c',
  'ğ': 'g',
  'ı': 'i',
  'ö': 'o',
  'ş': 's',
  'ü': 'u'
};

export function slugify(value = '') {
  return String(value)
    .trim()
    .toLocaleLowerCase('tr-TR')
    .replace(/[çğıöşü]/g, character => TURKISH_CHARACTERS[character])
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getHotelPath(hotel) {
  if (!hotel) return '/oteller';

  const city = slugify(hotel.city) || 'turkiye';
  const district = slugify(hotel.district) || 'merkez';
  const name = slugify(hotel.name) || slugify(hotel.id) || 'otel';

  return `/otel/${city}/${district}/${name}`;
}

export function findHotelBySlugs(hotels = [], citySlug, districtSlug, hotelSlug) {
  return hotels.find(hotel => (
    slugify(hotel.city) === citySlug
    && slugify(hotel.district) === districtSlug
    && slugify(hotel.name) === hotelSlug
  ));
}

export const PROGRAMMATIC_CLUSTERS = [
  {
    id: 'her-sey-dahil',
    slug: 'her-sey-dahil-evcil-hayvan-dostu-oteller',
    title: 'Her Şey Dahil Evcil Hayvan Kabul Eden Oteller',
    h1: 'Her Şey Dahil Evcil Hayvan Kabul Eden Oteller',
    metaTitle: 'Her Şey Dahil Evcil Hayvan Kabul Eden Oteller (2026 Tesisler) | PatiyleSeyahat',
    metaDesc: 'Her şey dahil konsepte sahip, kedi ve köpek kabul eden en iyi pet friendly otelleri karşılaştırın. Açık büfe, plaj ve evcil hayvan kuralları.',
    filterKey: 'her-sey-dahil'
  },
  {
    id: 'buyuk-kopek',
    slug: 'buyuk-kopek-kabul-eden-oteller',
    title: 'Büyük Köpek Kabul Eden Oteller',
    h1: 'Büyük Köpek & Kilo Sınırsız Evcil Hayvan Otelleri',
    metaTitle: 'Büyük Köpek Kabul Eden Oteller & Kilo Sınırsız Tesisler | PatiyleSeyahat',
    metaDesc: '20 kg ve üzeri büyük ırk köpek kabul eden pet friendly otel, bungalov ve tesisler. Bahçeli ve kilo kısıtlaması olmayan oteller.',
    filterKey: 'buyuk-kopek'
  },
  {
    id: 'ucretsiz-pet',
    slug: 'ucretsiz-evcil-hayvan-kabul-eden-oteller',
    title: 'Ek Ücret Almayan Evcil Hayvan Dostu Oteller',
    h1: 'Ek Pet Ücreti Almayan Oteller',
    metaTitle: 'Ek Ücret Almayan Evcil Hayvan Dostu Oteller (Ücretsiz Pet) | PatiyleSeyahat',
    metaDesc: 'Evcil hayvanınız için ek konaklama veya temizlik ücreti almayan ücretsiz pet friendly otelleri listeleyin.',
    filterKey: 'ucretsiz-pet'
  },
  {
    id: 'bahceli-oteller',
    slug: 'bahceli-evcil-hayvan-dostu-oteller',
    title: 'Bahçeli Evcil Hayvan Dostu Oteller',
    h1: 'Bahçeli ve Çim Alanlı Pet Friendly Oteller',
    metaTitle: 'Bahçeli Evcil Hayvan Dostu Oteller & Geniş Çim Alanlı Tesisler | PatiyleSeyahat',
    metaDesc: 'Köpek ve kedinizle rahatça vakit geçirebileceğiniz geniş bahçeli, çim alanlı pet friendly oteller.',
    filterKey: 'bahceli'
  },
  {
    id: 'bungalov',
    slug: 'evcil-hayvan-dostu-bungalovlar',
    title: 'Evcil Hayvan Dostu Bungalovlar',
    h1: 'Evcil Hayvan Dostu Bungalovlar & Dağ Evleri',
    metaTitle: 'Evcil Hayvan Dostu Bungalovlar & Köpek Kabul Eden Tesisler | PatiyleSeyahat',
    metaDesc: 'Doğa içinde kedi ve köpeğinizle konaklayabileceğiniz evcil hayvan kabul eden bungalov ve dağ evleri.',
    accType: 'Bungalov'
  },
  {
    id: 'kopek-bungalov',
    slug: 'kopek-kabul-eden-bungalovlar',
    title: 'Köpek Kabul Eden Bungalovlar',
    h1: 'Köpek Kabul Eden Doğa Bungalovları',
    metaTitle: 'Köpek Kabul Eden Bungalovlar & Doğa Evleri | PatiyleSeyahat',
    metaDesc: 'Köpeğinizle müstakil bahçeli doğa tatili yapabileceğiniz en iyi köpek dostu bungalov seçenekleri.',
    accType: 'Bungalov'
  },
  {
    id: 'villa',
    slug: 'evcil-hayvan-dostu-villalar',
    title: 'Evcil Hayvan Dostu Kiralık Villalar',
    h1: 'Evcil Hayvan & Köpek Kabul Eden Kiralık Villalar',
    metaTitle: 'Evcil Hayvan Dostu Villalar & Köpek Kabul Eden Kiralık Tesisler | PatiyleSeyahat',
    metaDesc: 'Özel havuzlu ve korunaklı bahçeli, kedi ve köpek kabul eden kiralık villaları keşfedin.',
    accType: 'Villa'
  },
  {
    id: 'butik-otel',
    slug: 'evcil-hayvan-dostu-butik-oteller',
    title: 'Evcil Hayvan Dostu Butik Oteller',
    h1: 'Pet Friendly Butik Oteller',
    metaTitle: 'Evcil Hayvan Dostu Butik Oteller (Seçkin Tesisler) | PatiyleSeyahat',
    metaDesc: 'Sakin ve samimi atmosferde evcil hayvanınızla konaklayabileceğiniz pet friendly butik oteller.',
    accType: 'Butik Otel'
  },
  {
    id: 'tatil-koyu',
    slug: 'evcil-hayvan-dostu-tatil-koyleri',
    title: 'Evcil Hayvan Dostu Tatil Köyleri',
    h1: 'Pet Friendly Tatil Köyleri ve Resortlar',
    metaTitle: 'Evcil Hayvan Dostu Tatil Köyleri & Resort Oteller | PatiyleSeyahat',
    metaDesc: 'Geniş arazide evcil hayvan kabul eden tam donanımlı tatil köyleri ve lüks resort oteller.',
    accType: 'Tatil Köyü'
  }
];

export function findClusterBySlug(slug = '') {
  return PROGRAMMATIC_CLUSTERS.find(c => c.slug === slug);
}
