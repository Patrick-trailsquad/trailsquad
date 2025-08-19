-- Add trail column to participants table
ALTER TABLE public.participants 
ADD COLUMN trail text NOT NULL DEFAULT 'Ribeira Sacra';

-- Create an index on the trail column for better performance
CREATE INDEX idx_participants_trail ON public.participants(trail);