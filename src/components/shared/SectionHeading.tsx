interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ kicker, title, description }: SectionHeadingProps) => (
  <div className="mb-10 max-w-2xl">
    <p className="label-mono mb-3">{kicker}</p>
    <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
    )}
  </div>
);

export default SectionHeading;
