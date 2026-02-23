
-- Table to track remaining spots for training session options
CREATE TABLE public.training_spots (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_key TEXT NOT NULL UNIQUE,
  spots_remaining INTEGER NOT NULL DEFAULT 14,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.training_spots ENABLE ROW LEVEL SECURITY;

-- Anyone can read spots
CREATE POLICY "Anyone can view training spots"
ON public.training_spots
FOR SELECT
USING (true);

-- RPC to decrement spots atomically
CREATE OR REPLACE FUNCTION public.decrement_training_spots(p_session_key TEXT)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_remaining INTEGER;
BEGIN
  UPDATE training_spots
  SET spots_remaining = spots_remaining - 1
  WHERE session_key = p_session_key AND spots_remaining > 0
  RETURNING spots_remaining INTO v_remaining;
  
  IF v_remaining IS NULL THEN
    RETURN -1; -- No spots left or key not found
  END IF;
  
  RETURN v_remaining;
END;
$$;

-- Insert the initial row for Tour de Furesøen LøberLab pickup
INSERT INTO public.training_spots (session_key, spots_remaining)
VALUES ('furesoeen-loberlab-pickup', 14);
