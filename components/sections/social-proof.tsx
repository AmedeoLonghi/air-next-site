const logos = [
  "Azienda Alpha",
  "Beta Corp",
  "Gamma Group",
  "Delta S.p.A.",
  "Epsilon Srl",
  "Zeta Industries",
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Scelto da oltre 50 aziende in Italia
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <div
              key={name}
              className="h-8 flex items-center text-muted-foreground/50 font-semibold text-sm tracking-wider grayscale hover:grayscale-0 hover:text-foreground transition-all"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
