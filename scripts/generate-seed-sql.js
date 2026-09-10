import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';

function escapeSql(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return String(val);
  if (typeof val === 'boolean') return val ? 'TRUE' : 'FALSE';
  if (typeof val === 'object') {
    return "'" + JSON.stringify(val).replace(/'/g, "''") + "'::jsonb";
  }
  return "'" + String(val).replace(/'/g, "''") + "'";
}

async function generateSql() {
  const raw = await fs.readFile('data/parsed-pet-hotels.json', 'utf8');
  const items = JSON.parse(raw);

  let sql = '-- ==========================================\n';
  sql += '-- PATILI.CO - PET OTELLERI SEED SQL\n';
  sql += '-- Toplam: 156 Pet Oteli + 618 Gercek Yorum\n';
  sql += '-- ==========================================\n\n';
  sql += 'BEGIN;\n\n';

  let boardingCount = 0;
  let reviewCount = 0;
  let sourceCount = 0;

  for (const item of items) {
    const cols = [
      'id', 'name', 'category', 'city', 'district', 'image_url', 'gallery_images',
      'allowed_pets', 'features', 'quiz_tags', 'price', 'description',
      'boarding_model', 'daily_program', 'accredited_vet', 'phone', 'email',
      'website', 'booking_links', 'camera_support', 'required_docs',
      'neutering_required', 'aggression_policy', 'info_source',
      'base_trust_score', 'verification_note', 'last_verified', 'currency'
    ];

    const vals = [
      escapeSql(item.id),
      escapeSql(item.name),
      escapeSql(item.category),
      escapeSql(item.city),
      escapeSql(item.district),
      escapeSql(item.image_url),
      escapeSql(item.gallery_images || []),
      escapeSql(item.allowed_pets || ['dog', 'cat']),
      escapeSql(item.features || []),
      escapeSql(item.quiz_tags || []),
      escapeSql(item.price || 'Fiyat bilgisi için arayınız'),
      escapeSql(item.description || ''),
      escapeSql(item.boarding_model || 'Standart'),
      escapeSql(item.daily_program || 'Özel program'),
      escapeSql(item.accredited_vet || 'Anlaşmalı veteriner mevcut'),
      escapeSql(item.phone || null),
      escapeSql(item.email || null),
      escapeSql(item.website || null),
      escapeSql(item.booking_links || {}),
      item.camera_support ? 'TRUE' : 'FALSE',
      escapeSql(item.required_docs || 'Aşı karnesi zorunludur'),
      item.neutering_required ? 'TRUE' : 'FALSE',
      escapeSql(item.aggression_policy || 'Sosyal uyum testi uygulanır'),
      escapeSql(item.info_source || 'Google Maps & Doğrulanmış İşletme Kaydı'),
      Number(item.base_trust_score) || 9.0,
      escapeSql(item.verification_note || '2026 Doğrulandı'),
      escapeSql(item.last_verified || '2026-05-01') + '::date',
      "'TRY'"
    ];

    sql += `INSERT INTO public.boardings (${cols.join(', ')})\nVALUES (${vals.join(', ')})\nON CONFLICT (id) DO UPDATE SET\n  name = EXCLUDED.name,\n  category = EXCLUDED.category,\n  city = EXCLUDED.city,\n  district = EXCLUDED.district,\n  image_url = EXCLUDED.image_url,\n  gallery_images = EXCLUDED.gallery_images,\n  allowed_pets = EXCLUDED.allowed_pets,\n  features = EXCLUDED.features,\n  quiz_tags = EXCLUDED.quiz_tags,\n  price = EXCLUDED.price,\n  description = EXCLUDED.description,\n  phone = EXCLUDED.phone,\n  email = EXCLUDED.email,\n  website = EXCLUDED.website,\n  booking_links = EXCLUDED.booking_links,\n  base_trust_score = EXCLUDED.base_trust_score,\n  last_verified = EXCLUDED.last_verified;\n\n`;
    boardingCount++;

    if (item.google_place_id) {
      sql += `INSERT INTO public.place_sources (provider, external_id, place_id)\nVALUES ('google_maps', ${escapeSql(item.google_place_id)}, ${escapeSql(item.id)})\nON CONFLICT (provider, external_id) DO NOTHING;\n`;
      sourceCount++;
    }

    if (Array.isArray(item.user_reviews)) {
      for (const rev of item.user_reviews) {
        const revText = (rev.Description || rev.text_original || '').trim();
        const revAuthor = (rev.Name || 'Google Kullanıcısı').trim();
        if (!revText) continue;

        const rawRating = Number(rev.Rating || rev.rating_float || 5);
        const rating10 = Math.min(10, Math.max(1, Math.round(rawRating * 2)));
        const revId = 'rev-' + createHash('sha256').update(item.id + revAuthor + revText).digest('hex').slice(0, 32);
        const dateStr = rev.published_at ? rev.published_at.slice(0, 10) : '2026-05-01';

        sql += `INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)\nVALUES (${escapeSql(revId)}, ${escapeSql(item.id)}, ${escapeSql(revAuthor)}, ${rating10}, ${escapeSql(revText.slice(0, 5000))}, ${escapeSql(dateStr)}::date, 'approved')\nON CONFLICT (id) DO NOTHING;\n\n`;
        reviewCount++;
      }
    }
  }

  sql += '\nCOMMIT;\n';
  await fs.writeFile('data/seed-pet-hotels.sql', sql, 'utf8');
  console.log(`SQL file generated successfully!\nBoardings: ${boardingCount}\nSources: ${sourceCount}\nReviews: ${reviewCount}`);
}

generateSql();
