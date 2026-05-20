import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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
    <section id="testimonials" className="py-24 md:py-32 border-t border-border/30 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium text-primary uppercase tracking-[0.25em] mb-5">Testimonials</h2>
          <p className="font-display text-3xl md:text-5xl font-bold tracking-tight">What people say.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className={`bento p-7 md:p-8 flex flex-col justify-between gap-6 ${
                i === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="w-6 h-6 text-primary/60" />
              <p className={`text-foreground/85 leading-relaxed ${i === 0 ? "text-lg md:text-xl" : "text-base"}`}>
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary text-xs font-semibold">{t.avatar}</span>
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
