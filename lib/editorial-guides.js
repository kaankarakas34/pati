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

export function getEditorialArticleForCity(citySlug, clusterSlug = null) {
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
