import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BatteryLow, Clock, CloudRain, Users } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, staggerFast } from "@/lib/motionVariants";

const cards = [
  {
    icon: BatteryLow,
    number: "01",
    title: "Charge mentale permanente",
    sub: "vous n'avez plus rien à donner",
    desc: "Vous rentrez le soir après une journée noyée sous les responsabilités. Tout le monde se repose encore sur vous — et vous, vous n'avez plus rien à donner.",
    color: "from-orange-500/10 to-orange-500/5",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: Clock,
    number: "02",
    title: "Zéro temps pour vous",
    sub: "vous passez toujours en dernier",
    desc: "Le sport, les loisirs, le simple fait de souffler... tout passe après. Résultat : vous vous oubliez, et vous vous en voulez de vous oublier.",
    color: "from-brand/10 to-brand/5",
    iconColor: "text-brand",
    iconBg: "bg-brand/10",
  },
  {
    icon: CloudRain,
    number: "03",
    title: "Angoisses et perte de sens",
    sub: "la fatigue ronge la confiance",
    desc: "Cette fatigue génère des angoisses, une perte de confiance, un sentiment de ne plus avancer. Vous avez outrepassé vos limites sans vous en rendre compte.",
    color: "from-slate-500/10 to-slate-500/5",
    iconColor: "text-slate-500",
    iconBg: "bg-slate-500/10",
  },
  {
    icon: Users,
    number: "04",
    title: "Vos proches le sentent",
    sub: "présent(e) mais pas vraiment là",
    desc: "Vous êtes là physiquement, mais plus vraiment présent(e). Vos enfants, votre partenaire — ils le sentent. Et vous aussi.",
    color: "from-rose-500/10 to-rose-500/5",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-500/10",
  },
];

const ProblemSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  const bridgeRef = useRef(null);
  const bridgeInView = useInView(bridgeRef, { once: true, amount: 0.4 });

  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="grid md:grid-cols-2 gap-8 items-end mb-16"
          variants={staggerFast}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Vous vous reconnaissez ?</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
              Être parent,<br />c'est beau.
              <br />
              <span className="text-foreground/55">Mais ça pèse lourd.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed md:mb-2">
            Ces quatre situations, Emily et Antoine les ont vécues. Et ils ont parlé à plus de 2 000 parents qui les vivent encore aujourd'hui.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-8 flex flex-col gap-5 bg-gradient-to-b ${card.color} border border-border relative overflow-hidden cursor-default`}
              >
                <span className="absolute top-4 right-4 font-heading text-7xl font-bold text-foreground/4 leading-none select-none pointer-events-none">
                  {card.number}
                </span>
                <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold leading-tight mb-1">{card.title}</p>
                  <p className={`${card.iconColor} text-xs font-medium mb-3 opacity-70`}>{card.sub}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Solution bridge */}
        <motion.div
          ref={bridgeRef}
          variants={fadeUp}
          initial="hidden"
          animate={bridgeInView ? "visible" : "hidden"}
          className="relative bg-foreground rounded-2xl p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand rounded-l-2xl" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 font-heading text-[90px] font-bold text-white/5 leading-none select-none hidden xl:block">
            100%
          </div>
          <div className="relative max-w-2xl">
            <p className="text-background/50 text-xs font-medium uppercase tracking-widest mb-3">Notre réponse</p>
            <p className="text-background text-xl md:text-2xl font-heading font-bold leading-snug mb-2">
              Nous garantissons aux parents épuisés & stressés d'obtenir{" "}
              <span className="text-brand">100% d'énergie pour eux-mêmes & leurs proches</span>{" "}
              sans perdre leur temps seul ni leur motivation.
            </p>
            <p className="text-background/50 text-sm">
              Grâce au Programme Parent Invincible — coaching physique, nutritionnel et mental ultra-personnalisé.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;
