import { motion } from "framer-motion";

const skillGroups = [
  { label: "Frontend", cls: "sticker-yellow", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend", cls: "sticker-green", items: ["Python", "FastAPI", "Supabase", "Postgres"] },
  { label: "AI", cls: "sticker-pink", items: ["OpenAI", "LangChain", "pgvector", "OCR"] },
  { label: "Infra", cls: "sticker-blue", items: ["Vercel", "Docker", "Edge Fns", "Resend"] },
];

const About = () => {
  return (
    <section id="about" className="edition py-16 md:py-24 scroll-mt-24">
      <p className="font-hand text-2xl text-muted-foreground mb-6">about me!</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="sheet relative p-6 md:p-12 pt-12"
      >
        <span className="tape left-1/2 -translate-x-1/2 -top-3" />
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip mb-6">what's up</span>
          <p className="font-hand text-2xl md:text-3xl leading-snug text-foreground">
            I'm a developer who gets a little too excited about making
            complicated things feel simple. I care about the small details, the
            edge cases everyone forgets, and shipping work that genuinely makes
            someone's day easier.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Based in Mau, Uttar Pradesh, I build production software for small
            businesses, clinics and early-stage startups. Most of my work starts
            on the ground — watching how a register, a WhatsApp thread or a
            spreadsheet is actually used — and ends as something live.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            My approach: ship the smallest thing that proves the idea, in
            production, in days. AI is a tool inside the product, never the
            pitch. Open to internships, contract work and full-time roles.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className={`sticker ${g.cls} rotate-[-2deg]`}>{g.label}</span>
              <ul className="mt-3 space-y-1.5 pl-1">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/75">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
