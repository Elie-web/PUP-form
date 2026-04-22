import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "C'est fait pour moi si je suis épuisé(e) et que j'ai peu de temps ?",
    a: "C'est exactement pour toi. On a créé PUP Form en tant que parents, en sachant ce que c'est de manquer de temps et d'énergie. Notre méthode s'adapte à ta vraie vie.",
  },
  {
    q: "C'est pour les parents uniquement ?",
    a: "Non. PUP Form accompagne les parents et les couples qui veulent retrouver de l'élan, mieux profiter de leurs proches et retrouver une meilleure version d'eux-mêmes.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Dès les premières semaines, tu sens un regain d'énergie. Une vraie transformation durable s'installe sur 3 à 6 mois avec un suivi régulier.",
  },
  {
    q: "Est-ce que je dois tout changer dans ma vie ?",
    a: "Non. On construit avec toi une routine réaliste et progressive. L'idée, c'est d'optimiser ce que tu as déjà, pas de tout bouleverser.",
  },
  {
    q: "Où se déroulent les séances ?",
    a: "Au studio, 27 Av. Jean Jaurès à Saint-Martin-d'Hères. Et en ligne pour ceux qui préfèrent ou qui sont éloignés.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-28">
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Une question ? La réponse est probablement ici. Sinon, appelle-nous directement.
            </p>
            <a
              href="tel:0682311224"
              className="inline-block bg-brand text-white font-medium px-7 py-3.5 rounded-xl text-sm hover:bg-brand/90 transition-colors"
            >
              Poser ma question
            </a>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-border overflow-hidden transition-colors ${openIndex === i ? "bg-secondary" : "bg-background hover:bg-secondary/60"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-7 py-6 flex items-center justify-between gap-4"
                >
                  <span className="text-foreground font-medium text-base">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    {openIndex === i
                      ? <Minus className="w-4 h-4 text-brand" />
                      : <Plus className="w-4 h-4 text-brand" />
                    }
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-7 pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
