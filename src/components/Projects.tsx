import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";
import { works, Work } from "@/data/works";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ w, i, onOpen }: { w: Work; i: number; onOpen: () => void }) => (
  <article className="surface shrink-0 w-full lg:w-[70vw] xl:w-[60vw] p-8 md:p-12 flex flex-col justify-between min-h-[60vh] border-primary/30">
    <div>
      <div className="flex justify-between meta text-muted-foreground mb-10">
        <span className="text-primary">{String(i + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}</span>
        <span>{w.year}</span>
      </div>
      <h3 className="display-hero !text-[clamp(3rem,7vw,7rem)] text-foreground">{w.name}</h3>
      <p className="meta text-primary mt-4">{w.domain}</p>
      <p className="mt-8 max-w-2xl text-muted-foreground">{w.description}</p>
    </div>
    <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
      <ul className="flex flex-wrap gap-2">
        {w.stack.map((s) => <li key={s} className="meta border border-border px-2.5 py-1 text-foreground/80">{s}</li>)}
      </ul>
      <div className="flex gap-3">
        <button onClick={onOpen} className="btn-champagne !py-3">Case Study</button>
        {w.live && (
          <a href={w.live} target="_blank" rel="noopener noreferrer" className="meta inline-flex items-center gap-2 px-4 py-3 border border-border hover:border-primary">
            Live <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
        {w.source && (
          <a href={w.source} target="_blank" rel="noopener noreferrer" aria-label="Source code" className="inline-flex items-center px-4 border border-border hover:border-primary">
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Work | null>(null);

  useEffect(() => {
    if (prefersReducedMotion() || window.innerWidth < 1024) return;
    const ctx = gsap.context(() => {
      const el = track.current!;
      gsap.to(el, {
        x: () => -(el.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (el.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section id="works" className="scroll-mt-16">
      <div ref={wrap} className="lg:h-screen lg:overflow-hidden flex flex-col justify-center py-24 lg:py-0" data-cursor="track">
        <div className="edition w-full flex items-center gap-4 border-b border-border pb-4 mb-10 lg:mb-8">
          <span className="section-no">03</span>
          <span className="meta text-muted-foreground">Selected Works — The Foundry</span>
        </div>
        <div ref={track} className="flex flex-col lg:flex-row gap-8 px-5 md:px-10 lg:px-16 lg:w-max">
          <div className="shrink-0 lg:w-[30vw] flex items-center">
            <h2 className="editorial text-foreground">Three systems, built from the ground up.</h2>
          </div>
          {works.map((w, i) => <Card key={w.id} w={w} i={i} onOpen={() => setActive(w)} />)}
        </div>
      </div>

      <Sheet open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <SheetContent side="right" className="w-full sm:max-w-xl bg-card border-l border-border overflow-y-auto" data-lenis-prevent>
          {active && (
            <>
              <SheetHeader>
                <p className="meta text-primary">{active.domain}</p>
                <SheetTitle className="display-hero !text-6xl text-foreground text-left">{active.name}</SheetTitle>
                <SheetDescription className="text-left">{active.description}</SheetDescription>
              </SheetHeader>
              <dl className="mt-10 space-y-8">
                {(["what", "why", "process", "architecture", "lessons"] as const).map((k) => (
                  <div key={k} className="border-t border-border pt-4">
                    <dt className="meta text-primary mb-2">{k === "lessons" ? "Lessons learned" : k}</dt>
                    <dd className="text-foreground/85">{active.study[k]}</dd>
                  </div>
                ))}
                <div className="border-t border-border pt-4">
                  <dt className="meta text-primary mb-2">Metrics</dt>
                  <dd><ul className="space-y-1 text-foreground/85">{active.study.metrics.map((m) => <li key={m}>— {m}</li>)}</ul></dd>
                </div>
              </dl>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Projects;
