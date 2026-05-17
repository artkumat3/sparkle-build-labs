import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Engineering", href: "/#engineering" },
    { name: "Work", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      className="border-t border-border/30 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-foreground">Aryan Gupta</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full-stack developer shipping AI-powered web apps and automations that remove the boring work.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Sitemap</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Reach out</p>
            <a
              href="mailto:aryan-gupta@zohomail.in"
              className="text-sm text-foreground/80 hover:text-primary transition-colors block"
            >
              aryan-gupta@zohomail.in
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            Designed and developed by <span className="text-foreground">Aryan Gupta</span>
          </p>
          <p className="text-xs text-muted-foreground">© {currentYear} — All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
