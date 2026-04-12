import coachingImage from "@/assets/coaching-1.jpg";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={coachingImage}
          alt="Denilson Monteiro en coaching"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-6 pb-24 pt-40">
        <div className="max-w-xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 animate-fade-up">
            Change ton corps.
            <br />
            Pour de vrai.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Coaching personnalisé en Haute-Savoie.
            <br />
            Résultats visibles en 6 mois.
          </p>
          <div className="flex items-center gap-1 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
            ))}
            <span className="text-muted-foreground text-sm ml-2">100% de taux de satisfaction</span>
          </div>
          <a
            href="#contact"
            className="inline-block bg-foreground text-background font-medium px-8 py-4 rounded-md text-base hover:bg-foreground/90 transition-colors animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Réserver une séance découverte
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
