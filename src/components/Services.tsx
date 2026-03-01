import { Monitor, Bot, Palette, Workflow, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Building scalable, responsive websites that look stunning and perform excellently on every device.",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Automating workflows and processes using AI to help businesses save time and increase efficiency.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
    },
    {
      icon: Workflow,
      title: "Smart Solutions",
      description: "Developing intelligent web applications that solve real problems and deliver meaningful results.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand & Research",
      description: "Understanding your goals, audience, and requirements to create a solid foundation.",
    },
    {
      step: "02",
      title: "Design & Develop",
      description: "Bringing ideas to life with creative design and cutting-edge development.",
    },
    {
      step: "03",
      title: "Deliver & Support",
      description: "Deploying your project and providing ongoing support for continued success.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">What I Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Services I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive web development and AI automation solutions to help your business scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
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
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">How I Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="space-y-4">
                  <span className="text-7xl font-bold text-primary/15">{item.step}</span>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
