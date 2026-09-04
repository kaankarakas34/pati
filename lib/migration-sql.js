import format from 'pg-format';

export const TABLES = Object.freeze([
  'hotels', 'boardings', 'guides', 'corrections', 'complaints',
  'reviews', 'pet_taxis', 'vets', 'experiences', 'ads', 'ad_applications'
]);

export function migrationSql(table, columns = []) {
  if (!TABLES.includes(table)) throw new Error('Unsupported migration table.');
  if (columns.some(column => typeof column !== 'string' || !/^[a-z][a-z0-9_]*$/.test(column))) {
    throw new Error('Invalid migration column.');
  }
  return {
    select: format('SELECT %s FROM public.%I ORDER BY id LIMIT $1', columns.length ? columns.map(column=>format('%I',column)).join(', ') : 'id', table),
    count: format('SELECT COUNT(*)::int AS count FROM public.%I', table),
    enableRls: format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', table),
    insert: columns.length ? format('INSERT INTO public.%I (%s) VALUES (%s)', table,
      columns.map(column => format('%I', column)).join(', '),
      columns.map((_, index) => '$' + (index + 1)).join(', ')) : null
  };
}
