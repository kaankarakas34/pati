export class InputError extends Error {
  constructor(message, status = 400) { super(message); this.status = status; }
}
export const camel = value => value.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
export const snake = value => value.replace(/[A-Z]/g, letter => '_' + letter.toLowerCase());
export function boundedText(value, max, required = true) {
  if (typeof value !== 'string' || value.trim().length > max || (required && !value.trim())) throw new InputError('Gecersiz metin alani.');
  return value.trim();
}
export function recordId(value) {
  if (typeof value !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9_-]{0,99}$/.test(value)) throw new InputError('Gecersiz kayit kimligi.');
  return value;
}
export function pageInput(query = {}) {
  const limit = query.limit === undefined ? 24 : Number(query.limit);
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) throw new InputError('Sayfa boyutu 1-100 arasinda olmali.');
  let cursor;
  if (query.cursor) {
    try {
      if (typeof query.cursor !== 'string' || query.cursor.length > 512) throw new Error();
      cursor = JSON.parse(Buffer.from(query.cursor, 'base64url').toString());
      recordId(cursor.id);
      if (typeof cursor.createdAt !== 'string' || !Number.isFinite(Date.parse(cursor.createdAt))) throw new Error();
    } catch { throw new InputError('Gecersiz sayfa imleci.'); }
  }
  return { limit, cursor };
}
export function pageResult(rows, limit) {
  const data = rows.slice(0, limit);
  const last = data.at(-1);
  const nextCursor = rows.length > limit && last ? Buffer.from(JSON.stringify({ id:last.id, createdAt:last.createdAt })).toString('base64url') : null;
  return { data, nextCursor };
}
