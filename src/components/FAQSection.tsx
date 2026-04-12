import { useState } from "react";

const faqs = [
  {
    q: "Est-ce que le coaching en ligne fonctionne vraiment ?",
    a: "Oui. La majorité de mes clients en ligne obtiennent les mêmes résultats qu'en présentiel grâce au suivi vidéo hebdomadaire.",
  },
  {
    q: "Je suis débutant, c'est fait pour moi ?",
    a: "Absolument. Le programme est adapté à ton niveau. On part de là où tu es.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Les premiers changements sont visibles dès le premier mois. Une vraie transformation prend 3 à 6 mois.",
  },
  {
    q: "Je dois avoir du matériel spécifique ?",
    a: "Non. Je m'adapte à ce que tu as — salle, home gym ou poids du corps.",
  },
  {
    q: "Comment se passe le suivi au quotidien ?",
    a: "Programme via app, échanges par message, et point vidéo chaque semaine.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-40 bg-secondary">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16">
          Questions fréquentes
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-foreground/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-6 flex items-center justify-between gap-4"
              >
                <span className="text-foreground font-medium">{faq.q}</span>
                <span className="text-muted-foreground shrink-0 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-muted-foreground text-sm leading-relaxed pb-6">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
