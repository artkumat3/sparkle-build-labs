import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar, MapPin } from "lucide-react";
import procbseLogo from "@/assets/procbse-logo.png.asset.json";
import hustlersLogo from "@/assets/hustlers-logo.png.asset.json";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  logo: string;
  logoBg?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Hustlers",
    role: "Founder",
    period: "May 2026 — Present",
    location: "Mau, Uttar Pradesh · India",
    logo: hustlersLogo.url,
    logoBg: "bg-white",
    summary:
      "Building Hustlers — a community and product studio for India's next wave of student builders, makers, and side-hustlers. Hustle starts here.",
    highlights: [
      "Founded the brand, identity, and go-to-market from zero — including web presence and community channels.",
      "Curating cohorts, resources, and tooling that help students ship real products instead of theory.",
      "Owning everything end-to-end: product, engineering, content, and growth.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Vercel"],
  },
  {
    company: "PROCBSE",
    role: "Technical Head",
    period: "Aug 2025 — Mar 2026",
    location: "Remote · India",
    url: "https://procbse.com",
    logo: procbseLogo.url,
    logoBg: "bg-black",
    summary:
      "Led the technical org behind a low-cost, high-yield exam-prep platform serving 50,000+ CBSE Class 10 & 12 students across India.",
    highlights: [
      "Owned the web platform end-to-end — Next.js storefront, checkout, and digital delivery for E-books and hardcopy bundles.",
      "Shipped the “99 Guaranteed Questions” product flow, distilling a decade of past board papers into purchasable bundles.",
      "Integrated Instagram, Telegram and YouTube funnels with the site to convert social traffic into paid customers.",
      "Set up analytics, RLS-secured data, and a content pipeline used by topper-note creators and subject teams.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Vercel", "Razorpay"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative border-t border-border/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-12 md:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-sm">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em]">
              Experience
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
            Where I've{" "}
            <span className="font-italic-display font-normal text-primary">shipped</span>.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Roles where I owned product engineering — from the database up to
            what the user actually sees.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 md:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, i) => {
              const CardTag: any = exp.url ? "a" : "div";
              const cardProps = exp.url
                ? { href: exp.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <motion.article
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-14 sm:pl-16 md:pl-24"
                >
                  {/* Logo node */}
                  <div
                    className={`absolute left-0 top-1 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl border border-border/60 ${exp.logoBg ?? "bg-background/80"} backdrop-blur-md shadow-[0_8px_24px_-12px_hsl(var(--primary)/0.4)] overflow-hidden flex items-center justify-center p-1.5 z-10`}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <CardTag
                    {...cardProps}
                    {...(exp.url
                      ? {
                          "aria-label": `${exp.role} at ${exp.company} — opens ${exp.company} in a new tab`,
                        }
                      : {})}
                    className={`block rounded-3xl border border-border/60 bg-card/60 backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      exp.url
                        ? "hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.4)] focus-visible:border-primary/50 cursor-pointer"
                        : "hover:border-primary/40"
                    }`}
                  >
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground truncate max-w-full">
                            {exp.role}
                          </h3>
                          <span className="text-muted-foreground">·</span>
                          <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:underline underline-offset-4 decoration-primary/40 truncate max-w-full">
                            <span className="truncate">{exp.company}</span>
                            {exp.url && (
                              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
                            )}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" /> {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm md:text-[15px] text-foreground/85 leading-relaxed mb-5">
                      {exp.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border/40">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40 text-muted-foreground uppercase tracking-wider font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </CardTag>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
