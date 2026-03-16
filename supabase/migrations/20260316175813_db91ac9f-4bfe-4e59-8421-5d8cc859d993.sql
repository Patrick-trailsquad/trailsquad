
CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  destination text NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  preferred_distance text,
  participants integer DEFAULT 1,
  accommodation_preference text,
  source text DEFAULT 'form',
  payment_status text
);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view quote requests"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (public.is_admin());

CREATE POLICY "Anyone can insert quote requests"
ON public.quote_requests
FOR INSERT
TO public
WITH CHECK (true);
