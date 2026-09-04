-- Baseline DDL only; no sample data or destructive reset.
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC;

CREATE TABLE IF NOT EXISTS public.hotels (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  type VARCHAR(100) NOT NULL,
  allowed_pets JSONB NOT NULL,
  suitability INT NOT NULL,
  weight_limit INT NOT NULL,
  extra_fee TEXT NOT NULL,
  features JSONB NOT NULL,
  quiz_tags JSONB NOT NULL,
  base_trust_score NUMERIC(3,1) NOT NULL,
  verified BOOLEAN DEFAULT TRUE,
  last_verified VARCHAR(255) NOT NULL,
  image_url VARCHAR(2000) NOT NULL,
  gallery_images JSONB,
  description TEXT NOT NULL,
  why_selected TEXT,
  suitable_for JSONB,
  not_suitable_for JSONB,
  disallowed_pets JSONB,
  breed_restrictions TEXT,
  max_pets_per_room INT,
  deposit_info TEXT,
  required_docs TEXT,
  can_leave_in_room_alone BOOLEAN,
  rules JSONB,
  veterinary_support TEXT,
  phone VARCHAR(255),
  email VARCHAR(255),
  website VARCHAR(2000),
  booking_links JSONB,
  editor_note TEXT,
  info_source VARCHAR(1000),
  faq JSONB
);

CREATE TABLE IF NOT EXISTS public.boardings (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  image_url VARCHAR(2000) NOT NULL,
  gallery_images JSONB,
  allowed_pets JSONB NOT NULL,
  features JSONB NOT NULL,
  quiz_tags JSONB NOT NULL,
  price VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  boarding_model TEXT NOT NULL,
  daily_program TEXT,
  accredited_vet VARCHAR(1000),
  phone VARCHAR(255),
  email VARCHAR(255),
  website VARCHAR(2000),
  booking_links JSONB,
  camera_support BOOLEAN DEFAULT TRUE,
  required_docs TEXT,
  neutering_required TEXT,
  aggression_policy TEXT,
  info_source VARCHAR(1000),
  base_trust_score NUMERIC(3,1) NOT NULL,
  last_verified VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.guides (
  id VARCHAR(100) PRIMARY KEY,
  slug VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  short_answer TEXT NOT NULL,
  summary TEXT NOT NULL,
  published_at VARCHAR(255) NOT NULL,
  updated_at VARCHAR(255) NOT NULL,
  author JSONB NOT NULL,
  vet_checked BOOLEAN DEFAULT FALSE,
  vet_name VARCHAR(255),
  content TEXT NOT NULL,
  checklist JSONB,
  faq JSONB,
  seo_title VARCHAR(255),
  seo_desc VARCHAR(1000)
);

CREATE TABLE IF NOT EXISTS public.corrections (
  id VARCHAR(100) PRIMARY KEY,
  hotel_id VARCHAR(100) NOT NULL,
  hotel_name VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  date VARCHAR(255) NOT NULL,
  status VARCHAR(100) DEFAULT 'pending'
);

CREATE TABLE IF NOT EXISTS public.complaints (
  id VARCHAR(100) PRIMARY KEY,
  target_id VARCHAR(100) NOT NULL,
  target_name VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  date VARCHAR(255) NOT NULL,
  status VARCHAR(100) DEFAULT 'pending'
);

CREATE TABLE IF NOT EXISTS public.reviews (
  id VARCHAR(100) PRIMARY KEY,
  target_id VARCHAR(100) NOT NULL,
  author VARCHAR(255) NOT NULL,
  rating INT NOT NULL,
  text TEXT NOT NULL,
  date VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'approved'
);

CREATE TABLE IF NOT EXISTS public.pet_taxis (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  image_url VARCHAR(2000) NOT NULL,
  allowed_pets JSONB NOT NULL,
  features JSONB NOT NULL,
  price VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  phone VARCHAR(255),
  email VARCHAR(255),
  website VARCHAR(2000),
  base_trust_score NUMERIC(3,1) NOT NULL,
  last_verified VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.vets (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  image_url VARCHAR(2000) NOT NULL,
  address TEXT NOT NULL,
  features JSONB NOT NULL,
  description TEXT NOT NULL,
  phone VARCHAR(255),
  email VARCHAR(255),
  website VARCHAR(2000),
  base_trust_score NUMERIC(3,1) NOT NULL,
  last_verified VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.experiences (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  image_url VARCHAR(2000) NOT NULL,
  pet_policy TEXT NOT NULL,
  allowed_pets JSONB NOT NULL,
  features JSONB NOT NULL,
  description TEXT NOT NULL,
  address TEXT,
  phone VARCHAR(255),
  website VARCHAR(2000),
  map_url VARCHAR(2000),
  best_time TEXT,
  rules TEXT,
  verified BOOLEAN DEFAULT TRUE,
  base_trust_score NUMERIC(3,1) NOT NULL,
  last_verified VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.ads (
  id VARCHAR(100) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  sponsor VARCHAR(255) NOT NULL,
  placement VARCHAR(100) NOT NULL,
  target_url VARCHAR(2000) NOT NULL,
  image_url VARCHAR(2000),
  city VARCHAR(100),
  category VARCHAR(100),
  starts_at VARCHAR(255) NOT NULL,
  ends_at VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  impressions INT DEFAULT 0,
  clicks INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.ad_applications (
  id UUID PRIMARY KEY,
  business_name VARCHAR(160) NOT NULL,
  business_type VARCHAR(100) NOT NULL,
  contact_name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  website VARCHAR(500),
  city VARCHAR(100) NOT NULL,
  message TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Existing invalid dates, duplicate IDs/slugs or orphan feedback abort this
-- migration transaction. Resolve them explicitly after the read-only preflight.
DO $$ BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'pati_api') THEN
    CREATE ROLE pati_api NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS;
  END IF;
END $$;

CREATE FUNCTION private.slug(value text) RETURNS text
LANGUAGE sql IMMUTABLE STRICT SET search_path = '' AS $$
  SELECT trim(both '-' from regexp_replace(regexp_replace(
    replace(replace(lower(translate(normalize(value,NFKD),
      'ÇĞİIÖŞÜçğıöşü', 'CGiiOSUcgiosu')), '''', ''), '’', ''),
    U&'[\0300-\036f]', '', 'g'), '[^a-z0-9]+', '-', 'g'))
$$;

CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE public.locations (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  city text NOT NULL CHECK (length(city) BETWEEN 1 AND 100),
  district text NOT NULL CHECK (length(district) BETWEEN 1 AND 100),
  city_slug text GENERATED ALWAYS AS (private.slug(city)) STORED,
  district_slug text GENERATED ALWAYS AS (private.slug(district)) STORED,
  UNIQUE (city_slug, district_slug)
);
CREATE INDEX locations_display_idx ON public.locations(city,district);
CREATE TABLE public.places (
  id varchar(100) PRIMARY KEY DEFAULT gen_random_uuid()::text,
  kind text NOT NULL CHECK (kind IN ('hotels','boardings','pet_taxis','vets','experiences')),
  CHECK(length(id) > 0)
);
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY,
  display_name varchar(120) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
DO $$ BEGIN
  IF to_regclass('auth.users') IS NOT NULL THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_auth_user_fk
      FOREIGN KEY(id) REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;
END $$;
CREATE TABLE public.favorites (
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  place_id varchar(100) NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY(user_id, place_id)
);
CREATE INDEX favorites_user_page_idx ON public.favorites(user_id, created_at DESC, place_id DESC);
CREATE INDEX favorites_place_idx ON public.favorites(place_id);
CREATE TABLE public.place_sources (
  provider varchar(80) NOT NULL,
  external_id varchar(255) NOT NULL,
  place_id varchar(100) NOT NULL REFERENCES public.places(id) ON DELETE CASCADE,
  PRIMARY KEY(provider, external_id)
);
CREATE INDEX place_sources_place_idx ON public.place_sources(place_id);

CREATE TABLE private.submission_limits (
  key_hash text PRIMARY KEY,
  window_start timestamptz NOT NULL,
  attempts integer NOT NULL CHECK(attempts > 0)
);
CREATE INDEX submission_limits_expiry_idx ON private.submission_limits(window_start);

CREATE FUNCTION private.touch_record() RETURNS trigger LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  IF TG_OP = 'UPDATE' THEN
    NEW.version := OLD.version + 1;
    NEW.created_at := OLD.created_at;
  END IF;
  NEW.modified_at := clock_timestamp();
  RETURN NEW;
END $$;

CREATE FUNCTION private.register_place() RETURNS trigger LANGUAGE plpgsql SET search_path = '' AS $$
DECLARE existing_kind text;
BEGIN
  IF TG_OP = 'UPDATE' AND NEW.id <> OLD.id THEN
    RAISE EXCEPTION 'Place IDs are immutable' USING ERRCODE = '23514';
  END IF;
  INSERT INTO public.places(id, kind) VALUES (NEW.id, TG_TABLE_NAME)
    ON CONFLICT(id) DO NOTHING;
  SELECT kind INTO existing_kind FROM public.places WHERE id = NEW.id;
  IF existing_kind <> TG_TABLE_NAME THEN
    RAISE EXCEPTION 'Place ID belongs to another type' USING ERRCODE = '23514';
  END IF;
  IF TG_OP = 'UPDATE' AND NEW.city = OLD.city AND NEW.district = OLD.district AND NEW.location_id IS NOT NULL THEN
    NEW.location_id := OLD.location_id;
    RETURN NEW;
  END IF;
  NEW.city := btrim(NEW.city);
  NEW.district := btrim(NEW.district);
  INSERT INTO public.locations(city,district) VALUES(NEW.city,NEW.district)
    ON CONFLICT(city_slug,district_slug) DO NOTHING;
  SELECT id,city,district INTO NEW.location_id,NEW.city,NEW.district FROM public.locations
    WHERE city_slug = private.slug(NEW.city) AND district_slug = private.slug(NEW.district);
  RETURN NEW;
END $$;

DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['hotels','boardings','guides','corrections','complaints','reviews','pet_taxis','vets','experiences','ads','ad_applications'] LOOP
    EXECUTE format('ALTER TABLE public.%I ADD COLUMN IF NOT EXISTS created_at timestamptz NOT NULL DEFAULT now()', t);
    EXECUTE format('ALTER TABLE public.%I ADD COLUMN version integer NOT NULL DEFAULT 1 CHECK(version > 0), ADD COLUMN modified_at timestamptz NOT NULL DEFAULT now()', t);
    EXECUTE format('CREATE TRIGGER touch_record BEFORE UPDATE ON public.%I FOR EACH ROW EXECUTE FUNCTION private.touch_record()', t);
    EXECUTE format('CREATE INDEX %I ON public.%I(created_at DESC,id DESC)', t || '_page_idx', t);
    IF t <> 'ad_applications' THEN
      EXECUTE format('ALTER TABLE public.%I ALTER COLUMN id SET DEFAULT gen_random_uuid()::text', t);
    ELSE
      EXECUTE format('ALTER TABLE public.%I ALTER COLUMN id SET DEFAULT gen_random_uuid()', t);
    END IF;
  END LOOP;
  FOREACH t IN ARRAY ARRAY['hotels','boardings','pet_taxis','vets','experiences'] LOOP
    EXECUTE format('INSERT INTO public.places(id,kind) SELECT id,%L FROM public.%I', t,t);
    EXECUTE format('ALTER TABLE public.%I ADD COLUMN location_id bigint REFERENCES public.locations(id), ADD COLUMN city_slug text GENERATED ALWAYS AS (private.slug(city)) STORED, ADD COLUMN district_slug text GENERATED ALWAYS AS (private.slug(district)) STORED, ADD COLUMN name_slug text GENERATED ALWAYS AS (private.slug(name)) STORED', t);
    EXECUTE format('ALTER TABLE public.%I ADD CONSTRAINT %I FOREIGN KEY(id) REFERENCES public.places(id) ON DELETE CASCADE', t,t || '_place_fk');
    EXECUTE format('CREATE TRIGGER register_place BEFORE INSERT OR UPDATE ON public.%I FOR EACH ROW EXECUTE FUNCTION private.register_place()', t);
    EXECUTE format('UPDATE public.%I SET city = city', t);
    EXECUTE format('ALTER TABLE public.%I ALTER COLUMN location_id SET NOT NULL',t);
    EXECUTE format('CREATE INDEX %I ON public.%I(location_id)',t || '_location_idx',t);
    EXECUTE format('CREATE INDEX %I ON public.%I(city_slug,district_slug,created_at DESC,id DESC)',t || '_location_page_idx',t);
    EXECUTE format('CREATE %s INDEX %I ON public.%I(city_slug,district_slug,name_slug)',CASE WHEN t='hotels' THEN 'UNIQUE' ELSE '' END,t || '_slug_idx',t);
    EXECUTE format('ALTER TABLE public.%I RENAME COLUMN last_verified TO verification_note',t);
    EXECUTE format('ALTER TABLE public.%I ADD COLUMN last_verified date',t);
    EXECUTE format('UPDATE public.%I SET last_verified = verification_note::date WHERE verification_note ~ ''^[0-9]{4}-[0-9]{2}-[0-9]{2}$''',t);
    EXECUTE format('ALTER TABLE public.%I ADD CONSTRAINT %I CHECK(base_trust_score BETWEEN 0 AND 10)', t,t || '_score_check');
    EXECUTE format('ALTER TABLE public.%I ADD CONSTRAINT %I CHECK(octet_length(description) <= 50000)', t,t || '_description_check');
    EXECUTE format('ALTER TABLE public.%I ADD CONSTRAINT %I CHECK(jsonb_typeof(features) = ''array'' AND jsonb_array_length(features) <= 100 AND octet_length(features::text) <= 12000)',t,t || '_features_check');
    EXECUTE format('CREATE INDEX %I ON public.%I USING gin(features jsonb_path_ops)',t || '_features_idx',t);
    IF t <> 'vets' THEN
      EXECUTE format('ALTER TABLE public.%I ADD CONSTRAINT %I CHECK(jsonb_typeof(allowed_pets) = ''array'' AND jsonb_array_length(allowed_pets) <= 20)',t,t || '_pets_check');
      EXECUTE format('CREATE INDEX %I ON public.%I USING gin(allowed_pets jsonb_path_ops)',t || '_pets_idx',t);
    END IF;
  END LOOP;
END $$;

-- Preserve stable identities used by both legacy catalog importers.
INSERT INTO public.place_sources(provider,external_id,place_id)
SELECT split_part(id,'-',1),substring(id from position('-' in id)+1),id
FROM public.hotels WHERE id ~ '^(enuygun|otelz)-.+';

ALTER TABLE public.hotels ADD CHECK(weight_limit >= 0), ADD CHECK(suitability BETWEEN 1 AND 5),
  ADD CHECK(max_pets_per_room IS NULL OR max_pets_per_room >= 0),
  ADD CHECK(gallery_images IS NULL OR (jsonb_typeof(gallery_images) = 'array' AND jsonb_array_length(gallery_images) <= 50)),
  ADD CHECK(octet_length(coalesce(faq,'[]')::text) <= 50000);
CREATE INDEX hotels_type_page_idx ON public.hotels(type,created_at DESC,id DESC);
ALTER TABLE public.boardings ADD CHECK(gallery_images IS NULL OR (jsonb_typeof(gallery_images) = 'array' AND jsonb_array_length(gallery_images) <= 50));
ALTER TABLE public.boardings ADD COLUMN price_amount numeric(12,2) CHECK(price_amount >= 0), ADD COLUMN currency varchar(3) DEFAULT 'TRY' CHECK(currency ~ '^[A-Z]{3}$');
ALTER TABLE public.pet_taxis ADD COLUMN price_amount numeric(12,2) CHECK(price_amount >= 0), ADD COLUMN currency varchar(3) DEFAULT 'TRY' CHECK(currency ~ '^[A-Z]{3}$');
-- price remains an explicit display label; never use it for numeric comparisons.
ALTER TABLE public.guides ALTER COLUMN published_at TYPE date USING published_at::date,
  ALTER COLUMN updated_at TYPE date USING updated_at::date,
  ADD CONSTRAINT guides_slug_unique UNIQUE(slug),
  ADD CHECK(octet_length(content) <= 100000),
  ADD CHECK(jsonb_typeof(author) = 'object'),
  ADD CHECK(octet_length(coalesce(checklist,'[]')::text) <= 12000),
  ADD CHECK(octet_length(coalesce(faq,'[]')::text) <= 50000);
CREATE INDEX guides_category_page_idx ON public.guides(category,created_at DESC,id DESC);
ALTER TABLE public.ads ALTER COLUMN starts_at TYPE date USING starts_at::date,
  ALTER COLUMN ends_at TYPE date USING ends_at::date,
  ALTER COLUMN impressions TYPE bigint, ALTER COLUMN clicks TYPE bigint,
  ADD CHECK(ends_at >= starts_at), ADD CHECK(impressions >= 0), ADD CHECK(clicks >= 0),
  ADD CHECK(status IN ('active','paused','expired'));
ALTER TABLE public.ad_applications ADD CHECK(octet_length(message) <= 6000);
DROP INDEX IF EXISTS public.ad_applications_created_idx;

ALTER TABLE public.corrections ADD CONSTRAINT corrections_hotel_fk FOREIGN KEY(hotel_id) REFERENCES public.hotels(id) ON DELETE RESTRICT;
ALTER TABLE public.complaints ADD CONSTRAINT complaints_place_fk FOREIGN KEY(target_id) REFERENCES public.places(id) ON DELETE RESTRICT;
ALTER TABLE public.reviews ADD CONSTRAINT reviews_place_fk FOREIGN KEY(target_id) REFERENCES public.places(id) ON DELETE RESTRICT;
ALTER TABLE public.reviews ADD CHECK(rating BETWEEN 1 AND 10);

DO $$ DECLARE t text; target text; BEGIN
  FOREACH t IN ARRAY ARRAY['corrections','complaints','reviews'] LOOP
    target := CASE WHEN t = 'corrections' THEN 'hotel_id' ELSE 'target_id' END;
    EXECUTE format('ALTER TABLE public.%I ADD COLUMN user_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL, ALTER COLUMN date TYPE date USING date::date, ALTER COLUMN date SET DEFAULT CURRENT_DATE, ALTER COLUMN status SET DEFAULT ''pending'', ALTER COLUMN status SET NOT NULL, ADD CHECK(status IN (''pending'',''approved'',''rejected'')), ADD CHECK(octet_length(text) <= 10000)',t);
    EXECUTE format('ALTER TABLE public.%I DISABLE TRIGGER touch_record',t);
    EXECUTE format('UPDATE public.%I SET created_at = date::timestamptz',t);
    EXECUTE format('ALTER TABLE public.%I ENABLE TRIGGER touch_record',t);
    EXECUTE format('CREATE INDEX %I ON public.%I(%I,created_at DESC,id DESC)',t || '_target_idx',t,target);
    EXECUTE format('CREATE INDEX %I ON public.%I(%I,created_at DESC,id DESC) WHERE status = ''approved''',t || '_approved_idx',t,target);
    EXECUTE format('CREATE INDEX %I ON public.%I(status,created_at DESC,id DESC)',t || '_moderation_idx',t);
    EXECUTE format('CREATE INDEX %I ON public.%I(user_id) WHERE user_id IS NOT NULL',t || '_user_idx',t);
  END LOOP;
END $$;

CREATE FUNCTION private.user_id() RETURNS uuid LANGUAGE sql STABLE SET search_path = '' AS $$
  SELECT coalesce(nullif(current_setting('request.jwt.claim.sub',true),''),
    nullif(current_setting('request.jwt.claims',true),'')::jsonb->>'sub')::uuid
$$;
CREATE FUNCTION private.anonymize_profile() RETURNS trigger LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  UPDATE public.reviews SET author = 'Silinen kullanici' WHERE user_id = OLD.id;
  UPDATE public.complaints SET author = 'Silinen kullanici' WHERE user_id = OLD.id;
  RETURN OLD;
END $$;
CREATE TRIGGER anonymize_profile BEFORE DELETE ON public.profiles FOR EACH ROW EXECUTE FUNCTION private.anonymize_profile();

GRANT USAGE ON SCHEMA public,private TO pati_api;
REVOKE ALL ON FUNCTION private.slug(text),private.touch_record(),private.register_place(),private.user_id(),private.anonymize_profile() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.slug(text),private.touch_record(),private.register_place(),private.user_id(),private.anonymize_profile() TO pati_api;
GRANT SELECT,INSERT,UPDATE ON private.submission_limits TO pati_api;
GRANT USAGE,SELECT ON SEQUENCE public.locations_id_seq TO pati_api;
DO $$ DECLARE t text; r text; BEGIN
  FOREACH t IN ARRAY ARRAY['hotels','boardings','guides','corrections','complaints','reviews','pet_taxis','vets','experiences','ads','ad_applications','places','locations','profiles','favorites','place_sources'] LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY',t);
    EXECUTE format('GRANT SELECT,INSERT,UPDATE,DELETE ON public.%I TO pati_api',t);
    EXECUTE format('REVOKE ALL ON public.%I FROM PUBLIC',t);
    FOREACH r IN ARRAY ARRAY['anon','authenticated'] LOOP
      IF EXISTS(SELECT FROM pg_roles WHERE rolname = r) THEN
        EXECUTE format('REVOKE ALL ON public.%I FROM %I',t,r);
      END IF;
    END LOOP;
    IF t <> 'favorites' THEN
      EXECUTE format('CREATE POLICY api_access ON public.%I TO pati_api USING (true) WITH CHECK (true)',t);
    END IF;
  END LOOP;
END $$;
CREATE POLICY favorite_owner ON public.favorites TO pati_api
  USING(user_id = (SELECT private.user_id())) WITH CHECK(user_id = (SELECT private.user_id()));
-- Data API is deliberately closed. User access is verified by the API and
-- favorites additionally enforce ownership inside the transaction at the DB.
-- One normalized search document instead of OR-ing unindexed text columns.
DO $$ DECLARE t text; expression text; extension_schema text; col record; BEGIN
  SELECT n.nspname INTO extension_schema FROM pg_extension e JOIN pg_namespace n ON n.oid=e.extnamespace WHERE e.extname='pg_trgm';
  FOREACH t IN ARRAY ARRAY['hotels','boardings','pet_taxis','vets','experiences','guides','ads'] LOOP
    expression := CASE WHEN t IN ('guides','ads') THEN 'coalesce(title,'''')' ELSE 'coalesce(name,'''')' END;
    IF t <> 'guides' THEN expression := expression || ' || '' '' || coalesce(city,'''')'; END IF;
    IF t NOT IN ('guides','ads') THEN expression := expression || ' || '' '' || coalesce(district,'''')'; END IF;
    EXECUTE format('ALTER TABLE public.%I ADD COLUMN search_text text GENERATED ALWAYS AS (private.slug(%s)) STORED',t,expression);
    EXECUTE format('CREATE INDEX %I ON public.%I USING gin(search_text %I.gin_trgm_ops)',t || '_search_idx',t,extension_schema);
    IF t IN ('boardings','experiences') THEN
      EXECUTE format('CREATE INDEX %I ON public.%I(category,created_at DESC,id DESC)',t || '_category_page_idx',t);
    END IF;
    IF t NOT IN ('guides','ads') THEN
      EXECUTE format('CREATE INDEX %I ON public.%I(city,created_at DESC,id DESC)',t || '_city_page_idx',t);
      EXECUTE format('CREATE INDEX %I ON public.%I(city_slug,created_at DESC,id DESC)',t || '_city_slug_page_idx',t);
    END IF;
  END LOOP;
  FOR col IN SELECT table_name,column_name FROM information_schema.columns
    WHERE table_schema='public' AND data_type='jsonb'
    AND table_name IN ('hotels','boardings','pet_taxis','vets','experiences','guides') LOOP
    EXECUTE format('ALTER TABLE public.%I ADD CONSTRAINT %I CHECK(%I IS NULL OR (jsonb_typeof(%I) = %L AND octet_length(%I::text) <= 50000))',
      col.table_name,col.table_name || '_' || col.column_name || '_bounded',col.column_name,col.column_name,
      CASE WHEN col.column_name IN ('author','rules','booking_links') THEN 'object' ELSE 'array' END,col.column_name);
  END LOOP;
END $$;
CREATE INDEX hotels_quiz_idx ON public.hotels USING gin(quiz_tags jsonb_path_ops);
CREATE INDEX boardings_quiz_idx ON public.boardings USING gin(quiz_tags jsonb_path_ops);
CREATE INDEX ads_placement_page_idx ON public.ads(placement,created_at DESC,id DESC) WHERE status='active';

-- Restricted maintenance primitive: only the trusted API role can invoke it.
-- Fixed tables and parameters; caller must lock and validate both hotels first.
CREATE FUNCTION private.merge_favorites(keeper text, duplicate text) RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  IF keeper = duplicate OR NOT EXISTS(SELECT FROM public.hotels WHERE id=keeper)
    OR NOT EXISTS(SELECT FROM public.hotels WHERE id=duplicate) THEN
    RAISE EXCEPTION 'Invalid merge' USING ERRCODE='23514';
  END IF;
  INSERT INTO public.favorites(user_id,place_id,created_at)
    SELECT user_id,keeper,created_at FROM public.favorites WHERE place_id=duplicate
    ON CONFLICT(user_id,place_id) DO NOTHING;
  DELETE FROM public.favorites WHERE place_id=duplicate;
END $$;
REVOKE ALL ON FUNCTION private.merge_favorites(text,text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.merge_favorites(text,text) TO pati_api;
