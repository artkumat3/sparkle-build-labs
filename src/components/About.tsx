import { Code, Bot, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code, label: "Web Development" },
    { icon: Bot, label: "AI Automation" },
    { icon: Briefcase, label: "Open to Work" },
    { icon: GraduationCap, label: "Fast Learner" },
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
                Building <span className="text-primary">Smart Solutions</span> for Modern Businesses
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a Website Developer and AI Automation Developer focused on building scalable websites and automating workflows using AI. I help businesses save time by creating efficient web solutions and smart automation.
              </p>
              <p>
                Based in Mau, Uttar Pradesh, India, I'm passionate about using technology to make work smarter and more accessible. Every project is an opportunity to solve real problems and deliver meaningful results.
              </p>
              <p className="text-primary font-medium">
                Open to internship, part-time, and full-time roles.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="glass-card rounded-2xl h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <div className="glass-card rounded-2xl h-64 bg-gradient-to-br from-accent/10 to-primary/20 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
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
