import * as ftp from 'basic-ftp';

async function exploreFtp() {
  const client = new ftp.Client();

  try {
    await client.access({
      host: '89.19.30.15',
      port: 21,
      user: process.env.FTP_USER || '',
      password: process.env.FTP_PASSWORD || '',
      secure: false
    });

    console.log('Mevcut Dizin (pwd):', await client.pwd());
    console.log('Dizin İçeriği:');
    let list = await client.list();
    console.log(list.map(f => `${f.isDirectory ? '[DIR]' : '[FILE]'} ${f.name}`));

    // Check if we can go up
    try {
      await client.cdup();
      console.log('Üst Dizin (pwd):', await client.pwd());
      list = await client.list();
      console.log(list.map(f => `${f.isDirectory ? '[DIR]' : '[FILE]'} ${f.name}`));
    } catch (e) {
      console.log('Üst dizine çıkılamadı (Chrooted/Restricted directory).');
    }

  } catch (err) {
    console.error('❌ Hata:', err.message);
  } finally {
    client.close();
  }
}

exploreFtp();
