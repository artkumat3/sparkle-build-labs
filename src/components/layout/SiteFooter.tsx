import { Link } from "react-router-dom";
import { site } from "@/data/site";
import BuiltInMauBadge from "@/components/shared/BuiltInMauBadge";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="" className="h-7 w-7" onError={(e) => (e.currentTarget.style.display = "none")} />
              <span className="font-display text-lg font-semibold">Aryan Gupta</span>
            </div>
            <BuiltInMauBadge />
            <p className="text-sm text-muted-foreground">
              Built with care in Mau, Uttar Pradesh.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2" aria-label="Footer">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/now" className="text-sm text-muted-foreground hover:text-foreground">Now</Link>
            <a href="/#work" className="text-sm text-muted-foreground hover:text-foreground">Work</a>
            <Link to="/notes" className="text-sm text-muted-foreground hover:text-foreground">Notes</Link>
            <Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground">Resume</Link>
            <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground hover:text-foreground">Email</a>
          </nav>
        </div>

        <div className="hairline mt-10 pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aryan Gupta · Show the work, not the noise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
