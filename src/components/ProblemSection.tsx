const painPoints = [
  "Tu t'entraînes depuis des mois sans voir de résultats",
  "Tu ne sais pas quoi manger pour progresser",
  "Tu manques de structure et de motivation",
  "Tu veux changer mais tu ne sais pas par où commencer",
];

const ProblemSection = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-14">
          Tu te reconnais ?
        </h2>
        <ul className="space-y-0 mb-14">
          {painPoints.map((point, i) => (
            <li
              key={i}
              className={`flex items-center gap-4 text-lg py-5 px-6 rounded-md ${
                i % 2 === 0 ? "bg-secondary" : ""
              }`}
            >
              <span className="text-foreground shrink-0">✓</span>
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-foreground text-lg">
          C'est pour ça que le Système Ascension™ existe.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
