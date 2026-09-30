import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/data/site";

const Services = () => (
  <section className="container py-20" aria-labelledby="services-heading">
    <SectionHeading
      kicker="Services"
      title="What I can build for you"
      description="Good software need not be complicated. It needs to solve one real problem, well."
    />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <div key={s.title} className="editorial-card p-6">
          <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
