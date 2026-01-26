import { useState } from "react";
import { ExternalLink, Bot, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "Web Development", "Automation"];

  const projects = [
    {
      id: 1,
      title: "UnMask — Coaching Ad Transparency",
      category: "AI",
      description: "A public-interest platform that audits coaching institute advertisements for misleading claims. AI extracts topper data, detects conflicts, and compiles evidence for Consumer Protection complaints.",
      icon: Shield,
      tags: ["AI", "Product Design", "OCR"],
      date: "Jan 2026",
    },
    {
      id: 2,
      title: "BrainX — AI Test Generator",
      category: "AI",
      description: "An AI-powered test platform trusted by Class 10 toppers, offering 100% CBSE-aligned questions and smart analytics for students.",
      icon: Bot,
      tags: ["AI", "EdTech", "Web App"],
      date: "2025",
    },
    {
      id: 3,
      title: "Business Automation Suite",
      category: "Automation",
      description: "Automated workflow solutions for businesses to save time and increase efficiency using AI-powered tools and integrations.",
      icon: Sparkles,
      tags: ["Automation", "AI", "Integration"],
      date: "2025",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass-card border-border/50 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary h-48 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded-full">
                    {project.date}
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
          ))}
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
