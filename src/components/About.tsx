import SectionHead from "@/components/atelier/SectionHead";

const matrix = [
  { k: "Geographic Base", v: "Mau, Uttar Pradesh (IST / UTC+5:30)" },
  { k: "Execution Cycle", v: "Concept to Production in Days" },
  { k: "Reliability Standard", v: "99.9% Uptime with Row-Level Security" },
];

const About = () => (
  <section id="about" className="edition py-28 md:py-40 scroll-mt-16">
    <SectionHead no="02" label="The Editorial Prologue" title="Distance from reality is the real bug." />
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
      <blockquote className="lg:col-span-6 font-serif italic font-light text-2xl md:text-3xl leading-snug text-foreground/90 border-l border-primary pl-6">
        “Most software fails not in its algorithms, but in its distance from reality. I build where the register sits,
        where the WhatsApp chat breaks, and where the human needs an answer in milliseconds.”
      </blockquote>
      <div className="lg:col-span-6 space-y-6 text-muted-foreground">
        <p>
          I work from Mau, Uttar Pradesh, building digital systems for clinics, regional businesses and early startups.
          Every project begins on the ground — studying the physical ledger, the messy chat thread, the manual bottleneck
          that quietly eats hours every day.
        </p>
        <p>
          Then I ship the minimal viable slice straight to production, in days rather than quarters. AI is functional
          plumbing inside the system — never the marketing pitch.
        </p>
      </div>
    </div>
    <dl className="mt-20 grid md:grid-cols-3 border-t border-border">
      {matrix.map((m) => (
        <div key={m.k} className="py-8 md:pr-8 border-b md:border-b-0 md:border-r last:border-r-0 border-border md:pl-8 first:md:pl-0">
          <dt className="meta text-primary mb-3">{m.k}</dt>
          <dd className="text-foreground">{m.v}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default About;
