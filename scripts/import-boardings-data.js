import 'dotenv/config';
import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import pg from 'pg';
import { pool } from '../db.js';

async function importBoardings() {
  const jsonPath = 'data/parsed-pet-hotels.json';
  const data = JSON.parse(await fs.readFile(jsonPath, 'utf8'));

  console.log(`Starting import of ${data.length} boardings...`);

  let insertedCount = 0;
  let updatedCount = 0;
  let reviewCount = 0;

  for (const item of data) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // Check if already exists
      const existing = await client.query('SELECT id, version FROM public.boardings WHERE id = $1', [item.id]);

      if (existing.rows.length === 0) {
        await client.query(`
          INSERT INTO public.boardings (
            id, name, category, city, district, image_url, gallery_images,
            allowed_pets, features, quiz_tags, price, description,
            boarding_model, daily_program, accredited_vet, phone, email,
            website, booking_links, camera_support, required_docs,
            neutering_required, aggression_policy, info_source,
            base_trust_score, verification_note, last_verified, currency
          ) VALUES (
            $1, $2, $3, $4, $5, $6, $7::jsonb,
            $8::jsonb, $9::jsonb, $10::jsonb, $11, $12,
            $13, $14, $15, $16, $17,
            $18, $19::jsonb, $20, $21,
            $22, $23, $24,
            $25, $26, $27::date, $28
          )
        `, [
          item.id,
          item.name,
          item.category,
          item.city,
          item.district,
          item.image_url,
          JSON.stringify(item.gallery_images || []),
          JSON.stringify(item.allowed_pets),
          JSON.stringify(item.features),
          JSON.stringify(item.quiz_tags),
          item.price,
          item.description,
          item.boarding_model,
          item.daily_program,
          item.accredited_vet,
          item.phone,
          item.email,
          item.website,
          JSON.stringify(item.booking_links || {}),
          item.camera_support,
          item.required_docs,
          item.neutering_required,
          item.aggression_policy,
          item.info_source,
          item.base_trust_score,
          item.verification_note,
          item.last_verified,
          'TRY'
        ]);

        if (item.google_place_id) {
          await client.query(`
            INSERT INTO public.place_sources (provider, external_id, place_id)
            VALUES ($1, $2, $3)
            ON CONFLICT (provider, external_id) DO NOTHING
          `, ['google_maps', item.google_place_id, item.id]);
        }

        insertedCount++;
      } else {
        // Update
        await client.query(`
          UPDATE public.boardings SET
            name = $2, category = $3, city = $4, district = $5,
            image_url = $6, gallery_images = $7::jsonb, allowed_pets = $8::jsonb,
            features = $9::jsonb, quiz_tags = $10::jsonb, price = $11, description = $12,
            boarding_model = $13, daily_program = $14, accredited_vet = $15,
            phone = $16, email = $17, website = $18, booking_links = $19::jsonb,
            camera_support = $20, required_docs = $21, neutering_required = $22,
            aggression_policy = $23, info_source = $24, base_trust_score = $25,
            verification_note = $26, last_verified = $27::date,
            version = version + 1
          WHERE id = $1
        `, [
          item.id,
          item.name,
          item.category,
          item.city,
          item.district,
          item.image_url,
          JSON.stringify(item.gallery_images || []),
          JSON.stringify(item.allowed_pets),
          JSON.stringify(item.features),
          JSON.stringify(item.quiz_tags),
          item.price,
          item.description,
          item.boarding_model,
          item.daily_program,
          item.accredited_vet,
          item.phone,
          item.email,
          item.website,
          JSON.stringify(item.booking_links || {}),
          item.camera_support,
          item.required_docs,
          item.neutering_required,
          item.aggression_policy,
          item.info_source,
          item.base_trust_score,
          item.verification_note,
          item.last_verified
        ]);
        updatedCount++;
      }

      // Reviews insertion
      if (Array.isArray(item.user_reviews)) {
        for (const rev of item.user_reviews) {
          const revText = (rev.Description || rev.text_original || '').trim();
          const revAuthor = (rev.Name || 'Google Kullanıcısı').trim();
          if (!revText) continue;

          const rawRating = Number(rev.Rating || rev.rating_float || 5);
          const rating10 = Math.min(10, Math.max(1, Math.round(rawRating * 2)));
          const revId = 'rev-' + createHash('sha256').update(item.id + revAuthor + revText).digest('hex').slice(0, 32);

          const dateStr = rev.published_at ? rev.published_at.slice(0, 10) : '2026-05-01';

          await client.query(`
            INSERT INTO public.reviews (id, target_id, author, rating, text, date, status)
            VALUES ($1, $2, $3, $4, $5, $6::date, 'approved')
            ON CONFLICT (id) DO NOTHING
          `, [revId, item.id, revAuthor, rating10, revText.slice(0, 5000), dateStr]);
          reviewCount++;
        }
      }

      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      console.error(`Error importing ${item.name} (${item.id}):`, err.message);
    } finally {
      client.release();
    }
  }

  console.log(`\nImport Summary:`);
  console.log(`  Inserted: ${insertedCount}`);
  console.log(`  Updated: ${updatedCount}`);
  console.log(`  Reviews processed: ${reviewCount}`);
}

importBoardings()
  .then(() => {
    console.log('Boardings import completed successfully.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
