import { readFileSync } from 'node:fs';

export function databaseTls(env = process.env) {
  return {
    rejectUnauthorized: true,
    ...(env.DATABASE_SSL_CA_FILE ? { ca: readFileSync(env.DATABASE_SSL_CA_FILE, 'utf8') } : {})
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
  return { connectionString: parsed.toString(), ssl: local ? false : databaseTls(env) };
}
