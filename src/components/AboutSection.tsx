import coachingImage from "@/assets/pup form profile.jpg";
import { Target, Zap, Heart } from "lucide-react";

const roles = [
  {
    icon: Target,
    label: "Mon OBJECTIF",
    text: "Vous rendre plus performant : mieux réfléchir et interagir au travail, retrouver votre sérénité au quotidien, prendre plus de plaisir dans vos loisirs et en famille.",
  },
  {
    icon: Zap,
    label: "Mon AVANTAGE",
    text: "Une routine hebdomadaire positive avec des outils novateurs pour optimiser votre temps et votre énergie. Adaptée à votre réalité de dirigeant.",
  },
  {
    icon: Heart,
    label: "Mon RÔLE",
    text: "Vous accompagner à sortir des schémas limitants et retrouver votre plein potentiel de décision, la liberté de votre identité et votre joie de vivre.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Qui suis-je</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Coach sportif et mental à 360°
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Formé à l'Académie de la Haute Performance, j'ai coaché entre autres un escrimeur triple médaillé paralympique (Londres 2012).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              En 15 ans et 50 000 séances, j'ai accompagné plus de 2 000 professionnels actifs, ces "athlètes du quotidien" qui portent des responsabilités immenses, souvent seuls.
            </p>
            <div className="space-y-4">
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="flex gap-5 p-5 bg-secondary rounded-xl border border-border">
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-brand text-xs font-bold uppercase tracking-widest mb-1">{r.label}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden sticky top-28">
            <img
              src={coachingImage}
              alt="Coach sportif et mental"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
