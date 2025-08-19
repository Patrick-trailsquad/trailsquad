-- Add missing updated_at column to participants table
ALTER TABLE public.participants 
ADD COLUMN updated_at timestamp with time zone NOT NULL DEFAULT now();

-- Create trigger to automatically update the updated_at column
CREATE TRIGGER update_participants_updated_at
  BEFORE UPDATE ON public.participants
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();