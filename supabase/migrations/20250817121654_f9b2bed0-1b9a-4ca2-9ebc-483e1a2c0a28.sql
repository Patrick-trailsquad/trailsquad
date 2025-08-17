-- Update RLS policy to allow viewing all testimonials (not just approved)
DROP POLICY IF EXISTS "Anyone can view approved testimonials" ON public.testimonials;

CREATE POLICY "Anyone can view all testimonials" 
ON public.testimonials 
FOR SELECT 
USING (true);

-- Update the default status to 'approved' instead of 'pending'
ALTER TABLE public.testimonials 
ALTER COLUMN status SET DEFAULT 'approved';