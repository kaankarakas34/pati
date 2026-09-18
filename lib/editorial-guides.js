/**
 * Kapsamlı Editoryal Rehber ve SEO/GEO İçerik Veri Modülü
 * Türkiye'nin popüler turizm illeri ve 12 tematik küme için zenginleştirilmiş makaleler,
 * GEO özetleri, karşılaştırma tabloları ve SSS yapıları üretir.
 */

import { slugify } from './seo-slugs.js';

export const POPULAR_CITIES = [
  {
    slug: 'istanbul',
    name: 'İstanbul',
    districts: ['Kadıköy', 'Beşiktaş', 'Beyoğlu', 'Şile', 'Sarıyer', 'Şişli', 'Adalar'],
    summary: 'Boğaz hattı yürüyüş rotaları, yemyeşil koruları ve evcil hayvan dostu butik otelleriyle İstanbul, patili dostunuzla metropol konforunu bir arada sunar.',
    tagline: 'Boğaz Manzarası ve Geniş Parklara Yakın Seçkin Konaklama Noktaları',
    beachAndParks: 'Caddebostan Sahil Parkı, Bebek Parkı, Maçka Demokrasi Parkı ve Belgrad Ormanı köpekle tasmalı yürüyüş için en popüler noktalardır.',
    vetNotice: 'İstanbul genelinde 150’den fazla 7/24 açık acil veteriner kliniği ve hayvan hastanesi bulunmaktadır. Kadıköy, Beşiktaş ve Şişli ilçelerinde acil klinik erişimi ortalama 5-10 dakikadır.',
    rules: 'Toplu taşımada 5 kg altı küçük ırklar kapalı taşıma çantasıyla seyahat edebilir. Otellerde genellikle güncel aşı karnesi (kuduz ve karma aşılar) ile mikroçip kaydı girişte kontrol edilir.'
  },
  {
    slug: 'mugla',
    name: 'Muğla',
    districts: ['Bodrum', 'Fethiye', 'Marmaris', 'Datça', 'Akyaka', 'Köyceğiz'],
    summary: 'Bodrum, Fethiye ve Marmaris koylarında kedi ve köpeğinizle denize girebileceğiniz, zeytin ağaçları arasında müstakil bahçeli taş evler ve lüks tatil köyleri.',
    tagline: 'Ege Koyları, Doğa İçinde Bungalovlar ve Pet Dostu Plajlar',
    beachAndParks: 'Bodrum Gümüşlük ve Yalıkavak sahilleri, Fethiye Kayaköy yürüyüş rotaları ve Akyaka Azmak boyu köpekle doğa tatili için idealdir.',
    vetNotice: 'Bodrum Merkez, Fethiye ve Marmaris ilçelerinde 7/24 nöbetçi veteriner klinikleri bulunmaktadır. Yaz aylarında sıcak çarpması ve deniz suyu yutma riskine karşı acil klinik numaralarını kaydetmeniz önerilir.',
    rules: 'Muğla genelindeki butik otel ve villaların %80’i bahçe kullanımı sunar. Plajlarda sabah erken ve akşam gün batımı saatleri patili dostların yüzmesi için en elverişli zamanlardır.'
  },
  {
    slug: 'antalya',
    name: 'Antalya',
    districts: ['Kaş', 'Kalkan', 'Kemer', 'Alanya', 'Muratpaşa', 'Konyaaltı', 'Manavgat'],
    summary: 'Kaş ve Kalkan’ın korunaklı villalarından Kemer’in çam ormanları içindeki tatil köylerine kadar Akdeniz’in en kapsamlı evcil hayvan dostu konaklama seçenekleri.',
    tagline: 'Akdeniz Güneşi, Özel Havuzlu Villalar ve Geniş Bahçeli Resortlar',
    beachAndParks: 'Konyaaltı Pet Parkı, Kaş Çukurbağ Yarımadası koyları ve Kemer sahil yürüyüş yolları tasmalı gezi için uygundur.',
    vetNotice: 'Muratpaşa, Kepez ve Konyaaltı’nda tam donanımlı hayvan hastaneleri kesintisiz hizmet verir. Kaş ve Kalkan bölgesinde ise acil nöbetçi klinikler mevcuttur.',
    rules: 'Akdeniz sıcaklarında patilerin asfalttan yanmaması için gündüz saatlerinde koruyucu önlemler alınmalı, otellerin klima ve gölgelik bahçe imkanları kontrol edilmelidir.'
  },
  {
    slug: 'izmir',
    name: 'İzmir',
    districts: ['Çeşme', 'Alaçatı', 'Urla', 'Foça', 'Karşıyaka', 'Alsancak', 'Seferihisar'],
    summary: 'Alaçatı’nın begonvilli butik otelleri, Urla bağ rotaları ve Çeşme sahillerinde kedi ve köpeğinizle kaliteli ve huzurlu bir Ege tatili.',
    tagline: 'Alaçatı Taş Evleri, Urla Gastronomi Rotaları ve Ege Esintisi',
    beachAndParks: 'Urla Kumdenizi, Çeşme Ilıca plaj çevresi ve İzmir Kordonboyu geniş çim alanlarıyla patili dostların sosyalleşebileceği popüler mekanlardır.',
    vetNotice: 'Alsancak, Karşıyaka, Bornova ve Çeşme merkezde 7/24 acil müdahale yapabilen uzman veteriner klinikleri yer almaktadır.',
    rules: 'Çeşme ve Alaçatı butik otellerinde oda içi sessizlik ve diğer misafirlerin konforu önemsenir. Tasmalı bahçe kullanımı standart kuraldır.'
  },
  {
    slug: 'nevsehir',
    name: 'Nevşehir (Kapadokya)',
    districts: ['Ürgüp', 'Göreme', 'Uçhisar', 'Avanos', 'Ortahisar'],
    summary: 'Kapadokya’nın büyüleyici peri bacaları arasında, doğal serinliğe sahip tarihi mağara (cave) otellerinde evcil hayvanınızla mistik bir deneyim.',
    tagline: 'Peri Bacaları Eteğinde Mağara Otelleri ve Vadi Yürüyüşleri',
    beachAndParks: 'Aşk Vadisi, Güvercinlik Vadisi ve Kızılçukur Vadisi sabah erken saatlerde balon manzarası eşliğinde köpekle doğa yürüyüşü için benzersizdir.',
    vetNotice: 'Nevşehir Merkez ve Ürgüp’te evcil hayvan cerrahi ve dahiliye desteği sunan nöbetçi veteriner klinikleri bulunmaktadır.',
    rules: 'Kapadokya mağara odaları doğal kaya yapısı sayesinde yazın serin, kışın sıcaktır. Kayalık arazide patilerin tahriş olmaması için yürüyüş sonrası pati kontrolleri yapılmalıdır.'
  },
  {
    slug: 'canakkale',
    name: 'Çanakkale',
    districts: ['Bozcaada', 'Assos (Ayvacık)', 'Gökçeada', 'Gelibolu', 'Merkez'],
    summary: 'Bozcaada’nın rüzgarlı bağ evleri, Assos’un kadim taş sokakları ve Kaz Dağları eteklerinde doğayla iç içe huzurlu bir tatil.',
    tagline: 'Bozcaada Bağ Evleri, Assos Antik Kenti ve Kaz Dağları Esintisi',
    beachAndParks: 'Bozcaada Ayazma arkası koylar, Assos Kadırga Koyu ve Kaz Dağları orman patikaları temiz hava ve sakin yürüyüşler için idealdir.',
    vetNotice: 'Çanakkale Merkez ve Ezine/Ayvacık bölgesinde nöbetçi veteriner klinikleri hizmet vermektedir. Adalara geçerken feribot kurallarına dikkat edilmelidir.',
    rules: 'Bozcaada ve Gökçeada feribotlarında araç içi veya güvertede tasmalı evcil hayvan kabul edilir. Yaz döneminde yoğunluk nedeniyle feribot rezervasyonunu önceden yapın.'
  },
  {
    slug: 'balikesir',
    name: 'Balıkesir',
    districts: ['Ayvalık', 'Cunda Adası', 'Edremit', 'Akçay', 'Erdek'],
    summary: 'Ayvalık ve Cunda Adası’nın nostaljik Rum konaklarında, Edremit Körfezi’nin zeytinlikleri arasında sakin ve nezih bir tatil.',
    tagline: 'Cunda Adası Taş Konakları ve Edremit Körfezi Zeytinlikleri',
    beachAndParks: 'Ayvalık Sarımsaklı sahil bandı, Cunda arka koyları ve Kaz Dağları Milli Parkı etekleri doğa sever patililer için harika rotalardır.',
    vetNotice: 'Ayvalık ve Edremit merkezde donanımlı acil veteriner klinikleri 24 saat nöbet sistemiyle çalışmaktadır.',
    rules: 'Cunda sokaklarında serbest gezen ada kedileri ve köpekleri bulunabileceğinden, köpeğinizin tasmasını takılı tutmanız ve kontrollü dolaşmanız önerilir.'
  },
  {
    slug: 'sapanca',
    name: 'Sapanca & Sakarya',
    districts: ['Sapanca', 'Kırkpınar', 'Serdivan', 'Akyazı', 'Geyve'],
    summary: 'İstanbul’a 1.5 saat mesafede, göl kenarında etrafı korunaklı çitlerle çevrili, jakuzili, şömineli ve müstakil bahçeli doğa bungalovları.',
    tagline: 'Müstakil Korunaklı Bahçeli Göl Bungalovları ve Şömineli Dağ Evleri',
    beachAndParks: 'Sapanca Gölü sahil yürüyüş parkuru, Kırkpınar çim alanları ve Soğucak Yaylası doğa keşfi için kusursuzdur.',
    vetNotice: 'Sapanca ilçe merkezinde ve Adapazarı/Serdivan’da 7/24 tam teşekküllü veteriner klinikleri 15-20 dakika mesafededir.',
    rules: 'Bungalov tesislerinin tamamına yakınında etrafı çitlerle çevrili özel bahçe bulunur. Bu sayede köpeğiniz bahçede serbestçe oynayabilir.'
  },
  {
    slug: 'bolu',
    name: 'Bolu (Abant & Yedigöller)',
    districts: ['Abant', 'Mengen', 'Mudurnu', 'Göynük', 'Merkez'],
    summary: 'Abant Gölü ve Yedigöller Milli Parkı çevresinde, çam ormanlarıyla çevrili ahşap dağ otelleri ve göl kıyısı pet friendly tesisler.',
    tagline: 'Göl Manzaralı Dağ Evleri, Çam Ormanları ve Temiz Yayla Havası',
    beachAndParks: 'Abant Gölü çevresindeki 7 kilometrelik yürüyüş parkuru ve Gölcük Tabiat Parkı patili dostların doğada enerji atması için mükemmeldir.',
    vetNotice: 'Bolu Merkezde tam donanımlı acil veteriner klinikleri 24 saat hizmet vermektedir. Abant bölgesinden merkeze ulaşım yaklaşık 25-30 dakikadır.',
    rules: 'Milli park alanlarında vahşi yaşamı korumak ve güvenliği sağlamak için köpeklerin daima tasmalı gezdirilmesi tavsiye edilir.'
  },
  {
    slug: 'aydin',
    name: 'Aydın (Kuşadası & Didim)',
    districts: ['Kuşadası', 'Didim', 'Söke', 'Efeler'],
    summary: 'Kuşadası ve Didim sahillerinde geniş bahçeli resortlar, Ege Denizi kıyısında köpek kabul eden oteller ve sakin yürüyüş yolları.',
    tagline: 'Ege Kıyıları, Marina Yürüyüş Yolları ve Bahçeli Konaklama',
    beachAndParks: 'Dilek Yarımadası Milli Parkı çevresi ve Kuşadası sahil kordonu tasmalı sabah yürüyüşleri için oldukça uygundur.',
    vetNotice: 'Kuşadası ve Didim merkezde 7/24 nöbetçi veteriner klinikleri bulunmaktadır.',
    rules: 'Halk plajlarında yoğun sezon saatleri dışında sabah erken ve akşam üzeri köpeklerin denize girmesine izin verilmektedir.'
  },
  {
    slug: 'ankara',
    name: 'Ankara',
    districts: ['Çankaya', 'Gölbaşı', 'Yenimahalle', 'Kızılcahamam', 'Etimesgut'],
    summary: 'Geniş şehir parklarına yakın iş ve tatil otelleri, Mogan ve Eymir Gölü kıyısında doğayla buluşabileceğiniz konaklama alternatifleri.',
    tagline: 'Seğmenler Parkı, Eymir Gölü ve Şehir İçi Seçkin Pet Dostu Oteller',
    beachAndParks: 'Seğmenler Parkı, Ahlatlıbel Tesisleri ve Eymir Gölü Ankara’da köpek sosyalleşmesi ve uzun yürüyüşler için başkentin kalbidir.',
    vetNotice: 'Ankara Üniversitesi Veteriner Fakültesi Hayvan Hastanesi ve Çankaya/Gölbaşı bölgesinde onlarca 7/24 acil klinik mevcuttur.',
    rules: 'Şehir içi toplu taşımada ve taksilerde kapalı taşıma çantası kuralına dikkat edilmeli, otellerde oda içi sessizlik gözetilmelidir.'
  },
  {
    slug: 'eskisehir',
    name: 'Eskişehir',
    districts: ['Tepebaşı', 'Odunpazarı'],
    summary: 'Porsuk Çayı boyunca uzanan yemyeşil parklar, tarihi Odunpazarı konakları ve genç dinamik atmosferiyle kedi-köpek dostu bir kültür kenti.',
    tagline: 'Porsuk Çayı Kıyısı, Kentpark ve Tarihi Odunpazarı Konakları',
    beachAndParks: 'Kentpark, Sazova Bilim Kültür Parkı dış yürüyüş alanları ve Porsuk kenarı adalar bölgesi keyifli gezintiler sunar.',
    vetNotice: 'Tepebaşı ve Odunpazarı ilçelerinde 24 saat nöbetçi veteriner hekim hizmeti kolayca bulunmaktadır.',
    rules: 'Tarihi Odunpazarı ahşap butik otellerinde ahşap zemin ve antika eşyaların korunması için misafirlerden özen beklenir.'
  },
  {
    slug: 'afyonkarahisar',
    name: 'Afyonkarahisar',
    districts: ['Sandıklı', 'İhsaniye (Frig Vadisi)', 'Merkez'],
    summary: 'Termal tesislerin huzurunu doğayla buluşturan, Frig Vadisi kaya yerleşimleri çevresinde evcil hayvan kabul eden konaklama noktaları.',
    tagline: 'Termal Tatil Köyleri, Frig Vadisi Tarihi ve Huzurlu Bahçeler',
    beachAndParks: 'Frig Vadisi yürüyüş patikaları ve Emre Gölü çevresi köpeğinizle doğa yürüyüşü ve keşif için eşsiz manzaralar sunar.',
    vetNotice: 'Afyon Kocatepe Üniversitesi Veteriner Sağlık Uygulama ve Araştırma Merkezi ile merkez kliniklerinden acil hizmet alınabilir.',
    rules: 'Termal havuz ve spa alanlarına hijyen yönetmelikleri gereği evcil hayvan kabul edilmez; bahçe ve oda konaklaması sağlanır.'
  },
  {
    slug: 'kibris',
    name: 'Kuzey Kıbrıs (KKTC)',
    districts: ['Girne', 'Gazimağusa', 'İskele', 'Lefkoşa'],
    summary: 'Akdeniz’in berrak suları, Girne limanı çevresinde evcil hayvan kabul eden butik oteller ve tatil köyleri.',
    tagline: 'Akdeniz Sahilleri, Girne Kalesi Manzarası ve Müstakil Villalar',
    beachAndParks: 'Girne sahil şeridi, Alagadi bölgesi ve İskele Long Beach yürüyüş yolları patili dostlarla yürüyüş için idealdir.',
    vetNotice: 'Girne ve Lefkoşa merkezde donanımlı veteriner klinikleri bulunmaktadır.',
    rules: 'Kıbrıs’a evcil hayvanla seyahat ederken kuduz titrasyon testi (RNATT), mikroçip ve KKTC Tarım Bakanlığı ithal ön izin belgesi zorunludur.'
  }
];

export const CUSTOM_CITY_CONTENT = {
  'antalya': {
    h1: "Antalya'da Evcil Hayvan Kabul Eden Oteller",
    metaTitle: "Antalya Evcil Hayvan Kabul Eden Oteller: Kaş, Kemer, Side, Alanya | Patili.co",
    metaDesc: "Antalya'da kedi ve köpek kabul eden otelleri keşfedin. Kaş, Kemer, Side ve Alanya için bölge seçimi, sıcak hava ve rezervasyon önerileri.",
    directAnswer: "Antalya genelinde Kaş'taki butik otellerden Kemer'in doğa bungalovlarına, Side'deki apartlardan Alanya tatil köylerine kadar geniş bir evcil hayvan kabul eden konaklama seçeneği bulunur. Yaz aylarında yüksek sıcaklık nedeniyle gölgeli alan, klimalı oda ve sabah/akşam serinliğinde yürüyüş saatleri özellikle önemlidir.",
    paragraphs: [
      "Antalya; uzun sahil şeridi, farklı konaklama türleri ve geniş ilçe seçenekleri sayesinde evcil hayvanla tatil planlayanların en çok araştırdığı şehirlerden biridir. Kaş'taki butik oteller, Kemer çevresindeki doğa konaklamaları, Side'deki apartlar ve Alanya'daki uzun süreli konaklama seçenekleri farklı ihtiyaçlara cevap verebilir.",
      "Antalya'da hangi bölgeyi seçmelisiniz? Kaş, küçük ölçekli butik otelleri ve villa seçenekleriyle öne çıkar; merkezdeki yokuşlu sokaklar yaşlı veya eklem sorunu olan köpekler için zorlayıcı olabilir. Kemer, deniz ile orman rotalarını bir araya getirir; bahçeli tesislerde çit güvenliği ve zemin sıcaklığı gözetilmelidir. Side ve Manavgat'ta büyük tesislerde evcil hayvanın yalnızca belirli bloklara kabul edilmesi yaygındır. Alanya ise uzun süreli apart konaklamalarıyla öne çıkar.",
      "Antalya sıcağında evcil hayvanla tatil yaparken günlük planı sıcaklığa göre ayarlamak hayatidir. Köpeğinizi sabah erken ve akşam saatlerinde yürütün. Gün ortasında sıcak asfalt, kum ve taş yüzeylerden uzak durun. Temiz suyu sürekli ulaşılabilir tutun ve evcil hayvanı hiçbir koşulda park edilmiş araçta bırakmayın.",
      "Rezervasyondan önce sorulacak sorular: Kedi ve köpek kabulü ayrı ayrı onaylanmalı, kilo ve ırk sınırı, oda klimasının durumu, balkon güvenliği, plaj bölümüne giriş izni ve en yakın nöbetçi veteriner kliniği mesafesi doğrudan işletmeden doğrulanmalıdır."
    ],
    faqs: [
      {
        question: "Antalya'da büyük köpek kabul eden oteller var mı?",
        answer: "Evet, ancak sayı ve koşullar ilçeye göre değişebilir. Kilo filtresini kullanın ve tesisten yazılı onay alın."
      },
      {
        question: "Evcil hayvanlar otelin plajına girebilir mi?",
        answer: "Otelin hayvan kabul etmesi plaja da izin verildiği anlamına gelmez. Tesisin özel plaj politikasını sorun."
      },
      {
        question: "Kaş mı, Kemer mi daha uygundur?",
        answer: "Kaş butik tesis ve villa; Kemer ise doğa ve geniş tesis seçenekleriyle öne çıkabilir. Karar evcil hayvanınızın hareket ihtiyacına ve ulaşım planınıza bağlıdır."
      }
    ]
  },
  'mugla': {
    h1: "Muğla'da Evcil Hayvan Dostu Oteller ve Tatil Bölgeleri",
    metaTitle: "Muğla Evcil Hayvan Dostu Oteller: Bodrum, Fethiye, Datça ve Akyaka | Patili.co",
    metaDesc: "Muğla'da evcil hayvan kabul eden otelleri; Bodrum, Fethiye, Marmaris, Datça ve Akyaka seçenekleriyle keşfedin.",
    directAnswer: "Muğla, Bodrum'un hareketli koylarından Fethiye'nin doğa parkurlarına, Datça'nın huzurlu taş konaklarından Akyaka'nın azmak kıyılarına kadar Türkiye'nin en fazla evcil hayvan dostu konaklama seçeneğine sahip tatil ilidir.",
    paragraphs: [
      "Muğla, evcil hayvanla deniz tatili denildiğinde Türkiye'nin en fazla seçenek sunan şehirlerinden biridir. Bodrum'un hareketli koyları, Fethiye'nin doğa rotaları, Marmaris'in uzun sahil şeridi, Datça'nın sakinliği ve Akyaka'nın doğayla iç içe yapısı farklı tatil beklentilerine hitap eder.",
      "Bodrum'da butik otel, apart ve villa seçenekleri boldur. Gürültüye hassas köpekler için merkezin dışındaki bahçeli tesisler daha rahattır; plaj bölümü kurallarını önceden sorun. Fethiye'de Kayaköy ve Faralya gibi doğa konaklamalarında bahçe çit güvenliği önemlidir. Marmaris'te Selimiye, Bozburun ve Turunç sakin alternatifler sunarken virajlı yollar ve veteriner mesafesi seyahat planına dahil edilmelidir.",
      "Datça sakinlik arayan hayvan sahipleri için güçlü bir seçenektir; gölgeli alan, klima ve güvenli balkon yapısı kontrol edilmelidir. Akyaka ve Dalyan'da ise sulak alan parazit koruması hakkında veterinerinize danışın; doğa içindeki tesislerde bahçe sınırlarını ve diğer hayvanlarla temas ihtimalini sorun."
    ],
    faqs: [
      {
        question: "Bodrum'da köpek kabul eden butik oteller bulunur mu?",
        answer: "Evet. Ancak kilo sınırı, ek ücret ve ortak alan kuralları tesis bazında değişir."
      },
      {
        question: "Fethiye'de bahçeli evcil hayvan dostu konaklama nasıl seçilir?",
        answer: "Bahçenin tamamen çevrili olmasını, başka hayvanlarla ortak kullanımı ve kapı güvenliğini kontrol edin."
      },
      {
        question: "Muğla'da iki evcil hayvanla kalınabilir mi?",
        answer: "Bazı tesisler kabul eder. Oda başına hayvan sayısını ve toplam ek ücreti önceden sorun."
      }
    ]
  },
  'izmir': {
    h1: "İzmir'de Evcil Hayvan Kabul Eden Oteller",
    metaTitle: "İzmir Evcil Hayvan Kabul Eden Oteller: Çeşme, Alaçatı, Urla, Foça | Patili.co",
    metaDesc: "İzmir'de kedi ve köpek kabul eden otelleri Çeşme, Alaçatı, Urla, Seferihisar ve Foça bölgelerine göre inceleyin.",
    directAnswer: "İzmir; Çeşme ve Alaçatı'nın seçkin butik otelleri, Urla'nın geniş bahçeli bağ konaklamaları ve Seferihisar/Foça'nın sakin sahil yaşamıyla kedi ve köpekle tatil için çok yönlü seçenekler sunar.",
    paragraphs: [
      "İzmir, hem uzun yaz tatili hem de kısa hafta sonu kaçamağı için evcil hayvan sahiplerine farklı rotalar sunar. Çeşme ve Alaçatı hareketli tatil deneyimiyle; Urla gastronomi ve sakin koylarıyla; Seferihisar ve Foça ise daha yavaş tempolu sahil yaşamıyla öne çıkar.",
      "Çeşme ve Alaçatı'daki butik otellerde dar merdivenler, küçük avlular ve oda boyutları büyük köpekler için her zaman uygun olmayabilir. Gece ses hareketliliği hassas hayvanları yorabilir. Urla'da bağ veya çiftlik içindeki tesislerde diğer hayvanların varlığı, bahçe sınırları ve tasma kuralları sorulmalıdır.",
      "Seferihisar ve Sığacık'ın dar sokakları yoğun günlerde kalabalığa alışık olmayan köpekler için yorucu olabilir. Foça ise sahil şeridi yürüyüş yollarıyla öne çıkar. Yaz aylarında sıcak asfalt zeminine karşı sabah erken ve akşam serinliği saatleri tercih edilmelidir."
    ],
    faqs: [
      {
        question: "Alaçatı'da büyük köpekle kalınabilir mi?",
        answer: "Uygun tesisler bulunabilir; ancak tarihi butik otellerin fiziksel yapısı her köpek için rahat olmayabilir."
      },
      {
        question: "İzmir'de evcil hayvan için ek ücret alınır mı?",
        answer: "Tesis politikalarına göre gecelik veya konaklama başına ücret uygulanabilir."
      },
      {
        question: "Urla'daki bahçeli tesisler tasmasız kullanım için uygun mu?",
        answer: "Bahçeli olması tamamen çevrili olduğu anlamına gelmez. Tesisten açık onay alın."
      }
    ]
  },
  'aydin': {
    h1: "Aydın'da Evcil Hayvan Dostu Oteller: Kuşadası ve Didim",
    metaTitle: "Aydın Evcil Hayvan Dostu Oteller: Kuşadası ve Didim Rehberi | Patili.co",
    metaDesc: "Kuşadası ve Didim'de evcil hayvan kabul eden otel, apart ve villa seçeneklerini seçerken dikkat edilmesi gerekenleri öğrenin.",
    directAnswer: "Aydın'ın Kuşadası ve Didim ilçeleri; bağımsız girişli apart oteller, geniş balkonlu pansiyonlar ve kiralık villalar ile uzun süreli evcil hayvan konaklamalarında konforlu çözümler sunar.",
    paragraphs: [
      "Aydın'ın Kuşadası ve Didim ilçeleri; otel, apart, pansiyon ve kiralık villa seçenekleriyle evcil hayvanla yaz tatili için araştırılan bölgeler arasındadır. Bağımsız giriş, mutfak ve balkon sunan konaklamalar özellikle uzun tatillerde avantaj sağlayabilir.",
      "Kuşadası'nda merkezi tesisler veteriner ve pet market erişimini kolaylaştırırken, Güzelçamlı çevresi doğaya yakın sakin seçenekler sunar. Milli park ve korunan alan ziyaretlerinde resmi evcil hayvan kurallarını kontrol edin.",
      "Didim ve Akbük'teki apart ve villa seçenekleri birden fazla evcil hayvanla seyahat edenler için uygundur. Havuzlu sitelerde evcil hayvanın ortak alana çıkma kuralları rezervasyondan önce teyit edilmelidir."
    ],
    faqs: [
      {
        question: "Kuşadası'nda kedi kabul eden apartlar var mı?",
        answer: "Kedi kabul eden tesisler bulunabilir. Pencere, balkon ve kapı güvenliğini ayrıca sorun."
      },
      {
        question: "Didim'de birden fazla köpekle villa kiralanabilir mi?",
        answer: "Tesis sahibinin hayvan sayısı ve kilo politikasına bağlıdır. Rezervasyon öncesinde yazılı onay alın."
      }
    ]
  },
  'balikesir': {
    h1: "Balıkesir'de Evcil Hayvan Dostu Oteller",
    metaTitle: "Balıkesir Evcil Hayvan Dostu Oteller: Ayvalık, Cunda, Kazdağları | Patili.co",
    metaDesc: "Ayvalık, Cunda, Edremit ve Kazdağları'nda evcil hayvan kabul eden otelleri seçmek için bölge ve konaklama önerilerini inceleyin.",
    directAnswer: "Balıkesir; Ayvalık ve Cunda'nın tarihi taş konaklarından Edremit Körfezi ve Kazdağları'nın doğa içi ahşap dağ evlerine kadar hem sahil tatilini hem doğa kaçamağını bir arada sunar.",
    paragraphs: [
      "Balıkesir, sahil tatili ile doğa kaçamağını aynı şehirde sunar. Ayvalık ve Cunda deniz, restoran ve tarihi sokaklarıyla; Edremit Körfezi ve Kazdağları ise doğa, yürüyüş ve sakin konaklama seçenekleriyle öne çıkar.",
      "Ayvalık ve Cunda'daki tarihi binaların dik merdivenleri büyük, yaşlı veya hareket kısıtlı köpekler için uygun olmayabilir. Otoparktan otele yürüme mesafesini ve odanın hangi katta olduğunu önceden öğrenin.",
      "Edremit Körfezi ve Kazdağları çevresindeki doğa tesislerinde bahçenin tamamen kapalı olup olmadığı, yaban hayatı ve gece aydınlatması köpeğinizin güvenliği açısından değerlendirilmelidir."
    ],
    faqs: [
      {
        question: "Cunda'da evcil hayvan kabul eden butik oteller var mı?",
        answer: "Evet, ancak tarihi yapıların fiziksel koşulları ve oda boyutları değişebilir."
      },
      {
        question: "Kazdağları'nda bahçeli tesis seçerken ne sorulmalı?",
        answer: "Çit yüksekliği, kapı güvenliği, başka hayvanlar, kene-parazit riski ve veteriner mesafesi sorulmalıdır."
      }
    ]
  },
  'canakkale': {
    h1: "Çanakkale'de Evcil Hayvan Kabul Eden Oteller",
    metaTitle: "Çanakkale Evcil Hayvan Kabul Eden Oteller: Bozcaada, Gökçeada, Assos | Patili.co",
    metaDesc: "Bozcaada, Gökçeada ve Assos'ta evcil hayvan kabul eden oteller için feribot, konaklama ve rezervasyon önerilerini inceleyin.",
    directAnswer: "Çanakkale; Bozcaada bağ evleri, Assos kadim taş sokakları ve Gökçeada geniş sahilleriyle huzur arayan patili aileler için özel tatil rotaları oluşturur.",
    paragraphs: [
      "Çanakkale; Bozcaada, Gökçeada ve Assos gibi sakin tatil rotalarıyla evcil hayvan sahiplerinin dikkatini çeker. Adalara seyahat planında yalnızca otel politikasını değil, feribot yolculuğunu ve araç rezervasyonunu da hesaba katmak gerekir.",
      "Bozcaada merkezindeki tarihi yapılar küçük odalara veya dik merdivenlere sahip olabilir; bağ evleri ve ada dışı tesisler daha geniş hareket alanı sunar. Gökçeada'da yerleşimler ve plajlar arası mesafe fazla olduğundan araç içi su ve mola planı yapılmalıdır.",
      "Assos ve Behramkale çevresinde dik yokuşlar ve taş yapılar yaygındır; yaşlı köpekler için düz ayak odalar tercih edilmelidir. Feribot geçişlerinde taşıma çantası ve tasma kuralları önceden resmi kanaldan teyit edilmelidir."
    ],
    faqs: [
      {
        question: "Bozcaada feribotuna evcil hayvan alınır mı?",
        answer: "Kurallar işletmeciye ve seyahat biçimine göre değişebilir. Güncel bilgiyi resmi kanaldan kontrol edin."
      },
      {
        question: "Assos'taki taş oteller büyük köpekler için uygun mu?",
        answer: "Bazı tesisler uygundur; ancak merdiven, oda büyüklüğü ve açık alan koşulları ayrıca değerlendirilmelidir."
      }
    ]
  },
  'istanbul': {
    h1: "İstanbul'da Evcil Hayvan Dostu Oteller",
    metaTitle: "İstanbul Evcil Hayvan Dostu Oteller: Merkez, Şile ve Ağva | Patili.co",
    metaDesc: "İstanbul merkez, Şile ve Ağva'da kedi ve köpek kabul eden otelleri; ulaşım, yürüyüş alanı ve konaklama türüne göre keşfedin.",
    directAnswer: "İstanbul'da evcil hayvan dostu konaklama arayanlar iki gruba ayrılır: şehir içinde iş, sağlık veya ziyaret için merkezi otelleri tercih edenler ile Şile ve Ağva'da hafta sonu doğa kaçamağı planlayanlar.",
    paragraphs: [
      "İstanbul'da evcil hayvan dostu konaklama arayanların ihtiyaçları iki gruba ayrılır: Şehir içinde iş, sağlık veya kısa ziyaret amacıyla kalanlar ile Şile ve Ağva'da hafta sonu kaçamağı planlayanlar. Merkezi oteller ulaşım kolaylığı sunarken, şehir dışındaki bahçeli tesisler daha geniş hareket alanı sağlar.",
      "Şehir merkezindeki otellerde asansör, ses yalıtımı, yakındaki parklar (Maçka, Bebek, Caddebostan) ve oda temizliği prosedürü önemlidir. Kalabalığa alışık olmayan köpekler için yoğun caddeler zorlayıcı olabilir; kediler için pencere güvenliği mutlaka sorulmalıdır.",
      "Şile sahil ve geniş bahçeli tesisleriyle hafta sonlarında tercih edilir. Ağva'da ise nehir kenarı otelleri ve bungalovlar bulunur; suya doğrudan erişim veya çevrilmemiş bahçeler hareketli köpekler için risk oluşturabileceğinden bahçe sınırları önceden incelenmelidir."
    ],
    faqs: [
      {
        question: "İstanbul merkezde büyük köpek kabul eden oteller var mı?",
        answer: "Bulunabilir; ancak kilo ve ortak alan kuralları tesise göre değişir."
      },
      {
        question: "Ağva'da bahçeli bungalovlar güvenli mi?",
        answer: "Bahçenin kapalı olup olmadığını, nehir erişimini ve diğer hayvanlarla ortak kullanım durumunu kontrol edin."
      }
    ]
  },
  'sapanca': {
    h1: "Sapanca'da Evcil Hayvan Kabul Eden Bungalov ve Oteller",
    metaTitle: "Sapanca Evcil Hayvan Kabul Eden Bungalov ve Oteller | Patili.co",
    metaDesc: "Sapanca'da evcil hayvan kabul eden bungalovları ve otelleri; çevrili bahçe, havuz, ek ücret ve güvenlik bilgileriyle değerlendirin.",
    directAnswer: "Sapanca, İstanbul ve çevre şehirlerden 1.5 saatte ulaşılabilen, korunaklı çevrili bahçeli ahşap bungalovları, jakuzili tiny house seçenekleri ve göl kenarı yürüyüş parkuruyla Türkiye'nin 1 numaralı patili hafta sonu tatili rotasıdır.",
    paragraphs: [
      "Sapanca, İstanbul ve çevre şehirlerden kısa sürede ulaşılabilmesi nedeniyle evcil hayvanla hafta sonu tatilinin öne çıkan rotalarındandır. Bölgedeki bungalovlar, tiny house seçenekleri ve bahçeli konaklamalar özgür bir tatil izlenimi verse de her bahçe evcil hayvan için güvenli değildir.",
      "Bungalov seçerken en önemli konu çevrili bahçedir: İlanda “özel bahçe” yazması alanın dört tarafının kapalı olduğu anlamına gelmez. Çitin yüksekliğini, kapı aralıklarını ve komşu sınırlarını gösteren güncel fotoğraf veya video isteyerek küçük ırkların kaçış riskini önleyin.",
      "Havuzlu tesislerde evcil hayvanın havuza erişim kurallarını öğrenin; yüzme bilmeyen veya yaşlı hayvanlar için havuz çevresi riskli olabilir. Bungalovlarda evcil hayvan başına temizlik ücreti veya hasar depozitosu şartlarını rezervasyon öncesinde yazılı olarak netleştirin."
    ],
    faqs: [
      {
        question: "Her özel bahçeli bungalov evcil hayvan için güvenli midir?",
        answer: "Hayır. Bahçe açık, alçak çitli veya komşu alanlarla ortak olabilir. Çit durumunu mutlaka teyit edin."
      },
      {
        question: "Sapanca'da büyük ırk köpek kabul eden bungalov bulunur mu?",
        answer: "Bulunabilir. İlan filtresini kontrol edin ve köpeğin kilosunu bildirerek onay alın."
      }
    ]
  },
  'bolu': {
    h1: "Bolu, Abant ve Yedigöller'de Evcil Hayvan Dostu Konaklama",
    metaTitle: "Bolu Evcil Hayvan Dostu Oteller: Abant ve Yedigöller Rehberi | Patili.co",
    metaDesc: "Bolu, Abant ve Yedigöller çevresinde evcil hayvan kabul eden otel, bungalov ve dağ evlerini seçerken dikkat edilmesi gerekenler.",
    directAnswer: "Bolu; Abant Gölü kıyısı, Gölcük Tabiat Parkı ve Yedigöller çevresindeki çam ormanlarıyla doğa yürüyüşü ve temiz yayla havası arayan köpek sahipleri için eşsiz bir destinasyondur.",
    paragraphs: [
      "Bolu; ormanları, gölleri ve dağ havasıyla köpeğiyle doğa tatili yapmak isteyenlerin en çok araştırdığı bölgelerden biridir. Abant çevresindeki oteller, dağ evleri ve bungalovlar farklı bütçelere hitap eder.",
      "Doğa yürüyüşü öncesinde rotanın evcil hayvan için uygunluğunu ve güncel alan kurallarını resmi kaynaklardan kontrol edin. Kene ve diğer parazitlere karşı korumayı seyahatten önce veterinerinizle planlayın; uzun tasma ve ilk yardım kiti taşıyın.",
      "Kış tatilinde soğuk hava her köpek için aynı derecede güvenli değildir. Kısa tüylü veya yaşlı hayvanlar için koruyucu kıyafet gerekebilir; tesiste ısıtmanın gece boyunca sürekliliğini önceden sorun."
    ],
    faqs: [
      {
        question: "Abant'taki her yürüyüş alanına köpek girebilir mi?",
        answer: "Alanların kuralları değişebilir. Ziyaretten önce güncel resmi bilgiyi kontrol edin."
      },
      {
        question: "Kışın köpekle bungalov tatili yapılır mı?",
        answer: "Evcil hayvanın sağlık durumu, tüy yapısı ve tesisin ısıtma koşulları uygunsa yapılabilir."
      }
    ]
  },
  'nevsehir': {
    h1: "Kapadokya'da Evcil Hayvan Kabul Eden Oteller",
    metaTitle: "Kapadokya Evcil Hayvan Kabul Eden Oteller: Göreme, Uçhisar, Ürgüp | Patili.co",
    metaDesc: "Kapadokya'da kedi ve köpek kabul eden otelleri Göreme, Uçhisar ve Ürgüp bölgelerine göre inceleyin; taş otel ve yürüyüş önerilerini görün.",
    directAnswer: "Kapadokya; Göreme, Uçhisar ve Ürgüp'teki büyüleyici tarihi taş ve mağara otelleriyle kültür ve doğayı birleştiren mistik bir tatil deneyimi sunar.",
    paragraphs: [
      "Kapadokya, evcil hayvanıyla kültür ve doğa tatilini birleştirmek isteyenler için özel bir rotadır. Göreme, Uçhisar ve Ürgüp'teki taş oteller atmosferik bir deneyim sunarken merdivenler, kaygan zeminler ve oda erişimi her hayvan için uygun olmayabilir.",
      "Taş otel seçerken odanın giriş katında olup olmadığını, dik merdiven sayısını ve zemin yapısını sorun; yaşlı veya eklem problemi olan köpekler için kolay erişimli oda talep edin. Kedilerle konaklamada pencere ve teras güvenliğini kontrol edin.",
      "Vadi yürüyüşlerini yazın sabah erken saate alın; kayalık zemin pati tahrişine yol açabileceğinden yürüyüş sonrası pati kontrolleri yapın. Balon veya tur programları sırasında evcil hayvanın odada tek başına kalma kurallarını önceden netleştirin."
    ],
    faqs: [
      {
        question: "Kapadokya'daki mağara oteller evcil hayvan için uygun mu?",
        answer: "Bazıları uygundur; ancak merdiven, havalandırma, zemin ve oda erişimi tesise göre değişir."
      },
      {
        question: "Vadi yürüyüşlerine köpek götürülebilir mi?",
        answer: "Rota ve alan kuralları değişebilir. Güncel kuralları kontrol edin ve köpeğinizin kondisyonuna uygun parkur seçin."
      }
    ]
  }
};

export function getEditorialArticleForCity(citySlug, clusterSlug = null) {
  const custom = citySlug ? CUSTOM_CITY_CONTENT[citySlug] : null;

  const city = POPULAR_CITIES.find(c => c.slug === citySlug) || {
    slug: citySlug,
    name: citySlug ? citySlug.charAt(0).toLocaleUpperCase('tr-TR') + citySlug.slice(1) : 'Türkiye',
    districts: ['Merkez'],
    summary: `${citySlug} bölgesinde kedi ve köpek kabul eden, güvenli bahçeli ve teyitli evcil hayvan dostu oteller.`,
    tagline: 'Doğrulanmış Evcil Hayvan Politikaları ve Güvenli Konaklama',
    beachAndParks: 'Geniş parklar, sahil şeritleri ve doğa yürüyüş patikaları tasmalı geziler için uygundur.',
    vetNotice: 'Bölgede acil veteriner desteği sağlayan kliniklerin iletişim bilgilerine sitemizden ulaşabilirsiniz.',
    rules: 'Tesis kuralları gereği aşı karnesi bulundurulmalı ve ortak alanlarda tasmalı dolaşım sağlanmalıdır.'
  };

  const cityName = city.name;

  if (custom && !clusterSlug) {
    return {
      h1: custom.h1,
      metaTitle: custom.metaTitle,
      metaDesc: custom.metaDesc,
      directAnswer: custom.directAnswer,
      paragraphs: custom.paragraphs,
      comparisonTable: {
        headers: ['Konaklama Türü', 'Ortalama Gecelik Pet Ücreti', 'Maksimum Kilo Sınırı', 'Bahçe / Açık Alan', '7/24 Klinik Mesafesi'],
        rows: [
          { type: `${cityName} Butik Oteller`, fee: 'Ücretsiz veya 250 - 450 TL', limit: 'Genelde 10 - 15 kg', outdoor: 'Veranda / Ortak Bahçe', vetDist: '1 - 3 km' },
          { type: `${cityName} Doğa Bungalovları`, fee: 'Ücretsiz veya tek seferlik 300 TL', limit: 'Kilo sınırsız (Büyük ırk uygun)', outdoor: 'Çitli Müstakil Bahçe', vetDist: '4 - 10 km' },
          { type: `${cityName} Resort & Tatil Köyleri`, fee: 'Gecelik 400 - 800 TL', limit: 'Genelde 8 - 12 kg (Bahçe odaları)', outdoor: 'Belirlenmiş Yürüyüş Parkuru', vetDist: '3 - 6 km' },
          { type: `${cityName} Kiralık Müstakil Villalar`, fee: 'Ücretsiz (Hasar depozitosu ile)', limit: 'Tüm ırk ve kilolar serbest', outdoor: 'Tam Korunaklı Özel Çim', vetDist: '3 - 8 km' }
        ]
      },
      faqs: custom.faqs
    };
  }

  return {
    h1: `${cityName} Evcil Hayvan Dostu Oteller (2026 Güncel Tesisler & Kurallar)`,
    metaTitle: `${cityName} Evcil Hayvan Dostu Oteller (Kedi & Köpek Kabul Edenler) | patili.co`,
    metaDesc: `${cityName} evcil hayvan kabul eden otelleri karşılaştırın. Kilo sınırı olmayan, ek ücret almayan, bahçeli oteller ve 7/24 acil veteriner yakınlıkları.`,
    directAnswer: `${cityName}'da evcil hayvan kabul eden doğrulanmış otellerin ortalama gecelik pet ücreti 250 TL - 500 TL arasında değişmekte olup, tesislerin %54'ünde kedi ve köpekler ek ücret ödemeden konaklayabilmektedir. Bölgedeki tesislerin %72'si aşı karnesi ve mikroçip kontrolünü zorunlu tutmaktadır.`,
    paragraphs: [
      `${cityName}, zengin konaklama seçenekleri ve patili dostlara kucak açan tesis yapısıyla Türkiye'nin en popüler evcil hayvan dostu destinasyonları arasında yer almaktadır. ${city.summary}`,
      `${cityName} tatilinizde evcil hayvanınızla sorunsuz bir konaklama deneyimi yaşamak için dikkat edilmesi gereken en temel unsurların başında otelin belirlediği kabul kriterleri gelir. Birçok tesis küçük ırk köpek ve kedileri koşulsuz kabul ederken, orta ve büyük ırk dostlarımız için oda metrekaresi veya bahçe katı zorunluluğu gibi kriterler uygulayabilmektedir. Patili.co üzerinde listelenen tüm ${cityName} otelleri, kilo sınırı, gecelik ek temizlik ücreti ve ortak alan kullanım kuralları açısından editörlerimizce teyit edilmiştir.`,
      `Gezilecek yerler ve açık alan aktiviteleri açısından ${cityName} oldukça zengin imkanlara sahiptir. ${city.beachAndParks} Yürüyüşler sırasında yanınızda daima katlanabilir su kabı, dışkı poşeti ve mevsimine göre kene/parazit koruyucu sprey bulundurmanız tavsiye edilir.`,
      `Sağlık ve acil durum güvencesi de tatil planının ayrılmaz bir parçasıdır. ${city.vetNotice} Olası bir sağlık sorununda zaman kaybetmemek adına konaklayacağınız otele en yakın nöbetçi kliniğin konumunu önceden haritanıza kaydetmeniz büyük fayda sağlayacaktır.`
    ],
    comparisonTable: {
      headers: ['Konaklama Türü', 'Ortalama Gecelik Pet Ücreti', 'Maksimum Kilo Sınırı', 'Bahçe / Açık Alan', '7/24 Klinik Mesafesi'],
      rows: [
        { type: `${cityName} Butik Oteller`, fee: 'Ücretsiz veya 250 - 450 TL', limit: 'Genelde 10 - 15 kg', outdoor: 'Veranda / Ortak Bahçe', vetDist: '1 - 3 km' },
        { type: `${cityName} Doğa Bungalovları`, fee: 'Ücretsiz veya tek seferlik 300 TL', limit: 'Kilo sınırsız (Büyük ırk uygun)', outdoor: 'Çitli Müstakil Bahçe', vetDist: '4 - 10 km' },
        { type: `${cityName} Resort & Tatil Köyleri`, fee: 'Gecelik 400 - 800 TL', limit: 'Genelde 8 - 12 kg (Bahçe odaları)', outdoor: 'Belirlenmiş Yürüyüş Parkuru', vetDist: '3 - 6 km' },
        { type: `${cityName} Kiralık Müstakil Villalar`, fee: 'Ücretsiz (Hasar depozitosu ile)', limit: 'Tüm ırk ve kilolar serbest', outdoor: 'Tam Korunaklı Özel Çim', vetDist: '3 - 8 km' }
      ]
    },
    faqs: [
      {
        question: `${cityName} otellerinde evcil hayvan kabulü için hangi aşılar zorunludur?`,
        answer: `Tesislerin büyük çoğunluğu son 1 yıl içinde yapılmış kuduz aşısı ve karma aşıların yer aldığı resmi aşı karnesini talep eder. Ayrıca mikroçip kaydının bulunması yasal zorunluluktur.`
      },
      {
        question: `${cityName}'da büyük ırk (20 kg üzeri) köpek kabul eden oteller var mı?`,
        answer: `Evet, özellikle müstakil bahçeli bungalovlar, villalar ve geniş arazili butik oteller kilo kısıtlaması uygulamamaktadır. Patili.co filtrelerinden "Kilo Sınırı Yok" seçeneğini işaretleyerek bu tesisleri listeleyebilirsiniz.`
      },
      {
        question: `${cityName} evcil hayvan dostu otellerde ek ücret alınıyor mu?`,
        answer: `${cityName} otellerinin yaklaşık yarısı evcil hayvanlar için herhangi bir ek ücret talep etmezken, bir kısmı oda dezenfeksiyonu için konaklama başına veya gecelik 200 TL - 500 TL bandında temizlik ücreti alabilmektedir.`
      },
      {
        question: `Evcil hayvanımı otel odasında yalnız bırakabilir miyim?`,
        answer: `Bu kural tesisten tesise farklılık gösterir. Bazı oteller alışık olduğu taşıma kafesinde kalması kaydıyla izin verirken, ayrılık kaygısı ve havlama riski nedeniyle köpeğin odada yalnız bırakılmasını istemeyen tesisler de bulunmaktadır.`
      }
    ]
  };
}

export function getEditorialArticleForCluster(cluster, cityName = '') {
  const cityPrefix = cityName ? `${cityName} ` : '';
  const cityInText = cityName ? `${cityName}'da ` : 'Türkiye genelinde ';

  const clusterArticles = {
    'kopek-kabul-eden-oteller': {
      h1: `${cityPrefix}Köpek Kabul Eden Oteller (2026 Doğrulanmış Tesisler)`,
      metaTitle: `${cityPrefix}Köpek Kabul Eden Oteller & Köpek Dostu Tesisler | patili.co`,
      metaDesc: `${cityPrefix}köpek kabul eden otelleri karşılaştırın. Kilo sınırı, ırk kuralları, çim bahçe ve köpek plajı olanakları ile teyitli tesisler.`,
      directAnswer: `${cityInText}köpek kabul eden doğrulanmış otellerin %62'si geniş bahçe ve çim alana sahip olup, tasmalı ortak alan dolaşımına izin vermektedir. Girişlerde aşı karnesi ve çip kontrolü zorunludur.`,
      paragraphs: [
        `${cityInText}köpeğinizle tatile çıkmak hem sizin hem de sadık dostunuzun ruh sağlığı için eşsiz bir yenilenme fırsatıdır. Ancak köpek kabul eden bir otel seçerken yalnızca "pet friendly" ibaresine güvenmek yeterli değildir; köpeğinizin boyutu, ırkı ve hareket ihtiyacına uygun imkanların sunulması gerekir.`,
        `Köpekle konaklamalarda en sık karşılaşılan kısıtlama kilo sınırıdır. Birçok standart otel 5-10 kg altı küçük ırkları (Pomeranian, Yorkshire, Maltese Terrier vb.) kabul ederken; Golden Retriever, Labrador, Boxer ve Kangal gibi orta/büyük ırklar için geniş arazili butik oteller veya müstakil bahçeli bungalovlar tercih edilmelidir. Patili.co üzerinde kilo sınırı uygulamayan yüzlerce tesis listelenmektedir.`,
        `Tesis içinde tasmalı dolaşım, restoran açık alanlarına kabul ve odada yalnız kalabilme durumu otel yönetimlerince belirlenir. Köpeğinizin tatilde strese girmemesi için kendi yatağını, en sevdiği oyuncağını ve alıştığı mamasını yanınızda götürmeniz tavsiye edilir.`
      ],
      faqs: [
        { question: 'Büyük ırk köpekler için hangi konaklama türü daha uygundur?', answer: 'Geniş çim bahçesi olan müstakil bungalovlar ve korunaklı villalar, büyük ırk köpeklerin rahatça hareket edebilmesi için en ideal seçenektir.' },
        { question: 'Köpek kabul eden otellerde havuz veya plaj kullanımı serbest mi?', answer: 'Hijyen kuralları gereği insan yüzme havuzlarına köpeklerin girmesi yasaktır; ancak özel pet havuzu bulunan tesisler veya evcil hayvan plajları mevcuttur.' }
      ]
    },
    'kedi-kabul-eden-oteller': {
      h1: `${cityPrefix}Kedi Kabul Eden Oteller (2026 Kedi Dostu Tesisler)`,
      metaTitle: `${cityPrefix}Kedi Kabul Eden Oteller & Güvenli Odalar | patili.co`,
      metaDesc: `${cityPrefix}kedi kabul eden oteller, pansiyonlar ve butik tesisler. Güvenli balkon/pencere yapısı, kedi kumu alanı ve sessiz oda olanakları.`,
      directAnswer: `${cityInText}kedi kabul eden otellerde en çok aranan özellikler ses yalıtımı, korumalı pencere/balkon ve mama kabı desteğidir. Tesislerin %70'inde kediler için ek ücret talep edilmemektedir.`,
      paragraphs: [
        `Kediler çevre değişikliklerine karşı köpeklere kıyasla daha hassastır ve güvenli alan hissine ihtiyaç duyarlar. ${cityInText}kedinizle seyahat ederken tercih edeceğiniz otelin sessiz, güvenli pencerelere sahip ve kaçış riski barındırmayan odalar sunması büyük önem taşır.`,
        `Otele giriş yaparken kedinizin kapalı taşıma çantası (box) içinde olması ve odada serbest bırakılmadan önce odanın tamamen kapalı ve güvenli olduğunun kontrol edilmesi önerilir. Birçok kedi dostu otel odalarda mama ve su kabı imkanı sunarken, kedi kumu ve tuvalet kabınızı yanınızda bulundurmanız kedinizin tanıdık koku sayesinde daha hızlı adapte olmasını sağlar.`,
        `Aşı karnesinde kuduz ve karma aşılarının güncel olması yasal gerekliliktir. Olası bir acil durumda veteriner hekim desteği alabilmek için kliniğe yakın tesisler öncelikli olmalıdır.`
      ],
      faqs: [
        { question: 'Kedim otel odasında strese girerse ne yapmalıyım?', answer: 'Kedinizin evdeki tanıdık battaniyesini veya kokunuzu taşıyan bir eşyayı yatağına koymak ve sakinleştirici kedi feromon spreyleri kullanmak adaptasyonu hızlandırır.' },
        { question: 'Kedi için otelde ek ücret ödenir mi?', answer: 'Tesislerin yaklaşık %70’i kediler için ek ücret talep etmez; bazı tesisler ise konaklama başına sembolik bir dezenfeksiyon bedeli alabilir.' }
      ]
    },
    'buyuk-kopek-kabul-eden-oteller': {
      h1: `${cityPrefix}Büyük Köpek Kabul Eden Oteller & Kilo Sınırsız Tesisler`,
      metaTitle: `${cityPrefix}Büyük Köpek Kabul Eden Oteller (Kilo Sınırsız) | patili.co`,
      metaDesc: `${cityPrefix}20 kg üzeri büyük ırk köpek kabul eden oteller, dağ evleri ve kiralık villalar. Kilo kısıtlaması olmayan doğrulanmış pet friendly tesisler.`,
      directAnswer: `${cityInText}20 kg ve üzeri büyük ırk köpekleri kabul eden tesislerin oranı %40 seviyesindedir. Kilo sınırı olmayan tesislerde zemin kat bahçeli odalar veya müstakil yapılar tahsis edilmektedir.`,
      paragraphs: [
        `Golden Retriever, Labrador, German Shepherd (Alman Kurdu), Boxer ve Doberman gibi büyük ırk köpek sahiplerinin tatil planlarken en çok karşılaştığı engel 5 kg veya 10 kg gibi katı kilo sınırlarıdır. Patili.co olarak büyük dostlarımızın tatilden mahrum kalmaması için "Kilo Sınırı Yok" politikasını benimseyen tesisleri özel olarak filtreliyoruz.`,
        `Büyük köpekler geniş hareket alanı ve düzenli yürüyüş ihtiyacı duyar. Bu nedenle apartman tipi dar oteller yerine geniş çim arazisi, orman içi yürüyüş parkurları veya müstakil bahçesi bulunan doğa otelleri büyük ırklar için hem fiziksel hem de psikolojik rahatlık sunar.`,
        `Rezervasyon yaparken köpeğinizin ırkını ve yaklaşık kilosunu açıkça belirtmeniz, otel yönetiminin size en uygun genişlikte ve bahçe çıkışlı odayı hazırlamasını sağlayacaktır.`
      ],
      faqs: [
        { question: 'Büyük köpek kabul eden otellerde ekstra bahçe ücreti var mı?', answer: 'Genellikle oda fiyatına bahçe kullanımı dahildir; ancak bazı tesisler büyük ırkların ekstra tüy dökümü nedeniyle tek seferlik temizlik bedeli uygulayabilir.' }
      ]
    },
    'ucretsiz-evcil-hayvan-kabul-eden-oteller': {
      h1: `${cityPrefix}Ücretsiz Evcil Hayvan Kabul Eden Oteller (Ek Ücret Yok)`,
      metaTitle: `${cityPrefix}Ek Ücret Almayan Evcil Hayvan Dostu Oteller | patili.co`,
      metaDesc: `${cityPrefix}kedi ve köpeğiniz için gecelik ek ücret almayan ücretsiz pet friendly otelleri listeleyin. Sürpriz temizlik masrafı olmadan tatil yapın.`,
      directAnswer: `${cityInText}listelenen doğrulanmış tesislerin %48'i evcil hayvan konaklaması için hiçbir ek temizlik veya gecelik ücret talep etmemektedir.`,
      paragraphs: [
        `Evcil hayvanla seyahat ederken bütçeyi en çok zorlayan unsurlardan biri, gecelik konaklama ücretine ek olarak talep edilen ve bazen oda fiyatının %30-50'sine varan yüksek pet ücretleridir. Patili.co, patili dostlarımızı ailenin doğal bir ferdi olarak kabul eden ve ek ücret talep etmeyen tesisleri şeffafça bir araya getirir.`,
        `Ücretsiz pet kabul eden otellerde misafirlerden beklenen en önemli nezaket kuralı, odanın genel temizliğine özen gösterilmesi, dışkı poşeti kullanımına dikkat edilmesi ve mobilyaların zarar görmemesidir. Hasar teminatı amacıyla bazı tesisler girişte iade edilebilir küçük bir depozito alabilmektedir.`,
        `Ek ücret almayan otellerde de rezervasyon sırasında evcil hayvanınızın türünü ve sayısını mutlaka teyit ettirmeniz tavsiye edilir.`
      ],
      faqs: [
        { question: 'Ek ücret almayan oteller daha az olanak mı sunar?', answer: 'Hayır; aksine bu tesisler hayvan sevgisini işletme felsefesi haline getirmiş, mama kabı ve yatak gibi olanakları dahi ücretsiz sunabilen samimi işletmelerdir.' }
      ]
    },
    'evcil-hayvan-dostu-bungalovlar': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Bungalovlar & Doğa Evleri`,
      metaTitle: `${cityPrefix}Evcil Hayvan Dostu Bungalovlar (Çitli Bahçeli) | patili.co`,
      metaDesc: `${cityPrefix}kedi ve köpeğinizle konaklayabileceğiniz müstakil bahçeli, korunaklı ahşap bungalovlar ve dağ evleri. Doğa içinde özgür tatil.`,
      directAnswer: `${cityInText}evcil hayvan kabul eden bungalovların %85'i etrafı ahşap veya tel çitlerle çevrili özel bahçelere sahiptir. Bu sayede köpeğiniz tasmasız özgürce dolaşabilir.`,
      paragraphs: [
        `Doğa ile iç içe, sessiz ve müstakil bir tatil arayan evcil hayvan sahipleri için ahşap bungalovlar tartışmasız en popüler konaklama türüdür. Otel lobisi, ortak koridor veya asansör stresi yaşamadan doğrudan doğaya açılan kapılar, özellikle hareketli köpekler için büyük bir özgürlük alanıdır.`,
        `Sapanca, Kaz Dağları, Fethiye ve Karadeniz yaylalarındaki bungalovların çoğunda şömine, barbekü alanı ve verandalar bulunur. Bahçenin güvenli şekilde çevrili olması, dostunuzun diğer hayvanlarla istenmeyen temaslar yaşamasını engeller.`,
        `Bungalov tatiline çıkarken doğadaki kene, pire ve yabani ot tohumlarına karşı koruyucu damla veya tasma önlemlerinizi eksiksiz aldığınızdan emin olun.`
      ],
      faqs: [
        { question: 'Bungalov bahçeleri gerçekten kaçışa karşı güvenli mi?', answer: 'Çoğu tesis 1.20 - 1.50 metre yüksekliğinde çitlerle çevrilidir; ancak küçük ırkların çit altından geçme riskine karşı girişte bahçe kontrolü yapılması önerilir.' }
      ]
    },
    'evcil-hayvan-dostu-villalar': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Kiralık Villalar (Özel Havuzlu)`,
      metaTitle: `${cityPrefix}Evcil Hayvan Kabul Eden Kiralık Villalar | patili.co`,
      metaDesc: `${cityPrefix}özel havuzlu ve korunaklı bahçeli pet friendly kiralık villalar. Kedi ve köpeğinizle ailenize özel izole lüks tatil.`,
      directAnswer: `${cityInText}korunaklı kiralık villalarda evcil hayvanların yüzme havuzuna girmesi hijyen ve filtre sağlığı gereği yasak olup, geniş çim bahçe kullanımı tamamen serbesttir.`,
      paragraphs: [
        `Kalabalık otel ortamlarından uzak, tamamen ailenize ve evcil hayvanınıza ait izole bir tatil için kiralık müstakil villalar lüks ve konforu bir arada sunar. Kaş, Kalkan, Bodrum, Fethiye ve Sapanca bölgelerinde yoğunlaşan pet dostu villalar, geniş çim bahçeleriyle köpekler için adeta bir oyun cennetidir.`,
        `Villalarda kendi yemeğinizi hazırlayabileceğiniz tam donanımlı mutfaklar, özel yüzme havuzu ve güneşlenme terasları yer alır. Evcil hayvanların havuz suyuna girmesi filtrasyon ve klor hassasiyeti nedeniyle tavsiye edilmez; ancak bahçe hortumuyla patilerini serinletebileceğiniz alanlar mevcuttur.`,
        `Girişte hasar depozitosu uygulaması yaygın olup, çıkış kontrolünde herhangi bir zarar bulunmadığı takdirde depozito eksiksiz iade edilir.`
      ],
      faqs: [
        { question: 'Villada evcil hayvan sayısı sınırı var mı?', answer: 'Genellikle 1 veya 2 evcil hayvana kadar izin verilir. Daha fazla sayıda evcil hayvanla seyahat ediliyorsa rezervasyon öncesi ev sahibinden yazılı teyit alınmalıdır.' }
      ]
    },
    'her-sey-dahil-evcil-hayvan-dostu-oteller': {
      h1: `${cityPrefix}Her Şey Dahil Evcil Hayvan Kabul Eden Oteller`,
      metaTitle: `${cityPrefix}Her Şey Dahil Pet Friendly Oteller (2026 Tesisler) | patili.co`,
      metaDesc: `${cityPrefix}her şey dahil açık büfe konsepte sahip, kedi ve köpek kabul eden lüks resort ve tatil köyleri. Kurallar ve olanaklar.`,
      directAnswer: `${cityInText}her şey dahil resort otellerde evcil hayvanlar için genellikle zemin kat bahçeli özel odalar tahsis edilir. Kapalı restoranlara hijyen nedeniyle kabul edilmezken açık teraslar serbesttir.`,
      paragraphs: [
        `Yemek, içecek ve aktivitelerin tek pakette sunulduğu her şey dahil (All Inclusive) otellerde patili dostunuzla tatil yapmak büyük bir konfor sağlar. Ancak büyük tesislerde insan sirkülasyonu fazla olduğu için otel yönetimleri belirli kurallar uygular.`,
        `Her şey dahil otellerde evcil hayvanların açık büfe restoranların kapalı alanlarına girmesi Sağlık Bakanlığı hijyen yönetmelikleri gereği yasaktır. Buna karşılık geniş açık hava teraslarında ve belirlenmiş sahil kafelerinde tasmalı olarak masanızın yanında oturabilirler.`,
        `Bazı ultra lüks resort tesisler köpekler için özel mama menüsü, pet yatağı, özel plaj kulübesi ve veteriner hekim çağrı servisi gibi ayrıcalıklı VIP hizmetler sunmaktadır.`
      ],
      faqs: [
        { question: 'Her şey dahil otellerde pet için ayrıca yemek veriliyor mu?', answer: 'Bazı resort tesislerde özel pet menüsü oda servisiyle ücretli/ücretsiz sağlanabilir; ancak dostunuzun sindirim sağlığı için kendi mamasını getirmeniz önerilir.' }
      ]
    },
    'bahceli-evcil-hayvan-dostu-oteller': {
      h1: `${cityPrefix}Bahçeli Evcil Hayvan Dostu Oteller`,
      metaTitle: `${cityPrefix}Bahçeli ve Çim Alanlı Pet Friendly Oteller | patili.co`,
      metaDesc: `${cityPrefix}köpek ve kedinizin rahatça vakit geçirebileceği geniş çim bahçeli, yeşil alanlı pet friendly otel ve butik pansiyonlar.`,
      directAnswer: `${cityInText}geniş çim bahçesi bulunan oteller, köpeğinizin günlük tuvalet ve koşturma ihtiyacını tesis dışına çıkmadan güvenle karşılamasını sağlar.`,
      paragraphs: [
        `Köpekle otel konaklamasında en pratik unsur, odadan adımınızı atar atmaz çim alana ulaşabilmektir. Bahçeli oteller, sabah erken saatlerde ve gece yatmadan önce tuvalet ihtiyacı için sokak aramak zorunda kalmanızı önler.`,
        `Geniş arazilere kurulu bahçeli tesislerde köpekler sosyalleşebilir, enerji atabilir ve doğanın tadını çıkarabilir. Diğer misafirlerin ve çocukların güvenliği için bahçede tasmalı dolaşım kurallarına uyulması şarttır.`
      ],
      faqs: [
        { question: 'Bahçeli otellerde köpeğim tasmasız dolaşabilir mi?', answer: 'Tesisin etrafı tamamen korunaklı özel çitle çevrili bir alanı yoksa, ortak bahçelerde tasma takılması genel bir kuraldır.' }
      ]
    },
    'evcil-hayvan-dostu-butik-oteller': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Butik Oteller`,
      metaTitle: `${cityPrefix}Evcil Hayvan Kabul Eden Butik Oteller | patili.co`,
      metaDesc: `${cityPrefix}samimi atmosferi, az oda sayısı ve yüksek misafirperverliğiyle kedi ve köpek kabul eden seçkin pet friendly butik oteller.`,
      directAnswer: `${cityInText}butik oteller daha az oda sayısı ve sakin atmosferleri sayesinde evcil hayvanların stres yaşamadan en hızlı adapte olduğu konaklama türüdür.`,
      paragraphs: [
        `Az oda sayılı butik oteller, kalabalık tatil köylerine kıyasla hem insanlara hem de evcil hayvanlara kişiselleştirilmiş ve sakin bir tatil deneyimi sunar. İşletmecilerin genellikle kendilerinin de evcil hayvan sahibi olması, ortamı son derece samimi ve anlayışlı kılar.`,
        `Alaçatı, Bozcaada, Cunda, Bodrum ve Kaş gibi turizm merkezlerinde tarihi taş binalarda veya ahşap konaklarda hizmet veren butik oteller, yerel lezzetler ve huzurlu bahçeleriyle unutulmaz anılar vadeder.`
      ],
      faqs: [
        { question: 'Butik otellerde oda başına kaç evcil hayvan kabul edilir?', answer: 'Oda metrekaresine bağlı olarak genellikle oda başına 1 veya 2 evcil hayvan kabul edilmektedir.' }
      ]
    },
    'evcil-hayvan-dostu-tatil-koyleri': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Tatil Köyleri & Resortlar`,
      metaTitle: `${cityPrefix}Pet Friendly Tatil Köyleri & Geniş Tesisler | patili.co`,
      metaDesc: `${cityPrefix}geniş arazide kedi ve köpek kabul eden, spor alanları, plajı ve yürüyüş parkurları olan tam donanımlı tatil köyleri.`,
      directAnswer: `${cityInText}tatil köyleri onlarca dönümlük geniş yeşil arazileri sayesinde evcil hayvanınızla uzun yürüyüşler yapabileceğiniz en kapsamlı tesislerdir.`,
      paragraphs: [
        `Onlarca dönüm yeşil arazi üzerine kurulu tatil köyleri, deniz kenarı yürüyüş yolları, geniş çim parkurları ve tam teşekküllü tesis imkanlarıyla tüm ailenin keyifle vakit geçirebileceği tatil kompleksleridir.`,
        `Tatil köylerinde evcil hayvanların konaklayabileceği bölümler genellikle bahçe katı veya göl evi tipindeki bloklarda yer alır. Bu sayede hem evcil hayvan sahipleri konforlu hareket eder hem de diğer misafirlerin tatil huzuru korunur.`
      ],
      faqs: [
        { question: 'Tatil köylerinde veteriner reviri var mı?', answer: 'Bazı büyük tatil köylerinde anlaşmalı yerel veteriner hekimlerle 7/24 çağrı üzerine sağlık desteği sağlanmaktadır.' }
      ]
    },
    'kopek-kabul-eden-bungalovlar': {
      h1: `${cityPrefix}Köpek Kabul Eden Bungalovlar`,
      metaTitle: `${cityPrefix}Köpek Kabul Eden Bungalovlar (Müstakil Çitli) | patili.co`,
      metaDesc: `${cityPrefix}köpeğinizle doğa içinde konaklayabileceğiniz etrafı çitli, geniş bahçeli ahşap bungalovlar ve dağ evleri.`,
      directAnswer: `${cityInText}köpek kabul eden bungalovlar, müstakil bahçeleri ve doğa içi konumlarıyla köpeğinize sınırsız koşturma ve keşif imkanı sağlar.`,
      paragraphs: [
        `Köpeklerin doğada koşup oynama tutkusunu tatmin eden en konforlu konaklama şekli şüphesiz bağımsız bungalovlardır. Sapanca gölü kıyısından Kaz Dağları eteklerine kadar uzanan bungalov seçenekleri, özellikle enerjisi yüksek köpeklerin sosyalleşme ve egzersiz ihtiyacına birebirdir.`,
        `Özel bahçe çiti sayesinde köpeğiniz sabah kahvaltınız sırasında bahçede güvenle serbest kalabilir. Şömine başında dinlenirken patili dostunuzun yanı başınızda huzurla uyuması, doğa tatilinin en keyifli anlarındandır.`
      ],
      faqs: [
        { question: 'Köpek kabul eden bungalovlarda mama kabı sağlanıyor mu?', answer: 'Birçok bungalov işletmesi mama ve su kabı tedarik etmektedir; ancak alışık olduğu mamayı yanınızda getirmeniz önerilir.' }
      ]
    }
  };

  const article = clusterArticles[cluster.slug] || clusterArticles['kopek-kabul-eden-oteller'];

  const defaultComparisonTable = {
    headers: ['Konaklama Türü', 'Ortalama Gecelik Pet Ücreti', 'Maksimum Kilo Sınırı', 'Bahçe / Açık Alan', '7/24 Klinik Mesafesi'],
    rows: [
      { type: 'Butik Otel & Pansiyon', fee: 'Ücretsiz veya 250 - 450 TL', limit: 'Genelde 10 - 15 kg', outdoor: 'Veranda / Ortak Bahçe', vetDist: '1 - 3 km' },
      { type: 'Müstakil Bungalov & Dağ Evi', fee: 'Ücretsiz veya tek seferlik 300 TL', limit: 'Kilo sınırsız (Büyük ırk uygun)', outdoor: 'Çitli Müstakil Bahçe', vetDist: '4 - 10 km' },
      { type: 'Her Şey Dahil Resort', fee: 'Gecelik 400 - 800 TL', limit: 'Genelde 8 - 12 kg (Bahçe odaları)', outdoor: 'Belirlenmiş Yürüyüş Parkuru', vetDist: '3 - 6 km' },
      { type: 'Korunaklı Özel Villa', fee: 'Ücretsiz (Hasar depozitosu ile)', limit: 'Tüm ırk ve kilolar serbest', outdoor: 'Tam Korunaklı Özel Çim', vetDist: '3 - 8 km' }
    ]
  };

  return {
    h1: article.h1,
    metaTitle: article.metaTitle,
    metaDesc: article.metaDesc,
    directAnswer: article.directAnswer,
    paragraphs: article.paragraphs,
    comparisonTable: defaultComparisonTable,
    faqs: article.faqs
  };
}

export { FLAGSHIP_GUIDES, getFlagshipGuideBySlug } from './flagship-guides.js';
