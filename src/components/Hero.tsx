import { ArrowRight, MapPin, Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const metrics = [
  { value: "6+", label: "Shipped projects" },
  { value: "70%", label: "Manual work removed" },
  { value: "500+", label: "Ads auto-scanned" },
];

const stack = ["React", "Next.js", "TypeScript", "Python", "Supabase", "OpenAI"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 lg:pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-primary/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />

      {/* Giant backdrop wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[38%] -translate-y-1/2 select-none text-center"
      >
        <span className="block font-display font-black uppercase tracking-tighter leading-none text-[22vw] md:text-[18vw] text-foreground/[0.04]">
          Portfolio
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md text-[11px] uppercase tracking-[0.25em] text-primary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Available for work
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black uppercase mt-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-foreground"
          >
            Aryan <span className="text-primary">Gupta</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm md:text-base text-muted-foreground tracking-[0.25em] uppercase"
          >
            Full-stack developer · AI automation engineer
          </motion.p>

          {/* Intro copy */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-foreground/80"
          >
            I build production web apps and AI-powered automations from{" "}
            <span className="text-foreground font-medium">Mau, Uttar Pradesh</span> —
            the kind of work that replaces spreadsheets, paper registers, and copy-paste workflows.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#projects">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)]">
                View work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="/resume">
              <Button size="lg" variant="outline" className="border-primary/40 bg-background/60 text-foreground hover:bg-primary/10 hover:border-primary/70 rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold">
                <Download className="mr-2 w-4 h-4" /> Resume
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-border bg-background/60 text-foreground hover:bg-secondary rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold">
                Get in touch
              </Button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            {[
              { href: "https://github.com/aryngpt", Icon: Github, label: "GitHub" },
              { href: "mailto:aryan-gupta@zohomail.in", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/60 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-xs text-muted-foreground flex items-center justify-center gap-1.5"
          >
            <MapPin className="w-3 h-3" /> Mau, Uttar Pradesh · IST
          </motion.p>
        </div>

        {/* Metrics + Stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-5 text-left hover:border-primary/40 transition-colors"
            >
              <p className="font-display text-3xl font-black text-foreground">{m.value}</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest mt-1">{m.label}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-5 text-left">
            <p className="text-[11px] uppercase tracking-widest text-primary mb-2 font-semibold">Stack</p>
            <div className="flex flex-wrap gap-1">
              {stack.map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-foreground/80 border border-border">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
