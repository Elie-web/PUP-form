import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coachingImage from "@/assets/hero.png";
import { Link } from "react-router-dom";
import { Star, Heart, CheckCircle2, Dumbbell, Leaf, Brain, Moon } from "lucide-react";
import { fadeUp, fadeIn, slideLeft, slideRight, scaleIn, staggerContainer, staggerFast } from "@/lib/motionVariants";

const phases = [
  {
    number: "01",
    title: "On se parle vraiment",
    duration: "Semaine 1",
    description:
      "On échange sur ta vie, ta fatigue, tes frustrations et surtout ce qui compte pour toi. Pas un questionnaire à remplir : un vrai échange humain.",
  },
  {
    number: "02",
    title: "On construit ta routine",
    duration: "Semaine 2",
    description:
      "Emily et Antoine construisent ensemble ton programme : coaching sportif, bien-être, nutrition et mental. Tout est calculé pour tenir dans ton agenda sans te peser.",
  },
  {
    number: "03",
    title: "Tu reprends de l'élan",
    duration: "Semaines 3–6",
    description:
      "On met en mouvement. Séances régulières, nouvelles habitudes, premiers résultats concrets. Tu commences à bouger mieux, dormir mieux, te sentir mieux.",
  },
  {
    number: "04",
    title: "La transformation s'ancre",
    duration: "Semaines 7–12",
    description:
      "Les nouvelles habitudes s'installent durablement. L'énergie revient. L'image de toi s'améliore. Tu refais des choses avec ta famille que tu pensais ne plus pouvoir faire.",
  },
  {
    number: "05",
    title: "Tu deviens autonome",
    duration: "Au-delà",
    description:
      "On te transmet nos 15 ans d'expériences et d'astuces. Tu repars avec une méthode, des outils et une routine qui tient dans la durée. Parce que tu es précieux(se).",
  },
];

const testimonials = [
  {
    text: "J'ai eu la chance de participer à une formation animée par Antoine Petelaz, coach personnel spécialisé en identité. Ce fut une expérience très enrichissante.",
    name: "Romane Agaësse",
    role: "Avis Google",
    initial: "R",
  },
  {
    text: "Je n'étais pas une grande sportive. J'ai été accompagnée avec patience et bienveillance. Aujourd'hui je suis fière de mes résultats et de l'énergie retrouvée.",
    name: "Cliente PUP Form",
    role: "Avis StarOfService",
    initial: "C",
  },
  {
    text: "Une personne très à l'écoute mais aussi très motivante. Elle a très bien compris mes objectifs et me pousse à chaque séance. Je recommande vivement.",
    name: "Cliente PUP Form",
    role: "Avis StarOfService",
    initial: "C",
  },
];

const included = [
  {
    icon: Dumbbell,
    title: "Coaching sportif",
    items: ["Programme sur mesure", "Séances studio", "Suivi progression", "Petits groupes dispo"],
  },
  {
    icon: Leaf,
    title: "Bien-être & nutrition",
    items: ["Plan alimentaire", "Recettes rapides & saines", "Routine hebdo", "Outils novateurs"],
  },
  {
    icon: Brain,
    title: "Coaching mental",
    items: ["Image de soi", "Gestion du stress", "Confiance en soi", "Performance mentale"],
  },
  {
    icon: Moon,
    title: "Récupération",
    items: ["Massages Emily", "Soins corporels", "Rituel bien-être", "Sommeil & détente"],
  },
];

const PhaseItem = ({ phase, index }: { phase: typeof phases[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex gap-8 md:gap-10 py-12 border-b border-border last:border-0 group"
    >
      <div className="shrink-0 w-14 md:w-16 text-right">
        <span className="font-heading text-4xl md:text-5xl font-bold text-brand leading-none">{phase.number}</span>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h3 className="font-heading text-xl md:text-2xl font-bold">{phase.title}</h3>
          <span className="text-xs text-brand bg-brand/10 font-medium px-3 py-1 rounded-full">{phase.duration}</span>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">{phase.description}</p>
      </div>
    </motion.div>
  );
};

const Programme = () => {
  const pourQuiRef = useRef(null);
  const pourQuiInView = useInView(pourQuiRef, { once: true, amount: 0.1 });

  const phasesHeaderRef = useRef(null);
  const phasesHeaderInView = useInView(phasesHeaderRef, { once: true, amount: 0.4 });

  const includedRef = useRef(null);
  const includedInView = useInView(includedRef, { once: true, amount: 0.1 });

  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, { once: true, amount: 0.1 });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={coachingImage} alt="Programme PUP Form" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />
        <motion.div
          className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center"
          variants={staggerFast}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="text-white/60 text-sm font-medium uppercase tracking-widest mb-5">
            Notre méthode
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-white">
            Ta routine<br />sur mesure
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/75 text-xl max-w-xl mx-auto">
            Une routine positive, des outils novateurs, un accompagnement humain.
          </motion.p>
        </motion.div>
      </section>

      {/* Pour qui */}
      <section className="py-24 bg-secondary" ref={pourQuiRef}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideLeft} initial="hidden" animate={pourQuiInView ? "visible" : "hidden"}>
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Pour qui ?</p>
              <h2 className="font-heading text-4xl font-bold mb-8">Tu es au bon endroit si…</h2>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate={pourQuiInView ? "visible" : "hidden"}
              >
                {[
                  "Tu es parent ou en couple et tu te sens à bout sur le plan énergie",
                  "Ton entourage te demande d'être présent(e) mais tu n'en peux plus",
                  "Tu veux bouger plus, manger mieux, mais pas le temps ni la motivation",
                  "Tu veux être plus performant(e) au travail sans sacrifier ta vie de famille",
                  "Tu es prêt(e) à investir dans une vraie transformation, pas un abonnement de plus",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-muted-foreground text-base">
                    <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={pourQuiInView ? "visible" : "hidden"}
              className="rounded-3xl bg-background border border-border p-10 flex flex-col justify-center gap-8 relative overflow-hidden"
              style={{ minHeight: "500px" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-l-3xl" />
              <div className="relative w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-brand" strokeWidth={1.5} />
              </div>
              <motion.div
                className="space-y-5"
                variants={staggerFast}
                initial="hidden"
                animate={pourQuiInView ? "visible" : "hidden"}
              >
                {[
                  "Tes proches méritent la meilleure version de toi",
                  "Tu veux bouger mais tu ne sais pas par où commencer",
                  "Tu as déjà essayé des régimes, rien n'a tenu dans la durée",
                  "Tu cherches quelque chose de réaliste, pas un programme générique",
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-brand text-xs font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            ref={phasesHeaderRef}
            className="text-center mb-20"
            variants={staggerFast}
            initial="hidden"
            animate={phasesHeaderInView ? "visible" : "hidden"}
          >
            <motion.p variants={fadeUp} className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Le déroulé</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold">Les 5 phases du programme</motion.h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {phases.map((phase, i) => (
              <PhaseItem key={i} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-24 bg-secondary" ref={includedRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={staggerFast}
            initial="hidden"
            animate={includedInView ? "visible" : "hidden"}
          >
            <motion.p variants={fadeUp} className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Le programme complet</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold">Ce qui est inclus</motion.h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={includedInView ? "visible" : "hidden"}
          >
            {included.map((block, i) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-background rounded-2xl p-7 border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-4">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-brand shrink-0 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-32" ref={testimonialRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16"
            variants={staggerFast}
            initial="hidden"
            animate={testimonialInView ? "visible" : "hidden"}
          >
            <motion.p variants={fadeUp} className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Elles témoignent</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold">Des résultats réels</motion.h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialInView ? "visible" : "hidden"}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-8 bg-secondary rounded-2xl border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-foreground text-base mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">{t.initial}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={testimonialInView ? "visible" : "hidden"}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand text-brand" />
                ))}
              </div>
              <span className="text-sm">5.0 · 53 avis Google</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-foreground text-background" ref={ctaRef}>
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={staggerFast} initial="hidden" animate={ctaInView ? "visible" : "hidden"}>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Prends soin de toi,<br />c'est le meilleur cadeau à ta famille.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-background/70 text-sm mb-10 max-w-xl mx-auto">
              Sans engagement · 30 minutes · Places limitées
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-block bg-brand text-white font-semibold px-10 py-4 rounded-xl text-lg hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105 shadow-lg shadow-brand/30"
              >
                Réserver mon entretien découverte
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programme;
