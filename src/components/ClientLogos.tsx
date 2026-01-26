const ClientLogos = () => {
  const clients = [
    "Google",
    "Microsoft",
    "Apple",
    "Amazon",
    "Meta",
    "Netflix",
    "Spotify",
    "Adobe",
  ];

  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center gap-16">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
