-- Block public SELECT on contact_submissions
CREATE POLICY "No direct read of contact submissions"
ON public.contact_submissions
FOR SELECT
TO public
USING (false);

-- Replace permissive insert policy with validated one
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

CREATE POLICY "Anyone can submit valid contact form"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (
  char_length(name) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(message) BETWEEN 1 AND 2000
);