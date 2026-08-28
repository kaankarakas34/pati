// mockData.js - Initial Database for patiyleseyahat.com (Revize 1)

export const initialHotels = [
  {
    id: "hotel-1",
    name: "The Marmara Bodrum",
    city: "Muğla",
    district: "Bodrum",
    type: "Butik Otel",
    allowedPets: ["dog", "cat"],
    suitability: 3, // Evcil Hayvan Deneyimi Sunuyor
    weightLimit: 15, // 15 kg
    extraFee: "no", // Ek ücret yok
    features: [
      "Bahçesi bulunan",
      "Mama ve su kabı sağlayan",
      "Evcil hayvan yatağı sağlayan",
      "Pet menüsü bulunan",
      "Veteriner desteği bulunan",
      "Evcil hayvanların restoran veya kahvaltı alanına girmesine izin veren"
    ],
    quizTags: ["birlikte", "kopek", "kedi", "kucuk-irk", "ucretsiz-pet", "bahceli", "pet-menusu", "restoran-izni", "odada-yalniz"],
    baseTrustScore: 9.8,
    verified: false,
    lastVerified: "2026-08-15",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Bodrum Kalesi manzarasına hakim, tepe konumda bulunan The Marmara Bodrum, evcil hayvanların sadece 'kabul edildiği' değil, özel olarak ağırlandığı bir tesistir. Editör ekibimizin bizzat ziyaret ederek doğruladığı bu tesiste, dostunuzla birlikte lüks ve konforlu bir tatil geçirebilirsiniz. Bahçe katı odalarında evcil hayvanınızın rahatça çimlerde vakit geçirmesi sağlanır.",
    whySelected: "Ege Bölgesi'nde evcil hayvanlara özel gurme menü (Pet Menü) sunan, odalarda özel tasarım yatak ve mama kabı bulunduran ve restoranın açık alanında evcil hayvanınızla birlikte oturmanıza izin veren ender 5 yıldızlı butik otellerden biridir.",
    suitableFor: [
      "Bahçeli odada kalmak isteyen kedi ve küçük-orta ırk köpek sahipleri",
      "Dostu için gurme beslenme ve özel yatak arayanlar",
      "Tesis ortak alanlarında köpeğini tasmalı olarak gezdirmek isteyenler"
    ],
    notSuitableFor: [
      "15 kg üzeri büyük ırk köpek sahipleri (Tesis politikası gereği 15 kg üstü kabul edilmemektedir)",
      "Kafessiz kuş veya kemirgen sahipleri (Yalnızca kedi ve köpek kabul edilmektedir)"
    ],
    disallowedPets: ["Kuş", "Tavşan", "Sürüngenler"],
    breedRestrictions: "Tehlike arz eden ırklar (Pitbull, Dogo Argentino vb.) yerel kanunlar gereği kabul edilememektedir.",
    maxPetsPerRoom: 2,
    depositInfo: "Depozito talep edilmemektedir. Ancak odada oluşabilecek fiziksel hasarlar misafirin sorumluluğundadır.",
    requiredDocs: "Girişte aşı karnesi, kuduz aşısı kaydı ve parazit aşılarının güncel olduğunu gösteren veteriner pasaportunun ibrazı zorunludur.",
    canLeaveInRoomAlone: true, // Odada yalnız kalabilir
    rules: {
      pool: "Havuz alanına ve havuz suyuna girmesi hijyen kuralları gereği yasaktır.",
      beach: "Plaj alanında özel ayrılmış çim bölgede tasmalı olarak bulunabilir.",
      restaurant: "Restoranın dış teras alanında, tasmalı olmak kaydıyla kahvaltı ve akşam yemeklerinde sahibine eşlik edebilir."
    },
    veterinarySupport: "Anlaşmalı 7/24 nöbetçi veteriner kliniği mevcuttur. Olası acil durumlarda resepsiyon üzerinden 5 dakika içinde transfer sağlanır.",
    phone: "+90 252 313 8130",
    email: "bodrum@themarmarahotels.com",
    website: "https://www.themarmarahotels.com/the-marmara-bodrum.aspx",
    editorNote: "Özellikle bahçe katı delüks odaları tercih etmenizi öneririz. Bu odalar doğrudan ortak çim alana açılmakta ve köpeklerin sabah yürüyüşünü son derece kolaylaştırmaktadır. Girişte sunulan 'Pati Karşılama Paketi' içerisindeki organik ödül mamaları editörümüzün köpeği tarafından çok beğenildi.",
    infoSource: "Otel Yönetimi & Yerinde Editör Denetimi",
    faq: [
      {
        q: "The Marmara Bodrum'da büyük ırk köpekler kalabilir mi?",
        a: "Maalesef hayır. Otelde evcil hayvanlar için 15 kg ağırlık sınırı uygulanmaktadır. 15 kg üzerindeki köpekler kabul edilmemektedir."
      },
      {
        q: "Evcil hayvan için ek bir konaklama ücreti alınıyor mu?",
        a: "Hayır, The Marmara Bodrum'da doğrulanmış politikaya göre evcil hayvan konaklaması tamamen ücretsizdir."
      },
      {
        q: "Köpeğimi odada yalnız bırakabilir miyim?",
        a: "Evet, köpeğinizin oda içerisinde yalnız kalmasına izin verilmektedir. Ancak otel yönetimi, temizlik görevlilerinin odaya girdiği esnada köpeğin strese girmemesi için kapıya özel 'İçeride Pati Var' asacağının takılmasını rica etmektedir."
      }
    ]
  },
  {
    id: "hotel-2",
    name: "Kapadokya Cave Suites",
    city: "Nevşehir",
    district: "Göreme",
    type: "Butik Otel",
    allowedPets: ["dog", "cat", "bird"],
    suitability: 2, // Evcil Hayvan Dostu
    weightLimit: 0, // Kilo sınırı yok
    extraFee: "Gecelik 250 TL",
    features: [
      "Bahçesi bulunan",
      "Mama ve su kabı sağlayan",
      "Kilo sınırı olmayan",
      "Kuş kabul eden"
    ],
    quizTags: ["birlikte", "kopek", "kedi", "kus", "buyuk-irk", "kucuk-irk", "bahceli", "ek-ucretli", "oda-servisi"],
    baseTrustScore: 9.1,
    verified: false,
    lastVerified: "2026-07-28",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "Kapadokya'nın kalbi Göreme'de, geleneksel mağara odalarında otantik bir konaklama sunan Kapadokya Cave Suites, evcil hayvan dostu politikasıyla öne çıkıyor. Kilo sınırı olmaksızın köpek, kedi ve kafesinde olmak kaydıyla kuş kabul eden tesiste, geniş taş avlu ve bahçe alanları patili dostlarınızın dolaşması için idealdir.",
    whySelected: "Kapadokya bölgesinde mağara konseptli oteller arasında kilo sınırı uygulamayan ve büyük ırk köpekleri de kabul eden nadir işletmelerdendir. Ayrıca kuş severler için de uygundur.",
    suitableFor: [
      "Büyük ırk köpek sahipleri (Golden Retriever, Labrador, Pointer vb. sınırı yoktur)",
      "Kafes kuşlarıyla birlikte seyahat eden doğaseverler",
      "Tarihi ve taş mimaride dostuyla vakit geçirmek isteyenler"
    ],
    notSuitableFor: [
      "Mağara odaların nemli havasına karşı solunum hassasiyeti olan evcil hayvanlar",
      "Otelde ek ücret ödemek istemeyen bütçe odaklı seyahat edenler"
    ],
    disallowedPets: ["Sürüngenler", "Tavşan ve kemirgenler (Kablolara zarar verme riski nedeniyle oda içinde serbest bırakılamaz)"],
    breedRestrictions: "Agresif tavır sergilemeyen tüm ırklar kabul edilir.",
    maxPetsPerRoom: 1,
    depositInfo: "Girişte hasar durumunda iade edilmek üzere 1.000 TL depozito alınır veya kredi kartı provizyonu bloke edilir.",
    requiredDocs: "Güncel aşı karnesi zorunludur. Özellikle iç-dış parazit aşılarının son 3 ay içinde yapılmış olması istenir.",
    canLeaveInRoomAlone: false, // Odada yalnız kalamaz
    rules: {
      pool: "Tesiste havuz bulunmamaktadır.",
      beach: "Denize kıyısı bulunmamaktadır.",
      restaurant: "Kahvaltı salonunun kapalı alanına evcil hayvan kabul edilmez ancak taş avludaki açık kahvaltı masalarında yanınızda bulunabilir."
    },
    veterinarySupport: "Göreme merkezde bulunan anlaşmalı klinik ile acil veteriner desteği sağlanır.",
    phone: "+90 384 271 2800",
    email: "info@kapadokyacavesuites.com",
    website: "https://www.kapadokyacavesuites.com",
    editorNote: "Kaya odalar doğal olarak izole ve sessiz olduğu için dış seslerden korkan köpekler burada çok rahat ediyor. Kilo sınırının olmaması harika bir avantaj. Ancak otel içerisinde dik merdivenler bulunduğundan eklem rahatsızlığı olan yaşlı köpekler için düz ayak olan avlu odalarını talep etmeniz önem taşır.",
    infoSource: "İşletme Beyanı",
    faq: [
      {
        q: "Kapadokya Cave Suites'te köpekler için kilo limiti var mı?",
        a: "Hayır. Otelde herhangi bir kilo veya boy sınırı bulunmamaktadır. Büyük ırk köpekler de konaklayabilir."
      },
      {
        q: "Evcil hayvan ücreti nedir?",
        a: "Evcil hayvanlar için temizlik ve ekstra dezenfeksiyon bedeli olarak gecelik 250 TL ek ücret alınmaktadır."
      }
    ]
  },
  {
    id: "hotel-3",
    name: "Kabak Dome Suites & Glamping",
    city: "Muğla",
    district: "Fethiye",
    type: "Glamping tesisi",
    allowedPets: ["dog", "cat", "other"],
    suitability: 3, // Evcil Hayvan Deneyimi Sunuyor
    weightLimit: 0,
    extraFee: "no",
    features: [
      "Bahçesi bulunan",
      "Doğa içinde",
      "Kilo sınırı olmayan",
      "Birden fazla evcil hayvan kabul eden",
      "Ek ücret almayan",
      "Mama ve su kabı sağlayan"
    ],
    quizTags: ["birlikte", "kopek", "kedi", "buyuk-irk", "kucuk-irk", "ucretsiz-pet", "bahceli", "doga-icinde", "coklu-pet"],
    baseTrustScore: 9.7,
    verified: false,
    lastVerified: "2026-08-01",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    description: "Fethiye'nin meşhur Kabak Koyu'nda doğayla baş başa lüks kubbe çadırlarda (glamping) hizmet veren tesis, adeta patili dostlarımızın cennetidir. Etrafı çam ormanlarıyla çevrili olan ve ek ücret almayan Kabak Dome, birden fazla evcil hayvan kabul etmesi ve sınırsız özgürlük alanıyla öne çıkıyor.",
    whySelected: "Glamping kategorisinde hiçbir kilo sınırı koymadan, oda başı 3 hayvana kadar izin veren ve tamamen ek ücretsiz olan ekolojik bir yaklaşımı benimsediği için listemizin gözdesidir.",
    suitableFor: [
      "Doğa yürüyüşü yapmayı seven enerjik köpekler ve sahipleri",
      "Aynı anda 2 veya daha fazla evcil hayvanla seyahat edenler",
      "Glamping lüksünü doğada yaşamak isteyen kedi sahipleri"
    ],
    notSuitableFor: [
      "Açık arazide serbest dolaşan yerel hayvanlardan (köy köpekleri, keçiler) rahatsız olan veya avlanma içgüdüsü yüksek olan evcil dostlar",
      "Dik yamaçta kurulu olduğu için sürekli tırmanma gerektiren yollardan rahatsız olacak yaşlı hayvanlar"
    ],
    disallowedPets: ["Yok. Tüm evcil hayvanlar (hamster, tavşan dahil) kendi kafes ve güvenlik önlemleri alınarak kalabilir."],
    breedRestrictions: "Hiçbir ırk kısıtlaması bulunmamaktadır. Ancak çevreye aşırı havlama veya saldırganlık gösteren hayvanlar için tasmalı gezinme şartı katıdır.",
    maxPetsPerRoom: 3,
    depositInfo: "Depozito alınmamaktadır.",
    requiredDocs: "Temel aşı kartı beyanı yeterlidir.",
    canLeaveInRoomAlone: false,
    rules: {
      pool: "Ortak jakuzi/havuz alanına evcil hayvanların girmesi yasaktır.",
      beach: "Kabak koyu plajına inişte köpekler tamamen serbesttir ve denize girebilir.",
      restaurant: "Açık hava restoran alanında evcil hayvanınızla dilediğiniz gibi oturabilirsiniz, hiçbir kısıtlama yoktur."
    },
    veterinarySupport: "Fethiye merkezde 24 saat açık veteriner kliniği ile irtibat halindedir (Yaklaşık 35 km mesafede).",
    phone: "+90 252 642 1122",
    email: "contact@kabakdome.com",
    website: "https://www.kabakdome.com",
    editorNote: "Kabak Koyu yolu biraz virajlı ve sarsıcı olabilir, arabada mide bulantısı yaşayan patili dostlarınız için yola çıkmadan önce veterinerinizden bulantı önleyici tablet almanızı öneririz. Kubbe çadırların içi oldukça geniştir. Akşamları serinleyen havada çadır önü terasında dostunuzla yıldızları izlemek paha biçilemez.",
    infoSource: "Yerinde Editör Denetimi",
    faq: [
      {
        q: "Kabak Dome'da aynı odada 2 köpek kalabilir miyiz?",
        a: "Evet, bu otelde oda başına en fazla 3 evcil hayvana kadar izin verilmektedir ve ek ücret talep edilmez."
      },
      {
        q: "Köpeğimi odada yalnız bırakıp Kabak koyuna inebilir miyim?",
        a: "Kubbe çadırlarda (glamping) ses yalıtımı çadır bezi nedeniyle az olduğundan ve dostunuzun yalnız kaldığında havlayarak çevreyi rahatsız etme riski olduğundan odada yalnız bırakılmasına izin verilmemektedir."
      }
    ]
  },
  {
    id: "hotel-4",
    name: "Club Marvy",
    city: "İzmir",
    district: "Menderes",
    type: "Tatil köyü",
    allowedPets: ["dog"],
    suitability: 3, // Evcil Hayvan Deneyimi Sunuyor
    weightLimit: 20, // 20 kg
    extraFee: "Gecelik 450 TL",
    features: [
      "Pet plajı bulunan",
      "Evcil hayvan yatağı sağlayan",
      "Mama ve su kabı sağlayan",
      "Bahçesi bulunan",
      "Denize sıfır",
      "Veteriner desteği bulunan"
    ],
    quizTags: ["birlikte", "kopek", "kucuk-irk", "ek-ucretli", "denize-sifir", "pet-plaji", "bahceli"],
    baseTrustScore: 9.6,
    verified: false,
    lastVerified: "2026-08-10",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    description: "Özdere'de konumlanan lüks Club Marvy, Türkiye'de 'Pet Plajı' konseptine sahip az sayıdaki seçkin tatil köyünden biridir. Doğanın kalbinde konumlanan bu modern tesiste, köpek misafirler için özel ayrılmış koyda patili dostunuzla beraber Akdeniz sularının keyfini çıkarabilirsiniz.",
    whySelected: "Türkiye genelinde 5 yıldızlı ultra her şey dahil tatil köyleri arasında, köpeklere özel tasmayla girilebilen kum plaj sunan ve özel yürüyüş parkurları hazırlayan öncü tesislerden biridir.",
    suitableFor: [
      "Denizde yüzmeyi çok seven ve plajda sahibiyle güneşlenmek isteyen köpekler",
      "Lüks tatil köyü konforundan ödün vermeden patili dostuyla seyahat etmek isteyenler"
    ],
    notSuitableFor: [
      "Kedi sahipleri (Otel sadece köpek misafirleri kabul etmektedir)",
      "20 kg'dan büyük ırk köpek sahipleri"
    ],
    disallowedPets: ["Kedi", "Kuş", "Kemirgenler", "Tüm diğer hayvanlar (Yalnızca köpek kabul edilir)"],
    breedRestrictions: "Türk kanunlarına göre yasaklı ırklar dışındaki tüm uysal köpekler kabul edilmektedir.",
    maxPetsPerRoom: 1,
    depositInfo: "Girişte hasar taahhütnamesi imzalatılır, depozito alınmaz.",
    requiredDocs: "Karne, aşı kartı, kuduz aşısının son 1 yıl içinde yapılmış olması ve mikroçip kaydı.",
    canLeaveInRoomAlone: false,
    rules: {
      pool: "Ortak havuzlar ve Aqua Park alanına köpeklerin girmesi kesinlikle yasaktır.",
      beach: "Tesiste köpeklerin denize girmesi için özel tabelalarla işaretlenmiş 'Marvy Pet Beach' mevcuttur. Diğer ana plajlara köpek sokulamaz.",
      restaurant: "Ana restoran kapalı alanına kabul edilmez. Açık büfe dış terasında özel ayrılmış masalarda bulunabilir."
    },
    veterinarySupport: "Menderes ilçesindeki tam donanımlı hayvan hastanesi ile 24 saat acil ambulans anlaşması bulunmaktadır.",
    phone: "+90 232 797 1000",
    email: "marvy@clubmarvy.com",
    website: "https://www.clubmarvy.com",
    editorNote: "Club Marvy'nin pet plajı muazzam temizlikte. Plajda köpekler için tatlı su duş alanı bulunması, deniz tuzuyla cildin tahriş olmasını engellemek için mükemmel bir detay. Gecelik 450 TL ücret yüksek görünse de sunulan plaj imkanı ve odadaki ortopedik yatak hizmeti bu bedeli karşılıyor.",
    infoSource: "Resmi Web Sitesi ve Yönetim Doğrulaması",
    faq: [
      {
        q: "Club Marvy'de köpekler plaja girebilir mi?",
        a: "Evet. Otelde sadece köpeklerin girmesi ve denizde yüzmesi için ayrılmış özel 'Marvy Pet Beach' adlı plaj bulunmaktadır."
      },
      {
        q: "Otelde kedi kabul ediliyor mu?",
        a: "Hayır. Club Marvy sadece köpek misafirleri kabul etmektedir; kedi, kuş ve diğer hayvanlar tesise kabul edilmemektedir."
      }
    ]
  },
  {
    id: "hotel-5",
    name: "Kozak Bungalov",
    city: "Bursa",
    district: "İznik",
    type: "Bungalov",
    allowedPets: ["dog", "cat", "bird", "other"],
    suitability: 1, // Evcil Hayvan Kabul Ediyor
    weightLimit: 10, // 10 kg sınırı
    extraFee: "no",
    features: [
      "Bahçesi bulunan",
      "Doğa içinde",
      "Ek ücret almayan"
    ],
    quizTags: ["birlikte", "kopek", "kedi", "kus", "kucuk-irk", "ucretsiz-pet", "bahceli", "doga-icinde"],
    baseTrustScore: 8.9,
    verified: false,
    lastVerified: "2026-06-15",
    imageUrl: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
    description: "İznik Gölü kıyısına yakın, zeytin ağaçları arasında yer alan Kozak Bungalov, sakin ve mütevazı bir tatil arayan patili dostu ailelere kapılarını açıyor. Bütçe dostu bungalov odaları ve yeşil bahçesi ile evcil hayvanlarınız için huzurlu bir dinlenme köşesidir.",
    whySelected: "İznik bölgesinde ek ücret talep etmeyen, temel düzeyde evcil hayvan kabulü (Pet-Allowed) sağlayan güvenilir ve temiz bir doğa işletmesidir.",
    suitableFor: [
      "Sakin ve doğa içinde küçük ırk köpek veya kedisiyle kafa dinlemek isteyenler",
      "Bölgede bütçe dostu bungalov konaklaması arayanlar"
    ],
    notSuitableFor: [
      "Ortopedik yatak, özel mama kapları veya pet menüsü gibi yüksek beklentileri olanlar",
      "10 kg'dan ağır büyük ırk köpekler"
    ],
    disallowedPets: ["Yok (10 kg sınırına uyulduğu takdirde hamster, papağan vb. kalabilir)"],
    breedRestrictions: "Yok.",
    maxPetsPerRoom: 1,
    depositInfo: "Alınmıyor.",
    requiredDocs: "Genel aşı takvimi kontrolü için karne ibrazı istenir.",
    canLeaveInRoomAlone: true,
    rules: {
      pool: "Havuz bulunmamaktadır.",
      beach: "Göl kıyısı halka açık alanlarda tasmalı gezdirilebilir.",
      restaurant: "Kahvaltı alanında tasmalı olarak masanın yanında bulunabilir."
    },
    veterinarySupport: "İznik ilçe merkezindeki veteriner hekimlerle iletişim bilgileri odalarda sunulmaktadır.",
    phone: "+90 224 757 4545",
    email: "info@kozakiznik.com",
    website: "https://www.kozakbungaloviznik.com",
    editorNote: "Bu tesis 'Evcil Hayvan Kabul Ediyor' seviyesindedir. Yani mama kabı, yatak veya pet havuzu gibi ek lüks hizmetler sunmazlar. Ancak herhangi bir ek ücret almamaları ve sakin bahçesiyle evcil hayvanların kendi ekipmanlarıyla rahatça konaklamasına izin vermeleri oldukça olumludur.",
    infoSource: "İşletme İletişim Hattı",
    faq: [
      {
        q: "Kozak Bungalov'da köpek yatağı veriliyor mu?",
        a: "Hayır. Tesisimiz evcil hayvan kabul etmektedir ancak yatak, mama kabı gibi ekipmanları misafirlerimizin kendi yanlarında getirmesi gerekmektedir."
      },
      {
        q: "Kozak Bungalov İznik gölüne yakın mı?",
        a: "Evet, tesis İznik Gölü'ne yaklaşık 5 dakikalık yürüyüş mesafesinde konumlanmaktadır."
      }
    ]
  }
];

export const initialBoardings = [
  {
    id: "boarding-1",
    name: "Pati Sarayı Kedi Oteli",
    category: "Kedi otelleri",
    city: "İstanbul",
    district: "Kadıköy",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    allowedPets: ["cat"],
    features: [
      "Bireysel oda",
      "Canlı kamera",
      "7/24 personel",
      "Günlük fotoğraf ve video",
      "Veteriner desteği",
      "Özel mama uygulaması",
      "İlaç uygulama"
    ],
    quizTags: ["birak", "kedi", "cam-oda", "724-gozetim", "canli-yayin", "ilac-takip"],
    baseTrustScore: 9.7,
    verified: true,
    lastVerified: "2026-08-20",
    price: "Günlük 400 TL",
    description: "Kadıköy'de tamamen kedilerin konforu ve psikolojisi düşünülerek tasarlanmış lüks bir butik otel. Kafes sisteminin kesinlikle kullanılmadığı tesiste, her kedinin tırmanma alanları, tırmalama tahtaları ve oyuncaklarla dolu kendi özel şeffaf odası bulunur. 7/24 görevli personel ve canlı HD kameralarla kedinizi her an cep telefonunuzdan izleyebilirsiniz.",
    boardingModel: "Bireysel Cam Odalar (Her kediye 3 metrekarelik özel tırmanma alanlı alan)",
    dailyProgram: "Günde 3 kez mama kontrolü, taze su değişimi, günde 2 kez yarımşar saatlik gözetimli bireysel oyun odası aktivitesi, tüylerin taranması.",
    accreditedVet: "Kadıköy VetArt 24 Saat Açık Hayvan Hastanesi ile anlaşmalı",
    phone: "+90 216 444 7284",
    email: "iletisim@patisarayikedi.com",
    website: "https://www.patisarayikedi.com",
    cameraSupport: true,
    requiredDocs: "Karma aşı (son 1 yıl içinde), Lösemi aşısı, iç-dış parazit uygulamasının üzerinden en fazla 2 ay geçmiş olması ve aşı karnesi teslimi.",
    neuteringRequired: "6 aylıktan büyük kedilerde kısırlaştırma şartı aranmaktadır. Kısırlaştırılmamış kediler diğer kedilerle ortak oyun alanlarına çıkartılamaz.",
    aggressionPolicy: "Sadece kendi odasında kalacağı için diğer kedilerle temas etmez. Agresif kediler için ilaç takibi ve sakinleştirici oyunlar hekim gözetiminde uygulanır.",
    infoSource: "Yerinde Editör Denetimi"
  },
  {
    id: "boarding-2",
    name: "Lolipop Köpek Akademisi ve Oteli",
    category: "Köpek otelleri",
    city: "İstanbul",
    district: "Göktürk",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    allowedPets: ["dog"],
    features: [
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
    quizTags: ["birak", "kopek", "kafessiz", "724-gozetim", "bahceli-oyun", "buyuk-irk", "transfer-var"],
    baseTrustScore: 9.5,
    verified: true,
    lastVerified: "2026-08-18",
    price: "Günlük 650 TL",
    description: "Göktürk ormanının sınırında, 2 dönüm yeşil arazi üzerine kurulu olan Lolipop Köpek Oteli, köpeğinize adeta bir tatil kampı deneyimi sunar. Kafeslerin bulunmadığı tesiste, sosyal köpekler gün boyu uzman gözetmenler eşliğinde bahçede koşup oynar. Gece ise ısıtmalı/klimalı kapalı konaklama alanlarında kendilerine özel ortopedik yataklarda uyurlar.",
    boardingModel: "Grup halinde serbest konaklama veya sosyal olmayan köpekler için özel bölmeler.",
    dailyProgram: "Sabah 08:00 uyanma, bahçeye çıkış ve serbest oyun, 10:00 sabah maması ve dinlenme, 14:00 temel itaat tazeleyici oyunlar ve orman yürüyüşü, 17:00 akşam maması, 20:00 gece tuvalet çıkışı ve uyku.",
    accreditedVet: "Göktürk PetHospital (5 dakika mesafede)",
    phone: "+90 212 322 9090",
    email: "gokturk@lolipoppet.com",
    website: "https://www.lolipoppet.com",
    cameraSupport: false,
    requiredDocs: "Karma, Kuduz, Bronchine (Barınak Öksürüğü) aşıları güncel olmalı. Mikroçip zorunludur.",
    neuteringRequired: "Erkek köpeklerde kısırlaştırma şartı aranır. Dişi köpeklerin kızgınlık döneminde olması durumunda kabul edilemezler.",
    aggressionPolicy: "Girişte 2 saatlik 'sosyalleşme testi' uygulanır. Agresif veya aşırı korkak köpekler otel bölümüne kabul edilmez, bireysel eğitime yönlendirilir.",
    infoSource: "İşletme Beyanı & Editör Gözlemi"
  },
  {
    id: "boarding-3",
    name: "Happy Paws Ev Tipi Bakım Merkezi",
    category: "Ev tipi bakım merkezleri",
    city: "Ankara",
    district: "Çankaya",
    imageUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80",
    allowedPets: ["dog", "cat"],
    features: [
      "Kafessiz konaklama",
      "7/24 personel",
      "Günlük fotoğraf ve video",
      "Veteriner desteği",
      "Özel mama uygulaması",
      "İlaç uygulama"
    ],
    quizTags: ["birak", "kedi", "kopek", "kafessiz", "724-gozetim", "ev-ortami"],
    baseTrustScore: 9.3,
    verified: true,
    lastVerified: "2026-07-15",
    price: "Günlük 350 TL",
    description: "Büyük, bahçeli bir villada aile sıcaklığında ev tipi bakım hizmeti veren Happy Paws, kafes ve benzeri sınırlamalardan tamamen uzaktır. Ev ortamına alışkın, koltukta uyumayı seven, sürekli insan ilgisi arayan hassas kedi ve köpekler için idealdir. Ev sahibi kendisi de profesyonel hayvan davranış uzmanıdır.",
    boardingModel: "Ev ortamında serbest dolaşım (Aynı anda en fazla 3 misafir kabul edilir).",
    dailyProgram: "Ev rutinine uygun beslenme, günde 3 kez Çankaya parklarında yürüyüş, akşam koltukta tarama ve sevgi saati.",
    accreditedVet: "Ankara Çankaya Veteriner Polikliniği",
    phone: "+90 532 999 8877",
    email: "happypawsankara@gmail.com",
    website: "https://www.instagram.com/happypawsankara",
    cameraSupport: false,
    requiredDocs: "Aşı karnesi fotoğrafı ve parazit damlalarının güncelliği.",
    neuteringRequired: "Ev ortamında karma kaldıkları için kısırlaştırma zorunludur.",
    aggressionPolicy: "Diğer evcil hayvanlara veya insanlara karşı en ufak agresyon gösteren canlılar kabul edilmez.",
    infoSource: "Editör Aile Referansları"
  },
  {
    id: "boarding-4",
    name: "VetLine Karma Pet Otel & Gündüz Bakım",
    category: "Kedi ve köpek kabul eden karma tesisler",
    city: "İzmir",
    district: "Karşıyaka",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    allowedPets: ["dog", "cat"],
    features: [
      "Bireysel oda",
      "7/24 personel",
      "Günlük fotoğraf ve video",
      "Veteriner desteği",
      "Transfer hizmeti",
      "Açık bahçe",
      "Günlük gezdirme"
    ],
    quizTags: ["birak", "kedi", "kopek", "724-gozetim", "vet-gozetim", "ilac-takip", "transfer-var"],
    baseTrustScore: 9.4,
    verified: true,
    lastVerified: "2026-05-10",
    price: "Günlük 500 TL",
    description: "Bünyesindeki veteriner kliniği ile entegre çalışan VetLine Pet Oteli, özellikle tıbbi takibe ihtiyacı olan, düzenli ilaç alması gereken veya yaşlı patili dostlar için en güvenli adrestir. Kediler ve köpekler için tamamen ayrı katlarda, ses yalıtımlı odalar tasarlanmıştır.",
    boardingModel: "Veteriner kliniğine bağlı ses yalıtımlı bireysel bölmeler and bahçe oyun alanları.",
    dailyProgram: "Veteriner hekim kontrolünde sabah viziti, ilaç ve tedavi uygulamaları, günde 2 kez bireysel egzersiz saati.",
    accreditedVet: "VetLine Veteriner Kliniği (Bünyesinde)",
    phone: "+90 232 369 1234",
    email: "otel@vetlineizmir.com",
    website: "https://www.vetlineizmir.com",
    cameraSupport: false,
    requiredDocs: "Tüm aşıların eksiksiz olması şarttır. Kronik hastalık raporları girişte teslim alınır.",
    neuteringRequired: "Zorunlu değil (Bireysel odalarda tecrit sağlandığı için kısır olmayan hayvanlar da kabul edilir).",
    aggressionPolicy: "Veteriner teknisyenleri gözetiminde bireysel bakım uygulandığı için agresif hayvanlar da güvenle kabul edilip tıbbi bakımı sürdürülür.",
    infoSource: "Klinik Yönetimi Doğrulaması"
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
    id: "vet-1",
    name: "Bodrum Acil Veteriner Kliniği",
    city: "Muğla",
    district: "Bodrum",
    imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=400&q=80",
    address: "Konacık Mh. Atatürk Cd. No: 12 Bodrum",
    features: ["7/24 Acil Servis", "Yoğun Bakım Ünitesi", "Cerrahi Müdahale", "Laboratuvar Hizmeti"],
    description: "Bodrum genelinde 24 saat kesintisiz hizmet veren, tam teşekküllü ameliyathane, dijital röntgen ve acil tıp uzmanı veteriner kadrosuna sahip kliniktir. Acil vakalar için ambulans hizmetimiz de mevcuttur.",
    phone: "+90 252 319 0000",
    email: "acilvet@bodrumveteriner.com",
    website: "https://www.enuygun.com",
    baseTrustScore: 9.8,
    lastVerified: "2026-08-22"
  },
  {
    id: "vet-2",
    name: "Karaköy Pati 24 Veteriner Tıp Merkezi",
    city: "İstanbul",
    district: "Beyoğlu",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80",
    address: "Kemeraltı Cd. No: 44 Karaköy/İstanbul",
    features: ["7/24 Nöbetçi Hekim", "Yoğun Bakım", "Röntgen & Ultrason", "Pet Oteli & Kan Bankası"],
    description: "İstanbul Avrupa yakasında kedi ve köpek acil durumları için kesintisiz cerrahi, dahiliye, yoğun bakım ve ambulans desteği sunan tam donanımlı hayvan tıp merkezi.",
    phone: "+90 212 244 0000",
    email: "karakoy24@patitip.com",
    website: "https://www.enuygun.com",
    baseTrustScore: 9.7,
    lastVerified: "2026-08-25"
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
