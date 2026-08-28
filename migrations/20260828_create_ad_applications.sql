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

CREATE INDEX IF NOT EXISTS ad_applications_created_idx
  ON public.ad_applications (created_at DESC);

ALTER TABLE public.ad_applications ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.ad_applications FROM anon, authenticated;
