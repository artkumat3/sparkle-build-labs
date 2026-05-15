import { motion } from "framer-motion";
import { Rocket, Workflow, Layers } from "lucide-react";

const stack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "FastAPI", "Supabase", "Postgres", "Prisma", "Edge Functions"] },
  { group: "AI & Data", items: ["OpenAI", "LangChain", "pgvector", "OCR (Tesseract)", "Redis", "Cron jobs"] },
  { group: "Infra", items: ["Vercel", "Docker", "GitHub Actions", "Resend", "Razorpay", "Supabase Storage"] },
];

const principles = [
  {
    icon: Rocket,
    title: "Ship, then measure",
    body: "Smallest thing that proves the idea, in production, in days — not a 6-week design sprint.",
  },
  {
    icon: Workflow,
    title: "Automate the boring",
    body: "If a human is copy-pasting between two tools, that's the feature. AI is a tool, not the pitch.",
  },
  {
    icon: Layers,
    title: "Design for scale early",
    body: "RLS, queues, caching, and proper auth from day one — so the rewrite never has to happen.",
  },
];

const Engineering = () => {
  return (
    <section id="engineering" className="py-32 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Engineering
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
            How I build, and what I build with.
          </p>
        </motion.div>

        {/* Tech stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-2xl overflow-hidden mb-16">
          {stack.map((col, i) => (
            <motion.div
              key={col.group}
              className="bg-background p-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-xs font-medium text-primary uppercase tracking-widest">
                {col.group}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p.icon className="w-7 h-7 text-primary mb-5" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engineering;
