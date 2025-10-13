-- Modify the testimonials table to support multiple images
-- Change photo_url from text to text array
ALTER TABLE public.testimonials 
ALTER COLUMN photo_url TYPE text[] USING 
  CASE 
    WHEN photo_url IS NULL THEN NULL
    WHEN photo_url = 'null' THEN NULL
    ELSE ARRAY[photo_url]
  END;

-- Add a constraint to limit the number of images to 6
ALTER TABLE public.testimonials
ADD CONSTRAINT max_6_photos CHECK (photo_url IS NULL OR array_length(photo_url, 1) <= 6);