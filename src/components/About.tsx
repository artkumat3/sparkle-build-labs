import { motion } from "framer-motion";
import { Code2, Database, Bot, Cloud } from "lucide-react";

const skillGroups = [
  { icon: Code2, label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: Database, label: "Backend", items: ["Python", "FastAPI", "Supabase", "Postgres"] },
  { icon: Bot, label: "AI", items: ["OpenAI", "LangChain", "pgvector", "OCR"] },
  { icon: Cloud, label: "Infra", items: ["Vercel", "Docker", "Edge Fns", "Resend"] },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium text-primary uppercase tracking-[0.25em] mb-5">About</h2>
          <p className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            I ship full-stack apps and{" "}
            <span className="text-gradient">AI automations</span> that remove the boring work.
          </p>
        </motion.div>

        {/* Bento */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(100px,auto)]">
          {/* Story */}
          <motion.div
            className="bento col-span-1 md:col-span-6 lg:col-span-7 lg:row-span-2 p-8 md:p-10 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Story</p>
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
              I'm a full-stack developer based in Mau, Uttar Pradesh. I build production web apps and AI-powered automations for small businesses, clinics, and early-stage startups — the kind of work that replaces spreadsheets, paper registers, and copy-paste workflows.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Recent things I've shipped: an OCR + LLM platform that audits coaching-institute ads (<span className="text-foreground font-medium">UnMask</span>), a clinic booking + records system for a tier-3 town (<span className="text-foreground font-medium">Mau Care</span>), and a CBSE-aligned AI test generator (<span className="text-foreground font-medium">BrainX</span>).
            </p>
          </motion.div>

          {/* Location + Status stacked */}
          <motion.div
            className="bento col-span-1 md:col-span-3 lg:col-span-5 p-8 flex flex-col justify-between min-h-[180px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Currently</p>
            <p className="font-display text-2xl md:text-3xl font-semibold leading-snug">
              Open to <span className="text-primary">internships</span>, contract work, and full-time roles.
            </p>
          </motion.div>

          <motion.div
            className="bento col-span-1 md:col-span-3 lg:col-span-5 p-8 flex flex-col justify-between min-h-[180px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Approach</p>
            <p className="text-base md:text-lg text-foreground/85 leading-snug">
              Ship the smallest thing that proves the idea — in production, in days. AI is a tool, not the pitch.
            </p>
          </motion.div>

          {/* Skill quadrants */}
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              className="bento col-span-1 md:col-span-3 lg:col-span-3 p-6 space-y-4 min-h-[160px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <g.icon className="w-5 h-5 text-primary" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{g.label}</span>
              </div>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
