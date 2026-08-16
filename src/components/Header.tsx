import { useEffect, useState } from "react";
import { Menu, X, Github, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Work", href: "/#projects" },
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
    <header className="sticky top-0 z-50 pt-3 pb-2">
      <div className="edition">
        <div
          className={`sheet flex items-center justify-between gap-4 px-3 py-2 ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <a
              href="/#home"
              className="blocky text-lg leading-none px-2 py-1 rounded-md bg-foreground text-background"
            >
              a
            </a>
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className={`hidden md:inline-flex px-3 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  i === 0
                    ? "sticker sticker-yellow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/aryngpt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex w-9 h-9 items-center justify-center rounded-md border border-foreground/15 bg-[hsl(var(--sticker-blue))] text-white shadow-[2px_2px_0_hsl(var(--foreground)/0.14)]"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-foreground/25 text-[11px] font-semibold uppercase tracking-[0.14em] hover:bg-secondary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Contact
            </a>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="sheet md:hidden mt-2 p-3 flex flex-col gap-1">
            {[...navLinks, { name: "Contact", href: "/#contact" }].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
