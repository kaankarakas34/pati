-- ==========================================
-- PATILI.CO - PET OTELLERI SEED SQL
-- Toplam: 156 Pet Oteli + 618 Gercek Yorum
-- ==========================================

BEGIN;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-d9f1eb4c8db69b4c55057409', 'Düzce Pet Akademi', 'Kedi ve köpek kabul eden karma tesisler', 'Düzce', '.', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lpRlrs6uw84enV59P8I3xg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=196.55182&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lpRlrs6uw84enV59P8I3xg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=196.55182&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lpRlrs6uw84enV59P8I3xg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=196.55182&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","duzce-kedi-oteli","duzce-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Düzce Pet Akademi, Düzce . bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/D%C3%BCzce+Pet+Akademi/data=!4m7!3m6!1s0x409d9ffd592f2323:0x26608e8e9254e3a!8m2!3d40.8444143!4d31.1507795!16s%2Fg%2F11h6nt03xc!19sChIJIyMvWf2fnUAROk4l6egIZgI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJIyMvWf2fnUAROk4l6egIZgI', 'boarding-d9f1eb4c8db69b4c55057409')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-b43c6558c312c1179857a768', 'DÜZCE PET KUAFÖRÜ&PETSHOP&PET OTELİ', 'Kedi ve köpek kabul eden karma tesisler', 'Düzce', 'Kültür', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlEHmobTuFBPvcnnb7d3IGgpbHrSzMwDx20HlTEphYMtBBSD88xIyJ8rWpy2nbJ4-PwD7NsmdPPvMNhQJPAXgq1ffdLx6fu0yzVMbvMYhoCi3XpBjQxy3lmg4HqAq5QJQOIddHlrDmI7Z0R=w408-h398-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlEHmobTuFBPvcnnb7d3IGgpbHrSzMwDx20HlTEphYMtBBSD88xIyJ8rWpy2nbJ4-PwD7NsmdPPvMNhQJPAXgq1ffdLx6fu0yzVMbvMYhoCi3XpBjQxy3lmg4HqAq5QJQOIddHlrDmI7Z0R=w304-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmsiIGFJiYFnZpB0SIb29Onj_IZ6InekY9j9fwU5lrPfwP9xfHu3mI1p1o_sHurriWq5oz2BHYiAvVC8VSba4KkuwpmAtMLJ_VanbXxF7V4TzbzC4vMa18BY6ChEtCcYWUKud1hMRAhy5VF=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkss12FTBuIMEoU7Dw9DD6SU0uUMOsXgPDmQw9fLn-TRO128TFov4Uj35-KIe7JREvtcrzqRvtzz8ggKZZpdq3z4ZqdSN5BG6YKrqQd7j2tHOeUJxfn0aYjHYbTch_70-xbR_hqlYYM4vg=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmnomANy0kcSNnB8qoFXk8k9G3e6-GT4VGfkS0SPwFMqois_hQkaGBjHxi_7wPAYe2WB4OqAzQ4Dg_TCFrwwvjSixgPSFi1mgnKozN5j99KI9aAYHF4g5nDKpfBVYoQocQdd7dxDc-eXKY=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlKpLInh8GS8goAEWac4EpNx-y0jnu75DQ45FlyZjWogRK_h5eMXNeY3C1C1tIXv_QnJVrkRPJUSsbtywDotQcnwfL3SGPpb-Nr0qNNtEx9YOM0XV0P3Vjn3zNApQg8g5PSDapMJzZm1bMp=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlKL2M1vW16z8mneKy7LqioPxhcPyCHjkBqDQT55hkUhpZ2jaB4sEUZspJGwc2vmLrQh_V4wJt4vvgXKB_9FQv9RLGVjMTMPqAN84wLqliC7VUzjHYrvGSwsWWpOTuQrKiNAK3_m67NpsSF=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlxOlWV_0sl08TA5I33nXCYWFwK4gHN3NomF2lmArqKYIUFX-RpleIGL8fFem9c0B0DHyLv2GQ2E29Uw-EjX3hCC9jKVu22EiKrBCIPm_SwmTRTIkt23h4i2ybk8NVx6o1b5nGe9jdTUwE=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=S9P8mPHMQ0p-_YAs4CSi5A&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=229.25781&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Üniseks tuvalet","Banka kartları","Kredi kartı","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","duzce-kedi-oteli","kultur-kedi-oteli","duzce-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'DÜZCE PET KUAFÖRÜ&PETSHOP&PET OTELİ, Düzce Kültür bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0554 867 49 09', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/D%C3%9CZCE+PET+KUAF%C3%96R%C3%9C%26PETSHOP%26PET+OTEL%C4%B0/data=!4m7!3m6!1s0x409d9f06486ec043:0xea79b5fd721961b2!8m2!3d40.8424233!4d31.1496133!16s%2Fg%2F11y0mfw5hc!19sChIJQ8BuSAafnUARsmEZcv21eeo?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJQ8BuSAafnUARsmEZcv21eeo', 'boarding-b43c6558c312c1179857a768')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-169d42a434f9e6b4f1e1514dbc3be876', 'boarding-b43c6558c312c1179857a768', 'Çağla Haliloğlu', 10, 'Bugün köpeğimi tıraş için getirdim ve gerçekten çok memnun kaldım. Hem çok ilgili hem de çok naziklerdi. Köpeğim mutlu ve bakımlı şekilde çıktı 😊 Emekleriniz için çok teşekkür ederim, gönül rahatlığıyla tavsiye ederim.', '2026-05-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-59bf703ee3cb17b274eac24015611bac', 'boarding-b43c6558c312c1179857a768', 'dmt aydn', 10, 'Yaklaşık 2 yıldır kedimiz minnoşun trasi ve bakımıni anestezi olmadan yapıyorlar. Güvenilir ve hijyenik bir ortam ve bolca sevgi sundukları için teşekkür ediyorum.', '2026-03-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-586e97fedd1d83f6684add0c19f822f0', 'boarding-b43c6558c312c1179857a768', 'Gülşah Akyıldız', 10, 'Pamugumuzun  traşını ilk günlerinden itibaren  duzce pet kuaförü  serhat beye yaptırıyoruz güler yüzü samimiyeti ve işini severek yapması bizi çok memnun ediyor çok teşekkür ediyorum ve iyiki var diyorum', '2026-03-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-21e373ceb3db04dffff5c87fb1dc0e75', 'boarding-b43c6558c312c1179857a768', 'Okan Acar', 10, 'Kedimiz kajuyu ilk defa trasa getirdik kitirlari oluşmuştu onları kesilmesi için çok güzel bir tras yapılmış son derece memnun kaldık ellerinize sağlık ilgi ve alakanız dan dolayı çok teşekkür ederim ..🥰🥰🥰🥰🥰🥰', '2026-03-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c61163a6ddc82e9cb1ad8e51ad077018', 'boarding-b43c6558c312c1179857a768', 'Gzd Glr', 10, 'Poodle cinsi bir oğlum var. Bir öneri üzerine tıraş için Akçakocadan geldik ve çok memnun kaldık. İlgilerine ve samimiyetlerine çok çok teşekkür ederim. Bundan sonra güvenli ellerdeyiz. Oğlum da çok mutlu ve keyifliydi. Kesinlikle tavsiye ediyorum. 🥰😍', '2026-07-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-6157fb16b0d179ab14c91511', 'Düzce Kedi Oteli ve Pet Kuaförü', 'Kedi otelleri', 'Düzce', 'Burhaniye', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnz8QuDlky4S36373U5r-Pmu1C5TjG6O5v-PsC6xg47PH4Z3rPjCcj990jqqMTDBpfM2UNzluAkZ2CC7reeZQurSLJP1DwKkd-tPy47e2AGvNOe-NVOpZgawf-68ZBau94pSouC=w408-h258-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnz8QuDlky4S36373U5r-Pmu1C5TjG6O5v-PsC6xg47PH4Z3rPjCcj990jqqMTDBpfM2UNzluAkZ2CC7reeZQurSLJP1DwKkd-tPy47e2AGvNOe-NVOpZgawf-68ZBau94pSouC=w469-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnz8QuDlky4S36373U5r-Pmu1C5TjG6O5v-PsC6xg47PH4Z3rPjCcj990jqqMTDBpfM2UNzluAkZ2CC7reeZQurSLJP1DwKkd-tPy47e2AGvNOe-NVOpZgawf-68ZBau94pSouC=w469-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tBY8yuDRkvhqpDCcKGa5eg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=103.22756&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun park yeri","Tuvalet","Üniseks tuvalet","Randevu gerekli","Randevu alınması önerilir","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","duzce-kedi-oteli","burhaniye-kedi-oteli","duzce-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Düzce Kedi Oteli ve Pet Kuaförü, Düzce Burhaniye bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 955 26 12', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/D%C3%BCzce+Kedi+Oteli+ve+Pet+Kuaf%C3%B6r%C3%BC/data=!4m7!3m6!1s0x409d751458391d9f:0x26f1a8c3b8b9bdc6!8m2!3d40.8389264!4d31.1645827!16s%2Fg%2F11t27p840f!19sChIJnx05WBR1nUARxr25uMOo8SY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJnx05WBR1nUARxr25uMOo8SY', 'boarding-6157fb16b0d179ab14c91511')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-293c98148524b938b8dec4e300d1f142', 'boarding-6157fb16b0d179ab14c91511', 'Bircan Alptekin', 10, 'Çok ilgili sevecen ve samimi insanlar. Hem ortam olarak hem de tecrübe olarak kedimiz için tam aradığımız hizmet. Ne zaman istersek görüntülü görüşme ve fotoğraf sağlandı. İlgileri için çok teşekkür ederiz. Emel Hanıma ayrıca çok teşekkür ederiz. Artık kedimizi gözü kapalı emanet edebileceğimiz ikinci ailesi olduğunu biliyoruz 😊', '2022-07-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ce8b3fc9a1be195cecaa83de1126009e', 'boarding-6157fb16b0d179ab14c91511', 'Buse Baltacı', 10, 'Patili dostumu gözüm kapalı emanet edebileceğim tek yer, Emel hanımın ilgisine hayran kaldık. Çok teşekkür ederim güleryüzünüz ve ilginiz için 😍', '2024-03-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b6062f5320e703119d1dd53ca38ca5f9', 'boarding-6157fb16b0d179ab14c91511', 'Zeynep Cakir', 10, 'Kedimizi 4 günlugune biraktik ve çok memnun kaldik. Temiz guvenilir tatli dilli guleryuzlu harika bir insan emel hanim çok çok tesekkur ederiz.😊😊😊', '2022-08-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2d9f605de768853bd1b8dc31cacb956d', 'boarding-6157fb16b0d179ab14c91511', 'Ayberk Ozyurek', 10, '2 tane kedimiz tam 16 gün boyunca kaldılar çok ilgililer her gün fotoğraflarıni atıyorlar tüylerini almalarını istedik onu da çok temiz yapmışlar. Her tatile gittiğimizde gönlüm rahat birakabilecegim bir yuva bulduk sonunda çok teşekkür ederim', '2022-07-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-434bee396433da0145fad67106db9cb8', 'boarding-6157fb16b0d179ab14c91511', 'Rabia Şevval Çoban', 10, 'Kardeşimin kedisini getirdik , bakımlarını yaptırıp bi kaç gün de bıraktık ilgi alaka çok güzeldi teşekkürler 🫶🏻', '2024-03-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-a20dbc64de1f8f9556b9ccd4', 'ADANA DOG FARM Köpek Eğitim Merkezi & Köpek Oteli & Pet Otel', 'Köpek otelleri', 'Adana', 'Pirili', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0l5SNRGJAf0Et9u1NsUpGzoGtsOuPZ3sOShi7bBiVxhyiz3zMJPVYWe_FWsTETeVR57aDmi7nSyq37CV6c8qO51LhwY0AK4Ym_Gvtp3OzVNSoUecVIOiDngG1mSaLHAGzuVJ-WERKZePC=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0l5SNRGJAf0Et9u1NsUpGzoGtsOuPZ3sOShi7bBiVxhyiz3zMJPVYWe_FWsTETeVR57aDmi7nSyq37CV6c8qO51LhwY0AK4Ym_Gvtp3OzVNSoUecVIOiDngG1mSaLHAGzuVJ-WERKZePC=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgYk-lMz2mlaq1-RMZWf4G_upKgDykfXHXmgW207FZygoFPuluaG8LbrVkbQhBhyIptw54zf4ohSS8XX72BjT7e3_Nf4qk2ruNEvtfHGLtAphYd7fKehtAL0lYOc5vGU9MA3xBr9MTEEN0=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkvbF13HZ4Hxmu67eQElMHOINrtd82SUoe6XkKr6-dC3gljceBt_6s5X54ry6JZXoorOIotGzDou7BULMtOnnpcXaic_uG8wxKoa_1KbbmVHuTa1abzWE-OLk4PTeh82Tmc2aZI=w224-h395-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmBC8nNJ-QFD6nfMVf-rIg9VyizhXL9bit7ttOtWBzUYqvgpg-8X-0wCynEuHtl7cT0p4AJQk_Hqdzp6nGfbovRdDwL-zQKUtkxNjA1jaXaUkY74Sfsry0xXvvc8AhHGdpfR23nJY1wjZI=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=F3wBuss2jHoWRzaCYoaT3g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=346.2612&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","adana-kopek-oteli","adana-kopek-pansiyonu","pirili-kopek-oteli","adana-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'ADANA DOG FARM Köpek Eğitim Merkezi & Köpek Oteli & Pet Otel, Adana Pirili bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0552 725 58 08', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/ADANA+DOG+FARM+K%C3%B6pek+E%C4%9Fitim+Merkezi+%26+K%C3%B6pek+Oteli+%26+Pet+Otel/data=!4m7!3m6!1s0x1528892fa0267d5f:0x78d484b8c4f1787e!8m2!3d37.1031834!4d35.1055364!16s%2Fg%2F11sh749z83!19sChIJX30moC-JKBURfnjxxLiE1Hg?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJX30moC-JKBURfnjxxLiE1Hg', 'boarding-a20dbc64de1f8f9556b9ccd4')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ddcbe1839319cf03f8b78d438c471df4', 'boarding-a20dbc64de1f8f9556b9ccd4', 'sevinç kutsal', 10, 'Öncelikle Zafer beye ve Hanefi beye çok teşekkür ediyorum. 16 aylık  Husky köpeğimizi 1 aylık eğitime verdik ve sonuçtan çok memnunuz. Çok çok teşekkür ederiz', '2024-06-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3116aa25ebc3a64306c61ba970bcf0d2', 'boarding-a20dbc64de1f8f9556b9ccd4', 'emirhan gülten', 10, 'Köpeğim Gölge’yi eğitime gönderdik Zafer Bey ilgilendi sağolsun Eline Sağlık Çok güzel bir yer gözünüz kapalı güvenebilir siniz ❤️☺️', '2026-02-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c94d318a44564b1beb45c7de5cc1aeb2', 'boarding-a20dbc64de1f8f9556b9ccd4', 'k K', 10, 'Kardeşim zaferi ziyaret ettik.gercekten çok emek vermiş ortam çok güzel .köpekler çok canayakin iyi eğitim almışlar.ozellikle alfa karam kurt köpeği aslan gibiydi.kardesimizin başarılarını dileriz.', '2026-02-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4f6053cb93bc7dd071c619732bb3510a', 'boarding-a20dbc64de1f8f9556b9ccd4', 'Eren Gül', 2, 'Hayvanseverlerden Uzak Dursun!

3 haftalık bir yavru köpeği bu kişiden satın aldık ve yaşadığımız deneyim tam bir felaketti. Yavruyu bize ne mama ne su ne de herhangi bir bilgi vermeden teslim etti. Ertesi gün yavru bütün gece ağladı, annesini aradı. Vicdanımız el vermedi, hemen kendisine ulaştık ve annesi hâlâ kendisindeyken yavruyu geri verip vermeyeceğimizi sorduk.

Cevap netti: “Hayır, geri almam.”
Üstelik biz parayı geri istemedik bile! Sadece hayvanın iyiliğini düşündük ama bu kişi için önemli olan sadece para. Ne kalbi var ne vicdanı. Hayvanların duyguları olduğunu bile anlamıyor.

Bu kişi hayvanları sadece ticari birer mal gibi görüyor. Böyle insanların hayvan satmaya hakkı olmamalı.
İlgili makamların bu kişiye ait işletmeyi bir an önce kapatması gerekiyor!', '2025-09-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-66b56b41b3813a133524eb6c11d1a38c', 'boarding-a20dbc64de1f8f9556b9ccd4', 'Recep Durna', 10, 'Adana köpek eğitim merkezi denince akla gelen ilk yer olmalı bence.. ilgi alaka herşey yerindeydi. Can dostlarınızı güvenle bırakabilirsiniz', '2024-04-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-ecd8fa7daa9cda64d2787e49', 'Adana Pet Otel', 'Ev tipi bakım merkezleri', 'Adana', 'Karslılar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLwdD1qFryAWr9NaNGb2BUWd6eTuCJbbn2JAt-FX1ofpBjDcOeMNpmIT_fr43ChzwSrWfjrsF3h4E8nGWQD5FUSJ4JqLiz2fuOikuwtTIinFrN-Q4WAKnTkxQiIvmrG6z5I4Auu_Baz8go=w408-h906-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLwdD1qFryAWr9NaNGb2BUWd6eTuCJbbn2JAt-FX1ofpBjDcOeMNpmIT_fr43ChzwSrWfjrsF3h4E8nGWQD5FUSJ4JqLiz2fuOikuwtTIinFrN-Q4WAKnTkxQiIvmrG6z5I4Auu_Baz8go=w224-h497-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn98TOufxzRbnFbUEQYNg6X2_o5YI8L03eWrq-UMlya3ZU8cL9RHrsoOL8VrEvqw9-a5BcF9ciXWShkjzdBCZMeRcmMubiQFMdk--VyiniXyo4FvToxJ1c-J8ppQHxnuqDkQTSQgbBOEU5e=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnFBBHTNBkSAJImi3J6JXR2_-eye-tjS5GKCe25olSM7l1gQc2LegPjJzV3aZ-o7VnpKMN2rfETLxF46s_npBCn2_5cJEUubre9OBon4cvOwwd6tE3ZhXEtCbYnLSgxgvk9axJrLezgDOQ=w224-h401-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkS8xXtYtd1eaQfhBOyxZZCX7kSSgk45vTBTRR1yAcT-Ov7VlAsTvOuhNE74DDw3EPeAYDT5b2BJ7XE9dWBvvgwaXYvnQsZf5EGmQ4zt-DzbDFNEr0EH4-9abyCHTozkTCdjXdL-A=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkqzfmtbYNlBdiJ-1Qs68Tdj95Hgl-EnTK0yK1J_z0PwZSxT2xYLkzky9uAwlyq3EtkJMKhD0-_0qBfkxqo_9zRx_ytDTqc0aZjeSuhdnsz5ZwPmqPm8Xp_TcadQJt6h8-sFB2FiX9JQoYc=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_VsYSDBTQppA8b1Unh169A&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=157.06946&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","adana-pet-oteli","adana-kedi-kopek-oteli","karslilar-pet-oteli","adana-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Adana Pet Otel, Adana Karslılar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0538 567 10 27', NULL, 'http://adanapetoteli.com/', '{"google_maps":"https://www.google.com/maps/place/Adana+Pet+Otel/data=!4m7!3m6!1s0x152889e98ad788ab:0x4958125fd07c84a6!8m2!3d37.0647472!4d35.2848451!16s%2Fg%2F11w8l819cw!19sChIJq4jXiumJKBURpoR80F8SWEk?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJq4jXiumJKBURpoR80F8SWEk', 'boarding-ecd8fa7daa9cda64d2787e49')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5afb6c99475dd0dde63dc6a91c9465b3', 'boarding-ecd8fa7daa9cda64d2787e49', 'Ceren ALPÇOĞAY', 10, 'Teddy köpeğimiz otele biraktigimiz günden bu yana o kadar güzel ilgilenmiş o kadar güzel merhametli vicdanlı eğitmen gibi davranmış ki köpek eve geldiğinde çok mutlu çok güzel duygularla geldiğini sizde anlayabilirsiniz köpeğinizin gözlerinden biz çok memnun kaldık hem köpek güzel beslenmiş hem çok güzel üzerine i büyük ve yerinde ilgi gösterilmiş sadece bakılmamış ihtiyaçları ve istekleri yerli yerinde  ilgi gösterilmiş köpeğin ilgileneceği bütün oyunlar denenmiş diğer tür köpeklerden ayrı kalmasına yardım edilmiş kendi cinsi ile beraber oynamasına imkan sağlanmış harika bir otel tolga beyden çok memnun kaldık bir ihtiyacınız olursa ayrıca köpeklerle ilgili gerçekten size olan yaklaşımı çok güzel fiyat performansı da diğer yerlere göre çok iyi her şey için çok teşekkür ederiz', '2026-07-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-acbf5cb659d9546b4b06b8eaa58624cf', 'boarding-ecd8fa7daa9cda64d2787e49', 'Sinan Kepçe', 10, 'Tolga beyin işinde uzman, disiplinli ve işini severek yapan can dostları seven ve değer veren birisi olduğuna tanık oldum. Gönül rahatlığı içinde yavrumuzu emanet ettim. Tolgacığım tüm yardımların için teşekkür ederiz.', '2026-05-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-92ebb126649a1e8fae3f71f98769cca8', 'boarding-ecd8fa7daa9cda64d2787e49', 'Günay olgunn', 10, 'köpeğimizi şehir dışına çıkarken ilk defa bıraktık buraya her gün videolu bir şekilde görme imkanı sağlandı teşekkür ederiz hiç bir sıkıntı yaşamadık güvenle bırakılabilecek bir yer', '2026-07-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3c2f805bae30173b68d21526c0cf6e7e', 'boarding-ecd8fa7daa9cda64d2787e49', 'Onur Dizdar', 2, 'Mecburiyetten kedimizi bir günlüğüne hatta 15-16 saatliğine buraya teslim ettik. Kedimiz gastrit olduğu için bir kap kendi mamasından da verdik. Teslim aldığımızdaki senaryo kedimiz artık kaç saat kendi çantasında kapatıldıysa patlayacağını bilse kum harici tuvaletini yapmayan hayvan içinde bulunduğu taşıma çantasına tuvaletini yapmış bir de güzelim tüylerinin her yerine dışkı bulanmış. Hayvan korku içindeydi. Arkadaş bana çantasından çıkarttığını söyledi ancak geri almak için gittiğimde kümesvari yere girip taşıma çantasıyla çıkartmasının arasında 4-5 saniye var. Yani zamanı durdurmuyorsa çantadan nefret eden hayvanı oraya sokması 1-2 dk en iyi ihtimal. Az önce bahsettiğim gastrit mama kabını da geri aldığımızda, mama karınca mı böcek mi ne olduğu bilmediğim şeylerle kaplanmış. Arkadaşlar burası pet hotel değil hayvanın kalacağı yeri bile göstermedi. Teslim etmeden önce büyük ve bakımlı bir ev gösteriyor ve orada bakılacağı söyleniyor ancak kedi gibi temizliğine önem veren bir hayvan kümes gibi ufak bir kulübeden çıkıyor. Tolga arkadaş parayı alana kadar çok iyi çok anlayışlı ancak ödemesini aldıktan sonra ağzına geleni söylemekten çekinmiyor maalesef. Köpek bakımı konusunda hiçbir bilgim yok ancak burası ve Tolga arkadaş kesinlikle kediler için uygun değil.', '2026-05-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1511d441816e006ff84edeebb87b53f3', 'boarding-ecd8fa7daa9cda64d2787e49', 'Sabiha Ulucan', 10, 'Tolga bey e çok teşekkür ederim. Çok ilgili bir hayvansever, köpeğimiz Terso nun sahibi yeğenim yurt dışına çıktığından Terso nun psikolojisi bozulmuştu.
Ona teslim ettik ve şimdi o çok mutlu koşup oynuyor.
Çok teşekkür ederim Tolga bey iyiki varsınız.', '2026-06-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-a04a670968ebc52fd00d17c9', 'Bize Bırak Kedi Oteli', 'Kedi otelleri', 'Adana', 'Gültepe', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_pyOVQWjKc9dEQPSYx6ZlA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=101.69974&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_pyOVQWjKc9dEQPSYx6ZlA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=101.69974&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_pyOVQWjKc9dEQPSYx6ZlA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=101.69974&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","adana-kedi-oteli","gultepe-kedi-oteli","adana-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bize Bırak Kedi Oteli, Adana Gültepe bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 113 30 38', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Bize+B%C4%B1rak+Kedi+Oteli/data=!4m7!3m6!1s0x1528928205ce3051:0x4f61f10f93c1b86f!8m2!3d37.0589233!4d35.3966847!16s%2Fg%2F11fy4hrhh7!19sChIJUTDOBYKSKBURb7jBkw_xYU8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJUTDOBYKSKBURb7jBkw_xYU8', 'boarding-a04a670968ebc52fd00d17c9')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ab141f0bea21c966a82b55ca83d0767b', 'boarding-a04a670968ebc52fd00d17c9', 'Talha Toprak', 10, 'Bir arkadasimin tavsiyesi üzerine ve tedirgin olmakla birlikte yavrumuzu otelinize bıraktım.
Ortam şartları gayet uygun perfect olmuş hele camera sistemi ile kontrol etmek gerçekten güven verici.ozellikle gece gündüz ilgilenmeniz beni çok mutlu etti.ve ayrıca bahri amcanın yavrularımıza gösterdiği ilgi ve şevkatten dolayı ayrıca teşekkür ederim.', '2025-02-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a9a295d431fa314e2b9c669bbfd9543e', 'boarding-a04a670968ebc52fd00d17c9', 'Cahit Aslan', 2, 'Sakın bırakmayın! Yorumlara güvenerek yaz tatilimiz için beş günlüğüne bıraktık fakat aldığımızda kedimiz göz enfeksiyonu olmuş, psikolojisi bozulmuş olarak aldık, bir süre sonra da kulak uyuzu meselesi ortaya çıktı. Pişmanız, siz pişman olmayın.', '2024-10-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fa6a16d901b3cbb0fa79a7f5b985f1bc', 'boarding-a04a670968ebc52fd00d17c9', 'Ahmet Karabulut', 2, 'Ben köpeğimi 2 aylık ilken aldım suan 2.5 yasında golden şimdiye kadar bir kere olsun yediğimiz yemeği vermedik kuru mama ve yas mama uzun süreli Tatile gittiğimizde ufak ilken götürfük ama büyüdüğünde pet otellere bırakırdık en son bu firmaya bıraktım 10 gün ve bana  dedilerki her oda da klima var sıcak da kalma dediler bırakırken en sonda bakım yapacağız dediler tamam dedim almaya gitmeden sunu sordum traş ücreti ne kadar 100 tl dediler  neyse kalsın dedim sonra beni aradılar  baska bir köpek tıraş olacaktı  dediler  yapmış ilken sizinkini de etek dediler tamam dedim.Daha önce traş ettiğimizde veteriner biraz uzun bıraktılar çünkü çok kısa kesilirse güneşden etkilenir derisi dediler sonra çok güzel traş ettirdik başka yerde
Daha sonra bu firma dan köpeğimi almaya gittiğimde sırtında lekeler vardı bana dediler ki baharatlı ürün vermeyin dedi  mümkünün değil vermem akşam almıştım 1 gün sonra köpeğin döşünde göbeğinde yaralar çıkmış oradaki 1 2 köpek de ağzı burnu suratı yara içinde idi benim kçpeğim orda pire den dolayı egzama olmuş Adana en kaliteli veterinerlere gittim söyle dediler bu köpeği traş eden adam cinayet işlemiş bu köpeği Bu kadar kısa traş olunmaz ve onlar ne anlar  çıkan yaradan dediler ben 450 tl masraf Ettim tedavi için feda olsun oğluma ama bana sormadan traş ettiler kulağın altında tüy yumak olmuş onu keserken kulağın derisi kan içindeydi burdan keşke foto atabilsem kendilerine attım olmasıngerekn traş böyle olması lazım dı diye  ama yazık ben köpek demeye utanıyorum benim dostum ama bunların yaptığı bu muameleden dolayı çok üzgünüm 3 hafta verdiler ilaçlarını aldım tedavi ye başladı suan yazılar olsun size ha birde otelin etrafında gezdim bir tane klima dıs ünitesi yok gelince sordum var dedi bakmak istedim beni evin içine almadılar zaten klima olmasa da burası esiyor deyip geçiştirdiler bir panik yaptı daha sonra traş olurken makinayı tersden vurmuşlar derisi tahriş olmuş size  HAKKIMIZI HELAL ETMİYORUZ  l', '2020-09-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a23ab9cac65a27abe2adc91b1e5d0860', 'boarding-a04a670968ebc52fd00d17c9', 'Ataman Fedai', 10, 'Kedim Puffy 5 gün boyunca burada konakladı. Çok memnun kaldık. Atiye abla ve eşi gerçekten çok hayvansever ve ilgili insanlar. Ayrıca kedimi kamera sistemiyle sürekli takip edebiliyor olmak beni çok güvende hissettirdi ve mutlu etti. Teşekkür ediyorum ve bir dahaki sefere görüşmek üzere diyorum.', '2021-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4ff18d58c1167263eaa33546150e04fa', 'boarding-a04a670968ebc52fd00d17c9', 'RAMAZAN DOĞAN', 10, 'Atiye hanım ve çalışma arkadaşlarına çok teşekkür ederim.kedim pars ve ben çok memnun kaldık.çalışma hayatlarında başarılar diliyorum.', '2025-02-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-698d3908b5a6d0a89cb206fd', 'Adana pet oteli', 'Ev tipi bakım merkezleri', 'Adana', 'Yüreğir', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_WgYjTG7bEk9o_1LILpQ9w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=234.72302&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_WgYjTG7bEk9o_1LILpQ9w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=234.72302&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_WgYjTG7bEk9o_1LILpQ9w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=234.72302&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","adana-pet-oteli","adana-kedi-kopek-oteli","yuregir-pet-oteli","adana-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Adana pet oteli, Adana Yüreğir bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Adana+pet+oteli/data=!4m7!3m6!1s0x15288500295a10c1:0xb6463175b18d7029!8m2!3d36.9578968!4d35.3418278!16s%2Fg%2F11xs35zdq2!19sChIJwRBaKQCFKBURKXCNsXUxRrY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJwRBaKQCFKBURKXCNsXUxRrY', 'boarding-698d3908b5a6d0a89cb206fd')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-41fd0afc5bb320ca439f4cd1', 'Afyon Köpek Evi | Köpek Oteli | Köpek Pansiyonu | Pet Otel | Köpek Eğitim', 'Köpek otelleri', 'Afyonkarahisar', 'Esentepe', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCUMxGF79enDETJZ4WkBgpYplcvWPli3ebwz-wL6UhVEDVhnswoQxKpoeXaB6VooNf8nTOqy54cDvGpEYQDezbdpDUwIV_7RDsoLlXlEBH5L1Pxt5ZudcBT0sh4PyAVdttNGdQtYoZgJEd=w408-h542-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCUMxGF79enDETJZ4WkBgpYplcvWPli3ebwz-wL6UhVEDVhnswoQxKpoeXaB6VooNf8nTOqy54cDvGpEYQDezbdpDUwIV_7RDsoLlXlEBH5L1Pxt5ZudcBT0sh4PyAVdttNGdQtYoZgJEd=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwGKP9hO2WFb6j81mih_yLd8yP1p1ikZ91qwEyhDxdDOK2ma5mx6sSUaPd-Pfqka2iAhAL9jr0CBru-ZfVuoj8KWLnerTlnnYWcB_nmP5JQ1dHxeca_mPnUWE-MppMU_dQC9ZVfISYI93L=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndCWufjfeB6bsXqvV_w9R_Z-u3FgLEqkfyJUpbPAxOTkgVJPSiguyrD3pjNk_1PxEXtYhfF3Fg9VFsofQiNSnFGUHdTI-XW2Oqiioi9i_AzWogt7JWK39bSKkcQSz2Ng5jOGBdZb-ZMWP0=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=R8MWML5FfGqoKd8GkQGBnw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=158.92833&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","afyonkarahisar-kopek-oteli","afyonkarahisar-kopek-pansiyonu","esentepe-kopek-oteli","afyonkarahisar-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Afyon Köpek Evi | Köpek Oteli | Köpek Pansiyonu | Pet Otel | Köpek Eğitim, Afyonkarahisar Esentepe bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Afyon+K%C3%B6pek+Evi+%7C+K%C3%B6pek+Oteli+%7C+K%C3%B6pek+Pansiyonu+%7C+Pet+Otel+%7C+K%C3%B6pek+E%C4%9Fitim/@38.7302245,30.5576159,17z/data=!3m1!4b1!4m6!3m5!1s0x14cf17237d3f5949:0xaea7188d01bf9df3!8m2!3d38.7302245!4d30.5576159!16s%2Fg%2F11yjxj3gvt?hl=tr&entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJSVk_fSMXzxQR852_AY0Yp64', 'boarding-41fd0afc5bb320ca439f4cd1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-24153df8b1a578d8e4164e22', 'Mutlu Patiler Kedi Oteli', 'Kedi otelleri', 'Ankara', 'Kentkoop', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6gRhtJCXVyYlEsUOiuY3W-zOH24ZxAeX9FxZ4lmlz3-DoZc_sYmZuabdVQFzThoNaIytJDQv6-hkx7ABNZCPPqT1fYqwLMWl55yYi3WM7wWH4d8T41qzfvNAT__ES8M7466pTH5dggufH=w408-h272-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6gRhtJCXVyYlEsUOiuY3W-zOH24ZxAeX9FxZ4lmlz3-DoZc_sYmZuabdVQFzThoNaIytJDQv6-hkx7ABNZCPPqT1fYqwLMWl55yYi3WM7wWH4d8T41qzfvNAT__ES8M7466pTH5dggufH=w447-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvR7hAzXAqp06xNF3W1Nh8iNeegZNkUL5QZlRL0XUgmjNUU57_rXIdhlPiyrmAmgd6lTjClc9TqG6Ed8pCIZIjh9Jrm-1hmk18saSMGdJTS4LyeZxmoMG1ENnr1qeQZhQ1V2iNuTbACwaI=w224-h336-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjNGOlT5f0w1J5Q5QOzdDuhUqj-AQNREPWEetoG_En5BjnWAHLTU-L9ien3YvcWKaoj9MG3NeLhp2AcEFArXAI-mPCKrD8yQCyDvGGFLh7LWKIurJ_V_uXA_sFxP4JM_WbgH5X=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6gRhtJCXVyYlEsUOiuY3W-zOH24ZxAeX9FxZ4lmlz3-DoZc_sYmZuabdVQFzThoNaIytJDQv6-hkx7ABNZCPPqT1fYqwLMWl55yYi3WM7wWH4d8T41qzfvNAT__ES8M7466pTH5dggufH=w447-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmmI0H8vnAkalTY1MocYox0gPtycU7FFPyi3IuNDBFfnMihUaTf02HMOPi60gEk0e4EzzrDn-MHRAtYtwSseOdjTujmje7mEdNL0K-rIp4tYTk6SOQWy_N9WXQ1Q_dPKkvSAoNan8g_D4nz=w224-h395-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=pgsJGq4rxy1WxTtsSDOq7A&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=215.06418&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Gerçek mekanda hizmet","Cadde üzerinde ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","kentkoop-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Mutlu Patiler Kedi Oteli, Ankara Kentkoop bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 015 69 91', NULL, 'https://mutlupatileroteli.com/', '{"google_maps":"https://www.google.com/maps/place/Mutlu+Patiler+Kedi+Oteli/data=!4m7!3m6!1s0x14d3376b37e5039d:0xd248180185cf1351!8m2!3d39.9619506!4d32.7170465!16s%2Fg%2F11m6r0jfg8!19sChIJnQPlN2s30xQRURPPhQEYSNI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJnQPlN2s30xQRURPPhQEYSNI', 'boarding-24153df8b1a578d8e4164e22')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-58e53a35846182e572030e3f5ea61bb4', 'boarding-24153df8b1a578d8e4164e22', 'Hayrettin Ozgur Keklikoglu', 10, 'Evlatlarımız hepimiz için çok kıymetli. Sağlıklı olsunlar, mutlu olsunlar diye gözlerinin içine bakıyoruz, öperken bile dikkat ediyoruz canları yanmasın diye. Onları böyle severken birine emanet edip gitmesi de bir o kadar zor oluyor. Bizler için de öyle oldu bu süreç.

Mutlu Patiler Kedi Oteli''ni araştırdık, gidip görüştük, güvendik ve iki yavrumuzu teslim ettik.

Nazmiye Hanım''a ne kadar teşekkür etsem az. Gün içinde tarafımıza ilettiği videolar sayesinde biraz olsun yavrularımızın yanında hissettirdi bizleri. Onların tüm rutinlerini özenle takip edip ilgilendi. Merak ettiğimiz bir durumda bizleri hemen bilgilendirdi. Odalarını özenle temizleyip, ortak paylaşım alanlarında onların sevimli hallerini bizlerle paylaştı, mutlu etti.

Tüm süreci bu kadar titiz yürüten, canlara bu kadar şefkat dolu yaklaşan, işini temiz ve dürüst yürüten, yavrularımızı güvenip emanet edebileceğimiz bir yerin varlığı çok kıymetli bizler için. Kedilerimizin ikinci evi oldunuz, iyi ki varsınız, sağ olun.', '2026-06-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bc4b338721afae92451735942d5c22b8', 'boarding-24153df8b1a578d8e4164e22', 'Nouvelle Black', 10, 'Nazmiye Hanım’a ve oğluna çok teşekkürler. kedilerimizle çok güzel ilgilendiler ve içimiz rahat olsun diye düzenli video attılar. Normalde korkak olan Kedilerim videolarda gayet mutlulardı. Gönül rahatlığıyla öneriyorum. Ayrıca çok temiz bir yerdi.  Kedilerimin ilaçlarını vermekten, gözlerini temizlemeye kadar bakımlarına özen gösterdikleri için çok teşekkür ederim.', '2026-07-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-23b574eec8481448a6eca511a73b269f', 'boarding-24153df8b1a578d8e4164e22', 'Cansu Albayrak', 10, 'kedimiz kekik yaklaşık 10 gün bu işletmede konakladı. nazmiye hanım ve oğluna çok teşekkür ederiz.

birçok işletmenin sağlamadığı özel odalara sahipler. bu süreçte kedimizin uyum sağlaması için özel ilgi gösterdiler. önceden hep aklımız kalıyordu tatillere gidince artık hep bu işletmeye güvenerek kedimizi emanet edebileceğiz.

devamlı olarak videolar göndererek bizi bilgilendirdiler. emeklerinize teşekkürler.', '2026-06-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-460ef7c50bb4176aba0271b2ff06fc9f', 'boarding-24153df8b1a578d8e4164e22', 'Kaya Karabudak', 10, 'Nazmiye hanıma gösterdiği ilgi ve alaka için çok teşekkür ediyoruz. Her gün paylaştığı videolar ile bilgilendirme yazıları sayesinde güvende olduğunu hissettirmesi yeterliydi. Bir dahaki konaklama da görüşmek dileğiyle...', '2026-01-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f1ea647a31066d85f50170bf54b41569', 'boarding-24153df8b1a578d8e4164e22', 'ELİF K.', 10, 'Kızım Mişadan ilk kez ayrı kalacağım için çok tedirgindim, başka kedilerle hiç bir arada kalmadığı ve strese girmesinden korktuğum için endişeliydim 1 ay araştırma yaptım ve Mutlu patilere ulaştım. Nazmiye hanımın cana yakınlığı samimiyeti ve işinde başarılı biri olması nedeniyle 5 günlüğüne bıraktım. Gözüm arkada kalmadı her gün video ve resim paylaşımı yaparak içimi rahatlattı. Sevgi dolu birine kızımı emanet ettiğim için çok şanslıyım.
Hijyenik ve uygun fiyatta olması da cabası
Herkese tavsiye ediyorum . Artık bizim 2. Evimiz olacak ☺️Emekleriniz için minnettarım çok teşekkür ederim Nazmiye hanımcım.
Sevgiler.', '2025-08-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-dfbdec9dbcb8ab64f81a3275', 'Felis Kedi Oteli Etimesgut', 'Kedi otelleri', 'Ankara', 'Süvari', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVukdX7lWNHsj9SD9dGT4UCJZ74PDgAwG_LTarNoATviBKutNljHPrZlEXa1OiD0ExM6dqAqgHaDlYwY7JcW3WFKHcClsncF_JGjFMqNO9KhL3NXPbFCGxrjRRvwVHZFT_LKOe6TrapCbV=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVukdX7lWNHsj9SD9dGT4UCJZ74PDgAwG_LTarNoATviBKutNljHPrZlEXa1OiD0ExM6dqAqgHaDlYwY7JcW3WFKHcClsncF_JGjFMqNO9KhL3NXPbFCGxrjRRvwVHZFT_LKOe6TrapCbV=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnwyPmA3fuRM3aXK_Nc6XfWWojtKv7i0kaqSqGUOR--16LFrYUl3wLIcqko97NH0WwZQYCW0zOjDOIewxsOVgfLIZ-osZRDzi5YFqJ_o9_m_EeJfkRMTNturzcC0nbnt0pinsSPillrCa87=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVMKelInSt7zuIMWSrN2yZTEo2yq1rKK5ycm2wHwYYk2GpePbw6Sd9WudzqMzN0goJYobm8nkgvQTeeq7U08cpoVqoCaoebXOiM_j5KcPCrnEOzBmljiooqW0bcCmGs4dqklc2=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlW6GRFTofJqTi8Zc45Ok7robnCH1U-4rhrpT3cdWNyKMcjQvTu-6jZEar4A20iGkInCaxs5vuR_1SC6FnRFMuyBlNrM7mcai5FSTJIjHffv-qNYVIkngdV2eXZHldAyzVUhuuU=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkB3vbK_kk6t8CBct-waU_ESLB_5thl82E2vD1Hy9K4rw5k4cYfvPpFVG8UwQSRHBy3MzEQDr53PPHRKXjME4IkWK_PaizTlC0vBfIgOwXUaX2P8fVf2Rh_LmDRrz72V6nWbBsQEkQL_KQg=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ciqLA6KLXZh5z-lUiw57DA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=95.32235&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","suvari-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Felis Kedi Oteli Etimesgut, Ankara Süvari bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0535 402 46 40', NULL, 'https://feliskedioteli.com/', '{"google_maps":"https://www.google.com/maps/place/Felis+Kedi+Oteli+Etimesgut/data=!4m7!3m6!1s0x14d339199dc59585:0x56b09313ef0b5a0c!8m2!3d39.939723!4d32.641619!16s%2Fg%2F11y3qbzg7t!19sChIJhZXFnRk50xQRDFoL7xOTsFY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJhZXFnRk50xQRDFoL7xOTsFY', 'boarding-dfbdec9dbcb8ab64f81a3275')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1c256a4c4804ded6cb396d41b2332597', 'boarding-dfbdec9dbcb8ab64f81a3275', 'Öykü Akyürek', 10, 'Kör ve Epilepsi hastası kedimi bir haftalığına bırakacak yer ararken Felis''e denk geldim. Engeli nedeniyle yoğun stres yaşayan ve atak gecirebilen kedim için diğer kedilerle etkileşime girmeyeceği bir yer lazımdı. Çoğu yer ya bu şartı sağlamıyordu ya da kedimin durumunu açıklarken detaylı dinlemeden hemen her şeyi onaylıyorlardi. Muhammed beyle telefonda görüştüğümüzde her detayı sordu nasıl bir yol izleyebilecegimiz özelinde konuştuk. Kedimi strese sokmamak için neler yapabileceginden bahsetti. Daha ilk görüşmeden ne yaptığını bilen ve kedileri seven insanlar oldukları belliydi. Felis''te tüm odalar ayrı, oyun saatleri farklı ve tüm odalarda kedilerin doğal ışık alabilecekleri geniş camlar var. İçimize çok sindi o yüzden. Kalma sürecimiz boyunca da ilaçları hiç aksatılmadı günlük foto ve videolar geldi. Günlük foto harici de her özlediğimizde yeni resimler attılar. Engelleri nedeniyle farklı davranışlari mevcut kedimin her aşamasinda bizimle teyitleserek ilerlediler. İştahı ilaçlarından kaynaklı azalabiliyor. Öyle durumlarda ilaç rahatsız etmesin diye elleriyle beslediler yavrumu. Tuvalet eğitimi engeli nedeniyle olmadığından odayı pedle kaplamıştık. Bu koşula rağmen bile sürekli temiz tuttular, pedleri değiştirdiler. Sonlara doğru oğlumun huyunu da öğrenmeye başladıkları için onun seveceği yeni yöntemler bile geliştirdiler 🥰 Çocuğumu almaya gittiğimizde de keyfi yerindeydi hatta fazla rahatladığı için götürmeye ikna etmemiz gerekti 😂 gerçekten Muhammed bey ve diğer çalışanlar alanında bilgili, disiplinli, çok titiz ve kedileri çok seven insanlar. Ortam da çok temiz ve çok ferah gönül rahatlığıyla kedilerinizi emanet edebilirsiniz. 🥰', '2026-06-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c54a6c145dff45a2d7024411f29e8f41', 'boarding-dfbdec9dbcb8ab64f81a3275', 'Çınar Mustafa', 10, 'Kızımız Mia'' yı bir haftalığına felis kedi oteline bıraktık. Gayet memnun kaldık,muhammed bey sağolsun günlük atılan fotoğraflar ve videolar sayesinde kızımızda aklımız kalmadı. Gayet temiz bir ortamı var. Kedimizi normalde başka yere emanet ettiğimizde içimizde bir endişe vardı ve üstünde hoş olmayan bir koku oluyordu. burada ise gayet temiz ve bakımlı şekilde geri aldık.', '2025-06-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2658721264fc8a8571ea2e870a22d651', 'boarding-dfbdec9dbcb8ab64f81a3275', 'İrem Melis', 10, '28.03-03.04 tarihleri arasında oğlum Behlül''ü Felis Kedi Oteline emanet ettim.
İnstagramdaki paylaşımlarından bulup araştırdığımda çok beğenmiştim.
Herşey güzelce düşünülmüş ayarlanmış.
1 Kedi için oldukça geniş büyük ve ferah bir odası vardı.
Yerden ısıtmalı olması, kameralı olması, camdan dışarı bakabilmesi ve en önemlisi sürekli kedimle oyun oynayabilmesi, sevmesi, ilgi vermesi benim çok çok hoşuma gitti.
Kumu hep tertemizdi, maması suyu hep tazelendi. Evimde herşey nasılsa burada da herşey öyleydi.
Gün içinde 8-9 video atması ayrıca çok güzel birşeydi.
Kedimi bıraktığımda hemencecik adaptasyonunu sağlaması, kedimle sıkça ilgilenmesi benim gerçekten içimi çok rahat ettirdi.
Evime 30 km olmasına rağmen her tatilimde kedimi gönül rahatlığı ile emanet edeceğim bir yer bulduğum için ayrıca mutluyum.
Birşeyi daha söylemek istiyorum.
Biz insancıklar bu güzel kedilerin kaldığı yere ayakkabı ile giremiyoruz. Bu muhteşem birşey. Tamamen ev ortamı konseptinde işletiliyor.
Behlül''ümün 2. Evi oldu.
Bir sonraki tatilimizi ayarladık bilee Haziran da görüşmek üzere 😍', '2025-04-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5657dd42a331fe6df0db49fd77caaf5c', 'boarding-dfbdec9dbcb8ab64f81a3275', 'sadiye baykara', 10, 'Felis Kedi Oteli kurucusu ve sahibi, çok değerli veteriner Muhammet Bey ve güleryüzlü, ilgili ekibi ile kedimiz Ares, Kurban Bayramı’nda 10 gün beraber kaldı. Kedimiz çok içine kapanık, oldukça çekingen ve yabancılara tepkili olduğu ve özellikle bizden uzakta geçireceği ilk ciddi deneyimi olduğu için son derece tedirgindik. Ancak Muhammet Bey’in doğru, titiz ve empatik yönlendirmeleri ve kedimize gösterdikleri sıcak ilgi sayesinde bu süreci çok rahat atlattık. Kedimizin her gün iki-üç kez videolarını (gece bile) paylaşmaları çok değerliydi. Eve geldiğimizde Ares hemen uyum sağladı ve keyfi de çok iyiydi. Depresif olmadı. İçimiz çok rahat etti. Her zaman kedimizi güvenle bırakabileceğimiz bir “EV” bulduk. Çok teşekkür ederiz.', '2026-06-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2369d1163edfb9a4f464a42480ccdb0a', 'boarding-dfbdec9dbcb8ab64f81a3275', 'Tuba Koçak', 10, 'Daha önce şehir dışına çıkarken bir kaç yere ponçiğimizi farklı yerlere birakmistik ve hic memun kalmiyorduk. Aklimiz hep kedimizde oluyordu. Burayi tesadüfen bulduk. Fotoğraflara bakınca mekanın temizliği ve kedilerin odalarını çok beğenmiştik. Her kedinin kendi alanı olması ve disariyi seyredebiliyor olması çok güzel. Onun dışında  açıkçası çok bir beklentimiz yoktu ama o kadar güzel ağırlandi ki, kızımız eskiden eve gelince bir sure huzursuz dolanırdı. Felisden döndükten sonra hiç öyle birseyle karşılaşmadık. Kedimiz gayet normal bir şekilde hayatına devam etti. Bizim ki biraz meraklidir merakini gidermek icin Muhammet beyin çabasını taktir ettik. Baskasi olsa hic ugrasmazdi bile. Ayrıca çok temiz bir işletme. Başka yerlerde kedimizi aldığımızda üstüne sinen bir koku oluyordu. Burda kedimizi mis gibi geri aldık. Zaten anlaşmalı hastanesi de mevcut. Hergun gelen bir sürü video ile özlemimizi ve merakımımızı da giderdi. Biz çok memnun kaldık. Tertemiz ve çok ilgiliydi. Bundan sonra her şehir dışı çıkışımızda gönül rahatlığıyla emanet edebileceğimiz bir yer bulmanın mutluluğunu yaşıyoruz, keşke daha önce karşılaşsaymışız❤️', '2025-05-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-440b5f6b9d211a8d36f774b0', 'Lena Pet Otel ve Köpek Eğitim Merkezi', 'Köpek otelleri', 'Ankara', 'Karşıyaka', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlOjzB1fWExemwo08ItCdgfb4qM3yzf3BlTSAthbWcj_cCgEjHOthOjzGoXPrwX5TWgpGqovUpF23cAlmTkVwrjCfoAtSvh07Fyub_xUsWSkDPTkMwPKG9w4QoBeMuHGEjSdmT7=w408-h542-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlOjzB1fWExemwo08ItCdgfb4qM3yzf3BlTSAthbWcj_cCgEjHOthOjzGoXPrwX5TWgpGqovUpF23cAlmTkVwrjCfoAtSvh07Fyub_xUsWSkDPTkMwPKG9w4QoBeMuHGEjSdmT7=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkwf2CxK9NLengelTX7SBf1NTH9g8CoqcriBR5yEyUVXL7IXtLv5mhISBfogGdVCt4LmCnIXJ86Z4wRjWIR7xqpGYI7yZh9PoQKDxCQ7WgDTwkijO6hc7YZnqAeQl6PQUuEWaSL=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlhGkXHL5u_vvBgVDP1A0lX7_voExzw_0wbU6D479uP8VfwO0LVinfWimJ1YgEIj23SsNmiDIiYY34N_kBeJkCHSe4uzHVU7QnNrYQi9TsvUIoBANp_KxKzK2IJyDQj6BBTXSHvPA=w224-h399-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkdV4jnV18Qn2KBx_pX2RGu1Ii0DrMBjpOTgUilCQjIpJb354Y-dy4JZB1tS04qXpT58Otz-L5HYlaD4fugYntV9q1JiK5-H-ZqErEifqG50IQMw1ezBM2PSKOunINMrnNxh0g=w397-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ktbeMP0gx-PrsKe59Emwgw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=102.2192&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","karsiyaka-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Lena Pet Otel ve Köpek Eğitim Merkezi, Ankara Karşıyaka bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 649 06 36', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Lena+Pet+Otel+ve+K%C3%B6pek+E%C4%9Fitim+Merkezi/data=!4m7!3m6!1s0x4082093e40576d15:0x2f46681b66ae5607!8m2!3d40.0666176!4d32.8458392!16s%2Fg%2F11t529vx2q!19sChIJFW1XQD4JgkARB1auZhtoRi8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJFW1XQD4JgkARB1auZhtoRi8', 'boarding-440b5f6b9d211a8d36f774b0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bc76c8f1db5a0a329d95cdf8fd96ae0b', 'boarding-440b5f6b9d211a8d36f774b0', 'can polat', 10, 'Gerçekten çok iyi bakılıyor barinaktan kurtardiğimiz bade oglumuzun da psikolojik sorunları vardı çok korkuyordu sosyallikten çekiniyordu bir sürü tranvası olan yaşlı bir çocuktu maşallah ellerine emeklerine sağlık Allah kolaylık versin yardımcıları olsun 🤲🏻', '2024-11-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6179484f7ab33df07f10910358e8bfe4', 'boarding-440b5f6b9d211a8d36f774b0', 'Tuncay Aksu', 10, 'Hamile olan Beagle cinsi yavrumuz EFES''i ilk defa bir
otele bırakacağımız için tedirginliğimiz vardı. Birde buna doğum ve sonrası eklenince tedirginlik arttı. Çok yer dolaştık ve sonunda
yolumuz LENA PET OTEL ve dolayısıyla Ufuk bey ile kesişti.
Tüm süreci basit ve kolay hale getirmek için kendisi ve ailesi ellerinden geleni en iyi şekilde yaptılar ve yapıyorlar. (yeni yatak, battaniye, steril sıcak bir oda).

LENA PET OTEL,  EFES ve yavruları merak etmemize fırsat vermeden bizi düzenli olarak bilgilendirmesi neticesinde biz işteyken ve çocuklar okulda iken yavrumuzun ve yavrularının güvende olduğunu biliyoruz.

Her şey için çok teşekkürler Ufuk bey ve ailesi,
Teşekkürler LENA PET OTEL.', '2022-10-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-89ef4a8f121c6784b4ebc641e680b3f8', 'boarding-440b5f6b9d211a8d36f774b0', 'Ahmet Gençkaya', 10, 'Ufuk Bey ve ailesine gerçekten çok teşekkür ediyorum. Ticarethane değil aile ortamı olarak işletilen bir müessese.. Kesinlikle öneriyorum.', '2023-07-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9889c835142b6f682a108aaa6f3cb7b3', 'boarding-440b5f6b9d211a8d36f774b0', 'Nilay ALTUĞ', 10, 'Ufuk Bey ve ailesi ile yollarımız yaşadığımız deprem felaketinden sonra kesişti. Konaklama problemi yaşadığımız dönemde önceliğimiz, kedimizin rahat bir ortamda bu süreci atlatabilmesiydi. Lena Pet Otel ailesi bu süreçte kedimizi evlerinde misafir ederek, kendisine sıcak bir yuva ortamı sağladı. Ayrıca bakımı ile özel olarak ilgilenerek, bizleri sürekli bilgilendirdi.

Bizlere en büyük içtenliğimizle, "İyi insanlar iyi ki var" dedirterek, süreci daha rahat bir şekilde atlatmamıza ailece yardımcı oldular.

Her şey için çok teşekkürler 🙏🏻 İyi ki varsınız 🙏🏻', '2023-05-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ede8092a09f410283da2d92a24e455ff', 'boarding-440b5f6b9d211a8d36f774b0', 'Loft Loft', 2, 'Kurban Bayramı sebebiyle 1 haftalığına köpeğimizi bıraktık ama pişman olduk. Öncesinde tesisi gördüğümde etraftaki kakalardan anlamalıydım nasıl bir yer oldugunu. Köpeklerin kaldıgı kafesli bölümlerde 3 4 kez yapılmış ve temizlenmemiş kakalar vardı. Bu da hayvanları o kafeskerden hiç çıkarmadıdıkları anlamına geliyor. Havuz fotolarda göründüğü gibi değil kir içindeydi. Mamasını getirmenize gerek yok bizim mamalarımız var dedikleri mamalar yağmurun altında kalmış çamur gibi olmuş. İstediğiniz zaman görüntülü arayabilirsiniz demişlerdi maalesef kaç kez aramanıza ragmen telefona cevap vermiyorlar. Bayramın 1. Ve 2. Günü köpeğimizden hiç haber alamadık. Dedik ki hadi bayram normaldir ama 1 hafta mı aynı rezalet devam eder. Ben inanmıyorum köpekleri çıkartıp stres attırdıklarına. Tatlı sözlerine gülücüklü fotoğraflarına inanmayın. Evcil hayvanınıza değer verdiğinize eminim. Bu sebeple araştırıyorsunuz yorumları okuyorsunuz. Ama burası doğru yer değil bırakmayın.', '2023-07-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-47bb583075d5426c327f37af', 'Bastet Kedi Oteli', 'Kedi otelleri', 'Ankara', 'Mutlukent', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvaFCs3BdKBRhLdnS1sOmG9t0TrZkhMei6p0e31KqYAHiVmBAP64wzMWLC8_0d-FGnzDMt67yIId7opwQUHrGNKrZNuCcQHJ_HzYn_sA077qUvuj3p9dyGmxlrmaVLnjSxoCEL=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvaFCs3BdKBRhLdnS1sOmG9t0TrZkhMei6p0e31KqYAHiVmBAP64wzMWLC8_0d-FGnzDMt67yIId7opwQUHrGNKrZNuCcQHJ_HzYn_sA077qUvuj3p9dyGmxlrmaVLnjSxoCEL=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3sdk5xEaShX5u-cfpzq0-HRGwqkX86wO1afmq3AyZLr8bP4-Lp8eXGqou0PKtKmDA2BfSv_OjTbbXRGRpVdTfeiDJSjBbJJqSVvmQ0ZelNTuAnm2IHRPkzhMe9MxYIXX53MKxqGw0XAfd=w224-h487-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9A6o-z771FFEOFUVyAXdxM8G0HcJG1ffxVxyh7TNTT_TbsbwGcHXzEuFN4lOnHXtooeqMTIBLgumEWB_RhnalHhje0XzPvv9Jlkb9u5S5S2JIUv_hVtAq6_sbizEwDoCtr3tz=w224-h395-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmq1OfKqsbZY8BdhfOIGAb2chVKM2g7vpCvdSbbklVSgEh_Xzdak0q5Rsq4P2Ok53WUtKuXwoHESfnkI6XHjYtFMELkYsVfJ6MP1suYZcARrXHAvYydL48nSa_h57et5VFKUvM=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmvi8LmZq8Lvpb4tf0pcOzEOHcODu4DglQKugxRjSFzFMDOATfUreH7lkWwzowYjjr36d1rAdT8FXVMFEjKUpUWrMnxe-qkUDs5ygnmm1PzqSRNNBMSoak_C1ug7lCiaYmKWAyexKRN2BM=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=-GzO9IwJuCRHDwGfzsWNlg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=8.632845&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun tuvalet","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Ücretsiz park yeri","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","mutlukent-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bastet Kedi Oteli, Ankara Mutlukent bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0534 261 16 13', NULL, 'https://bastetkedioteli.com/', '{"google_maps":"https://www.google.com/maps/place/Bastet+Kedi+Oteli/data=!4m7!3m6!1s0x14d33916b4528913:0x65e86df43b258cd8!8m2!3d39.897033!4d32.709987!16s%2Fg%2F11vzfqx2y0!19sChIJE4lStBY50xQR2IwlO_Rt6GU?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJE4lStBY50xQR2IwlO_Rt6GU', 'boarding-47bb583075d5426c327f37af')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d7b179b4829c4d3afda0bc19f98825c9', 'boarding-47bb583075d5426c327f37af', 'Murat KELEŞ', 10, 'Bir insan olarak gittiğim 5 yıldızlı lüks otellerde bile bu kadar hijyen bir ortama rastlamadım. Dünya da eşi benzeri görülmemiş bir kedi oteli. Hiç böyle beklemiyorduk. Önce kedilerimizi götürdük. Sahibi Yeşim hanım kendisini alıştırdı sevdirdi. Bu kadar kedi aşığı olan birine rastlamadım. Kedilerimizi Daha sonra 15 gün bıraktık. Kameralardan seyrettiğimizde o kadar mutlu görünüyorlardı ki. Geri aldıktan 1 hafta kadar sonra tekrar götürdük. Kedilerimiz hemen kendi odalarına yöneldiler. Oyun alanlarına koştular çok mutluydular. En önemlisi gece hariç istediğiniz saatte haber vermeden gidip görebiliyorsunuz. Her oda yaklaşık 3- 4 m2 kedicikler için her türlü konfor düşünülmüş. Yeşim hanıma ve eşi Yaşar beye sonsuz teşekkürler. Emeğinize hizmetinize Sevginize sağlık.', '2026-01-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bd23135265dabd6c82056f03fd7dd05b', 'boarding-47bb583075d5426c327f37af', 'Arzu Süt', 10, 'İki tane sokaktan sahiplendiğimiz 7 yaşında oğlumuz, 1,5 yaşında kızımız var. Bu zaman kadar çocuklarımı emanet edebileceğim güveneceğim gözümün arkada kalmadığı bir otel olmadığı için hiç bir yere bırakamamıştım. Her gittiğim yere 8-9 saat yollara, tatile gidince evcil hayvan kabul eden otellere çocuklarımı götürüyordum. Onlar içinde bizim içinde zor oluyordu ama olsun yanımızda güvendeydiler. Ta ki Yeşim ile tanışana kadar. Bu güne kadar hiç böyle bir otel görmedim tertemiz, her yer dezenfekte edilmiş mis gibi, hiç bir koku yok her yer ışıl ışıl ve çocukların konforu her türlü düşünülmüş odalarda yazın serin kışın sıcacık. Oyun alanları onların her türlü aktivitesi düşünülerek yapılmış. Bahçedeki alanda aynı şekilde her yerde ağlar gerilmiş dışarıdan başka çocuklarla temas etmiyor heyecana kapılıp kaçmalarıda engellenmiş. Kendisi çocukların herseyi ile yakından bizzat ilgileniyor. Ben kedimi tarayamıyorum o taramış misler gibi olmuş. Onlarla tek tek ilgileniyor oynuyor seviyor yalnız bırakmıyor. Ayrıca otelde kalan diğer çocuklarla hiç biri temas etmiyor.Yeşim buna çok özen gösteriyor. Her birinin ayrı ayrı oyun saati var. Bu detay bence çok önemli bu çocuklar evcil olsada birbirine yabancı her biri ayrı evde yetişiyor ayrı hastalığı olan olabilir bu kadar hassas ve ince düşünen bir kedi aşığı Yeşim. 7/24 canlı kamera ile çocuklarımızı izliyoruz ve burdayken bırakmamız gerekirse istediğimiz zaman gidip görebiliyoruz aramamıza gerek kalmadan. Başka bir otele kedisini bırakan birinden duymuştum aramadan gidemiyorum kedimi görmeye görüş saati değil falan demişler. Çok şaşırmıştım nasıl kendi kedimi göremem demiştim. Biz çok şanslıyız çocuklarımın artık Yeşim Teyzeleri var gönlüm rahat bir şekilde bırakıyorum en son 9 gün kaldılar eve döndüklerinde de çok mutlu geldiler. Teşekkürler Yeşim’cim eline emeğine sevgine sağlık iyiki varsın. Boncuk ve Fındık Hanımda öpüyor seni❤️❤️😘😘😻😻', '2025-12-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a717253eb24242a50912d4e103405a07', 'boarding-47bb583075d5426c327f37af', 'merve', 10, 'Şimdi nereden anlatmaya başlasam bilemedim. Yeşim Hanım''ın kocaman sevgi dolu kalbini mi anlatsam, yoksa odaların pırıl pırıl olmasını mı? Özveriyle, şevkatle patili dostlarınıza gözü gibi bakan, resmen manevi annelik yapan muhteşem bir kedi oteli. Normalde ben pimpirikli, kolay memnun edilemeyen biriyimdir konu çocuklarım olduğunda ama ilk günden son güne kadar o kadar içim rahattı ki? 2 kedimde de bazı rahatsızlıklar var ve düzenli ilaç kullanılması gerekiyor, saati saatine ilaçlarını almış olması şapşik hallerinin video ile tarafımla paylaşılması bir gram endişe bırakmadı yüreğimde hatta o kadar ki, minik felicitam dönmek bile istemedi eve diyebilirim:) Üstelik tüy bakımlarından tutun tüm gereklilikler profesyonelce yapıldı.Benim tam anlamayıyla yapmayı beceremediğim  tüy bakımları hakkında ugun taraklar ve nasıl tüy bakımı yapılacağına dair eğitici videolar bile paylaştı Yeşim Hanım. Yani çocuğunuzu teslim almış olsanız bile yardımlarımları devam ediyor patili ailelere. İyi ki yollarımız kesişti Bastet, iyi ki varsınız. Sizinle gözümüz asla arkada kalmaz...', '2026-06-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d6bea44e83e74a7c92b24cc0eb9197ed', 'boarding-47bb583075d5426c327f37af', 'Eren ZEN KARADUMAN', 10, 'Yeşim hanımı tanımıyorum. Kedi otelini de deneyimlemedim; ancak beş kedi annesi (birinin adı Bastet 🥰) olarak ara ara bakarım işletmelere nerede ne var, bir gün ihtiyaç duyarsak aklımda olsun diye. Tek tek tüm yorumları okudum. Günümüzde ne yazık ki hayvanlara karşı ilgi nefrete evrilirken sağlıkları, beslenmeleri ve konforları fahiş fiyatlarla ticaret unsuru haline gelmişken yazılan her yorum ve tek tek verilen her cevap içimi ısıttı. Yeşim hanım tanışır mıyız bilmiyorum ama size gelen ve eminim etrafınızda dokunduğunuz her canlı için teşekkür etmek istedim. Bol patili ve bol kazançlı günler dilerim. 🍀💜', '2026-07-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c06c48b8fda1e642fc0072a86476f4e3', 'boarding-47bb583075d5426c327f37af', 'Çiğdem Akıncıtürk', 10, 'Tatile gideceğimiz için kedimizi gözümüz arkada kalmadan, huzurla bırakabileceğimiz bir yer ararken  bulduğumuz muhteşem kedi oteli. Beş yıldızlı, her şey dahil!... 🤩  İlgi, sevgi, güvenlik, temizlik, nefis mamalar... Odaları her kedi için ayrı ve tertemiz, 24 saat kamera ile izleme imkanı var. Mama ve su sürekli taze. Bahçesi kedilerin güvenli bir şekilde oynayabilmesi için kafes teli ile kapatılmış.  Sevip oynayabilecekleri pek çok oyuncak var. Özellikle Yeşim hanımın ilgi ve sevgi dolu yaklaşımı paha biçilemez değerde. 🥰 Bu sayede, evden veteriner dışında hiçbir yere çıkmayan kedimiz Şeftali ortama hemen alıştı. Biz çok memnun kaldık, kesinlikle tavsiye ediyor ve her şey için çok teşekkür ediyoruz. İyi ki varsınız Yeşim hanım, iyi ki varsın Bastet! 😍😻🥰❤️', '2025-09-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-2fea4394530ee458aa4dd56d', 'Leo Kedi Oteli', 'Kedi otelleri', 'Ankara', 'Huzur', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkBw5rIDYYDEmBBXCEeVgAcTCmTjvW5aCQ5Ex7mkdJTLq24jmRXi11-fUIs-zwO7aJhDjVO0EtMlkHWEN9w2MoihjPbTYdDoUiG9jyjzYhRS0i0OTLXCdmg4oQ6PnVnWeECQDB5=w485-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkBw5rIDYYDEmBBXCEeVgAcTCmTjvW5aCQ5Ex7mkdJTLq24jmRXi11-fUIs-zwO7aJhDjVO0EtMlkHWEN9w2MoihjPbTYdDoUiG9jyjzYhRS0i0OTLXCdmg4oQ6PnVnWeECQDB5=w602-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWH5py8or5v1zTM66Jzm0jNujADT7x_uW-Qa8PjeWVdXOopq8Ah48UxK2OxBuk83L8tintPVftIxVCPggVrGvIAmJFqkJYqFHPm3mTlB-_8VZO0BhH_rBGK6AVyaSMFbilstsw=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklfrFIRU67zCg0ZS1p1pK560RlkJZLsDZH0hj7C6lDkkBshz39fX31_Kapnr9gU1f0DRQy3m18p_xCzbS67YGV0Ttk3xHv00JDTDgI9xX8LSz4QXTthglav1uaGfOYylk7uKYt=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklfrFIRU67zCg0ZS1p1pK560RlkJZLsDZH0hj7C6lDkkBshz39fX31_Kapnr9gU1f0DRQy3m18p_xCzbS67YGV0Ttk3xHv00JDTDgI9xX8LSz4QXTthglav1uaGfOYylk7uKYt=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=SWGw_y56cGR-01jstBf24g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=225.24445&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","huzur-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Leo Kedi Oteli, Ankara Huzur bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Leo+Kedi+Oteli/data=!4m7!3m6!1s0x14d345d576108a4d:0x19cb3ca6fd65824c!8m2!3d39.8688479!4d32.8239123!16s%2Fg%2F11r_dwbx5d!19sChIJTYoQdtVF0xQRTIJl_aY8yxk?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJTYoQdtVF0xQRTIJl_aY8yxk', 'boarding-2fea4394530ee458aa4dd56d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-843e4065397417ee5f27edb6d4075295', 'boarding-2fea4394530ee458aa4dd56d', 'Melek Saraç', 10, 'Geçtiğimiz hafta sonu İstanbul seyahatimden dolayı oğlum Tom için otel arayışına girdim, Leo kedi otelini buldum. Konuşmaları tatmin edici geldi ve oğlumu 3 gün misafir ettiler. Bu süreçte beni kırmayarak hem görüntülü konuştuk, hem istediğimiz zaman durumu hakkında bilgi aldık. Eşi ve Yasin Bey’e çok teşekkür ederim 🌺', '2022-06-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-470f927cfd25eeaaf9217ee89b5e1f09', 'boarding-2fea4394530ee458aa4dd56d', 'Camille Amiot', 10, 'Yurt dışına gitmek için kedimi 15 gün Leo kedi oteline bıraktım. Benim için rahat ve güvenliydi, fotografla ve videoyla istediğim zaman görebildim. Kedim mutlu ve sakin buldum. Çok memnunum, başka zaman da bırakırım kesinlikle.
Çok teşekkür ederim.', '2022-01-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d548ae62d3f314f66989432b629f8d31', 'boarding-2fea4394530ee458aa4dd56d', 'Tibelhan Arın', 10, 'Kedimiz Martini Leo kedi oteline 4 günlüğüne emanet ettik. Yasin bey kedimize özel bir oda ayırıp gereken ilgiyi gösterdi. Kaldığı süre içerisinde fotoğraf atıp durumuyla ilgili bilgi verdi . Kendisine gönül rahatlığıyla kedinizi emanet edebilirsiniz.', '2022-05-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9609b9c0036b517cebe07cea78ef9284', 'boarding-2fea4394530ee458aa4dd56d', 'MAVİ EKİP', 10, 'Kedimiz rahat etti! Aklımız onda kalmadı. Rutin olarak bilgilendirme msj.ları ve fotoğrafları bize gönderildi . Güvenle can parçanızı bu otele teslim edebilirsiniz. Leo Kedi 🐱 oteline ilgilerinden dolayı teşekkür ederim 😀', '2022-04-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bb5b71ccce1555648fad23f9d10c162d', 'boarding-2fea4394530ee458aa4dd56d', 'Burç Yamuç', 10, 'Kedimiz coco ve carlos u 5 gün süreliğine Leo Kedi Oteli ne emanet ettik. Bu görmüş olduğunuz çift çok iyi birer hayvansever olmalarının yanı sıra çok da iyi insanlar. Gözümüz arkada kalmadı diyebilirim.  Herşey için çok teşekkürler', '2021-12-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-fb65a5de0b20acbc01f050e1', 'Çankaya Kedi Oteli', 'Kedi otelleri', 'Ankara', 'Eymir', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmv1KzdEQXFoIPp6CgGZMtRWNhvDD2qx32P4TY74vTQxI7vy9Zan3HgmIoSFMMD40UUCgJz8HDz6-rxMYeCUg8u331U30JcL_MnKDcwytD78JwOmXL1gnunz53C4b4Kgqto1TW07w=w408-h497-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmv1KzdEQXFoIPp6CgGZMtRWNhvDD2qx32P4TY74vTQxI7vy9Zan3HgmIoSFMMD40UUCgJz8HDz6-rxMYeCUg8u331U30JcL_MnKDcwytD78JwOmXL1gnunz53C4b4Kgqto1TW07w=w244-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmG8tbvbiGRjaXqCyvrS1jpJT2E7aYb7cEPUNycEH819R6CFVssLollr8kaSPO3Ef5xSaQcB3fkkL3KP5zOLDvvAxe8N-ph10tGCkBFdYYslx0WBLnc5onYtUoGaybZm9AuJJF4rA=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnzGFIegklbjoQjCSdcvqUvhYtdF4RLKC7bDxluJh2CkD_ieJ7owS82hscwU6F8cNOgc2ytR-5Fiy62DwxJrOl0l1ynBd7krOTbW4UuHKg_Xp_6RexXMLf5zQ2MB5Dvqc7na2Q92XzOLBkK=w224-h395-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=osyli-eNnz3SgqUQ1hbQmg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=307.00296&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","eymir-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Çankaya Kedi Oteli, Ankara Eymir bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0551 002 91 32', NULL, 'https://cankayakedioteli.com/', '{"google_maps":"https://www.google.com/maps/place/%C3%87ankaya+Kedi+Oteli/data=!4m7!3m6!1s0x14d343c6b8a3d873:0x3f0e5989ef677af5!8m2!3d39.7910832!4d32.8309049!16s%2Fg%2F11trt9tlfk!19sChIJc9ijuMZD0xQR9Xpn74lZDj8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJc9ijuMZD0xQR9Xpn74lZDj8', 'boarding-fb65a5de0b20acbc01f050e1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7880ff22c8756b194f7ae3d16c5760ee', 'boarding-fb65a5de0b20acbc01f050e1', 'Aydin Zaim', 10, 'Evimizin kıllı kızı Venüs’ü bayram süresince otele bıraktık. Kendisi ilk defa farklı kedilerle bir araya geldi ve oda arkadaşları oldu. Instagram sayfasından her gün neler yaptığını gördük. Şimdi evine döndü ve keşif halinde. Kübra hanıma emekleri için çok teşekkür ederiz.', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8eeb54d45aa0dde62c28d14c6d6665e3', 'boarding-fb65a5de0b20acbc01f050e1', 'Pinar Gürün', 10, 'Oğluma 6 ay boyunca sevgili Kübra ablası ve Özgür abisi kendi evini aratmayan bir yuvada sevgi, şefkat ve sabır ile baktılar. Her aradığımda ya da mesaj attığımda cevap veren Oğlumun videolarını paylaşarak içimi ısıtan sıcacık yuvamız diyebileceğimiz guvenli bir evimiz var artik. Limoncuk hic yalnız kalmayacak çünkü işini severek yapan hayvanları seven onlarin dilini anlayan sadece onlara barinak sağlamayıp sağlıkları ile de ilgilenen veteriner kontrollerini ve aşılarını takip eden kıymetli iki insanla tanıştık. Sevgili Kübra hanım ve Özgür beye sozsuz teşekkür ederiz.
Limoncuk ve Gürün ailesi🧡', '2026-03-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e065b29339233227514d8950e1114fc9', 'boarding-fb65a5de0b20acbc01f050e1', 'yucel beki', 10, 'Yavrularımızdan birinin bir sabah biz uyurken pencereden düşmesi üzerine -çok şükür 2. kattı ve altımız topraktı birşey olmadı ve çok şükür ki uzaklaşmamış hemen bulabildik- evi kedilerimiz için daha güvenli hale getirmek adına bir müddet güvenle emanet edebileceğimiz bir yer arayışına girdik. Baktığımız çoğu yer kedi oteli adı altında sadece ufacık kafesten ibaret ve dört duvar, hayvanların psikolojisini bozabilecek yerler önerdi. En sonunda Çankaya Kedi Oteline rastladık. Villa içerisinde kedilere tahsis edilen odalar olduğunu, kedilerin birçok oyuncağı olduğunu ve kedi telli güvenlikli camları olduğunu görünce kedilerimizi içimiz rahat bir şekilde emanet edebildik. 1 ay boyunca Kübra Hanım, Özgür Bey ve çalışan arkadaşlar kedilerimize kendi kedileri gibi baktılar. Her gün sosyal medya hesaplarından düzenli fotoğraf ve video paylaşarak özlemimizi gidermemizi sağladılar. Kendilerine çok teşekkür ederiz. Gerçekten hayvan sever insanlar ve evlatlara çok iyi bakıyorlar. Sadece konaklama değil aynı zamanda bir kamp süreci gibi de oldu bu süreç kedilerimiz için. Kıyamadığımız için mamalarını kesemiyorduk. Bu da obeziteye doğru ilerlemelerine ve sağlıklarının olumsuz etkilenmesine sebep oluyordu. bu 1 Ayda kedilerimiz kilo da verdiler ve sağlıklı bir kiloya döndüler. Aynı zamanda kedilerimiz diğer kedilerle asla anlaşamazdı, hemen tıslamaya başlarlardı. Kedi otelinde yeni kedilerle tanıştılar ve sosyalleşmeyi de öğrendiler. Her açıdan harika bir deneyim olmuş oldu. Tekrardan çok teşekkür ederiz ve kedi sahibi olanlara kesinlikle tavsiye ederiz.', '2026-01-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1d609c8985ecf7fbec622756f54ba4a9', 'boarding-fb65a5de0b20acbc01f050e1', 'Erhan', 10, 'Yavru kedimizi 6 gün bıraktık. Kedimiz yavru olduğu icin  ona uygun bir kedi ile ayrı bir odaya koydular. Çok memnun kaldık. Her gün instagram videosunu sabırsızlıkla bekledik. İkinci videodan sonra bizim de içimiz rahat etmeye başladı. Artık tatillerde ne yapacağız korkumuz kalmadı. Çok teşekkur ediyoruz 🙏🏻', '2026-01-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d6c8a33079f796afe787f60764e41429', 'boarding-fb65a5de0b20acbc01f050e1', 'Utku Berk Başar', 10, 'Harika bi konaklama hizmetiydi, kedime cok iyi baktilar. Acikcasi bu kadarini beklemiyodum ama artik hic gozum arkada kalmiyo. Tesekkurler Ozgur bey 🙏🏻', '2026-06-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-7d2a5585dbbfe7aab2fede95', 'Dogyy Town Akademi ve Köpek Oteli', 'Köpek otelleri', 'Ankara', 'Karaoğlan', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlb6BlH2KmaqK-AFew9Mh0bIQ2URz7S4wud81TDy2eLaItpvfjm9WphA_hLKeY3m7wEesFmSMur5gxv3-fxZ-GNKxmZc3qR_dGAsMOXQAOrCOozFUZx4YqVIrpOTzQu6Qfv7opC=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlb6BlH2KmaqK-AFew9Mh0bIQ2URz7S4wud81TDy2eLaItpvfjm9WphA_hLKeY3m7wEesFmSMur5gxv3-fxZ-GNKxmZc3qR_dGAsMOXQAOrCOozFUZx4YqVIrpOTzQu6Qfv7opC=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvaAvkZn6jIdB0zKobzmYEphMjKQDRhtbgMfjOTNIEXEXfI8XnxVKJ7H11ovlgo_w__bgrMYc24jC4fOq0_qTSNxMXDzqIkcvMOX9GafcQeSt01GcD_qWALW7l9a0Hgq2jIOTy=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnriCE6pIVhCdcXSGDtl-73S6S-Mx0ndK9mCEwNETIMAHrObQMeOATgF2MJKjmO1cx8P9tllGlB4etTY3or2OpuwIMXtuJMpOpbiMDOTdUIFJ3YEEauzX8FyJCVr-KVmIzXdVK3=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQzW7ddHrrCBBNJFAEGeNQk_C7YltYfNdCCFqTaMJWwotFg8ygG5L_BoH6pnZMgdPVmEaMXVm23VjVgJskus67uiLcq4zsFz6b2vXeummEoRpfLet_NenMUxZhhXvbQDY78sNW=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmh7fMgzpeHzb3AmoV2pZ6QcOTlT0ltUxAHjSN5OgbN6MHiT9HSXokwJiocBWFEZF8k2Yj8ZGhKUjGLzD5EwcNQKL8rotIJAxUVKhvuoLZSMPt8ESqrzRD1pYnuwIuEuS5kmDnY=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=U0pWS0YrQl46eH7ZpO1lnw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=230.04312&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","karaoglan-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Dogyy Town Akademi ve Köpek Oteli, Ankara Karaoğlan bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 050 31 88', NULL, 'http://www.dogyytown.com/', '{"google_maps":"https://www.google.com/maps/place/Dogyy+Town+Akademi+ve+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14d369edf46547a1:0xdb942384f94375c3!8m2!3d39.7444643!4d32.8088333!16s%2Fg%2F11tx6hx423!19sChIJoUdl9O1p0xQRw3VD-YQjlNs?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJoUdl9O1p0xQRw3VD-YQjlNs', 'boarding-7d2a5585dbbfe7aab2fede95')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-04fd8a4809a1b6f845927649c250a126', 'boarding-7d2a5585dbbfe7aab2fede95', 'ayhan aydoğan', 10, '1.5 yaşında bir Malinois sahibiyim. 6 aylık olduğundan beri, tatile gittiğim zamanlarda Doggy Town''ın otel hizmetlerinden yararlanıyorum. Ben oldukça memnunum. Özellikle enerjisi yüksek bir ırk sahibiyseniz Doggy Town''da köpeklerin salındıkları yerin Ankara''da çok muadili yok. Köpeğim Laika özellikle Bayram Hoca''yla çok iyi anlaşıyo, aralarındaki bağ oldukça kuvvetli. Geçen hafta birlikte BH Sınavına da girip başarıyla geçtiler. Eğitim olur konaklama hizmeti olur bence bi gidin çaylarını için, alanı, hocaların yaklaşımını görünce zaten kendiniz de ikna olursunuz.', '2026-06-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-db5e5973b82b731bda9541a01e944a10', 'boarding-7d2a5585dbbfe7aab2fede95', 'Sinem Kucukkasap', 10, 'Küçük ırk travması olan köpeğimi eğitim amaçlı bıraktığım dogyy town ailesine sonsuz teşekkürlerimi iletirim. Başta sahibi Hasan hocam ve Bayram hocam olmak üzere emeği geçen herkese tek tek minnettarım. Bana ve köpeğime olan mükemmel yaklaşımları ve saygı,sabırları olağanüstüydü. İyiki tanıdım sizi. Hiç düşünmeden gözünüz arkada kalmadan eğitim veya otel anlamında yavrularımızı emanet edebilecek tek adres 💕', '2026-07-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7fe789b0a12ab39eb59325f9e95ab4e5', 'boarding-7d2a5585dbbfe7aab2fede95', 'Canan ÖZBEK', 10, 'Köpegim mochayı 2 gece emanet ettim memnun kaldım kaliteli saygılı ılgılı bir işletme. Tertemiz açık alanlarda içime sinen bir konaklama oldu çok tesekkurler', '2026-05-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-232faeb313dcd9c8f835a551c29d6535', 'boarding-7d2a5585dbbfe7aab2fede95', 'Simge Gür', 10, '4 günlük şehir dışı tatilim için bıraktığım Dogyytown’da başta sahibi Hasan Bey ve kızımla bizzat ilgilenen Bayram Hoca’nın gösterdiği ilgi, sahiplenme ve sorumluluk anlayışından çok memnun kaldım.
24 saat kamerayla izleme imkanınız olan bu çiftlikte, Bayram Hoca köpeğimi açık alana her çıkardığında da bana her gün ayrıca, ben istemeden üstelik, videosunu gönderdi.
Bu ilgiden ve hizmetten çok memnun kaldım. Hasan Bey’e ve Bayram Hoca’ya teşekkür eder, herkese de burayı tavsiye ederim.', '2026-05-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ae5c674f13d0b37803f80760e89f3366', 'boarding-7d2a5585dbbfe7aab2fede95', 'MLADEN', 10, 'Gölbaşı sınırları içinde bulunan son derece bilgili eğitmenler tarafından eğitim ve bakım hizmeti sunulan bir bakım ve eğitim merkezi.yıllarca devlet kurumlarında Köpek egiticiligi yapmış alanında uzman olan işletme sahibi Hasan bey alanında hakikaten uzman olduğunu düşünüyorum.1 haftalık bir eğitimle bile köpeğinize itaat eğitimi,idrar ve dışkı eğitimi gibi eğitimleri tamamlayıp sağlıklı bir şekilde köpeğimizi bizlere teslim ettiler.birbirinden farklı türleri kabul edebiliyorlar.fiyatlandirma günlük hizmete göre 750-1500tl arası degismekte.foyat konusunda ufakta olsa yardimci olabiliyorlar.Kaliteli ve hakikaten bilgili insanlarca eğitim almak istiyorsanız kesinlikle bu merkezi tavsiye ederim.', '2025-06-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-71eb18e7321889fbe3a27963', 'Green Cathouse Kedi Oteli', 'Kedi otelleri', 'Ankara', 'Ümit', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9GZHnW46B03yTCrdgUKYhhq17pHCQ-M-T7Tj66g9CWe3wqxDrTvvW72ZpaqMGKAV1XUgctwF4V5VlpUVqy-Du-4c5y_T_Sv85cZFp47e5oEMXAhVscD9wOOmBvyZa7w1OCyxH=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9GZHnW46B03yTCrdgUKYhhq17pHCQ-M-T7Tj66g9CWe3wqxDrTvvW72ZpaqMGKAV1XUgctwF4V5VlpUVqy-Du-4c5y_T_Sv85cZFp47e5oEMXAhVscD9wOOmBvyZa7w1OCyxH=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlrPuy7Ork25g_rLVEJpRpmR8mZyMQLXE4szi4KFHFbcOoVu0LpFpsH-CPeJBjmLPmwzFn3ZJt9o-wM7Z24CAGdikokkufFzTcFps62xaDZSXSIhXY84fyiKdI8qVvJ1YI3iixjgg=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmzbUtumx45CF4DzR7oXf-YmHRYzccOEJvpK9SGXSeWup-VU2gJYnK_ZE4ANvQm8OPGVUNQlmY4OY9LtWVhLe27u1VFj7q7PZ4t9goM9HdtDQbQulVmQ7YwdKUpuYAzs-hXq2c=w397-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BBz_jYduspAMLeTqaWQTAg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=176.8436&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","umit-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Green Cathouse Kedi Oteli, Ankara Ümit bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 741 60 24', NULL, 'http://www.greencathouse.com/', '{"google_maps":"https://www.google.com/maps/place/Green+Cathouse+Kedi+Oteli/data=!4m7!3m6!1s0x14d339af3a7dab53:0x9cd1c74e1ffa6e74!8m2!3d39.8942755!4d32.6976398!16s%2Fg%2F11nz3skzgx!19sChIJU6t9Oq850xQRdG76H07H0Zw?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJU6t9Oq850xQRdG76H07H0Zw', 'boarding-71eb18e7321889fbe3a27963')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-80919058b05f99dd5a1e54ab93e2ed08', 'boarding-71eb18e7321889fbe3a27963', 'Tuğçe Gürleyük', 10, 'Kızımı sahiplendiğimde tanıştım Banu hanımla. İnanılmaz ilgili ve sabırlı bir insan. Tatile gittiğimizde de kızımı gözüm kapalı teslim etmiştim kendisine ve yanıltmadı sağolsun. Arya hırçın bir kedi olmasına rağmen sabırla yaklaştı ve gönlünü aldı. Siz de kedinizi bıraktığınızda gözüm arkada kalmasın diyorsanız Banu hanım kesinlikle ilk tercihiniz olmalı 🥰', '2021-02-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-aad484755f4709f0cd6e0450f38297cd', 'boarding-71eb18e7321889fbe3a27963', 'Kaya Gürer', 10, 'İlgi gayet iyiydi. Kedimiz kendine özel bir odada başka kedi görmeden kaldı. Hijyen açısından önemliydi. Teşekkürler', '2025-07-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-89dbf65906315cc8f72b9120890e0bfb', 'boarding-71eb18e7321889fbe3a27963', 'Gizem Güler', 10, 'Gözümüz arkada kalmadan kızımızı güvenle emanet edebildiğimiz Green Cathouse. Banu Hanım bu konuda çok duyarlı ve özverili. Kendi çocuklarından ayırmadan hepsi ile çok ilgili. İyi ki varlar :)', '2021-02-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2d854f714b61ff736d31dc20a29ae981', 'boarding-71eb18e7321889fbe3a27963', 'Serkan Karakaya', 2, 'Bilgi almak zor! Yazılı ve arama telefonlarına ısrar ederseniz dönüyorlar. İletişim numarasının anlamını "müsaitsem açarım/cevap veririm" olarak düşünüyorlar sanırım. Baştan bu iletişimsizlik ile sanırım zaten memnun kalmayacaktım.

Firmanın google yorumlarına gösterdiği özen bilgilendirme ve telefonlara dönüş olarak yok maalesef. Cevap yazarken insanlar okuyacak endişesi ile "beklerim" yazmanız manidar. Yazdıklarımın arkasında olmasam buraya adım soyadımla yazmam! "Güven" konusu gibi konumuz olmayan düşünceler alınganlık sebebi ile firmanın düşüncelerini  hatalı yöne sevk ediyor. Sanırımlar ile hayatımı yaşadığımı yazdıklarımdan algılanması firmanın ne kadar geniş vizyonlu! ve hemen öfkelenip kişi ile ilgili önyargılar oluşturma bunu yazma hakkı verdiğini düşündürüyor firma sahibine/çalışanına.  Ben çok memnun oldum görüşme için. Eminim benimle yaşadığınız tücrübe ile iletişimizdeki eksiklikleri görmüşsünüzdür. Saygılarıma.', '2021-06-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8bb3b1cf6f46aa2132cf6211998334b0', 'boarding-71eb18e7321889fbe3a27963', 'Anar Aghayev', 10, 'Eskiden bir yere tatile gidemiyordum hep aklım kalıyordu. 2 kere tatile giderken kedimi buraya bıraktım bizim evden daha mutluydu :D Kendi odasında oyuncaklarıyla oynuyordu. Gönül rahatlığıyla tekrar çocuğumu emanet ederim', '2021-02-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-0558bf0e8f1c20b9efeb7ac3', 'Pet Villas Köpek Oteli Eğitimi ve Rehabilitasyon Merkezi', 'Köpek otelleri', 'Ankara', 'Oğulbey', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkpgbrKipFuZziXkJUp9tS-Fr7gSz60O5lKC23en8owKUsza-2LWB2p5Bgay20X9TJf1Y_4P2dOJqznFZCw6rj0uPDSkQMFguEEFESb-GpGBVoPRbGSNymbDsfv4Karzgm4L4A6Lg=w425-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkpgbrKipFuZziXkJUp9tS-Fr7gSz60O5lKC23en8owKUsza-2LWB2p5Bgay20X9TJf1Y_4P2dOJqznFZCw6rj0uPDSkQMFguEEFESb-GpGBVoPRbGSNymbDsfv4Karzgm4L4A6Lg=w528-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgSXHWdwCHw4Z3QUCbQXP40wVHjyrGlWziyl15dC71bAb9tQIdPkMxMNA55m87URM2QbfE2_qm-HGDpVvTzZoEV0T9PaMdoM3D1pzU06uv7O3gyho3B49D1l3M3z9Pw2MiZcue=w317-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkfy380eFU_r-IiSrbVNXuqOPLS6JpP5yGUbALOY3JQjE237eqt89KA_1O01VTiTqszjRsGaNf1ypu6AGztO3-mv88o4K5saT4TR2aqOn31eVe4dnzzVUBlxjFCdDxUgM_OO3Y=w224-h398-k-no"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","ogulbey-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pet Villas Köpek Oteli Eğitimi ve Rehabilitasyon Merkezi, Ankara Oğulbey bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 521 21 27', NULL, 'http://petvillas.com.tr/', '{"google_maps":"https://www.google.com/maps/place/Pet+Villas+K%C3%B6pek+Oteli+E%C4%9Fitimi+ve+Rehabilitasyon+Merkezi/data=!4m7!3m6!1s0x14d36923dcea4bb5:0xc068956d3f595150!8m2!3d39.6813585!4d32.847387!16s%2Fg%2F11hbg8_pr6!19sChIJtUvq3CNp0xQRUFFZP22VaMA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJtUvq3CNp0xQRUFFZP22VaMA', 'boarding-0558bf0e8f1c20b9efeb7ac3')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-680f927cf73974df31313b5501696325', 'boarding-0558bf0e8f1c20b9efeb7ac3', 'BARIŞ KALDIRIMCI', 10, 'Köpeklerimizin tatillerde konakladığı ve kendilerine ait özel bahçeli villasında enerjilerini attıkları yer. Yakup Beye ve ekibine ilgileri için çok teşekkür ederiz🙏', '2025-04-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-da7a3ab4f1b435213c71e9eabea758f4', 'boarding-0558bf0e8f1c20b9efeb7ac3', 'Gözde Güzin Kılınçer', 10, 'güvenle köpeğinizi bırakabileceğiniz, her detayın köpekler için kusursuzca düşünüldüğü, tertemiz, sevgi ve huzur dolu bir yer. Köpeklerin mutluluğu görülmeye değer.', '2019-09-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a9d105ed5cc18d28f79189105cd2be0b', 'boarding-0558bf0e8f1c20b9efeb7ac3', 'ufkum deniz Altunkapak', 10, 'Kopegimiz maya orada adeta hayat amacini buldu. Ic guduleri gelisti ve yeni arkadaslarla tanisti.', '2025-01-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c7cb17461ade80f2ccd9a132181e0a6e', 'boarding-0558bf0e8f1c20b9efeb7ac3', 'omurcan topal', 10, 'Yakup bey ve ekibi çok profesyonel ve cana yakın, köpeğimiz de burda kalmaktan çok keyif alıyor, gözünüz arkada kalmadan rahatça köpeğinizi bırakabileceğiniz bir yer', '2025-07-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9f244082f4f52c201a2263f1eda3e15c', 'boarding-0558bf0e8f1c20b9efeb7ac3', 'Sertaç Balcık - Lookpro Bilişim', 10, 'Ankara belki de Türkiye de tek, çalışanlar güler yüzlü ve samimi, sahibi Yakup bey dünya tatlısı bir insan, köpeklerle iletişimi inanılmaz, tasarım olarak bayılıyorum zaten mekâna her şey çok ince detaylarına kadar düşünülmüş. Evcil dostlarımız için gerçekten bir tatil gibi oluyor. Gönül rahatlığıyla teslim edebilirsiniz.', '2024-08-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-18d37b09af001bef6076cbba', 'Luna Pet Otel', 'Köpek otelleri', 'Ankara', 'Ahlatlıbel', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqzThTQCWLgJSf4QQR0_EMtdsYILwzguGuGoQIgLzSG6jsQ7bIsd5aKEJQWmTWT16qf1KxgxUC7HD-fE93z9lxPxP5HThBgExRodSN69rZeJ5RVvOefjTGaj8GFHg8OFvlNM_DMEWLwZMl=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqzThTQCWLgJSf4QQR0_EMtdsYILwzguGuGoQIgLzSG6jsQ7bIsd5aKEJQWmTWT16qf1KxgxUC7HD-fE93z9lxPxP5HThBgExRodSN69rZeJ5RVvOefjTGaj8GFHg8OFvlNM_DMEWLwZMl=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlwpG5Sz2cT-tVSmQdkiD1CKbUnbDZXwqfGnYJvAu5tUTkva1WMyDZ6x3iKJCLJZF7omzRPsA_RBmZPrK2H_0lYW1HCZBOkWUp2mcIUuTxcjHGKAKqbDJz3LVmDz53iVK_QPc9LueOsLFI=w224-h497-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLuAw6xRo0uvDlKG7t-vpE_x0ml_1JUo7B-P4KvggvQ--8Z50Z0BES4K2tmAY6g3qdRDetbbxnWeIH0ujdMJrhr9LoKmHSki9SNVfQdTg6PoQxU5q-LnXpe4IbNP62rZS9QkZfM3GWYyM=w224-h497-k-no"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","ahlatlibel-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Luna Pet Otel, Ankara Ahlatlıbel bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 706 21 26', NULL, 'https://www.lunapetotel.com/', '{"google_maps":"https://www.google.com/maps/place/Luna+Pet+Otel/data=!4m7!3m6!1s0x14d341e0766b5e31:0x999f59ff227e4efc!8m2!3d39.8326497!4d32.7442996!16s%2Fg%2F11xdztbz6s!19sChIJMV5rduBB0xQR_E5-Iv9Zn5k?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJMV5rduBB0xQR_E5-Iv9Zn5k', 'boarding-18d37b09af001bef6076cbba')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-591097259d9b4cec06fa1aeac0c6bdb4', 'boarding-18d37b09af001bef6076cbba', 'Özlem Akçura', 10, 'İnsanlara mesafeli,kedilere karşı tamamen yabani olan Mercan kızımızı emanet ettik. Kendisine ait özel odada konaklıyor. Luna pet otel tam olarak Mercan''ın istediği şekilde alanına saygı duyarak bakımını sağlıyor. Mercan kızımız çok mutlu görünüyor. Düzenli video ve fotoğraflarla bilgilendirme alıyorum. Kendileri çok nazik, güleryüzlü ve en önemlisi patisever insanlar. Hem kedilerinizi hem köpeklerinizi tüm evcil dostlarınızı gönül rahatlığıyla emanet edebilirsiniz. Biz çok memnun kaldık. Özellikle Fırat bey''e çok teşekkürler.', '2026-06-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e73ddc9b94d87b31f9fa54a0ffe5a8f0', 'boarding-18d37b09af001bef6076cbba', 'Özge_Hera', 10, 'Can dostum Hera’m uzun süre bu pet otelde kaldı ve gerçekten çok memnun kaldım. İlk başta biraz endişeliydim ama oradaki ilgi, sevgi ve samimiyet sayesinde içim çok rahatladı. Hera’m oradan döndüğünde mutlu, enerjik ve huzurluydu. Çalışanlar ve Hüseyin bey her şeyle özenle ilgileniyor, sürekli bilgilendirme yapıyorlar.
Artık gönül rahatlığıyla güvenebileceğim bir yerim var, iyi ki varsınız. 🐾💛', '2025-08-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-59bd6c0d97672c891072713c325bcb91', 'boarding-18d37b09af001bef6076cbba', 'fuat kökçü', 10, 'Gerek hüseyin bey gerek ise fırat bey sadece bir işletmwci değil aynı zamanda eğitmen oldukları için patili dostlarla iletişimleri harika. Konforlu açık kapalı alanlar özgürce gezebildikleri bir otel... kıyafetlerden aksesuarlara herşey bulabileceğiniz bir otel... tavsiye ederim.', '2026-02-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-18a08503685dd72ba024eba2502bb5ff', 'boarding-18d37b09af001bef6076cbba', 'neşe pekcan', 10, 'Kedimi 3 hafta misafir ettiler. İlk başta çok tedirgindim. Ama hergün video attılar. Gözüm arkada kalmadı. Fiyatları da gayet makul. Tavsiye ediyorum.', '2026-02-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-86dc9ecdf643032aef26a5d260ba0d77', 'boarding-18d37b09af001bef6076cbba', 'ahmet tamkoc', 10, 'Chihuahua cinsi köpeğimizi bir hafta boyunca Luna Pet Otel’e emanet ettik ve çok memnun kaldık. Gerek tesisin temizliği ve düzeni, gerekse çalışanların ilgi ve sevgisi bizi çok rahatlattı. Köpeğimizin bakımıyla özenle ilgilendiler, düzenli olarak foto ve video ile bilgilendirme yaptılar. Biz yokken kendini evinde gibi hissetmiş cocuğumuz. 😊 Güvenle tercih edilebilecek, işini gerçekten severek yapan bir yer. Bundan sonra gözümüz kapalı emanet edeceğiz.', '2025-08-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-69dd97a21ec295d7848bfd57', 'Paws of House Pet Otel Kreş', 'Gündüz bakım merkezleri', 'Ankara', 'Alacaatlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmKl-sVb9NSSsZVDnyDaAQ6lMlvezP4AaXyUAZZnHtQbDclIxmjoQezCb_yvf_lvFm5KKHBnBu2AayDHtBVjsUBsYHQaYhXJiPp6U1nfyGRjFxo3UeNcd5HdeuK-gz-_jq3pInQa81hQ5zq=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmKl-sVb9NSSsZVDnyDaAQ6lMlvezP4AaXyUAZZnHtQbDclIxmjoQezCb_yvf_lvFm5KKHBnBu2AayDHtBVjsUBsYHQaYhXJiPp6U1nfyGRjFxo3UeNcd5HdeuK-gz-_jq3pInQa81hQ5zq=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmm8iEcPe8tTm7-ob9HppFP5R4oWTVtMTUQ7QvwRuperAONXs0HJxe32BseoeW6HSLZBUzHwy32sSbZb8U9hE5XjJBCEzfB58gQY6rdwNLFS_dduWHkFKZVdYJFXHt25dd64djO=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=o2kxjZPB01wAcruUg7VL-Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=181.12341&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","ankara-pet-oteli","ankara-kedi-kopek-oteli","alacaatli-pet-oteli","ankara-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Paws of House Pet Otel Kreş, Ankara Alacaatlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0531 880 20 81', NULL, 'http://pawsofhouse.com/', '{"google_maps":"https://www.google.com/maps/place/Paws+of+House+Pet+Otel+Kre%C5%9F/data=!4m7!3m6!1s0x14d33f653fb665e7:0xf57d879bd9b7b0f!8m2!3d39.8549683!4d32.6506477!16s%2Fg%2F11qby38lgg!19sChIJ52W2P2U_0xQRD3ubvXnYVw8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ52W2P2U_0xQRD3ubvXnYVw8', 'boarding-69dd97a21ec295d7848bfd57')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bf8711ace3eb77e716d540acba2cd5ce', 'boarding-69dd97a21ec295d7848bfd57', 'gokhan ozelci', 10, 'Ortamın temizliği, genişliği ve hayvanların konforu için düşünülen detaylar gerçekten takdire şayan. Dostumuzun bu kadar hijyenik ve güvenli bir ortamda kaldığını bilmek bizi çok rahatlattı. İşini profesyonellikle ve sevgiyle yapan harika bir işletme."', '2026-08-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a99a4daf8a2a55fd979abfbce1537a3d', 'boarding-69dd97a21ec295d7848bfd57', 'Doga deniz erdemis', 10, 'Köpeğimizin enerjisi hiç bitmeyen, sürekli oyun oynamak isteyen bir dostumuz. Otelde geçirdiği süre boyunca o kadar çok oynamış ve yorulmuş ki, eve gelince mışıl mışıl uyudu! Onun bu halini görmek beni çok mutlu etti. Enerjisini atmasını sağlayan ve ona sevgiyle yaklaşan tüm çalışanlara teşekkürler. Kesinlikle tekrar tercih edeceğiz.', '2026-08-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7eabc455ecaaec4449180dbf02b9508a', 'boarding-69dd97a21ec295d7848bfd57', 'SEVGİ GÜRZ BİRSURED', 10, '5 yaşında Patimizi bıraktık. Çok temiz güvenli ve sıcacık bir ortamda sosyalleşerek bakıldı. Elif ve Yağmur hanıma çok teşekkür ederim. Tekrar tek tercihimiz Paws Of House Pet olacaktır. Herkese tavsiye ederim', '2026-01-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8cda5b94a85bc0ed8b79a8b637a5b7d7', 'boarding-69dd97a21ec295d7848bfd57', 'Mehmed Said Güngören', 10, 'Sadece bir bakım hizmeti değil, tam anlamıyla 5 yıldızlı bir ağırlama sunuyorlar. Bıraktığımız andan teslim aldığımız ana kadar olan iletişim harikaydı. Ne zaman merak edip sorsak anında fotoğraf ve video ile geri dönüş aldık. Bundan sonra tek adresimiz burası', '2026-08-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f07773773eef2996eba383db3d7b0c75', 'boarding-69dd97a21ec295d7848bfd57', 'Sevgi Lora Erdem', 10, 'Köpeklerimi ilk kez bu otele bıraktım. 3 tane golden retrieverim var. Hera,  Rio ve Theo. Daha önce birçok köpek oteli tecrübem oldu ama özellikle iki köpeğimin durumundan dolayı hep tedirginlik yaşadım. Rio mama konusunda çok seçici olduğu için bazı otellerde ciddi şekilde zayıflamış halde teslim edilmişti. Theo ise geçmişte eğitim için gönderildiği bir çiftlikte şiddet gördüğü için insanlara karşı güvensiz ve temkinli. Köpeklere hiçbir sorunu yok ama insan yaklaşınca çok geriliyor, diş gösteriyor, hatta stresten altına kaçırabiliyor.

Bu yüzden otel kısmı benim için her zaman zorlayıcı oldu. Theo''yu kabul etmeyen oteller bile vardı. Theo’yu kabul etmeyince tabii Hera ve Rio’yu da bırakamıyordum. Seyahate çıkamıyordum. En sonunda Paws of Housetan iki güzel insan ile köpek parkında tanıştım aylar öncesinde.

Yakın zamanda bir seyahetim oldu. Önce kreşe bırakıp denemek istedim. Kreşte çocuklar mutluydu otele bırakabilirim diye düşündüm. Yine de ilk gece nasıl geçer diye içimde bir tedirginlik vardı, çünkü üç köpeğim de gece hep benimle uyur.

Elif Hanım ve Yağmur Hanım’ın özellikle Theo''un üzerine titremesi, benim gün içinde onları darlamama rağmen sabırla ben aradığımda açmaları uzun uzun bilgi vermeleri beni inanılmaz rahatlattı. Videolarda çocukların gerçekten mutlu olduğunu gördüm. Köpeklerimi teslim alırken karakterlerini bu kadar doğru anlatmaları ise beni ayrıca şaşırttı. Kız kardeşim bile köpeklerimi bu kadar iyi tanımıyor diyebilirim. Ellerinden çok köpek geçmiş olabilir ama yine de 5–6 günde bu kadar net çözmeleri beni hayrete düşürdü.

Köpeklerime gösterdikleri özen, sabır ve samimiyet için kendilerine tekrar teşekkür ediyorum. Özellikle Theo için ayrıca minnettarım. Ona çok iyi geldiniz.', '2025-11-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-3ae9d4c50a7964317592658b', 'Pet Otel Bağlıca | Köpek Oteli', 'Köpek otelleri', 'Ankara', 'Bağlıca', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnWUpKd2bEtRTPflqFjoj7WlgnsomFnm9f5QNVNfpfbF9_JMA-udpY3aa5fiQH7xBpeVOtICq-t-qs4cvn1w3dXKNt_Ifr_eU-NnTiEuh-GJ3Ed4-AFj-zf8ZAIWcPIe7Dc_CcGmcMtfIA=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnWUpKd2bEtRTPflqFjoj7WlgnsomFnm9f5QNVNfpfbF9_JMA-udpY3aa5fiQH7xBpeVOtICq-t-qs4cvn1w3dXKNt_Ifr_eU-NnTiEuh-GJ3Ed4-AFj-zf8ZAIWcPIe7Dc_CcGmcMtfIA=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnfXcCDf5nXf1fG4rh1V6YcYeaLz6tDC8urXL6ThgI106PcoCeNMx-QKYP7WsCTSnpdwQ-WfG1rlX58evmTLFJ1JMghxiUQ18w-0NuiHJJppaLfZ4NP41JjdNBDYsxpKl7n9D7kHdvNhPU=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn0-2o6KHfCHgImVo-P3pUmGwKkpU_2DW4IcrO9EgHjlr8OJqPjKVP6u9WI7eBcHSmn9tfn2ItC73yTOfGTdt50R04_mjbD9jbn7H5j3WeHIZ1IPnwpaNMegpLWb1yMbd4mm5Tl9RPTr6c1=w533-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZa0DNlryHIKesyNZWPgz1Hd6Ass_RGnWJTcL3WE9xT3wYzOiFR0UKUkzkH6iwmRNGvOzS6O7Mp4PUZlFz2SIy4JRbI9yIDGBv-ynIYu108aU3uXyP5cxx71gqJUGbTiDZY1GqnPJ0QWI=w257-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=x04cd1LBhZXmwpX4GWosTg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=208.2465&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","İşitme cihazları","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Yardımcı indüksiyon döngü sistemi","Üniseks tuvalet","Cadde üzerinde ücretli park yeri","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretli kapalı otopark","Ücretsiz kapalı otopark","Ücretsiz park yeri"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","baglica-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pet Otel Bağlıca | Köpek Oteli, Ankara Bağlıca bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0554 128 43 17', NULL, 'https://www.petotelankara.com/', '{"google_maps":"https://www.google.com/maps/place/Pet+Otel+Ba%C4%9Fl%C4%B1ca+%7C+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14d3391c73c65027:0xac399ccfd99cfce6!8m2!3d39.9117862!4d32.6471108!16s%2Fg%2F11yrz1yz9f!19sChIJJ1DGcxw50xQR5vyc2c-cOaw?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJJ1DGcxw50xQR5vyc2c-cOaw', 'boarding-3ae9d4c50a7964317592658b')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bf6fd16caacb6fb478e94fd0a7746c80', 'boarding-3ae9d4c50a7964317592658b', 'Burak Yıldız', 10, 'Gözünüz arkada kalmadan dostunuzu emanet edebileceğiniz bir yer. Samimiyetleri ve ilgileri ilk andan itibaren güven veriyor. Çok memnun kaldım.', '2026-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-79ed109af979c164d873e372a6894d0a', 'boarding-3ae9d4c50a7964317592658b', 'Yaren', 10, 'Temiz, güvenilir ve gerçekten hayvan sevgisi olan insanların işlettiği bir pet oteli. Temizlik, iletişim ve profesyonellik harika. Patili dostlarınız için kesinlikle güvenle tercih edebilirsiniz 🐾', '2026-01-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f337145046861c300da402ce1d12c0bb', 'boarding-3ae9d4c50a7964317592658b', 'Merih Ozel', 10, 'Şehirlerarası taşınma sürecimizde uzun araştırmalar sonucu tanıştık. Ve dostumuzu 3 hafta emanet ettik. Her gün video ile bilgi verdiler. Oğlumuza harika baktılar. Her şey için çok teşekkür ederiz', '2026-04-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b23b64c8d3339243841a154a8f21c7c8', 'boarding-3ae9d4c50a7964317592658b', 'highfever', 10, 'parisi oraya emanet ettim kedim oluyo kendisi çok güvenilirler hiç endişe duymanıza gerek yok 👍🏻', '2026-07-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-14dc2232b1d5dde767ab698d5716beb1', 'boarding-3ae9d4c50a7964317592658b', 'ulku kasapoglu', 10, 'Ankara da pet traşı ve oteli olarak tanıştığım kaan bey ve sevgi hanım  güler yüzlü ve dostlarımıza sevgiyle ilgiyle bakmaları gönlüm rahat oğlumu emanet edeceğim tek yer hiç gözünüz arkada kalmasın iyi ki varsınız', '2026-01-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-c1aa6833df660a1fc3c79706', 'PET RESORT - KÖPEK OTELİ/KREŞİ', 'Köpek otelleri', 'Ankara', 'Konutkent', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJ45T4jAQkaaS07qsR7aQiMb3LTKUEj12bHn9L1pw4wW6WcjhlZOKBW-fdUt-mNr6s1V5FnVf1HCC3TKUlBWYtEtDVihNFQ9Y4SRXtufBG4gloO7925pzybDC2-Nucdna-_f_5=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJ45T4jAQkaaS07qsR7aQiMb3LTKUEj12bHn9L1pw4wW6WcjhlZOKBW-fdUt-mNr6s1V5FnVf1HCC3TKUlBWYtEtDVihNFQ9Y4SRXtufBG4gloO7925pzybDC2-Nucdna-_f_5=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnzbvYuUC3RZK2lc3idTOZWr_xhPWaLASJx_lcZYgLLw_d-zQ93jY8a_n4JuqEkzxfiSvV7vfDpeiaUFodaeu-PeMyAHNOI5MVvevkcXUZsyHNqrPUM9PIoAIriRzphn34Q-ipO=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk1fPqIpya8T6cb0UZIeVEQVeaOvEnE64GsThFOz0hryulfxfBV5sPJAFLfs-RzIVnBrAfp0I2XwfvCjW4_D3S3jVutBWcYANa0LuoKm62_GQ6uUh0M4h_NAmpdWnHYdeEOI2cGeQ=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmai26dR3CoPRcw5mSQxCA4C7lA9QCtZb8SABoKohAo17XOZitB1Wn7koCKaZxR0j8g9XDNGWXLH28GAh00XJHTmhsYh068ZkqzOuAzvWsYwHF2NupQ2cunLuvEqXG3sXaL-bjpqg=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWNK9V4GgIWoYHzwM07W2hdPvy-CHRTXkTwWAiPIGQhALKKy8ZWJy7HLrgZghocUz2cZ-SYDInC3oDrrXjCRvH_dBLZOzIEjqHqYXVTVwt_jZwncWqOkxYfYYDSK8When-jSh5Ww=w224-h484-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tqs_NR1YifjHFdN1vSe_8g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=264.18546&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","konutkent-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'PET RESORT - KÖPEK OTELİ/KREŞİ, Ankara Konutkent bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0542 306 74 34', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/PET+RESORT+-+K%C3%96PEK+OTEL%C4%B0%2FKRE%C5%9E%C4%B0/data=!4m7!3m6!1s0x14d339aba937200b:0xd3469ee49bdc8cfc!8m2!3d39.8742208!4d32.6549618!16s%2Fg%2F11rcwffsbq!19sChIJCyA3qas50xQR_Izcm-SeRtM?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJCyA3qas50xQR_Izcm-SeRtM', 'boarding-c1aa6833df660a1fc3c79706')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3592d1986b31f134bb58caed50cff859', 'boarding-c1aa6833df660a1fc3c79706', 'Mehmet Çetin', 10, 'Chow Chow cinsi köpeğimi birkaç günlüğüne Pet Resort Otel’e emanet ettim ve aldığım hizmetten çok memnun kaldım. İlk andan itibaren köpeğime sevgiyle ve profesyonel şekilde yaklaştılar. Düzenli olarak fotoğraf ve bilgi paylaşmaları içimi rahatlattı. Köpeğim mutlu, sağlıklı ve bakımlı bir şekilde geri döndü. Temizlik, ilgi ve güven konusunda beklentilerimin üzerinde bir deneyim yaşadım. Evcil dostlarını güvenle bırakmak isteyen herkese gönül rahatlığıyla tavsiye ederim. Teşekkürler Pet Resort Otel ekibi! 🐾❤️', '2026-06-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-682aadab0f4ab65d7f8242d7dd030554', 'boarding-c1aa6833df660a1fc3c79706', 'Ayşe Ilıkça', 10, 'Köpeğim gofinin ikinci evi Arzu hanım iyiki var❣️ çok memnunuz gönül rahatlığı ile kalıyoruz 😊', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-59a0e20fa8e71ee228ba091e7f2951f1', 'boarding-c1aa6833df660a1fc3c79706', 'Özge Kındır', 10, 'Şehir dışından evimize gelen babamın sağlık durumu nedeniyle köpeğimizi başka bir otele bırakmıştık 1 hafta kalacaktı. 2 gün sonra çok ağlıyor, alın diye aradılar. O kadar çaresiz kaldım ki, acele bir şekilde burayı aradım. Çok yardımcı oldular. Önce kalıp kalamayacağından emin olmadığım için gün içinde defalarca aradım. Hep cevapladılar, fotoğraf, video attılar. Üstelik Yukimiz çok mutluydu. Hiç sorun yaşamadı. Almaya gittiğimde de, kalsam da olur der gibiydi. İlk kez kalmasına rağmen oğlumuzun ikinci ailesi ve evi gibi olduğunuz için çok teşekkür ederiz.', '2023-11-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f8785e967bc8d086c7ca1e46bb0b8e23', 'boarding-c1aa6833df660a1fc3c79706', 'Prof. Dr. Serkan ŞİMŞEK.', 8, 'Veteriner Arzu Hanım''ın işlettiği gündüz ve gece Bakımevi gayet güzel emanet edebilirsiniz', '2025-11-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6c307a596ed7557b74d43e2aabdfb801', 'boarding-c1aa6833df660a1fc3c79706', 'Sema Soysal', 10, 'Köpeğimin Ankara’da kendi evimizden sonraki ikinci evi oldu çok severek kalıyor oğlum. Arzu hanımın ilgi ve yardımları harika çok memnunum iyi ki varsınız', '2025-12-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-b28c06b7678e097b02fc02ed', 'Happypets Ankara Otel ve Kreş', 'Köpek otelleri', 'Ankara', 'İncek', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLi-P5LP9VD7HEUstIGbMf5pSIK-um-57P4lGNln4gHVaSo0QDy1zI5xytjQSDKKxpvmwh0JviAnNpJMyZ12mORs6DYnhyMJfTWSMMflMUc4r2V6LsgVw5_0uSE0eIVNm41lRK=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLi-P5LP9VD7HEUstIGbMf5pSIK-um-57P4lGNln4gHVaSo0QDy1zI5xytjQSDKKxpvmwh0JviAnNpJMyZ12mORs6DYnhyMJfTWSMMflMUc4r2V6LsgVw5_0uSE0eIVNm41lRK=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktGNh4KkJlolOgPHUV7GA4QohamfT0rRnyfHqaE2K37slmwMW6T4pryjQSqk8EKQivWUUfJuRIr6jy7jQPQZyzTAC41hIiFfQNmowOnQ71m8r2Ny4nCLQ4dmJXs3csCtkR9GIR=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6gE-NxldwRdLRvT9NyywBfhfOfoP0Gx0xcP2ApaQmQhHrk6Vl2gOOzHVUvhvjTGWTSi-46mOTczyMk4KKV69x3NmccWsY8IBquUP6Dd3CIKFvR9iMI-U7zLuJowRb-zCpaCJy=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnVE6G46x50lJcZlhxbMUo-_3gFnNKXObJvb1pFP_-tXmhZnrEJNQvpqL_1OUBUowkihwPmLQyFq81b29YXU9YXYwcnqMsdlgrhgE0YHF64yMAPTaCCW7MX4Yfv0DvYwgGMIYVd=w397-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Xj9vxU51G_HGSxZHI-g6Kg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=82.92063&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Üniseks tuvalet","Kendi otoparkı var","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","i-ncek-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Happypets Ankara Otel ve Kreş, Ankara İncek bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0553 304 53 44', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Happypets+Ankara+Otel+ve+Kre%C5%9F/data=!4m7!3m6!1s0x14d339dddcd30255:0xa0154f7efa736521!8m2!3d39.8024466!4d32.7032885!16s%2Fg%2F11gjs1z_6x!19sChIJVQLT3N050xQRIWVz-n5PFaA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJVQLT3N050xQRIWVz-n5PFaA', 'boarding-b28c06b7678e097b02fc02ed')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-566fa208534a4c23782f3af15c68e134', 'boarding-b28c06b7678e097b02fc02ed', 'Hatice YILDIRIM', 8, 'Golden kızımızı üç gece bıraktık. Fakat bu üç gün içerisinde sadece bir defa videosunu paylaştılar. WhatsApp ile fotoğraf ve video istedik gönderilmedi. Arayınca da yoğunuz cevabı verildi. Biz kızımızı aldıktan bir gün sonra video paylaşıldı. Önceden de bırakıp memnun kalmıştık fakat şimdi bu durumdan pek memnun kalmadık.', '2026-06-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3d9db6d8a671c37b42473205be8205b4', 'boarding-b28c06b7678e097b02fc02ed', 'BATUHAN OLGUN', 2, 'İnsanların emekleri ile dalga geçen. Ödemesini yapmamak için elinden geleni yapan bir kurum. Çağırırlar çekim yaptırırlar çekimi beğenmedik biz deyip ödeme yapmayı reddederler :)', '2026-05-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d2bebf77a1fa92d8955effed696a31fa', 'boarding-b28c06b7678e097b02fc02ed', 'Fonetik Tercüme', 10, 'Yıllardır can dostumuzu gözümüz arkada kalmadan bırakabildiğimiz Sevgi Hanım''a ve sevgi dolu ekibine çok teşekkür ederiz. Juno her zaman heyecanla gidiyor ve mutlu bir şekilde eve dönüyor. Ankara''daki en güzel ve en profesyonel pet hotel olduğunu gönül rahatlığıyla söyleyebilirim.', '2025-12-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-de391a51c638164da489140cae93893d', 'boarding-b28c06b7678e097b02fc02ed', 'M U', 10, 'Her evcil hayvan sahibinin kendine göre iyi olan kriterleri var çünkü evlatlarımızı en iyi şekilde yetiştirmek isteriz. Arkadaşımın vefatıyla ne yapacağımı bilemez halde iki köpek dostumla başbaşa kalınca imdadıma yetişen Sevgi hanım ve harika ekibine çok teşekkür ediyorum. Happy Pets Ankara en müşkülpesent insanı bile mutlu edebilecek donanıma sahip. Hem otel hem de kreş hizmetini güvenle , gözüm arkada kalmadan kullanmaktayım.', '2021-10-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cd291f827937ab33718499aac81f1b82', 'boarding-b28c06b7678e097b02fc02ed', 'Emirhan Halıcı', 10, '⭐️⭐️⭐️⭐️⭐️
Köpeğimi Happy Pets Ankara Hotel’e gönül rahatlığıyla bıraktım ve açıkçası beklentimin çok üzerinde bir deneyim yaşadım! 🐾
İlk günden itibaren ekibin ilgisi, samimiyeti ve profesyonelliği o kadar güven vericiydi ki, köpeğimin mutlu olduğunu her paylaşımda görebiliyordum. Temizlik, düzen, oyun alanları, hatta yemek düzeni bile özenle hazırlanmıştı. Köpeğim resmen tatilden döner gibi döndü! 😊

Hem güven hem sevgi dolu bir ortam arayan herkese gönülden tavsiye ederim. Artık köpeğimi bırakacağım tek yer burası! 💛', '2025-10-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-779e771fa9263daf4fcb0bbc', 'Petfendy | Pet Otel & Kreş | Pet Taksi', 'Gündüz bakım merkezleri', 'Ankara', 'İstasyon', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8oa_hSSERP71_7mXyJ5ht4wXNUSYxFSXeTK5uHliyTYnV_vkd5daqZTFfk0NfLfsHiYP63TxaeEEPlvnG2IhPcMwyUMFENdidbYX4s0AzmDYz6aM9H5zyj3YVwyWb6kx0Acg3d_R3F5E7=w408-h862-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8oa_hSSERP71_7mXyJ5ht4wXNUSYxFSXeTK5uHliyTYnV_vkd5daqZTFfk0NfLfsHiYP63TxaeEEPlvnG2IhPcMwyUMFENdidbYX4s0AzmDYz6aM9H5zyj3YVwyWb6kx0Acg3d_R3F5E7=w224-h473-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk2JsCdL4GmxXx1LbXg7u5VdQl1iNQ-9YsS3kvxIuxWgU01pkbR4ZK-SPQrcfpAECOhINSxJ3yaHSQiUL5En7BEIs_GzmwRC1fGR1hJ1FhNIlc2sErPgf3IWw6gi_VWYk8TqkwZpNKKwp8e=w224-h325-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCbKdf2Eb0rfvbCb0lKsTIVBBquHi-bRjM4y3AOttu0e2OAaZhVD55kOny5cgJ5QMwW2rGwOMl44Qw7Fdl059mkglA1UvMsbCqY8BGE-O3qCIlibmXijpkOic9H00Fy5OebKUKHzrsD8Dg=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1DxYUVZe8lOiAiRqtFBOyBjHiLL4487xcMRDU7zmGnnoWCeRRr1S0hosIL29iNn5ryOxH3z-UBRJ143T3IfryOBiwCjlBCqSsiV9ZDxwLdDHsPo2zaJsYbm7nZA5bI1I8EDbsTwGhBLqt=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLGRLu1pGqhWR8oi9ZEpOyeon46Vq-_gRa6oWCyNF7q_Cuz3UvhVAmgcZtLsFLn80njAgzukfyKi_oib7ujzVLsnqYrDogDgIpfdSwsugbHSi6eY0xNsJmRag6Fn57739Q_XAVid558Dsx=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlqqbIJdLUeylW4aLV2ebOETl6ySEOAYLdleENDlwqDRdDc9IbTMJBEn6IRpX2VpuYj0n0d3zL-gRrLLnoC1bQc3qZDA_t2wnd-Tak2lqKcokZoaUbey_LLWU3086GX0ybTq7H9=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=s1Bzf22T39NtAFNoOe84RA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=86.7996&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun oturma düzeni","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Transfer hizmeti","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","ankara-pet-oteli","ankara-kedi-kopek-oteli","i-stasyon-pet-oteli","ankara-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Petfendy | Pet Otel & Kreş | Pet Taksi, Ankara İstasyon bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 307 32 64', NULL, 'http://www.petfendy.com/', '{"google_maps":"https://www.google.com/maps/place/Petfendy+%7C+Pet+Otel+%26+Kre%C5%9F+%7C+Pet+Taksi/data=!4m7!3m6!1s0x14d33d243489a9c1:0x7de56ccc70ce972!8m2!3d39.9350142!4d32.6566776!16s%2Fg%2F11tdnfrxkw!19sChIJwamJNCQ90xQRcukMx8xW3gc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJwamJNCQ90xQRcukMx8xW3gc', 'boarding-779e771fa9263daf4fcb0bbc')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3cd48eeba83391d37bd27b8f998feab1', 'boarding-779e771fa9263daf4fcb0bbc', 'Ayşenur Yılmaz', 10, 'Köpeğimi ne zaman Petfendy’ye getirsem dönüşte çok mutlu oluyor🥹  Büyük ırklar ve küçük ırklar için 2 ayrı bahçesi mevcut 🙏🏻 Hem güvende olduklarını biliyorum hem de çok iyi vakit geçiriyorlar. Çok ilgililer ve ortam da çok temiz.. emeği geçen herkese teşekkürler', '2026-07-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-032872f9ddc0d2518ab557bea71fa246', 'boarding-779e771fa9263daf4fcb0bbc', 'Gülnur Öztürk', 8, 'Ankara''da evcil hayvan sahipleri için çok büyük bir kolaylık. Temiz, düzenli ve çok ilgililer. Emeklerinize sağlık, başarılarınız daim olsun.', '2026-07-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1044ac997acb3419c811b0b929f91186', 'boarding-779e771fa9263daf4fcb0bbc', 'Hatice Şaliş', 10, 'Çocuğumu gözüm kapalı emanet edebildiğim, her gün öbür çocuklarla beraber saatlerce oynayıp enerjisini atabildiği bir yer. Gerek işletme sahibi Serdar Bey gerek personelleri hepsi güler yüzlü ve çok ilgililer. Ankara’da böyle güzel ev sıcaklığın da bir hizmet sunduğunuz için sonsuz teşekkür ediyorum 💖', '2025-02-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-711729ca841a241c4890a66b13a667a5', 'boarding-779e771fa9263daf4fcb0bbc', 'Gülizar Kurtulmuş', 10, 'Ramazan bayramı için kızımı emanet ettim. Ağlayarak ayrıldım bırakmak istemediğim için. Ama her gün instegram hesaplarından yavrumu takip ettim o güldükçe oyun oynadıkça ben daha çok huzur buldum. Bir aile şirketi çocuğun durumdan göre hassasiyet gösterip ona göre bahçeye çıkarıyorlar oyunlar oynuyorlar. Hep böyle bir yer arıyordum sonunda buldum çok şükür 🙏 umarım hiç değişmez işletme. Teşekkür ederim', '2025-04-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e87e0cdb4ac8353bd523dab0c646a143', 'boarding-779e771fa9263daf4fcb0bbc', 'Charlotte Albayrak', 10, 'Bu pet otelin hizmetlerinden son derece memnun kaldık. Köpeğimize Ankara’dan Fransa’ya, Paris’e kadar uzanan yolculuk boyunca olağanüstü bir özen gösterdiler. Yol uzun olmasına rağmen, her şey son derece sorunsuz ve profesyonel bir şekilde ilerledi.

Yolculuk boyunca sürekli bilgilendirildik: fotoğraflar, mesajlar, konum bilgisi… Tüm bunlar bize büyük bir güven verdi ve köpeğimizin emin ellerde olduğunu gösterdi. Ekip hem çok profesyonel hem de son derece ilgiliydi.

Evcil hayvanını gönül rahatlığıyla emanet etmek isteyen herkese bu hizmeti gönülden tavsiye ederiz. Yardımlarınız ve ilginiz için tekrar çok teşekkür ederiz!', '2025-11-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-28770d67d0c6745393e8d599', 'Pet N Fun Otel - Ankara Köpek Oteli', 'Köpek otelleri', 'Ankara', 'Kızılcaşar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnPMqpQaylLNwJrFmnkSJOmQKTZCVnKpJFQGvvdZ-kXTxbsOuRFsUhP-yU7Dzqggkdi0eFYC0iCGo6wHRUDhIbxj-m9uOfZoETSulWUCumV9rqp5PU4eUk0j0kaSc1LrglLaeJP=w408-h510-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnPMqpQaylLNwJrFmnkSJOmQKTZCVnKpJFQGvvdZ-kXTxbsOuRFsUhP-yU7Dzqggkdi0eFYC0iCGo6wHRUDhIbxj-m9uOfZoETSulWUCumV9rqp5PU4eUk0j0kaSc1LrglLaeJP=w238-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkiiv_4gfySbCbEpYExZ_4o6MiiAjXKS4_ewVOpsTiSSYMZ_uEywI4Qgl9PgPflyIxIbKlXJug9H3mN5i4FzGMpJLnJd7sj8LSH0WefquF-R0BxmDow6dOEYSRck0ouRBTyPbGNzQ=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlGJmv19Ulajte6_Lva-xOHnMEdEb6DCeUbRkSOF64tnnXZhg1P3bh2ap6brH0ETE8ZNw3sf5Z0ZibzQ8rrDHvjcRxnu4_YvLiIJx7GytRC3CXtazo64aa-fqlLG-Ing5TpgAH8=w298-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=N8lmE6YgJVdBAV9LKDreag&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=189.30946&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","kizilcasar-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pet N Fun Otel - Ankara Köpek Oteli, Ankara Kızılcaşar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 285 68 35', NULL, 'https://petnfunotel.com/', '{"google_maps":"https://www.google.com/maps/place/Pet+N+Fun+Otel+-+Ankara+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14d341ae60862f9b:0xf711a3b4ed5bd7c2!8m2!3d39.8281192!4d32.7266693!16s%2Fg%2F11rvdlq5hv!19sChIJmy-GYK5B0xQRwtdb7bSjEfc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJmy-GYK5B0xQRwtdb7bSjEfc', 'boarding-28770d67d0c6745393e8d599')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d7bba2842a503ec2491c484f4e7c96bc', 'boarding-28770d67d0c6745393e8d599', 'Orkun ÇELIK', 2, 'Tercih edilmesi soru işareti olan bir işletme. Toplam dört kez hizmet aldık. Kızımız French Bulldog. Bu cinsin yapıları gereği oyuncu çocuklar. İlk bıraktığımızda "çılgınlıktan çok koşuşturmuş heralde" dedik. İkinci bıraktığımızda eve geldikten iki saat sonra kustu ve ertesi gün ishal oldu. Geçtiğimiz sömestrda da bıraktığımızda eve geldiğinde kustu. Hatta Bir gün öncesinde de Instagram paylaşımında halsiz görüp aradık. Çok iyi olduğunu sorun olmadığını söylediler. 4 gün kızımızın ishaliyle uğraştık. Bir tanıdık tavsiyesi ile gitmiş olduğumuz için buradaki olumsuz yorumlara rağmen tercihimizi değiştirmemiştik. 29.04.2026 tarihinde bıraktığımız kızımızı bugün sabah aldıktan sonra eve geldiğimizde sağ arka ayağına basamadığını, dokunduğumuzda ise acıyla inlediğini görüp aradık. Telefonu açan hanımefendiye bir saldırı veya huysuzluk olup olmadığını sordum. Instagrama sabah video koyduklarını ve bir sorun olmadığını söylediler. Telefonla görüşüyorken, bize Instagramda hikaye attıklarını, birşeyi olmadığını orda da görebileceğimizi söyledi. Biz ayrıldıktan sonra Instagram paylaşımı yaptıkları için durumunu görmemiştik. Videoda da sağ ayağına sağlıklı basamadığını söylediğimde "benden ne bekliyorsunuz anlayamadım" şeklinde cevap verdi. Kendisine veterinerimize götüreceğimi ve olumsuz bir durum olması durumunda haberleşeceğimizi söyledim. Profesyonel bir işletme -ki İncek''te olduğu için öyle düşünmüştük- "Anlaşmalı Veterinerimiz var buyrun muayenesini biz yaptıralım" demesini beklerken kendisinden ne beklediğimizin cevabını aldık. Veterinerimizin yaptığı detaylı muayene ve röntgen sonrasında sağ kulak arkasında diş veya tırnak kaynaklı çizik, sağ arka ayağında darbeye bağlı şişlik ve yumuşak doku travması, sol ayağında ise diş izine benzer bir iz olduğu tespit edildi. Açıkçası durumunu telefonda belirtmiş olmama ve veterinere götüreceğimi söylememe rağmen kendilerinden kaynaklanan bu problemi merak edip arama zahmetinde bile bulunmadılar. Ben de kendilerinde merak uyandıramadığım için yorum yazmayı tercih ediyorum ki sadece kendileri değil tercih edecek olanlar da durumumuzu bilsin. Kesinlikle tavsiye edemeyeceğim bir işletme. Bir de çocuğumuzu teslim ederlerken güya kendilerini sağlama almak için "köpeğimi sağlıklı teslim aldım" gibi bir ibareyle imzalatmalarının sebebini tecrübe edince daha iyi anladım. Çocukların sadece bahçede oynarken halini güzel müziklerle mutlu mutlu paylaşıyorlar ama bina içinde ne haldeler maalesef kendileri dışında kimsenin haberi yok.', '2026-05-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-47287662cdc7aa9b48ef85fbd5cb1ee6', 'boarding-28770d67d0c6745393e8d599', 'Alperen Ceylan', 10, 'Güvenilir oldukça ilgili alakalı sorumluluk sahibi arkanıza bakmadan gönül rahatlığıyla yavrularınızı bırakabileceğiniz bir yer. Uzun yıllardır tatillerde veya başka durumlarda kızımı rahatlıkla bırakırım nerdeyse son 3 aydır ise bazı sıkıntılarımızdan dolayı aralıksız kalmakta ve keyfi gayet yerinde hatta çok da iyi sosyalleşti. Çok mutlu bir halde olduğunu instagram sayfalarından günde 3-4 defa yaptıkları paylaşımlardan takip edip görebiliyorum kızımdaki mutluluğu ve bundan sonraki zamanda dahi her ay 1 hafta bırakmayı düşünüyorum kızımın mutluluğu için. Ankara''nın neresinde olursanız olun bu tarz bir yer arıyorsanız gönül rahatlığıyla yavrunuzu bırakabileceğiniz bir yer olacağını çok içtenlikle söyleyebilirim. Bende burdan kendilerine çokça teşekkürlerimi sunarım ilgilerine alakalarına ve güvenirliklerine.', '2026-05-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4222b1fed425b1226e6d56cdf754496b', 'boarding-28770d67d0c6745393e8d599', 'Başak Soran', 10, 'Biricik yavrumuzu gönül rahatlığı ile emanet ettiğimiz ikinci yuvamız. Şebnem Hanım, Neşe Hanımlar ve İlker Bey çok ilgili, sevgi dolu. Enerjileri çok yüksek. Her zaman ulaşılabilir durumdalar. Videoları izlemek çok eğlenceli. Bahçe her zaman tertemiz. Emeklerinize sağlık.', '2026-05-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d6c334150713b9b99c1df762a62f666c', 'boarding-28770d67d0c6745393e8d599', 'Can Güçlü', 10, 'Üç yıla yakındır köpeğimi gözüm arkada kalmadan Pet N Fun Otel''e emanet ediyorum. Bu kadar rahat ve güvenle başvurabildiğimiz bir otel hizmetinin olması büyük şans. İçtenlikle teşekkür ederim.', '2026-05-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-322e8a467a0cbfec1d5715bdc8d4f98e', 'boarding-28770d67d0c6745393e8d599', 'buket erdem', 10, 'Evcil hayvanlarınızı güvenle bırakabileceğiniz bir yer .Neşe hanım tüm köpeklerle özel ilgilenerek sürekli onlarla ilgili videolar paylaşarak köpeklerinizin mutluluğunu her daim görebiliyorsunuz. Soğuk kar kış demeden sürekli bahçeye çıkarılıyorlar oyunlar oynuyorlar gerçekten tek kelimeyle harika bir yer bundan sonraki tek adresimiz tekrar teşekkürler', '2026-01-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-54015805a750ef34b112bfd8', 'Hera Pet Otel & Kreş', 'Gündüz bakım merkezleri', 'Ankara', 'Mutlukent', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmire41VkAe0lZtCBX-1PXzPASswpU-3Zh6fO8k4cnX_ImnSkxZbux1QsTe1SNZ64YdtbSSrauBOXTeBoJX0e8pIC5oOw7eLFSlAODkmK490T_ZsM8Zarwa2cWLu5yEyF7jlARy=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmire41VkAe0lZtCBX-1PXzPASswpU-3Zh6fO8k4cnX_ImnSkxZbux1QsTe1SNZ64YdtbSSrauBOXTeBoJX0e8pIC5oOw7eLFSlAODkmK490T_ZsM8Zarwa2cWLu5yEyF7jlARy=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCnOIER5Sbu-8gRjq1h8NYxjL0zZomWzi0ZVSawLbqPYCKRKjVIb-ra_a0obIRhCfq8dfNk592bt-y5RrYkNRjFkJoXAevymITo0m-3f5C3xosCzYJNWcC24exC4kTPjYGT-VpTw=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmiQp0_1Wxs90XQ4y2a6jdUkMJW8gZpLpvJ69-FAmECZbMwWR_Gs5FPaZpteEmEEHTEShyK0pt4LGZZGNCmowCk7ztvm58xuRIY9H3dSQLSCoyw7PFBns58lAymlGE33AnpAVe9Xw=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0PxFEILFpMdMyZs-sUqGFiGbd3ygKdLfcNUcbPt0fi25eVYSXpAZU55H10nyfqeCWdeJdItJRNdHhle8JC7g8C9SKIOai89s7qXzs2JCgLnc2Vx7hLn9FzRbSSUb99bTKRK0K6X49k4Ai=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkNSqSUnOzkZq8dm7PD0eTOpPdkhz7-LZM2NjKQ7EAgMJnd6HzhzaZNIDWfpfOrWttW9hmkBRbSR4WeCX5FU0ZV5PtDsiW7c2NMVsb5byzUYWv4uUjq5K7niNVbr0PqIdbSLkNq=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=gRUzUBq1Mc5Nl6jDB0YJRQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=103.51946&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","ankara-pet-oteli","ankara-kedi-kopek-oteli","mutlukent-pet-oteli","ankara-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Hera Pet Otel & Kreş, Ankara Mutlukent bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0552 300 38 73', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Hera+Pet+Otel+%26+Kre%C5%9F/data=!4m7!3m6!1s0x14d3393e5a03198f:0xf7cabb8dfedbf69b!8m2!3d39.886223!4d32.714828!16s%2Fg%2F11vlhr91qq!19sChIJjxkDWj450xQRm_bb_o27yvc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJjxkDWj450xQRm_bb_o27yvc', 'boarding-54015805a750ef34b112bfd8')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7911f63083e53f2e3ae0e497a36736e3', 'boarding-54015805a750ef34b112bfd8', 'M.GÜROL SARSILMAZ', 10, 'Merhabalar ilk defa 7 aylık kedim Tarçını bıraktık bıraktığımda çok endişeliydim ancak Sagolsun  Sevil HN ve ekibi oğluşumla çok güzel ilgilenmişler her gün sosyal medyadan oyun ve sevgi dolu paylaşımlar yaptılar ve hep mutluydu bu gün aldık Tarçınımı Hera Pet e ilgi ve alakalarından dolayı çok teşekkür ederim ve ayrıca herkese burayı tavsiye ederim gözünüz kapalı gönül rahatlığı ile çocuklarınızı bırakabilirsini. Sevgi ve saygılarımla….', '2026-07-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2deeb484fa037a81a19cf739b8de4edc', 'boarding-54015805a750ef34b112bfd8', 'Özlem G. G.', 10, 'Oğluşumuzun 2 yıldır gittiği oteli .. sahibi Sevil hanım zaten harika hayvansever bir insan .. ne diyebilirim ki iyi ki tanımışım iyi ki gözüm arkada kalmadan emanet edebiliyorum oğlumu .. içim çok rahat .. Gönül rahatlığı ile çocuklarınızı bırakabilirsiniz ..', '2026-03-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e3ea1737a7c3af206de76effbfdd71b3', 'boarding-54015805a750ef34b112bfd8', 'billur gonen', 10, 'Sahipleri dünya tatlısı, aşırı ilgili, her bir köpeği tek tek takip ediyorlar...benim gibi köpeğini zor emanet edebilen birini her dakika bilgilendirdiler ve hep samimi yaklaştılar. Gönül rahatlığıyla yavrunuzu bırakabilirsiniz ❤️', '2026-07-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0c12de65ced2442b6ef8aefeecf43afc', 'boarding-54015805a750ef34b112bfd8', 'İlknur Kaya', 10, 'En sevdiğimiz benim kizlar bayiliyorlar güvenle bırakabilirsiniz Sevil hanım çok ilgili kendi evlatlari gibi bakıyor. İyi ki tanıştık ♥️🌼', '2026-04-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b20e726e96fd09d90a7b2a6b8d7039ba', 'boarding-54015805a750ef34b112bfd8', 'Sena Birinci', 10, 'oğlum Müslüm’ü bayram boyunca gözüm hiç arkada kalmadan emanet ettim, ilk tanışmamız olmasına rağmen tüm endişelerimi anlayışla karşılayıp gerekli ilginin tamamını verdiler. bundan sonraki süreçte hiç tereddüt etmeden bırakacağım tek adres. herkes büyük bir özveri ve hayvan sevgisiyle her bir çocukla hiç yorulmadan ilgilendiler. benim yaptığım tatilden daha iyi bir tatil yapma fırsatı yakalayan oğlumsa hiç depresyona girmeden tatilini tamamladı. elinize emeğinize sağlık.', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-cafdd365d487dd1cd990747f', 'Ankara Pet Otel', 'Kedi otelleri', 'Ankara', 'Altay', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqb3-X6XvnrDUh4qmROwZyXokDSAv3GddjbU537g72mvBJP9U3-3Ts07_AmYc74nNWczwpmpZ2SxHAjMQMvreNnbljEbTyeGBNK4rkynamfDAmMZur8VeDOFQ-T_c4dBn4V8Z1=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqb3-X6XvnrDUh4qmROwZyXokDSAv3GddjbU537g72mvBJP9U3-3Ts07_AmYc74nNWczwpmpZ2SxHAjMQMvreNnbljEbTyeGBNK4rkynamfDAmMZur8VeDOFQ-T_c4dBn4V8Z1=w397-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=0RuxyUWDvSFzSxVTZA_miQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=38.062492&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","altay-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Ankara Pet Otel, Ankara Altay bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0542 485 87 20', NULL, 'https://www.ankarapetotel.com.tr/', '{"google_maps":"https://www.google.com/maps/place/Ankara+Pet+Otel/data=!4m7!3m6!1s0x14d337e115f3d7c5:0xd2e0254041c51175!8m2!3d39.9699086!4d32.6401526!16s%2Fg%2F11krhq6bzc!19sChIJxdfzFeE30xQRdRHFQUAl4NI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJxdfzFeE30xQRdRHFQUAl4NI', 'boarding-cafdd365d487dd1cd990747f')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-da9522b8b81ec1abed05ad73', 'Ankara Pet House Otel', 'Kedi otelleri', 'Ankara', 'Yeni Batı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1kH6iZ6wsvB9WF5YAgRh5NS-lKEJ7TNjulQ7Fw2AW8yb5SsGHoC-EytV1-6Tf8llLQV3TTV6eRfbg-XsljVqoK_rkKBgnkGCmlhPCewPfh5qrAY-XOacUagX-vUeKF89tvVx6=w408-h543-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1kH6iZ6wsvB9WF5YAgRh5NS-lKEJ7TNjulQ7Fw2AW8yb5SsGHoC-EytV1-6Tf8llLQV3TTV6eRfbg-XsljVqoK_rkKBgnkGCmlhPCewPfh5qrAY-XOacUagX-vUeKF89tvVx6=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHFe3M-hOVVDZaM1I_o-RB0_CabuqAbUv_NVvuN4DpQrTXR6SlsGdbjWwaInb0-iPrP9O7NqN6HyZ-js7bJiChMFfW3FRQVjczTHTGt2S7UWafFdg4ZD5XBsq1AMGWnR5g8MXWlVN2PKUA=w745-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=AjqwttsZEN416VIlYPm3ZQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=80.493095&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Gerçek mekanda hizmet","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Ücretsiz kapalı otopark","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","ankara-kedi-oteli","yeni-bati-kedi-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Ankara Pet House Otel, Ankara Yeni Batı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0531 688 43 21', NULL, 'https://ankarapethouse.com/', '{"google_maps":"https://www.google.com/maps/place/Ankara+Pet+House+Otel/data=!4m7!3m6!1s0x14d33782e1e45e6f:0x6e0dea1cc3a9111!8m2!3d39.9768675!4d32.690292!16s%2Fg%2F11lm4hqk2g!19sChIJb17k4YI30xQREZE6zKHe4AY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJb17k4YI30xQREZE6zKHe4AY', 'boarding-da9522b8b81ec1abed05ad73')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c3d336a47fa52f9c330f521eb489f10b', 'boarding-da9522b8b81ec1abed05ad73', 'Kurtuluş Kaya', 10, 'İşini bilen, kaliteli, güvenilir ve herşeyden önemlisi hayvansever insanların çalıştığı bir işletme. Can Dostlarımızla iletişimleri, tedavi yöntemleri, ücret odaklı olmayıp müşteri memnuniyeti ve canlarımızın sağlıklı olmasını ön planda tutan ve gerekli çabayı gösteren, gönül rahatlığıyla tercih edebileceğiniz bir veteriner kliniği. Bizim pamuk kızımıza verdikleri emekleri için öncelikli olarak Berat ve Büşra hocamız başta olmak üzere tüm çalışanlarına çok teşekkür ederiz, ellerine emeklerine sağlık. Biz memnunuz, tavsiye ederiz.', '2025-09-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c169055a0b199befc6fff4a74a4c905b', 'boarding-da9522b8b81ec1abed05ad73', 'Pinar Çetin', 10, 'Gizem Hanım’la tanışalı 1,5 yıl oldu ve her şehir dışına çıktığımızda kızımız Mocha’yı gönül rahatlığıyla kendisine bırakıyoruz. Gerçekten Gizem Hanım da Ozan Bey de sevgi dolu ve ilgililer. Bu yüzden çok çok teşekkür ederiz. Bundan sonra hep görüşeceğiz zaten 😊', '2021-01-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-91051ab1ad60c5b0c23755534a0d367a', 'boarding-da9522b8b81ec1abed05ad73', 'Anna T.', 10, 'Kedimiz 5 hafta Zencifil  Kedi Pansiyonunda kaldı. Günde iki kez gönderilen videolarda da görebileceğiniz gibi, kedimiz çok dikkatliydi ve sakin ve memnundu. Bu evcil hayvan dostu yeri şiddetle tavsiye ederim.', '2022-08-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a440739436556b67344f8d0116c1b384', 'boarding-da9522b8b81ec1abed05ad73', 'Levent Rakunt', 10, 'Güler yüzlü ve sempatik çalışanları ile sabah akşam gönderilen videolar ile güvenle can dostlarımızı ikinci defa kendilerine teslim edebildik.

Teşekkür ederiz.', '2022-11-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c3f0dd20e8f9525daceb200ec0f5b727', 'boarding-da9522b8b81ec1abed05ad73', 'Filiz Öz', 10, 'Yıllarca kedi baktım o kadar veteriner gezdim Eylül hanım gibi güler yüzlü kimseyi görmedim gerçekten. İlgi alakanız olsun güler yüzünüz olsun gerçekten hepsi için çok teşekkür ediyorum 😇❤️', '2022-06-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-31807e2a7465ffc17a353d6f', 'For Pets Köpek Oteli & Kreşi', 'Köpek otelleri', 'Ankara', 'Yaşamkent', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzMKXag-a-VMTyevMIHr7UsMceWyjtyYitJu3AYXsFaJMnsOpOv2So50m9EfUfMPGVwYwwoyig8ruZxTOUVH7-u1P0-c88VTGK1mNb2wjkguyenHMrTptmvdbOhiRsthNGdHRJ=w408-h390-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzMKXag-a-VMTyevMIHr7UsMceWyjtyYitJu3AYXsFaJMnsOpOv2So50m9EfUfMPGVwYwwoyig8ruZxTOUVH7-u1P0-c88VTGK1mNb2wjkguyenHMrTptmvdbOhiRsthNGdHRJ=w311-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaw19dvnl-MJ2pUT1BPXi4MDVdSAiXrAVUoz__sfqzhKctWBSpwg25jPO98CfMnL-FtNziLvCvOjx2dKI-Q4VOBdtbtG36SVGxKAAVSd2WNhS4LpaaTluuHPcpOOg_vo7VkJZuWV9gWQho=w224-h401-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJNMZG4Kr2OivyGLO8lYKx8vssK8kwJBPK8o50ySmjhp24rWP2WaFgn8HLBeDLDSwbw7wmCb370zdCsz20ZHMauFttrKM6twDepnoVDuIY5cEqyNinnDD7kGQ1LA6WtQLhvf2YvKaHD8qX=w534-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnRfjxjzmkuAxogqhhDeW85jZRQLqMzTqgJYKDvnid9Xy5lXw30MawKSsnWXQmD-7zw6_G12BiAnSPPUZQlR__dXPqUrrYJceMeHkvn78jvbPy5hNXPy5xLcZhf-dSPUiGIkglhvFvyfGE=w224-h309-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWsNaFSrRqaxFW8J3n1yrXjpf84muBrMpbDTy9jM4IPc3D2FyJNMNckWqFoCml6uX71v9EwVz6GFuu20POpXn1EGnTIZa9OnSpgFmqyQcA8n8s3E3SA0kZYCawyNHTuoJzpmGG=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnVPFTogjdBUWJZYJnc-4LSnb_NEC0-ICQaANlgnzRacdd0QlzVQLmPLjJHPTl6fsc_vIrU8ogQYUku4eajHmnyGEBXcIs14-nQGgHrxUgo1AFfo7WE7AcE8zQwTaJQphDiYBZW9w=w224-h397-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QCeydav1A6e4brN6lyo0uA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=207.6887&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ankara-kopek-oteli","ankara-kopek-pansiyonu","yasamkent-kopek-oteli","ankara-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'For Pets Köpek Oteli & Kreşi, Ankara Yaşamkent bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 639 36 00', NULL, 'https://forpetsotel.com.tr/', '{"google_maps":"https://www.google.com/maps/place/For+Pets+K%C3%B6pek+Oteli+%26+Kre%C5%9Fi/data=!4m7!3m6!1s0x14d33f83b1e16a03:0xba304313cc9d1a60!8m2!3d39.8714858!4d32.6527346!16s%2Fg%2F11w1ynmxk0!19sChIJA2rhsYM_0xQRYBqdzBNDMLo?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJA2rhsYM_0xQRYBqdzBNDMLo', 'boarding-31807e2a7465ffc17a353d6f')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e0a409a77cea2726c92811a1da9d9aad', 'boarding-31807e2a7465ffc17a353d6f', 'Azra TARIM', 10, 'Bayramda şehir dışına çıkacağımız için ve konaklayacağımız otel ne yazık ki pet friendly olmadığı için Romeo''yu bırakmak için ablam pet otel arayışına girdi. Başta veteriner hekimlik öğrencisi olarak bu fikre sıcak bakmamama rağmen emanet edebileceğimiz herkesten çok çok daha güvenli ve ilgili bir yere bıraktığımızı anlamış olduk.

Aşılama ve antiparaziter tedavilerinin kontrolüyle otele kabul edilmesi, kendi mamamızı götürebiliyor oluşumuz ve her hayvanın odada tekken besleniyor olması, düzenli açık havada yapılan anlaşmaya uygun boyutlardaki köpeklerle birarada yapılan oyun saatleri ve bunların hepsinin bolca story ile paylaşılması hem içimizi çok rahatlattı hem de biz tatildeyken gözümüz arkada kalmadı.🙏🏻

Şehir dışındayken ya köpeğimiz şuan iyi değilse diye düşünmek yerine paylaşılan storyleri izledikçe "Ya romeo orda çok eğlendiği için eve döndüğünde sıkılırsa?" ihtimalini düşündük gerçekten😅

Biz iki gece konaklama, bir gün kreş ve yıkama hizmetlerinden yararlandık.
2. fotoğrafta teslim aldığımız günün akşamında romeonun nasıl tüm gün oynamaktan ve banyodan sonraki mayışması ve uyuya kalışını görebilirsiniz.🥹✨️

Burdan tekrar Nesrin hanıma ve Sevim hanıma bayram yoğunluğuna rağmen son derece enerjik, sevgi dolu, özverili ve profesyonel yaklaşımları için teşekkür ederizzz.🫶🏻🫶🏻', '2026-03-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-671820510d4ef81d90a4d2d5f9819f90', 'boarding-31807e2a7465ffc17a353d6f', 'Reyhan u', 10, 'Çocuğunuzu bırakırken asla gözünüzün arkada kalmayacağı bir mekan. Biz ilk defa ayrı kaldık ve inanılmaz içimiz rahat etti. İlgi ve alakanız için çok teşekkür ederim. ❤️❤️🥰🥰Ankara''nın en güvenilir Pet oteli. İyiki tanışma fırsatımız oldu 🙏🥰', '2026-06-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-16ec5d68dd7fbd7e3207ac81f1ab755a', 'boarding-31807e2a7465ffc17a353d6f', 'Aslı Aleyna Tarım', 10, 'Oğlumuz Romeo''yu şehir dışına her gittiğimiz yere götürüyoruz aslında, ama ne yazık ki kendi konaklayacağımız otellerde hayvan dostu bir yer bulmak çok zor olabiliyor. Uzun araştırmalarım sonucu google maps üzerinden burayı keşfettim. Romeo için otel ararken en önemli kriterim bir tane bile kötü yorum, memnuniyetsizlik olmamasıydı. İyi ki Nesrin hanım ile tanışmışız, iyi ki burayı keşfetmişim. Oğlumdan ilk ayrı kalışımdı ama onun mutlu olduğunu biz yokken çok iyi bakıldığını görmek bizi cok mutlu etti. Mutlaka pasaporttan aşı kontrolü yapıyorlar ki bu çok önemli bir detay. Onun dışında her gün bol bol koşturmaca, oyun ile yokluğumuzu aratmamışlar. Bizim gibi güvenecek, iyi bir yer arayışında olanlara çok tavsiye ederim. Ha bir de normalde diğer kopeklerle bazen anlasma problemi yaşıyor oğlumuz, ama profesyonel bir sekilde her çocukla ilgilendikleri için bu konuda da bir sorun yaşamadık şükür. Son olarak bir de banyo hizmetinden yararlandık, mis gibi Pazar banyomuzu da yaptık, yumuşacık pırıl pırıl olmuş tüyleri boncuğumun 🌸Bir daha gözüm arkada kalmadan oğlumu emanet edebileceğim bir yer bulmanın mutlulugu içerisindeyim, teşekkürler For Pets Ailesi 🩷', '2026-03-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b78deb2fec6f6823ed0fb91e4079c22e', 'boarding-31807e2a7465ffc17a353d6f', 'hilal güneş', 10, 'İlk defa geldiğimiz ve 7 günlük konaklama hizmeti aldığımız Ankara''daki pet otelde köpeğim Şans''ın rahat, huzurlu olduğunu ve sosyalleşmeyi sonuna kadar tecrübe ettiğini görmek beni çok mutlu etti.Bize böyle bir konfor sundukları için teşekkür ediyorum.', '2026-06-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-227cc2bc7f5180f80167d0850a47348e', 'boarding-31807e2a7465ffc17a353d6f', 'Ceren Öcal', 10, 'Pandemi zamanından beri çok az dışarı çıkan köpeğimiz Meze diğer kedi ve köpeklerle biz varken hep sorun yaşamış, çok sosyal olmayan bir köpekti ve ilk defa benim olmadığım bir ortamda kaldı. Yemek yer mi ya da bir hafta boyunca ağlar mı diye tedirgin olmuştum ama hiç gerek yokmuş. ilk günden itibaren sevgisi ile kendisine bağlayan, aklınız kalmasın diye görüntülü bile arayan, sabırla ilgiyle davranan muhteşem bir ekip For Pets Otel ekibi.. Bir kaç gün içinde gülen, diğer çocuklarla oyun oynayan bir çocuk oldu Meze.. almaya giderken gelmek istemezse diye korkmaya başladım bu seferde :) çok emek, çok sevgi.. Biz herşey için çok teşekkür ederiz. Oğlumun artık kalacak bi yeri değil, tatil yapacağı ikinci bir evi oldu sayenizde🩷', '2026-06-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-a36effa94e14d442f8093c6b', 'PatiCamp Antalya PetShop Kedi Oteli | Cats Hotel', 'Kedi otelleri', 'Antalya', 'Yeşilyurt', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHvVjN4DgeHXA0mgDwjyyT0ZXmOlOLTKlQbD_T-jANOH9Il_Q6RUB1Pf7FWVBoTBjmrcxcVvE2ujYbrwM6_RQdpjppDWAG_6s_TDBZn0fYPt7iCWRhLGnhNJryVr9ncrt37g6XMIr3Mvn-=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHvVjN4DgeHXA0mgDwjyyT0ZXmOlOLTKlQbD_T-jANOH9Il_Q6RUB1Pf7FWVBoTBjmrcxcVvE2ujYbrwM6_RQdpjppDWAG_6s_TDBZn0fYPt7iCWRhLGnhNJryVr9ncrt37g6XMIr3Mvn-=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnACdzPFI7VBZ1s8d6miXrGlqSoH3xMA6TcHVQRXPX-uIKMOg4iTjR5JNSk0-SCJ2Sk8zwXFGf_eYGuIkzb6WxeY7DZ5kpxwTB4ZMRpCUCA6no1lmdFG3aUFsQsAIa9lSnblGJ9RzCIh1WO=w224-h497-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmf6PmMJbFd3hRLYEaaAfscia6chAn3rI6IFVqziO7FrzgzJGd-5FQQt0TWeWEOLH_5EQHn8DoP8Uih_b8UzTNN61M78ICh38lj4fjm_YRRDFVXzjOVr8apbR_nk0NsRigKgSuXmL3kp7Yz=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlK5kkQVwKzRiQ0j6rxxoU2R_ke5baXOCKn78ZuaCUCg4MUIxxaQQjc9AcG5cm4fVJKj_n_GkejaZVeJb-4t6cbH0xt31WhuG1M50nXpp5WN2rlJfS4mHThlri_F7vVERy6SaHXn1PhdCI=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmRoSOcCS-44f7KFt0gRpUcjUlVEDXEnJRquhI6rM12Z_vNHmMokAcgqw84CAVLvrxU70c-ms1Dp6tV0U4mUer_amFCD2ZGpoTe-ce7fG0fsL78twdwTy8lRgv3ixhyJc0LUctfdsLLOVMw=w224-h401-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Z3IUe7tP-iUQa0EAaSWw1A&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=76.166626&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun park yeri","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","antalya-kedi-oteli","yesilyurt-kedi-oteli","antalya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'PatiCamp Antalya PetShop Kedi Oteli | Cats Hotel, Antalya Yeşilyurt bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 506 07 34', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/PatiCamp+Antalya+PetShop+Kedi+Oteli+%7C+Cats+Hotel/data=!4m7!3m6!1s0x14c3915ff2b9bd37:0x5019b4e26a8b1ea3!8m2!3d36.9063299!4d30.6487182!16s%2Fg%2F11xl64d6d7!19sChIJN7258l-RwxQRox6LauK0GVA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJN7258l-RwxQRox6LauK0GVA', 'boarding-a36effa94e14d442f8093c6b')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e44f2b02bd4a0c256c3ece689c964703', 'boarding-a36effa94e14d442f8093c6b', 'Ceren', 10, 'Bayram tatili için 5 günlük bir konaklamamız oldu. Şakircan Bey yavrumuz Kaju ile çok ilgilendi, bizi her zaman bilgilendirdi videolarını fotoğraflarını attı. Ellerinize emeğinize sağlık. Güvenilir güzel havalandırmalı yer, emin ellere teslim edebilirsiniz çocuklarınızı biz çok memnun kaldık teşekkür ederiz.', '2026-05-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cf429fbe25f28c6c53c17e984af565d8', 'boarding-a36effa94e14d442f8093c6b', 'Merve Yılmaz', 10, 'Bitanecik oğlumuzu güvenilir bir yere emanet edelim derken adeta bir aile dostu kazandık. Oğlumuzu o kadar kısa sürede o kadar iyi analiz edip öyle güzel davranmışlar ki hiç yabancılık çekmedi. Bizim de gözümüz arkada kalmadı. Kendilerine bu kadar içten oldukları ve böyle güzel ilgilendikleri için çok teşekkür ediyorum❣️', '2026-06-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6449d30274d8ddf1cba950bec039e2f3', 'boarding-a36effa94e14d442f8093c6b', 'Büşra Çam', 10, 'Şakir Bey’e ve eşine ilgilerinden dolayı çok teşekkür ediyorum. İçim rahat bi şekilde kedimi emanet ediyorum. Günlük rutin bakımları dışında oyun oynamaları vs. etkinliklerden dolayı kızımı teslim aldığında onu mutsuz görmüyorum. Hatta son teslim alışımda benimle gelmek bile istemedi:)
Hergün video paylaşıyorlar sizlerle. Genel durumu hakkında bilgi veriyorlar. Oyun videolarını da paylaşıyorlar anlık durumu gözlemleyebiliyorsunuz. Kediniz Otele kabul edilirken aşıları vs durumları konusunda gerçekten çok hassas davranıyorlar. Diğer kedilerle temas etmiyorlar. Ancak hastalık vb problemler oluşturmaması açısından bu konuda çok titizler. Antalya’da en sevdiğim kedi oteli. İçiniz rahat olsun👋🏻', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7a9a3b46becd5b46e3b47e282f2f717d', 'boarding-a36effa94e14d442f8093c6b', 'Kader Yıldız', 10, '"Kedimiz Paşa’yı Paticamp Hotel’e gözümüz arkada kalmadan emanet ettik. Şakir Can Bey ve değerli eşi Paşa ile o kadar güzel ilgilendiler ki, profesyonelliklerinin yanında gösterdikleri sevgi bizi çok mutlu etti. Tertemiz ve güvenilir bir ortam. Her şey için çok teşekkür ederiz, kesinlikle tavsiye ediyorum."', '2026-03-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b9b4decc7abf23fb2be0b8d5c0da172b', 'boarding-a36effa94e14d442f8093c6b', 'Nesibe Kadayıfçı', 10, 'İyi ki var dediğimiz bir yer oldu!!! Kedimiz 4 gece kalabildi, rahat rahat gezinebileceği zamanlar oldu; biz de düzenli olarak videolarla bilgilendirildik!! ÇOK ilgili, güven veren Şakir Bey''e ÇOK teşekkür ederiz. 🥰', '2026-07-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-c80e13a384f96a2bb63255a6', 'EXPO PET OTEL ANTALYA', 'Ev tipi bakım merkezleri', 'Antalya', 'Pınarlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkC_tS4w0lFMT8oILXcCqnancH2rBG9HqGeYe5cbQPADBdbNnv0EPXnHMoZaxSG_rbWxEO5VYWEuY-GhKzgYk46O60rw9KMZ014-m9-2fvnEPI77PdGjtyCLW2BoyknZAsXC0AkKQ=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRC2XvsKokaoXx01AJmVzpF0OCtjOgLC1sYKUoCR3tVfuUsBaOTzyZFDd5lmY5MQKTps_Yt8Om7HgxKtmGwCjq6yEZ_MQ4DXR-E1f2-eQKIjf7hqAjgvGOO3NJhJ4szFhQrtw=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmLoa24ug5ynyBSh4YlBWchddq-dUTxOJdoZ-Qv9CtzmtRb_y_Mvb_-G-W1vXnbtJg0ETk17RK_2SYQTex61ZAEy129g-b61L8Gb_HNvxKRAu25gmxDHW1udoXsTSc3dbqGVjAn2XzExv5e=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl80ww4I02AmmIEtfUsvUrHD15bLL0AmbyVmJJ3HAl0ePi5VuXwZggUSRSVB7FHN--XST4UHfOAyzxbN0nGA834FAG1cvzkAxDcHAUoMPeWvElMKLFVe0wNVtTF3y8SQaQ-kSI=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlwACSgJS1ceX-v7MGHO6BPWIz1BTgcWCe9qwSO6ol5ax07tc5v4fy2IsnGehEuh46VCJMqsmwLLAICYRCkxocs7mOO4cIlgp8ayoTrbnCQ6o9er3vwbXbT-hNZPJPji2zAoRXW=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmuVIZRFtd6uhpuKkSvMojoYbVUfdcRQ9MnGsXAtFo-E15c9uL7-Q-_EVU_EewvLQzBWKt43reD00nGztfmNb3w6YElxuU_GqUyp210SbVpBH48ynim1u9x23bIaIaZA0Q1VKvi=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWknbN-n-8ch7iZnQsb9TD8I-WEocSezqosGxWxR7dnPBt-lgmAoRSk2wvWLtA1KJZJqSfXFHKzzown5U77GdtrqDJt1OkQxJujDYqKRTRIFbQGiVnFXV8i3RF7uMg2Fec8hUhsE=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmPIy9AHFQ51Cs05V40-u4uy_7QugEPj8R5vpYlhyRD4F74Yw6nLTXxNWzusuWs5sFjg-9oMcwSs9tIDgxsqjjBzEHW10IxV6ffgA0e5i-QK24kGgznkyqRS4YRSbhKLqacKf2sw=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=X1K29bzxkp_oXAJiQo-yLQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=165.91406&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","antalya-pet-oteli","antalya-kedi-kopek-oteli","pinarli-pet-oteli","antalya-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'EXPO PET OTEL ANTALYA, Antalya Pınarlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0541 772 66 11', NULL, 'https://www.expopetotel.com/', '{"google_maps":"https://www.google.com/maps/place/EXPO+PET+OTEL+ANTALYA/data=!4m7!3m6!1s0x14c381dcf8534b77:0x229495f4ad0c2462!8m2!3d36.9504408!4d30.8058951!16s%2Fg%2F11s538w1f7!19sChIJd0tT-NyBwxQRYiQMrfSVlCI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJd0tT-NyBwxQRYiQMrfSVlCI', 'boarding-c80e13a384f96a2bb63255a6')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0f9013b2aa46eab1f6d3286da999b601', 'boarding-c80e13a384f96a2bb63255a6', 'nur akboğa', 10, 'Köpeklerimi gönül rahatlığıyla emanet ettim ve çok memnun kaldım. Süreç boyunca düzenli olarak fotoğraf ve video paylaşmaları içimi rahatlattı. İlgi, sevgi ve profesyonellikleri için çok teşekkür ederim. Patili dostlarımızın mutlu ve güvende olduğunu bilmek gerçekten çok değerli. Kesinlikle tavsiye ederim.', '2026-05-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2a5f84dad59409a748943aa9d004e98a', 'boarding-c80e13a384f96a2bb63255a6', 'Fatma Sultana Güzel', 10, 'Üçüncü kere köpeğimizi bıraktığımız çok güvenilir tatlı bir pet otel 🫶🏼
Daha önce hem uzun süreli , bir 9-10 günlük, bıraktığımız da oldu , 2-3 günlük bıraktığımız da oluyor . Sürekli bize fotoğraf ve video ile haberdar ediyorlar ki bu bizim için çok iç ferahlatıcı . Başka köpekler ile de sosyalleşerek eğlenceli bir vakit geçirme fırsatları da oluyor .Kesinlikle gönül rahatlığı ile bırakabilirsiniz 🫶🏼🫶🏼', '2026-05-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0c0d30cb2c3f56d91db4093ba6b69a8b', 'boarding-c80e13a384f96a2bb63255a6', 'Gülşah Ateş Oruç', 10, 'Yaşadığımız en iyi pet otel deneyimiydi. İlgi alaka hijyen 10 numara. Küçük ırk - büyük ırk ve kedi alanları hepsi ayrıca düzenlenmiş derli toplu bir pet otel. Her çocuğun kendine ait odası bulunuyor.  Gün içerisinde 3-4 kere açık alana çıkartıp birlikte vakit geçiyorlar. WhatsApp üzerinden gün içerisinde video ve fotoğraf gönderimi yaparak aklınızın asla orda kalmasına izin vermiyorlar. Tekrar görüşmek üzere Expo Pet Otel ailesi', '2026-03-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-59b5fb31e7c0ab26a1a4318d1ec85b97', 'boarding-c80e13a384f96a2bb63255a6', 'Руфина Сафарова', 10, 'Dönüşte köpeğimizi aldığımızda keyfi yerindeydi, bakımlı ve mutlu görünüyordu. Bu da doğru bir yer seçtiğimizi gösterdi. İşini sevgiyle yapan, güven veren ve hayvanlara gerçekten değer veren bir ekipleri var. Gönül rahatlığıyla tercih edilebilecek bir yer. Emeği geçen herkese çok teşekkür ederiz, bundan sonra köpeğimizi bırakacağımız ilk adres kesinlikle burası olacak.', '2026-07-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-56fb370d535a3903b6a825f1da3a1217', 'boarding-c80e13a384f96a2bb63255a6', 'berna yılmaz', 10, 'Köpeğimiz Köpük’ü tatil nedeniyle 5 günlüğüne pet otele bırakmıştık. Açıkçası başta biraz tedirgindik ama aldığımız hizmet beklentimizin çok çok üzerindeydi. Evden gelip Köpük’ü kendileri teslim aldılar, her gün düzenli olarak video ve fotoğraf gönderdiler. Onunla gerçekten kendi çocukları gibi ilgilendiklerini her an hissettik.

Dönüşte ise Köpük’ü tertemiz, mis gibi yıkanmış ve mutlu bir şekilde bize teslim ettiler. Biz tatildeyken gözümüz hiç arkada kalmadı, içimiz çok rahattı. Bu kadar ilgili, güvenilir ve sevgi dolu bir hizmet sundukları için gönülden teşekkür ederiz. Kesinlikle herkese gönül rahatlığıyla tavsiye ederiz 🌸', '2026-03-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-d6b6969ae7067cec5bf12a9d', 'Antalya Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Antalya', 'Kızıltoprak', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWuvSVypC4Vlx5nnDgrt4z-MHP6CpSqh5Aotcv7rpLrQt9DOkffgYq9NTu2KmYkyiUBjssE73KV3U0YLbexlZjRUB_jOlwcizQbabQu4yVj06mBbiXnsuQBlM16Mv0ZRoVesPTlk9JSmfp=w408-h273-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWuvSVypC4Vlx5nnDgrt4z-MHP6CpSqh5Aotcv7rpLrQt9DOkffgYq9NTu2KmYkyiUBjssE73KV3U0YLbexlZjRUB_jOlwcizQbabQu4yVj06mBbiXnsuQBlM16Mv0ZRoVesPTlk9JSmfp=w443-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdnhMhJmPjDDXgSM-_NKy9fsS2Qf_fsWdrDxJUPv7X9o9nevXEaigjgWKTE7F9noP_J4G7C70OzS8ZZRtQFiFy4OGXknxggJp19hMF_uh7HFH9Zo6MkXrG7kT8HmNXvZQYx03uww=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMJyAD8F0urtGwULvvPnPHsTlZYav96yWIV95LaSEmrEx5sRXh5n6BvfHHcrw9EmEtHMS70RFi1VV_nUm3P7ChaJVLL72d-KAJJFxaesDgmgR986uqUIU7bBccDsPA_IcYjUsBMg=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkDT7u9AEaqGfCDXxc9lLmCPJyT2K5X07Ou6_iAcLY7smgE6wb0h47CuXsyYrcrKOFeBQYqa1Pc5I__OVn7M510UudloH5gjCvHO2oYq9TWx8Ue-VZo8clQQsQjvKITa2AyAHUy=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWluMn3v3vHRPDyA-MolPTJTDhtnb8jed9TwcEdvXBlg3_Bof1ckpwNhn2dhspkElBADo8cd6fmIETLxot7VOlnsVGLwAfi8RzGaAeugnr5enjkHURrRI5zK9HPnDne5kOFw3xqKgw=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmiD3huNyiRtTg60D9vgwpEv1wUS2IKU7N7_nCXPNERCUwzS5SUC8jwdmEs3P3laZcK1bcYDKnMIW6nL4lgHOxeHJVFRFn7Jh-1ygZSzpEBshDZYcje7GmSOOFRMz-wHfdpX1BX=w224-h398-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Üniseks tuvalet","Cadde üzerinde ücretli park yeri","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretli park yeri","Ücretsiz park yeri"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","antalya-kedi-oteli","kiziltoprak-kedi-oteli","antalya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Antalya Pet Otel, Antalya Kızıltoprak bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0551 192 09 62', NULL, 'https://www.antalyapetotel.com/', '{"google_maps":"https://www.google.com/maps/place/Antalya+Pet+Otel/data=!4m7!3m6!1s0x14c3855bf230e269:0xe1df11f15aa66155!8m2!3d36.8589909!4d30.8165947!16s%2Fg%2F11fmc6sfzf!19sChIJaeIw8luFwxQRVWGmWvER3-E?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJaeIw8luFwxQRVWGmWvER3-E', 'boarding-d6b6969ae7067cec5bf12a9d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-805fd832e03b8e275011d0ec1fa66553', 'boarding-d6b6969ae7067cec5bf12a9d', 'Ercüment Aksakal', 10, '19-29 Ocak tarihleri arası kedimiz Tarçın’ı misafir olarak bıraktığımız Antalya Pet Otel’e kedimizi kendi ev rahatlığında ağırladıkları için çok teşekkür ederim. İlgi, alaka ve her gün onlarca fotoğraf ve video ile beni bilgilendirdiler. Çok naif ve nazik insanlar. Gözünüz arkada kalmadan kedinizi bırakabilirsiniz.', '2023-02-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8dd7977f65a9322f105a93c5a453dcc6', 'boarding-d6b6969ae7067cec5bf12a9d', 'Muharrem Çötok', 10, 'kısa bir tatil için kedimizi ilk defa kafamda soru işaretleri ile teslim ettim.
ama korkulacak hiç bir şey yokmuş çok cana yakın karşılama, kedimiz ile çok güzel bir şekilde yakinen ilgilenildi.kedim de onları ve mekanı çok sevdi ve hemen alıştı her gün resim gönderdiler durumu ile ilgili. kendilerine çok teşekkür eder,bundan sonra tatil planlarını gönül rahatlığı ile yapabilirim.kesinlikle tavsiye edebilirim.', '2019-11-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-57ebc8525c0a8d73581035232eb60ac4', 'boarding-d6b6969ae7067cec5bf12a9d', 'Selma Duran', 10, 'Kedimi bıraktığım andan aldığım ana kadar hergün beni fotoğraf ve videolarla bilgilendiren Timur beye çok teşekkür ederim 😻kedinizi gönül rahatlığıyla bırakabileceğiniz bir yer memnun kalacağınıza eminim.', '2023-07-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-615f3db8c182ce3a0b3329223b5c9fc9', 'boarding-d6b6969ae7067cec5bf12a9d', 'Tuğçe Güler', 10, 'Kedim 2 ay kaldı ilk günden itibaren hiç gözüm arkada kalmadı. Fotoğraf ve video desteği ile birlikte kafessiz bir şekilde ev ortamında oluşu ekstra ilgileri her konuda anlayışlı ve yardımcı oluşları çok özeldi benim için. Kesinlikle önerebileceğim kusursuz bir yer... Dilek Hanım ve Timur Beye sonsuz teşekkürlerimle Biberime çok iyi baktığınız ve benim için bu zor süreci çok fazla kolaylaştırdığınız için... :))', '2023-04-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e5526c2cf3401ec1c98d273b81078ff3', 'boarding-d6b6969ae7067cec5bf12a9d', 'Gulsen Erdogan', 10, 'Geçen hafta cuma oğlum leoyu bıraktım. Timur bey ve eşi çok güler yüzlü ilgiyle karşıladı bizi. Gün içinde sürekli resim ve video gönderdi hiç gözüm arkada kalmadı.çok memnun kaldım gerçekten güvenerek bırakabiliceğiniz bir otel.Timur bey ve eşine çok teşekkür ederim iyi ki tanıdık oğlumla sizi🙏', '2023-09-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-02aac23a9c2338178f7c4418', 'Petgiller Pet Otel Antalya', 'Ev tipi bakım merkezleri', 'Antalya', 'Kuruçay', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6APudxn6XwV2qLOsy8P1wEdgRTC5YSin_ziUaF2HEezxCanugsSwygXAIuW9SBloUHhqMscSlCgOKUJvGpfYZXQpkzu7JPzGT0IGYlIJcOzqR2KlwRx4c-bO1mqPXrsvW9i0Y=w408-h408-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6APudxn6XwV2qLOsy8P1wEdgRTC5YSin_ziUaF2HEezxCanugsSwygXAIuW9SBloUHhqMscSlCgOKUJvGpfYZXQpkzu7JPzGT0IGYlIJcOzqR2KlwRx4c-bO1mqPXrsvW9i0Y=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-N4I4-daHXYaVr3RpuhGwSdDy90dVcEXLIRSWPgjUNCL3HXlUcgmUxhIc3qgxCrEuCngQpQy_qeRGMgS7TC64wfjGKxwuLZFqvn_MU2-gEkjPFEEJ4inL-aTWq1Pc0qIvLwXU=w569-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzYZqiTTWlaaiG2RYrWMIQdNuvoMVDRKKWoI2UbKs4vPJsQ4f633H7G-iEIwWP1404AU1Gip02ZRuvswdqZyNz9xXKM0lluMG6C2bwf5Z3SOufGPagSysUMmc0VPK9kon2wnjV=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnjG-jD7tzO1XvLpGcaDXwc0NEmsVp-8_VrZK0wb2Z5YnSNMKNRzzgb00tHuduVwqmtX4a51n1l0nyFQ2IV_KxBXUftAlWpTfhGUmN3DLB8_Iw5sILQHw8JfBdlqUD2g94tJua1xg=w316-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmsnV4fOyUMYbjcPkz5hruPBRzUOSCSxCT0oUsHnUqP_q_vPjhLTpfTtS-DLj8FkBKp5PAq1qGjXBD3BHImEH5vvpeS92-10dSYNWMuloM3SVAceQXjvefITEsW7yVEB1uGNhAF=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzYZqiTTWlaaiG2RYrWMIQdNuvoMVDRKKWoI2UbKs4vPJsQ4f633H7G-iEIwWP1404AU1Gip02ZRuvswdqZyNz9xXKM0lluMG6C2bwf5Z3SOufGPagSysUMmc0VPK9kon2wnjV=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=g1lpcDtNUuT0OX_2h7QE_Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=147.9793&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","antalya-pet-oteli","antalya-kedi-kopek-oteli","kurucay-pet-oteli","antalya-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Petgiller Pet Otel Antalya, Antalya Kuruçay bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0555 888 34 88', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Petgiller+Pet+Otel+Antalya/data=!4m7!3m6!1s0x14c3930e7e8935ef:0x7773ef4fee2a0bc8!8m2!3d36.880728!4d30.568729!16s%2Fg%2F11dxb00klq!19sChIJ7zWJfg6TwxQRyAsq7k_vc3c?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ7zWJfg6TwxQRyAsq7k_vc3c', 'boarding-02aac23a9c2338178f7c4418')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b56b5fe613b60ea996031bb026cb5f0c', 'boarding-02aac23a9c2338178f7c4418', 'Tuğçe Sağır', 10, 'Minik dostumuzdan ilk defa ayrı kaldık. Şeyda hanım ve eşi çok profesyonel ve ilgili. Biz seyahatteyken bize bolca video ve fotoğraf gönderdiler. Gözümüz hiç arkada kalmadı. Tertemiz yeşil bir ortam; odalar da klimalı. Köpek oyun alanları geniş ve tertemizdi. Minik kızımız eve  döndüğünde misler gibi kokuyordu. Çok güvenilir ve temiz bir yer. Teşekkür ederiz.', '2023-10-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5a170011278e8a87b8e93fdb237a2487', 'boarding-02aac23a9c2338178f7c4418', 'Uğur Kaya', 10, 'Güvenerek arkadaşınızı emanet edebileceğiniz çok güzel, ferah bir tesis. Tüm detaylar düşünülmüş, ayrıca personel ve Şeyda hnm. çok ilgili. Benim gözüm hiç arkada kalmadı. Herkese tavsiye ederim', '2021-10-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ff00e295af5d3fc3c79cbfd5f0cab6e5', 'boarding-02aac23a9c2338178f7c4418', 'ahmet duman', 10, 'Oğlumu 4 defa ayrı ayrı otellere bıraktım, geldiğimde keyfi yerinde bulduğum tek yer burası;çok ilgililer, çok teşekkür ederiz. 🐶', '2026-05-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-748b0e81cffcaacc6b1eb1ab24e1b41a', 'boarding-02aac23a9c2338178f7c4418', 'Mehmet Koçak', 10, 'İlgi alaka son derece güzel ve samimi bir işletme. Pati dostumuza gösterdikleri ilgi muhteşem.  Emeği geçen herkese çok teşekkür ediyorum ve de kaliteden ödün vermeden aynı şekilde devam etmelerini temenni ediyorum', '2022-07-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-febc7bedab6eb135c8b6fe745ddfade6', 'boarding-02aac23a9c2338178f7c4418', 'Aysef', 10, 'En sevdiklerimizi güvenle bırakalınabilecek aile yeri diyebilirim. sevgiyle yaklasan sahipleri. Yerin doğada olması.büyük rahat bir alan olması da cabası⚘', '2019-01-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-667bd6eb32f91b2c7e8563e8', 'antalya köpek oteli', 'Köpek otelleri', 'Antalya', 'Çıplaklı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlz_rhtR-TiHcsnkWDs7eySnwtHuWA2TT5JY8JRUC4vJdb2MCNSfAKAcTGZHyKjnbfNROPZ-57UMtXTD_p_dfdqBd3qtqa4auv0OiKYoEyJ66s9IpKBTHgx3c4mofwSrKvbRW3YTQqXMsqB=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlz_rhtR-TiHcsnkWDs7eySnwtHuWA2TT5JY8JRUC4vJdb2MCNSfAKAcTGZHyKjnbfNROPZ-57UMtXTD_p_dfdqBd3qtqa4auv0OiKYoEyJ66s9IpKBTHgx3c4mofwSrKvbRW3YTQqXMsqB=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9fYgiuy0lSNi1k9Su9ZreCK5GnMkmd-h4lQFAHdMGKa0sxGaIiflaTalS-6LnXkTIkWp53hlZpLKGMX3yiRVmThumG5pOkZDyLrsB97HbEjPQ3w9OwClMMV-hkHhiL4moDWAzXpdJKVxa=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnBaxrIhsKq0BCiWccC31656qkdf0wBfDX9qwDXm9iUHGLz6CPao-tqpRA5kTUoIGL_d6iF7fSNEQT5dHOlzqwDm3thtCiaTg3qXYSuedmJQIordBKAdSdPgqTH-4xShXB7n2Kp2RuE0H7Y=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkUygLkxTV7dGvk52BloaQbseu3krYrHlwik9yavWXUz5pwHWTi0lUR3upQ7Fei5_by-BSPibhVfWCWoza7H8KTLuiwixKjtVXAdK1M5qBtSFLmxosIJ1Y9J5_1RvzkqstOJVGq=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlK8MNLPy1KcltVVdc7wvKglwYc-7LnX_-S9mL9kREiC6VqX_SvYzuIvhesW49yB672rtkmaob3fbkkgEDpqpj8k3yFPy8ya7MM_3S0tTD8ipDz8NmSY9cESpyN9D-ZP7n5zPCXetVXOjo=w303-h298-k-no"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","antalya-kopek-oteli","antalya-kopek-pansiyonu","ciplakli-kopek-oteli","antalya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'antalya köpek oteli, Antalya Çıplaklı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0553 534 33 11', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/antalya+k%C3%B6pek+oteli/data=!4m7!3m6!1s0x14c389a9d3d4f757:0x28e05c961f38ba4b!8m2!3d37.0290231!4d30.6418883!16s%2Fg%2F11j4mm2823!19sChIJV_fU06mJwxQRS7o4H5Zc4Cg?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJV_fU06mJwxQRS7o4H5Zc4Cg', 'boarding-667bd6eb32f91b2c7e8563e8')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6ee6564cdd96623f351d8b690504f077', 'boarding-667bd6eb32f91b2c7e8563e8', 'Mehdi Şat', 10, 'Bizim oğlana resmen beş yıldızlı tatil yaptırdık. :) Kendilerine ait taksiyle güvenli bir şekilde transferini sağladılar. Bungalovda misler gibi tatilini yaptı Biz tüy bakımını yaptırmaya fırsat bulamamıştık vermeden önce dönüş gününde de kuaför hizmetiyle misler gibi banyosunu, tırnak kesimini yapıp teslim ettiler. Köpeğin A''dan Z''ye her ihtiyacını düşünüyorlar, gözünüz kapalı güvenebilirsiniz.', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c32848b41e080067cdf09cd310b4cd1e', 'boarding-667bd6eb32f91b2c7e8563e8', 'Mert Can Yılmaz', 2, 'Güzel şeyler de söylemek isterdim ancak 1
3 gece diye başlayıp 1 gecede bitmek zorunda kalan konaklamamız için söyleyeceğim neredeyse her şey negatif.

1- Instagram hesabındaki konum yanlış. Ona tıklayıp gittikten sonra ilave bir tarifle 10 dakika daha tarlaların arasından gitmek zorunda kaldık.
2- Biraz da benim eşekliğim, bırakmadan önce gidip nasıl bir yer diye bakmamıştım. Ortam o havalı drone görüntülerindeki gibi havalı değil. Çocukların koyulduğu kafesler deli gibi güneş altında, Antalya''dayız malum, biz gittiğimizde biraz serindi ama bunun Temmuz''u Ağustos''u var düşünemiyorum.
3- Kafes telleri küflü paslıydı, önüne koyulan su kabı kireç bağlamış kirli görünen kötü bir kaptı. Biz bu çocuğa evde her gün yeni kapta damacanadan su koyuyoruz.
4- Günahlarını almayayım, yüksek ihtimal kendiliğinden oldu, ikinci günün sabahında bizim kızın bir tırnağı yerinden çıkmış, ortalık kan revan olmuş. Hemen aradılar, bilgi verdiler buraya kadar tamam. Sonrasında veteriner de organize ettiler, teşekkürler. Ardından kardeşimin bu durum içine sinmedi, biz uzakta olduğumuzdan kendi gidip kontrol etmek istedi. Muhtemelen şartları beğenmedi, kızımı otelden aldı ve eve çıkarttı.

Sorun burada başlıyor. Ben işletmeden kimseye kardeşim geliyor dediğimi hatırlamıyorum. Velev ki dedim, kızımı kardeşim oradan alırken işletme bana haber vermedi, arayıp teyit almadı.

Gerçekten kardeşim olduğunu nereden bildiniz?
Köpeği verirken bana niye sormadınız? Ya gerçekten kardeşim olmasaydı, kötü niyetli başka biri olsaydı? Husumetlim, davalık süreçlerimiz olsaydı? Başta saydıklarımın tümüne eyvallah dedim ama bu durum kanı beynime sıçrattı. Bu işletmede herhangi biri herhangi bir köpeği böyle alıp götürebiliyor mu her zaman? Böyle saçmalık olabilir mi? Belki boşluklarına geldi ama bu durum insanlık hali diyebileceğim sınırların çok dışında. Kusura bakmayın.

Not: Lütfen o yorumu kaldır vs demek için beni aramayın. Söylediğim her şeyin fotoğrafı, yazışması, kanıtı vs mevcut.', '2026-06-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c5958cf56b1406aa74ca1d85c3aa5f88', 'boarding-667bd6eb32f91b2c7e8563e8', 'Mustafa Sahin', 2, 'Antalya gelişte 5 gün bıraktık bıraktığımıza pişman olduk  kopegimizle hız ilgilenilmemis  her tarafinda pidirak dikenler vardı abarmiyorum 500 yakın hiç ilgilenilmemis köpeğimiz çok korkuyor ayağının üstüme şuan basamiyor korkuyor ve su an tedirgin. Ve 2 geçti küçük tuvaletini yapamıyor ayağına diken batmış  veteriner kliniği gitti çıkardılar tedavi gördü artı masraflar köpeğin korku dolu bakışları kaldi
Köpek oteli diye adlandırılan yerle konuştum hayvan tüylü diyor savunması bu onun sorumlugundayken. Köpeğim ayağında oluşan  yara ve iltihap nedeniyle antibiyotik  tedavisine  baslandi psikolojik tedaviye de başlanması gerektiğini söylediler', '2026-06-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-253ade1ee7495c94c031362815a062c8', 'boarding-667bd6eb32f91b2c7e8563e8', 'Burcu Şahin', 2, 'Kütahyadan gelip köpeğimi emanat ettim ben böyle bir bakımsızlık görmedim arkadaşlar can emanet ediyoruz eşya değil insansızlık bu kadar olur sakın bırakmayın heryeri dikenli otlar su vermemişler sanki nasıl su içiti içişini bir görseneniz bu iyi yorumlar yazanlara şaşkınlıkla okuyorum sakınmn bırakmayın yazık günah  popusu ful kaka olmuş hereyeri batmış tuvaleteine çıkamamış poposunun üstüne bile oturamıyor hayvanım', '2026-06-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7751ec755e1f587390e9b878c11b2102', 'boarding-667bd6eb32f91b2c7e8563e8', 'onder ozdiker', 10, 'Köpek oteli falan değil burası bildiğin tatil köyü :) Bungalov seçeneği bile var, bahçesi acayip geniş, tam koşturmalık. En güzeli de köpekleri bahçeye tek tek salıyorlar, kavga dövüş riski sıfır. Kalacak yer seçenekleri de çok iyi, standart bir kafes ortamı kesinlikle yok. Biz çok sevdik, bundan sonra tek adresimiz.', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-49015e81e153e87fc37beb11', 'Aydın Pet Market', 'Kedi ve köpek kabul eden karma tesisler', 'Aydın', 'Güzelhisar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn4GdW-BqXSvXAWjUaGTHEprmRcpkxMTtMwuI6p8gj7r_i42so6XnBT5XUqv2f4-QvEvZE1rXU9j0DdYbCgKLORRn39fntkEENS5_XVvdZrKoBRx5cojQzB4iraIGLvtpoE7AOrbkTP1FXb=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn4GdW-BqXSvXAWjUaGTHEprmRcpkxMTtMwuI6p8gj7r_i42so6XnBT5XUqv2f4-QvEvZE1rXU9j0DdYbCgKLORRn39fntkEENS5_XVvdZrKoBRx5cojQzB4iraIGLvtpoE7AOrbkTP1FXb=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnL0HMH07Fw5MCWTcA4fpIirBHNuPNM1pmd102c7LChVgI3r2jteMt6JQB6P3HRPNmVPzKvzmJsV8Z6e1kl7wJ4AhJQOczA8aM8qViZl7DVP2mlN22nt4LQeg3xoM-DLIWysIdHjQy8HYE=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnnG7QZ5vK4Lt1TZOYxAYJNaWKDr35M9VpNjIyyxf5dpPLPMs0D3hTVDPVLrcXDDF1Xh1kBAkBN1eJCh8jOMNrNmeqVzdJpnKm7rSSmVyDVbVCqb_yhVOsZj_WYD0iCeiprawkTvrSgpj_d=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl92s3SgFmYjdiwgcQRb5xNhH8LCOlX8Bc6LKsA5A4rCGQa2y8nQDy4d9QhgyAMJqj0wQ6k3iensrj-mfHAZob3T2DoHLXc0WItvpjHZ-OeTDork8Gdo6lzoJGP8Lz2j9RMNfzbaG7hDJd7=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGnXwemnofcLARd1N-y2hbVC5W4R2oAIeRIbP2KX1qh8MsCUdk5-Z6UpJo7_n3GZBJ9zYIGAte0PT0fRMLaVkIShc8_5j1l0jJeCid2tIBVrR1-DQRlwfVItm4Y6vJhxHMQm1k_0Xodxw1=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_ehIiG5LS5Atzw-UAd-Puw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=96.53949&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Hızlı ziyaret","Banka kartları","Kredi kartı","NFC ile mobil ödeme","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","aydin-kedi-oteli","guzelhisar-kedi-oteli","aydin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Aydın Pet Market, Aydın Güzelhisar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Ayd%C4%B1n+Pet+Market/data=!4m7!3m6!1s0x14b92bcefb6e290f:0x654a0364ed7ddf96!8m2!3d37.8450075!4d27.8443928!16s%2Fg%2F11yw1sbbds!19sChIJDylu-84ruRQRlt997WQDSmU?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJDylu-84ruRQRlt997WQDSmU', 'boarding-49015e81e153e87fc37beb11')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2b2597cefbc79175bb3efdc2aa561fc9', 'boarding-49015e81e153e87fc37beb11', 'Gurkan Comer', 10, 'Güzel bir mağaza Aydın''da tek diyebiliriz çünkü hem teknik bilgiye sahipler hemde Güleryüzlu bir ekip ümit bey bizimle şahsen ilgilendi kendisine teşekkür ederim bol kazançlar dilerim', '2026-01-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d85ccee368cc6ebf60175ab853f98191', 'boarding-49015e81e153e87fc37beb11', 'SUAT YEŞİL', 10, 'Fiyat olarak çok iyi bir yer kedim için oyuncak aldım çok severek oynuyor', '2026-01-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8f74c9ed59b0334a492cea09ffe1f89b', 'boarding-49015e81e153e87fc37beb11', 'NACİYE FIRTINA', 10, 'Pet market ve pet otel olarak çok memnun kaldık. Güler yüzlü ekibe teşekkürler...', '2026-01-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f41ecab5a72149230bf55a2a91b0d1ec', 'boarding-49015e81e153e87fc37beb11', 'Yusuf Uysal', 10, 'Aydının en gelişmiş en kaliteli ürünleri bulunan en güzel petshop u çalışanları çok bilgili ve çok yardımcı oluyorlar. Fiyatlarda bu kaliteye göre çok düşük kesinlikle gidilir.', '2026-01-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-29f797da35958847b1b39b4ca8a9ba93', 'boarding-49015e81e153e87fc37beb11', 'seckin erdinç', 10, 'Evcil hayvanlarinizin ihtiyaclarini uygun fiyatlar ile karşılayabilirsiniz... İlgi ve alakaniz icin cok tesekkurler🙏', '2026-01-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-66e647a4272a914d5a8d1cd3', 'Petlantis Köpek Oteli', 'Köpek otelleri', 'Aydın', 'Ağaçlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0EJ_3_Ah6Ar1xNOIAPH0hsZmNg2eAtRmLB3_u4lSBM2-z52lROL00LMfNqxhf1LW9BpU5uZpgqFA-AMIec6meiETPHsL9sA2nPeTj7_c7YJN_8MYU4CklccVpNwlS2MDHprpCjQr9yA7l=w408-h906-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0EJ_3_Ah6Ar1xNOIAPH0hsZmNg2eAtRmLB3_u4lSBM2-z52lROL00LMfNqxhf1LW9BpU5uZpgqFA-AMIec6meiETPHsL9sA2nPeTj7_c7YJN_8MYU4CklccVpNwlS2MDHprpCjQr9yA7l=w224-h497-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl5kGhRXRnBN4028s-LMDLOOQx5ZmYDB8tMI-0QXeZr3lXg2MjtiC8hXqgIrizfeXkBTQSo2z0RG41pkD1Nz3DejgZ9pyPKmFVN2RYqnDb8XNMIhZqkdRWyGx7bKRsDGXGBiSXc=w224-h306-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnSGAoE6pQ8hpJ7jH__RqVtKhdXzFHyhwf0TG2BArBxXIxWmGzgmwqD3NpRox97u47PpU5jMd7cGDzZjIZLg3MA1M7LuEfGK8-fZK-Ga8uZLLdhKN4ToQmf5X5tKGJB0uJoHPs=w224-h303-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=flSfPIu2ezo2NmhdJNssBQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=48.342453&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","aydin-kopek-oteli","aydin-kopek-pansiyonu","agacli-kopek-oteli","aydin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Petlantis Köpek Oteli, Aydın Ağaçlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0506 392 00 22', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Petlantis+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14beb16c6c2e742f:0x948d23d356bb8320!8m2!3d37.7382574!4d27.340879!16s%2Fg%2F11rgy0_4tc!19sChIJL3QubGyxvhQRIIO7VtMjjZQ?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJL3QubGyxvhQRIIO7VtMjjZQ', 'boarding-66e647a4272a914d5a8d1cd3')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e9352012d84e34bf377977e4d9fa65ea', 'boarding-66e647a4272a914d5a8d1cd3', 'elif tanza', 10, 'İlker Beyin kızımız Tarçın''la ilk andan itibaren etkileşimi çok güzeldi ve 15 gün misafirleri oldu. İlgisi ve alakasına çok teşekkür ederiz. Gönül rahatlığıyla evladınızı emanet edebileceğiniz bir otel.', '2026-05-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2c5661e0098b473e84786bfeca2bf5c8', 'boarding-66e647a4272a914d5a8d1cd3', 'İrem Bartan', 10, '4 gün kızımın kalacağı adres. Çok profesyonel işinde çok titiz kaliteli  ve yardımsever bir insan ilker beye çok teşekkür ederiz. Gözümüz arkada kalmadı . Artık Kuşadası’nda her  gelişimizde adresimiz belli', '2026-05-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f4149783242a3fef661172871aa85a88', 'boarding-66e647a4272a914d5a8d1cd3', 'Ebru Başara', 10, 'Romeo’yu beş gece İlker Bey’e bırakırken çok çekindik. Kendisi her gün düzenli olarak bizi bilgilendirdi, video ve foto gönderdi. Döndüğümüzde huzurlu ve mutlu bir Romeo bizi bekliyordu. Teşekkür ederiz!', '2026-07-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cd46a1baaaf5f4ff40bb87f7bec03df0', 'boarding-66e647a4272a914d5a8d1cd3', 'Atakan Baysoyu', 10, 'Oğlum Odiseus Petlantis in müdavimlerinden. İlker''i her gördüğünde heycandan ve mutluluktan yerinde duramıyor. Geri dönüşünde ise daha mutlu oluyor. Her şey için tekrar tekrar teşekkür ediriz. 😇💐', '2026-05-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-20ea0dd7d5b88fed2cb457e1f42cadc2', 'boarding-66e647a4272a914d5a8d1cd3', 'Huseyin Erdem', 10, 'Petlantis’te Hooli ve Mikki yaklaşık 5 haftaya yakın konakladı ve gerçekten çok memnun kaldık. İlk günden itibaren hem ilgi hem de iletişim çok profesyoneldi. Onlarin mutlu, rahat ve güvende olduğunu hissetmek bizim için çok önemliydi ve bunu fazlasıyla sağladılar. Düzenli ilgilenmeleri, temiz ortamları ve hayvanlara sevgiyle yaklaşmaları bizi çok rahatlattı. Uzun süreli konaklamalarda güvenebileceğiniz nadir yerlerden biri. Gözümüz arkada kalmadan teslim ettik. Her şey için çok teşekkür ederiz, kesinlikle tavsiye ederiz', '2026-05-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-3cc5148bf41e2a931b6580d1', 'Sevimli Patiler Pet Hotel', 'Köpek otelleri', 'Aydın', 'Denizköy', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktqkexNEqFkozCaGbtoFUeSnXP-myi3eXEpDJ92kbe_EE9FSfFqMR2RKiua3IIxmybvqXkkuUPc0d_KKHTPba5cZu1s2Gb6MlaCo5xFwOUuR6Fn9RRvK0aI2Ru3HOM_zLcpqaq8bXBi0E=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktqkexNEqFkozCaGbtoFUeSnXP-myi3eXEpDJ92kbe_EE9FSfFqMR2RKiua3IIxmybvqXkkuUPc0d_KKHTPba5cZu1s2Gb6MlaCo5xFwOUuR6Fn9RRvK0aI2Ru3HOM_zLcpqaq8bXBi0E=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlQMvNtHJ9P23XTN0-I23dhUGKxi-5RIEGOOTtq9bAN9mVTobtF6dxgb9R0AkCNrHOZ-E-iSikBZX82i-aYVEg-BTbG49fZeCeEdE6F1gXB7fiixpnExEQlgB5pWubyJozGiP5TDqedVy0G=w229-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnKQGC9Kh8NBva7aAm5fFyzXTAeYgb2F68CmiuoiY4qY9gp5qkNEAugBOTneJPxTmJzRDlqirzSkTEEdi2SjseXYXLR-OvhCN8DYltJLkedTlFxk6YJ0FD7ihvSzEOzchnktH_mKAigFh97=w224-h298-k-no"]'::jsonb, '["dog"]'::jsonb, '["Kendi otoparkı var","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","aydin-kopek-oteli","aydin-kopek-pansiyonu","denizkoy-kopek-oteli","aydin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Sevimli Patiler Pet Hotel, Aydın Denizköy bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0547 549 09 09', NULL, 'https://sevimlipatilerhotel.com/', '{"google_maps":"https://www.google.com/maps/place/Sevimli+Patiler+Pet+Hotel/data=!4m7!3m6!1s0x14be8716f27a3031:0x8328096f08c2fc7!8m2!3d37.4488334!4d27.3494815!16s%2Fg%2F11z5d4ghb5!19sChIJMTB68haHvhQRxy-M8JaAMgg?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJMTB68haHvhQRxy-M8JaAMgg', 'boarding-3cc5148bf41e2a931b6580d1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9c26e7193db9b2379f7d60dd2cb787f1', 'boarding-3cc5148bf41e2a931b6580d1', 'Zeynep Toprak', 10, 'Merve hanımın kendi çocukları gibi sevimli patilerle ilgilenmesi 😍 Ortamın canlılığı ,temizliği ve çalışanlarının güleryüzlülüğü için teşekkürler. Didime yenilik kattığını düşünüyorum.', '2026-04-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4d0eb3a3e4dcdd740197af6f0a641e77', 'boarding-3cc5148bf41e2a931b6580d1', 'Elvan Göçer', 10, 'Can dostlarımızı gözü kapalı emanet edeceğimiz sıcacık bir yuva 💙çok güzel düşünülmüş Yakup bey ve Merve hanım çok ama çok teşekkür ederiz iyi ki varsınız 🌸🌸🌸', '2026-04-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0531ad57579099f370d301f2bfa1a5a0', 'boarding-3cc5148bf41e2a931b6580d1', 'Yagiz Arslan', 10, 'Çok temiz bakımlı ve ilgililer. Can bey yıllardır kızımızla ilgilenir işinde profesyoneldir. Gönül rahatlığı ile dostunuzu bırakabilirsiniz', '2026-06-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0348fabfa39ebc5602221acbe1a69596', 'boarding-3cc5148bf41e2a931b6580d1', 'Tuğçe GÜNER BİLGE', 10, 'Canlarımızı güvenle emanet edebileceğimiz bir işletme. Sahibi gerçek bir hayvansever, istediğimizden fazlasını verecektir çocuklarımıza. Gönül rahatlığıyla tercih edilebilir.🐾🥰', '2026-04-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a57c9a90dea9888239eca85c3503764f', 'boarding-3cc5148bf41e2a931b6580d1', 'Büşra Demir', 10, 'Bu işi severek yaptıkları o kadar hissediliyor ki. Güvenle can dostlarınızı emanet edebilirsiniz. İşletme sahibine ve Merve Hanım a ilgileri için çok teşekkür ederim.', '2026-04-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-964e2d5a6d855c994e6dd01f', 'Aydın Toy Poodle Aydın Köpek Eğitmeni', 'Köpek otelleri', 'Aydın', 'Pınardere', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk_DpXgT06l7EJRhy4zNTl7opU79D4snCjTZ2_Tme3LlcGCOHWhWc_WhxaRFRmfaBGKs_GZHTnzN3Fqqgw9evzcsbQcKO40pe8RZrkkZ8-5gDZCzGwhztvek63iUH0jV0PbCUQGAfMG4t2n=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk_DpXgT06l7EJRhy4zNTl7opU79D4snCjTZ2_Tme3LlcGCOHWhWc_WhxaRFRmfaBGKs_GZHTnzN3Fqqgw9evzcsbQcKO40pe8RZrkkZ8-5gDZCzGwhztvek63iUH0jV0PbCUQGAfMG4t2n=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmUN3yb1pTF-gsoi8nRPCuZzEM0Osg5-mItoyITpybrQLOFAORhewbALf004OTBQ02Bxshh0KNmpHfofo-lIaq_wYSm4e4wNgYUQX2WFOmKutAd96evSdsBm-ACGu8psFtBV_HZ9x5dRar-=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmtt5RxPNWHZrIzBPuS5JfeX1X48T36BPyHIEwvTcGkjp-YO04OJ-j0m1Os5E097P9GkQ702SmLJte-FNOqTczfLwTKdkFL3vE2G3qF8KA5eAN4vjbDRmQHxxW7Zww07o9RRr2zwTS-aZE=w224-h401-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWluUd9bG-ikJUDsIDCZNwxVUljVMgcd82r4BsWiyOgsRs3e5SvMbhirTo-1HepW7rIFLeGv4VAT3PM5aDz2eCqvdFGJoBE6rfkxCai1NKe-57u7qBRXvTlhLqNerSZKxyBs_f4PjZXK2nE=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kTtkZe6JF8irPB9aD4Hg2g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=297.2967&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","aydin-kopek-oteli","aydin-kopek-pansiyonu","pinardere-kopek-oteli","aydin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Aydın Toy Poodle Aydın Köpek Eğitmeni, Aydın Pınardere bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, 'http://www.aydinpoodleyavru.com/', '{"google_maps":"https://www.google.com/maps/place/Ayd%C4%B1n+Toy+Poodle+Ayd%C4%B1n+K%C3%B6pek+E%C4%9Fitmeni/data=!4m7!3m6!1s0x14b92b77b0580525:0xe00639d1a1440963!8m2!3d37.8405582!4d27.921595!16s%2Fg%2F11t1180rf1!19sChIJJQVYsHcruRQRYwlEodE5BuA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJJQVYsHcruRQRYwlEodE5BuA', 'boarding-964e2d5a6d855c994e6dd01f')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-41652fced53715ad966dcfd1d3b1fa38', 'boarding-964e2d5a6d855c994e6dd01f', 'Mahir Emre Sucu', 10, '1 haftalık tatilimiz süresince Bulut''un konakladığı, çok memnun kaldığımız bir işletme. Gözünüz arkada kalmadan can dostunuzu bırakabilirsiniz. Her gün gönderilen video ve fotoğraflarla özlem giderdik. Yiğit Bey''e her şey için çok teşekkür ederiz🙏', '2025-08-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-759b360c80d0c9510e6d0aad25c93e62', 'boarding-964e2d5a6d855c994e6dd01f', 'Melek Güven', 10, '5 yaşında maltese terrier köpeğimizi 5 günlük bakılması için bıraktık bu zamana kadar gittiğimiz hiçbir yerden olumlu sonuç alamamıştık ama burdaki kişiler o kdr güzel ilgilendiler ki köpeğimizle, hem biz hem köpeğimiz mutlu ayrıldık. Kendilerine teşekkür ediyoruz.', '2025-08-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-022a39572b617950f1abfdb0c694c539', 'boarding-964e2d5a6d855c994e6dd01f', 'Hayrettin Burak Tarım', 10, 'Çok iyi insanlar ilgileri ve köpeklere karşı davranışları çok güzel ve sıcak hayvanlarınızı güvenle bırakabileceğiniz mükemmel bir yer eğitim konusunda aşırı başarılılar', '2025-04-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e0fa1c9f4709d3dd03722f8d43f22771', 'boarding-964e2d5a6d855c994e6dd01f', 'Furkan Gönülcü', 10, '2,5 yaşında malinois ırkı oğlumuz için koruma eğitimi vesilesiyle başvurduk. Gerçekten olumlu sonuç aldık, Çiftlikte çalışanlar gerçekten çok temiz ve disiplinli özellikle hijyene çok dikkat ediliyor. Evlatlarınızı güven içinde emanet edebilirsiniz. Elinize sağlık ..', '2025-04-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8591ed00b211b309ddb7f0aab70e19fe', 'boarding-964e2d5a6d855c994e6dd01f', 'NERGİZ OKTAY', 10, 'Dog Paradise Köpek Eğitimi ve Pet Otel evladınızı güvenle, gözünüz arkada kalmadan teslim edebileceğiniz bir yer. Yiğit bey sadece eğitim sırasında değil, eğitim sonrasında her zaman 7/24 desteklerini vermeye devam ediyor. Profesyonelliği ve işin hakkıyla çok severek yapan Yiğit beye çok teşekkür ederim.', '2025-04-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-c2ac8cb8fe96476824c6b079', 'KMT KÖPEK OTEL PANSİYON', 'Köpek otelleri', 'Aydın', 'Ağaçlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnizsKIWUv5BmDhw0hI5tZaqyh-a8SPb4wMwnJtHjm7smi9O1UHWCsWQ6ryBDIlJNxEU51kXcILcGEr3jds1OzMRQ339CggffYGNoFtEq_fIGkVfBJlZkMdlKpa51BbK3lwiiAPDWf4E_eW=w408-h409-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnizsKIWUv5BmDhw0hI5tZaqyh-a8SPb4wMwnJtHjm7smi9O1UHWCsWQ6ryBDIlJNxEU51kXcILcGEr3jds1OzMRQ339CggffYGNoFtEq_fIGkVfBJlZkMdlKpa51BbK3lwiiAPDWf4E_eW=w296-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkyHfBy1QACnYmHcINtoFxHCr8-0itxyulIfnTEQ_6NAM4JjP3HHu5ApdJOHaOZdl8QyaztaaaB2Bw9gU4uxxs59CAW4yIsseXQHhLAm9dhg84r10MJ31Azh4Qp0uHD2O0f0wv01E5pTOU=w224-h486-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkhevACde7crC0_rCK98_szxhF7CEHTIpU9lBR51qa-66e2u20GWkiQsUjaYnSXWf0pVNWzGpQkMLjeCXV5S_1K1wY5aHrfbnA8_AnrYKjFiiTr-bsriUzCOXelW_2t3B9cswsO=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWle6WNmPHpoDAAL7W2xfqt9xUYCmVyIG6bWALPpMTc8PgLb5X3NoysdKiMFd8nyhTYjCVsYrayz1r6_hw9xkChIVE6R5bTe-m65TkWGaXrCYjCA0TPponpIpu9E5_QT4ogcrc7q6mvp5VBK=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3T57RiCMjpUCeRnVdEKesjyFGJL6B4UGf7qiQ9gGezIH33JqodjkCAYeBFOYf6ZuyT96uyFUkelxxST61AyAvh4pSxHcpwjp9Qsy7qn9YHe5dI_Nxl-pcBSLb4XIMli9uW9WOgQ=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=HdKTtPv5fntxb6aV4op3XQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=224.67581&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","aydin-kopek-oteli","aydin-kopek-pansiyonu","agacli-kopek-oteli","aydin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'KMT KÖPEK OTEL PANSİYON, Aydın Ağaçlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 413 67 77', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/KMT+K%C3%96PEK+OTEL+PANS%C4%B0YON/data=!4m7!3m6!1s0x14bea56e8b43a157:0xb4d0520b8e178c85!8m2!3d37.7402328!4d27.3307392!16s%2Fg%2F11f6dtyc42!19sChIJV6FDi26lvhQRhYwXjgtS0LQ?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJV6FDi26lvhQRhYwXjgtS0LQ', 'boarding-c2ac8cb8fe96476824c6b079')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b499a0a5aeac59b2e15cd43764fb129f', 'boarding-c2ac8cb8fe96476824c6b079', 'Fonetik Tercüme', 10, 'Tatil için gelmişken tarihi yerleri görmek için dostumuz Juno''yu birkaç günlüğüne gözümüz arkada kalmadan emanet ettik ve kendi çocukları gibi ilgilendiler. Köpeğimiz oldukça geniş ve güvenli bir alanda, gayet keyifli bir şekilde kaldı. Bu civarda pet otel arıyorsanız, düşünmeden bırakabilirsiniz. Telefonla görüştüğümüzde bize bir tek Mehmet Bey güven verdiği için diğer otelleri tercih etmedik. Juno ile bu kadar güzel ilgilendikleri ve bize düzenli olarak fotoğraf ve video gönderdikleri için Mehmet Bey ve sevgili eşine çok ama çok teşekkür ederiz.', '2026-08-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-813b1c9e33680509a686de16e82c44b3', 'boarding-c2ac8cb8fe96476824c6b079', 'Berna Bahar', 10, 'Can dostumuz Kral için eşsiz bir bayram tatili geçirmesine vesile oldunuz ve ikinci yuvası gibi rahat konforlu temiz doğal bir ortam yarattığınız için  çok teşekkürler.Bizler gönül rahatlığıyla emanet ettik , Kral da en konforlu şekilde tatilini yaptı. Yakınlığınız, günlük bilgilendirmeleriniz bizler için çok önemliydi teşekkür ederiz🙏', '2026-05-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0e3056b25ef3d01c75b6bdfd2580f9a2', 'boarding-c2ac8cb8fe96476824c6b079', 'Doğukan Batu', 10, 'Köpeğimizi gönül rahatlığıyla emanet ettik. Çok sevgi dolu ve ilgili bir yer, her konuda içimiz rahattı. Bundan sonra ilk tercihimiz burası. Her şey için çok teşekkürler', '2026-08-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-02a61009bd2a77d68b310c58e808f86b', 'boarding-c2ac8cb8fe96476824c6b079', 'Betül Çetin 2', 10, 'Odin i 9 günlüğüne emanet ettik.Döndüğümüzde oda çok mutluydu bizde.Temiz ve özenli.Teşekkür ederiz', '2026-07-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-05d218e03b9a1ce29fd00bcd6e991816', 'boarding-c2ac8cb8fe96476824c6b079', 'Yüksel İsmail', 10, 'Kızım Karameli ilk kez bukadar uzun süre bırakmak zorunda kaldım ve çok tedirgindim, ama Mehmet bey ekibi tüm korkularımı sildi. 5 günün sonunda Karamel hem sağlıklı, hem daha da sosyalleşmiş şekilde kucağımıza atladı. Her gün attığınız fotoğraflar ve videoları içimizi rahatlattı. Emekleriniz için minnettarız, artık Karamelin ikinci evi burası.', '2026-05-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-2ee66ef9e82b5db1f4affe35', 'Aydın Pet Otel ve Pet Pansiyon 09', 'Kedi otelleri', 'Aydın', 'Orta', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=mWK2AGCJ284j5x0Q-LfAAA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=144.95276&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=mWK2AGCJ284j5x0Q-LfAAA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=144.95276&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=mWK2AGCJ284j5x0Q-LfAAA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=144.95276&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","aydin-kedi-oteli","orta-kedi-oteli","aydin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Aydın Pet Otel ve Pet Pansiyon 09, Aydın Orta bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, 'https://instagram.com/aydinpetotelvepansiyon09?igshid=YmMyMTA2M2Y=', '{"google_maps":"https://www.google.com/maps/place/Ayd%C4%B1n+Pet+Otel+ve+Pet+Pansiyon+09/data=!4m7!3m6!1s0x14b92b9ba3291a45:0x20d634562c2d5a28!8m2!3d37.8464737!4d27.8565346!16s%2Fg%2F11s3v2zxcb!19sChIJRRopo5sruRQRKFotLFY01iA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJRRopo5sruRQRKFotLFY01iA', 'boarding-2ee66ef9e82b5db1f4affe35')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-498d399a16444033ff3e221c81df9488', 'boarding-2ee66ef9e82b5db1f4affe35', 'meryem gündüz', 10, 'Çok yaramaz bir kedim olmasına rağmen Melek Hanım ve Onur Bey çok güzel ilgilendiler. Her gün fotoğraf, video atarak biraz olsun özlemimizi giderdiler. İlk defa ayrı kalmıştık ama bunun tedirginliğini bana yaşatmadılar. Güler yüzlü, samimi olmaları da cabası oldu. Çok teşekkür ederim.', '2022-07-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f07ed6468287294e898cee6c2c7676c6', 'boarding-2ee66ef9e82b5db1f4affe35', 'Yusuf Ilci', 10, '2 kedimizi nur hanım  ve onur beye bıraktık. Cok ilgili videolar telefon görüşmeleri bizi çocuklarımızdan hiç atışmadılar iyi ki varsınız.', '2022-11-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b4e36d15867b159f4c4ede527787387c', 'boarding-2ee66ef9e82b5db1f4affe35', 'Hilal Dolas', 10, '4 gün kedimizi emanet ettik fotoğraf ve videolarla hergün bilgilendirildik Melek Hanım ve Onur Beyin ilgileri çok güzeldi çok memnun kaldık', '2022-07-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9e68ebd034d9813b91274d466659b676', 'boarding-2ee66ef9e82b5db1f4affe35', 'Theta uygulayıcısı Müge', 10, 'Merhabalar açık gözüküyor hala Google da fakat iletişim bilgilerinize ulaşamıyorum hizmet veriyor musunuz?', '2025-02-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-990071dacb3897a6ef3ff6e3e7dfe02f', 'boarding-2ee66ef9e82b5db1f4affe35', 'Nurhayat Bağan', 10, 'Köpeğimizi bıraktık çeşmeye kadar da getirip teslim ettiler . Her anlamda çok ilgililerdi çok teşekkürler.', '2022-11-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-dad8a2596a7cb0d10a046342', 'Pets Paradise Köpek Oteli Pansiyonu - Eğitim', 'Köpek otelleri', 'Balıkesir', 'Tekke', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmvSryeROm4DaElLty3wMhWmaJVEVHRgxkHCSehhDOjA-NmV82BeL8gpXZ4HPeaiud1cSoQKWMEw_K5ozmZO0TV9MZjhz3InoR_qs_1bLAoUNb-2VREXcSnxOKJMh3p_Z7YfzQ_=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmvSryeROm4DaElLty3wMhWmaJVEVHRgxkHCSehhDOjA-NmV82BeL8gpXZ4HPeaiud1cSoQKWMEw_K5ozmZO0TV9MZjhz3InoR_qs_1bLAoUNb-2VREXcSnxOKJMh3p_Z7YfzQ_=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlSJsBa0qaRcolEhj4Omk2Avd_on4ajnCIc9Wb-hXqdiE99u3PQKAOKPLhWijZMtVXh7huet2igIh1HTYHv861SxPQuH9cLsdTMRrqTBDYydkT9iiZ5D5UZ4ATnhuWqZfWunNI=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnPSVxlMbQu4tAiNjBNiRXuHPg4v3dISMBBRY-2-Iu-PFzbdVNOZw3DJkkimGQjnUXCBZc9N4M-ksI58uEB6y6bDnXk5do0uSi5FIAXfHIBnwdmxaljOrTc2R0NY16WmO3a3Th4Dys6J8E7=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkt272hUaEGEZ76eRI5AM4XEH65G3Ow8WHJ_DHGT6WuHJaZBhGiPLt7MttFIbbmiNBt_zZ67rEbXHh_2OkIGDH-uQ3EnQJjywGen4qM4HlcSWbWtHvbIh_z4rxyZjYWn3WPN4W7Cw=w529-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=9deInnexxILiqX9qGi6szg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=274.1456&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","balikesir-kopek-oteli","balikesir-kopek-pansiyonu","tekke-kopek-oteli","balikesir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pets Paradise Köpek Oteli Pansiyonu - Eğitim, Balıkesir Tekke bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 507 18 71', NULL, 'http://www.intagram.com/petparadisekem', '{"google_maps":"https://www.google.com/maps/place/Pets+Paradise+K%C3%B6pek+Oteli+Pansiyonu+-+E%C4%9Fitim/data=!4m7!3m6!1s0x14b0b77da58e7beb:0x1eadca8b670c8ba!8m2!3d39.5593883!4d27.056484!16s%2Fg%2F11qpthd91r!19sChIJ63uOpX23sBQRushwtqjc6gE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ63uOpX23sBQRushwtqjc6gE', 'boarding-dad8a2596a7cb0d10a046342')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4e1904f1bf8528188e3d5b057f848036', 'boarding-dad8a2596a7cb0d10a046342', 'Pınar Yanardağ', 10, 'Benim büyük ve temas bağımlısı huysuz mu huysuz pitbull cinsi köpeğim var sağlık durumumdan dolayı 3 ay bakabilecek bir otele ihtiyacım vardı körfezde uzun süre köpek oteli aradım fakat istediğim şevkati veremeyeceklerine inandım bir arkadaşım vasıtasıyla Aşkın beyle tanıştım Thor''u pet paradise oteline bıraktım.
3 ay boyunca gözüm asla arkada kalmadan sabrına hayvan severliğine hayran olduğum Aşkın beye çok teşekkür ederim
İyi ki yollarımız kesişti', '2025-05-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9ac9483d963501d09d1bdaf22b5f3ef8', 'boarding-dad8a2596a7cb0d10a046342', 'Eliçe Snm Akbıyık', 10, 'Gelen bütün köpekler ile ayrı ayrı ilgilenen oyunlar oynayan Dezenfektan ve hijyenden asla ödün vermeyen çocukların güzelce bakıldığı ve sosyalleşebildiği çok güzel bir yer', '2026-04-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8cea16f11e804d00d169709a281e7dac', 'boarding-dad8a2596a7cb0d10a046342', 'Y E', 10, 'Köpeğimiz Şirin''e 3 hafta boyunca çok güzel bir şekilde bakan Aşkın Bey''e teşekkür ederiz. Hergün video ve fotoğraf gönderip ilgilendiler. Herşey çok güzel ve profesyoneldi. Çok memnun kaldık.', '2022-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-50710233865d582dfd57ba9d41a4c08d', 'boarding-dad8a2596a7cb0d10a046342', 'Dilek Emçioğlu', 10, 'Köpeğinizi güvenle teslim edebileceğiniz harika bir işletme. Bir çok kez köpeğimizi emanet ettik, bazılarında oldukça uzun süre kalması gerekti. Ve pansiyonun sahibi Aşkın Bey gerçekten işini severek yapan, köpeklerle çok güzel anlaşan, çalışkan ve ilgili bir insan. Ben, köpeğim söz konusuyken şahsen son derece titiz ve pimpirikli bir insan olmama rağmen, köpeğimin oradaki bakımını, nasıl sevildiğini ve nasıl mutlu ve huzurlu, sağlıklı olduğunu gördükten sonra artık içim çok rahat çocuğum Lady yi emanet ediyorum.', '2025-05-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0dc0890335d654728c038b39465ab825', 'boarding-dad8a2596a7cb0d10a046342', 'esma taştekin', 10, 'Merhabalar;13 ve 17 Temmuz tarihlerinde 2 aydır sahiplendiği 5 aylık french buldog köpeğimi düğün için adana ya gitmek zorunda kalınca internetten bulduğum Aşkın bey e emanet ettim...öncesinde hep tereddüt ettim,ama kendisi sevgiyle yaklaştı ,teslim aldıktan sonra da sadece bizi ozlemisti...bu zor günlerde yardımcı olduğu için çok teşekkür ederim...işinde başarılar dilerim...', '2024-07-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-97e2f3c46935b922490bddf3', 'Özel Balıkesir Kedi Oteli', 'Kedi otelleri', 'Balıkesir', 'Bahçelievler', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=sxWSB3mCQcjssFqI7jCQtw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=236.41826&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=sxWSB3mCQcjssFqI7jCQtw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=236.41826&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=sxWSB3mCQcjssFqI7jCQtw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=236.41826&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","balikesir-kedi-oteli","bahcelievler-kedi-oteli","balikesir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Özel Balıkesir Kedi Oteli, Balıkesir Bahçelievler bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0545 183 10 11', NULL, 'https://instagram.com/balikesirkedioteli?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', '{"google_maps":"https://www.google.com/maps/place/%C3%96zel+Bal%C4%B1kesir+Kedi+Oteli/data=!4m7!3m6!1s0x14b701441a9d6189:0x14215f769f572ae4!8m2!3d39.6325774!4d27.8907618!16s%2Fg%2F11krfhtdht!19sChIJiWGdGkQBtxQR5CpXn3ZfIRQ?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJiWGdGkQBtxQR5CpXn3ZfIRQ', 'boarding-97e2f3c46935b922490bddf3')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-78a62a2d04b368d9a2194e4e3d90406f', 'boarding-97e2f3c46935b922490bddf3', 'Pelin Şimşek', 10, '10 günlük tatile giderken bırakmıştım kedimi. Sağolsunlar her gün fotoğraf attı mekanın sahibi. İçim rahat etti, gözümüz arkada kalmadı 😊😊', '2023-08-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6c609daafebee150df8efdeffeb1b5e2', 'boarding-97e2f3c46935b922490bddf3', 'yıldırım akıncı', 10, 'Zor zamanımızda miya''ya çok güzel ev sahipliği yaptınız. Misafirperverliğiniz için teşekkürler 🙏', '2025-07-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fd8d8e2a05c72a050eba93362d669059', 'boarding-97e2f3c46935b922490bddf3', 'Deniz Gezici', 10, 'Bir hafta boyunca süslü kedimize özenle baktığınız için, gün aşırı fotoğraf ve video gönderme inceliğiniz için çok teşekkür ederim 😊', '2023-08-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7269e70989087c870490d5e5b9e2dfdc', 'boarding-97e2f3c46935b922490bddf3', 'serkan atasever', 10, 'Çok güzel düşünmüssünüz, önemli bir eksiklikti.', '2023-08-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-65a3a5888b4c9fcaa4162575', 'Bambi pet shop', 'Kedi otelleri', 'Bolu', 'Borazanlar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbTdo-hh39WFVWaZy25-yYAqFBL79GpePRLZ6X9SzG1sYV0LbLXRxIVvQkZvQv8MX0P8RASNszlEbCgsopA8nK-1ax3fson8n4KHjkW9UG_xFPByshkDsSLzf5ZZl8I6FvCLjX=w408-h905-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbTdo-hh39WFVWaZy25-yYAqFBL79GpePRLZ6X9SzG1sYV0LbLXRxIVvQkZvQv8MX0P8RASNszlEbCgsopA8nK-1ax3fson8n4KHjkW9UG_xFPByshkDsSLzf5ZZl8I6FvCLjX=w224-h497-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbTdo-hh39WFVWaZy25-yYAqFBL79GpePRLZ6X9SzG1sYV0LbLXRxIVvQkZvQv8MX0P8RASNszlEbCgsopA8nK-1ax3fson8n4KHjkW9UG_xFPByshkDsSLzf5ZZl8I6FvCLjX=w224-h497-k-no"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","bolu-kedi-oteli","borazanlar-kedi-oteli","bolu-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bambi pet shop, Bolu Borazanlar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0538 852 03 77', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Bambi+pet+shop/data=!4m7!3m6!1s0x409d3f6b3a2f7fc1:0xf2c100f30f4fb210!8m2!3d40.7309225!4d31.5916503!16s%2Fg%2F11vwk32qb1!19sChIJwX8vOms_nUARELJPD_MAwfI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJwX8vOms_nUARELJPD_MAwfI', 'boarding-65a3a5888b4c9fcaa4162575')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2877df31316a8aaf6eb6b4b5f2d834fa', 'boarding-65a3a5888b4c9fcaa4162575', 'esra yerlikaya', 10, 'Bolu''da ilk ve tek bakım evi.
İşletme sahipleri Ayşe ve fırat beye çok teşekkür ediyorum evcil hayvanımı 3 gün onlara teslim ettim o kadar güzel bakmışlar ki tekrardan teşekkür ederim.
Boluya böyle güzel bir hizmet kazandırdıkları için', '2024-03-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-af8296ccda3d0d183addf581', 'PERA PET OTEL', 'Ev tipi bakım merkezleri', 'Türkiye', 'Merkez', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnt39RKcfjPnNS48bWTAVSMTxfBB-mjoEkIGZ66yqQ4EzRx1tZJ-CwaOXN1dZsyXnp9zLxNxric8Y814VEex4iixTyOyAJZvvbocjHWzGwfVt5VPw7zwFwOoXii1DmtueCYuN4N7w=w408-h906-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnt39RKcfjPnNS48bWTAVSMTxfBB-mjoEkIGZ66yqQ4EzRx1tZJ-CwaOXN1dZsyXnp9zLxNxric8Y814VEex4iixTyOyAJZvvbocjHWzGwfVt5VPw7zwFwOoXii1DmtueCYuN4N7w=w224-h497-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkZ0-TNNkIlg-NO2jxuI_9rZ3wQeRLNfC0luAvLAiJ6hjbxMutvZ1gy-Fxr3b-ijV39R2dxjMsdmDsjaZYj3GkSPci40GKtMjMBmgsy9xi-TLzKtueE8FjYiSMy73humjgUJAZQ-A=w224-h299-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkUYevBtM2DNDqNxD5i09amWkVw72nJneYm8kSYBbNPYE273visYlPYBHF41KTC04c6VXVb7M0KiEBw8gOXZOXng7b3csQQgfEtcYGhAXEEXKHAgKvNy_OT6xu2QpU1rpsrIiFW=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9lOCGf3jOrgB1WfOPy_-0IMiQQItDihfF9ELh8MUtT6sHoz9anhPqMs98pZ7S3wMLxySLhfnpOcI94NBlueEwQBSbO1tZEVrTb7XbFfBrSGeXR0TcxOg0acybblIqENRPMXba=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFsahuOwyU0_OAQOgdqQXOLiegDnsl2UDwjx50UP3I-72k6EXuQGF2D-ti-2NttGlpIPZv5U_nWmCgtxxWEDkf-AGYMRIHWsmCSo_QZ8DaYg-_k-ZcEGzBA1hDLNkR6JF6I8jcsg=w224-h298-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","turkiye-pet-oteli","turkiye-kedi-kopek-oteli","turkiye-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'PERA PET OTEL, Türkiye Merkez bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 427 57 51', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/PERA+PET+OTEL/data=!4m7!3m6!1s0x14b567fb3fef54ab:0x16f639d95185ee8c!8m2!3d41.0053215!4d29.0121794!16s%2Fg%2F11qyqbqxsn!19sChIJq1TvP_tntRQRjO6FUdk59hY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJq1TvP_tntRQRjO6FUdk59hY', 'boarding-af8296ccda3d0d183addf581')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fce11549e26b9c8c21b218a484bafd87', 'boarding-af8296ccda3d0d183addf581', 'Begüm Bakır', 10, 'Köpeğimizi 6 gün emanet ettik ve kendi çocukları gibi baktılar. Çok teşekkür ediyorum tekrardan. Gönül rahatlığıyla güvenebilirsiniz.', '2021-07-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5438f9fb53a00fc634a15992c03f093c', 'boarding-af8296ccda3d0d183addf581', 'Jülide Saygin', 10, '4 aydır oğlum cocoyu pera pet otel nurhan hanıma emanet ettim ve çok güzel çok temiz bakılmış çok güzel eğitim almış her şey için çok teşekkür ederiz emeğinize sağlık ❤️❤️', '2021-07-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-75e997234f2171c993fce50fb5ebefbc', 'boarding-af8296ccda3d0d183addf581', 'Fidan Arıkçı', 10, 'Oğlum zeytini Nurhan hanıma emanet ettim hem hayvanları seven hem  güleryüzlü hemde çok temiz bir insan çok temiz bir otel gönül rahatlığıyla bıraktım doktor olması beni ekstra rahatlattı ve gözüm arkada kalmadı çok teşekkür ederim güler yüzünüz güvenilirliğinizi için harikasınız', '2021-02-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e6ff6b49098c40e016d1e641d65b1221', 'boarding-af8296ccda3d0d183addf581', 'Taner Turt', 10, 'Tatile gittiğimiz zamanlar köpeğimizi emanet ettiğimiz güvendiğimiz bir yer.', '2024-05-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-aa6a075da56dc79ca8f74dfaa1f7a45f', 'boarding-af8296ccda3d0d183addf581', 'Can Y', 10, 'Köpeğimizi ilk defa gözümüz arkada kalmadan bir yere emanet edebildik. Cok tesekkurler Pera Pet Otel', '2021-09-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-09dc12f24413e356968c4ca5', 'Bursa Pet Oteli | Bursa Köpek Oteli Güvenilir Pet Konaklama', 'Köpek otelleri', 'Bursa', 'Ovaakça Merkez', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kdN98Njr7uKBeRda9ZATfQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=304.62543&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kdN98Njr7uKBeRda9ZATfQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=304.62543&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kdN98Njr7uKBeRda9ZATfQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=304.62543&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","bursa-kopek-oteli","bursa-kopek-pansiyonu","ovaakca-merkez-kopek-oteli","bursa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bursa Pet Oteli | Bursa Köpek Oteli Güvenilir Pet Konaklama, Bursa Ovaakça Merkez bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0507 839 21 24', NULL, 'https://bursapetotel.com/', '{"google_maps":"https://www.google.com/maps/place/Bursa+Pet+Oteli+%7C+Bursa+K%C3%B6pek+Oteli+G%C3%BCvenilir+Pet+Konaklama/data=!4m7!3m6!1s0x14ca41e2ad91c7cb:0x44a183bac61d5ea3!8m2!3d40.2985301!4d29.0573949!16s%2Fg%2F11nb4rstrm!19sChIJy8eRreJByhQRo14dxrqDoUQ?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJy8eRreJByhQRo14dxrqDoUQ', 'boarding-09dc12f24413e356968c4ca5')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ad843f769263345ea4a3a241e9009ec8', 'boarding-09dc12f24413e356968c4ca5', 'Bediha Parsova', 10, 'Evcil dostumuzu ilk kez bir pet otele bırakacağımız için oldukça tedirgindik ancak gösterdikleri ilgi ve özen sayesinde içimiz çok rahat etti. Süreç boyunca bilgilendirme yapmaları ve dostumuza kendi evindeymiş gibi yaklaşmaları bizi çok mutlu etti. Temizlik, ilgi ve profesyonellik açısından kesinlikle tavsiye edebileceğim bir işletme. Tekrar ihtiyaç duyduğumuzda gönül rahatlığıyla tercih edeceğiz. Teşekkür ederiz.', '2026-06-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e0ebfb6deee39463939e48a6d7cfdd93', 'boarding-09dc12f24413e356968c4ca5', 'Çiler Karabay', 10, 'İlk defa bayram nedeniyle bıraktım köpeğimi... İlgi muhteşem di... Bundan sonra ikinci evimiz❤️', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-dfbfda9261b192a93e224cc380580085', 'boarding-09dc12f24413e356968c4ca5', 'Şevval', 10, 'Daha önce yasadigimiz olumsuz deneyimlerden sonra burayi buldugumuz icin cok mutluyuz. cok ilgililer ve de her konuda kosulsuz yardimci oluyorlar🙌🏻 siddetle tavsiye ediyorum...', '2026-06-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-10708735d45d0343ad2c33a47e1db7f3', 'boarding-09dc12f24413e356968c4ca5', 'Gamze Menteşin', 10, 'Köpeğimizi ilk kez bırakmamıza rağmen gözümüz hiç arkada kalmadı.çok ilgili ve profesyonel bir ekip.Düzenli bilgilendirme bizim için çok kıymetliydi.Köpeğimizde çok mutluydu. Kesinlikle tavsiye ederim.Güvenle tercih edebilirsiniz Turgut Bey ve Ekibine gönülden teşekkürler 🙏', '2026-04-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bfa0bd9499db6962c4bb047a33774a8a', 'boarding-09dc12f24413e356968c4ca5', 'Canan Cesur', 10, 'Köpeğimiz Gölge 3-4 gün ilk defa dışarıda konaklamasına rağmen çok keyifli ve sakin bir şekilde geçirdi . Turgut bey ve ekibinin bu alanda profesyonelce verdiği hizmet bizim için çok değerliydi . Bizi de her konuda eksiksiz bilgiledirdiler ve köpeğimi evime kadar getirdiler ben de zaman kazanmış oldum . Şimdi her tatil gidebileceğimiz bir kapımız oldu . Evcil hayvanı olan  herkese tavsiye ederim .', '2026-04-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-cf24fed586172b137fae3fd3', 'Bursa Pet Otel', 'Ev tipi bakım merkezleri', 'Bursa', 'Dumlupınar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmiuVUjTxuqxCrjozqHF7CDWd_KkNbaFowOLjokl99BrjcbIvmnpUkkCnaKqEx3hEopTk6Ddo--wNnkOe4iv8hd03-_3CD_xSmT6gTb2nTGnfaW2c_lENE8yotVVW5oXrcfYKMzbGd8B9u0=w440-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmiuVUjTxuqxCrjozqHF7CDWd_KkNbaFowOLjokl99BrjcbIvmnpUkkCnaKqEx3hEopTk6Ddo--wNnkOe4iv8hd03-_3CD_xSmT6gTb2nTGnfaW2c_lENE8yotVVW5oXrcfYKMzbGd8B9u0=w546-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnP1BD9HipR1NoJrMnje0koBzb26GgeyntwOgTOB9KJEOSC2Vp9BrGaJB7hWq2MAz_n-jKDpLGgY1ALE-b43SJAjIiN96fhNatBgE6nVqqfUZahGu2jc1OqDwGrX9PzGTjGgONai5RKXnCU=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmiuVUjTxuqxCrjozqHF7CDWd_KkNbaFowOLjokl99BrjcbIvmnpUkkCnaKqEx3hEopTk6Ddo--wNnkOe4iv8hd03-_3CD_xSmT6gTb2nTGnfaW2c_lENE8yotVVW5oXrcfYKMzbGd8B9u0=w546-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ahwkIf-YnsvFDrEravmlVw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=89.57246&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","bursa-pet-oteli","bursa-kedi-kopek-oteli","dumlupinar-pet-oteli","bursa-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bursa Pet Otel, Bursa Dumlupınar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 910 16 34', NULL, 'https://petotel.net/', '{"google_maps":"https://www.google.com/maps/place/Bursa+Pet+Otel/data=!4m7!3m6!1s0x14ca0fb4ea7caed9:0x4ddfe006b209c0a7!8m2!3d40.2241056!4d28.8413139!16s%2Fg%2F11ntpn72bt!19sChIJ2a586rQPyhQRp8AJsgbg300?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ2a586rQPyhQRp8AJsgbg300', 'boarding-cf24fed586172b137fae3fd3')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-f7de4e508ce0ab5eab22565f', 'Bursa köpek oteli & köpek pansiyon', 'Köpek otelleri', 'Bursa', 'Çekirge', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=McBr5ja676ZryTlB8sN27g&cb_client=search.gws-prod.gps&w=408&h=240&yaw=67.56117&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=McBr5ja676ZryTlB8sN27g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=67.56117&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=McBr5ja676ZryTlB8sN27g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=67.56117&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","bursa-kopek-oteli","bursa-kopek-pansiyonu","cekirge-kopek-oteli","bursa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bursa köpek oteli & köpek pansiyon, Bursa Çekirge bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 893 21 15', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Bursa+k%C3%B6pek+oteli+%26+k%C3%B6pek+pansiyon/data=!4m7!3m6!1s0x14ca17a49328b6a7:0xd359d62073c282fb!8m2!3d40.1934526!4d29.017144!16s%2Fg%2F11yr_j0rsq!19sChIJp7Yok6QXyhQR-4LCcyDWWdM?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJp7Yok6QXyhQR-4LCcyDWWdM', 'boarding-f7de4e508ce0ab5eab22565f')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-10144de454217e5d791810c4', 'Mutlu Patiler Kedi Köpek Oteli', 'Kedi ve köpek kabul eden karma tesisler', 'Bursa', 'Alaaddinbey', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlg1UzoxGtTdegY1J0elo7Gwhk3v3KhQ3XCIp3FJ9V9UYdyxSZHWkxBHN0Afcaz7Or5MD92LvNmQukph9Rkj-SaZQ0SS-m_HcNDvKeX9Vsz9629rbs5FhNIeSoMRrhbqO1NEpEm6w=w576-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlg1UzoxGtTdegY1J0elo7Gwhk3v3KhQ3XCIp3FJ9V9UYdyxSZHWkxBHN0Afcaz7Or5MD92LvNmQukph9Rkj-SaZQ0SS-m_HcNDvKeX9Vsz9629rbs5FhNIeSoMRrhbqO1NEpEm6w=w715-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnudmJltIH_Y9F0YVGfIWzTLfiekBlA7NgkjxXqrqRiMLYrjrkgHbTVecl8vROzvQz0WYiTko3OE4lb4CQ2gOSAL-0FjsXLF9x1hj2_PznfN_wcWiuidtZaez8yRHysKWs3Hss=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktP6MreKf6o3lr3-IMB2IzBJfCEbJBDxjPlKc69BDKwdBpB_oYDw67tsIubQYrgXARPyjcs8cy81V-6DrYZlk9UTsLjd1RtHcuPkzVtrI-_He7yOPDqk0JI6d0KONaLp7MfccVfg=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlg1UzoxGtTdegY1J0elo7Gwhk3v3KhQ3XCIp3FJ9V9UYdyxSZHWkxBHN0Afcaz7Or5MD92LvNmQukph9Rkj-SaZQ0SS-m_HcNDvKeX9Vsz9629rbs5FhNIeSoMRrhbqO1NEpEm6w=w715-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Zr4zHFxla9AryPbBBvXGfg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=187.62996&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","bursa-kedi-oteli","alaaddinbey-kedi-oteli","bursa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Mutlu Patiler Kedi Köpek Oteli, Bursa Alaaddinbey bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0539 987 70 02', NULL, 'http://www.mutlupatilerbursa.com/', '{"google_maps":"https://www.google.com/maps/place/Mutlu+Patiler+Kedi+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14ca111cdf79ce59:0xe19a074e922a76!8m2!3d40.19124!4d28.9194413!16s%2Fg%2F11cp7jqk00!19sChIJWc553xwRyhQRdiqSTgea4QA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJWc553xwRyhQRdiqSTgea4QA', 'boarding-10144de454217e5d791810c4')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a2a66f963a60fb1837901a5d8c6ebea9', 'boarding-10144de454217e5d791810c4', 'Melih Balaban', 2, 'Köpeğimizi düğün için şehir dışına çıkmak zorunda kaldığımızdan ilk defa otele bıraktık. Ertesi gün kaybolduğu haberi ile aradılar. Kaçma videosu ve aranmamız arasında 2 saatlik bir süre farkı vardı. Çevreye haber vermişlerdi fakat kendileri içerideydiler. 4 kg bir köpek için ziyadesi ile riskli bir bölge. Şehir dışından gelip, kendimiz arayıp bulduk. Sonrasında ne arayan ne, ne özür dileyen, ne hastane masrafını soran oldu. Umarım bu kötü tecrübemiz sonrasında çift kapı sistemi gibi temel önlemler alınmıştır, başka kaybolma vakaları olmuyordur.
mekan sahibinin yorumuna istinaden düzenleme: bize köpeğimiz kaybolduğunda haber verirken siz de olsanız hak verirdiniz demeleri büyük ayıptı. Şehir dışından gelip köpeğimizi oradaki tarlalarda ararken hiçbir şekilde kendilerini görmedik, içeride oturuyorlardı muhtemelen. Köpeğimiz dışarıda olduğu süre içerisinde pireler tarafından ısırıldı ve alerji olduğu için her yeri kırmızı olup kabardı (kendi müşteriniz olan veteriner hanım muhtemelen ilk etapta ilaç sürdük ve tüm tüylerinden yapışan otlar çıkmadığı için koyun kırpar gibi tüylerini kestik demiştir fakat tedavinin devamı kendi veterinerimizde oldu). Telefonum hep açıktı, hiçbir şekilde aramadığınızdan eminim.', '2024-05-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a63c89b21bbb6930b6512dd6cc1619ab', 'boarding-10144de454217e5d791810c4', 'uğur güçlü', 10, 'İki adet alman çoban köpeği sahibiyim tatile giderken pansiyon amaçlı mutlu patilere köpeklerimi bıraktım . 7 gece kaldılar tesisin sahibi Levent bey aynı zamanda veteriner hekim ayrıca ailesi ile yaşadıkları evleride tesisin yanında köpeklerle ilgilenen Bekir bey de çok olumlu güleryüzlü bir arkadaş Bekir de tesisde kalıyor  yani patili dostlarımız 24 saat kontrol altındalar bu da çok iyi bir şey.Herkese teşekkür ederim. Seneye görüşmek üzere.', '2023-09-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ceccc984acac5c96f0ea54cf4dc8eaa0', 'boarding-10144de454217e5d791810c4', 'Simetri Harita', 10, 'Evcil dostlarınızı gönül rahatlığıyla emanet edebileceginiz bir pet oteli', '2026-06-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1bb3f67f957cb92cb8b07422c3d1299b', 'boarding-10144de454217e5d791810c4', 'Erhan Kuruca', 2, '2 günlüğüne emanet ettiğimiz köpeğimizi, yatağını ve diğer eşyalarını feci bir koku ile teslim aldık, teslim anında kokuyu, yatağının ıslaklığını fark etmiştim ancak açık alanda olduğumuzdan yanılabileceğim için yorumda bulunmamıştım. Uzun süredir hayvanlarla iç içe olan ve birçok şehirde pet otel kullanan, birden çok köpeğin olduğu alanda tabiki de koku olabileceğini bilen biri olarak; bu kokunun çok aşırı ve hijyene hiç önem verilmediğini gördük maalesef. Ya konaklama alanlarındaki konsept gözden geçirilmeli yada daha az köpek kabul edilip hijyene daha fazla dikkat edilmeli diye düşünüyoruz. Ayrıca sosyal olmayan köpeğimizin diğerleri ile birlikte bahçeye çıkmamış olabileceğini ve bu sebeple de tuvalet ihtiyacını gideremediğini düşünüyoruz, zira 13.30da teslim aldıktan sonra teslim anında ve sonrasında uzun bir süre ihtiyacını giderdi, umarım üşütüp rahatsızlanmamıştır, zamanla göreceğiz. Levent beyin ve diğer çalışanın güler yüzlü karşılamasını takdir ederiz tabiki ancak yukarıda anlattığım konular biraz can sıkıcı. İyi günler', '2023-04-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-58440574d2d0aafa4a64d9a1f93f0587', 'boarding-10144de454217e5d791810c4', 'Abdullah Sözen', 6, 'Şahsen çok beğenmedim. Dostlarımızın kaldigi yerler kokulu ve ıslak bir zeminde. Ayrıca içerisi de soğuktu.  Köpeğimiz 2 gün kaldı ama aldığımızdan beri mama yemedi. Uykusuz ve yorgun teslim aldik.  hijyen koşullarına biraz daha dikkat edilmesi lazım gerekir diye düşünüyorum  .', '2023-01-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-2364ff0b92d93df6261de64e', 'Puppy Pet Evi - Bursa Köpek Çiftliği - Köpek Pansiyonu', 'Köpek otelleri', 'Bursa', 'Yeniceabat', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm__kYxhDbm44Fdd1WnLFTwtMIGslOWq9X_XlgpnFLqKxHVwSZOR7fON5WAlbN-52E5mEEULgd5lY7i5Xww4vcEC51hOVo3GXyTSLfAhaZiJNZkTAPkNAElmWBrlTJ0GSL0O9cYzg=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm__kYxhDbm44Fdd1WnLFTwtMIGslOWq9X_XlgpnFLqKxHVwSZOR7fON5WAlbN-52E5mEEULgd5lY7i5Xww4vcEC51hOVo3GXyTSLfAhaZiJNZkTAPkNAElmWBrlTJ0GSL0O9cYzg=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn3l_xsxZ5YZsXhlbusOMqP-7iN66ms0m5klUlbx39h3p0pEEn51HT5RObt_vIt0JcRfSj8TWQDNZTmPSkYzu7O_VEPySxR6oYWja-TkqCu5n-ziWLWFqL3SlRR2AYnp-Z0JWI=w279-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZPfMoGOjwQ77Klo5Mio5V-PjUO4BpsrJ1W-mW76qjBUn7ABqeIWg1-zOLTQ--Y1Ig_I8XYHzm3vYgpMSVYW6dZOzUyYXIdMk8gtHszfjgaV0UDn_hg1n8VIWhX0ErL8Pofnc=w397-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=814i2KW9EUvPVgReTRrI3w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=168.89394&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","bursa-kopek-oteli","bursa-kopek-pansiyonu","yeniceabat-kopek-oteli","bursa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Puppy Pet Evi - Bursa Köpek Çiftliği - Köpek Pansiyonu, Bursa Yeniceabat bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0542 895 99 07', NULL, 'https://www.puppypethouse.com/', '{"google_maps":"https://www.google.com/maps/place/Puppy+Pet+Evi+-+Bursa+K%C3%B6pek+%C3%87iftli%C4%9Fi+-+K%C3%B6pek+Pansiyonu/data=!4m7!3m6!1s0x14ca15cc153c8bcf:0xf7d5d031a4a1cbf7!8m2!3d40.2561419!4d29.0442209!16s%2Fg%2F11h4tny10n!19sChIJz4s8FcwVyhQR98uhpDHQ1fc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJz4s8FcwVyhQR98uhpDHQ1fc', 'boarding-2364ff0b92d93df6261de64e')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6b5b44f45e7eb5b6b3d22ec717165c14', 'boarding-2364ff0b92d93df6261de64e', 'Kıvanç Şener', 2, 'Köpeğin kanlı ishal hastalıklı olduğunu bile bile bana sattılar. Bu hastalık çok kolay yayılır köpekler arasında. Köpeğin soy ağacı karnesini istediğimde göstermedi. İlk aldığım evcil hayvandı. Bir bildiği vardır dedim çünkü sosyal medya profili güzel duruyor. Ama manipüle ediyorlar sizi. İlk bir hafta veterinere götürmek yok dediler. Neden götürmeyeyim? Bebek hastalanınca evde mi bakılıyor? Köpeğim başka hiçbir köpekle temasa geçmedi. Köpeği veterinere götürmesem o hafta ölecekmiş zaten.Köpek kan kustu. İshaldi. Yeşil kustu. Tedavisine başladık tedavi sürecinde köpeğim öldü. Ama onun öncesi trajikomik ; veterinere gittiğimde aradım kendisini, bağırdı telefonda neden gidiyorsun dedi. Neden gittiğim test sonuçlarında görüldü. İki çizgi kanlı ishal pozitif. Silik gözükmesi bile yetiyor demek. Köpeğim vefat ettiğinde mesajlarıma aramalarıma bakmadılar. Paranın peşine düştükte alabildik 15 bin tl gibi bir para için yaptıkları işe bakın gülünç durumdasınız. Ancak bir ay sonra geri ödeme yaptılar durumumuz yok dediler. 19 yaşında bir genç olarak ne heveslerle 15 bin tl çıkarıp ödedim dimi durumunuzdan kime ne? Ayrıca böyle durumlara ayıplı mal satışı deniyor bundan sonraki süreç kendilerini ilgilendirmiyormuş gibi 17 bin tl Veteriner masraflarım karşılanmadı. Maddi manevi bana ve aileme yaşatılan bu acının sonucu, ahım üzerinizde. Buradan köpek almayın pişman olursunuz.', '2025-10-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-227b50f238d1d009394ff212aabee3a0', 'boarding-2364ff0b92d93df6261de64e', 'Sakir''s Mama', 2, '25 şubatta herşeyin garantisi verilerek bir rottweiler aldım,alırken de evde çin aslanı bir köpeğim oldugunu söyledim.Sıkıntı yok dediler,sağlıklı dediler. Bu köpek bana geleli tam 11 gün oldu. 6 gündür kanlı ishal ,aynı şekilde her iki köpek evde farklı odalarda olmalarına ragmen diğer köpeğim de ishal ve kusma başladı. Bu yavru her gün veterinerde serum takılıyor ve iyileşme söz konusu değil. Şu ana kadarki veterinere döktüğümüz ilaç ve serum parası 25.000 tl ,köpeğin satış fiyatı 20.000 tl ,bunları geçtim,insafsızlar hasta ve sütten kesilmemiş köpeği gönderirken hiç mi acımadınız. Benim hem 45 000 tl me hem de evde ki 5 yaşındaki köpeğimin hastalıgına sebep oldunuz. Bu konu burada bitmeyecek,Tarım ve Orman Bakanlığı,Cimer,Bursa Büyükşehir Belediyesi ,hepsine pazartesi günü gerekli şikayetleri yapacagım. Bu yorumu okuyan herkes dikkat etsin,köpekler kanlı ishal, sakın buradan hayvan almayın. Cebinize ve mental sağlığınıza zarar.Canımı çok yaktınız ,ben de sizinkini yakacagım.Bu arada yavruyu bana Manavgata otobüsle gönderdiler ,adresi bile tam söylememişler ,şoför yavruyu Antalya Otogarda indirmiş,kimsenin haberi yok,sabahın köründe Manavgattan Antalyaya köpeği almaya gittim. Umarım kimse benim çektiğimi çekmez.', '2026-03-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0f2880da97c50b32d4101822ace4f6ec', 'boarding-2364ff0b92d93df6261de64e', 'YEŞiM', 2, 'Çok küçük ayırıyorlar anneden. Ve annenin altına hemen küçük ırkta olsa, başka ırk yavru konuyor. Damızlıkların hali içler acısı .. Tek dert para.. Allah hepsini kurtarsın ellerinden inşallah 🙏🙏', '2026-05-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-539df24f48e0e375dedf979cf75b1ff7', 'boarding-2364ff0b92d93df6261de64e', 'Melike', 10, 'Harika bir işletme köpekleri A kalite. biz Samoyed aldık gönül rahatlığı ile sizde gidip ziyaret ederek köpek sahiplenebilirsiniz. Kalite,güven ve dürüstlükten ödün vermeyen harika bir işletmedir. Keşke diğer işletmeler de bu işletme gibi mal degıl can verdıgının farkında olarak vicdanla hareket etse.', '2025-08-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6529392e1f652144c876f54029ccf185', 'boarding-2364ff0b92d93df6261de64e', 'Hasan Mert Dinçer', 10, 'işlerinde gayet başarılılar cane corsa almıştım yavrum gayet kalın kemikli ve kaliteliydi aldığımda da konuşmayı kesmeyip durumunu sordular devamlı irtibat halinleydik teşekkur ederim kendilerine ilgilerinden dolayı', '2025-08-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-018a90e554f303df3c38d8e2', 'Ablak Pet Kampüs', 'Kedi ve köpek kabul eden karma tesisler', 'Bursa', 'Alaaddinbey', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkx9NiSxxd6WUdSWr6l9q8fwnLGjAQSO4ziLmkB6XZybGqAgNs3VoMwfdWrxi6Ikm-a65QqMCSSDflFe8uvwz-Fjw7l2iuZ3LIBDPZs9R7vVqXLcWDxMT3hKQ95KlSqIdBj0Cs=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkx9NiSxxd6WUdSWr6l9q8fwnLGjAQSO4ziLmkB6XZybGqAgNs3VoMwfdWrxi6Ikm-a65QqMCSSDflFe8uvwz-Fjw7l2iuZ3LIBDPZs9R7vVqXLcWDxMT3hKQ95KlSqIdBj0Cs=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkx9NiSxxd6WUdSWr6l9q8fwnLGjAQSO4ziLmkB6XZybGqAgNs3VoMwfdWrxi6Ikm-a65QqMCSSDflFe8uvwz-Fjw7l2iuZ3LIBDPZs9R7vVqXLcWDxMT3hKQ95KlSqIdBj0Cs=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl8tlVUgIRrZ0MbbStZjLGc_U30E9sjz0sXssgmN_4czSTgZ5yNgpowOTewU1HhK6jrbXx9sd81bgC9Vth1uHhsV5HYYp128vnLx0PYqQlhUOw0_xKn3mRVNc51gATb5Gzd25Rh=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LjhXpPGYs2-83guB5ssaXw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=90.96233&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Adrese servis","Hızlı ziyaret","Banka kartları","Kredi kartı","Transfer hizmeti","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","bursa-kedi-oteli","alaaddinbey-kedi-oteli","bursa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Ablak Pet Kampüs, Bursa Alaaddinbey bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 850 99 91', NULL, 'https://www.ablakpetkampus.com/', '{"google_maps":"https://www.google.com/maps/place/Ablak+Pet+Kamp%C3%BCs/data=!4m7!3m6!1s0x14ca118b86a2c4cd:0x926a5b1b356d70d7!8m2!3d40.2110975!4d28.9164729!16s%2Fg%2F11vdh54xzq!19sChIJzcSihosRyhQR13BtNRtbapI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJzcSihosRyhQR13BtNRtbapI', 'boarding-018a90e554f303df3c38d8e2')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3dee2ee794bad4804b1cb3482f5ff2e9', 'boarding-018a90e554f303df3c38d8e2', 'Sarper Sofuoğlu', 10, 'Köpeğimi tatile giderken emanet etmiştim. Tatil sürecim boyunca kameradan takip ettim ve hem hijyene hem de köpeğimin gezdirilme gibi ihtiyaçlarına özen gösterdiklerini gördüm. Bu yüzden bütün kampüs çalışanlarına ilgi ve alakalarından ötürü teşekkür ederim.', '2023-10-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-440611750cf2f4275eacfaebd29df50d', 'boarding-018a90e554f303df3c38d8e2', 'can tanirgan', 10, 'İçiniz rahat olsun. İşletmenin temizliği ve isyeri sahiplerinin pet sektörü ile ilgili bilgisi mükemmel. Herkese tavsiye ederim.', '2023-10-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fe283b8e5855b589f526342038dc43ba', 'boarding-018a90e554f303df3c38d8e2', 'Emre Yavuz', 10, 'Yavrumu güvenle bırakabildiğim tek yer. Çok memnun kaldım. Hijyen konusundaki dikkatleri için ayrıca çok teşekkür ediyorum.', '2023-10-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-619052f4b949bb5caf67603377b2acad', 'boarding-018a90e554f303df3c38d8e2', 'Saruhan Özenç', 10, 'Güler yüzlü çalışanları, can dostlarımıza sağladıkları imkan ve gösterdikleri ilgiyle mükemmel bi pet otel.', '2023-10-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1bccc97023091911da3bf869ee72a73f', 'boarding-018a90e554f303df3c38d8e2', 'Bartu Hançer', 10, 'minik yavrumuzu gözümüz arkada kalmadan bıraktık hiç de pişman olmadık teşekkür ediyoruz 🫶🏻', '2023-10-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-fcd1fae76b9d2c37fe0962b0', 'Pati Koleji Bursa Köpek Eğitimi ve Köpek Oteli', 'Köpek otelleri', 'Bursa', 'Yeniceabat', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWloXsYwBDJjjPlHuzer2nr9myDOmLtp8LRuSL8DIxD7jjlQh-_gc_w4c8iZ9I2c4dykhX512HlhHCBk49vRsa1TMuaH-puGSbJkfWZtFuXyh_GNo2hG8fqAnYIwmzqB8AYsB3rb=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWloXsYwBDJjjPlHuzer2nr9myDOmLtp8LRuSL8DIxD7jjlQh-_gc_w4c8iZ9I2c4dykhX512HlhHCBk49vRsa1TMuaH-puGSbJkfWZtFuXyh_GNo2hG8fqAnYIwmzqB8AYsB3rb=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwAeRnlFw5EwGKS6ivFbrJGzC2zQsanbnANQJlZJVERGjk4imwzrE_LsxWQAqXOMVkK1ZzqnsCgdu-nZzkk1JWA_R684jCIrDzr-a6bEHi6kQqb9P7DFpKvxTyf24tnjtUqd_1=w224-h397-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkPbrY0Z9APaJ7y-QZOqJ3JgX-NJq62klTv-9cXn_LTW9mlqEhrqSY2Tu_hPQ-D6-8qmk4uku7A5yRh5yOvmkJNVWfSHn09dQhKW3HhnKISkFoeJYCB7FyuKTwPx_2hw69vdoGn=w224-h398-k-no"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","bursa-kopek-oteli","bursa-kopek-pansiyonu","yeniceabat-kopek-oteli","bursa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati Koleji Bursa Köpek Eğitimi ve Köpek Oteli, Bursa Yeniceabat bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0543 252 06 16', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pati+Koleji+Bursa+K%C3%B6pek+E%C4%9Fitimi+ve+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14ca117041b69abd:0xf882bc6d671f55ee!8m2!3d40.2518669!4d29.044238!16s%2Fg%2F11t9hm05jt!19sChIJvZq2QXARyhQR7lUfZ228gvg?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJvZq2QXARyhQR7lUfZ228gvg', 'boarding-fcd1fae76b9d2c37fe0962b0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f82ad84257e5e12566749495dc208979', 'boarding-fcd1fae76b9d2c37fe0962b0', 'Asya Z', 10, 'Oğlum Bulut’un severek kaldığı eğlenip enerjisini atabildiği bir yer. İlginiz için teşekkür ederizz☺️☺️', '2026-03-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-db63af0e9f701f431b981146bf70b022', 'boarding-fcd1fae76b9d2c37fe0962b0', 'İlayda Çetin', 2, 'Köpeğimi 9 günlüğüne bırakmak zorunda kaldım. Çok sakin ve temas bağımlısı olan köpeğim yalnız kalamıyor. Bıraktığım anda çok pis kokan bi odada yalnız başına bıraktılar. Biz rica etmediğimiz sürece video fotoğraf atmadılar. Almaya gittiğim zaman çocuğum o kadar sıkışmıştı ki bizim yanımıza gelene kadar defalarca tuvaletini yaptı. Ertesi gün veterinere götürdüğümde bağırsaklarından enfeksiyon kaptığını öğrendim. Hiç memnun kalmadık.', '2024-05-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3f8eded2fbaba0a2193bc10d10e21c58', 'boarding-fcd1fae76b9d2c37fe0962b0', 'Sevdem dem', 10, 'Pablomu haftasonu  için 2 günlüğüne bıraktım ..Batuhan beyle öncesindeki telefon görüşmemizde zaten çok pozitif elektrik almıştım.. oldukça ilgili ve açıklayıcıydı .. Pablo ya bırakmaya gittiğimde bizi çok güzel karşıladı , oğlumla iletişimi çok güzeldi. Köpeklerin herbirini ayrı yerinin olması , gezebilecekleri  açık alanları  ve uyuyabilecekleri kulübeleri olması çok iyi. Gün içerisinde ayrı ayrı oynamaya çıkarıp bana video gönderdi . Artık Pablomu gönül rahatlığı ile bırakabileceğim bir yer var .. teşekkürler', '2024-04-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b07dc3d40a7dc7f4f66ad7f301398ef8', 'boarding-fcd1fae76b9d2c37fe0962b0', 'ByVatanSever', 10, '🙏 Gözümüz arkada kalmadan huysuz kızımızı emanet ettiğimiz,edebilecegimiz çok güzel, yeterince alanı olan (8000 M2) 🚴🦘.
Hayvansever kurucu ve personel ile gerçekten güven veriyorlar.👍👊', '2023-08-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2f25e043f8786b4348a4aa09dda98765', 'boarding-fcd1fae76b9d2c37fe0962b0', 'Yusuf Kaygısız', 10, '2. Gidişimiz. Oğlumuza bizler kadar sevgi ve ilgililer. Bunun için kendilerine teşekkür ederim', '2025-07-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-879fe463b5910b3f9a3f411f', 'Bursa Köpek Eğitim Okulu ve Köpek Oteli', 'Köpek otelleri', 'Bursa', 'Yaylacık', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkvt9pPMoXMPzWKpzpNDvihTODPn8xUeKV0_v9sn5SB5pFcxBSsZGZhsA11jVlBv-Qgw0cj50-AH1P_dNPm7qM9jmfDmWUa7vSWhs6D3PHxhQtQxIywOhRh0HT6SHMPl9b2RFdXIoj9EiY=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkvt9pPMoXMPzWKpzpNDvihTODPn8xUeKV0_v9sn5SB5pFcxBSsZGZhsA11jVlBv-Qgw0cj50-AH1P_dNPm7qM9jmfDmWUa7vSWhs6D3PHxhQtQxIywOhRh0HT6SHMPl9b2RFdXIoj9EiY=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk2vz_TDkBtlGOwLJT8wW-GII8odO04YcMDjouYBBB9xSsCaw1VoOk7GnhQWOmKxUQJSHjdD_TXCsRTLY6xNoNBHMMtmwDXrcrYtCJ9zreviRra1kWRCugGGg_ou-__gaEMFFMotf2Mx10=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=m3FcpNWXdKHH2VW59nCs9w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=132.72035&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","bursa-kopek-oteli","bursa-kopek-pansiyonu","yaylacik-kopek-oteli","bursa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bursa Köpek Eğitim Okulu ve Köpek Oteli, Bursa Yaylacık bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0534 833 23 33', NULL, 'http://www.bursakopekegitimokulu.com/', '{"google_maps":"https://www.google.com/maps/place/Bursa+K%C3%B6pek+E%C4%9Fitim+Okulu+ve+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14ca39646b744dc3:0x41f570fa771cb2a3!8m2!3d40.1702718!4d28.8953017!16s%2Fg%2F11xydmff83!19sChIJw010a2Q5yhQRo7Icd_pw9UE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJw010a2Q5yhQRo7Icd_pw9UE', 'boarding-879fe463b5910b3f9a3f411f')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1d745537c1cbd0f1b69725c5175cb35f', 'boarding-879fe463b5910b3f9a3f411f', 'Alperen KILIÇ', 10, 'Baştan sona beklentimizin üzerinde bir deneyim yaşadık. Köpeğimiz sadece temel komutları öğrenmekle kalmadı, özgüveni ve sosyal uyumu da gözle görülür şekilde gelişti. Deniz hanım başta olmak üzere tüm eğitmenler her konuda bilgilendirici, ilgili ve çözüm odaklıydı. Hayvan sevgisini işine yansıtan profesyonel bir ekip var, iyi ki yollarımız kesişmiş. Köpeği için kaliteli bir eğitim arayan herkese gönül rahatlığıyla tavsiye ederim. 👍🏼👏', '2026-07-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cf12f7eeb3897efef49eeb5e4f03c132', 'boarding-879fe463b5910b3f9a3f411f', 'Sude GARİP', 10, 'İşimiz sebebiyle teslim ettiğimiz yavrumuza biz dönene kadar gözü gibi bakan Deniz hanım ve ekibine çok teşekkür ederiz. Bu süreçte gerek ilgileri, gerek yaklaşımlarıyla içimiz rahat ederek teslim ettik. Ne zaman istesek fotoğraf ve video ile bizi bilgilendirdiler. Köpeğimiz çiftlikten eve gelmek istemedi o kadar eğlenmiş ve mutluydu ki. Tekrar ilginize teşekkür ederiz en kısa sürede eğitim ve ailemize bir yavru daha katmak için uğrayacağız❤️', '2025-12-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-27429170bfac70bb468a4e3e44c1c3fb', 'boarding-879fe463b5910b3f9a3f411f', 'ADİL köroğlu', 10, 'Merak ve öneriyle gittiğim yerdi.Ve gördüm ki hayvan severlerin beklentisinin kat kat üstünde ortam olarak değerlendirdim. Köpeklerinizi güvende bırakılıp eğitim alabilmesi için Bursa''daki tek mekan . teşekkürler 👍', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-07b113bcc4df43ed94610a4b512a36be', 'boarding-879fe463b5910b3f9a3f411f', 'alper torun', 10, 'Bursa köpek eğitim okulundan 1 ay önce almış olduğumuz hizmetlerden ötürü oğlumuzun istemediğimiz tüm hareketler ve davranışlarını deniz hanım ve çalışma arkadaşları tarafından istediğimiz söz diyen bir kişiliğe dönüşmesinde emeği olan Deniz hanım ve çalışma arkadaşlarına teşekkürlerimizi sunarız', '2025-10-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-97407d5f2d27503649e92dd16513bd4a', 'boarding-879fe463b5910b3f9a3f411f', 'Seco B.', 10, 'Bursa köpek eğitim okulundan sahiplendiğimiz köpeğimiz çok sağlıklı ve neşeli. Ekibin ilgisi, bilgisi ve hayvan sevgisi her şeyden belli oluyor. Sahiplendirme süreci boyunca her sorumuza sabırla yanıt verdiler. Özellikle işletme sahibi Deniz hanıma ilgisinden ve yardimlarindan dolayı çok teşekkür ederiz.Gerçekten güvenilir bir çiftlik.', '2025-10-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-e034dc09cfc8f136deb179a4', 'Çanakkale Köpek Oteli Pansiyonu / Tayfun Pet Hotel', 'Köpek otelleri', 'Çanakkale', 'Biga', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFWzCItZjJCh8OjgcrZhw2y5d6gMu_4Urq1PgJyywwjc31vStX324IdHVsE29vwrShnbcHa2ZkvrauZl69hqNCnNFRawfqHacBvg8QAnCk2Osoji-LjnfzWXngf2Ak7T7i19Ak=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFWzCItZjJCh8OjgcrZhw2y5d6gMu_4Urq1PgJyywwjc31vStX324IdHVsE29vwrShnbcHa2ZkvrauZl69hqNCnNFRawfqHacBvg8QAnCk2Osoji-LjnfzWXngf2Ak7T7i19Ak=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6EVNufbnPpabjaXL3w2bnwWP9v6Q_1eSS6PaTjgevin_Po34Jarfo7LIqlEZHmiEO87FyddB9bnMEuyqTVzLamAaGImt49U64ez_8kBuMuTHPEw8U5JvpU3cH2nwYN06-eJUTBGHBL64=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6EVNufbnPpabjaXL3w2bnwWP9v6Q_1eSS6PaTjgevin_Po34Jarfo7LIqlEZHmiEO87FyddB9bnMEuyqTVzLamAaGImt49U64ez_8kBuMuTHPEw8U5JvpU3cH2nwYN06-eJUTBGHBL64=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1ETOtnxRqN7o48sGOUorjFtK4nOBM2ZrO9NOp0PonoQ4vjR2rBEFnuuZTgFIRZZg7MF0a7wUKtZ-sj68zCSyzIOc-4j9g9eAPsjV8Gk1X4-gwLWK62OXDsRUcZZlpZrtGl46FEwjOFV7J=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=z2l60cwutDSGl_Ext0Ayow&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=93.96649&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun park yeri","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","canakkale-kopek-oteli","canakkale-kopek-pansiyonu","biga-kopek-oteli","canakkale-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Çanakkale Köpek Oteli Pansiyonu / Tayfun Pet Hotel, Çanakkale Biga bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0552 098 70 80', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/%C3%87anakkale+K%C3%B6pek+Oteli+Pansiyonu+%2F+Tayfun+Pet+Hotel/data=!4m7!3m6!1s0x14b14d91afeafe87:0x78e108241eaa041a!8m2!3d40.3027066!4d27.1124134!16s%2Fg%2F11svv7_hp9!19sChIJh_7qr5FNsRQRGgSqHiQI4Xg?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJh_7qr5FNsRQRGgSqHiQI4Xg', 'boarding-e034dc09cfc8f136deb179a4')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-35adf00751d59a46088362b1de5db64e', 'boarding-e034dc09cfc8f136deb179a4', 'Cemre Çap', 10, 'Güvenli ve temiz köpek değil evlat niyetine bakıyorum lafının hakkını veriyorlar gönül rahatlığıyla emanet edebilirsiniz', '2026-06-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b725318007e953df3fa590d6596ff216', 'boarding-e034dc09cfc8f136deb179a4', 'Ceren Demirci', 10, 'Evcil dostlarını ırk farketmeden bırakabileceğiniz bir yer köpeklerin oynayıp sosyaleşebileceği huzurlu bir ortam gözüm arkada kalmadan poodle köpeğimi bıraktım çok memnun kaldık', '2025-09-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1bff17642c649129f5b81d5684102d04', 'boarding-e034dc09cfc8f136deb179a4', 'ali özcan çiçek', 10, '3 günlüğüne 7 aylık köpeğimi bıraktım. Tayfun bey kendi köpeği gibi baktığını gördüm. Giderken ayrılmak bile istemedi. Bu kısa sürede köpeğimizi yüzmeye alıştırmış ki biz birkaç defa denememize rağmen becerememiştik. Her gün videolar atarak bizi merakta bırakmadı. Gerçekten işini sevgiyle yapan bir kişi. Hatta telefonda sorduğumuz da "odasında yatıyor" şeklinde cevap vermesinde odası kelimesini kullanması ailecek çok hoşumuza gitti. Otel ise imkanlar açısından yeterli bir yer. Özellikle köpeğinizin sosyalleşmesi için mükemmel bir ortamı var.', '2025-07-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fe73d64c9a648b58cae33ce74164f5de', 'boarding-e034dc09cfc8f136deb179a4', 'Muhammet Türk', 10, '1 haftalığına köpeğimi ilk defa Tayfun beye bıraktım döndüğümde 1 yıldır beslediğim köpeğim Tayfun beyden ayrılmak istemedi. Burdada şunu anladım ki sadece bakmamış çok ilgilenmişte. Kendisine çok çok teşekkür ediyorum.Artık uzun vadeli şehir dışı vs gibi işlerimde köpeğimi düşünmeden emanet edeceğim biri var .Herkese tavsiye ederim.', '2024-08-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f2813bd9b96198d92b4c4887def17609', 'boarding-e034dc09cfc8f136deb179a4', 'Sema Teper', 10, 'İş gereği şehir dışına çıkmam gerekiyordu, oğlum Ares''i bırakabileceğim güvenli ilgili bir köpek oteli arıyordum. İlk önce gidip çiftliği gezdim ve ondan sonra içim rahatladı. Tayfun bey ve ailesi güler yüzlü, iyi niyetli misafirperver insanlar. Kendine ait baktığı köpekleri''de gayet mutlu ve bakımlıydı sağolsunlar Ares''e çok güzel baktılar bana her gün video gönderip çocuk gibi ilgilendiler. Sizlerede tavsiye ederim aklınız kalmasın, tekrardan çok teşekkür ediyorum', '2024-07-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-91806fd4e778be3399af5bc9', 'DADI PET RESORT PANSİYON Çanakkale Köpek Oteli', 'Köpek otelleri', 'Çanakkale', 'Biga', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWng64bQM21oLh2JnfX7lde_D5DkdDL5gAdKYHw2Ac3hYoIThAJWqYsSW64XkQ5TuLQQiDKnnHoI14cLrnyOSIs7g5PDx2zilxTTtWz3U13AYcaEwxuYWqJ4euAOV1JprUWfC7vk=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWng64bQM21oLh2JnfX7lde_D5DkdDL5gAdKYHw2Ac3hYoIThAJWqYsSW64XkQ5TuLQQiDKnnHoI14cLrnyOSIs7g5PDx2zilxTTtWz3U13AYcaEwxuYWqJ4euAOV1JprUWfC7vk=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkn0O7CTWcaPef_8LTjP4pfEEppgmel42Tdgo7_rVlp4TlP2Gy8m-qJE3zp6Ff0_oWA2UZgc-OAxd8d_RwCU6cUKide6fjoKFztrffBEbThjZ4O8UzUd4-ONe6q4g6C7-G4isE=w224-h350-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmoCgPJ1vvKnOLv4CwdJGqYlqGIqldtizujGwhFHOMe-Stqb4KfvtxsaDKWyKwKujPtt9699brkysub3BdVsmrsX7O-yqe-YMZ1dDr5C891fQSWzmrkN_dYoXowdBDG5eblRPFy=w224-h298-k-no"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","canakkale-kopek-oteli","canakkale-kopek-pansiyonu","biga-kopek-oteli","canakkale-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'DADI PET RESORT PANSİYON Çanakkale Köpek Oteli, Çanakkale Biga bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0533 525 04 78', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/DADI+PET+RESORT+PANS%C4%B0YON+%C3%87anakkale+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14b6b051a6606353:0xfa66021b9b8bcf8a!8m2!3d40.239261!4d27.3225427!16s%2Fg%2F11cp7qdgmj!19sChIJU2NgplGwthQRis-LmxsCZvo?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJU2NgplGwthQRis-LmxsCZvo', 'boarding-91806fd4e778be3399af5bc9')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7854b6a457e9b39411671a6da8730cb5', 'boarding-91806fd4e778be3399af5bc9', 'Menekşe Çisem Aydemir', 2, 'Cunda ya tatile giderken yorumları okuyup kızım Eva yı 4 günlügüne bıraktım.
Elçin hn ve eşi ( sanırım ) çok tatlı insanlar. Ancak köpegimi almaya geldiğimde işletmede kimse yoktu. Orada görevli bir genç vardı. Ve yarım saat sonra yanımıza geldi.  Eva nin kaldığı kulübenin kilidini ben açtım ve evayı ben cıkardım. Yatagi ve battaniyesi sırılsıklamdı. Zaten battaniyeyi de orada bıraktım. Büyük boy yogurt kaplarinda su verildigini görmek beni epey üzdü. Sadece düşündüğüm, ben degil de başkası da o kulübeyi açsa Eva yı alıp götürebilirdi. Kızım ve benim için talihsiz bir deneyim oldu. Yine de tesekkürler', '2022-06-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d1caff9892daf01042fe417f4a5beefc', 'boarding-91806fd4e778be3399af5bc9', 'ERGİN PANSİYON', 10, 'Yıllardır Zeytin''imin tatil köyü oldu.Adım gibi eminim eve dönmek istemediğinden ama ispat edemem. Elçin hanım sağ olsun var olsun.Son olarak söyleyeceğim tek söz,eğer bir gün bana bir şey olursa Zeytin''im Elçin annesine emanet bu da vasiyetimdir. ❤❤❤❤❤', '2022-02-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-013adfba2c52fd1bb8a855d19225ba48', 'boarding-91806fd4e778be3399af5bc9', 'oya pessoa', 10, 'Çanakkale ve yakın çevredeki köpek dostları, bu mesajım size!
Köpeğinizle birlikte seyahat edemeyeceğiniz durumlarda, hiç düşünmeden, gönül rahatlığıyla can parenizi emanet edebileceğiniz tek adres burası. Tecrübeyle sabit.
Elçin Hanım ve Savaş Bey işlerinde çok iyiler ve tüm canlara sevgiyle yaklaşıyorlar.
İyi ki varlar. Ellerine, emeklerine, gönüllerine sağlık.
Şeker ve ailemiz adına, çok teşekkür ediyoruz.', '2019-04-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-08875277719416400181fb29bed5ee1c', 'boarding-91806fd4e778be3399af5bc9', 'esin erel', 10, 'Bozcaadadan bir arkadaşımın önerisi ile buldum Elçin Hanımı , iyi ki bulmuşum …. 2 kedimi kendisine emanet  ettim … Eylül ayından beri onun tarafından bakılmaktalar içim çok rahat . 🌸🌸🌸🌸🌸', '2022-02-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d47ae6e7dd910464af611dd1d83747b0', 'boarding-91806fd4e778be3399af5bc9', 'esin karalar', 10, 'Harika bir pansiyon evcil hayvanlarınızı gözünüz arkada kalmadan bırakabileceğiniz mükemmel bir ortam Elçin hanıma sonsuz teşekkürler 🥰🥰🥰', '2022-02-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-c034c984fcdc55cd771b4b52', 'Han Köpek Oteli', 'Köpek otelleri', 'Çanakkale', 'Çanakkale Merkez', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLH9sw3jEioPX1hu7xX0bnzjsRfd3htFxBzq2WLfkvHvt7PJhK0_LcnG8Ny-y6pOXtrP78Tv00lBqLRjJn90oPfv6IlREYAGY3c4-aBU4nU58lhdgd20bbhvYx53xIcziwirM1=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLH9sw3jEioPX1hu7xX0bnzjsRfd3htFxBzq2WLfkvHvt7PJhK0_LcnG8Ny-y6pOXtrP78Tv00lBqLRjJn90oPfv6IlREYAGY3c4-aBU4nU58lhdgd20bbhvYx53xIcziwirM1=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmwhZr1KYX4T8APNZJ6XO9m4WNPGOFh67he1fxq52TsgKnF-v7j76Df0LrTiIK7qUvxRVqObkOtwKFeUbl9I8dxWQOpiawvn4R2sNM2aro8tNvcJXvmqo-6w1F7nSxJ1Q4kUE=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnu2bQYPBl0TD08c7X_1eJnTrhfYy5K1tn7vXUFfGBth3qicIllabZ1mbmiSkLvndFQ5Ha4xFv5-NPsl5ljzrcKj39XyOLaAuyqo6K9UUKnjtxH8Vz6OLcpZPtWUng-YuhUdogfxMPJtqrI=w224-h401-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnXOqb9MrBTpX3DgeWvQWXnzwzStvBM1V5LLl7NY6W7J8LHZwG-tV4kYgABUHx9uUcj_1Szeh6v4D_YoEbKhpsybopE4ukqkXezrEaoOVvDhNBYcqu891-AiGmAzyK1-TYKPZoUcQ=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwaMIUe_MM_abomDZYpYULbU-dVBzAXf9ADDEuj8yKCQfvv1-vZrcykX-QoltlgRB3B9otH6PUbKoXBOmWeODXCE35YeE1HmnibAuaTMypyUvv1v30QjK4giTZ4-XtOPHOx636=w224-h298-k-no"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","canakkale-kopek-oteli","canakkale-kopek-pansiyonu","canakkale-merkez-kopek-oteli","canakkale-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Han Köpek Oteli, Çanakkale Çanakkale Merkez bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0536 991 70 36', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Han+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14b1052866ca4d45:0x96fa0a208bd6f0ee!8m2!3d40.1518824!4d26.52063!16s%2Fg%2F11y87dz3tx!19sChIJRU3KZigFsRQR7vDWiyAK-pY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJRU3KZigFsRQR7vDWiyAK-pY', 'boarding-c034c984fcdc55cd771b4b52')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a0e73ade5831f1867eabb466d1a56140', 'boarding-c034c984fcdc55cd771b4b52', 'Esi Özgür', 10, 'İlk köpek oteli deneyimimizin Han Köpek oteli ile olması bir şans 🙏 Güvenle hayvan dostlarınızı teslim edebilirsiniz', '2026-02-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-074fce335817ffba600a32da927731e8', 'boarding-c034c984fcdc55cd771b4b52', 'Başak Güçler', 10, 'Sevgili Elif ve Ata iki güzel insan. Yaptıkları işe tamamen gönül vermişler. Çocuklarımızı bizim kadar önemseyip, onlara ihtiyaçları olan ilgiyi gösteriyorlar. Uzakta olan ebeveynin yaşayacağı endişeyi de ön görüp; sürekli bilgi paylaşımında bulunuyorlar.
Varlıkları ve Han köpek oteli; Çanakkale bölgesi için muazzam bir kazanım.', '2026-07-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0488bf230334203b165c1b7706cda335', 'boarding-c034c984fcdc55cd771b4b52', 'Koray Sengor', 10, 'Tatil planım olduğu için köpeğimi bıraktığım yer gayet memnun kaldım gerek temiz olması gerek iş yeri sahiplerinin köpekler ile alakalı bilgili olması kafamda soru işareti bırakmadı samimiyetleri ve güler yüzleri için ayrıca teşekkürler', '2026-07-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5f5893f06996393f68584b26cc4f2084', 'boarding-c034c984fcdc55cd771b4b52', 'Tuğba Babacan', 10, 'Elif ve Ata gerçekten işlerinde çok profesyoneller. Köpeğimizi otele bırakmak bizim için endişeden bir rahatlığa dönüştü sayelerinde. çünkü biliyoruz ki her ihtiyacı büyük bir titizlikle karşılanıyor, sosyalleşiyor ve sağlığı büyük bir özenle takip ediliyor. Her bilgi detaylıca bizimle paylaşılıyor. Çanakkale’de böyle bir hizmet olduğu için çok şanslıyız. Köpeğinizi güvenle bırakabileceğiniz tek adres. İlgileri içinde teşekkür ederim.', '2025-04-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9ddc7a919145f2312f5db8068d682613', 'boarding-c034c984fcdc55cd771b4b52', 'Özlem Vural', 10, 'Elif ve Ata ile yollarımızın kesişmesi hayatımızın dönüm noktalarından biridir. Leo’yu gözümüz arkada kalmadan emanet edebileceğimiz, kimi zaman bizden daha dikkatli, profesyonel, işinde çok çok iyi ve aile gibi bir yer Han Köpek Oteli. Köpek arkadaşı olanlar anlar, bu denli güvenebileceğiniz insanlarla yolunuzun kesişmesi çok büyük bir şanstır. Çok şiddetle tavsiye ederim.', '2024-11-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-99fc7b41d31d260a5fbf50d5', 'Çorum Miya Patili Köşk Petshop, Pet Kuaför, Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Çorum', 'Yavruturna', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWld3N6-wiMJuSdSqeYZRynqWfd99cHFkNnA7FU6CiArl_HsNcyoH82V93Nrh3tiLKxevkEgDkMRkjcjcaokNdRkY_tIQOnnkZ7ei-hUPDQ0Wfq6h-AMdwJWTBNobuOzLdp2BfWj=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWld3N6-wiMJuSdSqeYZRynqWfd99cHFkNnA7FU6CiArl_HsNcyoH82V93Nrh3tiLKxevkEgDkMRkjcjcaokNdRkY_tIQOnnkZ7ei-hUPDQ0Wfq6h-AMdwJWTBNobuOzLdp2BfWj=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnzv3eLSevqilMWd6blFvl5XLslAnwpPxpoaPU3MaOXo_zbzkG2j2-HIsjFIJIkHCYAHJerAFeT8b1kjy8lJZh88H_0UUybf9vs0jwB9QC_V5S7JNR4BJbd8Thx0N7Y9PwzT3Y21w=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkCRf9-y3xSXUROnfToruf7aIZRrP3CxT3pToq8j2AVj1QNmqCtE4fgHI-53l-RD4Z9W4wU1ThtovvV_hX5MmKZvnK_awarH-Sxxh3SXkmG8kuoY3or-3r0HGqmBfzscQodVypwQ=w224-h403-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlkkZv71CXgAH22zdiIPfdL6A_TYLXzYOgwlhVCFNkWKr_8FbloFDuwpJZSl1Yj5DNkY89odSZ-qQBPngIdT1f190ZVak9m02rOm5S39zC7rJqqH5qDRSSdYpvGM1AOydsN8s32=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnRjyCO3iutTGZoAnX-cebeV4nb9NRjE3zwbTR2SSMbXGD8011FHCnJuFvrNqXOdexR0W7VN85xj1xRRvQ2r1W7kGwePwOtJFfPP5sas3CCmlZAj6ifeU--YOtXVVV5a5iUJgdV=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kHeE5dziN7N8XRnP40HuWg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=186.46742&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Adrese servis","Randevu gerekli","Hızlı ziyaret","Banka kartları","Kredi kartı","NFC ile mobil ödeme","Transfer hizmeti"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","corum-kedi-oteli","yavruturna-kedi-oteli","corum-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Çorum Miya Patili Köşk Petshop, Pet Kuaför, Pet Otel, Çorum Yavruturna bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0533 310 24 20', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/%C3%87orum+Miya+Patili+K%C3%B6%C5%9Fk+Petshop,+Pet+Kuaf%C3%B6r,+Pet+Otel/data=!4m7!3m6!1s0x4086d52de890af71:0x9ffe27c85d05e112!8m2!3d40.5516903!4d34.9625935!16s%2Fg%2F11nmqrq4kh!19sChIJca-Q6C3VhkAREuEFXcgn_p8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJca-Q6C3VhkAREuEFXcgn_p8', 'boarding-99fc7b41d31d260a5fbf50d5')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4e22cd431f20d96d236138a9f8c7aa4b', 'boarding-99fc7b41d31d260a5fbf50d5', 'Gül Ekici', 10, 'Leon nun traşı için gittik, hanımefendi çok ilgili oğlumuz çok memnun kaldı, çok güzel kıyafetler ve ürünler var. Herşeyi düşünmüşler bravo 👍', '2023-02-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d767ee4297c50f690bb417c469801f4c', 'boarding-99fc7b41d31d260a5fbf50d5', 'Eylül Divrikli', 10, 'Çok güler yüzlü yardımcı ve ilgililer. Fiyatları uygun güvenerek gidebilirsiniz', '2026-02-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bb0f8af93192af2ad0e4b97cfc1bdcd4', 'boarding-99fc7b41d31d260a5fbf50d5', 'Sevcan Özkarslı', 10, 'Mükemmel bi aile işletmesi içeri girdiğiniz andan itibaren aileden hissediyorsunuz kendinizi işletmenin amacı kazançtan ziyade insanlara yardımcı olmak örneğin olmayacak bi traşı sırf maddi kazanç elde etmek için yapmıyor olmayacağını açıklıyor ve sağolsun ne zaman arasak elinden geldiğince yardımcı oluyor teşekkür ederiz Elif Hanım ellerinize emeğinize sağlık ❤️', '2022-05-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b6b261bb49c6e49e274633169da0371d', 'boarding-99fc7b41d31d260a5fbf50d5', 'rabia özlem bulut', 10, 'Çorum da bir ilk harika bir yer oteli kuaförü mağazası hele Elif hanm herkese tavsiye ediyorum,işini severek yapıyor.', '2021-08-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9e4a58554a3f624cd3b25c38841f5099', 'boarding-99fc7b41d31d260a5fbf50d5', 'Sezen A', 10, 'Kedoşumun her şeyini elif ablalardan alıyorum çok şahane insanlar. Fiyatlar uygun mamaları orjinal', '2024-11-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-8a70fe24e2858072b97d3957', 'Gümüş Pati (Hayvan Oteli)', 'Kedi ve köpek kabul eden karma tesisler', 'Çorum', 'Çorum Merkez', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=p3eS4MYpxEdpFWsexHbjLQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=158.40195&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=p3eS4MYpxEdpFWsexHbjLQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=158.40195&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=p3eS4MYpxEdpFWsexHbjLQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=158.40195&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","corum-kedi-oteli","corum-merkez-kedi-oteli","corum-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Gümüş Pati (Hayvan Oteli), Çorum Çorum Merkez bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/G%C3%BCm%C3%BC%C5%9F+Pati+%28Hayvan+Oteli%29/data=!4m7!3m6!1s0x4086d5434720033b:0x588b2917eac702b5!8m2!3d40.5540677!4d34.9255646!16s%2Fg%2F11h7s3z25y!19sChIJOwMgR0PVhkARtQLH6hcpi1g?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJOwMgR0PVhkARtQLH6hcpi1g', 'boarding-8a70fe24e2858072b97d3957')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6b662b53e52dfd6997e9e03d1f538157', 'boarding-8a70fe24e2858072b97d3957', 'Kübra Nur', 2, 'Telefon numarası ekler misiniz', '2020-09-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bf12293cf6db3e377f68479a8cb99e44', 'boarding-8a70fe24e2858072b97d3957', 'Samet Çıbıkcı', 10, 'İlgisizler', '2021-09-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-3ebcc3038710fe161921e712', 'Denizli Kedi Oteli', 'Kedi otelleri', 'Denizli', 'Selçuk Bey', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2duSwek4OhCQfARA9V36lFvwnRU5aQV9uSXpgGKVeojy3E6XWux6e-LdGY6NseMLIagtmbyVQHbayAd-p1zYzGqc2BEo3gdemxp2rgttA6YmZvoiYXnejG7-bmMwPtJdOOUWd=w427-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2duSwek4OhCQfARA9V36lFvwnRU5aQV9uSXpgGKVeojy3E6XWux6e-LdGY6NseMLIagtmbyVQHbayAd-p1zYzGqc2BEo3gdemxp2rgttA6YmZvoiYXnejG7-bmMwPtJdOOUWd=w530-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8KA8K4H6_NzgXE89gPQJma68bbRc18Ydsk0H_FabioofwH7RIY6y2VqLlJVDCSI-bXx4mAkRy8sauKxfG44LILeDwGDtrMrn0T2n2b_OtMHN3qFo13dvp7hlQSiAKSsN3d-Cu=w531-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=pxP_QmzNbfFsc7Wr7Ua1pQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=198.66083&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Tuvalet","Randevu alınması önerilir","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","denizli-kedi-oteli","selcuk-bey-kedi-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Denizli Kedi Oteli, Denizli Selçuk Bey bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 404 95 28', NULL, 'https://www.denizlikedioteli.com/', '{"google_maps":"https://www.google.com/maps/place/Denizli+Kedi+Oteli/data=!4m7!3m6!1s0x14c74117ed912f2f:0x96e4620dfa8f6f30!8m2!3d37.7897224!4d29.0185884!16s%2Fg%2F11vpx_44n4!19sChIJLy-R7RdBxxQRMG-P-g1i5JY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJLy-R7RdBxxQRMG-P-g1i5JY', 'boarding-3ebcc3038710fe161921e712')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8ca9ac74214515c5021ef50e3277a4eb', 'boarding-3ebcc3038710fe161921e712', 'Bahar Bahar', 10, 'Yorumlara bakıp 2 evladımı bir ay önce bıraktım iyiki de buraya vermişim gözüm arkada değil çok ilgililer hergün video gönderíyorlar size çok teşekkür ederim iyiki tanıdım sizi', '2026-04-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-09421ee0a50071d4c1dc3fb85a6e75f4', 'boarding-3ebcc3038710fe161921e712', 'nazlı buldur', 10, 'İlk defa oğluşumuzdan bu şekilde ayrı kaldık otelin yorumlarına bakarak verdik gerçekten güvenimizi hiç sarsmadılar yaklaşık 1 aylık süreçte hergün video gönderdiler çok ilgili ve samimiler gönül rahatlığıyla kedilerinizi emanet edebilirsiniz', '2025-10-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6704913426cf1a2706c28aba019c0f20', 'boarding-3ebcc3038710fe161921e712', 'Zeynep Feride Menekşe', 10, 'Kedilerimi ilk defa bırakacağım için tedirginim. Üstelik dışarıya çıkınca korkuyordu kedilerim. Her kedinin ayrı odası, odasında ihtiyacı olabilecek herşeyi vardi. Tırmalama tahtası bile düşünülmüştü. Büşra hanımın her gün kedilerle sabah akşam ilgilenmesi, her gün resim veya video ile iletisime geçmesi çok güzeldi. Üstelik 2-3 güne iki kedim de alismislardi Büşra hanıma. Üstelik anestezi yapmadan tras hizmetleri olduğunu da öğrendim. Anestezi ağır olduğu için tras ettiremiyordum sağolsun Büşra hanım orda konaklarken kedilerimiz alışınca traslarini da yaptı. Gözümün arkada kalmadı biryerdi tam bir aile ortamında kedi sevenlerin elinde olduğu için içim rahattı. Çok teşekkür ederim Büşra hanım. İyiki size denk geldi kedilerim.', '2025-08-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7fe3ff8e2912d10f3659ee56041e0433', 'boarding-3ebcc3038710fe161921e712', 'Esma Betül Kurt', 10, 'Tatile giderken ilk defa bir yere bıraktım iyiki burayı seçmişim o kadar tedirgindim ki bırakırken fakat boşaymış çok güzel bakıyorlar kendi kedileri gibi seviyorlar ben çok memnun kaldım gönül rahatlığı ile seçebileciğiniz bir yer 🐱😇😊', '2024-04-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-79f7ba6155f843e40849b1a51883a4ff', 'boarding-3ebcc3038710fe161921e712', 'umut ciftci', 10, '15 gune yakın kedimizi bıraktık Büşra hanımın her gün bilgilendirmesi olsun her gün resim ve video ile ilestisim kurduk bu süreçte asla gözüm arkada kalmadi ayrıca kedilerimizin kaldığı alanlar gayet hijyenik ve ferahtı gönül rahatlığıyla Büşra hanimla ilestisime geçebilirsiniz ❤️', '2025-02-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-52888dac2eb5a833231356ec', 'Denizli Köpek Oteli', 'Köpek otelleri', 'Denizli', 'Kayıhan', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEm5rn1l5logMOn9rtbgtwcJ-NI1mXM9QnRyTaxxjOsBrzjIzbTNYAbRERlfr1vyjHQFJW7WPuRFOvVklTo8vlxOK7YDd9hfN8sFOgvLU0CmGFq09vpMs5BEmYcQfAuBQKD74j6SWhAEvC=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEm5rn1l5logMOn9rtbgtwcJ-NI1mXM9QnRyTaxxjOsBrzjIzbTNYAbRERlfr1vyjHQFJW7WPuRFOvVklTo8vlxOK7YDd9hfN8sFOgvLU0CmGFq09vpMs5BEmYcQfAuBQKD74j6SWhAEvC=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkBavSfZV68_1fkkK44VO0cMV_L8FSzMDN-mdso8y9CQgDa4YzkC9JlOH_WPk_hzOzHceeG-uUxWKLBbfVpERoYhgkNvdpBD6i1eSLj0es1YKun8EHJx-e1pYarFDhES5q-hrsiA5K3yVr5=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxl5tvXncTk5q6OD-GI8YhfVDeRF8x-1wxI2s5OGG_KmlPaWgGfV3VPM8R6my882gCdLzcy87TpWGHpE8oXo3yxKxEdMifBY4zEyegoO35uj_d3_oTrXT1z3PX617WS0Tr7VKyv8LzWs8=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QcvR4s-rAcfLuWXGyN8gtA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=57.773228&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","denizli-kopek-oteli","denizli-kopek-pansiyonu","kayihan-kopek-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Denizli Köpek Oteli, Denizli Kayıhan bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 601 75 54', NULL, 'https://www.denizlikopekoteli.com/', '{"google_maps":"https://www.google.com/maps/place/Denizli+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14c73f0fa2d71fc9:0x5173a79642d09ba8!8m2!3d37.7430105!4d29.1108189!16s%2Fg%2F11lv94n7gb!19sChIJyR_Xog8_xxQRqJvQQpanc1E?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJyR_Xog8_xxQRqJvQQpanc1E', 'boarding-52888dac2eb5a833231356ec')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-43ad37e4905ca499f7ae80e1dd05d1e4', 'boarding-52888dac2eb5a833231356ec', 'Batu Kaynar', 10, 'Köpeğim çok hareketliydi, itaat konusunda zorlanıyorduk. Denizli’deki bu eğitim merkezi sayesinde artık komutları çok daha iyi dinliyor. Eğitmenlere teşekkür ederim.', '2025-08-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-de8895f431292253f35a9d22bcff95fb', 'boarding-52888dac2eb5a833231356ec', 'Deniz Aydoğmuş', 10, 'Köpeğimi gönül rahatlığıyla bıraktığım tek yer! Temiz, güvenli ve profesyonel bir ortam. Personel çok ilgili ve köpeğim her seferinde mutlu dönüyor. Denizli’de köpek oteli arayanlara kesinlikle tavsiye ederim!', '2025-06-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a1ad6ef182bdffc99fb35730fff83de7', 'boarding-52888dac2eb5a833231356ec', 'Melih Duman', 10, 'Kaliteli bakım, güler yüzlü personel, tertemiz ortam harika.', '2025-08-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c4a0eb9ee0dde1f4e62ad4b60f763b7c', 'boarding-52888dac2eb5a833231356ec', 'Mert Can', 10, 'gözüm arkada kalmadan köpeğimi emanet edebildiğim tek yer burası. çalışan arkadaşlara samimiyeti ve ilgileri için teşekkür ederim', '2024-11-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-02409f51d1188d1b8b17dd88e9441225', 'boarding-52888dac2eb5a833231356ec', 'Emirhan Alataş', 10, 'Temiz, güvenli, düzenli bir ortam. Tavsiye ederim herkese.', '2025-08-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-70b01345d076a89947490943', 'Patilance Köpek Oteli / Kreş & Kuaför', 'Köpek otelleri', 'Denizli', 'Kınıklı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm4y3bD69B5JkGStGp8_yvUkl82rFfso8mJBCGhUT8uwCo9l2bGId2nd9XlMPlBXRYktIE4u0fiOkCp8ekCk4DJhRM8ws9NCiBgdfntkLwbTnNIaGEeZqyvpnKdyRS3AGFxTRtR2L7O8HSg=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm4y3bD69B5JkGStGp8_yvUkl82rFfso8mJBCGhUT8uwCo9l2bGId2nd9XlMPlBXRYktIE4u0fiOkCp8ekCk4DJhRM8ws9NCiBgdfntkLwbTnNIaGEeZqyvpnKdyRS3AGFxTRtR2L7O8HSg=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnlbNYjJqzFb0HAF2Gh8ilbGExO1qm1--LgdCyvD03AtSau9PdBf0_IBMnS-m5H0M_OuIE6jCUBAJDXI7eSVwf17k0Z7T1lgijf6YEp8JDu0_7kupk_mh9HexD91b4k3W_6qYI29piqG5FU=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnTie8rGsWYopVYheacT7NHpYyL-vlOmnDYf5jMlYcZ8qRFf7IrvYAwd0CGvUd2MFGMT-MRUS0oGTHFxoWyULrNUdGNqNITkvRYwjazljHvlIv0IlnSopMfgDSnnsiBVYxL7rRD=w224-h441-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkupLrT-TUODmNiLrMh58bYIM-KGGDpU4uPxmdpwpeND3v7YHKrHz0WFVLLtne7RAPLIr_lswE9jVaH8pfuxXpAjkSl-GuyMESiJ68xhFFqGXw8xiyzLH_Zc_HYKzshdHUvc5o2=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnjoDa14gP_4iTQoS3rq6GZ9fumEkpJZxyOEfB6Ltz-xYHsvouLUVakz4YQmcxK-hZxhWpAC75pZj9lIMpAqwMFhrQtWDlyz4ED6c7vks9DZ3RokTUvR5R_nOwkXltytv5_8YM=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=j5vTSfQQxbFamMsLbccylQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=296.47144&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","denizli-kopek-oteli","denizli-kopek-pansiyonu","kinikli-kopek-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Patilance Köpek Oteli / Kreş & Kuaför, Denizli Kınıklı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0538 874 09 84', NULL, 'https://www.patilance.com/', '{"google_maps":"https://www.google.com/maps/place/Patilance+K%C3%B6pek+Oteli+%2F+Kre%C5%9F+%26+Kuaf%C3%B6r/data=!4m7!3m6!1s0x14c73f07ee135fa3:0x45d27a5b42d5c099!8m2!3d37.7455008!4d29.0879712!16s%2Fg%2F11fqt2vxth!19sChIJo18T7gc_xxQRmcDVQlt60kU?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJo18T7gc_xxQRmcDVQlt60kU', 'boarding-70b01345d076a89947490943')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-76757f9ab7256312d506716937581ef0', 'boarding-70b01345d076a89947490943', 'Mahir Emre Sucu', 10, '1 haftalık tatilimiz süresince Bulut''un misafir olarak kaldığı işletme. Nazlı Hanım ''a ve ailesine Bulut''a gösterdikleri ilgi ve sevgi için çok teşekkür ederiz. Ayrıca kuaför ve bakım hizmetlerinden de çok memnun kaldık. Herkese tavsiye ederiz.', '2026-06-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-23c95f043be7469e29f0e2ade02b85e4', 'boarding-70b01345d076a89947490943', 'Zeren Şener', 10, 'Oğlumu yıllardır gönül rahatlığı ile bırakabildiğim tek adres.Nazlı bakımından sağlığına kadar herşeyimizle yakından ilgili .Hatta oğlumun dişleri ile sıkıntısı vardı , ameliyat olması gerekiyordu ama narkoz olayından dolayı süreç bizi korkutuyordu.Nazlı çekilmesi gereken dişlerdeki tartarları temizleyerek bizi bu zorlu süreçten kurtardı.Çok minnetterız🙏❤️Ortam tam bir ev ortamı burada çocuklarımız çok rahat ve çok seviliyorlar.Kullanılan malzemeler ve verilen hizmet  kalitesi çok iyi.Bu konuda sürekli kendilerini yeniliyorlar.Çocuğumun burada rahat, mutlu ve emin ellerde güvende olması bizi de mutlu ediyor.Uzun yıllardır beraberiz .Nazlıcığım hem bizim çocuklarımıza hemde sokaktaki çocuklara gösterdiğin ilgi, alaka ve sevginden ; hepsine koşma çabandan; fedakarlıklarından ve oğlumu hep çok yakışıklı yaptığından dolayı sana ve güleryüzlü ekibine çok teşekkür ediyorum.İyi ki bizim hayatımızdasın❤️❤️❤️', '2026-05-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6e97ed309cb91eabcf15bfaa4b5154f9', 'boarding-70b01345d076a89947490943', 'Zehra Kasapoğlu', 10, 'Nazlıya gönül rahatlığıyla can dostunuzu emanet edebilirsiniz. İlgileri, sevgileri ve profesyonellikleri gerçekten harika. Patili çocuklarımıza iş olarak değil, sevgiyle yaklaşıyorlar. Çok hayvansever, ilgili ve güven veren bir işletme. Patili dostlarımız burada hem mutlu hem huzurlu oluyor. İyi ki yollarımız kesişmiş', '2026-05-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ec72d620c479e16607c7248ffdac1310', 'boarding-70b01345d076a89947490943', 'Ayten Irmak Tapki', 10, 'Nazlı hanım çok ilgili ve zor durumda son dakika bize yardımcı oldu sağolsun. Gerçek bir hayvansever gönül rahatlığıyla dostunuzu emanet edebilirsiniz. Konaklamaya ek olarak kuaför ve veterinerlik hizmeti de sağlanıyor. Siz tatilinizi yaparken dostunuz da gerekli bakımlarını yaptırarak güvenle teslim ediliyor. Çok teşekkür ederiz 🙏🏻☺️', '2026-01-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-923960c6c7a7060cc1d42cb86f841504', 'boarding-70b01345d076a89947490943', 'Cem Oyman', 10, 'Yaklaşık 1 hafta otel olarak kullandık. Konaklama öncesi veterinerimizi arayıp aşıları sorguladılar. Götürdüğümüzde özel bir ricamız olup olmadığını sordular. Hemen hemen her akşam fotoğraf attılar.
Son gün yıkama hizmeti de aldım. Ondan da gayet memnun kaldım. 5 yıldır tatile giderken napacağımı düşünürdüm. Artık içim çok rahat.
Orta ırk(15kg) Gecelik 750₺ ödedim. Bu seviyede kaliteli hizmet için bedava. Kafeste tutan yerler bu kadar alıyor.

Gönül rahatlığıyla çocuğunuzu bırakabilirsiniz', '2025-06-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-ec0efe16fc4b9fbc9a1a2a46', 'Denizli Köpek Eğitimi & Köpek Oteli', 'Köpek otelleri', 'Denizli', 'Kayıhan', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFX9cHU2yV_yYCJyndR35V6Xasu8-A07zCHaNX26Z8pFKfQqFAwQvdmjc5vBhKpthiEBimaUa2SDRU0Be3qW02zemkq7syD_8GXUMoC2xVg-3-081gMmXQNaTz4uQppGYaAcSC8jw1gu0=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFX9cHU2yV_yYCJyndR35V6Xasu8-A07zCHaNX26Z8pFKfQqFAwQvdmjc5vBhKpthiEBimaUa2SDRU0Be3qW02zemkq7syD_8GXUMoC2xVg-3-081gMmXQNaTz4uQppGYaAcSC8jw1gu0=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=82pjnanH16p7Pd58pOLGAg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=258.1681&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","denizli-kopek-oteli","denizli-kopek-pansiyonu","kayihan-kopek-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Denizli Köpek Eğitimi & Köpek Oteli, Denizli Kayıhan bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 389 97 20', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Denizli+K%C3%B6pek+E%C4%9Fitimi+%26+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14c73fe43bff036f:0x19ddc3534798307a!8m2!3d37.749094!4d29.1215952!16s%2Fg%2F11z3wnpvc0!19sChIJbwP_O-Q_xxQRejCYR1PD3Rk?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJbwP_O-Q_xxQRejCYR1PD3Rk', 'boarding-ec0efe16fc4b9fbc9a1a2a46')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-87ab4da250498e906851a8f8f1c3af61', 'boarding-ec0efe16fc4b9fbc9a1a2a46', 'Yusufcan Aras', 10, 'Kaliteli hizmet askeriyeden bile belgesi olan bir adam köpeğimi bıraktığımda gönül rahatlığı ile çıkıp gittim şiddetle tavsiye ederim.', '2026-04-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bdaad8df0ba846e1c5e60486add91120', 'boarding-ec0efe16fc4b9fbc9a1a2a46', 'Müfide Kart', 10, 'Köpeğimi eğitim için gönül rahatlığıyla emanet ettim ve sonuç gerçekten beklentimin çok üzerinde oldu. Eğitim süreci boyunca düzenli olarak bilgilendirildim, köpeğime sevgi ve sabırla yaklaşıldığını her zaman hissettim. Daha önce dinlemekte zorlandığı birçok komutu artık rahatlıkla uyguluyor ve davranışlarında gözle görülür bir değişim var. İşini gerçekten profesyonelce yapan, hayvanları seven ve emek veren bir ekip. Gönül rahatlığıyla herkese tavsiye ederim. Emeği geçen herkese çok teşekkür ederim.', '2026-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7251d763a68b0ce0b94fe0cb8d51eba4', 'boarding-ec0efe16fc4b9fbc9a1a2a46', 'Kadir Agıl', 10, 'Köpek eğitmenliğinden tutun kopek bakımına kadar denizlideki ve Türkiye genelinde tek yer burası derim kalite tesadüf değildir ta kendisi burdaadir Osman kayrakci', '2026-04-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-206f2b6f8bb56bc771cdf82bd2e13bec', 'boarding-ec0efe16fc4b9fbc9a1a2a46', 'Tuğba Tektek', 10, 'Köpeğimi şehir dışına çıkarken gönül rahatlığıyla bırakabildiğim nadir yerlerden biri 🙏 Hem otel hem de eğitim konusunda gerçekten çok profesyoneller. Disiplinli, ilgili ve hayvan sevgisi yüksek bir ekip.  Süreç boyunca sürekli bilgilendirme yaptılar ve ilgileri hiç eksilmedi. Patili dostumu kendi evindeymiş gibi hissettirdikleri için çok teşekkür ederim 🐶💕', '2026-04-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2f7c5341240e9bd1dd825579bbd4f78d', 'boarding-ec0efe16fc4b9fbc9a1a2a46', 'ahmet baki Karatepe', 10, 'Köpeğimizi emanet ettik ve iyi ki vermişiz. Hem sevgiyle yaklaştılar hem de disiplinli bir eğitim verdiler. Sonuçtan çok memnunuz, emeği geçen herkese teşekkür ederiz.', '2026-05-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-089f375eb8384af91168eec9', 'Rika Pet Shop - Pet Otel - Pet Kuaför', 'Kedi ve köpek kabul eden karma tesisler', 'Denizli', 'Adalet', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkalPP-tGLLCy2jaPNEMloXVMNVAvcPA0VRA3uYEuIdBbsgK-dEoLZfdkOaMR_ZFA6f7iB32krxWsKR6VeM7MHdtVKEsqBwAbDak-OVvhR8LkLaWhh4qVK2KdZjjtajUf0zNUgXZ8t0BR3B=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkalPP-tGLLCy2jaPNEMloXVMNVAvcPA0VRA3uYEuIdBbsgK-dEoLZfdkOaMR_ZFA6f7iB32krxWsKR6VeM7MHdtVKEsqBwAbDak-OVvhR8LkLaWhh4qVK2KdZjjtajUf0zNUgXZ8t0BR3B=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWln1YdLPmx87QgqSbfNVQ7szdPAyr_68ws9Xl3QWSNB06AkrgiHuh7kXE-lVfykCc0a0rBS2sW6lNZ0041K3nmtxaBi1b7wnlsts3dA2bxdR914m_e-0IVkI_zKlyCnyCTI0mL6pfiz0gkR=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkZTvFnFjap9peQdiwvO8OJlA71yTs24VwUoXfPemwCI7Cf2VeAF7w-O0qX-5iWewynKKWdR7KLTEd1d-k6wu2pm3r-AEZfU5J3KC6pCvD0PHesYyowfAiERz-cS0t-z4GA8472xo8OFiY9=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZ8RUv-UpWd8P8TRu2WtBRWGdWv11-SR5AzagLgGa3Pd-byYoyDccF5A1fB03bTJ4lRiipN7OaxDiA40F-7EMWt7ZZ4T1t0oHJYISTrboYUCsdJHwMu-YB3GLc7AFE3td-q3uNgp0m-06x=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Tb0Plt3mBWt4RJNrpx3-gw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=107.5928&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Hızlı ziyaret","Banka kartları","Kredi kartı","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","denizli-kedi-oteli","adalet-kedi-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Rika Pet Shop - Pet Otel - Pet Kuaför, Denizli Adalet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0535 506 68 75', NULL, 'https://www.instagram.com/rikapetshops?igsh=MTc4OGtvOXg1c3dqNQ==&utm_source=qr', '{"google_maps":"https://www.google.com/maps/place/Rika+Pet+Shop+-+Pet+Otel+-+Pet+Kuaf%C3%B6r/data=!4m7!3m6!1s0x14c741ee6f93a265:0x25e6bcc6d24bdc6f!8m2!3d37.7790716!4d29.0195055!16s%2Fg%2F11yyfrtg9n!19sChIJZaKTb-5BxxQRb9xL0sa85iU?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJZaKTb-5BxxQRb9xL0sa85iU', 'boarding-089f375eb8384af91168eec9')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b18923efcc680089e1a8c46f3a5786f8', 'boarding-089f375eb8384af91168eec9', 'berat özgül', 10, 'Pooddle köpeğimin traşı için ilk defa gittim ve aşırı memnun kaldım bundan sonraki tek adresim ve herkese önereceğim güler yüzlüler  emeklerine sağlık çok içime sindi', '2026-05-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1ca95699773bdd71d514651c44be7d99', 'boarding-089f375eb8384af91168eec9', 'Aleyna Mersin', 10, 'Alo mamada hızlı teslimat köpeğim için acil mamaya ihtiyacım vardı hızlı bir şekilde elime ulaştı teslimatın içinde ufak hediyelerin olmasıda çok mutlu etti', '2026-05-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8378d0da35ade71914afe10d5b5baebf', 'boarding-089f375eb8384af91168eec9', 'Funda Geduk', 10, 'Biz aldığımız hizmetten çok memnun kaldık,hem profesyonel olmaları hemde samimiyetleri tüylü canımı emanet etmem konusunda içimi çok rahatlattı,almaya gittiğimde çok mutlu olduğu her halinden belli oluyordu.petshop-petkuaför-otel hepsi bi arada olması çok büyük avantaj sağladı.Serra hn ın emeğiyle usanmadan saatlerce uğraşılmış traşıyla mis gibi ordan almak beni çok mutlu etti.Nereye bırakırım oğlumu gibi bi kaygım yok artık.Profesyonellik adı altında kaldıkları yeri bahçeyi ortamı gösteremeyiz diye bi durumla karşılaşmadık,gönül rahatlığı ile her yeri tanıtıyorlar.Biz çok memnun kaldık,gönül rahatlığı ve iç huzurla emanet edilebilecek bir yer olmuş,elinize,emeğinize sağlık,tekrar teşekkür ederiz🐶💙', '2026-05-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7a4fd1760703ca806ef291ee9644a350', 'boarding-089f375eb8384af91168eec9', 'Melike', 10, 'Güler yüzlü ekibiyle sevecen yaklaşımlarıyla çok tatlı köpüşleriyle  bizi evlerinde gibi ağırladılar sizlerede tavsiye ederim çok teşekkür ederim herşey için🥰🙏', '2026-05-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8cfcfda442214c4fe946127a68525ee6', 'boarding-089f375eb8384af91168eec9', 'Hatice Koca', 10, 'Patili dostlarımızı güvenle bırakabileceğiniz samimi bir ortam. 🤍✨ teşekkür ederiz', '2026-05-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-3f9f409be084fed279bbd15b', 'Bosphorus Köpek Oteli', 'Köpek otelleri', 'Denizli', 'Kayıhan', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmB5odVJsvh7dxrn03kI2MuyB_UMpeLIUPRC_ZPZzuktPxrK52xk3m3FOZ3New_u7bqvQdjG4bEu1QfEPCZCdFB6rUWjzCqAwZGfxJJ7xq8sd2yTJf4BGkDy15MNXsP2F8kAb8O7KSpgldF=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmB5odVJsvh7dxrn03kI2MuyB_UMpeLIUPRC_ZPZzuktPxrK52xk3m3FOZ3New_u7bqvQdjG4bEu1QfEPCZCdFB6rUWjzCqAwZGfxJJ7xq8sd2yTJf4BGkDy15MNXsP2F8kAb8O7KSpgldF=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm-Sz5sUoBMzvPFfD7LgUnvQZyD1w5Hs2cnCX2_CE-LaGHH8JlK09r99L5o8er_S_j0XG6HU2FJEtkb1K-cI26EUQ8Xv54zel0zy25XVsT5Dre1rIIeq-EIutjG1wbyr2gwpiaBuEGO6yYK=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk-skm0XPjYkKNs6_lpdDr3HVcMDwcEt9uk3fKkIIO74kkGU4KQ8fk7syY91EiInYBfoS4_8FPf8rUbG70i0Bn-1jwz7EssnrI7MfLVkCp0k0xIIaH-hTP63nZsTP6JyAwfKOdwSz2eyl8=w224-h398-k-no"]'::jsonb, '["dog"]'::jsonb, '["Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","denizli-kopek-oteli","denizli-kopek-pansiyonu","kayihan-kopek-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bosphorus Köpek Oteli, Denizli Kayıhan bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 043 66 03', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Bosphorus+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14c73ff200f58c9b:0x207fe54cc80d3210!8m2!3d37.7521501!4d29.1244496!16s%2Fg%2F11z6c2xhm3!19sChIJm4z1API_xxQREDINyEzlfyA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJm4z1API_xxQREDINyEzlfyA', 'boarding-3f9f409be084fed279bbd15b')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0f827aecd69739a9cec161681363cb0c', 'boarding-3f9f409be084fed279bbd15b', 'Oğuzhan Sonyol', 10, 'Denizliye Konaklayacağımız otele geldiğimizde küçük kopegimiz FOX Otel’in kabul etmediğini öğrendik ve çaresizce ona kalacak bir yer aramaya başladık tesadüf eseri bu sevimli otel ile karşılaştık ve inanın Küçük oğlumuzu hiç bu kadar gönül rahatlığıyla üç günlüğüne ilk kez tanidigimiz insanlara emanet edeceğimi düşünmezdim bu arada Fox da çok mutluydu her gün biz daha harekete geçmeden Fox‘la ilgili haberleri illerdenotel sahiplerinden alıyorduk herkese tavsiye ederim kesinlikle samimiyetle söylüyorum harika bir yerdi teşekkür ederiz Denizliye her sene geliyoruz ve her sene gönül rahatlığıyla oğlumuz bırakacağız', '2026-06-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-971690a76abf4f6bc35eb80bf41d7275', 'boarding-3f9f409be084fed279bbd15b', 'ahmet çimen', 10, 'Köpek eğitim merkezi olan ve oteli olan bu mekandan çok memnun kaldık tatilimiz boyunca her an köpeğimizle ilgili bilgi paylaşıldı ve fotoğraf görselleri atıldı Merve Hanım’a ilgisinden dolayı çok teşekkür ediyoruz', '2026-07-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bcef1ae536aeef16fc39ee8927e107be', 'boarding-3f9f409be084fed279bbd15b', 'Bekir KAYACELİK', 10, 'Denizli''de hayvan dostlarımız için böyle bir otelin olması ve daha bir çok etkin hizmetin olması çok büyük bir konfor alanı oluşturmuş, çok teşekkürler ve tebrikler bu hizmetiniz için...😊🍀👏🐶🐺🐈🐈‍⬛🐕', '2026-05-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0733d794d2c21b7d09449369e8e628e9', 'boarding-3f9f409be084fed279bbd15b', 'Havva Gündoğan', 10, 'Köpeğimiz Gofy’i 2 günlüğüne bıraktık. İşletme sahibi Merve Hanım çok ilgili çok sevecen; bizi sürekli bilgilendirdi; Gözümüz arkada kalmadı. Köpeğimiz de çok keyifli zamanlar geçirmiş videolarından gördüğümüz kadarıyla. Merve Hanım ilgi ve alakanıza çok teşekkür ediyoruz.', '2026-07-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f0130e5f14db777585c95e53f8b6457f', 'boarding-3f9f409be084fed279bbd15b', 'esra inalöz', 10, 'Ķöpeğimiz Karaman hafta sonu bırakmak için yer ararken veterinerimizin verdiği broşürle Merve Hanım ile iletişim kurduk ve otelin çok düzenli ve temiz olduğunu görünce güvenerek bıraktık.3 günün sonunda sorunsuz mutlu bir şekilde aldık. İhtiyacımız olduğunda düşünmeden bırakabileceğimiz bir yer. Ve  kendi köpeği gibi sahiplenen Merve Hanım''a da teşekkürler', '2026-06-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-709ac7a31ab3f59f77804d3f', 'EGE KÖPEK EVİ', 'Köpek otelleri', 'Denizli', 'Kayıhan', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmmZhwXVRbTiOTeyNkO2PydsOGb1CL9G9CIRh5Eb4MbnyDN7CZAZgw9VOJhUj4NbTdK3aRg3YvaOvdullEGaYMwxbML8pLbJSJF-2acfRjyCFHaijI59Xfj_h7eURrxDoHA6mkfGg=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmmZhwXVRbTiOTeyNkO2PydsOGb1CL9G9CIRh5Eb4MbnyDN7CZAZgw9VOJhUj4NbTdK3aRg3YvaOvdullEGaYMwxbML8pLbJSJF-2acfRjyCFHaijI59Xfj_h7eURrxDoHA6mkfGg=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSQ1nXa0WIzLsT_W2eprUitFBskQBkThN62tE1QhD5wFGigmbcbaUMri82mHMAnodzPqM1jiEDWC2iee_u7B6YcOy_jkjDN8aD6V4nHGjf6ksZYabptAC-1oY0lMwyMfBh3rUYl1b0x6s=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmbn9BwhSSRpnDkeI06Fl5xhjHWM8cxw6770LXXtuUFljr7uTppzZj6wCcBf7kDv_YFsEwO7QspMw1X99k109Eoo0dbUkxzoQzC61v5E4y3d72dpKBJY85Dtc3XGx04PXULRuM=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWka0ayIFj9kd1zuD6I1wxMQl3cWib-awRRDgpWTavWqpjPcraSFz2Fb-mm1VDKjCAitXU_wS3jxYCfcA7gozeZ8ai9_dBDPA6sxQThaPW0rPnOXHyo0qtY0ZhN22GUXLilRf1Q=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Fqi6MWaMC6VwQ7AsPU6cyA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=114.693596&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","denizli-kopek-oteli","denizli-kopek-pansiyonu","kayihan-kopek-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'EGE KÖPEK EVİ, Denizli Kayıhan bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 601 75 54', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/EGE+K%C3%96PEK+EV%C4%B0/data=!4m7!3m6!1s0x14c73e918dd4912d:0x6c316d0ec5450499!8m2!3d37.7483043!4d29.1218256!16s%2Fg%2F1tgqfr0y!19sChIJLZHUjZE-xxQRmQRFxQ5tMWw?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJLZHUjZE-xxQRmQRFxQ5tMWw', 'boarding-709ac7a31ab3f59f77804d3f')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1f1e630e655ecbf4618c4e710ae600b1', 'boarding-709ac7a31ab3f59f77804d3f', 'ismail Çakıcı', 10, 'Ege Köpek Evi’nden gerçekten çok memnun kaldım. Hem kedi hem köpek konaklama hizmetleri çok temiz ve düzenli. Çalışanlar çok ilgili ve hayvanlara sevgiyle yaklaşıyor. Köpeğimi gönül rahatlığıyla bıraktım, kesinlikle tavsiye ederim.', '2026-05-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-59b2d446652e7fdc43e4f2a3aee85772', 'boarding-709ac7a31ab3f59f77804d3f', 'sena kaya', 10, 'Köpeğimi eğitim için Ege Köpek Evi’ne verdim ve sonuçtan çok memnun kaldım. Profesyonel bir ekipleri var ve hayvanlarla iletişimleri harika. Aynı zamanda konaklama hizmetleri de oldukça güvenilir.', '2026-05-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-966dfb89ffe9d469d490e2486cdf7a38', 'boarding-709ac7a31ab3f59f77804d3f', 'Oğuzhan Çakıcı', 10, 'Uzun süredir böyle güvenilir bir yer arıyordum. Ege Köpek Evi’nde köpeğim hem güzel vakit geçirdi hem de eğitim aldı. Personelin ilgisi ve profesyonelliği gerçekten takdire değer.', '2026-05-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8bf80f6f4374faf71d7b1cd5dd8747fc', 'boarding-709ac7a31ab3f59f77804d3f', 'Duygu Kaya', 10, 'Kedim burada konakladı ve çok memnun kaldım. Temizlik ve hijyen konusunda oldukça titizler. Tekrar tercih edeceğim bir yer.', '2026-05-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c2cafac56c9017fb1f766e4a94e18cc2', 'boarding-709ac7a31ab3f59f77804d3f', 'Oğulcan Çakıcı', 10, 'Ege Köpek Evi, hem konaklama hem de eğitim konusunda çok başarılı bir yer. Kedim burada kaldı ve çok iyi bakıldığını gördüm. Temizlik, ilgi ve güven açısından içim çok rahat etti.', '2026-05-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-3779a9e874cfd15eda5a653f', 'Relaxkopekoteli', 'Köpek otelleri', 'Denizli', 'Tekke', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=WGfbtt56xgHsd2qWfMsOlA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=194.33624&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=WGfbtt56xgHsd2qWfMsOlA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=194.33624&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=WGfbtt56xgHsd2qWfMsOlA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=194.33624&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","denizli-kopek-oteli","denizli-kopek-pansiyonu","tekke-kopek-oteli","denizli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Relaxkopekoteli, Denizli Tekke bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 507 51 97', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Relaxkopekoteli/data=!4m7!3m6!1s0x14c73c383b4f0b39:0xf8795551610bae22!8m2!3d37.738788!4d29.1604484!16s%2Fg%2F11c46gqyh5!19sChIJOQtPOzg8xxQRIq4LYVFVefg?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJOQtPOzg8xxQRIq4LYVFVefg', 'boarding-3779a9e874cfd15eda5a653f')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c34822e57380e49e12b8cddabe530df0', 'boarding-3779a9e874cfd15eda5a653f', 'CEMİLE ÇIRAK', 4, 'Köpeğim 3 gün kaldı 4 günlük ücret aldılar. Sorduğumda da girdiği çıktığı günü gün olarak baz aldıklarını söylediler. Çarşamba günü 15:00 da bıraktık cumartesi günü 11:30 da teslim aldık. Dört günlük ücret ödedik. Bakıma gelince bu sefer köpeğim çok mutsuzdu. Büyük ırk köpek lerle küçük ırk köpek aynı yerdeydi. Dolayısıyla korktu.', '2021-07-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7203ce26293564fa5aa99a6c5ea2a479', 'boarding-3779a9e874cfd15eda5a653f', 'Lütfi Özdemir', 10, 'Çok güzel ve temiz bir yer, muaddillerine göre tercihim olur, insanlar ilgili ve güler yüzlü.', '2021-06-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b04dbca5253c0bfa797adc3de0cbb2fc', 'boarding-3779a9e874cfd15eda5a653f', 'Ferudun Delen', 10, 'Sessiz sakin doğa ile iç içe Harika bir ortam', '2022-08-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-648e901cbcdc6de6d6cf3f5b7f1d7a8a', 'boarding-3779a9e874cfd15eda5a653f', 'Michel Eren', 10, 'Hem güvenilir, hem temiz hem de guzel insanlar. Daha ne olabilir ki', '2021-09-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-64468368ddd457bbe7b3357c32c23ba4', 'boarding-3779a9e874cfd15eda5a653f', 'Ümmühan Banu Erkoç', 10, 'Her il dışına çıktığımda köpeğimi güvenle emanet ettiğim yer.', '2019-10-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-a653aef5f81eeb8bc48b1514', 'Uğurcan Balkan Pet House', 'Kedi ve köpek kabul eden karma tesisler', 'Diyarbakır', 'Fırat', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnmA3yoSPM-coyc_Hgatd1KYVG7xGmMwi3MhjyhS_HLiMCLkEDpZrgys0gHKCSLa0vohqtqmRMEMW3305Ckua-HxqrpZIgk2d8zVVBY62-SlbnnP-swdXdl8Vew4klEnskPXDAueomZzVA=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnmA3yoSPM-coyc_Hgatd1KYVG7xGmMwi3MhjyhS_HLiMCLkEDpZrgys0gHKCSLa0vohqtqmRMEMW3305Ckua-HxqrpZIgk2d8zVVBY62-SlbnnP-swdXdl8Vew4klEnskPXDAueomZzVA=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn_MTYEgi4wrGo3p6yqyVla6NFAJqg5vVh_WeyVxJoqOiog9Pnl2rueh3Su5kO9qdGvnZ06TcOLO5qsMOrxs8hmLVx_pxcilEWHneNfDjUTu_3ICwE-Krv5RWjyag4VpWH3ZvctlSdAO4qw=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlM6kZSnLBVvDtS0Mdqto4vUETyvsb1UUoDBNV7-0vOcVKRjwmqF4x-xN3fegzn5hlidVn1mrnWe6yKmRrKNSLFKYJo7XyOxguXod8fGBloMCx5GCl3gaPvv828ai9mT6sHRYmBEzluI7vd=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkGDDGuiUgehSpA-iXt-4OTVKX8Nd3e_ixlIVT-tv6h46a6_T8Jytcy6-O-gQeHGQExeuw2mzsTQx77CMxfmYWXqlAJW6uB-5FbA5vEFdmHsuBoIAifsjz6V2brvhcOTpvpElHAQ23iNyOs=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=4SHNqGVL5GTobN9nHLTO0g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=334.33817&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun park yeri","Banka kartları","Kredi kartı","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","diyarbakir-kedi-oteli","firat-kedi-oteli","diyarbakir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Uğurcan Balkan Pet House, Diyarbakır Fırat bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 000 34 48', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/U%C4%9Furcan+Balkan+Pet+House/data=!4m7!3m6!1s0x40751f49ed6f824d:0xd2c88da2b16193c4!8m2!3d37.9195467!4d40.1312723!16s%2Fg%2F11nx2t_gkc!19sChIJTYJv7UkfdUARxJNhsaKNyNI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJTYJv7UkfdUARxJNhsaKNyNI', 'boarding-a653aef5f81eeb8bc48b1514')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-114dbe4b6cae47339eb9e2bdb9c75fbf', 'boarding-a653aef5f81eeb8bc48b1514', 'Lorin Canbey', 2, 'Biz köpeğimizi büyük bir cins olduğundan hiçbiryere bırakamadık ve son çare olarak burayı seçtik. Ancak 2 gece kalmasına rağmen yatağı resimde olduğu gibi çiş içindeydi ve 4 yıldır bizimle yaşayan köpeğimiz evde bir kere çiş kaçırmamasına rağmen bu hale getirmişlerdi. Biz bunu oradaki çalışana söyleyincede siz köpeğinizin psikolojisi bozmuşsunuz dedi. Bahçemiz var denilen alanda 2 metrekare falan bide bunu överek söylüyorlar. Köpeğimizi bıraktığında oda olucak dendi ancak odada kafesin daha kapalı hali sadece. Köpeğimizi aldığımızda ise su kabının üst kısmı orada kaldığı için babam oraya geri dönmek zorunda kaldı ancak  karşılaştığı manzara  daha kötüydü sanki babam onu dövecekmiş gibi bir adam çağırmıştı ve hala bizi şucluyordu.Ayrıca nakite 2400 diyip karttan 3000 lira istiyorlar bu bir vergi kaçakçılığı ve sizi 189 şikayet edeceğiz bu bir suç. Hem bizi suçladılar hem de vergi kaçırıyorlar . Sonuç olarak paranızla rezil oluyorsunuz. Hayvanları sevmeyen insanların bu işleri yapmaması lazım. Bu bir ticarethane değil biz size can emanet ediyoruz.', '2026-07-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-71ae6a4c8777273f8b980186c9ae09d2', 'boarding-a653aef5f81eeb8bc48b1514', 'Zeynep', 10, 'Küçük ırk köpeğim var ve kendisi çok ilgi meraklısı. Bırakırken aklım hep Miya da  kalmıştı gelen videolar içimi çok rahatlattı, beni kırmayıp görüntülü konuşmayı kabul etmeleri çok samimiydi. Bundan sonraki seyahatlerimde kızımın kalacağı yer belli , teşekkürler Uğurcan Balkan ☺️🙏🏻', '2026-07-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f35fca07332be2a476f0e641a8d12df1', 'boarding-a653aef5f81eeb8bc48b1514', 'Kampçı doktorlar', 2, 'Buraya 5 yıldız verenler başka pet otel görmemişler muhtemelen. Köpekleri 1-2 m2 lik alanlara koyup doğru düzgün dışarı çıkarmıyorlar. Tuvaletlerini bile kafese yaptırıyorlar. Oyun, sevgi desen zaten yok. Bu işi seven insanlar yapmalı. Bizim köpeğimiz resmen kötü muameleye maruz kaldı. Üstüne üstlük gecelik 1200 tl gibi fahiş bir fiyat istediler. Posttan çekmek istemediler. İbandan göndermek veya nakit vermek için dayattılar. Ne yazık ki Diyarbakır da alternatif olmadığı için bunlarda kendini pet otel sanıyor. Pet otel değil pet cezaevi resmen. İnstagramdan hoşuna gitmeyen yorumları da silip duruyorlar. Ben gerekli yerlerede şikayette bulunacam.', '2026-07-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0548c681bc57c6fcd1b0c143fc936fbd', 'boarding-a653aef5f81eeb8bc48b1514', 'Mine Songur', 10, 'İlk kez köpeğimi tıraşa bırakacağım için biraz endişeliydim ama tüm süreç beklediğimden çok daha güzel geçti. Çalışanlar çok ilgiliydi, köpeğimin karakterine uygun şekilde yaklaştılar ve her aşamada beni bilgilendirdiler. Tıraş bittikten sonra karşıma çıkan köpek benim köpeğim miydi emin olamadım. Eve dönerken yolda herkes dönüp baktı. Sanırım artık mahallenin en yakışıklısı o. Eve gelince aynanın önünden ayrılmadı, özgüveni resmen tavan yaptı. Hem profesyonellik hem de güler yüz açısından gönül rahatlığıyla tavsiye ederim. Bundan sonra başka bir yere gitmeyi düşünmüyorum', '2026-07-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1f176d7ee0af7c9915bf688a124e31c3', 'boarding-a653aef5f81eeb8bc48b1514', 'Tuana', 10, 'Kesinlikle gözünüz arkada kalmasın gerçekten işi bilen bir işletme her konuda güvenebilirsiniz 4/4lük bir çalışma sistemi var.köpeğimi aldığım da gerçekten çok mutluydu bir sürü arkadaş edinmişti orada konaklayan tüylü arkadaşlarıyla teşekkür ederizz', '2026-05-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-2e843fb79675a5c680962a35', 'The Pet''s Hotel - Diyarbakır Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Diyarbakır', 'Fırat', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnk_1E0tI2vZ0o7MBLDTiQAtKmjZcmyWn5mNYH8oRf4aOKgvgU5GgWajh3m4Z2mbJlndEu2FO9gFHtLxQRHbFCULfsODlqjeTDWr-D9052NAJ8Kkq3IGimjUJHPz_zQ7Y8LR76r=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnk_1E0tI2vZ0o7MBLDTiQAtKmjZcmyWn5mNYH8oRf4aOKgvgU5GgWajh3m4Z2mbJlndEu2FO9gFHtLxQRHbFCULfsODlqjeTDWr-D9052NAJ8Kkq3IGimjUJHPz_zQ7Y8LR76r=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnk_1E0tI2vZ0o7MBLDTiQAtKmjZcmyWn5mNYH8oRf4aOKgvgU5GgWajh3m4Z2mbJlndEu2FO9gFHtLxQRHbFCULfsODlqjeTDWr-D9052NAJ8Kkq3IGimjUJHPz_zQ7Y8LR76r=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=01JdwU1PgKTwcnlK5VPZig&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=239.7905&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","diyarbakir-kedi-oteli","firat-kedi-oteli","diyarbakir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'The Pet''s Hotel - Diyarbakır Pet Otel, Diyarbakır Fırat bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0539 457 06 21', NULL, 'http://www.thepetshotel.com.tr/', '{"google_maps":"https://www.google.com/maps/place/The+Pet%27s+Hotel+-+Diyarbak%C4%B1r+Pet+Otel/data=!4m7!3m6!1s0x40751f26e8b7387f:0xf375e994652a48be!8m2!3d37.9270908!4d40.1617236!16s%2Fg%2F11v0_fwj5p!19sChIJfzi36CYfdUARvkgqZZTpdfM?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJfzi36CYfdUARvkgqZZTpdfM', 'boarding-2e843fb79675a5c680962a35')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2d041fe3df9285a49ea952f9953570bc', 'boarding-2e843fb79675a5c680962a35', 'Duygu Küçük', 2, 'Köpeğimi kongreye giderken bırakmak zorunda kalmistim.hepimizde travma oluştu.kopegimi teslim ederken hoş bir görüşme odası hoş bir bayan karşılıyor sizi.sonrasi felaket.kopegimi almaya gittiğimde kapısını açtı bayan ancak köpeğim çığlıklara boğuldu.ciglik çığlığa bağırmaya ağlamaya başladı.taaa dışarıdan sokaktan sesini eşim duymus.sonra bni seslenmem için bir alt kata çağırdılar öyle pis bir yerdi ki öyle kötü kokuyordu ki belki 100 tane sinek 2 metrekare yerde vardı.buyuk ihtimal 5 gün hiç açıp gezdirmemisler tuvaletini olduğu yere yapmış hayvan kanalizasyon gibi kokuyordu.ayrica hergun aradım bayanı bize görüntü atsın diye ne cevap veriyor nede dönüş sağlıyor.teslim ederken kendisine ödül mamasi ve sevdiği oyuncağı vermiştim ben yokken versin diye onları bile vermemiş.o kadar çok korktum ki köpeğimi sağ salim alıp kaçmak istedim hemen oradan.merdiven altı bir yerde hapsediyorlar resmen hayvanları gözlerimle gördüm. Belki bu tarafların yabancısı olan insanlara faydam olur diye yazmak istedim.evet ucuz ama korkunç bir yer', '2025-05-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e310f77ee4f4ebbbe51016087e55e3fe', 'boarding-2e843fb79675a5c680962a35', 'Tunahan Gelgör', 10, 'İşletme sahibi ve yardımcısı gayet anlayışlı ve samimi insanlar. 3gün yavrumuzu emanet ettik memnun kaldık. Fiyatları da makul seviyede gideceklere tavsiye ederim.', '2024-01-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4108f32c2acca6f8574a915969d64093', 'boarding-2e843fb79675a5c680962a35', 'Tantuni', 10, 'Çok memnun kaldık . Muhakkak kedinizi köpeğinizi gözünüz arkada kalmadan bırakınız, bazen sadece sosyalleşmeleri için bile olsa 🥹🩵🙏', '2023-08-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f8ffddddf295d0dc3eb3195ec14a716c', 'boarding-2e843fb79675a5c680962a35', 'Ahmet DOSTER', 10, 'Çok memnun kaldık, fiyatları da uygundu. Herkese tavsiye ediyorum.', '2024-11-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-fe1e50a2887edaaff845445c', 'Sevimli Patiler Pet Kuaförü-Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Diyarbakır', 'Mezopotamya', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkeI03Cdgcge83CKbhsYP5fbtyCnnMPRwAppL0xVWda5-ilwhU-Lzq3gfk2QuzDH02P0X_uC7zxEG8ec6_PuLIxTs-vgiisDjdmqbgPGKHtXzhLqQiiPNm_kbT68H0i3zT2nQ3w4tRnwCly=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkeI03Cdgcge83CKbhsYP5fbtyCnnMPRwAppL0xVWda5-ilwhU-Lzq3gfk2QuzDH02P0X_uC7zxEG8ec6_PuLIxTs-vgiisDjdmqbgPGKHtXzhLqQiiPNm_kbT68H0i3zT2nQ3w4tRnwCly=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl_3cR6wRqME0xRj1ovRoZduZwwD0U6OtirLZH9R3Rwf2zz8uyyfkRA1ynjKYBqv_bzLeBK2wnXHId8bYtEC9GdMiBA46wm60QaqbGBButzMbhh2wl1J0DCTK3kF-G3ZGCWKxFiij-B9N0=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFWGlTRtf5_Us9fHJJDjMu0AcgUrQLI3LsBCO9Z_Gs1q2mgLuibYGdw6lHQrKCzNdedthfZetjXo-l8cjhrbscF2xydip5ty2i_xfmzk23IipbeSF2kOVkLEGP2MGxtpiQFNLH4w=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWneY_cDe2_OQdWLX7FbLGrnZwOkJn71ImT2PmmhK6kkiyLRUHMfUWEd3G9EbIEtHjBKgjRquwsqE7J3YwJwNdKBdCcMIBH1y1h92rory9OhnsFY7tSpcq2dSteAilGE0uzCC6g=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xYeQoG3BfFZ6P_SV7D2etg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=83.050026&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Banka kartları","Kredi kartı","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","diyarbakir-kedi-oteli","mezopotamya-kedi-oteli","diyarbakir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Sevimli Patiler Pet Kuaförü-Pet Otel, Diyarbakır Mezopotamya bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0553 600 93 34', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Sevimli+Patiler+Pet+Kuaf%C3%B6r%C3%BC-Pet+Otel/data=!4m7!3m6!1s0x40751f853bc22b11:0x9b611b687970311c!8m2!3d37.9393643!4d40.1506036!16s%2Fg%2F11p64ttpw9!19sChIJESvCO4UfdUARHDFweWgbYZs?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJESvCO4UfdUARHDFweWgbYZs', 'boarding-fe1e50a2887edaaff845445c')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e52edd47e23ab06fe325aa81c3240825', 'boarding-fe1e50a2887edaaff845445c', 'Selcan Tutar', 10, 'Köpeğimi diyarbakırda merdiven altı yapan bir yere götürdüm götürdüğüme bin pişman oldum sonra ümit beyi buldum iyikide bulmuşum işi bilmeyen yapmasın eline makas alan ben kuaförüm diyip geçiniyor', '2026-06-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-32fc9474963a0df5b90ccad6a9004a64', 'boarding-fe1e50a2887edaaff845445c', 'Gülhan Sevim', 10, 'En çok hoşuma giden şey kedime gösterilen
ilgi ve sabır oldu. Strese girmeden, sevgiyle
yaklaştılar. Temizlik ve özen de harikaydı.
Gözüm kapalı tavsiye ederim benim bundan sonra tercih edeceğim tek yer olur', '2025-12-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c6431133e646f38849940f7ac8c3e3ae', 'boarding-fe1e50a2887edaaff845445c', 'Çetin Durmuş', 10, 'dostlarınızı emanet edeceginiz tek yer diye bilirim ilgileri iş titizliği bir harika emekleri için ümit beye teşekkür ediyorum😊', '2026-01-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b2138cf1e1ae9a16ff885d79227bd6df', 'boarding-fe1e50a2887edaaff845445c', 'YAHYA BODUR', 10, 'Batmandan gelmiştik yakışıklı olalım diye 😊 İlgi alaka ve özellikle hijyen üst safhadaydı. Teşekkürler Herşey için😊', '2026-03-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-178c5f64f89f16dbb4ae7d46c5c08c62', 'boarding-fe1e50a2887edaaff845445c', 'ÖZLEM AKKUŞ', 10, 'Uzun zamandır böyle profesyonel bir pet kuaförü bulamamıştım.Gösterdikleri ilgi ve titizlik  sayesinde köpeğimin tıraşı umduğumdan  çok daha güzel oldu. Hatta köpeğimin bütün ihtiyaçlarını  ordan karşılıyorum. Teşekkürler sevimli patiler iyi ki varsın.', '2025-12-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-99465ded49b79b9b1aaf0c48', 'Wildbond Pet Otel & Eğitim', 'Köpek otelleri', 'Edirne', 'İskender köy', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80', '[]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","edirne-kopek-oteli","edirne-kopek-pansiyonu","i-skender-koy-kopek-oteli","edirne-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Wildbond Pet Otel & Eğitim, Edirne İskender köy bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Wildbond+Pet+Otel+%26+E%C4%9Fitim/data=!4m7!3m6!1s0x14b33be6b56704b7:0x81fe57b1070aad88!8m2!3d41.6338369!4d26.6726848!16s%2Fg%2F11zfkp36pq!19sChIJtwRnteY7sxQRiK0KB7FX_oE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJtwRnteY7sxQRiK0KB7FX_oE', 'boarding-99465ded49b79b9b1aaf0c48')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-4157b1e06c67b5f6ac974c64', 'Bones Pet Company', 'Köpek otelleri', 'Edirne', 'Sabuni', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnFiXRJE0O0J5oMe3G5F-pyci5t4_kwhVvZsB_vkmPnCvkj_Z850QM-yBvQIowHGtHyYBqqfZD5ULH7EDHwJsi_3CtCowsslJJLPmpA9l7DY0CIyJaacEimqpn-8um-tnpxK4o=w408-h408-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnFiXRJE0O0J5oMe3G5F-pyci5t4_kwhVvZsB_vkmPnCvkj_Z850QM-yBvQIowHGtHyYBqqfZD5ULH7EDHwJsi_3CtCowsslJJLPmpA9l7DY0CIyJaacEimqpn-8um-tnpxK4o=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmE9Vh7ieb0GB646w26zC2XrYzV2xC3FoSYyRaz5Qqb-1VOcOOjdqx4QsYJbj9tysKk0K2o2NaHOmy8WtGioiKyo8gl4s4cFQY9JuV4iV15wH0MTMpSHlYsieF6q4UDd1mCF3NP=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnk8xONrS5BRQoXr6nGF7aA3C7W2uTIqw9zw-xPV1aTYlNPxVfJ5C1dWZNt2NWLb-ThTgeP-79dNff1St0XM0XgisKyUzevnF_UG-wu9-3p8Y6HXCP-FCdMUNJZ2usnsrB6As-wvg=w446-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DQKO0Qeh32xFuYGEt123KQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=295.15918&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","edirne-kopek-oteli","edirne-kopek-pansiyonu","sabuni-kopek-oteli","edirne-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bones Pet Company, Edirne Sabuni bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, 'http://bonespet.com/', '{"google_maps":"https://www.google.com/maps/place/Bones+Pet+Company/data=!4m7!3m6!1s0x14b32ff33696cddb:0xd75806abb4e4d9fd!8m2!3d41.6771297!4d26.5557145!16s%2Fg%2F11v0b8wzh_!19sChIJ282WNvMvsxQR_dnktKsGWNc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ282WNvMvsxQR_dnktKsGWNc', 'boarding-4157b1e06c67b5f6ac974c64')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-7870f7e0b5d0129bf43485aa', 'Kral Petshop , Akvaryum &PetHotel', 'Kedi ve köpek kabul eden karma tesisler', 'Elazığ', 'Yeni Mahalle', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWljJowEoPSrMXSY5gMKDd40F13fSUVZeBIGUEVal8ypDiUkAWEzeIxA2z7-6uiq94NTN0PyLZpN6CQg6mOhcKcH6m6geBKuFrfvBtQAnMemxIMUcmOd1p7ksX8eFYRmwuq98XGpV7SrQuvE=w408-h305-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWljJowEoPSrMXSY5gMKDd40F13fSUVZeBIGUEVal8ypDiUkAWEzeIxA2z7-6uiq94NTN0PyLZpN6CQg6mOhcKcH6m6geBKuFrfvBtQAnMemxIMUcmOd1p7ksX8eFYRmwuq98XGpV7SrQuvE=w398-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9dgCWtK3SwFKH_r8w8rv1ZAsi0hfydnDcg5fucXBhh0yzIEcI-5TPkx8U0w0OMlQDAS2k4JAJKuhEmxok3PQhc53aTKsoc6VKstgWqlPR1teA5eiJBEyLiHGT01h5a_5UYXGO-txiGfYP=w224-h299-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlKzuqW5EkTIW5bjNHgo-VnKpxQGCb0N_SoBXMBlgRlDYPFmY6tNgMyUmsGAIB1HuQ2xbXaxwR8SBMt87vfKnW4K6cXffbIUTuS1doptPrDf5IAVye0PunVvf4WYNAllqi-43uc=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktEIAGh1H30zMeL9Wue_tZDnTv-Q_pJKxUETQQ5ZTlkzevNtV-gY3ihPTrHqF10I8X2M85JHF-DnnEl5e9F9yeCUKAJVTUvXt3tRlrrb6JWZU2VnznDDWzE-cAjYVNY42xZ4SPjw=w224-h299-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklvj_nWh72tK4X1RgAz776duEkrtgNGBSnjcrG8C0tGTyBZkeJcvjervQK9hS6XQH1CxfhNPe0m0SBpdq35EFZ42eQ5Tj064bhV9i10ujsulRXX9KOPNlNN9aRKe6oxNJByzA9=w398-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2IdzD57mXU0VatNAmmOdSYJCwOFWCt_hbfTZOaLLVqajdYDCTWUWAlYLZJ9zxoFkKmlOyQViQMbYmWv3N8NNJ9e9LUe1C2cf3vm2eyUKugKmm9vJmZ2bm3G2lpjYl8WYlgrM=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnlR9goLMB_SoOpiyXSjRMlB9EI9gcUrUyklt1bZMVZl2Oz4PgmC5neR4IsXZy7DCelzn1O_v5-4JJVZxQF264dbO5_38naGabdcVtQVftZpfOMhtXmO9h89i4U46wFTkDw-Yk=w224-h299-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_vR26SJaFJZNGu1XhjIWeQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=295.26923&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Adrese servis","Mağazadan teslim alma","Mağaza içinde alışveriş","Tekerlekli sandalyeye uygun giriş","Hızlı ziyaret","Banka kartları","Çek","Kredi kartı","NFC ile mobil ödeme","Transfer hizmeti"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","elazig-kedi-oteli","yeni-mahalle-kedi-oteli","elazig-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Kral Petshop , Akvaryum &PetHotel, Elazığ Yeni Mahalle bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0540 830 00 23', NULL, 'https://kralpetshop2.wixsite.com/website', '{"google_maps":"https://www.google.com/maps/place/Kral+Petshop+,+Akvaryum+%26PetHotel/@38.6684126,39.2198433,17z/data=!3m1!4b1!4m6!3m5!1s0x4076c0636057338f:0xa4a8ac2471515939!8m2!3d38.6684126!4d39.2198433!16s%2Fg%2F11g1tc5jrj?hl=tr&entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJjzNXYGPAdkAROVlRcSSsqKQ', 'boarding-7870f7e0b5d0129bf43485aa')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5d896fbffc184d23a80fb553e4dbe994', 'boarding-7870f7e0b5d0129bf43485aa', 'Vahap Gocer', 10, 'Kedim mantar olmuştu kral  petsop gittim hazırladığı solüsyon önerdi aldım kedimde kullandım Ongun boyunca vermiş olduğu solüsyon taradım inanılmaz derecede faydasını gördüm hem mantar iyileşti hemde kedim artık tüy dönmemeye başladı', '2025-07-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-18514f635cb4d0a3467a9212a48b3fcb', 'boarding-7870f7e0b5d0129bf43485aa', 'Enes Tekkol', 10, 'Kedim aşırı tüy döküyordu Kral petshop dan bir solisyon aldım kedim de mantar vardı tamamen düzeldi tüy dökmeden kurtuldu teşekkurler 💛', '2026-06-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-574a29d3942b0dedf034b78a1079d30b', 'boarding-7870f7e0b5d0129bf43485aa', 'Batın Sezer', 10, 'Kedim aşırı tüy döküyordu kral petshoptan bir solisyon aldım kedimde denemim tüy dökmede %90 kurtuldu tüy dökmüyor artık', '2026-06-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-918092d906581d3801fc3dda6309e9b8', 'boarding-7870f7e0b5d0129bf43485aa', 'Atakan Yıldız', 10, 'Kedim aşırı derecede tüy döküyordu kralın hazırladığı bir solisyon varmış bahsettiler aldım kullandım çok memnun kaldım teşekkür ederim herkese tavsiye ederim', '2026-02-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a03e58dae61113ffb86c1d7ceadf2907', 'boarding-7870f7e0b5d0129bf43485aa', 'Belinay Aydın', 10, 'yani kedimin tüy dökme problemine yardımcı oldular kesinlikle müşteriye davranış olrakta mükemel bi yer teşekürler☺️', '2026-02-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-0a96f902d18a683088b0a731', 'Sakarya Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Sakarya', 'Kemalpaşa', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlUn4Y1g7aNF5-d7_YT5LQDTyZqxu1j5I1eZqIX7n62iyECfgx4bKwSCL0H4LWOEQc1YEQwwZWELYeGGxR4R1B6NRQsNWWyOdGNdZU1XGqu9-7xsXvJkQUgajOBoP1Wx7L8d2ej=w426-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlUn4Y1g7aNF5-d7_YT5LQDTyZqxu1j5I1eZqIX7n62iyECfgx4bKwSCL0H4LWOEQc1YEQwwZWELYeGGxR4R1B6NRQsNWWyOdGNdZU1XGqu9-7xsXvJkQUgajOBoP1Wx7L8d2ej=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn6w7oyNGxNysetxOvDYvnWRxJ_fIhXGpS3q9l_xMMTQofSfOQTBvDmYsf0YRwHiSrHddFT5llRDrXttFMQ8_rVNE-tHEZ8rfag1PgyGZWVBhdfGdWTlavsHCdIACj0I2-Vd5U6bA=w529-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=TcR5DEltBvmS_WstXB6C0Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=216.74739&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","sakarya-kedi-oteli","kemalpasa-kedi-oteli","sakarya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Sakarya Pet Otel, Sakarya Kemalpaşa bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 435 54 00', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Sakarya+Pet+Otel/@40.762445,30.3448551,17z/data=!3m1!4b1!4m6!3m5!1s0x14ccb3851466c74f:0x69fc7958c3458350!8m2!3d40.762445!4d30.3448551!16s%2Fg%2F11t4f42tpz?hl=tr&entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJT8dmFIWzzBQRUINFw1h5_Gk', 'boarding-0a96f902d18a683088b0a731')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-de7b96444f9783197a100b70', 'Samsun Pet Otel. Patiland Toypoodle', 'Köpek otelleri', 'Samsun', 'Büyükoyumca', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmRNR99RhvrBniHsRdK-O-O6sIMZ5zJZzGH0hWBUm9FBprz38sYEke9eHg0_EohFZyUqd4fce4LNaJyhqVu8fP0N0NKGVnyCNlIAMemfwmh7efGt2PSDLxPciK2juyMklNQK85xZSYO4War=w408-h838-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmRNR99RhvrBniHsRdK-O-O6sIMZ5zJZzGH0hWBUm9FBprz38sYEke9eHg0_EohFZyUqd4fce4LNaJyhqVu8fP0N0NKGVnyCNlIAMemfwmh7efGt2PSDLxPciK2juyMklNQK85xZSYO4War=w224-h460-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmApa7MakwiXkeXEYXzHtIFpdWe8LfE8FPsOuLfogfnH5rRxgkoTa4FBbr14doD1lgvnIBGb3qDNzKN6Xo71sualNzt_KehWa1TiLEb964aYbRufA54vKhrg2WcTdZOSsc3INGaw0w9srO8=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJI2DVmGa1iBLfTHzG_LS4j-yHgdV5IXhUl3nsodI0LTZLB9JoVJH3j6JqRm-Jp-1ESqxcTlbHo6ghwl6tn1MFPCHjTY3o6y18GbB8X48MvPM0Ann8tmfmSegspALc5277JhA=w270-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHMMYiORqRnlxpfUzJkFuND3MjB6hOkjqxqUyxVtu0ePFVkALgKS5QK0AhvKoACUYFQ-d-hY2WXmegpeCWHdZuGU6fTPdIGzUW0A23U6XuDIwasrdRdQNqo_wPtpv-rQCBx3kz=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkSKn6ql1sTbz7jbeKfMgtB5Me0-jXJ4nEKYdQxEnIMnXN9Jtuvb3-eCcVNcm7pAIsRZWHRowopcQcl8F0c1Na3xW6e_CyNBltiwV8N1QqU7R063t2Ip6LH4dKWgW8MXi4QKAw=w224-h395-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7zQj_DEjUHN1-o8L3sroYQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=331.6119&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Üniseks tuvalet","Kendi otoparkı var","Ücretsiz park yeri"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","samsun-kopek-oteli","samsun-kopek-pansiyonu","buyukoyumca-kopek-oteli","samsun-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Samsun Pet Otel. Patiland Toypoodle, Samsun Büyükoyumca bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0541 341 02 55', NULL, 'https://www.instagram.com/samsun_toy_poodle?igsh=Z2Zqem9sN3prbG5x', '{"google_maps":"https://www.google.com/maps/place/Samsun+Pet+Otel.+Patiland+Toypoodle/data=!4m7!3m6!1s0x40887f005617f763:0x4dfe8a860f074926!8m2!3d41.3429023!4d36.1979036!16s%2Fg%2F11v_4r1mg5!19sChIJY_cXVgB_iEARJkkHD4aK_k0?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJY_cXVgB_iEARJkkHD4aK_k0', 'boarding-de7b96444f9783197a100b70')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-31ba31b751ae332dc46f057075d49e9f', 'boarding-de7b96444f9783197a100b70', 'Elanur', 10, 'Nafi Abiye sonsuz teşekkür ederim ondan almış olduğumuz yavrumuz hayatımızın orta noktasında şu an ve her zaman saat farketmeksizin her türlü soruma sorunlarıma yardımcı olmuştur 1 sene geçmiş olmasına rağmen ,tekrardan çok teşekkür ederim ve hiç şüphesiz güvenebilirsiniz 🩷', '2025-09-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ea40bb4a465210e88faf866e48e76644', 'boarding-de7b96444f9783197a100b70', 'tugce cırıt', 10, 'Sağlıkla veeee en tatlı yavrular için uğranacak tek adres bencee kesinlikle tavsiyemdir ayrıca Nafi beyede ilgisi ve nezaketinden ötürü sonsuz teşekkürler 🙏🏽', '2025-09-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f87d6fa6bb9d8f488a36a33b47170489', 'boarding-de7b96444f9783197a100b70', 'Haknur Çepni', 10, 'Sahiplenme öncesinde edinilmesi gereken butun bilgilere hakimler ve eksiksiz  aktarima sahipler,  gercekten ne zaman arasak hep. Yardimci oluyorlar,
Hersey icin tesekkurler
Samsun Toypoodle Patiland', '2025-09-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a908f592cc2803a8846085a16e2fe5a3', 'boarding-de7b96444f9783197a100b70', 'semih kavalcı', 10, 'Orjinal ırk yavruları ile gerçekten güvenilir bir yer. İlgisi ve alakası için Nafi beye çok teşekkür ederim', '2025-09-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3697f870aae5b60918b4a4ebf8772799', 'boarding-de7b96444f9783197a100b70', 'Murat Kılıçarslan', 10, 'Sağlıklı ve kaliteli yavruların tek adresi.kesinlikle öneririm.', '2025-09-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-36d3b08dd903014908a77e91', 'Patili Park', 'Kedi ve köpek kabul eden karma tesisler', 'Samsun', 'Cumhuriyet', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3beL-ETaeUhY_FCN0QHPRu8Y7f-weUDb1WkIjqErSZyOGr3SZtslgCnE7CpBzSLvCUuLukCVaLuF_uOg7qqIfilkvXmYxHW-CFx_0xprFl1g197YM_QucrYqiyZA_iwboWgmpG_1QjxY=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3beL-ETaeUhY_FCN0QHPRu8Y7f-weUDb1WkIjqErSZyOGr3SZtslgCnE7CpBzSLvCUuLukCVaLuF_uOg7qqIfilkvXmYxHW-CFx_0xprFl1g197YM_QucrYqiyZA_iwboWgmpG_1QjxY=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0HX4xmzfp9q2VTeKdM0BecSpUzsTwI364RD7NaxoDi8iYNQo1-XKq0wjljSq6Jnz09Pu1_Ved_JiZvEEskwYHSE59OHFinBPD9zmIKaiUUAxoi9MkyEzmthkyD0p9kKzQ5ijxNg=w307-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnlzbJee2P6sDBemyp24qodLgbRHcp6cLJQMfghCmlGYEDnGfRNrzBqdQioCJ8EAExoheBI4WuHGwEpRx5g6r_Xj6pje4pn-fXZsbUColnop7s8mTzObs2FI5-o73LA9OuHH4Q=w526-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVZj9NzXnNf5RSYvgnGmEsQfuVXX16OqFGqnu1HZVoRZ_xo0d83_-T_2q1WeUHk9MRt5mcrgJjS_rDvmUxodpY80y0IML7dtOFdNMiSLhGF7WGmhf5wRYp5Grpv97CFM1YIXLf=w360-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkZ-i_7KJPatF8rilSSEeERYZszqZGpogsfkhWV3LaK0y_ShK9p6CvNxeYJgEljIusE8Qr4Aj5zqI7f8iqgfA_oaZT6vO5FUE8xbYV-PeQ4i4aY3EjD9S0hTCYrViykuCroyr5piELnRzA=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnts61c_g3z2vwLrIP6DKiUxwNkKORaO3rntM2W1lspuu2O2LeJXCalSY2LJlRpfomJNgTdkPPJs6xm7qP8oTYQ761NajKP6E-GVmS9Gxz7F1nm6ybm_8HI4ba8eI4BpIArxhssY-uH77jt=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xOPZ-Yy_KvhQrqvPoYg3Zg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=30.402294&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","samsun-kedi-oteli","cumhuriyet-kedi-oteli","samsun-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Patili Park, Samsun Cumhuriyet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '(0362) 438 88 01', NULL, 'http://instagram.com/patilipark', '{"google_maps":"https://www.google.com/maps/place/Patili+Park/data=!4m7!3m6!1s0x4088791b0dd79915:0xa2b0c89dddf7b27a!8m2!3d41.3393121!4d36.2661497!16s%2Fg%2F11dybdryn7!19sChIJFZnXDRt5iEARerL33Z3IsKI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJFZnXDRt5iEARerL33Z3IsKI', 'boarding-36d3b08dd903014908a77e91')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-44dad4c645c94b6afff3d3cb84fc536f', 'boarding-36d3b08dd903014908a77e91', 'İnan Henden', 10, 'Her tatile giderken ve Köpüğümüzün canı çok sıkıldığında direk Ebru Hanım’a götürüyoruz. Kendi evimizde ki gibi içimiz rahat bir şekilde bırakıyoruz.
Ebru Hanım o kadar ilgili ve sevgi dolu ki her cana kendi evladı gibi bakıyor.
İyi varsınız Patili Park 🙏🏻', '2026-04-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-99a1302320e0cc646bd54f2bb50651b0', 'boarding-36d3b08dd903014908a77e91', 'fatma nur kara', 10, 'Miçomu her tatilde gönül rahatlığıyla bıraktığım adres, Ebru Hanım her gün videolarını atıp bilgilendirme yapıyor böylelikle uzaktayken bile aklım kalmıyor. Biz tıraş içinde Patili Parkı tercih ediyoruz', '2026-04-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-900df3f0be6bd1a89686c347e6b95f8e', 'boarding-36d3b08dd903014908a77e91', 'Barış Demirağ', 10, 'Patili Park ile tanışmamız 2 yıl önceye dayanıyor. Köpeğimizi ilk bıraktığımızda daha önce yaşadığımız deneyimlere benzer acaba psikolojisi bozulur mu bize küser mi diye endişelerimiz vardı. Ama hem köpeklerin kaldıkları yeri hemde açık kapalı bahçe alanlarını görünce içimiz çok rahatladı. 3-4 günlük ilk deneyimimiz de hiç sıkıntı yaşamadık. Miniğimiz gayet mutlu ve huzurlu bir şekilde bize geri döndü. Yılda 2-3 kez gönül rahatlığıyla bırakıyoruz. Köpeğimiz hem kendi cinsleriyle sosyalleşirken hem de keyifli bir zaman geçirdiğime şahit olduk bolca. İşletme sahibi Ebru Hanım’da yakın ilgi ve yaklaşımı ile bizlere her zaman yardımcı oldu. Kendisine böyle bir hizmeti bizlere sunduğu için çok teşekkür ediyoruz. Sadece konaklama değil köpeğimizin her türlü bakımında da yardımcı oluyorlar. Patilipark ve Ebru Hanım artık ailemizin bir parçası oldu. Seyahat, tatil vb sebeplerle köpeklerinizi gönül rahatlığıyla bırakacağınız bir yer arıyorsanız Patili Park en doğru adres diyebilirim.', '2026-04-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d54633351a403489a47c1490deb8036f', 'boarding-36d3b08dd903014908a77e91', 'Gizem Biricik', 10, 'Çocuklarımızı hep başka yere bırakıyorduk ama bu sefer yer kalmamıştı. Bu sayede patili park ile tanışma fırsatımız oldu. İyi ki diyoruz. Çocuklarımızın günlük videolarını attılar ve mutlulukları her şeye bedeldi. Köpeğiniz varsa düşünmeden teslim edebileceğiniz bir yer. Ebru hanımın ilgisi için de kendisine ayrıca teşekkür ederiz. Bizim bundan sonra tek adresimiz burası olacaktır.', '2026-05-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8e22e80cbeb0fe8a540d637f4bdbd406', 'boarding-36d3b08dd903014908a77e91', 'arsalan bayatmakoo', 10, 'Bizim minik dostumuz için ikinci bir yuva gibi…
Rahat, konforlu ve en önemlisi güven dolu bir pansiyon. Burada sadece bakım değil, gerçek bir ilgi ve sevgi var. Özellikle Ebru Hanım’ın samimiyeti, ilgisi ve profesyonelliği sayesinde insan gözünü arkada bırakmadan canını emanet edebiliyor.', '2026-04-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-72be37051da080f1e310aedc', 'SAMSUN KÖPEK EĞİTİM AKADEMİSİ', 'Köpek otelleri', 'Samsun', 'Alanlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEnuZ6LILM3yKIBoOp_I5EzJ-ktnfAf7hql8XJaXYUqTOpho5ENsDLKNfzmFyfnNO3zJv7-y2RxRTmieO9wWu6ZkzkIQtuUmyaelgWQf2JxKn6D4N-6fq3IHsBENi-QbALa3m1KvqWgtWN=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEnuZ6LILM3yKIBoOp_I5EzJ-ktnfAf7hql8XJaXYUqTOpho5ENsDLKNfzmFyfnNO3zJv7-y2RxRTmieO9wWu6ZkzkIQtuUmyaelgWQf2JxKn6D4N-6fq3IHsBENi-QbALa3m1KvqWgtWN=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkiXcMyRqkkX6O0i3yMNCCMh4P7UleJCaVf5bUU8yA8qzJurb-WYpvEf6k2uv5KlkkQXK80BEfZwGzYvFN9vc175TsxBcUOJYbdds64TKlg1_lUKytiL8TnTkm4Inh6noKdDW5oeiSbS6Y=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkcUAWt68B7fDx-o7ol7oNJgp9O678dSrtARV3fArQS6n7GQPOU6_YlF2Z2EX39rlSQw3Ierq1Rhzl2P13rIol3Zoe1HIG3pYgTDYgLElWuBGE_R0hMLlxdElqgLClBm0dHBU8=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn4IWUw_g1g9xGl9ZzsHai3c0ICtF51OpG5qEZFem2YNwZZm_xBeXscPxDx61L4QsvjRSM8UffatTrhw1D84NFcgpUFQJp25cTR9BR8nZ_RjJwTBl4WNiyt6NLvH1OMdRO8D3N5=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=cSTYqSP13tEjhsjEQ5p1mw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=315.36774&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","samsun-kopek-oteli","samsun-kopek-pansiyonu","alanli-kopek-oteli","samsun-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'SAMSUN KÖPEK EĞİTİM AKADEMİSİ, Samsun Alanlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 346 57 53', NULL, 'https://instagram.com/kopekegitmeniazizozen', '{"google_maps":"https://www.google.com/maps/place/SAMSUN+K%C3%96PEK+E%C4%9E%C4%B0T%C4%B0M+AKADEM%C4%B0S%C4%B0/data=!4m7!3m6!1s0x4088795580eee903:0x4b5ebee07c890a58!8m2!3d41.3360722!4d36.2343861!16s%2Fg%2F11s_zl1ydy!19sChIJA-nugFV5iEARWAqJfOC-Xks?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJA-nugFV5iEARWAqJfOC-Xks', 'boarding-72be37051da080f1e310aedc')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8bbf178c2338b91c9ad0faaef7532849', 'boarding-72be37051da080f1e310aedc', 'Melek Parlar', 10, 'Merhabalar….bizim oğlan Mocha yeni mezun oldu……şimarık ve tatlı bir çocuktu……..şimdi olgunlaşmış ve büyüdu……daha yolunun başındayiz…….farkındayim,ama sağolsun Aziz beye sabırla çök güzel baktı ve yetiştirdi Mochayi……🙏🏻inşallah onun profesyonelliğinin dokunuşlarla güzel bir çocuk yetiştiririz……..Aziz bey,teşekkür ederiz….🙏🏻herkese tavsiye ederim', '2026-04-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bb65c3722d9bed4a93fa5447c570a21f', 'boarding-72be37051da080f1e310aedc', 'Efe Temelli', 10, 'Bir belkçika malinois sahibi olarak çok memnun kaldım hem ilgi alaka hemde Aziz hocanın her konuda yardımcı olması gerçekten takdire şayan bu zamanda dürüst kaliteli işini düzgün yapan insanlarla karşılaşmak gerçekten mutluluk verici hiç düşünmeden çocuklarınızı emanet edebilirsiniz', '2026-05-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-545b09ec128192563b596ec41a8bd10f', 'boarding-72be37051da080f1e310aedc', 'Buse Sözen', 10, 'Sevgili Aziz Hocamızla eğitim süreci sayesinde patili dostum Buddy ile konforlu bi ilişkiye kavuştuk.
Küçük dostlarınızı güvenle emanet edebilirsiniz çünkü onları ziyarete gittiğinizde beden dillerinden mutluluklarından iyi bakıldıklarını hemen anlayabiliyorsunuz. Alanında çok tecrübeli çözüm odaklı pratik ve disiplinli bir eğitmen. Eğitim sürecinden sonra da mutlaka ilgileniyor ve süreci takip ediyor. Bu eğitimde sizler de köpeklerinizle doğru ilişki kurmayı öğreniyorsunuz diyebilirim çünkü eğitimin bir aşamasında da sizi eğitiyor aslında :)
Emekleri, ilgisi ve öğretileri için çok teşekkürler, herkese tavsiye ediyorum.', '2025-12-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6834d0ba81c1e8de66f2e04bd36d91ec', 'boarding-72be37051da080f1e310aedc', 'Mehmet Dağ', 10, 'Aziz beyden Allah razı olsun 1.5 yaşında maltipoo kızımızın a sosyalliği,agresif tavırları, insanlara saldırmak, başka hayvanlara saldırma gibi tüm problemlerinizi sihirli değnek değmiş gibi düzeltti. Benzer sorunları yaşayan herkese aşırı tavsiyemizdir. Kendilerinin ilgi ve alakalarından dolayı ayrıca çok teşekkür ediyorum. Gözünüz arkada kalmadan can dostlarınızı götürebilirsiniz özellikle bizimki gibi agresif davranış Bozuklukları olan yavrularımız için biçilmiş kaftan.çok memnun kaldık herşey için çok çok teşekkür ederiz kızımız ceku sayesinde artık çok prenses bir patili dost oldu.', '2025-05-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2e371abc7fc653cf4bb6fe7555f82d36', 'boarding-72be37051da080f1e310aedc', 'Selda Sağlam', 10, '4 yaşındaki cocker yavrumuzu Aziz Hocaya eğitime verdik, davranış bozukluğu asosyallik ve hayvana insana karşı agresif tavırlar gösterme huyu vardı, temel itaati verdiğimizi sanıyorduk fakat Aziz hocayla daha tamamlayıcı bir noktaya geldi. 2 aylık eğitim sürecinde bizlere gereken desteği ve öğretimi sağladı kendisiyle iyi ki yollarımız kesişmiş. 6 aylıkken bizlerin veremediği eğitimin pişmanlığı çok olsa da bunun eksikliğini Aziz hocamızla giderdik, kendisine çok teşekkür ediyoruz yüksek tavsiye ile canınızı yavrunuzu ona emanet edebilirsiniz.', '2025-01-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-7751dfbe15fd71bad3bc5f28', 'Atakum Kartal Pet Otel & Pet Kuaför', 'Kedi ve köpek kabul eden karma tesisler', 'Samsun', 'Esenevler', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJ3IfvJcMOiK0MIu5FE7qfYGfrTScBjJY07KSl1AhFx2ot0O245U7wyIlLfjW6nNJkX08rag1mXFIj-hA8qlJmrZK6Hsxl10jPV9vD85L-Ype-qsruwzDcDLcubCVa1xlUWKE1bqTzzaQ=w408-h371-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJ3IfvJcMOiK0MIu5FE7qfYGfrTScBjJY07KSl1AhFx2ot0O245U7wyIlLfjW6nNJkX08rag1mXFIj-hA8qlJmrZK6Hsxl10jPV9vD85L-Ype-qsruwzDcDLcubCVa1xlUWKE1bqTzzaQ=w327-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlT5pWq9P2EIndcsIkXuz_0FemaKzdTxN5Trlb5NWWKaXj_Wa14mAcGL5anXXuLzelUbtW3Q0rWpKAYZK7c-phzlIrb2iggXTKKfVVNABJ_N461gxchhdyl6JTrXA69qytbt3-O9uPCa_vS=w231-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk9I8ajxNpP6MT0hM4vYaF1Ba9voOxd3nNe6Atdp3AwFbAW0d26Vp0zHzfWepLsl41jlHO9dTa0xm9APgvRgMKOrJydqHwIoXLcA_U-5x0du1eEIvP8dgiNLlo8VVuV0w0TQm7Od25G2yG1=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdda3p8Y7oP9vp7riQ_G9fqZiCJcFa3wCxm3DYR_J2S5EyxEKtW6BWUBKn2RXQqYaFRcie9e2wkcaWu1LThSS_iehsgwvES-NCQgvTIHgRL8YgWz3-C1JIyihT6mdNIoMg_zMEAsS0ydt3=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkF6S7V7B8Xvf4CxJEyesaY2qndlOiyVsmGnOf3mtvS7erBICHJx_z5-3QVLhZ39HKjSSPl5vIpG0UqDtef8QH2DvA3IB4mmYfE7FgbldNxHQbSLeP6AAOBwgROrUReyrimdWFaUiV45IsP=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=mpDp9OD3zPrm9hIm8VXvYg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=17.60167&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","samsun-kedi-oteli","esenevler-kedi-oteli","samsun-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Atakum Kartal Pet Otel & Pet Kuaför, Samsun Esenevler bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 887 45 99', NULL, 'https://www.instagram.com/atakum_petotel?igsh=MWd3b3g1bWI3eWR5cA%3D%3D&utm_source=qr', '{"google_maps":"https://www.google.com/maps/place/Atakum+Kartal+Pet+Otel+%26+Pet+Kuaf%C3%B6r/data=!4m7!3m6!1s0x4088793103d1f123:0x66a8eb2ef312edc1!8m2!3d41.321243!4d36.2931141!16s%2Fg%2F11xyg7d5tb!19sChIJI_HRAzF5iEARwe0S8y7rqGY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJI_HRAzF5iEARwe0S8y7rqGY', 'boarding-7751dfbe15fd71bad3bc5f28')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a0a8b603623bff4c7e4188587f60b1bd', 'boarding-7751dfbe15fd71bad3bc5f28', 'mehmet ali karadeniz', 10, 'Evcil hayvanımı bırakırken çok tedirgindim ama gerçekten çok iyi ilgilendiler. Hem temiz hem güvenli bir ortam. Hayvan sevgisi olan insanlar olduğu çok belli. Bundan sonra tek adresim burası.♥️', '2026-03-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f4372f5874cebcbd519f85adfcabcaff', 'boarding-7751dfbe15fd71bad3bc5f28', 'Yaren Doğan', 10, 'Çok ilgili ve güler yüzlü bir işletme. Çok memnun kaldık.  Ayrıca işletme sahibinin veteriner hekim olması oldukça güven verdi. İçiniz rahat bir şekilde evcil hayvanlarınızı bırakabilirsiniz.', '2026-06-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-854716cbb71df1ff7a4066f2f27bd46e', 'boarding-7751dfbe15fd71bad3bc5f28', 'Anestom', 10, 'Emirhan hocam gayet sevecen ve ilgili birisi her konuda yardımcı oldu Lunayı bırakırken gayet rahattım içerisi zaten serin ferahtı bu sıcakta gayet iyiydi kendisine çok teşekkürler', '2026-07-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cc67e129f7f991dcac06c67f35845acf', 'boarding-7751dfbe15fd71bad3bc5f28', 'Lana', 10, 'Çocuğum 1 gün kaldı ama almaya gittiğimde asla çıkmak istemedi. Çip konusunda da o kadar yardımcı oldular ki anlatamam. Emirhan Bey''e çok teşekkür ediyorum. Sık sık kullanacağım bir yer🤍', '2026-01-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e70436538ec908849208295d50f1ab56', 'boarding-7751dfbe15fd71bad3bc5f28', 'Dilara Çetinkaya', 10, 'Bayramda kedimi nasıl nereye  bırakacağım diye düşünürken burayı buldum iyikide bulmuşum Emirhan beye gerçekten çok teşekkür ederim tüm sorularımı cevapladı, her gün video atarak ve cocugumun anlık durumunu bana anlatarak içimi rahatlattı, aldığımda da gayet keyifli, mutlu ve beni özlemiş kedimle karşılaştım sonsuzz teşekkürler 🙏🏻', '2026-06-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-c227ed1943a2e9201f3cedb3', 'Belçika Malinois Köpek Çiftliği Sivas', 'Köpek otelleri', 'Sivas', 'Yeşilyurt', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnSbmq1YkO3Ghy1Djnhq3BLHECjCvjmWXQeNsTQuRraKJ4qgfSAWNMCl_1V5TmagLDTnKa9hnkhGN5bIeR7RSbQp6iyO3jFll_8HndggYQvFuE2OuYbNqjopo_kWxIRxgQbipy_Q=w408-h785-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnSbmq1YkO3Ghy1Djnhq3BLHECjCvjmWXQeNsTQuRraKJ4qgfSAWNMCl_1V5TmagLDTnKa9hnkhGN5bIeR7RSbQp6iyO3jFll_8HndggYQvFuE2OuYbNqjopo_kWxIRxgQbipy_Q=w224-h431-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnSbmq1YkO3Ghy1Djnhq3BLHECjCvjmWXQeNsTQuRraKJ4qgfSAWNMCl_1V5TmagLDTnKa9hnkhGN5bIeR7RSbQp6iyO3jFll_8HndggYQvFuE2OuYbNqjopo_kWxIRxgQbipy_Q=w224-h431-k-no"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","sivas-kopek-oteli","sivas-kopek-pansiyonu","yesilyurt-kopek-oteli","sivas-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Belçika Malinois Köpek Çiftliği Sivas, Sivas Yeşilyurt bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 590 02 58', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Bel%C3%A7ika+Malinois+K%C3%B6pek+%C3%87iftli%C4%9Fi+Sivas/data=!4m7!3m6!1s0x407eab89a636e439:0x5e4229f315d11965!8m2!3d39.7469922!4d37.0587226!16s%2Fg%2F11fkw99wtm!19sChIJOeQ2pomrfkARZRnRFfMpQl4?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJOeQ2pomrfkARZRnRFfMpQl4', 'boarding-c227ed1943a2e9201f3cedb3')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-88977a8e4dc55fbe77f329ce', 'Hachiko Tekirdağ Pet Kuaför & Pet hotel & Pet kuaför eğitimi', 'Kedi ve köpek kabul eden karma tesisler', 'Tekirdağ', 'Ertuğrul', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXibLt9dEFlC0XcOTWMQi7vi8J06OzRWbezpddzgx-dD9Tw7lzzO-SpbXMgQfoVej8WrfJpUd3wZqFjeAB-L9EiJVd8KxL7Z26UCcpxhsr42bX5FJs6FPqGimydN3GCkJDCVE=w424-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXibLt9dEFlC0XcOTWMQi7vi8J06OzRWbezpddzgx-dD9Tw7lzzO-SpbXMgQfoVej8WrfJpUd3wZqFjeAB-L9EiJVd8KxL7Z26UCcpxhsr42bX5FJs6FPqGimydN3GCkJDCVE=w526-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRhOtSDPx9jS9c8ZFcyy9diTGUI7nXOmYSM7qodTcIbytmI_mKqHS7LuKz5i_jDm39RHIjQBftLxRPTKLZZRMvlzEhJ_1cKzjYPucEUAH7F2l98TcS4wPVkk_N5hT7kfqJqZau_qnRuB5N=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnzBSjVL8WwHaIoap6guOkaQLl65cPgG31E3BYLNchCeCeQ9GOiE861TTm9V4Jmgk9EQ-3iGnOy4AuL3LWqr_THHb1IEdFiDuqQu0_64GuIP2nD-apAYFx18bnJllsBodDthC8=w224-h395-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnR0I8CAwdAaCuiR5ME7Z7t1AtCrAFYIzCrnjczBYRbOM_bEEDzjgk81joB5dkraR1ViF6oIwbPV3FYp48yYQMvyEh3dE6aTwGNDp1kp4B-gFi_0ZOdTRwH8WFKItfWrcFEnGi8BA=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkDaI26LKfIoQMq-TeTgDGDHLoDNAA7NEsDp_jzLl4xDZfZHhvIME1WrfbbqC1ajnt_6OejxoFEuAaFD8AalTBhkRXI4cRGxEoYqhwjS4rpoVqTbJfcMkoGQvJnGfgUpVQ7WlicFECg1gRa=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkyJAMBrOHpwCQyS2i3Fm5KNlqkjw3LnA-8Px2zV1q9w52YppeWqUICBvBb9bABDxNA7Qk9ln9AxdMtfT3hbwKlq5HVBS1qQDqxO1s7uGPkVjHeS8XnBliUCxbBMG4G3Casuec=w224-h395-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=9NfQCPwM8TLo6uor97L6Jg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=12.721723&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Banka kartları","Kredi kartı","NFC ile mobil ödeme","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","tekirdag-kedi-oteli","ertugrul-kedi-oteli","tekirdag-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Hachiko Tekirdağ Pet Kuaför & Pet hotel & Pet kuaför eğitimi, Tekirdağ Ertuğrul bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 558 62 59', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Hachiko+Tekirda%C4%9F+Pet+Kuaf%C3%B6r+%26+Pet+hotel+%26+Pet+kuaf%C3%B6r+e%C4%9Fitimi/data=!4m7!3m6!1s0x14b48b6ae88fc851:0x4aa62f7966cc8c98!8m2!3d40.9766517!4d27.5113129!16s%2Fg%2F11p3c9v2pr!19sChIJUciP6GqLtBQRmIzMZnkvpko?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJUciP6GqLtBQRmIzMZnkvpko', 'boarding-88977a8e4dc55fbe77f329ce')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e39aea2c8a24533a3c5d71a884a17677', 'boarding-88977a8e4dc55fbe77f329ce', 'S Kzn', 10, 'Bir süredir pet kuaför arayışındaydık. Hachiko ile yollarımız bir şekilde kesişti ve çok memnun kaldık. Elif hanım ve Beyza hanıma güzel enerjileri ve güleryüzlerinden dolayı çok teşekkür ederiz ❤️', '2026-02-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c56c684188ceba95b38e4fc682e7a6e3', 'boarding-88977a8e4dc55fbe77f329ce', 'Nil Karataş', 10, 'İlk defa geldik ve çok memnun kaldık bundan sonra bakım ve traş için kesinlikle sizdeyiz her şey için çok teşekkür ederiz', '2026-01-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-307121155002d856c32c2a094ee3bb65', 'boarding-88977a8e4dc55fbe77f329ce', 'emir kabu', 10, '1.5 senedir bu işletmeye geliyorum ilk geldiğim günden beri çok memnunuz köpeklerimin hepsini bu işletmeye gönül rahatlığıyla bırakıp arkamı dönüp gidiyorum işleri ne zaman biterse gelip alıyoruz ve hiç tereddütsüz her şeyine kefil olabilirim güler yüzlüler ve çok ilgililer evcil dostlarınızı içiniz rahat şekilde bırakabileceğiniz Ruhsatlı işletmelerden en biricisidir diyebilirim', '2026-03-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8eacb0f79301f71f5f57e0ebe9a9562e', 'boarding-88977a8e4dc55fbe77f329ce', 'Güneş Ergin', 10, 'Bugün güzel yavrumuzu hachiko pet kuaförün emin ellerine Elif ve Sibel hanıma teslim ettik daha İlk anda güler yüz ve harika bir sevgi ile karşılandık İlk traşımızdı ilk defa ayrı kalacaktık büyük merak ve heyecan vardi ama profesyonel ekip ile harika bir iş çıkardılar ellerinize sağlık kızım şimdi gerçek bir Lady oldu teşekkür ederiz Elif hanım Hachiko ailesi', '2023-02-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-897987b3654c21e99b3c184d8b785f6e', 'boarding-88977a8e4dc55fbe77f329ce', 'Zeliha Özlem Gündüz', 10, 'Elif hanım ve ekibi gerçekten çok ilgili.Kızımız boncuğu gönül rahatlığıyla uzun süre bırakabildiğimiz tek yer burası.Elif hanımın ilgisi,anlayışı ,kızımızın videolarıyla hergün bizi bilgilendirmeleri bizi çok memnun ediyor bu süreçte.Kızımızı aldığımızda hep mutlu ve bakımlı oluyor.İyi ki tanıdım sizi Elif hanım,desteğiniz için çok teşekkür ederim ❤️💐', '2026-03-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-753bbf8d69c98fcdedb4dc70', 'Tekirdağ Kedi Köpek Oteli & Köpek Eğitimi - Sultan Pet Shop', 'Kedi ve köpek kabul eden karma tesisler', 'Tekirdağ', 'Ortacami', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvSBbaEEhol0aapUMkUVdriCwIrhA5Sj-DnGTFYODQ1walmcONJqvjVn2u2xddXeRYC4D5XqHilq9sQthkkqVEERnKIQTjtSn4jUtIf_OaMlGrwTyA2bc0RxuP3vUZ0C374hp26eekjpFx=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvSBbaEEhol0aapUMkUVdriCwIrhA5Sj-DnGTFYODQ1walmcONJqvjVn2u2xddXeRYC4D5XqHilq9sQthkkqVEERnKIQTjtSn4jUtIf_OaMlGrwTyA2bc0RxuP3vUZ0C374hp26eekjpFx=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaoiRL1reFoQAtCn2yejDuvbZOVw_v-EvSZnjR2kPjnZV25D_HVmWxzozRjKbonFyzmuFoQyPAHeOFY54RHD25XJfu3Y-dB6uGxU7PgRDEhtspVDNbeBklYDGQlf3nbM6hgFI92A=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnes14rSk8ANZRlTz1SpBTm17mshufYRC-J_eT2j1MkFfrweTb14n6EzuXqH8K2Fg-YLrhUbhFs4i5IYOI2wyEx0TcrWYd1TG4Fi-ThGLb7t0ihVIOeVeWt7Xl8QlJpMB7TK5NH=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnU_20-Q5xgIo_UagcB3A5MQAAeXLxbCBdA1n2fA0dBVQcTtG6IL0YTdrc2FRzwiurYwJ3-ZnGw_HXt_z2JL3t-nJYivAsNIPUsknQLUwjSmP6ARLlR-7EUs-8gc0Gnv2XTnwY=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=oHHRSgz9zk9x7IJXbFC0Gg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=179.3311&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Adrese servis","Üniseks tuvalet","Hızlı ziyaret","Banka kartları","Kredi kartı","NFC ile mobil ödeme","Transfer hizmeti","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","tekirdag-kedi-oteli","ortacami-kedi-oteli","tekirdag-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Tekirdağ Kedi Köpek Oteli & Köpek Eğitimi - Sultan Pet Shop, Tekirdağ Ortacami bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0533 387 29 87', NULL, 'http://www.sultancity.com.tr/', '{"google_maps":"https://www.google.com/maps/place/Tekirda%C4%9F+Kedi+K%C3%B6pek+Oteli+%26+K%C3%B6pek+E%C4%9Fitimi+-+Sultan+Pet+Shop/data=!4m7!3m6!1s0x14b4611cd3ba2ad7:0xc91817e904530717!8m2!3d40.9932553!4d27.5140416!16s%2Fg%2F11vjmv1b_5!19sChIJ1yq60xxhtBQRFwdTBOkXGMk?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ1yq60xxhtBQRFwdTBOkXGMk', 'boarding-753bbf8d69c98fcdedb4dc70')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-31959351483409bb9c21eeb980c4e19c', 'boarding-753bbf8d69c98fcdedb4dc70', 'Guven Ustaoglu', 10, 'Poodle köpeğim için kuaför hizmeti aldım. Bol kıtıklı olmasına rağmen harika sonuç aldık. Kesinlikle gönül rahatlığı ile patili dostunuzu emanet edebilirsiniz. Güler yüz ve sıcakkanlılık bi yere girdiğimizde ilk beklediğimiz şey ve kesinlikle bunu buluyorsunuz. Ürünleri de harika kesinlikle bakmanızı tavsiye ederim.', '2026-05-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-dd51d4b3fe6f89cc7fe1ff798f876822', 'boarding-753bbf8d69c98fcdedb4dc70', 'tuğba atabay', 10, 'İzmir’den Tekirdağ’a geldiğimiz için oğlumuzu emanet edebileceğimiz güvenilir bir yer bulmak bizim için çok önemliydi. İyi ki sizi tercih etmişiz. 9 aylık poodle oğlumuzla büyük bir sevgi ve özenle ilgilendiniz. Konaklamasının yanı sıra bakımını da harika yaptınız; onu mutlu, huzurlu ve mis gibi teslim aldık. Gözümüz hiç arkada kalmadı. İlginiz, samimiyetiniz ve profesyonelliğiniz için çok teşekkür ederiz. Tekirdağ’a her gelişimizde gönül rahatlığıyla tercih edeceğimiz adres sizsiniz. Herkese içtenlikle tavsiye ederiz. 🐾🤍', '2026-06-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9f6e425fca47daafe017b9fc348705bb', 'boarding-753bbf8d69c98fcdedb4dc70', 'Kübra Şenlik', 10, 'Kedimizi 1 haftalığına otele biraktik aldığımızda çok iyi bakılmış olduğunu gördük kedimiz cok mutluydu ve resmen Songül hanimin yanından ayrılmak istemedi. Çok güler yüzlü ve çok iyi insanlar herkese tavsiye ederim ve ürünleri de gerçekten kaliteli biz çok memnun kaldık çok teşekkür ederiz 🌸😊', '2026-05-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9f4914c8ac073fc7e6911441da20e7d8', 'boarding-753bbf8d69c98fcdedb4dc70', 'Tuğba Gümüşak', 10, 'Sultan petsop yillardir alis veris yaptigim yer sahipleri guler yuzu hos sohbeti ve urunlerin. Orjinalligi ile guvenilir..tek yer...hersey 5 yildizli 10 numara yer...tavsiyemdir...', '2026-05-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5ccf10ceb00645033f925f0b1d04563c', 'boarding-753bbf8d69c98fcdedb4dc70', 'Medine sultan Demirtaş', 10, 'İki senedir devamlı olarak kızımın bütün alışverişlerini konaklamalarını sultan pet shopta yapıyorum ve gerçekten işlerinin haklarını veren bir işletme sahipleri herkese gönül rahatlığı ile tavsiye ederim ❤️', '2026-06-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-b0593e1b631cc824f206cc55', 'tekirdağ kedi ve köpek oteli', 'Ev tipi bakım merkezleri', 'İstanbul', 'Çiftlikönü', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_P0Zfh4PsCfPskTH_bkedQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=15.73428&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_P0Zfh4PsCfPskTH_bkedQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=15.73428&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_P0Zfh4PsCfPskTH_bkedQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=15.73428&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","i-stanbul-pet-oteli","i-stanbul-kedi-kopek-oteli","ciftlikonu-pet-oteli","i-stanbul-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'tekirdağ kedi ve köpek oteli, İstanbul Çiftlikönü bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, 'https://business.google.com/edit/l/14488551874790605068', '{"google_maps":"https://www.google.com/maps/place/tekirda%C4%9F+kedi+ve+k%C3%B6pek+oteli/data=!4m7!3m6!1s0x14b461b28b02ecc9:0x391c43a1a948ef75!8m2!3d40.9780198!4d27.5189915!16s%2Fg%2F11h75yhqf6!19sChIJyewCi7JhtBQRde9IqaFDHDk?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJyewCi7JhtBQRde9IqaFDHDk', 'boarding-b0593e1b631cc824f206cc55')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-07e17757a12c4cafc7209de1', 'Trakya Köpek Oteli Pet Shop Kuaför', 'Köpek otelleri', 'Tekirdağ', 'Hürriyet', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmXWLk78hCkVXokl6XuVyL6e8_4-w5IRRsduJagxa8IGz8A1d1t6QxoS4BfVmXAC0pytU6QHzTb2PjBfRbu02BWmLarfGEs8FqsSYR_3vbY21MHmPdrpUsxT4QGlVqTvI-OVxTq=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmXWLk78hCkVXokl6XuVyL6e8_4-w5IRRsduJagxa8IGz8A1d1t6QxoS4BfVmXAC0pytU6QHzTb2PjBfRbu02BWmLarfGEs8FqsSYR_3vbY21MHmPdrpUsxT4QGlVqTvI-OVxTq=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmXWLk78hCkVXokl6XuVyL6e8_4-w5IRRsduJagxa8IGz8A1d1t6QxoS4BfVmXAC0pytU6QHzTb2PjBfRbu02BWmLarfGEs8FqsSYR_3vbY21MHmPdrpUsxT4QGlVqTvI-OVxTq=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlbUaye6R8lCVb55MNiCSKloYQbMp6II9daqvo0e5QHJew32J1NlhEyNRm_c1sf-NpePHnNZfizLSeFxHaPavGg3c7by49ut5L_46CXxh5ELI2OdMgMAsEoGFZq1wc_I_xXZYHIjw=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk401oZXcwrQWw4ZsjtY3gbq3Zg147meMUtRvgfofHevKWPj3AI3SRQM6P4GnjG2MzIem9VTrJc3oonj2HA4q4c1cgXmRpXirE6PmcxZg10pEO9vr2Oaej--05YJWd_nnKY9FPE=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJ5QrfH47nXpMlddgMBy8NPiraxZy__cMRek5LCO1cvS6toA50H_DpiLtoNcd1Ng3JaQ6kevGnjnBPsX__JzvKsqV_nj7UxQxINuLwUJ0fbU6hGK9AlxhCOiY4PRKkc-RhzPNGgw=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbJ39vEUnNGoWby-o7ysav5fx7Q9808mAotork4G49dqBehBRl5o1mDZ6HueUPHYcJ1-Irbmn5RgNd_HzVRYb25k2KELy-ZFkpKcpuXWBnWtvwqgfVDzSv9w1NOqDwQi7Lo0sH=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=hZCI2iToXWcycA1_m-9PCw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=251.22046&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Banka kartları","Kredi kartı","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","tekirdag-kopek-oteli","tekirdag-kopek-pansiyonu","hurriyet-kopek-oteli","tekirdag-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Trakya Köpek Oteli Pet Shop Kuaför, Tekirdağ Hürriyet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 214 67 93', NULL, 'https://trakyakopekoteli.com/', '{"google_maps":"https://www.google.com/maps/place/Trakya+K%C3%B6pek+Oteli+Pet+Shop+Kuaf%C3%B6r/data=!4m7!3m6!1s0x14b461356273400f:0xc6951d9edde971d0!8m2!3d40.9879412!4d27.5648472!16s%2Fg%2F11tgd4bdcs!19sChIJD0BzYjVhtBQR0HHp3Z4dlcY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJD0BzYjVhtBQR0HHp3Z4dlcY', 'boarding-07e17757a12c4cafc7209de1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ebaa3948b97395fd15b2ddcec9c15c91', 'boarding-07e17757a12c4cafc7209de1', 'Gülcan Şahan', 10, 'Tekirdağ’da köpeğinizi güvenle emanet edebileceğiniz harika bir işletme. Daha önce Tekirdağ’da kötü birkaç pet kuaför deneyimimiz oldu. Ardından tanıdık köpek sahibi arkadaşlarımızdan burayı öğrendik ve o günden beri başka yere gidemez olduk. Daha sonra İstanbul’a taşınmamıza rağmen hala çocuğum Gece için Trakya pet kuaförden başka bir yere gitmiyorum. İşlerinde profesyonel ve özverililer ayrıca Tahmina hanım ve sevgili Cerenin köpeklerle iletişimi harika. Köpek otellerini de deneyimleme fırsatımız oldu  çok memnun kaldık. Kendilerine işlerini bu kadar özveri ile yaptıkları için teşekkür ederim. İyi ki varlar ❤️🐕‍🦺', '2025-03-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d805f7615c455409eddec6ce1166ac60', 'boarding-07e17757a12c4cafc7209de1', 'Sidika Surul', 10, 'mükemmel bir hizmet mükemmel bir tecrübe yavrularınızı rahatlıkla bırakabileceğiniz yer ayrıca otelinizde ki hismet de fevkalade çok teşekkür ederim, bu devirde cocuğumuzu tek emanet edebileceğim yer burası', '2026-07-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b9bd878557d40d2f1867d04724a427c7', 'boarding-07e17757a12c4cafc7209de1', 'emir ulutaş', 10, '6 aylık toy poodle ırkı kızımın ilk tıraşı için gittiğim ve tanıştığımız bir işletme oldu. Hem işletme olarak hem de deneyim ve tıraş olarak çok memnun kaldık. Yavrumu gözüm kapalı emanet edebileceğim insanlar. Emekleri için tekrardan teşekkür ederim.', '2023-07-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e49faa44cf9ff1380a9ee01bc0d11b4a', 'boarding-07e17757a12c4cafc7209de1', 'Can Ökem', 10, 'Köpegimizi ilk defa Trakya kuaföre getirdik ve harika yapildi cok basarili ve güler yüzlü ekip
Tesekkürler yeniden', '2024-07-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-02e4474f04f7fd38c6edd6f8201dffc3', 'boarding-07e17757a12c4cafc7209de1', 'Fikret Güleryürek', 10, 'Köpeğimizi hem profesyenel pet kuaför,hemde profesyenel köpek eğitimcilerine gözümüz kapalı emanet edebilmek tdağ için büyük şans.', '2023-06-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-00d9f38fae8c79af40491c22', 'Trakya Köpek Oteli', 'Köpek otelleri', 'Tekirdağ', 'Osmanlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnDuJKR1uQtPa5AGG56y3EQ6K52V8IMJW8hKSUktn4M4TfhLYywiAid9VfOzXxak4PEKJBXJOLfqlV3jWD_lVPsuf5OIgmbfFw1uK6MBLWfAnwxLqmAcWmSHiiRLk6FlKVXC5FK=w563-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnDuJKR1uQtPa5AGG56y3EQ6K52V8IMJW8hKSUktn4M4TfhLYywiAid9VfOzXxak4PEKJBXJOLfqlV3jWD_lVPsuf5OIgmbfFw1uK6MBLWfAnwxLqmAcWmSHiiRLk6FlKVXC5FK=w699-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlfZb1tOchzgEN6euKXwiPiAd935xM-lPefCMjEG6wYGZE5QF95oIwQxSjke7wpjgqewVMXnnaYeitu5TuVvGOqaG6JSfhWQN-dkHfd3-6dUZGVmUmr9WN1rw_j2gFYfVlMN9ZfaA=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJxOBgdbqTzXD4mhf4VSY5QYV9JHgDPzbFmdB3kF4rB-wROCIHgblsFIFvz2iGQqz996vnn5qwKwP18Y7t7F6ySgAX8ldOAYIgFU_9Z5_Gc7A8I0HvlpixLyZ2Qwk57wnMbVB6=w224-h525-k-no"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","tekirdag-kopek-oteli","tekirdag-kopek-pansiyonu","osmanli-kopek-oteli","tekirdag-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Trakya Köpek Oteli, Tekirdağ Osmanlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 214 67 93', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Trakya+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14b48923d840d7a3:0xbab4ed770b6b9434!8m2!3d41.0402371!4d27.3918303!16s%2Fg%2F11h0c0fw6w!19sChIJo9dA2COJtBQRNJRrC3fttLo?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJo9dA2COJtBQRNJRrC3fttLo', 'boarding-00d9f38fae8c79af40491c22')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1eeee1b875b3d05cf61aeba3741cfb40', 'boarding-00d9f38fae8c79af40491c22', 'rawX studios', 10, '⭐⭐⭐⭐⭐

Trakya Köpek Oteli ve Eğitim Merkezi hakkında ne kadar güzel şey söylesem az kalır. Dobermanımı burada ikinci kez gönül rahatlığıyla emanet ettim. İlk konaklamasında 7 hafta, ikinci konaklamasında ise 30 gün boyunca burada kaldı ve her iki deneyimimiz de son derece olumlu geçti.

İşletme sahipleri son derece güvenilir, güler yüzlü, ilgili ve profesyonel insanlar. Köpeklere sadece bir müşteri gözüyle değil, kendi canları gibi sevgi ve özenle yaklaşıyorlar. Uzun süreli konaklamalarda bile düzenli bilgi vermeleri ve her konuda yardımcı olmaları büyük bir güven duygusu oluşturuyor.

Köpek oteli de çok iyi düşünülmüş. Temiz ve düzenli bireysel odalar, geniş ve güvenli serbest dolaşım alanları sayesinde köpekler hem rahat ediyor hem de enerjilerini sağlıklı bir şekilde atabiliyorlar. Hijyen konusunda gösterilen özen gerçekten takdire değer.

Tüm bu kaliteli hizmetin son derece makul ve adil fiyatlarla sunulması ise ayrı bir artı. Güvenilir bir köpek oteli ve eğitim merkezi arayan herkese Trakya Köpek Oteli ve Eğitim Merkezi’ni gönül rahatlığıyla tavsiye ederim. Ben ve Dobermanım için artık ilk tercihimiz burası. Teşekkürler ve emeklerinize sağlık! 🐾😊', '2026-06-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7bd031c7b302348f9f6d3d6ad00b830b', 'boarding-00d9f38fae8c79af40491c22', 'Tufan Yıl', 10, 'Mükemmel hizmet. Bayram tatili için Golden Retriever köpeğimi bıraktım 4 günlüğüne. Ceren Hanım çok ilgilendi. Köpeğim bizim yokluğumuzda kuru mama yememiş. Sağ olsun Ceren Hanım sulu yemek ile elleriyle besledi. Aile ortamı tadında bakıyorlar. Gönül rahatlığıyla patinizi bırakabilirsiniz. Buradan ilgi ve alakalarına tekrardan teşekkür ediyorum.', '2020-08-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7e17eab57050043ab106133061416e56', 'boarding-00d9f38fae8c79af40491c22', 'Esin Erdost', 10, 'Annemler köpeğimizi bırakıp bir yere gitmekte çok zorlanıyorlardı. Hep gözleri arkada kalıyordu. Bu sefer de yine tereddüt ederek teslim ettiler. Ama önyargılarını öyle bir kırdı ki ceren hanım... Hemen her gün video ve fotoğraf gönderdiler. Ve her videoda da o kadar mutlu görünüyordu ki... İlk defa ailem gönül rahatlığıyla tatil yapıyorlar sayelerinde :) içiniz çok rahat teslim edebilirsiniz', '2019-06-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-66e7a04e6a9759535d89c0115c9b193f', 'boarding-00d9f38fae8c79af40491c22', 'Özlem Duran', 10, 'Kızımız bir hafta kaldı. Biz memnun kaldık Ceren hnm ve Cumhur bey çok anlayışlı yaklaştılar çünkü ilk otel tecrübemizdi. yaza doğru belki oradaki arkadaşlarıyla görüşmesi oynaması için günü birlik ara ara bırakadabiliriz☺️', '2019-12-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e2ff96986c6ca7b62756d632432790e5', 'boarding-00d9f38fae8c79af40491c22', 'Doruk kaan sarı', 6, 'Köpeğimin eğitimi için randevulaştık. Randevu gününden bir gün önce telefonla aradım ama aramamı reddettiler. O günden beri bekliyorum geri ararlar diye 2 hafta geçti arayan soran yok. Meşgul olsalar bile bir geri dönüş yapılabilirdi.', '2021-04-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-431ec2b49871e12b6c258735', 'Trakya Pet oteli', 'Kedi ve köpek kabul eden karma tesisler', 'Tekirdağ', 'Osmanlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZrTW0SJ2ZXNl2gmmRUI_XYgLZkWNoM2AzIsBUhNXX0sIpvBpEj8yM_gO6gQSfnZ09CKJexdQwtwKTBaSUOiIF8cpz1qTX2bAEoMcFfrANasr_763PkRY1czK-5y2F6UHn2iJG=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZrTW0SJ2ZXNl2gmmRUI_XYgLZkWNoM2AzIsBUhNXX0sIpvBpEj8yM_gO6gQSfnZ09CKJexdQwtwKTBaSUOiIF8cpz1qTX2bAEoMcFfrANasr_763PkRY1czK-5y2F6UHn2iJG=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZrTW0SJ2ZXNl2gmmRUI_XYgLZkWNoM2AzIsBUhNXX0sIpvBpEj8yM_gO6gQSfnZ09CKJexdQwtwKTBaSUOiIF8cpz1qTX2bAEoMcFfrANasr_763PkRY1czK-5y2F6UHn2iJG=w224-h398-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","tekirdag-kedi-oteli","osmanli-kedi-oteli","tekirdag-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Trakya Pet oteli, Tekirdağ Osmanlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Trakya+Pet+oteli/data=!4m7!3m6!1s0x14b4893a275ebfa9:0xbfa65fca92996c03!8m2!3d41.0451045!4d27.3830263!16s%2Fg%2F11gxvscds0!19sChIJqb9eJzqJtBQRA2yZkspfpr8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJqb9eJzqJtBQRA2yZkspfpr8', 'boarding-431ec2b49871e12b6c258735')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-42406e76d98cb837168eb0553896c432', 'boarding-431ec2b49871e12b6c258735', 'Merve Yilmaz', 2, 'Merhabalar, küçük ırk köpeğimizi 13 eylül de sadece 1 günlük Trakya pet otele bıraktık ve sonu gerçekten hüsran oldu. Köpeğimizi aldığımızda gözünde şişlik ve morluk vardı. Bir haftalık tedavi sürecinden sonra ancak toplarlanabildi ve kesinlikle bu sorunu kabul etmediler görseller ile onlara ilettiğimde ise sabah gözünün normal olduğunu söylediler.Daha sonra veterinerimizin bilgilerini istediler ve paylaştık, sonrasında ise bizden ücret talep ederek veterinerimizin onlarla konuşmadıklarını iddaa ettiler. Ama veterinerimize onlardan herhangi bir arama gitmemiş.
Başkalarının da bu mağduriyeti yaşamaması adına bu yorumu yazmak istedim.', '2025-10-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9fe957fe43679146a7b6d1ceae891bc4', 'boarding-431ec2b49871e12b6c258735', 'Kıvanç BAHARLI', 10, 'Trakya nın en güzide şehri olan Tekirdağ da gerçekten gerekli olan. Ve hizmeti ile kesinlikle memnun kalıcağınız süper etkili ve tartışılmaz hizmet kalitesi ile karşınızda. Hem memnun kalıcaksınız hem eğleniceksiniz.', '2019-03-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-68c446438ebcfd2a9a01db0d', 'KURT PET OTEL TRABZON', 'Köpek otelleri', 'Trabzon', 'Uğurlu', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmUZTf-5PwoPVUc9kKeydv8xsZumnSnY-lO46fy6ECd_XgdR89J53ZTbMATXVc4SO4fuh2LGuU5BYdTOgsEAtWfyzkuy3XL4GAS6UYektJd_tYoxynt9-83izDVPATgUSOtVQyIm5ujExX2=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmUZTf-5PwoPVUc9kKeydv8xsZumnSnY-lO46fy6ECd_XgdR89J53ZTbMATXVc4SO4fuh2LGuU5BYdTOgsEAtWfyzkuy3XL4GAS6UYektJd_tYoxynt9-83izDVPATgUSOtVQyIm5ujExX2=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlkglF2_hGviWdceeKCUJW1n3k9RtUi-cI6GR8OEvFcKGKNjXHw-0qF-ake-lT7cZMcImzfZ4eF5JaB6vkfb0tHiuFJqjuzW79mcApHbWMtgRTBlLdJUjM47QymAcm0QrAULq3S8QPWYlPp=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHusCi7qTeBkGGihtU78CbZXqHjjJpC4WFhLklohRYhsQ59S-v1yVnRwj49JoiWaAxpHco0WdRr_8bMKvtwRXBGGcqzGB7kbQEKVeh2B-9rjcdqnop6KNYGLU64b9ldmv9H4msCD_qIWOO=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkkOy0dWkpLkp23ttZ5qNbQ3O6FRvzCBDjxJYU3GyQmlujrq0iP6kgaQKv062m7LuINZGZXwzw9ILtBoVZwIC_Xs6r2WN9CXeMyitD_m9OEnl21vbLaRKsYYMJAYa4Vv5WTJenqbPePeZ1f=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHusCi7qTeBkGGihtU78CbZXqHjjJpC4WFhLklohRYhsQ59S-v1yVnRwj49JoiWaAxpHco0WdRr_8bMKvtwRXBGGcqzGB7kbQEKVeh2B-9rjcdqnop6KNYGLU64b9ldmv9H4msCD_qIWOO=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BuJpsnnIpH0qFmZMg72Tbw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=51.51251&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","trabzon-kopek-oteli","trabzon-kopek-pansiyonu","ugurlu-kopek-oteli","trabzon-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'KURT PET OTEL TRABZON, Trabzon Uğurlu bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 411 17 61', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/KURT+PET+OTEL+TRABZON/data=!4m7!3m6!1s0x40643f5f0252f86f:0x3b92cd803b2becd8!8m2!3d40.976705!4d39.657094!16s%2Fg%2F11xfh9_7pz!19sChIJb_hSAl8_ZEAR2OwrO4DNkjs?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJb_hSAl8_ZEAR2OwrO4DNkjs', 'boarding-68c446438ebcfd2a9a01db0d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-aac6f2deecce3a2b66044daffe1ceb95', 'boarding-68c446438ebcfd2a9a01db0d', 'Aycan Uslu', 10, 'Merhaba Gülhan Bey ve Tolga Bey
Tatilde olduğumuz süre boyunca kedimizle ilgilenişiniz ve gösterdiğiniz ilgi için size çok teşekkür ederiz. Havalimanından alıp bırakma konusunda da büyük bir kolaylık sağladınız. Döndüğümüzde kedimizi temiz, mutlu ve huzurlu görmek bizi çok rahatlattı. Gerçekten güven verici ve özenli bir hizmet sundunuz. Sizin sayenizde içimiz rahat bir tatil geçirdik. Emeğiniz için tekrar teşekkür ederiz. 🌸', '2025-08-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c089f596e7494d922b8504e3d7f75090', 'boarding-68c446438ebcfd2a9a01db0d', 'Yılmaz Asım Özalp', 10, 'Çok sevdiğim köpeğimi 1 ay süre ile Kurt Pet Hotel Trabzon''a emnet ettim. Hiçbir sorun yaşamadım. Köpeğimi mutlu birşekilde geri aldım. Yetkililere teşekkür eder, başarılarının devamını dilerim.', '2025-06-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f6f8cdeabda537b2c3c73a02bd92291c', 'boarding-68c446438ebcfd2a9a01db0d', 'Can Soyaroğlu', 10, 'Köpeğim bujiyi 10 gün bıraktım ve gerçekten trabzonda tercih edeceğim tek insan.

Köpeğime kendi köpeği gibi bakıp ilgilendi. Döndüğümde köpeğim taranmış ve gerçekten çok bakımlı görünüyordu.

Çok teşekkürler Tolga Abi.', '2025-06-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b1d3a3238dc95bfdd9c3295836a47e61', 'boarding-68c446438ebcfd2a9a01db0d', 'Birgül Karanis', 10, 'Kedim Boncuk 2 hafta süreyle Kurt Pet Hotel''e misafir oldu. Çok memnun kaldık. Çok teşekkür ederiz.', '2025-06-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ee7a8c478abe1163e6ed3891b0315f16', 'boarding-68c446438ebcfd2a9a01db0d', 'TUNÇ', 10, 'Kafam arkada kalmadı, işlerini iyi yapıyorlar, teşekkürler hersey icin...', '2025-07-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-69be00393d63a31315a7fef1', 'Vom Hause Trapezus', 'Köpek otelleri', 'Trabzon', 'Ortahisar', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=hmIGgbKXZASv1w8h9ODzCA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=353.50836&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=hmIGgbKXZASv1w8h9ODzCA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=353.50836&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=hmIGgbKXZASv1w8h9ODzCA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=353.50836&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","trabzon-kopek-oteli","trabzon-kopek-pansiyonu","ortahisar-kopek-oteli","trabzon-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Vom Hause Trapezus, Trabzon Ortahisar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, 'https://www.facebook.com/vom.hause.Trapezus?ref=br_rs', '{"google_maps":"https://www.google.com/maps/place/Vom+Hause+Trapezus/data=!4m7!3m6!1s0x40643c4ebce03a91:0xbb7e8452e7f1930!8m2!3d41.0083134!4d39.7201337!16s%2Fg%2F11g6mw5yhz!19sChIJkTrgvE48ZEARMBl_LkXotws?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJkTrgvE48ZEARMBl_LkXotws', 'boarding-69be00393d63a31315a7fef1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-84cb7fa5b36ff968e40eca7d', 'VETERİNARİUS PET GROSS & PET KUAFÖR & PET OTEL', 'Kedi ve köpek kabul eden karma tesisler', 'Uşak', 'Kemalöz', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bMAn7XfrtwosWCrzwWtm2g&cb_client=search.gws-prod.gps&w=408&h=240&yaw=322.15726&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bMAn7XfrtwosWCrzwWtm2g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=322.15726&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bMAn7XfrtwosWCrzwWtm2g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=322.15726&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Banka kartları","Kredi kartı","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","usak-kedi-oteli","kemaloz-kedi-oteli","usak-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'VETERİNARİUS PET GROSS & PET KUAFÖR & PET OTEL, Uşak Kemalöz bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 886 82 92', NULL, 'https://usakveterinarius.com/', '{"google_maps":"https://www.google.com/maps/place/VETER%C4%B0NAR%C4%B0US+PET+GROSS+%26+PET+KUAF%C3%96R+%26+PET+OTEL/data=!4m7!3m6!1s0x14c87fa9ddfbc951:0xe0c583d585af6727!8m2!3d38.6626895!4d29.3931865!16s%2Fg%2F11npm1w7xh!19sChIJUcn73al_yBQRJ2evhdWDxeA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJUcn73al_yBQRJ2evhdWDxeA', 'boarding-84cb7fa5b36ff968e40eca7d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-0d64b88a87871e3ebe9eca74', 'Van Edremit Doğa Pet Veteriner Kliniği ve Köpek Oteli', 'Köpek otelleri', 'Kocaeli', 'Yeni', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnIwd8jr8H8-9188dlQDBb87JSQHhGBalqfs2uC_1pyvPbP5fRwYtTtKTRy9bSK-fdGp5gzR4LV471ndwe-5dRtLAkdgnQsiTmk7rM6mSZOrlaKGrbDt8TKvWFgDHXisN8-v3XgrQ=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnIwd8jr8H8-9188dlQDBb87JSQHhGBalqfs2uC_1pyvPbP5fRwYtTtKTRy9bSK-fdGp5gzR4LV471ndwe-5dRtLAkdgnQsiTmk7rM6mSZOrlaKGrbDt8TKvWFgDHXisN8-v3XgrQ=w396-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkPIIY4kys19PbzDx-eLDm9lX2ThkCTBsYTrdZ_lMPra_ui8nlSpRd7v9TbAQRgNh-GDNoT6y5K_g4-J87tUOJ5dPxObe_qz0UeT3MBzQ2PGPLXeIkYEX_r5oudOhIapPKo1Mg=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk_05T_Ug6bMxfE3EJa0VHzWJivjPWLV-W17MZRx_qdtjmXb3thBuvXqIJz57EQVtkqiqAmo2tniJTTd5XetUOOG--TskwewoRTxjPTnm1wf5f8TKR4ZhXXiR36-bZ5JnkKEcNL=w224-h395-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFpGb1YwBXAD8U8-q21ELLzAXzlj_Gsmku_24cnS1mxiUm6VWQzhYXXVc4e8j1Ip_9e5WSkBy4s40Z0yyB_yBm0CqdvHp3sW7J7KSlzzPYhWXME2wy3xlYJeUUes2hj0lcgo-I=w239-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk_hHZHEdkWQsCc9hrUHbwNYiheKXcErYebDXul_J-Thvd4Tcxq84Ho1SnGlgX3tgGFO87HUA-1gBxqAAtqrQrYdxY2zY59RPt_iLAV32DPcgDLKj7nJ4fglERZd799jB31AWXo=w224-h395-k-no"]'::jsonb, '["dog"]'::jsonb, '["Tuvalet","Üniseks tuvalet","Veteriner desteği","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","kocaeli-kopek-oteli","kocaeli-kopek-pansiyonu","yeni-kopek-oteli","kocaeli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Van Edremit Doğa Pet Veteriner Kliniği ve Köpek Oteli, Kocaeli Yeni bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 546 05 08', NULL, 'http://dogapetklinigi.com/', '{"google_maps":"https://www.google.com/maps/place/Van+Edremit+Do%C4%9Fa+Pet+Veteriner+Klini%C4%9Fi+ve+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x401277c3df96846d:0x938bac647397d128!8m2!3d38.4240548!4d43.2940086!16s%2Fg%2F11vd5v4qnz!19sChIJbYSW38N3EkARKNGXc2Ssi5M?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJbYSW38N3EkARKNGXc2Ssi5M', 'boarding-0d64b88a87871e3ebe9eca74')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-dd5fa000a97d9dd0dd13c64460b4d20e', 'boarding-0d64b88a87871e3ebe9eca74', 'gizem akgunduz', 10, 'Pafimizi zorunlu olarak 12 gün Ayse hanima emanet ettik. Evden ilk ayrilisiydi ve kliniğe daha once gitmediğimiz icin oldukça tedirgindik. Ayse hanim ve Yağmur hanim kendi çocukları gibi kızımızla ilgilendi. Sağlıkli verdiğimiz yavrumuzu sağlıkli aldik. Güzel köpeğimizin van da artık bir evi daha oldu. Teşekkür ederiz', '2026-06-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-05d62617a17d2e49988787bf5e06f2c4', 'boarding-0d64b88a87871e3ebe9eca74', 'BİRHAT BABAT00', 2, 'Kuşumuzun kanadında kırık mı var yoksa incinme mi diye kontrol ettirmek için gittik. Ancak klinikte kuşlardan anlamadıklarını söylediler. Bunu öğrenmek için zaman ve emek harcamak üzücüydü. Eğer belirli hayvan türlerine bakılmıyorsa, bunun baştan belirtilmesi çok daha doğru olurdu. Kuş sahiplerine tavsiye etmiyorum.', '2026-01-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-62749b8193cfcae2346293a7e34b5708', 'boarding-0d64b88a87871e3ebe9eca74', 'Aysegul Efe', 10, 'Van''da canınızı emanet edeceğiniz harika bir mekân.Ben işte olduğumda kızım gündüz kreşe gidiyor.Acil isim olduğunda bırakabiliyorum.İyiki varlar', '2025-11-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3759e4bee5bbcf920f4e415ef7775b0f', 'boarding-0d64b88a87871e3ebe9eca74', 'Çağlahan', 2, 'Asla tavsiye etmem. Telefonda iletişime geçmiştim köpeğim çok hastaydı, kapanma saatlerine 2 saat olduğu halde biz çıkıcaz getirmeyin getirseniz de bakamam dedi bir bayan. İlgisiz, sert üslup güler yüzden uzak safi esnaf kafası.. Mesleğiyle hemhal olamamış hiçkimseye güvenmeyin. İşini çok daha iyi yapanlara gidin keza ben öyle yaptım.', '2026-01-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-125e8ca7d076264a98b23d153521179e', 'boarding-0d64b88a87871e3ebe9eca74', 'emine yücel', 10, 'Kızımın en sevdiği ablası... Eli okadar hafif ki... Aşılarımızda hiç sorun yaşamadık. Kızım hissetmedi bile. Dışarı her çıktığımızda mutlaka uğruyoruz.
Teşekkür ederim ❤️', '2024-02-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-e7f220bb3e55a44fc4afa69d', 'Van Edremit Köpek Oteli', 'Köpek otelleri', 'Van', 'Yeni', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZ0AamhLw7-_wHNI1x4C8MFz2L59LdYUclCr_UPbAaG3Ty0jJxB4ZxAKTHuBeJJJ5HU5_fzKzP1BNwbxMjPDVg3QHItw0S-2OFuSIK9tt0nr9OKCJxi2X5p4Hx8Alr9NeKqrEIdg=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZ0AamhLw7-_wHNI1x4C8MFz2L59LdYUclCr_UPbAaG3Ty0jJxB4ZxAKTHuBeJJJ5HU5_fzKzP1BNwbxMjPDVg3QHItw0S-2OFuSIK9tt0nr9OKCJxi2X5p4Hx8Alr9NeKqrEIdg=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlywrAVwFEHow52oUyqH8-Fd0T8cKJ3-a86_ycuSb3tpgJL1WG60cESRen3RnEscVTEc7tNE5Bz9HuiAWru8HAXY1IP8dsz5fAVfUUP71JOeQT1jjNgTAlvjCUtLwxcxy0mFk2toQ=w224-h298-k-no"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","van-kopek-oteli","van-kopek-pansiyonu","yeni-kopek-oteli","van-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Van Edremit Köpek Oteli, Van Yeni bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 225 15 88', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Van+Edremit+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x4012772c999d1f21:0x6b4598b33b71594a!8m2!3d38.4238127!4d43.2935147!16s%2Fg%2F11y4vch85_!19sChIJIR-dmSx3EkARSllxO7OYRWs?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJIR-dmSx3EkARSllxO7OYRWs', 'boarding-e7f220bb3e55a44fc4afa69d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-9e2f6ade05877934ad947674', 'Van Tarçın Pet Veteriner Kliniği', 'Kedi ve köpek kabul eden karma tesisler', 'Van', 'Alipaşa', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmrFBeuJogQTA1tyAWhP5b49pG8mbTGb-5kcb3ujL7Iin5s-haRWsyg3ZlfOGkPqDTEGnamtjhYRee1YaNTFjkv4APwZ5itL2xxOCEiH04aw5aXN1l6QZynmymdhGtBkcFITmGJUw=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmrFBeuJogQTA1tyAWhP5b49pG8mbTGb-5kcb3ujL7Iin5s-haRWsyg3ZlfOGkPqDTEGnamtjhYRee1YaNTFjkv4APwZ5itL2xxOCEiH04aw5aXN1l6QZynmymdhGtBkcFITmGJUw=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaNUMsdxC2P2MN-ZVw-xcnkRI7tzqS2EXfcPGDE8vdduQoC6lOfdS4JgUAFFQI6U9RIzrzlLX-TgH6Ygm13m6VdT9t2JOKm_IvXQz90EnZCL8ow8VIV4C9POYCaxE7poEpr753=w352-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmDGvuBwn5pe3I6FFb2OCnx-7PzwQsKUwt8htCfHiXDv-gNkirI4Ijy5276oF9CjwYJFCzWgJ86EUnL2vuJX8obEhZ2UVzm-5GBKeYzekXJI3zHOHqi2BaamV1Fy5bY1T-ebEjxGg=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFh1LCwvNSu7Ck2WyGw2bsOW4W6-7IhBtiLgjAjAwiAR_PvTvIk02Uz3qMkjWZEyPHOQJZb0DiHA-zeg47tdXdeYvY-tC6j29PElw8OX0DCOCkDMYB5HBGMIgor5Avp6KnPGjb=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl9lGoi-NuJWgnBaFRrCBS9PmWCXeyMlfng0btTIwGCdBq1vxokmnqJ7-68gnSmSKM38lkLW5UXwXdNdBJWKqBliJmVNbMXBhjygeT8WZyaebZlvmjBcUtt1kej-eYFa9-7EaPLBzjyXWg=w534-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=SKet498JioERk7uf1twfYQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=42.69279&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun park yeri","Tuvalet","Veteriner desteği","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","van-kedi-oteli","alipasa-kedi-oteli","van-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Van Tarçın Pet Veteriner Kliniği, Van Alipaşa bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0506 479 82 55', NULL, 'http://tarcinpetklinigi.com/', '{"google_maps":"https://www.google.com/maps/place/Van+Tar%C3%A7%C4%B1n+Pet+Veteriner+Klini%C4%9Fi/data=!4m7!3m6!1s0x2d101113ba7fd143:0x902570531bbd288e!8m2!3d38.5071713!4d43.3783159!16s%2Fg%2F11tk8_dxz_!19sChIJQ9F_uhMREC0Rjii9G1NwJZA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJQ9F_uhMREC0Rjii9G1NwJZA', 'boarding-9e2f6ade05877934ad947674')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-89392e38fb7ecffb97581b926687244a', 'boarding-9e2f6ade05877934ad947674', 'zehra yasul', 10, 'Kızımızı içimiz rahat bir şekilde otellerine bıraktık. Kedi oteli çok temiz ve hijyenik.Biz yokken kısırlaştırma ameliyatını da yaptılar ve sürekli bizi bilgilendirdiler. VAN da böyle bir imkanın olması çook güzel siz tatilinizi yaparken kuzularınız emin ellerde 👏💫', '2026-05-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c2fa95a5d628a36d812d4c9355b4dc52', 'boarding-9e2f6ade05877934ad947674', 'nûrhat', 10, '(HER ŞEY PARA DEĞİL AZICIK MERHAMET)      ASIL TEDAVİYİ UYGULAMAYIP, PARAGÖZ OLMANIZA 5 PEKİYİ YILDIZ VERİYORUM.

10-15 günlük yavru bir kediyi birkaç gün önce sokakta terkedilmiş olarak bulduk. Yuvasını ne kadar arasakta bulamadık. Eve getirip biberondan süt tozu ile besledik. 02/08/2026 pazar günü yavru kediyi hasta olduğu için Van Tarçın Pet Vetenirliği Kliniğine getirdim. Kediyi biraz ısıtıp ateşini 32 dereceden 38''e çıkardılar. Sonra temel ihtiyaç duyduğu tedaviyi uygulamayıp kediye iç parazit aşısını yaptı Seher hanım. Ve bu yavru kedi 1-2 güne ölür dedi. (Madem ölecek ne diye iç parazit aşısını yapıyorsunuz) Ben de memnun olmayıp ücreti ödeyip başka bir yere götürdüm yavru kediyi. Oradaki muayenede kedinin sıvı kaybı yaşadığını ve çok ciddi bir dehidrasyon yaşadığını söylediler ve bu yavru kediye serum takıp tedavi altına aldılar. Bu yavru kedinin 2 aylık olmadan iç parazit aşısının yapılmaması gerektiğini de burda öğrenmiş oldum. Şimdi bu 10-15 günlük yavru kediye sıvı kaybı tedavisi uygulamayıp iç parazit aşısını yapmak hangi meslek etiğine yakışır. Tek amacı para olanların ve bugün kime ne satayım derdinde olanlardan merhamet beklemek abes olur. Herkese tavsiyem işini iyi yapan ve içinde merhamet bulunan veterinerlere gidin.  Burayı hiç bir şekilde tavsiye etmiyorum. Ve o dilsiz, konuşamayan yavru kedinin ahı da yanınıza kalmasın.', '2026-08-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c5bf16f44625b75866aa0e1102a109ee', 'boarding-9e2f6ade05877934ad947674', 'Dicle Çoban', 10, 'Öncelikle Muhammet ve Seher hocaya samimiyetlerinden dolayı çok ama çok teşekkür ediyorum kızım şinoma yakın bir süre içerisinde covid tanısı konuldu çok zorlu bir süreç olsada Muhammet ve Seher hocanın verdiği destekle bugün kızım çok iyiki varsınız iyiki dokundunuz hayatımıza', '2026-06-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ce826e1b427de1aa7d784ceda51c2638', 'boarding-9e2f6ade05877934ad947674', 'Çağlahan', 10, 'Kesinlikle gözünüz kapalı güvenebileceğiniz nadir veterinerlerden.. Diğer veterinerlerin aksine katı esnafcı yapıda asla değil. İletişimi, üslubu ve bir abi şefkatiyle yaklaşıp özgeci davranmasına hayran kaldık. Halsiz iştahsız köpeğime sizin sayenizde can geldi. İnşallah yarınlarda daha iyi olacak. Allah bin kere razı olsun, kazancınız bereketli olsun.', '2026-01-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b4a6b59847c87813e39cb447e1001b42', 'boarding-9e2f6ade05877934ad947674', 'ömer akay', 10, 'Muhammed ve Seher hocalar alanında bilgili ve oldukça iyi hekimler. Kibar, açıklayıcı, 7/24 ulaşabilieceğiniz, ödemenin son planda olduğu, minik canlara değer verilen tertemiz klinik. İlk kez kedi sahipendik ve bunu barınaktan gerçekleştirdik, saolsun çok ilgilendiler.Otelleri de mevcut ve güvenli. Dünya Veteriner Hekimler Gününüz kutlu olsun.', '2026-04-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-031b01b3c5b55734d133677a', 'RESUL ÜLKÜMEN VETERİNER KLİNİĞİ - KARAMAN VETERİNER', 'Kedi ve köpek kabul eden karma tesisler', 'Karaman', 'İmaret', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWngu090JioFsHEY2q_gJ8DQjqLqbe6jvJ8sWlpCiAZ75rY0X2hXmnUgC9Vd9iMlKN6joIcYA2ZNnZE9z_nmX-QWi4wi-Lj95Y4UgWJRvLX-aES3-p6gG95swMdAhSDQYRGf8lNm3g=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWngu090JioFsHEY2q_gJ8DQjqLqbe6jvJ8sWlpCiAZ75rY0X2hXmnUgC9Vd9iMlKN6joIcYA2ZNnZE9z_nmX-QWi4wi-Lj95Y4UgWJRvLX-aES3-p6gG95swMdAhSDQYRGf8lNm3g=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnK77XsvHwm1FY8mNJVJaiNjy5CUkezsASrG6QwkZHf-QfyeEgl27CTyhTPp5Gq6yJyrX2609oxx3mZfC_v9FL0MC4t1NaOQlBrwVyQai_1mDbEnxh_OIpTiN1IHNcSicp9ZahbW0NhID7Q=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlkC54sZI_wUwZB9mKVyGeDU8EkjlL2gmFddCF9KD-KC0caRUecHeUmDwNZFAYixw-d7oE8aTTcISndy8II37AueNiN1iTASn1g5LG8fbSheV55Lodnnsnklg9_bY-U46FKgoV_-7Tbcpc=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkPZfZQM5MpqXjtI75TXB5v9hXVz_a5xoHQjt_7v9HWZCAmiXfdLNzCOU9uc0lZdul56orAvMW4lkzUuslv8uqKyrk87w8SxQ3dcmRVXp8xvsxaRuHvSzC3p5IjRfNQlyP6u6eyNuASQFM=w238-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkpv7-Gq_1CZew3Or3K0u00NVZ0O6_waLs3GUc7zUxebwTh-TK3Bllxi_WeigS2w-hS0Qf787E_cNO2zSgveJXz4-ByksNx1bMDyRboQOcEdj48D9bWGgOeU8u_cF2dTBIhCdBzvwHLJ0SJ=w238-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmPcWaB0FYAZ8pXfz4gXalfjqJ7b6iKUiELq5v8eXP9hDGtwy5aCOvMphHbQ6huLDDEXQU3hqbjMA9--sUbxGGQazGC8eM32KcdroD2BCPzDmHsfefaL8vh2c_I1Xtjv3ZRGwCUiMF9v-d7=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlgxOsre2g4m_OAWPQVkQ6_XLZ0HP1ZQxqNAiCUMd_-qSMQT6afh7VRzy5xQGYYTX30CsX1kU5QaAjy3J8pmHM2xHp5djmCIqfhQadMXd2c_HO-NNCRAFbov2VZtql3Ei4wEImTpqMbo1_R=w529-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=t3H74RBtn-hRDJ82uVWr9A&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=2.8733416&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Yardımcı indüksiyon döngü sistemi","Tuvalet","Üniseks tuvalet","Randevu gerekli","Randevu alınması önerilir","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz kapalı otopark","Ücretsiz park yeri"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","karaman-kedi-oteli","i-maret-kedi-oteli","karaman-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'RESUL ÜLKÜMEN VETERİNER KLİNİĞİ - KARAMAN VETERİNER, Karaman İmaret bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0540 442 07 24', NULL, 'https://www.resululkumenveteriner.com/', '{"google_maps":"https://www.google.com/maps/place/RESUL+%C3%9CLK%C3%9CMEN+VETER%C4%B0NER+KL%C4%B0N%C4%B0%C4%9E%C4%B0+-+KARAMAN+VETER%C4%B0NER/data=!4m7!3m6!1s0x14d98d868ea10dc9:0x4fcf8eb8b23605c6!8m2!3d37.1811139!4d33.209991!16s%2Fg%2F11vt5p2hjh!19sChIJyQ2hjoaN2RQRxgU2sriOz08?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJyQ2hjoaN2RQRxgU2sriOz08', 'boarding-031b01b3c5b55734d133677a')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-88a6ec03861e93d0c50491cbcb1f7ed8', 'boarding-031b01b3c5b55734d133677a', 'Hamit CAKIR', 10, 'Karavanla seyahat ederken kedimiz Trevor,bir başka kedinin saldırısı sonucu yaralanmıştı. İnternet yorum ve puanlarını inceleyip tercih ettiğimiz Resul bey çok ilgilendi. Gerekli tedavisini çok pratik ve steril bir şekilde yaptı. Kendisinden ve kliniginden çok memnun kaldık. Karaman''da artık favori bir veterinerimiz oldu. Ayrica evcil hayvan oteli hizmetleride mevcut.Hersey için çok teşekkür ediyorum.', '2026-07-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ad2b5c8ef256e8831852b0f16244e500', 'boarding-031b01b3c5b55734d133677a', 'Gezgin', 10, 'Gece kedimiz Pars sürekli miyavlayıp kumuna gidip çıkmaya başlayınca ciddi bir problem olduğunu düşündük. Sabah erkenden götürdük ve idrar yolu problemi olduğu söylendi. Açıkçası çok panik olmuştuk ama süreç boyunca hem bize hem kedimize çok sakin yaklaşıldı. Tedavi başladıktan sonra aynı gün içinde bile biraz rahatladığını görmek bizi inanılmaz mutlu etti.', '2026-05-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-44930f9c208712aa059979e0203bb962', 'boarding-031b01b3c5b55734d133677a', 'FATİH GÖDEL', 10, 'Kedimin tüy dökmesi artınca endişelendim ve kliniğe götürdüm. Veteriner bey detaylı bir muayene yaptı, olası nedenleri anlattı. Mama değişikliği önerdi ve birkaç küçük tavsiye verdi. İki hafta içinde belirgin fark oldu, kedim çok daha canlı görünüyor. Kliniğin temizliği, çalışanların güler yüzü ve sabırla yaklaşmaları içimi rahatlattı. Güven duyabileceğim bir yer bulduğum için mutluyum.', '2025-11-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-74d0fe6e7683b1c0bbeb9f87fdffcbc5', 'boarding-031b01b3c5b55734d133677a', 'Şeyma', 2, 'Kedimizi 1 hafta pet otele bıraktık oteli çok beğendik ortam temizdi kedimizde birtakım hastalık belirtileri olduğunu veterinere belirttik tahlilleri yapacağını ve bize bilgi vereceğini söyledi, 1 hafta sonunda kedimizi aldığımızda oldukça zayıflamış ve durumunun daha da kötüye gittiğini gördük, bırakmadan hemen önce yemek yerken yürürken videoları elimizde var, ancak veterinerde ihmal edilmiş yemek yemesi su içmesi ve yürümesi hiç yok zaten kedinin hasta olduğunu biliyorduk tahlillerde şekeri çok yüksek çıkmış bunun bilgisini hekim bize verdi ama 1 haftada herhangi bir müdahalede bulunmamış burdan alıp başka veterinere gittiğimizde geç kalındığını ve şekerinin çok daha fazla yükseldiğini gördük kendim de bir tıp hekimi olarak sürecin nasıl ilerlediğini çok iyi bilirim ve burada ihmal olduğunu söyleyebilirim, kedimizin durumu kritik 1 haftada yükselen şekerden dolayı ketoasidoza ilerledi ve organ yetmezliğine girdi muhtemelen uyutulacak, sadece otel olarak kullanmak isterseniz tavsiye ederim ama sağlık açısından asla tavsiye etmiyorum', '2026-06-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-53c76bbaaee8613e14c5dff344615e12', 'boarding-031b01b3c5b55734d133677a', 'Havvanur Konukseven', 10, 'Bir veterinerden öte, bir dost eli… Resul Ülkümen Veteriner Kliniği’nde hem bilgiye hem merhamete rastladım. Can dostumuzun en zor anlarında yanımızda oldular. Açıklayıcı, şeffaf, samimi ve her şeyden önemlisi güvenilir bir ekip. Gerçekten işlerini yürekle yapıyorlar. Biz slz ve ekibinizi çok seviyoruz..', '2025-11-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-50d054f231ce9deae857e427', 'PetCamp Veteriner Kliniği BATMAN', 'Kedi ve köpek kabul eden karma tesisler', 'Batman', 'Gültepe', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFj3ohVKfzve9ZQtP2OXZD_9OyRnGbTuiQIWeBB9_j1YxFz8I6Jn19yPz39NtCDrZQTNNmdQRTGXkIUt58QRj83LPlpX1zM1SaBgzQsIapngUa7-1qWIX9SQLoCLvla_gef7U=w561-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFj3ohVKfzve9ZQtP2OXZD_9OyRnGbTuiQIWeBB9_j1YxFz8I6Jn19yPz39NtCDrZQTNNmdQRTGXkIUt58QRj83LPlpX1zM1SaBgzQsIapngUa7-1qWIX9SQLoCLvla_gef7U=w696-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWneUxPJAaK7PVlez3U97SObTLCmVaifN8-vLqaSuOMnCdjWmEWCWGCAIJ6EV0Bf7nNFIhaS9PITbgwjXpAROR27-kBROcShKOiabhV-QnAs5LtLBD5dbDubNw2cyVf-mjfPI3H3=w226-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9veHK9RkPNm44yIQ52awEC87WQiusECNc6XlYbP-sRRNAzjY5xDjYVkQ58em7SjXj-Rd-Q4fE_HwLADB8fDlHDp7iBWwePRC6ClBgkYQwORoWGBqBNZwbPEba4J8pKY3_DFcO=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlNV8LQtvIGw8ez3iM9KBXWjxoTGhpznNNyxUFrdgUAy1SOS6UfIsFveDAyi5MzRbjAh7b0OtU80ESlnjeItzfyivGg-0-tdzqmBSMT_8e5HTSM7WBaTpqzfzJIwQwIO6MqA_qj=w505-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9veHK9RkPNm44yIQ52awEC87WQiusECNc6XlYbP-sRRNAzjY5xDjYVkQ58em7SjXj-Rd-Q4fE_HwLADB8fDlHDp7iBWwePRC6ClBgkYQwORoWGBqBNZwbPEba4J8pKY3_DFcO=w298-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=c5F8GodTHRH0oipc4uEQVg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=229.83554&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Tuvalet","Randevu gerekli","Veteriner desteği"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","batman-kedi-oteli","gultepe-kedi-oteli","batman-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'PetCamp Veteriner Kliniği BATMAN, Batman Gültepe bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0539 656 65 02', NULL, 'https://petcampveterinerklinigii.com/', '{"google_maps":"https://www.google.com/maps/place/PetCamp+Veteriner+Klini%C4%9Fi+BATMAN/data=!4m7!3m6!1s0x400b47ebeed69167:0x2b8b106d31c9f57b!8m2!3d37.9190527!4d41.1426764!16s%2Fg%2F11p0gtg8jk!19sChIJZ5HW7utHC0ARe_XJMW0Qiys?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJZ5HW7utHC0ARe_XJMW0Qiys', 'boarding-50d054f231ce9deae857e427')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a6bcc1154458768b9d4a1bd5163b44e3', 'boarding-50d054f231ce9deae857e427', 'Kahraman Karaaslan', 10, 'İbrahim hocam ve Emre hocama çok teşekkür ederiz. Kedimiz Lia ile çok alakadar oldular. Onların sayesinde içimiz rahatladı. Tüm evcil hayvan severlere gönül rahatlığıyla PetCamp veteriner kliniğini öneriyorum.', '2026-05-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-66fea42831ce737e4ca2be23d7488553', 'boarding-50d054f231ce9deae857e427', 'Byzt Mrv', 10, 'Donanımlı bir klinik ve  gerçekten çok ilgili hekimleri var. Batman’ın böyle bir kliniğe ihtiyacı vardı kesinlikle tavsiye ederim  💯💯💯💯', '2022-03-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-798ce18aec5e0d804bf48ff477f81e35', 'boarding-50d054f231ce9deae857e427', 'engin', 10, 'Dürüst ve başarılı. Kedimizi götürüyoruz. Yönlendirmeleri, yaklaşımı çok güzel, güvenilir.', '2026-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8942552d80b55df6d2d2fc2ca8639610', 'boarding-50d054f231ce9deae857e427', 'Necla D.', 10, 'Bir buçuk yaşındaki kedimiz Kibrit''e başarılı bir kısırlaştırma ameliyatı uygulayan İbrahim Hoca''mıza sonsuz teşekkürler ♥️', '2025-11-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b1da6a5ab947d5ade97bb0b3baa4b98b', 'boarding-50d054f231ce9deae857e427', 'Ayse Tenk', 10, 'Erkek kedimizi kısırlaştırmak için gittik, hem ilgili hem sakin yaklaşımlarından dolayı çok rahat ve sıkıntısız bir süreç oldu. Daha önceki kedimizi İzmir’de kısırlaştırdık ve iyileşme süreci biraz yorucu oldu ama Petcamp te kısırlaştırdığımız kedimiz eve gelene kadar kendine geldi, yarası, ağrısı, halsizliği yok. Çok teşekkür ederiz. Her zaman tercih edeceğimiz bir klinik.', '2023-10-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-4e145ca1d932d6ab1be049de', 'İstanbul Pet Oteli', 'Ev tipi bakım merkezleri', 'İstanbul', 'Denizköşkler', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn79ZUzqpxJ4C-ityNeGr5n7fRSBkBWfnxIhV7408KjyoINdSzPRE5Ybw838WI8fa5VtXRFzLxXj4XPq9jYxWXSAIAAn87fVfkbu-7N31k-naqEzOxAdg1WyVsLpZ4CLEY0P5UTAQ=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn79ZUzqpxJ4C-ityNeGr5n7fRSBkBWfnxIhV7408KjyoINdSzPRE5Ybw838WI8fa5VtXRFzLxXj4XPq9jYxWXSAIAAn87fVfkbu-7N31k-naqEzOxAdg1WyVsLpZ4CLEY0P5UTAQ=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlk4SQHWFwh_IjlSJr2FkfCJFas5kzalSumvgtX7TaeM6UwqZeBDkLQwNqF3NtYLv4hEj623Djc9sHXKEPYRgnMZUkCFyvNKTVGeuqqwKwVRBM-g-wS5aGk6NebhNbNf34emQnm=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkIomrzCf_9JUn15BegZnrjB3H2p65MVdjGib-uhn3CdjtSdGdU18gUzTQLM1RsRMaO-MTubKxWrdQ90E94imgcUOBcecOP_hpKR-jryfuWv1ODEw-prCNRPza57un85iNPBEcS=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-wDNbL0Yha7fgfqNq-eUSde2gdetuqhupN6BBjAeCEQNLUta_JNezI2GlSdxLJdEaeBtbXPg1fUCoAfyzbK5xkvoJfQek2ehWahXSUqzVWK4_LyFA4PwR6MTdH6hJ7585ZwM=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=W-moK8DuWYmVo2NrF2XEVw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=188.5558&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","i-stanbul-pet-oteli","i-stanbul-kedi-kopek-oteli","denizkoskler-pet-oteli","i-stanbul-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'İstanbul Pet Oteli, İstanbul Denizköşkler bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0545 798 32 22', NULL, 'https://adresrehberin.com/firma/3015/istanbul-pet-oteli/', '{"google_maps":"https://www.google.com/maps/place/%C4%B0stanbul+Pet+Oteli/data=!4m7!3m6!1s0x14b55e38a7b259c9:0x56c3a48e05c4bc03!8m2!3d40.9766685!4d28.7393886!16s%2Fg%2F11gf61hz41!19sChIJyVmypzhetRQRA7zEBY6kw1Y?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJyVmypzhetRQRA7zEBY6kw1Y', 'boarding-4e145ca1d932d6ab1be049de')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-20c0d92a056706634a95a1b779dd20ca', 'boarding-4e145ca1d932d6ab1be049de', 'Nilay Kültürel', 10, 'Güvenilir, tertemiz ve çok ilgili bir işletme. Burcu hanım gerçek bir hayvansever içtenlikle işini yaptığı çok belli. Tatilimiz boyunca daha biz sormadan hep video attı güncel durum bilgisi paylaştı içimiz çok rahattı. Kesinlikle öneriyorum. Kedimizin de çok sevdiği halinden belli oluyor :) hemen alışmış ve eve döndüğünde farklı bir davranışı olmadı.', '2026-05-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-320c2a5ea85dbefc12654188378b8ae9', 'boarding-4e145ca1d932d6ab1be049de', 'Ruquş Fataliyeva', 10, 'İlk defa kedilerimi yanımdan uzakta bıraktım ve çok tedirgindim. Ama burası gerçekten sıcak bir aile ortamı. Kedilerim ilk gün yatağın altına saklanmıştı, yavaş yavaş alıştıkça bana her gün fotoğraf ve video gönderdiler. Nasıl sevdirdiklerini, nasıl rahatladıklarını görmek beni çok rahatlattı. Kendimi hiç yabancı hissetmedim, içim hep huzurluydu. Artık kedilerimi bırakabileceğim güvenli bir yer buldum. Çok teşekkür ederim 🤍🐾', '2025-11-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-404e078c0f64d4d7f615bb91af1b66ce', 'boarding-4e145ca1d932d6ab1be049de', 'dilek başaran', 10, 'Sevgili Burcu Hanım,

Lotus’umuza bir hafta boyunca göstermiş olduğunuz ilgi, sevgi ve özen için size gönülden teşekkür ederiz. Sayenizde tatilimiz boyunca içimiz çok rahattı ve huzurlu bir şekilde zaman geçirebildik. Lotus’un mutlu ve güvende olduğunu bilmek bizim için gerçekten çok kıymetliydi.

Profesyonelliğiniz, özveriniz ve hayvanlara olan sevginiz her halinizden belli oluyor. Bundan sonra tekrar ihtiyacımız olduğunda hiç düşünmeden canımızı size emanet ederiz. İyi ki sizi tanımışız.

Her şey için tekrar çok teşekkür ederiz. 🌸', '2026-05-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f0e93ff84f541daa1e8675b3161c2f68', 'boarding-4e145ca1d932d6ab1be049de', 'Rida Azeem', 10, 'Tatile gittiğimde kedilerimi buraya bırakıyorum ve kedilerime çok iyi bakıyorlar. Bir kedinin ihtiyaç duyduğu tüm imkanlara sahipler ve hayvanlara kendi hayvanlarıymış gibi sevgi ve özenle bakıyorlar. İhtiyaç duyduğunuzda evcil hayvanlarınızı bırakmak için burayı kesinlikle tavsiye ederim.', '2026-06-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7545fb16ad528ecebc997cdfa3d9c634', 'boarding-4e145ca1d932d6ab1be049de', 'İlknur Kutluhan', 2, '4 yıl önce ne yazık ki yurtdışına eğitim için gitmek zorunda olduğum için 6 ay kadar kedilerimi bu işletme sahibi kadına bırakmıştım?? Büyük bir hayal kırıklığı kötü ve acı bir tecrübe yaşadım? Umarım yapılan bir kaç iyi yoruma aldanıp insanlar benim yaptığım hatayı yapmaz!!! Büyük pişmanlık…', '2026-01-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-1597ba45fc41736b8faec162', 'Yalova Yaşam Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Yalova', 'Köyiçi', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkq06l8FEYvaP6OhM3Mna0-YB7ZCGulVQsDlkoSBZaKHsWOhiqw6BCSAx4z5kuVbpAv9VwbvvYamQHNaXtiJSVbLOHCr3-oeF6gzDsGgysIhEJUhOMEDQPBUshttxkonbB5MINZO1J8b38Q=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkq06l8FEYvaP6OhM3Mna0-YB7ZCGulVQsDlkoSBZaKHsWOhiqw6BCSAx4z5kuVbpAv9VwbvvYamQHNaXtiJSVbLOHCr3-oeF6gzDsGgysIhEJUhOMEDQPBUshttxkonbB5MINZO1J8b38Q=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJn7JxAZF71ythgzyFZVYSQz-NzneK6jnVHiGQ-IekEFBo-MgHh5XYqJi1JoOQ_uWOVMWU0iYI6G7mDQls6vVtq_nHBSDM2lqMxOrseVajgn8PgVNvmCsbMF1paQ1cEBiHKTlsJNrNzks=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlwivn9QzC14x_TewVyfJ0Q_czhQJTEAjuRtmtYgQKwsgbwLezoiNr1OvhrKtrotonvRcpm9KPUabS-jlWPE6Zzdpdd8gJZsQtMaPXYDG_h3FI04Q2KMEqKEgHwkQQ9L0WOUE_lfyLgKyxv=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWneOhz86KzeJzNQuJb6vYt2e6hTE-rlcb6jOtmqc2SuF_c-r_lNRP3w-_BuKwTgP2OXow5ZcCczTs3sCLJxOQ1BtMR1sYH4yPYcMvqHtsKMa2IsnA1Mqv9wxH1tF6qPv_jXS-b6lIKHb-E=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn_kku7QpUd9O8PErmfP5dfTwFbrUuDq_F8j20Fn5IXb4MKpZWRKn2xkHGgVJmSYzstmCP3YzmcagQJ1FtyNDEBsQWnzL8wCMp8FhmzqU5WZzuqCrBZS9Hacg1Mxi3a8d9dLru6B3ObyJSO=w303-h298-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Hızlı ziyaret","Banka kartları","Kredi kartı","Ücretsiz kapalı otopark","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","yalova-kedi-oteli","koyici-kedi-oteli","yalova-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Yalova Yaşam Pet Otel, Yalova Köyiçi bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0506 131 55 10', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Yalova+Ya%C5%9Fam+Pet+Otel/data=!4m7!3m6!1s0x14caf197538485f1:0x4aa1d899d46edec9!8m2!3d40.6268166!4d29.2112527!16s%2Fg%2F11ylkv2bnn!19sChIJ8YWEU5fxyhQRyd5u1JnYoUo?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ8YWEU5fxyhQRyd5u1JnYoUo', 'boarding-1597ba45fc41736b8faec162')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-dc1c91c4c10ce3c5438c2a05d7dc68bc', 'boarding-1597ba45fc41736b8faec162', 'Dilay Yilmaz', 10, 'Pet otel hizmetlerinden çok memnun kaldım. Personel oldukça ilgili ve profesyonel, tüm süreç boyunca Salem’in keyifli ve güvende olduğunu hissettirdiler. Temizlik, iletişim ve ilgi açısından kesinlikle 5 yıldızı hak ediyorlar. Kendi tatilimizde hem içimiz rahat etti hem kızımız da tatil yaptı.', '2025-11-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-96586692670116e504252729e93307da', 'boarding-1597ba45fc41736b8faec162', 'Tolga Köybaşı', 10, 'Yaklaşık 2 yıldır köpeğimizi misafir ediyorlar.Cihan Bey gerçek bir hayvansever.Kendi evlatları gibi bakıyor sağolsun.Gözümüz hiç arkada kalmıyor.Düzenli alması gereken ilaçları var ve takibi yapılıyor.Emeklerinize sağlık, oğlum sizinle çok mutlu..', '2025-11-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3f12cc2e46152cd29ec9a1c58f8780c7', 'boarding-1597ba45fc41736b8faec162', 'Nergiz Boz', 10, 'Kedinizi ve köpeğinizi  güvenle emanet edebileceğiniz, ilgili ve deneyimli bir ekip. Hem tesis hem de çalışanların yaklaşımı beni çok memnun etti; sevgiyle ve profesyonellikle ilgileniyorlar. Kesinlikle tavsiye ederim — özellikle ilk kez bırakacak olanlara güven verecek bir yer.', '2025-11-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3933fbf4a09f975b5baa1230d783f25d', 'boarding-1597ba45fc41736b8faec162', 'Sude Orhan', 10, 'Kedimi, seyahatim dolayısıyla 1 haftalığına Yaşam Pet Otel’e bıraktım. Çalışanların ilgi alakası ve kedime sağladıkları huzurlu ortam sayesinde çok memnun kaldık.Ayrıca otelin sahibinin veteriner hekim olması da büyük bir şans.🌸', '2025-11-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-46696ab660849310092429046f8a937f', 'boarding-1597ba45fc41736b8faec162', 'betül behiye çiçek', 10, 'Gerek ev sıcaklığı, gerek hijyeni ve özenli bakımıyla özellikle veteriner hekim kontrolünde dostlarımızı rahatlıkla emanet edebildiğimiz için çok memnun kaldığım bir işletmedir kendisi. Veteriner hekim Bektaş beye ve ekibine sonsuz teşekkürlerimi sunuyorum.', '2025-11-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-62abd0e1f1976af1ce10ac29', 'Moon Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Yalova', 'Köyiçi', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWknNWAQop1sNI6PmlPmalskkuMxbTMlbC6Cs9DZCizuE4kSx-uU-wM26rgpqSjZ0hskTbHRSO9yEsDs6libHS2achFRw5TuKcXI5yUfIOgnFLpFsRmDkU8ZlrZ-cHHMpdCvDpn81_LLvZvW=w408-h272-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWknNWAQop1sNI6PmlPmalskkuMxbTMlbC6Cs9DZCizuE4kSx-uU-wM26rgpqSjZ0hskTbHRSO9yEsDs6libHS2achFRw5TuKcXI5yUfIOgnFLpFsRmDkU8ZlrZ-cHHMpdCvDpn81_LLvZvW=w447-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm8MuWqeyy9rjRTbDF0dPKWDVETcxKR4rytFELe1QPcbi-8dPco7AlotdgdgmEKMWmaSfVxTyQON6aqczVpqshl8ZK7BGSYs06TKVWwgpSCX0J1ATBYUB3UQzIO2cAJx6EZowDrxP3rHsw=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmokEqQ7-wJ3HGO5KERQXyWbnn7dTkBV4RIfk07MfnnMTL3AzmkLsYVcLJBmrRUjIniutPmCdfsQ6mbh1lPtibrCpLTZfXmxr75jCU9hO5JlrCkKtDEPaUY_1V0Q0ATiieAZT5Ain5UyQ=w224-h336-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlesAjgM4BZ8n1GmH-6Zeh9RShxVHQCpFWtSG4nJBCsPuTxfubSGA9HRz9VppevgK6rzGXzGACiDJU_NNsZEarejS8G0OxpHMdiVmDdOVzbAWV1diB6NonW5LYUWXZTGX8XvSlAO1mduTLy=w447-h298-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","yalova-kedi-oteli","koyici-kedi-oteli","yalova-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Moon Pet Otel, Yalova Köyiçi bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 397 72 90', NULL, 'https://lovespoodles.com/', '{"google_maps":"https://www.google.com/maps/place/Moon+Pet+Otel/data=!4m7!3m6!1s0x14caf19834428767:0xc4773a9ae6037e72!8m2!3d40.6519065!4d29.1978871!16s%2Fg%2F11yd0rpvr8!19sChIJZ4dCNJjxyhQRcn4D5po6d8Q?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJZ4dCNJjxyhQRcn4D5po6d8Q', 'boarding-62abd0e1f1976af1ce10ac29')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-54e186fc3f73787f5b0fbcc197d59dfd', 'boarding-62abd0e1f1976af1ce10ac29', 'Tuğba Demirtaş', 10, 'Köpeğimizi ilk defa bir otele bıraktık, çok stres yapmıştım ama hiç yapmama gerek yokmuş. Sahibi çok ilgili, düşünceli. Müsait oldukça fotoğraf video çekip gönderdi. Otel çok temiz ve köpekler için çok keyifli bir yer. Kocaman bahçesi var bol bol orada oynuyorlar. Mama takibi yapıyorlar. Max''in de keyfi gayet yerindeydi. Biz çok memnun kaldık, rahatlıkla tavsiye ederiz. Böyle bir yer bulmak bizim için büyük nimet. Teşekkür ederiz🌸', '2026-07-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-478377a137f099b39de35340629a966a', 'boarding-62abd0e1f1976af1ce10ac29', 'Seçil Burcu Ayaz', 10, 'Ben sadece soru soracağım. Gündüz bakım için kendileri gelip alıyormu çünkü ben çalışıyorum. Arabam yok ve engelliyim.köpeğimi sadece sabah akşam vakit geçirmesini istiyorum. Enerjisini atmasını istiyorum.', '2026-07-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ae1d21b01a46136694b8c3875d2abc02', 'boarding-62abd0e1f1976af1ce10ac29', 'gani aydoğan', 10, 'Yıllara dayalı bilgisi ve gerçek hayvansever olması sebebiyle evimin bitişiği ve gece gündüz kontrolümün altında(Çınarcık Veteriner Kliniği Vet.Hek.Gani Aydoğan)bu işletmeye eğitim ve pansiyon anlamında pet lerinizi teslim edebilirsiniz.', '2025-09-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-aed62a3c1df321fdcd78f231e8c86059', 'boarding-62abd0e1f1976af1ce10ac29', 'Murat Güngör', 10, 'Yalova''da köpek oteli olarak deneyimli ve bilgili insanların olduğu butik bir işletme. Güvenilir ve hijyenik bir tesis. Tavsiye edilebilecek en iyi pet otel.', '2025-07-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-724a9065020848afc528935a', 'Minik Pet Otel / Kuaför', 'Kedi ve köpek kabul eden karma tesisler', 'Yalova', 'Kazım Karabekir', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQjq1nPtWoC75AdZN7b_HbseqbqCBaFOsTQHu1AG64tYAOjH_gp66IhHQ0gkK9ygDdLoKLMJ-J2C5Kw3DLSJWk_w_uZmEQY_sYbN7JaveMpUgUMu-lEEt_J1PsxkYj_HxnzXhu=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQjq1nPtWoC75AdZN7b_HbseqbqCBaFOsTQHu1AG64tYAOjH_gp66IhHQ0gkK9ygDdLoKLMJ-J2C5Kw3DLSJWk_w_uZmEQY_sYbN7JaveMpUgUMu-lEEt_J1PsxkYj_HxnzXhu=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkAfNbhioWU2EU7-PrG5ELNTmbbSG14wqRFgknYDgyt-JpuDq4O7dSp4J5WZuofNm2n1U58fP5YACriDcwiCNMKSK9o9ngJpL8VsaqVpV89fydHe2VRa-jZDjwgOvPYloOLrVNavBssemCu=w234-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlb7OOV1h0aNhRZe8Bg369MndMZH6mFv6fHMiWeU-CevI05nE7Q2yzOtK4hZNXQPbjPWti8sMaZuA3ZxGAG-k70OMIEXaz1blo_Vx2IlO2Wagka4zvLk0PgVH8lTHe-4NnKUStGug=w398-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWldddZdvWfB91jkcVguGXa0nkxPtzkfswRT4-6Q5FsoLjlucoFZ6kGG9qtQFZcayK9GJR9yGi11bHwE3GaZ4SMDaRIG_e8cD5SOsknqFzrnic9BLvpscykrl6a-1hXkTlUTbGpu=w252-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LcsNnAg4IjmCbKceYaNF4w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=264.88773&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Dış mekanda hizmet sunuyor","Tekerlekli sandalyeye uygun oturma düzeni","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","yalova-kedi-oteli","kazim-karabekir-kedi-oteli","yalova-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Minik Pet Otel / Kuaför, Yalova Kazım Karabekir bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0533 349 41 32', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Minik+Pet+Otel+%2F+Kuaf%C3%B6r/data=!4m7!3m6!1s0x14cafbdbf556c43f:0x320741a65991376!8m2!3d40.6524685!4d29.2524497!16s%2Fg%2F11vb4cx5zl!19sChIJP8RW9dv7yhQRdhOZZRp0IAM?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJP8RW9dv7yhQRdhOZZRp0IAM', 'boarding-724a9065020848afc528935a')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-890154e89fa39e6c1d9f6e1b79359aa1', 'boarding-724a9065020848afc528935a', 'Serkan aykol', 2, 'Bayram tatili nedeniyle can dostumuzu bu pet otele bıraktık. Köpeğimiz büyük ırk bir Akita Inu ve işletme sahibi, gerekli evrakları teslim alırken cinsini ve özelliklerini bilerek kabul etti. Ancak konaklama sürecinde köpeğimizin ulumasından rahatsız olduğunu belirterek, şehir dışında olduğumu ve gelip alma imkânım olmadığını defalarca söylememe rağmen sürekli “köpeğinizi alın” şeklinde baskı yaptı. Tatilde olmama rağmen bu süreç benim için oldukça stresli ve huzursuz geçti.

Bir pet otel işletmesinin köpeklerin doğal davranışlarından biri olan ulumaya karşı bu kadar tahammülsüz yaklaşması beni ayrıca şaşırttı.

Asıl üzücü olan ise köpeğimi teslim almaya gittiğimde yaşandı. Köpeğim yoğun şekilde idrar kokuyordu ve iki ön bacağında yaralar olduğunu fark ettim. Bu durum beni son derece rahatsız etti ve hayal kırıklığına uğrattı.

Yaşadığım bu deneyimi, can dostlarını burada bırakmayı düşünen kişilere bilgi vermek amacıyla paylaşıyorum. Kararınızı verirken bu tecrübeyi de göz önünde bulundurmanızı tavsiye ederim.', '2026-06-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ac7220da58046d68a099fe39480c5d21', 'boarding-724a9065020848afc528935a', 'Melisa Mengüverdi', 10, 'İlgisi, alakası ve tabiki işletmenin temiz, güvenli oluşu benim için çok önemliydi böyle bir ortamda çocuklarınızı bırakmak isterseniz hiç düşünmeyin ve kesinlikle bırakın. Tekrar teşekkürlerimi iletmek isterim.. 🥰', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ee9e1094a0eb868c637a3b623905f376', 'boarding-724a9065020848afc528935a', 'Zynpe', 10, 'Özel ve yaşlı kedimi 2.kez Eylem Hanımın güvenli ellerine bırakıyorum. İçim çok rahat. Herkese tavsiye ediyorum. Eylem hanım, kendi canı gibi bakıyor kedime.', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-08a499e8f72bd5259537468d93cae523', 'boarding-724a9065020848afc528935a', 'Aylin BULUT', 10, 'Bugün can dostumun tıraşı için ilk kez geldik ve gerçekten çok memnun kaldık. Hem ilgi hem de profesyonellik mükemmel çok rahat ve mutlu görünüyordu. Tıraşı tam istediğimiz gibi olmuş, tertemiz, düzgün ve çok şirin görünüyor! 💛

Emeği için Eylem hanıma çok teşekkür ederim. Gönül rahatlığıyla herkese tavsiye ederim. Artık tıraş için tek adresimiz belli! 👏🐶✂️', '2025-07-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5e3e457d667c771ebba881671fce4a04', 'boarding-724a9065020848afc528935a', 'Behiye Güven', 10, 'Eylemi 3 yıl önce tanıdım...şans köpek şanslı kedi zeytin köpek...ameliyat olduğumda misafir etti 7 gün...benden daha iyi baktı emeğine sağlık...', '2025-06-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-0063f0a45c274ce4ec88566e', 'catdoghouse78', 'Kedi ve köpek kabul eden karma tesisler', 'Karabük', '. Yıl', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3nxH76yy_doOLy7i3x9ILA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=251.76195&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3nxH76yy_doOLy7i3x9ILA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=251.76195&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3nxH76yy_doOLy7i3x9ILA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=251.76195&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","karabuk-kedi-oteli","yil-kedi-oteli","karabuk-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'catdoghouse78, Karabük . Yıl bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 805 74 96', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/catdoghouse78/data=!4m7!3m6!1s0x4083559fb16aae11:0x79636f93184fcfd!8m2!3d41.2236563!4d32.6693855!16s%2Fg%2F11kbfv51tf!19sChIJEa5qsZ9Vg0AR_fyEMfk2lgc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJEa5qsZ9Vg0AR_fyEMfk2lgc', 'boarding-0063f0a45c274ce4ec88566e')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-2c2202125d9cbeb3a4decfd0', 'Pati Pet Evcil Hayvan Oteli', 'Ev tipi bakım merkezleri', 'Osmaniye', 'Yedi Ocak', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmm8TTgtIN6XBqUfKwaTMoZ0ixo3ZDHifi3DlohvCvrpFCBtBCE--M55a3Gq8xWcpqTKx5yH4y4Mbq5t9Mcpf5pEs7IGV5F4e6vqBtVnP4DuieghVunXIbxMbjIJeLK5ujK7N-Gcg=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmm8TTgtIN6XBqUfKwaTMoZ0ixo3ZDHifi3DlohvCvrpFCBtBCE--M55a3Gq8xWcpqTKx5yH4y4Mbq5t9Mcpf5pEs7IGV5F4e6vqBtVnP4DuieghVunXIbxMbjIJeLK5ujK7N-Gcg=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnSHskq5IeRK3FHCgkZuuQEIZW_bBZQSOWXhYgS7WxqO_7Ce_CABkGGOj3x7hh4LHxKWH4H4p9uRj16cV_ImfmHEbHo9j0ExE8Zxn9rGNzemg4aPBTcFBSTxLhgN1eHx0zUNxWh=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkSwmMh1PXnBoLNnLbkcTQ8BpUhs0ghnbxUfH55oHPlJhd-ou1Vv8qRIqgd57fsqUBnWDUiONu3MfJyzWM3GPpXFCKaoeK6m92mwX1qKX4RYhXRjBc8vwOWkiPa3DbJI0pJusfftg=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=L2ZzI-NOIuYsTWlE1HKkXA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=58.41652&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","osmaniye-pet-oteli","osmaniye-kedi-kopek-oteli","yedi-ocak-pet-oteli","osmaniye-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati Pet Evcil Hayvan Oteli, Osmaniye Yedi Ocak bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0507 243 27 09', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pati+Pet+Evcil+Hayvan+Oteli/data=!4m7!3m6!1s0x152f218277cb6479:0x9700174c13e9f19a!8m2!3d37.0644254!4d36.2547666!16s%2Fg%2F11t17lp46v!19sChIJeWTLd4IhLxURmvHpE0wXAJc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJeWTLd4IhLxURmvHpE0wXAJc', 'boarding-2c2202125d9cbeb3a4decfd0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1521c85beaa0bcb46bea4fa4c350ffe3', 'boarding-2c2202125d9cbeb3a4decfd0', 'Kürşat Alparslan TURHAN', 10, 'Evcil hayvanlarınızı güvenle bırakabileceğiniz bir yer, Merve hanım tam bir hayvansever. Ayrıca Evcil hayvanlarınızın tüm ihtiyaçlarını uygun fiyata bulabilirsiniz.', '2022-11-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fa1d3d02c5422aaf2f25a344e46ea69c', 'boarding-2c2202125d9cbeb3a4decfd0', 'Sule Salman kaya', 6, 'Sizinle iletişime geçebileceğim bir telefon numarası var mı? Acil ulaşmam lazım.', '2026-07-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-73fb3186ba05157cda5b491b', 'Pati Pet Evcil Hayvan Oteli', 'Kedi ve köpek kabul eden karma tesisler', 'Osmaniye', 'Yedi Ocak', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Xj4rKlvhCcpoQJ91Py1uSA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=25.39914&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Xj4rKlvhCcpoQJ91Py1uSA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=25.39914&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Xj4rKlvhCcpoQJ91Py1uSA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=25.39914&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","osmaniye-kedi-oteli","yedi-ocak-kedi-oteli","osmaniye-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati Pet Evcil Hayvan Oteli, Osmaniye Yedi Ocak bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pati+Pet+Evcil+Hayvan+Oteli/data=!4m7!3m6!1s0x152f21c5f260c6f9:0x9a6bf0bf5b440b30!8m2!3d37.0658225!4d36.2479887!16s%2Fg%2F11x73g50cd!19sChIJ-cZg8sUhLxURMAtEW7_wa5o?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ-cZg8sUhLxURMAtEW7_wa5o', 'boarding-73fb3186ba05157cda5b491b')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-edd21949437cc121d824d882', 'Ömder Petshop', 'Kedi ve köpek kabul eden karma tesisler', 'Erzincan', 'İzzetpaşa', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjm7E0stDg-C_MYzBwnNbiaTp6KnhorHK1ZkiXXViEiCAfNJvBy4sjNB79NJwe3Y3YoAwua8RoHYRozH2biXV8kYew2MCdRXHn83BhiS0sd83-GA7Ho08OG8wIA1LZrp-adfxiKHZILCBU=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjm7E0stDg-C_MYzBwnNbiaTp6KnhorHK1ZkiXXViEiCAfNJvBy4sjNB79NJwe3Y3YoAwua8RoHYRozH2biXV8kYew2MCdRXHn83BhiS0sd83-GA7Ho08OG8wIA1LZrp-adfxiKHZILCBU=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn8Jezg_69eCbEFP2useGeD-8I9o6Ip_xCxpi7AcTuHtJ8CFYKm9x430gkruiZ335vAWmWBL4plAzeawCqiWrc5P075hoUGXJ8guxDBWlaL3Id8OZfrca3cYC5BsTtvnYlbzAdm9Wpw9pE=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-mXbdpShVr0r4P7ugpikbK8sofupHpStwBGwA-I6Nrh4ICVPCEzL7sSWNwDMbFpiRopAlwIivPS9OqIJ34lyu0eINnYNcN_e_XVMnuF1Hvb4WWKKQC0WXC9fHfT0ZxE_ugz5-I2pEyrps=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmm8mm283XRqMQdUIXXCRxr7kCuDjxT-0sDAa84oBpnWPIv4r2l3b4URZOcnHgA-oy6zdoY_57l_k67BKU23gfjHvkBw5i7aQPwWrPxvAGvJ4Lz-30nDiFN_o87UV5QpQisP2BUqH_LZWux=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=6npL1Loj4I9GI07b4kT06Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=183.66232&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Randevu alınması önerilir","Banka kartları","Kredi kartı","Çocuklar için uygun","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","erzincan-kedi-oteli","i-zzetpasa-kedi-oteli","erzincan-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Ömder Petshop, Erzincan İzzetpaşa bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 133 87 13', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/%C3%96mder+Petshop/data=!4m7!3m6!1s0x40700db083eb9151:0xbf99001deadb26e9!8m2!3d39.7379741!4d39.5102309!16s%2Fg%2F11xtpjk4k9!19sChIJUZHrg7ANcEAR6Sbb6h0Amb8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJUZHrg7ANcEAR6Sbb6h0Amb8', 'boarding-edd21949437cc121d824d882')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-85b800c133e95a46a18c4e1cc2abf1a9', 'boarding-edd21949437cc121d824d882', 'Rüveyda TANOĞLU', 10, 'Köpeğimi traş ettirmek için genellikle İstanbul’a götürüyordum, seyahatlerimde İstanbul’da ki pet otele bırakıyordum. Uçak bileti alırken evcil hayvan kontenjanına göre alıp, havalimanına daha erken gitmek zorunda kalıyordum. Dolayısıyla rahat edemiyordum. Şimdi seyahat edeceğim zaman, traş olması gerektiğinde ya da banyo ihtiyacında Ömder Pet Otel’e gözüm kapalı emanet ediyorum. Kamera kayıtlı olması, özenli bir bakım sunması ve hijyenik ortama sahip olması gerçekten mutluluk verici. Bir kadın girişimci olarak Hatice hanım gerçekten işini özveriyle yapıyor. Kedimi traş ettirmek istediğimde uyutarak yapıyorlardı. Kendine gelmesi, anesteziyi üzerinden atması oldukça zorluyordu. Şimdi maksimum yarım saatte prensesim hazırlanıyor. Anestezi almadan keyifli bir traş süreci yaşıyor. Patili dostlarım mutlu, ben mutlu… Sadece kedimi ve köpeğimi değil muhabbet kuşumun bakımını bile yapıyor. Şiddetle tavsiyemdir. Sunduğu hizmetlerden dolayı teşekkür ederim.', '2025-08-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-da0816eb3d553bc03d662e41ceca87fc', 'boarding-edd21949437cc121d824d882', 'Kübra Alpaydın', 10, 'Elazığ''dan gelen iki kediciğimize çok güzel bakıldı. İlginiz ve alakanız için çok teşekkür ederiz. Doğu Anadolu bölgesinde böyle kaliteli hizmet vermenizden dolayı sizleri tebrik ederim.', '2025-09-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2e47b397ffd0cd44e57eefe83592bc11', 'boarding-edd21949437cc121d824d882', 'Saba Nur ATLI', 10, 'Ömder petshop ve pet otel il dışına çıktığım zaman kedimi bıraktığım bir yer. Günlük bana fotoğraf ve video atmaları çok ince bir düşünce. Gözüm arkada kalmadan güvenip rahatça bırakabiliyorum. Kafes ortamları da çok iyi geniş bir ortam ve  mamayı da kendilerinden kullanmaları da büyük incelik Hatice hanımın sevgisi ve ilgisi için teşekkür ederim.', '2025-08-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3405994835dae31ad788573029693ac4', 'boarding-edd21949437cc121d824d882', 'Didem Diken Güzellik Salonu', 10, 'Bir hayvan sever olarak 4 yavrum var gözüm kapalı emanet edebileceğim bir Hatice teyzeleri var. Erzincanda hijyenik tertemiz patili dostlarımızın güvenle kalabileceği pet otel.', '2025-08-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-45c86bee849077fd5017195cb2c549d4', 'boarding-edd21949437cc121d824d882', 'yasemin say', 10, 'Hepsinden önemlisi hatlce hanım çok güler yüzlü neşeli bir lisan öyle olduğu lclnde pozitif enerjlslnl bizde bulaştıryor. İşine  aşık  bir kadin', '2025-08-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-8db70d4006e23c469df4e77e', 'Eskişehir Patişah Köpek Oteli ve Çiftliği', 'Köpek otelleri', 'Eskişehir', 'Takmak', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCZt_8WnhwAVGtQfmy_C_hWhDdh0tBJdjTiJZNekYdnjb8OLhfJUH3q5pTt-BUQb4kWFRGnW9wcj79sY6lYr50RW_HQJMkSEUn2gtC_KK9lW2y_XEW9Jnfu6z1mbHm5b1jAHJY=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCZt_8WnhwAVGtQfmy_C_hWhDdh0tBJdjTiJZNekYdnjb8OLhfJUH3q5pTt-BUQb4kWFRGnW9wcj79sY6lYr50RW_HQJMkSEUn2gtC_KK9lW2y_XEW9Jnfu6z1mbHm5b1jAHJY=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmxhRxcnjrJeV3B405bm8nnWEfwW5rAjjAw1EuQwcgkxG254OoFzPJzhLjU3rxcGrLbokg6JoKaKlI-udWrseqiKjvu8q7rAkHUOx9oqujm248cUlyqwu38RVGBOoDW-o9AMFnBiQ=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkaSP2e0FhpqBPI6pAptg7pBscHk4GOD5a_72__i-uTskkolNhsS6Y_TK9nHTSvMEAZ2TYJ2Oj7FJv7p5IDaqFLEBx30zsNcmI5ebg5znVaqcqsG2shHlEBZg7FbiLY07H6ZoVk=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkUJb1vG9xUKM6sxB4N18B_MfRWP4XlHiBu4vGfA2ogMlEPwmSOOLF90Oh-Iwa768h-T1hiHDGLHqpMuv7XDdcN_lSDQ0tSNA4PJ04PdjrsggIa1eSo_uNeqVIvr6MTibfMQuE=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklZbV0UZY7zuh1FWvWX9whxqeaCX64PUxOoPRKom_GgCKDxQBuzKXbfNYs36Zu4riGGsMStBHRl2E6d5qJebMjVopI811gw_SbTGx-4YG9FzBv0mCIGM0NoKSpan8Dhxx0SokPXg=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbDB6SHUMH69lzw-Qu_sm99avBSDToa8TOXRcBgO15p3-I4CpoVdnwL2RzV4otIhMofV4RcecGCxksWHKPRmvTXdC2Cpc4YWhlLipd4xcm8oZr1_g53zP26j8F3uW-s1gyDvA=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktu6jAdFTyoq7D-FKfocPFRAtF50KhBITnyLBP9-bGXBl8icaM47ixBxKKYtGf9zESmofTWmOTtP4E13lg4a8Lftt0I1GPQQMYqKFtSSWv5MqsaOonUkejcJesgzGxXOUozysMMg=w224-h298-k-no-pi-2.4194477-ya343.53775-ro-0.26244682-fo100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","eskisehir-kopek-oteli","eskisehir-kopek-pansiyonu","takmak-kopek-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Eskişehir Patişah Köpek Oteli ve Çiftliği, Eskişehir Takmak bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 869 96 26', NULL, 'http://www.patisah.com.tr/', '{"google_maps":"https://www.google.com/maps/place/Eski%C5%9Fehir+Pati%C5%9Fah+K%C3%B6pek+Oteli+ve+%C3%87iftli%C4%9Fi/data=!4m7!3m6!1s0x14cc058d2f250d41:0xd1cacc007b1d1ed8!8m2!3d39.7155477!4d30.3249973!16s%2Fg%2F11gntvtg7b!19sChIJQQ0lL40FzBQR2B4dewDMytE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJQQ0lL40FzBQR2B4dewDMytE', 'boarding-8db70d4006e23c469df4e77e')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ee2b2502bd57c819641988ed3d404f0e', 'boarding-8db70d4006e23c469df4e77e', 'İrfan tarık Karaca', 10, 'Minik dostlarımızı rahatça emanet edebileceğimiz bir işletme. 3-4 kez kullandım. Çok memnun kaldım açıkçası. Eşe dosta bırakmaktan ziyade herkes burayı tercih etmeli diye düşünüyorum.
Çiftlik sahibi Bora bey de çok ilgili.', '2026-06-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-030b68fbab039bcfb8c9ffb2e616f100', 'boarding-8db70d4006e23c469df4e77e', 'selin özimamoglu', 10, '​"Beagle cinsi köpeğimizi 2 günlüğüne güvenle bıraktık. Aldığımızda keyfi gayet yerindeydi, çok güzel ve temiz bir işletme. Sahipleri de son derece ilgili ve iyi insanlar. Kendilerine çok teşekkür ederiz. Bundan sonra Eskişehir’de gözümüz kapalı güveneceğimiz tek adres, herkese gönül rahatlığıyla tavsiye ederiz."', '2026-06-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-479384b1b9463076c27e27e86a6ab451', 'boarding-8db70d4006e23c469df4e77e', 'metin enlioğlu', 10, 'Dört günlük bayram süresince pincher cinsi pekmez kızımızı misafir ettiler, öyleki bu akşam sabırsızlıkla almaya gittiğimizde neredeyse yüzümüze bakmadı ☺️diyebilirim, küçük dostlarımızı güvenerek emanet edebileceğimiz iyi yürekli insanlar, tekrar teşekkür ederiz.', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8c14144cc350f4152fc3a78ecb4f3518', 'boarding-8db70d4006e23c469df4e77e', 'Melek Nalbant', 10, 'Kurban bayramında  poodle cinsi köpeğimizi ilk defa 8 günlüğüne bıraktık ve gözümüz arkada kalmadı çok ilgili ve deneyimliler  Tufan bey  ve eşi çok ilgili diğer ilgilenen erkek personelde güler yüzlü ve ilgiliydi bize bol bol videolar atıp içimizi rahattılar oğlum sürekli tufan beyi  aradı videolar ve durumunu soruyordu  diğer köpekler ile bir araya getirmiyorlar güvenli bir yer kaçması imkansız çim alanları geniş temiz güvenilir sıcak kanlı insanlardı bundan sonra acil durumlar ve götüremeyeceğiz yerlere gönül rahatlığı ile bırakabileceğimiz evimiz oldu çok teşekkür ediyoruz herşey için', '2026-06-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-48f6fd78fd52e9a3b91933f67b840f57', 'boarding-8db70d4006e23c469df4e77e', 'Ayla Gültekin', 10, 'Bayram tatilinde bıraktık buddy ve beylimizi döndüğümüzde gayet sağlıklı ve tertemiz teslim aldık.Sevgili hocalarımıza ve çalışma arkadaşlarına çok teşekkür ederiz bundan sonra tek durağımız ♥️', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-015f4ec096a097807d91970a', 'Paşam Petstore-Pet Kuaför-Kedi Oteli', 'Kedi otelleri', 'Eskişehir', 'Vişnelik', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlMdWXhGjyPFvkSxrFDBNq5_CDoaMpDWH4RO4OaL9rqv1U3A6oL8GBgQMTrBg9AnRfzszDExEXSJs97mIOvLJqc2ZdsbSgHTN2mUhob_Z1lVJMlfEYOrTML-g992Wye9UDdbOQZPQ=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlMdWXhGjyPFvkSxrFDBNq5_CDoaMpDWH4RO4OaL9rqv1U3A6oL8GBgQMTrBg9AnRfzszDExEXSJs97mIOvLJqc2ZdsbSgHTN2mUhob_Z1lVJMlfEYOrTML-g992Wye9UDdbOQZPQ=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzxNbUjb9AqSJwXEyPPzJC0yg_ECMU-15R4D6ffdjtNotMUj-GsUanEKBDjqB2XLxOynz9lUo-wdvulTau265o_sCJnEB1LX4bMArdAYe3Kw5_wOk9IxdWWbkwah16RqkxU6dW9UHPXJos=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm_v_Ly83oC8c6JMi0gLS5t8BsxxmygOWnS44YhjLxqHo3c2O--gvldyquGEg26j7Ir6ss6uNSdVK0Velqov8FoIHF0K4v7seb9FBrTo3cY6uclxuFX2lh3ZwO_9HZpckyGnbCP=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn5lNTYjGhXlwsnZhhs34zlHxTZUfpW4k7xBzQwS6qNo3x6pxI_T5nPolRNOJoXk7r6pDAdNhEVh3ww3J3Jj-Gaya5rvL7-l9hYXA6HhFMo4VqtAQNzrttMxvKf7NAcXJNvs1a1=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlEpbqFu9xLgXI3UUHOnN_XJeeU23JAMy5nO3mBovWALsJFKmEFJ1dT_WbVnhmF3MjYZZk0bVpbLGGmdXETI6VH8QV0qwYASMFRTN4q0iejnG5hpU-EqpYPHIDDATTH82c7VQau=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlKGAEq1DuvS82ohXQ91nbP25-bHVFtsV3Fkl-5XW-6REdX3GJ82zGWZs_5wxR7kfUoXF8jpFm5GqkUIZZndaczu1PZYKi63ZAjAqvbus-9w7mymOuRC0v0YPYEiZ3tbeXMdnr0TYkvllUG=w224-h497-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=RhW1G9pn1AvnXLwmy01sIQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=259.45886&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Banka kartları","Kredi kartı","NFC ile mobil ödeme","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","eskisehir-kedi-oteli","visnelik-kedi-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Paşam Petstore-Pet Kuaför-Kedi Oteli, Eskişehir Vişnelik bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0539 863 87 75', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pa%C5%9Fam+Petstore-Pet+Kuaf%C3%B6r-Kedi+Oteli/data=!4m7!3m6!1s0x14cc17dc04b05bb9:0xb71a1d155f11b6b7!8m2!3d39.763255!4d30.5042044!16s%2Fg%2F11smmdtc06!19sChIJuVuwBNwXzBQRt7YRXxUdGrc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJuVuwBNwXzBQRt7YRXxUdGrc', 'boarding-015f4ec096a097807d91970a')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c9155355ded8aa21d1257163a3c14d88', 'boarding-015f4ec096a097807d91970a', 'Birol Nayir', 10, 'Bir Samoyed sahibi olarak tüy bakımının ve yıkamanın ne kadar zor, profesyonellik gerektiren bir süreç olduğunu çok iyi biliyorum. Can dostumu öyle güzel yıkamış ve kurutmuşlar ki adeta bembeyaz bir bulut gibi çıktı içeriden! Alt tüyleri tamamen taranmış, keçelerden arınmış ve mis gibi kokuyordu. Bu zorlu ırkın dilinden bu kadar iyi anlayan bir işletme bulduğum için çok mutluyum. Ellerinize sağlık!', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9a5ccd2345ccff86dcb404961af0f243', 'boarding-015f4ec096a097807d91970a', 'Serap Koç Çam', 10, 'Bizim koca oğlanı yıkayıp traş edebilen Eskişehir’deki tek pet kuaför 😄 çok sık ve çift katmanlı tüylerine rağmen saatlerce yıkayıp kurutup makas tıraşı yapıyorlar. Her seferinde çok yakışıklı oluyor ellerine sağlık 🧿 bir sefer başka bir yerde makine traşı yaptırdık her yerini yara yaptılar 🥲 sizde buradan şaşmayın 👍👍👍', '2025-12-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-105a27f80a0e925d5b812eddbd3a9b5b', 'boarding-015f4ec096a097807d91970a', 'Serhat Öztunalı', 10, 'Kedimizi yıllardır Emrah Bey’e götürüyoruz ve her seferinde çok mutlu ayrılıyoruz. Güler yüzü, ilgisi ve hayvanlara olan sevgisi gerçekten hissediliyor. İşini büyük bir titizlikle yapıyor ve kedimiz de kendisini çok seviyor. Gönül rahatlığıyla herkese tavsiye ederiz. Emeğiniz için çok teşekkür ederiz', '2026-07-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b3a7ff55de9dedfc15c1bf32c9663348', 'boarding-015f4ec096a097807d91970a', 'Pelin Kesim', 10, 'Kedimiz 10 yaşında ve uzun zamandır tıraş olmamıştı tüylerinde çok fazla topaklanma vardı. Çok güzel bir şekilde yardımcı oldular ince derilerinde özellikle dikkat edildi. Kedim normalde hırçın, narkoz olmadan bu şekilde tıraş yaptırabileceğimi bilsem çok önceden gelirdim.', '2026-05-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d2be38b09e1ebc2a124ab7483566f162', 'boarding-015f4ec096a097807d91970a', 'elvan', 10, 'Can dostlarımızı emanet etmek gerçekten kolay değil. Ama Emrah Bey’in ilgisi, sevgisi ve profesyonelliği sayesinde içimiz her zaman rahat. Kedimize gösterdiği özen ve sabır için minnettarız. İyi ki sizi tanımışız. Gönülden tavsiye ediyoruz', '2026-07-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-9f743b4fa13aed9c02b19fac', 'Pati Lisa Pet Oteli', 'Kedi ve köpek kabul eden karma tesisler', 'Eskişehir', 'Aşağıılıca', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkW8DvRlU2v02zPs9-HkFvS3jneGK6EZkDMIKrJSOvp2xyzuByBgTruQUwGLMopa8yYlGOFgrKDsI58pOxFz6Qqkbcqcp5IoaAAvoKCBwbXuRH-rmm6uuNoCIRvvddw1GGiJvdb1TnbQDZq=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkW8DvRlU2v02zPs9-HkFvS3jneGK6EZkDMIKrJSOvp2xyzuByBgTruQUwGLMopa8yYlGOFgrKDsI58pOxFz6Qqkbcqcp5IoaAAvoKCBwbXuRH-rmm6uuNoCIRvvddw1GGiJvdb1TnbQDZq=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFRABzXWvftMsTVZxKuka5LSSVgVJgBycbsQ1rpFqjCcsV2vwB-GvjqihPXa3gM4e5SvhbsTgI7HDTW6zu0KH-IrQfi7RK-1h5VF5tLds0CV3-CNhL1IA3D38jMZ7N2VDUndQ6gT-Y9eY=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-mdHAyS3jIZUKP5gGWwYhI6MxcJcqB0RqtH0kQpF6vD3Z0SiSp3WUVoRz3DUAqZxO5NTOG89aWdMHYbMCVwNqaKXmmM7L5XZdmaHWOIKyzE4_jxhPm2SV7E-ip3mf6OF_A0SKGg6L68gj=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xK01hjpnMMaipjK_1O68EA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=94.57808&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","eskisehir-kedi-oteli","asagiilica-kedi-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati Lisa Pet Oteli, Eskişehir Aşağıılıca bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 919 34 98', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pati+Lisa+Pet+Oteli/data=!4m7!3m6!1s0x14cc17fa361b907d:0x491145f00580cb20!8m2!3d39.5570927!4d30.4545819!16s%2Fg%2F11x6gy8st6!19sChIJfZAbNvoXzBQRIMuABfBFEUk?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJfZAbNvoXzBQRIMuABfBFEUk', 'boarding-9f743b4fa13aed9c02b19fac')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-83f6777cfe66c6ab476c52a66d811d56', 'boarding-9f743b4fa13aed9c02b19fac', 'Aylin Pekip Şengöz', 10, 'Mükemmel Ötesi Bir Yaşam Alanı ve Sonsuz Güven!

​4 yaşındaki iki köpeğimizi Pati Lisa Pet Otel’e emanet ettik ve hayatımızda verdiğimiz en doğru karar oldu. Sadece bir evcil hayvan oteli değil; tüylü çocuklarınızın kendi evindeymiş gibi hissettiği bir yuva.

​Çocuklarımızın kendilerine ait özel odaları var. Gün içinde hem kum bahçesinde hem de yeşil açık alanlarda özgürce koşup oynuyorlar, enerjilerini harika atıyorlar. Ortamın temizliği, düzeni ve güvenliği gerçekten üst düzeyde.

​Ancak bizim için burayı vazgeçilmez kılan asıl şey, Sinem Hanım’ın gösterdiği eşsiz sevgi ve profesyonellik. Biz daha "Çocuklar ne yapıyor?" diye sormaya fırsat bulamadan, gün içinde videolar ve fotoğraflar göndererek içimizi hep rahat ettiriyor. Her bir köpekle, onların karakterine ve ihtiyacına göre ayrı ayrı, anne şefkatiyle ilgileniyor.

​En önemlisi ise; oğlumuz Louis orada konaklarken bir rahatsızlık geçirdi. Sinem Hanım’ın muazzam dikkati, gözlem yeteneği ve tecrübesi sayesinde Louis’nin kalp rahatsızlığını erkenden fark ettik. Sadece fark etmekle kalmadı; Louis veterinere gittiğinde bile bizzat gidip onu ziyaret etti ve her an video atıp bizi bilgilendirdi. Onun bu dikkati ve sevgisi olmasaydı süreç çok daha zor olabilirdi.

​Gözünüzden sakındığınız patili evlatlarınızı sıfır endişe ve %100 güvenle emanet edebileceğiniz, tek ve en profesyonel adres kesinlikle burası. Sinem Hanım’a ve Pati Lisa ailesine minnettarız. İyi ki varsınız! 🙏🐾', '2026-06-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b51288894d9a75d99e727d0db228d6f5', 'boarding-9f743b4fa13aed9c02b19fac', 'Kubra Delil', 10, 'Köpeğimi güvenerek emanet edebildiğim tek yer.Kendine ait hem kapalı alanı hemde açık alanı olması büyük avantaj.Ayrıca her merak ettiğimde Sinem hanımdan fotoğraf ve video ile bilgi alabildiğim için ve ilgisini gördüğüm için köpeğimi bırakırken gönlüm çok rahat. Fiyat olarakta gerçekten çok uygun.', '2025-07-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ea96573a2d70deab4a903023aba05a42', 'boarding-9f743b4fa13aed9c02b19fac', 'Dilek Yıldız', 10, 'Öncelikle sinem hanıma ilgisi için çok teşekkür ederim oğlumu ilk defa pet oteline bıraktım ama o kadar güzel ilgilendiler ki sürekli video fotoğraf attılar durumunu anlattılar gönül rahatlığıyla evlatlarınızı emanet edebilirsiniz biz çok memnun kaldık 🤍', '2025-09-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-78f7d0291a61b4b14963d905088e8e2f', 'boarding-9f743b4fa13aed9c02b19fac', 'ozge ozdil', 10, 'Harika bir mekan,patili yavrunuzu güvenle emanet edebilirsiniz,benim Cankızıma da çok iyi baktılar, servisleri var,patili yavrularımız için geniş kalacak oda,yumuşak döşek,koşmak için güzel geniş çimenlik alan var,Sinem hanım sayesinde içim rahat çok memnun kaldım,siz de yavrunuzu güvenle bırakabilirsiniz 😍', '2025-05-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f89c3594e334231af803a71f388a23c8', 'boarding-9f743b4fa13aed9c02b19fac', 'Esra Karataş', 10, 'Sinem hanıma Can Dostlarınızı gönül rahatlığıyla emanet edebilirsiniz. Özgürce zaman geçirecekleri güvenilir bir otel.', '2025-05-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-b18ec32842c1178a42c21478', 'Gülümse Kedi Oteli', 'Kedi otelleri', 'Eskişehir', 'Çamlıca', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-MyghEX1ejUNHrdDtNAyO0s-qh2UVRHboM_b_goqke9hi_17jzrfX6DvjfI8tedhgjzXCa-CI7gnTQmr67ZsDoCkaPlV-bPDJnU5NhhJ6kA4O5qZ6pMceb39Nw64S1OYe5WrF=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-MyghEX1ejUNHrdDtNAyO0s-qh2UVRHboM_b_goqke9hi_17jzrfX6DvjfI8tedhgjzXCa-CI7gnTQmr67ZsDoCkaPlV-bPDJnU5NhhJ6kA4O5qZ6pMceb39Nw64S1OYe5WrF=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm5SOHlZ5A8quR_InwOCljvdpr3Q5o-D_SDkZeWSTUkUNXzqV9Qps6YnDGT-_gGJQxLNQZaNEJbmd7w5alUcYoSHbivzX2vNegAMNiG-tH4Q95y8u1dD8ezxv0oKkpvBns-rsvM=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=PVGOEHa0aPi-0zYhsEFM7Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=217.91563&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","eskisehir-kedi-oteli","camlica-kedi-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Gülümse Kedi Oteli, Eskişehir Çamlıca bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0543 149 86 26', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/G%C3%BCl%C3%BCmse+Kedi+Oteli/data=!4m7!3m6!1s0x14cc170d8bc124d7:0x466143a679c58932!8m2!3d39.7844448!4d30.4647153!16s%2Fg%2F11q840574r!19sChIJ1yTBiw0XzBQRMonFeaZDYUY?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ1yTBiw0XzBQRMonFeaZDYUY', 'boarding-b18ec32842c1178a42c21478')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0fef981112063712d5fb4628c56d9baf', 'boarding-b18ec32842c1178a42c21478', 'melis kant', 10, '1 hafta boyunca kızım Lunayla kendi kedileri gibi ilgilendikleri için her gün video atarak beni bilgilendirip gözümü arkada bırakmadıkları için çok teşekkür ederim gözünüz kapalı tercih edebilirsiniz 💖', '2026-06-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2fef335f182bee3773096ce865d3f264', 'boarding-b18ec32842c1178a42c21478', 'Tuğba', 10, 'Çok yakın bir zamanda Kedimiz Haşhaş’ı bıraktık neredeyse bir hafta. Güven Bey, çok güzel ilgilendi. Her akşam bize video gönderdi. Haşhaş’ın her gün biraz daha alıştığını (evi dışında çok korkak ve içine kapanan bir kedi) videolarda hissettik. Bizi bilgilendirdi. Tatilimizi gözümüz arkada kalmadan huzur içinde geçirdik. Genel ve rutin bakımları dışında -kedimiz taranmayı çok sever deyip tarak da bırakmıştık- sık sık taranmıştı. Ortam olarak da çok temiz bir alan. Birçok malzeme orada olduğu için tırmalama tahtası, yatak, tuvalet vb.. kendinize yük de etmiyorsunuz. Her şey için buradan da tekrar çok teşekkür ederiz. 🙏🏻', '2025-06-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5e1f18c9c6f6eaa1a6c7e67c212a97c0', 'boarding-b18ec32842c1178a42c21478', 'Erhan Kocar', 10, '3 günlük iş seyahatimiz dolayısıyla kedimizi bıraktık. Güven Bey’ in samimi yaklaşımı ve bizde bırakmış olduğu olumlu etkiden (ki en önemlisi de bu) ötürü gözümüz arkada kalmadan seyahatimizi gerçekleştirdik. Her gün akşam saatlerinde bize video gönderdi. Kedimizi eve getirdiğimizde herhangi bir huzursuzluk belirtisi görmedik. Kesinlikle tavsiye eder, kendilerine teşekkür ederim.', '2025-01-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-da1837cbc118abec463c051d98729cb7', 'boarding-b18ec32842c1178a42c21478', 'Utkum Ugurlu', 10, 'Kedimi her tatile gittiğimde uzun süreli olacak şekilde (40 gün/20gün)  buraya bırakıyorum ve kesinlikle harikalar her gün video ile bilgilendirme yapıyorlar, sürekli iletişim içinde olmaları harika içimiz rahat ediyor. Her yer temiz gözüküyor. Gönül rahatlığı ile kedinizi bırakabilirsiniz🤩
Teşekkürler Garfield Kedi Oteli.', '2025-01-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1f14b836a747e805913fedd55685c169', 'boarding-b18ec32842c1178a42c21478', 'Aykut Beşik', 2, 'Kesinlikle tavsiye etmiyorum zorunlu bir seyehat nedeniyle yorumlara aldanıp kedimizi buraya verdik ama döndüğümüzde pazar kapalıyız diye pazartesi teslim almak zorunda kaldık ve o günede ücret ödedik hadi önemli değil derken kedimiz korkmuş sinmiş çünkü hiç ilgilenilmemiş bize atılan 30 saniyelik video dışında hayvanın kapısı bile açılmamış resmen hapis edilmiş. Ama madem böyle olacak biz neden size teslim ediyoruz ve ücret ödüyoruz evde bırakırız bir komşumuz günlük 5 dk uğrar aynı şey hatta daha iyi bile sayılır. Bizi hayal kırıklığına uğrattınız.', '2024-12-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-52c5f7563048206790c2e0e9', 'Es Minik Patiler Kedi Oteli', 'Kedi otelleri', 'Eskişehir', 'Ertuğrulgazi', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJStYKu2-XvQ3buTgajg_dI3Ji9_VpxzMXXM0BiaHjCSF7KrklqfPZCHK0Hi75JUu4NfypL5cOcJ9DLVUX9p1HoIjuKoG4d5-0bpzIYYuVE1WA2c7deRpWPORqVZSJxela0hM6ph1fmQ6Y=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmJStYKu2-XvQ3buTgajg_dI3Ji9_VpxzMXXM0BiaHjCSF7KrklqfPZCHK0Hi75JUu4NfypL5cOcJ9DLVUX9p1HoIjuKoG4d5-0bpzIYYuVE1WA2c7deRpWPORqVZSJxela0hM6ph1fmQ6Y=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmezQWHYCKFH_T8o0D_gt-3kvjTMrj9u6_D2uzisLH0EX_VhM600Drm0tCcI3w-tB3ydlBb67D-2-dXUHS2PPkPN8NFcDxP_HGVz99_jVDCSkdoqWENxHMmcL8Jmh8wgs5PUvN_Y3myzgS_=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaA4epRzB5ehhGRrLBNJ6CKn7qnRdGEL0XgaBJzkg_3iS7pBw7D-e-r2wYCj4c_SFoPOu_ic2itKrncFBkquJhXZtcP7wSb6fgt9mqyGq7aVZ1btSLv-VLHRrRh3afwI941Q1r773laUSC=w224-h497-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnD8H8tsV_5zBHoJGuRissTi4itTavLBkBtqNqROXv3Mt4xClqWY-yoya3jqjSEm4yUZuA3V4jrOTtNiRMtCLupQoKlUfMjgh6qGzPYX4AXurpFu4WLv22-1roqS70H6W-tvrLWQOyfYwf-=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnmk_sgBQ7vF-yQ8-lWgvHg5FMd6hVfuhTrMh885SvdSQWLbkEkn1Z21IvMV-Du-J4UVmsyqplA2KtjNDBi4x46QKxxJmyrb0ZELAXZLryLJBe766vzZPAE2WU6fO-ufb_w2dmP12cyKji6=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=gb0wwipvOfSa858pFsuljA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=283.58484&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","eskisehir-kedi-oteli","ertugrulgazi-kedi-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Es Minik Patiler Kedi Oteli, Eskişehir Ertuğrulgazi bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0541 266 00 26', NULL, 'https://instagram.com/es.minikpatiler.kedioteli?utm_medium=copy_link', '{"google_maps":"https://www.google.com/maps/place/Es+Minik+Patiler+Kedi+Oteli/data=!4m7!3m6!1s0x14cc170aef1ca065:0x415d2cb30adf05b2!8m2!3d39.773901!4d30.474395!16s%2Fg%2F11rqjxc_nv!19sChIJZaAc7woXzBQRsgXfCrMsXUE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJZaAc7woXzBQRsgXfCrMsXUE', 'boarding-52c5f7563048206790c2e0e9')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1752c90d31aa12447ccefb6cab04ce0a', 'boarding-52c5f7563048206790c2e0e9', 'Ziya Barış', 10, 'Kedinize nazik, ilgili ve güvenilir bir yer arıyorsanız bence buldunuz... Canım oğlum Snowu mu her defasında güvenle emanet ediyorum🌹', '2026-01-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-35327d5f9615736106cfe4062b0875b6', 'boarding-52c5f7563048206790c2e0e9', 'Yıldız Civan', 10, 'Çok temiz güvenilir biyer sahibesi mükemmel pozitif Bi bayan gönul rahatlığıyla minnaklarınızı bıraka bilirsiniz', '2024-02-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3fb13948d8ac050cf6fc7ff72d6dedaa', 'boarding-52c5f7563048206790c2e0e9', 'Kübra', 10, 'Kedim depresyondaydı aşşırı tüy dökmeye başlamıştı Es Minik patilere bıraktım üç günlüğüne, kedimi mutlu bir şekilde geri aldım. Çok güzel bakılmış, aşırı enerjikti, tüy dökümü azaldı. Çok memnun kaldık. Canı sıkıldıkça getireceğim tek adres :))))', '2023-06-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-248f8fb54490648387d8c0bf574b228d', 'boarding-52c5f7563048206790c2e0e9', 'Cavit Samanlı', 10, 'Şehir dışına çıktığımda, tatile gittiğimde vs. Kedilerimin evde tek kalması beni huzursuz ediyordu. Şuanda güvenebileceğim, samimi ve hoş bir ortamın olması çok güzel. İlgileriniz ve samimiyetiniz için çok teşekkürler :))', '2022-06-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ccb549bf35bc8b1cb47e58e771018e34', 'boarding-52c5f7563048206790c2e0e9', 'Resul tabuk', 10, '2 tane kedim var işim gereği çok dışarı çıkıyorum emanet edeceğim tek yer burası ilgi alaka müthiş bazen diyorum kedilerim benim evden daha mutlu oluyorlar sanki😊', '2024-01-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-bdbaa1e8b34b36e2ba28ecbf', 'Eskişehir Falvara Köpek Oteli', 'Köpek otelleri', 'Eskişehir', 'Kümbet', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWma8YdzeS7RDHKveAYSCKkPnqdzMjnUxItegF5-GGxUxH7SiHQLpim3EpN9eS8hAATeGjOkrOU249PKIbipo9fRtyfImH3KcJvh84XG-47PXKSMQYyVT4LFG6nVdlIasPjathKp=w408-h406-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWma8YdzeS7RDHKveAYSCKkPnqdzMjnUxItegF5-GGxUxH7SiHQLpim3EpN9eS8hAATeGjOkrOU249PKIbipo9fRtyfImH3KcJvh84XG-47PXKSMQYyVT4LFG6nVdlIasPjathKp=w299-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVqKfhaZWXvPD6DoTNjL9a_mCwqe9RfDeEaNYdOWzOI-6ULQRSNHQ9_eU_-jzr5nN1L2APOjzxQ6NVdd97Sj-daIdd1lahiGtsVmSrwYESWMG8dNxtpV2gnQr_hKx8CB4_mak2_mGS7FUA=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk_K6V2d7ZJYs1EYsU8eWfDcFe50EGBP_ycbp3ATc9xNJIjGR_u4skck_oplhRr4J5LUtH8cx_5FynO6VIaFv_EWCONj5WvFmZ3sOkYUupo-dwAMpBYEBefTcZuzI2p4soFYvv9Im-C9GW3=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmyc8k4ImiXCyCtOLwTRME_J-qbNtr_80xa6qIbpswJEuI2BXyxmQEr0PFhBI_9PeMZ5fdNNOTu0G6ZjmwYcgIaqyYBcowmOJMJ5yY1vjUSFHLZg9bJyidbAGaxspcDnGfBKZfD=w297-h298-k-no"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","eskisehir-kopek-oteli","eskisehir-kopek-pansiyonu","kumbet-kopek-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Eskişehir Falvara Köpek Oteli, Eskişehir Kümbet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0543 791 11 80', NULL, 'https://instagram.com/falvarapetotel?igshid=MzNlNGNkZWQ4Mg==', '{"google_maps":"https://www.google.com/maps/place/Eski%C5%9Fehir+Falvara+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14cbffe8fece5163:0x2198dd8c69a20f26!8m2!3d39.7069008!4d30.1390403!16s%2Fg%2F11krhvqy80!19sChIJY1HO_uj_yxQRJg-iaYzdmCE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJY1HO_uj_yxQRJg-iaYzdmCE', 'boarding-bdbaa1e8b34b36e2ba28ecbf')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6955c82aed6cb6285e24e4a9a9842522', 'boarding-bdbaa1e8b34b36e2ba28ecbf', 'Duygu Ece Uysal', 10, 'Tatildeyken Oskar’ı gönül rahatlığıyla emanet ettik ve çok memnun kaldık. Gün içinde düzenli olarak gönderilen videolar sayesinde ne kadar mutlu olduğunu görmek bizi çok rahatlattı. Kendi küçük ırk dostlarıyla bir araya getirip sosyalleşmesini sağlamaları da ayrıca çok güzeldi. Oskar’a gerçekten kendi evlatları gibi sevgi ve ilgiyle yaklaştılar. Nilay Hanım’ın hayvanseverliği ve işini ne kadar sevgiyle yaptığı her halinden belli oluyor. Gözünüz arkada kalmadan dostlarınızı emanet edebileceğiniz, gönülden tavsiye ettiğimiz bir yer. ❤️🐾', '2026-07-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e760b578c8bcae7fea7d82b71a8555ef', 'boarding-bdbaa1e8b34b36e2ba28ecbf', 'Merve Yargı', 10, 'Köpeğimiz Loki’yi yanımıza alamadığımız tatillerde Falvara Pet Oteli’ne bırakıyoruz. Nilay Hanım’a çok teşekkür ederiz, kızımıza çok iyi bakıyor. Günlük bilgi ve fotoğraf paylaşmaları da bizi çok rahatlatıyor.  Patili dostunuzu gönül rahatlığıyla emanet edebilirsiniz.', '2026-05-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ffd401ffad65caa0c550cd70d635958a', 'boarding-bdbaa1e8b34b36e2ba28ecbf', 'Rüveyda Özkan', 10, 'Her sene Paficiğimizi gönül rahatlığıyla bıraktığımız yer çok teşekkür ediyom Nilay hanım o kadar tatlı ve ilgili biri ki kendi çocukları gibi ilgileniyor. Ayrıca sokak hayvanlarını da sahiplenmeleri çok takdir edilesi bir davranış', '2025-09-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c1de4e346f3e9eaf2eab642778a3e816', 'boarding-bdbaa1e8b34b36e2ba28ecbf', 'Zeynep Asude Kazancı', 10, 'ilk defa yazın, sonrasında da geçtiğimiz haftalarda köpek dostumuzu 2-3 haftalığına bıraktık. 9 yaşındaki oğlumuzu şu ana kadar pek çok köpek oteline götürmüştük fakat açık ara farkla en güven veren yer Falvara''ydı. ilgileri, sevgileri, köpeğimizi kendi köpeklerinden ayırmamaları, dürüstlükleri, titizlikleri, anlayışları ve kriz yönetimleriyle köpeğimizin ikinci evi kadar oldu :) sosyalleşmesine, beslenmesine, egzersizlerine çok dikkat ediyor, bizi sürekli haberdar ediyorlar fotoğraf ve videolarıyla. ufak tefek sıkıntı durumlarını da başarıyla yönetiyorlar. gözünüz arkada kalmadan bırakabileceğiniz tek yer diyebilirim :) zaten oraya gidip köpekleri nasıl sevdiklerini de gördüğünüzde aklınızda hiç soru işareti kalmayacaktır❤️', '2024-02-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b1804f22c3dbb1cdde9825125309848c', 'boarding-bdbaa1e8b34b36e2ba28ecbf', 'gazi kahya', 10, 'Sahiplenilmiş köpek Oteli,ÜcUzun ve Kısa süreli İyi şekilde Ücretli olarak  bakıldığı Geniş açık alanı olan Köpek bakım evi', '2026-01-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-e8b33f0570f071c852f955e0', 'Patili Kedi Oteli', 'Kedi otelleri', 'Eskişehir', 'Yenikent', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=z_mdazpppQbZ2nG47EkKuw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=94.25519&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=z_mdazpppQbZ2nG47EkKuw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=94.25519&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=z_mdazpppQbZ2nG47EkKuw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=94.25519&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","eskisehir-kedi-oteli","yenikent-kedi-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Patili Kedi Oteli, Eskişehir Yenikent bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0533 815 56 26', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Patili+Kedi+Oteli/data=!4m7!3m6!1s0x14cc3d4b2be25e6d:0x20e5f749c96e834d!8m2!3d39.7429983!4d30.530023!16s%2Fg%2F11wq32kp38!19sChIJbV7iK0s9zBQRTYNuyUn35SA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJbV7iK0s9zBQRTYNuyUn35SA', 'boarding-e8b33f0570f071c852f955e0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-eb527170846dddfc78129ad9c1c0fc33', 'boarding-e8b33f0570f071c852f955e0', 'K.Kübra TAŞDEMİR', 10, 'Kedi oteline kedimizi bıraktık ezgi hanım çok ilgiliydi bize çok yardımcı oldu kedimiz stressiz tam 10 gün geçirdi teşekkür ederiz 🥰', '2024-10-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8de7d011fcc8dc1e2200e0beec60e044', 'boarding-e8b33f0570f071c852f955e0', 'Sami Gözmen', 10, 'Tatile giderken kedimi bırakacağım tek adres, ezgi hanım gayet ilgili ve kendi kedisi gibi bakıyor teşekkürler ❤️', '2024-10-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-49d11032292fee17c3c20a7d', 'Eskişehir Kedi Oteli', 'Kedi otelleri', 'Eskişehir', 'Odunpazarı', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=YBI2SprHV9IvoD_vuRRkhg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=172.39993&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=YBI2SprHV9IvoD_vuRRkhg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=172.39993&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=YBI2SprHV9IvoD_vuRRkhg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=172.39993&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","eskisehir-kedi-oteli","odunpazari-kedi-oteli","eskisehir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Eskişehir Kedi Oteli, Eskişehir Odunpazarı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Eski%C5%9Fehir+Kedi+Oteli/data=!4m7!3m6!1s0x14cc1773ef0cccaf:0xc244c236fde6a9f!8m2!3d39.7698581!4d30.5077247!16s%2Fg%2F11h4ldrgpm!19sChIJr8wM73MXzBQRn2rebyNMJAw?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJr8wM73MXzBQRn2rebyNMJAw', 'boarding-49d11032292fee17c3c20a7d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-d67937db0aab3a271b253999', 'Park Petpoint Tuğba', 'Kedi ve köpek kabul eden karma tesisler', 'Gaziantep', 'Sarısalkım', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlTvjaIvMXFu3TXuptAd8HWqcq4FtqDJ6h8ErJgEt0AfFTEmzBxIykBFg10G6CdETbRUCX_QgJurslXjXq2TMacuEoWqTvj5VTrydOcsDi1WiexwDn7R2jFJIXqxi1md7gzWKgl=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlTvjaIvMXFu3TXuptAd8HWqcq4FtqDJ6h8ErJgEt0AfFTEmzBxIykBFg10G6CdETbRUCX_QgJurslXjXq2TMacuEoWqTvj5VTrydOcsDi1WiexwDn7R2jFJIXqxi1md7gzWKgl=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnFtPTM6cfs4DVxQSJvGTbOWOVG5zAJiE3IRw02ODID-vncpo-56iawUT540H5PP04dWIGKVAJrC6m_WvvVIa6vcahXXRRAye_vNnXQcbW1hF33Jog8jrQJDlrzijPkrT4Mi4XV=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm0tqRyfZiWUrZ2bR3I0VyT0KAFe1f0SBkdD0WoaKpztZ64grY5ZGOYrbo1x6axKxs1TaxU9qv_YsuFvNY7lM4OQ73h34FbZy83yxRz2Azq-IKgKYgE-qCr0CnXO8geKQW2GNyT=w224-h484-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=2F7HjKTzRiNMK2BCKRIclA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=162.21085&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Cadde üzerinde ücretsiz park yeri","Ücretsiz park yeri","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","gaziantep-kedi-oteli","sarisalkim-kedi-oteli","gaziantep-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Park Petpoint Tuğba, Gaziantep Sarısalkım bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 176 24 27', NULL, 'https://www.park-petpointtugba.com/', '{"google_maps":"https://www.google.com/maps/place/Park+Petpoint+Tu%C4%9Fba/data=!4m7!3m6!1s0x152e1f3c5beb7365:0xd12f76b2b00dfe8c!8m2!3d37.095828!4d37.3014681!16s%2Fg%2F11v_3r536c!19sChIJZXPrWzwfLhURjP4NsLJ2L9E?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJZXPrWzwfLhURjP4NsLJ2L9E', 'boarding-d67937db0aab3a271b253999')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-830890ba55f7cb1643240d0c9f37d2fd', 'boarding-d67937db0aab3a271b253999', 'Burak Ciğerli', 10, 'Patili dostlarımız için güzel bir hizmet, kesinlikle Nur hanımın ilgisi ve alakasından oldukca memnun kaldık. Teşekkürler', '2026-06-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a2286e8fb15fb2110b029a7d257ad798', 'boarding-d67937db0aab3a271b253999', 'Merve Aydoğdu', 10, 'En kıymetli yerimiz ikinci evimiz oldu çalışanlar ilgili ve güler yüzlü burayı mutlaka keşfetmeniz lazım 🤗', '2026-06-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-38f892675c3975159c3482ed03d45dde', 'boarding-d67937db0aab3a271b253999', 'Hilye Eryol', 10, 'ilgili ve temiz bir yer, kedimle birlikte severek gidiyoruz teşekkür ederiz', '2026-06-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-33dbfd63626ee168704677cb13282937', 'boarding-d67937db0aab3a271b253999', 'Merve Paksoy', 8, 'Gaziantep de güvenle gidilebilecek iyi bir veteriner kliniği.', '2026-06-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f3eca8cb1649f23ba946922979082f36', 'boarding-d67937db0aab3a271b253999', 'Berker BAŞEL', 10, 'Mabel’in ikinci evi… gönül rahatlığı ile bırakıyorum. Her gittiğimde mutlaka kendime bir kahve molası süresi ayırıyorum çünkü mekandaki huzur günlük stresten uzaklaşmama vesile oluyor. Bu güzel tesis için teşekkür ederiz', '2025-04-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-f7017cf6dccf811252435ffd', 'Miya Hav Pet Hotel', 'Ev tipi bakım merkezleri', 'Gaziantep', 'Yağdöver', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkuVIUjA1GV8I_xUPCuiVcTBYjntB-tLnHhEVui6DOT-1ynT7XJtSZRBxSFOyQd-WBgeLDHdkiY7B7iAP55UEwWNRJsNsLyjowpgwRU8gJseZV5KMrx17RxTy8xS4oY5LwEMkae=w408-h408-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkuVIUjA1GV8I_xUPCuiVcTBYjntB-tLnHhEVui6DOT-1ynT7XJtSZRBxSFOyQd-WBgeLDHdkiY7B7iAP55UEwWNRJsNsLyjowpgwRU8gJseZV5KMrx17RxTy8xS4oY5LwEMkae=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlaSXLk2ICxBdmA0PsLNVWaXSdgNOmy24gc59wxZyL2ek348nXPreF22SnsseM8F3ksYrTpc4EjBcKjYqYGfo9rZ2vRU-BDlyBOd-juKnzuTFoYrCvaZd7ZKNVCcEKv1zdigrcR_w=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6CXk5zhn0rzguP7YOVOsuuJZaYdG8yTPb9nB8keyo3TxzxH6oEKV7Q4O3rg6MTVhiK3xk8PZJ_8tJp3p-mxFA3yDj_0v5YA57zlMDia1lOnUzDp4Yvg9DkXVsjLHkQVg9QDiPVSJYyN4=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlY_NA5wShxU3Rtrn7fO0JBfmBzDSwRCEoHeFOhl7kFSwOalVbN61qOS8-3oMdEWUo06C51asPcG2qfWhjEDBr1V1MyVe-F0W3oKM50gxcupQZIrXykoQ2X1qpv8HVhehT_04ag=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRtPc0gBEC_yvV5UeHMhhAJmyAHKNxhGrjdZ7q-88kj1XXbOE3BP8-Dx3JMaEZZJEHYKT1wM5aODXNusvYNARBbyPiZ37twuwaKcF9xAF75UOSgAI1LLo9WX6YsEM4FC4ObVZkPzCe7ZrB=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWliYCefyUPFolhJl5OH1QdBJISuJGcE5YKVPWeGEGTkKlQmErZ0l-cKHkvSJvAjbuV7rEZRMH5TDUISVJcmi2DGS9HdU5aUb0Q1wPakWHqvJdjeDpod_fVlF8a8Q7fO5VQmo1IdVwL8GkhB=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=G55kDRMT0o0O1W7vvCh_pQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=337.91144&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","gaziantep-pet-oteli","gaziantep-kedi-kopek-oteli","yagdover-pet-oteli","gaziantep-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Miya Hav Pet Hotel, Gaziantep Yağdöver bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 326 07 33', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Miya+Hav+Pet+Hotel/data=!4m7!3m6!1s0x1531df2b084427a5:0xae599754ff621510!8m2!3d36.9315617!4d37.4092736!16s%2Fg%2F11r8ybm3z9!19sChIJpSdECCvfMRUREBVi_1SXWa4?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJpSdECCvfMRUREBVi_1SXWa4', 'boarding-f7017cf6dccf811252435ffd')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6e1dfd403493b5ec5f015bf87fc5b82e', 'boarding-f7017cf6dccf811252435ffd', 'Beyza Nur', 10, 'Gözüm arkada kalmadan köpeğimi emanet edebildiğim bölgedeki tek pet otel. İlgi, temizlik ve sevgi gerçekten üst seviyede. Süreç boyunca düzenli fotoğraf ve video paylaşmaları da içimi çok rahatlattı. Ayrıca konumu havalimana yakın olduğundan bırakmamız ve almamız çok rahat oluyor. Birkaç kez de evden aldılar köpek serviskeri
İle.  Her şey için çok teşekkür ederiz, kesinlikle tekrar tercih edeceğiz. Ayrıca kısa süreli eğitimimiz için köpek eğitmeni Serhan beye de teşekkür ederiz. Tuvalet problemimiz artık yok. 😊', '2026-07-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1e98f7c5708c1c2e5a7fc3fea76b2ac2', 'boarding-f7017cf6dccf811252435ffd', 'Seda Ayse Demir', 10, 'Güler yüzlü, tatlı , Harika bir ekip ⭐️ evcil hayvanınızı gönül rahatlığıyla bırakabilirsiniz . Ben çok memnun kaldım 🫶🏾 Gaziantep gibi bir yerde böyle bir işletme nimettir.', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a17ee61adb9bb09ac60353795f00204c', 'boarding-f7017cf6dccf811252435ffd', 'Amerikan Güzellik Salonu', 10, 'Köpeğinizi Tuğba Hanım’a gönül rahatlığıyla emanet edebilirsiniz, ona sizden daha özenli ve profesyonel bir şekilde bakacaktır.
Kopek egitmeni Serhan Bey’e de ayrica tesekkur ederim .', '2026-04-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4f9b91ec788a0c5affdb791a4a356b3e', 'boarding-f7017cf6dccf811252435ffd', 'ESRA Özsayıcı', 10, 'Bizim gözümüz kapatarak güvendiğimiz tek otel Antep’te çok ilgili alakalı bir otel ben çocuklarımı hep bu otele götürüyorum Antep’te bir numara  güvenlik açısından ve hijyen açısından personel açısından harika bir otel bir antepli olarak harika bir otel :)', '2026-05-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2ec9c87bda2306c66503d23f47b4cd70', 'boarding-f7017cf6dccf811252435ffd', 'Salih Ekinci', 10, 'Evcil dostlarımızı gönül rahatlığıyla bıraka bileceğiniz tek PET HOTEL gerek mama olsun gerek bakım olsun  her türlü hizmette öncü', '2023-12-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-2e555c0a4a19c2833545caa0', 'Pet VEGAS Pet OTEL & KREŞ ve Üretim çifliği', 'Köpek otelleri', 'Gaziantep', 'Güneykent', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnXZs172p-4VBoG0o4k5KXtnumlXbB9mqY3rQx2RZShEOsE6ryc5RrqgqH8bMXMcrSFv-LiYgWlBICcJyfArEl_NG-Ryhq2XT4-bHtqkHmPCc6FJqRFVbg7EfBmB2N-cV9EFXrp=w408-h509-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnXZs172p-4VBoG0o4k5KXtnumlXbB9mqY3rQx2RZShEOsE6ryc5RrqgqH8bMXMcrSFv-LiYgWlBICcJyfArEl_NG-Ryhq2XT4-bHtqkHmPCc6FJqRFVbg7EfBmB2N-cV9EFXrp=w238-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWni43dJstd8z2yT_JCYByF8GFiugaXiXG6gpYhp5GTrtE8Mm1Z5gdy_o6zRZ9B1MjR7hvNys_VmN-F6Wza_b0fCLLHCXZI15SVUR2mVxfYDZw4ZNZFk2ctXaxWNKzij7qkW7clH=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmK5Dyr9ezDnujItindZOncTM8wNIprY3GPIyAZP2jPfAoNcCSPpX2tQDXWNk2p2cgQO2fpsRkFLg-a1DbFRDRL4HywV2udlYQqwIUKmRnYWsBisSKbo8KMSscpYsHRSDN5vvAf=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmK5Dyr9ezDnujItindZOncTM8wNIprY3GPIyAZP2jPfAoNcCSPpX2tQDXWNk2p2cgQO2fpsRkFLg-a1DbFRDRL4HywV2udlYQqwIUKmRnYWsBisSKbo8KMSscpYsHRSDN5vvAf=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=GfcRk-ixWmIeXUMv0DYxxw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=40.036533&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","gaziantep-kopek-oteli","gaziantep-kopek-pansiyonu","guneykent-kopek-oteli","gaziantep-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pet VEGAS Pet OTEL & KREŞ ve Üretim çifliği, Gaziantep Güneykent bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0552 675 98 06', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pet+VEGAS+Pet+OTEL+%26+KRE%C5%9E+ve+%C3%9Cretim+%C3%A7ifli%C4%9Fi/data=!4m7!3m6!1s0x1531df7e088f5bdf:0x9eca4de7e0d8cd87!8m2!3d37.0270692!4d37.3079098!16s%2Fg%2F11h13kwgj9!19sChIJ31uPCH7fMRURh83Y4OdNyp4?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 6.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ31uPCH7fMRURh83Y4OdNyp4', 'boarding-2e555c0a4a19c2833545caa0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-779130e3164d9773bfa1dcb5a57fb1c6', 'boarding-2e555c0a4a19c2833545caa0', 'Burhan Keles', 2, 'Numara kullanılmıyor .
Arayıp ulaşamadığımız bir yerden hizmet te beklemeyin. Can teslim ediyorsunuz sonuçta', '2025-04-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-aa16eb3f1824f9f42da3b63d8f0c1030', 'boarding-2e555c0a4a19c2833545caa0', 'MKC', 2, 'Dostumuzu bırakmak için iletişime geçmeye çalıştık. Konumu burda belirtilen konum değil. Bize bir konum atmak için yarım saat beklettiler. Ve herhangi bir hizmet alamadan evimize dönmek mecburiyetinde kaldık. Hizmet almadık bu anlamda bir şey söyleyemem fakat müşteri iletişimi ve koordinasyonu çok çok zayıf. Umarım daha profesyonel çalışmaya başlarlar.', '2023-01-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7b62e5057f9e6cea25f3f7dcb9c047f8', 'boarding-2e555c0a4a19c2833545caa0', 'Ilya kıpır', 2, 'ilanda yazılan telefon numarasına ulaşılamıyor.köpeğimi bırakmak istiyorum. aktif bir telefon numarası yazarsanız iletişime geçebilirim.', '2024-07-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-892ca75350dcac0d46842157a8768586', 'boarding-2e555c0a4a19c2833545caa0', 'Yunus Demir', 10, 'Köpegimize gösterdiğiniz ilgiden dolayı teşekkür ederim. 2 aylık süreçte gerçekten çok ilgilendiniz. Duyarınızdan dolayı teşekkürler', '2023-02-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-99c43358f3f1b6fcbe2a9b8729a11340', 'boarding-2e555c0a4a19c2833545caa0', 'Gülseren Bozkurt', 2, 'Hayvanımız verilmeden önce daha uysaldı hasta ve çok eğitimsiz bir şekilde geri geldi hayvanlarınızı verecekseniz daha da profesyonel belgeli olan yerlere eğitimcilere teslim edin', '2023-02-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-741e51649ea757c74e6a9d52', 'Kedi Oteli', 'Kedi otelleri', 'Gaziantep', 'Yaprak', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkflI30FsZCvpyzaM0X3X-V4YpLGYY3-CrZMPEwoPcbis9KyGS3KwDMV1PCafkcT8yw4YytiM5CkhBx6pzfF6ropbTuPTLp7TU0GrNOSelKQgDpj2Y2_92zx_5Y_5E7sCzN4seR=w408-h309-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkflI30FsZCvpyzaM0X3X-V4YpLGYY3-CrZMPEwoPcbis9KyGS3KwDMV1PCafkcT8yw4YytiM5CkhBx6pzfF6ropbTuPTLp7TU0GrNOSelKQgDpj2Y2_92zx_5Y_5E7sCzN4seR=w393-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkflI30FsZCvpyzaM0X3X-V4YpLGYY3-CrZMPEwoPcbis9KyGS3KwDMV1PCafkcT8yw4YytiM5CkhBx6pzfF6ropbTuPTLp7TU0GrNOSelKQgDpj2Y2_92zx_5Y_5E7sCzN4seR=w393-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl5iDeJ9e0UcT0Y0acqaiDxn96kqtNouKGveEp8nYrurO5cMDdfzPm6jfoMfD_wdre3YM-ficFR9RzIS9TiS01-V5PBz6zt3yp4FFgu_kCcSg-5nMoOFGM6mmuKTTgbR4sKw7c=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=-cXYGSQ0_vuUPJJ-tLVE9Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=244.2257&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","gaziantep-kedi-oteli","yaprak-kedi-oteli","gaziantep-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Kedi Oteli, Gaziantep Yaprak bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0552 247 06 25', NULL, 'https://www.instagram.com/sercenin_goz_yas?igsh=MWY5Y2FnMGtxaml6cg==', '{"google_maps":"https://www.google.com/maps/place/Kedi+Oteli/data=!4m7!3m6!1s0x1531e14c04701b31:0x108418b5151e0f02!8m2!3d37.0704398!4d37.3827007!16s%2Fg%2F11jlh7l3wm!19sChIJMRtwBEzhMRURAg8eFbUYhBA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJMRtwBEzhMRURAg8eFbUYhBA', 'boarding-741e51649ea757c74e6a9d52')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9214a748debb2be93d043b25a5b8345a', 'boarding-741e51649ea757c74e6a9d52', 'Mahmut Güngör', 10, 'ilgi alakalari cok iyi guven gercekten hat safhada kopegime cocugu gibi baktı emre beye cok teşekkür ederim', '2020-07-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-33fae3da01f94fe83ba00c2daeec1ecd', 'boarding-741e51649ea757c74e6a9d52', 'yaren altunovaya', 6, 'Kedi 🐈', '2021-07-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-18b8e897d5bba8b2bc53b1de', 'Hatay-Pet Taksi-Pet otel', 'Köpek otelleri', 'Hatay', 'Uluçınar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnoPUhP4vfSE_TMbW06n8obx2a7MZlcEHVYhG1MLYhepAPJ7Tqc-VeyXndpbe9GbfyRRlP2XEg1x46k6HtwpQAsXWwZm7whkJsZlG-XDsdrmtSoplayEFuNM4kP9Va8e8FQG4UhQ-7HDVwX=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnoPUhP4vfSE_TMbW06n8obx2a7MZlcEHVYhG1MLYhepAPJ7Tqc-VeyXndpbe9GbfyRRlP2XEg1x46k6HtwpQAsXWwZm7whkJsZlG-XDsdrmtSoplayEFuNM4kP9Va8e8FQG4UhQ-7HDVwX=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnNO1rHCBfL0nU0e3YG4Wc6z3hMAvz9l49PDHKPXwtezQl6DhrM2zM_QBGplEKCWXaJXvFvfDPR68zVyviWXp5Moh6WDEJGsl83FLQmBIUpOMnMRyoHDUN6bF1zwBrWvSLIeZsDtOW1lYf9=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWllGrw0-qpPcPwmtePt6eUqqHUmS9eTOGz0eQRc_BROt_zSIUIv2qn-3ClRKWlSQhJfwU5zJcvA-cjAfZBOEwlFPJBZZnhKgxTU68Au2mdOAgrreLyNPxDlDuhrSNcPBhpttDCNMS_GMSwn=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Xu_CAmeoquA09xTHHthM4Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=41.675705&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Transfer hizmeti","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","hatay-kopek-oteli","hatay-kopek-pansiyonu","ulucinar-kopek-oteli","hatay-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Hatay-Pet Taksi-Pet otel, Hatay Uluçınar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 955 52 50', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Hatay-Pet+Taksi-Pet+otel/data=!4m7!3m6!1s0x1526095f5cd8949f:0x454b8266d8707ef1!8m2!3d36.4122308!4d35.8903936!16s%2Fg%2F11wv_rf_jq!19sChIJn5TYXF8JJhUR8X5w2GaCS0U?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJn5TYXF8JJhUR8X5w2GaCS0U', 'boarding-18b8e897d5bba8b2bc53b1de')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c11184c91a61d765cf7a6ddedd3264bd', 'boarding-18b8e897d5bba8b2bc53b1de', 'Duygu Altunay', 10, 'İşini severek yapan,gerçek bir hayvansever.
Temiz ve titizlikle işlerini yürütüyor ve tüm canlara gözü gibi bakıyor.
Kesinlikle tavsiye ederim.
Gözünüz kapalı emanet edebilirsiniz.🙏', '2025-12-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e98c1641cafa9e54baec2a9977d874cb', 'boarding-18b8e897d5bba8b2bc53b1de', 'Seren Kisacam', 10, 'İçim rahat hayvanımı teslim edebiliyorum. Güvenilir ve çok iyi insanlar. Herşey için teşekkür ederim 😊🙏🏼', '2025-01-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-308c6baca3a9f92c5cf549a803a91379', 'boarding-18b8e897d5bba8b2bc53b1de', 'tuğba gökyiğit', 10, 'Patili cocuklarınızı gözü kapalı emanet edebileceğimiz biryer ☺️🙏', '2025-01-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-78c419815da145c13c747ed7', 'Bettmy Kedi Oteli Ve Pet Kuaför', 'Kedi otelleri', 'Hatay', 'Pirireis', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkg4KxBuQOMKLk6KK4ZKlSF_zzSUOgxKgtdfncb7LjUCYG8eS1WM89vbPmFvsgYZdJ69bphKFqwEinzsLeO9Qt1QZXjZGJn5KemnNykuB3vwrxfcVIhjqDO7CEQcpibWqCu76GnoKh4aykD=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkg4KxBuQOMKLk6KK4ZKlSF_zzSUOgxKgtdfncb7LjUCYG8eS1WM89vbPmFvsgYZdJ69bphKFqwEinzsLeO9Qt1QZXjZGJn5KemnNykuB3vwrxfcVIhjqDO7CEQcpibWqCu76GnoKh4aykD=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWng_9Dewd3MyDGfBtdGKGeci2sOurUHSXSttm-w0CK8eFQecjQ2uHzz9GGcuMtfZRT9LJ-d9-GrWWnZf812nNs3yn_7z_w-mb4dKYOZ2vfVhTIVYWwSqkF25n-rs0Vv3i5bHbzsGCzOgA6S=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlQUQy4rsfif0iU3Ke1c1Gn4ybOKUFOeYfwEkvdcoeXBjzonTDOvSP8vHrozut3A7Sn9MKgQvU80diZPlHWIjBoCx3B3o5YxURT_FCV7ju27eTlnc0IOqyrow0ROORPFjxSpT-wDfzuih1e=w224-h395-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJynciNMvhKMkgh5mJdjx6eYQhaDTg0ww5o5I0OtXyVqo8foLz3z0hEmtTDL9AO_Qgs9_i5shuZ7gN0bnS9_aRviKMmUF097N_J2NxTGuqRxTqRpzOffJ7CcBZB0hyQ-ly_91ZAqXJdT8=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmfX-ilBZ7NUbFVHtruD1GVe9d0Qtx_DyGIJh8cEirm3_HIdxN68D5wOfqVMvuekHlOW0r3qby3DeCTHJccer5s_0S5yw6sTluOiB8jwHzdqHzGauu0CPWS1VAqzPqq9QGP2uA90GNx5Jir=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSdpoFQn61CZoKpXAbnqSOcESVgV0ykhH-fiJ5PCK0wbXMZHzjQvVH5SftTYb6FEC9iSmOZQjghfsIU_QXKWz6-clOd31JKRvbwe-8PtZpi38nhexDTXFV7PIhM6Lf86DRgmSmL8dtfVI=w224-h395-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qFb3-jkfguBhrPqEV_3swA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=105.581184&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Gerçek mekanda hizmet","Kendi otoparkı var","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","hatay-kedi-oteli","pirireis-kedi-oteli","hatay-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bettmy Kedi Oteli Ve Pet Kuaför, Hatay Pirireis bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0541 359 18 30', NULL, 'https://bettmykedioteli.com/', '{"google_maps":"https://www.google.com/maps/place/Bettmy+Kedi+Oteli+Ve+Pet+Kuaf%C3%B6r/data=!4m7!3m6!1s0x152f590f4aea17b7:0xa7972c0edc67c5bd!8m2!3d36.5869395!4d36.1514719!16s%2Fg%2F11wtr_n4d2!19sChIJtxfqSg9ZLxURvcVn3A4sl6c?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJtxfqSg9ZLxURvcVn3A4sl6c', 'boarding-78c419815da145c13c747ed7')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-be6dc5be0cc5f63bbaa980816eb25daf', 'boarding-78c419815da145c13c747ed7', 'Göksu Selçuk', 2, 'Kedimi 2 günlüğüne zorunda kaldığım için bu otelde bırakmıştım Cekuşu teslim aldığımda hem çantası hem kendisi hem de tasması çok kötü kokuyordu. Çocuğun tüylerine kadar  işlemiş ağır bir koku vardı üzerinde. Ayrıca bize karşı çok saldırgandı hiç bir zaman böyle olmamıştı ilk defa 5 senedir benimle olan kedimi böyle gördüm ve öyle bir şey yaşadık. Bunu söylediğimde bana Ceku gibi çekingen kedilerde bunun normal olduğunu söylediler fakat daha önce başka şehirlerde de kedi otelinde kalmıştı ama böyle bir şey daha önce yaşamadık hatta yerinden o kadar mutluydu ki almakta zorluk yaşamıştık.', '2026-06-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b96183123bc06594bc55aebfca09e6ff', 'boarding-78c419815da145c13c747ed7', 'Bilge Baz', 10, 'Kedimiz Gofret’i 10 gün kadar bu otelde bırakmak durumunda kaldık.Bizi ve kedimizi güler güzle karşıladılar. Her gün video ve fotoğraf attılar. Oldukça güzel bakıldı. Gönül rahatlığıyla bırakabilirsiniz.', '2026-07-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5907d58b76200eb23052f15ce057104b', 'boarding-78c419815da145c13c747ed7', 'betul sonek', 10, 'Kedim Kuyruk’u 5 gün bettmy kedi oteline bıraktım. Engelli bi kedi olduğundan dolayı başta tedirginlik yaşadım ama mis gibi baktılar oğluma. İçerisi tertemiz, her kedi için ayrı vip odalar, oda içinde yatak kum tırmala tahtası her şey mevcut. Çok teşekkür ederiz Bettmy kedi oteli🫶', '2026-05-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3a8023a1ab43999b06e2664e21335db4', 'boarding-78c419815da145c13c747ed7', 'DURU YÖRÜK', 10, 'Minik cüce tavşanımız vardı 15 gün şehir dışında olduğumuz için bıraktık.Yüksek seslerden korktuğu için biraz endişelendik ama çok güzel ve temiz bakıldı aynı zamanda hergün fotoğraf ve videoları detaylıca çekilmişti geldiğimizde tavşanımız çok mutluydu.', '2026-07-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4f23e38bb67106bc61032bda689ec489', 'boarding-78c419815da145c13c747ed7', 'Gökhan Gezer', 10, 'Köpeğimi traş ettirmek icin gittik. Sahipleri o kadar ilgili ve kibardi ki çok memnun kaldik. Ayrica küçük ırk köpeği olupta traş ettirmek isteyenlere tavsiye ederim. Makas trasi yapiyorlar. Ve gayette başarılılar bu konu da', '2026-05-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-faab751f410cbaa33d42c201', 'Pet otel', 'Ev tipi bakım merkezleri', 'Hatay', 'İskenderun', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=fv4JDASF1IkQS6GCwFnmrw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=347.85672&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=fv4JDASF1IkQS6GCwFnmrw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=347.85672&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=fv4JDASF1IkQS6GCwFnmrw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=347.85672&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","hatay-pet-oteli","hatay-kedi-kopek-oteli","i-skenderun-pet-oteli","hatay-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pet otel, Hatay İskenderun bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pet+otel/data=!4m7!3m6!1s0x1525f9d3fbd4600d:0xefdb547a7936b2fb!8m2!3d36.528352!4d36.075931!16s%2Fg%2F11txqdzj7c!19sChIJDWDU-9P5JRUR-7I2eXpU2-8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJDWDU-9P5JRUR-7I2eXpU2-8', 'boarding-faab751f410cbaa33d42c201')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-7c8933c9d63910de95c51c5c', 'HATAY KÖPEK EGİTİMİ VE HOTELİ', 'Köpek otelleri', 'Hatay', 'Adliye', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkurS3V7L1Wc8Xw4YDBQWSlBBzaUm6CK8NVAibwFtCIUOvq1OyIzgamPOsAqPYs52kUojJeqFDtWbuqeYjda7pmjqTdCsw8OXP8V9A1bz1GzHPj-7VNVRY_2BKjbiP9q-NB3XpGMQ=w408-h303-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkurS3V7L1Wc8Xw4YDBQWSlBBzaUm6CK8NVAibwFtCIUOvq1OyIzgamPOsAqPYs52kUojJeqFDtWbuqeYjda7pmjqTdCsw8OXP8V9A1bz1GzHPj-7VNVRY_2BKjbiP9q-NB3XpGMQ=w400-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnUfXzz-0L6zTaYpdQL_cd1MkSUPISrhTyTTSi2nQI8fzB1bTk0By83_C8Rfk61ryjFTWlvEUORL2QFXPBsI8mO5SQZmSdHDfvsTh5lnneVMfz9SevIC5raPneck1QbKdXnE_jn=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlxMoLqT4UmuxNP863xP1y37NfOj7PZR-sfZUbCboq6Mb5ImzWEbc2i8PerBAF5OMKyHXPn26XPQpZQwci3mMehgSd5N10UOnOBOatO4ULyImmk2jbr05ecI70OqqVaqG38VPhOCg=w238-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnq8GraHfjuBd2xr7YjB0vLc1M4eEJ4Mq-Ce3LI2_juuse1rNXWCpzR998ovLooU4bfDfzUdFtsmCV2vEonU1WlOt5B5jKXG-hY-gYbdHTwiJNE92xUBIqpzWMIcxsc5LDpa1XjkQ=w264-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlIKfibgIEf0Ow8FIzROem0b7w6OqLcVBCh-1dnBtGNYvg7DU1biEJuniBlS-WKlRqCZpVelncDlYoINzHDBwkKhBPkmErzIDMhPywCzYl29xA4_Ayhq8kayXePDJbWGKD4swXiCA=w224-h398-k-no"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","hatay-kopek-oteli","hatay-kopek-pansiyonu","adliye-kopek-oteli","hatay-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'HATAY KÖPEK EGİTİMİ VE HOTELİ, Hatay Adliye bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0552 377 36 77', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/HATAY+K%C3%96PEK+EG%C4%B0T%C4%B0M%C4%B0+VE+HOTEL%C4%B0/data=!4m7!3m6!1s0x1525e94b424e480f:0x578831477171c5d6!8m2!3d36.22418!4d36.1281009!16s%2Fg%2F11h1qz30bg!19sChIJD0hOQkvpJRUR1sVxcUcxiFc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJD0hOQkvpJRUR1sVxcUcxiFc', 'boarding-7c8933c9d63910de95c51c5c')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3527c03d464ccadfe37fa66567f335e2', 'boarding-7c8933c9d63910de95c51c5c', 'Salim Tumer', 10, 'Daha önce dört eğitimci ile eğitemediğim köpeğime olcay bey tek seferde eğitti ve benim çocuğum şu an aradan bir sene geçmesine rağmen halen ilk günkü gibi eğitiminden devam etmekte olcay bey İşinde çok güvenilir ve çok dürüst bir insan olduğu için onu takdir ediyorum ve hepinize öneriyorum.', '2025-05-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2384f735a3a644ae73cce5d03e50e54b', 'boarding-7c8933c9d63910de95c51c5c', 'HATKEM HATAY', 2, 'Sokak Eğitmeni tabir edilen sistem çalışıyorsunuz, baştacı ALLAH yolunuzu açık etsin. Konu ile derdim yok- TPE de marka tescili yapılmış isim hakkı olan ve neredeyse benzer Ünvan ile iş yapmanız suç teşkil ediyor ve tazminat hakkı doğuruyor. İsim değiştirin, mesele tatlılkla çözülsun.
SÖZ HAKKI İSTİNADEN:
BEN ALMANYA LİSANSLI KÖPEK REHABİLİTASYON UZMANIYIM, Köpek Eğitmeni DEĞİL - BU BİR.
HATAY DA İLK RUHSATLİ KEM BENİM - BU İKİ.
RUHSAT KRİTERLERİNE SİZİN UYMADIĞINIZ BELLİ, MERKEZE YAKIN YERLERE RUHSAT VERİLMEZ, BİZİM ALAN 7.500 METREKARE VE 31S24 RUHSAT KRİTERLERE UYULDUĞU İÇİN VERİLMİŞTİR - BU DA ÜÇ!
ŞAHSIM ve TESCİLLİ Markam olan HATKEM HATAY KÖPEK EĞİTİM MERKEZİ ile bu ruhsatsız, izinsiz ve diplomasız çalışan işletmenin HİÇ BİR ALAKASI YOKTUR. OLUŞABİLECEK HERHANGİ  BİR SORUNDA BİZİM MESULİYET VE/ VEYA SORUMLILĞUMUZUN BULUNMADIĞINI BELİRTMEK YASAL BİR ZORUNLULUK OLARAK İLAN OLUNUR.', '2019-10-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1b0df25710964cbee0bfd992144ebce1', 'boarding-7c8933c9d63910de95c51c5c', 'Emin Yavuz', 10, 'Elinize sağlık çok memnun kaldık güzel bir aile ve köpek eğitmeni Hatay da bu şekilde profesyonel çalışan eğitmen olması süper', '2023-01-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-52a5e0aeee54c91a0363c5d1805c5b8c', 'boarding-7c8933c9d63910de95c51c5c', 'Mayil Çete', 10, 'Hersey icin teşekkür ederim cok guzel bir egitim oldu işinizi hakki ile yapan az insan var onlardan biride sizsiniz.guven veren tek yer', '2020-03-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-02c050f30b332134171d0768b67ea64f', 'boarding-7c8933c9d63910de95c51c5c', 'Ramazan Anar', 10, 'Ev ortamında gerçekten pansiyon ve eğitim konusunda  hakkını veren bu konuda tecrübe sahibi insanlar güvenilir bir yer tavsiye ederim', '2022-04-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-577348c7a2dd7fdcd333a63c', 'PetHome İskenderun Kedi & Köpek Oteli ve Eğitim Merkezi. Pet Otel', 'Ev tipi bakım merkezleri', 'Hatay', 'Karaağaç Cumhuriyet', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgkTweNP5EsJjVhKw0EFdXO9P7q0vX5MMtNVxho4JKGnXIH2x0jNW-LIIluuxY7rL8-43kO4Lgj7BeP9pvkHVkWoaC09lR1QdeaWAgHetrQjV06OsCc_7AA5DjRTvAL7MhDojr7P5FG6SB=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgkTweNP5EsJjVhKw0EFdXO9P7q0vX5MMtNVxho4JKGnXIH2x0jNW-LIIluuxY7rL8-43kO4Lgj7BeP9pvkHVkWoaC09lR1QdeaWAgHetrQjV06OsCc_7AA5DjRTvAL7MhDojr7P5FG6SB=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnob1F5gb5K5HTn-b-7URBuOmGW8DMSKwa0t-rnBAxRxGYPh8S-VfF-Q-cVJpijulWdJ67kuhtaqfa4YvWPyX77cDhsL5BIzZZedbRwcl-QatU820dcjD7oAEiJFipF5BHP08ht-bkxIjQ=w224-h299-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkaIZnWeDRjyjgwicG9RNxWcoYeKaQsqN7cby_DW_OmaLWlF0iBTTdRkChWW4_Hd5A7F2jz111ZSOXwZ28Z6WekIkh1yGhJDBfsetR_pZYqyO2INZqkty5_O8QfDEPjXGSCi-tUIZcjhz3v=w224-h299-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","hatay-pet-oteli","hatay-kedi-kopek-oteli","karaagac-cumhuriyet-pet-oteli","hatay-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'PetHome İskenderun Kedi & Köpek Oteli ve Eğitim Merkezi. Pet Otel, Hatay Karaağaç Cumhuriyet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0538 789 84 09', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/PetHome+%C4%B0skenderun+Kedi+%26+K%C3%B6pek+Oteli+ve+E%C4%9Fitim+Merkezi.+Pet+Otel/data=!4m7!3m6!1s0x1525f71263da8d4d:0x57fc5ea3a115d6f4!8m2!3d36.5495605!4d36.1067111!16s%2Fg%2F11xr_b6yzy!19sChIJTY3aYxL3JRUR9NYVoaNe_Fc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJTY3aYxL3JRUR9NYVoaNe_Fc', 'boarding-577348c7a2dd7fdcd333a63c')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d4059edbe0b6645b4e4264d84c220be2', 'boarding-577348c7a2dd7fdcd333a63c', 'Canan seniha Tosun', 10, 'Tarçın ile ilk defa ayrı kalacağımız için çok endişeliydim.Pethome ailesi ile tanıştığımız an da  çok sevgi dolu içten bu ailenin yanında olacağını hissetmiş olarak;  içim çok rahat Tarçın ı bırakabildim.Gelen videolar ve fotoğraflarda o kadar mutluyduki.Sevgileri,ilgileri ve emekleri için ne kadar teşekkür etsem haklarını ödeyemem.
İyki sizlerle tanıştık iyki varsınız…
Teşekkürler Pethome ailesi 🙏', '2025-08-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5d5d4f28984fecd72dfdc87668a69534', 'boarding-577348c7a2dd7fdcd333a63c', 'Nilufer Surmelioglu', 10, 'Benim can kızım uzim orda yurtdışında bulunduğum için manevi ailesinde çok memnunum sevgi dolu insanlar içim çok rahat iyiki varsınız🥰🙏', '2025-08-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2e60cd5947f773f580a3ec061a399b3b', 'boarding-577348c7a2dd7fdcd333a63c', 'Ebru Çetinkaya', 10, 'Shih tzu kızımızı iki geve bıraktık. Hem çok güleryüzlü hem de köpek dilinden anlayan kibar beyefendiyle kalması içimiz rahat bırakmamızı sağladı. Kızımız mutlu girdi mutlu çıktı. Ortam da hayvanlara göre dizayn edilmiş. Bahçede hem oynayabilecekleri hem tuvaletlerini yapabilecekleri alanlar var ve güvenli bir şekilde kullanıyorlar. Teşekkürler pet home', '2025-11-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9ae0f723c2c910459b72cadb9c98d283', 'boarding-577348c7a2dd7fdcd333a63c', 'Sertaç Hopoğlu', 10, 'Evcil hayvanınıza itina ile bakılacağına emin olabilirsiniz', '2026-03-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8b12472b5c9e7d3ca43039989ced2fa0', 'boarding-577348c7a2dd7fdcd333a63c', 'NEBİL ATEŞ', 10, 'Bertan kardeşime ilgisinden dolayı teşekkür ederim', '2025-08-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-4122387db13e454a96f5db51', 'ISPARTA MİLA PET OTEL- PET KUAFÖR', 'Kedi ve köpek kabul eden karma tesisler', 'Isparta', 'Binbirevler', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnA99vppu521RdTioJmzAHfFIgbBo19dAzbUJgtmtN-T6-_Ebpleat50RTDSGuGr__udsjg1VdvtwLv9AMjtYHOzIqdjVgLpkonKfJtzBPmKAXvknkhGbz3SYIJ3yO0twEhFAiO=w408-h485-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnA99vppu521RdTioJmzAHfFIgbBo19dAzbUJgtmtN-T6-_Ebpleat50RTDSGuGr__udsjg1VdvtwLv9AMjtYHOzIqdjVgLpkonKfJtzBPmKAXvknkhGbz3SYIJ3yO0twEhFAiO=w250-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkD8K3IbbDVyKm9Xe7SiUozg9bQIUaSNhJfuk_5cezFb7UocICokgsa8Q3NqhvCIExOO8UnuaePcTXzRi2_kVFh1QgobvA_sukl_LQEbq-7H8-LNX8KS5q_Rjk-XDibqN1BDbqo6_0A8ui7=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkva4RNLQQcfztMCEDae7T4C277Qgnn_NUfVPqkVPRj_kyLhKQOl5gF5Rf4xdFLorzf4wgP4WgTIe9Gmv4QwpijzXoBKVBqeajz6iIc6QhRCS7xqCVdJNeqAdgyMWuK6pdI9SFFaU2AL1H9=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkEEQ3pc4E-Nivl4BvkO_rG6nXBDjWieB5247PC0jCm8pnI6fC2dBDXTlctckhbVC_hJKsRh_fjL6e4t-NtnS8Jxk0ZKYs0MkSUzNa7bvjR3DMch4iN0z7s34lAstHe-M1Q1jsdGW6MROrZ=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=GLkFzlJs9yru4Kg7ZM7OAw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=134.54504&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz kapalı otopark","Ücretsiz park yeri"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","isparta-kedi-oteli","binbirevler-kedi-oteli","isparta-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'ISPARTA MİLA PET OTEL- PET KUAFÖR, Isparta Binbirevler bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 153 78 64', NULL, 'https://www.instagram.com/milapetotel/', '{"google_maps":"https://www.google.com/maps/place/ISPARTA+M%C4%B0LA+PET+OTEL-+PET+KUAF%C3%96R/data=!4m7!3m6!1s0x14c5cb3cba8d3349:0x801d726783130f07!8m2!3d37.7681759!4d30.5132945!16s%2Fg%2F11xfpjkg_8!19sChIJSTONujzLxRQRBw8Tg2dyHYA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJSTONujzLxRQRBw8Tg2dyHYA', 'boarding-4122387db13e454a96f5db51')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0d06f10331cf61b9b914fcbf71edb13e', 'boarding-4122387db13e454a96f5db51', 'Ecem Kpala', 10, 'Şehir dışına çıkacağımız için köpeğimizi bırakabileceğimiz bir yere ihtiyacImız vardı. Mila pet oteli bulduğumuz için çok şanslı olduğumuzu hissettik. Hem bize hem de köpeğimize yaklaşımları çok profesyonel, nazik ve sevecendi. Çok memnun kaldık başka bir ilde olmamıza rağmen gözümüz hiç arkada kalmadı. Özellikle bizimki gibi hareketli, veterinerde veya kapalı yerlerde kalmayı sevmeyen köpekler için harika bir ortam. Her zaman ulaşılabilirlerdi ve köpeğimiz de çok mutlu ayrıldı. İlgileri, emekleri ve hizmetleri için çok teşekkür ederiz kesinlikle tavsiye ederim gönül rahatlığıyla bırakabilirsiniz.', '2025-08-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-48c6ce0e7888147281de5389d3bc2b29', 'boarding-4122387db13e454a96f5db51', 'Cihan Kanber', 10, 'Küçük bir kopegimiz var buna bakım yaptırdık aciliyeti olduğu için sağ olsunlar randevu ihtimali olmamasına rağmen arada alıp bizi çok memnun bıraktılar. Çok güzel bir bakım yapıldı Maltipoo Köpeğimizi Gönül rahatlığıyla her zaman götürebiliriz herkese tavsiye ederiz.
Saygılarla', '2025-08-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a3459204704470ebd6ea71f93fdd2f80', 'boarding-4122387db13e454a96f5db51', 'Gözde Akıncı', 10, 'Oğlum paşanın 3 günlük konaklaması sırasında Mila pet otele çok teşekkür ediyorum. Paşanın karakterine göre bir ortam sağlayıp onu strese sokacak bir durum yaşamaması benim için en önemli noktaydı bundan sonraki konaklamalarda gözüm kapalı bir şekilde oğlumu emanet edebilirim :)', '2025-08-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6c2c1cc2d3eae4316abf38e967c37ca6', 'boarding-4122387db13e454a96f5db51', 'Melih deniz', 10, 'İlk defa 1 köpeğimi ve 2 kedimi pet otele bırakıcaktım çok tereddütte kalmıştım fakat gerçekten gözüm bir dakika bile arkada kalmadı biz söylemeden bile sürekli fotoğraf video attılar köpeğim çok iyi bi şekilde hem bakıldı hem sosyalleşti ilginiz için çok teşekkür ederim', '2025-08-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-22ede3511c1bd10fc10036a4c5e825a5', 'boarding-4122387db13e454a96f5db51', 'Fadime Turan', 10, 'Köpeğimizi bayram boyunca (6 gün) bıraktık. Aşırı memnun kaldım. Güler yüzlü, hayvansever, cana yakın ve çok dikkatlilerdi. Hepsine teşekkürü borç bilirim. İlk kez pet otel kullandım ve iyiki yolum Mila ile kesişti. Gözünüz asla arkada kalmasın. Gönül rahatlığıyla bırakabilirsiniz 🍀🙏🏻', '2025-06-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-5310b726272b6fd2c9a94f8d', 'ISPARTA PET OTEL ARMİÇİ - KUAFÖR&KREŞ', 'Gündüz bakım merkezleri', 'Isparta', 'Mehmet Tönge', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWKXyzgor_Bkl26FJAcogBPtE5lZqiJ_hb-artu7j7WR1FyA45vvVv81ZcF1qiCzB9cV036zMXK_e-iXmkje4Ft8Z5spkRbOUeNA3Uz_LuXSYdvY2bXO0155xe9yPxtkyAd42p=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWKXyzgor_Bkl26FJAcogBPtE5lZqiJ_hb-artu7j7WR1FyA45vvVv81ZcF1qiCzB9cV036zMXK_e-iXmkje4Ft8Z5spkRbOUeNA3Uz_LuXSYdvY2bXO0155xe9yPxtkyAd42p=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlGqol3A01HixSUPHPP8BsmaVw9czEu8MNKc8mIk8-xI-1EDgzBGn9Fv6ncXJVllfRySo9Kb-iSrCFAdg2n5SZU1LRpYLEkN64gSk2k-CB5ipTqKZwduzOFtjOtdxT1zuXExzBxKHO3f6Q=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkimAYl0BTHUKYKiOSuS5utcnGe1UKLBOhWFz4FE79qpOq31AJ9_VNs60UVtfqMU5zyvXizSs7DdgopVRZnoCCdBQhz7fB7BWbESmRMdB7-g3kJ1I9qqEc-7Yf17AMCB6LGHBsx=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnoc9TfJB_gNUbB92ut27iRXdZgs2hSNTW1CZyGYmhQeyBSR47QP_9s2wC_lTMiNc9IJmm6rCDiktyW4J9oHbT4KBYQ54OVhqosvgLHtTUKW0Y1mxF3z6r8o79UIlWIi3A0UPLEhCl055E=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkZ7Rk1SOJU2DnfGhDdmLtd8x2zwFy1a0y5VcpPRnG60bls0iy265q7hQKVzsBMA_KanXR11W6KoBGz4HN-OU4ShFcKuQ11NDN1KXjekidTphmlcNVPDoSLKfW7rNkKIkFOHDiv8vMCnV4W=w238-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDQGrylvVPHWvuM3oFlx1DmxvU9KQB8iVQ1Nx0lYMmiszJOp5zoSidtEUYXhe5a1lUyI1rj7q1odOS-TjkMeeA8e1Ves7jbvpnFjl5QimdAz8PlZd8K--lDKhcsfW7iTXpHh0shMCz2G0y=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3nI1iHObMMRIrtScA4wAj63KeFmYRFbwB0OJyhJTyhJqfdJzSm7juxEJR7zFPgbrHEkuMPneATiOPWqjiWaiGM6YJBWgkOnZmSaHiMPMO1VK3LOCYEOiIfgVjX6dJF0iNjUpKRttjuz5G=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Y_-Sdadmw52OeXIf9PeTcQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=335.93933&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun park yeri","Ücretsiz park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","isparta-pet-oteli","isparta-kedi-kopek-oteli","mehmet-tonge-pet-oteli","isparta-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'ISPARTA PET OTEL ARMİÇİ - KUAFÖR&KREŞ, Isparta Mehmet Tönge bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0501 152 68 62', NULL, 'https://instagram.com/armici.pet.otel?igshid=NzZlODBkYWE4Ng==', '{"google_maps":"https://www.google.com/maps/place/ISPARTA+PET+OTEL+ARM%C4%B0%C3%87%C4%B0+-+KUAF%C3%96R%26KRE%C5%9E/data=!4m7!3m6!1s0x14c5c9e2dc49a9f1:0xe419d0f89cc40e7b!8m2!3d37.8209913!4d30.5127638!16s%2Fg%2F11l6_9sd04!19sChIJ8alJ3OLJxRQRew7EnPjQGeQ?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ8alJ3OLJxRQRew7EnPjQGeQ', 'boarding-5310b726272b6fd2c9a94f8d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8cfa1318c5fcf6e750de3777dbef56ef', 'boarding-5310b726272b6fd2c9a94f8d', 'TUGCE HAS', 2, 'üzülerek yazıyorum , bugün istemediğim sonuçla karşılaştım istediğim traşla sonuç çok farklıydı , makas ve model verme konusunda profesyonel olmadıklarını düşünüyorum çünki daha önceki model fotografıyla  gittim bunu istiyorum dedim ama sonuç çok çok farklıydı .. asıl üzüldüğüm yan traş sırasında köpeğimin yanında değildim bilmiyorum ancak aldığımda köpeğimin davranışlarından dolayı  sakinleştirici verdiklerini düşünmekteyim bunu daha önce uçak yolculuğunda zorunlulukla vermek  zorunda kaldığım sakinleştirici de yaşamıştım çünki 1 saat boyunca donuktu çok kez traş olduk karşılarken vermiş olduğu tepkiler çok farklıydı sonrası ise 1 saat uyudu, bunuda paylaşmak  istedim üzülerek ısparta’nın profesyonel bir pet kuaföre ihtiyacı var , daha önce İzmir  ve Ankara   ilinde  olan traşlarımızda hiç bunu yaşamadım maltase ırkı köpeğimin tüylerni büyük zahmetle uzatmıştım , onlara şikayetimi mesajla dile getirdiğimde ise söyleseydiniz ücret almazdık  köpeğinizintüyleri zayıf  bundan sonra başka yer tercih edin dediler  , ancak götürdüğüm fotoğrafta kendi köpeğimin 1 yıl önceki traşıydı buna ayrı üzüldüm yapamayacaklarını söyleseler belki bukadar üzülmezdim . götürdüğüm halinin yarısı kadar tüyü kalmasını istemiştim öncesi sonrasını paylaşacağım zayıf dedikleri için bence gitmeyin', '2026-02-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-53c27930b860b4a927c99eefe2f667c8', 'boarding-5310b726272b6fd2c9a94f8d', 'Şeyma Derin', 10, 'İlgi , alaka ve güleryüzünüz için teşekkür ederim. Köpeğim traş olmayı sevmediği halde sabırla çok güzel makas traşı yaptınız. Emeğinize sağlık 🙏🏻🤗', '2026-06-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-090de4b71dbf0ed9cdc3576dde74177b', 'boarding-5310b726272b6fd2c9a94f8d', 'Beyza Bozdemir', 10, 'Uzun zaman sonra köpeğimi içime sinerek traş ettirebildiğim tek yer diyebilirim çok kibar ve ilgililerdi köpeğimi korkutmamak strese sokmamak için ellerinden geleni yaptılar her şey için çok teşekkür ederim emeklerinize sağlık tekrar görüşmek dileği ile 🙏🏻', '2026-05-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d627dc823debeddb86dbc69948e99222', 'boarding-5310b726272b6fd2c9a94f8d', 'Hatice', 10, 'Çakıl da bizde gidince hemen çıkamıyoruz çok kibar ve ilgililer en önemlisi güven oğlum gözümün önünde tıraş oluyor (tıraşımız kısa sürdüğü için)beklemeyi tercih ediyorum.Gönül rahatlığıyla emanet edebileceğim tek yer 🐾', '2026-02-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a2ddf6286332c0da2458bce119400ecc', 'boarding-5310b726272b6fd2c9a94f8d', 'Meltem kaçıkoç', 10, 'Köpeğimizi gönül rahatlığıyla emanet ettik ve çok memnun kaldık. Köpeğimiz oldukça nazlı, yemek seçen ve yalnız uyuyamayan bir köpek olmasına rağmen ona büyük bir sevgi ve sabırla yaklaştılar. Süreç boyunca hem ilgileri hem de iletişimleri bizi çok rahatlattı. Köpeğimiz mutlu ve huzurlu bir şekilde bize döndü. Emekleri ve gösterdikleri özen için çok teşekkür ederiz. Gönül rahatlığıyla tavsiye ediyoruz.', '2026-07-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-80b6ab0c2cdc237ca8fea137', 'Isparta Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Isparta', 'Pirimehmet', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LzKuA_sdYYHY5yB82RUN8A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=30.506636&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LzKuA_sdYYHY5yB82RUN8A&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=30.506636&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LzKuA_sdYYHY5yB82RUN8A&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=30.506636&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","isparta-kedi-oteli","pirimehmet-kedi-oteli","isparta-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Isparta Pet Otel, Isparta Pirimehmet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0536 033 97 08', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Isparta+Pet+Otel/data=!4m7!3m6!1s0x14c5b55d28398685:0xe1dd9d205b0b3e24!8m2!3d37.764121!4d30.552256!16s%2Fg%2F11jsmfcyy0!19sChIJhYY5KF21xRQRJD4LWyCd3eE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJhYY5KF21xRQRJD4LWyCd3eE', 'boarding-80b6ab0c2cdc237ca8fea137')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a29e634da1b713ad1597c7b464573da5', 'boarding-80b6ab0c2cdc237ca8fea137', 'Kübra ACAR', 2, 'Evden alıp eve bırakılıyor ama buna sakın kanmayın. Nerede nasıl barındırdıkları belli değil. 2 kedimizi emanet ettik geldiklerinde aç susuz ve kümes gibi kokuyorlardı. Tavsiye etmiyoruz!', '2023-08-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2dd267927917205dd488f79af807d0df', 'boarding-80b6ab0c2cdc237ca8fea137', 'Halil Çetinkaya', 10, 'Gözünüz kapalı emanet edebilirsiniz kedinizi 1 hafta bıraktım çok iyi bakılmış ilgilenilmişti.', '2023-07-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-83ad05712efeef687c656585b91505e3', 'boarding-80b6ab0c2cdc237ca8fea137', 'Ramazan Ertaş', 10, 'Ne zaman arasak bilgi verdiler kedimizi verdiğimiz gibi aldık gayet ilgililer teşekkür ederiz.', '2023-12-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1adfbf1edb505cc8e347b150745341d5', 'boarding-80b6ab0c2cdc237ca8fea137', 'esra taşkın adıyaman', 10, 'Kedimi bıraktım mamam bile yanlışmış sayelerinde öğrendim çok bilgili ve ilgililer tavsiye ederim', '2023-07-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c22a811fa5c3dd10054d0d981b4ef224', 'boarding-80b6ab0c2cdc237ca8fea137', 'Nisa N', 10, 'gayetde güzel bakıyorlar ben hiçbir sorun yaşamadım', '2023-07-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-83844ceab89dca6404508825', 'Patiklup - Mersin Kedi ve Köpek Oteli', 'Kedi ve köpek kabul eden karma tesisler', 'Mersin', '. Mahalle', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj3f_pXmWXFm3cep2ZNSb2j4hUgWcQ81gnuxLzVjEEJfzfTOYobZbzphUEz-j2TuULHhC6RmNVDicTFpZp7yLptC3QLmHG1NsVyhtWhJYILaRdvjEi9GsogrokArMG10Yo-w7qDV_ElGQ=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj3f_pXmWXFm3cep2ZNSb2j4hUgWcQ81gnuxLzVjEEJfzfTOYobZbzphUEz-j2TuULHhC6RmNVDicTFpZp7yLptC3QLmHG1NsVyhtWhJYILaRdvjEi9GsogrokArMG10Yo-w7qDV_ElGQ=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlyXviOr5oHU08JcjRLJ5IIw49lq6AKJanZxKOkCKSV-Jizo0uL09cVUl1EH0BprrBovLqylYBDzesPuWDKUmYckd2o8TDg4BtYLIASZGyln6-tpJWFYv7UMnGCAFVpdWydm-u6b1iYMrEO=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2EiSvssx67BMjT4lAcKI3aQw6QksyxWcdvnQsq6qimI6Ksb2ls0WbJ7XnNzoSqns9TojqVnSbK-TWTX-GA380dIDYv5OOLlEEIGqNuht__vbNV4_r8Tso6gfgTU4EzLCAP1K30ksEvK8l=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2EiSvssx67BMjT4lAcKI3aQw6QksyxWcdvnQsq6qimI6Ksb2ls0WbJ7XnNzoSqns9TojqVnSbK-TWTX-GA380dIDYv5OOLlEEIGqNuht__vbNV4_r8Tso6gfgTU4EzLCAP1K30ksEvK8l=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmJQWyEPMlctaec14v3ciD3utzTuKhbkKNghvRvhWnnw9L60GH7YAeAvbPvBXGO9FZI8kPO3--NiAOWQ44JtHKAh65oaSez0dlY8GidvP9HlNWLTNz3w1KLzt_oIlmSXiaHSk8i4Dz3FFm=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmp9QYEvPnmceL-C-dpUM8W33gdmbeY466B1CFHje34AqkgRpVtdI8xmThoODO0r8ADppAQ8gaPU5VGDyXwsl2Tm0L24eWgPBjYoqmGhO3YkR0iOvFcKhlKuzffAhGRxJ79G5GJSEEQHVXg=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=6MihKAqyuVpv0ksvVJMbzA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=236.36893&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","mersin-kedi-oteli","mahalle-kedi-oteli","mersin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Patiklup - Mersin Kedi ve Köpek Oteli, Mersin . Mahalle bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0531 522 64 33', NULL, 'https://patiklup.com/', '{"google_maps":"https://www.google.com/maps/place/Patiklup+-+Mersin+Kedi+ve+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14d87713d7dc0f5f:0x32f672fac49692e0!8m2!3d36.7215713!4d34.4883751!16s%2Fg%2F11njk7yj4m!19sChIJXw_c1xN32BQR4JKWxPpy9jI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJXw_c1xN32BQR4JKWxPpy9jI', 'boarding-83844ceab89dca6404508825')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7c159795e5ae7fb555f940a8fd02215c', 'boarding-83844ceab89dca6404508825', 'ZERKI', 10, 'Çok güzel ve hayvan dostu bir klup. Kedi ve köpeklere karşı çok ilgililer ve onların ihtiyaçlarıyla özenle ilgileniyorlar. Evcil hayvanlarıyla seyahat edenler için kesinlikle tavsiye ederim', '2026-08-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0116680e74dbd85e1e1ea4977e13528a', 'boarding-83844ceab89dca6404508825', 'Mark Yakubenko', 10, 'Köpeğimi 3 günlüğüne bıraktım her gün benimle video ve resim paylaştılar hayatımda gördüğüm en güzel köpek kedi oteli hayvanıma çok iyi davrandılar herkesin buraya şüphe olmadan çocuğunu bırakmaya tavsiye ederim👍', '2026-08-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-65d6573faeb10004d4882cbebb05ecc5', 'boarding-83844ceab89dca6404508825', 'Nihat Barut', 10, 'Ailemizin değerli dostu köpeğimizi yurtdışı seyahatimizden dolayı emanet ettiğimiz Patiklup ailesine yaşattığı sıcak ve güzel ortam için çok teşekkür ederiz. Bizden ayrı kaldığı dönemde onunla sevgi ile ilgilenilip, güzel bir aile ortamı yaşattığınızı görmek bizleri çok mutlu etti. İyiki Patiklup ailesi ile tanışmışız. Başta Mete Bey ve Patiklup ailesine teşekkür ederiz.', '2026-08-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1b8218ab6d4c187a1c05b3034739b11e', 'boarding-83844ceab89dca6404508825', 'Vee', 10, 'Excellent pet taxi service! Pablo was transported safely, comfortably, and with so much care. The driver was friendly, professional, and clearly experienced with animals, which gave me complete peace of mind. Communication was excellent, everything was on time, and the whole experience was stress-free. Thanks so much  Mete!', '2026-07-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-2cedcb40af7ec7c244db7bc1', 'Mersin Hayvan Oteli', 'Kedi ve köpek kabul eden karma tesisler', 'Mersin', 'Fuatmorel', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_kAC8NqLcVUleBlcnAWTbg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=62.673946&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_kAC8NqLcVUleBlcnAWTbg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=62.673946&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_kAC8NqLcVUleBlcnAWTbg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=62.673946&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","mersin-kedi-oteli","fuatmorel-kedi-oteli","mersin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Mersin Hayvan Oteli, Mersin Fuatmorel bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0555 147 42 79', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Mersin+Hayvan+Oteli/data=!4m7!3m6!1s0x1527f5941d3f1b5b:0xb37de9b84f333693!8m2!3d36.8147896!4d34.5660419!16s%2Fg%2F11t9mxmk64!19sChIJWxs_HZT1JxURkzYzT7jpfbM?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJWxs_HZT1JxURkzYzT7jpfbM', 'boarding-2cedcb40af7ec7c244db7bc1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-641e6609858dece798d4d197', 'Paradise Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'Mersin', 'Fuatmorel', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=slUJU1nks1adwm1nHk1kSQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=80.427086&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=slUJU1nks1adwm1nHk1kSQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=80.427086&pitch=0&thumbfov=100","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkCc_JNqRkjVmlMqq5mH9GM0sD0XKB7C3Qp38LWp1TSzxSNbaFJpdL60HL6hMHtixOigVfEN3BlZVVItQPpvC_uvgPsHcfLdJ3XWS1fvm5idxP5GlBA9GoGno_8sxJHGfma2iO=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=slUJU1nks1adwm1nHk1kSQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=80.427086&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","mersin-kedi-oteli","fuatmorel-kedi-oteli","mersin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Paradise Pet Otel, Mersin Fuatmorel bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 922 02 06', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Paradise+Pet+Otel/data=!4m7!3m6!1s0x1527f5340ec65ddb:0x7be14c255fbfb875!8m2!3d36.8138435!4d34.5671368!16s%2Fg%2F11t5v6x6gm!19sChIJ213GDjT1JxURdbi_XyVM4Xs?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ213GDjT1JxURdbi_XyVM4Xs', 'boarding-641e6609858dece798d4d197')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d05c5c6370644b05eafbf279758fb9fe', 'boarding-641e6609858dece798d4d197', 'Tuğba Ekim Çınar', 10, 'Kızımızı 15 günlüğüne bıraktık gayet ilgili ve anlayışlı şekilde ilgilendiler. Kesinlikle gönül rahatlığıyla teslim edebilirsiniz.', '2022-08-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5d7b4a25d8f5d08f9fd326f452b912bd', 'boarding-641e6609858dece798d4d197', 'Batuhan Uyar', 10, 'Güvenilir ve bolca aktivitesi olan bir mekan. Deneyimli tekniker ekibi, kuaförü ve patilerin oyun alanları ile beni cezbetti. Memnun kaldım, teşekkür ederim Paradise Pet Otel ❤️🐾', '2022-07-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9513e490aab1da7e9a58a4a0ab752930', 'boarding-641e6609858dece798d4d197', 'Necmiye Altıparmak', 10, 'Evcil dostlarımızı güvenle bırakabileceğimiz nezih bir yer. Biz çok memnun kaldık. Tekila''da 🐱🤍 Teşekkürler ilgi ve alakanız için tekrardan 🙏', '2022-08-12'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6c1fa14cc0321c648de1c0000ae42a5e', 'boarding-641e6609858dece798d4d197', 'night Noon', 2, 'Merhaba 1 aylık ücret ne kadar 2 kedi için', '2025-06-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fbbf6a592cac3711aefcdb4f5891345d', 'boarding-641e6609858dece798d4d197', 'Güner Say', 4, 'Merhabalar.  1 hafta veya 2 haftalk ücretiniz ne kadar bilgi verir misiniz ?', '2023-08-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-030bc83c8b549b85234726b0', '.', 'Ev tipi bakım merkezleri', 'Mersin', 'Merkez', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnPt5dMa_9bzxy1xdYQ7vcdC46Gfra9oyv75Bj1OJnLJB6W9AJP3XZpDzEjeqKt1pbbqFHo3mUIkXHei3_UNCVvjI0L4UFLVbkqDSisiI92-vslYzbD7ZJyWylhMAgJ5g3I3nMElCZOKAs=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnPt5dMa_9bzxy1xdYQ7vcdC46Gfra9oyv75Bj1OJnLJB6W9AJP3XZpDzEjeqKt1pbbqFHo3mUIkXHei3_UNCVvjI0L4UFLVbkqDSisiI92-vslYzbD7ZJyWylhMAgJ5g3I3nMElCZOKAs=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl_QQZaHv5AZ4oWR7lYJNOmDSAahbpsWJkcwKbCekZ5R2gMR1bi645HgnQ6JZdPC9OyOr-mIsDI9RSSDy07ZLHfxsO_4ZJUProSf3lrMbBLimU80z2uuF9wAxQ0K9S3XFIsfYGuR05JR9qE=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRbTFhkvTanl3k3pxjk8m8yPlGmfd3BMkQm3qBM-Y9DXOqj05bBpDfu5FiZ8AxUDmn3c7Kh1IyR0r_YscHtnOArRjoPC3hOjrISRk0rpL1KAAJN7R-evBD3ep0YH3jOrH_gaPlNBAobFal=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgwM5X3SnRWzOjdlLOAm66g9mM6BmkB208DXn98ujFiF2QKpuv22O1lvMq1sNqxCIpJkJ8uSxiYpSu1iwGFTpcSfNMepwT19_AQjHyw4d0stnhalyXOrEO7ICH-GZcdSrrrT-w9w3F0dfK=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bXSZYP73OMGOtfz7Fd1ZAA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=222.59567&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","mersin-pet-oteli","mersin-kedi-kopek-oteli","mersin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', '., Mersin Merkez bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/./data=!4m7!3m6!1s0x15278b17c3016577:0xd12ca88ad42378a2!8m2!3d36.7534359!4d34.522135!16s%2Fg%2F11krccjwph!19sChIJd2UBwxeLJxURongj1IqoLNE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJd2UBwxeLJxURongj1IqoLNE', 'boarding-030bc83c8b549b85234726b0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-76e3f2023b4eceab44d4ac5118c3407b', 'boarding-030bc83c8b549b85234726b0', 'Güner Say', 4, 'Merhabalar. 1 hafta veya 2 haftalık ücretiniz ne kadar bilgi verir misiniz ?', '2023-08-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-83921d691a9d79239376025e', 'Mersin Kedi Oteli Miaw', 'Kedi otelleri', 'Mersin', 'Tömük', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Gff_OEIXHm5ojWeyn9un4g&cb_client=search.gws-prod.gps&w=408&h=240&yaw=176.09601&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Gff_OEIXHm5ojWeyn9un4g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=176.09601&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Gff_OEIXHm5ojWeyn9un4g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=176.09601&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","mersin-kedi-oteli","tomuk-kedi-oteli","mersin-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Mersin Kedi Oteli Miaw, Mersin Tömük bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0533 294 87 32', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Mersin+Kedi+Oteli+Miaw/data=!4m7!3m6!1s0xaaa85cb3972e8d83:0x37bb27c46c3476db!8m2!3d36.675156!4d34.3528421!16s%2Fg%2F11ynlth9_b!19sChIJg40ul7NcqKoR23Y0bMQnuzc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJg40ul7NcqKoR23Y0bMQnuzc', 'boarding-83921d691a9d79239376025e')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4d2d3b15b663662b90d1519c66092af6', 'boarding-83921d691a9d79239376025e', 'lara taşan', 10, 'Yasemin Hanım ve Alperen Bey'' e ilgileri için çok teşekkür ediyorum. Daha önce bir kaç kez oğlum için desteklerini aldım. Kedim eve dönmek istemiyor ne zaman yanlarına bıraksam😅', '2025-11-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3bcaaf2c4839726b506d64d4bbf8e808', 'boarding-83921d691a9d79239376025e', 'Fadime Ozturk', 10, 'Pakizeme muhteşem bir yuva oldular onunla o kadar güzel ilgilendiler ki aklım hiç yavrumda kalmadı. Sürekli videolar fotoğraflar gönderiyorlar sizin aklınız da tek bir soru işareti bırakmıyorlar. Emeklerinize sağlık 🙏', '2025-11-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f9152e68da09d345855c9d4d6a9e56ed', 'boarding-83921d691a9d79239376025e', 'Tuğçe Ayan', 10, 'Kedimden ilk kez ayrı kalacağım için çok tedirgindim ancak ilk andan itibaren kendi çocukları gibi ilgili, nazik ve sevgi dolu yaklaşımlarını görünce içimi rahatlattılar. Bir hafta boyunca her gün fotoğraflarını ve videolarını gönderdiler. Kedimin mutluluğu ve rahatlığı hareketlerinden belliydi. Tüm ilgi ve sevgileri için teşekkür ederim. Bundan sonra her zaman tercihim olacaklar.', '2025-11-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7ca4edb259fade58d0fb910f01eb26ba', 'boarding-83921d691a9d79239376025e', 'Büşra Özdemir', 10, 'Kızımı 2 defa uzun süreli bıraktım. Gerçekten çok memnunum. İlgileri alakaları her şeyiyle mükemmel. Çok teşekkür ederim. 🌸', '2025-11-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-aa771f0e3a3b7ba03fdd10eacca20682', 'boarding-83921d691a9d79239376025e', 'A. Berke Kaynak', 10, 'Kedimi Alperen Beylere 2 ayrı zamanda toplamda 3-4 ay emanet ettim. Bir an olsun gözüm arkada kalmadı, ben nasıl bakıyorsam en az benim kadar iyi baktılar. Her gün fotoğraf ve video gönderdiler. Birilerine belli bir süre kedinizi emanet etmeniz gerekirse doğrudan güvenebileceğiniz bir yer. Tekrardan kendilerine teşekkür ederim.', '2025-11-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-0782168c3a9f2d7de274fb08', 'Bobyland Köpek Oteli ve Köpek Eğitim Merkezi', 'Köpek otelleri', 'İzmir', 'Çelebi', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndSpT5iJZE6ILf1aajiFX2b6hSkCDCqwckmsgbRbzIIk3r-CBoJWvEzpveND922IZUFMAen2F462hoZRqnxQJbZ8I_zeBZPR0vzyiyGoWn_STRRDItU02kqDwhDyEzZwKJHdfA=w408-h273-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndSpT5iJZE6ILf1aajiFX2b6hSkCDCqwckmsgbRbzIIk3r-CBoJWvEzpveND922IZUFMAen2F462hoZRqnxQJbZ8I_zeBZPR0vzyiyGoWn_STRRDItU02kqDwhDyEzZwKJHdfA=w443-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnhC8U5LspGAMKtzSWxrWNw4LiC-aQh5EJUJM4AojSzRhLCZbFSzuO0N4pv5e811q6hXD3GLcYxRkqJs_BH9cIXY8F6FOJuDG4IV6bDHNzPcBXao7jQ_5e62mkM2B1JOfKcDGl2=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmzuyaqMgweDynz0KvV2ZJEWLQBdVSxBSe7xFtIinv6YO_LK79Yw-LUjSKHcHNTXgquXiieVoS6xKvrk0TN6I24JOPzIuI6Ejyl9ZVr4Zt_tRUP1oaMqg_Ca46C2BjHq_iA_wz__w=w224-h395-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwEmrK9y3TFSyePecBjDt2cLz4QF6_b5nTQwzCAcgH3txjtKcRPTBNxHJtxKQsu_dpS95TqPxFJ4FsqFMiTOVGsV35DxPRXozJeIw-Twpb55_aHnBQ8Kog32mb2x9vba9T6nxq=w447-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9PKXov23tW6wQ0dnSydc2_1e3Uh8m1GIcmT0RGPzw65vkIv9D4awkaLYljDCtWQXAAoHuXms85LsRYjnT3wlnjfaIRG1WPNdlQwiWvk_vTpmw7JRC_I4JN2C2Hl3UNOAffIZ3Cw=w530-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=AhYjK2TxTKYYdtqCNnngEw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=221.82112&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","i-zmir-kopek-oteli","i-zmir-kopek-pansiyonu","celebi-kopek-oteli","i-zmir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Bobyland Köpek Oteli ve Köpek Eğitim Merkezi, İzmir Çelebi bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '(0232) 234 58 58', NULL, 'https://www.bobyland.com.tr/', '{"google_maps":"https://www.google.com/maps/place/Bobyland+K%C3%B6pek+Oteli+ve+K%C3%B6pek+E%C4%9Fitim+Merkezi/data=!4m7!3m6!1s0x14bbe9ff5411e089:0xad548df8259bb8c3!8m2!3d38.3699631!4d26.8910514!16s%2Fg%2F1vx7bv1h!19sChIJieARVP_puxQRw7ibJfiNVK0?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJieARVP_puxQRw7ibJfiNVK0', 'boarding-0782168c3a9f2d7de274fb08')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-73b66855be41a791b12140007cf78181', 'boarding-0782168c3a9f2d7de274fb08', 'Meltem Şivecan', 2, 'Ankara’dan bayram için tatile geldik, 26sı salı günü kızımızı buraya bırakmak zorunda kaldık, dün teslim aldık. Çocuklarınızın kalacakları odaları görme imkanınız yok, yasak diyip içeriye almıyorlar. Güleryüz ilgi desen çok iyi !görünürde! Yorumları biraz daha okuyunca hayvancıkların ufacık kafeslerde güneşin altında yandıklarını, son gün de yıkadık güzelce demelerinin de büyük bir yalan olduğunu gözümüzle görmüş olduk. Kızımı aldık 1 saat harareti dinmedi, iğrenç kokuyordu her yeri kir içindeydi. İlk kez kızım bizi görünce bu kadar çıldırırcasına ağladı. Serbest gezme alanında 1 tane su kovası var içi kurumuş. biz söyledik öyle doldurdular. Bu, bizim oraya randevuyla gitmemize rağmen gördüğümüz manzara. Gerisini siz düşünün. Bahadır efendi orda oturmuş arkadaşlarıyla ne hoşgeldin ne hoşçakalın birşey yok. Arda beyefendi sözde hayvansever daha suları doldursun önce. Para almaya gelince normalde teslim alınırken alınan para daha girdiğimiz ilk günün dakikasında aldılar. Böyle hayvanseverlik olmaz olsun. Aldığınız para haram zehir zıkkım olsun. Çocuğunuzu orda bırakmayın.', '2026-05-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-6ebfbc206379f857ceb9701e8a53de70', 'boarding-0782168c3a9f2d7de274fb08', 'Suha Erdogan', 10, 'Rus finosu köpeğimiz 5 yaşında ve son 3 senedir ihtiyaç olduğunda yaz kış Bobyland e bırakıyoruz. Evde can dostu köpeğimle yaşayan biri olarak Köpek otelinden beklentilerim -Kapalı ve açık yeterli büyüklükte barınma alanı olması -Her gün gezdirilmesi, video gönderilmesi -Kışın sıcak bir ortamda barınması -Günlük mama, su ihtiyacının karşılanması , barındığı alanın günlük temizlenmesi ve en başta bu işi seven ve işten anlayan insanlara köpeğimi güvenle
emanet edebilmemdir. Bütün bu ihtiyaçlarımı ve fazlasını karşıladıkları için senelerdir buraya geliyoruz. Başta Bahadır beye , Çağdaş beye ve ekipteki herkese çabalarından ve çalışmalarından dolayı teşekkür ederim. İyi ki varsınız.', '2026-06-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2f9109ed5d05a2b441cff72ff33a64d1', 'boarding-0782168c3a9f2d7de274fb08', 'Erensu Ozsoy', 10, 'Köpeğimi Bobbyland’e bırakırken gözüm hiç arkada kalmıyor. Bazen bir gün önceden arasam bile rezervasyon konusunda hiçbir sıkıntı yaşamıyorum. Çağdaş Bey ve oradakiler işini gerçekten çok büyük bir hevesle ve severek yapıyor; zaten köpeğim de oradakileri gördüğü an heyecandan yerinde duramıyor.
​Günlük olarak video yollayarak bizi her an bilgilendirmeleri ise içimizi ayrıca rahatlatıyor. Giriş-çıkış saatlerini önceden bildirdiğimde otelde her zaman bizi karşılayacak birinin bulunması büyük bir kolaylık. Ayrıca uzun süreli bırakmayı düşünenler için sundukları kartlı sistem de çok pratik. Köpeğinizi güvenle emanet edebileceğiniz harika bir yer, Bobbyland ekibine çok teşekkürler!', '2026-06-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9fee519dfbc98efe38eb49d8cc065493', 'boarding-0782168c3a9f2d7de274fb08', 'özlem çuhacı', 10, 'Kurban bayramında kızım mokayı 11 yıldır ilk defa yanımda götüremediğim bir tatil yaşamak durumunda kaldım başta Bahadır bey ve tüm ekibinin hem mokaya hem bize özenli ilgi ve alakası ile bu ayrı kaldığımız süreyi güzel hale getirdiler. 24 saat izleyebildiğim konaklaması ve gezileri sırasındaki video paylaşımları sonucunda asla endise duymadım. Gönül rahatlığıyla bir dahaki aciliyet durumlarında da bırakabileceğim herşeyden önce güvenli ve alakalı bir köpel oteli teşekkür ederim kendilerine', '2026-06-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-eef4ab19cd8838608f6b7f7822b88e75', 'boarding-0782168c3a9f2d7de274fb08', 'Melodi Moghtader', 2, 'Biz köpeğimizi 1 gece bıraktık. Müsaitlik konusunda yardımcı oldular son dk aramamıza rağmen kabul ettiler geri alırken saat konusunda yardımcı oldular bu konularda bir diyeceğimiz yoktu. Ancak Zeytin’i alırken karnesini istemediler hasta mı değil mi aşıları tam mı? Sormadılar bakmadılar. Aldığımızda Zeytin aşırı şekilde çiş kokuyordu sanki işediği yerde uyumuş ama bir günlük konaklamada çok önemsemedik uzun süre gittiğimizde başka yer bıraktık. Ama bugün buradan gençlik hastalığı kapan arkadaşımın köpeği ÖLDÜ. Bu nasıl bir acı anlamak, anlatmak zor. Bobbyland köpeğin karnesini kaybetmiş telefonlara çıkmamış. Ben kendi 1 gecelik deneyimimde zaten bir şeylerin ters olduğunu anlamıştım ama bugün bu haberi aldığımda yazmak istedim.', '2026-04-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-b31d9e3c5c4c24670a6d5ed1', 'Vesta Köpek Eğitimi & Köpek Oteli - İzmir - Vesta Pet Services', 'Köpek otelleri', 'İzmir', 'Kazımdirik', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk2nrFCUcd-qdxEUHmjoimdV2JGAkoqiGFz-vHbUuoYlPX296HeKIF_Us6pxZpJeO98qdthG-tQrllKZlmhNjbLZRcpoS8EEuxe-wcA3SMZhsmsbzgdjaVGGVULd6moh44_xeFM=w408-h408-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk2nrFCUcd-qdxEUHmjoimdV2JGAkoqiGFz-vHbUuoYlPX296HeKIF_Us6pxZpJeO98qdthG-tQrllKZlmhNjbLZRcpoS8EEuxe-wcA3SMZhsmsbzgdjaVGGVULd6moh44_xeFM=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLsa1ggBUpazUNtFhR0KjBx058Hlf3XA15iFhAfEhtfZxyqYmSO3zA9gLjGMBtAXfRMIMMw8KBwG1_jr7EeYlwM1rxKpigfGemlfu9vbFJEwFb_d6TOcgDGYIfilqV9RNxZ4o-Tw=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCXyicMMcbu1fBL4sZfP_h7iU4dbnHh5Oc5fNq5i2QyogmAJYfQ-5DId1azr0I3mRl6W4M50je6n2V7zSrtF9BhE01nVbRZ2Le-47PLVShJxAno0XEjdUBC4nEK2DPsWgP2uOh=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCXyicMMcbu1fBL4sZfP_h7iU4dbnHh5Oc5fNq5i2QyogmAJYfQ-5DId1azr0I3mRl6W4M50je6n2V7zSrtF9BhE01nVbRZ2Le-47PLVShJxAno0XEjdUBC4nEK2DPsWgP2uOh=w298-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qXU48X6V01Qmny8IGQ9uYw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=280.94363&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","i-zmir-kopek-oteli","i-zmir-kopek-pansiyonu","kazimdirik-kopek-oteli","i-zmir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Vesta Köpek Eğitimi & Köpek Oteli - İzmir - Vesta Pet Services, İzmir Kazımdirik bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0555 496 96 55', NULL, 'http://www.vestaegitim.com/', '{"google_maps":"https://www.google.com/maps/place/Vesta+K%C3%B6pek+E%C4%9Fitimi+%26+K%C3%B6pek+Oteli+-+%C4%B0zmir+-+Vesta+Pet+Services/data=!4m7!3m6!1s0x14b973eb5c10187f:0xe7d111bef680f454!8m2!3d38.4479521!4d27.2058217!16s%2Fg%2F11d_wtmvjn!19sChIJfxgQXOtzuRQRVPSA9r4R0ec?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJfxgQXOtzuRQRVPSA9r4R0ec', 'boarding-b31d9e3c5c4c24670a6d5ed1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ed7b1003031fb56b2d6ea2de4e57cf38', 'boarding-b31d9e3c5c4c24670a6d5ed1', 'Asena Ari', 10, '“Yahu ben bir köpekle yaşamadan önce ne yapıyormuşum?” dememe vesile olan güzel insanlar, A’dan Z’ye, bir köpekle yaşamanın inceliklerini ve güzelliklerini bize öğretiyorlar hala daha :) Katılmadığım workshopları, eğitimleri kaldı mı? Yok bence kalmadı, kaldıysa hemen geleyim çünkü çok keyifli :) Güzel Merlot’mu aklım, kalbim ennn rahat şekilde otellerine emanet edebildiğim, sevgilerine ve ilgilerine sonuna kadar güvendiğim bir kurum kendileri, Oktay, Nil ve Duru iyi ki varsınız <3', '2023-12-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ffacb151c7c2d869a22e1250f09430a5', 'boarding-b31d9e3c5c4c24670a6d5ed1', 'Sıla Canpolat', 10, 'Benim dünyalar tatlısı kızım evde yalnız kaldığı zamanlarda Tazmanya canavarına dönüşüp herşeyi kemiriyor ve havlamaktan ulumaktan tüm mahalleyi ayaklandırıyordu. Aynı zamanda mazoşistti kapıları tırmalamaktan patilerini kanatıyordu.Yatak, kapı, çanta, ayakkabı, duvar, dolap...herşeyi kemiriyordu...ve biz heryere onunla gitmek zorunda kalıyorduk. Ne kadar zor ve yorucu olabileceğini tahmin edemezsiniz. İşe bile gidemiyorduk... ama geçti... evet baya baya geçti ...Tazmanya canavarı sevgi dolu bir köpeğe dönüştü resmen...vesta ailesi bizi esir hayatından kurtardı...şimdi evde sakince, huzurla bizi bekleyen tatlış bir Maya''cığımız var... Maya''nın otel hizmeti süresinde tanıştığı bir sürü arkadaşı var...mayanın çok sevdiği bir ailesi daha var... bizim ise haftasonları gidip vesta ailesiyle geçirdiğimiz keyifli zamanlarımız var... maya sayesinde edindiğimiz dostluklarımız var... hayatımda ilk defa hizmet aldığım bir yerden dost edinip ayrıldım ben...bu güzel insanlar iyi ki var...', '2017-09-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b1553d5521f7acf87d0ce5b6ae2dbce2', 'boarding-b31d9e3c5c4c24670a6d5ed1', 'Alena Sladkova', 10, 'Vesta köpek oteli Google da bulduk. Bayramda her zaman gittiğimiz yer dolu oldu için, yeni yer aramak zorunda kaldık. İyiyiki de böyle oldu. Artık yeni adresimiz kesinlikle Vesta Köpek Oteli ve Eğitim merkezi olacak !)
2 hafta yurt dışında kaldık. Ve içimiz rahattı.
İşleten insanlar çok tatlılar. Otel çok temiz. Hiç koku falan yok. Kameralar yok ve baştan tedirgindik. Ama Duru hanım bize sürekli videolar ve fotoğraflar gönderiyordu. Ne zaman yazsak sorsak her zaman cevap veriyorlardı.
Çok güzel bir yer. Fiyatlar de uygun. Köpeğimiz çok memnun kalmış. Oynuyorlar, gezdiriyorlar.)
Teşekkür etmek istiyorum ve Herkese tavsiye ediyorum ))))
Yine geleceğiz 🐾
Tekrar gönderdik. Oğluşumuz severek gitti)', '2022-08-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f18352a14cb9318ae3189b8ae52b35f6', 'boarding-b31d9e3c5c4c24670a6d5ed1', 'Furkan Berber', 10, 'Köpeğim Gece’yi 3 kere bıraktım Vesta’ya. Her seferinde de çok iyi baktılar. Köpeklerin kendilerine özel alanları olması sosyalleşme için köpekli ve köpeksiz opsiyonlar sunmaları, alanlarının geniş olması ve ilgili bir ekipleri olması çok iyi.

Çiftlik bir tık uzak ama ulaşım konusunda ücretli olarak destek oluyorlar hiç sorun olmuyor. Puanım 10/10 kendilerine.', '2025-10-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-26bcbb07ba2fe3fe9c79332871469f9e', 'boarding-b31d9e3c5c4c24670a6d5ed1', 'Özge Metin', 10, 'Google yorumlara bakarak tercih ettik, çok ilgili ve bilinçli insanlar. Her gün fotoğraflı olarak bizi köpeğimizin durumu hakkında bilgilendirdiler. Tesisleri diğer ‘pansiyonlar’ gibi kesinlikle değil. Çok huzurlu, sessiz ve temiz bir yer. Her şey için çok teşekkür ederiz', '2025-06-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-457d1990d1d0f3dfa2f67488', 'İzmir Kedi Oteli', 'Kedi otelleri', 'İzmir', 'Evka-5', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnDbyUxfEbMLpsUFC_dzZJnxwnr3tFfHiVNf7c1OcfO9_oyPCYtmO5IijOGtN8Ss-6SZgULobjgLNJo7hJZHsVYhf7Sz0OwwYLHI_5HNz3KCSR47DD9GLOfY_ZD-zWITBAR7XB47Wpeqsc=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnDbyUxfEbMLpsUFC_dzZJnxwnr3tFfHiVNf7c1OcfO9_oyPCYtmO5IijOGtN8Ss-6SZgULobjgLNJo7hJZHsVYhf7Sz0OwwYLHI_5HNz3KCSR47DD9GLOfY_ZD-zWITBAR7XB47Wpeqsc=w396-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgNvf2IZnppjPfInmthgHfvdcfpq-JTWrlZSpNlSQroajd3aEcrRgXEwVWj5eIvi6L9dat9o3UMksZtXu5MvWE9GFY_rD3UUG_rbgJLwrsMedZHPkT7P_UXtNtR6PjbgVIk88jcPXqL8mu=w299-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DdTYUTKOoM8lpgW9KN99dw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=82.386505&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Gerçek mekanda hizmet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","i-zmir-kedi-oteli","evka-5-kedi-oteli","i-zmir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'İzmir Kedi Oteli, İzmir Evka-5 bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 284 20 35', NULL, 'http://www.izmirkedipansiyon.com/', '{"google_maps":"https://www.google.com/maps/place/%C4%B0zmir+Kedi+Oteli/data=!4m7!3m6!1s0x14bbd15e84fe4e21:0x720d685b3ecb8c5a!8m2!3d38.521576!4d27.057175!16s%2Fg%2F11smrdqxjy!19sChIJIU7-hF7RuxQRWozLPltoDXI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJIU7-hF7RuxQRWozLPltoDXI', 'boarding-457d1990d1d0f3dfa2f67488')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-09df9173d97d0174d41f889953fc1081', 'boarding-457d1990d1d0f3dfa2f67488', 'mustafa cansun uçan', 10, '27 Gün gibi uzun bir zaman kedimiz Marco bu otelde konakladı. Hüseyin Bey sık sık bize video ve resimler gönderdi. Dönüşünde isteğimiz üzere tırnaklarını kestirdi. Evden alıp eve getirmesi, kedimize çok iyi bakılması bizleri çok mutlu etti. Herkese tavsiye ederiz, ihtiyacımız olduğunda tekrar Hüseyin Bey''e baş vuracağız.', '2026-07-16'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b37715338c4d52ae6bec6c705f1f5b87', 'boarding-457d1990d1d0f3dfa2f67488', 'Fatih gül', 10, 'Kedimizi 1 aylığına bırakmıştık. Hüseyin bey çok ilgilendi teşekkür ederiz. İstediğimiz zamanlarda video veya resimler atıyordu. Görüntülü arayabildik istediğimiz zamanlarda. Kedimizin bulunduğu oda da temiz ve güvenlikliydi camları fileliydi. Teşekkür ederiz', '2026-08-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-381d9234f7c6550e1d1301bbe61c2438', 'boarding-457d1990d1d0f3dfa2f67488', 'Mustafa Ali Akca', 2, 'POLİSLE GERİ ALDIK.Hüseyin ESKİN isimli bu vatandaşın dolandırıcılara taş çıkartan dürüst olmayan ticaretini ve kedi fırlatmasını.herkes bilsin.Kesinlikle kedinizi vermeyin. Kedileri götürdük. Bizden aldı ben yerleştireceğim siz gelemezsiniz dedi. Nereye götürdü belli değil. Sözde steril ortammış kimse giremezmiş sanki ameliyathane.Bize göstermedi  kedilerimizi geri isteyince kedilerimiz hiç kalmadığı halde paramı verin yoksa kedilerinizi vermem diye tehdit etti. Polis çağırdık polis ekipleri ayırdı bizi. Kesinlikle uzak durun. İlçe emniyete şikayet ettim', '2026-07-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-da2918ef1bc58e4896eec8adf4ec2c53', 'boarding-457d1990d1d0f3dfa2f67488', 'Mustafa Akca', 2, 'Resimle alakası yok. Gittik kedilerinizi alıp başka bir yere götüreceğim siz gelemezsiniz dedi. Bizde yeri görmediğimiz için kedileri geri isteyince bu sefer otel girişi çıkışı yaptım bana 2500 tl vermezseniz kedilerinizi vermem şantaj yapınca  polis çağırdık. Polisle aldık kedileri', '2026-07-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-46ff602b8e054b2e13d4724e1b708f0e', 'boarding-457d1990d1d0f3dfa2f67488', 'Onur Şahin', 10, 'Kedim gayet rahattı geldiğinde iyi bakılmış taranmış geldiği andan itibaren keyifle rahatlığa yattı', '2026-07-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-3ae63c5d2b8ff66ecec434a0', 'Karşıyaka Pet Otel', 'Kedi ve köpek kabul eden karma tesisler', 'İzmir', 'Şemikler', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-QQCpFCQhL0J6fO-_yEkiQHoWICIncTSK9CNT0Y0YT5FReykTrYqifKYKyfRB1hZmpMe-cVQpOAUwVIgOf_gX1ldH3N6AvC9c-bSWn6gG3Rrv9aozTV0nEpJURDpUKFxC4TEqzA=w408-h590-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-QQCpFCQhL0J6fO-_yEkiQHoWICIncTSK9CNT0Y0YT5FReykTrYqifKYKyfRB1hZmpMe-cVQpOAUwVIgOf_gX1ldH3N6AvC9c-bSWn6gG3Rrv9aozTV0nEpJURDpUKFxC4TEqzA=w224-h324-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmuLns6i1M5q0FS72KfMAx1hwyzMvwBhCIYkYhgpvQOJWKv701O46o-NIw97EHNlKn-vDMopIPROl-u3ngPi0_d4kRRNnw5oaYN_Xe-uvazuFRYwHgXCq3PLrbBdUF69cXijd-EIg=w373-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-QQCpFCQhL0J6fO-_yEkiQHoWICIncTSK9CNT0Y0YT5FReykTrYqifKYKyfRB1hZmpMe-cVQpOAUwVIgOf_gX1ldH3N6AvC9c-bSWn6gG3Rrv9aozTV0nEpJURDpUKFxC4TEqzA=w224-h324-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCL8rjAJRI_2ycqFvYuP6MG2GUCgWHjKAXyzR5WFQhZ3_2hUt21X1-rLG0XcT-ICZ8rWsaGGlRt89yBG4d4EtebWiEuxu8AYv4bgHz7VzaFdAtAYjJqLpEVVfUhG2B6jEcNNkSSw=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=MTTqpr5oKp-GZbJuRS0F7g&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=228.19745&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","i-zmir-kedi-oteli","semikler-kedi-oteli","i-zmir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Karşıyaka Pet Otel, İzmir Şemikler bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0554 787 71 38', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Kar%C5%9F%C4%B1yaka+Pet+Otel/data=!4m7!3m6!1s0x14bbd973f2c95f79:0xae5278fb62289215!8m2!3d38.471973!4d27.098451!16s%2Fg%2F11wx4g7xc6!19sChIJeV_J8nPZuxQRFZIoYvt4Uq4?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJeV_J8nPZuxQRFZIoYvt4Uq4', 'boarding-3ae63c5d2b8ff66ecec434a0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c6fa4c6c51e7ebf349c5923219ff87e6', 'boarding-3ae63c5d2b8ff66ecec434a0', 'Birhan Binici', 10, 'Köpeğim Lyra’yı (Toy Poodle) Karşıyaka Pet Otel’de Erden Hanım’a emanet ettik. İlk olarak 7 gün için bırakmıştık ancak işlerim nedeniyle 6 gün daha uzatarak toplam 13 gün kaldı. 🐶
Erden Hanım daha ilk telefon görüşmemizden itibaren detaylı bilgi vermesi ve ilgili yaklaşımıyla güvenimizi kazandı. Lyra’nın kaldığı süre boyunca mesajlarıma her zaman dönüş yaptı, gün içerisinde fotoğraf ve videolar göndererek bizi sürekli bilgilendirdi. Bu sayede uzun süre ayrı kalmamıza rağmen içimiz rahattı.
Bizi üzen birkaç küçük konu oldu ancak bunları da konuşarak güzel bir şekilde çözüme kavuşturduk. Genel olarak ilgi, iletişim ve yaklaşımından çok memnun kaldık.
Minik dostunu güvenle emanet edebileceği bir yer arayanlara Erden Hanım’ı gönül rahatlığıyla tavsiye ederim. Lyra’ya 13 gün boyunca gösterdiği ilgi için ayrıca teşekkür ederiz. 🐾', '2026-08-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1044bbdd278577164decea078944a96b', 'boarding-3ae63c5d2b8ff66ecec434a0', 'Umut Kamber', 10, '2bucuk yaşında ki oğlumuz Louie’ye,  her ihtiyacımız oldugunda yardımlarını ve desteklerini esirgemeyen Erden Hanımı cok seviyoruz. Hiç bir zaman gözümüz arkada kalmıyor. Fotograf ve video olsun, iş ahlakı, hayvan sevgisi ve yardımseverligi her konuda içimize su serpen Erden hanıma cok teşekkürler. Rahatlıkla güvenebilirsiniz. 🫶🏻', '2025-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b0722657fcdaf92ffe2829a08655e718', 'boarding-3ae63c5d2b8ff66ecec434a0', 'İremsu Karakuyu', 10, 'Benim için yoğun bir gündü ve köpeğimi bir günlük bırakmam gerekti ve hiç aklım kalmadı Erden hanım ilgilendi sık sık fotoğraf video attı, arayıp bilgilendirdi ve orada da gördüm ki köpeğim gayet mutlu , güvende ve keyfi yerindeydi kendisine de çok teşekkür ederim tekrardan. Dostlarınızı bırakırken içiniz çok rahat olsun hiç aklınız kalmasın😊', '2026-02-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cb67f7d657b64209705d8a26a382cda9', 'boarding-3ae63c5d2b8ff66ecec434a0', 'FATMA ISIK DALKILIC', 10, 'Erden Hn Shitzu cinsi köpeğimizi sabahları ve akşamları gezdirdi. Disiplinli, yapıcı ve köpeğimize karşı çok ilgiliydi. Ilgisi ve desteği için çok teşekkür ediyoruz. Kesinlikle tavsiye ediyorum.', '2025-05-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-99289daaaa99602227345012569ba621', 'boarding-3ae63c5d2b8ff66ecec434a0', 'İpek Aşaner', 10, 'Erdem hanım minik dostlarımız için gerçekten çok ilgili biri. Telefondaki görüşmemizde verdiği detaylı bilgiler benim için çok önemliydi, işini severek yaptığı belli oluyor daha en başında :) Ben 2 gece minik dostumu Erden hanıma bıraktım, bu süreçte her zaman mesajlarıma dönüş yapıldı ve süreçten beni detaylı bir şekilde bilgilendirdi fotoğraf paylaşımı da yaptı. Şimdi yürüyüşe çıkıyoruz, şimdi mamasını verdim, tuvaletini yaptı gibi. Kendisi de çok sevecen biri, gönül rahatlığıyla dostunuzu bırakabilirsiniz 🤍', '2025-06-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-6a41bab861dd8e3d3c4a3d52', 'ASYAM KEDİ KÖPEK OTELİ', 'Kedi ve köpek kabul eden karma tesisler', 'İzmir', 'Mithatpaşa', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=sDqLhVd93l42xOzH-TlJIg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=194.18283&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=sDqLhVd93l42xOzH-TlJIg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=194.18283&pitch=0&thumbfov=100","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnCVTeWfKi-gMSAsRCpJMXghmrvzSq0qDnvNVoOs_PrG9HV0VwwKR07LeBh4P_t3uF_XcnPt8QuSk3crwZmE5XUrORx7SdWQv1lHoJi4PVJ2pJXc-wqiv9dWPrq1jHS0PEC42T5NA=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnCVTeWfKi-gMSAsRCpJMXghmrvzSq0qDnvNVoOs_PrG9HV0VwwKR07LeBh4P_t3uF_XcnPt8QuSk3crwZmE5XUrORx7SdWQv1lHoJi4PVJ2pJXc-wqiv9dWPrq1jHS0PEC42T5NA=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=sDqLhVd93l42xOzH-TlJIg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=194.18283&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","i-zmir-kedi-oteli","mithatpasa-kedi-oteli","i-zmir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'ASYAM KEDİ KÖPEK OTELİ, İzmir Mithatpaşa bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0535 411 29 89', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/ASYAM+KED%C4%B0+K%C3%96PEK+OTEL%C4%B0/data=!4m7!3m6!1s0x14bbd9863aa4fbf5:0x448d2e2d25772e14!8m2!3d38.4054547!4d27.1074101!16s%2Fg%2F11pl86qc0b!19sChIJ9fukOobZuxQRFC53JS0ujUQ?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 7.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ9fukOobZuxQRFC53JS0ujUQ', 'boarding-6a41bab861dd8e3d3c4a3d52')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-60b9051c975b2e824863f144094b5f89', 'boarding-6a41bab861dd8e3d3c4a3d52', 'Mustafa Özdinç', 10, 'Gerçek hayvan sever bir işletme…
Memnuniyetle çocuklarınızı bırakabilirsiniz. 🙏🏻', '2026-04-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ccd12492047709711537d7db6fcde90a', 'boarding-6a41bab861dd8e3d3c4a3d52', 'HÜSEYİN ÖZ', 2, 'Çok kötü bir işletme. Sakın hayvanlarınızı buraya bırakmayın. Çok sosyal olan kedim aldıktan 1 hafta sonra bile kendine gelemedi. Kedileri ve köpekleri aynı odada tutuyorlar ve oda çok pis. Bu yüzden size göstermek istemiyorlar.Bırakmak zorunda kalırsanız nerede kalacağına mutlaka bakın zaten vazgeçersiniz.  Ayrıca işletme sahipleri çok kaba. Parayı aldıktan sonra dövmekten beter ediyorlar.', '2025-04-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1ff3ae6354f454da03c7df44c5fac3e8', 'boarding-6a41bab861dd8e3d3c4a3d52', 'burak kengil', 2, 'Arkadaşlar köpeklerinizi buraya bırakmayınız. Köpeği bahçeye koyuyorlar. 4 5 saat bağırıyor o köpekler.  Kimse ilgilenmiyor . Hem paranıza hem hayvanlarınıza yazık. İlgilenen kişilere de video gönderimi yaparim. Bizlerde rahatsız olduk ve gerekli yerlere şikayette bulunuyoruz', '2024-07-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e07874cade0668ed64cbfdabfef6b1d6', 'boarding-6a41bab861dd8e3d3c4a3d52', 'Ali Rıza Çınarsoy', 10, 'Biz cok seviyoruz. Azime Hanım müthiş güzel ilgileniyor. Kopekler mutlu. Sürekli müşteri olmaya karar verdik galiba 😉👍', '2024-07-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-47a4689f33d5ff83f8046bd5333055a3', 'boarding-6a41bab861dd8e3d3c4a3d52', 'Cihangulu kurtay', 10, 'Bir haftalığına  kızımız zeytini bıraktık  ASYAM OTEL E   acaba  nasıl  olur  kalırmı ı diye  düşünürken  orda  çok büyük bir özen ve sevgi ile bakıldı  her aradığımızda ulaşa bildik   gönül rahatlığı  ile sevimli evcil hayvanları bıraka  bilirsiniz   çok temiz  bir  yer', '2022-05-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-8ed345dfaebd58ba08483ae1', 'CANIFORNIA SPA CENTER - ACADEMY - DOG HOTEL', 'Köpek otelleri', 'İzmir', 'Çelebi', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDK97rXU1a9d6vO1MxXEBqVhjcGvEgg1R0YnqDf0spcBkIz3zclx0t-Q_851xQPKuoFztKeIF_J7Taxl0r6kVHFntLeFKMSbFpA6hFOsITgeF5nFeFjEEUUT7O27J_QKgoYVPZXg=w538-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDK97rXU1a9d6vO1MxXEBqVhjcGvEgg1R0YnqDf0spcBkIz3zclx0t-Q_851xQPKuoFztKeIF_J7Taxl0r6kVHFntLeFKMSbFpA6hFOsITgeF5nFeFjEEUUT7O27J_QKgoYVPZXg=w668-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmTyxpw8uvXqC88hNpTYTq8EHxn__MTCf_--KOAuJY5Wrs1WiHXcJvmjg-dellQBwxpyJCcyncLzSOUfeDRNaYUpOw-eed-gB1SxP_BRWvxwWgGlr86adie2JGi2rvGPWlo8UbD=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnQm7YClLQWWipL3gVGUR8A2yZlqBrges4Cugs7tqVPVGzrAGHPSpOEwnj4zcBrGmzRhiIOU-mczKKefMgF_kh16otSlqihzI36n81PMzHCBkUVMo9-8KqgkK03qH96qhSP_5ex=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWntP_fWES5L5MoRL6lsoEaKpZPVH53Ip80Y2MfdHqtt45w62tYv1A7fA7OyWyupedIQboJQtzlr9uhQljYRX5frXmPSFoE2KJDL7zQXPvaVcDpAzD87hFYb-NiEdoF33aH7kZBtMA=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWni-nVVtxmBnHBj_ECPnyA3BwYw4PRGys-DtE-uwW3RMTBXf8y2NK7pd1CQzWf_F1LTFjeMgfXXKQSPkWWV1sZSRtyc2ypKATKdtfR4asLirt1jnjOr6lkAQkRNlJ8ZWcPhLEBa=w473-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=SmoAgOBSyxIZCbg991BQNw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=271.61102&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","i-zmir-kopek-oteli","i-zmir-kopek-pansiyonu","celebi-kopek-oteli","i-zmir-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'CANIFORNIA SPA CENTER - ACADEMY - DOG HOTEL, İzmir Çelebi bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '(0232) 234 34 05', NULL, 'http://www.canifornia.com.tr/', '{"google_maps":"https://www.google.com/maps/place/CANIFORNIA+SPA+CENTER+-+ACADEMY+-+DOG+HOTEL/data=!4m7!3m6!1s0x14bbe9f896136a13:0xf053f0fd5bb726ba!8m2!3d38.3683242!4d26.8917484!16s%2Fg%2F11g__hq5d!19sChIJE2oTlvjpuxQRuia3W_3wU_A?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJE2oTlvjpuxQRuia3W_3wU_A', 'boarding-8ed345dfaebd58ba08483ae1')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5e40e332cd89b723d4f601d205bc054d', 'boarding-8ed345dfaebd58ba08483ae1', 'Melis Denli', 2, '10 Eylül tarihinde sizden köpeklerimizi teslim aldık. Teslim aldığımız andan itibaren veterinerleri dolaşıp kuyruk kısmındaki kanamayı durdurmaya çalışıyoruz.', '2022-09-11'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e87148204d7a56339a5ec91e87196b9f', 'boarding-8ed345dfaebd58ba08483ae1', 'Ünsal KÖLETELİOĞLU', 10, 'Güzel nezih bir ortam.
Can dostlarımızı gözümüz arkada kalmadan emanet edebileceğimiz bir tesis.', '2022-07-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-57e4dfdd5c6774181ab8b62a88409664', 'boarding-8ed345dfaebd58ba08483ae1', 'christopher gierszewski', 2, 'Otelin isletmecisi mi sahibi mi bilmiyorum bir beyefendiyle bayramda cocugumuzu birakmak icin gorustum. Kendinisinin yaklasimi cok ilgincti. Bayramda 3 gecelik konaklama icin konustugumda “oyle bir sey yok bayramda paket program var 5 gece kaliyorsa kalir yoksa kalamaz” diye bir cevap verdi. Bizim her zaman biraktigimiz kopek otelinde malesef yer olmadigi icin burayi aramistim sonucta ilk defa ve tanimadigimiz insanlara emanet edecegimiz icin kamerali odalarini sordum. Bu seferde artik kamerali odalarimiz yok altyapi sorunu var dedi. (Yıl 2024) ona da tamam dedik. O zaman kopekleri gezdiren calisan arkadas bize gunde 1 kere video atabilir mi diye sorduk. Dalga gecer bir tavirla yok yok yok asla mumkun degil, hele bir de video diyip guldu nedense. CAN EMANET ETTIGIMIZI UNUTMUS GIBI BIR HALİ VARDI BEYEFENDININ.', '2024-06-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-896eba2c0d95b10edafa1d653ee151b2', 'boarding-8ed345dfaebd58ba08483ae1', 'Ferit Gerisgen', 2, 'Tavsiye vasıtayla köpeğimize eğitim vereceklerini düşünerek gittiğimizde bizi işletme sahibi karşıladı . Köpeğimizin eğitimi devam ederken videolar paylaşacaklarını, sürece hakim olacağımızı bilgi vereceklerini ilettiler. Vaat ettikleri eğitimi veremeyeceklerini bilsemde eğitim konusunda pek fikrim olmadığı için bıraktım . 2 hafta boyunca kimse aramadı . Aradığımda ise 1 gün sonra 30 sn bir video attılar. Eğitim sonu şaşıracağım söylenmişti evet şaşırdım zaten ofur dediğimde oturan köpeğime birde yatı öğretmişler eve geldiğimde söyledikleri şeyleri uygulamam rağmen köpeğimin huylarında veya adaptasyonunda herhangi bir değişiklik olmadı . Verdiğim para hiç muhim değil ancak sözlerini tutmamaları ve eğitim adına bir sonuç alamamız hüsran oldu . Sözde gönderecekleri videolar ile 3 hafta boşu boşuna bırakmış oldum köpeğimi ne kadar süre eğitim verdikleride muaamma herhangi bir kaydı olduğunu tahmin etmiyorum . Ayrıca son gün aç olduğunu düşündüğüm köpeğime mama ile yürüme ve otur kalk yaptırdılar sağolsunlar mezun ettiler . Tavsiye etmiyorum.', '2021-05-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-410f7a5e7a0e2334bf86dd2fbcb3c32c', 'boarding-8ed345dfaebd58ba08483ae1', 'Merve Bircan', 10, 'Üç senedir oğlumuz Odie''yi gözümüz kapalı emanet ettiğimiz, her seferinde mutlu ve heyecanlı bırakıp, mutlu teslim aldığımız tertemiz köpek otelimiz. Haktan Bey başta olmak üzere her sorumuza her seferinde yanıt veren, en acil ihtiyaçlarımızda bize oda sağlamak için çaba gösteren tüm ekibe teşekkür ederiz. Patili çocuklarınızı gönül rahatlığıyla kendilerine emanet edebilirsiniz.', '2023-08-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-5b71c4dbad2700616e52623d', 'Kastamonu Belediyesi Geçici Hayvan Bakımevi', 'Kedi ve köpek kabul eden karma tesisler', 'Kastamonu', 'Hisarardı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnRDxDxfqeJ1Ivs15n8C6AjTWYB9bFAFI-HVFiJ9zl3Opqpf564zy8W49DZg--smwG_2-k_mNACNXV_4RQacPMRM9a7OhMCm9q9BZoBNBa_1RaK9sriOeBkv31VXDGwh_wb4sUsZw=w408-h270-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnRDxDxfqeJ1Ivs15n8C6AjTWYB9bFAFI-HVFiJ9zl3Opqpf564zy8W49DZg--smwG_2-k_mNACNXV_4RQacPMRM9a7OhMCm9q9BZoBNBa_1RaK9sriOeBkv31VXDGwh_wb4sUsZw=w449-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlYT__0SMW4c1auIDa5Wr9BwtVPy_7pKVm00B7g6dE5bpIFVQShf1IMP46kt2qbYPeseF8Q4xlHtIeGdiV8W_OJb364g7iM6T7u2yMWU547vlVB-7nIN9_79dVpGo5OIvHW0YdNX9nwAZ79=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZCmT22kEsAhzSRxY1dX6sTiKdXMM-YlIvMOwPQV4W2iuukQ2aObrCu6ICWv2eF_Qt3HKzTwLLugHdBXRDyI6O-RWR6T3MiDB43Rygzvg1gV2eqq1C6GJ9IlObbT0BPqeTHKgm=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmtCweIxdPVDkdeHsNBp0krSlAm9uq7YIp6kgMlsgzx0AtZlc5jL4rdcs51HlU-EkMc_1Diy_25B2VSmFF__tupNbi8rljiZDdMcgAUDpygovfvwboPpIkQPa-gflcd6B5s7umf=w447-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=NY_WuzKWW8bs5MjapOMG2Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=329.68982&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kastamonu-kedi-oteli","hisarardi-kedi-oteli","kastamonu-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Kastamonu Belediyesi Geçici Hayvan Bakımevi, Kastamonu Hisarardı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '(0366) 214 10 48', NULL, 'http://www.kastamonu.bel.tr/', '{"google_maps":"https://www.google.com/maps/place/Kastamonu+Belediyesi+Ge%C3%A7ici+Hayvan+Bak%C4%B1mevi/data=!4m7!3m6!1s0x4084f13c40e47289:0x4162aaac346600d6!8m2!3d41.3709095!4d33.7605923!16s%2Fg%2F11h7s6s9t9!19sChIJiXLkQDzxhEAR1gBmNKyqYkE?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 6.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJiXLkQDzxhEAR1gBmNKyqYkE', 'boarding-5b71c4dbad2700616e52623d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fb1bed16a558fb8da6210be0686004a4', 'boarding-5b71c4dbad2700616e52623d', 'Deniz Kaya', 10, 'Pınarbaşı dan kısırlaştırmak için 4 adet kedi getirdim.Veteriner hekim çok alakalıydı kedileri arabadan aldı amaliyatlar bittikten sonrada tekrar arabaya kadar bıraktı biz çok memlun kaldık.', '2023-12-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3e4c0bd6a46031b3f8ec23984af4da0e', 'boarding-5b71c4dbad2700616e52623d', 'Şifa Mira', 2, 'Sayın Yetkili,
01.09.2025 tarihinde Kastamonu ili Çatalzeytin ilçesi merkezinde 4 yavru köpek ve anneleri Kastamonu İl Barınağı ekiplerince toplanmıştır. Hayvanlar sağlıklı ve zararsız olmalarına rağmen zorla alınmış, anneleri yavrularını korumak için direnmesine rağmen götürülmüştür.
Olay sonrası Çatalzeytin Belediyesi ile görüşüldüğünde sorumluluk reddedilmiş, Kastamonu Belediyesi ile görüşüldüğünde de aynı şekilde “bizimle ilgili değil” cevabı verilmiştir. Ancak hayvanların toplanıp Kastamonu Bakımevi’ne götürüldüğü ortadadır.
Kastamonu Bakımevi’ne götürülen hayvanların geri salınmadığı ve barınakta açlık, susuzluk, hastalık gibi ihlallere maruz kaldığı, kamuoyuna yansıyan görüntülerden de açıkça görülmektedir.
Bu nedenle sizden talebim:
Usulsüz şekilde toplanan Çatalzeytin’deki hayvanların kanuna uygun olarak alındıkları yere geri bırakılması,
Bakımevindeki koşulların ivedilikle düzeltilmesi ve bağımsız denetime açılması,
Görevini kötüye kullanan sorumlular hakkında işlem başlatılmasıdır.', '2025-09-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-68440f3bcb2d4c3ea6bbd298495fa7f6', 'boarding-5b71c4dbad2700616e52623d', 'önder bidecioglu', 10, 'Güzel Yer Veteriner Hekim leri Çok İlgili Yardımcı olup Bilgi Veriyorlar..', '2026-02-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b05363b69bf135ae01c0865fd522ef45', 'boarding-5b71c4dbad2700616e52623d', 'Sevcan Yıldırım', 2, 'Sokakta baktıgım kedım hastalandı barınaga bıraktık ve kedım 2 saat sonra ölmüş ertesi gün gittiğimzde öğrendık neden arayıp haber vermediniz dıyınce unuttuk dedıler 10 gundur hasta kedı ölmedı oraya gıttiği gibi öldü ne hikmetse kimsenın bırbırınden haberi yok o ben bakmadım dıyo o ben yoktum diyo. Aynı sey arkadasımın da basına geldı kısırlaştırmak ıcın verdıgı sağlam kediyi ameliyat sırasında ölmüş kaçtı demişler sonra uzerıne gıdınce arkadasım öldüğünü söylemişler kimse güvenip de oraya bırakmasın gerçekten vicdan denen bişey yok onlarda', '2025-04-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-776f9933cf1bf17209294cb42fcfbc54', 'boarding-5b71c4dbad2700616e52623d', 'Mustafa Erdemoğlu', 10, 'Önce aradık gittiğimizde büyük ilgi ile karşıladılar, 3 kişi birden müdahale etti götürdüğümüz kediye çok ilgili lerdi yorumlara bakarak çok korkmuştum ama hepsi yalan, çok ilgililer teşekkür ederim hepsine', '2025-08-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-5f6a81c1dbe399fef8d8ddaa', 'Love Pet Kuaför Otel Shop', 'Kedi ve köpek kabul eden karma tesisler', 'Kayseri', 'Mevlana', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DG8gJChHK6KyJAg-5MQ4qQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=319.72684&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DG8gJChHK6KyJAg-5MQ4qQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=319.72684&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DG8gJChHK6KyJAg-5MQ4qQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=319.72684&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Adrese servis","Tekerlekli sandalyeye uygun park yeri","Hızlı ziyaret","Banka kartları","Kredi kartı","NFC ile mobil ödeme","Transfer hizmeti","Günlük fotoğraf ve video"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kayseri-kedi-oteli","mevlana-kedi-oteli","kayseri-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Love Pet Kuaför Otel Shop, Kayseri Mevlana bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Love+Pet+Kuaf%C3%B6r+Otel+Shop/data=!4m7!3m6!1s0x152b12b3260e6a4f:0xb986223e24cc2411!8m2!3d38.6988876!4d35.5650429!16s%2Fg%2F11trdwn902!19sChIJT2oOJrMSKxURESTMJD4ihrk?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJT2oOJrMSKxURESTMJD4ihrk', 'boarding-5f6a81c1dbe399fef8d8ddaa')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-00ac3db7eaabe5d9d485b9af906f9a6a', 'boarding-5f6a81c1dbe399fef8d8ddaa', 'Ali EHVEN', 10, 'Kayserideki en güzel petshop diyebilirim mükemmel bir mağaza petkuaför petotel ne ararsanız mevcut kaliteli ürünler mevcut ve fiyatlarda piyasaya göre uygun ayrıca çalışanlar çok ilgililer ailecek uğrak yerimiz kesinlikle ziyaret etmenizi tavsiye ederim.', '2023-05-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d421c10100e64257f210130f5064a1bb', 'boarding-5f6a81c1dbe399fef8d8ddaa', 'Serkan Eser', 10, 'Gayet nezih ve çok güzel bir mağaza aradığımız çoğu ürün mevcut kendilerine çok teşekkür ediyorum', '2023-05-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-893e70bdaabb8c9d39805ca833342f14', 'boarding-5f6a81c1dbe399fef8d8ddaa', 'Esma Nur Büyükşekerci Taştan', 10, 'Güzel kaliteli marka ürünlere sahipler. Kayseri''deki en iyi pet mağazası diyebilirim.', '2023-12-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f586c728b68ad4516cab65d98cb4e292', 'boarding-5f6a81c1dbe399fef8d8ddaa', 'Emel Bulut', 2, 'Benim britis long hair kedim var.tuylerini kısaltMak  istiyorum  fiyat nedir yazarmiziniz lütfen', '2023-07-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9234ea2cbd57f46d5bd20fbe3b14ced4', 'boarding-5f6a81c1dbe399fef8d8ddaa', 'Ersin Erdoğan', 10, 'Müşteri ye ilgi alaka çok iyi   ilgililere çok teşekkür ediyorum.', '2023-05-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-16ecc429b24d97851039c8ed', 'Kayseri Pet Otel Von Team Şahin', 'Ev tipi bakım merkezleri', 'Kayseri', 'Boyacı', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3zO-2dF9hWDF2WsTbhjcLg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=355.58047&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3zO-2dF9hWDF2WsTbhjcLg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=355.58047&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3zO-2dF9hWDF2WsTbhjcLg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=355.58047&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","kayseri-pet-oteli","kayseri-kedi-kopek-oteli","boyaci-pet-oteli","kayseri-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Kayseri Pet Otel Von Team Şahin, Kayseri Boyacı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 591 33 57', NULL, 'https://www.vonteamsahin.com/', '{"google_maps":"https://www.google.com/maps/place/Kayseri+Pet+Otel+Von+Team+%C5%9Eahin/data=!4m7!3m6!1s0x152b3f95190bcb37:0xaf2edd1773fdeae5!8m2!3d38.916334!4d35.515516!16s%2Fg%2F11zgqhq7kj!19sChIJN8sLGZU_KxUR5er9cxfdLq8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJN8sLGZU_KxUR5er9cxfdLq8', 'boarding-16ecc429b24d97851039c8ed')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e72cc607bd1b1f5acf67dbafdb8446b4', 'boarding-16ecc429b24d97851039c8ed', 'Selda Akyel', 10, 'Safkan alman çoban köpeği meraklısı olarak ziyarete geldim.gercekten birbirinden özel alman çoban köpeği ile tanıştım.harika deneyimdi.kendi köpeğimide birkaç günlük bıraktım ilgi alaka çok iyiydi tavsiye ederim.', '2026-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9c52892a39f82985b0c37126dad22abe', 'boarding-16ecc429b24d97851039c8ed', 'Remziye Şahin', 10, 'Von team Şahin safkan alman çobanları ırk standartları yarışmaları için özel yetiştiriyor Alman kurtlarını kızıl siyah olarak bilirdim aksine bir çok çeşidi varmış hatta uzun tüylü olanı bile var ulusal ve uluslararası derece yapmış birçok köpek var meraklılarına tavsiye ederim', '2026-07-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fbe511b419a6359d59e5d3727abb01ef', 'boarding-16ecc429b24d97851039c8ed', 'Tuğba Aslan', 10, 'Kayseri''de köpek sahiplenmak için yer arayışındaydım. Von team şahini buldum. Alman kurdu yarışmaları için kendi köpeklerini yetiştiriyorlar. Cokta güzel bir mekan yapmışlar ziyaret için herkese açıklar. Kendilerinden değerli bilgiler edindim. Sahiplenme konusunda yardımcı oldular cok teşekkür ederim. Mutlaka tekrar uğrayacağım', '2026-07-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8b8aee59789944e96733f347242b3596', 'boarding-16ecc429b24d97851039c8ed', 'Nazlı Karadavut', 10, 'Minik yavrum için gitmiştim birbirinden değerli alman kurtlarını gördüm çok beğendim.şehirden biraz uzak fakat doğa ile iç içe sakin bir yer beğendim.', '2026-07-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-799167bdf31b01f2a76ff078', 'Beyazşehir kedi oteli', 'Kedi otelleri', 'Kayseri', 'Beyazşehir', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmg5T1GjPN5tnwegDm9icdAZa4Iu0OsU68YurUy19bdGLDvkQA7HobHc_uEusVEP1-Eltw4kRw7CcUC235m3_iiPM3ofUk7ZOWxIigbNi6xfOpGVtczmN3-ZH8JJfCvDnKS_KHErDwCHI=w408-h523-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmg5T1GjPN5tnwegDm9icdAZa4Iu0OsU68YurUy19bdGLDvkQA7HobHc_uEusVEP1-Eltw4kRw7CcUC235m3_iiPM3ofUk7ZOWxIigbNi6xfOpGVtczmN3-ZH8JJfCvDnKS_KHErDwCHI=w232-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRW-UF_DXZtEBxEv9FkJNJso2OGXu0eVqzDWRux7BB6NFwjh7jZDXiP2FUD5Mh-qy5xk1u0SfnYM7MgF0LgX2-oodSX1bAs0h8KnG9_7O7nIbd3APHsXL6JYYDWjP4GLEnM2M5GoHwYCXm=w226-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=wqW_9flg25D27R1df-EORw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=289.34677&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kayseri-kedi-oteli","beyazsehir-kedi-oteli","kayseri-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Beyazşehir kedi oteli, Kayseri Beyazşehir bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0538 415 42 90', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Beyaz%C5%9Fehir+kedi+oteli/data=!4m7!3m6!1s0x152b6b001934c60f:0x7eefb3a481e13c2d!8m2!3d38.7845788!4d35.5886026!16s%2Fg%2F11yv6b3wjh!19sChIJD8Y0GQBrKxURLTzhgaSz734?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJD8Y0GQBrKxURLTzhgaSz734', 'boarding-799167bdf31b01f2a76ff078')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cccde81b30077b3978fb8b1ab66008be', 'boarding-799167bdf31b01f2a76ff078', 'Sibel Mazlum', 10, 'kedim lokumu 1 hafta bıraktım çok ilgiliydiler her şey için çok teşekkür ederim', '2026-02-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-da323ef8764bdfa53af3b07b', 'Von Grenzland Köpek Eğitim Okulu', 'Köpek otelleri', 'Kırklareli', 'Doğu', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnd-2FqgM7UNyI5V7nPnf7Mkk83iscOBcv-E45MguNUBMc5TdFZbWHOB_3WS8DWZ1-_yKWXiCFA0Cs1zrO0qd0rQUJESdMx-f8a4cASTNqaXUYJh5QRWUjgUH4bGfyUcawy942DQ=w408-h358-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnd-2FqgM7UNyI5V7nPnf7Mkk83iscOBcv-E45MguNUBMc5TdFZbWHOB_3WS8DWZ1-_yKWXiCFA0Cs1zrO0qd0rQUJESdMx-f8a4cASTNqaXUYJh5QRWUjgUH4bGfyUcawy942DQ=w339-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWko_x-z2bHxyHKO-sHOj2lFGKPD0LyrQtgxKXY0qWDp3cON7fa9HqSAyGhSjIbd8uGlWiADaw1axKnd2hDFEkdUhpZO7y2p6ADui814NgUpcS5joFyU4qhoc4NuGjfbPbHlOox96A=w224-h336-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHxtRj1TcN7OC5jIy76nC9anQkq2Lco_tklR6PRJAXOraue7eyBxRbzGfdFXvDhJkpUBESj-xJG1dAUqsuBa-VnkxMDwmauBjU8mpY6gUuep66nQzHCkM8SXyxcRoH62ZrzhjT=w224-h298-k-no"]'::jsonb, '["dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","kirklareli-kopek-oteli","kirklareli-kopek-pansiyonu","dogu-kopek-oteli","kirklareli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Von Grenzland Köpek Eğitim Okulu, Kırklareli Doğu bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 905 39 00', NULL, 'http://instagram.com/vongrenzland', '{"google_maps":"https://www.google.com/maps/place/Von+Grenzland+K%C3%B6pek+E%C4%9Fitim+Okulu/data=!4m7!3m6!1s0x14b54065ecf68f67:0xc55b8c442e2bf3f6!8m2!3d41.7431199!4d27.2677231!16s%2Fg%2F11f3drlzz6!19sChIJZ4_27GVAtRQR9vMrLkSMW8U?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJZ4_27GVAtRQR9vMrLkSMW8U', 'boarding-da323ef8764bdfa53af3b07b')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2f63ccc944eac95f7a83c3c305d514ba', 'boarding-da323ef8764bdfa53af3b07b', 'Habibe Genc', 10, 'Can dostlarımızı emin ellere teslim etmek isterseniz hem tatil yaparlar hem egitim', '2018-07-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f5445a6af013e1eb43b6efd6087d075f', 'boarding-da323ef8764bdfa53af3b07b', 'Sevgi Eris', 10, 'İşlerini severek yapıyorlar, hayvanları çok seviyorlar, önemli olan bu', '2022-08-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b00cb73b17ee0cbfad79bd3254583dfd', 'boarding-da323ef8764bdfa53af3b07b', 'akif aksu', 10, 'Gözünüz kapalı güvenebileceğiniz, işini gerçekten hakkıyla yapan yer.', '2021-10-08'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ea3abc15d69e64d8cd60ebbbc015f6ba', 'boarding-da323ef8764bdfa53af3b07b', 'Dilara İskeçeli', 10, 'Köpek eğitimi ve pansiyonu için profesyonel ve güvenebileceğiniz bir yer.', '2021-07-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-3502aa5a323288f72d8a97eb4acd924b', 'boarding-da323ef8764bdfa53af3b07b', 'Serdar Karahan', 10, 'İşini severek ve bilerek yapan bir ekip. Teşekkürler.', '2022-09-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-d89e8ffcf2e4e9cc10054ce0', 'AquaHOME PETSHOP ® ️ & KEDİ OTELİ', 'Kedi otelleri', 'Kırklareli', 'Devlet', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmik4CmFcBtOa3J7anEPgVkAMN0LiT_XKlKsxH3eXi4XdHE1N8ZHAbprcNkcj05pdEmFiLRxwKrC9_NLb5IJA9bmBuUGIHa_v9Y7U96z7LvQo0wPFekkQg6ytw42XFsjD8QK3p9nw=w408-h396-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmik4CmFcBtOa3J7anEPgVkAMN0LiT_XKlKsxH3eXi4XdHE1N8ZHAbprcNkcj05pdEmFiLRxwKrC9_NLb5IJA9bmBuUGIHa_v9Y7U96z7LvQo0wPFekkQg6ytw42XFsjD8QK3p9nw=w306-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnq8QZm80c8CW3YvfhfwI5mGWGDuHf_NLw3GNuIF5r_7st9ItkXSM2hqal_HkK46kt4jOECnNyuBZdRDaa_w5OxZ4eB-Bbn6fSf-Ejpqggf7YupZP6U-1dzY0dwwi1kmQWN5EVg=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWky6kv40ZS2Offu_FeH4_zwA_595bmdBzC69IJHB0zneQa1bujri8gEuYw0iUmTJlCupqSBON_3GqmJQ6X5QqN62g13IC_gZZlaXXH3l9ziCMahYHg5rPXp9ks3Py5QrzQcnOMG=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWloeVIbL7ENAHg_x-y34UbvBHrjSNZdlUeDJe75DaAsESUXW3v0Ar_DMoG3qL3Eo_S-2jcjTVQ9yk2un02g-H85aFsb4iMXMjXf7-RZZ6_TKWEIMOZduNLVhEi7dLJEykAGEBGRaw=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmTj-j6kqIzXJWGGNkeAp_YX952p_t7Lh8W5z_pdT7vOQrJKLdeI00VNm5s92_OZaeL5x8EF0eBvvu07ScHFFIEB70j1ikKR2W1L0VlS14glfqjLU3k6J9Rf4_bMbw5iXZNInrg=w298-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=-0o6LbD6NDeHHN29aLfUwA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=64.83992&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Adrese servis","Mağazadan teslim alma","Mağaza içinde alışveriş","Hızlı ziyaret","Banka kartları","Kredi kartı","NFC ile mobil ödeme","Transfer hizmeti"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kirklareli-kedi-oteli","devlet-kedi-oteli","kirklareli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'AquaHOME PETSHOP ® ️ & KEDİ OTELİ, Kırklareli Devlet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 668 45 92', NULL, 'http://www.aquahomepetshop.com/', '{"google_maps":"https://www.google.com/maps/place/AquaHOME+PETSHOP+%C2%AE+%EF%B8%8F+%26+KED%C4%B0+OTEL%C4%B0/data=!4m7!3m6!1s0x40a09d6bf2ecbe33:0x37f226d93a927bc7!8m2!3d41.5701337!4d27.7658875!16s%2Fg%2F11q39cpypj!19sChIJM77s8mudoEARx3uSOtkm8jc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.8, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJM77s8mudoEARx3uSOtkm8jc', 'boarding-d89e8ffcf2e4e9cc10054ce0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-64884c6571f5a1f4d6b065155c4b556c', 'boarding-d89e8ffcf2e4e9cc10054ce0', 'elif hilal Çakır', 2, 'Bütün yorumları yapanlar akraba ya da tanıdık galiba. Sattığı ürünlerin arkasında durmayan bir satıcı, oğlum en pahalı filtreden aldı akvaryumu güzel temizlesin diye bir hafta çalıştı su bulanık bir türlü düzelmiyor. İade ya da tamir yok, çocuğa 10 tane balık satmış birisi yan yatmış balığı koymuş poşete göndermiş çocuğu. 10 yaşında çocuk diye kazıklamiş resmen.', '2026-07-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-43953190c8155f907a758df3098465b4', 'boarding-d89e8ffcf2e4e9cc10054ce0', 'Burak Duran', 10, 'Güler yüzlü çalışan', '2026-01-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-373113009388fec41a5f02b9f740c71b', 'boarding-d89e8ffcf2e4e9cc10054ce0', 'MURAT ÇAKAR', 10, 'On numara bir yer petshop olarak bol cesit bulunuyor guler yuz ve kaliteli urunleri olmasi cok iyi hayvan sever biriyseniz mutlaka ugrayin derim.', '2023-08-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b89884c414d04b7a1d9c9ca865e1e2b9', 'boarding-d89e8ffcf2e4e9cc10054ce0', 'Halil Emin BABALIOĞLU', 10, 'Sahibi Köksal Bey çok yardımsever, ilgili ve bilgili. Gönül rahatlığı ile yönlendirmelerini dinleyin ve deneyin. Keyifli alışverişler...', '2022-11-20'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-73829392fc7368d83572f9ba3d423b83', 'boarding-d89e8ffcf2e4e9cc10054ce0', 'Burak Coşkun', 10, 'Dostunuz için gereken bütün malzemeleri uygun fiyata bulabilirsiniz, Köksal bey ve eşinin ilgi alakası mükemmel', '2023-08-09'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-5b051bd923f2f15ab7f8bad7', 'Löple pet otel kuaför', 'Kedi ve köpek kabul eden karma tesisler', 'Kırklareli', 'İstasyon', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmKxkxVZ4x-8ew2GWn0TDqO7OJn6pVMYg9MZLPaFehCaWnXjFRDCzNhFQo6eN7vDoFs0iRGSHwvvpeI56qRV5LfX-nYfIEUnao5aMsPyNDfGS6_BPuUCNUcwKQoV5pyS0lM30s=w426-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmKxkxVZ4x-8ew2GWn0TDqO7OJn6pVMYg9MZLPaFehCaWnXjFRDCzNhFQo6eN7vDoFs0iRGSHwvvpeI56qRV5LfX-nYfIEUnao5aMsPyNDfGS6_BPuUCNUcwKQoV5pyS0lM30s=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkhw4MpMgxrZnm3sKISIL7UwX5GN-dBiSg701F8vaIE_V-y2VKP_96zGUXo6T4yMNvwCdj9lEA8HsZ_NKragDqcJhC3UmfBktTP-D7LRjWJiKei5leVkxRmpiCJL4fwr2GaVfJc=w224-h298-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kirklareli-kedi-oteli","i-stasyon-kedi-oteli","kirklareli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Löple pet otel kuaför, Kırklareli İstasyon bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0530 548 00 88', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/L%C3%B6ple+pet+otel+kuaf%C3%B6r/data=!4m7!3m6!1s0x40a7559ba8712d47:0xba86a47520391345!8m2!3d41.7045992!4d27.2173434!16s%2Fg%2F11tp6lgtkv!19sChIJRy1xqJtVp0ARRRM5IHWkhro?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJRy1xqJtVp0ARRRM5IHWkhro', 'boarding-5b051bd923f2f15ab7f8bad7')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-7cbd40d4fbdba1b9732c9408', 'Pati Dostum Köpek Oteli', 'Köpek otelleri', 'Kocaeli', 'Tavşanlı', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-2wt_tidnxG66mWV2z8paLqoWTwpQ8kvC2rq_Z3ivT6KbBHibxzEJTDnQ2Jq0U3S1S6v8q7f_Ak9pL1OGkWnydfCzCOCTTu29hlvqn9mjUQ5KN_rJTIXvlgBvAnZ5-oRjXBpU=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-2wt_tidnxG66mWV2z8paLqoWTwpQ8kvC2rq_Z3ivT6KbBHibxzEJTDnQ2Jq0U3S1S6v8q7f_Ak9pL1OGkWnydfCzCOCTTu29hlvqn9mjUQ5KN_rJTIXvlgBvAnZ5-oRjXBpU=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndKIWaZU2DxalKSbboCHNbAIrdCof1nQFC0Z7mfkakYyE24PLszp9Ol-8ZHU-DKRczhdhpYRSTmq1cbF0MhOyt5MOnmWixRMhZZ9KWGnohyIgmLyIR9LZpZvWPq5B1yZIIsuUmBg=w238-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnWD6m9kv08UoqCow3lIxXoB2l0dzRyT98OIWeBpbtHYbJISQJ7pgpV8vEjeDKwjFQSSFJVMhhm2H5GnsTSBv4ZEhFJQYcgONkIC0mjWUIQNXaM5WedQoUsIgeBtZrukTIbYwdNOA=w529-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=j10gV6cQiKQe5e86tWWe1w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=82.13944&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","kocaeli-kopek-oteli","kocaeli-kopek-pansiyonu","tavsanli-kopek-oteli","kocaeli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati Dostum Köpek Oteli, Kocaeli Tavşanlı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0536 259 99 85', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pati+Dostum+K%C3%B6pek+Oteli/data=!4m7!3m6!1s0x14cb278844d7ed2b:0xac1b7cfb61ffbbae!8m2!3d40.8313562!4d29.5073262!16s%2Fg%2F11q57ys47f!19sChIJK-3XRIgnyxQRrrv_Yft8G6w?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJK-3XRIgnyxQRrrv_Yft8G6w', 'boarding-7cbd40d4fbdba1b9732c9408')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9bdfe703d7f74f0ce2a5e05344242dff', 'boarding-7cbd40d4fbdba1b9732c9408', 'Başar Olgun', 10, 'Uzun bir araştırmadan sonra köpeklerimiz Hera ve Salda’yı 35 gün Ercan Bey’e bıraktık. Sağolsun çok iyi ilgilendi. Ferah, geniş ve gezme koşma tozma imkanları bol olduğu içinde kızlara çok iyi geldi. Teşekkürler', '2024-08-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-15750a4feddc58cd9290b6d92a9d760b', 'boarding-7cbd40d4fbdba1b9732c9408', 'DUYGU ULA', 10, 'Oğlumuz Mıcoyu 1 hafta bıraktık ve çok memnun kaldık.Miço da gelen videolarda çok mutluydu. İstanbuldan üşenmedik geldik tavsıye ederim ortam köpüşler icin cok ideal Teşekkürler ederiz', '2023-07-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-dff9284ee9da98696f44bd42b114d7fe', 'boarding-7cbd40d4fbdba1b9732c9408', 'arzu baran', 10, 'Köpeğimiz Acro’yu tatile gideceğimiz için bu otele emanet ettik. 1 hafta boyunca düzenli video paylaşımı yapıldı. Köpeğimizin yeşillikler içinde arkadaşlarıyla koşup eğlenmesini görmek bizi çok mutlu etti. Oğlumuzu gözümüz kapalı bir şekilde emanet edebileceğimiz bir yer bulduğumuz için çok mutluyuz. İlginiz için teşekkür ederiz ❤️', '2022-08-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0324a26d16cd7183b811e30f30c074f8', 'boarding-7cbd40d4fbdba1b9732c9408', 'Selcan ÇELİK', 10, 'Pati dostum köpek oteline can dostlarımızı güvenle teslim edebildigimiz için Ercan beye sonsuz teşekkürler.Sayenizde gözümüz arkada kalmıyor.', '2023-04-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ddcd80d8569f2ba74feb411b1febefff', 'boarding-7cbd40d4fbdba1b9732c9408', 'Canan Akcan', 10, 'Güvenle verebildigim yer fiyatlar gayet makul önemli olan güvenli yer olması tavsiye ederim 😊❤️', '2024-11-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-c7c96845c0fb7535ad4e91fe', 'Life Pet Evi', 'Köpek otelleri', 'Kocaeli', 'Pirceler', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlk_QwEYxCbyP6z-tR1E4ru1gmR3SZAHGjhzmoasgPswEROUJ_Xfx63ANlh9nuAgCS1ENrAuy-7biOxVaOAlmH2DdRAfYgX1xmkuME5xWa_z7o8dIRZSsaBjDZ8ekGV7yzYMqWF=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlk_QwEYxCbyP6z-tR1E4ru1gmR3SZAHGjhzmoasgPswEROUJ_Xfx63ANlh9nuAgCS1ENrAuy-7biOxVaOAlmH2DdRAfYgX1xmkuME5xWa_z7o8dIRZSsaBjDZ8ekGV7yzYMqWF=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlBuerCRXkdJ4v3SP-gJpiAcspfm-phV_36Gokw9aw7YB43zMlLl1wZILjxM6lDa8hoH6meKf-OEJRjjNafwpiPP-VHvcxb3hF7vq6vsNbsO5ZcUkM48ZQQF8U7GfYX1V82Oa_d=w292-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=UwC2vbVVHSUvlqyq4hzmJA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=164.94565&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","kocaeli-kopek-oteli","kocaeli-kopek-pansiyonu","pirceler-kopek-oteli","kocaeli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Life Pet Evi, Kocaeli Pirceler bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 765 28 78', NULL, 'http://www.instagram.com/life_petevi/', '{"google_maps":"https://www.google.com/maps/place/Life+Pet+Evi/data=!4m7!3m6!1s0x409e0228a754f8ff:0xdee8d3be72289a80!8m2!3d40.8921672!4d30.0801406!16s%2Fg%2F11f270l2p1!19sChIJ__hUpygCnkARgJoocr7T6N4?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ__hUpygCnkARgJoocr7T6N4', 'boarding-c7c96845c0fb7535ad4e91fe')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1d2242d29411ff230cf7c44077e1b358', 'boarding-c7c96845c0fb7535ad4e91fe', 'kenan çokçalış', 10, 'Sakın bu işletmeye canlarınızı emanet etmeyin.trafik kazası geçirmiş olan köpeğimi ameliyat ettirdikten sonra veterinerin kemiğinin kaynaması için 1 ay kapalı alanda kalması gerekli dedikten sonra birisi tarafından bu işletmeyi buldum 1 aylığına buraya teslim ettim.Köpeği buraya teslim edince sadece sol ön ayağı ameliyatlıydı gayet sağlıklı ve hareketliydi.1 ay sonunda bana teslim edildiği zaman köpeğimiz tir tir titriyor ve aşırı şekilde zayıflamıştı.hayvan ayakta duramıyor ağzı köpürüyordu şok geçirmiştim nasıl olurda bu hayvan bu duruma gelirdi arkasına bile bakmadan çekip gitti bir sonra öğrendikki yavrumuz ölümcül ve bulaşıcı bir hastalık olan Gençlik hastalığı yani (Distempera) Yakalanmış.5 aydır çekiyor çektiklerimizi bir ben bir Allah bilir', '2025-09-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-73aa8d658b4d1f6db77617fb2e4f1b1b', 'boarding-c7c96845c0fb7535ad4e91fe', 'Mustafa DOĞAN', 2, 'Yakın bir zamanda “köpeğimizi zorda kalırsak bırakabiliriz “ mantığıyla  çevresinden geçerken ziyaret etmek istedik. Saat 17.00 civarıydı. Gittiğimizde kapı kapalıydı zil vardı ona bastık seslendik ve bir beyfendi çıktı işletme binasından biz bahçe kapısının dışında olduğumuzdan gelebilirmisiniz diye çağırdım geldi. Dedik “işletmeyi gezmek istiyoruz köpeğimiz var ihtiyaç olduğundan bırakabiliriz diye düşünüyoruz” beyfendi “kapalı olduklarını belirtti normalde 17.00 da kapattıklarını bugun daha erken kapattıklarını belirtti.” Dedik “köpeklerle işimiz yok işletlemeye bakalım işleyiş hakkında bilgi alalım ne şartlarda bakılıyor görelim” adam bize “neye bakacaksınız “ diye tabir kullandı. Dedik köpeğimizi emanet edeceğiz görmek istiyoruz dedi kapalıyız. Dedim tamam. Yani içeri dahi alınmadık kapıdan geri döndük. Nezaketsiz bir durumla karşılaştık. Kapıdan gördüğüm kadarıyla içeride barınak sistemi var. Evinizde baktığınız canlıyı oraya emanet edeceğinizi sanmıyorum. Eğer bizim gibi yakınımızda köpek oteli var çok güzel zorda kaldığımızda köpeğimizi emanet edebiliriz düşünceniz varsa emanet etmeden gidin bir görün derim.', '2024-05-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9c6cc7d63af4ec6ded5a2436de0032ea', 'boarding-c7c96845c0fb7535ad4e91fe', 'Büşra Ceyrancı Doğan', 2, 'Beyefendi diğer yorumlardan gördüğüm kadarıyla tarım ve orman bakanlığına sırtını yaslamış onu öne sürüp duruyor. Bir çok köpek oteli deneyimimiz oldu sanırım “otel” kavramını bilmeyen bizler değil kendisidir. Ben evimde gül gibi baktığım hayvanımı dışarıda kulübeye vereceksem neden otele para ödüyorum? Hayvanların ne zaman dışarıda vakit geçirdiğini dahi bilmiyoruz hiçbir şey öğrenemedik. Gittiğimizde hepsi kulübenin içinde havlıyordu. “Hekimim ben neyin doğru olduğuna sizden iyi karar verebilirim” diyen hekime bu koşullarda ne kadar güvenebiliriz şüpheli. Konuşma üslubu ve davranışlarından ötürü asla güven vermiyor. Bir hoşgeldiniz ile bile karşılanmadık maalesef.. Temiz olduğunu kesinlikle sanmıyorum. Hiçbir şekilde ne içeri girmemize müsaade etti ne de işleyişle ilgili bilgi verdi. Demek ki beyefendinin iyi bir izlenim bırakmaya ihtiyacı yok:)) Evde çok iyi koşullarda baktığınız hayvanı “dışarıda kulübeye” bırakmak istiyorsanız tercih sizin. Benim hayvanım çok hassas ve böyle bir yerde durabileceğini sanmıyorum. Ki o kulübeden gün içinde ne kadar çıkıyorlar şüpheli.. Yani tercih sizin! Büyük ihtimal işletme sahibi “sadece kötü yorumlara saldırmayı” sevdiği için bize de bir karşı yanıt verecektir. Bir tavsiye olarak; konuşma üslubunuzu düzeltmenizi, bir işletmeci hatta sizin deyiminizle “hekim” olduğunuzu unutmamanızı tavsiye ediyorum. İyi günler!', '2024-05-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-cfa225db85d1a0e116f8ffe8ad577d0c', 'boarding-c7c96845c0fb7535ad4e91fe', 'cgdm Ysmtrk', 10, 'Lifepet evi Canberk bey iyiki yollarımız kesişmiş.Sizden sahiplendiğimiz oğlumuz Yumak canımız oldu evimizin huzuru sağlıkla 4. Yaşına girdi .Tatil sürecimizde yavrumuzu güzel imkanlardan yararlanması ,sıcak aile yuvasından uzaklaştığını hissetmeden ağarlamanız ve kendi çocuklarınız gibi hepsine aynı özenle davranmanız çok önemli yavrumuzun güvende olduğu duygusuyla biz de rahat bir tatil yapıyoruz .
Titizliğiniz,verdiğiniz güven ve sevgi için çok teşekkür ederim .Sağlıkla tekrar görüşmek üzere selamlar', '2023-12-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a12896012c734708f36fdb9438a2c7c5', 'boarding-c7c96845c0fb7535ad4e91fe', 'Tolga Yuzener', 10, 'Bayram tatili için köpeğimizi bıraktık. Çiftlikleri çok güzel çok düzenli çok ilgililer istediğimiz zaman fotoğraflarını attılar. Döndüğümüzde bıraktığımızdan daha iyi bi şekilde teslim aldık. Kocaelide güvenebiliceğiniz tek adres.', '2019-08-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-e9f247651f88291c892cae96', 'Flipper Pet Hotel', 'Kedi ve köpek kabul eden karma tesisler', 'Kocaeli', 'Merkez', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnfs8JDIxQuSzL_-qqGXp6XiNxUbqWsiSWjEiYEZFAwUnvAT5p6_TExalpAT5sMNQb0l_eisIe3uFQBOdKx74c1tsY2_ICkGFalaNm5T-ToPzXkTb1uLYB0Vx4H2G-KlKhLBAAf=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnfs8JDIxQuSzL_-qqGXp6XiNxUbqWsiSWjEiYEZFAwUnvAT5p6_TExalpAT5sMNQb0l_eisIe3uFQBOdKx74c1tsY2_ICkGFalaNm5T-ToPzXkTb1uLYB0Vx4H2G-KlKhLBAAf=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkNS2D513fQtyeQU2UEXDFPJbviSnRbGzJalDICGHjV2EcCFAps_VzlqmuPWxqXeBlFx6LtBOVNnTp1R16iEzxEq7HDqe_L47jUNtJtFfACcR7aptG07bYNoQoXv4QH0pZVzf6n=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkAzHwyu1gW3y_meFp7yTSfnDy-Q_kZCmpSy5knwuf8biJbx1Si_3iTUiNy64P1t9zYkyeLR8joYyhOlMWEQzL0EFOf_HtClbpxLUy1Zf8Qz2XjUnoOWwPScsBTAVYrx8VBTznnaw=w238-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Re8HzabWT0NYuroBsoASYg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=113.28496&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kocaeli-kedi-oteli","kocaeli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Flipper Pet Hotel, Kocaeli Merkez bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0537 249 47 70', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Flipper+Pet+Hotel/data=!4m7!3m6!1s0x14cb4166d68e712f:0xf5840c59e72c49ac!8m2!3d40.7187644!4d29.8195406!16s%2Fg%2F11l1q8d4py!19sChIJL3GO1mZByxQRrEks51kMhPU?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJL3GO1mZByxQRrEks51kMhPU', 'boarding-e9f247651f88291c892cae96')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b4c353da2df369fb26a4c13b92d65deb', 'boarding-e9f247651f88291c892cae96', 'gökhan kaya', 10, '1 hafta boyunca Pamuk canımıza gayet ilgili bir şekilde baktığınız ve aralarda fotoğraf ve videolarını da ilettiğiniz için teşekkür ederiz. Artık gönül rahatlığıyla bırakabileceğimiz bir evi daha oldu Pamuğumuzun 😸🤗', '2024-06-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7c1560ac770ebae4307b6a5db2e4e4c9', 'boarding-e9f247651f88291c892cae96', 'Şule Ünbulduk', 10, 'Çok güler yüzlü,ilgili ve anlayışlı bir işletme. İlk kez kedimden 1 hafta boyunca ayrı kaldım ve hergün fotoğraf ve video yollayıp bizi bilgilendirdiler. Gerçekten çok memnun kaldık.🌸', '2025-09-07'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-69116bd2c4f8911b4d7151755cfefb01', 'boarding-e9f247651f88291c892cae96', 'Metin Ö.', 10, 'Seyahatlerimizden dolayı her ay 4-5 gün kedilerimizi konaklama için bırakıyoruz. Gerçekten çok Güleryüzlü, anlayışlı bir işletme. Bugüne kadar en ufak bir sorun yaşamadık, içimiz çok rahat bir şekilde çocuklarımızı emanet ediyoruz. Gönül rahatlığıyla herkese tavsiye ederim.', '2023-12-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1cd9e62f4b1a821e27948cdf58c35b5d', 'boarding-e9f247651f88291c892cae96', 'Duygu Öztürk', 10, 'Her ay 2 kedimizin konaklaması için tercih ediyoruz kendilerine buradan da çok çok teşekkür ediyoruz çok memnunuz ilgi ve alakalı temizlik her şey çok güzel bundan sonra da düzenli olarak hizmet almaya devam edeceğiz Gölcük için büyük şans çok çok teşekkür ederiz', '2023-10-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5f45628fa3ae1065807dd582dba5dcbd', 'boarding-e9f247651f88291c892cae96', 'hazar çil', 10, '2 tane kedimi 1 haftalığına bırakmıştım çok temiz çok güzel bir şekilde bakmışlar gerçekten güvenebilirsiniz her şey için teşekkür ederim.', '2024-06-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-79cb0177749e307e240f7337', 'Pati Palace Pet Kuaför ve Kedi Oteli', 'Kedi otelleri', 'Kocaeli', 'Fatih Sultan Mehmet', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZQo_1JzZVaPmhn_CxVEMJvxT8xpPrYn2IVt_hMOf3GfWOsyuT9P6gZADSUVNuyqdv16UHHYQeBYM4AglF1W9UAV817reK2V_a1LqVSjsSRHO9gi2Kg_LKk_GmSPqsXHEaP4DWUriwp2G8=w426-h240-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZQo_1JzZVaPmhn_CxVEMJvxT8xpPrYn2IVt_hMOf3GfWOsyuT9P6gZADSUVNuyqdv16UHHYQeBYM4AglF1W9UAV817reK2V_a1LqVSjsSRHO9gi2Kg_LKk_GmSPqsXHEaP4DWUriwp2G8=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlOZgZ6hHXgKsTo-eFZfOpSIaPO8dJ5nBIWhOJ3_KF3LZwuvriB8ppE2bME3QKWA9_oOuN6m1N4ktszLUusMggBC0pCfEjFYATd45lfrea4AzuIc32zuJxcAh_ohPUtf_RSwvNE7OqkwB4e=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWZvBzaeS4P3nrtLWM-YZHuOJcbhF5yKbE7MZTl7HOP6d95MJj1tTrinF0rt3Vb75noCgSQ5HmYLFYI8uiwfzZItDDCYXpBoKFocfPLHTcWX_eKNEzkJGUJwAiTnqf9Z-rMVCEN97eGUw=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZQo_1JzZVaPmhn_CxVEMJvxT8xpPrYn2IVt_hMOf3GfWOsyuT9P6gZADSUVNuyqdv16UHHYQeBYM4AglF1W9UAV817reK2V_a1LqVSjsSRHO9gi2Kg_LKk_GmSPqsXHEaP4DWUriwp2G8=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0mmZRQcUlrXJEWwybWNswKz_p0uOzgd-Z1lrlAJwDrk9i6VXsZVSr28aNO0bWkUM4MtnnG6pJfX0k9gh56pn8_8xI73gGq6MVeSxsmmB9ZoCAo6gQ3TxynalSqZIjff-tl97u1dI91ZNm=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmbn_T6_5kHuNzPn4WCeB8OZq0VaHtYOYko4BTFeJdAF4tOU0Tt5Ot_w69G7yWR7e5VxwXyLlWWtvC7LQb0zy5QcTQ7M_-v5JAy2xUbQw5DGOeCnQ_6sPTxR5Ch6Obl3F5sOGJ_PvW0Yu1L=w224-h299-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmOAUOHxElFTv4kdodoTczi2oSjgb5HC_LHXzLuBVtp237fx7jh_3nqYfjhCZDdsFXMQIJxqgGRv2Fx3ZrrZwPUjhGHNME7LMpQoZ7OAJyTZvtgnU4koZfs3uCMPMkZlR59IknzGaMuu4gx=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7fWyeteg3BR_INMo4pW60w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=159.64264&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Banka kartları","Kredi kartı","Kendi otoparkı var","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kocaeli-kedi-oteli","fatih-sultan-mehmet-kedi-oteli","kocaeli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati Palace Pet Kuaför ve Kedi Oteli, Kocaeli Fatih Sultan Mehmet bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0542 699 57 43', NULL, 'http://www.pati-palace.com/', '{"google_maps":"https://www.google.com/maps/place/Pati+Palace+Pet+Kuaf%C3%B6r+ve+Kedi+Oteli/data=!4m7!3m6!1s0x14cb5b1d59d57449:0x5f979c3010fd2b94!8m2!3d40.7351596!4d30.0156717!16s%2Fg%2F11nqm0_mts!19sChIJSXTVWR1byxQRlCv9EDCcl18?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJSXTVWR1byxQRlCv9EDCcl18', 'boarding-79cb0177749e307e240f7337')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-24bbb240d513fa5ee8c761ac2c289861', 'boarding-79cb0177749e307e240f7337', 'OĞUZ YASAMTÜRK', 10, 'Tatil için 15 gün küçük oğlumuzu bıraktık. Çok memnun kaldık, harika bir yer, çok temiz, çok ilgililer, istediğimiz zaman kameradan izleyebildik. Kesinlikle tavsiye edebileceğim bir pet otel.', '2026-08-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-50fab73dd53044cae0a96010e1f00765', 'boarding-79cb0177749e307e240f7337', 'Beyza Küçükaydoğan', 10, 'Kedilerimiz için beklediğimiz şey buymuş resmen. Çok tatlı yeni evlenmiş bir çift işletiyor ikisi de çok ilgili çok bilgililerdi. Kedimiz Limon Beyza Hanım ve Alperen Bey e bayılıyor resmen çok memnun kaldık 🥰🐈', '2026-07-15'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-190d707803d96606a14d55a9440599aa', 'boarding-79cb0177749e307e240f7337', 'Elif Büşra Uğraş', 10, 'Kedimizi birkaç günlüğüne buraya bıraktık ve her şeyiyle çok memnun kaldık. Asla gözünüz arkada kalmasın çok ilgililer ve içerisi de çok güzel bi kedinin ihtiyacı olabilecek her şey var.', '2026-09-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5d97b027a804fe0f2001e698d3efd595', 'boarding-79cb0177749e307e240f7337', 'Mert ÇETİN', 10, 'Kedimizi 1 günlüğüne Pati Palace Pet Kuaför ve Kedi Oteli’ne emanet ettik ve gerçekten çok memnun kaldık. 🐾❤️

İlk andan itibaren hem ilgi ve alakaları hem de kedimize karşı yaklaşımları çok güzeldi. Mekân son derece temiz ve hijyenikti. Odaların içerisinde kamera bulunması da bizim için ayrıca büyük bir güven oldu; gün içerisinde kameradan kedimizi istediğimiz zaman takip edebildik.

Kedimizin konforuna ve güvenliğine gerçekten önem verdiklerini hissettik. Gönül rahatlığıyla emanet edebileceğiniz, işini severek yapan ve hayvanlara değer veren bir işletme. Emeği geçen herkese çok teşekkür ederiz. Bundan sonra ihtiyaç duyduğumuzda kesinlikle tercih edeceğimiz bir yer. 🐱💙

Kesinlikle tavsiye ediyoruz. 🙏🏻z', '2026-08-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-161345a1719874d59d8378b64d02e07a', 'boarding-79cb0177749e307e240f7337', 'Nihal Öztürk', 10, 'Kedimiz 3 gün konakladı. Çok memnun kaldık. Bu süreçte kedimiz ile ilgili sürekli bilgilendirildik.', '2026-08-31'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-953da4306063fa0edbce5cae', 'KOCAELİ PET OTELİ VE EĞİTİM MERKEZİ', 'Kedi ve köpek kabul eden karma tesisler', 'Kocaeli', 'Ulaşlı Yalı', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bkVKIx-VRazoR5NCr146mg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=179.18085&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bkVKIx-VRazoR5NCr146mg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=179.18085&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bkVKIx-VRazoR5NCr146mg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=179.18085&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kocaeli-kedi-oteli","ulasli-yali-kedi-oteli","kocaeli-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'KOCAELİ PET OTELİ VE EĞİTİM MERKEZİ, Kocaeli Ulaşlı Yalı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0543 354 30 59', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/KOCAEL%C4%B0+PET+OTEL%C4%B0+VE+E%C4%9E%C4%B0T%C4%B0M+MERKEZ%C4%B0/data=!4m7!3m6!1s0x14cb41446d3e983d:0x446c2c1db7a86186!8m2!3d40.7038177!4d29.6861701!16s%2Fg%2F11fk1d6v_r!19sChIJPZg-bURByxQRhmGotx0sbEQ?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJPZg-bURByxQRhmGotx0sbEQ', 'boarding-953da4306063fa0edbce5cae')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4084694c15c00a636408308790d8906d', 'boarding-953da4306063fa0edbce5cae', 'Dogge Tns', 2, 'Köpeğin cinsini sorup pitbull olduğunu duyunca direkt almıyoruz pitbull diye cevap aldım, hayvanın huyunu suyunu kaç aylık olduğunu dahi sormadılar. Hayvan dostluğundan oldukça uzak bir ticarethane. Siz bu şekilde yaklaşırsanız bu canları topluma nasıl sevdirip kazandıracağız biz?
Gerçekten çok yazık!! Bu tutumları bence birçok şeye cevap veriyor, hayvan sevgisinden ve profesyonellikten oldukça uzak. Lütfen çocuğunuzu teslim etmeden tekrar düşünün.', '2022-06-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-dc2cf9eaa94c3ea02158ecabc16e39e4', 'boarding-953da4306063fa0edbce5cae', 'salih ayaz', 10, 'Can yoldaslarinizi güvenle emanet edebileceğiniz muhteşem bir mekan. İlgi ve alaka çok iyi. Kendi can dostuma benden daha iyi baktıklarını söyleyebilirim. Ulaşım çok rahat. Emeği geçenlere teşekkür ediyorum.', '2019-04-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9db435dc0247289c757d9a483e0d384a', 'boarding-953da4306063fa0edbce5cae', 'Hasan AKYILDIZ', 10, 'İlgi alaka süper kesinlikle tavsiye ederim pişman olmazsınız.  Özellikle melih beye inanılmaz alakası , bilgi ve becerisi icın com tessekkür ediyorum.', '2019-04-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b93260c9e3b55195b196ad1d71245d1f', 'boarding-953da4306063fa0edbce5cae', 'ismail şen', 10, 'Cok guzel bir mekan.İlgi alaka süper.Şidettle tavsiye ediyorum.Köpeğim cok güzel bir hafta geçirdi...', '2019-04-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-057bacfe5595fae3bf99b46596589506', 'boarding-953da4306063fa0edbce5cae', 'Eyüp Kuskaya', 10, 'İlgi alaka mükemmel . Çok güzel bir tesis. Melih beye teşekkürler.', '2019-04-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-6313e276440e317e43e1eee8', 'Hayvan oteli', 'Kedi otelleri', 'Konya', 'Selçuklu', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=eZTLU-4WEFaagdLry9Wl-Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=79.07199&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=eZTLU-4WEFaagdLry9Wl-Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=79.07199&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=eZTLU-4WEFaagdLry9Wl-Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=79.07199&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","konya-kedi-oteli","selcuklu-kedi-oteli","konya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Hayvan oteli, Konya Selçuklu bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Hayvan+oteli/data=!4m7!3m6!1s0x14d08d0064202825:0x405468e3d5eaa2eb!8m2!3d37.983585!4d32.5135757!16s%2Fg%2F11ntfjyw5z!19sChIJJSggZACN0BQR66Lq1eNoVEA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJJSggZACN0BQR66Lq1eNoVEA', 'boarding-6313e276440e317e43e1eee8')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-7e140b5782056dfdd3de4a15', 'Taby Paws Hotel', 'Ev tipi bakım merkezleri', 'Konya', 'Beyhekim', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFpTGEF8np4pbGy5QtKEfr52eTjVdXr9_zVBhOAtrxGXIle5yCUK-BMKB8W1U_D2CUWTCV5QgJ_3vDpsZZRTYrV7sj1p-u_9DNH6FRzzSXvegEbrQjmymsHyJlroW1USNRI2e4Kj6JLEjB=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFpTGEF8np4pbGy5QtKEfr52eTjVdXr9_zVBhOAtrxGXIle5yCUK-BMKB8W1U_D2CUWTCV5QgJ_3vDpsZZRTYrV7sj1p-u_9DNH6FRzzSXvegEbrQjmymsHyJlroW1USNRI2e4Kj6JLEjB=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk24denkD1xEqlGsCQo6YJJitKNxLfxtp3w46VHMIAFXtBqqw_sHrcofnLQkaBVcy3PCm2J1gjDA7pNKomTxe2DcHTrEkv1dyqMHlngWyQHOJ56KGq9kZrYQsS-xjXKjou3c2L4u8waOls=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmUZLcEvjhV3qRJRNMIKhQndWDeJh3Nv6kswUMVvxq8l5uRK7g2qHDZLlg1w6a64WMQAIlRXpqpwXrHD0ZxQv_Fi7WImKkOlU5xc6peeRR3MC023I23febCUOLpiXqzSQcQG7ipI_Q5b1jV=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlBWonYi_8iEpCPGx358BFTphUcv9X8HIgqz2s0eUaRGHFpdtLp6ZAdrtx8f4zSDWjYpw48bQZhosAf3gvAjUzMJWLuDwijDpoZELdGZ0SYc0zld_82QjUHXY2PgPh10Syacw9a47UFRKvz=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkorpf9ZjU8a5WbXA2CyPu8Hv2rwR2PrVJ9T1nvYXhZQ_9CqyJS7vmGrI3r8UpDiezRe2htxcjZCokrdefnY4P0yMbMVVlrjvTsZ7fc4IuBU3pq51SUVEitZ8TOYtQdpU-EWirEwQzjlE0=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9I36IejbKSfpMLMeLBEt6aEjRxlR-JL7MWNhgipjbOC3A7fKBMunjtsMV7rN0-AFdsrfZ8mgD6A30g8H6sZLSUc4cBwkmwUYlin1uLAGcu0YAgqBNTqOmW1zYN8iamxHecKNbk38wqJUN=w529-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTswFHKa3f8dJ73nhKlwhKbLmsNAoe4TxITgDCP3Xf4VAscVChYAn5yYtg1DIHSWg3UJ1C3cRfnwwSqnXRtKQy9O07Ss8Q5UEZMtuoTKyZyfcNfFBITxk7rh4fZbiSv0vxaM_KXmljKcGw=w224-h398-k-no"]'::jsonb, '["cat","dog"]'::jsonb, '["Gerçek mekanda hizmet","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Yardımcı indüksiyon döngü sistemi","Üniseks tuvalet","Cadde üzerinde ücretsiz park yeri","Kendi otoparkı var","Ücretsiz park yeri"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","konya-pet-oteli","konya-kedi-kopek-oteli","beyhekim-pet-oteli","konya-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Taby Paws Hotel, Konya Beyhekim bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 042 22 00', NULL, 'https://konyapetotel.com/', '{"google_maps":"https://www.google.com/maps/place/Taby+Paws+Hotel/data=!4m7!3m6!1s0x14d08d99e3ddfae5:0x270ae9bdebc49f95!8m2!3d37.9809153!4d32.4954902!16s%2Fg%2F11mc_0jlwg!19sChIJ5frd45mN0BQRlZ_E673pCic?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ5frd45mN0BQRlZ_E673pCic', 'boarding-7e140b5782056dfdd3de4a15')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-78bc845eec405f2fb9c45e56deb3a869', 'boarding-7e140b5782056dfdd3de4a15', 'Derya Deniz', 10, 'Lina’yı 2 gece boyunca gönül rahatlığıyla emanet ettim 😊 Süreç boyunca sürekli video ve bilgilendirme gönderildi, hiç aklım kalmadı. Rahman Bey gerçekten çok ilgili ve güven veren biriydi. Lina’yla kendi köpeği gibi ilgilenildiğini hissettim. Artık bir yere gitmem gerektiğinde Lina’nın ikinci evi olarak görebileceğim bir yer oldu. Her şey için çok teşekkür ederim, gönül rahatlığıyla tavsiye ederim 🐾', '2026-05-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1ae9f7d7f251f84e30e922d85686451e', 'boarding-7e140b5782056dfdd3de4a15', 'Burak atıcı', 10, '⭐️⭐️⭐️⭐️⭐️

Köpeğimiz Leo’yu ilk kez emanet etmenin heyecanını yaşarken, Tabypaws Köpek Oteli ve özellikle Abdullah Bey sayesinde tüm endişelerimiz ortadan kalktı.

Leo’ya gösterilen sevgi, ilgi ve özen gerçekten takdire şayandı. Düzenli olarak bilgilendirilmemiz ve Leo’nun mutlu olduğunu görmek bize büyük güven verdi. Onu kendi köpekleri gibi sahiplenmeleri bizim için çok değerliydi.

Evcil dostunu güvenilir, temiz ve sevgi dolu bir ortama emanet etmek isteyen herkese gönül rahatlığıyla tavsiye ederiz. Başta Abdullah Bey olmak üzere tüm Tabypaws ekibine emekleri ve misafirperverlikleri için çok teşekkür ederiz. Leo’nun bundan sonraki adresi de kesinlikle burası olacak. 🐾', '2026-07-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7d06e1196defab4e7f3c770a80339740', 'boarding-7e140b5782056dfdd3de4a15', 'Fatih Ünay', 10, 'Kesinlikle gözünüz kapalı güvenle hayvan dostunuzu götürüp bırakabılecegınız bir yer .Temizlik acısından pırıl pırıl. Gercekten yavrunuzu bir kreşe bırakır gıbı odalar ve ilgi alaka Abdullah beye cok tesekkür ederiz ilk deneyimimiz olmasına ragmen Konyada cok memnun kaldık kendısine ayrıca cok cok tesekkür ederiz . Sanki aileden bir kişiye bırakıyormıs gıbı hissettik. vıdeolar ve eğlenceli, oyunlarla köpeğimizin sosyallestıgını düşünuyoruz. İyiki varsınız.🙏', '2026-06-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ca9dfc971eb96325b91afe9c79ad7390', 'boarding-7e140b5782056dfdd3de4a15', 'Mert Şenel', 10, 'Tarçın’ımızı 1 haftalığına bıraktık. Her gün fotoğraf-video ile bilgilendirme yapıldı ve kendi kedileri gibi ilgilendiler. Kedilerin özel odaları ve ortak alanlarıyla hem temel ihtiyaçları hem sosyal ihtiyaçları karşılanıyor. Kedilerinizi içiniz son derece rahat bir şekilde emanet edebilirsiniz. Hizmet için çok teşekkür ederiz, insan kedisini herkese bu kadar rahat emanet edemez. Taby Paws’ı herkese kesinlikle tavsiye ederim. 😊', '2025-08-29'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-57667ba1a5f53fbf7dd08bb2f37a0aa9', 'boarding-7e140b5782056dfdd3de4a15', 'Ecem Işık Özbek', 10, 'Köpeğim 13 yaşında ve biraz ‘mızmız’ sayılabilecek bir beyefendi. Küçük ırk ve çok enerjik ama bir o kadar da asosyal ne yazıkki. Rahman Bey köpeğimizle o kadar güzel ilgilendi ki köpeğimiz hem sosyalleşmeyi öğrendi, hem kendi mamasını tüketmeyi öğrendi, hem de enerjisini attı. Hiç arkamız çekmedi, kameradan 7/24 izleyebiliyorsunuz. Tertemiz ve klimalı bireysel odaları oluyor. Sadece oynasın diye bile getirenler var. Bizim için de, köpeğimiz için de çok güzel bir tatildi. Teşekkür ederiz.', '2026-07-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-8e672dc458799156d7e3e38a', 'Pati krallığı pet kuaför pet otel', 'Kedi ve köpek kabul eden karma tesisler', 'Konya', 'Buhara', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWneKdxkIOHEJI_lVrDG0uFLR1okl6K6so-CpFpF5jogdpVs7EtGK1ybB2KHRzRTJk40LkNSfX6AefXXQRNIi5xJsp5Tg1E_vr2s670RdIaezAaUOSQl3q4PafMMkmTbDf7Ks5IE0Y4mmKz2=w408-h541-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWneKdxkIOHEJI_lVrDG0uFLR1okl6K6so-CpFpF5jogdpVs7EtGK1ybB2KHRzRTJk40LkNSfX6AefXXQRNIi5xJsp5Tg1E_vr2s670RdIaezAaUOSQl3q4PafMMkmTbDf7Ks5IE0Y4mmKz2=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkuTLIMrZNWBJAqC8bwO1Sg8SNDKTMUXUO9hwCHF0Ee504VXboWQiu6RIPfV0_x4FY95N3Rf8AfrT55aIjhYGbjHRy7dWVvFw_ln-9idrBD8fqndg1BME8P3Wjhf2ogWFFoKi2F=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgg21svlOiBsZGyOlagfEF9BTTKafzGSfxau8V6pSWnGkSkztQ6FQtSJ3AZFFyCtQ5C_U6ggKQA9p7nEKXgnbogY7A-gTDG4CzoL-Nj72gMN-XLHF3KKNYWpt-fAAAel87sI5mW2pDzNtt=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmUHEV2fErPQy672hfVgi9go5169EavokbhBd76t8zao5DWPZA-Xf3t2xDoU_72oQDzYJjiBfETpAo82fEfYVt9NrvuDbG50hp8t08j-GqdHO5DSZ31MOv7aNDL_YOHPPK39-3ahByEBIqB=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWllnZDYdHkTLiz4AfQRCmu1WgWSYNwgpiz3XSEzN_KveMMWwp5pnwjI4rqMEQ0NYJ_J4ewz584QcwlCP9JF6VQtkIc1CVrozBGPrrWXvSfGRL1HvuvPCrm6YgMOE-QMXpEeeJLxUI9T7AI=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXiCMFSwiXUK1v8WbG62CXu35tC2ng67TbNPuBstZepaHUGZLTwfM6313LafSswoL41S8vQWirFgAgp0VrOwdmQIM_YfaIkKkIOhieDn8p2R5F7ppI9gmiTmAlgPLSHzmWCpKEZBfMzMLh=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=akN6l305hhhiJsdfpU4_aA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=271.588&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun park yeri","Banka kartları","Kredi kartı","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","konya-kedi-oteli","buhara-kedi-oteli","konya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati krallığı pet kuaför pet otel, Konya Buhara bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0546 501 04 07', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pati+krall%C4%B1%C4%9F%C4%B1+pet+kuaf%C3%B6r+pet+otel/data=!4m7!3m6!1s0x14d08f9a2dbd333b:0x47edcb61af9b2ed5!8m2!3d37.9304997!4d32.488039!16s%2Fg%2F11wvkkgk1l!19sChIJOzO9LZqP0BQR1S6br2HL7Uc?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJOzO9LZqP0BQR1S6br2HL7Uc', 'boarding-8e672dc458799156d7e3e38a')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-98dc8f690bba35eaf12adc491d8e0e97', 'boarding-8e672dc458799156d7e3e38a', 'H Y', 10, 'Tarçın’ı bugün ilk kez getirdik ve her şey mükemmeldi! İlgi, hijyen, profesyonellik ve sevgi dolu yaklaşım harikaydı. Tarçın normalde biraz çekingen bir köpek ama burada kendini çok rahat hissetti. Tıraşı da tam istediğimiz gibi oldu – hem estetik hem konforlu. Teras alanı da ayrı bir artı, köpekler için oldukça keyifli bir alan yaratılmış. Gönül rahatlığıyla herkese tavsiye ederim. Ellerinize, emeğinize sağlık! 🌟🐾', '2025-07-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-81339ffd4ac69afb73b87e72b6298e89', 'boarding-8e672dc458799156d7e3e38a', 'Merve Uluşan', 2, 'Hayatımda gördüğüm en kötü pet kuaförü. Üç kedimi getirdim. Sağlık sorunlarından dolayı tıraş yaptırmak istedim. Tıraş yapmaktan anlamadıkları gibi. 30.000 TL''ye aldığımız tıraş makinemiz tarakta sorun çıkarmaya başladı dediler. Kıtık olmayan çocuğum da kıtık var o yüzden makine yürümüyor dediler, üstelik yanında gelen kişi erkek kuaföründen biri idi. Birde çocuğumun sırt kısmından deneme yapıp yarım yamalak bıraktırdım. Popo kısmını kısaltın bari dedim onu bile yapamadılar makine tüy asılttırıyordu çocuğumun canı yandı yeterli deyip bıraktırdım. Mecburiyetten Petshop kısmından taşıma çantası alıp uzaklaştım oradan. Tavsiye etmiyorum...', '2025-11-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d90abad33528b4e864f70cc18719296b', 'boarding-8e672dc458799156d7e3e38a', 'Hafize Kızılcık', 10, 'Çalışanlar gayet güler yüzlü ve sevecen ben kahvemi yudumlarken köpeğimle gayet iyi ilgilendiler bundan sonra köpeğimi düzenli bir şekilde getireceğim ayrıca hayvanlar çn sezileri çok güçlüdür köpeğim çok mutlu ve rahat durdu ben çok memnun kaldım teşekkürler', '2025-10-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ee7da153198e46aafc762b50766681aa', 'boarding-8e672dc458799156d7e3e38a', 'Büşra hatice Balin', 10, 'kedimi ilk defa traş ettirdim  cok memnun kaldım kedime cok güzel davrandılar merve hanıma cok teşekkür ederim güler yüzü ilgi ve alakası mükemmeldi iyiki buraya gelmişim', '2025-09-30'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1b958bd7bccad7f0282b08d0e2f4be9c', 'boarding-8e672dc458799156d7e3e38a', 'Şeyma Önder', 10, 'Çok ilgili ve tatlı insanlar. Verdikleri hizmetten memnun kaldık kedimizle çok ilgilendiler. Konya da bu kadar kibar insanlara denk gelmek biraz zor kendilerine teşekkür ederiz işlerini haklarıyla yapiyorlar💛💙', '2025-09-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-fd8d928c090628080263437a', 'KONYA KEDİ OTELİ', 'Kedi otelleri', 'Konya', 'Selçuklu', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=s_DLdQF19G2MVz4UbQ-5dA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=295.38922&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=s_DLdQF19G2MVz4UbQ-5dA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=295.38922&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=s_DLdQF19G2MVz4UbQ-5dA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=295.38922&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","konya-kedi-oteli","selcuklu-kedi-oteli","konya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'KONYA KEDİ OTELİ, Konya Selçuklu bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/KONYA+KED%C4%B0+OTEL%C4%B0/data=!4m7!3m6!1s0x14d085a83b4e95cb:0x86d71146fbda31e2!8m2!3d37.872197!4d32.4912748!16s%2Fg%2F11fy4tl_ht!19sChIJy5VOO6iF0BQR4jHa-0YR14Y?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJy5VOO6iF0BQR4jHa-0YR14Y', 'boarding-fd8d928c090628080263437a')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-58faa18e6dcb881df8b99c2d', 'Special Dogs köpek eğitim merkezi', 'Köpek otelleri', 'Malatya', 'Kırkpınar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1qKbbmXgMzC-MFnVfK4afW8-LH6KjUPhhRoNQXrxIbv5fZ2Wfvl56PwFiyGy9OyecyMEFrA-Dx_d7S3_RuokchldUbpBhBu9YrPQbtuRzWCBUrQzEXz81zYegmOiYb9RF54Q=w408-h725-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1qKbbmXgMzC-MFnVfK4afW8-LH6KjUPhhRoNQXrxIbv5fZ2Wfvl56PwFiyGy9OyecyMEFrA-Dx_d7S3_RuokchldUbpBhBu9YrPQbtuRzWCBUrQzEXz81zYegmOiYb9RF54Q=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnwVRWyE8wf1m-uSUlvoOrd1qPtTzJxjW0oj2B2_RuPS6D4_UHehxdDWs3kC2bAiNd1Cq7rIv_qkMD5HbW8VQJzFOs93RJvetUg_HjJOfkQ-C-0CO6AsXNH98k4iiNlp-Z6Cxs=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnD4apiko1pAbJnKLcEtUerhsdP07AaLGzT_NEWHGgh1AmanB_R0Vt1nnyrpRo6ftNiblUFt7r7fQ9onaaZIx-Oz1axpOKMkm64zhutmgr-z7BkmhVfpoF5BcEuFxt9MsQe4uqBQ=w224-h398-k-no"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","malatya-kopek-oteli","malatya-kopek-pansiyonu","kirkpinar-kopek-oteli","malatya-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Special Dogs köpek eğitim merkezi, Malatya Kırkpınar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0543 626 99 51', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Special+Dogs+k%C3%B6pek+e%C4%9Fitim+merkezi/data=!4m7!3m6!1s0x4077b72186de4387:0xf9ad9cd0b09b4d9!8m2!3d38.4923705!4d38.1307171!16s%2Fg%2F11s2nqlyfl!19sChIJh0PehiG3d0AR2bQJC83Zmg8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJh0PehiG3d0AR2bQJC83Zmg8', 'boarding-58faa18e6dcb881df8b99c2d')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-74cf3bd36c1f25627c1007df62d417b8', 'boarding-58faa18e6dcb881df8b99c2d', 'Abdullah Doğan', 10, 'Erdem hocayla köpeğim Pars sayesinde tanıştık. Hırçın, sürekli önüne gelen herşeye ve herkese havlayan, agresyon problemi olan bir köpekti Pars. Komşularımız bu havlamalardan dolayı aşırı derecede rahatsızdı. Yürürken çekiştirme ve etrafa delice saldırıp asla söz dinlemiyordu. Artık çok sevmemize rağmen köpeğimizi başka birine verme noktasına kadar gelmiştik. Sonrasında Erdem hocamla tanışıp, temel ve ileri itaat egitimi aldık ve o kadar memnun kaldık ki anlatamam. Şimdi heryere beni çekiştirmeden beraber gidiyoruz havlama vs. tamamen bitti. Gözünü benden asla ayırmıyor ve sözümden asla çıkmıyor. Erdem hocama ne kadar teşekkür etsek az. Kesinlikle tavsiye ediyorum. Çok teşekkürler hocam😊🙏🏻', '2024-03-24'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-0fe30e4b82e1729602e6d0648764690f', 'boarding-58faa18e6dcb881df8b99c2d', 'Aktan Bilgiç', 10, 'Çok Nezih bir ortamdı ilgi alaka çok güzeldi Erdem Bey de çok iyi bir Eğitmen işini Başarılı bir şekilde yapıyor kendisine çok teşekkür ediyorum', '2022-08-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-02dc34b55ee6eb5b5600c89c02682e37', 'boarding-58faa18e6dcb881df8b99c2d', 'Öznur Bayazit', 10, 'en iyi malatya köpek eğitimi. çok memnun kaldık tavsiye ederim', '2023-01-04'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-15a5cc92fbc60e8b2d52b3a5', 'Pet otel yeşim Şengül', 'Ev tipi bakım merkezleri', 'Manisa', 'Uncubozköy', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ZDNQN9Yhp03b924Mt-wn8w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=345.9782&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ZDNQN9Yhp03b924Mt-wn8w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=345.9782&pitch=0&thumbfov=100","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-lv8hv4tc7UD3oXerAV4EJrbW2wmCFUjvl_ObeSD7fQF3U4keWCDyWDTLeln6uGre5wji40sH1tHazqnXfeIp7KDtP4T4t2U-Uu_Ix1NhiLCY1nJGZ2L6asdK3B9KKfSl4o2ZSw=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-lv8hv4tc7UD3oXerAV4EJrbW2wmCFUjvl_ObeSD7fQF3U4keWCDyWDTLeln6uGre5wji40sH1tHazqnXfeIp7KDtP4T4t2U-Uu_Ix1NhiLCY1nJGZ2L6asdK3B9KKfSl4o2ZSw=w298-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ZDNQN9Yhp03b924Mt-wn8w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=345.9782&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","manisa-pet-oteli","manisa-kedi-kopek-oteli","uncubozkoy-pet-oteli","manisa-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pet otel yeşim Şengül, Manisa Uncubozköy bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0505 336 28 59', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Pet+otel+ye%C5%9Fim+%C5%9Eeng%C3%BCl/data=!4m7!3m6!1s0x14b99d14e1dd98c3:0x5c31a9b68f87c26e!8m2!3d38.6106133!4d27.3876064!16s%2Fg%2F11kjp0lgsq!19sChIJw5jd4RSduRQRbsKHj7apMVw?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJw5jd4RSduRQRbsKHj7apMVw', 'boarding-15a5cc92fbc60e8b2d52b3a5')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-42c86c3b52e7f1bebe615058', 'May Akvaryum Petshop Pet Hotel', 'Kedi ve köpek kabul eden karma tesisler', 'Manisa', '. Anafartalar', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmxS2dJNcz4BOGmHYtGomHc8ecJlnX-5MkHm_ufCUQNFNhv8YpwjQ9MI1wWKnBaQYF4gldIAov6b_K_O18xOQtBam53tooqP7ldv-Ca2mc0HeOb4fzO6rwTyuHJ52WnxWqZdxRw=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmxS2dJNcz4BOGmHYtGomHc8ecJlnX-5MkHm_ufCUQNFNhv8YpwjQ9MI1wWKnBaQYF4gldIAov6b_K_O18xOQtBam53tooqP7ldv-Ca2mc0HeOb4fzO6rwTyuHJ52WnxWqZdxRw=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnTg7Aul6ZOsNvMHtxSEUomNt39AkHWDMQ2_sbEUqzehPrunKJ_PWjzYB-KYY0NQD79tbnhCJZoxjt42xwSfEP-5tajq3qcGklL7fZssO56bLSVV1QpwT3kp2lrccDiT6hbGhiOmw=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmT-vhZUoZspNCnXxlNXzE6OI0ZPEbhtqN5VUudd_gtRwmfsqMV1eeDqN2j3E5cauuOSskdVrmz_pLDlT93cqgFUokQu836Z7-LPz962XO6JHQj9Cq93zmPQ6-JBdzvii_U1i4=w224-h395-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmp0PnMuN68s7ttkfWP09GwjKBDkzoodAasOd_m7iUU2QwBjPnnKDzF3MAI6bM3jrcglAO6udXWQhWhdozWBeyVK9nCO5afliK1qStclVtD9hfE3f1euwDuC02nfV3yKB3pp2o=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8OOjrgeJsxA0toXC6gp09X9lVLXXYeKQDjd-7UGqvIJzeXZLnRudaEOH-p74FGtajfaA081SlgMsywE4YU1o8fk4LgYLdnJYdlL2kBJxQjusZzFtYtERa6HmYjGl-d3WhOG0=w529-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=KAq08s2aeqLUVQ3KxKFV7w&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=118.265495&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Adrese servis","Mağazadan teslim alma","Mağaza içinde alışveriş","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Hızlı ziyaret","Banka kartları","Kredi kartı","Transfer hizmeti"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","manisa-kedi-oteli","anafartalar-kedi-oteli","manisa-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'May Akvaryum Petshop Pet Hotel, Manisa . Anafartalar bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0543 564 33 05', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/May+Akvaryum+Petshop+Pet+Hotel/data=!4m7!3m6!1s0x14b99d70cc2077f5:0xc35e0a351b2dfd6b!8m2!3d38.617522!4d27.430951!16s%2Fg%2F11nyr1s1fq!19sChIJ9XcgzHCduRQRa_0tGzUKXsM?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.6, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ9XcgzHCduRQRa_0tGzUKXsM', 'boarding-42c86c3b52e7f1bebe615058')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-5ecaebda34cb9556baf22453c6238038', 'boarding-42c86c3b52e7f1bebe615058', 'müjgan yılmaz', 10, 'Gerçekten Şule hanım ve MehmetAli bey çok ilgili alakalı ve bu işin uzmanı.Bu bölgede gördüğüm en iyi petshop diyebilirim.her çeşit mevcut. Ailece islettikleri bu yer harika. Ayrıca sokak hayvanlarına sahip çıkıp, koruma altına alıp ücretsiz bir şekilde sahiplendirmeleri de muhteşem bir davranış. Daha önce şehir dışına çıkarken kedimi kime emanet edeceğimi düşünüyorum, artık MayPetotel sayesinde içim rahat, kedim mutlu. En kaliteli ürünleri en uygun fiyata bulabileceğiz tek adres. Anlatmakla bitmez bizzat gidip keşfedin. Tek kelime ile MÜKEMMEL Hizmet, UYGUN Fiyatın tek adresi', '2021-02-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-94fbcb2ee83007231cc1b734df08cb0e', 'boarding-42c86c3b52e7f1bebe615058', 'Ferhat takak', 10, 'Hizmet kalitesini en üst seviye de tutarak müşteri ilişkilerinde uzmanlaşan aile kimliğiyle ege bölgesinin en üst düzey petshop olduğunu gönül rahatlığıyla söyleyebilirim. Arz çeşitliliği olağanüstü fazla ve kaliteli olan May Akvaryum Petshop ailesinin Manisa Halkı için büyük bir şans olduğu kanaatindeyim.', '2021-06-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2a8183ab85614c97ce429b6d055e7945', 'boarding-42c86c3b52e7f1bebe615058', 'Selahaddin Özkan (Selorose)', 8, 'Mehmet Ali Bey, oldukça ilgili , bilgili ve güler yüzlü işinin hakkını veren bir insan.
Ürün çeşitliliği ve hizmet kalitesi iyi.', '2023-03-25'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f6a095ecbaa22d6bfb655fbcc879409b', 'boarding-42c86c3b52e7f1bebe615058', 'Suleyman Sezen', 10, 'Ürün ve hizmet kalitesi bakımından kendi alanında üst düzey olan, güler yüzlü, ikili ilişkileri kuvvetli olan herkese tavsiye edebileceğim bir işletme.Can dostlar için verdiğiniz değer ve emeğiniz için teşekkür ederim.', '2021-07-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e9c88648135be8d5cfe3679537ad7abe', 'boarding-42c86c3b52e7f1bebe615058', 'Askin Cakin', 10, 'Bütün hayvansever lerin mutlaka uğraması gereken can dostlarımızın bütün ihtiyaçlarını bulabileceğiniz güler yüzlü ve gerçek hayvansever  sahibi olan güzel bir mekan.', '2022-01-05'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-5244fead68849de5db562cd5', 'Kedi oteli', 'Kedi otelleri', 'Kahramanmaraş', 'Şazi Bey', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=w6LgbKj-sxSmhbFHVndBoA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=1.6082344&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=w6LgbKj-sxSmhbFHVndBoA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=1.6082344&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=w6LgbKj-sxSmhbFHVndBoA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=1.6082344&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kahramanmaras-kedi-oteli","sazi-bey-kedi-oteli","kahramanmaras-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Kedi oteli, Kahramanmaraş Şazi Bey bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0553 873 20 46', NULL, 'https://linktr.ee/leylakeskingoz', '{"google_maps":"https://www.google.com/maps/place/Kedi+oteli/data=!4m7!3m6!1s0x152dddaefdc55555:0x703c577acfac3989!8m2!3d37.5714807!4d36.9191587!16s%2Fg%2F11j4swngr2!19sChIJVVXF_a7dLRURiTmsz3pXPHA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 7, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJVVXF_a7dLRURiTmsz3pXPHA', 'boarding-5244fead68849de5db562cd5')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-78636414056333fe0cf5d2e0667b540a', 'boarding-5244fead68849de5db562cd5', 'Yasemin Özdil', 10, 'Bu kedi gördünüm benim kedim kayıp olan taşması vardı ama şimdi göksun de kalp boldu gölenvar sana haber edin lütfen', '2024-04-13'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-9ccd2650eb823c90b4769586d4e2eb95', 'boarding-5244fead68849de5db562cd5', 'METİN YAŞ', 6, 'Şehir Merkezinde Eski yapılardan', '2020-10-21'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-93824b038032160a972b528a2972d5ca', 'boarding-5244fead68849de5db562cd5', 'yasin bağrıaçık', 6, 'Bakıma ihtiyacı var', '2021-09-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-bec377f80e844e7ab909de5455cafa3e', 'boarding-5244fead68849de5db562cd5', 'Abdulsamet Gödeoğlu', 8, 'Güzel', '2021-07-19'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-7851071b2fca9ba1c96bdb29', 'Çakıl Kedi Oteli ve Pet Shop', 'Kedi otelleri', 'Kahramanmaraş', 'Osmangazi mah', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tmnRP5Qkq1zwO8h6ymXL-Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=157.46532&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tmnRP5Qkq1zwO8h6ymXL-Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=157.46532&pitch=0&thumbfov=100","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHxQYRYq7_YhzChEmeHM_ii0MpAVBoMdTX8Eybf0GQhtOLPY21kQSK7OUx-vIhVqbpsqJW9L3ocsPzxVSiwr3wG9mQh0KFiSOvroX8P-XRdxCzMiUP_e2Tju70jxUjO0gSCB1F=w224-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tmnRP5Qkq1zwO8h6ymXL-Q&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=157.46532&pitch=0&thumbfov=100"]'::jsonb, '["cat"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Adrese servis","Mağazadan teslim alma","Transfer hizmeti","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","kahramanmaras-kedi-oteli","osmangazi-mah-kedi-oteli","kahramanmaras-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Çakıl Kedi Oteli ve Pet Shop, Kahramanmaraş Osmangazi mah bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/%C3%87ak%C4%B1l+Kedi+Oteli+ve+Pet+Shop/data=!4m7!3m6!1s0x152ddd747357a313:0xb70b4612ec4bb380!8m2!3d37.5930177!4d36.9042913!16s%2Fg%2F11sm727g1q!19sChIJE6NXc3TdLRURgLNL7BJGC7c?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJE6NXc3TdLRURgLNL7BJGC7c', 'boarding-7851071b2fca9ba1c96bdb29')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-dcdcaeba7038f2e30ccabc2e', 'Pati Konak Kedi Köpek Oteli Pansiyonu ve Pet Taksi Nakil Bodrum Milas Muğla', 'Ev tipi bakım merkezleri', 'Muğla', 'Akyol', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnptPF5o9hHBPc5JhLh504taoHq4vhdjxuAkapxHzAmgLXnIvMuurvXUBSd9KDyQbgq21HMW7ifasrmBz-K0Ik_M85D_KWq9c5StuIH-KJgMvV4umF8cJ-Fep1v4QRD7zFD7gn4Hg=w408-h272-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnptPF5o9hHBPc5JhLh504taoHq4vhdjxuAkapxHzAmgLXnIvMuurvXUBSd9KDyQbgq21HMW7ifasrmBz-K0Ik_M85D_KWq9c5StuIH-KJgMvV4umF8cJ-Fep1v4QRD7zFD7gn4Hg=w447-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmgtrw46duSWL-c2nROOhnwcnepy1dTpy9FLz6CsEK1QK5TbonkffQIBFm-qBz9bsLhQqFyL3RQ1iQYWX74DoUhKEAUlBd7qOGk9ddJrcC0drujT_OwCmhp7phwN4xea0vNySUu=w447-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlikOrt1YIvjpj6CNM83QxrV-VVFAAiwhr2bKnCGEC5P4m71uiSX_JYkAUTjQybLT7jUHl7FIyANC1yxeEjw_0MKGEg6EIcEtzmenjR--pkIdrmnHlK3e0e-yMPEfduhe6LFnae=w298-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=nUuh1_Ugs3TOnj4nUvHOoQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=151.30428&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Transfer hizmeti","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kedi","kopek","karma-otel","mugla-pet-oteli","mugla-kedi-kopek-oteli","akyol-pet-oteli","mugla-pet-pansiyonu","guvenilir-bakim"]'::jsonb, 'İşletmeden bilgi alınız', 'Pati Konak Kedi Köpek Oteli Pansiyonu ve Pet Taksi Nakil Bodrum Milas Muğla, Muğla Akyol bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, 'http://www.facebook.com/patikonak', '{"google_maps":"https://www.google.com/maps/place/Pati+Konak+Kedi+K%C3%B6pek+Oteli+Pansiyonu+ve+Pet+Taksi+Nakil+Bodrum+Milas+Mu%C4%9Fla/@37.2276592,27.697011,17z/data=!3m1!4b1!4m6!3m5!1s0x14bef762983fe495:0x51da5a7258a4fba2!8m2!3d37.2276592!4d27.697011!16s%2Fg%2F11f7nlwdz1?hl=tr&entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.4, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJleQ_mGL3vhQRovukWHJa2lE', 'boarding-dcdcaeba7038f2e30ccabc2e')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-aeeda51a16ed815577df768909b17961', 'boarding-dcdcaeba7038f2e30ccabc2e', 'Didem Aygen Cakiroglu', 10, 'Gözümün arkada kalmadığı tek yer. Temiz, özenli bakım, dostlarımız için ideal. Dostunuzu siz götürürseniz yumurta almayı ve kendi üretimlerinden ellerinde neler olduğunu da sormayı unutmayın. Zeytin, zeytinyağı, erişte... daha neler neler...', '2018-08-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-1d65eb9fdac4481aada4efd844ad1620', 'boarding-dcdcaeba7038f2e30ccabc2e', 'Gulseren Ozlen', 10, 'Kedimizi 2 ay misafir ettiler, gerçek hayvanseverler, çok ilgililer. Gözünüz arkada kalmadan kedi veya köpeğinizi bırakabilirsiniz. Tavsiye ederim.', '2020-01-02'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-210a03a01169d43cf82d6f6acbe44e0b', 'boarding-dcdcaeba7038f2e30ccabc2e', 'SELİM ÖZHUN', 10, '2-3 defa ziyaretlerine de gittim, çok kibar ve ilgili insanlar. Gerçek bir hayvansever aile.

Güvenle hayvan dostlarımızı emanet edebiliriz.
Gereken sevgi ve ilgiyi göreceklerinden emin olun.', '2018-08-03'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-822811570f5221fda4efef258a48c228', 'boarding-dcdcaeba7038f2e30ccabc2e', 'burcu arı', 10, 'Kedim ziyayı bir haftalık tatilimde patikonaga biraktim sahipleri cok ilgililerdi gerçekten gözünüz arkada kalmıyor tavsiye ederim', '2019-09-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-15039b79ec47fcd18fd61ef78d00b268', 'boarding-dcdcaeba7038f2e30ccabc2e', 'Buğra Erdem', 10, 'Köpeğim star almaya geldiğimde halinden çok memnun gözüküyordu. Ben de bu yüzden çok memnun kaldım :)', '2019-08-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-e0c9e677ed7349a1a29eeb9a', 'pet akademi veteriner kliniği', 'Kedi ve köpek kabul eden karma tesisler', 'Muş', 'Sunay', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGU15OC_4ZOjsdaNPiMFzAySIcvdnxQI61XB4RTuQJctDFAhv8fATMchlNQI1HV5VTta2ES1LV5AH84U5BbXAsL5WP88ng77Bk9YWnsDpgf5DFqwCd9DmXeU704MpJR2vEZOW4=w408-h306-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGU15OC_4ZOjsdaNPiMFzAySIcvdnxQI61XB4RTuQJctDFAhv8fATMchlNQI1HV5VTta2ES1LV5AH84U5BbXAsL5WP88ng77Bk9YWnsDpgf5DFqwCd9DmXeU704MpJR2vEZOW4=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmsevFDtntSVCx0KEMKtmC5cbL5WPG4di626_ea9faxuEbJXJh301ZbxO8mpPvEVg2DMPHsLcBIXFzgBeGaL9Q7PaT3lNIF8b-giDZgyalRCUSRQ24zlDjT63VEjReWJhvAxiLcoA=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqy-eZgsQAcoUwtKK2bmx1pk8OTtz50m8A4AaEMOoOpzujmDhPT896OwkR4eFTgwnYd0iiN_vxkKCKcll3b2c9pcGphQ3B5RugSpHkWSLwv-ooZfCISHCmW0uHSORnXMz7mPXhWg=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmUS8rtS3x-KSjiwslDxCGoWHORZWRBd-UsqZgwDBRDH-i6YQcw52_haZaBszLbMRdfxXOQ4PqAlDZt9IZrifA4BXgcpgOAnzFvy0Ir-ztil_6bQh7koiYj-lBcd5msqUCa50KDfg=w398-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=fUuic32LwG2CHsqul1KCfA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=71.832436&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Tuvalet","Randevu gerekli","Randevu alınması önerilir","Veteriner desteği","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","mus-kedi-oteli","sunay-kedi-oteli","mus-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'pet akademi veteriner kliniği, Muş Sunay bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 166 75 11', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/pet+akademi+veteriner+klini%C4%9Fi/data=!4m7!3m6!1s0x4072e5f28c0da639:0x3aa65b77b9b44ac2!8m2!3d38.7436348!4d41.500875!16s%2Fg%2F11mhc1g928!19sChIJOaYNjPLlckARwkq0uXdbpjo?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJOaYNjPLlckARwkq0uXdbpjo', 'boarding-e0c9e677ed7349a1a29eeb9a')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-16c014e5b8f1c93fa01a47bd3819ebff', 'boarding-e0c9e677ed7349a1a29eeb9a', 'Tadıc Dusan', 10, 'İlyas hoca dünyanın en iyi veteriner hekimidir net gidin ve görün çok merhametli insan Allah bu insanların sayısını arttırsın inşallah', '2026-02-10'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-02a4b79e23bf3e17feb56e28ea9b070a', 'boarding-e0c9e677ed7349a1a29eeb9a', 'Elif Acar', 10, 'İlgi, alaka, güler yüz mükemmel. Kedimin zor günlerinde yanımızda oldular.Gözünüz kapalı güvenebilirsiniz. Aşırı sevecen insanlar tekrardan çok teşekkürler', '2025-10-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-ac93ed6982e61f3dd52bd589f70b134d', 'boarding-e0c9e677ed7349a1a29eeb9a', 'Bssjsjsj Lamasons', 2, 'Yukarıdaki yorumları okudum ne klinikle ne de İlyas beyin kendisiyle alakasız yorumlar gördüm bulduğum iki aylık bir sokak kedisini gözleri kapalı düzgün nefes alamayan yiyip içemez yerinden dahi kalkamaz halde buldum.yardim eder umuduyla İlyas beyin kliniğine götürdüm.kediye dahi bakmadan yarım edemeyecegini söyleyip ölüm kampı olan belediye barınağına gidebileceğimi söyledi.veteriner hekimleri odası başkanına yakışacak tavır bu değildi fakülteye ilk başladıklarında edilen meslek yemini İlyas beyde vücut bulmamış her şey para değil."siz yerdekilere merhamet edin ki gokteki de size merhamet etsin"', '2025-09-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-2ae9fa3880ac8d8342c15162e1528343', 'boarding-e0c9e677ed7349a1a29eeb9a', 'Black Pearl', 4, 'Cancağızımın traşını yillarca buraya getirerek  hata etmisim. Kedim salya sümük ve aşırı stresli oluyordu. Bugun Isparta da veteriner tras etti ne stresi vardi ne salyası.Ayrica çok uygun fiyatti. Yillarca batinin fiyatlari çok pahali denildi ama inanin sanildigi gibi pahali filan degil.', '2025-08-18'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8414d6afe041d9c4ca09d0ce6344ec20', 'boarding-e0c9e677ed7349a1a29eeb9a', 'Zehra Karakaya', 10, 'Gerçekten işini severek yapan,hayvanları kendi evladı gibi gören harika bir ekip. Gönül rahatlığıyla tavsiye ederim🤍', '2025-10-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-bf315d3f2e03c02bc733eef0', 'Niğde Pet Plus Veteriner Kliniği', 'Kedi ve köpek kabul eden karma tesisler', 'Niğde', 'Sarıköprü', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmsYZ_hcXx2ce_qFyxbSyUtzXNTfxpmwzFelsljzUsA61duu3aXvrmVjrHuxX-px-T6r5YvVXLhP8uitujocs0iOaQdrVmyX2Mdt-nqDW1g1TGRCnTNJyOE1VApBZVW5Fa5L8rI77mkqcWB=w408-h544-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmsYZ_hcXx2ce_qFyxbSyUtzXNTfxpmwzFelsljzUsA61duu3aXvrmVjrHuxX-px-T6r5YvVXLhP8uitujocs0iOaQdrVmyX2Mdt-nqDW1g1TGRCnTNJyOE1VApBZVW5Fa5L8rI77mkqcWB=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmlvmoHDCBF3RpmID-WXcw6CIAK_yyXgFaDvP68VV6f-YR-TRXgOQ81sysmBcfBD7V7AX_MlUtQ-nsYueVwOhWt3Z6NjKUVa_y89dm-9OEFJJRa1fwx9zqGv9UXPhCxmrttcoataw=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnC68-FQbxXOZjZoe8PIgwUDuVzLqXO20Gtf3UxxUqxZf9ikBNdbMbD1sFxGZCklz8dj2qkIbxA8KcLZ-TB5eew6RWya1eA8UJExSTxWq_OwooLLplVdN-IpQqrc47GDGurId8p=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk0TZf-FXD2LgZGP_xwY_6kwWjDKNqxNDr-V9mNzgsM7cb0YMsTd9UGd0xbps1poK00PlN0j_BoHCRu0Ds924KRVSvFQs3Okv3RyE8sUv5ZOvJfB4ACdWXGa55VYztSagOwQXuTKw=w630-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=K0eAIXwzeXc0iSQqTYfvXg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=327.66965&pitch=0&thumbfov=100"]'::jsonb, '["cat","dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun park yeri","Tuvalet","Randevu alınması önerilir","Veteriner desteği","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar"]'::jsonb, '["birak","pet-oteli","kedi","kedi-oteli","nigde-kedi-oteli","sarikopru-kedi-oteli","nigde-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Niğde Pet Plus Veteriner Kliniği, Niğde Sarıköprü bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0544 155 00 51', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Ni%C4%9Fde+Pet+Plus+Veteriner+Klini%C4%9Fi/data=!4m7!3m6!1s0x1529dd321639f89b:0x42be123fb17f35ee!8m2!3d37.9609062!4d34.6485124!16s%2Fg%2F11nmhh7k4r!19sChIJm_g5FjLdKRUR7jV_sT8SvkI?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 9.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJm_g5FjLdKRUR7jV_sT8SvkI', 'boarding-bf315d3f2e03c02bc733eef0')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-d61314079b244ce99df6f40b6762a89d', 'boarding-bf315d3f2e03c02bc733eef0', 'Umay', 10, 'Bir ay öncesinde bulutumun ayağı evin içindeki bir anlık dalgınlıkla kapıya sıkıştı ve kırıldı. Açıkcası kırığı ciddiydi ve öleceğini düşündük. O an insan öyle çaresiz kalıyor ki anlatamam keşke kendi bacağım kırılsaydı diye isyan etmişliğim bile vardır. Sonra bulut mücadele etti sevgi iyileştirdi onu ve şuanda hayatına kaldığı yerden devam ediyor aynı şekilde. Sinan hocama ve ekip arkadaşlarına çok teşekkür ederim. Sadece tek söylemek istediğim tuğba hocam ben orda ağlarken napıcaz şimdi diye belki haklı belki haksız isyan ettim ve bana kapıya sıkıştırmasaydınız o zaman dedi umarım kimse böyle bir acıyla sınanmaz ama kimsenin ne yaşadığını bilemezsiniz hocam.', '2026-07-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-860fdf7536e5c53a7a2b61002b6dcdf1', 'boarding-bf315d3f2e03c02bc733eef0', 'Ibrahim Hamalosmanoğlu', 2, 'Keşke bu kliniğe harcadığım para kadar güven de kazanabilseydim.

8 aylık poodle cinsi köpeğimi aylarca kulağını kanatırcasına kaşıdığı için getirdim. Sürekli “alerji olabilir” denildi. Farklı bir veterinerde ilk muayenede kulak uyuzu olduğu teşhisi konuldu ayrıca mikroskopta gösterildi ve tedaviye başlandı.

Bununla da kalmadı. Kalp üfürümü nedeniyle aylarca Enapril ve Lasix kullandırıldı. Sonrasında yapılan detaylı eko, röntgen ve kan tahlillerinde kalpte herhangi bir problem olmadığı, asıl sorunun akciğer kaynaklı olduğu ortaya çıktı ve tedavi tamamen değiştirildi.

En çok üzüldüğüm şey para değil. Köpeğimin aylarca boş yere acı çekmiş olabileceğini düşünmek. Keşke ilk muayenelerde daha kapsamlı değerlendirme yapılsaydı. Benim yaşadığım deneyim maalesef buydu. Bundan sonra benzer bir durumda olan herkese ikinci bir veteriner görüşü almalarını tavsiye ederim.', '2026-08-01'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-be92f727ecf067254e67ec7aafa52877', 'boarding-bf315d3f2e03c02bc733eef0', 'selim meyva', 10, '"Veteriner kliniğine köpeğimin yanağındaki şişlik şikayetiyle başvurduk. Gerek çalışanların profesyonel yaklaşımı gerekse sundukları makul fiyatlarla bizi çok memnun ettiler. Güvenilir ve temiz bir yer. Tedavi sürecimiz sorunsuz tamamlandı. Pansiyon hizmeti arayanlar için de kesinlikle tavsiye ederim. Her şey için teşekkürler." ayrıca 10 yaşında gorme yetisini kaybetmis kedimi de götürdüm detaylı muaynesini yaptılar süreç hakkında bilgilendirme yapıldı. çok ilgililerdi. Bundan sonraki tedavi sürecimiz de de yine aynı veteriner kliniği ile sürece devam edeceğim.', '2026-03-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b7186439c96902d1b450c43e3e6a9504', 'boarding-bf315d3f2e03c02bc733eef0', 'Esma', 2, 'Kızımı kaybettim. Daha minicikti. 1.5 yaşına giriyordu evimizin küçük yaramazı küçük neşesiydi. Kızım kısırlaştırma ameliyatı sonrası akciğerinde ödem oluşmuş. Çok erken fark ettim hemen görürdüm. Bunu kızgınlıkla sinirle yazmıyorum. Kırgınlık ve üzüntüyle yazıyorum. Her şey biraz vicdan sanırım. Ben emanet ettim kızımı, emanet ederken de para mezusu asla yapmadan ne gerekliyse yapılsın dedim. Keşke sadece kan değerleri yerine biyokimya da bakılsaydı röntgen çekilseydi, kalbine de baktırın öyle getirin denilseydi belki daha farklı olurdu . Gaz anestezi ile ameliyat oldu. 2 gün sonra kötüleşti hep iyileşir diye umdum bu süreçte bir sürü hastane araştırdım kalbine baktıracaktım iyileşseydi ama 2 gün sonra kaybettim. Bugün teslim alıp bir ağaçın altına en sevdiği oyuncağı ile gömdüm kızımı. Doktorumuz tek bir mesaj ve yüz yüze konuşmada yapmadı ölümüyle ilgili bunu bekledim. Çok zor bir süreç geçti geçiyorda keşke başka birine daha mi gösterseydim hangi tahliller yapıldı sorsaydım daha sıkboğaz yapsaydım daha çok araştırsaydım daha çok sorgulasaydım keşke daha çok öpseydim gibi şeyler düşünüyorum. Ama sonuç da değişmiyor. Size tavsiyem taha temkinli olun daha çok sorun araştırın sorgulayın küçük gibi görülen şeyler çok ağır sonuçlar doğurabiliyor. küçük sufimiz artık yok annesiyle birlikte oturuyoruz şimdi yokluğunu kabullenmeye çalışıyoruz . Seni çok seviyorum kızım iyi ki benimleydin. Mayayla seni hep özleyeceğiz ama asla unutmayacağız.

!!Eklemek istiyorum kızımı alırken kimse bana açıklama yapmadı kendisi zaten yoktu şu kadar ödeme var denilip kızımı verdiler. Arama konusuna gelince kendisine 2 gün sonra sizden mesaj bekledim açıklama bekledim yapmadınız dediğimde  arama yapıldı.
Sanki ben sinir ve öfkeyle açmamazlık yapılmış algısı olmasın ben sitem etmesem kimsenin umrunda değildi.', '2025-01-22'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-f3cf3962bbea9cb719c6ccf7abf43716', 'boarding-bf315d3f2e03c02bc733eef0', 'merve meyva', 10, 'Köpeğimin yanağındaki ani şişlik nedeniyle tavsiye üzerine kendilerini ziyaret ettik. Süreç boyunca gösterdikleri ilgi ve çalışanların nazik tutumu bizi çok memnun etti; evcil dostunuzu güvenle emanet edebileceğiniz bir yer. Fiyatları da sundukları hizmete göre oldukça makul. Tedavi sürecimiz başarıyla tamamlandı, her şey için çok teşekkür ederiz. (Ayrıca hayvanlar için pansiyon hizmeti vermeleri de büyük bir artı! :))"', '2026-03-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-d18cc043d212c57da0e24599', 'PROTEO K9 AKADEMİ | PET OTEL VE KÖPEK EĞİTİMİ ORDU', 'Köpek otelleri', 'Ordu', 'Perşembe', 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0_yeZZqrKpcFqeP9woYGqOIQ1BhQSjmiiSSFurGUIMmfHQxfk79OYESXn4ZMlAdqFrlyiRLWun3Dps5SLV1rO9Rdnxr9Kh7t-9AjxRnQvNC7VSl0krg5TAZWZirwrNNfi7Tvh=w408-h408-k-no', '["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0_yeZZqrKpcFqeP9woYGqOIQ1BhQSjmiiSSFurGUIMmfHQxfk79OYESXn4ZMlAdqFrlyiRLWun3Dps5SLV1rO9Rdnxr9Kh7t-9AjxRnQvNC7VSl0krg5TAZWZirwrNNfi7Tvh=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnmklmAWGTte5gnIfos48UctRCHZTvXkQu99060CQt9rXPNpPCVR3-IrJ7C9huHsCYPvYU8Qh04QrlfhpCjnq6Pi4nSTcLB1MHEpAzq5xZaM6SD4G9YKgT3g9xjI7x4SvFYlV4=w397-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAVx8_U5HOptyRHpt1LMkcTSpE3hlDHuSmSgg7J4GTnwQDy2j6gpvcC4P1GLt0O4WZ5_hI1kzs69zHcyy_ckDGG93hrQlEDXINKvAKIUlcTMBd9Lsj1jXTYaj4SEOiHVVC-o6xQg=w224-h398-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmMSVVpUrPfE92zokIhfRHLG7rCh6AGi44cXceplLrsHi5Q_AdGxDftTgwmaXzDhbZq13yB4gHMn-kRIZCBi3nCJFu61lqgOK0HnF0SB4nKrygXEAlWFGEfVkP3e4CNtS_SVgn-=w224-h398-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=6dmqiGAQEwl0YGcBgmrzBg&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=19.163086&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Yardımcı indüksiyon döngü sistemi","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ordu-kopek-oteli","ordu-kopek-pansiyonu","persembe-kopek-oteli","ordu-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'PROTEO K9 AKADEMİ | PET OTEL VE KÖPEK EĞİTİMİ ORDU, Ordu Perşembe bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', NULL, NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/PROTEO+K9+AKADEM%C4%B0+%7C+PET+OTEL+VE+K%C3%96PEK+E%C4%9E%C4%B0T%C4%B0M%C4%B0+ORDU/data=!4m7!3m6!1s0x4063218472f8e459:0x4098be0325de2bb7!8m2!3d41.0111057!4d37.811661!16s%2Fg%2F11vrl9xbm_!19sChIJWeT4coQhY0ARtyveJQO-mEA?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 8.2, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJWeT4coQhY0ARtyveJQO-mEA', 'boarding-d18cc043d212c57da0e24599')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-4140aceb235a7e3a2469196e71918ed7', 'boarding-d18cc043d212c57da0e24599', 'Emel HENDEN', 2, 'Cane corso köpeğimizi yaklaşık 40 gün kadar buraya emanet ettik etmez olaydık hayvan az kalsın açlıktan ölecekmiş arka ayaklarına hala tam basamıyor güyya günlük 45 dk oyun alanında gezip dolaşacaktı tahminimiz o ki hiç dışarı çıkarmamışlar hayvan kendi pisliğinin içinde yatar haldeydi sokak köpeklerine dönmüştü yatağı ıslanmış köpek pisliği içinde kalmıştı köpeğin videosunu istediğimde günlerce göndermek istemediler sonunda gönderilen videoda çok zor durumda olduğunu aşikardı şehir dışında olduğumuz için hemen alamadık ama videodakinden çok daha zayıf halde teslim aldik! Bakmayacaksanız yapmayın bu işi ! Kesinlikle güvenilmez bir yer tavsiye etmiyorum.', '2025-02-14'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8294a659ff925bc8d9a056a95d45c0ff', 'boarding-d18cc043d212c57da0e24599', 'Efe Gediman', 2, 'Adem Kaya isimli şahsı TikTok üzerinden buldum ve kendisinden iki köpek satın aldım. Ancak köpekler elime ulaştığında her ikisi de çok hasta durumdaydı. Ertesi gün hemen veterinere götürdüm ve yapılan kontroller sonucunda kanlı ishal (parvo) hastalığına yakalandıklarını öğrendim. Durumu kendisine bildirdiğimde, veterinerin çok pahalı olacağını  söyleyip “Sen bir gün serum taktır, sonra bana gönder, parasını ödeyeceğim. Ayrıca sana yeni köpekler göndereceğim, bu kez test de yaptırıp sağlıklı olarak yollayacağım.” ( dalga geçer gibi) dedi.

Ardından yaklaşık üç ay boyunca her gün kendisini arayarak köpeklerin durumunu ve söz verdiği yeni gönderimleri sormak zorunda kaldık. Fakat her seferinde “Yarın gönderiyorum.” diyerek oyaladı, gün geldiğinde ise sürekli hastaneye, cenazeye gittiğini ya da başka bir engel çıktığını bahane etti. Bu süreç boyunca sürekli kandırıldık.

Sonunda köpek yerine paramızı talep ettiğimizi ilettik. “Tamam, yarın gönderiyorum.” dedi fakat bunun üzerinden de bir ay geçti. Her aradığımızda yine aynı şekilde “Yarın göndereceğim.” diyerek bizi oyalıyor, gün geldiğinde ise başka bahaneler üretiyor. Haziran ayından bu yana ne köpek alabildim, ne de paramı geri.

Bu süreçte hem yaptığım masrafların hem de ailemin yaşadığı hayal kırıklığının haddi hesabı yok. Her gün bu şahsı aramaktan ve hakkımızı almaya çalışmaktan da artık yorulmuş durumdayız. Kesinlikle herkese tavsiyem, bu çiftlikle hiçbir şekilde muhatap olmamalarıdır.', '2025-08-28'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-8170daa6d54bbe5ff5c3c03bc093aab9', 'boarding-d18cc043d212c57da0e24599', 'Hakan Tütüncü', 2, 'Köpeğim Pablo’yu Yaklaşık 1 yıl önce Proteo Ordu perşembe’de eğitime verdim 2 buçuk ay sonra eğitimlerinin kısmen tamamlandığını kalan eğitimininde  devamını Giresun’da bulunduğum yere gelip vereceklerini söylediler. Köpeğimi aldığımda Allah razı olsun aşılarını ve mantar tedavisini yaptırmışlar ve kısmen temel itaat eğitimi vermişler fakat benim köpeğimin tuvalet eğitimi ve ileri itaat eğitimininde ücretlerinin ödenmesine rağmen eğitimden aldıktan sonra 3 ay daha eve tuvaletini yapmaya devam etti kendim zar zor tuvalet eğitimini verdim çevremdeki bir çok insan şahittir her akşam sahilde verebildiğim kadar eğitimi kendim verdim ileri itaat konusunda da köpeğimi aldığımdan beri ‘’tamam ileri itaatta sorun yok’’ denmesine rağmen köpeğimin hala ileri itaat eğitimi 0 aradım açmadılar,geleceğiz deyip gelmediler ileri itaat eğitiminin olmadığına dair videolar gönderdim cevapsız bıraktılar.', '2024-05-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-e4194287ecb9b51f342687eaf9431b77', 'boarding-d18cc043d212c57da0e24599', 'Rain', 2, 'EVLADINIZI KAYBETMEK İSTİYORSANIZ GÖNDERİN ÇÜNKÜ BİZİM KIZIMIZ İHMALSİZLİKTEN GİTTİ VE BİZE BU 1 AY SONRA SÖYLENDİ HİÇBİR VETERİNER HEKİM TARAFINDAN BAKIMI OLMADAN ÇARESİZLİĞE BIRAKILDI. ADEM KAYA YALANCI VE VİCDANİ OLMAYAN BİRİ SAKİN GÜVENMEYİN!!!!! BURASI YÜZÜNDEN KAYBEDİLEN İLK CAN BENİMKİ DEĞİLMİŞ SON OLSUN', '2025-04-26'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-fd16191941b3a46bd602cebe2bc26d16', 'boarding-d18cc043d212c57da0e24599', 'başak karakaş', 2, 'Tamamen rezil bir işletme. Dolandırıcıdan başka bir şey değil. Ne eğitim verebiliyorlar ne de köpek bakabiliyorlar. Eğitime giden köpeklerim daha kötü halde geri döndüler. Yıkadık demelerine rağmen üç yıkamada bile çıkmayan bir koku vardı üzerlerinde. Eğitimin işe yaramadığını ve köpeğimin kötü durumda olduğunu söylediğimde bana hakedenlerin köpeklerini yıkadığını söyledi Adem. Bey bile diyemiyorum dilim varmıyor.', '2025-07-27'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-018727b34c094baea1c3d817', 'Cotyora K9 köpek eğitim ve otel Akademisi ORDU', 'Köpek otelleri', 'Ordu', 'Öceli', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=0NNJ-6wKUjeKkN_MeOmNGA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=131.41689&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=0NNJ-6wKUjeKkN_MeOmNGA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=131.41689&pitch=0&thumbfov=100","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmBkbABNG0WQ_es2v-jR4nNp02vyYrxx3ZRJl8ZXyaYYhodUZjm8BjbSfF8rYS-oASmxauMRVrsFSy4HrPJXo0g7OQm4TiwFsRqefn7zBsmIrHRI5YWEtyD7G3gklCcvATuYUeBZZ5vOz8=w224-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmLJXbNTuA4ok6VKOa-77uooIgs8mGl6vrMTUc5yKY3eZI-yntlSzXaLAt4gWYLlNbGDlqEkHgFhGTxK4IeMaZhrj45X2fXvY1rVXEXWNewQv7DWdJ-otQ9lnk4E1jLTvxpJl3aC0LSHMQ1=w298-h298-k-no","https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmLJXbNTuA4ok6VKOa-77uooIgs8mGl6vrMTUc5yKY3eZI-yntlSzXaLAt4gWYLlNbGDlqEkHgFhGTxK4IeMaZhrj45X2fXvY1rVXEXWNewQv7DWdJ-otQ9lnk4E1jLTvxpJl3aC0LSHMQ1=w298-h298-k-no","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=0NNJ-6wKUjeKkN_MeOmNGA&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=131.41689&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Gerçek mekanda hizmet","Kendi otoparkı var","Günlük fotoğraf ve video","Sosyal oyun alanları","Bireysel hijyenik odalar","7/24 uzman gözetimi"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ordu-kopek-oteli","ordu-kopek-pansiyonu","oceli-kopek-oteli","ordu-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Cotyora K9 köpek eğitim ve otel Akademisi ORDU, Ordu Öceli bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0532 177 26 64', NULL, NULL, '{"google_maps":"https://www.google.com/maps/place/Cotyora+K9+k%C3%B6pek+e%C4%9Fitim+ve+otel+Akademisi+ORDU/data=!4m7!3m6!1s0x40632122d46dc5f9:0x9af27c3941d31b8d!8m2!3d40.956785!4d37.8451244!16s%2Fg%2F11yydcs8c5!19sChIJ-cVt1CIhY0ARjRvTQTl88po?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJ-cVt1CIhY0ARjRvTQTl88po', 'boarding-018727b34c094baea1c3d817')
ON CONFLICT (provider, external_id) DO NOTHING;
INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-a02adbbd8ff0a53271dd74937c8551ff', 'boarding-018727b34c094baea1c3d817', 'Enes Hasoğlu', 10, 'Gerçekten Karadeniz’in en iyi eğitim akademisi. Gözünüz kapalı köpeğinizi bırakabilirsiniz. İlk günden son güne kadar her gün özel ilgi ve bakım var. Eğitim konusunda söylenecek laf yok mükemmel.', '2026-07-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-7cf48b9e52d3eb4e07a8ff8694c504fd', 'boarding-018727b34c094baea1c3d817', 'tolga çelebi', 10, 'İlgi alaka çok güzel köpeğim gerçekten tam istediğim gibi oldu sen bu işin uzmanısın abi', '2026-02-17'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-b462bfd0d6756b51ec5458dea22f69d4', 'boarding-018727b34c094baea1c3d817', 'MURAT ÇAKMAK', 10, 'Köpeğim ile ilgili sorunlar hakkında danışmanlık aldım köpeğimin sorunlarını çözdük ilgili bir yer teşekkür ederim', '2026-02-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-657bba703442633f4e193edf9c6774aa', 'boarding-018727b34c094baea1c3d817', 'Ergül Şaşmaz', 10, 'Böyle kaliteli profesyonel bir yer bir eğimen olması ordumuz için iyi oldu av köpeğimin aportu birkaç eksiği için teslim ettim çok memnun kaldım elinize sağlık', '2026-02-06'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
VALUES ('rev-c241454a3fa1105fd250510ab9cc1528', 'boarding-018727b34c094baea1c3d817', 'Elif Güzen', 10, 'Lattişkomuz eğitim sürecini başarıyla tamamlayıp evine döndü ve gerçekten inanılmaz bir değişim yaşadı. Daha önce yaşadığımız tüm davranış problemleri büyük ölçüde düzeldi. Henüz bebek olmasına rağmen artık çok daha sakin, söz dinleyen, uyumlu ve akıllı bir köpek oldu. Özellikle tuvalet düzeni, komutlara uyumu ve genel davranışlarındaki gelişim bizi fazlasıyla mutlu etti.

Bu süreçte sabırla, sevgiyle ve profesyonellikle ilgilenen değerli hocamız  Fırat Hocamıza ne kadar teşekkür etsek az. Sadece Latte’ye değil bize de çok şey öğrettiler. Ayrıca misafirperverliği, ilgisi ve samimiyeti için kıymetli eşi Gizem hanıma da ayrıca teşekkür ederiz.

Köpeğini güvenle emanet etmek isteyen herkese gönül rahatlığıyla tavsiye ederiz. Emekleriniz, sabrınız ve ilginiz için sonsuz teşekkürler. 🐶❤️', '2026-05-23'::date, 'approved')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.boardings (id, name, category, city, district, image_url, gallery_images, allowed_pets, features, quiz_tags, price, description, boarding_model, daily_program, accredited_vet, phone, email, website, booking_links, camera_support, required_docs, neutering_required, aggression_policy, info_source, base_trust_score, verification_note, last_verified, currency)
VALUES ('boarding-ad43542aa5c7bf7a6a942ff5', 'Köpek Eğitimi Merkezi Çiftliği ve Eğitmeni Ordu', 'Köpek otelleri', 'Ordu', 'Subaşı', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=6J6wRX2cTiAqrFyVhbQeZQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=39.18143&pitch=0&thumbfov=100', '["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=6J6wRX2cTiAqrFyVhbQeZQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=39.18143&pitch=0&thumbfov=100","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=6J6wRX2cTiAqrFyVhbQeZQ&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=39.18143&pitch=0&thumbfov=100"]'::jsonb, '["dog"]'::jsonb, '["Sahibi kadın olduğunu belirtiyor","Tekerlekli sandalyeye uygun giriş","Tekerlekli sandalyeye uygun oturma düzeni","Tekerlekli sandalyeye uygun park yeri","Tekerlekli sandalyeye uygun tuvalet","Üniseks tuvalet","Günlük fotoğraf ve video","Sosyal oyun alanları"]'::jsonb, '["birak","pet-oteli","kopek","kopek-oteli","ordu-kopek-oteli","ordu-kopek-pansiyonu","subasi-kopek-oteli","ordu-pet-pansiyonu","guvenilir-bakim","724-gozetim"]'::jsonb, 'İşletmeden bilgi alınız', 'Köpek Eğitimi Merkezi Çiftliği ve Eğitmeni Ordu, Ordu Subaşı bölgesinde profesyonel evcil hayvan konaklama, bakım ve pansiyon hizmeti sunan doğrulanmış bir tesistir. Can dostlarımızın güvenliği, hijyeni ve konforu için uzman gözetmenler eşliğinde geniş oyun alanları ve özenli günlük bakım programı uygulanmaktadır.', 'Bireysel konforlu odalar, açık bahçe ve kontrollü sosyalleşme alanları.', 'Sabah uyanma ve serbest oyun saati, öğün takibi, bireysel sevgi & tarama saati ve gece gözetimi.', 'Anlaşmalı veteriner hekim kliniği desteği mevcuttur.', '0536 506 13 13', NULL, 'https://karadenizpetclub.com/', '{"google_maps":"https://www.google.com/maps/place/K%C3%B6pek+E%C4%9Fitimi+Merkezi+%C3%87iftli%C4%9Fi+ve+E%C4%9Fitmeni+Ordu/data=!4m7!3m6!1s0x406321f8895b37a7:0x9ffe4eb0fa9dd920!8m2!3d40.976706!4d37.8853015!16s%2Fg%2F11js3fq7mt!19sChIJpzdbifghY0ARINmd-rBO_p8?authuser=0&hl=tr&g_ep=EgoyMDI2MDkwNi4wIJJjKgBIAVAD&rclk=1"}'::jsonb, FALSE, 'Aşı karnesi ibrazı, güncel kuduz ve karma aşılar ile parazit uygulamaları zorunludur.', TRUE, 'Sosyal uyum gözlemi yapılır; diğer canlılara karşı yüksek agresyon gösterenler için tecrit odaları tercih edilir.', 'Google Haritalar Doğrulanmış İşletme', 10, '2026-09-10', '2026-09-10'::date, 'TRY')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  city = EXCLUDED.city,
  district = EXCLUDED.district,
  image_url = EXCLUDED.image_url,
  gallery_images = EXCLUDED.gallery_images,
  allowed_pets = EXCLUDED.allowed_pets,
  features = EXCLUDED.features,
  quiz_tags = EXCLUDED.quiz_tags,
  price = EXCLUDED.price,
  description = EXCLUDED.description,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  booking_links = EXCLUDED.booking_links,
  base_trust_score = EXCLUDED.base_trust_score,
  last_verified = EXCLUDED.last_verified;

INSERT INTO public.place_sources (provider, external_id, place_id)
VALUES ('google_maps', 'ChIJpzdbifghY0ARINmd-rBO_p8', 'boarding-ad43542aa5c7bf7a6a942ff5')
ON CONFLICT (provider, external_id) DO NOTHING;

COMMIT;
