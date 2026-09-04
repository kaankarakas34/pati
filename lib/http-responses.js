import { InputError } from './input.js';

export function sendServerError(res, error, status = 500) {
  console.error('Server operation failed:', error);
  return res.status(status).json({ ok: false, error: 'Islem su anda tamamlanamadi. Lutfen daha sonra tekrar deneyin.' });
}

export function redirectToLocalPath(res, target) {
  // Canonical routes contain only slash-separated ASCII slugs, never URL syntax.
  if (typeof target !== 'string' || target.length > 2048 ||
      !target.startsWith('/') || !target.slice(1).split('/').every(segment => /^[a-z0-9-]+$/.test(segment))) {
    return res.status(400).send('Gecersiz yonlendirme adresi.');
  }
  return res.redirect(301, target);
}

export function handleRequestError(error, req, res, next) {
  if (res.headersSent) return next(error);
  if (error instanceof InputError) return res.status(error.status).json({ error: error.message });
  if (['23001','23503','23505'].includes(error.code)) return res.status(409).json({ error: 'Kayit iliskisi veya benzersizlik cakismasi.' });
  if (['23514','23502','22P02','22007','22008','22001'].includes(error.code)) return res.status(400).json({ error: 'Kayit alanlarini kontrol edin.' });
  if (error.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Istek boyutu siniri asildi.' });
  }
  if (error.status >= 400 && error.status < 500) {
    return res.status(400).json({ error: 'Gecersiz istek.' });
  }
  return sendServerError(res, error);
}
