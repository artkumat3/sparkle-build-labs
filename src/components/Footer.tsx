import { motion } from "framer-motion";
import { Github, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Work", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border"
    >
      <div className="edition py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="blocky text-3xl text-foreground leading-none">arynk</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Aryan Gupta — full-stack developer shipping AI-powered web apps
              and automations that remove the boring work.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-hand text-xl text-muted-foreground mb-3">
              Sections
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-foreground/75 hover:text-foreground transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-hand text-xl text-muted-foreground mb-3">
              Elsewhere
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/aryngpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="mailto:aryan-gupta@zohomail.in"
                aria-label="Email"
                className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span>© {currentYear} Aryan Gupta</span>
          <span>Mau, Uttar Pradesh · India</span>
          <span>Built with precision</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
