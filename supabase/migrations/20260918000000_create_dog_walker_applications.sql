-- ==========================================================
-- PATILI.CO: DOG WALKER APPLICATIONS SCHEMA
-- Adds persistent storage for dog walker applications & listings
-- ==========================================================

CREATE TABLE IF NOT EXISTS public.dog_walker_applications (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  city VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  has_dog_experience TEXT NOT NULL,
  hourly_rate VARCHAR(50) NOT NULL,
  services JSONB DEFAULT '["Bireysel Yürüyüş", "Günlük Egzersiz"]'::jsonb,
  experience VARCHAR(100) DEFAULT 'Yeni Başvuru',
  bio TEXT,
  avatar VARCHAR(500),
  rating NUMERIC(3,1) DEFAULT 5.0,
  review_count INT DEFAULT 0,
  walk_count INT DEFAULT 0,
  verified BOOLEAN DEFAULT FALSE,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS dog_walker_applications_created_idx
  ON public.dog_walker_applications (created_at DESC);

CREATE INDEX IF NOT EXISTS dog_walker_applications_status_idx
  ON public.dog_walker_applications (status);

ALTER TABLE public.dog_walker_applications ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF EXISTS (SELECT FROM pg_roles WHERE rolname = 'pati_api') THEN
    GRANT SELECT,INSERT,UPDATE,DELETE ON public.dog_walker_applications TO pati_api;
    IF NOT EXISTS (
      SELECT 1 FROM pg_policies 
      WHERE schemaname = 'public' 
        AND tablename = 'dog_walker_applications' 
        AND policyname = 'api_access'
    ) THEN
      CREATE POLICY api_access ON public.dog_walker_applications TO pati_api USING (true) WITH CHECK (true);
    END IF;
  END IF;
END $$;
