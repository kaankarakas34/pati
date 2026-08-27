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
