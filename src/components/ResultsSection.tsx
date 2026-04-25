import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeUp, fadeIn, staggerContainer, staggerFast } from "@/lib/motionVariants";

const stats = [
  { target: 30000, display: (n: number) => `${(n / 1000).toFixed(0)} 000+`, label: "Séances réalisées", sub: "en 15 ans" },
  { target: 2000, display: (n: number) => `${n.toLocaleString("fr-FR")}+`, label: "Parents accompagnés", sub: "depuis la création" },
  { target: 12, display: (n: number) => `${n} ans`, label: "Expérience professionnelle", sub: "Emily & Antoine" },
  { target: 5, display: (_n: number) => "5.0 / 5", label: "Note Google", sub: "53 avis vérifiés" },
];

const AnimatedStat = ({ stat }: { stat: typeof stats[0] }) => {
  const { count, ref } = useCountUp(stat.target, 1800);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
      <p className="font-heading text-4xl md:text-5xl font-bold text-brand mb-3 leading-none">
        {stat.display(count)}
      </p>
      <p className="font-semibold text-background text-sm mb-1">{stat.label}</p>
      <p className="text-background/40 text-xs">{stat.sub}</p>
    </div>
  );
};

const ResultsSection = () => {
  const tagRef = useRef(null);
  const tagInView = useInView(tagRef, { once: true, amount: 0.5 });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.1 });

  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, amount: 0.3 });

  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section tag */}
        <motion.p
          ref={tagRef}
          variants={fadeIn}
          initial="hidden"
          animate={tagInView ? "visible" : "hidden"}
          className="text-brand text-sm font-medium uppercase tracking-widest mb-16 text-center"
        >
          Les résultats parlent
        </motion.p>

        {/* Stats row with count-up */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
          variants={staggerFast}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}>
              <AnimatedStat stat={stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote block */}
        <motion.div
          ref={quoteRef}
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={quoteInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeIn} className="w-16 h-1 bg-brand mx-auto mb-10 rounded-full" />
          <motion.p
            variants={fadeUp}
            className="text-background text-2xl md:text-4xl font-heading font-bold leading-snug mb-6"
          >
            "Profiter le mieux et le plus longtemps possible de ses proches — c'est la seule chose qui vaut VRAIMENT le coup."
          </motion.p>
          <motion.p variants={fadeUp} className="text-background/40 text-sm mb-12">
            Emily & Antoine · Fondateurs PUP Form · Parents d'une petite fille de 5 ans
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105 shadow-lg shadow-brand/30"
          >
            Je veux retrouver cet élan
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ResultsSection;
