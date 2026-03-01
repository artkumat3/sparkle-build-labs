import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { action, password, data } = await req.json();
    console.log(`Admin action: ${action}`);

    // Verify admin password
    const { data: adminData, error: adminError } = await supabase
      .from('admin_settings')
      .select('setting_value')
      .eq('setting_key', 'admin_password')
      .single();

    if (adminError || !adminData) {
      console.error('Error fetching admin password:', adminError);
      return new Response(
        JSON.stringify({ error: 'Server error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (password !== adminData.setting_value) {
      return new Response(
        JSON.stringify({ error: 'Invalid password' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let result;

    switch (action) {
      case 'verify':
        result = { success: true, message: 'Password verified' };
        break;

      case 'get_projects':
        const { data: projects, error: projectsError } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (projectsError) throw projectsError;
        result = { projects };
        break;

      case 'add_project':
        const { data: newProject, error: addError } = await supabase
          .from('projects')
          .insert([{
            title: data.title,
            description: data.description,
            image_url: data.image_url,
            dark_image_url: data.dark_image_url,
            category: data.category || 'AI',
            tags: data.tags || []
          }])
          .select()
          .single();
        
        if (addError) throw addError;
        result = { project: newProject };
        break;

      case 'update_project':
        const { data: updatedProject, error: updateError } = await supabase
          .from('projects')
          .update({
            title: data.title,
            description: data.description,
            image_url: data.image_url,
            dark_image_url: data.dark_image_url,
            category: data.category,
            tags: data.tags
          })
          .eq('id', data.id)
          .select()
          .single();
        
        if (updateError) throw updateError;
        result = { project: updatedProject };
        break;

      case 'delete_project':
        const { error: deleteError } = await supabase
          .from('projects')
          .delete()
          .eq('id', data.id);
        
        if (deleteError) throw deleteError;
        result = { success: true };
        break;

      case 'get_stats':
        const { count: contactCount, error: countError } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true });
        
        if (countError) throw countError;

        const { count: projectCount, error: projectCountError } = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true });
        
        if (projectCountError) throw projectCountError;

        result = { 
          totalContacts: contactCount || 0,
          totalProjects: projectCount || 0
        };
        break;

      case 'get_contacts':
        const { data: contacts, error: contactsError } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (contactsError) throw contactsError;
        result = { contacts };
        break;

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    return new Response(
      JSON.stringify(result),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Admin function error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
