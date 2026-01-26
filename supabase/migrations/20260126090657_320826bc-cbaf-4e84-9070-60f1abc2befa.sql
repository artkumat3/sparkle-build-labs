-- Add policies for admin_settings (only readable by checking password via edge function)
CREATE POLICY "No direct access to admin_settings"
ON public.admin_settings
FOR SELECT
USING (false);

-- Add insert/update/delete policies for projects (will be done via edge function with admin auth)
-- For now, deny direct modifications - we'll use edge functions
CREATE POLICY "No direct insert to projects"
ON public.projects
FOR INSERT
WITH CHECK (false);

CREATE POLICY "No direct update to projects"
ON public.projects
FOR UPDATE
USING (false);

CREATE POLICY "No direct delete to projects"
ON public.projects
FOR DELETE
USING (false);