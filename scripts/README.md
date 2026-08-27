# Yerel otel scraper'ları

Scraper fiyat, müsaitlik, ödeme veya rezervasyon koşulu kaydetmez. Bulduğu tesisleri önce
`data/scraper-results/` altında tarihli bir JSON dosyasına yazar. `--save` verilmedikçe site
veritabanı değişmez.

`--save` kullanıldığında her tesis bulunduğu anda kaydedilir. Uzun Türkiye taraması yarıda kesilse
bile tamamlanan şehirlerin kayıtları korunur; aynı komut daha sonra güvenle yeniden çalıştırılabilir.

## Kullanım

Antalya'yı iki kaynaktan kontrol et:

```powershell
node scripts/scrape-hotels.js --source=all --city=Antalya
```

Yalnızca bir kaynağı kontrol et:

```powershell
node scripts/scrape-hotels.js --source=enuygun --city=Antalya
node scripts/scrape-hotels.js --source=otelz --city=Antalya
```

Tüm Türkiye'yi kontrol et ve siteye kaydet:

```powershell
node scripts/scrape-hotels.js --source=all --city=all --save
```

Yalnızca popüler tatil il ve ilçelerini kontrol edip kaydet:

```powershell
node scripts/scrape-hotels.js --source=all --city=popular --save
```

Kısa test çalıştırması:

```powershell
node scripts/scrape-hotels.js --source=all --city=Antalya --limit=5
```

`--limit` her kaynak için ayrı uygulanır; yukarıdaki komut Enuygun ve Otelz'den en fazla beşer
aday işler.

`--source` değeri `all`, `enuygun` veya `otelz` olabilir. Aynı isim ve konumdaki tesisler tek
kayıtta birleştirilir. Daha önce yönetim tarafından doğrulanmış bir tesis scraper tarafından
doğrulanmamış duruma çevrilmez.

Mevcut veritabanında isim tabanlı mükerrer kontrolü:

```powershell
node scripts/dedupe-hotels.js
node scripts/dedupe-hotels.js --save
```

## Vercel ve Supabase bağlantı kontrolü

Vercel'de `DATABASE_URL` Supabase pooler bağlantısı olarak tanımlandıktan ve yeni deployment
oluştuktan sonra aşağıdaki endpoint yalnız bağlantıyı kontrol eder, tablo veya veri oluşturmaz:

```text
GET /api/health/database
```

Production'da şema otomatik oluşturulmaz. `AUTO_INIT_DATABASE=true` yalnız kontrollü ilk kurulum
anında kullanılmalıdır ve normal çalışma için kaldırılmalıdır.
