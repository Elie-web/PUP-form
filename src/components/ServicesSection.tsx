import { Dumbbell, Leaf, Brain, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.png";
import nutritionImg from "@/assets/nutrition.png";
import coachMentaleImg from "@/assets/coach mentale.png";

const services = [
  {
    title: "Coaching sportif",
    sub: "Personal training · Individuels et petits groupes",
    description: "Juste l'activité physique qu'il faut. Ni trop, ni trop peu. Un programme conçu pour votre réalité de parent, qui tient dans votre agenda et donne des résultats visibles dès les premières semaines.",
    icon: Dumbbell,
    image: heroImg,
    stat: { n: "30 000+", l: "séances réalisées" },
  },
  {
    title: "Bien-être & nutrition",
    sub: "Routine · Alimentation · Récupération",
    description: "Cuisiner sain ET bon dans un temps court. Une routine hebdomadaire simple avec des outils concrets pour optimiser votre énergie — sans tout bouleverser.",
    icon: Leaf,
    image: nutritionImg,
    stat: { n: "100%", l: "sur mesure" },
  },
  {
    title: "Coaching mental",
    sub: "Mindset · Confiance · Développement personnel",
    description: "Retrouver la clarté, regagner confiance en soi, sortir des schémas qui épuisent. Un accompagnement en profondeur pour les parents qui veulent se retrouver.",
    icon: Brain,
    image: coachMentaleImg,
    stat: { n: "15 ans", l: "d'expérience" },
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex-1">
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Les trois piliers</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Corps, nutrition, mental.
              <br />
              <span className="text-muted-foreground/50">Un seul résultat : vous retrouver.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
          >
            Voir le programme complet <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-brand/30 transition-all hover:shadow-lg">
                {/* Image with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Stat badge bottom-left */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2">
                      <p className="font-heading text-lg font-bold text-white leading-none">{service.stat.n}</p>
                      <p className="text-white/70 text-xs mt-0.5">{service.stat.l}</p>
                    </div>
                  </div>
                  {/* Icon top-right */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-brand text-xs font-medium uppercase tracking-wider mb-3">{service.sub}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
