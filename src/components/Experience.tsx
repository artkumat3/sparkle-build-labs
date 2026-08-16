import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROCBSE_LOGO = "https://i.ibb.co/2bM6Q4W/procbse-logo.png";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  logo: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PROCBSE",
    role: "Technical Head",
    period: "Aug 2025 — Mar 2026",
    location: "Remote · India",
    url: "https://procbse.com",
    logo: PROCBSE_LOGO,
    summary:
      "Led the technical org behind a low-cost, high-yield exam-prep platform serving 50,000+ CBSE Class 10 & 12 students across India.",
    highlights: [
      "Owned the web platform end-to-end — Next.js storefront, checkout, and digital delivery for e-books and hardcopy bundles.",
      "Shipped the “99 Guaranteed Questions” product flow, distilling a decade of past board papers into purchasable bundles.",
      "Integrated Instagram, Telegram and YouTube funnels with the site to convert social traffic into paid customers.",
      "Set up analytics, RLS-secured data, and a content pipeline used by topper-note creators and subject teams.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Vercel", "Razorpay"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="edition py-20 md:py-28 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="kicker mb-4">Experience</h2>
          <div className="rule" />
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Roles where I owned product engineering — from the database up to
            what the user actually sees.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-border">
          {experiences.map((exp, i) => {
            const Tag: any = exp.url ? "a" : "div";
            const props = exp.url
              ? {
                  href: exp.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `${exp.role} at ${exp.company} — opens in a new tab`,
                }
              : {};
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="first:pt-0 py-10"
              >
                <Tag
                  {...props}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 shrink-0 border border-border bg-background p-1.5 flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-mono text-foreground/80 mb-2">
                        {exp.period} · {exp.location}
                      </p>
                      <h3 className="display-xl text-2xl md:text-3xl text-foreground hover-italic inline-flex items-center gap-2">
                        {exp.company} {exp.role}
                        {exp.url && (
                          <ArrowUpRight className="w-5 h-5 text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </h3>
                      <p className="mt-4 text-foreground/70 leading-relaxed max-w-xl">
                        {exp.summary}
                      </p>
                      <ul className="mt-6 space-y-3 max-w-xl">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                            <span className="text-foreground/80 mt-0.5">—</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.stack.map((s) => (
                          <span key={s} className="chip">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
