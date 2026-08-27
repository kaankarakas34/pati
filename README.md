# Patiyle Seyahat

Evcil hayvaniyla seyahat edenler icin pet dostu otel, pet oteli, gezilecek yer,
pet taksi, veteriner ve seyahat rehberi platformu.

## Kurulum

Gereksinimler:

- Node.js 18+
- Docker Desktop veya erisilebilir bir PostgreSQL sunucusu

```bash
npm install
docker compose up -d
```

`.env.example` dosyasini `.env` olarak kopyalayip admin bilgilerini guvenli
degerlerle degistirin. Ardindan uygulamayi baslatin:

```bash
npm run dev
```

- Web uygulamasi: `http://localhost:5173`
- API: `http://localhost:3000`
- Yonetim paneli: `http://localhost:5173/yonetici`

## Komutlar

```bash
npm run dev
npm run build
npm run server
```

`.env`, derleme ciktilari ve bagimliliklar Git'e dahil edilmez.
