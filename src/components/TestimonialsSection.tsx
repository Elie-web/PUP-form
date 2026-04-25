import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp, staggerContainer, staggerFast } from "@/lib/motionVariants";

const testimonials = [
  {
    text: "J'ai eu la chance de participer à une formation animée par Antoine Petelaz, coach personnel spécialisé en identité. Ce fut une expérience très enrichissante, qui m'a aidé à retrouver de la clarté sur ce que je veux vraiment.",
    name: "Romane Agaësse",
    initial: "R",
    tag: "Coaching identité",
    gradient: "from-brand/20 to-brand/5",
  },
  {
    text: "Je n'étais pas une grande sportive. J'ai été accompagnée avec patience et bienveillance. Aujourd'hui je suis fière de mes résultats et de l'énergie retrouvée. Je recommande à tous les parents épuisés.",
    name: "Avis StarOfService",
    initial: "A",
    tag: "Coaching sportif",
    gradient: "from-orange-400/20 to-orange-400/5",
  },
  {
    text: "Une personne très à l'écoute mais aussi très motivante. Elle a très bien compris mes objectifs et me pousse à chaque séance. Un vrai changement dans ma façon d'aborder le quotidien.",
    name: "Avis StarOfService",
    initial: "A",
    tag: "Suivi personnalisé",
    gradient: "from-slate-400/20 to-slate-400/5",
  },
];

const TestimonialsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          variants={staggerFast}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Témoignages</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Ils ont retrouvé leur élan</h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 bg-secondary border border-border rounded-2xl px-5 py-3 shrink-0"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand text-brand" />
              ))}
            </div>
            <div>
              <p className="font-semibold text-sm">5.0 / 5</p>
              <p className="text-muted-foreground text-xs">53 avis Google vérifiés</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-b ${t.gradient} rounded-2xl p-8 border border-border flex flex-col justify-between gap-8 hover:border-brand/30 hover:shadow-lg transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-brand text-xs font-medium uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full">
                    {t.tag}
                  </span>
                  <Quote className="w-6 h-6 text-brand/30" />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed">{t.text}</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">{t.initial}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">Client(e) PUP Form</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          ref={ctaRef}
          variants={fadeUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-secondary rounded-2xl border border-border"
        >
          <p className="text-foreground font-medium text-sm text-center sm:text-left">
            Rejoignez les 2 000+ parents qui ont retrouvé leur énergie avec PUP Form.
          </p>
          <a
            href="#contact"
            className="shrink-0 bg-brand text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105"
          >
            Commencer maintenant
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
