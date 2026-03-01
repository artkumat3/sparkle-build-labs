const Marquee = () => {
  const items = [
    "WEB DEVELOPMENT",
    "✦",
    "AI AUTOMATION",
    "✦",
    "SMART SOLUTIONS",
    "✦",
    "UI/UX DESIGN",
    "✦",
    "DIGITAL EXCELLENCE",
    "✦",
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-primary via-accent to-primary overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center gap-8">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-bold text-primary-foreground/90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
