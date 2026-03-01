import { useState, useEffect } from "react";
import { ExternalLink, Bot, Shield, Sparkles, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
  const { resolvedTheme } = useTheme();

  const filters = ["All", "AI", "Web Development", "Automation"];

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setProjects(data as unknown as Project[]);
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
      dark_image_url: null,
      category: "AI",
      tags: ["AI", "Product Design", "OCR"],
      created_at: "2026-01-01"
    },
    {
      id: "2",
      title: "BrainX — AI Test Generator",
      description: "An AI-powered test platform trusted by Class 10 toppers, offering 100% CBSE-aligned questions and smart analytics for students.",
      image_url: null,
      dark_image_url: null,
      category: "AI",
      tags: ["AI", "EdTech", "Web App"],
      created_at: "2025-01-01"
    },
    {
      id: "3",
      title: "Business Automation Suite",
      description: "Automated workflow solutions for businesses to save time and increase efficiency using AI-powered tools and integrations.",
      image_url: null,
      dark_image_url: null,
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

  const getProjectImage = (project: Project) => {
    if (resolvedTheme === "dark" && project.dark_image_url) {
      return project.dark_image_url;
    }
    return project.image_url;
  };

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my work in AI automation, web development, and smart solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20"
                : "border-border hover:border-primary hover:text-primary"
              }
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = getIcon(project.category);
            const imageUrl = getProjectImage(project);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border/50 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary dark:from-primary/15 dark:via-accent/10 dark:to-secondary/50 h-52 flex items-center justify-center border-b border-border/50">
                      {imageUrl ? (
                        <img 
                          src={imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="w-10 h-10 text-primary" />
                        </div>
                      )}
                      <div className="absolute top-4 right-4 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
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
                      <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2 group-hover:gap-3 transition-all">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground mb-4 text-lg">Want to see more or discuss a project?</p>
          <a href="#contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20 px-8">
              Let's Talk
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
