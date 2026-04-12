import { MessageCircle, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "On se parle",
    tag: "Échange humain",
    desc: "30 min pour comprendre ta situation, tes blocages, tes ambitions. Pas un formulaire : une vraie conversation.",
  },
  {
    number: "02",
    icon: Zap,
    title: "La Dépolarisation©",
    tag: "Méthode exclusive",
    desc: "Contrairement au coaching classique, cette méthode agit en profondeur. Assimilation rapide : environ 20h. Résultats durables.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Tu reprends le contrôle",
    tag: "Transformation réelle",
    desc: "Meilleures décisions, plus de sérénité, plus de joie au quotidien. La liberté de ton identité retrouvée.",
  },
];

const AscensionSection = () => {
  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Notre méthode</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Comment ça fonctionne</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-background rounded-2xl p-8 border border-border relative overflow-hidden">
                <span className="absolute top-6 right-6 font-heading text-6xl font-bold text-foreground/5 leading-none select-none">{step.number}</span>
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-8">
                  <Icon className="w-7 h-7 text-brand" strokeWidth={1.5} />
                </div>
                <span className="text-brand text-xs font-medium uppercase tracking-widest">{step.tag}</span>
                <h3 className="font-heading text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-brand text-white font-medium px-8 py-4 rounded-md text-base hover:bg-brand/90 transition-colors"
          >
            Je veux en savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default AscensionSection;
