import { ArrowRight, Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import aryanPhoto from "@/assets/aryan-photo.jpg";

const Hero = () => {
  const stats = [
    { icon: Sparkles, value: "50+", label: "Projects" },
    { icon: Award, value: "AI", label: "Powered" },
    { icon: Users, value: "100%", label: "Dedication" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              I See,{" "}
              <span className="text-primary">What Others</span>{" "}
              <br />
              Don't.
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              We craft stunning digital experiences that captivate audiences and drive business growth. From brand identity to web design, we make your vision reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-border hover:bg-card">
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 space-y-6 animate-float">
              {/* Profile Image */}
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden relative">
                <img 
                  src={aryanPhoto} 
                  alt="Aryan Gupta" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Profile Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Aryan Gupta</h3>
                  <p className="text-primary text-sm">Website Developer | AI Automation Developer</p>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {[
                    { name: "Web Development", value: 95 },
                    { name: "AI Automation", value: 90 },
                    { name: "UI/UX Design", value: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary">{skill.value}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 glow-primary">
              <span className="text-primary font-bold">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
