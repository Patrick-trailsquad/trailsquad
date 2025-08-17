-- Create storage bucket for testimonial photos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('testimonial-photos', 'testimonial-photos', true);

-- Create RLS policies for testimonial photos
CREATE POLICY "Anyone can view testimonial photos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'testimonial-photos');

CREATE POLICY "Anyone can upload testimonial photos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'testimonial-photos');