import { useState } from "react";
import { motion } from "framer-motion";
import SectionHead from "@/components/atelier/SectionHead";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

/* 04 — PROCBSE */
const procMetrics = [
  { v: "50,000+", l: "Active students across Class 10 & 12" },
  { v: "99.98%", l: "Uptime during peak exam distribution" },
  { v: "100%", l: "RLS-secured digital deliveries & papers" },
  { v: "0", l: "Friction checkout via Razorpay" },
];
export const Scale = () => (
  <section id="scale" className="edition py-28 md:py-40 scroll-mt-16">
    <SectionHead no="04" label="Scaled Production · PROCBSE · Technical Head · Aug 2025 – Mar 2026"
      title="Architecting exam-prep systems serving 50,000+ students across India." />
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
      {procMetrics.map((m) => (
        <motion.div key={m.l} {...fade} className="p-6 md:p-8 border-r border-b border-border bg-card/40">
          <p className="font-display font-extrabold text-4xl md:text-5xl text-primary tracking-tight">{m.v}</p>
          <p className="meta text-muted-foreground mt-4 !normal-case !tracking-normal text-sm">{m.l}</p>
        </motion.div>
      ))}
    </div>
    <div className="mt-16 grid md:grid-cols-3 gap-10 text-muted-foreground">
      <p><span className="meta text-foreground block mb-3">Ownership</span>Technical ownership of the Next.js storefront, automated content ingestion and secure delivery of e-books and hardcopy study bundles.</p>
      <p><span className="meta text-foreground block mb-3">Product funnel</span>Architected the “99 Guaranteed Questions” product, distilling a decade of past board-exam papers.</p>
      <p><span className="meta text-foreground block mb-3">Acquisition</span>Multi-channel pipelines linking Instagram, Telegram and YouTube traffic directly to paid conversions.</p>
    </div>
    <ul className="mt-12 flex flex-wrap gap-2">
      {["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel", "Razorpay"].map((t) => (
        <li key={t} className="meta border border-border px-3 py-1.5 text-foreground/80">{t}</li>
      ))}
    </ul>
  </section>
);

/* 05 — Machine room */
const stages = [
  { n: "01", t: "Unstructured Ingestion", d: "Captures messy real-world input: paper ledgers, advertising images, unstructured chats.", lat: "~120 ms upload", tok: "0 tokens" },
  { n: "02", t: "Extraction & Normalization", d: "Fast OCR and token-efficient FastAPI parsing layers.", lat: "~800 ms OCR", tok: "~1.2k tokens" },
  { n: "03", t: "Semantic Correlation", d: "pgvector similarity indexing in Postgres to detect duplicate claims and match opportunities.", lat: "~40 ms query", tok: "768-d embeddings" },
  { n: "04", t: "Deterministic Execution", d: "CCPA dossier compilation, verified clinic booking rows, instant digital delivery.", lat: "~200 ms write", tok: "0 tokens" },
];
export const Machine = () => {
  const [a, setA] = useState(0);
  return (
    <section id="machine" className="edition py-28 md:py-40 scroll-mt-16">
      <SectionHead no="05" label="AI & Automation Engine — The Machine Room" title="Software as a lathe: raw data in, deterministic systems out." />
      <div className="relative grid md:grid-cols-4 gap-4">
        <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" />
        {stages.map((s, i) => (
          <button key={s.n} onClick={() => setA(i)} aria-pressed={a === i}
            className={`relative text-left p-6 border transition-colors duration-300 ${a === i ? "border-primary bg-card" : "border-border bg-card/30 hover:border-primary/50"}`}>
            <span className={`absolute -top-[5px] left-6 h-2.5 w-2.5 rounded-full ${a === i ? "bg-primary" : "bg-accent"}`} />
            <p className="meta text-primary mt-4">Stage {s.n}</p>
            <p className="font-display font-bold text-xl mt-2 text-foreground">{s.t}</p>
          </button>
        ))}
      </div>
      <motion.div key={a} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 surface p-8 grid md:grid-cols-3 gap-6 font-mono text-sm">
        <p className="md:col-span-2 text-foreground/85 font-sans">{stages[a].d}</p>
        <div className="space-y-2 text-muted-foreground">
          <p><span className="text-primary">latency</span> → {stages[a].lat}</p>
          <p><span className="text-primary">tokens</span> → {stages[a].tok}</p>
        </div>
      </motion.div>
    </section>
  );
};

/* 06 — Skills */
const skills = [
  { t: "Frontend Architecture", i: ["React 19", "Next.js (App Router, Server Actions)", "TypeScript", "Tailwind CSS", "Three.js / R3F"] },
  { t: "Backend & Storage", i: ["Python", "FastAPI", "Supabase", "PostgreSQL", "pgvector", "Redis", "Docker"] },
  { t: "Applied Intelligence", i: ["LangChain", "OpenAI API", "Tesseract OCR", "n8n Agent Workflows", "Prompt Compression"] },
  { t: "Infrastructure & Edge", i: ["Vercel Edge Functions", "Razorpay Webhooks", "Resend Delivery", "Docker Containers"] },
];
export const Skills = () => (
  <section className="edition py-28 md:py-40">
    <SectionHead no="06" label="Architectural Capabilities" title="The instruments." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
      {skills.map((s) => (
        <motion.div key={s.t} {...fade} className="p-8 border-r border-b border-border">
          <p className="meta text-primary mb-6">{s.t}</p>
          <ul className="space-y-2 text-foreground/85">{s.i.map((x) => <li key={x}>{x}</li>)}</ul>
        </motion.div>
      ))}
    </div>
  </section>
);

/* 07 — Lab */
const lab = [
  { n: "01", t: "Non-Euclidean Refraction Shader", d: "GLSL dispersion and internal absorption studies." },
  { n: "02", t: "Headless Trade Lead-Scraping Agent", d: "Automated parsing of public commercial gazettes." },
  { n: "03", t: "Tactile Button Physics Engine", d: "Spring-based magnetic feedback micro-library." },
];
export const Lab = () => (
  <section className="edition py-28 md:py-40">
    <SectionHead no="07" label="Experiments & The Lab" title="Things built for the joy of it." />
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4" data-lenis-prevent>
      {lab.map((e) => (
        <motion.article key={e.n} {...fade} whileHover={{ y: -6 }} className="surface snap-start shrink-0 w-[85%] sm:w-[45%] lg:w-[32%] p-8 min-h-[260px] flex flex-col justify-between">
          <p className="meta text-primary">Experiment {e.n}</p>
          <div>
            <h3 className="font-serif italic font-light text-3xl text-foreground">{e.t}</h3>
            <p className="mt-3 text-muted-foreground">{e.d}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

/* 08 — Process */
const steps = [
  { t: "Direct Ground Observation", d: "Documenting physical user friction before touching code." },
  { t: "Minimal Proof-of-Concept", d: "Engineering functional production slices in days." },
  { t: "Architectural Hardening", d: "Type safety, database row-level security, edge caching." },
  { t: "Invisible Integration", d: "Deploying systems that require zero user training." },
];
export const Process = () => (
  <section className="edition py-28 md:py-40">
    <SectionHead no="08" label="The Operational Process" title="Four movements, always in order." />
    <ol className="border-t border-border">
      {steps.map((s, i) => (
        <motion.li key={s.t} {...fade} className="grid md:grid-cols-12 gap-4 py-8 border-b border-border">
          <span className="md:col-span-2 font-display font-extrabold text-4xl text-primary">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="md:col-span-5 font-display font-bold text-2xl text-foreground">{s.t}</h3>
          <p className="md:col-span-5 text-muted-foreground">{s.d}</p>
        </motion.li>
      ))}
    </ol>
  </section>
);

/* 09 — Journey */
const journey = [
  { y: "Early", t: "Solving local problems in Mau", d: "Small tools for shops and families — spreadsheets, chat bots, simple sites." },
  { y: "2025", t: "Mau Care", d: "First production system for a real clinic, replacing a paper register." },
  { y: "Aug 2025", t: "Technical Head, PROCBSE", d: "Scaled exam-prep delivery to 50,000+ students nationwide." },
  { y: "2026", t: "UnMask & Hustlers", d: "Public-interest AI and a student opportunity platform." },
];
export const Journey = () => (
  <section className="edition py-28 md:py-40">
    <SectionHead no="09" label="Personal Story & Journey" title="From a register in Mau to national platforms." />
    <ol className="relative border-l border-border ml-2 space-y-12">
      {journey.map((j) => (
        <motion.li key={j.t} {...fade} className="pl-8 relative">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
          <p className="meta text-primary">{j.y}</p>
          <h3 className="font-display font-bold text-2xl mt-2 text-foreground">{j.t}</h3>
          <p className="text-muted-foreground mt-2 max-w-xl">{j.d}</p>
        </motion.li>
      ))}
    </ol>
  </section>
);
