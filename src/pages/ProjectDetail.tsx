import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

interface DbProject {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  dark_image_url: string | null;
  category: string;
  tags: string[];
  created_at: string;
}

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const ProjectDetail = () => {
  const { id } = useParams();
  const { resolvedTheme } = useTheme();

  const staticCase: CaseStudy | undefined = id ? caseStudies[id] : undefined;

  const [dbProject, setDbProject] = useState<DbProject | null>(null);
  const [loading, setLoading] = useState(!staticCase);

  useEffect(() => {
    if (staticCase || !id || !UUID_RE.test(id)) {
      setLoading(false);
      return;
    }
    (async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      setDbProject(data as unknown as DbProject);
      setLoading(false);
    })();
  }, [id, staticCase]);

  useEffect(() => {
    const title = staticCase?.title ?? dbProject?.title;
    if (title) document.title = `${title} — Aryan Gupta`;
  }, [staticCase, dbProject]);

  const cover =
    staticCase?.cover ??
    (resolvedTheme === "dark" && dbProject?.dark_image_url
      ? dbProject.dark_image_url
      : dbProject?.image_url ?? undefined);

  const notFound = !loading && !staticCase && !dbProject;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 pt-32 pb-24 max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>

        {loading && (
          <div className="space-y-6 animate-pulse">
            <div className="h-10 w-2/3 bg-secondary rounded" />
            <div className="h-4 w-1/3 bg-secondary rounded" />
            <div className="h-80 w-full bg-secondary rounded-2xl" />
          </div>
        )}

        {notFound && (
          <div className="text-center py-20">
            <h1 className="text-2xl font-semibold text-foreground mb-3">
              Project not found
            </h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/#projects" className="text-primary hover:underline">
              Browse all projects
            </Link>
          </div>
        )}

        {staticCase && (
          <CaseStudyView cs={staticCase} cover={cover} />
        )}

        {!staticCase && dbProject && (
          <DbProjectView p={dbProject} cover={cover} />
        )}
      </main>
      <Footer />
    </div>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
    {children}
  </h2>
);

const CaseStudyView = ({
  cs,
  cover,
}: {
  cs: CaseStudy;
  cover?: string;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-6">
      <span className="px-3 py-1 rounded-full border border-border">
        {cs.category}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="w-3.5 h-3.5" />
        {cs.year}
      </span>
    </div>

    <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
      {cs.title}
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
      {cs.tagline}
    </p>

    {cover && (
      <div className="rounded-2xl overflow-hidden border border-border mb-16 bg-secondary">
        <img src={cover} alt={cs.title} className="w-full h-auto object-cover" />
      </div>
    )}

    {/* Outcomes — surfaced high */}
    <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
      {cs.outcomes.map((o) => (
        <div
          key={o.label}
          className="p-5 md:p-6 rounded-2xl border border-border/50 text-center"
        >
          <p className="text-2xl md:text-4xl font-bold text-foreground">
            {o.metric}
          </p>
          <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mt-2">
            {o.label}
          </p>
        </div>
      ))}
    </div>

    <section className="mb-12">
      <SectionHeading>Problem</SectionHeading>
      <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
        {cs.problem}
      </p>
    </section>

    <section className="mb-12">
      <SectionHeading>My role</SectionHeading>
      <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
        {cs.role}
      </p>
    </section>

    <section className="mb-12">
      <SectionHeading>Tech stack</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-px bg-border/50 border border-border/50 rounded-2xl overflow-hidden">
        {cs.stack.map((col) => (
          <div key={col.group} className="bg-background p-6 space-y-3">
            <p className="text-xs font-medium text-primary uppercase tracking-widest">
              {col.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {col.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-12">
      <SectionHeading>Architecture</SectionHeading>
      <ul className="space-y-3">
        {cs.architecture.map((point, i) => (
          <li
            key={i}
            className="flex gap-4 text-base md:text-lg text-foreground/80 leading-relaxed"
          >
            <span className="text-primary mt-1 select-none">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="mb-12">
      <SectionHeading>Challenges</SectionHeading>
      <div className="space-y-6">
        {cs.challenges.map((c) => (
          <div
            key={c.title}
            className="p-6 rounded-2xl border border-border/50"
          >
            <h3 className="text-base font-semibold text-foreground mb-2">
              {c.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>

    {cs.links && cs.links.length > 0 && (
      <section className="mb-12">
        <SectionHeading>Links</SectionHeading>
        <div className="flex flex-wrap gap-3">
          {cs.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              {l.label} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </section>
    )}

    <div className="mt-16 pt-10 border-t border-border">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Tag className="w-4 h-4" /> Tags
      </div>
      <div className="flex flex-wrap gap-2">
        {cs.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const DbProjectView = ({
  p,
  cover,
}: {
  p: DbProject;
  cover?: string;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-6">
      <span className="px-3 py-1 rounded-full border border-border">
        {p.category}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="w-3.5 h-3.5" />
        {new Date(p.created_at).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </div>

    <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
      {p.title}
    </h1>

    {cover && (
      <div className="rounded-2xl overflow-hidden border border-border mb-12 bg-secondary">
        <img src={cover} alt={p.title} className="w-full h-auto object-cover" />
      </div>
    )}

    <div className="prose max-w-none">
      {p.description.split("\n").map((para, i) => (
        <p
          key={i}
          className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6"
        >
          {para}
        </p>
      ))}
    </div>

    {p.tags?.length > 0 && (
      <div className="mt-16 pt-10 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Tag className="w-4 h-4" /> Tags
        </div>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </motion.article>
);

export default ProjectDetail;
