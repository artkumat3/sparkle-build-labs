import { useState, useEffect, useMemo } from "react";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
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
  const [activeFilter, setActiveFilter] = useState<string>("All");

  useEffect(() => {
    const fetch = async () => {
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
    fetch();
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
    <section id="projects" className="py-24 md:py-32 relative scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-10 md:mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em]">
              Selected Work
            </span>
          </div>
          <h2 className="font-italic-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-5">
            Real products. <span className="text-muted-foreground">Real outcomes.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Shipped projects — each solving a real problem, not a tutorial. Filter by category or tap any card for the full case study.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 md:mb-14">
          {filters.map((f) => {
            const active = activeFilter === f;
            const count = f === "All" ? list.length : list.filter((p) => (p.category || "").toLowerCase().includes(f.toLowerCase())).length;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-pressed={active}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-[0.18em] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)]"
                    : "bg-secondary/40 text-muted-foreground border-border/50 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {f}
                <span className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded-full ${active ? "bg-primary-foreground/15" : "bg-background/60"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.05} featured={i === 0 && filtered.length > 2} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  delay,
  featured,
}: {
  project: Project;
  delay: number;
  featured?: boolean;
}) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative ${featured ? "md:col-span-2" : ""}`}
    >
      <Link
        to={`/projects/${project.id}`}
        aria-label={`Open ${project.title} case study`}
        className="block h-full rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.4)] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className={`grid ${featured ? "grid-cols-1 lg:grid-cols-12" : "grid-cols-1"} h-full`}>
          {/* Visual */}
          <div className={`${featured ? "lg:col-span-7" : ""} relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-secondary/60 via-card to-background border-b lg:border-b-0 lg:border-r border-border/40`}>
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.18),transparent_60%)]" />
            {project.image_url ? (
              <img src={project.image_url} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            ) : project.logo ? (
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <img src={project.logo} alt={`${project.title} logo`} loading="lazy" className="max-h-[55%] max-w-[55%] object-contain drop-shadow-[0_12px_40px_hsl(var(--primary)/0.4)] transition-transform duration-700 group-hover:scale-105" />
              </div>
            ) : null}

            {project.year && (
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border/50">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.18em]">{project.year}</span>
              </div>
            )}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/70 backdrop-blur-md border border-border/50 inline-flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Content */}
          <div className={`${featured ? "lg:col-span-5" : ""} p-6 md:p-7 flex flex-col`}>
            <p className="text-[10px] font-medium text-primary uppercase tracking-[0.22em] mb-3">{project.category}</p>
            <h3 className="font-italic-display text-2xl md:text-3xl tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-5 line-clamp-3">{project.summary}</p>

            {featured && project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-5 p-3 rounded-2xl bg-secondary/40 border border-border/40">
                {project.metrics.slice(0, 3).map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display text-base md:text-lg font-bold text-foreground">{m.value}</p>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.slice(0, featured ? 6 : 4).map((t) => (
                <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40 text-muted-foreground uppercase tracking-wider font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-auto pt-2" onClick={(e) => e.stopPropagation()}>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider group-hover:bg-primary/90 transition-colors">
                Case study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/60 bg-background/40 text-foreground text-xs font-medium uppercase tracking-wider hover:border-primary/50 hover:text-primary transition-colors"
                >
                  Live <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/60 bg-background/40 text-foreground text-xs font-medium uppercase tracking-wider hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label="GitHub repo"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default Projects;
