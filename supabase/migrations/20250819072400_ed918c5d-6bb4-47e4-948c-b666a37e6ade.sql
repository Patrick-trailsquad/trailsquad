-- Add missing updated_at column to participants table (if it doesn't exist)
ALTER TABLE public.participants 
ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone NOT NULL DEFAULT now();