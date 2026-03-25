import { Monitor, Bot, Palette, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Building scalable, responsive websites that perform excellently on every device.",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Automating workflows and processes using AI to save time and increase efficiency.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces that enhance user experience and drive engagement.",
    },
    {
      icon: Workflow,
      title: "Smart Solutions",
      description: "Developing intelligent applications that solve real problems and deliver results.",
    },
  ];

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-px bg-border/50 border border-border/50 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-background p-10 md:p-12 space-y-4 group hover:bg-secondary/30 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
