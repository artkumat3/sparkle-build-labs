import { useEffect, useState } from "react";
import { Menu, X, Github, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Work", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/85 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="edition">
        <div className="flex items-baseline justify-between gap-6 py-5">
          <a href="/#home" className="flex items-baseline gap-3 group">
            <span className="font-display text-3xl md:text-4xl tracking-tight text-primary leading-none">
              arynk
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio Vol. 03
            </span>
          </a>

          <nav className="hidden md:flex items-baseline gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <span className="w-px h-4 bg-border" />
            <a
              href="https://github.com/aryngpt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:aryan-gupta@zohomail.in"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/aryngpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:aryan-gupta@zohomail.in"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
