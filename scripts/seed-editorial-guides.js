import { pool } from '../db.js';
import { FLAGSHIP_GUIDES } from '../lib/flagship-guides.js';
import { slugify } from '../lib/seo-slugs.js';

export async function seedEditorialGuides() {
  console.log('Seeding flagship editorial guides into database...');
  for (const guide of FLAGSHIP_GUIDES) {
    const query = `
      INSERT INTO public.guides (
        id, slug, title, category, short_answer, summary,
        published_at, updated_at, author, vet_checked, vet_name,
        content, checklist, faq, seo_title, seo_desc, version
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7::date, $8::date, $9::jsonb, $10, $11,
        $12, $13::jsonb, $14::jsonb, $15, $16, 1
      )
      ON CONFLICT (id) DO UPDATE SET
        slug = EXCLUDED.slug,
        title = EXCLUDED.title,
        category = EXCLUDED.category,
        short_answer = EXCLUDED.short_answer,
        summary = EXCLUDED.summary,
        published_at = EXCLUDED.published_at,
        updated_at = EXCLUDED.updated_at,
        author = EXCLUDED.author,
        vet_checked = EXCLUDED.vet_checked,
        vet_name = EXCLUDED.vet_name,
        content = EXCLUDED.content,
        checklist = EXCLUDED.checklist,
        faq = EXCLUDED.faq,
        seo_title = EXCLUDED.seo_title,
        seo_desc = EXCLUDED.seo_desc,
        modified_at = now();
    `;

    await pool.query(query, [
      guide.id,
      guide.slug,
      guide.title,
      guide.category,
      guide.shortAnswer,
      guide.summary,
      guide.publishedAt,
      guide.updatedAt,
      JSON.stringify(guide.author),
      guide.vetChecked,
      guide.vetName,
      guide.content,
      JSON.stringify(guide.checklist),
      JSON.stringify(guide.faq),
      guide.seoTitle,
      guide.seoDesc
    ]);

    console.log(`Seeded guide: ${guide.slug} (${guide.title.slice(0, 40)}...)`);
  }
  console.log('Flagship editorial guides seeding complete.');
}

if (process.argv[1] && process.argv[1].endsWith('seed-editorial-guides.js')) {
  seedEditorialGuides()
    .then(() => process.exit(0))
    .catch(err => {
      console.error('Error seeding guides:', err);
      process.exit(1);
    });
}
