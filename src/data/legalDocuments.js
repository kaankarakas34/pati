/**
 * PATİLİ.CO HUKUKİ METİNLER VE SÖZLEŞMELER PAKETİ
 * Sürüm: v1.0 — 9 Eylül 2026
 * Resmi Hukuki Metinler ve Sözleşmeler Veri Deposu
 */

export const LEGAL_CATEGORIES = {
  GENERAL: 'Genel Platform ve Kullanım',
  BUSINESS: 'İşletme & Listeleme Sözleşmeleri',
  PROVIDER: 'Hizmet Sağlayıcı Sözleşmeleri',
  KVKK: 'KVKK, Gizlilik ve İletişim',
  POLICIES: 'Standartlar, Moderasyon ve Reklam'
};

export const LEGAL_DOCUMENTS = [
  // 1. Genel Kullanım Koşulları ve Sorumluluk Sınırları
  {
    id: 'kullanim-kosullari',
    slug: 'kullanim-kosullari',
    path: '/kullanim-kosullari',
    number: '1 & 2',
    category: LEGAL_CATEGORIES.GENERAL,
    title: 'Genel Platform Kullanım Koşulları ve Sorumluluk Sınırları',
    shortTitle: 'Kullanım Koşulları',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Platform rolü, kullanıcı yükümlülükleri, üçüncü taraf hizmet sağlayıcıların bağımsızlığı, teyit zorunluluğu ve sorumluluk sınırları.',
    content: `
### BELGE STATÜSÜ
Bu metin Patili.co için hazırlanmış kapsamlı sözleşme metnidir. Uygulamaya alınmadan önce Patili.co’yu işleten gerçek/tüzel kişinin unvanı, adresi, MERSİS/VKN bilgileri, veri sorumlusu statüsü, gelir modeli, ödeme/rezervasyon akışı ve fiili operasyonları dikkate alınarak Türkiye’de yetkili bir avukat tarafından son kontrolden geçirilmelidir.

**Taraflar:** Patili.co ve Platforma erişen tüm ziyaretçi, üye ve üçüncü taraf hizmet sağlayıcılar.  
**Amaç:** Kullanım kurallarını, üçüncü taraf listelemelerinin niteliğini, kullanıcı teyit yükümlülüğünü ve platformun hukuki rolünü belirlemek.

---

### BÖLÜM 1: ANA TANIMLAR VE PLATFORM ROLÜ

| Terim | Tanım |
| :--- | :--- |
| **Platform** | patili.co alan adı, mobil uygulamalar, alt alan adları, API'ler ve Patili.co tarafından işletilen ilgili dijital arayüzler. |
| **Patili.co** | Platformu işleten şirket/temsilci, ilgili marka ve dijital keşif hizmeti. |
| **Kullanıcı** | Platformu görüntüleyen, hesap oluşturan, arama yapan, yorum yazan veya işletmeyle iletişime geçen gerçek kişi. |
| **İşletme / Hizmet Sağlayıcı** | Otel, mekan, pet otel, pet taksi/transfer sağlayıcısı, köpek gezdirici, veteriner muayenehanesi/poliklinik/hayvan hastanesi veya platformda listelenen üçüncü taraf hizmet sağlayıcı. |
| **Listeleme** | İşletmenin adı, konumu, iletişim bilgileri, özellikleri, görselleri, pet politikası, kullanıcı yorumları ve benzeri bilgilerin Platformda gösterilmesi. |
| **Doğrulama** | Patili.co'nun belirli bir zamanda ve belirli kapsamda işletme kimliği, iletişim kanalı, belge veya beyanlardan bir kısmını kontrol etmesi. Doğrulama; kalite, güvenlik, kesin sonuç veya kesintisiz uygunluk garantisi değildir. |
| **Kullanıcı İçeriği** | Yorum, puan, fotoğraf, video, başlık, soru-cevap, şikayet, deneyim anlatımı ve kullanıcı tarafından Platforma gönderilen diğer içerikler. |
| **Pet Politikası** | İşletmenin kabul ettiği hayvan türleri, sayı, ağırlık/ırk sınırı, ücret, alan, tasma/taşıma kutusu, rezervasyon ve diğer kabul koşulları. |
| **Premium / Vitrin** | Ücret karşılığında görünürlüğün artırılması, profil araçları veya ek özellikler; tek başına kalite veya doğruluk onayı değildir. |
| **Üçüncü Taraf Hizmet** | Patili.co dışında bir işletme veya kişinin fiilen sunduğu konaklama, yiyecek-içecek, bakım, taşıma, gezdirme, veterinerlik veya diğer hizmetler. |

#### 1.1. Platformun Rolü
Patili.co, aksi açıkça ve yazılı olarak belirtilmedikçe, üçüncü taraf hizmetlerin ifacısı, vekili, acentesi, taşıyıcısı, veterineri, bakıcısı, konaklama sağlayıcısı veya çalışanı değildir. Kullanıcının üçüncü taraf işletmeyle kurduğu sözleşme ve fiili hizmet ilişkisi, Patili.co’nun taraf olmadığı ayrı bir hukuki ilişkidir.

#### 1.2. Emredici Hükümler Saklıdır
Bu paketteki hiçbir hüküm; mevzuat gereği kaldırılamayan tüketici haklarını, kişisel veri haklarını veya Patili.co’nun kendi kasıt/ağır kusuru ya da emredici hükümlere aykırılığından kaynaklanan sorumlulukları ortadan kaldıracak şekilde yorumlanamaz. Sorumluluk sınırlamaları yürürlükteki mevzuatın izin verdiği azami ölçüde uygulanır.

---

### BÖLÜM 2: GENEL KULLANIM KOŞULLARI

#### 2.1. Kabul ve Kapsam
Kullanıcı Platformu kullanarak yürürlükteki Kullanım Koşullarını kabul eder. Hesap açma, yorum gönderme veya belirli özelliklerin kullanımı için ayrıca aktif kutucuk/onay istenebilir. Koşulların güncel sürümü erişilebilir tutulur ve esaslı değişikliklerde uygun bildirim yapılır.

#### 2.2. Bilgilendirme ve Listeleme Niteliği
Platformdaki işletme bilgileri; işletme beyanı, kamuya açık kaynaklar, kullanıcı katkıları veya Patili.co’nun sınırlı kontrol süreçlerinden gelebilir. Bilgi, belirli bir tarihte doğru olsa dahi işletmenin politikası, kapasitesi, fiyatı, çalışma saati veya kabul koşulu sonradan değişebilir.

#### 2.3. Bağımsız Teyit Yükümlülüğü
Kullanıcı özellikle pet kabulü, hayvan türü/sayısı/ağırlığı, ek ücret, rezervasyon, sağlık/aşı şartları, kapalı-açık alan, taşıma, teslim ve acil durum koşullarını hizmet almadan önce ilgili işletmeden doğrudan teyit etmelidir.

#### 2.4. Üçüncü Taraf Hizmetleri
Konaklama, yiyecek-içecek, bakım, barındırma, taşıma, gezdirme ve veterinerlik hizmetleri ilgili üçüncü tarafça sunulur. Bu hizmetlerin ifası, personeli, ekipmanı, mesleki kararı, fiyatlandırması, iptali, güvenliği ve sonucu kural olarak ilgili hizmet sağlayıcının sorumluluğundadır.

#### 2.5. Fiziksel ve Hayvansal Riskler
Hayvanlarla ve halka açık alanlarla ilişkili faaliyetler doğası gereği öngörülemeyen davranışlar içerebilir. Kullanıcı kendi hayvanının sağlık ve davranış özelliklerini hizmet sağlayıcıya doğru aktarmalı; gerektiğinde tasma, ağızlık, taşıma kutusu, aşı belgesi veya başka güvenlik önlemlerini sağlamalıdır.

#### 2.6. Acil Durum
Platform acil veterinerlik veya 112 benzeri acil müdahale hizmeti değildir. Hayvanın veya insanın acil sağlık/güvenlik tehlikesi halinde kullanıcı doğrudan yetkili acil hizmete, en yakın yetkili veteriner sağlık kuruluşuna veya ilgili kamu birimine başvurmalıdır.

#### 2.7. Doğrulama Rozetleri
Rozetin anlamı yalnızca rozet açıklamasında belirtilen kontrol kapsamıdır. Rozet; gelecekteki hizmet kalitesini, fiyatı, pet kabulünün devamını, güvenliği, hijyeni, personelin davranışını, tıbbi sonucu veya herhangi bir zararın meydana gelmeyeceğini garanti etmez.

#### 2.8. Puan ve Yorumlar
Puan ve yorumlar kullanıcı deneyimlerini yansıtır; Patili.co’nun görüşü veya garanti beyanı değildir. Patili.co hukuka aykırı, sahte, manipülatif veya kurallara aykırı içerikleri inceleyebilir, görünürlüğünü sınırlayabilir veya kaldırabilir.

#### 2.9. Sıralama ve Reklam
Arama sonuçları konum, uygunluk, popülerlik, veri kalitesi, kullanıcı tercihi, editoryal kriterler ve ücretli görünürlük gibi birden fazla faktörden etkilenebilir. Ücretli öne çıkarma uygun şekilde “Sponsorlu”, “Öne Çıkan” veya eşdeğer ifadeyle ayrıştırılır.

#### 2.10. Dış Bağlantılar
Üçüncü taraf web sitesi, harita, rezervasyon, telefon veya sosyal medya bağlantıları Patili.co kontrolü dışındaki hizmetlere götürebilir. Kullanıcı bu hizmetlerin kendi koşullarını incelemelidir.

#### 2.11. Kullanıcı Hesabı
Kullanıcı hesap bilgilerinin doğru olmasını ve erişim bilgilerinin gizliliğini sağlamakla yükümlüdür. Yetkisiz kullanım şüphesi derhal bildirilmelidir.

#### 2.12. Yasak Kullanım
Sahte işletme kaydı, sahte yorum, kimliğe bürünme, otomatik kötüye kullanım, veri kazıma yoluyla kişisel verilerin hukuka aykırı işlenmesi, taciz, tehdit, hakaret, yasa dışı ürün/hizmet tanıtımı, güvenlik açıklarının kötüye kullanılması ve Platform işleyişini bozucu eylemler yasaktır.

#### 2.13. Fikri Haklar
Patili.co’ya ait arayüz, veri derleme biçimi, marka, logo, özgün metin ve yazılım unsurları mevzuatla korunur. Üçüncü taraf marka ve içerikleri ilgili hak sahiplerine aittir.

#### 2.14. Hizmet Sürekliliği
Bakım, güvenlik, teknik arıza, mücbir sebep veya ürün değişikliği nedeniyle Platformun tamamı veya bir kısmı geçici olarak kesilebilir. Kanunen zorunlu olmayan kesintisiz erişim garantisi verilmez.

#### 2.15. Sorumluluk Sınırı
Patili.co; üçüncü taraf hizmet sağlayıcının fiil veya ihmali, işletme tarafından sağlanan yanlış/güncelliğini yitirmiş bilgi, kullanıcıların içeriği ya da kullanıcı ile üçüncü taraf arasında doğan uyuşmazlık bakımından, emredici mevzuatın izin verdiği ölçüde hizmet sağlayıcı yerine sorumlu tutulamaz. Patili.co’nun kendi kusurlu eylemleri ve kanunen kaldırılamayan sorumluluklar saklıdır.

#### 2.16. Tüketici Hakları
Kullanıcının tüketici sıfatı taşıdığı hallerde 6502 sayılı Kanun ve ilgili mevzuattan doğan emredici hakları saklıdır. Kullanım Koşulları bu haklardan feragat anlamına gelmez.

#### 2.17. Uyuşmazlık
Türkiye Cumhuriyeti hukuku uygulanır. Tüketicilerin kanunen yetkili tüketici hakem heyeti ve tüketici mahkemelerine başvuru hakları saklıdır. Tüketici olmayan ticari taraflar bakımından ayrıca ilgili işletme sözleşmesindeki yetki hükmü uygulanır.
`
  },

  // 2. Otel Listeleme ve Platform Hizmet Sözleşmesi
  {
    id: 'otel-listeleme-sozlesmesi',
    slug: 'otel-listeleme',
    path: '/sozlesmeler/otel-listeleme',
    number: '3',
    category: LEGAL_CATEGORIES.BUSINESS,
    title: 'Evcil Hayvan Kabul Eden Otel Listeleme ve Platform Hizmet Sözleşmesi',
    shortTitle: 'Otel Listeleme Sözleşmesi',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Evcil hayvan kabul eden otel, apart, pansiyon ve konaklama tesislerinin listelenmesi, pet politikası taahhüdü ve tarafların hakları.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile evcil hayvan kabul ettiğini beyan eden otel, apart, pansiyon, tatil köyü ve benzeri konaklama işletmesi.  
**Amaç:** Konaklama tesisinin pet politikasını doğru göstermesini ve kullanıcı ile konaklama işletmesi arasındaki ilişkinin Patili.co’dan ayrılmasını sağlamak.

---

### GENEL HÜKÜMLER

#### 3.1. Sözleşmenin Konusu
İşletmenin/hizmet sağlayıcının Platformda listelenmesi, profilinin yönetimi, bilgi ve görsellerin yayımlanması, varsa premium görünürlük hizmetleri ve tarafların yükümlülüklerinin belirlenmesidir.

#### 3.2. Bağımsız Taraflar
Taraflar bağımsızdır. Bu sözleşme acentelik, franchise, iş ortaklığı, işçi-işveren, vekâlet veya Patili.co’nun üçüncü taraf hizmeti bizzat üstlenmesi sonucunu doğurmaz.

#### 3.3. Bilgi Doğruluğu
İşletme Platforma sunduğu her bilgi, belge, fotoğraf, fiyat, koşul ve iletişim verisinin doğru, güncel, hukuka uygun ve üçüncü kişi haklarını ihlal etmeyen nitelikte olduğunu beyan eder.

#### 3.4. Güncelleme Yükümlülüğü
Hizmet koşulu, ruhsat/izin, adres, telefon, ücret, pet politikası veya kritik bilgilerde değişiklik olması halinde işletme makul olan en kısa sürede ve en geç kendi operasyonel süreçlerinin gerektirdiği ilk fırsatta Platform profilini günceller veya Patili.co’ya bildirir.

#### 3.5. Mevzuata Uyum
İşletme kendi faaliyeti için gerekli tüm ruhsat, izin, çalışma belgesi, mesleki yetki, vergi/oda kaydı, sigorta ve diğer yasal yükümlülükleri kendisi takip eder. Patili.co’nun belge istemesi kamu otoritesi denetiminin yerine geçmez.

#### 3.6. Müşteri İlişkisi
Kullanıcı ile işletme arasında kurulan hizmet sözleşmesinin tarafı işletmedir. Fiyat, rezervasyon, iptal, teslim, hizmet kalitesi, personel, güvenlik ve hizmet sonucuna ilişkin uyuşmazlıklar kural olarak işletme ile kullanıcı arasındadır.

#### 3.7. Patili.co’nun Kontrol Hakkı
Patili.co makul şüphe halinde bilgi/belge talep edebilir, profil görünürlüğünü geçici olarak sınırlandırabilir veya yayını durdurabilir. Bu kontrol hakkı, Patili.co’ya işletmenin sürekli denetçisi olma yükümlülüğü yüklemez.

#### 3.8. Tazmin ve Rücu
İşletmenin yanlış beyanı, mevzuata aykırı faaliyeti, fikri hak ihlali veya kendi hizmetinden doğan üçüncü kişi talepleri nedeniyle Patili.co’nun hukuken ödemek zorunda kaldığı tutarlar bakımından, kusur ve mevzuatın izin verdiği kapsamda işletmeye rücu hakkı saklıdır.

#### 3.9. Kayıt ve İspat
Elektronik onaylar, işlem kayıtları, IP/tarih-saat bilgileri, profil değişiklik geçmişi, bildirimler ve yüklenen belgeler mevzuatın izin verdiği ölçüde kayıt altına alınabilir ve uyuşmazlıkların çözümünde delil olarak kullanılabilir.

#### 3.10. Askıya Alma ve Fesih
Sahte belge, ciddi güvenlik şikâyeti, hukuka aykırı faaliyet, tekrar eden yanlış bilgi, kullanıcıları yanıltma, platform güvenliğini bozma veya sözleşme ihlali halinde Patili.co profili askıya alabilir veya sözleşmeyi feshedebilir. Acil riskte önceden bildirim şartı aranmayabilir; sonradan itiraz kanalı sağlanır.

#### 3.11. Emredici Hükümler
Hiçbir hüküm Patili.co’nun kendi ağır kusuru/kastı veya kanunen kaldırılamayan sorumluluğunu ortadan kaldırmaz; işletmenin de kendi zorunlu tüketici, hayvan refahı, mesleki veya kamu hukuku yükümlülüklerini bertaraf etmez.

---

### BÖLÜM 3.12: OTEL ÖZEL HÜKÜMLERİ
- **Sınırsız Kabul Sayılmaz:** Otel, “pet-friendly / evcil hayvan kabul edilir” ibaresinin tek başına sınırsız kabul anlamına gelmediğini; tür, ırk, ağırlık, sayı, oda tipi, ortak alan, sezon ve ek ücret gibi şartlarını profilinde açıkça belirtir.
- **Doğrudan Teyit Kanalı:** Otel, kullanıcı rezervasyon yapmadan önce pet koşullarını yeniden teyit edebileceği doğrudan iletişim kanalını sağlar.
- **Tesis Kuralları Açıklığı:** Otel, hayvanın tesiste bulunması sırasında uygulanacak tasma, taşıma kutusu, yalnız bırakmama, temizlik, hasar depozitosu ve ortak alan kurallarını açıklar.
- **Tesis Güvenliği:** Otel, başka misafirlerin veya hayvanların davranışlarından doğan riskleri kendi tesis güvenliği ve yürürlükteki mevzuat çerçevesinde yönetir; Patili.co tesis güvenliğinin işletmecisi değildir.
- **Fiyat Teyidi:** Patili.co’da görünen fiyatlar bilgi amaçlı olabilir; nihai fiyat, ek pet ücreti, vergi ve rezervasyon koşulları otel tarafından teyit edilmelidir.
- **Doğrulama Sınırı:** “Doğrulanmış otel” ifadesi kullanılırsa doğrulama kapsamı profil üzerinde gösterilir; pet kabulünün belirli tarihten sonra değişmeyeceği anlamına gelmez.
`
  },

  // 3. Restoran / Kafe / Bar ve Mekan Listeleme Sözleşmesi
  {
    id: 'mekan-listeleme-sozlesmesi',
    slug: 'mekan-listeleme',
    path: '/sozlesmeler/mekan-listeleme',
    number: '4',
    category: LEGAL_CATEGORIES.BUSINESS,
    title: 'Restoran / Kafe / Bar ve Diğer Mekân Listeleme Sözleşmesi',
    shortTitle: 'Mekân Listeleme Sözleşmesi',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Kedi ve köpek kabul eden kafe, restoran, bar ve sosyal tesislerin listelenmesi, iç/dış alan ayrımı ve hijyen taahhütleri.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile evcil hayvan kabul ettiğini beyan eden restoran, kafe, bar, sosyal tesis ve benzeri yeme-içme ve sosyalleşme işletmesi.  
**Amaç:** Mekânın pet kabul alanlarını ve koşullarını doğru göstermesini, kullanıcı deneyimi ile işletme hizmetinin Patili.co’dan ayrılmasını sağlamak.

---

### GENEL HÜKÜMLER
*(Sözleşmenin konusu, bağımsız taraflar, bilgi doğruluğu, güncelleme yükümlülüğü, mevzuata uyum, müşteri ilişkisi, kontrol hakkı, tazmin ve rücu, kayıt ve ispat, askıya alma/fesih ve emredici hükümler hükümleri işbu sözleşmenin de ayrılmaz parçasıdır.)*

---

### BÖLÜM 4.12: MEKÂN ÖZEL HÜKÜMLERİ
- **İç / Dış Alan Ayrımı:** Mekân; evcil hayvanın iç alana mı, dış alana mı, bahçeye mi, yoksa yalnızca belirli masa/kat/bölümlere mi kabul edildiğini profilinde açıkça belirtir.
- **Yoğun Saatler ve Kısıtlamalar:** Mekân; yoğun saat, etkinlik, hijyen veya mevzuat nedeniyle geçici olarak pet kabulünü sınırlandırabilecekse bunu kullanıcıya işletme nezdinde teyit ettirir ve Platform bilgisini günceller.
- **Gıda Güvenliği ve Hijyen:** Mekânın gıda güvenliği ve hijyen yükümlülükleri tamamen işletmeye aittir. Patili.co bu yükümlülükleri denetleyen kamu otoritesi değildir.
- **Kullanıcı Kontrol Yükümlülüğü:** Kullanıcı kendi hayvanının kontrolünü sağlamakla ve mekânın makul pet kurallarına (tasma, alan sınırı vb.) uymakla yükümlüdür.
- **Ürün ve Hizmet Sorumluluğu:** İşletme kullanıcıya veya hayvana sunduğu ürün/hizmetin ayıbı, alerjen bildirimi, fiziksel ortamı ve personel davranışından kendi mevzuatı çerçevesinde sorumludur.
`
  },

  // 4. Pet Otel / Ev Hayvanı Barınma Yeri Listeleme Sözleşmesi
  {
    id: 'pet-otel-listeleme-sozlesmesi',
    slug: 'pet-otel-listeleme',
    path: '/sozlesmeler/pet-otel-listeleme',
    number: '5',
    category: LEGAL_CATEGORIES.BUSINESS,
    title: 'Pet Otel / Ev Hayvanı Barınma Yeri Listeleme Sözleşmesi',
    shortTitle: 'Pet Otel Listeleme Sözleşmesi',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Pet oteli, kedi-köpek pansiyonu ve bakım merkezlerinin ruhsat beyanı, kabul-teslim protokolleri ve acil durum prosedürleri.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile ev hayvanını geçici süreyle teslim alıp barındırma/bakım hizmeti sunan gerçek veya tüzel kişi.  
**Amaç:** Hayvanın fiilen teslim edildiği yüksek riskli hizmette izin, kayıt, bakım ve teslim sorumluluklarını hizmet sağlayıcıda açıkça konumlandırmak.

---

### BÖLÜM 5.12: RUHSAT VE ÇALIŞMA İZNİ BEYANI
Pet Otel, faaliyeti için yürürlükteki veteriner/hayvan refahı mevzuatı (5996 sayılı Kanun ve Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik) kapsamında gerekli kuruluş ve/veya çalışma izinlerine sahip olduğunu ve bu belgelerin geçerliliğini sürdürdüğünü beyan eder. Patili.co, doğrulama programı kapsamında belgeyi veya Bakanlık tarafından yayımlanan izin listelerini kontrol edebilir; ancak bu kontrol ilgili kamu kurumunun ruhsatlandırma ve denetim yetkisinin yerine geçmez.

---

### BÖLÜM 5.13: HAYVAN TESLİMİ VE KABUL PROTOKOLÜ
- **Sağlık ve Kimlik Bilgileri:** Pet Otel, hayvanı teslim alırken sahibin kimliği, hayvanın mikroçip/kayıt bilgisi, aşı/sağlık karnesi, kronik ilaçlar, beslenme düzeni, davranış, saldırganlık/kaçma öyküsü ve acil iletişim kişisini kendi mevzuatı ve KVKK’ya uygun biçimde toplar.
- **Teslim Tutanağı:** Teslim alınan tasma, taşıma kutusu, mama, ilaç ve diğer eşyalar mümkünse teslim tutanağıyla kaydedilir.
- **Acil Veteriner Müdahalesi:** Acil veteriner müdahalesi gerektiren durumda uygulanacak yetkilendirme, masraf ve iletişim prosedürü Pet Otel ile hayvan sahibi arasındaki hizmet sözleşmesinde ayrıca düzenlenmelidir.
- **Gözetim ve Güvenlik:** Pet Otel, farklı hayvanların birlikte tutulması, izolasyon, hastalık şüphesi, hijyen, kaçmayı önleme ve güvenlik tedbirlerini kendi mesleki/operasyonel sorumluluğunda yürütür.
- **Olay Yönetimi:** Hayvanın yaralanması, hastalanması, kaçması, ölümü veya üçüncü kişiye zarar vermesi halinde olay yönetimi ve mevzuattan doğan bildirimler Pet Otelin sorumluluğundadır; Patili.co yalnızca listeleme platformudur.

---

### BÖLÜM 5.14: PATİLİ.CO’DA GÖSTERİLECEK ZORUNLU PROFİL ALANLARI
- Çalışma/izin durumuna ilişkin beyan ve varsa doğrulama tarihi
- Kabul edilen türler ve yaş aralığı
- Aşı ve sağlık şartları
- Gece gözetimi / personel durumu (işletmenin beyanıyla)
- Veteriner acil durum prosedürü (işletmenin beyanıyla)
- Kapasite ve rezervasyon gerekliliği
- İptal ve teslim saatleri
- İlaç verme ve özel bakım kabulü
- Kamera erişimi varsa koşulları
- Fiyatların “başlangıç” veya “güncel teyit gerekir” biçiminde açık gösterimi
`
  },

  // 5. Pet Taksi / Transfer Hizmeti Listeleme Sözleşmesi
  {
    id: 'pet-taksi-listeleme-sozlesmesi',
    slug: 'pet-taksi-listeleme',
    path: '/sozlesmeler/pet-taksi-listeleme',
    number: '6',
    category: LEGAL_CATEGORIES.PROVIDER,
    title: 'Pet Taksi / Evcil Hayvan Transfer Hizmeti Listeleme Sözleşmesi',
    shortTitle: 'Pet Taksi Sözleşmesi',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Evcil hayvan transferi, şehir içi ve şehirler arası pet taksi sağlayıcılarının yasal uygunluk, araç güvenliği ve teslim protokolleri.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile evcil hayvan taşıma/transfer hizmeti sunduğunu beyan eden sağlayıcı.  
**Amaç:** Taşıma hizmeti, araç ve sürücü risklerini Patili.co’dan ayırmak; sağlayıcının yasal uygunluk ve güvenlik beyanlarını kayıt altına almak.

---

### BÖLÜM 6.12: PET TAKSİ ÖZEL BEYANLARI
- **Yasal İzin ve Belgeler:** Sağlayıcı, sunduğu taşıma faaliyetinin niteliğine göre gerekli tüm sürücü belgeleri, araç kayıtları, mesleki/yetki belgeleri, sigortalar, belediye/ulaşım/karayolu mevzuatından doğabilecek izinler ve vergi yükümlülüklerini kendisi değerlendirip yerine getirmekle yükümlüdür.
- **Kategori Adının Anlamı:** Patili.co, “pet taksi” kategori adını kullanmakla sağlayıcının belediye taksi ruhsatı, karayolu taşıma yetki belgesi veya başka bir spesifik izin türüne sahip olduğunu garanti etmiş sayılmaz. Doğrulanan belge varsa hangi belge olduğu profil üzerinde ayrıca belirtilir.
- **Taşıma Güvenliği ve Ekipman:** Sağlayıcı, hayvanın araç içinde güvenli taşınması için tür ve boyuta uygun sabitleme/taşıma ekipmanı ve makul hijyen tedbirlerini sağlamakla yükümlüdür.
- **Sürücü Sorumluluğu:** Sürücü, hayvanı gözetimsiz biçimde tehlikeli sıcaklıkta araçta bırakmama, trafik kurallarına uyma ve teslim/tesellüm noktasını teyit etme sorumluluğunu üstlenir.
- **Refakatsiz Taşıma:** Hayvanın sahibinden ayrı taşınması halinde teslim alan/teslim eden kişi, iletişim bilgileri, özel sağlık ve davranış notları hizmet sağlayıcının kendi hizmet sözleşmesinde kayıt altına alınmalıdır.
- **Trafik ve Taşıma Riskleri:** Trafik kazası, araç arızası, hayvanın kaçması, yaralanması veya üçüncü kişiye zarar vermesi gibi olaylar sağlayıcının fiili hizmet alanındadır. Patili.co’nun kendi kusuru saklı kalmak üzere, listeleme işlemi bu taşıma riskini üstlenme anlamına gelmez.

---

### BÖLÜM 6.13: PROFİLDE GÖSTERİLMESİ ÖNERİLEN ALANLAR
- Hizmet bölgesi (Şehir içi & Şehirler arası)
- Araç tipi ve hayvan taşıma ekipmanı beyanı
- Sahibin eşlik etme durumu (refakatli / refakatsiz)
- Kedi / köpek / diğer tür kabulü
- Maksimum hayvan sayısı ve ağırlığı
- Veteriner / havalimanı transfer seçenekleri
- Gece ve acil hizmet beyanı
- Fiyatlandırma modeli ve kilometre tarifesi
- Belge ve doğrulama kapsamı ile tarihi
`
  },

  // 6. Köpek Gezdirici / Pet Walker Listeleme Sözleşmesi
  {
    id: 'kopek-gezdirici-sozlesmesi',
    slug: 'kopek-gezdirici-listeleme',
    path: '/sozlesmeler/kopek-gezdirici-listeleme',
    number: '7',
    category: LEGAL_CATEGORIES.PROVIDER,
    title: 'Köpek Gezdirici / Pet Walker Listeleme Sözleşmesi',
    shortTitle: 'Köpek Gezdirici Sözleşmesi',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Köpek gezdirme ve bireysel pet bakıcılığı hizmeti sunan sağlayıcıların yükümlülükleri, güvenlik, tasma ve anahtar teslim kuralları.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile ücretli/profesyonel köpek gezdirme veya benzeri kısa süreli bakım hizmeti sunan kişi/işletme.  
**Amaç:** Hayvanın üçüncü kişiye geçici tesliminden kaynaklanan kaçma, saldırı, yaralanma, anahtar/konut erişimi ve üçüncü kişi zararlarını açıkça düzenlemek.

---

### BÖLÜM 7.12: GEZDİRİCİ ÖZEL YÜKÜMLÜLÜKLERİ
- **Ön Bilgi Alma:** Gezdirici, hayvan sahibinden köpeğin sağlık durumu, davranış özellikleri, insan/hayvanlara reaksiyonu, kaçma eğilimi, kullanılan tasma/göğüs tasması, veteriner ve acil iletişim bilgisini hizmet öncesinde almalıdır.
- **Tasma Zorunluluğu:** Köpek, sahibinin açık izni olmadan tasmasız bırakılamaz; ayrıca yürürlükteki yerel ve ulusal kamu kuralları saklıdır.
- **Grup Gezdirme Kapasitesi:** Aynı anda birden fazla köpek gezdiriliyorsa sağlayıcı kendi kapasitesi, köpeklerin uyumu ve güvenliği için makul sınırlamalar koymalıdır.
- **Kişisel İfa:** Gezdirici, hayvanı başka bir kişiye devredemez veya izinsiz alt hizmet sağlayıcı kullanamaz; kullanılacaksa hayvan sahibine önceden açıkça bildirilmelidir.
- **Konut ve Anahtar Güvenliği:** Ev/anahtar erişimi varsa anahtar, alarm kodu, bina erişimi ve adres verileri yüksek gizlilikle korunmalı; yalnızca hizmet amacıyla kullanılmalı ve hizmet bitiminde iade/silinmelidir.
- **Olay ve Zarar Sorumluluğu:** Köpeğin kaçması, kaybolması, yaralanması, üçüncü kişiye/hayvana zarar vermesi veya gezdiricinin kusurundan doğan olaylar hizmet sağlayıcının kendi hizmet ilişkisinin konusudur. Patili.co gezdiricinin işvereni değildir.
- **Kimlik Doğrulama Sınırı:** Platform kimlik doğrulaması yapsa bile sabıka kaydı, mesleki yeterlilik, fiziksel yeterlilik veya her yürüyüşteki davranış garantisi anlamına gelmez; doğrulanan unsur açıkça yazılmalıdır.
`
  },

  // 7. Veteriner Muayenehanesi, Poliklinik ve Hayvan Hastanesi Listeleme Sözleşmesi
  {
    id: 'veteriner-listeleme-sozlesmesi',
    slug: 'veteriner-listeleme',
    path: '/sozlesmeler/veteriner-listeleme',
    number: '8',
    category: LEGAL_CATEGORIES.PROVIDER,
    title: 'Veteriner Muayenehanesi, Poliklinik ve Hayvan Hastanesi Listeleme Sözleşmesi',
    shortTitle: 'Veteriner Listeleme Sözleşmesi',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Ruhsatlı veteriner sağlık kuruluşlarının listelenmesi, tıbbi bağımsızlık, reklam ve tanıtım yasaklarına uyum esasları.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile ruhsatlı veteriner sağlık hizmeti sunan muayenehane, poliklinik veya hayvan hastanesi.  
**Amaç:** Düzenlenmiş veteriner sağlık hizmetini Platformdan ayırmak; ruhsat ve tanıtım bilgilerinin doğru verilmesini sağlamak; tıbbi sonucu garanti etmemek.

---

### BÖLÜM 8.12: RUHSAT VE MESLEKİ YETKİ
Veteriner işletmesi; işletme türüne göre Tarım ve Orman Bakanlığı/il müdürlüğü nezdinde gerekli ruhsat ve çalışma izinlerine, sorumlu yönetici ve veteriner hekim çalışma belgelerine sahip olduğunu beyan eder. Patili.co gerekli gördüğünde belge veya Bakanlığın güncel izin listesi üzerinden sınırlı kontrol yapabilir. Bu kontrol mesleki denetim veya tedavi uygunluğu değerlendirmesi değildir.

---

### BÖLÜM 8.13: TIBBİ BAĞIMSIZLIK
Teşhis, tetkik, reçete, ilaç, cerrahi, anestezi, yatış, sevk, ötenazi ve diğer veteriner hekimlik kararları yalnızca yetkili veteriner sağlık hizmeti sağlayıcısının mesleki sorumluluğundadır. Patili.co tıbbi tavsiye, teşhis veya tedavi hizmeti sunmaz ve kullanıcı ile veteriner arasındaki veterinerlik sözleşmesinin tarafı değildir.

---

### BÖLÜM 8.14: TANITIM VE SIRALAMA KURALLARI
- **Mevzuata Uygunluk:** Veteriner işletmesi, Platforma verdiği unvan, ihtisas, ruhsat türü, hekim adı ve hizmet bilgilerinin mevzuata uygun olduğunu taahhüt eder.
- **Yasaklı İfadeler:** Patili.co, veteriner profilinde doğrulanmamış “uzman”, “en iyi”, “garantili tedavi”, “kesin başarı” gibi iddiaları yayımlamama veya belge isteme hakkına sahiptir.
- **Sponsorluk Sınırı:** Ücretli görünürlük, tıbbi kalite sıralaması gibi sunulamaz. Sponsorlu profil açıkça ayrıştırılmalıdır.
- **Kullanıcı Yorumları:** Kullanıcı puanı/yorumu tıbbi kalite sertifikası değildir. Yorumlar somut deneyim anlatımı olarak sunulur ve kişisel sağlık/veri ifşası açısından ayrıca moderasyona tabi tutulabilir.
- **7/24 Hizmet Teyidi:** “7/24 veteriner” gibi çalışma saati iddiaları düzenli teyit edilmelidir; kullanıcı acil durumda telefonla doğrudan teyit etmeye yönlendirilmelidir.

---

### BÖLÜM 8.15: SAĞLIK VERİLERİ
Patili.co, gereksiz yere hayvan sahibinin veya üçüncü kişilerin sağlık verilerini toplamamalıdır. Kullanıcı bir yorumda kendi veya üçüncü kişinin özel nitelikli kişisel verilerini paylaşırsa moderasyon ve veri minimizasyonu uygulanır. Veteriner işletmesine gönderilecek randevu/iletişim formu varsa hangi verinin kime aktarıldığı KVKK aydınlatmasında açıkça belirtilir.
`
  },

  // 8. Doğrulanmış İşletme ve Doğrulama Rozeti Kullanım Koşulları
  {
    id: 'dogrulama-rozeti-kosullari',
    slug: 'dogrulama-rozeti',
    path: '/sozlesmeler/dogrulama-rozeti',
    number: '9',
    category: LEGAL_CATEGORIES.POLICIES,
    title: 'Doğrulanmış İşletme ve Doğrulama Rozeti Kullanım Koşulları',
    shortTitle: 'Doğrulama Rozeti Koşulları',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Doğrulama rozetinin seviyeleri, teyit kapsamı, kontrol tarihleri ve garanti teşkil etmediğine dair yasal çerçeve.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co, doğrulama programına katılan işletmeler ve rozeti gören kullanıcılar.  
**Amaç:** “Doğrulanmış” ifadesinin garanti gibi algılanmasını önlemek ve kontrol kapsamını izlenebilir hale getirmek.

---

### BÖLÜM 9.1: DOĞRULAMA SEVİYELERİ TABLOSU

| Seviye | Örnek Kontrol | Kullanıcıya Gösterilecek Anlam |
| :--- | :--- | :--- |
| **Kimlik Doğrulandı** | Telefon / e-posta / işletme yetkilisi teyidi | Bu iletişim/işletme ilişkisinin belirli tarihte teyit edildiği |
| **Belge Doğrulandı** | Ruhsat/izin belgesinin görülmesi veya resmî listede eşleşme | Belgenin belirli tarihte görüldüğü/eşleştiği; sonradan iptal edilmediği garanti değildir |
| **Pet Politikası Teyit Edildi** | İşletme yetkilisinin pet kabul şartlarını yazılı teyidi | Belirli tarihte beyan edilen koşullar; gitmeden önce yeniden teyit gerekir |
| **Adres Doğrulandı** | Resmî/kamusal kaynak veya işletme teyidi | Konum bilgisinin belirli tarihte teyidi |

---

### BÖLÜM 9.2: ROZET KULLANIMI
Rozet yanında veya bilgi ikonunda “Doğrulama kapsamı” ve “Son kontrol tarihi” gösterilmelidir. Tek bir yeşil tik ile neyin doğrulandığı belirsiz bırakılmamalıdır.

### BÖLÜM 9.3: GARANTİ VERİLMEMESİ
Doğrulama; kusursuz hizmet, güvenlik, hijyen, hayvan refahının her an sağlanacağı, fiyat, personel kalitesi, veterinerlik sonucu, araç/sürücü davranışı veya kullanıcının memnuniyeti konusunda garanti oluşturmaz.

### BÖLÜM 9.4: SÜRE VE YENİDEN KONTROL
Kritik belge ve pet politikası kontrolleri için iç prosedürde yenileme periyodu belirlenir. Süresi geçen doğrulama rozetinin otomatik olarak “yeniden teyit bekliyor” durumuna alınması önerilir.

### BÖLÜM 9.5: ROZETİN KALDIRILMASI
Belgenin süresinin dolması, işletmenin bilgi vermemesi, ciddi ve doğrulanabilir aykırılık şüphesi, sahtecilik, yetki kaybı veya işletmenin kapanması halinde rozet askıya alınabilir veya kaldırılabilir.
`
  },

  // 9. İşletme Bilgi Beyanı, Belge Doğruluğu ve Güncellik Taahhüdü
  {
    id: 'isletme-bilgi-beyani',
    slug: 'isletme-bilgi-beyani',
    path: '/sozlesmeler/isletme-bilgi-beyani',
    number: '10',
    category: LEGAL_CATEGORIES.BUSINESS,
    title: 'İşletme Bilgi Beyanı, Belge Doğruluğu ve Güncellik Taahhüdü',
    shortTitle: 'İşletme Bilgi Beyanı',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'İşletmelerin sunduğu fiyat, pet kabul şartları, ruhsat ve görsel verilerin doğruluğu ve güncelleme yükümlülüğü.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Platformda profili bulunan tüm işletmeler ve bireysel hizmet sağlayıcılar.  
**Amaç:** Her profil bilgisinin kaynağını işletmeye bağlamak ve değişiklik bildirim yükümlülüğünü açıkça almak.

---

### TAAHHÜT EDİLEN BİLGİ KAPSAMI
- Ticari unvan / ad-soyad
- Vergi / MERSİS / oda bilgisi (gerekli olduğu ölçüde)
- Adres ve konum koordinatları
- Telefon ve e-posta kanalları
- Yetkili kişi beyanı
- Faaliyet kategorisi
- Ruhsat / izin / çalışma belgesi bilgileri (gerekli olduğu ölçüde)
- Pet kabul / bakım / taşıma koşulları
- Çalışma saatleri
- Fiyat / ücret bilgileri
- Fotoğraf ve marka kullanım yetkisi
- Acil iletişim / şikâyet kanalı

---

### BÖLÜM 10.1: BEYAN METNİ
İşletme, yukarıdaki bilgileri kendi yetkisiyle sunduğunu; bunların gerçeğe uygun olduğunu; yanıltıcı, eksik veya üçüncü kişi hakkını ihlal eden bilgi vermediğini; değişiklikleri gecikmeden bildireceğini; belge/ruhsat durumunda askıya alma veya iptal olması halinde Patili.co’yu bilgilendireceğini kabul eder.

### BÖLÜM 10.2: BELGE SAKLAMA VE VERİ MİNİMİZASYONU
Patili.co belge kopyalarını yalnızca gerekli olduğu ölçüde ve belirlenmiş saklama süresi boyunca tutmalıdır. Belgenin yalnızca numarası/doğrulama sonucu yeterliyse gereksiz kişisel veri içeren tam kopya saklanmamalıdır.
`
  },

  // 10. Kullanıcı İçeriği, Puanlama, Fotoğraf ve Yorum Sözleşmesi
  {
    id: 'kullanici-yorumlari-sozlesmesi',
    slug: 'kullanici-yorumlari',
    path: '/sozlesmeler/kullanici-yorumlari',
    number: '11',
    category: LEGAL_CATEGORIES.POLICIES,
    title: 'Kullanıcı İçeriği, Puanlama, Fotoğraf ve Yorum Sözleşmesi',
    shortTitle: 'Yorum ve İçerik Sözleşmesi',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Kullanıcıların paylaştığı yorum, puan ve fotoğrafların kuralları, gerçek deneyim şartı, moderasyon ve telif lisansı.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ve yorum/puan/fotoğraf gönderen kullanıcı.  
**Amaç:** Kullanıcı içeriğinin hukuka uygun, gerçek deneyime dayalı ve üçüncü kişi haklarına saygılı olmasını sağlamak; moderasyon yetkisini düzenlemek.

---

### MADDELER

#### 11.1. Gerçek Deneyim
Kullanıcı yorumun kendi deneyimine veya doğrudan gözlemine dayandığını; uydurma, otomatik, satın alınmış veya organize manipülasyon olmadığını beyan eder.

#### 11.2. Görüş ve Olgu Ayrımı
Kullanıcı kişisel kanaatini ifade edebilir; ancak suç isnadı, sağlık/ruhsat ihlali gibi doğrulanabilir ağır iddiaları gerçekmiş gibi sunarken dayanak sorumluluğu kendisine aittir.

#### 11.3. Hakaret ve Tehdit Yasağı
Hakaret, tehdit, nefret söylemi, taciz, ifşa, şantaj ve kişilik haklarını ihlal eden içerik kesinlikle yasaktır.

#### 11.4. Kişisel Veri İfşası Yasağı
Telefon, ev adresi, kimlik numarası, plaka, çalışanların özel bilgileri, sağlık bilgileri ve gereksiz kişisel veri paylaşılmamalıdır. Patili.co gerektiğinde redaksiyon yapabilir.

#### 11.5. Fotoğraf ve Video Paylaşımı
Kullanıcı yüklediği görsel üzerinde gerekli hak veya izne sahip olduğunu; üçüncü kişilerin özel hayatını ihlal etmediğini beyan eder.

#### 11.6. Telif ve Lisans
Kullanıcı, içeriği Platformda sunmak, teknik olarak çoğaltmak, yeniden boyutlandırmak ve listelemeyle ilişkilendirmek için Patili.co’ya dünya çapında, münhasır olmayan, bedelsiz, alt lisanslanabilir ve içerik Platformda tutulduğu sürece geçerli kullanım hakkı verir; zorunlu mevzuat ve silme hakları saklıdır.

#### 11.7. Moderasyon Yetkisi
Patili.co içeriği otomatik veya insan moderasyonu ile inceleyebilir; kurala aykırı bölümleri reddedebilir, gizleyebilir, redakte edebilir veya kaldırabilir. Moderasyonun yapılması tüm içeriklerin önceden hukuki doğruluğunun garanti edildiği anlamına gelmez.

#### 11.8. İşletme Cevabı
İşletme, yoruma cevap verirken kişisel veri veya gizli müşteri bilgisini açıklayamaz; tehdit veya hakaret kullanamaz.

#### 11.9. Teşvikli Yorum Bildirimi
İndirim, hediye veya başka menfaat karşılığında yazılan yorum varsa bunun açıkça belirtilmesi gerekir. Sahte olumlu/olumsuz yorum organizasyonu yasaktır.

#### 11.10. İtiraz Prosedürü
İşletme somut gerekçeyle yoruma itiraz edebilir. Patili.co gerekirse kullanıcıdan deneyime dair makul doğrulama isteyebilir; gereksiz kişisel veri talep edilmez.

#### 11.11. Hukuki Sorumluluk
Kullanıcı kendi içeriğinin hukuka uygunluğundan sorumludur. Patili.co’nun mevzuattan doğan bildirim/kaldırma ve kendi fiillerine ilişkin sorumlulukları saklıdır.
`
  },

  // 11. İçerik Şikâyet, İtiraz ve Yayından Kaldırma Politikası
  {
    id: 'icerik-sikayet-kaldirma',
    slug: 'icerik-sikayet-kaldirma',
    path: '/sozlesmeler/icerik-sikayet-kaldirma',
    number: '12',
    category: LEGAL_CATEGORIES.POLICIES,
    title: 'İçerik Şikâyet, İtiraz ve Yayından Kaldırma Politikası',
    shortTitle: 'Şikâyet & Kaldırma Politikası',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Hukuka aykırı içerik, sahte yorum, telif ihlali ve yanlış bilgi bildirimlerinin incelenme ve kaldırma prosedürü.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Kullanıcılar, işletmeler, hak sahipleri ve Patili.co.  
**Amaç:** Yanlış bilgi, kişilik hakkı, fikri hak, sahte yorum ve güvenlik ihbarlarını sistematik biçimde ele almak.

---

### BÖLÜM 12.1: BİLDİRİM KANALLARI
- Her yorum yanında “Bildir” düğmesi
- Her işletme profilinde “Bilgi yanlış / işletme kapalı / pet politikası değişti” bağlantısı
- Hukuki bildirimler için **destek@patili.co**
- KVKK başvuruları için ayrı **kvkk@patili.co** kanalı
- Acil fiziksel tehlike bildirimlerinin kamu acil hizmetlerinin yerine geçmediğini belirten uyarı

---

### BÖLÜM 12.2: ŞİKÂYET KATEGORİLERİ
- Kişilik hakkı / iftira / hakaret
- Sahte veya çıkar çatışmalı yorum
- Telif / marka ihlali
- Kişisel veri ifşası
- Yanlış işletme / pet politikası bilgisi
- Sahte ruhsat / izin veya yetkisiz faaliyet şüphesi
- Hayvan refahı / güvenlik açısından ciddi olay bildirimi
- Spam / dolandırıcılık / kimliğe bürünme

---

### BÖLÜM 12.3: İNCELEME İLKELERİ
Patili.co şikâyetin niteliğine göre içeriği geçici olarak görünmez yapabilir, karşı taraftan açıklama veya belge isteyebilir, yalnızca ihlal içeren kısmı redakte edebilir veya içeriği koruyabilir. “Her şikâyette otomatik kaldırma” da “hiçbir şikâyeti değerlendirmeme” de uygulanmaz. Kararlar gerekçe ve kayıtla izlenebilir olmalıdır.

### BÖLÜM 12.4: ACİL ASKIYA ALMA
Sahte ruhsat, ciddi fiziksel güvenlik riski, kimlik sahteciliği, sistematik dolandırıcılık veya yetkili makamdan gelen geçerli bildirim gibi durumlarda profil/yorum ön inceleme amacıyla geçici olarak askıya alınabilir.

### BÖLÜM 12.5: KAYIT VE LOGLAMA
Şikâyet tarihi, şikâyetçi, içerik URL/ID, kategori, delil, işletme/kullanıcı cevabı, karar, karar tarihi ve işlemi yapan yetkili loglanır. Saklama süresi amaçla sınırlı ve KVKK’ya uygun belirlenir.
`
  },

  // 12. Ücretli / Vitrin / Premium Listeleme ve Reklam Kuralları
  {
    id: 'reklam-ve-premium-kurallari',
    slug: 'reklam-ve-premium',
    path: '/sozlesmeler/reklam-ve-premium',
    number: '13',
    category: LEGAL_CATEGORIES.POLICIES,
    title: 'Ücretli / Vitrin / Premium Listeleme ve Reklam Kuralları',
    shortTitle: 'Reklam ve Premium Kuralları',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Sponsorlu yerleşim, vitrin profilleri, editoryal bağımsızlık ve reklam şeffaflığı ilkeleri.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile ücretli görünürlük veya profil özelliği satın alan işletmeler.  
**Amaç:** Ücretli görünürlük ile doğrulama/kalite onayını ayırmak ve reklam şeffaflığını korumak.

---

### TEMEL PRENSİPLER
- **Kalite Güvencesi Sayılmaz:** Premium üyelik işletmeye ek görünürlük veya yönetim araçları sağlayabilir; “daha güvenli”, “daha kaliteli”, “Patili.co garantili” olduğu anlamına gelmez.
- **Şeffaf Ayrıştırma:** Sponsorlu sonuçlar kullanıcıya açık biçimde “Sponsorlu” veya “Öne Çıkan” etiketiyle ayrıştırılır.
- **Yanıltıcı Reklam Yasağı:** İşletme reklam metninde yanıltıcı, ispatlanamaz, mutlak sağlık/güvenlik vaadi veya mevzuata aykırı mesleki tanıtım kullanamaz.
- **Veterinerlik Sınırları:** Veteriner profillerinde sponsorlu yerleşim tıbbi tavsiye veya mesleki başarı sıralaması olarak sunulamaz.
- **Yorum Dokunulmazlığı:** Ücretli listeleme, olumsuz ama kurallara uygun kullanıcı yorumlarının otomatik kaldırılmasını sağlamaz. Editoryal bağımsızlık korunur.
- **Ön Bilgilendirme:** Patili.co ücret, dönem, yenileme, iptal ve faturalandırma koşullarını işletmeye sözleşme öncesinde açıklar.
- **Ödeme Aracılığı:** Platform ileride kullanıcıdan işletme adına ödeme almaya başlarsa bu metin tek başına yeterli değildir; e-ticaret ve mesafeli sözleşme akışı ayrıca kurulmalıdır.
`
  },

  // 13. Ziyaretçi ve Üye KVKK Aydınlatma Metni
  {
    id: 'ziyaretci-ve-uye-kvkk',
    slug: 'ziyaretci-ve-uye',
    path: '/kvkk/ziyaretci-ve-uye',
    number: '14',
    category: LEGAL_CATEGORIES.KVKK,
    title: 'Ziyaretçi ve Üye KVKK Aydınlatma Metni',
    shortTitle: 'Ziyaretçi & Üye KVKK',
    version: 'v1.0',
    date: '09.09.2026',
    summary: '6698 sayılı KVKK kapsamında siteyi ziyaret eden ve üye olan bireylerin kişisel verilerinin işlenme amaçları ve hakları.',
    content: `
### VERİ SORUMLUSU VE AMAÇ
**Veri Sorumlusu:** Patili.co Dijital Platformu.  
**Amaç:** 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) m.10 kapsamında kişisel veri işleme faaliyetlerini açıklamak.

---

### BÖLÜM 14.1: İŞLENEBİLECEK VERİ KATEGORİLERİ
- **Kimlik:** Ad-soyad, kullanıcı adı (hesap varsa).
- **İletişim:** E-posta adresi, telefon numarası (veriliyorsa).
- **İşlem Güvenliği:** IP adresi, oturum, cihaz, giriş ve güvenlik logları.
- **Kullanıcı İşlem:** Favoriler, aramalar, filtreler, yorum/puan, şikâyet ve destek kayıtları.
- **Konum:** Kullanıcının açık izni/cihaz ayarıyla paylaştığı yaklaşık veya hassas konum (özellik gerektiriyorsa).
- **Pazarlama:** Ticari ileti izin/ret kayıtları.
- **Çerez / Analitik:** Tercih ve ölçüm verileri (kullanılan teknolojiye göre).
- **Hukuki İşlem:** Başvuru, uyuşmazlık, resmî makam yazışmaları.

---

### BÖLÜM 14.2: İŞLEME AMAÇLARI
- Üyelik ve oturum yönetimi
- Listeleme, arama ve favori özelliklerini sunma
- Yorum ve şikâyet moderasyonu
- Dolandırıcılık ve güvenlik önleme
- Kullanıcı destek süreçleri
- Hukuki yükümlülüklerin yerine getirilmesi ve uyuşmazlık yönetimi
- Hizmet analitiği ve ürün geliştirme (uygun hukuki sebep bulunduğu ölçüde)
- Pazarlama iletişimi (yalnızca ilgili mevzuata uygun izin/istisna kapsamında)

---

### BÖLÜM 14.3: HUKUKİ SEBEPLER
Her veri faaliyeti için somut hukuki sebep veri envanterinde eşleştirilmiştir:
1. Sözleşmenin kurulması veya ifası için gerekli olma (KVKK m.5/2-c)
2. Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi (KVKK m.5/2-ç)
3. Bir hakkın tesisi, kullanılması veya korunması (KVKK m.5/2-e)
4. İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaat (KVKK m.5/2-f)
5. Yalnızca kanunen zorunlu hallerde açık rıza (KVKK m.5/1)

---

### BÖLÜM 14.4: VERİ AKTARIMI
Veriler; barındırma (hosting), e-posta, analitik, güvenlik ve teknik altyapı tedarikçilerine; kullanıcının açık talebiyle iletişim kurulan işletmeye; hukuki zorunluluk halinde adli ve idari makamlara amaçla sınırlı aktarılabilir.

---

### BÖLÜM 14.5: HAKLAR VE BAŞVURU (KVKK m.11)
İlgili kişiler KVKK’nın 11. maddesindeki haklarını (veriye erişme, düzeltme, silinmesini isteme, işlemeye itiraz etme vb.) **kvkk@patili.co** e-posta adresine yazılı bildirimde bulunarak kullanabilirler. Kimlik doğrulaması başvuruyla orantılı biçimde yapılır.

---

### BÖLÜM 14.6: AYDINLATMA VE AÇIK RIZA AYRIMI
Aydınlatma metni “okudum/onaylıyorum” şeklinde açık rıza yerine kullanılamaz. Açık rıza gerektiren işlem varsa (örn. pazarlama iletileri veya hassas konum takibi) ayrı, özgür ve spesifik tercih mekanizması oluşturulur.
`
  },

  // 14. İşletme Yetkilisi ve Hizmet Sağlayıcı KVKK Aydınlatma Metni
  {
    id: 'isletme-yetkilisi-kvkk',
    slug: 'isletme-yetkilisi',
    path: '/kvkk/isletme-yetkilisi',
    number: '15',
    category: LEGAL_CATEGORIES.KVKK,
    title: 'İşletme Yetkilisi ve Hizmet Sağlayıcı KVKK Aydınlatma Metni',
    shortTitle: 'İşletme Yetkilisi KVKK',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'İşletme yetkilileri, pet oteli sahipleri, veterinerler ve bağımsız gezdiricilerin kişisel verilerinin işlenme usulleri.',
    content: `
### VERİ SORUMLUSU VE AMAÇ
**Veri Sorumlusu:** Patili.co  
**Taraflar:** İşletme sahipleri, yetkilileri, yöneticileri ve bireysel hizmet sağlayıcılar.  
**Amaç:** İşletme profili ve sözleşme süreçlerinde işlenen gerçek kişi verilerini açıklamak.

---

### İŞLENEN VERİ KATEGORİLERİ
- Ad-soyad, görev/unvan, kurumsal iletişim bilgileri, imza/onay kayıtları
- İşletmeyle ilişki ve yetkililik belgeleri
- Bireysel sağlayıcıda kimlik ve gerekli mesleki/ruhsat/yetki belgesi bilgileri
- Sözleşme, fatura, ödeme ve destek kayıtları
- Belge doğrulama sonucu ve doğrulama tarihçesi
- Güvenlik, oturum ve log kayıtları

---

### İŞLEME AMAÇLARI
İşletme hesabı oluşturma, yetkiliyi doğrulama, sözleşmenin kurulması/ifası, faturalama, hizmet desteği, sahtecilik önleme, mevzuat uyumu, uyuşmazlık yönetimi ve doğrulama programının yürütülmesidir.

---

### VERİ MİNİMİZASYONU İLKESİ
Bireysel hizmet sağlayıcının kamuya açık profilinde hangi kişisel verilerin gösterileceği veri minimizasyonu ile belirlenir. Örneğin bireysel gezdiricinin ev adresi yerine hizmet bölgesi; özel şahsi cep telefonu yerine tercih edilen iş iletişim kanalı gösterilir.
`
  },

  // 15. Açık Rıza Metni Şablonu
  {
    id: 'acik-riza-metni',
    slug: 'acik-riza-metni',
    path: '/kvkk/acik-riza-metni',
    number: '16',
    category: LEGAL_CATEGORIES.KVKK,
    title: 'Açık Rıza Metni Şablonu ve Prensipleri',
    shortTitle: 'Açık Rıza Metni',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Hassas konum, kişiselleştirilmiş öneriler ve pazarlama profillemesi için rıza standartları ve geri alma hakkı.',
    content: `
### BELGE STATÜSÜ VE AMACI
**Taraflar:** Yalnızca açık rıza gerektiren spesifik veri işlemleri için ilgili kişiler.  
**Amaç:** Aydınlatmadan ayrı ve özgür iradeye dayalı rıza almak.

> **Önemli Hukuki Not:** Bu şablon her işlem için ayrılaştırılmalıdır. “Her türlü verimin her amaçla işlenmesine izin veriyorum” biçiminde genel rıza hukuken geçersizdir.

---

### 1. HASSAS KONUM VERİSİ RIZA METNİ
*“Yakınımdaki işletmeleri, pet taksileri ve acil veterinerleri harita üzerinde gösterebilmek amacıyla cihazımdan hassas konum verimin bu özellik açık olduğu sürece işlenmesine özgür irademle izin veriyorum. İznimi cihaz veya uygulama ayarlarından dilediğim zaman hiçbir kısıtlama olmaksızın geri çekebilirim.”*

---

### 2. KİŞİSELLEŞTİRİLMİŞ PAZARLAMA VE PROFİLLEME RIZA METNİ
*“Kişiselleştirilmiş kampanya, seyahat rotası ve pet önerileri oluşturulması amacıyla kullanım tercihlerimin analiz edilmesine izin veriyorum.”*

*(Bu onay hizmetin zorunlu şartı yapılamaz ve reddetme halinde temel listeleme ve arama hizmeti engellenemez.)*

---

### 3. RIZANIN GERİ ALINMASI
Kullanıcılar vermiş oldukları açık rızayı diledikleri zaman profil ayarları veya **kvkk@patili.co** üzerinden geri çekme hakkına sahiptir. Rızanın geri çekilmesi, geri çekme anından önceki işlemleri hukuka aykırı kılmaz.
`
  },

  // 16. Çerez Politikası ve Tercih Yönetimi Metni
  {
    id: 'cerez-politikasi',
    slug: 'cerez-politikasi',
    path: '/cerez-politikasi',
    number: '17',
    category: LEGAL_CATEGORIES.KVKK,
    title: 'Çerez Politikası ve Tercih Yönetimi Metni',
    shortTitle: 'Çerez Politikası',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'Teknik, işlevsel ve analitik çerez türleri, saklama süreleri, onay mekanizması ve tarayıcı ayarları rehberi.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ziyaretçileri.  
**Amaç:** Çerez ve benzeri teknolojilerin şeffaf, amaçla sınırlı ve uygun izin mekanizmasıyla kullanılmasını sağlamak.

---

### BÖLÜM 17.1: ÇEREZ KATEGORİLERİ TABLOSU

| Kategori | Amaç | Hukuki Yaklaşım |
| :--- | :--- | :--- |
| **Kesinlikle Gerekli Çerezler** | Oturum açma, güvenlik, yük dengeleme, arama filtresi oturumu | Hizmetin sunulması için zorunlu olduğundan meşru menfaat kapsamında değerlendirilir. |
| **İşlevsel Çerezler** | Dil tercihi, görüntüleme biçimi, kullanıcı arayüzü ayarları | Kullanıcı deneyimini artırmak amacıyla isteğe bağlı tutulur. |
| **Analitik Çerezler** | Trafik yoğunluğu ve sayfa performans ölçümü | KVKK Çerez Rehberi çerçevesinde anonimleştirilmiş ölçüm ilkelerine uyulur. |
| **Reklam / Pazarlama Çerezleri** | İlgi alanına dayalı reklam ve sponsorlu içerik gösterimi | Kural olarak açık kullanıcı rızası ile devreye alınır. |

---

### BÖLÜM 17.2: ÇEREZ BANNERI VE TERCİH YÖNETİMİ
- “Kabul Et” kadar görünür bir “Tümünü Reddet” veya kolay seçenek sunulur.
- Önceden işaretlenmiş rıza kutularından kaçınılır.
- Ayrıntılı tercihlere ikinci katmanda her zaman erişilebilir.
- Tercihler sonradan sayfa altındaki bağlantıdan değiştirilebilir.

---

### BÖLÜM 17.3: SAKLAMA SÜRELERİ VE KAYIT
Çerez tercihi, politika sürümü ve tarih-saat ispatlanabilir biçimde yerel olarak saklanır. Süresi dolan geçici oturum çerezleri tarayıcı kapatıldığında silinir.
`
  },

  // 17. Ticari Elektronik İleti Onay Metni
  {
    id: 'ticari-elektronik-ileti',
    slug: 'ticari-elektronik-ileti',
    path: '/ticari-elektronik-ileti',
    number: '18',
    category: LEGAL_CATEGORIES.KVKK,
    title: 'Ticari Elektronik İleti Onay Metni',
    shortTitle: 'Ticari İleti Onayı',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'E-posta, SMS ve bildirim izinleri, İYS (İleti Yönetim Sistemi) uyumu ve ücretsiz ret hakkı kullanımı.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co ile kampanya/duyuru almak isteyen kullanıcı veya işletme yetkilisi.  
**Amaç:** 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun uyarınca ticari elektronik ileti izinlerini ayrı ve ispatlanabilir şekilde almak.

---

### BÖLÜM 18.1: ÖRNEK ONAY METNİ
*“Patili.co kampanya, yeni evcil hayvan dostu otel/mekan duyuruları, indirimler ve tanıtımlara ilişkin ticari elektronik iletilerin seçtiğim iletişim kanalları (e-posta / SMS) üzerinden tarafıma gönderilmesini kabul ediyorum. İznimi her iletide yer alan bağlantıyı kullanarak hiçbir gerekçe göstermeksizin dilediğim an geri çekebilirim.”*

---

### BÖLÜM 18.2: UYGULAMA İLKELERİ
- Ticari ileti onayı, üyelik sözleşmesinin zorunlu koşulu olarak dayatılamaz.
- Tercihler kanal bazlı (e-posta / SMS / arama) ayrı ayrı tutulur.
- Onay ve ret tarihçesi ile IP bilgileri ispatlanabilir biçimde saklanır.
- İYS (İleti Yönetim Sistemi) kapsamındaki bildirim yükümlülükleri uygulanır.
- İşlemsel hizmet mesajları (şifre sıfırlama, güvenlik uyarısı, rezervasyon teyidi) ile pazarlama mesajları kesin olarak ayrıştırılır.
`
  },

  // 18. Fikri Mülkiyet, Marka, Fotoğraf ve İçerik Kullanım Koşulları
  {
    id: 'fikri-mulkiyet-ve-telif',
    slug: 'fikri-mulkiyet-ve-telif',
    path: '/fikri-mulkiyet-ve-telif',
    number: '19',
    category: LEGAL_CATEGORIES.POLICIES,
    title: 'Fikri Mülkiyet, Marka, Fotoğraf ve İçerik Kullanım Koşulları',
    shortTitle: 'Fikri Mülkiyet & Telif',
    version: 'v1.0',
    date: '09.09.2026',
    summary: 'İşletme logoları, fotoğraflar, özgün rehber yazıları, marka koruması ve üçüncü taraf fikri hak kuralları.',
    content: `
### TARAFLAR VE AMAÇ
**Taraflar:** Patili.co, platformda listelenen işletmeler ve ziyaretçiler.  
**Amaç:** Profil görselleri, logo, metin ve marka unsurlarının hukuka uygun kullanımını güvence altına almak.

---

### TEMEL ŞARTLAR
- **Yetki Beyanı:** İşletme, Platforma yüklediği logo, fotoğraf, menü ve tanıtım metinleri üzerinde gerekli telif ve kullanım hakkına sahip olduğunu beyan eder.
- **Lisans Kapsamı:** İşletme, Patili.co’ya listeleme ve tanıtım amacıyla münhasır olmayan, bedelsiz, teknik çoğaltma ve formatlama hakkı tanır.
- **Sözleşme Sona Ermesi:** İşletme sözleşmesi sona erdiğinde kamu yararı veya hukuki saklama gereği bulunmayan ticari içerikler makul sürede kaldırılır; kullanıcı yorumları ayrı hukuki temele göre değerlendirilebilir.
- **Marka Bağımsızlığı:** Patili.co, üçüncü taraf markasını işletmeyle ekonomik ortaklık varmış gibi kullanamaz; sponsorlu ilişkiler açıkça belirtilir.
- **Gizlilik ve Redaksiyon:** Kullanıcı veya işletme görsellerinde insan yüzü, araç plakası veya hassas kişisel veri bulunması halinde Patili.co gerektiğinde bulanıklaştırma veya kaldırma hakkına sahiptir.
`
  }
];

export const getLegalDocBySlug = (slug) => {
  return LEGAL_DOCUMENTS.find(doc => doc.slug === slug || doc.id === slug || doc.path === slug);
};
