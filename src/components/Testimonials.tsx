import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1, name: "Rajesh Sharma", role: "Founder, TechVista Solutions",
      content: "Aryan built our entire web platform from scratch. His technical skills and attention to detail are outstanding.",
      avatar: "RS",
    },
    {
      id: 2, name: "Priya Patel", role: "CEO, EduSmart India",
      content: "The AI automation tools Aryan developed saved us countless hours. His understanding of AI is truly impressive.",
      avatar: "PP",
    },
    {
      id: 3, name: "Amit Verma", role: "Director, GrowthBox Digital",
      content: "Working with Aryan was a game-changer. He delivered smart automation solutions that boosted our efficiency by 40%.",
      avatar: "AV",
    },
  ];

  return (
    <section id="testimonials" className="py-32 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              className="space-y-6 p-8 rounded-2xl border border-border/30 hover:border-border/60 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
