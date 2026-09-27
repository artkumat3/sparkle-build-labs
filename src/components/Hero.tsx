import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/atelier/Magnetic";

const words = ["Aryan", "Kumar", "Gupta"];
const ease = [0.16, 1, 0.3, 1] as const;

const Hero = () => (
  <section id="home" className="relative min-h-[100svh] pt-16 flex flex-col">
    <div className="edition relative flex-1 flex flex-col justify-center py-16">
      <p className="meta text-primary absolute top-8 left-5 md:left-10 lg:left-16">System Architect &amp; AI Automation</p>
      <p className="meta text-muted-foreground absolute top-8 right-5 md:right-10 lg:right-16 hidden sm:block">Mau, Uttar Pradesh · IST</p>

      <h1 className="display-hero text-foreground">
        {words.map((w, i) => (
          <span key={w} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease }}
        className="font-serif italic font-light text-2xl md:text-4xl text-foreground/85 mt-8 max-w-2xl"
      >
        I build software that gets out of your way.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-wrap items-center gap-8"
      >
        <Magnetic>
          <a href="#works" className="btn-champagne">Explore Selected Works <ArrowUpRight className="w-4 h-4" /></a>
        </Magnetic>
        <a href="#contact" className="meta text-muted-foreground hover:text-foreground border-b border-border pb-1">
          Initiate Contact
        </a>
      </motion.div>
    </div>
    <div className="edition flex justify-between items-end pb-8 gap-4">
      <p className="meta text-primary">Proven scale: 50,000+ nationwide students</p>
      <p className="meta text-muted-foreground hidden sm:inline-flex items-center gap-2">
        Scroll to enter atelier <ArrowDown className="w-3.5 h-3.5" />
      </p>
    </div>
  </section>
);

export default Hero;
