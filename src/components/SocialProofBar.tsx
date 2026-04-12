const stats = [
  { value: "5.0 / 5", label: "Note Google" },
  { value: "50 000+", label: "Séances de coaching" },
  { value: "2 000+", label: "Professionnels accompagnés" },
  { value: "15 ans", label: "D'expérience" },
];

const SocialProofBar = () => {
  return (
    <section className="py-14 bg-secondary">
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
