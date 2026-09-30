import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import StatusBadge from "@/components/shared/StatusBadge";
import ProjectLinks from "@/components/shared/ProjectLinks";
import { projects } from "@/data/projects";

const SelectedWork = () => (
  <section id="work" className="container scroll-mt-20 py-20" aria-labelledby="work-heading">
    <SectionHeading
      kicker="Selected Work"
      title="From register to software"
      description="Three projects, each built to replace a manual way of working with a simpler digital one."
    />
    <div className="space-y-8">
      {projects.map((p) => (
        <article key={p.slug} className="editorial-card grid gap-0 md:grid-cols-5">
          <Link
            to={`/work/${p.slug}`}
            className="block overflow-hidden border-b border-border/60 md:col-span-2 md:border-b-0 md:border-r"
            aria-label={`Read the ${p.title} case study`}
          >
            <img
              src={p.coverImage}
              alt={`${p.title} — cover screenshot`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </Link>
          <div className="flex flex-col gap-4 p-6 md:col-span-3 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={p.status} />
              <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                <Link to={`/work/${p.slug}`} className="hover:text-primary">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-1 text-muted-foreground">{p.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
              <ProjectLinks project={p} />
              <Link
                to={`/work/${p.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Case study <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SelectedWork;
