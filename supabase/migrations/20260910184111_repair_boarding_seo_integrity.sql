-- Repair malformed and duplicate pet-hotel entities before enforcing one
-- canonical URL per boarding page. Google Maps external IDs are stable source
-- identifiers, so the migration does not depend on generated application IDs.
DO $$
DECLARE
  malformed_id text;
  duzce_id text;
  keeper_id text;
  duplicate_id text;
BEGIN
  SELECT place_id INTO malformed_id
  FROM public.place_sources
  WHERE provider = 'google_maps' AND external_id = 'ChIJd2UBwxeLJxURongj1IqoLNE';

  SELECT place_id INTO duzce_id
  FROM public.place_sources
  WHERE provider = 'google_maps' AND external_id = 'ChIJIyMvWf2fnUAROk4l6egIZgI';

  SELECT place_id INTO keeper_id
  FROM public.place_sources
  WHERE provider = 'google_maps' AND external_id = 'ChIJeWTLd4IhLxURmvHpE0wXAJc';

  SELECT place_id INTO duplicate_id
  FROM public.place_sources
  WHERE provider = 'google_maps' AND external_id = 'ChIJ-cZg8sUhLxURMAtEW7_wa5o';

  -- Schema-only test databases do not contain this production data.
  IF malformed_id IS NULL AND duzce_id IS NULL AND keeper_id IS NULL AND duplicate_id IS NULL THEN
    RETURN;
  END IF;

  IF duzce_id IS NULL OR keeper_id IS NULL THEN
    RAISE EXCEPTION 'Expected Google Maps source records are missing; refusing partial SEO repair';
  END IF;

  UPDATE public.boardings
  SET district = 'Merkez',
      description = replace(description, 'Düzce . bölgesinde', 'Düzce Merkez bölgesinde')
  WHERE id = duzce_id;

  IF duplicate_id IS NOT NULL THEN
    UPDATE public.reviews SET target_id = keeper_id WHERE target_id = duplicate_id;
    UPDATE public.complaints SET target_id = keeper_id WHERE target_id = duplicate_id;
    INSERT INTO public.favorites (user_id, place_id, created_at)
    SELECT user_id, keeper_id, created_at
    FROM public.favorites
    WHERE place_id = duplicate_id
    ON CONFLICT (user_id, place_id) DO NOTHING;
    DELETE FROM public.favorites WHERE place_id = duplicate_id;
    UPDATE public.place_sources SET place_id = keeper_id WHERE place_id = duplicate_id;
    DELETE FROM public.places WHERE id = duplicate_id;
  END IF;

  -- The Maps entity named only "." has no usable business identity and its
  -- single review duplicates another Mersin hotel's review. Remove the invalid
  -- entity and dependent feedback instead of inventing a business name.
  IF malformed_id IS NOT NULL THEN
    DELETE FROM public.reviews WHERE target_id = malformed_id;
    DELETE FROM public.complaints WHERE target_id = malformed_id;
    DELETE FROM public.places WHERE id = malformed_id;
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conrelid = 'public.boardings'::regclass
      AND conname = 'boardings_canonical_slug_nonempty'
  ) THEN
    ALTER TABLE public.boardings
      ADD CONSTRAINT boardings_canonical_slug_nonempty
      CHECK (city_slug <> '' AND district_slug <> '' AND name_slug <> '');
  END IF;
END
$$;

CREATE UNIQUE INDEX IF NOT EXISTS boardings_canonical_slug_unique_idx
  ON public.boardings (city_slug, district_slug, name_slug);
