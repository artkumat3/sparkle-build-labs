const Marquee = () => {
  const items = [
    "A CREATIVE DEVELOPER",
    "•",
    "AI AUTOMATION",
    "•",
    "WEB DEVELOPMENT",
    "•",
    "SMART SOLUTIONS",
    "•",
  ];

  return (
    <section className="py-8 overflow-hidden border-y border-border/30">
      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center gap-8">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground/10 uppercase tracking-wider select-none"
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
