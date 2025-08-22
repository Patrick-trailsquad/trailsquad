-- Add race_ticket column to participants table
ALTER TABLE public.participants 
ADD COLUMN race_ticket BOOLEAN NOT NULL DEFAULT false;