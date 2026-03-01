import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, LogOut, Plus, Edit, Trash2, MessageSquare, Briefcase, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  dark_image_url: string | null;
  category: string;
  tags: string[];
  created_at: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState({ totalContacts: 0, totalProjects: 0 });
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    dark_image_url: "",
    category: "AI",
    tags: ""
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const adminCall = async (action: string, data?: any) => {
    const response = await supabase.functions.invoke('admin', {
      body: { action, password, data }
    });
    
    if (response.error) throw response.error;
    if (response.data.error) throw new Error(response.data.error);
    return response.data;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await adminCall('verify');
      setIsAuthenticated(true);
      toast({ title: "Welcome Admin!", description: "Successfully logged in." });
      loadData();
    } catch (error: any) {
      toast({ 
        title: "Login Failed", 
        description: error.message || "Invalid password",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = async () => {
    try {
      const [projectsRes, statsRes, contactsRes] = await Promise.all([
        adminCall('get_projects'),
        adminCall('get_stats'),
        adminCall('get_contacts')
      ]);
      
      setProjects(projectsRes.projects || []);
      setStats(statsRes);
      setContacts(contactsRes.contacts || []);
    } catch (error: any) {
      toast({ title: "Error loading data", description: error.message, variant: "destructive" });
    }
  };

  const handleSubmitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const projectData = {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        ...(editingProject && { id: editingProject.id })
      };

      await adminCall(editingProject ? 'update_project' : 'add_project', projectData);
      
      toast({ 
        title: editingProject ? "Project Updated" : "Project Added",
        description: "Successfully saved."
      });
      
      setIsDialogOpen(false);
      setEditingProject(null);
      setFormData({ title: "", description: "", image_url: "", dark_image_url: "", category: "AI", tags: "" });
      loadData();
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    
    try {
      await adminCall('delete_project', { id });
      toast({ title: "Project Deleted" });
      loadData();
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const openEditDialog = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image_url: project.image_url || "",
      dark_image_url: project.dark_image_url || "",
      category: project.category,
      tags: project.tags.join(', ')
    });
    setIsDialogOpen(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setProjects([]);
    setContacts([]);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md glass-card">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
            <p className="text-muted-foreground">Enter password to continue</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center"
              />
              <Button type="submit" className="w-full bg-primary" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Login"}
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                className="w-full"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{stats.totalContacts}</p>
                <p className="text-sm text-muted-foreground">Service Requests</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{stats.totalProjects}</p>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">Active</p>
                <p className="text-sm text-muted-foreground">Portfolio Status</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Projects</CardTitle>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-primary"
                  onClick={() => {
                    setEditingProject(null);
                    setFormData({ title: "", description: "", image_url: "", dark_image_url: "", category: "AI", tags: "" });
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitProject} className="space-y-4">
                  <Input
                    placeholder="Project Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Project Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={4}
                  />
                  <Input
                    placeholder="Image URL - Light Theme (optional)"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  />
                  <Input
                    placeholder="Image URL - Dark Theme (optional)"
                    value={formData.dark_image_url}
                    onChange={(e) => setFormData({ ...formData, dark_image_url: e.target.value })}
                  />
                  <Input
                    placeholder="Category (AI, Web Development, Automation)"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                  <Input
                    placeholder="Tags (comma separated)"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  />
                  <Button type="submit" className="w-full bg-primary" disabled={isLoading}>
                    {isLoading ? "Saving..." : (editingProject ? "Update Project" : "Add Project")}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No projects yet. Add your first project!</p>
              ) : (
                projects.map((project) => (
                  <div 
                    key={project.id} 
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => openEditDialog(project)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteProject(project.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Submissions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Service Requests ({contacts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contacts.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No service requests yet.</p>
              ) : (
                contacts.map((contact) => (
                  <div 
                    key={contact.id} 
                    className="p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{contact.name}</h3>
                        <p className="text-sm text-primary">{contact.email}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{contact.message}</p>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
