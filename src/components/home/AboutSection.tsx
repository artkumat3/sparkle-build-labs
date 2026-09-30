import SectionHeading from "@/components/shared/SectionHeading";
import NowBoard from "./NowBoard";

const AboutSection = () => (
  <section className="container py-20" aria-labelledby="about-heading">
    <SectionHeading
      kicker="About"
      title="Built in Purvanchal, for the real world."
    />
    <div className="grid gap-4 md:grid-cols-3">
      <div className="editorial-card p-6 md:col-span-2">
        <p className="leading-relaxed text-muted-foreground">
          I grew up in Mau, a small town in Purvanchal, Uttar Pradesh. Here,
          most shops and clinics still run on paper registers. Appointments are
          written by hand. Records live in files. Follow-ups happen over phone
          calls — when they happen at all.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          I build software that changes this, gently. Not complicated systems
          that need training manuals — simple tools that a first-time
          smartphone user can finish without help. Clear design, fair pricing,
          and support that does not disappear after launch.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          I am open to internships, freelance work and full-time roles. If you
          have a problem worth solving, I would like to hear about it.
        </p>
      </div>
      <NowBoard />
    </div>
  </section>
);

export default AboutSection;
