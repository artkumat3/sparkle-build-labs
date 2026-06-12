import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page not found — Aryan Gupta</title>
        <meta name="description" content="The page you were looking for doesn't exist. Head back to Aryan Gupta's portfolio." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      <main className="flex-1 flex items-center justify-center pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-20 -left-32 w-[26rem] h-[26rem] rounded-full bg-accent/15 blur-[120px] animate-orb pointer-events-none" />
        <div className="absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-[140px] animate-orb pointer-events-none" style={{ animationDelay: "3s" }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-destructive" />
              </span>
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em]">
                Error 404
              </span>
            </div>

            <h1 className="font-italic-display text-7xl md:text-9xl leading-none text-foreground mb-4">
              404
            </h1>
            <p className="font-display text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              This page took a{" "}
              <span className="font-italic-display font-normal text-primary">detour</span>.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-2">
              The path{" "}
              <code className="px-1.5 py-0.5 rounded bg-secondary/60 border border-border/40 text-foreground/80 text-xs">
                {location.pathname}
              </code>{" "}
              doesn't exist — it may have moved, or never did.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Try one of these instead:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)]"
                >
                  <Home className="mr-2 w-4 h-4" /> Home
                </Button>
              </Link>
              <Link to="/#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 bg-background/60 text-foreground hover:bg-background hover:border-primary/60 rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  View work
                </Button>
              </Link>
              <Link to="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 bg-background/60 text-foreground hover:bg-background hover:border-primary/60 rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  <Mail className="mr-2 w-4 h-4" /> Contact
                </Button>
              </Link>
            </div>

            <button
              onClick={() => window.history.back()}
              className="mt-8 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Go back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
