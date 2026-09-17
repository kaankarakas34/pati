-- ==========================================================
-- PATILI.CO: PET POLICY ENGINE SCHEMA EXPANSION
-- Adds structured pet policy, area access, amenities & verification fields
-- ==========================================================

ALTER TABLE public.hotels
  ADD COLUMN IF NOT EXISTS pets_allowed VARCHAR(20) DEFAULT 'yes',
  ADD COLUMN IF NOT EXISTS accepted_pet_types JSONB DEFAULT '["dog", "cat"]'::jsonb,
  ADD COLUMN IF NOT EXISTS size_categories JSONB DEFAULT '["small", "medium"]'::jsonb,
  ADD COLUMN IF NOT EXISTS pet_fee_type VARCHAR(30) DEFAULT 'unknown',
  ADD COLUMN IF NOT EXISTS pet_fee_amount NUMERIC(10, 2),
  ADD COLUMN IF NOT EXISTS pet_fee_currency VARCHAR(5) DEFAULT 'TRY',
  ADD COLUMN IF NOT EXISTS deposit_required BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS deposit_amount NUMERIC(10, 2),
  ADD COLUMN IF NOT EXISTS advance_notice_required BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS vaccination_record_required BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS carrier_or_leash_required BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS room_access BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS restaurant_access VARCHAR(30) DEFAULT 'prohibited',
  ADD COLUMN IF NOT EXISTS garden_access BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS beach_access VARCHAR(30) DEFAULT 'no_beach',
  ADD COLUMN IF NOT EXISTS pool_surroundings_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS furniture_rule VARCHAR(100) DEFAULT 'Kendi yatağında kalmalıdır',
  ADD COLUMN IF NOT EXISTS has_food_bowl BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_water_bowl BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_pet_bed BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_welcome_kit BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_washing_station BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_waste_bags BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS policy_source VARCHAR(50) DEFAULT 'official_site',
  ADD COLUMN IF NOT EXISTS verified_by VARCHAR(80) DEFAULT 'Patili.co Editör Ekibi',
  ADD COLUMN IF NOT EXISTS last_checked_at TIMESTAMPTZ DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS confidence_score NUMERIC(3, 1) DEFAULT 8.5,
  ADD COLUMN IF NOT EXISTS owner_claimed BOOLEAN DEFAULT FALSE;
