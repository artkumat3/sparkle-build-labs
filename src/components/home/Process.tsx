import SectionHeading from "@/components/shared/SectionHeading";
import { processSteps } from "@/data/site";

const Process = () => (
  <section className="border-y border-border/60 bg-card/40 py-20" aria-labelledby="process-heading">
    <div className="container">
      <SectionHeading
        kicker="Process"
        title="How we will work together"
      />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s) => (
          <li key={s.step} className="editorial-card p-6">
            <p className="font-display text-3xl font-semibold text-primary">{s.step}</p>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
