import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/site";

// Renders nothing until genuine quotes with permission are supplied.
const TestimonialsSection = () => {
  if (testimonials.length === 0) return null;
  return (
    <section className="container py-20" aria-labelledby="testimonials-heading">
      <SectionHeading kicker="Kind words" title="What people say" />
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="editorial-card p-6">
            <blockquote className="leading-relaxed text-foreground">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t.name}</span> · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
