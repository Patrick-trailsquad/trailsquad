-- Update all timeline items to have relevant 2025 dates
UPDATE public.timeline_items 
SET date = '2025-09-01 09:00:00+00'
WHERE destination = 'MIUT Madeira' AND title = 'Registration Opens';

UPDATE public.timeline_items 
SET date = '2025-10-15 23:59:00+00'
WHERE destination = 'MIUT Madeira' AND title = 'Medical Certificate Deadline';

UPDATE public.timeline_items 
SET date = '2025-11-25 05:00:00+00'
WHERE destination = 'MIUT Madeira' AND title = 'Event Day';

UPDATE public.timeline_items 
SET date = '2025-08-15 09:00:00+00'
WHERE destination = 'Ribeira Sacra' AND title = 'Registration Opens';

UPDATE public.timeline_items 
SET date = '2025-09-15 10:00:00+00'
WHERE destination = 'Ribeira Sacra' AND title = 'Equipment Check';

UPDATE public.timeline_items 
SET date = '2025-10-01 23:59:00+00'
WHERE destination = 'Ribeira Sacra' AND title = 'Final Registration';

UPDATE public.timeline_items 
SET date = '2025-10-20 07:00:00+00'
WHERE destination = 'Ribeira Sacra' AND title = 'Event Day';

-- Update other destinations too
UPDATE public.timeline_items 
SET date = '2025-08-20 09:00:00+00'
WHERE destination = 'Gran Trail Courmayeur' AND title = 'Registration Opens';

UPDATE public.timeline_items 
SET date = '2025-09-15 23:59:00+00'
WHERE destination = 'Gran Trail Courmayeur' AND title = 'Early Bird Deadline';

UPDATE public.timeline_items 
SET date = '2025-10-30 23:59:00+00'
WHERE destination = 'Gran Trail Courmayeur' AND title = 'Final Registration';

UPDATE public.timeline_items 
SET date = '2025-11-15 06:00:00+00'
WHERE destination = 'Gran Trail Courmayeur' AND title = 'Event Day';

-- Add some items for current month (August 2025) so you can see immediate results
INSERT INTO public.timeline_items (destination, title, date, type, description) VALUES
('Ribeira Sacra', 'Early Registration Bonus', '2025-08-25 10:00:00+00', 'milestone', 'Get your early bird discount'),
('MIUT Madeira', 'Training Plan Released', '2025-08-28 14:00:00+00', 'milestone', 'Official training guide available'),
('Gran Trail Courmayeur', 'Route Preview', '2025-08-30 18:00:00+00', 'milestone', 'Virtual course walkthrough');