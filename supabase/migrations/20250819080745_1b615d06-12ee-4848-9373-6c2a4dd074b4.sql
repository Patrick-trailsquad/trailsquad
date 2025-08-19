-- Add email_remaining_payment column to participants table
ALTER TABLE public.participants 
ADD COLUMN email_remaining_payment BOOLEAN NOT NULL DEFAULT false;