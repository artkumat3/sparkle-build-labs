import { ArrowRight, MapPin, Bot, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aryanPhoto from "@/assets/aryan-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-foreground font-medium">Available for new projects</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Aryan Gupta</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Website Developer | AI Automation Developer
            </p>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Helping Businesses Scale with Smart Web & AI Solutions. I build scalable websites and automate workflows using AI.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Mau, Uttar Pradesh, India</span>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-primary group text-base px-8">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-base px-8">
                  Get In Touch
                </Button>
              </a>
            </motion.div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">50+</span>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">AI</span>
                  <p className="text-xs text-muted-foreground">Powered</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="glass-card rounded-3xl p-6 space-y-6 animate-float shadow-2xl shadow-primary/10">
              {/* Profile Image */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden relative ring-2 ring-primary/20">
                <img 
                  src={aryanPhoto} 
                  alt="Aryan Gupta" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Profile Info */}
              <div className="space-y-3 text-center">
                <h3 className="text-2xl font-bold text-foreground">Aryan Gupta</h3>
                <p className="text-primary text-sm font-medium">Website Developer | AI Automation</p>
                
                {/* Skills Pills */}
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {["Web Dev", "AI", "UI/UX", "Automation"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 glow-primary shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              <span className="text-primary font-bold text-sm">Open to Work</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
