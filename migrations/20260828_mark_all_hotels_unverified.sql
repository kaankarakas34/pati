UPDATE public.hotels
SET verified = FALSE
WHERE verified IS DISTINCT FROM FALSE;
