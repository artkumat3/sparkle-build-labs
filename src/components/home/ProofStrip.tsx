import { proofFigures } from "@/data/site";

// Renders nothing until verified numbers are supplied.
const ProofStrip = () => {
  if (proofFigures.length === 0) return null;
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="container grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {proofFigures.map((f) => (
          <div key={f.label}>
            <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
              {f.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProofStrip;
