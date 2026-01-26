import { useState, useEffect } from "react";
import { ExternalLink, Bot, Shield, Sparkles, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  category: string;
  tags: string[];
  created_at: string;
}

const iconMap: Record<string, any> = {
  'AI': Bot,
  'Web Development': Code,
  'Automation': Sparkles,
  'default': Shield
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const filters = ["All", "AI", "Web Development", "Automation"];

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  // Fallback projects if database is empty
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "UnMask — Coaching Ad Transparency",
      description: "A public-interest platform that audits coaching institute advertisements for misleading claims. AI extracts topper data, detects conflicts, and compiles evidence for Consumer Protection complaints.",
      image_url: null,
      category: "AI",
      tags: ["AI", "Product Design", "OCR"],
      created_at: "2026-01-01"
    },
    {
      id: "2",
      title: "BrainX — AI Test Generator",
      description: "An AI-powered test platform trusted by Class 10 toppers, offering 100% CBSE-aligned questions and smart analytics for students.",
      image_url: null,
      category: "AI",
      tags: ["AI", "EdTech", "Web App"],
      created_at: "2025-01-01"
    },
    {
      id: "3",
      title: "Business Automation Suite",
      description: "Automated workflow solutions for businesses to save time and increase efficiency using AI-powered tools and integrations.",
      image_url: null,
      category: "Automation",
      tags: ["Automation", "AI", "Integration"],
      created_at: "2025-01-01"
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  
  const filteredProjects = activeFilter === "All"
    ? displayProjects
    : displayProjects.filter((p) => p.category === activeFilter);

  const getIcon = (category: string) => {
    return iconMap[category] || iconMap['default'];
  };

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI automation, web development, and smart solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "border-border hover:border-primary hover:text-primary"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const IconComponent = getIcon(project.category);
            return (
              <Card
                key={project.id}
                className="glass-card border-border/50 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary h-48 flex items-center justify-center">
                    {project.image_url ? (
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded-full">
                      {new Date(project.created_at).getFullYear()}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more or discuss a project?</p>
          <a href="#contact">
            <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
              Let's Talk
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
