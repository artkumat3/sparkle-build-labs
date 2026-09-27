import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIstClock } from "@/hooks/use-ist-clock";

const links = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Scale", href: "#scale" },
  { name: "Machine", href: "#machine" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const time = useIstClock();
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur-[16px]">
      <div className="edition flex items-center justify-between h-16 gap-6">
        <a href="#home" className="meta text-foreground whitespace-nowrap">
          Aryan Gupta <span className="text-primary">//</span> arynk
        </a>
        <p className="meta text-muted-foreground hidden xl:block whitespace-nowrap">
          Mau, IN · 25.9417° N, 83.5611° E · <span className="text-primary tabular-nums">{time}</span> IST
        </p>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="meta text-muted-foreground hover:text-foreground transition-colors">
              {l.name}
            </a>
          ))}
          <span className="meta inline-flex items-center gap-2 border border-border px-3 py-1.5 text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inset-0 rounded-full bg-primary opacity-70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for production
          </span>
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          {links.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="meta block edition py-4 border-b border-border text-muted-foreground">
              {l.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
