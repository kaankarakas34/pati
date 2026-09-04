-- The deployment login must be able to drop privileges before application queries.
DO $$
BEGIN
  EXECUTE format('GRANT pati_api TO %I', session_user);
END $$;
