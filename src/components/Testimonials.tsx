import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Founder",
      company: "TechVista Solutions",
      content:
        "Aryan rebuilt our customer onboarding form into a Supabase-backed flow over a weekend. We stopped losing leads to broken Google Forms within the first week.",
      avatar: "RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Operations Lead",
      company: "EduSmart India",
      content:
        "He automated our weekly student-progress reporting — what used to take ~4 hours of copy-pasting now runs in under 10 minutes and emails itself out on Monday morning.",
      avatar: "PP",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Director",
      company: "GrowthBox Digital",
      content:
        "Aryan is one of those devs who actually reads the brief and pushes back when something doesn't make sense. Rare. Saved us from shipping a feature nobody would have used.",
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
          What people say
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
              <p className="text-foreground/90 leading-relaxed text-base">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
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
