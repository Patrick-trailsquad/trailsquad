-- Update existing sample data to match actual destination names from config
UPDATE public.timeline_items 
SET destination = 'MIUT Madeira' 
WHERE destination = 'MIUT';

UPDATE public.timeline_items 
SET destination = 'Gran Trail Courmayeur' 
WHERE destination = 'Gran Trail Catelluya';

-- Add sample data for the other destinations
INSERT INTO public.timeline_items (destination, title, date, type, description) VALUES
('Transylvania 100', 'Registration Opens', '2024-05-01 09:00:00+00', 'registration', 'Start accepting participants'),
('Transylvania 100', 'Equipment Check', '2024-06-15 10:00:00+00', 'milestone', 'Mandatory gear inspection'),
('Transylvania 100', 'Event Day', '2024-07-10 06:00:00+00', 'event', '100k trail challenge in Transylvania'),

('Zugspitz Ultratrail', 'Registration Opens', '2024-04-01 09:00:00+00', 'registration', 'Start accepting participants'),
('Zugspitz Ultratrail', 'Training Camp', '2024-05-20 08:00:00+00', 'milestone', 'Optional training session'),
('Zugspitz Ultratrail', 'Event Day', '2024-06-25 05:00:00+00', 'event', 'Ultratrail around Zugspitz');