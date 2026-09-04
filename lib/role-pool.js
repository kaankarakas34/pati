export function restrictPoolRole(rawPool, role = 'pati_api') {
  if (!/^[a-z][a-z0-9_]{0,62}$/.test(role)) throw new Error('Invalid database role.');
  const roleSql = `SET ROLE "${role}"`;

  async function connect() {
    const client = await rawPool.connect();
    try {
      await client.query(roleSql);
      return client;
    } catch (error) {
      client.release(error);
      throw error;
    }
  }

  async function query(...args) {
    const client = await connect();
    try {
      return await client.query(...args);
    } finally {
      client.release();
    }
  }

  return {
    connect,
    query,
    end: (...args) => rawPool.end(...args),
    on: (...args) => rawPool.on(...args)
  };
}
