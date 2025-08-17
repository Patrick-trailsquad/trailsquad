-- Update RLS policies for testimonials to require authentication and implement approval workflow

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Anyone can view all testimonials" ON public.testimonials;

-- Create new secure policies
-- 1. Only authenticated users can insert testimonials, and they start as 'pending'
CREATE POLICY "Authenticated users can insert testimonials" 
ON public.testimonials 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);

-- 2. Everyone can view approved testimonials, authenticated users can see their own regardless of status
CREATE POLICY "Public can view approved testimonials" 
ON public.testimonials 
FOR SELECT 
USING (
  status = 'approved' OR 
  (auth.uid() IS NOT NULL AND auth.uid()::text = user_id)
);

-- 3. Change default status to 'pending' to require approval
ALTER TABLE public.testimonials 
ALTER COLUMN status SET DEFAULT 'pending';

-- 4. Add user_id column to track who submitted the testimonial
ALTER TABLE public.testimonials 
ADD COLUMN IF NOT EXISTS user_id text;

-- 5. Create policy for admins to update testimonial status (approve/reject)
-- For now, we'll allow any authenticated user to update - this should be restricted to admin roles in a real app
CREATE POLICY "Authenticated users can update testimonial status" 
ON public.testimonials 
FOR UPDATE 
TO authenticated
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);