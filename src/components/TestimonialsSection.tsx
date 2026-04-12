import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "J'ai eu la chance de participer à une formation animée par Antoine Petelaz, coach personnel spécialisé en identité. Ce fut une expérience très enrichissante.",
    name: "Romane Agaësse",
    initial: "R",
  },
  {
    text: "Je n'étais pas une grande sportive. J'ai été accompagnée avec patience et bienveillance. Aujourd'hui je suis fière de mes résultats et de l'énergie retrouvée.",
    name: "Avis StarOfService",
    initial: "A",
  },
  {
    text: "Une personne très à l'écoute mais aussi très motivante. Elle a très bien compris mes objectifs et me pousse à chaque séance. Je recommande vivement.",
    name: "Avis StarOfService",
    initial: "A",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Témoignages</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Ils ont retrouvé leur élan</h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-5 py-2.5 shrink-0">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand text-brand" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 · 53 avis Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 border border-border flex flex-col justify-between gap-8">
              <div>
                <Quote className="w-8 h-8 text-brand/30 mb-5" />
                <p className="text-foreground text-base leading-relaxed">{t.text}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                  <span className="text-brand text-sm font-bold">{t.initial}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-brand text-brand" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
