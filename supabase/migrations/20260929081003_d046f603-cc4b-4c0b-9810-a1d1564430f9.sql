CREATE OR REPLACE FUNCTION public.block_spam_testimonials()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
DECLARE txt text := coalesce(NEW.name,'') || ' ' || coalesce(NEW.review,'') || ' ' || coalesce(NEW.location,'');
BEGIN
  IF txt ~ '\d{8,}'
     OR txt ~* '(probe|please ignore|automated|functest|\mtest|testby|testløber|ratingløber|lorem ipsum|asdf|qwerty)'
     OR coalesce(NEW.location,'') ~* '^qa'
     OR length(trim(coalesce(NEW.name,''))) < 2 THEN
    RAISE EXCEPTION 'Testimonial rejected';
  END IF;
  IF (SELECT count(*) FROM public.testimonials WHERE created_at > now() - interval '1 hour') >= 5 THEN
    RAISE EXCEPTION 'Too many testimonials';
  END IF;
  NEW.status := 'approved';
  RETURN NEW;
END $$;
DROP TRIGGER IF EXISTS block_spam_testimonials ON public.testimonials;
CREATE TRIGGER block_spam_testimonials BEFORE INSERT ON public.testimonials
FOR EACH ROW EXECUTE FUNCTION public.block_spam_testimonials();