-- Create timeline_items table for managing important dates per destination
CREATE TABLE public.timeline_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  destination TEXT NOT NULL,
  title TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('registration', 'payment', 'event', 'deadline', 'milestone')),
  description TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.timeline_items ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admins can view all timeline items" 
ON public.timeline_items 
FOR SELECT 
USING (is_admin());

CREATE POLICY "Admins can create timeline items" 
ON public.timeline_items 
FOR INSERT 
WITH CHECK (is_admin());

CREATE POLICY "Admins can update timeline items" 
ON public.timeline_items 
FOR UPDATE 
USING (is_admin())
WITH CHECK (is_admin());

CREATE POLICY "Admins can delete timeline items" 
ON public.timeline_items 
FOR DELETE 
USING (is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_timeline_items_updated_at
BEFORE UPDATE ON public.timeline_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample data for each destination (without created_by for now)
INSERT INTO public.timeline_items (destination, title, date, type, description) VALUES
('Gran Trail Catelluya', 'Registration Opens', '2024-03-01 09:00:00+00', 'registration', 'Start accepting participants'),
('Gran Trail Catelluya', 'Early Bird Deadline', '2024-04-15 23:59:00+00', 'payment', 'Last day for early bird pricing'),
('Gran Trail Catelluya', 'Final Registration', '2024-05-30 23:59:00+00', 'deadline', 'Last day to register'),
('Gran Trail Catelluya', 'Event Day', '2024-06-15 06:00:00+00', 'event', 'Race day!'),

('Ribeira Sacra', 'Registration Opens', '2024-04-01 09:00:00+00', 'registration', 'Start accepting participants'),
('Ribeira Sacra', 'Equipment Check', '2024-05-15 10:00:00+00', 'milestone', 'Mandatory gear inspection'),
('Ribeira Sacra', 'Final Registration', '2024-06-01 23:59:00+00', 'deadline', 'Last day to register'),
('Ribeira Sacra', 'Event Day', '2024-07-20 07:00:00+00', 'event', 'Trail running adventure begins'),

('MIUT', 'Registration Opens', '2024-02-01 09:00:00+00', 'registration', 'Madeira Island Ultra Trail registration'),
('MIUT', 'Medical Certificate Deadline', '2024-03-30 23:59:00+00', 'deadline', 'Submit required medical documents'),
('MIUT', 'Event Day', '2024-04-25 05:00:00+00', 'event', 'Ultra trail challenge in Madeira');