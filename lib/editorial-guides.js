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
      "Rezervasyondan önce sorulacak sorular: Kedi ve köpek kabulü ayrı ayrı onaylanmalı, kilo ve ırk sınırı, oda klimasının durumu, balkon güvenliği, plaj bölümüne giriş izni ve en yakın nöbetçi veteriner kliniği mesafesi doğrudan işletmeden doğrulanmalıdır.",
      "Antalya'da patili dostunuzla deniz keyfi yapmak isterseniz, Konyaaltı Sahili'nde yerel yönetimlerce belirlenmiş evcil hayvan dostu serbest alanlar ve Kaş çevresindeki sakin bakir koylar ideal yüzme noktalarıdır. Tuzlu deniz suyunun köpeğin cildini tahriş etmemesi ve kurutmaması için deniz banyosu sonrasında patilerin ve kürkün tatlı suyla durulanması önemle tavsiye edilir. Kulak içine kaçabilecek su damlaları enfeksiyon riskine yol açabileceğinden, plaj dönüşünde kulak kepçelerinin nazikçe kurulanması sağlıklı bir tatil alışkanlığıdır.",
      "Akdeniz bölgesinde özellikle yaz sezonunda dış parazit (kene, pire ve kum sineği) aktivitesi oldukça yoğundur. Leishmania gibi tehlikeli hastalıklardan korunmak için tatil öncesinde veteriner hekiminizle görüşerek tasma veya damla korumasını yenilemeniz gerekir. Patili.co üzerinden Muratpaşa, Konyaaltı, Alanya ve Kaş ilçelerinde 7/24 hizmet veren tam teşekküllü veteriner kliniklerinin acil iletişim bilgilerini listeleyebilir, tatilinizi eksiksiz bir sağlık güvencesiyle geçirebilirsiniz."
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
      "Datça sakinlik arayan hayvan sahipleri için güçlü bir seçenektir; gölgeli alan, klima ve güvenli balkon yapısı kontrol edilmelidir. Akyaka ve Dalyan'da ise sulak alan parazit koruması hakkında veterinerinize danışın; doğa içindeki tesislerde bahçe sınırlarını ve diğer hayvanlarla temas ihtimalini sorun.",
      "Muğla'nın eşsiz Ege ve Akdeniz kıyılarında köpeklerin serinlemesi için sabahın erken saatleri veya akşamüstü gün batımı en elverişli zamanlardır. Bodrum Gümüşlük, Datça Palamutbükü ve Akyaka Azmak boyu yürüyüş parkurları tasmalı geziler için harika manzaralar sunar. Deniz sonrası dostunuzun üzerindeki tuzlu suyu tatlı suyla durulamak ve güneşin en dik geldiği öğle saatlerinde plaj aktivitelerinden kaçınmak pati yanıklarını ve sıcak çarpmasını önler.",
      "Muğla genelindeki butik oteller, taş evler ve doğa bungalovları genellikle geniş bahçe kullanım imkanı sunar. Ancak ormanlık ve zeytinlik arazilerde serbest dolaşan yerel kedi ve köpeklerle karşılaşma ihtimaline karşı bahçe kapılarının kapalı tutulması güvenlik sağlar. Bodrum, Fethiye ve Marmaris merkezlerindeki 7/24 acil veteriner kliniklerinin iletişim numaralarını haritanıza kaydederek tatilinize gönül rahatlığıyla başlayabilirsiniz."
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
      "Seferihisar ve Sığacık'ın dar sokakları yoğun günlerde kalabalığa alışık olmayan köpekler için yorucu olabilir. Foça ise sahil şeridi yürüyüş yollarıyla öne çıkar. Yaz aylarında sıcak asfalt zeminine karşı sabah erken ve akşam serinliği saatleri tercih edilmelidir.",
      "İzmir'de patili dostunuzla keyifli yürüyüşler yapmak için Çeşme Ilıca sahili, Alaçatı sokakları, Urla İskele ve İzmir Alsancak Kordonboyu geniş çim alanlarıyla öne çıkar. Açık alan kafelerinde otururken masanın altına serilecek serin bir örtü veya seyahat matı köpeğinizin rahatça dinlenmesini sağlar. Sıcak yaz aylarında taş ve asfalt zeminler patileri yakabileceğinden gündüz saatlerinde gölgelik alanlar tercih edilmelidir.",
      "İzmir ve ilçelerindeki veteriner hekim ağı oldukça gelişmiştir. Çeşme merkez, Urla ve İzmir metropolünde 7/24 kesintisiz hizmet veren hayvan hastaneleri ve acil klinikler mevcuttur. Rezervasyonunuz öncesinde tesisin sunduğu bahçe olanaklarını, pet yatağı ve mama kabı tedarik durumunu Patili.co filtrelerinden inceleyebilir, hayalinizdeki Ege tatilini zahmetsizce planlayabilirsiniz."
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
      "Didim ve Akbük'teki apart ve villa seçenekleri birden fazla evcil hayvanla seyahat edenler için uygundur. Havuzlu sitelerde evcil hayvanın ortak alana çıkma kuralları rezervasyondan önce teyit edilmelidir.",
      "Kuşadası ve Didim sahillerinde patili dostunuzla sabah yürüyüşleri yapmak ve temiz Ege havasını solumak hem sizin hem de dostunuzun enerjisini tazeleyecektir. Plaj çevresinde tasmalı kontrole özen gösterilmeli, sıcak kumların patilere zarar vermemesi için yürüyüşler serin saatlerde yapılmalıdır. Yanınızda daima taşınabilir bir su suluğu ve dışkı poşeti bulundurmanız çevre temizliği açısından şarttır.",
      "Aydın genelinde yaz aylarında artan kene ve pire hareketliliğine karşı koruyucu parazit uygulamalarının tatil öncesinde tamamlanması gerekir. Kuşadası merkez ve Didim'de nöbetçi veteriner klinikleri bulunmakta olup acil durumlarda hızlıca destek alınabilir. Patili.co üzerinden Aydın'daki evcil hayvan kabul eden tüm tesisleri karşılaştırarak en uygun fiyat ve konfor avantajını yakalayabilirsiniz."
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
      "Edremit Körfezi ve Kazdağları çevresindeki doğa tesislerinde bahçenin tamamen kapalı olup olmadığı, yaban hayatı ve gece aydınlatması köpeğinizin güvenliği açısından değerlendirilmelidir.",
      "Cunda Adası ve Ayvalık sokaklarında serbest dolaşan ada kedileri ve yerel sokak köpekleri bulunabileceğinden, köpeğinizi yürüyüşler esnasında daima tasmalı kontrol altında tutmanız tavsiye edilir. Tarihi sokakların taş zeminleri yaz sıcaklarında ısınabileceğinden sabah ve akşam yürüyüş rotaları tercih edilmelidir. Kazdağları eteklerindeki orman yürüyüşlerinde ise yabani hayat ve parazit riskine karşı dostunuzun yanınızdan ayrılmaması emniyetlidir.",
      "Balıkesir'in Edremit Körfezi ve Ayvalık ilçelerinde 7/24 hizmet veren acil veteriner klinikleri yer almaktadır. Tatil süresince olası acil ihtiyaçlar için klinikleri haritanıza ekleyebilir, Patili.co rehberleri üzerinden taş evlerin bahçe güvenlik durumlarını ve oda kurallarını kolayca inceleyebilirsiniz."
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
      "Assos ve Behramkale çevresinde dik yokuşlar ve taş yapılar yaygındır; yaşlı köpekler için düz ayak odalar tercih edilmelidir. Feribot geçişlerinde taşıma çantası ve tasma kuralları önceden resmi kanaldan teyit edilmelidir.",
      "Bozcaada ve Gökçeada feribot geçişlerinde GESTAŞ sefer saatlerini ve evcil hayvan seyahat prosedürlerini önceden incelemek feribot iskelesinde vakit kaybetmenizi önler. Yolculuk süresince küçük ırkların taşıma çantasında, büyük ırkların ise tasmalı ve kontrollü olarak açık güvertede seyahat etmesi standart kuraldır. Araç içi geçişlerde aracın camlarının kontrollü açılması dostunuzun ferah kalmasını sağlar.",
      "Assos ve Kazdağları yamacındaki konaklamalarda doğa yürüyüşleri sonrasında patilerin, kulakların ve kürkün kene ve diken kontrolünden geçirilmesi önemlidir. Çanakkale Merkez, Ayvacık ve Bozcaada'da hizmet veren yerel veteriner kliniklerinin acil iletişim bilgilerini önceden not ederek huzurlu ve güvenli bir tatil geçirebilirsiniz."
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
      "Şile sahil ve geniş bahçeli tesisleriyle hafta sonlarında tercih edilir. Ağva'da ise nehir kenarı otelleri ve bungalovlar bulunur; suya doğrudan erişim veya çevrilmemiş bahçeler hareketli köpekler için risk oluşturabileceğinden bahçe sınırları önceden incelenmelidir.",
      "İstanbul'un Maçka Demokrasi Parkı, Bebek Parkı, Caddebostan Sahili ve Belgrad Ormanı gibi geniş yeşil alanları, metropol yaşamında köpeğinizin enerjisini atabileceği en gözde rotalardır. Şehir içi otellerde konaklarken toplu taşıma kurallarını (5 kg altı taşıma çantasıyla metro ve vapur kullanımı) bilmek şehir içi transferlerinizi oldukça kolaylaştırır.",
      "İstanbul genelinde 150'den fazla 7/24 açık hayvan hastanesi ve acil klinik yer almakta olup Kadıköy, Beşiktaş, Sarıyer ve Şişli gibi merkezi ilçelerde acil klinik erişimi yalnızca birkaç dakikadır. Patili.co üzerinden İstanbul'un hem iş hem tatil odaklı evcil hayvan dostu tesislerini inceleyebilir, kullanıcı değerlendirmelerine göre en doğru seçimi yapabilirsiniz."
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
      "Havuzlu tesislerde evcil hayvanın havuza erişim kurallarını öğrenin; yüzme bilmeyen veya yaşlı hayvanlar için havuz çevresi riskli olabilir. Bungalovlarda evcil hayvan başına temizlik ücreti veya hasar depozitosu şartlarını rezervasyon öncesinde yazılı olarak netleştirin.",
      "Sapanca Gölü çevresindeki sahil yürüyüş kordonu ve Kırkpınar çim alanları, köpeğinizle uzun ve dingin yürüyüşler yapabileceğiniz en popüler rotalardır. Bungalovların etrafı çevrili bahçelerinde köpeğiniz özgürce koştururken, göl kenarındaki restoran ve kafelerin açık alanlarında patili dostunuzla birlikte keyifle yemek yiyebilirsiniz.",
      "Kış aylarında şömineli veya pelet sobalı bungalovlarda konaklarken ateş koruyucu siperliklerin kullanılması, patili dostunuzun kazara yanmasını engellemek adına hayatidir. Sapanca ve komşu Serdivan/Adapazarı bölgesinde 24 saat hizmet veren tam donanımlı acil veteriner kliniklerinin bulunması, hafta sonu tatilinizi tam bir sağlık ve huzur güvencesine kavuşturur."
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
      "Kış tatilinde soğuk hava her köpek için aynı derecede güvenli değildir. Kısa tüylü veya yaşlı hayvanlar için koruyucu kıyafet gerekebilir; tesiste ısıtmanın gece boyunca sürekliliğini önceden sorun.",
      "Abant Gölü çevresindeki 7 kilometrelik yürüyüş parkuru ve Gölcük Tabiat Parkı patili dostların temiz dağ havası soluyup doğada vakit geçirmesi için biçilmiş kaftandır. Milli park alanlarında vahşi yaşamı korumak ve köpeğinizin yabani hayvanların peşinden gitmesini önlemek için yürüyüşlerin tasmalı yapılması yasal ve güvenlik açısından zorunludur.",
      "Kış aylarında kar tatili yaparken köpeğinizin patilerinin buzlanmadan ve aşırı soğuktan korunması için özel koruyucu pati wax'ı veya kışlık patikler kullanılması önerilir. Bolu Merkezde 7/24 kesintisiz açık acil veteriner klinikleri bulunmakta olup, Abant ve Yedigöller yolculuğunuz öncesinde iletişim bilgilerini kaydetmeniz güvenliği pekiştirir."
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
      "Vadi yürüyüşlerini yazın sabah erken saate alın; kayalık zemin pati tahrişine yol açabileceğinden yürüyüş sonrası pati kontrolleri yapın. Balon veya tur programları sırasında evcil hayvanın odada tek başına kalma kurallarını önceden netleştirin.",
      "Kapadokya'nın Aşk Vadisi, Güvercinlik Vadisi ve Kızılçukur gibi büyüleyici yürüyüş parkurları, sabah gün doğumunda havalanan sıcak hava balonları eşliğinde köpeğinizle unutulmaz doğa yürüyüşleri sunar. Volkanik tüf kayalıkların ufalanan yapısı patileri tahriş edebileceğinden yürüyüş sonrasında patilerin ılık suyla temizlenip kontrol edilmesi yararlıdır.",
      "Kapadokya mağara otelleri doğal taş izolasyonu sayesinde yaz aylarında klima ihtiyacı olmadan doğal bir serinlik sağlar. Ancak odalarda dik kaya merdivenlerin bulunup bulunmadığı yaşlı ve eklem sorunu olan köpekler için rezervasyon aşamasında sorulmalıdır. Nevşehir ve Ürgüp'teki acil veteriner klinikleri olası sağlık ihtiyaçlarında hızlı müdahale imkanı tanır."
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

function ensureMinWordCount(paragraphs, directAnswer, extraParagraphs, minWords = 315) {
  const result = [...paragraphs];
  let currentWords = (result.join(' ') + ' ' + (directAnswer || '')).split(/\s+/).filter(Boolean).length;
  for (const p of extraParagraphs) {
    if (currentWords >= minWords) break;
    result.push(p);
    currentWords = (result.join(' ') + ' ' + (directAnswer || '')).split(/\s+/).filter(Boolean).length;
  }
  return result;
}

const GENERAL_EDITORIAL_ENRICHMENT = [
  'Evcil hayvanınızla seyahat ederken otelin oda içi hijyen standartları, ortak bahçe kullanım saatleri ve çevredeki veteriner kliniklerine yakınlık gibi detaylar tatilinizin sorunsuz geçmesi adına büyük önem taşır. Konaklama öncesinde tesisle iletişime geçerek köpeğinizin ırkını, kilosunu ve alışkanlıklarını belirtmeniz, işletmenin sizin için en sakin ve bahçeye en yakın odayı hazırlamasına olanak tanır. Özellikle zemin kat veya müstakil bahçe çıkışlı odalar sabah yürüyüşleri için büyük bir kolaylık sağlar.',
  'Tatilde dostunuzun beslenme ve uyku rutininin bozulmaması için alıştığı kuru mamayı, seyahat su kabını, en sevdiği oyuncağını ve ev kokusunu taşıyan battaniyesini yanınızda getirmeniz önerilir. Ani mama değişiklikleri seyahat sırasında sindirim hassasiyetine yol açabileceğinden kendi mamasından şaşmamak gerekir. Patili.co üzerinden bölgedeki tüm tesislerin teyitli evcil hayvan kurallarını inceleyebilir, kullanıcı değerlendirmelerine göz atarak rezervasyonunuzu tam bir güven duygusuyla oluşturabilirsiniz.',
  'Patili dostunuzla konaklama yaparken tesisin belirlediği oda içi temizlik kurallarına uymak, mobilyaların korunması adına koruyucu örtü kullanmak ve bahçede daima dışkı torbası bulundurmak pet dostu turizm kültürünün sürdürülebilirliği açısından büyük değer taşır. Girişte istenen güncel aşı karnesi, kuduz aşısı ve mikroçip belgelerini seyahat çantanızda eksiksiz biçimde hazır bulundurmanız otele kabul sürecini hızlandıracaktır.',
  'Tatil süresince olası acil sağlık ihtiyaçlarına karşı tesisin yakınlarındaki nöbetçi veteriner kliniklerinin harita konumlarını ve telefonlarını önceden kaydetmeniz güvenliğinizi artırır. Patili.co üzerinden aradığınız kriterlere en uygun tesisleri filtreleyebilir, güncel konaklama kurallarını karşılaştırarak rezervasyonunuzu tam bir huzur ve konforla tamamlayabilirsiniz.'
];

export function getEditorialArticleForCity(citySlug, clusterSlug = null) {
  const custom = citySlug ? CUSTOM_CITY_CONTENT[citySlug] : null;

  const foundCity = citySlug ? POPULAR_CITIES.find(c => c.slug === citySlug) : null;
  const isAllTurkey = !citySlug || citySlug === 'turkiye';
  const cityName = isAllTurkey ? 'Türkiye' : (foundCity ? foundCity.name : citySlug.charAt(0).toLocaleUpperCase('tr-TR') + citySlug.slice(1));

  const city = foundCity || {
    slug: citySlug || 'turkiye',
    name: cityName,
    districts: ['Merkez'],
    summary: isAllTurkey
      ? 'Türkiye genelinde kedi ve köpek kabul eden, güvenli bahçeli ve doğrulanmış evcil hayvan dostu oteller.'
      : `${cityName} bölgesinde kedi ve köpek kabul eden, güvenli bahçeli ve doğrulanmış evcil hayvan dostu oteller.`,
    tagline: 'Doğrulanmış Evcil Hayvan Politikaları ve Güvenli Konaklama',
    beachAndParks: 'Geniş parklar, sahil şeritleri ve doğa yürüyüş patikaları tasmalı geziler için uygundur.',
    vetNotice: 'Bölgede acil veteriner desteği sağlayan kliniklerin iletişim bilgilerine sitemizden ulaşabilirsiniz.',
    rules: 'Tesis kuralları gereği aşı karnesi bulundurulmalı ve ortak alanlarda tasmalı dolaşım sağlanmalıdır.'
  };

  const locInText = isAllTurkey ? 'Türkiye genelinde ' : `${cityName}'da `;

  if (custom && !clusterSlug) {
    return {
      h1: custom.h1,
      metaTitle: custom.metaTitle,
      metaDesc: custom.metaDesc,
      directAnswer: custom.directAnswer,
      paragraphs: ensureMinWordCount(custom.paragraphs, custom.directAnswer, GENERAL_EDITORIAL_ENRICHMENT),
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
    h1: isAllTurkey ? 'Evcil Hayvan Dostu Oteller: Türkiye Tatil ve Konaklama Rehberi' : `${cityName} Evcil Hayvan Dostu Oteller (2026 Doğrulanmış Tesisler)`,
    metaTitle: isAllTurkey ? 'Evcil Hayvan Dostu Oteller | Türkiye Tatil Rehberi | patili.co' : `${cityName} Evcil Hayvan Dostu Oteller (Kedi & Köpek Kabul Edenler) | patili.co`,
    metaDesc: isAllTurkey ? 'Türkiye genelinde evcil hayvan kabul eden otelleri karşılaştırın. Kilo sınırı, ek ücret, bahçe olanakları ve acil veteriner yakınlıkları.' : `${cityName} evcil hayvan kabul eden otelleri karşılaştırın. Kilo sınırı olmayan, ek ücret almayan, bahçeli oteller ve 7/24 acil veteriner yakınlıkları.`,
    directAnswer: `${locInText}evcil hayvan kabul eden konaklama tesislerinde kedi ve köpek kabul koşulları, kilo sınırları ve ek temizlik ücreti politikaları tesis yönetimleri tarafından bağımsız olarak belirlenmektedir. Rezervasyon öncesinde kabul edilen evcil hayvan türü, oda başına izin verilen hayvan sayısı ve varsa aşı karnesi şartları doğrudan işletmeden teyit edilmelidir.`,
    paragraphs: [
      `${cityName}, zengin konaklama seçenekleri ve patili dostlara kucak açan tesis yapısıyla öne çıkan destinasyonlar arasında yer almaktadır. ${city.summary}`,
      `Evcil hayvanınızla sorunsuz bir konaklama deneyimi yaşamak için dikkat edilmesi gereken en temel unsurların başında otelin belirlediği kabul kriterleri gelir. Birçok tesis küçük ırk köpek ve kedileri koşulsuz kabul ederken, orta ve büyük ırk dostlarımız için oda metrekaresi veya bahçe katı zorunluluğu gibi kriterler uygulayabilmektedir. Patili.co üzerinde listelenen tesisler; kilo sınırı, gecelik ek temizlik ücreti ve ortak alan kullanım kuralları açısından editörlerimizce teyit edilmektedir.`,
      `Gezilecek yerler ve açık alan aktiviteleri açısından ${cityName} zengin imkanlara sahiptir. ${city.beachAndParks} Yürüyüşler sırasında yanınızda daima katlanabilir su kabı, dışkı poşeti ve mevsimine göre kene/parazit koruyucu sprey bulundurmanız tavsiye edilir.`,
      `Sağlık ve acil durum güvencesi de tatil planının ayrılmaz bir parçasıdır. ${city.vetNotice} Olası bir sağlık sorununda zaman kaybetmemek adına konaklayacağınız otele en yakın nöbetçi kliniğin konumunu önceden haritanıza kaydetmeniz büyük fayda sağlayacaktır.`,
      `Konaklama esnasında odada evcil hayvanınızın yalnız kalma kuralları, restoran veya kafe gibi ortak alanlara tasmalı kabul şartları ve oda temizlik saatleri otel yönetiminin belirlediği prosedürlere tabidir. Ayrılık kaygısı yaşayan kedi ve köpeklerin yabancı bir ortamda yalnız bırakılmaması, hem dostunuzun güvenliği hem de komşu odaların sessizliği açısından tavsiye edilir. Seyahate çıkmadan önce alıştığı mama, su kabı, yatak ve oyuncaklarını yanınıza almanız adaptasyonu belirgin biçimde kolaylaştırır.`,
      `Patili.co üzerinden ${cityName} genelindeki tüm evcil hayvan kabul eden tesislerin güncel kurallarını, kilo politikalarını, kullanıcı yorumlarını ve oda olanaklarını tek bir ekrandan inceleyebilirsiniz. Harita üzerinden 7/24 nöbetçi veteriner klinikleri ile sahil ve park rotalarına olan mesafeleri görüntüleyebilir, tatilinizi şeffaf ve güvenilir bilgiler ışığında planlayabilirsiniz.`
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
        question: `${locInText}büyük ırk (20 kg üzeri) köpek kabul eden oteller var mı?`,
        answer: `Evet, özellikle müstakil bahçeli bungalovlar, villalar ve geniş arazili butik oteller kilo kısıtlaması uygulamamaktadır. Patili.co filtrelerinden "Kilo Sınırı Yok" seçeneğini işaretleyerek bu tesisleri listeleyebilirsiniz.`
      },
      {
        question: `${cityName} evcil hayvan dostu otellerde ek ücret alınıyor mu?`,
        answer: `Ek ücret politikası tesise göre değişir. Bazı oteller evcil hayvan konaklamasını tamamen ücretsiz sunarken, bazı tesisler oda dezenfeksiyonu için konaklama başına veya gecelik ek temizlik bedeli uygulayabilmektedir.`
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
      directAnswer: `${cityInText}köpek kabul eden konaklama tesislerinde kabul şartları köpeğin ırkına, kilosuna ve tesisin açık alan olanaklarına göre belirlenir. Tesislerin büyük kısmında tasmalı ortak alan dolaşımı serbest olup girişte güncel aşı karnesi ve mikroçip kaydı talep edilmektedir.`,
      paragraphs: [
        `${cityInText}köpeğinizle tatile çıkmak hem sizin hem de sadık dostunuzun ruh sağlığı için eşsiz bir yenilenme fırsatıdır. Ancak köpek kabul eden bir otel seçerken yalnızca "pet friendly" ibaresine güvenmek yeterli değildir; köpeğinizin boyutu, ırkı ve hareket ihtiyacına uygun imkanların sunulması gerekir. Şehir merkezindeki butik pansiyonlardan doğa içindeki ahşap bungalovlara kadar çok sayıda alternatif arasından seçim yaparken köpeğinizin günlük rutinlerini göz önünde bulundurmalısınız.`,
        `Köpekle konaklamalarda en sık karşılaşılan kısıtlama kilo ve ırk sınırıdır. Birçok standart otel 5-10 kg altı küçük ırkları (Pomeranian, Yorkshire, Maltese Terrier, Toy Poodle vb.) kabul ederken; Golden Retriever, Labrador, Boxer ve Kangal gibi orta ve büyük ırklar için geniş arazili butik oteller, müstakil bahçeli bungalovlar veya villalar tercih edilmelidir. Patili.co üzerinde kilo sınırı uygulamayan ve büyük dostlarımıza kucak açan tesisleri özel filtrelerle kolayca listeleyebilirsiniz.`,
        `Tesis içinde tasmalı dolaşım, restoran açık alanlarına kabul ve köpeğin odada yalnız kalabilme durumu otel yönetimlerince belirlenen kurallara tabidir. Köpeğinizin tatilde strese girmemesi için kendi yatağını, en sevdiği oyuncağını, mama/su kaplarını ve alıştığı mamasını yanınızda götürmeniz tavsiye edilir. Ayrılık kaygısı yaşayan dostlarımız için yabancı bir otel odasında tek başına bırakılmamaları, hem dostunuzun güvenliği hem de komşu oda misafirlerinin huzuru açısından kritik önem taşır.`,
        `Yola çıkmadan önce konaklayacağınız tesisin yakınındaki acil veteriner kliniklerini ve nöbetçi sağlık merkezlerini kaydetmek, plaj veya doğa yürüyüşlerinde karşılaşabileceğiniz olası kene/böcek ısırıklarına karşı önlem almanızı kolaylaştırır. Rezervasyon öncesinde köpeğinizin ırkını, kilosunu ve aşı durumunu otele yazılı olarak bildirerek onay almanız kusursuz bir tatilin anahtarıdır.`
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
      directAnswer: `${cityInText}kedi kabul eden otellerde en çok aranan kriterler oda içi ses yalıtımı, korumalı pencere/balkon güvenliği ve kedi kumu alanıdır. Rezervasyon öncesinde kedinizin odada serbest dolaşım ve yalnız kalabilme koşullarını doğrudan işletmeden teyit etmeniz önerilir.`,
      paragraphs: [
        `Kediler çevre değişikliklerine karşı köpeklere kıyasla çok daha hassastır ve tanıdık olmayan yeni mekanlarda güçlü bir güven duygusuna ihtiyaç duyarlar. ${cityInText}kedinizle seyahat ederken tercih edeceğiniz otelin sessiz, güvenli pencerelere sahip ve dışarıya kaçış riski barındırmayan odalar sunması konaklamanın huzuru açısından belirleyicidir.`,
        `Otele giriş yaparken kedinizin kapalı ve emniyetli bir taşıma çantası (box) içinde olması, oda kapısı açıldığında panikle kaçmasını önler. Odaya yerleştikten sonra kapı ve pencerelerin kapalı olduğundan emin olunmalı, ardından kedinizin sakinleşmesi için mama, su ve kum kabı hazırlanmalıdır. Birçok kedi dostu otel odalarda temel mama ve su kabı imkanı sağlasa da kedinizin alıştığı kokuları taşıyan kendi kum kabını ve tırmalama tahtasını yanınızda götürmeniz adaptasyon sürecini hızlandıracaktır.`,
        `Kedilerin pencere veya balkonlardan düşme/kaçma riskine karşı sineklik veya emniyet kilidi bulunup bulunmadığı otel yetkililerine mutlaka sorulmalıdır. Oda temizliği (kat hizmetleri) saatlerinde kedinizin taşıma çantasına alınması ya da "rahatsız etmeyin" kartı kullanılarak görevlilerin odaya aniden girmesinin engellenmesi tavsiye edilir.`,
        `Girişte resmi aşı karnesi ve mikroçip kontrolü yapıldığı için kuduz ve karma aşıların güncel olması zorunludur. Yolculuk sırasında stres yaşayan kediler için veteriner hekiminize danışarak feromon spreyleri veya doğal sakinleştirici damlalar temin edebilirsiniz.`
      ],
      faqs: [
        { question: 'Kedim otel odasında strese girerse ne yapmalıyım?', answer: 'Kedinizin evdeki tanıdık battaniyesini veya kokunuzu taşıyan bir eşyayı yatağına koymak ve sakinleştirici kedi feromon spreyleri kullanmak adaptasyonu hızlandırır.' },
        { question: 'Kedi için otelde ek ücret ödenir mi?', answer: 'Tesis politikasına göre değişir. Bazı tesisler kediler için hiçbir ek ücret almazken, bazı tesisler dezenfeksiyon ve tüy temizliği gerekçesiyle sembolik bir ücret uygulayabilir.' }
      ]
    },
    'buyuk-kopek-kabul-eden-oteller': {
      h1: `${cityPrefix}Büyük Köpek Kabul Eden Oteller & Kilo Sınırsız Tesisler`,
      metaTitle: `${cityPrefix}Büyük Köpek Kabul Eden Oteller (Kilo Sınırsız) | patili.co`,
      metaDesc: `${cityPrefix}20 kg üzeri büyük ırk köpek kabul eden oteller, dağ evleri ve kiralık villalar. Kilo kısıtlaması olmayan doğrulanmış pet friendly tesisler.`,
      directAnswer: `${cityInText}büyük ırk köpek kabul eden tesisler; kilo sınırı uygulamayan, zemin kat bahçe çıkışlı odalar, müstakil bungalovlar ve korunaklı villalardan oluşmaktadır. Rezervasyon öncesinde köpeğinizin ırkı ve kilosu işletmeye yazılı olarak bildirilmelidir.`,
      paragraphs: [
        `Golden Retriever, Labrador, German Shepherd (Alman Kurdu), Rottweiler, Boxer, Doberman ve Kangal gibi 20 kg ve üzeri büyük ırk köpek sahiplerinin tatil planlarken karşılaştığı en büyük engel katı kilo sınırlarıdır (genellikle 5 kg veya 10 kg). Birçok standart otel, oda metrekaresi veya diğer misafirlerin çekinceleri nedeniyle büyük ırkları kabul etmekte tereddüt eder. Patili.co, büyük dostlarımızın aileleriyle birlikte tatil yapabilmesi için "Kilo Sınırı Yok" politikasını uygulayan tesisleri özel olarak bir araya getirmektedir.`,
        `Büyük köpekler fiziksel yapıları gereği dar otel odalarında ve asansörlü kapalı koridorlarda sıkılabilir veya hareket kısıtlılığı yaşayabilir. Bu nedenle doğrudan bahçeye açılan zemin kat odalar, geniş çim arazilere kurulu çiftlik otelleri, bağımsız doğa bungalovları ve etrafı çevrili kiralık villalar büyük ırklar için ideal yaşam alanlarıdır. Geniş alanda köpeğiniz enerjisini atabilir, sabah tuvalet ihtiyacı için merdiven veya lobi geçişi stresi yaşamadan açık havaya çıkabilir.`,
        `Büyük köpekle seyahat ederken otelin ortak alan kurallarını bilmek esastır. Havuz çevresi, restoran kapalı bölümleri ve çocuk oyun alanlarında tasmalı dolaşım kuralına harfiyen uyulmalı, çevreye duyarlı bir tatil için dışkı toplama poşetleri mutlaka yanınızda bulundurulmalıdır. Bazı tesisler büyük ırkların ekstra tüy dökümü nedeniyle tek seferlik temizlik bedeli veya iade edilebilir depozito talep edebilmektedir.`,
        `Rezervasyonunuzu oluştururken köpeğinizin kesin kilosunu, ırkını ve temel eğitim durumunu açıkça belirtmeniz, işletmenin size en uygun ve bahçeye en yakın odayı tahsis etmesini sağlayacaktır.`
      ],
      faqs: [
        { question: 'Büyük köpek kabul eden otellerde ekstra bahçe ücreti var mı?', answer: 'Genellikle oda fiyatına bahçe kullanımı dahildir; ancak bazı tesisler büyük ırkların ekstra temizlik ihtiyacı nedeniyle tek seferlik dezenfeksiyon bedeli uygulayabilir.' }
      ]
    },
    'ucretsiz-evcil-hayvan-kabul-eden-oteller': {
      h1: `${cityPrefix}Ücretsiz Evcil Hayvan Kabul Eden Oteller (Ek Ücret Yok)`,
      metaTitle: `${cityPrefix}Ek Ücret Almayan Evcil Hayvan Dostu Oteller | patili.co`,
      metaDesc: `${cityPrefix}kedi ve köpeğiniz için gecelik ek ücret almayan ücretsiz pet friendly otelleri listeleyin. Sürpriz temizlik masrafı olmadan tatil yapın.`,
      directAnswer: `${cityInText}ek ücret almayan evcil hayvan dostu oteller, kedi ve köpek konaklaması için gecelik oda fiyatı dışında herhangi bir pet bedeli talep etmez. Olası mobilya hasarlarına karşı girişte iade edilebilir depozito alınabilir.`,
      paragraphs: [
        `Evcil hayvanla seyahat eden hayvanseverlerin en sık karşılaştığı sürpriz masraflardan biri, rezervasyon anında fark edilmeyen ve otele girişte talep edilen gecelik ek pet ücretleridir. Kimi işletmelerde bu ücret oda fiyatının %30 ila %50'sine kadar ulaşabilmektedir. Patili.co, evcil hayvanları ailenin ayrılmaz bir parçası olarak gören ve konaklama için ek temizlik veya gecelik ücret talep etmeyen tesisleri şeffaf biçimde listelemektedir.`,
        `Ücretsiz pet kabul eden otellerde konaklarken misafirlerin tesise karşı karşılıklı özen göstermesi bu dostane politikanın sürdürülebilirliği için son derece önemlidir. Odadaki mobilyaların tırmalanmaması veya kemirilmemesi, yatak ve koltuk üzerine koruyucu örtü serilmesi ve bahçede dışkı temizliğine dikkat edilmesi nezaket kuralıdır. Bazı tesisler oda güvenliğini teminat altına almak amacıyla girişte kredi kartı provizyonu veya nakit hasar depozitosu alabilmekte ve çıkışta odayı kontrol ederek depozitoyu iade etmektedir.`,
        `Ek ücret almayan bir tesis seçmiş olsanız dahi, rezervasyon notunuzda evcil hayvanınızın türünü (kedi/köpek), ırkını ve sayısını mutlaka açıkça belirtmelisiniz. Bazı tesisler ilk evcil hayvanı ücretsiz kabul ederken ikinci hayvan için ek bedel uygulayabilir.`,
        `Ücretsiz kabul politikası sunan butik otel ve pansiyonlar genellikle hayvansever işletmeciler tarafından yönetilmekte olup, sıcak ve samimi bir atmosferde patili dostunuzla huzurlu bir tatil geçirmenizi mümkün kılar.`
      ],
      faqs: [
        { question: 'Ek ücret almayan oteller daha az olanak mı sunar?', answer: 'Hayır; aksine bu tesisler hayvan sevgisini işletme felsefesi haline getirmiş, mama kabı ve yatak gibi olanakları dahi ücretsiz sunabilen samimi işletmelerdir.' }
      ]
    },
    'evcil-hayvan-dostu-bungalovlar': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Bungalovlar & Doğa Evleri`,
      metaTitle: `${cityPrefix}Evcil Hayvan Dostu Bungalovlar (Çitli Bahçeli) | patili.co`,
      metaDesc: `${cityPrefix}kedi ve köpeğinizle konaklayabileceğiniz müstakil bahçeli, korunaklı ahşap bungalovlar ve dağ evleri. Doğa içinde özgür tatil.`,
      directAnswer: `${cityInText}evcil hayvan kabul eden bungalov ve dağ evleri, etrafı korunaklı müstakil bahçeleri ve doğrudan doğaya açılan kapılarıyla köpeklere tasmasız hareket alanı sağlar. Doğa tatillerinde dış parazit ve kene koruması ihmal edilmemelidir.`,
      paragraphs: [
        `Doğa ile baş başa, gürültüden uzak ve müstakil bir tatil planlayan evcil hayvan sahipleri için ahşap bungalovlar ve dağ evleri en popüler konaklama tercihidir. Kalabalık otel lobileri, dar asansörler ve ortak koridor stresi yaşamadan doğrudan çim bahçeye adım atmak, özellikle enerjisi yüksek köpekler için tarifsiz bir rahatlık sunar.`,
        `Sapanca, Bolu, Kaz Dağları, Fethiye ve Rize yaylalarında yer alan bungalov tesislerinde şömine, barbekü alanı, geniş verandalar ve ısıtmalı havuz gibi ayrıcalıklar yer alır. Bungalov seçerken en kritik kriter bahçenin korunaklılık durumudur; etrafı 1.20 - 1.50 metre ahşap veya tel çitlerle tamamen çevrili olan yapılar, köpeğinizin sabah kahvaltınız sırasında bahçede tasmasız güvenle koşturmasına olanak tanır.`,
        `Doğanın kalbinde tatil yaparken dikkat edilmesi gereken en önemli sağlık unsuru parazit korumasıdır. Ormanlık ve çayırlık alanlarda yoğunlaşan kene, pire ve yabani ot tohumlarına karşı tatil öncesinde veteriner hekim kontrolünde damla veya tasma koruması yaptırılmalıdır. Yürüyüş sonrasında patilerin, kulak içlerinin ve parmak aralarının kontrol edilmesi sağlık açısından elzemdir.`,
        `Bungalov tipi konaklamalarda en yakın 7/24 acil veteriner kliniğinin mesafesini önceden öğrenmek ve araçta temel ilk yardım çantası bulundurmak tatilinizin her anını güvence altına alır.`
      ],
      faqs: [
        { question: 'Bungalov bahçeleri gerçekten kaçışa karşı güvenli mi?', answer: 'Çoğu tesis korunaklı çitlerle çevrilidir; ancak küçük ırkların çit altındaki boşluklardan geçme riskine karşı girişte bahçe sınırlarının kontrol edilmesi önerilir.' }
      ]
    },
    'evcil-hayvan-dostu-villalar': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Kiralık Villalar (Özel Havuzlu)`,
      metaTitle: `${cityPrefix}Evcil Hayvan Kabul Eden Kiralık Villalar | patili.co`,
      metaDesc: `${cityPrefix}özel havuzlu ve korunaklı bahçeli pet friendly kiralık villalar. Kedi ve köpeğinizle ailenize özel izole lüks tatil.`,
      directAnswer: `${cityInText}korunaklı kiralık villalar, müstakil bahçeleri ve özel kullanım alanlarıyla birden fazla evcil hayvan veya büyük ırk köpeklerle tatil yapmak için en konforlu çözümü sunar. Havuz temizliği ve filtre sağlığı için evcil hayvanların yüzme havuzuna girmesine izin verilmez.`,
      paragraphs: [
        `Otellerin kurallarına ve ortak alan kısıtlamalarına bağlı kalmaksızın, tamamen ailenize ve patili dostlarınıza ait bağımsız bir tatil deneyimi arıyorsanız müstakil kiralık villalar en seçkin alternatiftir. Kaş, Kalkan, Bodrum, Fethiye ve Sapanca bölgelerinde yoğunlaşan pet dostu villalar, yüzlerce metrekarelik özel çim bahçeleriyle köpeklerin sınırsızca oyun oynamasına imkan tanır.`,
        `Villalarda kendi yemeğinizi hazırlayabileceğiniz tam teşekküllü modern mutfaklar, geniş teraslar ve korunaklı yüzme havuzları yer alır. Tesis yönetimleri ve villa sahipleri, hijyen ve havuz filtre sağlığını korumak amacıyla evcil hayvanların yüzme havuzuna girmesini yasaklamaktadır. Ancak bahçede yer alan hortum ve gölgelik duş alanları sayesinde sıcak yaz günlerinde köpeğinizin patilerini ve gövdesini rahatlıkla serinletebilirsiniz.`,
        `Özellikle birden fazla köpeği veya kedisi olan aileler için otellerde oda başına konulan 1 hayvan sınırı villalarda genellikle esnetilebilmektedir. Rezervasyon öncesinde ev sahibiyle görüşerek evcil hayvan sayısını ve ırklarını yazılı olarak bildirip onay almak gerekmektedir. Girişte hasar depozitosu uygulaması standart olup, çıkışta villa demirbaşlarında hasar tespit edilmediği takdirde depozito eksiksiz iade edilir.`,
        `Villada tatil yaparken mama ve su kaplarının gölgede tutulması, sıcak güneş altında dostunuzun uzun süre bırakılmaması ve çevre köylerdeki sokak hayvanlarıyla teması önlemek adına bahçe kapısının kilitli tutulması tavsiye edilir.`
      ],
      faqs: [
        { question: 'Villada evcil hayvan sayısı sınırı var mı?', answer: 'Genellikle 1 veya 2 evcil hayvana kadar izin verilir. Daha fazla sayıda evcil hayvanla seyahat ediliyorsa rezervasyon öncesi ev sahibinden yazılı teyit alınmalıdır.' }
      ]
    },
    'her-sey-dahil-evcil-hayvan-dostu-oteller': {
      h1: `${cityPrefix}Her Şey Dahil Evcil Hayvan Kabul Eden Oteller`,
      metaTitle: `${cityPrefix}Her Şey Dahil Pet Friendly Oteller (2026 Tesisler) | patili.co`,
      metaDesc: `${cityPrefix}her şey dahil açık büfe konsepte sahip, kedi ve köpek kabul eden lüks resort ve tatil köyleri. Kurallar ve olanaklar.`,
      directAnswer: `${cityInText}her şey dahil resort otellerde evcil hayvanlar için zemin kat bahçeli özel bloklar veya göl evleri tahsis edilir. Sağlık Bakanlığı hijyen yönetmelikleri uyarınca kapalı açık büfe restoranlara evcil hayvan kabul edilmezken açık teraslar ve yürüyüş parkurları serbesttir.`,
      paragraphs: [
        `Yemek, içecek ve aktivitelerin tek çatı altında sunulduğu her şey dahil (All Inclusive ve Ultra All Inclusive) tatil köylerinde patili dostunuzla konaklamak büyük bir rahatlık sunar. Ancak yüzlerce misafirin aynı anda ağırlandığı büyük resort tesislerde hem hijyen yönetmeliklerinin sağlanması hem de tüm misafirlerin tatil konforunun korunması amacıyla belirli kurallar uygulanır.`,
        `Her şey dahil otellerde evcil hayvanların açık büfe restoranların kapalı bölümlerine, ana havuz çevresine ve spa merkezlerine girmesi kanunen yasaktır. Buna karşılık geniş açık hava teraslarında, sahil kafelerinde ve yürüyüş yollarında tasmalı olarak masanızın yanında oturabilirler. Birçok lüks tesis köpekler için özel plaj köşeleri, çim koşu parkurları ve bahçeli dinlenme alanları inşa etmektedir.`,
        `Oda tahsisinde genellikle ana binadaki halı kaplı odalar yerine, fayans zeminli ve doğrudan bahçeye açılan villalar, göl evleri veya bahçe katı bloklar tercih edilir. Bu düzenleme hem sabah yürüyüşlerine hızlı erişim sağlar hem de asansör kullanım ihtiyacını ortadan kaldırır. Bazı seçkin resort tesislerde oda servisiyle taze pişirilmiş pet menüsü, pet yatağı ve veteriner hekim çağırma hizmeti gibi VIP olanaklar da sunulmaktadır.`,
        `Her şey dahil bir otele rezervasyon yaptırırken köpeğinizin kalabalığa ve çocuk seslerine karşı toleransını iyi tartmalı, sosyal ortamlara uyumlu olmayan dostlarımız için daha sakin butik tesisleri değerlendirmelisiniz.`
      ],
      faqs: [
        { question: 'Her şey dahil otellerde pet için ayrıca yemek veriliyor mu?', answer: 'Bazı resort tesislerde özel pet menüsü oda servisiyle ücretli/ücretsiz sağlanabilir; ancak dostunuzun sindirim sağlığı için alıştığı kendi mamasını getirmeniz önerilir.' }
      ]
    },
    'bahceli-evcil-hayvan-dostu-oteller': {
      h1: `${cityPrefix}Bahçeli Evcil Hayvan Dostu Oteller`,
      metaTitle: `${cityPrefix}Bahçeli ve Çim Alanlı Pet Friendly Oteller | patili.co`,
      metaDesc: `${cityPrefix}köpek ve kedinizin rahatça vakit geçirebileceği geniş çim bahçeli, yeşil alanlı pet friendly otel ve butik pansiyonlar.`,
      directAnswer: `${cityInText}geniş çim bahçesi bulunan oteller, köpeğinizin günlük tuvalet ve koşturma ihtiyacını tesis dışına çıkmadan güvenle karşılamasını sağlar. Ortak bahçelerde diğer misafirlerin güvenliği için tasmalı kullanım esastır.`,
      paragraphs: [
        `Köpekle otel konaklamasında tatil konforunu belirleyen en pratik unsur, odadan adımınızı atar atmaz yeşil bir çim alana ulaşabilmektir. Bahçeli oteller; sabah erken saatlerde ve gece yatmadan önce tuvalet ihtiyacı için sokak aramak veya otelden uzaklaşmak zorunda kalmanızı tamamen önler.`,
        `Geniş arazilere kurulu bahçeli tesislerde köpekler doğanın kokularını keşfedebilir, yumuşak çim zemin üzerinde eklemlerini yormadan hareket edebilir. Bahçe kullanımı sunan otellerde diğer misafirlerin, çocukların ve varsa otelin kendi evcil hayvanlarının huzuru için tasmalı dolaşım kurallarına özen gösterilmelidir. Bahçenin etrafının çevrili olup olmadığı ve dışarıya kontrolsüz çıkış kapılarının bulunup bulunmadığı girişte kontrol edilmelidir.`,
        `Bahçeli otellerde konaklarken çevre temizliğine riayet etmek ve dışkı poşetlerini vakit kaybetmeden bertaraf etmek tesisin pet dostu politikasını sürdürmesine katkı sağlar. Ayrıca bahçedeki bitkilerin evcil hayvanlar için zehirli olup olmadığına (zakkum, bazı sarmaşık türleri vb.) ve bahçede yakın zamanda zirai ilaçlama yapılıp yapılmadığına dikkat edilmelidir.`,
        `Ege ve Akdeniz sahil şeridinde zeytin ağaçları arasındaki butik bahçeli tesisler, patili dostunuzla gölgede kitap okuyup dinlenebileceğiniz en huzurlu tatil ortamını vadeder.`
      ],
      faqs: [
        { question: 'Bahçeli otellerde köpeğim tasmasız dolaşabilir mi?', answer: 'Tesisin etrafı tamamen korunaklı özel çitle çevrili bir alanı yoksa, ortak bahçelerde tasma takılması genel bir kuraldır.' }
      ]
    },
    'evcil-hayvan-dostu-butik-oteller': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Butik Oteller`,
      metaTitle: `${cityPrefix}Evcil Hayvan Kabul Eden Butik Oteller | patili.co`,
      metaDesc: `${cityPrefix}samimi atmosferi, az oda sayısı ve yüksek misafirperverliğiyle kedi ve köpek kabul eden seçkin pet friendly butik oteller.`,
      directAnswer: `${cityInText}butik oteller daha az oda sayısı ve sakin atmosferleri sayesinde evcil hayvanların stres yaşamadan en hızlı adapte olduğu konaklama türüdür. Rezervasyon öncesi oda metrekaresi ve merdiven yapısı teyit edilmelidir.`,
      paragraphs: [
        `Az sayıda odaya sahip butik oteller, kalabalık tatil komplekslerine kıyasla hem insanlara hem de evcil hayvanlara kişiselleştirilmiş, sakin ve samimi bir tatil deneyimi yaşatır. İşletmecilerin genellikle kendilerinin de hayvansever veya kedi/köpek sahibi olması, mekana girdiğiniz andan itibaren son derece anlayışlı ve sıcak bir atmosferle karşılaşmanızı sağlar.`,
        `Alaçatı, Bozcaada, Cunda, Bodrum, Kaş ve Şile gibi turizm merkezlerinde tarihi taş konaklarda veya ahşap yapılarda hizmet veren butik oteller, otantik avluları ve begonvilli verandalarıyla öne çıkar. Butik otel seçerken köpeğinizin merdiven inip çıkma kabiliyetini, oda büyüklüğünü ve odalar arası ses yalıtımını sormak faydalıdır; nitekim dar ahşap merdivenler yaşlı veya eklem sorunu olan köpekler için zorlayıcı olabilir.`,
        `Butik otellerde konaklayan diğer misafirlerin huzurunu korumak adına havlama ve gece hareketliliği konusunda hassasiyet gösterilmesi beklenir. Sakin mizaçlı köpekler ve kediler için butik oteller kalabalıktan uzak en huzurlu sığınaktır.`,
        `Rezervasyonunuzu oluştururken evcil hayvanınızın boyutunu belirterek zemin kat veya bahçeye doğrudan açılan odaları talep etmeniz tatil konforunuzu katlayacaktır.`
      ],
      faqs: [
        { question: 'Butik otellerde oda başına kaç evcil hayvan kabul edilir?', answer: 'Oda metrekaresine bağlı olarak genellikle oda başına 1 veya en fazla 2 evcil hayvan kabul edilmektedir.' }
      ]
    },
    'evcil-hayvan-dostu-tatil-koyleri': {
      h1: `${cityPrefix}Evcil Hayvan Dostu Tatil Köyleri & Resortlar`,
      metaTitle: `${cityPrefix}Pet Friendly Tatil Köyleri & Geniş Tesisler | patili.co`,
      metaDesc: `${cityPrefix}geniş arazide kedi ve köpek kabul eden, spor alanları, plajı ve yürüyüş parkurları olan tam donanımlı tatil köyleri.`,
      directAnswer: `${cityInText}tatil köyleri onlarca dönümlük geniş yeşil arazileri sayesinde evcil hayvanınızla uzun yürüyüşler yapabileceğiniz en kapsamlı tesislerdir. Girişlerde aşı karnesi zorunludur.`,
      paragraphs: [
        `Onlarca dönüm yeşil arazi üzerine kurulu tatil köyleri; deniz kenarı yürüyüş yolları, çam ormanı parkurları ve tam teşekküllü tesis imkanlarıyla tüm ailenin keyifle vakit geçirebileceği tatil kompleksleridir. Şehir hayatında dar alanlara sıkışan köpekler için tatil köylerinin geniş açık alanları eşsiz bir egzersiz ve sosyalleşme imkanı sunar.`,
        `Tatil köylerinde evcil hayvanların konaklayabileceği bölümler genellikle bahçe katı veya göl evi tipindeki müstakil bloklarda yer alır. Bu sayede hem evcil hayvan sahipleri konforlu hareket eder hem de diğer misafirlerin tatil huzuru korunur. Tesiste tasmalı yürüyüş kurallarına dikkat edilmeli ve sahil şeridinde belirlenen pet dostu alanlar tercih edilmelidir.`,
        `Tatil köylerinin sunduğu en büyük avantajlardan biri de geniş altyapılarıdır; bazı tesislerde anlaşmalı veteriner hekim çağrı servisi, özel köpek kuaförü ve mama tedarik noktaları bulunmaktadır.`,
        `Rezervasyon yaparken tatil köyünün büyüklüğünü ve odanız ile restoran/sahil arasındaki yürüyüş mesafesini öğrenmeniz, yaşlı veya yorgun dostlarınız için en uygun blok seçimini yapmanıza yardımcı olur.`
      ],
      faqs: [
        { question: 'Tatil köylerinde veteriner reviri var mı?', answer: 'Bazı büyük tatil köylerinde anlaşmalı yerel veteriner hekimlerle 7/24 çağrı üzerine sağlık desteği sağlanmaktadır.' }
      ]
    },
    'kopek-kabul-eden-bungalovlar': {
      h1: `${cityPrefix}Köpek Kabul Eden Bungalovlar`,
      metaTitle: `${cityPrefix}Köpek Kabul Eden Bungalovlar (Müstakil Çitli) | patili.co`,
      metaDesc: `${cityPrefix}köpeğinizle doğa içinde konaklayabileceğiniz etrafı çitli, geniş bahçeli ahşap bungalovlar ve dağ evleri.`,
      directAnswer: `${cityInText}köpek kabul eden bungalovlar, müstakil çitli bahçeleri ve doğa içi konumlarıyla köpeğinize sınırsız koşturma ve keşif imkanı sağlar. Kışın şömine ve soba güvenliğine dikkat edilmelidir.`,
      paragraphs: [
        `Köpeklerin doğada koşup oynama tutkusunu tatmin eden en konforlu konaklama şekli şüphesiz bağımsız bungalovlardır. Sapanca gölü kıyısından Kaz Dağları eteklerine kadar uzanan bungalov seçenekleri, özellikle enerjisi yüksek köpeklerin sosyalleşme ve egzersiz ihtiyacına birebirdir.`,
        `Özel bahçe çiti sayesinde köpeğiniz sabah kahvaltınız sırasında bahçede güvenle serbest kalabilir. Şömine başında dinlenirken patili dostunuzun yanı başınızda huzurla uyuması, doğa tatilinin en keyifli anlarındandır. Kış aylarında şömine ve soba bulunan evlerde köpeğinizin ateşe fazla yaklaşmaması için koruyucu önlemler alınmalıdır.`,
        `Bungalov tipi konaklamalarda çevre köylerdeki sokak hayvanlarıyla teması önlemek adına bahçe kapısının kilitli tutulması ve doğadaki kene/pire riskine karşı koruyucu damlaların güncel olması şarttır.`,
        `İşletmeler genellikle mama ve su kabı tedarik etse de köpeğinizin sindirim dengesini korumak için alıştığı mamasını yeterli miktarda yanınızda getirmeniz önerilir.`
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

  const clusterEnrichment = `Tatilinizi planlarken patili dostunuzun ırk özelliklerini, aşı karnesini ve günlük alışkanlıklarını göz önünde bulundurmanız hem sizin hem de çevrenizdekilerin huzurlu bir konaklama deneyimi yaşamasını sağlar. Patili.co üzerinden seçtiğiniz tesislerin tüm kurallarını inceleyebilir, harita üzerinden en yakın 7/24 veteriner kliniklerini görüntüleyerek güvenle rezervasyon adımlarınızı tamamlayabilirsiniz.`;

  return {
    h1: article.h1,
    metaTitle: article.metaTitle,
    metaDesc: article.metaDesc,
    directAnswer: article.directAnswer,
    paragraphs: ensureMinWordCount([...article.paragraphs, clusterEnrichment], article.directAnswer, GENERAL_EDITORIAL_ENRICHMENT),
    comparisonTable: defaultComparisonTable,
    faqs: article.faqs
  };
}

export { FLAGSHIP_GUIDES, getFlagshipGuideBySlug } from './flagship-guides.js';
