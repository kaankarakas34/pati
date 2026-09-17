import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'mail.spacemail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER || 'info@patili.co';
const SMTP_PASS = process.env.SMTP_PASS || 'h1tR%vo9';
const NOTIFICATION_EMAILS = process.env.NOTIFICATION_EMAILS || 'info@patili.co, kaankarakas93@gmail.com';

let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });
  }
  return transporter;
}

function escape(str = '') {
  return String(str || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderEmailTemplate({ title, badge, rows, footerNote = '' }) {
  const rowHtml = rows
    .map(
      r => `
      <tr>
        <td style="padding: 10px 12px; font-weight: bold; color: #4b5563; background-color: #f9fafb; width: 160px; border-bottom: 1px solid #e5e7eb; font-size: 13px;">${escape(r.label)}</td>
        <td style="padding: 10px 12px; color: #111827; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${r.html || escape(r.value || '-')}</td>
      </tr>`
    )
    .join('');

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e5e7eb;">
      <div style="background-color: #1e1b4b; padding: 20px 24px; color: #ffffff;">
        <div style="display: inline-block; background-color: #ec4899; color: #ffffff; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 8px;">
          ${escape(badge)}
        </div>
        <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">${escape(title)}</h2>
        <p style="margin: 4px 0 0 0; font-size: 13px; color: #cbd5e1;">Patili.co platformundan yeni bir başvuru/bildirim alındı.</p>
      </div>
      
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tbody>
            ${rowHtml}
          </tbody>
        </table>
        
        ${footerNote ? `<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; font-size: 12px; color: #1e40af; border-radius: 4px; margin-top: 16px;">${escape(footerNote)}</div>` : ''}
      </div>

      <div style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; padding: 16px 24px; text-align: center; font-size: 12px; color: #6b7280;">
        Bu e-posta <strong>patili.co</strong> otomatik bildirim sistemi tarafından gönderilmiştir.<br>
        Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
      </div>
    </div>
  </body>
  </html>
  `;
}

async function sendMail({ subject, html, text }) {
  try {
    const mailer = getTransporter();
    const info = await mailer.sendMail({
      from: `"Patili.co Bildirim" <${SMTP_USER}>`,
      to: NOTIFICATION_EMAILS,
      subject: `[Patili.co] ${subject}`,
      text: text || '',
      html: html
    });
    console.log(`[EmailService] Bildirim başarıyla iletildi: ${subject} (${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[EmailService] E-posta gönderim hatası (${subject}):`, err.message);
    return { success: false, error: err.message };
  }
}

/**
 * İşletme / Mekan Ekleme Bildirimi
 */
export async function sendBusinessSubmissionEmail(data) {
  const allowedPetsText = Array.isArray(data.allowedPets) 
    ? data.allowedPets.map(p => p === 'dog' ? 'Köpek' : p === 'cat' ? 'Kedi' : p).join(', ')
    : (data.allowedPets || 'Belirtilmedi');

  const rows = [
    { label: 'İşletme / Mekan Adı', value: data.businessName },
    { label: 'Kategori / Tür', value: data.businessType },
    { label: 'Yetkili Kişi', value: data.contactName },
    { label: 'Telefon', value: data.phone },
    { label: 'E-posta', value: data.email },
    { label: 'Konum', value: `${data.city || ''} / ${data.district || ''}` },
    { label: 'Adres', value: data.address },
    { label: 'Web Sitesi', value: data.website },
    { label: 'Kabul Edilen Petler', value: allowedPetsText },
    { label: 'Ek Ücret Durumu', value: data.extraFee === 'yes' ? 'Evet, pet ücreti var' : 'Hayır / Ücretsiz' },
    { label: 'İşletme Açıklaması', value: data.description }
  ];

  const html = renderEmailTemplate({
    title: `Yeni İşletme / Mekan Kaydı: ${data.businessName || 'İsimsiz'}`,
    badge: 'Mekan & İşletme Ekleme',
    rows,
    footerNote: 'Bu işletmeyi admin panelinden inceleyip onaylayabilir veya iletişime geçebilirsiniz.'
  });

  return sendMail({
    subject: `Yeni İşletme/Mekan Eklendi: ${data.businessName || 'Yeni İşletme'} (${data.city || ''})`,
    html,
    text: `Yeni İşletme Başvurusu:\nİşletme: ${data.businessName}\nTür: ${data.businessType}\nYetkili: ${data.contactName}\nTelefon: ${data.phone}\nE-posta: ${data.email}\nŞehir: ${data.city}`
  });
}

/**
 * Köpek Gezdirici Başvuru Bildirimi
 */
export async function sendDogWalkerEmail(data) {
  const rows = [
    { label: 'Ad Soyad', value: data.fullName || data.name },
    { label: 'Telefon', value: data.phone },
    { label: 'E-posta', value: data.email },
    { label: 'Şehir / İlçe', value: `${data.city || ''} / ${data.district || ''}` },
    { label: 'Saatlik Ücret', value: data.hourlyRate },
    { label: 'Köpek Deneyimi', value: data.hasDogExperience },
    { label: 'Hakkında / Biyografi', value: data.bio }
  ];

  const html = renderEmailTemplate({
    title: `Yeni Köpek Gezdirici Başvurusu: ${data.fullName || data.name || ''}`,
    badge: 'Köpek Gezdirici Başvurusu',
    rows,
    footerNote: 'Aday ile telefon veya e-posta yoluyla iletişime geçebilir, admin panelinden profilini onaylayabilirsiniz.'
  });

  return sendMail({
    subject: `Yeni Köpek Gezdirici Başvurusu: ${data.fullName || data.name} (${data.city || ''})`,
    html,
    text: `Yeni Köpek Gezdirici Başvurusu:\nAd Soyad: ${data.fullName || data.name}\nTelefon: ${data.phone}\nE-posta: ${data.email}\nŞehir: ${data.city} / ${data.district}\nÜcret: ${data.hourlyRate}`
  });
}

/**
 * Reklam & Sponsorluk Başvuru Bildirimi
 */
export async function sendAdApplicationEmail(data) {
  const rows = [
    { label: 'Firma / İşletme Adı', value: data.businessName },
    { label: 'İşletme Türü', value: data.businessType },
    { label: 'İletişim Kurulacak Kişi', value: data.contactName },
    { label: 'Telefon', value: data.phone },
    { label: 'E-posta', value: data.email },
    { label: 'Şehir', value: data.city },
    { label: 'Web Sitesi', value: data.website },
    { label: 'Reklam Mesajı / Talebi', value: data.message }
  ];

  const html = renderEmailTemplate({
    title: `Yeni Reklam & Sponsorluk Talebi: ${data.businessName || ''}`,
    badge: 'Reklam Başvurusu',
    rows,
    footerNote: 'Reklam veren ile en kısa sürede iletişime geçip fiyat teklifi veya yerleşim bilgisi sunabilirsiniz.'
  });

  return sendMail({
    subject: `Yeni Reklam Başvurusu: ${data.businessName || ''} (${data.businessType || ''})`,
    html,
    text: `Yeni Reklam Başvurusu:\nFirma: ${data.businessName}\nTür: ${data.businessType}\nYetkili: ${data.contactName}\nTelefon: ${data.phone}\nE-posta: ${data.email}\nMesaj: ${data.message}`
  });
}

/**
 * Pati Elçisi Başvuru Bildirimi
 */
export async function sendAmbassadorEmail(data) {
  const rows = [
    { label: 'Ad Soyad', value: data.fullName },
    { label: 'Telefon', value: data.phone },
    { label: 'E-posta', value: data.email },
    { label: 'Şehir', value: data.city },
    { label: 'Evcil Hayvan Bilgisi', value: data.petInfo },
    { label: 'Sosyal Medya Hesabı', value: data.socialMedia },
    { label: 'Deneyim & Motivasyon', value: data.experience }
  ];

  const html = renderEmailTemplate({
    title: `Yeni Pati Elçisi Başvurusu: ${data.fullName || ''}`,
    badge: 'Pati Elçisi Başvurusu',
    rows
  });

  return sendMail({
    subject: `Yeni Pati Elçisi Başvurusu: ${data.fullName} (${data.city || ''})`,
    html,
    text: `Yeni Pati Elçisi Başvurusu:\nAd Soyad: ${data.fullName}\nTelefon: ${data.phone}\nE-posta: ${data.email}\nŞehir: ${data.city}`
  });
}
