// Writing feed. Medium RSS will populate this at build time in a later step;
// until then this static list is the fallback.
// [PLACEHOLDER — replace with real Medium articles]

export interface Article {
  title: string;
  url: string;
  publishedDate: string;
  excerpt: string;
  source: "medium" | "note";
}

export const articles: Article[] = [
  {
    title: "[PLACEHOLDER] From register to software: what a clinic taught me",
    url: "", // Medium article URL
    publishedDate: "2026",
    excerpt:
      "Notes on building booking software for a single-doctor clinic, and why the simplest screen won.",
    source: "medium",
  },
  {
    title: "[PLACEHOLDER] Checking coaching ads with AI",
    url: "",
    publishedDate: "2026",
    excerpt:
      "How UnMask reads an advertisement claim by claim, and where AI still gets it wrong.",
    source: "medium",
  },
];

export const localNotes: Article[] = [
  {
    title: "[PLACEHOLDER] Why I build for small towns first",
    url: "/notes",
    publishedDate: "2026",
    excerpt:
      "Software that works for a first-time smartphone user works for everyone.",
    source: "note",
  },
];
