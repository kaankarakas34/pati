// mockData.js - Initial Database for patiyleseyahat.com (Revize 1)

export const initialHotels = [
  {
    "id": "hotel-1",
    "name": "The Marmara Bodrum",
    "city": "Muğla",
    "district": "Bodrum",
    "type": "Butik Otel",
    "allowedPets": [
      "dog",
      "cat"
    ],
    "suitability": 3,
    "weightLimit": 15,
    "extraFee": "no",
    "features": [
      "Bahçesi bulunan",
      "Mama ve su kabı sağlayan",
      "Evcil hayvan yatağı sağlayan",
      "Pet menüsü bulunan",
      "Veteriner desteği bulunan",
      "Evcil hayvanların restoran veya kahvaltı alanına girmesine izin veren"
    ],
    "quizTags": [
      "birlikte",
      "kopek",
      "kedi",
      "kucuk-irk",
      "ucretsiz-pet",
      "bahceli",
      "pet-menusu",
      "restoran-izni",
      "odada-yalniz"
    ],
    "baseTrustScore": 9.8,
    "verified": false,
    "lastVerified": "2026-08-15",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/the-marmara-bodrum-1.jpg",
    "description": "Bodrum Kalesi manzarasına hakim, tepe konumda bulunan The Marmara Bodrum, evcil hayvanların sadece 'kabul edildiği' değil, özel olarak ağırlandığı bir tesistir. Editör ekibimizin bizzat ziyaret ederek doğruladığı bu tesiste, dostunuzla birlikte lüks ve konforlu bir tatil geçirebilirsiniz. Bahçe katı odalarında evcil hayvanınızın rahatça çimlerde vakit geçirmesi sağlanır.",
    "whySelected": "Ege Bölgesi'nde evcil hayvanlara özel gurme menü (Pet Menü) sunan, odalarda özel tasarım yatak ve mama kabı bulunduran ve restoranın açık alanında evcil hayvanınızla birlikte oturmanıza izin veren ender 5 yıldızlı butik otellerden biridir.",
    "suitableFor": [
      "Bahçeli odada kalmak isteyen kedi ve küçük-orta ırk köpek sahipleri",
      "Dostu için gurme beslenme ve özel yatak arayanlar",
      "Tesis ortak alanlarında köpeğini tasmalı olarak gezdirmek isteyenler"
    ],
    "notSuitableFor": [
      "15 kg üzeri büyük ırk köpek sahipleri (Tesis politikası gereği 15 kg üstü kabul edilmemektedir)",
      "Kafessiz kuş veya kemirgen sahipleri (Yalnızca kedi ve köpek kabul edilmektedir)"
    ],
    "disallowedPets": [
      "Kuş",
      "Tavşan",
      "Sürüngenler"
    ],
    "breedRestrictions": "Tehlike arz eden ırklar (Pitbull, Dogo Argentino vb.) yerel kanunlar gereği kabul edilememektedir.",
    "maxPetsPerRoom": 2,
    "depositInfo": "Depozito talep edilmemektedir. Ancak odada oluşabilecek fiziksel hasarlar misafirin sorumluluğundadır.",
    "requiredDocs": "Girişte aşı karnesi, kuduz aşısı kaydı ve parazit aşılarının güncel olduğunu gösteren veteriner pasaportunun ibrazı zorunludur.",
    "canLeaveInRoomAlone": true,
    "rules": {
      "pool": "Havuz alanına ve havuz suyuna girmesi hijyen kuralları gereği yasaktır.",
      "beach": "Plaj alanında özel ayrılmış çim bölgede tasmalı olarak bulunabilir.",
      "restaurant": "Restoranın dış teras alanında, tasmalı olmak kaydıyla kahvaltı ve akşam yemeklerinde sahibine eşlik edebilir."
    },
    "veterinarySupport": "Anlaşmalı 7/24 nöbetçi veteriner kliniği mevcuttur. Olası acil durumlarda resepsiyon üzerinden 5 dakika içinde transfer sağlanır.",
    "phone": "+90 252 313 8130",
    "email": "bodrum@themarmarahotels.com",
    "website": "https://www.themarmarahotels.com/the-marmara-bodrum.aspx",
    "editorNote": "Özellikle bahçe katı delüks odaları tercih etmenizi öneririz. Bu odalar doğrudan ortak çim alana açılmakta ve köpeklerin sabah yürüyüşünü son derece kolaylaştırmaktadır. Girişte sunulan 'Pati Karşılama Paketi' içerisindeki organik ödül mamaları editörümüzün köpeği tarafından çok beğenildi.",
    "infoSource": "Otel Yönetimi & Yerinde Editör Denetimi",
    "faq": [
      {
        "q": "The Marmara Bodrum'da büyük ırk köpekler kalabilir mi?",
        "a": "Maalesef hayır. Otelde evcil hayvanlar için 15 kg ağırlık sınırı uygulanmaktadır. 15 kg üzerindeki köpekler kabul edilmemektedir."
      },
      {
        "q": "Evcil hayvan için ek bir konaklama ücreti alınıyor mu?",
        "a": "Hayır, The Marmara Bodrum'da doğrulanmış politikaya göre evcil hayvan konaklaması tamamen ücretsizdir."
      },
      {
        "q": "Köpeğimi odada yalnız bırakabilir miyim?",
        "a": "Evet, köpeğinizin oda içerisinde yalnız kalmasına izin verilmektedir. Ancak otel yönetimi, temizlik görevlilerinin odaya girdiği esnada köpeğin strese girmemesi için kapıya özel 'İçeride Pati Var' asacağının takılmasını rica etmektedir."
      }
    ],
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/the-marmara-bodrum-1.jpg"
    ]
  },
  {
    "id": "hotel-2",
    "name": "Kapadokya Cave Suites",
    "city": "Nevşehir",
    "district": "Göreme",
    "type": "Butik Otel",
    "allowedPets": [
      "dog",
      "cat",
      "bird"
    ],
    "suitability": 2,
    "weightLimit": 0,
    "extraFee": "Gecelik 250 TL",
    "features": [
      "Bahçesi bulunan",
      "Mama ve su kabı sağlayan",
      "Kilo sınırı olmayan",
      "Kuş kabul eden"
    ],
    "quizTags": [
      "birlikte",
      "kopek",
      "kedi",
      "kus",
      "buyuk-irk",
      "kucuk-irk",
      "bahceli",
      "ek-ucretli",
      "oda-servisi"
    ],
    "baseTrustScore": 9.1,
    "verified": false,
    "lastVerified": "2026-07-28",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/kapadokya-cave-suites-1.jpg",
    "description": "Kapadokya'nın kalbi Göreme'de, geleneksel mağara odalarında otantik bir konaklama sunan Kapadokya Cave Suites, evcil hayvan dostu politikasıyla öne çıkıyor. Kilo sınırı olmaksızın köpek, kedi ve kafesinde olmak kaydıyla kuş kabul eden tesiste, geniş taş avlu ve bahçe alanları patili dostlarınızın dolaşması için idealdir.",
    "whySelected": "Kapadokya bölgesinde mağara konseptli oteller arasında kilo sınırı uygulamayan ve büyük ırk köpekleri de kabul eden nadir işletmelerdendir. Ayrıca kuş severler için de uygundur.",
    "suitableFor": [
      "Büyük ırk köpek sahipleri (Golden Retriever, Labrador, Pointer vb. sınırı yoktur)",
      "Kafes kuşlarıyla birlikte seyahat eden doğaseverler",
      "Tarihi ve taş mimaride dostuyla vakit geçirmek isteyenler"
    ],
    "notSuitableFor": [
      "Mağara odaların nemli havasına karşı solunum hassasiyeti olan evcil hayvanlar",
      "Otelde ek ücret ödemek istemeyen bütçe odaklı seyahat edenler"
    ],
    "disallowedPets": [
      "Sürüngenler",
      "Tavşan ve kemirgenler (Kablolara zarar verme riski nedeniyle oda içinde serbest bırakılamaz)"
    ],
    "breedRestrictions": "Agresif tavır sergilemeyen tüm ırklar kabul edilir.",
    "maxPetsPerRoom": 1,
    "depositInfo": "Girişte hasar durumunda iade edilmek üzere 1.000 TL depozito alınır veya kredi kartı provizyonu bloke edilir.",
    "requiredDocs": "Güncel aşı karnesi zorunludur. Özellikle iç-dış parazit aşılarının son 3 ay içinde yapılmış olması istenir.",
    "canLeaveInRoomAlone": false,
    "rules": {
      "pool": "Tesiste havuz bulunmamaktadır.",
      "beach": "Denize kıyısı bulunmamaktadır.",
      "restaurant": "Kahvaltı salonunun kapalı alanına evcil hayvan kabul edilmez ancak taş avludaki açık kahvaltı masalarında yanınızda bulunabilir."
    },
    "veterinarySupport": "Göreme merkezde bulunan anlaşmalı klinik ile acil veteriner desteği sağlanır.",
    "phone": "+90 384 271 2800",
    "email": "info@kapadokyacavesuites.com",
    "website": "https://www.kapadokyacavesuites.com",
    "editorNote": "Kaya odalar doğal olarak izole ve sessiz olduğu için dış seslerden korkan köpekler burada çok rahat ediyor. Kilo sınırının olmaması harika bir avantaj. Ancak otel içerisinde dik merdivenler bulunduğundan eklem rahatsızlığı olan yaşlı köpekler için düz ayak olan avlu odalarını talep etmeniz önem taşır.",
    "infoSource": "İşletme Beyanı",
    "faq": [
      {
        "q": "Kapadokya Cave Suites'te köpekler için kilo limiti var mı?",
        "a": "Hayır. Otelde herhangi bir kilo veya boy sınırı bulunmamaktadır. Büyük ırk köpekler de konaklayabilir."
      },
      {
        "q": "Evcil hayvan ücreti nedir?",
        "a": "Evcil hayvanlar için temizlik ve ekstra dezenfeksiyon bedeli olarak gecelik 250 TL ek ücret alınmaktadır."
      }
    ],
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/kapadokya-cave-suites-1.jpg"
    ]
  },
  {
    "id": "hotel-3",
    "name": "Kabak Dome Suites & Glamping",
    "city": "Muğla",
    "district": "Fethiye",
    "type": "Glamping tesisi",
    "allowedPets": [
      "dog",
      "cat",
      "other"
    ],
    "suitability": 3,
    "weightLimit": 0,
    "extraFee": "no",
    "features": [
      "Bahçesi bulunan",
      "Doğa içinde",
      "Kilo sınırı olmayan",
      "Birden fazla evcil hayvan kabul eden",
      "Ek ücret almayan",
      "Mama ve su kabı sağlayan"
    ],
    "quizTags": [
      "birlikte",
      "kopek",
      "kedi",
      "buyuk-irk",
      "kucuk-irk",
      "ucretsiz-pet",
      "bahceli",
      "doga-icinde",
      "coklu-pet"
    ],
    "baseTrustScore": 9.7,
    "verified": false,
    "lastVerified": "2026-08-01",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/kabak-dome-suites-glamping-1.jpg",
    "description": "Fethiye'nin meşhur Kabak Koyu'nda doğayla baş başa lüks kubbe çadırlarda (glamping) hizmet veren tesis, adeta patili dostlarımızın cennetidir. Etrafı çam ormanlarıyla çevrili olan ve ek ücret almayan Kabak Dome, birden fazla evcil hayvan kabul etmesi ve sınırsız özgürlük alanıyla öne çıkıyor.",
    "whySelected": "Glamping kategorisinde hiçbir kilo sınırı koymadan, oda başı 3 hayvana kadar izin veren ve tamamen ek ücretsiz olan ekolojik bir yaklaşımı benimsediği için listemizin gözdesidir.",
    "suitableFor": [
      "Doğa yürüyüşü yapmayı seven enerjik köpekler ve sahipleri",
      "Aynı anda 2 veya daha fazla evcil hayvanla seyahat edenler",
      "Glamping lüksünü doğada yaşamak isteyen kedi sahipleri"
    ],
    "notSuitableFor": [
      "Açık arazide serbest dolaşan yerel hayvanlardan (köy köpekleri, keçiler) rahatsız olan veya avlanma içgüdüsü yüksek olan evcil dostlar",
      "Dik yamaçta kurulu olduğu için sürekli tırmanma gerektiren yollardan rahatsız olacak yaşlı hayvanlar"
    ],
    "disallowedPets": [
      "Yok. Tüm evcil hayvanlar (hamster, tavşan dahil) kendi kafes ve güvenlik önlemleri alınarak kalabilir."
    ],
    "breedRestrictions": "Hiçbir ırk kısıtlaması bulunmamaktadır. Ancak çevreye aşırı havlama veya saldırganlık gösteren hayvanlar için tasmalı gezinme şartı katıdır.",
    "maxPetsPerRoom": 3,
    "depositInfo": "Depozito alınmamaktadır.",
    "requiredDocs": "Temel aşı kartı beyanı yeterlidir.",
    "canLeaveInRoomAlone": false,
    "rules": {
      "pool": "Ortak jakuzi/havuz alanına evcil hayvanların girmesi yasaktır.",
      "beach": "Kabak koyu plajına inişte köpekler tamamen serbesttir ve denize girebilir.",
      "restaurant": "Açık hava restoran alanında evcil hayvanınızla dilediğiniz gibi oturabilirsiniz, hiçbir kısıtlama yoktur."
    },
    "veterinarySupport": "Fethiye merkezde 24 saat açık veteriner kliniği ile irtibat halindedir (Yaklaşık 35 km mesafede).",
    "phone": "+90 252 642 1122",
    "email": "contact@kabakdome.com",
    "website": "https://www.kabakdome.com",
    "editorNote": "Kabak Koyu yolu biraz virajlı ve sarsıcı olabilir, arabada mide bulantısı yaşayan patili dostlarınız için yola çıkmadan önce veterinerinizden bulantı önleyici tablet almanızı öneririz. Kubbe çadırların içi oldukça geniştir. Akşamları serinleyen havada çadır önü terasında dostunuzla yıldızları izlemek paha biçilemez.",
    "infoSource": "Yerinde Editör Denetimi",
    "faq": [
      {
        "q": "Kabak Dome'da aynı odada 2 köpek kalabilir miyiz?",
        "a": "Evet, bu otelde oda başına en fazla 3 evcil hayvana kadar izin verilmektedir ve ek ücret talep edilmez."
      },
      {
        "q": "Köpeğimi odada yalnız bırakıp Kabak koyuna inebilir miyim?",
        "a": "Kubbe çadırlarda (glamping) ses yalıtımı çadır bezi nedeniyle az olduğundan ve dostunuzun yalnız kaldığında havlayarak çevreyi rahatsız etme riski olduğundan odada yalnız bırakılmasına izin verilmemektedir."
      }
    ],
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/kabak-dome-suites-glamping-1.jpg"
    ]
  },
  {
    "id": "hotel-4",
    "name": "Club Marvy",
    "city": "İzmir",
    "district": "Menderes",
    "type": "Tatil köyü",
    "allowedPets": [
      "dog"
    ],
    "suitability": 3,
    "weightLimit": 20,
    "extraFee": "Gecelik 450 TL",
    "features": [
      "Pet plajı bulunan",
      "Evcil hayvan yatağı sağlayan",
      "Mama ve su kabı sağlayan",
      "Bahçesi bulunan",
      "Denize sıfır",
      "Veteriner desteği bulunan"
    ],
    "quizTags": [
      "birlikte",
      "kopek",
      "kucuk-irk",
      "ek-ucretli",
      "denize-sifir",
      "pet-plaji",
      "bahceli"
    ],
    "baseTrustScore": 9.6,
    "verified": false,
    "lastVerified": "2026-08-10",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/club-marvy-1.jpg",
    "description": "Özdere'de konumlanan lüks Club Marvy, Türkiye'de 'Pet Plajı' konseptine sahip az sayıdaki seçkin tatil köyünden biridir. Doğanın kalbinde konumlanan bu modern tesiste, köpek misafirler için özel ayrılmış koyda patili dostunuzla beraber Akdeniz sularının keyfini çıkarabilirsiniz.",
    "whySelected": "Türkiye genelinde 5 yıldızlı ultra her şey dahil tatil köyleri arasında, köpeklere özel tasmayla girilebilen kum plaj sunan ve özel yürüyüş parkurları hazırlayan öncü tesislerden biridir.",
    "suitableFor": [
      "Denizde yüzmeyi çok seven ve plajda sahibiyle güneşlenmek isteyen köpekler",
      "Lüks tatil köyü konforundan ödün vermeden patili dostuyla seyahat etmek isteyenler"
    ],
    "notSuitableFor": [
      "Kedi sahipleri (Otel sadece köpek misafirleri kabul etmektedir)",
      "20 kg'dan büyük ırk köpek sahipleri"
    ],
    "disallowedPets": [
      "Kedi",
      "Kuş",
      "Kemirgenler",
      "Tüm diğer hayvanlar (Yalnızca köpek kabul edilir)"
    ],
    "breedRestrictions": "Türk kanunlarına göre yasaklı ırklar dışındaki tüm uysal köpekler kabul edilmektedir.",
    "maxPetsPerRoom": 1,
    "depositInfo": "Girişte hasar taahhütnamesi imzalatılır, depozito alınmaz.",
    "requiredDocs": "Karne, aşı kartı, kuduz aşısının son 1 yıl içinde yapılmış olması ve mikroçip kaydı.",
    "canLeaveInRoomAlone": false,
    "rules": {
      "pool": "Ortak havuzlar ve Aqua Park alanına köpeklerin girmesi kesinlikle yasaktır.",
      "beach": "Tesiste köpeklerin denize girmesi için özel tabelalarla işaretlenmiş 'Marvy Pet Beach' mevcuttur. Diğer ana plajlara köpek sokulamaz.",
      "restaurant": "Ana restoran kapalı alanına kabul edilmez. Açık büfe dış terasında özel ayrılmış masalarda bulunabilir."
    },
    "veterinarySupport": "Menderes ilçesindeki tam donanımlı hayvan hastanesi ile 24 saat acil ambulans anlaşması bulunmaktadır.",
    "phone": "+90 232 797 1000",
    "email": "marvy@clubmarvy.com",
    "website": "https://www.clubmarvy.com",
    "editorNote": "Club Marvy'nin pet plajı muazzam temizlikte. Plajda köpekler için tatlı su duş alanı bulunması, deniz tuzuyla cildin tahriş olmasını engellemek için mükemmel bir detay. Gecelik 450 TL ücret yüksek görünse de sunulan plaj imkanı ve odadaki ortopedik yatak hizmeti bu bedeli karşılıyor.",
    "infoSource": "Resmi Web Sitesi ve Yönetim Doğrulaması",
    "faq": [
      {
        "q": "Club Marvy'de köpekler plaja girebilir mi?",
        "a": "Evet. Otelde sadece köpeklerin girmesi ve denizde yüzmesi için ayrılmış özel 'Marvy Pet Beach' adlı plaj bulunmaktadır."
      },
      {
        "q": "Otelde kedi kabul ediliyor mu?",
        "a": "Hayır. Club Marvy sadece köpek misafirleri kabul etmektedir; kedi, kuş ve diğer hayvanlar tesise kabul edilmemektedir."
      }
    ],
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/club-marvy-1.jpg"
    ]
  },
  {
    "id": "hotel-5",
    "name": "Kozak Bungalov",
    "city": "Bursa",
    "district": "İznik",
    "type": "Bungalov",
    "allowedPets": [
      "dog",
      "cat",
      "bird",
      "other"
    ],
    "suitability": 1,
    "weightLimit": 10,
    "extraFee": "no",
    "features": [
      "Bahçesi bulunan",
      "Doğa içinde",
      "Ek ücret almayan"
    ],
    "quizTags": [
      "birlikte",
      "kopek",
      "kedi",
      "kus",
      "kucuk-irk",
      "ucretsiz-pet",
      "bahceli",
      "doga-icinde"
    ],
    "baseTrustScore": 8.9,
    "verified": false,
    "lastVerified": "2026-06-15",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/kozak-bungalov-1.jpg",
    "description": "İznik Gölü kıyısına yakın, zeytin ağaçları arasında yer alan Kozak Bungalov, sakin ve mütevazı bir tatil arayan patili dostu ailelere kapılarını açıyor. Bütçe dostu bungalov odaları ve yeşil bahçesi ile evcil hayvanlarınız için huzurlu bir dinlenme köşesidir.",
    "whySelected": "İznik bölgesinde ek ücret talep etmeyen, temel düzeyde evcil hayvan kabulü (Pet-Allowed) sağlayan güvenilir ve temiz bir doğa işletmesidir.",
    "suitableFor": [
      "Sakin ve doğa içinde küçük ırk köpek veya kedisiyle kafa dinlemek isteyenler",
      "Bölgede bütçe dostu bungalov konaklaması arayanlar"
    ],
    "notSuitableFor": [
      "Ortopedik yatak, özel mama kapları veya pet menüsü gibi yüksek beklentileri olanlar",
      "10 kg'dan ağır büyük ırk köpekler"
    ],
    "disallowedPets": [
      "Yok (10 kg sınırına uyulduğu takdirde hamster, papağan vb. kalabilir)"
    ],
    "breedRestrictions": "Yok.",
    "maxPetsPerRoom": 1,
    "depositInfo": "Alınmıyor.",
    "requiredDocs": "Genel aşı takvimi kontrolü için karne ibrazı istenir.",
    "canLeaveInRoomAlone": true,
    "rules": {
      "pool": "Havuz bulunmamaktadır.",
      "beach": "Göl kıyısı halka açık alanlarda tasmalı gezdirilebilir.",
      "restaurant": "Kahvaltı alanında tasmalı olarak masanın yanında bulunabilir."
    },
    "veterinarySupport": "İznik ilçe merkezindeki veteriner hekimlerle iletişim bilgileri odalarda sunulmaktadır.",
    "phone": "+90 224 757 4545",
    "email": "info@kozakiznik.com",
    "website": "https://www.kozakbungaloviznik.com",
    "editorNote": "Bu tesis 'Evcil Hayvan Kabul Ediyor' seviyesindedir. Yani mama kabı, yatak veya pet havuzu gibi ek lüks hizmetler sunmazlar. Ancak herhangi bir ek ücret almamaları ve sakin bahçesiyle evcil hayvanların kendi ekipmanlarıyla rahatça konaklamasına izin vermeleri oldukça olumludur.",
    "infoSource": "İşletme İletişim Hattı",
    "faq": [
      {
        "q": "Kozak Bungalov'da köpek yatağı veriliyor mu?",
        "a": "Hayır. Tesisimiz evcil hayvan kabul etmektedir ancak yatak, mama kabı gibi ekipmanları misafirlerimizin kendi yanlarında getirmesi gerekmektedir."
      },
      {
        "q": "Kozak Bungalov İznik gölüne yakın mı?",
        "a": "Evet, tesis İznik Gölü'ne yaklaşık 5 dakikalık yürüyüş mesafesinde konumlanmaktadır."
      }
    ],
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/kozak-bungalov-1.jpg"
    ]
  }
];

export const initialBoardings = [
  {
    "id": "boarding-1",
    "name": "Pati Sarayı Kedi Oteli",
    "category": "Kedi otelleri",
    "city": "İstanbul",
    "district": "Kadıköy",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/pati-sarayi-kedi-oteli-1.jpg",
    "allowedPets": [
      "cat"
    ],
    "features": [
      "Bireysel oda",
      "Canlı kamera",
      "7/24 personel",
      "Günlük fotoğraf ve video",
      "Veteriner desteği",
      "Özel mama uygulaması",
      "İlaç uygulama"
    ],
    "quizTags": [
      "birak",
      "kedi",
      "cam-oda",
      "724-gozetim",
      "canli-yayin",
      "ilac-takip"
    ],
    "baseTrustScore": 9.7,
    "verified": true,
    "lastVerified": "2026-08-20",
    "price": "Günlük 400 TL",
    "description": "Kadıköy'de tamamen kedilerin konforu ve psikolojisi düşünülerek tasarlanmış lüks bir butik otel. Kafes sisteminin kesinlikle kullanılmadığı tesiste, her kedinin tırmanma alanları, tırmalama tahtaları ve oyuncaklarla dolu kendi özel şeffaf odası bulunur. 7/24 görevli personel ve canlı HD kameralarla kedinizi her an cep telefonunuzdan izleyebilirsiniz.",
    "boardingModel": "Bireysel Cam Odalar (Her kediye 3 metrekarelik özel tırmanma alanlı alan)",
    "dailyProgram": "Günde 3 kez mama kontrolü, taze su değişimi, günde 2 kez yarımşar saatlik gözetimli bireysel oyun odası aktivitesi, tüylerin taranması.",
    "accreditedVet": "Kadıköy VetArt 24 Saat Açık Hayvan Hastanesi ile anlaşmalı",
    "phone": "+90 216 444 7284",
    "email": "iletisim@patisarayikedi.com",
    "website": "https://www.patisarayikedi.com",
    "cameraSupport": true,
    "requiredDocs": "Karma aşı (son 1 yıl içinde), Lösemi aşısı, iç-dış parazit uygulamasının üzerinden en fazla 2 ay geçmiş olması ve aşı karnesi teslimi.",
    "neuteringRequired": "6 aylıktan büyük kedilerde kısırlaştırma şartı aranmaktadır. Kısırlaştırılmamış kediler diğer kedilerle ortak oyun alanlarına çıkartılamaz.",
    "aggressionPolicy": "Sadece kendi odasında kalacağı için diğer kedilerle temas etmez. Agresif kediler için ilaç takibi ve sakinleştirici oyunlar hekim gözetiminde uygulanır.",
    "infoSource": "Yerinde Editör Denetimi",
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/pati-sarayi-kedi-oteli-1.jpg"
    ]
  },
  {
    "id": "boarding-2",
    "name": "Lolipop Köpek Akademisi ve Oteli",
    "category": "Köpek otelleri",
    "city": "İstanbul",
    "district": "Göktürk",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/lolipop-kopek-akademisi-ve-oteli-1.jpg",
    "allowedPets": [
      "dog"
    ],
    "features": [
      "Kafessiz konaklama",
      "Büyük ırk kabulü",
      "7/24 personel",
      "Günlük fotoğraf ve video",
      "Veteriner desteği",
      "Açık bahçe",
      "Koşu alanı",
      "Günlük gezdirme",
      "Transfer hizmeti"
    ],
    "quizTags": [
      "birak",
      "kopek",
      "kafessiz",
      "724-gozetim",
      "bahceli-oyun",
      "buyuk-irk",
      "transfer-var"
    ],
    "baseTrustScore": 9.5,
    "verified": true,
    "lastVerified": "2026-08-18",
    "price": "Günlük 650 TL",
    "description": "Göktürk ormanının sınırında, 2 dönüm yeşil arazi üzerine kurulu olan Lolipop Köpek Oteli, köpeğinize adeta bir tatil kampı deneyimi sunar. Kafeslerin bulunmadığı tesiste, sosyal köpekler gün boyu uzman gözetmenler eşliğinde bahçede koşup oynar. Gece ise ısıtmalı/klimalı kapalı konaklama alanlarında kendilerine özel ortopedik yataklarda uyurlar.",
    "boardingModel": "Grup halinde serbest konaklama veya sosyal olmayan köpekler için özel bölmeler.",
    "dailyProgram": "Sabah 08:00 uyanma, bahçeye çıkış ve serbest oyun, 10:00 sabah maması ve dinlenme, 14:00 temel itaat tazeleyici oyunlar ve orman yürüyüşü, 17:00 akşam maması, 20:00 gece tuvalet çıkışı ve uyku.",
    "accreditedVet": "Göktürk PetHospital (5 dakika mesafede)",
    "phone": "+90 212 322 9090",
    "email": "gokturk@lolipoppet.com",
    "website": "https://www.lolipoppet.com",
    "cameraSupport": false,
    "requiredDocs": "Karma, Kuduz, Bronchine (Barınak Öksürüğü) aşıları güncel olmalı. Mikroçip zorunludur.",
    "neuteringRequired": "Erkek köpeklerde kısırlaştırma şartı aranır. Dişi köpeklerin kızgınlık döneminde olması durumunda kabul edilemezler.",
    "aggressionPolicy": "Girişte 2 saatlik 'sosyalleşme testi' uygulanır. Agresif veya aşırı korkak köpekler otel bölümüne kabul edilmez, bireysel eğitime yönlendirilir.",
    "infoSource": "İşletme Beyanı & Editör Gözlemi",
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/lolipop-kopek-akademisi-ve-oteli-1.jpg"
    ]
  },
  {
    "id": "boarding-3",
    "name": "Happy Paws Ev Tipi Bakım Merkezi",
    "category": "Ev tipi bakım merkezleri",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/happy-paws-ev-tipi-bakim-merkezi-1.jpg",
    "allowedPets": [
      "dog",
      "cat"
    ],
    "features": [
      "Kafessiz konaklama",
      "7/24 personel",
      "Günlük fotoğraf ve video",
      "Veteriner desteği",
      "Özel mama uygulaması",
      "İlaç uygulama"
    ],
    "quizTags": [
      "birak",
      "kedi",
      "kopek",
      "kafessiz",
      "724-gozetim",
      "ev-ortami"
    ],
    "baseTrustScore": 9.3,
    "verified": true,
    "lastVerified": "2026-07-15",
    "price": "Günlük 350 TL",
    "description": "Büyük, bahçeli bir villada aile sıcaklığında ev tipi bakım hizmeti veren Happy Paws, kafes ve benzeri sınırlamalardan tamamen uzaktır. Ev ortamına alışkın, koltukta uyumayı seven, sürekli insan ilgisi arayan hassas kedi ve köpekler için idealdir. Ev sahibi kendisi de profesyonel hayvan davranış uzmanıdır.",
    "boardingModel": "Ev ortamında serbest dolaşım (Aynı anda en fazla 3 misafir kabul edilir).",
    "dailyProgram": "Ev rutinine uygun beslenme, günde 3 kez Çankaya parklarında yürüyüş, akşam koltukta tarama ve sevgi saati.",
    "accreditedVet": "Ankara Çankaya Veteriner Polikliniği",
    "phone": "+90 532 999 8877",
    "email": "happypawsankara@gmail.com",
    "website": "https://www.instagram.com/happypawsankara",
    "cameraSupport": false,
    "requiredDocs": "Aşı karnesi fotoğrafı ve parazit damlalarının güncelliği.",
    "neuteringRequired": "Ev ortamında karma kaldıkları için kısırlaştırma zorunludur.",
    "aggressionPolicy": "Diğer evcil hayvanlara veya insanlara karşı en ufak agresyon gösteren canlılar kabul edilmez.",
    "infoSource": "Editör Aile Referansları",
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/happy-paws-ev-tipi-bakim-merkezi-1.jpg"
    ]
  },
  {
    "id": "boarding-4",
    "name": "VetLine Karma Pet Otel & Gündüz Bakım",
    "category": "Kedi ve köpek kabul eden karma tesisler",
    "city": "İzmir",
    "district": "Karşıyaka",
    "imageUrl": "http://cdn.patiyleseyahat.com/oteller/vetline-karma-pet-otel-gunduz-bakim-1.jpg",
    "allowedPets": [
      "dog",
      "cat"
    ],
    "features": [
      "Bireysel oda",
      "7/24 personel",
      "Günlük fotoğraf ve video",
      "Veteriner desteği",
      "Transfer hizmeti",
      "Açık bahçe",
      "Günlük gezdirme"
    ],
    "quizTags": [
      "birak",
      "kedi",
      "kopek",
      "724-gozetim",
      "vet-gozetim",
      "ilac-takip",
      "transfer-var"
    ],
    "baseTrustScore": 9.4,
    "verified": true,
    "lastVerified": "2026-05-10",
    "price": "Günlük 500 TL",
    "description": "Bünyesindeki veteriner kliniği ile entegre çalışan VetLine Pet Oteli, özellikle tıbbi takibe ihtiyacı olan, düzenli ilaç alması gereken veya yaşlı patili dostlar için en güvenli adrestir. Kediler ve köpekler için tamamen ayrı katlarda, ses yalıtımlı odalar tasarlanmıştır.",
    "boardingModel": "Veteriner kliniğine bağlı ses yalıtımlı bireysel bölmeler and bahçe oyun alanları.",
    "dailyProgram": "Veteriner hekim kontrolünde sabah viziti, ilaç ve tedavi uygulamaları, günde 2 kez bireysel egzersiz saati.",
    "accreditedVet": "VetLine Veteriner Kliniği (Bünyesinde)",
    "phone": "+90 232 369 1234",
    "email": "otel@vetlineizmir.com",
    "website": "https://www.vetlineizmir.com",
    "cameraSupport": false,
    "requiredDocs": "Tüm aşıların eksiksiz olması şarttır. Kronik hastalık raporları girişte teslim alınır.",
    "neuteringRequired": "Zorunlu değil (Bireysel odalarda tecrit sağlandığı için kısır olmayan hayvanlar da kabul edilir).",
    "aggressionPolicy": "Veteriner teknisyenleri gözetiminde bireysel bakım uygulandığı için agresif hayvanlar da güvenle kabul edilip tıbbi bakımı sürdürülür.",
    "infoSource": "Klinik Yönetimi Doğrulaması",
    "galleryImages": [
      "http://cdn.patiyleseyahat.com/oteller/vetline-karma-pet-otel-gunduz-bakim-1.jpg"
    ]
  }
];

export const initialGuides = [
  {
    id: "guide-1",
    slug: "kopeginizle-bodrum-tatili-rehberi",
    title: "Köpeğinizle Bodrum Tatili Rehberi: Plajlar, Mekanlar ve İpuçları",
    category: "Köpekle Seyahat",
    shortAnswer: "Köpeğinizle Bodrum'da harika bir tatil geçirmek mümkündür. Club Marvy gibi özel 'Pet Plajı' olan tesislere yönelebilir, Ortakent ve Bitez'deki sakin koylarda tasmalı olarak yüzdürebilirsiniz. Bodrum genelinde 15 kg ağırlık limiti yaygın olduğundan rezervasyon öncesi kilo sınırlarını doğrulamak kritiktir.",
    summary: "Ege'nin incisi Bodrum'a köpeğinizle gitmeden önce bilmeniz gereken tüm plaj kuralları, en iyi pet-friendly mekanlar, veteriner desteği olan otel listeleri ve yolculuk tüyoları bu editoryal rehberde.",
    publishedAt: "2026-06-10",
    updatedAt: "2026-08-25",
    author: {
      name: "Ceren Yılmaz",
      role: "Kıdemli Seyahat Editörü (Köpek Davranışları Uzmanı)",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    vetChecked: true,
    vetName: "Veteriner Hekim Dr. Ahmet Mert",
    content: `
      <h2>1. Bodrum'da Köpekle Seyahat Etmenin Temelleri</h2>
      <p>Bodrum, Türkiye'nin evcil hayvan kabul eden tesis yoğunluğu en yüksek tatil bölgelerinden biridir. Ancak "evcil hayvan kabul ediyor" ifadesi her tesiste aynı anlama gelmez. Kimi oteller sadece 5 kg altı köpekleri odada kalma şartıyla kabul ederken, kimileri ise dostunuza özel plaj ve menü sunar. Bu yüzden Bodrum seyahatinizde doğru otel seçimi hayati önem taşır.</p>

      <h2>2. En Popüler Pet-Friendly Bodrum Plajları</h2>
      <p>Bodrum'da halk plajlarında genel olarak köpeklerin denize girmesi resmi kurallarla sınırlıdır. Ancak aşağıdaki koylarda sabah erken veya akşamüstü saatlerinde dostunuzla denizin keyfini çıkarabilirsiniz:</p>
      <ul>
        <li><strong>Ortakent Yahşi Koyu:</strong> Geniş sahil şeridi sayesinde sakin köşelerinde köpeğinizi yüzdürebilirsiniz.</li>
        <li><strong>Bitez Koyu:</strong> Özellikle sığ ve dalgasız deniziyle küçük ırk köpeklerin suya alışması için idealdir.</li>
        <li><strong>Gümüşlük:</strong> Salaş balık restoranlarının dış mekanlarında köpeğinizle rahatça oturabilirsiniz ancak taşlık yapısı nedeniyle yüzdürmek zordur.</li>
      </ul>

      <h2>3. Bodrum'da Dikkat Edilmesi Gereken Sağlık Riskleri</h2>
      <p>Bodrum ve Ege kıyılarında yaz aylarında sivrisinek ve kum sineklerinden bulaşan <strong>Leishmania</strong> (Şark Çıbanı paraziti) ve kene popülasyonu yüksektir. Seyahate çıkmadan en az 1 hafta önce köpeğinizin dış parazit damlalarını veya tasmasını yenilemeniz gerekir. Ayrıca sıcak çarpmasına karşı dostunuzu gölgede tutmalı ve sürekli taze içme suyu sağlamalısınız.</p>
    `,
    checklist: [
      "Dış parazit damlası ve tasmasının güncelliğini kontrol edin.",
      "Otel rezervasyonunda köpek ağırlığını yazılı olarak teyit ettirin.",
      "Aşı karnesi ve veteriner pasaportunu mutlaka yanınıza alın.",
      "Yolculuk için taşınabilir su kabı ve gölgelik şemsiye edinin.",
      "Bodrum'daki 24 saat açık nöbetçi veterinerlerin numaralarını kaydedin."
    ],
    faq: [
      {
        q: "Bodrum'da köpekle halk plajına girmek yasak mı?",
        a: "Genel zabıta kurallarına göre yoğun saatlerde halk plajlarında tasmasız ve aşısız köpeklerin bulunması yasaktır. Ancak sabah 08:00 öncesi ve akşam 19:00 sonrası tasmalı olarak denize sokulmasında genellikle bir sakınca görülmemektedir."
      },
      {
        q: "Bodrum'daki otellerde köpekler için ek ücret alınıyor mu?",
        a: "Otelden otele değişmektedir. Bazı lüks butik oteller (The Marmara Bodrum gibi) ek ücret almazken, bazı tesisler günlük 200 TL ile 500 TL arasında temizlik ücreti talep edebilir."
      }
    ],
    seoTitle: "Köpekle Bodrum Tatili Rehberi 2026 | En İyi Pet Plajları ve Oteller",
    seoDesc: "Köpeğinizle Bodrum'da tatile gitmeden önce mutlaka okuyun. Köpek kabul eden plajlar, restoranlar, Leishmania uyarısı ve doğrulanmış otel önerileri."
  },
  {
    id: "guide-2",
    slug: "kedinizle-ilk-kez-tatile-cikarken-bilmeniz-gerekenler",
    title: "Kedinizle İlk Kez Tatile Çıkarken Bilmeniz Gereken 7 Altın Kural",
    category: "Kediyle Seyahat",
    shortAnswer: "Kediler çevre değişimine hassas canlılardır. İlk tatilde mutlaka kedinizin kendi kokusunu taşıyan battaniye/yatak götürmeli, yolculukta Feliway gibi sakinleştirici feromon spreyler kullanmalı ve kalacağınız odada kaçabileceği açık cam veya balkonların güvenlik durumunu kontrol etmelisiniz.",
    summary: "Kediler alışık oldukları ev ortamının dışına çıktıklarında yoğun stres yaşayabilirler. Yolculuk hazırlığından oteldeki ilk geceye kadar kedinizin konforunu sağlayacak rehberimiz.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-08-20",
    author: {
      name: "Murat Can Altın",
      role: "Editoryal Direktör & Kedi Davranışları Araştırmacısı",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    vetChecked: true,
    vetName: "Veteriner Hekim Selen Acar",
    content: `
      <h2>1. Kedilerin Seyahat Psikolojisini Anlamak</h2>
      <p>Kedilerin aksine kediler bölgelerine (evlerine) çok bağlıdır. Seyahat etmek onlar için yeni yerler keşfetmekten ziyade, güvenlik alanlarının kaybı olarak algılanabilir. Bu nedenle kedinizle tatile çıkmak istiyorsanız, onun stres seviyesini en aza indirecek önlemleri almalısınız.</p>

      <h2>2. Yolculuk Öncesi Taşıma Çantası Alıştırması</h2>
      <p>Taşıma çantasını (Box) sadece veterinere giderken ortaya çıkarıyorsanız, kediniz bu çantayı acı ve stresle ilişkilendirir. Seyahatten en az 2 hafta önce taşıma çantasını odanın ortasına bırakın, içine en sevdiği mamaları ve kokusunun olduğu bir örtüyü koyun. Çantayı evi gibi görmesini sağlayın.</p>

      <h2>3. Otel Odasında Güvenlik ve Kaçış Önlemleri</h2>
      <p>Otele vardığınızda kedinizi hemen serbest bırakmayın. Önce taşıma çantasını tuvalet kabının yanına koyup kapağını açın ve kendisinin çıkmasını bekleyin. Balkon kapılarının kapalı, sinekliklerin sağlam olduğundan emin olun. Kediler panik anında hiç akla gelmeyecek dar yarıklara saklanabilirler.</p>
    `,
    checklist: [
      "Alışık olduğu kum kabını ve evdeki kumu yanınıza alın (farklı kum kullanmak tuvalet protestosuna yol açar).",
      "Yolculuktan 4 saat önce mama vermeyi kesin (kusmayı önlemek için).",
      "Taşıma çantasına adınızın ve numaranızın olduğu bir künye iliştirin.",
      "Güvenli tırmalama kartonu ve favori oyuncaklarını unutmayın."
    ],
    faq: [
      {
        q: "Kedime yolculuk öncesi sakinleştirici ilaç vermeli miyim?",
        a: "Veteriner hekiminiz önermediği sürece kesinlikle kulaktan dolma beşeri veya ağır sedatif ilaçlar vermeyin. Bitkisel feromon spreyleri taşıma çantasına sıkmak genellikle yeterlidir."
      },
      {
        q: "Kediler otelde yalnız kalabilir mi?",
        a: "Kediler tanıdık olmayan bir otel odasında ilk 24 saat çok tedirgindir. Bu nedenle ilk gün onu odada uzun süre yalnız bırakmamanız, yanında olmanız önerilir."
      }
    ],
    seoTitle: "Kediyle Tatile Çıkmak | Yolculuk ve Otel İpuçları (Doğrulanmış)",
    seoDesc: "Kedinizle strese girmeden tatile çıkmanın yolları. Taşıma çantası eğitimi, otel odasında güvenlik önlemleri ve kedi tatil çantası listesi."
  },
  {
    id: "guide-3",
    slug: "kedi-oteli-secerken-nelere-dikkat-edilmeli",
    title: "Kedi Oteli Seçerken Dikkat Edilmesi Gereken 5 Kritik Güvenlik Kriteri",
    category: "Kedi ve Köpek Oteli Rehberleri",
    shortAnswer: "Güvenilir bir kedi oteli seçerken en önemli kriter kafes yerine bireysel oda sisteminin bulunması, kedi ve köpek alanlarının tamamen ayrılmış olması (havlama sesinin kedileri strese sokmaması için), 7/24 personel takibi ve acil durumlar için anlaşmalı bir veteriner kliniğinin olmasıdır.",
    summary: "Siz seyahatteyken kedinizi emanet edeceğiniz kedi otellerini seçerken tabelaya değil, hijyen standartlarına, oda tiplerine ve acil durum tahliye planlarına bakın. İşte kontrol listemiz.",
    publishedAt: "2026-05-12",
    updatedAt: "2026-08-10",
    author: {
      name: "Murat Can Altın",
      role: "Editoryal Direktör",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    vetChecked: true,
    vetName: "Veteriner Hekim Selen Acar",
    content: `
      <h2>1. Kafes mi, Bireysel Bölme mi?</h2>
      <p>Kediler dikey alanları seven ve tırmanmaktan hoşlanan canlılardır. Kedinizin günlerce dar bir tel kafeste kalması psikolojisini altüst eder. Seçtiğiniz kedi otelinde tavan yüksekliği olan, kedinin tırmanabileceği rafları bulunan cam veya ahşap bireysel odalar olmasına dikkat edin.</p>

      <h2>2. Ses ve Koku İzolasyonu</h2>
      <p>Kedi oteli aynı zamanda köpek de kabul ediyorsa (karma tesis), kedi bölümünün köpek bölümünden tamamen uzak ve ses yalıtımlı olması şarttır. Sürekli köpek havlaması duymak kedilerde kronik stres yaratır ve bu stres idrar yolu enfeksiyonlarına (sistit) yol açabilir.</p>

      <h2>3. Aşı Politikası ve Hijyen Protokolleri</h2>
      <p>Aşı karnesi istemeyen, 'ne olursa olsun kabul ederiz' diyen kedi otellerinden uzak durun. Kedilerin bir arada bulunduğu ortamlarda kedi gençlik hastalığı (Panleukopenia) ve üst solunum yolu enfeksiyonları çok hızlı yayılır. Tesisin mutlaka sıkı bir aşı protokolü uygulaması ve odaları her misafir değişiminde UVC lambalarıyla sterilize etmesi gerekir.</p>
    `,
    checklist: [
      "Tesisi gitmeden önce habersiz ziyaret edip kokusunu kontrol edin (ağır çiş kokusu olmamalıdır).",
      "Kedi odalarının tırmanma rafları içerip içermediğine bakın.",
      "Geceleri tesiste nöbetçi personel kalıp kalmadığını sorun.",
      "Acil veteriner transfer prosedürlerini inceleyin."
    ],
    faq: [
      {
        q: "Kedim kedi otelinde diğer kedilerle kavga eder mi?",
        a: "Profesyonel kedi otellerinde kediler asla birbirleriyle temas ettirilmez. Her kedi kendi bireysel odasında kalır ve oyun alanına sırayla, tek başına çıkarılır."
      },
      {
        q: "Kendi mamamızı götürmeli miyiz?",
        a: "Kesinlikle evet. Mama değişikliği kedilerde ishal ve kusmaya sebep olur. Kedi oteline kedinizin alışık olduğu mamayı yeterli miktarda teslim etmelisiniz."
      }
    ],
    seoTitle: "Güvenilir Kedi Oteli Nasıl Seçilir? | Editör Kontrol Listesi",
    seoDesc: "Kedi oteli ararken nelere dikkat edilmeli? Kafessiz konaklama, ses yalıtımı, kedi gençlik hastalığı riski ve aşı gereksinimleri hakkında rehber."
  },
  {
    id: "guide-4",
    slug: "ucakta-evcil-hayvan-tasima-kurallari-2026",
    title: "Uçakta Evcil Hayvan Taşıma Kuralları (2026 Güncel Havayolu Politikaları)",
    category: "Ulaşım Rehberleri",
    shortAnswer: "Uçak kabininde evcil hayvan taşıma sınırı genellikle çanta dahil 8 kg'dır. 8 kg üzerindeki evcil hayvanlar özel havalandırmalı kargo bölümünde (AVIH) taşınır. Uçuş öncesi en az 48 saat önce havayolundan rezervasyon onayı alınmalı ve tarım ilçe müdürlüğünden sağlık belgesi alınmalıdır.",
    summary: "THY, Pegasus ve diğer havayolları ile evcil hayvanınızla uçarken uymanız gereken kilo sınırları, çanta boyutları, sakinleştirici kuralları ve gerekli evraklar.",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-26",
    author: {
      name: "Ceren Yılmaz",
      role: "Kıdemli Seyahat Editörü",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    vetChecked: true,
    vetName: "Veteriner Hekim Dr. Ahmet Mert",
    content: `
      <h2>1. Kabin İçi (PETC) ve Kargo Bölümü (AVIH) Ayrımı</h2>
      <p>Havayolu kurallarına göre evcil hayvanınızın ağırlığı taşıma çantasıyla beraber 8 kg'ı geçmiyorsa kabinde yanınızda seyahat edebilir (PETC). 8 kg üzerindeki dostlarımız ise uçağın kargo bölümünde, basınçlı ve sıcaklık kontrollü özel bölmede kafes içinde uçabilirler (AVIH).</p>

      <h2>2. Kabul Edilen Taşıma Çantası Standartları</h2>
      <p>Kabin içi çantaların yumuşak yüzeyli (Soft-case), sızdırmaz ve hava alan pencerelere sahip olması istenir. Maksimum boyutlar genellikle 23cm yükseklik, 30cm genişlik ve 40cm uzunluk sınırındadır. Hayvanın çanta içinde kendi etrafında rahatça dönebilmesi şarttır.</p>

      <h2>3. Uçuş Öncesi Gerekli Resmi Evraklar</h2>
      <p>Yurt içi uçuşlarda mikroçip kaydı ve güncel aşı karnesi yeterlidir. Ancak yurt dışı uçuşlarında kuduz titrasyon testi (Kanser Araştırma laboratuvarı onaylı), Tarım İl Müdürlüğü'nden alınan uçuş sağlık sertifikası (Pet Passport) ve ülkeye giriş izinleri uçuş gününden aylar önce hazırlanmalıdır.</p>
    `,
    checklist: [
      "Bilet alırken uçakta evcil hayvan kotası olup olmadığını kontrol edin (Her uçakta en fazla 2 ila 4 evcil hayvana izin verilir).",
      "Kabin içi çantanın havayolu boyut limitlerine uyduğunu teyit edin.",
      "Uçuştan en az 3-4 saat önce beslemeyi durdurun.",
      "Uçuş günü havalimanına check-in işlemleri için normalden 1 saat erken gidin."
    ],
    faq: [
      {
        q: "Burnu basık (Brakisefalik) köpekler uçakta uçabilir mi?",
        a: "THY ve birçok global havayolu, solunum riski nedeniyle Pug, Boxer, Bulldog, Pekinez gibi burnu basık köpek ırklarını kargo bölümünde (AVIH) taşımayı kesinlikle yasaklamıştır. Bu ırklar sadece 8 kg altındaysa kabin içinde taşınabilir."
      },
      {
        q: "Evcil hayvan bilet ücreti ne kadardır?",
        a: "Yurt içi uçuşlarda kabin içi evcil hayvan taşıma ücreti havayoluna bağlı olarak 200 TL ile 400 TL arasında değişen sabit bir ek ücrete tabidir. Kargo bölümü ise ağırlığa göre hesaplanır."
      }
    ],
    seoTitle: "Uçakta Köpek ve Kedi Taşıma Kuralları | THY & Pegasus 2026",
    seoDesc: "Uçakla evcil hayvan taşıma şartları nelerdir? Kabin içi 8 kg sınırı, kutu ölçüleri, yasaklı basık burunlu köpek ırkları ve uçuş ücretleri rehberi."
  }
];

export const initialCorrections = [
  {
    id: "corr-1",
    hotelId: "hotel-2",
    hotelName: "Kapadokya Cave Suites",
    text: "Otelde evcil hayvan ücreti gecelik 250 TL'den 300 TL'ye yükselmiş, dün arayıp teyit ettim. Güncelleyebilir misiniz?",
    date: "2026-08-25",
    status: "pending"
  },
  {
    id: "corr-2",
    hotelId: "hotel-1",
    hotelName: "The Marmara Bodrum",
    text: "Bahçe alanında artık tasmasız gezmeye izin verilmiyor, diğer misafirlerin güvenliği için tasma kuralı getirilmiş.",
    date: "2026-08-26",
    status: "approved"
  }
];

// Initial complaints to be managed in admin dashboard
export const initialComplaints = [
  {
    id: "comp-1",
    targetId: "hotel-2",
    targetName: "Kapadokya Cave Suites",
    author: "Zeynep A.",
    text: "Otelde 'köpek dostu' denmesine rağmen odada ne mama kabı vardı ne de su kabı. İstediğimizde ise depodan geç getirdiler. Ek ücreti de girişte peşin aldılar.",
    date: "2026-08-24",
    status: "pending"
  },
  {
    id: "comp-2",
    targetId: "hotel-4",
    targetName: "Club Marvy",
    author: "Kaan Y.",
    text: "Pet Beach alanının belirli saatlerde kapatıldığını gördük. Onun haricinde plaj gayet temizdi ama saat kısıtlaması bilgisi burada yer almalı.",
    date: "2026-08-25",
    status: "approved"
  }
];

export const initialExperiences = [
  {
    id: "exp-1",
    name: "Bitez Sahil Sabah Yürüyüş Rotası",
    category: "Plaj & Sahil",
    city: "Muğla",
    district: "Bodrum",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    petPolicy: "Sabah erken ve akşam saatlerinde tasmalı köpeklerle yürüyüş için uygundur.",
    allowedPets: ["dog"],
    features: ["Sahil yürüyüşü", "Gölgelik alan", "Su noktası", "Yakın veteriner"],
    description: "Bitez sahil şeridi, özellikle sabah erken saatlerde köpekle yürüyüş ve kısa deniz molaları için Bodrum'un en rahat noktalarından biridir.",
    address: "Bitez Sahili, Bodrum",
    phone: "",
    website: "",
    mapUrl: "https://maps.google.com/?q=Bitez+Sahili+Bodrum",
    bestTime: "07:00-09:00 ve 19:00 sonrası",
    rules: "Yoğun saatlerde tasma kullanılmalı, plaj işletmelerinin özel alan kuralları ayrıca sorulmalıdır.",
    verified: true,
    baseTrustScore: 9.2,
    lastVerified: "2026-08-24"
  },
  {
    id: "exp-2",
    name: "Moda Sahil Pet Dostu Kafe Hattı",
    category: "Kafe & Restoran",
    city: "İstanbul",
    district: "Kadıköy",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    petPolicy: "Açık alanlarda kedi ve köpek kabul eden çok sayıda kafe bulunur.",
    allowedPets: ["dog", "cat"],
    features: ["Açık alan", "Mama kabı", "Yürüyüş rotası", "Toplu taşıma yakın"],
    description: "Moda sahil hattı, kısa şehir kaçamaklarında evcil hayvanla kahve molası ve yürüyüşü birleştirmek isteyenler için güçlü bir rotadır.",
    address: "Moda Sahili, Kadıköy",
    phone: "",
    website: "",
    mapUrl: "https://maps.google.com/?q=Moda+Sahili+Kadikoy",
    bestTime: "Hafta içi gündüz ve gün batımı",
    rules: "Kapalı alan kabulü işletmeden işletmeye değişir; yoğun saatlerde rezervasyon önerilir.",
    verified: true,
    baseTrustScore: 9.4,
    lastVerified: "2026-08-22"
  },
  {
    id: "exp-3",
    name: "Göreme Gün Doğumu Seyir Noktası",
    category: "Rota & Aktivite",
    city: "Nevşehir",
    district: "Göreme",
    imageUrl: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80",
    petPolicy: "Tasmalı köpeklerle kısa yürüyüş ve fotoğraf molası için uygundur.",
    allowedPets: ["dog"],
    features: ["Manzara", "Kısa yürüyüş", "Fotoğraf noktası", "Araçla erişim"],
    description: "Kapadokya'da balonları izlemek isteyen köpek sahipleri için düşük tempolu, kısa süreli ve unutulmaz bir sabah aktivitesi.",
    address: "Göreme Seyir Tepesi",
    phone: "",
    website: "",
    mapUrl: "https://maps.google.com/?q=Goreme+Sunset+Point",
    bestTime: "Gün doğumu",
    rules: "Soğuk havalarda köpek montu, yaz aylarında su kabı önerilir. Kalabalıkta kısa tasma kullanılmalıdır.",
    verified: true,
    baseTrustScore: 9.1,
    lastVerified: "2026-08-18"
  }
];

export const initialAds = [
  {
    id: "ad-1",
    title: "Bodrum'da pet dostu transfer kampanyası",
    sponsor: "Bodrum Pet Transfer",
    placement: "home-hero",
    targetUrl: "https://www.enuygun.com",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    city: "Muğla",
    category: "Pet Taksi",
    startsAt: "2026-08-01",
    endsAt: "2026-09-30",
    status: "active",
    impressions: 1240,
    clicks: 86
  },
  {
    id: "ad-2",
    title: "Kedi oteli erken rezervasyon avantajı",
    sponsor: "Pati Sarayı Kedi Oteli",
    placement: "listing-sidebar",
    targetUrl: "https://www.enuygun.com",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    city: "İstanbul",
    category: "Bakım",
    startsAt: "2026-08-15",
    endsAt: "2026-10-15",
    status: "active",
    impressions: 890,
    clicks: 42
  }
];

export const initialVets = [
  {
    "id": "vet-1",
    "name": "GALA VETERİNER KLİNİĞİ",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Yeşilbahçe, Portakal Çiçeği Cd. No:35/C, 07230 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "GALA VETERİNER KLİNİĞİ, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 288 değerlendirme)",
    "phone": "0536 316 77 07",
    "email": "",
    "website": "http://www.galaveteriner.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-2",
    "name": "Antalya Merkez Veteriner Kliniği",
    "city": "Antalya",
    "district": "Kepez",
    "imageUrl": "",
    "address": "Beşkonaklılar Mah. Kırçiçeği Cad. No:30AB, 07260 Kepez/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Antalya Merkez Veteriner Kliniği, Antalya Kepez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 36 değerlendirme)",
    "phone": "0538 745 11 11",
    "email": "",
    "website": "http://antalyavet.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-3",
    "name": "Lara Elite Veteriner Kliniği - Antalya 7/24 Nöbetçi Acil Veteriner Kliniği - Ветеринарная клиника",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Çağlayan, Barınaklar Blv. Özen 4 Apartmanı D:105/B, 07230 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Lara Elite Veteriner Kliniği - Antalya 7/24 Nöbetçi Acil Veteriner Kliniği - Ветеринарная клиника, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 69 değerlendirme)",
    "phone": "0543 644 99 07",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-4",
    "name": "Çağlayan Veteriner Kliniği - 7/24 Nöbetçi Acil Veteriner Kliniği- ветеринар скорой помощи",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Çağlayan, 2043. Sk. No:14 / A, 07230 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Çağlayan Veteriner Kliniği - 7/24 Nöbetçi Acil Veteriner Kliniği- ветеринар скорой помощи, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 135 değerlendirme)",
    "phone": "0507 937 93 92",
    "email": "",
    "website": "https://caglayanveterinerklinigi.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-5",
    "name": "PET POİNT LARA VETERİNER KLİNİĞİ",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Fener, Bülent Ecevit Blv. SELİN APT NO:84/A, 07260 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "PET POİNT LARA VETERİNER KLİNİĞİ, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 249 değerlendirme)",
    "phone": "0544 947 94 10",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-6",
    "name": "İlgi Hayvan Hastanesi",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Çağlayan, Bülent Ecevit Blv. No:117, 07230 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "İlgi Hayvan Hastanesi, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 320 değerlendirme)",
    "phone": "0544 324 66 65",
    "email": "",
    "website": "https://ilgihayvanhastanesi.com/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-7",
    "name": "Patişah Veteriner Kliniği Antalya",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Altındağ, Teoman Paşa Cd. Ertuğrul Sitesi No:24/A, 07050 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Patişah Veteriner Kliniği Antalya, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 73 değerlendirme)",
    "phone": "0531 910 31 15",
    "email": "",
    "website": "https://patisahveterinerklinigi.com.tr/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-8",
    "name": "Şirinyalı Veteriner Kliniği ( 7/24 Nöbetçi Acil Veteriner Kliniği )",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Şirinyalı, İsmet Gökşen Cd. Dostlar Apt No28/B, 07230 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Şirinyalı Veteriner Kliniği ( 7/24 Nöbetçi Acil Veteriner Kliniği ), Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 97 değerlendirme)",
    "phone": "0536 617 35 07",
    "email": "",
    "website": "https://sirinyaliveterinerklinigi.com.tr/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-9",
    "name": "Animals Ocean Veteriner Kliniği",
    "city": "Antalya",
    "district": "Konyaaltı",
    "imageUrl": "",
    "address": "Öğretmenevleri, 460. Sk. 64/A, 07070 Konyaaltı/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Animals Ocean Veteriner Kliniği, Antalya Konyaaltı bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 129 değerlendirme)",
    "phone": "0552 428 88 81",
    "email": "",
    "website": "http://animalsocean.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-10",
    "name": "Dr. Atom Veteriner Kliniği",
    "city": "Antalya",
    "district": "Konyaaltı",
    "imageUrl": "",
    "address": "Arapsuyu, Arapsuyu Caddesi No:30, 07130 Konyaaltı/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Dr. Atom Veteriner Kliniği, Antalya Konyaaltı bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 73 değerlendirme)",
    "phone": "0507 833 19 37",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-11",
    "name": "Meydankavağı ENTTA Veteriner Kliniği",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Meydankavağı, 1561. Sk. No:58A, 07030 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Meydankavağı ENTTA Veteriner Kliniği, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 61 değerlendirme)",
    "phone": "0539 441 40 71",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-12",
    "name": "Patiline Veteriner Kliniği",
    "city": "Antalya",
    "district": "Konyaaltı",
    "imageUrl": "",
    "address": "Günay apt, Arapsuyu, 637. Sk. no:1A, 07070 Konyaaltı/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Patiline Veteriner Kliniği, Antalya Konyaaltı bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 20 değerlendirme)",
    "phone": "0505 477 88 89",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-13",
    "name": "Bianca Hayvan Hastanesi",
    "city": "Antalya",
    "district": "Muratpaşa",
    "imageUrl": "",
    "address": "Bulvar Lara, Fener, Bülent Ecevit Blv. 45/A, 07230 Muratpaşa/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Bianca Hayvan Hastanesi, Antalya Muratpaşa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 188 değerlendirme)",
    "phone": "0539 778 51 90",
    "email": "",
    "website": "",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-14",
    "name": "YENİBOSNA KULELİ VETERİNER KLİNİĞİ",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Fevzi Çakmak, Çakmak Sk. No:4/A, 34197 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "YENİBOSNA KULELİ VETERİNER KLİNİĞİ, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 76 değerlendirme)",
    "phone": "0506 700 40 79",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-15",
    "name": "VETERİNER BAHÇELİEVLER VetAmor İstanbul Veteriner Kliniği Yenibosna 7/24 Nöbetçi Veteriner Kliniği",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Hürriyet, Ahmet Yesevi Cd. No:60, 34180 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VETERİNER BAHÇELİEVLER VetAmor İstanbul Veteriner Kliniği Yenibosna 7/24 Nöbetçi Veteriner Kliniği, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 104 değerlendirme)",
    "phone": "0536 591 33 24",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-16",
    "name": "BAHÇELİEVLER | 7/24 ACİL | Vetropol Veteriner Kliniği",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Yenibosna Merkez, Güneşli Yolu Cd. 4/A, 34590 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "BAHÇELİEVLER | 7/24 ACİL | Vetropol Veteriner Kliniği, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 676 değerlendirme)",
    "phone": "(0212) 550 92 19",
    "email": "",
    "website": "http://www.vetropol.com.tr/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-17",
    "name": "ŞİRİNEVLER VETERİNER KLİNİĞİ",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Bülent Ecevit Ortaokulu, Şirinevler Mah. Hastane Cad. No: 30/A Bahçelievler Devlet Hastanesi Çaprazı, Karşısı, 34188 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ŞİRİNEVLER VETERİNER KLİNİĞİ, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 225 değerlendirme)",
    "phone": "0507 577 53 04",
    "email": "",
    "website": "https://www.instagram.com/sirinevlerveteriner/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-18",
    "name": "Bahçelievler Mahmutbey Veteriner Kliniği 7/24",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Hürriyet, Mahmutbey Cd. No:187 D:a, 34000 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Bahçelievler Mahmutbey Veteriner Kliniği 7/24, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 137 değerlendirme)",
    "phone": "0506 351 08 44",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-19",
    "name": "VETERİNER BAHÇELİEVLER Vet Universe Veteriner Kliniği | 24 Saat Nöbetçi Veteriner",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Şirinevler, Zeki Müren Sk. No:13A, 34188 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VETERİNER BAHÇELİEVLER Vet Universe Veteriner Kliniği | 24 Saat Nöbetçi Veteriner, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 189 değerlendirme)",
    "phone": "0533 060 33 24",
    "email": "",
    "website": "http://www.vetuniverseveteriner.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-20",
    "name": "SERRA VETERİNER KLİNİĞİ",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Soğanlı, Çavuşpaşa Cd. No:53/A, 34180 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "SERRA VETERİNER KLİNİĞİ, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 105 değerlendirme)",
    "phone": "0530 313 69 95",
    "email": "",
    "website": "https://serraveterinerklinigi.com/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-21",
    "name": "Londra Veteriner Kliniği 7/24 ACİL VETERİNER BAHÇELİEVLER",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Bahçelievler, Adnan Kahveci Blv. No:85 D:B, 34000 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Londra Veteriner Kliniği 7/24 ACİL VETERİNER BAHÇELİEVLER, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 406 değerlendirme)",
    "phone": "0501 278 94 44",
    "email": "",
    "website": "http://www.londraveteriner.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-22",
    "name": "BAHÇELİEVLER VETHOSPİTAL Veteriner kliniği 7/24 ACİL VETERİNER BAHÇELİEVLER",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Bahçelievler, İzzettin Çalışlar Cd. No:7/C, 34180 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "BAHÇELİEVLER VETHOSPİTAL Veteriner kliniği 7/24 ACİL VETERİNER BAHÇELİEVLER, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 439 değerlendirme)",
    "phone": "0545 507 65 86",
    "email": "",
    "website": "https://vethospitalveteriner.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-23",
    "name": "GÜNEŞLİ 7/24 ACİL VETERİNER BİYOPATİ VETERİNER KLİNİĞİ",
    "city": "İstanbul",
    "district": "Bağcılar",
    "imageUrl": "",
    "address": "Güneşli, Üsküp Cd No:137, 34212 Bağcılar/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "GÜNEŞLİ 7/24 ACİL VETERİNER BİYOPATİ VETERİNER KLİNİĞİ, İstanbul Bağcılar bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 41 değerlendirme)",
    "phone": "0544 245 50 94",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-24",
    "name": "Küçükçekmece White Vet Veteriner Kliniği",
    "city": "İstanbul",
    "district": "Küçükçekmece",
    "imageUrl": "",
    "address": "Tevfik Bey, Vahit Efendi Sk. No:4 D:A, 34295 Küçükçekmece/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Küçükçekmece White Vet Veteriner Kliniği, İstanbul Küçükçekmece bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 211 değerlendirme)",
    "phone": "0554 112 30 23",
    "email": "",
    "website": "https://www.whitevet.com.tr/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-25",
    "name": "BAĞCILAR YENİMAHALLE VETERİNER KLİNİĞİ | 7/24 ACİL VETERİNER",
    "city": "İstanbul",
    "district": "Bağcılar",
    "imageUrl": "",
    "address": "Yenimahalle, Dökümcüler Cd. No:43 D:45A, 34212 Bağcılar/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "BAĞCILAR YENİMAHALLE VETERİNER KLİNİĞİ | 7/24 ACİL VETERİNER, İstanbul Bağcılar bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 45 değerlendirme)",
    "phone": "0501 659 82 59",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-26",
    "name": "İstanbul Veteriner Kliniği",
    "city": "İstanbul",
    "district": "Bakırköy",
    "imageUrl": "",
    "address": "Şenlikköy, Eceler Sk. 16/A, 34153 Bakırköy/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "İstanbul Veteriner Kliniği, İstanbul Bakırköy bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 298 değerlendirme)",
    "phone": "(0212) 663 91 42",
    "email": "",
    "website": "http://www.istanbulvet.com/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-27",
    "name": "Haznedar Veteriner Kliniği, Bahçelievler İstanbul",
    "city": "İstanbul",
    "district": "Bahçelievler",
    "imageUrl": "",
    "address": "Bahçelievler, Lale 1 Sk. No:1 D:2 A, 34180 Bahçelievler/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Haznedar Veteriner Kliniği, Bahçelievler İstanbul, İstanbul Bahçelievler bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 294 değerlendirme)",
    "phone": "(0212) 641 86 39",
    "email": "",
    "website": "",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-28",
    "name": "ŞirinPati Pet, Kuş ve Egzotik Veteriner Kliniği - 7/24",
    "city": "İstanbul",
    "district": "Bağcılar",
    "imageUrl": "",
    "address": "Göztepe, Bosna Cd. No: 10 D:14G, 34224 Bağcılar/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ŞirinPati Pet, Kuş ve Egzotik Veteriner Kliniği - 7/24, İstanbul Bağcılar bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 342 değerlendirme)",
    "phone": "0533 442 20 50",
    "email": "",
    "website": "http://www.sirinpati.com/",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-29",
    "name": "ATACAT 7/24 VETERİNER POLİKLİNİĞİ Atakent Halkalı Küçükçekmece Acil Veteriner Vetone Veteriner",
    "city": "İstanbul",
    "district": "Küçükçekmece",
    "imageUrl": "",
    "address": "Halkalı Merkez, Ataman Sk. Gülbahçe Evleri Apt No:13A/1, 34303 Küçükçekmece/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ATACAT 7/24 VETERİNER POLİKLİNİĞİ Atakent Halkalı Küçükçekmece Acil Veteriner Vetone Veteriner, İstanbul Küçükçekmece bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 212 değerlendirme)",
    "phone": "0545 595 03 08",
    "email": "",
    "website": "https://atacatveteriner.com/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-30",
    "name": "Pethome Veteriner Kliniği",
    "city": "İstanbul",
    "district": "Küçükçekmece",
    "imageUrl": "",
    "address": "Cennet, Barbaros Cd. No:1, 34295 Küçükçekmece/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Pethome Veteriner Kliniği, İstanbul Küçükçekmece bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 988 değerlendirme)",
    "phone": "0536 826 44 15",
    "email": "",
    "website": "https://www.pethomeveteriner.com/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-31",
    "name": "Sefaköy Veteriner - Marca Veteriner Polikliniği | Küçükçekmece Veteriner | 24 Saat Açık Veteriner | Acil Veteriner",
    "city": "İstanbul",
    "district": "Küçükçekmece",
    "imageUrl": "",
    "address": "Kartaltepe, Hayırlı Cd. no47/1A sefaköy, 34000 Küçükçekmece/İstanbul",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Sefaköy Veteriner - Marca Veteriner Polikliniği | Küçükçekmece Veteriner | 24 Saat Açık Veteriner | Acil Veteriner, İstanbul Küçükçekmece bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 198 değerlendirme)",
    "phone": "0545 143 40 20",
    "email": "",
    "website": "https://marcaveteriner.com/",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-32",
    "name": "Bornova Doğa Veteriner Polikliniği",
    "city": "İzmir",
    "district": "Bornova",
    "imageUrl": "",
    "address": "Kazımdirik, 220. Sk. 7/A, 35100 Bornova/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Bornova Doğa Veteriner Polikliniği, İzmir Bornova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 1330 değerlendirme)",
    "phone": "(0232) 520 25 75",
    "email": "",
    "website": "http://www.dogavet.net/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-33",
    "name": "VetGO Veteriner Polikliniği",
    "city": "İzmir",
    "district": "Konak",
    "imageUrl": "",
    "address": "Güzelyalı, İnönü Cd. No:566/B, 35210 Konak/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VetGO Veteriner Polikliniği, İzmir Konak bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 220 değerlendirme)",
    "phone": "0537 952 32 07",
    "email": "",
    "website": "http://www.vetgoclinic.com/",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-34",
    "name": "Vet 35 Veteriner Kliniği 7/24",
    "city": "İzmir",
    "district": "Buca",
    "imageUrl": "",
    "address": "Buca Koop., 35390 Buca/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Vet 35 Veteriner Kliniği 7/24, İzmir Buca bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 417 değerlendirme)",
    "phone": "0546 453 88 38",
    "email": "",
    "website": "",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-35",
    "name": "Vosvet Veteriner Kliniği",
    "city": "İzmir",
    "district": "Konak",
    "imageUrl": "",
    "address": "Kılıç Reis, 320. Sk. No:7 D:9B, 35280 Konak/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Vosvet Veteriner Kliniği, İzmir Konak bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 178 değerlendirme)",
    "phone": "(0232) 261 51 54",
    "email": "",
    "website": "https://www.vosvet.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-36",
    "name": "Ege Vitalis Hayvan Hastanesi",
    "city": "İzmir",
    "district": "Bornova",
    "imageUrl": "",
    "address": "Kazımdirik, 35100 Bornova/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Ege Vitalis Hayvan Hastanesi, İzmir Bornova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 105 değerlendirme)",
    "phone": "(0232) 332 35 45",
    "email": "",
    "website": "https://egevitalis.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-37",
    "name": "The Vets Hub Veteriner Polikliniği - İzmir",
    "city": "İzmir",
    "district": "Güzelbahçe",
    "imageUrl": "",
    "address": "Yalı, Mithatpaşa Cd. No:453, 35310 Güzelbahçe/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "The Vets Hub Veteriner Polikliniği - İzmir, İzmir Güzelbahçe bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 174 değerlendirme)",
    "phone": "0543 838 74 82",
    "email": "",
    "website": "https://www.thevetshub.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-38",
    "name": "BEK Veteriner Kliniği",
    "city": "İzmir",
    "district": "Konak",
    "imageUrl": "",
    "address": "Göztepe, İnönü Cd. 442A, 35290 Konak/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "BEK Veteriner Kliniği, İzmir Konak bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 163 değerlendirme)",
    "phone": "0506 535 00 35",
    "email": "",
    "website": "",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-39",
    "name": "İzmir Büyükşehir Belediye Başkanlığı Veteriner Kliniği Çevre Koruma ve Kontrol Daire Başkanlığı",
    "city": "İzmir",
    "district": "Konak",
    "imageUrl": "",
    "address": "Mimar Sinan, İzmir Fuarı İçi Yolu, 35220 Konak/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "İzmir Büyükşehir Belediye Başkanlığı Veteriner Kliniği Çevre Koruma ve Kontrol Daire Başkanlığı, İzmir Konak bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3.5, 646 değerlendirme)",
    "phone": "Telefon yok",
    "email": "",
    "website": "",
    "baseTrustScore": 7,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-40",
    "name": "İzmir Hayvan Hastanesi",
    "city": "İzmir",
    "district": "Çiğli",
    "imageUrl": "",
    "address": "K, Maltepe, 8090/1. Sk. No:7, 35640 Çiğli/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "İzmir Hayvan Hastanesi, İzmir Çiğli bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4, 920 değerlendirme)",
    "phone": "0507 456 19 31",
    "email": "",
    "website": "http://www.izmirhayvanhastanesi.com.tr/",
    "baseTrustScore": 8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-41",
    "name": "VETHELP Veteriner kliniği izmir",
    "city": "İzmir",
    "district": "Bornova",
    "imageUrl": "",
    "address": "Yeşilova, 4016. Sk. no:10/A, 35030 Bornova/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "VETHELP Veteriner kliniği izmir, İzmir Bornova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 37 değerlendirme)",
    "phone": "0505 052 46 97",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-42",
    "name": "İzmir Veteriner Polikliniği",
    "city": "İzmir",
    "district": "Buca",
    "imageUrl": "",
    "address": "Menderes, Erdem Cd. No:178, 35390 Buca/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "İzmir Veteriner Polikliniği, İzmir Buca bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4, 238 değerlendirme)",
    "phone": "(0232) 440 15 20",
    "email": "",
    "website": "http://www.izmir.vet/",
    "baseTrustScore": 8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-43",
    "name": "Rönesans Veteriner Polikliniği",
    "city": "İzmir",
    "district": "Bayraklı",
    "imageUrl": "",
    "address": "Adalet, Manas Blv. No:72 D:F, 35530 Bayraklı/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Rönesans Veteriner Polikliniği, İzmir Bayraklı bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 197 değerlendirme)",
    "phone": "0532 577 60 17",
    "email": "",
    "website": "https://ronesansveteriner.com.tr/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-44",
    "name": "Totem Veteriner Kliniği",
    "city": "İzmir",
    "district": "Karabağlar",
    "imageUrl": "",
    "address": "Esenyalı, İnönü Cd. No:603, 35140 Karabağlar/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Totem Veteriner Kliniği, İzmir Karabağlar bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 447 değerlendirme)",
    "phone": "(0232) 224 14 13",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-45",
    "name": "İzmir forvet veteriner kliniği",
    "city": "İzmir",
    "district": "Karşıyaka",
    "imageUrl": "",
    "address": "Bostanlı, 1811. Sk. No:24 D:1, 35550 Karşıyaka/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "İzmir forvet veteriner kliniği, İzmir Karşıyaka bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 44 değerlendirme)",
    "phone": "0530 305 91 08",
    "email": "",
    "website": "http://izmirforvetveterinerklinigi.com/?utm_source=gmb&utm_medium=referral",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-46",
    "name": "İZMİRVİTA VETERİNER KLİNİĞİ",
    "city": "İzmir",
    "district": "Bornova",
    "imageUrl": "",
    "address": "GAZİ OSMAN PAŞA, Yeşilova, 5490/2. Sk. 36A, 35090 Bornova/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "İZMİRVİTA VETERİNER KLİNİĞİ, İzmir Bornova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 362 değerlendirme)",
    "phone": "(0232) 351 19 19",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-47",
    "name": "Delta Veteriner Polikliniği",
    "city": "İzmir",
    "district": "Bayraklı",
    "imageUrl": "",
    "address": "Adalet, 2131/21. Sk. No:3A, 35530 Bayraklı/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Delta Veteriner Polikliniği, İzmir Bayraklı bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 235 değerlendirme)",
    "phone": "0552 699 43 11",
    "email": "",
    "website": "https://deltaveteriner.com/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-48",
    "name": "Alfa Veteriner Klinigi",
    "city": "İzmir",
    "district": "Konak",
    "imageUrl": "",
    "address": "Kültür, 1434. Sk. No:6, 35220 Konak/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Alfa Veteriner Klinigi, İzmir Konak bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 441 değerlendirme)",
    "phone": "0551 598 48 38",
    "email": "",
    "website": "http://alfaveteriner.com.tr/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-49",
    "name": "Borvet Veteriner Kliniği",
    "city": "İzmir",
    "district": "Bayraklı",
    "imageUrl": "",
    "address": "Osmangazi, 579. Sk. No:54 D:E, 35535 Bayraklı/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Borvet Veteriner Kliniği, İzmir Bayraklı bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 575 değerlendirme)",
    "phone": "(0232) 348 55 84",
    "email": "",
    "website": "http://borvet.net/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-50",
    "name": "Vetico Veteriner Kliniği 7/24",
    "city": "İzmir",
    "district": "Karşıyaka",
    "imageUrl": "",
    "address": "6185/4, Fikri Altay, mahallesi No:1/A, 35560 Karşıyaka/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Vetico Veteriner Kliniği 7/24, İzmir Karşıyaka bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 315 değerlendirme)",
    "phone": "0552 646 65 44",
    "email": "",
    "website": "https://www.instagram.com/veticoveterinerklinigi/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-51",
    "name": "Vetankara Veteriner Yenimahalle",
    "city": "Ankara",
    "district": "Yenimahalle",
    "imageUrl": "",
    "address": "Işınlar, İvedik Cd. No:70, 06170 Yenimahalle/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Vetankara Veteriner Yenimahalle, Ankara Yenimahalle bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 290 değerlendirme)",
    "phone": "(0312) 315 03 15",
    "email": "",
    "website": "http://www.veterinerankara.com/",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-52",
    "name": "Ankara Üniversitesi Veteriner Fakültesi Hayvan Hastanesi",
    "city": "Ankara",
    "district": "Altındağ",
    "imageUrl": "",
    "address": "Zübeyde Hanım, Şht. Ömer Halisdemir Blv, 06070 Altındağ/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Ankara Üniversitesi Veteriner Fakültesi Hayvan Hastanesi, Ankara Altındağ bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3.9, 1184 değerlendirme)",
    "phone": "Telefon yok",
    "email": "",
    "website": "https://hayvanhastanesi.veterinary.ankara.edu.tr/",
    "baseTrustScore": 7.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-53",
    "name": "DOST PATİ VETERİNER TIP MERKEZİ",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Yukarı Bahçelievler, Aşkabat Cd. no:70, 06490 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "DOST PATİ VETERİNER TIP MERKEZİ, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 442 değerlendirme)",
    "phone": "0532 650 49 23",
    "email": "",
    "website": "",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-54",
    "name": "MAÇA VETERİNER KLİNİĞİ ÇANKAYA",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Sancak, Tiflis Cd. No:26, 06550 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "MAÇA VETERİNER KLİNİĞİ ÇANKAYA, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 249 değerlendirme)",
    "phone": "0553 046 40 05",
    "email": "",
    "website": "http://macaveteriner.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-55",
    "name": "StarVet / Dikmen Veteriner Kliniği 7/24",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Harbiye, Sokullu Mehmet Paşa Cd. 21/A, 06460 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "StarVet / Dikmen Veteriner Kliniği 7/24, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 459 değerlendirme)",
    "phone": "0551 810 80 30",
    "email": "",
    "website": "http://starvetveteriner.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-56",
    "name": "VET plus Veteriner Polikliniği 7/24 Acil",
    "city": "Ankara",
    "district": "Keçiören",
    "imageUrl": "",
    "address": "Adnan Menderes, Kızlarpınarı Cd. No:162/A, 06300 Keçiören/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VET plus Veteriner Polikliniği 7/24 Acil, Ankara Keçiören bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.3, 895 değerlendirme)",
    "phone": "0532 585 47 20",
    "email": "",
    "website": "http://www.vetplus.vet/",
    "baseTrustScore": 8.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-57",
    "name": "Başkent Hayvan Hastanesi",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Aziziye, Kuzgun Cd No:91/B, 06690 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Başkent Hayvan Hastanesi, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 450 değerlendirme)",
    "phone": "(0312) 438 19 88",
    "email": "",
    "website": "http://www.baskenthayvanhastanesi.com/",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-58",
    "name": "VTM Ankara Veteriner Tıp Merkezi",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Büyükesat, Koza Sk. No:97, 06700 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VTM Ankara Veteriner Tıp Merkezi, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 963 değerlendirme)",
    "phone": "(0312) 437 06 06",
    "email": "",
    "website": "https://www.vtm.com.tr/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-59",
    "name": "Ankara Üniversitesi Veteriner Fakültesi",
    "city": "Ankara",
    "district": "Altındağ",
    "imageUrl": "",
    "address": "Zübeyde Hanım, Şht. Ömer Halisdemir Blv, 06070 Altındağ/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Ankara Üniversitesi Veteriner Fakültesi, Ankara Altındağ bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3.6, 788 değerlendirme)",
    "phone": "Telefon yok",
    "email": "",
    "website": "http://www.veterinary.ankara.edu.tr/",
    "baseTrustScore": 7.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-60",
    "name": "Prestige Veteriner Tıp Merkezi",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Emek, Bişkek Cd. 47/A, 06490 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Prestige Veteriner Tıp Merkezi, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 348 değerlendirme)",
    "phone": "0530 449 92 29",
    "email": "",
    "website": "",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-61",
    "name": "Çankaya veteriner tani tedavi merkezi",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Çankaya, Üsküp Cd. No:26, 06690 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Çankaya veteriner tani tedavi merkezi, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 55 değerlendirme)",
    "phone": "Telefon yok",
    "email": "",
    "website": "http://www.cankayaveteriner.com.tr/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-62",
    "name": "Dante Veteriner Kliniği",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Cevizlidere, Cevizlidere Cd. No:33/A, 06520 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Dante Veteriner Kliniği, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 480 değerlendirme)",
    "phone": "0530 887 55 92",
    "email": "",
    "website": "http://www.danteveterinerklinigi.com.tr/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-63",
    "name": "Vetrium Hayvan Hastanesi",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Beytepe, Kanuni Sultan Süleyman Blv No : 61A D:39, 06800 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Vetrium Hayvan Hastanesi, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 458 değerlendirme)",
    "phone": "(0312) 241 78 25",
    "email": "",
    "website": "https://ankaravetrium.com/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-64",
    "name": "Aydınlıkevler Veteriner Kliniği 7/24 ACİL",
    "city": "Ankara",
    "district": "Altındağ",
    "imageUrl": "",
    "address": "Aydınlıkevler, Çevreli Cd. No:95/A, 06130 Altındağ/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Aydınlıkevler Veteriner Kliniği 7/24 ACİL, Ankara Altındağ bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 133 değerlendirme)",
    "phone": "0539 863 32 15",
    "email": "",
    "website": "",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-65",
    "name": "Pet Smile Hayvan Hastanesi GOP",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Gaziosmanpaşa, Koza Sk. No:125, 06680 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Pet Smile Hayvan Hastanesi GOP, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 353 değerlendirme)",
    "phone": "(0312) 446 50 65",
    "email": "",
    "website": "http://www.petsmilegop.com/",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-66",
    "name": "ÇAPA ANGORA VETERİNER TIP MERKEZİ",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Ehlibeyt, Ceyhun Atuf Kansu Cd. No:114 F/9, 06520 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ÇAPA ANGORA VETERİNER TIP MERKEZİ, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 120 değerlendirme)",
    "phone": "0552 474 17 91",
    "email": "",
    "website": "http://www.capaangora.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-67",
    "name": "Çarşı Veteriner Kliniği",
    "city": "Ankara",
    "district": "Yenimahalle",
    "imageUrl": "",
    "address": "Çarşı, Ragıp Tüzün Cd. No:174 D:B, 06170 Yenimahalle/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Çarşı Veteriner Kliniği, Ankara Yenimahalle bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 363 değerlendirme)",
    "phone": "0501 115 06 00",
    "email": "",
    "website": "https://carsiveteriner.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-68",
    "name": "Animal Love Veteriner Kliniği",
    "city": "Ankara",
    "district": "Keçiören",
    "imageUrl": "",
    "address": "Kavacık Subayevleri, Şht. Ömer Halisdemir Blv no:35/A, 06300 Keçiören/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Animal Love Veteriner Kliniği, Ankara Keçiören bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 403 değerlendirme)",
    "phone": "0533 399 69 05",
    "email": "",
    "website": "http://www.animalloveveteriner.com/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-69",
    "name": "Emek Keçiören Veteriner Kliniği 7/24 ACİL",
    "city": "Ankara",
    "district": "Keçiören",
    "imageUrl": "",
    "address": "Güçlükaya, Kızlarpınarı Cd. No:11/A, 06000 Keçiören/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Emek Keçiören Veteriner Kliniği 7/24 ACİL, Ankara Keçiören bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 259 değerlendirme)",
    "phone": "0501 043 06 99",
    "email": "",
    "website": "https://linktr.ee/emekkeciorenvet",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-70",
    "name": "Eryaman İhtisas Veteriner Tanı Ve Tedavi Merkezi",
    "city": "Ankara",
    "district": "Etimesgut",
    "imageUrl": "",
    "address": "Relax, Göksu Sitesi no:55/BB, Şehit Osman Avcı, Malazgirt 1071. Cd., 06820 Etimesgut/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Eryaman İhtisas Veteriner Tanı Ve Tedavi Merkezi, Ankara Etimesgut bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 977 değerlendirme)",
    "phone": "(0312) 502 14 44",
    "email": "",
    "website": "",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-71",
    "name": "Medivet Veteriner Kliniği - 7/24 ACİL VETERİNER",
    "city": "Ankara",
    "district": "Mamak",
    "imageUrl": "",
    "address": "Fahri Korutürk, Natoyolu Caddesı 165/B, 06480 Mamak/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Medivet Veteriner Kliniği - 7/24 ACİL VETERİNER, Ankara Mamak bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 286 değerlendirme)",
    "phone": "0540 001 65 75",
    "email": "",
    "website": "",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-72",
    "name": "Pet Art Veteriner Polikliniği (24 saat acil servis)",
    "city": "Ankara",
    "district": "Etimesgut",
    "imageUrl": "",
    "address": "Şeyh Şamil Mahallesi, 1. TBMM Caddesi Yağan Kent Sitesi 59/10, 06793 Eryaman - Etimesgut/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Pet Art Veteriner Polikliniği (24 saat acil servis), Ankara Etimesgut bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.3, 478 değerlendirme)",
    "phone": "(0312) 279 09 05",
    "email": "",
    "website": "",
    "baseTrustScore": 8.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-73",
    "name": "Pet Stop Veteriner Kliniği",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Yıldız petshop, Sancak, Konrad Adenauer Cd. No: 23/9, 06550 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Pet Stop Veteriner Kliniği, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.3, 77 değerlendirme)",
    "phone": "0546 438 26 90",
    "email": "",
    "website": "http://www.petstopveteriner.com/",
    "baseTrustScore": 8.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-74",
    "name": "Etimesgut/Eryaman Aykaç Veteriner Kliniği 7/24",
    "city": "Ankara",
    "district": "Etimesgut",
    "imageUrl": "",
    "address": "Yeşilova, 4014. Cad. No:6B, 06796 Etimesgut/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Etimesgut/Eryaman Aykaç Veteriner Kliniği 7/24, Ankara Etimesgut bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 157 değerlendirme)",
    "phone": "0530 113 48 03",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-75",
    "name": "AMC Veteriner Kliniği / Dikmen",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Aydınlar, Ece Cd No:14D, 06450 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "AMC Veteriner Kliniği / Dikmen, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 125 değerlendirme)",
    "phone": "(0312) 482 00 48",
    "email": "",
    "website": "",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-76",
    "name": "Beytepe Veteriner Kliniği ( Tanı ve Tedavi Merkezi )",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Beytepe mahallesi Kanuni Sultan Süleyman Bulvarı 5387, cadde No:27, 06800 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Beytepe Veteriner Kliniği ( Tanı ve Tedavi Merkezi ), Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 124 değerlendirme)",
    "phone": "0536 747 34 25",
    "email": "",
    "website": "http://www.ankafoks.com/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-77",
    "name": "Animal Clinic Veteriner Kliniği 7/24",
    "city": "Ankara",
    "district": "Çankaya",
    "imageUrl": "",
    "address": "Ahmet Taner Kışlalı mah. concept işyerleri 2/8-B Çayyolu/Ankara, 06810 Çankaya/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Animal Clinic Veteriner Kliniği 7/24, Ankara Çankaya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 97 değerlendirme)",
    "phone": "(0312) 236 61 65",
    "email": "",
    "website": "",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-78",
    "name": "AYDINLIKEVLER METROPOL VETERİNER KLİNİĞİ - 7/24",
    "city": "Ankara",
    "district": "Altındağ",
    "imageUrl": "",
    "address": "Aydınlıkevler, Şht. Ömer Halisdemir Blv No:128, 06130 Altındağ/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "AYDINLIKEVLER METROPOL VETERİNER KLİNİĞİ - 7/24, Ankara Altındağ bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 220 değerlendirme)",
    "phone": "0530 975 14 24",
    "email": "",
    "website": "",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-79",
    "name": "HK VETERİNER KLİNİĞİ",
    "city": "Ankara",
    "district": "Mamak",
    "imageUrl": "",
    "address": "Cengizhan, 836. Sk. No:2 D:B, 06480 Mamak/Ankara",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "HK VETERİNER KLİNİĞİ, Ankara Mamak bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 349 değerlendirme)",
    "phone": "0530 967 83 04",
    "email": "",
    "website": "https://www.hkveteriner.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-80",
    "name": "Stage Vets Hayvan Hastanesi",
    "city": "Muğla",
    "district": "Bodrum",
    "imageUrl": "",
    "address": "Çırkan, Atatürk Blv. No:16/B, 48000 Bodrum/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Stage Vets Hayvan Hastanesi, Muğla Bodrum bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 133 değerlendirme)",
    "phone": "0554 024 45 73",
    "email": "",
    "website": "https://instagram.com/stagevets.co",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-81",
    "name": "BODRUM HAYVAN HASTANESİ",
    "city": "Muğla",
    "district": "Bodrum",
    "imageUrl": "",
    "address": "Konacık, Seyyit Onbaşı Cd. Pamir Evleri No:33 No.33/E E/1, 48400 Bodrum/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "BODRUM HAYVAN HASTANESİ, Muğla Bodrum bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 443 değerlendirme)",
    "phone": "0532 177 91 11",
    "email": "",
    "website": "http://www.bodrumhayvanhastanesi.com/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-82",
    "name": "BODRUM VETERİNER - VETMASTERS Veteriner kliniği",
    "city": "Muğla",
    "district": "Bodrum",
    "imageUrl": "",
    "address": "Çırkan, Şht. Barış Akay Cd. No:8, 48400 Bodrum/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "BODRUM VETERİNER - VETMASTERS Veteriner kliniği, Muğla Bodrum bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 86 değerlendirme)",
    "phone": "0545 312 48 48",
    "email": "",
    "website": "https://www.vetmasters.net/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-83",
    "name": "Sirius Veteriner Kliniği",
    "city": "Muğla",
    "district": "Bodrum",
    "imageUrl": "",
    "address": "Cevat Şakir Mahallesi Bodrum-Turgutreis Yolu, Cevat Şakir, Caddesi No:321/A, 48400 Bodrum/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Sirius Veteriner Kliniği, Muğla Bodrum bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 205 değerlendirme)",
    "phone": "0533 404 50 96",
    "email": "",
    "website": "",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-84",
    "name": "Dr.Fi Marine Bodrum Veteriner Kliniği",
    "city": "Muğla",
    "district": "Bodrum",
    "imageUrl": "",
    "address": "Eskiçeşme, Neyzen Tevfik Cd. No:194, 48400 Bodrum/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Dr.Fi Marine Bodrum Veteriner Kliniği, Muğla Bodrum bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 20 değerlendirme)",
    "phone": "0533 500 37 17",
    "email": "",
    "website": "https://www.drfimarine.com/",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-85",
    "name": "Bodrum Yücelen Hayvan Hastanesi",
    "city": "Muğla",
    "district": "Bodrum",
    "imageUrl": "",
    "address": "Yeniköy, Kıbrıs Şehitleri Cd. No:181, 48400 Bodrum/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Bodrum Yücelen Hayvan Hastanesi, Muğla Bodrum bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.1, 211 değerlendirme)",
    "phone": "444 6 926",
    "email": "",
    "website": "",
    "baseTrustScore": 8.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-86",
    "name": "GARFİELD VETERİNER MUAYENEHANESİ",
    "city": "Muğla",
    "district": "Bodrum",
    "imageUrl": "",
    "address": "Müskebi, Badrum Cad AVN İş Merkezi No:31 L Blok , D:2, 48400 Bodrum/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "GARFİELD VETERİNER MUAYENEHANESİ, Muğla Bodrum bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 54 değerlendirme)",
    "phone": "0534 978 27 67",
    "email": "",
    "website": "https://veritas.bulutvet.com/vetbros-veter%C4%B1ner-muayenehanes%C4%B1-001831",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-87",
    "name": "Özel Fethiye Bölge Hayvan Hastanesi",
    "city": "Muğla",
    "district": "Fethiye",
    "imageUrl": "",
    "address": "Babataşı, Mustafa Kemal Blv. No:120, 48300 Fethiye/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Özel Fethiye Bölge Hayvan Hastanesi, Muğla Fethiye bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 450 değerlendirme)",
    "phone": "0538 608 67 28",
    "email": "",
    "website": "https://www.bolgehayvanhastanesi.com/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-88",
    "name": "VETGROUP FETHİYE HAYVAN HASTANESİ",
    "city": "Muğla",
    "district": "Fethiye",
    "imageUrl": "",
    "address": "Babataşı, Mustafa Kemal Blv. No:106, 48300 Fethiye/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VETGROUP FETHİYE HAYVAN HASTANESİ, Muğla Fethiye bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 386 değerlendirme)",
    "phone": "0532 629 90 48",
    "email": "",
    "website": "http://www.vetgroup.com.tr/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-89",
    "name": "VetBox Veteriner Tıp Merkezi",
    "city": "Muğla",
    "district": "Fethiye",
    "imageUrl": "",
    "address": "Foça, Barış Manço Blv. No:21/A, 48300 Fethiye/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "VetBox Veteriner Tıp Merkezi, Muğla Fethiye bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 43 değerlendirme)",
    "phone": "0540 227 48 48",
    "email": "",
    "website": "http://www.vetbox.com.tr/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-90",
    "name": "Atapet Hayvan Hastanesi",
    "city": "Muğla",
    "district": "Menteşe",
    "imageUrl": "",
    "address": "Orhaniye, Zihni Derin Cd. 39/a, 48000 Menteşe/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Atapet Hayvan Hastanesi, Muğla Menteşe bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 282 değerlendirme)",
    "phone": "0532 690 54 58",
    "email": "",
    "website": "https://www.instagram.com/atapethayvanhastanesi/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-91",
    "name": "MUĞLA HAYVAN HASTANESİ",
    "city": "Muğla",
    "district": "Menteşe",
    "imageUrl": "",
    "address": "Muslihittin, Cemal Karamuğla Sk. No:78, 48000 Menteşe/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "MUĞLA HAYVAN HASTANESİ, Muğla Menteşe bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 115 değerlendirme)",
    "phone": "0538 022 70 22",
    "email": "",
    "website": "https://www.muglahayvanhastanesi.com/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-92",
    "name": "Alaiye veteriner kliniği",
    "city": "Antalya",
    "district": "Alanya",
    "imageUrl": "",
    "address": "Çıplaklı mah. 3008 sok. No:1 A blok numara 16, 07400 Alanya/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Alaiye veteriner kliniği, Antalya Alanya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 58 değerlendirme)",
    "phone": "Telefon yok",
    "email": "",
    "website": "",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-93",
    "name": "Bremen's Pet Hospital / Hayvan Hastanesi",
    "city": "Antalya",
    "district": "Alanya",
    "imageUrl": "",
    "address": "Şekerhane, Fatih Sk. No:6A, 07400 Alanya/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Bremen's Pet Hospital / Hayvan Hastanesi, Antalya Alanya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 263 değerlendirme)",
    "phone": "0539 410 50 54",
    "email": "",
    "website": "https://www.bremensvet.info/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-94",
    "name": "Old MacDonald Veteriner Kliniği (Veterinary Clinic)",
    "city": "Antalya",
    "district": "Alanya",
    "imageUrl": "",
    "address": "Old MacDonald Vet Clinic, Demirtaş, Vatan Sk NO:6A/9, 07430 Alanya/Antalya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Old MacDonald Veteriner Kliniği (Veterinary Clinic), Antalya Alanya bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3.9, 19 değerlendirme)",
    "phone": "0553 467 52 86",
    "email": "",
    "website": "http://omdvc.com/",
    "baseTrustScore": 7.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-95",
    "name": "Hospitapet Veteriner Kliniği",
    "city": "Mersin",
    "district": "Mezitli",
    "imageUrl": "",
    "address": "Merkez, Eskiköy Cd. milenyum city dükkanları D:38A/E, 33320 Mezitli/Mersin",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Hospitapet Veteriner Kliniği, Mersin Mezitli bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 85 değerlendirme)",
    "phone": "0530 822 76 33",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-96",
    "name": "MERSİN VETFLİX⁺ VETERİNER KLİNİĞİ",
    "city": "Mersin",
    "district": "Mezitli",
    "imageUrl": "",
    "address": "Gmk bulvarı, Akdeniz, Torun apartmanı zemin15/16, 33000 Mezitli/Mersin",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "MERSİN VETFLİX⁺ VETERİNER KLİNİĞİ, Mersin Mezitli bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 82 değerlendirme)",
    "phone": "0554 704 83 57",
    "email": "",
    "website": "https://wa.me/905547048357?text=Merhabalar",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-97",
    "name": "Mezitli Vetox Veteriner Kliniği",
    "city": "Mersin",
    "district": "Mezitli",
    "imageUrl": "",
    "address": "Vetox Veteriner Kliniği, Çevlik, Gazi Mustafa Kemal Blv. No: 908 - B, 33340 Mezitli/Mersin",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Mezitli Vetox Veteriner Kliniği, Mersin Mezitli bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 111 değerlendirme)",
    "phone": "0538 738 94 69",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-98",
    "name": "VFM Hayvan Hastanesi",
    "city": "Mersin",
    "district": "Yenişehir",
    "imageUrl": "",
    "address": "Limonluk, İsmet İnönü Blv. No:163/A, 33120 Yenişehir/Mersin",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VFM Hayvan Hastanesi, Mersin Yenişehir bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 396 değerlendirme)",
    "phone": "(0324) 327 13 27",
    "email": "",
    "website": "http://www.vfmhayvanhastanesi.com.tr/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-99",
    "name": "Lifeline Veteriner Polikliniği",
    "city": "Mersin",
    "district": "Yenişehir",
    "imageUrl": "",
    "address": "Akil İş Merkezi, Bahçelievler, 1839. Sk. Zemin Kat, 33140 Yenişehir/Mersin",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Lifeline Veteriner Polikliniği, Mersin Yenişehir bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 105 değerlendirme)",
    "phone": "0544 817 20 40",
    "email": "",
    "website": "https://lifeline.com.tr/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-100",
    "name": "VETFLİX VETERİNER KLİNİĞİ",
    "city": "Mersin",
    "district": "Yenişehir",
    "imageUrl": "",
    "address": "İnönü mahallesi 1403. Sok Körfez apartmanı, no 33 kat 1, 33000 Yenişehir/Mersin",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "VETFLİX VETERİNER KLİNİĞİ, Mersin Yenişehir bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 74 değerlendirme)",
    "phone": "0554 704 83 57",
    "email": "",
    "website": "https://instagram.com/vetflixveterinerklinigi?utm_medium=copy_link",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-101",
    "name": "Petical Hayvan Hastanesi ( Veteriner, Mersin )",
    "city": "Mersin",
    "district": "Yenişehir",
    "imageUrl": "",
    "address": "Güvenevler 2. Çevre yolu, H. Okan Merzeci Bulvarı No:532, 33140 Yenişehir/Mersin",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Petical Hayvan Hastanesi ( Veteriner, Mersin ), Mersin Yenişehir bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 1256 değerlendirme)",
    "phone": "444 3 738",
    "email": "",
    "website": "http://www.petical.com.tr/",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-102",
    "name": "Marmaris VDM Veteriner Kliniği",
    "city": "Muğla",
    "district": "Marmaris",
    "imageUrl": "",
    "address": "Hatipirimi Mahallesi, İnönü Caddesi, 184. Sk. No:35/A, 48700 Marmaris/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Marmaris VDM Veteriner Kliniği, Muğla Marmaris bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 29 değerlendirme)",
    "phone": "0542 132 44 94",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-103",
    "name": "MARMARİS VETERİNER KLİNİĞİ",
    "city": "Muğla",
    "district": "Marmaris",
    "imageUrl": "",
    "address": "KAYABAL C. GÖLENYE MEVKİİ 58/3, 48700 Marmaris/Muğla",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "MARMARİS VETERİNER KLİNİĞİ, Muğla Marmaris bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3.7, 31 değerlendirme)",
    "phone": "0532 454 59 80",
    "email": "",
    "website": "",
    "baseTrustScore": 7.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-104",
    "name": "ADAMARİN VETERİNER KLİNİĞİ",
    "city": "Aydın",
    "district": "Kuşadası",
    "imageUrl": "",
    "address": "Ege, 09400 Kuşadası/Aydın",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "ADAMARİN VETERİNER KLİNİĞİ, Aydın Kuşadası bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 54 değerlendirme)",
    "phone": "Telefon yok",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-105",
    "name": "Özel Vetipak Veteriner Kliniği",
    "city": "Aydın",
    "district": "Kuşadası",
    "imageUrl": "",
    "address": "Hacıfeyzullah, Sabri Mumcu Cd. 19CA, 09400 Kuşadası/Aydın",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Özel Vetipak Veteriner Kliniği, Aydın Kuşadası bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 53 değerlendirme)",
    "phone": "0542 725 08 38",
    "email": "",
    "website": "",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-106",
    "name": "Vet International Özel Hayvan Hastanesi Kuşadası 7/24",
    "city": "Aydın",
    "district": "Kuşadası",
    "imageUrl": "",
    "address": "Türkmen, Turgut Özal Blv. No:63/A, 09400 Kuşadası/Aydın",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Vet International Özel Hayvan Hastanesi Kuşadası 7/24, Aydın Kuşadası bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 301 değerlendirme)",
    "phone": "0533 159 76 00",
    "email": "",
    "website": "http://vetinternational.com.tr/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-107",
    "name": "Renda Veteriner",
    "city": "Aydın",
    "district": "Kuşadası",
    "imageUrl": "",
    "address": "Hacıfeyzullah Mh, Öz Yağcı Site Yolu Sk No:3, 09400 Kuşadası/Aydın",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Renda Veteriner, Aydın Kuşadası bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: N/A)",
    "phone": "Telefon yok",
    "email": "",
    "website": "",
    "baseTrustScore": null,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-108",
    "name": "Kuşadası Adapol Veteriner Kliniği 7/24 Acil",
    "city": "Aydın",
    "district": "Kuşadası",
    "imageUrl": "",
    "address": "İkiçeşmelik Mh. 613sk No:1BB, 09400 Kuşadası/Aydın",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Kuşadası Adapol Veteriner Kliniği 7/24 Acil, Aydın Kuşadası bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 138 değerlendirme)",
    "phone": "0554 585 22 02",
    "email": "",
    "website": "https://www.instagram.com/adapolvet/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-109",
    "name": "Pet Clinic Kuşadası Veteriner Hekim Eray Talşık 7/24",
    "city": "Aydın",
    "district": "Kuşadası",
    "imageUrl": "",
    "address": "Kitaş, İkiçeşmelik, Adalıoğlu Sitesi No: 6B, 09400 Kuşadası/Aydın",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Pet Clinic Kuşadası Veteriner Hekim Eray Talşık 7/24, Aydın Kuşadası bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.1, 70 değerlendirme)",
    "phone": "0536 236 61 14",
    "email": "",
    "website": "",
    "baseTrustScore": 8.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-110",
    "name": "Beray Vet, Animal Healthcare & Physiotherapy Center",
    "city": "İzmir",
    "district": "Çeşme",
    "imageUrl": "",
    "address": "Alaçatı, 11500 Sok No:115, 35930 Çeşme/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Beray Vet, Animal Healthcare & Physiotherapy Center, İzmir Çeşme bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 43 değerlendirme)",
    "phone": "0549 130 13 13",
    "email": "",
    "website": "https://berayvet.com.tr/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-111",
    "name": "Central Animal Çeşme Veteriner Kliniği",
    "city": "İzmir",
    "district": "Çeşme",
    "imageUrl": "",
    "address": "Musalla, 1065. Sk. No:13/A, 35000 Çeşme/İzmir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Central Animal Çeşme Veteriner Kliniği, İzmir Çeşme bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 131 değerlendirme)",
    "phone": "0533 770 53 45",
    "email": "",
    "website": "https://centralanimal.com.tr/",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-112",
    "name": "Master Petshop Sapanca",
    "city": "Sakarya",
    "district": "Sapanca",
    "imageUrl": "",
    "address": "Rüstempasa, Mehter Cd. No:5, 54600 Sapanca/Sakarya",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Master Petshop Sapanca, Sakarya Sapanca bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 8 değerlendirme)",
    "phone": "0531 523 19 64",
    "email": "",
    "website": "",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-113",
    "name": "Pati Bahçe Ayvalık",
    "city": "Balıkesir",
    "district": "Ayvalık",
    "imageUrl": "",
    "address": "Küçükköy, Tafil Türkan Caddesi NO: 17B, 10405 Ayvalık/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Pati Bahçe Ayvalık, Balıkesir Ayvalık bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 89 değerlendirme)",
    "phone": "0507 120 90 44",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-114",
    "name": "ALTINOVA BESİ ÇİFTLİĞİ",
    "city": "Balıkesir",
    "district": "Ayvalık",
    "imageUrl": "",
    "address": "Altınova, 97. Sokak No:9, 10280 Ayvalık/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "ALTINOVA BESİ ÇİFTLİĞİ, Balıkesir Ayvalık bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: N/A)",
    "phone": "0545 412 07 40",
    "email": "",
    "website": "",
    "baseTrustScore": null,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-115",
    "name": "Pet House Trabzon Hayvan Hastanesi",
    "city": "Trabzon",
    "district": "Yomra",
    "imageUrl": "",
    "address": "Kaşüstü, Devlet Karayolu Caddesi Sabırlar İş Merkezi B Blok No:47/50, 61250 Yomra/Trabzon",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Pet House Trabzon Hayvan Hastanesi, Trabzon Yomra bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 408 değerlendirme)",
    "phone": "0539 241 66 81",
    "email": "",
    "website": "https://pethousetrabzon.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-116",
    "name": "ARTEMİS VETERİNER POLİKLİNİĞİ & AYIŞIĞI VETERİNER KLİNİĞİ",
    "city": "Trabzon",
    "district": "Akçaabat",
    "imageUrl": "",
    "address": "Söğütlü, Adnan Kahveci Blv. NO:95, 61200 Akçaabat/Trabzon",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ARTEMİS VETERİNER POLİKLİNİĞİ & AYIŞIĞI VETERİNER KLİNİĞİ, Trabzon Akçaabat bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 244 değerlendirme)",
    "phone": "0541 828 51 63",
    "email": "",
    "website": "",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-117",
    "name": "Özel Trabzon Havyan Hastanesi",
    "city": "Trabzon",
    "district": "Ortahisar",
    "imageUrl": "",
    "address": "Kurtuluş, Devlet Sahil Yolu Cd., 61040 Ortahisar/Trabzon",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Özel Trabzon Havyan Hastanesi, Trabzon Ortahisar bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.3, 165 değerlendirme)",
    "phone": "0551 712 35 61",
    "email": "",
    "website": "https://trabzonhayvanhastanesi.com/",
    "baseTrustScore": 8.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-118",
    "name": "Küçük Dostlar Kliniği",
    "city": "Trabzon",
    "district": "Trabzon Merkez",
    "imageUrl": "",
    "address": "2 Nolu Beşirli, Devlet Sahil Yolu Cd. No:158, 61040 Trabzon Merkez/Trabzon",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Küçük Dostlar Kliniği, Trabzon Trabzon Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3.2, 110 değerlendirme)",
    "phone": "Telefon yok",
    "email": "",
    "website": "",
    "baseTrustScore": 6.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-119",
    "name": "daphne veteriner kliniği",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "doğa koleji karşısı, Belediye Evleri, 84033. Sk. no:5 c, 01360 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "daphne veteriner kliniği, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 56 değerlendirme)",
    "phone": "0530 910 06 22",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-120",
    "name": "Adana Veteriner Kliniği - HEYPATİ",
    "city": "Adana",
    "district": "Seyhan",
    "imageUrl": "",
    "address": "Kurtuluş Mahallesi Ziyapaşa Bulvarı Nakipoğlu Apt Altı, No: 9, 01360 Seyhan/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Adana Veteriner Kliniği - HEYPATİ, Adana Seyhan bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.3, 417 değerlendirme)",
    "phone": "0533 193 72 84",
    "email": "",
    "website": "https://www.heypati.com.tr/",
    "baseTrustScore": 8.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-121",
    "name": "Venüs Veteriner Kliniği Adana",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Belediye Evleri, Hilmi Kürklü Blv. 63 F, 01170 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Venüs Veteriner Kliniği Adana, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 281 değerlendirme)",
    "phone": "0505 524 13 92",
    "email": "",
    "website": "",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-122",
    "name": "Adana Ferah Veteriner Kliniği | Adana Veteriner | Çukurova Veteriner | 7/24 Veteriner",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Mahfesığmaz, 79126. Sk. NO:4 B, 01170 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Adana Ferah Veteriner Kliniği | Adana Veteriner | Çukurova Veteriner | 7/24 Veteriner, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 12 değerlendirme)",
    "phone": "0505 704 43 01",
    "email": "",
    "website": "http://adanaferahveterinerklinigi.com/",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-123",
    "name": "Adana Veteriner Kliniği - BEGOVİÇ",
    "city": "Adana",
    "district": "Seyhan",
    "imageUrl": "",
    "address": "Gürselpaşa, 75364. Sk. No:15/A, 01200 Seyhan/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Adana Veteriner Kliniği - BEGOVİÇ, Adana Seyhan bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 104 değerlendirme)",
    "phone": "0505 820 75 95",
    "email": "",
    "website": "",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-124",
    "name": "Adana Veteriner, Vitasolis",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Huzurevleri, Alparslan Türkeş Blv. no:367 D:A, 01360 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Adana Veteriner, Vitasolis, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 49 değerlendirme)",
    "phone": "0530 743 51 10",
    "email": "",
    "website": "",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-125",
    "name": "Adana Albatros Veteriner Kliniği",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Yurt Mahallesi 71481 Sk, Turgut Özal Blv. Sağırer Apt No: 1/A, 01170 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Adana Albatros Veteriner Kliniği, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 68 değerlendirme)",
    "phone": "0545 569 87 84",
    "email": "",
    "website": "https://www.instagram.com/adanaalbatrosveterinerklinigi?igsh=MW5rZHpsbTdqeGp5Yw==",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-126",
    "name": "DEMAR Veteriner Kliniği",
    "city": "Adana",
    "district": "Seyhan",
    "imageUrl": "",
    "address": "Befi Apartmanı, Kurtuluş, Şinasi Efendi Cd. No:7 Zemin Kat, 01130 Seyhan/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "DEMAR Veteriner Kliniği, Adana Seyhan bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 101 değerlendirme)",
    "phone": "0533 656 82 20",
    "email": "",
    "website": "",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-127",
    "name": "Vegas Veteriner Kliniği",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Diamondland Rezidans, Huzurevleri, Turgut Özal Blv. Altı, 01360 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Vegas Veteriner Kliniği, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 249 değerlendirme)",
    "phone": "0507 321 62 42",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-128",
    "name": "Adana Bölge Hayvan Hastanesi",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Şehit Yüzbaşı, Beyazevler, Bülent Angın Blv. No:128/B, 01170 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Adana Bölge Hayvan Hastanesi, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4, 12 değerlendirme)",
    "phone": "0535 837 30 33",
    "email": "",
    "website": "https://adanabolgehayvanhastanesi.net/",
    "baseTrustScore": 8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-129",
    "name": "Adana Veteriner Kliniği PetBoss Sarıçam",
    "city": "Adana",
    "district": "Sarıçam",
    "imageUrl": "",
    "address": "Çarkıpare, Elif Su Uludağ Caddesi 194/B, 01250 Sarıçam/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Adana Veteriner Kliniği PetBoss Sarıçam, Adana Sarıçam bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 178 değerlendirme)",
    "phone": "0538 920 27 50",
    "email": "",
    "website": "https://www.petbossvet.com.tr/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-130",
    "name": "Artemis Hayvan Hastanesi",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Yüzüncüyıl, Hacı Bektaş Veli Blv No:9/A, 01170 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Artemis Hayvan Hastanesi, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 278 değerlendirme)",
    "phone": "0533 396 49 30",
    "email": "",
    "website": "https://adanaartemishayvanhastanesi.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-131",
    "name": "Vetora Veteriner Kliniği",
    "city": "Adana",
    "district": "Seyhan",
    "imageUrl": "",
    "address": "Kurtuluş, 640020 Sok Güney Apt D:5/5, 01130 Seyhan/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Vetora Veteriner Kliniği, Adana Seyhan bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 2 değerlendirme)",
    "phone": "0538 050 57 59",
    "email": "",
    "website": "https://vetoravet.com/",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-132",
    "name": "EPONA VETERİNER KLİNİĞİ",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Huzurevleri, Türkmenbaşı Blv. Özemek apt B blok Zemin Kat İşyeri No: 28, 01010 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "EPONA VETERİNER KLİNİĞİ, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 102 değerlendirme)",
    "phone": "0546 878 99 01",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-133",
    "name": "Çukurova Bölge Hayvan Hastanesi",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Dağlık Teras Evleri Kapı, Yurt, Şair Hasibe Hatun Caddesi No:77 No:12-13-14, 01170 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Çukurova Bölge Hayvan Hastanesi, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4, 364 değerlendirme)",
    "phone": "(0322) 213 01 01",
    "email": "",
    "website": "https://cukurovahayvanhastanesi.com.tr/",
    "baseTrustScore": 8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-134",
    "name": "VETORIUM VETERİNER KLİNİĞİ",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Güzelyalı, 81180. Sk. Orkide apt zemin kat, 01170 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VETORIUM VETERİNER KLİNİĞİ, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 103 değerlendirme)",
    "phone": "0544 140 06 01",
    "email": "",
    "website": "",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-135",
    "name": "Petspital",
    "city": "Adana",
    "district": "Çukurova",
    "imageUrl": "",
    "address": "Yeşil Park, Toros, Barış Manço Blv. No:20/B Evleri A Blok, 01900 Çukurova/Adana",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Petspital, Adana Çukurova bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 67 değerlendirme)",
    "phone": "0530 662 23 38",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-136",
    "name": "GÖMEÇ ANKA VETERİNER KLİNİĞİ",
    "city": "Balıkesir",
    "district": "Gömeç",
    "imageUrl": "",
    "address": "Mithatpaşa Mahallesi E-87 Karayolu, Kenarı Cad. Kapı No: 1A, 10715 Gömeç/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "GÖMEÇ ANKA VETERİNER KLİNİĞİ, Balıkesir Gömeç bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 102 değerlendirme)",
    "phone": "0545 727 61 17",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-137",
    "name": "Acil 7/24 Yıldız Veteriner Kliniği",
    "city": "Balıkesir",
    "district": "Karesi",
    "imageUrl": "",
    "address": "Merkez, POLİS EVİ KARŞISI, PAŞAALANI MAHALLESİ/Balıkesir Merkez/Balıkesir Merkez Balıkesir TR, Merkez, 113. Sk. NO:1A, 10100 Karesi/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Acil 7/24 Yıldız Veteriner Kliniği, Balıkesir Karesi bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 217 değerlendirme)",
    "phone": "(0266) 249 49 35",
    "email": "",
    "website": "",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-138",
    "name": "7/24 açık Pet İkon Veteriner Kliniği (Balıkesir l",
    "city": "Balıkesir",
    "district": "Altıeylül",
    "imageUrl": "",
    "address": "Bahçelievler, 5081 sokak No 23/B, 10100 Altıeylül/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "7/24 açık Pet İkon Veteriner Kliniği (Balıkesir l, Balıkesir Altıeylül bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 38 değerlendirme)",
    "phone": "0545 897 33 94",
    "email": "",
    "website": "",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-139",
    "name": "Karesi Rota Veteriner Kliniği",
    "city": "Balıkesir",
    "district": "Karesi",
    "imageUrl": "",
    "address": "1. Sakarya, Ertuğrulgazi Cd. no:136, 10030 Karesi/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Karesi Rota Veteriner Kliniği, Balıkesir Karesi bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 27 değerlendirme)",
    "phone": "0551 355 10 49",
    "email": "",
    "website": "https://www.instagram.com/rotaveterinerkaresi?igsh=MWxmajE4YmQzdHBvaQ==&utm_source=qr",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-140",
    "name": "7/24 acil veteriner Pisikopati veteriner kliniği",
    "city": "Balıkesir",
    "district": "Karesi",
    "imageUrl": "",
    "address": "2. Sakarya mahallesi 4104 sokak no 4 Karesi/ Balıkesir lıkesir, 10010 Karesi/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "7/24 acil veteriner Pisikopati veteriner kliniği, Balıkesir Karesi bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 74 değerlendirme)",
    "phone": "0507 525 73 97",
    "email": "",
    "website": "",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-141",
    "name": "CLİNİCON VETERİNER KLİNİĞİ",
    "city": "Balıkesir",
    "district": "Altıeylül",
    "imageUrl": "",
    "address": "Anafartalar caddesi, Kasaplar, Burçak Sk. No:2, 10100 Altıeylül/Balıkesir",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "CLİNİCON VETERİNER KLİNİĞİ, Balıkesir Altıeylül bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3.9, 7 değerlendirme)",
    "phone": "0542 378 73 09",
    "email": "",
    "website": "",
    "baseTrustScore": 7.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-142",
    "name": "Özel Bursa Hayvan Hastanesi acil nöbetçi 7/24 veteriner",
    "city": "Bursa",
    "district": "Yıldırım",
    "imageUrl": "",
    "address": "Çavuşoğlu park, Millet, Yunus Emre Blv no:15/A, 16370 Yıldırım/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Özel Bursa Hayvan Hastanesi acil nöbetçi 7/24 veteriner, Bursa Yıldırım bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4, 243 değerlendirme)",
    "phone": "0506 094 55 20",
    "email": "",
    "website": "https://www.bursahayvanhastanesi.com.tr/",
    "baseTrustScore": 8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-143",
    "name": "EVCILIM 7/24 AÇIK VETERINER POLIKLINIĞI",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "29 Ekim, Ahmet Taner Kışlalı Blv. No:27, 16120 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "EVCILIM 7/24 AÇIK VETERINER POLIKLINIĞI, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4, 447 değerlendirme)",
    "phone": "(0224) 413 66 36",
    "email": "",
    "website": "http://www.evcilimpet.com.tr/",
    "baseTrustScore": 8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-144",
    "name": "Oksijen Hayvan Hastanesi",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Cumhuriyet Mahallesi, Anıt Sokak, Efeler Sitesi, D:17A/C, 16140 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Oksijen Hayvan Hastanesi, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 630 değerlendirme)",
    "phone": "(0224) 322 07 72",
    "email": "",
    "website": "https://www.oksijenhayvanhastanesi.com/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-145",
    "name": "Oksijen Veteriner Polikliniği",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "19 Mayıs, Uğur Mumcu Blv. No: 136 B, 16230 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Oksijen Veteriner Polikliniği, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 24 değerlendirme)",
    "phone": "0537 249 19 52",
    "email": "",
    "website": "https://www.oksijenhayvanhastanesi.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-146",
    "name": "Dodo Veteriner Polikliniği",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Ataevler, Nilüfer Hatun Cd. No:113 E D:F, 16140 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Dodo Veteriner Polikliniği, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 350 değerlendirme)",
    "phone": "0533 603 66 07",
    "email": "",
    "website": "https://dodohayvanhastanesi.com/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-147",
    "name": "Rota Veteriner Kliniği 7/24",
    "city": "Bursa",
    "district": "Bursa",
    "imageUrl": "",
    "address": "Prestij, Demirtaş Cumhuriyet, Optimum 14a, 16100 Osmangazi̇/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Rota Veteriner Kliniği 7/24, Bursa Bursa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 362 değerlendirme)",
    "phone": "0543 277 76 82",
    "email": "",
    "website": "http://www.rotaveterinerbursa.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-148",
    "name": "Akademi Hayvan Hastanesi",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Odunluk, Mihraplı Cd. No:12, 16110 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Akademi Hayvan Hastanesi, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 1024 değerlendirme)",
    "phone": "(0224) 453 21 65",
    "email": "",
    "website": "http://www.akademivet.com/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-149",
    "name": "Uludağ Veteriner Kliniği | 7/24 Acil Veteriner | Bursa Veteriner | Nöbetçi Veteriner | Osmangazi Veteriner",
    "city": "Bursa",
    "district": "Bursa",
    "imageUrl": "",
    "address": "Soğanlı, 3. Meltem Sk. No:12/B B blok, 16190 Osmangazi̇/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Uludağ Veteriner Kliniği | 7/24 Acil Veteriner | Bursa Veteriner | Nöbetçi Veteriner | Osmangazi Veteriner, Bursa Bursa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 148 değerlendirme)",
    "phone": "0530 236 01 16",
    "email": "",
    "website": "http://www.uludagveterinerklinigi.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-150",
    "name": "Demirtaş Veteriner Kliniği | 7/24 Acil Veteriner | Nöbetçi Veteriner | Demirtaş Veteriner | Osmangazi Veteriner",
    "city": "Bursa",
    "district": "Bursa",
    "imageUrl": "",
    "address": "Bakyapı Prestij Optimum, Demirtaş Cumhuriyet, Demirtaş Yolu Cd H Blok 67B D-11, 16245 Osmangazi̇/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Demirtaş Veteriner Kliniği | 7/24 Acil Veteriner | Nöbetçi Veteriner | Demirtaş Veteriner | Osmangazi Veteriner, Bursa Bursa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 53 değerlendirme)",
    "phone": "0505 924 62 10",
    "email": "",
    "website": "https://www.demirtasveteriner.com.tr/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-151",
    "name": "ÖZEL BURSA HAYVAN HASTANESİ",
    "city": "Bursa",
    "district": "Yıldırım",
    "imageUrl": "",
    "address": "Millet, Yunus Emre Blv 15/A: 15, 16270 Yıldırım/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ÖZEL BURSA HAYVAN HASTANESİ, Bursa Yıldırım bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 263 değerlendirme)",
    "phone": "0506 094 55 20",
    "email": "",
    "website": "https://bursahayvanhastanesi.com.tr/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-152",
    "name": "Merkez Veteriner",
    "city": "Bursa",
    "district": "Bursa",
    "imageUrl": "",
    "address": "İntizam, 2. Bilim Sk. No:6, 16050 Osmangazi̇/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Merkez Veteriner, Bursa Bursa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 3, 157 değerlendirme)",
    "phone": "0507 751 61 49",
    "email": "",
    "website": "",
    "baseTrustScore": 6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-153",
    "name": "Pet 224 Veteriner Kliniği | 7/24 Acil Veteriner | Nöbetçi Veteriner | Beşevler Veteriner | Nilüfer Veteriner",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Beşevler, Beşevler Cd. No:177, 16110 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Pet 224 Veteriner Kliniği | 7/24 Acil Veteriner | Nöbetçi Veteriner | Beşevler Veteriner | Nilüfer Veteriner, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.3, 309 değerlendirme)",
    "phone": "0538 453 87 02",
    "email": "",
    "website": "https://www.pet224.com/",
    "baseTrustScore": 8.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-154",
    "name": "VetKoala Veteriner Muayenehanesi",
    "city": "Bursa",
    "district": "Bursa",
    "imageUrl": "",
    "address": "Çekirge, Çekirge Cd. Urgancıoğlu Apt No:103 A Blok D:2, 16070 Osmangazi̇/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "VetKoala Veteriner Muayenehanesi, Bursa Bursa bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 165 değerlendirme)",
    "phone": "0538 303 69 06",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-155",
    "name": "Avisa Veteriner Tıp Merkezi",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "İhsaniye Mah. Fatih Sultan Mehmet Blv. Rızvanoğlu Doruk Sitesi C blok no36 C, D:C, 16130 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Avisa Veteriner Tıp Merkezi, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.7, 81 değerlendirme)",
    "phone": "(0224) 504 61 30",
    "email": "",
    "website": "http://www.avisaveteriner.com.tr/",
    "baseTrustScore": 9.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-156",
    "name": "Setbaşı Veteriner 7/24 nöbetçi acil",
    "city": "Bursa",
    "district": "Yıldırım",
    "imageUrl": "",
    "address": "Karaağaç, İpekçilik Cd. 3/A, 16360 Yıldırım/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Setbaşı Veteriner 7/24 nöbetçi acil, Bursa Yıldırım bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.2, 254 değerlendirme)",
    "phone": "0530 246 54 56",
    "email": "",
    "website": "",
    "baseTrustScore": 8.4,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-157",
    "name": "Dobby Veteriner Polikliniği I 7/24 Acil Veteriner I Ataevler Veteriner I Nilüfer Veteriner I Nöbetçi Veteriner",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Ataevler, Ata Blv No:25, 16140 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Dobby Veteriner Polikliniği I 7/24 Acil Veteriner I Ataevler Veteriner I Nilüfer Veteriner I Nöbetçi Veteriner, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 131 değerlendirme)",
    "phone": "0530 242 78 38",
    "email": "",
    "website": "",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-158",
    "name": "FEXA BEŞEVLER VETERİNER KLİNİĞİ",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Beşevler, Yıldırım Cd. no:283B D:A, 16110 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "FEXA BEŞEVLER VETERİNER KLİNİĞİ, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 205 değerlendirme)",
    "phone": "0543 326 83 16",
    "email": "",
    "website": "http://foksbesevlervet.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-159",
    "name": "Akademi Kids Hayvan Hastanesi",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "İhsaniye Mh. Fatih Sultan Mehmet Bulvarı B Blok No:34/B, D:C, 16100 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Akademi Kids Hayvan Hastanesi, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 231 değerlendirme)",
    "phone": "(0224) 504 22 22",
    "email": "",
    "website": "",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-160",
    "name": "Doktor Pati Veteriner Muayenehanesi",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Kültür Mah, Beşevler, Bilginler Cad. Kutay Sitesi C/Blok No:117, 16110 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Doktor Pati Veteriner Muayenehanesi, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 109 değerlendirme)",
    "phone": "0553 335 41 66",
    "email": "",
    "website": "http://www.doktorpati.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-161",
    "name": "Armilla Hayvan Hastanesi",
    "city": "Bursa",
    "district": "lüfer",
    "imageUrl": "",
    "address": "Ertuğrul Mahallesi Uğur Mumcu Bulvarı Biaport, 16120 Ni̇lüfer/Bursa",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Armilla Hayvan Hastanesi, Bursa lüfer bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 662 değerlendirme)",
    "phone": "(0224) 413 01 43",
    "email": "",
    "website": "http://www.armillahayvanhastanesi.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-162",
    "name": "ANKA HAYVAN HASTANESİ",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Esenler, Ahmet Piriştina Cd. No:35 D:1 / 3, 17100 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ANKA HAYVAN HASTANESİ, Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.4, 304 değerlendirme)",
    "phone": "0535 213 34 17",
    "email": "",
    "website": "http://www.ankahayvanhastanesi.com/",
    "baseTrustScore": 8.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-163",
    "name": "ÇANAKKALE ACİL VETERİNER 7/24 (VETERİNOLOJİ)",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Esenler, Tülin 7. Sk. no:4/1 no:6, 17000 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ÇANAKKALE ACİL VETERİNER 7/24 (VETERİNOLOJİ), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 125 değerlendirme)",
    "phone": "0543 476 62 59",
    "email": "",
    "website": "https://www.veterinoloji.com/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-164",
    "name": "ÇANAKKALE ACİL VETERİNER 7/24 (VETLAND VETERİNER KLİNİĞİ)",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Cevat Paşa, Pirireis Cd. 12/B, 17100 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ÇANAKKALE ACİL VETERİNER 7/24 (VETLAND VETERİNER KLİNİĞİ), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 414 değerlendirme)",
    "phone": "0546 239 87 28",
    "email": "",
    "website": "https://www.canakkalevetlandvet.com/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-165",
    "name": "ÇANAKKALE VET-KİT 7/24 ACiL VETERİNER KLİNİĞİ ( NÖBETÇİ VETERİNER )",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "İsmetpaşa, Setboyu Cd. No:95-A, 17000 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ÇANAKKALE VET-KİT 7/24 ACiL VETERİNER KLİNİĞİ ( NÖBETÇİ VETERİNER ), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 214 değerlendirme)",
    "phone": "0540 001 18 17",
    "email": "",
    "website": "http://vetkitveterinerklinigi.com.tr/",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-166",
    "name": "Çanakkale Vetlife Veteriner Kliniği ( 7/24 Nöbetçi-Acil Veteriner )",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Cevat Paşa, Bahriye Üçok Cd. No:20/1, 17100 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "Çanakkale Vetlife Veteriner Kliniği ( 7/24 Nöbetçi-Acil Veteriner ), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 185 değerlendirme)",
    "phone": "0532 286 45 17",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-167",
    "name": "ÇANAKKALE PETİKO VETERİNER KLİNİĞİ (7/24 NÖBETÇİ ACİL)",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Barbaros, Troya Cd. No:92, 17020 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale",
      "Laboratuvar & Röntgen"
    ],
    "description": "ÇANAKKALE PETİKO VETERİNER KLİNİĞİ (7/24 NÖBETÇİ ACİL), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.5, 136 değerlendirme)",
    "phone": "0541 736 41 86",
    "email": "",
    "website": "https://canakkalepetikoveteriner.com/",
    "baseTrustScore": 9,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-168",
    "name": "(ÇANAKKALE 7/24 ACİL VETERİNER) -BİORA VETERİNER KLİNİĞİ- (Nöbetçi Veteriner)",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Barbaros, Plaj Cd. no:1, 17020 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "(ÇANAKKALE 7/24 ACİL VETERİNER) -BİORA VETERİNER KLİNİĞİ- (Nöbetçi Veteriner), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 50 değerlendirme)",
    "phone": "0507 772 73 03",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-169",
    "name": "ÇANAKKALE SEMPATİ VETERİNER KLİNİĞİ ( ÇANAKKALE VETERİNER ) 7/24 ACİL",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Cevat Paşa, İnönü Cd. NO:59/A, 17100 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "ÇANAKKALE SEMPATİ VETERİNER KLİNİĞİ ( ÇANAKKALE VETERİNER ) 7/24 ACİL, Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.6, 45 değerlendirme)",
    "phone": "0546 450 29 00",
    "email": "",
    "website": "https://sempati.kolay.vet/",
    "baseTrustScore": 9.2,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-170",
    "name": "DR.BAHADIR ERŞAN VETERİNER KLİNİĞİ (VETERİNER iÇ HASTALIKLARI UZMANI)",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Cevat Paşa, Gazi Blv. 10/A, 17010 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "DR.BAHADIR ERŞAN VETERİNER KLİNİĞİ (VETERİNER iÇ HASTALIKLARI UZMANI), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.9, 74 değerlendirme)",
    "phone": "0505 442 06 98",
    "email": "",
    "website": "",
    "baseTrustScore": 9.8,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-171",
    "name": "KEPEZ ACİL VETERİNER 7/24 (Patimania Veteriner Kliniği)",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Cumhuriyet, Atatürk Cd. no:142/D, 17110 Kepez/Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "KEPEZ ACİL VETERİNER 7/24 (Patimania Veteriner Kliniği), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 26 değerlendirme)",
    "phone": "0546 713 92 53",
    "email": "",
    "website": "",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-172",
    "name": "KEPEZ ACİL 7/24 NÖBETÇİ VETERİNER (Boğazkent Veteriner Kliniği)",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "Boğazkent, Vali Mustafa Bey Cd. No:11/A, 17110 Kepez/Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "KEPEZ ACİL 7/24 NÖBETÇİ VETERİNER (Boğazkent Veteriner Kliniği), Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 4.8, 22 değerlendirme)",
    "phone": "0537 859 45 69",
    "email": "",
    "website": "https://www.bogazkentveteriner.com.tr/",
    "baseTrustScore": 9.6,
    "lastVerified": "2026-09-03"
  },
  {
    "id": "vet-173",
    "name": "Vet Castle Veteriner Kliniği",
    "city": "Çanakkale",
    "district": "Çanakkale Merkez",
    "imageUrl": "",
    "address": "İsmetpaşa, Troya Cd. No:151/A, 17010 Çanakkale Merkez/Çanakkale",
    "features": [
      "7/24 Acil Servis",
      "Yoğun Bakım Ünitesi",
      "Cerrahi Müdahale"
    ],
    "description": "Vet Castle Veteriner Kliniği, Çanakkale Çanakkale Merkez bölgesinde 7/24 kesintisiz acil ve nöbetçi veterinerlik hizmeti sunmaktadır. (Google Haritalar Puanı: 5, 17 değerlendirme)",
    "phone": "0545 889 88 17",
    "email": "",
    "website": "http://www.instagram.com/vetcastleveterinerlik",
    "baseTrustScore": 10,
    "lastVerified": "2026-09-03"
  }
];

export const initialTaxis = [
  {
    id: "taxi-1",
    name: "Pati Dostu VIP Taksi",
    city: "İstanbul",
    district: "Kadıköy",
    imageUrl: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=400&q=80",
    allowedPets: ["dog", "cat"],
    features: ["Şehirlerarası Taşıma", "Klima Kontrolü", "Evcil Hayvan Yatağı", "7/24 Aktif"],
    price: "KM başına 20 TL",
    description: "İstanbul genelinde ve şehirlerarası yolculuklarda patili dostlarınız için özel tasarlanmış lüks ve güvenli pet taksi hizmeti. Taşımalarımızda özel dezenfekte edilmiş pet koltukları ve emniyet kemerleri kullanılmaktadır.",
    phone: "+90 532 123 4567",
    email: "vippati@pettaksi.com",
    website: "https://www.enuygun.com",
    baseTrustScore: 9.6,
    lastVerified: "2026-08-24"
  },
  {
    id: "taxi-2",
    name: "Bodrum Pet Transfer",
    city: "Muğla",
    district: "Bodrum",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    allowedPets: ["dog", "cat", "bird"],
    features: ["Şehir içi Sabit Fiyat", "Kafes Sağlama", "Veteriner Refakati"],
    price: "Şehir içi sabit 400 TL",
    description: "Bodrum yarımadasında kedi, köpek ve kuşlarınızın veteriner, otel, plaj ve havalimanı transferlerini güvenle sağlıyoruz. Klimalı araçlarımız her sürüş sonrası sterilize edilmektedir.",
    phone: "+90 542 765 4321",
    email: "bodrum@pettaksi.com",
    website: "https://www.enuygun.com",
    baseTrustScore: 9.3,
    lastVerified: "2026-08-20"
  }
];

export const methodologyContent = {
  title: "Değerlendirme Metodolojimiz ve Sınıflandırma Kriterleri",
  description: "patiyleseyahat.com olarak listelediğimiz her tesisin evcil hayvan dostu olma düzeyini objektif ve doğrulanabilir kriterlerle belirliyoruz. Amacımız sadece tesislerin beyanlarına dayanmak değil, hayvan sahiplerine net beklentiler sunmaktır.",
  levels: [
    {
      level: 1,
      name: "Evcil Hayvan Kabul Ediyor (Pet-Allowed)",
      criteria: [
        "Evcil hayvanların odaya girmesine yasal olarak izin verir.",
        "Evcil hayvanlar için herhangi bir özel konfor ekipmanı (yatak, mama kabı vb.) sunmaz.",
        "Ortak alanların (bahçe, restoran, havuz) çoğuna evcil hayvan girişini yasaklar.",
        "Katı kilo ve ırk kısıtlamaları veya yüksek ek ücretler uygulayabilir."
      ],
      description: "Dostunuzla sadece geceyi geçirebileceğiniz, ancak otel içinde yüksek özgürlük veya özel konfor beklememeniz gereken, temel barınma odaklı tesislerdir."
    },
    {
      level: 2,
      name: "Evcil Hayvan Dostu (Pet-Friendly)",
      criteria: [
        "Dostunuz için odada mama ve su kabı gibi temel ihtiyaçları temin eder.",
        "Evcil hayvanların dolaşabileceği geniş bir açık yeşil alan/bahçe barındırır.",
        "Açık havada bulunan kahvaltı/restoran alanının belirli bölümlerine tasmalı kabule izin verir.",
        "Evcil hayvanların konaklaması için makul ve şeffaf kurallar/ücretler koyar."
      ],
      description: "Evcil hayvanınızın temel konforunun düşünüldüğü, bahçesinde rahatça dolaşabildiği ve kahvaltıda yanınızda oturabildiği, dost canlısı tesislerdir."
    },
    {
      level: 3,
      name: "Evcil Hayvan Deneyimi Sunuyor (Pet-Experience)",
      criteria: [
        "Özel köpek plajı (Pet Beach), köpek havuzu veya özel oyun parkı gibi kapsamlı dış mekan hizmetleri sunar.",
        "Girişte karşılama paketi, özel yatak, ödül maması ve pet menüsü (gurme köpek mamaları) sağlar.",
        "Anlaşmalı 7/24 acil veteriner desteği ve transfer olanağı barındırır.",
        "Odada yalnız bırakılabilme esnekliği veya oda başına birden fazla hayvan kabulü sunar."
      ],
      description: "Dostunuzun da sizin kadar tatil yaptığı, onun konforu ve eğlencesi için her detayın titizlikle tasarlandığı üst düzey evcil hayvan seyahat noktalarıdır."
    }
  ]
};
