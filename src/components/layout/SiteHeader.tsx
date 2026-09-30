import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/#work", label: "Work", hash: true },
  { to: "/now", label: "Now" },
  { to: "/notes", label: "Notes" },
  { to: "/resume", label: "Resume" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <img src="/logo.svg" alt="" className="h-8 w-8" onError={(e) => (e.currentTarget.style.display = "none")} />
          <span className="font-display text-lg font-semibold tracking-tight">
            Aryan Gupta
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navItems.map((item) =>
            item.hash ? (
              <a
                key={item.label}
                href={item.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
          <a
            href="/#contact"
            className="rounded-sm border border-primary/60 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Let's talk
          </a>
        </nav>

        <button
          className="md:hidden rounded-sm p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden" aria-label="Mobile">
          <div className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-base text-foreground hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm border border-primary/60 px-4 py-3 text-center text-base font-medium text-primary"
            >
              Let's talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
