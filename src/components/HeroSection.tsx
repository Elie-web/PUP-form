import coachingImage from "@/assets/hero.png";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={coachingImage}
          alt="PUP Form coaching"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-6 pb-24 pt-40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-5">
            Coach sportif et mental à 360°
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 animate-fade-up text-white">
            Clarté. Décision.
            <br />
            Joie de vivre.
          </h1>
          <p className="text-lg text-white/70 mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            La Dépolarisation© — une transformation durable en 20h.
          </p>
          <div className="flex items-center justify-center gap-1 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brand text-brand" />
            ))}
            <span className="text-white/70 text-sm ml-2">5/5 · 53 avis Google</span>
          </div>
          <a
            href="/contact"
            className="inline-block bg-brand text-white font-medium px-8 py-4 rounded-md text-base hover:bg-brand/90 transition-colors animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            On en parle ?
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
