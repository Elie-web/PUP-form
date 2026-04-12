import { AlertTriangle, BatteryLow, Lock, Compass } from "lucide-react";

const cards = [
  {
    icon: Compass,
    title: "Manque de clarté",
    sub: "dans la prise de décision",
    desc: "La pression du quotidien brouille ton jugement. Tu hésites là où tu devrais avancer avec confiance.",
  },
  {
    icon: Lock,
    title: "Peurs et croyances",
    sub: "qui freinent ton potentiel",
    desc: "Des schémas inconscients te bloquent : frustration, colère, impuissance, culpabilité.",
  },
  {
    icon: BatteryLow,
    title: "Épuisement professionnel",
    sub: "qui s'installe en silence",
    desc: "La pression constante érode ton énergie, ta vision et ta capacité à te projeter.",
  },
  {
    icon: AlertTriangle,
    title: "Grande solitude",
    sub: "face aux responsabilités",
    desc: "Être dirigeant, c'est souvent porter seul des décisions immenses et des relations complexes.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Tu te reconnais ?</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Être dirigeant, c'est cool.<br />Mais ça pèse lourd.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-secondary rounded-2xl p-8 flex flex-col gap-6">
                <div className="w-12 h-12 bg-background rounded-xl border border-border flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold leading-tight mb-0.5">{card.title}</p>
                  <p className="text-brand text-xs font-medium mb-3">{card.sub}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-foreground text-lg font-medium">
          C'est exactement pour ça que j'ai créé la méthode <strong>Dépolarisation©</strong>.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
