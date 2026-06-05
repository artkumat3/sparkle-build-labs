import { ArrowRight, MapPin, Github, Instagram, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aryanPhoto from "@/assets/aryan-photo.jpg";

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
      className="relative min-h-screen pt-28 lg:pt-32 pb-20 overflow-hidden aurora-bg"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-primary/15 blur-[120px] animate-orb pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] rounded-full bg-accent/15 blur-[140px] animate-orb pointer-events-none" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-primary/20 blur-2xl opacity-70" />
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-1 ring-foreground/10 shadow-xl">
              <img
                src={aryanPhoto}
                alt="Aryan Gupta"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Name — italic serif */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-italic-display mt-8 text-5xl sm:text-6xl md:text-7xl leading-[1] text-foreground"
          >
            Aryan Gupta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm md:text-base text-muted-foreground tracking-wide"
          >
            full-stack developer &amp; ai automation engineer
          </motion.p>

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-background/60 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] text-primary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Available for work
          </motion.div>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-2xl space-y-5 text-[15px] md:text-[17px] leading-relaxed text-foreground/85"
          >
            <p>
              Hi, I'm a developer from <span className="text-foreground font-medium">Mau, Uttar Pradesh</span> building production web apps and AI-powered automations — the kind of work that replaces spreadsheets, paper registers, and copy-paste workflows.
            </p>
            <p className="text-primary/90 italic">— vibe coder, not a real coder.</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#projects">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold">
                View work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-foreground/20 bg-background/50 hover:bg-background rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold">
                Get in touch
              </Button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            {[
              { href: "https://github.com/aryngpt", Icon: Github, label: "GitHub" },
              { href: "https://instagram.com/the.aryan.builds/", Icon: Instagram, label: "Instagram" },
              { href: "mailto:aryan-gupta@zohomail.in", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border/60 bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 text-xs text-muted-foreground flex items-center justify-center gap-1.5"
          >
            <MapPin className="w-3 h-3" /> Mau, Uttar Pradesh · IST
          </motion.p>
        </div>

        {/* Metrics + Stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur-md p-5 text-left"
            >
              <p className="font-display text-3xl font-bold text-foreground">{m.value}</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest mt-1">{m.label}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur-md p-5 text-left">
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
              <Sparkles className="w-3 h-3 text-primary" /> Stack
            </div>
            <div className="flex flex-wrap gap-1">
              {stack.map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/70 text-foreground/80 border border-border/40">
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
