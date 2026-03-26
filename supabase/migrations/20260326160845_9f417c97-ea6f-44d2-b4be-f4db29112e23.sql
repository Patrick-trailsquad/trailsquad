-- Add phone and notes columns to participants table
ALTER TABLE public.participants 
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS notes TEXT;