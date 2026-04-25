import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Brain, Dumbbell, Leaf, Apple, CheckCircle2, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.png";
import nutritionImg from "@/assets/nutrition.png";
import coachMentaleImg from "@/assets/coach mentale.png";
import pupProfile from "@/assets/pup form profile.jpg";
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerFast } from "@/lib/motionVariants";

const services = [
  {
    icon: Brain,
    title: "Coaching mental & développement personnel",
    subtitle: "Mindset · Confiance en soi · Identité",
    description:
      "Antoine est spécialisé en coaching identité et développement personnel. Il utilise des outils de haute performance pour libérer la charge mentale, dissoudre les blocages émotionnels et restaurer une vraie confiance en vous.",
    details: [
      "Séances de coaching individuel",
      "Travail sur l'image de soi et l'identité",
      "Déblocage des freins psychologiques",
      "Outils de gestion du stress et des angoisses",
      "Impact durable sur vie pro, perso et familiale",
    ],
    tag: "Spécialité signature",
    image: coachMentaleImg,
  },
  {
    icon: Dumbbell,
    title: "Personal Training & Fitness",
    subtitle: "Studio · Séances individuelles & petits groupes",
    description:
      "Un programme physique conçu sur mesure, adapté à votre niveau, votre emploi du temps et vos objectifs de parent. Vous progressez avec méthode, sans vous épuiser — en séance individuelle ou en petit groupe.",
    details: [
      "Bilan physique initial complet",
      "Programme de renforcement musculaire",
      "Séances de fitness fonctionnel",
      "Suivi des performances et progression",
      "Petits groupes motivants (max 4 personnes)",
    ],
    tag: "Studio à Saint-Martin-d'Hères",
    image: heroImg,
  },
  {
    icon: Apple,
    title: "Accompagnement nutritionnel",
    subtitle: "Nutrition · Hygiène de vie · Énergie",
    description:
      "La nutrition fait partie intégrante de chaque parcours. Emily vous guide vers une alimentation adaptée à votre vie de parent : simple, efficace, sans frustration. Cuisiner sain ET bon dans un temps court.",
    details: [
      "Bilan alimentaire personnalisé",
      "Plan nutritionnel adapté à votre rythme",
      "Stratégies pratiques pour les agendas chargés",
      "Optimisation de l'énergie au quotidien",
      "Suivi et ajustements réguliers",
    ],
    tag: "Avec Emily",
    image: nutritionImg,
  },
  {
    icon: Leaf,
    title: "Bien-être & Récupération",
    subtitle: "Avec Emily · Routine · Récupération active",
    description:
      "Emily prend en charge votre récupération et bien-être global. Le repos actif est une composante essentielle de la performance — apprendre à récupérer, c'est aussi progresser.",
    details: [
      "Accompagnement de la récupération physique",
      "Routine bien-être hebdomadaire",
      "Gestion du sommeil et de la fatigue",
      "Rituel bien-être personnalisé",
      "Approche douce et bienveillante",
    ],
    tag: "Avec Emily",
    image: pupProfile,
  },
];

const ServiceRow = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const Icon = service.icon;
  const reverse = index % 2 !== 0;

  const textMotion = reverse ? slideRight : slideLeft;
  const imgMotion = reverse ? slideLeft : slideRight;

  return (
    <motion.div
      ref={ref}
      className="py-20 border-b border-border last:border-0"
    >
      <div className={`grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        {/* Text */}
        <motion.div
          variants={textMotion}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
            </div>
            <span className="text-brand text-xs font-medium uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full">
              {service.tag}
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
          <p className="text-brand text-sm font-medium uppercase tracking-wider mb-6">{service.subtitle}</p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">{service.description}</p>
          <motion.ul
            className="space-y-3 mb-10"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {service.details.map((d, j) => (
              <motion.li key={j} variants={fadeUp} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                {d}
              </motion.li>
            ))}
          </motion.ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105 shadow-md shadow-brand/20"
          >
            En savoir plus <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imgMotion}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl overflow-hidden h-[480px] relative group"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Services PUP Form" className="w-full h-full object-cover object-top" />
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
            Ce que nous proposons
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-white">
            Fait pour votre vie
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/75 text-xl max-w-2xl mx-auto">
            Une routine réaliste, des outils concrets, un accompagnement humain.
          </motion.p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-0">
            {services.map((service, i) => (
              <ServiceRow key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background" ref={ctaRef}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Par où commencer ?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
              Un entretien de 30 minutes pour échanger sur votre situation. On vous guidera vers l'accompagnement le plus adapté.
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

export default Services;
