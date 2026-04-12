const stats = [
  { value: "5.0 / 5", label: "Note moyenne Google" },
  { value: "27", label: "Avis clients" },
  { value: "6 mois", label: "Pour voir des résultats" },
  { value: "BPJEPS", label: "Diplôme d'État" },
];

const SocialProofBar = () => {
  return (
    <section className="py-14 bg-[hsl(0_0%_7%)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:divide-x md:divide-foreground/20">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-10 py-4 md:py-0">
              <p className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
