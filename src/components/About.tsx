import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "AI/ML",
    "Next.js", "Tailwind CSS", "Python", "Automation",
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
              I build things for the web that are{" "}
              <span className="text-primary">smart</span> and{" "}
              <span className="text-primary">scalable</span>.
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
                I'm a Website Developer and AI Automation Developer based in Mau, Uttar Pradesh, India. I focus on building scalable websites and automating workflows using AI to help businesses save time.
              </p>
              <p>
                Every project is an opportunity to solve real problems and deliver meaningful results. I'm passionate about using technology to make work smarter and more accessible.
              </p>
              <p className="text-foreground font-medium">
                Open to internship, part-time, and full-time roles.
              </p>
            </div>

            {/* Skills */}
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
