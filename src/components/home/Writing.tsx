import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { articles } from "@/data/writing";

const Writing = () => (
  <section className="container py-20" aria-labelledby="writing-heading">
    <SectionHeading
      kicker="Writing"
      title="Notes and articles"
      description="Longer case studies and notes on building software for small towns."
    />
    <ul className="divide-y divide-border/60 border-y border-border/60">
      {articles.map((a) => (
        <li key={a.title}>
          {a.url ? (
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 py-5"
            >
              <div>
                <p className="font-medium text-foreground group-hover:text-primary">{a.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.excerpt}</p>
              </div>
              <span className="mt-1 flex shrink-0 items-center gap-2 font-mono text-xs text-muted-foreground">
                {a.publishedDate}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          ) : (
            <div className="flex items-start justify-between gap-4 py-5 opacity-70">
              <div>
                <p className="font-medium text-foreground">{a.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.excerpt}</p>
              </div>
              <span className="mt-1 shrink-0 font-mono text-xs text-muted-foreground">
                Coming soon
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
    <Link
      to="/notes"
      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
    >
      All notes <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  </section>
);

export default Writing;
