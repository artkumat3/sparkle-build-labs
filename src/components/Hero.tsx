import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aryanPhoto from "@/assets/aryan-photo.jpg";

const metrics = [
  { value: "6+", label: "Shipped projects" },
  { value: "70%", label: "Manual work removed" },
  { value: "500+", label: "Ads auto-scanned" },
];

const stack = ["React", "Next.js", "TypeScript", "Python", "Supabase", "OpenAI", "LangChain"];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 lg:pt-28 pb-12 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-[120px] animate-orb pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[32rem] h-[32rem] rounded-full bg-accent/15 blur-[140px] animate-orb pointer-events-none" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Bento Grid Hero */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(110px,auto)] gap-4 md:gap-5">
          {/* Identity card — large */}
          <motion.div
            className="bento-glow col-span-1 md:col-span-6 lg:col-span-8 lg:row-span-3 p-8 md:p-12 flex flex-col justify-between min-h-[420px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for work
            </div>

            <div className="space-y-5">
              <p className="text-sm md:text-base text-muted-foreground">Hello — I'm</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
                Aryan <span className="text-gradient">Gupta</span>
              </h1>
              <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl leading-snug font-medium">
                Full-stack developer building AI-powered web apps and automation systems that eliminate repetitive work.
              </p>
              <p className="text-sm md:text-base text-primary/90 font-medium tracking-wide">
                Vibe coder — not a real coder.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-7 text-sm uppercase tracking-wider font-semibold">
                  View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary rounded-full h-12 px-7 text-sm uppercase tracking-wider font-semibold">
                  Hire Me
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Photo card — circular portrait */}
          <motion.div
            className="bento col-span-1 md:col-span-3 lg:col-span-4 lg:row-span-2 relative min-h-[260px] p-8 flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-primary/20 blur-2xl opacity-70" />
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-1 ring-border/60">
                <img
                  src={aryanPhoto}
                  alt="Aryan Gupta"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="text-center space-y-1">
              <p className="font-display text-lg font-semibold">Aryan Gupta</p>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <MapPin className="w-3 h-3" /> Mau, Uttar Pradesh
              </p>
            </div>
          </motion.div>

          {/* Tech badge */}
          <motion.div
            className="bento col-span-1 md:col-span-3 lg:col-span-4 p-6 flex flex-col justify-between min-h-[140px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Stack
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {stack.map((s) => (
                <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/70 text-foreground/80 border border-border/40">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Metrics row — 3 small cards */}
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="bento col-span-1 md:col-span-2 lg:col-span-4 p-6 flex flex-col justify-center min-h-[120px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
