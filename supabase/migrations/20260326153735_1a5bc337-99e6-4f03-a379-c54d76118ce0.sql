-- Shorten Mads and Mads-short testimonials
UPDATE public.testimonials 
SET review = 'Fantastisk løb, i det spanske terræn. Teamet fra Trail Squad havde lavet en pakke ud over det sædvanlige hvor der var tænkt på det hele, og sikrede konsekvent en super stemning 👌🏼'
WHERE name LIKE '%Mads%';