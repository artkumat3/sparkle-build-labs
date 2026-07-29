import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stack = ["React", "Next.js", "TypeScript", "Python", "Supabase", "LLMs"];

const facts = [
  { k: "Based", v: "Mau, Uttar Pradesh · IST" },
  { k: "Focus", v: "Full-stack + AI automation" },
  { k: "Status", v: "Available for work" },
];

const Hero = () => {
  return (
    <section id="home" className="edition pt-16 md:pt-24 pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12"
      >
        <div className="lg:col-span-8">
          <p className="kicker mb-6">Full-stack developer · AI automation</p>
          <h1 className="display-xl text-6xl md:text-8xl lg:text-[8.5rem] text-foreground">
            <span className="italic">Aryan Gupta</span>
            <span className="block not-italic text-primary">Full-Stack + AI.</span>
          </h1>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80 border-l border-primary pl-6 mb-8">
            I build production web apps and AI-powered automations — the kind of
            work that replaces spreadsheets, paper registers and copy-paste
            workflows.
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 md:mt-24 border-t border-border pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {facts.map((f) => (
          <div key={f.k}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              {f.k}
            </p>
            <p className="text-sm text-foreground/85">{f.v}</p>
          </div>
        ))}
      </motion.div>

      <div className="mt-12 flex flex-wrap items-center gap-8">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-foreground hover:text-primary transition-colors"
        >
          Selected works
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </a>
        <a
          href="#contact"
          className="text-sm uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors underline decoration-border underline-offset-8 hover:decoration-primary"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
