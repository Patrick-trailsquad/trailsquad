-- Remove authentication requirements and enable auto-approved reviews

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Authenticated users can insert testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Public can view approved testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated users can update testimonial status" ON public.testimonials;

-- Make user_id nullable since unauthenticated users won't have one
ALTER TABLE public.testimonials 
ALTER COLUMN user_id DROP NOT NULL;

-- Change default status back to 'approved' for auto-approval
ALTER TABLE public.testimonials 
ALTER COLUMN status SET DEFAULT 'approved';

-- Create new permissive policies
-- 1. Anyone can insert testimonials (no authentication required)
CREATE POLICY "Anyone can insert testimonials" 
ON public.testimonials 
FOR INSERT 
USING (true);

-- 2. Anyone can view approved testimonials
CREATE POLICY "Anyone can view approved testimonials" 
ON public.testimonials 
FOR SELECT 
USING (status = 'approved');

-- 3. Only authenticated users can update testimonials (for admin purposes if needed later)
CREATE POLICY "Authenticated users can update testimonials" 
ON public.testimonials 
FOR UPDATE 
TO authenticated
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);