import { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
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
    features: [
      "OCR + LLM extraction pipeline",
      "Cross-institute conflict detection",
      "Auto-generated evidence PDFs",
      "RLS-scoped per-user storage",
    ],
    metrics: [
      { value: "500+", label: "Ads scanned" },
      { value: "12", label: "Conflicts surfaced" },
      { value: "<5s", label: "Per-ad processing" },
    ],
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
    features: [
      "Phone-OTP patient auth",
      "Postgres-locked slot booking",
      "Offline-tolerant intake forms",
      "Role-based clinic dashboards",
    ],
    metrics: [
      { value: "~70%", label: "Less paper time" },
      { value: "200+", label: "Pilot bookings" },
      { value: "0", label: "Double-bookings" },
    ],
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
    features: [
      "Blueprint-validated question generation",
      "Two-pass answer verification",
      "Cached generations (60% cost cut)",
      "Topic-level weak-area heatmap",
    ],
    metrics: [
      { value: "1k+", label: "Questions verified" },
      { value: "60%", label: "LLM cost cut" },
      { value: "<800ms", label: "Render time" },
    ],
    logo: logoBrainX,
    created_at: "2025-06-01",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
      if (data && data.length > 0) {
        // Hydrate db projects with defaults for missing fields
        const hydrated = (data as any[]).map((p) => {
          const fallback = defaults.find((d) => d.id === p.id);
          return { ...fallback, ...p, features: p.features ?? fallback?.features ?? [], metrics: p.metrics ?? fallback?.metrics ?? [], summary: p.summary ?? fallback?.summary ?? p.description };
        });
        setProjects(hydrated);
      }
    };
    fetch();
  }, []);

  const list = projects.length > 0 ? projects : defaults;

  const getImg = (p: Project) =>
    resolvedTheme === "dark" && p.dark_image_url ? p.dark_image_url : p.image_url;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-20 max-w-3xl"
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
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
            Real products. <br />
            <span className="text-muted-foreground">Real outcomes.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Three shipped projects — each solving a real problem, not a tutorial. Tap any card for the full case study.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="space-y-8 md:space-y-12">
          {list.map((p, i) => (
            <ProjectCard key={p.id} project={p} img={getImg(p)} reverse={i % 2 === 1} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  img,
  reverse,
  delay,
}: {
  project: Project;
  img: string | null;
  reverse?: boolean;
  delay: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="relative rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden hover:border-primary/40 transition-all duration-500">
        {/* Ambient glow */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Visual side */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] overflow-hidden bg-gradient-to-br from-secondary/60 via-card to-background border-b lg:border-b-0 lg:border-r border-border/40">
            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-40" />
            {/* Radial highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.18),transparent_60%)]" />

            {img ? (
              <img
                src={img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : project.logo ? (
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="max-h-[55%] max-w-[55%] object-contain drop-shadow-[0_12px_40px_hsl(var(--primary)/0.4)] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : null}

            {/* Year badge */}
            {project.year && (
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border/50">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.18em]">
                  {project.year}
                </span>
              </div>
            )}
          </div>

          {/* Content side */}
          <div className="lg:col-span-5 p-7 md:p-9 flex flex-col">
            {/* Category */}
            <p className="text-[10px] font-medium text-primary uppercase tracking-[0.22em] mb-4">
              {project.category}
            </p>

            {/* Title */}
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            {/* Summary */}
            <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed mb-4 font-medium">
              {project.summary}
            </p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {project.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/75">
                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-secondary/40 border border-border/40">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display text-lg md:text-xl font-bold text-foreground">{m.value}</p>
                    <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider mt-1 leading-tight">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 mb-7">
              {project.tags.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40 text-muted-foreground uppercase tracking-wider font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 mt-auto pt-2">
              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                Case study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/60 bg-background/40 text-foreground text-xs font-medium uppercase tracking-wider hover:border-primary/50 hover:text-primary transition-colors"
                >
                  Live demo
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/60 bg-background/40 text-foreground text-xs font-medium uppercase tracking-wider hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
