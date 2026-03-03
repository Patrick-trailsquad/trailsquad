CREATE POLICY "Anyone can view timeline items"
ON public.timeline_items
FOR SELECT
USING (true);