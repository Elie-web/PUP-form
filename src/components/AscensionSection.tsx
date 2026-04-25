import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Zap, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer, staggerFast } from "@/lib/motionVariants";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "On apprend à vous connaître",
    tag: "Entretien découverte · Gratuit",
    desc: "30 minutes avec Emily ou Antoine pour comprendre votre situation réelle, vos blocages, votre rythme de vie. Pas un formulaire — une vraie conversation.",
    dark: false,
  },
  {
    number: "02",
    icon: Zap,
    title: "Votre parcours sur mesure",
    tag: "Programme Parent Invincible",
    desc: "Coaching sportif, bien-être et mental adaptés à votre vraie vie. Ni trop, ni trop peu. Juste ce qu'il faut — quand il le faut.",
    dark: true,
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Vous retrouvez votre élan",
    tag: "Transformation durable",
    desc: "Plus d'énergie, meilleure humeur, vraie présence auprès de vos proches. Dès les premières semaines, vous le sentez. Sur 3 à 6 mois, ça s'installe pour de bon.",
    dark: false,
  },
];

const AscensionSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.1 });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.4 });

  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="grid md:grid-cols-2 gap-8 items-end mb-20"
          variants={staggerFast}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Comment ça fonctionne</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
              Le Programme<br />
              <span className="text-brand">Parent Invincible</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
            En 3 étapes simples, vous passez de l'épuisement à une énergie retrouvée — sans tout bouleverser dans votre vie.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={stepsRef}
          className="grid md:grid-cols-3 gap-6 mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={stepsInView ? "visible" : "hidden"}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-8 border relative overflow-hidden flex flex-col gap-6 cursor-default ${
                  step.dark
                    ? "bg-foreground border-foreground"
                    : "bg-secondary border-border"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute bottom-4 right-4 font-heading text-[7rem] font-bold leading-none select-none pointer-events-none z-0 ${
                    step.dark ? "text-white/5" : "text-foreground/5"
                  }`}
                >
                  {step.number}
                </span>

                <div className="relative z-10 flex flex-col gap-6 flex-1">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.dark ? "bg-brand/20" : "bg-brand/10"}`}>
                    <Icon className="w-7 h-7 text-brand" strokeWidth={1.5} />
                  </div>

                  <div>
                    <span className={`text-xs font-medium uppercase tracking-widest block mb-3 ${step.dark ? "text-background/50" : "text-brand"}`}>
                      {step.tag}
                    </span>
                    <h3 className={`font-heading text-2xl font-bold leading-tight mb-4 ${step.dark ? "text-background" : "text-foreground"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${step.dark ? "text-background/60" : "text-muted-foreground"}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          ref={ctaRef}
          variants={fadeUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center gap-6 p-8 bg-secondary rounded-2xl border border-border"
        >
          <div className="flex-1">
            <p className="font-heading text-xl font-bold mb-1">Prêt(e) à commencer ?</p>
            <p className="text-muted-foreground text-sm">L'entretien découverte est gratuit, sans engagement. 30 minutes pour tout changer.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-block bg-brand text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105 shadow-md shadow-brand/20"
          >
            Je veux en savoir plus
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default AscensionSection;
