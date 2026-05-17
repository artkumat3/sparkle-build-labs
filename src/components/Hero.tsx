import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aryanPhoto from "@/assets/aryan-photo.jpg";

const metrics = [
  { value: "6+", label: "Shipped projects" },
  { value: "70%", label: "Manual work removed" },
  { value: "500+", label: "Ads auto-scanned" },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-orb" />
      <div className="absolute bottom-32 right-20 w-64 h-64 rounded-full bg-primary/15 blur-3xl animate-orb" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-orb" style={{ animationDelay: "5s" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background mx-auto">
              <img
                src={aryanPhoto}
                alt="Aryan Gupta"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-lg md:text-xl text-muted-foreground mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello! I'm
          </motion.h2>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Aryan Gupta
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-foreground/90 max-w-2xl leading-relaxed mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            Full-stack developer building AI-powered web apps and automation systems that eliminate repetitive work.
          </motion.p>

          <motion.p
            className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            React · Next.js · TypeScript · Python · Supabase · OpenAI / LangChain
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-wider px-8 rounded-full">
                View Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-sm uppercase tracking-wider px-8 rounded-full">
                Hire Me
              </Button>
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-10 w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-foreground">{m.value}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
