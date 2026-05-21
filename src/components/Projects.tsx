import { useState, useEffect } from "react";
import { ArrowUpRight, Bot, Shield, Sparkles, Code, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import logoUnmask from "@/assets/logo-unmask.png";
import logoMauCare from "@/assets/logo-maucare.png";
import logoBrainX from "@/assets/logo-brainx.png";

const liveLinks: Record<string, string> = {
  unmask: "https://un-mask.vercel.app/",
  "mau-care": "https://maucare26.vercel.app",
};

const logoMap: Record<string, string> = {
  unmask: logoUnmask,
  "mau-care": logoMauCare,
  brainx: logoBrainX,
};

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
  AI: Bot,
  "Web Development": Code,
  Automation: Sparkles,
  default: Shield,
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
      if (data) setProjects(data as unknown as Project[]);
    };
    fetch();
  }, []);

  const defaults: Project[] = [
    {
      id: "unmask",
      title: "UnMask",
      description: "AI platform that detects misleading coaching-institute ads by analyzing topper claims and surfacing conflicts across institutes.",
      image_url: null, dark_image_url: null,
      category: "AI", tags: ["AI", "OCR", "Supabase"], created_at: "2026-01-01",
    },
    {
      id: "mau-care",
      title: "Mau Care",
      description: "Booking + records platform for small clinics in Mau (UP). Phone-OTP auth, slot locking, offline-tolerant intake.",
      image_url: null, dark_image_url: null,
      category: "Web Development", tags: ["Next.js", "Supabase", "Healthcare"], created_at: "2025-09-01",
    },
    {
      id: "brainx",
      title: "BrainX",
      description: "CBSE-aligned AI test platform with verified question generation, instant evaluation, and topic-level analytics.",
      image_url: null, dark_image_url: null,
      category: "AI", tags: ["AI", "EdTech", "FastAPI"], created_at: "2025-06-01",
    },
  ];

  const list = projects.length > 0 ? projects : defaults;
  const getImg = (p: Project) =>
    resolvedTheme === "dark" && p.dark_image_url ? p.dark_image_url : p.image_url;

  // Featured + rest
  const [featured, ...rest] = list;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-12 flex items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <h2 className="text-xs font-medium text-primary uppercase tracking-[0.25em] mb-5">Selected Work</h2>
            <p className="font-display text-3xl md:text-5xl font-bold tracking-tight">Featured projects.</p>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
            A small sample of recent shipped work — click any tile for the full case study.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
          {/* Featured large */}
          {featured && (
            <ProjectTile project={featured} img={getImg(featured)} icon={iconMap[featured.category] || iconMap.default} large delay={0} />
          )}

          {/* Two smaller */}
          {rest.slice(0, 2).map((p, i) => (
            <ProjectTile key={p.id} project={p} img={getImg(p)} icon={iconMap[p.category] || iconMap.default} delay={0.1 + i * 0.1} />
          ))}

          {/* Rest if any */}
          {rest.slice(2).map((p, i) => (
            <ProjectTile key={p.id} project={p} img={getImg(p)} icon={iconMap[p.category] || iconMap.default} delay={0.3 + i * 0.1} medium />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectTile = ({
  project,
  img,
  icon: Icon,
  large,
  medium,
  delay,
}: {
  project: Project;
  img: string | null;
  icon: any;
  large?: boolean;
  medium?: boolean;
  delay: number;
}) => {
  const span = large
    ? "md:col-span-6 md:row-span-2 min-h-[440px]"
    : medium
    ? "md:col-span-3 min-h-[280px]"
    : "md:col-span-3 min-h-[320px]";

  return (
    <motion.div
      className={`${span} col-span-1`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={`/projects/${project.id}`} className="bento h-full group flex flex-col overflow-hidden">
        {/* Image / logo area */}
        <div className="relative flex-1 min-h-[160px] overflow-hidden bg-gradient-to-br from-secondary/40 via-card to-background grid-pattern">
          {img ? (
            <img
              src={img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : logoMap[project.id] ? (
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img
                src={logoMap[project.id]}
                alt={`${project.title} logo`}
                className="max-h-[70%] max-w-[70%] object-contain drop-shadow-[0_8px_30px_hsl(var(--primary)/0.35)] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-12 h-12 text-primary/60" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/95 to-transparent" />
        </div>

        {/* Meta */}
        <div className="p-6 md:p-7 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </div>
          <p className={`text-sm text-muted-foreground leading-relaxed ${large ? "" : "line-clamp-2"}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/70 border border-border/40 text-muted-foreground uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            {liveLinks[project.id] && (
              <a
                href={liveLinks[project.id]}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-primary hover:text-primary/80 font-medium"
              >
                Visit live <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Projects;
