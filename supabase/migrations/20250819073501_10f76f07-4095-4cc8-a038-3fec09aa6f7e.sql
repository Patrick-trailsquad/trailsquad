-- Update existing participants to use the correct destination names
UPDATE public.participants 
SET trail = CASE 
  WHEN trail = 'Ribeira Sacra' THEN 'Ribeira Sacra'
  ELSE 'GTC Swiss Alps'
END
WHERE trail IS NOT NULL;

-- Set default trail for any participants without a trail
UPDATE public.participants 
SET trail = 'GTC Swiss Alps'
WHERE trail IS NULL OR trail = '';