import { useRef } from "react";
import { Download, Printer, ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const Resume = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    const win = window.open(resumeAsset.url, "_blank");
    if (win) {
      win.addEventListener("load", () => {
        try {
          win.focus();
          win.print();
        } catch {
          // Some browsers block programmatic print on cross-origin PDFs
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header row */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back home
              </Link>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-sm">
                <FileText className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em]">
                  Resume
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
                Aryan Gupta —{" "}
                <span className="font-italic-display font-normal text-primary">resume</span>.
              </h1>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                Preview below, or download / print a copy.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a href={resumeAsset.url} target="_blank" rel="noopener noreferrer" download>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-11 px-5 text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  <Download className="mr-2 w-4 h-4" /> Download
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={handlePrint}
                className="border-primary/30 bg-background/60 text-foreground hover:bg-background hover:border-primary/60 rounded-full h-11 px-5 text-xs uppercase tracking-[0.2em] font-semibold"
              >
                <Printer className="mr-2 w-4 h-4" /> Print
              </Button>
            </div>
          </div>

          {/* PDF preview */}
          <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.3)]">
            <iframe
              ref={iframeRef}
              src={`${resumeAsset.url}#view=FitH`}
              title="Aryan Gupta resume preview"
              className="w-full h-[80vh] min-h-[600px] bg-background"
            />
          </div>

          <p className="mt-4 text-xs text-muted-foreground text-center">
            PDF preview may not render on some mobile browsers — use the Download button instead.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
