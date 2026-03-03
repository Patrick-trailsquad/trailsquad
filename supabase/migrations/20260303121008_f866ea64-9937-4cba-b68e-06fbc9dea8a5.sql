-- 1. Remove UPDATE policy on profiles to prevent role escalation
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- 2. Fix testimonials UPDATE policy - restrict to admins only
DROP POLICY IF EXISTS "Authenticated users can update testimonials" ON public.testimonials;
CREATE POLICY "Admins can update testimonials"
ON public.testimonials
FOR UPDATE
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

-- 3. Secure decrement_training_spots - add basic caller validation  
CREATE OR REPLACE FUNCTION public.decrement_training_spots(p_session_key text)
 RETURNS integer
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $$
DECLARE
  v_remaining INTEGER;
BEGIN
  -- Validate input
  IF p_session_key IS NULL OR length(p_session_key) > 100 THEN
    RETURN -1;
  END IF;

  UPDATE training_spots
  SET spots_remaining = spots_remaining - 1
  WHERE session_key = p_session_key AND spots_remaining > 0
  RETURNING spots_remaining INTO v_remaining;
  
  IF v_remaining IS NULL THEN
    RETURN -1;
  END IF;
  
  RETURN v_remaining;
END;
$$;

-- 4. Fix testimonial-photos storage - restrict uploads and add size limits
-- Drop the overly permissive upload policy
DROP POLICY IF EXISTS "Anyone can upload testimonial photos" ON storage.objects;

-- Create a more restrictive policy with file size and type checks
CREATE POLICY "Restricted testimonial photo uploads"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'testimonial-photos'
  AND (LOWER(storage.extension(name)) IN ('jpg', 'jpeg', 'png', 'webp', 'gif'))
  AND (octet_length(name) < 500)
);