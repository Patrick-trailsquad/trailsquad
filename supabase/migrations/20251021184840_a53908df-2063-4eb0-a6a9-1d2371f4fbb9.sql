-- Create storage bucket for optimized gallery images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery-optimized',
  'gallery-optimized',
  true,
  5242880, -- 5MB limit
  ARRAY['image/webp', 'image/jpeg', 'image/png']
);

-- Create RLS policies for the bucket
CREATE POLICY "Public can view optimized gallery images"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery-optimized');

CREATE POLICY "Authenticated users can upload optimized images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'gallery-optimized' 
  AND auth.role() = 'authenticated'
);