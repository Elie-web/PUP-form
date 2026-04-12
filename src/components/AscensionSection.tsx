const steps = [
  {
    number: "01",
    title: "Bilan complet",
    description: "On analyse ton point de départ, tes objectifs, ton mode de vie.",
  },
  {
    number: "02",
    title: "Programme sur-mesure",
    description: "Entraînement + nutrition adaptés uniquement à toi.",
  },
  {
    number: "03",
    title: "Suivi & ajustements",
    description: "Chaque semaine on ajuste pour garantir tes résultats.",
  },
];

const AscensionSection = () => {
  return (
    <section className="py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Comment on transforme ton physique
          </h2>
          <p className="text-muted-foreground text-lg">Le Système Ascension™ en 3 étapes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="p-2">
              <span className="text-muted-foreground text-sm font-medium">{step.number}</span>
              <h3 className="font-heading text-2xl font-bold mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-foreground text-background font-medium px-8 py-4 rounded-md text-base hover:bg-foreground/90 transition-colors"
          >
            Je veux transformer mon physique
          </a>
        </div>
      </div>
    </section>
  );
};

export default AscensionSection;
