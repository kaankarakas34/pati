import test from 'node:test';
import assert from 'node:assert/strict';
import { boardingFaqs, boardingSeoMetadata, normalizeTurkishPhone, truncateSeoText } from '../lib/boarding-seo.js';

const boarding = {
  name: 'Afyon Köpek Evi | Köpek Oteli | Köpek Pansiyonu | Pet Otel | Köpek Eğitim',
  city: 'Afyonkarahisar',
  district: 'Esentepe',
  category: 'Kedi ve köpek kabul eden karma tesisler',
  allowedPets: ['cat', 'dog'],
  cameraSupport: true,
  price: 'İşletmeden bilgi alınız',
  requiredDocs: 'Güncel aşı karnesi zorunludur.',
  imageUrl: 'https://images.example/pet-hotel.jpg',
  phone: '0553 600 93 34'
};

test('boarding metadata stays concise, factual and consistent across server and client rendering', () => {
  const metadata = boardingSeoMetadata(boarding);
  assert.ok(metadata.title.length <= 60, metadata.title);
  assert.ok(metadata.description.length <= 155, metadata.description);
  assert.match(metadata.title, /Afyonkarahisar/);
  assert.match(metadata.description, /kedi ve köpek kabul edilir/i);
  assert.equal(metadata.image, boarding.imageUrl);
  assert.equal(metadata.telephone, '+905536009334');
});

test('boarding FAQ answers are derived from visible record fields', () => {
  const faqs = boardingFaqs(boarding);
  assert.equal(faqs.length, 4);
  assert.ok(faqs.every(item => item.question && item.answer));
  assert.match(faqs[1].answer, /aşı karnesi/i);
  assert.match(faqs[2].answer, /kamera desteği/i);
});

test('SEO utilities handle empty and already international phone values safely', () => {
  assert.equal(normalizeTurkishPhone(''), undefined);
  assert.equal(normalizeTurkishPhone('+90 553 600 93 34'), '+905536009334');
  assert.equal(truncateSeoText('Kısa açıklama', 30), 'Kısa açıklama');
  assert.equal(truncateSeoText('Bu oldukça uzun bir açıklamadır', 18).endsWith('…'), true);
});
