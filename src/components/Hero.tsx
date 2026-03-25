import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aryanPhoto from "@/assets/aryan-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-orb" />
      <div className="absolute bottom-32 right-20 w-64 h-64 rounded-full bg-primary/15 blur-3xl animate-orb" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-orb" style={{ animationDelay: "5s" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar */}
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

          {/* Greeting */}
          <motion.h2
            className="text-lg md:text-xl text-muted-foreground mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello! I'm
          </motion.h2>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Aryan Gupta
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A creative developer building scalable websites and automating workflows with AI — helping businesses work smarter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-wider px-8 rounded-full">
                View Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-sm uppercase tracking-wider px-8 rounded-full">
                Contact
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Resume badge - bottom right */}
      <motion.a
        href="#contact"
        className="fixed bottom-8 right-8 z-40 hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Resume <FileText className="w-4 h-4" />
      </motion.a>
    </section>
  );
};

export default Hero;
