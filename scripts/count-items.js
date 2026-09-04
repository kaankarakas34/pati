import { initialHotels, initialBoardings } from '../src/data/mockData.js';

console.log('Total initialHotels count:', initialHotels.length);
console.log('Total initialBoardings count:', initialBoardings.length);

const hotelSample = initialHotels.slice(0, 3).map(h => ({
  id: h.id,
  name: h.name,
  imageUrl: h.imageUrl,
  galleryCount: (h.galleryImages || []).length
}));

console.log('Hotel samples:', JSON.stringify(hotelSample, null, 2));
