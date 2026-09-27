import { motion } from "framer-motion";
import { ReactNode } from "react";

const SectionHead = ({ no, label, title }: { no: string; label: string; title: ReactNode }) => (
  <div className="mb-14 md:mb-20">
    <div className="flex items-center gap-4 border-b border-border pb-4 mb-10">
      <span className="section-no">{no}</span>
      <span className="meta text-muted-foreground">{label}</span>
    </div>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="editorial text-foreground max-w-5xl"
    >
      {title}
    </motion.h2>
  </div>
);

export default SectionHead;
