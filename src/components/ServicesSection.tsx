import { Dumbbell, Leaf, Brain } from "lucide-react";
import heroImg from "@/assets/hero.png";
import nutritionImg from "@/assets/nutrition.png";
import coachMentaleImg from "@/assets/coach mentale.png";

const services = [
  {
    title: "Coaching sportif",
    location: "Personal training · Individuels et petits groupes",
    description: "Juste l'activité physique qu'il faut. Ni trop, ni trop peu. Un programme conçu pour votre réalité de dirigeant, qui tient dans votre agenda et donne des résultats visibles.",
    icon: Dumbbell,
    accent: "bg-brand/8",
    image: heroImg,
  },
  {
    title: "Coaching bien-être et nutrition",
    location: "Routine · Alimentation · Récupération",
    description: "Cuisiner sain ET bon dans un temps court. Une routine hebdomadaire positive avec des outils novateurs pour optimiser votre temps et votre énergie.",
    icon: Leaf,
    accent: "bg-brand/5",
    image: nutritionImg,
  },
  {
    title: "Coaching mental",
    location: "Mindset · Décision · Dépolarisation©",
    description: "Mieux réfléchir, décider avec clarté, retrouver votre joie de vivre. La Dépolarisation© agit là où le coaching classique ne suffit pas.",
    icon: Brain,
    accent: "bg-brand/5",
    image: coachMentaleImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Comment on travaille ensemble
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Trois piliers. Un seul résultat : vous retrouver.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="group">
                <div className={`h-60 rounded-xl overflow-hidden flex items-center justify-center ${service.accent}`}>
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    <Icon className="w-20 h-20 text-brand/40" strokeWidth={0.9} />
                  )}
                </div>
                <div className="pt-6">
                  <h3 className="font-heading text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{service.location}</p>
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
