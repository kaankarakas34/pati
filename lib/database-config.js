import { readFileSync } from 'node:fs';

const SUPABASE_PRODUCTION_CA = new URL('./certs/supabase-prod-ca-2021.crt', import.meta.url);

function isSupabasePoolerHost(hostname) {
  const normalized = hostname.toLowerCase();
  return normalized === 'pooler.supabase.com' || normalized.endsWith('.pooler.supabase.com');
}

export function databaseTls(env = process.env, hostname = '') {
  const ca = env.DATABASE_SSL_CA_FILE
    ? readFileSync(env.DATABASE_SSL_CA_FILE, 'utf8')
    : isSupabasePoolerHost(hostname)
      ? readFileSync(SUPABASE_PRODUCTION_CA, 'utf8')
      : undefined;
  return {
    rejectUnauthorized: true,
    ...(ca ? { ca } : {})
  };
}

export function databaseConfig(connectionString, env = process.env) {
  if (!connectionString) {
    return {
      host: 'localhost', port: 5436, database: env.POSTGRES_DB || 'pati_db',
      user: env.POSTGRES_USER || 'pati_user', password: env.POSTGRES_PASSWORD,
      ssl: false
    };
  }
  const parsed = new URL(connectionString);
  if (!['postgres:', 'postgresql:'].includes(parsed.protocol)) {
    throw new Error('DATABASE_URL must be a PostgreSQL URL.');
  }
  const local = ['localhost', '127.0.0.1', '[::1]', 'pati_db'].includes(parsed.hostname);
  // pg connection-string SSL options override the explicit TLS configuration.
  // Only retain the harmless application name; never allow a query host override.
  const applicationName = parsed.searchParams.get('application_name');
  parsed.search = '';
  if (applicationName) parsed.searchParams.set('application_name', applicationName);
  return { connectionString: parsed.toString(), ssl: local ? false : databaseTls(env, parsed.hostname) };
}
