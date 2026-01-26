import { Award, Users, Clock, Coffee } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: Coffee, value: "∞", label: "Cups of Coffee" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
                Passionate About Creating <span className="text-primary">Digital Excellence</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a creative director and UI/UX designer with over 5 years of experience in crafting beautiful digital experiences. My passion lies in transforming complex ideas into intuitive, user-friendly designs that drive results.
              </p>
              <p>
                I believe great design is more than aesthetics—it's about solving problems and creating meaningful connections between brands and their audiences. Every project is an opportunity to push boundaries and deliver something extraordinary.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="glass-card rounded-2xl h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="glass-card rounded-2xl h-64 bg-gradient-to-br from-secondary to-primary/10 flex items-center justify-center">
                <span className="text-4xl">💡</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="glass-card rounded-2xl h-64 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="glass-card rounded-2xl h-48 bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
