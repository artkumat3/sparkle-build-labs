import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Mode = "idle" | "link" | "track";

const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28 });
  const sy = useSpring(y, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");
    const move = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const el = e.target as HTMLElement;
      if (el.closest("[data-cursor='track']")) setMode(el.closest("a,button") ? "link" : "track");
      else if (el.closest("a,button,input,textarea,[role='button']")) setMode("link");
      else setMode("idle");
    };
    window.addEventListener("pointermove", move);
    return () => { window.removeEventListener("pointermove", move); document.body.classList.remove("has-cursor"); };
  }, [x, y]);

  if (!enabled) return null;
  const size = mode === "track" ? 80 : mode === "link" ? 64 : 32;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-foreground"
        style={{ x, y, width: 4, height: 4, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: mode === "idle" ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full border border-primary flex items-center justify-between px-2 text-primary"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: size, height: size, opacity: mode === "idle" ? 0.2 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {mode === "track" && (<><ChevronLeft className="w-3.5 h-3.5" /><ChevronRight className="w-3.5 h-3.5" /></>)}
      </motion.div>
    </>
  );
};

export default Cursor;
