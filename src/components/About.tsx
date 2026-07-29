import { motion } from "framer-motion";

const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend", items: ["Python", "FastAPI", "Supabase", "Postgres"] },
  { label: "AI", items: ["OpenAI", "LangChain", "pgvector", "OCR"] },
  { label: "Infra", items: ["Vercel", "Docker", "Edge Fns", "Resend"] },
];

const About = () => {
  return (
    <section id="about" className="edition py-20 md:py-28 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="kicker mb-4">About</h2>
          <div className="rule" />
        </div>

        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground mb-8"
          >
            I ship full-stack apps and{" "}
            <span className="italic text-primary">AI automations</span> that
            remove the boring work.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <p className="text-foreground/70 leading-relaxed">
              Based in Mau, Uttar Pradesh, I build production software for small
              businesses, clinics and early-stage startups. Most of my work
              starts on the ground — watching how a register, a WhatsApp thread
              or a spreadsheet is actually used — and ends as something live.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              My approach: ship the smallest thing that proves the idea, in
              production, in days. AI is a tool inside the product, never the
              pitch. Open to internships, contract work and full-time roles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-background p-6 hover:bg-secondary/50 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary mb-4">
                  {g.label}
                </p>
                <ul className="space-y-1.5">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
