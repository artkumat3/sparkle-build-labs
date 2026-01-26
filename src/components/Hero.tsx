import { ArrowRight, MapPin, Bot, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import aryanPhoto from "@/assets/aryan-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-foreground font-medium">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Aryan Gupta</span>
            </h1>

            <p className="text-xl text-muted-foreground font-medium">
              Website Developer | AI Automation Developer
            </p>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Helping Businesses Scale with Smart Web & AI Solutions. I build scalable websites and automate workflows using AI.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Mau, Uttar Pradesh, India</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-primary group">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">50+</span>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">AI</span>
                  <p className="text-xs text-muted-foreground">Powered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-6 space-y-6 animate-float">
              {/* Profile Image */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src={aryanPhoto} 
                  alt="Aryan Gupta" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
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
            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 glow-primary">
              <span className="text-primary font-bold text-sm">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
