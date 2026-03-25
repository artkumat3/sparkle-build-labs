import { useState, useEffect } from "react";
import { ArrowUpRight, Bot, Shield, Sparkles, Code } from "lucide-react";
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
  'default': Shield,
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();

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

  const defaultProjects: Project[] = [
    {
      id: "1", title: "UnMask — Coaching Ad Transparency",
      description: "A public-interest platform that audits coaching institute advertisements for misleading claims using AI.",
      image_url: null, dark_image_url: null, category: "AI", tags: ["AI", "Product Design", "OCR"], created_at: "2026-01-01",
    },
    {
      id: "2", title: "BrainX — AI Test Generator",
      description: "An AI-powered test platform for Class 10 toppers, offering 100% CBSE-aligned questions and smart analytics.",
      image_url: null, dark_image_url: null, category: "AI", tags: ["AI", "EdTech", "Web App"], created_at: "2025-01-01",
    },
    {
      id: "3", title: "Business Automation Suite",
      description: "Automated workflow solutions using AI-powered tools and integrations for businesses.",
      image_url: null, dark_image_url: null, category: "Automation", tags: ["Automation", "AI", "Integration"], created_at: "2025-01-01",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  const getProjectImage = (project: Project) => {
    if (resolvedTheme === "dark" && project.dark_image_url) return project.dark_image_url;
    return project.image_url;
  };

  const getIcon = (category: string) => iconMap[category] || iconMap['default'];

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="flex items-end justify-between mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Selected Work</h2>
            <p className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</p>
          </div>
        </motion.div>

        <div className="space-y-1">
          {displayProjects.map((project, index) => {
            const IconComponent = getIcon(project.category);
            const imageUrl = getProjectImage(project);
            return (
              <motion.div
                key={project.id}
                className="group border-b border-border/50 py-8 md:py-10 cursor-pointer hover:bg-secondary/20 transition-colors duration-300 px-4 -mx-4 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
                      {imageUrl ? (
                        <img src={imageUrl} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <IconComponent className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 line-clamp-1">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden md:flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
