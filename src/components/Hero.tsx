import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const stack = ["React", "Next.js", "TypeScript", "Python", "Supabase", "LLMs"];

const facts = [
  { k: "Based", v: "Mau, Uttar Pradesh · IST" },
  { k: "Focus", v: "Full-stack + AI automation" },
  { k: "Status", v: "Available for work" },
];

const Hero = () => {
  return (
    <section id="home" className="edition pt-10 md:pt-16 pb-20 md:pb-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl"
      >
        <p className="font-hand text-2xl text-muted-foreground">my name is</p>

        <div className="relative mt-3 flex items-center justify-center">
          <span className="sticker sticker-green absolute -left-2 md:left-0 -top-4 rotate-[-8deg] hidden sm:inline-flex">
            made things
          </span>
          <span className="sticker sticker-yellow absolute -right-2 md:right-0 -top-4 rotate-[7deg] hidden sm:inline-flex">
            sweat the details
          </span>
          <h1 className="name-box blocky text-5xl md:text-7xl lg:text-8xl leading-none">
            ARYNK
          </h1>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className="sticker sticker-yellow rotate-[-2deg]">Full-stack developer</span>
          <span className="chip">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--sticker-green))] mr-2" />
            Open to new work and good problems
          </span>
          <span className="sticker sticker-blue rotate-[2deg]">Mau, IN</span>
        </div>

        <h2 className="display-xl mt-10 text-3xl md:text-5xl text-foreground">
          I build software that gets
          <br className="hidden sm:block" /> out of your way.
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-ink">
            <Mail className="w-4 h-4" /> Contact me
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Selected works
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-16 md:mt-20 sheet p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
      >
        {facts.map((f) => (
          <div key={f.k}>
            <p className="font-hand text-lg text-muted-foreground">{f.k}</p>
            <p className="text-sm font-medium text-foreground/85">{f.v}</p>
          </div>
        ))}
        <div className="sm:col-span-3 flex flex-wrap gap-2 pt-2 border-t border-border mt-2">
          {stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
