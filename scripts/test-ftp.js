import * as ftp from 'basic-ftp';

async function testFtp() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    console.log('FTP sunucusuna bağlanılıyor: 89.19.30.15:21 (Natro IP)...');
    await client.access({
      host: '89.19.30.15',
      port: 21,
      user: process.env.FTP_USER || '',
      password: process.env.FTP_PASSWORD || '',
      secure: false
    });

    console.log('✅ FTP Bağlantısı Başarılı!');
    console.log('Mevcut Dizin Listesi:');
    const list = await client.list();
    console.log(list);

  } catch (err) {
    console.error('❌ FTP Bağlantı Hatası:', err.message);
  } finally {
    client.close();
  }
}

testFtp();
