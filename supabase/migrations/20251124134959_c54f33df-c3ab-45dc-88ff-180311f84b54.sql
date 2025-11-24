-- Drop the unique constraint on email to allow same person on multiple trails
ALTER TABLE participants DROP CONSTRAINT IF EXISTS participants_email_key;

-- Add a composite unique constraint to prevent duplicate registrations for the same trail
ALTER TABLE participants ADD CONSTRAINT participants_email_trail_unique UNIQUE (email, trail);