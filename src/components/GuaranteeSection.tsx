import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Shield, Zap, Heart, Dumbbell, Brain, Leaf } from "lucide-react";
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerFast } from "@/lib/motionVariants";

const included = [
  { icon: Dumbbell, label: "Coaching sportif", sub: "Sessions sur mesure" },
  { icon: Leaf, label: "Nutrition & bien-être", sub: "Routine quotidienne" },
  { icon: Brain, label: "Coaching mental", sub: "Confiance & clarté" },
  { icon: Zap, label: "Suivi hebdomadaire", sub: "Emily ou Antoine" },
  { icon: Heart, label: "Adapté à votre vie", sub: "Pas de changements radicaux" },
  { icon: CheckCircle2, label: "Résultats garantis", sub: "Ou on continue" },
];

const GuaranteeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const itemsRef = useRef(null);
  const itemsInView = useInView(itemsRef, { once: true, amount: 0.1 });

  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <section className="py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — included */}
          <motion.div
            ref={ref}
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Ce que vous obtenez</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Tout ce qu'il faut.<br />
              <span className="text-muted-foreground/50">Rien de superflu.</span>
            </h2>
            <motion.div
              ref={itemsRef}
              className="grid grid-cols-2 gap-4"
              variants={staggerFast}
              initial="hidden"
              animate={itemsInView ? "visible" : "hidden"}
            >
              {included.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-4 bg-background rounded-xl p-5 border border-border hover:border-brand/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground leading-tight">{item.label}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — guarantee visual */}
          <motion.div
            ref={cardRef}
            className="relative"
            variants={slideRight}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
          >
            {/* Main guarantee card */}
            <div className="bg-foreground rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand/10" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-brand/5" />

              <div className="relative">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-background mb-4 leading-tight">
                  Notre promesse,<br />noir sur blanc.
                </h3>
                <p className="text-background/60 text-base leading-relaxed mb-8">
                  Nous garantissons aux parents épuisés d'obtenir <span className="text-brand font-semibold">100% d'énergie</span> pour eux-mêmes et leurs proches — sans perdre leur temps seul, ni leur motivation.
                </p>

                <motion.div
                  className="space-y-3 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={cardInView ? "visible" : "hidden"}
                >
                  {[
                    "Parcours 100% adapté à votre réalité",
                    "Résultats dès les premières semaines",
                    "Si ça ne marche pas, on continue",
                  ].map((point, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-brand" />
                      </div>
                      <p className="text-background/70 text-sm">{point}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105"
                >
                  Je commence maintenant
                </a>
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute top-4 left-4 bg-brand text-white rounded-2xl px-4 py-2 shadow-lg">
              <p className="font-heading text-sm font-bold">Entretien gratuit</p>
              <p className="text-white/70 text-xs">30 min · sans engagement</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
