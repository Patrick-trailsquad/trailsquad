-- Update RLS policies for testimonials to require authentication and implement approval workflow

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Anyone can view all testimonials" ON public.testimonials;

-- Add user_id column to track who submitted the testimonial
ALTER TABLE public.testimonials 
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create new secure policies
-- 1. Only authenticated users can insert testimonials, and they must set their user_id
CREATE POLICY "Authenticated users can insert testimonials" 
ON public.testimonials 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- 2. Everyone can view approved testimonials, authenticated users can see their own regardless of status
CREATE POLICY "Public can view approved testimonials" 
ON public.testimonials 
FOR SELECT 
USING (
  status = 'approved' OR 
  (auth.uid() IS NOT NULL AND auth.uid() = user_id)
);

-- 3. Change default status to 'pending' to require approval
ALTER TABLE public.testimonials 
ALTER COLUMN status SET DEFAULT 'pending';

-- 4. Create policy for updating testimonial status (for admin approval)
CREATE POLICY "Authenticated users can update testimonial status" 
ON public.testimonials 
FOR UPDATE 
TO authenticated
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);