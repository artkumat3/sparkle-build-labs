import { useState, useEffect, useMemo } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import logoUnmask from "@/assets/logo-unmask.png";
import logoMauCare from "@/assets/logo-maucare.png";
import logoBrainX from "@/assets/logo-brainx.png";

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image_url: string | null;
  dark_image_url: string | null;
  category: string;
  tags: string[];
  features: string[];
  metrics: { value: string; label: string }[];
  live_url?: string;
  github_url?: string;
  logo?: string;
  year?: string;
  created_at: string;
}

const defaults: Project[] = [
  {
    id: "unmask",
    title: "UnMask",
    summary: "AI-powered transparency layer for misleading coaching-institute ads.",
    description:
      "Detects duplicated topper claims across coaching ads by combining OCR, LLM extraction, and pgvector similarity — then auto-generates evidence packs ready for consumer-court complaints.",
    image_url: null, dark_image_url: null,
    category: "AI · Civic Tech",
    year: "2026",
    tags: ["React", "Supabase", "OpenAI", "pgvector", "Tailwind"],
    features: ["OCR + LLM extraction pipeline", "Cross-institute conflict detection", "Auto-generated evidence PDFs", "RLS-scoped per-user storage"],
    metrics: [{ value: "500+", label: "Ads scanned" }, { value: "12", label: "Conflicts surfaced" }, { value: "<5s", label: "Per-ad processing" }],
    live_url: "https://un-mask.vercel.app/",
    logo: logoUnmask,
    created_at: "2026-01-01",
  },
  {
    id: "mau-care",
    title: "Mau Care",
    summary: "Booking and records platform built for single-doctor clinics in Mau, UP.",
    description:
      "Replaces paper registers with phone-OTP auth, slot-locked bookings, and a unified patient timeline. Built end-to-end after on-ground interviews with two local clinics.",
    image_url: null, dark_image_url: null,
    category: "Web App · Healthcare",
    year: "2025",
    tags: ["Next.js", "Supabase", "Razorpay", "TypeScript", "RLS"],
    features: ["Phone-OTP patient auth", "Postgres-locked slot booking", "Offline-tolerant intake forms", "Role-based clinic dashboards"],
    metrics: [{ value: "~70%", label: "Less paper time" }, { value: "200+", label: "Pilot bookings" }, { value: "0", label: "Double-bookings" }],
    live_url: "https://maucare26.vercel.app",
    logo: logoMauCare,
    created_at: "2025-09-01",
  },
  {
    id: "brainx",
    title: "BrainX",
    summary: "CBSE-aligned AI test platform with verified question generation and analytics.",
    description:
      "Generates and verifies CBSE Class 10 MCQs through a two-pass LLM pipeline, streams test sessions stateful-ly, and rolls up per-topic accuracy into a weak-area heatmap.",
    image_url: null, dark_image_url: null,
    category: "EdTech · AI",
    year: "2025",
    tags: ["Next.js", "FastAPI", "OpenAI", "LangChain", "Redis"],
    features: ["Blueprint-validated question generation", "Two-pass answer verification", "Cached generations (60% cost cut)", "Topic-level weak-area heatmap"],
    metrics: [{ value: "1k+", label: "Questions verified" }, { value: "60%", label: "LLM cost cut" }, { value: "<800ms", label: "Render time" }],
    logo: logoBrainX,
    created_at: "2025-06-01",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "All";
  const setActiveFilter = (f: string) => {
    const next = new URLSearchParams(searchParams);
    if (f === "All") next.delete("filter");
    else next.set("filter", f);
    setSearchParams(next, { replace: true });
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
      if (data && data.length > 0) {
        const hydrated = (data as any[]).map((p) => {
          const fallback = defaults.find((d) => d.id === p.id || d.title.toLowerCase() === (p.title || "").toLowerCase());
          return {
            ...p,
            summary: p.summary || fallback?.summary || p.description,
            features: (p.features && p.features.length > 0) ? p.features : (fallback?.features ?? []),
            metrics: (p.metrics && p.metrics.length > 0) ? p.metrics : (fallback?.metrics ?? []),
            year: p.year || fallback?.year,
            live_url: p.live_url || fallback?.live_url,
            github_url: p.github_url || fallback?.github_url,
            logo: p.logo_url || fallback?.logo,
          };
        });
        setProjects(hydrated);
      }
    };
    fetchProjects();
  }, []);

  const list = projects.length > 0 ? projects : defaults;

  const filters = useMemo(() => {
    const buckets = new Set<string>();
    list.forEach((p) => {
      const first = (p.category || "").split("·")[0]?.trim();
      if (first) buckets.add(first);
    });
    return ["All", ...Array.from(buckets)];
  }, [list]);

  const filtered = activeFilter === "All"
    ? list
    : list.filter((p) => (p.category || "").toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="edition py-20 md:py-28 scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <h2 className="font-display text-5xl md:text-7xl text-foreground">
          Selected <span className="italic text-primary">Works</span>
        </h2>
        <div className="hidden md:block h-px flex-1 mx-8 bg-border" />
        <p className="text-xs font-mono text-muted-foreground">
          {String(filtered.length).padStart(3, "0")} projects
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-6 pb-8 mb-14 border-b border-border">
        {filters.map((f) => {
          const active = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-pressed={active}
              className={`text-[11px] uppercase tracking-[0.24em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background ${
                active
                  ? "text-primary underline underline-offset-8 decoration-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16">No projects in this category yet.</p>
      )}
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const stagger = index % 3 === 1 ? "md:mt-16" : index % 3 === 2 ? "lg:mt-8" : "";
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group ${stagger}`}
    >
      <Link
        to={`/projects/${project.id}`}
        aria-label={`Open ${project.title} case study`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <div className="plate aspect-[4/5] mb-6 flex items-center justify-center transition-colors duration-500 group-hover:border-primary/60">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          {project.logo && !logoFailed ? (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              onError={() => setLogoFailed(true)}
              className="relative w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <span className="relative font-display text-6xl text-primary/70 transition-transform duration-500 group-hover:scale-105">
              {project.title.charAt(0)}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between bg-gradient-to-t from-background to-transparent">
            <span className="text-[10px] uppercase tracking-[0.24em] text-primary">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">{project.year}</span>
          </div>
        </div>

        <h3 className="font-display text-3xl text-foreground hover-italic mb-2 flex items-center gap-2">
          {project.title}
          <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-5">
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Live
          </a>
        )}
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors"
          >
            <Github className="w-3.5 h-3.5" /> Code
          </a>
        )}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
        >
          Case study
        </Link>
      </div>
    </motion.article>
  );
};

export default Projects;
