import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import coachingImage from "@/assets/pup form profile.jpg";
import { Target, Zap, Heart, Award } from "lucide-react";
import { fadeUp, slideLeft, slideRight, staggerFast } from "@/lib/motionVariants";

const roles = [
  {
    icon: Target,
    label: "Notre OBJECTIF",
    text: "Vous rendre plus performant au quotidien : mieux bouger avec votre famille, mieux réfléchir au travail, prendre plus de plaisir dans vos loisirs.",
  },
  {
    icon: Zap,
    label: "Notre AVANTAGE",
    text: "Une routine hebdomadaire positive avec des outils novateurs pour optimiser votre temps. Juste ce qu'il faut — cuisiner sain et bon dans un temps court.",
  },
  {
    icon: Heart,
    label: "Notre RÔLE",
    text: "Vous transmettre 15 années d'expériences de coachs sportifs et mentaux — parce que vous êtes précieux(se), et vos proches méritent la meilleure version de vous.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const rolesRef = useRef(null);
  const rolesInView = useInView(rolesRef, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Section tag */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-brand text-sm font-medium uppercase tracking-widest mb-16 text-center"
        >
          Qui sommes-nous
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Photo column */}
          <motion.div
            className="relative"
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Decorative background block */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-brand/10" style={{ zIndex: 0 }} />
            {/* Large background text */}
            <div className="absolute -bottom-4 -right-4 font-heading text-[120px] font-bold leading-none text-brand/5 select-none pointer-events-none" style={{ zIndex: 0 }}>
              PUP
            </div>

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ zIndex: 1 }}>
              <img
                src={coachingImage}
                alt="Emily et Antoine, fondateurs PUP Form"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-[580px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-white font-heading text-xl font-bold">Emily & Antoine</p>
                <p className="text-white/70 text-sm">Fondateurs PUP Form · Parents d'une fille de 5 ans</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute right-4 top-8 z-20 bg-foreground text-background rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold leading-none text-background">12 ans</p>
                  <p className="text-background/50 text-xs mt-0.5">d'expérience pro</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="pt-4"
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Emily & Antoine,<br />
              <span className="text-brand">parents avant tout.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Nous sommes Emily et Antoine, parents d'une petite fille de 5 ans débordante d'énergie — et les premiers à avoir connu l'épuisement que vous ressentez peut-être en ce moment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Après 12 ans d'expérience professionnelle et plus de 30 000 coaching sur plus de 2 000 membres, nous avons choisi de transformer les parents et les couples trop fatigués. Parce que profiter le mieux et le plus longtemps possible de ses proches, c'est la seule chose qui vaut <strong className="text-foreground">VRAIMENT</strong> le coup.
            </p>

            {/* Mini stats row */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10"
              variants={staggerFast}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {[
                { n: "30 000+", l: "séances" },
                { n: "2 000+", l: "membres" },
                { n: "5 / 5", l: "Google" },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-secondary rounded-xl p-4 text-center border border-border">
                  <p className="font-heading text-2xl font-bold text-brand">{s.n}</p>
                  <p className="text-muted-foreground text-xs mt-1">{s.l}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              ref={rolesRef}
              className="space-y-4"
              variants={staggerFast}
              initial="hidden"
              animate={rolesInView ? "visible" : "hidden"}
            >
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-5 p-5 bg-secondary rounded-xl border border-border hover:border-brand/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-brand text-xs font-bold uppercase tracking-widest mb-1">{r.label}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
