import { Palette, Monitor, Layers, PenTool, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Crafting responsive, modern websites that look stunning on every device and convert visitors into customers.",
    },
    {
      icon: Layers,
      title: "Brand Design",
      description: "Building cohesive brand identities that tell your story and create lasting impressions in the market.",
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Designing eye-catching visuals, illustrations, and marketing materials that communicate your message.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Research",
      description: "Understanding your goals, audience, and market to create a solid foundation.",
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Bringing ideas to life with creative design and cutting-edge development.",
    },
    {
      step: "03",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support for continued success.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">What I Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Services I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand and digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">How I Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Creative Process</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="space-y-4">
                  <span className="text-6xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
