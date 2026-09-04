import { createHash, timingSafeEqual } from 'node:crypto';

export function matchesSecret(provided, expected) {
  if (typeof provided !== 'string' || typeof expected !== 'string' || !expected) return false;
  return timingSafeEqual(
    createHash('sha256').update(provided).digest(),
    createHash('sha256').update(expected).digest()
  );
}

export function validateRecordId(req, res, next) {
  const id = req.params.id;
  if (typeof id !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9_-]{0,99}$/.test(id)) {
    return res.status(400).json({ error: 'Gecersiz kayit kimligi.' });
  }
  res.locals.recordId = id;
  next();
}
