import { motion } from "framer-motion";
import { Rocket, Workflow, Layers } from "lucide-react";

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
    <section id="engineering" className="py-24 md:py-32 border-t border-border/30 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium text-primary uppercase tracking-[0.25em] mb-5">Engineering</h2>
          <p className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            How I build, and what I build with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="bento p-8 space-y-5 min-h-[220px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
                0{i + 1} / 03
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engineering;
