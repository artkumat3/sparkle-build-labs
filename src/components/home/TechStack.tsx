import SectionHeading from "@/components/shared/SectionHeading";
import { techStack } from "@/data/site";

const TechStack = () => (
  <section className="container py-20" aria-labelledby="stack-heading">
    <SectionHeading kicker="Tools" title="The stack I work with" />
    <ul className="flex flex-wrap gap-3">
      {techStack.map((t) => (
        <li
          key={t}
          className="rounded-sm border border-border bg-card px-4 py-2 font-mono text-sm text-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  </section>
);

export default TechStack;
