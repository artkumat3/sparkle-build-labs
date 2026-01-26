import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Design", "Development", "Branding", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "Brand Identity - TechFlow",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      client: "TechFlow Inc.",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      client: "ShopEase",
    },
    {
      id: 3,
      title: "Mobile App Design",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      client: "FitLife App",
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      client: "ConsultPro",
    },
    {
      id: 5,
      title: "Dashboard Design",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      client: "DataViz",
    },
    {
      id: 6,
      title: "Creative Campaign",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      client: "ArtHouse",
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
            A showcase of my best work across various industries and design disciplines.
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
                ? "bg-primary text-primary-foreground"
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
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center gap-2 text-primary">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">View Project</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.client}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary hover:text-primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
