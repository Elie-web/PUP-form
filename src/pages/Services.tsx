import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Brain, Dumbbell, Leaf, Apple } from "lucide-react";
import heroImg from "@/assets/hero.png";
import nutritionImg from "@/assets/nutrition.png";
import coachMentaleImg from "@/assets/coach mentale.png";
import pupProfile from "@/assets/pup form profile.jpg";

const services = [
  {
    icon: Brain,
    title: "Coaching mental & développement personnel",
    subtitle: "Mindset · Confiance en soi · Identité",
    description:
      "Antoine est spécialisé en coaching identité et développement personnel. Il utilise des outils de haute performance pour libérer la charge mentale, dissoudre les blocages émotionnels et restaurer une vraie confiance en vous.",
    details: [
      "Séances de coaching individuel",
      "Travail sur l'image de soi et l'identité",
      "Déblocage des freins psychologiques",
      "Outils de gestion du stress et des angoisses",
      "Impact durable sur vie pro, perso et familiale",
    ],
    tag: "Spécialité signature",
    image: coachMentaleImg,
  },
  {
    icon: Dumbbell,
    title: "Personal Training & Fitness",
    subtitle: "Studio · Séances individuelles & petits groupes",
    description:
      "Un programme physique conçu sur mesure, adapté à votre niveau, votre emploi du temps et vos objectifs de parent. Vous progressez avec méthode, sans vous épuiser — en séance individuelle ou en petit groupe.",
    details: [
      "Bilan physique initial complet",
      "Programme de renforcement musculaire",
      "Séances de fitness fonctionnel",
      "Suivi des performances et progression",
      "Petits groupes motivants (max 4 personnes)",
    ],
    tag: "Studio à Saint-Martin-d'Hères",
    image: heroImg,
  },
  {
    icon: Apple,
    title: "Accompagnement nutritionnel",
    subtitle: "Nutrition · Hygiène de vie · Énergie",
    description:
      "La nutrition fait partie intégrante de chaque parcours. Emily vous guide vers une alimentation adaptée à votre vie de parent : simple, efficace, sans frustration. Cuisiner sain ET bon dans un temps court.",
    details: [
      "Bilan alimentaire personnalisé",
      "Plan nutritionnel adapté à votre rythme",
      "Stratégies pratiques pour les agendas chargés",
      "Optimisation de l'énergie au quotidien",
      "Suivi et ajustements réguliers",
    ],
    tag: "Avec Emily",
    image: nutritionImg,
  },
  {
    icon: Leaf,
    title: "Bien-être & Récupération",
    subtitle: "Avec Emily · Routine · Récupération active",
    description:
      "Emily prend en charge votre récupération et bien-être global. Le repos actif est une composante essentielle de la performance — apprendre à récupérer, c'est aussi progresser.",
    details: [
      "Accompagnement de la récupération physique",
      "Routine bien-être hebdomadaire",
      "Gestion du sommeil et de la fatigue",
      "Rituel bien-être personnalisé",
      "Approche douce et bienveillante",
    ],
    tag: "Avec Emily",
    image: pupProfile,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Services PUP Form"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-5">Ce que nous proposons</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-white">
            Fait pour votre vie
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Une routine réaliste, des outils concrets, un accompagnement humain.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-0">
            {services.map((service, i) => {
              const Icon = service.icon;
              const reverse = i % 2 !== 0;
              return (
                <div key={i} className="py-20 border-b border-border">
                  <div className={`grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-brand" />
                        </div>
                        <span className="text-brand text-xs font-medium uppercase tracking-widest">{service.tag}</span>
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground text-sm mb-6">{service.subtitle}</p>
                      <p className="text-muted-foreground text-base leading-relaxed mb-8">{service.description}</p>
                      <ul className="space-y-3 mb-10">
                        {service.details.map((d, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="text-brand mt-0.5 shrink-0">✓</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded-xl text-sm hover:bg-brand/90 transition-colors"
                      >
                        En savoir plus
                      </Link>
                    </div>
                    <div className="rounded-2xl overflow-hidden h-[480px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Par où commencer ?
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
            Un entretien de 30 minutes pour échanger sur votre situation. On vous guidera vers l'accompagnement le plus adapté.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand text-white font-medium px-10 py-4 rounded-xl text-lg hover:bg-brand/90 transition-colors"
          >
            Réserver mon entretien découverte
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
