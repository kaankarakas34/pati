import React, { useState } from 'react';
import { CheckCircle2, Megaphone } from 'lucide-react';

const initialForm = {
  businessName: '',
  businessType: 'Otel / konaklama tesisi',
  contactName: '',
  email: '',
  phone: '',
  website: '',
  city: '',
  message: '',
  kvkkConsent: false,
  company: ''
};

export default function AdApplication() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const updateField = (field, value) => setForm(current => ({ ...current, [field]: value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    setStatus('submitting');
    try {
      const response = await fetch('/api/ad-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Başvuru gönderilemedi.');
      setStatus('success');
      setForm(initialForm);
    } catch (submitError) {
      setStatus('error');
      setError(submitError.message || 'Başvuru gönderilemedi. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="bg-white">
      <header className="bg-brand-navy text-white border-b-4 border-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-wider">
              <Megaphone className="w-4 h-4" /> Reklam ve sponsorluk
            </span>
            <h1 className="font-title text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Markanızı patili gezginlerle buluşturun
            </h1>
            <p className="text-gray-200 mt-4 text-sm md:text-base leading-relaxed max-w-2xl">
              Otel, pet oteli, veteriner, pet taksi ve evcil hayvan markaları için hedefli reklam alanları sunuyoruz. Başvurunuzu inceleyip uygun yerleşim ve dönem için sizinle iletişime geçelim.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <section aria-labelledby="application-title">
          <div className="mb-7">
            <h2 id="application-title" className="font-title text-2xl font-bold text-brand-navy">Reklam başvuru formu</h2>
            <p className="text-sm text-gray-600 mt-2">Başvurular iş günlerinde incelenir. Formu doldurmak yayın garantisi veya ödeme yükümlülüğü oluşturmaz.</p>
          </div>

          {status === 'success' ? (
            <div className="border-2 border-brand-green/25 bg-brand-green-light/40 p-7 rounded-lg" role="status">
              <CheckCircle2 className="w-10 h-10 text-brand-green" />
              <h3 className="font-title text-xl font-bold text-brand-navy mt-4">Başvurunuz alındı</h3>
              <p className="text-sm text-gray-700 mt-2">Ekibimiz başvurunuzu değerlendirdikten sonra verdiğiniz e-posta veya telefon üzerinden size ulaşacak.</p>
              <button type="button" onClick={() => setStatus('idle')} className="mt-5 text-sm font-bold text-brand-navy underline underline-offset-4">
                Yeni başvuru oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="İşletme / marka adı" required>
                  <input required maxLength={160} value={form.businessName} onChange={e => updateField('businessName', e.target.value)} className="form-input" placeholder="Örn. Pati Konak Otel" />
                </Field>
                <Field label="İşletme türü" required>
                  <select value={form.businessType} onChange={e => updateField('businessType', e.target.value)} className="form-input bg-white">
                    <option>Otel / konaklama tesisi</option>
                    <option>Pet oteli / bakım merkezi</option>
                    <option>Veteriner kliniği</option>
                    <option>Pet taksi / transfer</option>
                    <option>Pet ürün veya hizmet markası</option>
                    <option>Diğer</option>
                  </select>
                </Field>
                <Field label="Yetkili kişi" required>
                  <input required maxLength={120} value={form.contactName} onChange={e => updateField('contactName', e.target.value)} className="form-input" placeholder="Ad soyad" />
                </Field>
                <Field label="Şehir" required>
                  <input required maxLength={100} value={form.city} onChange={e => updateField('city', e.target.value)} className="form-input" placeholder="Örn. Antalya" />
                </Field>
                <Field label="E-posta" required>
                  <input required type="email" maxLength={180} value={form.email} onChange={e => updateField('email', e.target.value)} className="form-input" placeholder="iletisim@marka.com" />
                </Field>
                <Field label="Telefon" required>
                  <input required type="tel" maxLength={40} value={form.phone} onChange={e => updateField('phone', e.target.value)} className="form-input" placeholder="05xx xxx xx xx" />
                </Field>
                <Field label="Web sitesi">
                  <input type="url" maxLength={500} value={form.website} onChange={e => updateField('website', e.target.value)} className="form-input" placeholder="https://" />
                </Field>
              </div>

              <Field label="Mesajınız">
                <textarea maxLength={1500} rows={5} value={form.message} onChange={e => updateField('message', e.target.value)} className="form-input resize-y" placeholder="Reklam vermek istediğiniz alanı veya hizmetinizi kısaca anlatabilirsiniz." />
              </Field>

              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>Şirket<input tabIndex="-1" autoComplete="off" value={form.company} onChange={e => updateField('company', e.target.value)} /></label>
              </div>

              <label className="flex items-start gap-3 text-xs text-gray-600 leading-relaxed">
                <input required type="checkbox" checked={form.kvkkConsent} onChange={e => updateField('kvkkConsent', e.target.checked)} className="w-4 h-4 mt-0.5 accent-brand-navy shrink-0" />
                <span>Başvurumun değerlendirilmesi ve benimle iletişime geçilmesi amacıyla verdiğim bilgilerin işlenmesini kabul ediyorum.</span>
              </label>

              {error && <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3" role="alert">{error}</p>}

              <button disabled={status === 'submitting'} type="submit" className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover disabled:opacity-60 text-brand-navy border-2 border-brand-navy px-7 py-3 rounded-lg text-sm font-bold transition-colors">
                <Megaphone className="w-4 h-4" /> {status === 'submitting' ? 'Gönderiliyor...' : 'Reklam başvurusu gönder'}
              </button>
            </form>
          )}
        </section>

      </main>
    </div>
  );
}

function Field({ label, required = false, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-bold text-gray-800 mb-2">{label} {required && <span className="text-red-600">*</span>}</span>
      {children}
    </label>
  );
}
