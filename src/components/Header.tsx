import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import logoDark from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Engineering", href: "/#engineering" },
  { name: "Work", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentLogo = resolvedTheme === "dark" ? logoLight : logoDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`flex items-center justify-between gap-4 rounded-full border border-border/40 bg-background/70 backdrop-blur-xl px-3 md:px-4 transition-all duration-300 ${
            scrolled ? "h-14 shadow-[0_10px_40px_-15px_hsl(var(--primary)/0.25)]" : "h-16"
          }`}
        >
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-2.5 pl-2 group">
            <img
              src={currentLogo}
              alt="Aryan Gupta"
              className="w-8 h-8 transition-transform group-hover:rotate-6"
              width={32}
              height={32}
            />
            <span className="text-sm font-display font-semibold tracking-tight hidden sm:block">
              aryan<span className="text-primary">.</span>dev
            </span>
          </a>

          {/* Center pill nav */}
          <nav className="hidden md:flex items-center gap-1 bg-secondary/40 rounded-full p-1 border border-border/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-background/60 transition-all tracking-wider uppercase px-4 py-2 rounded-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-2 pr-1">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-4 py-2 rounded-full"
            >
              Hire me <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1 pr-1">
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
          <div className="md:hidden mt-2 rounded-3xl border border-border/40 bg-background/90 backdrop-blur-xl p-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm font-medium uppercase tracking-wider px-4 py-3 rounded-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-semibold bg-primary text-primary-foreground px-4 py-3 rounded-2xl"
              >
                Hire me <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
