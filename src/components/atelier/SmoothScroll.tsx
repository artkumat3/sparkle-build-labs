import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionState, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      motionState.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      motionState.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    if (prefersReducedMotion()) return () => window.removeEventListener("pointermove", onPointer);

    const lenis = new Lenis({ lerp: 0.085 });
    lenis.on("scroll", (l: Lenis) => {
      motionState.scrollVelocity = l.velocity;
      ScrollTrigger.update();
    });
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"], a[href^="/#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.replace("/", "");
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el as HTMLElement, { offset: -72 }); }
    };
    document.addEventListener("click", onClick);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.removeEventListener("click", onClick);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);
  return null;
};

export default SmoothScroll;
