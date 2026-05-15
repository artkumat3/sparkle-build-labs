import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind",
    "Python", "FastAPI", "Supabase", "Postgres",
    "OpenAI", "LangChain", "Vercel", "Docker",
  ];

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">About</h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              I ship full-stack apps and{" "}
              <span className="text-primary">AI automations</span> that remove the boring work.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a full-stack developer based in Mau, Uttar Pradesh. I build production web apps and AI-powered automations for small businesses, clinics, and early-stage startups — the kind of work that replaces spreadsheets, paper registers, and copy-paste workflows.
              </p>
              <p>
                Recent things I've shipped: an OCR + LLM platform that audits coaching-institute ads (<span className="text-foreground">UnMask</span>), a clinic booking + records system for a tier-3 town (<span className="text-foreground">Mau Care</span>), and a CBSE-aligned AI test generator (<span className="text-foreground">BrainX</span>).
              </p>
              <p className="text-foreground font-medium">
                Currently open to internships, contract work, and full-time roles.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
