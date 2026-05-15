export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  cover?: string;
  coverDark?: string;
  problem: string;
  role: string;
  stack: { group: string; items: string[] }[];
  architecture: string[];
  challenges: { title: string; body: string }[];
  outcomes: { metric: string; label: string }[];
  tags: string[];
  links?: { label: string; href: string }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  unmask: {
    slug: "unmask",
    title: "UnMask — Coaching Ad Transparency",
    tagline:
      "An AI-powered platform that detects misleading coaching institute ads by analyzing topper claims, surfacing conflicts across institutes, and generating evidence packs for consumer-protection complaints.",
    category: "AI / Civic Tech",
    year: "2026",
    problem:
      "Indian coaching institutes routinely claim the same exam toppers in their advertising. Parents and students have no way to verify which claim is real, and consumer-protection bodies don't have structured evidence to act on. The data exists in PDFs, screenshots, and newspaper scans — unindexed and unsearchable.",
    role:
      "Solo full-stack engineer. Owned product, data pipeline, OCR/LLM layer, web app, and complaint-generation flow.",
    stack: [
      { group: "Frontend", items: ["React", "TypeScript", "Tailwind", "shadcn/ui"] },
      { group: "Backend", items: ["Supabase (Postgres + RLS)", "Edge Functions (Deno)"] },
      { group: "AI & Data", items: ["OpenAI (GPT-4o)", "Tesseract OCR", "pgvector"] },
      { group: "Infra", items: ["Vercel", "Supabase Storage", "GitHub Actions"] },
    ],
    architecture: [
      "Ad ingestion: users upload an ad image or PDF; storage is scoped per-user via RLS-protected buckets.",
      "OCR pipeline extracts text and topper names; structured fields (name, rank, exam, year, institute) are normalized via an LLM extraction step with a strict JSON schema.",
      "Conflict detection: candidate records are embedded with pgvector and matched across institutes; same-name + same-rank + same-year across multiple institutes flags a conflict.",
      "Evidence pack generator: composes a printable PDF with side-by-side ad screenshots, extracted claims, and the detected overlap — ready for a consumer-court complaint.",
    ],
    challenges: [
      {
        title: "Noisy OCR on newspaper scans",
        body: "Old print scans broke vanilla OCR. Solved with a pre-processing step (deskew + adaptive binarization) and a second-pass LLM correction prompted with the institute's known naming conventions.",
      },
      {
        title: "False-positive conflicts",
        body: "Common names triggered noisy matches. Added a confidence score combining name similarity, rank exactness, exam year, and a vector distance threshold before surfacing a conflict.",
      },
      {
        title: "Trust + safety",
        body: "Every flagged conflict ships with the original sources so reviewers can verify. Nothing is published without a human accept step.",
      },
    ],
    outcomes: [
      { metric: "500+", label: "Ads scanned in pilot" },
      { metric: "12", label: "Verified topper-claim conflicts surfaced" },
      { metric: "<5s", label: "Avg. OCR + extraction per ad" },
    ],
    tags: ["AI", "OCR", "pgvector", "Civic Tech", "Supabase"],
  },

  "mau-care": {
    slug: "mau-care",
    title: "Mau Care — Local Healthcare Access",
    tagline:
      "A booking and records platform for small clinics in Mau (UP), built around a real local problem: patients juggling paper slips and missed follow-ups.",
    category: "Web App",
    year: "2025",
    problem:
      "Small-town clinics still run on paper registers. Patients lose prescriptions, miss follow-ups, and clinics can't pull a patient's history without rifling through stacks. Existing platforms are built for metro hospitals and don't fit a single-doctor practice.",
    role:
      "Solo developer. Talked to two clinics, scoped the MVP, and shipped the booking flow, patient records, and clinic dashboard end-to-end.",
    stack: [
      { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "React Query"] },
      { group: "Backend", items: ["Supabase (Postgres)", "Row-Level Security", "Edge Functions"] },
      { group: "Auth & Payments", items: ["Supabase Auth (phone OTP)", "Razorpay"] },
      { group: "Infra", items: ["Vercel", "Supabase Storage", "Resend (email)"] },
    ],
    architecture: [
      "Patient and clinic accounts share one auth pool but RLS scopes every row by clinic_id and patient_id — clinics cannot see each other's records.",
      "Bookings are slot-based with conflict locking handled in a Postgres function so two patients can't grab the same slot.",
      "Patient history (visits, prescriptions, uploaded reports) is rendered from a single timeline view; reports live in Supabase Storage with signed-URL access.",
      "Reminders go out via an edge function on a cron trigger — SMS for OTP, email for follow-ups.",
    ],
    challenges: [
      {
        title: "Phone-only patients",
        body: "Many patients don't have email. Auth is phone-OTP first, with email optional. Doctor-side dashboards are email + password.",
      },
      {
        title: "Offline-tolerant intake",
        body: "Reception desks lose connectivity. Intake form caches locally and syncs when the network returns.",
      },
      {
        title: "RLS that doesn't get in the way",
        body: "Clinics need to onboard their own staff. Built a roles table + has_role() security-definer function so RLS policies don't recurse.",
      },
    ],
    outcomes: [
      { metric: "~70%", label: "Less time spent on paper records" },
      { metric: "200+", label: "Bookings handled in pilot month" },
      { metric: "0", label: "Double-booked slots (Postgres lock)" },
    ],
    tags: ["Next.js", "Supabase", "Healthcare", "RLS", "Razorpay"],
  },

  brainx: {
    slug: "brainx",
    title: "BrainX — AI Test Generator",
    tagline:
      "An AI-powered test platform for Class 10 students with 100% CBSE-aligned questions, instant evaluation, and topic-level analytics.",
    category: "EdTech / AI",
    year: "2025",
    problem:
      "Existing test prep platforms either repeat the same question banks or generate off-syllabus questions. Students waste time on irrelevant practice and don't get useful weak-area feedback.",
    role:
      "Full-stack developer. Built the question generation pipeline, test-taking UI, and analytics dashboard.",
    stack: [
      { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "Recharts"] },
      { group: "Backend", items: ["FastAPI", "Postgres", "Redis (queue)"] },
      { group: "AI", items: ["OpenAI", "LangChain", "Custom CBSE rubric prompts"] },
      { group: "Infra", items: ["Vercel", "Render", "Upstash Redis"] },
    ],
    architecture: [
      "Question generation runs as a queued job: chapter + difficulty go in, validated MCQs and explanations come out. Every generated question is checked against a CBSE blueprint before it's saved.",
      "Test sessions are stateful — answers stream to the backend so a refresh never loses progress.",
      "Analytics layer rolls up per-topic accuracy and time-per-question into a weak-area heatmap.",
    ],
    challenges: [
      {
        title: "Hallucinated answers",
        body: "Solved with a two-pass pipeline: generate, then re-verify the answer against the question with a separate prompt. Mismatches get re-generated.",
      },
      {
        title: "Cost control",
        body: "Cached generations by (chapter, difficulty, seed) so repeat tests don't re-bill the LLM. Cut per-test cost by ~60%.",
      },
    ],
    outcomes: [
      { metric: "1,000+", label: "Questions generated and verified" },
      { metric: "60%", label: "LLM cost reduction via caching" },
      { metric: "<800ms", label: "Median question render time" },
    ],
    tags: ["AI", "EdTech", "FastAPI", "LangChain", "Next.js"],
  },
};

export const caseStudyList = Object.values(caseStudies);
