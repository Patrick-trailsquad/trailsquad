-- Update the handle_new_user function to only assign admin role to specific emails
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only assign admin role to specific approved emails
  IF NEW.email IN ('patrick@trailsquad.dk', 'emil@trailsquad.dk') THEN
    INSERT INTO public.profiles (id, role)
    VALUES (NEW.id, 'admin');
  ELSE
    INSERT INTO public.profiles (id, role)
    VALUES (NEW.id, 'user');
  END IF;
  RETURN NEW;
END;
$$;

-- Create a function to validate admin role assignments
CREATE OR REPLACE FUNCTION public.validate_admin_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  user_email text;
BEGIN
  -- Get the user's email from auth.users
  SELECT email INTO user_email 
  FROM auth.users 
  WHERE id = NEW.id;
  
  -- Only allow admin role for approved emails
  IF NEW.role = 'admin' AND user_email NOT IN ('patrick@trailsquad.dk', 'emil@trailsquad.dk') THEN
    RAISE EXCEPTION 'Admin role can only be assigned to approved email addresses';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to validate admin role assignments on INSERT and UPDATE
DROP TRIGGER IF EXISTS validate_admin_role_trigger ON public.profiles;
CREATE TRIGGER validate_admin_role_trigger
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_admin_role();

-- Update existing profiles that shouldn't be admins
UPDATE public.profiles 
SET role = 'user' 
WHERE role = 'admin' 
AND id NOT IN (
  SELECT id FROM auth.users 
  WHERE email IN ('patrick@trailsquad.dk', 'emil@trailsquad.dk')
);