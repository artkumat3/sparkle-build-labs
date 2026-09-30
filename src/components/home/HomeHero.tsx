import { site } from "@/data/site";
import BuiltInMauBadge from "@/components/shared/BuiltInMauBadge";

const HomeHero = () => (
  <section className="container py-20 md:py-28">
    <div className="max-w-3xl space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/50 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {site.availability}
        </span>
        <BuiltInMauBadge />
      </div>

      <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
        Aryan Gupta
      </h1>

      <p className="text-xl leading-relaxed text-foreground md:text-2xl">
        Full-stack developer and AI automation engineer from Mau, Uttar Pradesh.
      </p>

      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        I build simple, useful software for clinics, students and small
        businesses, so the register, the spreadsheet and the endless phone
        calls can finally rest.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#work"
          className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Let's talk
        </a>
      </div>
    </div>
  </section>
);

export default HomeHero;
