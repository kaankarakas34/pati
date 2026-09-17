-- ==========================================
-- PATILI.CO - PATILI MEKANLAR (EXPERIENCES) SEED
-- Cafe Zone (Nişantaşı) & Griffin Bomonti (Bomonti)
-- ==========================================

BEGIN;

INSERT INTO public.experiences (
  id, name, category, city, district, image_url,
  pet_policy, allowed_pets, features, description,
  address, phone, website, map_url, best_time, rules,
  verified, base_trust_score, verification_note, last_verified
) VALUES (
  'exp-cafe-zone-nisantasi',
  'Cafe Zone - Restaurant & Bar',
  'Kafe & Restoran',
  'İstanbul',
  'Şişli',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlebZf3-or7wS1XZ1RxlP6gG_gVg5U0QDayomm7JcK0bkYzPjl6WVi5mt0dGFwFK75I_FFHNCd_DOjTHh2e3U60cLuyvFkq94qbmE69hZOEFZcT6Q4czMsC6tuliWVR01X7gOMlAMBQmAjE=w1200-h800-k-no',
  'Geniş bahçe ve yarı açık oturma alanlarında evcil hayvan kabul edilmektedir. Su kabı temin edilir ve taze su ikramı yapılır. Köpeklerin tasmalı olması rica edilir.',
  '["dog", "cat"]'::jsonb,
  '["Açık Alan / Ferah Bahçe", "Su Kabı & Taze Su İkramı", "Tasmalı Evcil Hayvan Kabulü", "Dünya Mutfağı & Bar", "Wi-Fi & Çalışma Alanı", "Merkezi Konum (Nişantaşı / Osmanbey)"]'::jsonb,
  'Nişantaşı ile Osmanbey arasında 1999 yılından bu yana hizmet veren Cafe Zone; zengin dünya mutfağı seçkisi, şık bistro ve lounge atmosferi, geniş bahçe alanı ve hayvan dostu yaklaşımıyla öne çıkmaktadır. Kedi ve köpek dostlarınızla açık bahçe bölümünde keyifle vakit geçirebilir, kahve veya akşam yemeği eşliğinde dinlenebilirsiniz.',
  'Halaskargazi Mah., Kuyumcu İrfan Sok., No: 3/B, 34371 Şişli / İstanbul',
  '+90 212 296 65 90',
  'http://www.cafezone.com.tr',
  'https://www.google.com/maps/place/Cafe+Zone+-+Restaurant+%26+Bar/@41.051229,28.990076,820m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cab70dd70cef91:0x192d30766f99672e!8m2!3d41.051229!4d28.990076!16s%2Fg%2F1vx88flc',
  'İlkbahar ve yaz aylarında açık bahçe; hafta içi gündüz kahve saatleri ve akşam yemekleri',
  'Evcil hayvanların bahçe ve yarı açık alanda tasmalı olarak bulunması, diğer misafirlerin konforu için kontrol altında tutulması rica edilir.',
  TRUE,
  9.4,
  '2026-09-17',
  '2026-09-17'::date
),
(
  'exp-griffin-bomonti',
  'Griffin Bomonti',
  'Kafe & Restoran',
  'İstanbul',
  'Şişli',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkOXc0dJ_Hc2Dl7cseFeNW_aoyMvNac90w1mTAqo9OEi7oZJTR0Y1qZdo3mHaZx6SLarBhYXG3tO16e8aTYizyIxz1B37HGy3S96CGycwOUQVG8q4MYzx9CloV5qK5_y5qVm0cT4A=w1200-h800-k-no',
  'Ferah açık hava teras alanında evcil hayvan dostudur. Masalara su ikramı yapılmaktadır. Tasmalı kedi ve köpekler kabul edilmektedir.',
  '["dog", "cat"]'::jsonb,
  '["Geniş Açık Hava Terası", "Su Kabı Temini & İkram", "Tasmalı Evcil Hayvan Kabulü", "Brasserie, Restoran & Kokteyl Bar", "Dünya & Türk Mutfağı", "Wi-Fi"]'::jsonb,
  'Bomonti''nin popüler ve dinamik noktasında yer alan Griffin Bomonti; yüksek tavanlı modern mimarisi, ferah açık terası, özenle hazırlanan zengin dünya ve Türk mutfağı menüsü ve imza kokteylleri ile evcil hayvanınızla birlikte kaliteli vakit geçirebileceğiniz seçkin bir buluşma noktasıdır.',
  'Cumhuriyet Mah., Kazım Orbay Cad., Elysium Residence No:3, 34380 Şişli / İstanbul',
  '+90 212 230 41 05',
  'https://griffinglobal.net',
  'https://www.google.com/maps/place/Griffin+Bomonti/data=!4m7!3m6!1s0x14cab726917ff025:0xdf3a79a2d490abb4!8m2!3d41.0549504!4d28.9817457!16s%2Fg%2F11vb9lfhb_!19sChIJJfB_kSa3yhQRtKuQ1KJ5Ot8?authuser=0&hl=tr',
  'Hafta sonu kahvaltı ve brunch saatleri, öğleden sonra kahve molaları ve akşam kokteyl saatleri',
  'Dış mekan teras alanında oturulması ve evcil hayvanların tasmalı olması beklenir.',
  TRUE,
  9.5,
  '2026-09-17',
  '2026-09-17'::date
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  pet_policy = EXCLUDED.pet_policy,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  description = EXCLUDED.description,
  address = EXCLUDED.address,
  phone = EXCLUDED.phone,
  website = EXCLUDED.website,
  map_url = EXCLUDED.map_url,
  best_time = EXCLUDED.best_time,
  rules = EXCLUDED.rules,
  verified = EXCLUDED.verified,
  base_trust_score = EXCLUDED.base_trust_score,
  verification_note = EXCLUDED.verification_note,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES 
  ('google_maps', '0x14cab70dd70cef91:0x192d30766f99672e', 'exp-cafe-zone-nisantasi'),
  ('google_maps', 'ChIJJfB_kSa3yhQRtKuQ1KJ5Ot8', 'exp-griffin-bomonti')
ON CONFLICT (provider, external_id) DO NOTHING;

COMMIT;
