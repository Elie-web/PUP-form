import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Formidable expérience avec Denilson ! Après deux mois de coaching, je peux dire que j'ai retrouvé le goût de l'effort. Les séances sont variées et bien construites.",
    name: "rionmaz",
  },
  {
    text: "Denilson est un coach dans l'écoute et l'accompagnement. On ne se sent jamais incapable quand on l'entend nous encourager. Super satisfaite de sa simplicité et bonne humeur.",
    name: "Sandra Yehouessi",
  },
  {
    text: "Les bons mouvements, les bons gestes, les bons exercices… Sans Denilson, j'aurais vite abandonné. Il est fiable, compétent, patient et MOTIVANT !",
    name: "Amethys Guia",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Ils en parlent mieux que moi
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="p-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground text-base mb-8 leading-relaxed">"{t.text}"</p>
              <p className="text-muted-foreground text-sm">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="text-sm">5.0 — 27 avis Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
