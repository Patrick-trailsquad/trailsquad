-- Add completed column to timeline_items table
ALTER TABLE public.timeline_items 
ADD COLUMN completed BOOLEAN NOT NULL DEFAULT false;