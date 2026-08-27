import React from 'react';
import { methodologyContent } from '../data/mockData';
import { VerifiedBadge } from '../components/PetIcons';

export default function Methodology({ activeSubView }) {
  // Map of views to titles & content
  const renderContent = () => {
    switch (activeSubView) {
      case 'trust-how':
        return (
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <h2 className="font-title text-2xl font-bold text-brand-navy">Nasıl Doğruluyoruz?</h2>
            <p className="font-medium text-base text-gray-800">
              patiyleseyahat.com'da yer alan her bilgi, editörlerimiz tarafından yerinde denetim veya doğrudan doğrulama süreciyle elde edilir. Platformumuzda otomatik veri çekme (scraping) ve kopyalama işlemleri kesinlikle yapılmaz.
            </p>
            <h3 className="font-title font-bold text-gray-900 text-lg">Doğrulama Adımlarımız:</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Standartlaştırılmış Soru Listesi:</strong> İşletmelerle iletişime geçilerek oda başına pet limitleri, kilo sınırları, bahçe-plaj kuralları, aşı karnesi gereksinimleri tek tek sorulur.
              </li>
              <li>
                <strong>Yerinde Denetim:</strong> Tesislerin büyük bölümü editörlerimiz tarafından patili dostlarıyla birlikte ziyaret edilerek denetlenir. Köpek yataklarının kalitesinden mama kaplarının temizliğine kadar her ayrıntı kontrol edilir.
              </li>
              <li>
                <strong>3 Aylık Periyodik Güncelleme:</strong> Tüm otel politikaları her 3 ayda bir telefon ve e-posta yoluyla aranarak teyit edilir. Tesis kartlarında "Son Doğrulama Tarihi" şeffafça ilan edilir.
              </li>
            </ol>
            <div className="bg-brand-navy-light/35 border border-brand-navy/20 rounded-xl p-4 mt-6">
              <p className="text-xs text-gray-600">
                <strong>Editörün Taahhüdü:</strong> Doğruluğundan emin olmadığımız veya kurallarını açıkça yazılı olarak teyit edemediğimiz hiçbir tesisi platformumuza eklemiyoruz.
              </p>
            </div>
          </div>
        );

      case 'trust-editorial':
        return (
          <div className="space-y-6 text-sm text-gray-750 leading-relaxed">
            <h2 className="font-title text-2xl font-bold text-brand-navy">Editoryal İlkelerimiz</h2>
            <p>
              Platformumuzda yayınlanan seyahat rehberleri ve otel değerlendirmeleri bağımsız gazetecilik ve hayvan refahı standartlarına uygundur.
            </p>
            <h3 className="font-title font-bold text-gray-900 text-base">İlkelerimiz:</h3>
            <ul className="list-disc pl-5 space-y-2.5">
              <li><strong>Bağımsız Değerlendirme:</strong> Bir tesisin reklam vermesi, onun editoryal değerlendirmesini veya "Dost Uygunluk Seviyesini" asla etkilemez.</li>
              <li><strong>Uzman/Veteriner Onayı:</strong> Sağlık, beslenme, uçakla taşınma gibi tıbbi ve yasal konulardaki rehberlerimiz, yayına girmeden önce mutlaka anlaşmalı veteriner hekimlerimiz tarafından kontrol edilir ve onaylanır.</li>
              <li><strong>Gerçekçi Deneyimler:</strong> Sadece olumlu yanları değil, büyük ırk köpekler için uygun olmama, merdiven fazlalığı veya bahçe yetersizliği gibi olumsuz yanları da "Kimler İçin Uygun Olmayabilir" başlığı altında şeffafça yazarız.</li>
            </ul>
          </div>
        );

      case 'trust-correction':
        return (
          <div className="space-y-6 text-sm text-gray-750 leading-relaxed">
            <h2 className="font-title text-2xl font-bold text-brand-navy">Düzeltme Politikası</h2>
            <p>
              Hatalı veya güncelliğini yitirmiş bilgileri en kısa sürede düzeltmeyi taahhüt ediyoruz. Kullanıcılarımızdan gelen düzeltme talepleri en geç 48 saat içinde incelenir ve doğrulanır.
            </p>
            <h3 className="font-title font-bold text-gray-900 text-base">İşleyiş Süreci:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Kullanıcı otel sayfasındaki "Bilgiler Değiştiyse Bildir" butonuyla güncelleme notunu iletir.</li>
              <li>Editörümüz bildirim üzerine otel yönetimi ile iletişime geçerek bilgiyi teyit eder.</li>
              <li>Bilgi teyit edildikten sonra sistem güncellenir ve otel kartındaki "Son Doğrulama Tarihi" o günün tarihiyle yenilenir.</li>
            </ol>
          </div>
        );

      case 'trust-ads':
        return (
          <div className="space-y-6 text-sm text-gray-755 leading-relaxed">
            <h2 className="font-title text-2xl font-bold text-brand-navy">Reklam ve Sponsorlu İçerik Politikası</h2>
            <p>
              patiyleseyahat.com gelir modelini seçkin sponsorluklar ve tesis tanıtımları üzerine kurmuştur. Ancak bu ticari ilişkilerin kullanıcılarımızın güvenini zedelemesine asla izin verilmez.
            </p>
            <h3 className="font-title font-bold text-gray-900 text-base">Sponsorluk Kriterlerimiz:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sponsor olan veya reklam veren oteller platformda net bir şekilde <strong>"Sponsorlu"</strong> etiketiyle listelenir.</li>
              <li>Sponsorluk, bir tesisin "Dost Uygunluk Seviyesini" (1, 2 veya 3) yükseltmesini sağlayamaz. Her tesis objektif kriterlere göre seviyelendirilir.</li>
              <li>Sadece evcil hayvan refahı standartlarını karşılayan ve doğrulanmış oteller sponsor olarak kabul edilir. Standart dışı hiçbir tesise sponsor olsa dahi yer verilmez.</li>
            </ul>
          </div>
        );

      case 'legal-kvkk':
        return (
          <div className="space-y-4 text-xs text-gray-650 leading-relaxed">
            <h2 className="font-title text-xl font-bold text-gray-900">KVKK Aydınlatma Metni</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, patiyleseyahat.com olarak, veri sorumlusu sıfatıyla, kişisel verilerinizin aşağıda açıklanan çerçevede kaydedileceğini, depolanacağını ve işleneceğini bildiririz.
            </p>
            <p>
              <strong>İşlenen Veriler:</strong> E-bülten kaydı için e-posta adresiniz, düzeltme formu için ilettiğiniz mesajlar ve tarayıcı çerez bilgileriniz.
            </p>
            <p>
              <strong>İşleme Amacı:</strong> Size özel seyahat fırsatları sunmak, bülten göndermek, site deneyimini iyileştirmek ve düzeltme taleplerini doğrulamak amacıyla verileriniz üçüncü şahıslarla paylaşılmaksızın güvenle saklanır.
            </p>
          </div>
        );

      case 'legal-terms':
        return (
          <div className="space-y-4 text-xs text-gray-650 leading-relaxed">
            <h2 className="font-title text-xl font-bold text-gray-900">Kullanım Koşulları</h2>
            <p>
              patiyleseyahat.com web sitesine erişerek veya bültenimize üye olarak bu kullanım koşullarını kabul etmiş sayılırsınız.
            </p>
            <p>
              Sitede yayınlanan tüm özgün editoryal içerikler, otel politikası özetleri ve listeleme tabloları telif haklarıyla korunmaktadır. Kaynak gösterilse dahi başka web sitelerinde izinsiz yayınlanması yasaktır.
            </p>
            <p>
              Editörlerimiz bilgilerin doğruluğu için azami gayret göstermektedir ancak tesislerin son dakika kural değişikliklerinden doğabilecek olası aksaklıklardan platformumuz sorumlu tutulamaz. Rezervasyon öncesi resmi yönlendirme sitelerinden teyit alınması önerilir.
            </p>
          </div>
        );

      case 'legal-privacy':
        return (
          <div className="space-y-4 text-xs text-gray-650 leading-relaxed">
            <h2 className="font-title text-xl font-bold text-gray-900">Gizlilik Politikası</h2>
            <p>
              Gizliliğiniz bizim için önemlidir. patiyleseyahat.com olarak ziyaretçilerimizin kişisel verilerinin gizliliğini korumayı taahhüt ederiz.
            </p>
            <p>
              Bülten üyeliği amacıyla topladığımız e-posta adresleri kesinlikle üçüncü şahıslarla paylaşılmaz, satılmaz veya spam amaçlı kullanılmaz. İstediğiniz an bülten aboneliğinden tek tıkla ayrılabilirsiniz.
            </p>
          </div>
        );

      case 'legal-cookies':
        return (
          <div className="space-y-4 text-xs text-gray-650 leading-relaxed">
            <h2 className="font-title text-xl font-bold text-gray-900">Çerez Politikası</h2>
            <p>
              Sitemizde kullanıcı deneyimini artırmak ve arama tercihlerinizi (seçtiğiniz evcil hayvan türü, arama filtreleri) hatırlamak amacıyla birinci taraf teknik çerezler kullanılmaktadır.
            </p>
            <p>
              Tarayıcı ayarlarınızdan çerezleri engelleyebilirsiniz ancak bu durumda arama filtrelerinin kararlılığı etkilenebilir. Reklam veya izleme çerezleri barındırılmamaktadır.
            </p>
          </div>
        );

      case 'methodology':
      default:
        return (
          <div className="space-y-8 text-left text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-title text-3xl font-bold text-brand-navy">{methodologyContent.title}</h2>
              <p className="text-gray-600 mt-2 text-base font-light">{methodologyContent.description}</p>
            </div>

            {/* Suitability levels detailed grid */}
            <div className="grid grid-cols-1 gap-8 mt-6">
              {methodologyContent.levels.map((level, index) => (
                <div key={index} className="bg-white border-2 border-brand-navy/10 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1.5 rounded-lg shadow-sm ${
                      'bg-brand-navy'
                    }`}>
                      <VerifiedBadge className="w-4 h-4 text-white" /> Seviye {level.level}
                    </span>
                    <h3 className="font-title font-bold text-lg text-gray-900 mt-3 leading-snug">{level.name}</h3>
                  </div>

                  <div className="md:w-3/4 space-y-4">
                    <p className="text-xs text-gray-500 italic">"{level.description}"</p>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-2">Metodolojik Kriterler:</h4>
                      <ul className="space-y-2">
                        {level.criteria.map((crit, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="text-brand-navy font-bold">•</span>
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Methodology warning block */}
            <div className="bg-brand-navy-light border border-brand-navy/15 rounded-3xl p-6 mt-8 flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="font-title font-bold text-brand-navy text-sm">Hayvan Kabul Politikaları Sürekli Değişebilir</h4>
                <p className="text-xs text-gray-600 mt-1 leading-normal">
                  Her otel yönetimsel veya mevsimsel olarak evcil hayvan kabul şartlarını güncelleyebilir. Editör kadromuz bilgileri 3 ayda bir doğrulamaktadır. Sürpriz yaşamamanız için, sitemizde doğrulanmış olan kuralları otel ile iletişim kurarken tekrar teyit etmenizi ve aşı karnenizi yanınızda bulundurmanızı rica ederiz.
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
      <div className="bg-white border-2 border-brand-navy/10 rounded-3xl p-8 md:p-12 shadow-xs">
        {renderContent()}
      </div>
    </div>
  );
}
