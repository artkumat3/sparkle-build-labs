export type Work = {
  id: string;
  name: string;
  year: string;
  domain: string;
  description: string;
  stack: string[];
  live?: string;
  source?: string;
  study: { what: string; why: string; process: string; architecture: string; metrics: string[]; lessons: string };
};

export const works: Work[] = [
  {
    id: "hustlers",
    name: "Hustlers",
    year: "2026",
    domain: "EdTech · Gen Z Careers · Mentorship",
    description:
      "Student opportunity platform curating internships, hackathons, scholarships and exam-prep streaks matched to class and target exams. Verified skill passports and AI match scoring.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "pgvector"],
    study: {
      what: "A single feed of real opportunities, ranked for each student's class, exams and skills.",
      why: "Students discover internships through scattered Instagram posts and WhatsApp forwards — most expire before they're seen.",
      process: "Interviewed students, mapped where opportunities actually surface, shipped a curated feed before any AI.",
      architecture: "Next.js + Supabase with RLS; pgvector embeddings for match scoring; scheduled ingestion jobs.",
      metrics: ["Match scoring per student profile", "Verified skill passports", "Daily prep streaks"],
      lessons: "Curation beats volume. A short, trusted list outperforms an exhaustive one.",
    },
  },
  {
    id: "maucare",
    name: "Mau Care",
    year: "2025",
    domain: "Healthcare · Telemedicine",
    description:
      "Booking and patient-records platform for single-doctor clinics in Mau, UP. Replaces paper registers and chaotic messaging with automated scheduling.",
    stack: ["Python", "FastAPI", "Supabase", "PostgreSQL"],
    live: "https://maucare26.vercel.app",
    study: {
      what: "Appointment booking, queue management and patient history for small clinics.",
      why: "Clinics ran on a paper register and a phone ringing all day. Patients waited hours without knowing their turn.",
      process: "Sat in the clinic, logged the register flow, then digitised it one column at a time.",
      architecture: "FastAPI services over Postgres with row-level security; lightweight web front for staff and patients.",
      metrics: ["Paper register replaced", "Automated scheduling", "Searchable patient records"],
      lessons: "If the receptionist needs training, the design isn't done.",
    },
  },
  {
    id: "unmask",
    name: "UnMask",
    year: "2026",
    domain: "Public-Interest AI · Civic Transparency",
    description:
      "Ad-audit platform detecting deceptive or conflicting coaching-institute claims. OCR extracts fine print and matches records into anonymous CCPA evidence dossiers.",
    stack: ["Next.js", "FastAPI", "LangChain", "OpenAI", "OCR"],
    live: "https://un-mask.vercel.app",
    study: {
      what: "Upload an ad, get a structured audit of every claim and its conflicts.",
      why: "Coaching ads make contradictory topper claims; parents have no easy way to verify them.",
      process: "Collected real ads, hand-annotated claims, then automated the extraction pipeline.",
      architecture: "OCR → LLM claim extraction (LangChain) → Postgres matching → dossier generator; anonymous submissions.",
      metrics: ["OCR fine-print extraction", "Cross-ad conflict detection", "CCPA-ready dossiers"],
      lessons: "AI is only credible when every output links back to its evidence.",
    },
  },
];
