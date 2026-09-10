export function restrictPoolRole(rawPool, role = 'pati_api', { transactionPooling = false } = {}) {
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
    if (transactionPooling) return transaction(client => client.query(...args));
    const client = await connect();
    try {
      return await client.query(...args);
    } finally {
      client.release();
    }
  }

  async function transaction(work) {
    const client = await rawPool.connect();
    try {
      await client.query(`BEGIN; SET LOCAL ROLE "${role}"`);
      const result = await work(client);
      await client.query('COMMIT');
      return result;
    } catch (error) {
      await client.query('ROLLBACK').catch(() => {});
      throw error;
    } finally {
      client.release();
    }
  }

  return {
    connect,
    query,
    transaction,
    end: (...args) => rawPool.end(...args),
    on: (...args) => rawPool.on(...args)
  };
}
