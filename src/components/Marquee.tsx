const Marquee = () => {
  const items = [
    "CRAFTING VISUALS",
    "★",
    "BUILDING WORLDS",
    "★",
    "DESIGNING REALITY",
    "★",
    "CREATIVE SOLUTIONS",
    "★",
    "DIGITAL EXCELLENCE",
    "★",
  ];

  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center gap-8">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-bold text-primary-foreground"
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
