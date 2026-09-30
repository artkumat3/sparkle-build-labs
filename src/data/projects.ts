// Single source of truth for public project content.
// Replace every [PLACEHOLDER] with real, verified material before publishing.

export type ProjectStatus = "live" | "in-development";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  year: string;
  role: string;
  timeline: string;
  stack: string[];
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  coverImage: string;
  screenshots: ProjectScreenshot[];
  oldWay: string;
  newWay: string;
  problem: string;
  approach: string;
  results: string[];
  learnings: string[];
  mediumUrl?: string;
  mediumPublishedDate?: string;
}

export const projects: Project[] = [
  {
    slug: "mau-care",
    title: "Mau Care",
    tagline: "Booking and digital records for single-doctor clinics.",
    tags: ["Web App", "Healthcare", "Bookings"],
    year: "2025",
    role: "Solo developer — design, build, deploy",
    timeline: "[PLACEHOLDER — e.g. 3 months]",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "live",
    liveUrl: "https://example.com", // [PLACEHOLDER — real live URL]
    githubUrl: "https://github.com/aryngpt", // [PLACEHOLDER — real repo URL]
    coverImage: "/placeholder.svg", // [PLACEHOLDER — real cover screenshot]
    screenshots: [
      {
        src: "/placeholder.svg",
        alt: "Mau Care appointment booking screen",
        caption: "[PLACEHOLDER] Booking screen — a patient picks a slot in under a minute.",
      },
      {
        src: "/placeholder.svg",
        alt: "Mau Care patient records list",
        caption: "[PLACEHOLDER] Patient records replace the paper register.",
      },
      {
        src: "/placeholder.svg",
        alt: "Mau Care daily schedule view",
        caption: "[PLACEHOLDER] The doctor's day at a glance.",
      },
    ],
    oldWay:
      "Appointments were written in a paper register. Patient history lived in loose files. Follow-ups depended on memory and phone calls.",
    newWay:
      "Patients book a slot online. The doctor sees the day, the history and the follow-ups on one screen. The register can finally rest.",
    problem:
      "Single-doctor clinics in small towns run on paper. Records get lost, double-bookings happen, and the doctor spends evenings on the phone confirming tomorrow's patients.",
    approach:
      "I kept the screens as simple as the register they replace. Big type, few buttons, and a flow a first-time smartphone user can finish without help. [PLACEHOLDER — add real details]",
    results: [], // Hidden until real, verified results exist.
    learnings: [
      "[PLACEHOLDER — e.g. what clinic staff taught you about software design]",
    ],
    mediumUrl: undefined, // [PLACEHOLDER — Medium case study URL]
    mediumPublishedDate: undefined,
  },
  {
    slug: "unmask",
    title: "UnMask",
    tagline: "An AI check on misleading coaching-institute advertisements.",
    tags: ["AI", "Education", "Consumer Protection"],
    year: "2025",
    role: "Solo developer — model, app, outreach",
    timeline: "[PLACEHOLDER — e.g. 2 months]",
    stack: ["Python", "FastAPI", "React", "OpenAI"],
    status: "live",
    liveUrl: "https://example.com", // [PLACEHOLDER — real live URL]
    githubUrl: "https://github.com/aryngpt", // [PLACEHOLDER — real repo URL]
    coverImage: "/placeholder.svg", // [PLACEHOLDER — real cover screenshot]
    screenshots: [
      {
        src: "/placeholder.svg",
        alt: "UnMask advertisement analysis result",
        caption: "[PLACEHOLDER] An ad analysed claim by claim.",
      },
      {
        src: "/placeholder.svg",
        alt: "UnMask claim verification details",
        caption: "[PLACEHOLDER] Each claim is checked against public data.",
      },
    ],
    oldWay:
      "Parents believed newspaper ads and hoardings at face value. Checking a claim meant phone calls, visits and guesswork.",
    newWay:
      "Paste the ad. UnMask reads the claims, checks them against public data, and flags what looks exaggerated — in plain language.",
    problem:
      "Coaching ads promise ranks and results that are hard to verify. Families spend savings on claims nobody has checked.",
    approach:
      "An AI pipeline extracts each claim from the ad, then cross-checks it. The report is written for a parent, not a lawyer. [PLACEHOLDER — add real details]",
    results: [],
    learnings: [
      "[PLACEHOLDER — e.g. what you learned about AI accuracy and trust]",
    ],
    mediumUrl: undefined,
    mediumPublishedDate: undefined,
  },
  {
    slug: "hustlers",
    title: "Hustlers",
    tagline: "Internships, hackathons and scholarships matched to a student's class and skills.",
    tags: ["Education", "Platform", "Students"],
    year: "2026",
    role: "Founder & developer",
    timeline: "May 2026 — present",
    stack: ["React", "TypeScript", "Supabase"],
    status: "in-development",
    liveUrl: undefined,
    githubUrl: undefined, // [PLACEHOLDER — add repo when public]
    coverImage: "/placeholder.svg", // [PLACEHOLDER — real cover screenshot]
    screenshots: [
      {
        src: "/placeholder.svg",
        alt: "Hustlers opportunity feed mockup",
        caption: "[PLACEHOLDER] Opportunities matched to class and skills.",
      },
    ],
    oldWay:
      "Students heard about opportunities late — through a friend, a noticeboard, or not at all. Most deadlines passed unseen.",
    newWay:
      "A student enters their class and skills once. Hustlers shows only what fits them, with deadlines front and centre.",
    problem:
      "Students in small towns miss internships, hackathons and scholarships simply because the information never reaches them in time.",
    approach:
      "Start narrow: one district, a few schools, a curated list. Grow only when the matching proves useful. [PLACEHOLDER — add real details]",
    results: [],
    learnings: ["[PLACEHOLDER — early lessons from building Hustlers]"],
    mediumUrl: undefined,
    mediumPublishedDate: undefined,
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
