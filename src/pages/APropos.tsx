import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pupProfile from "@/assets/pup form profile.jpg";
import heroImg from "@/assets/hero.png";
import { Link } from "react-router-dom";
import { Leaf, Apple, Moon, Sparkles, Award } from "lucide-react";
import { fadeUp, fadeIn, slideLeft, slideRight, scaleIn, staggerContainer, staggerFast } from "@/lib/motionVariants";
import { useCountUp } from "@/hooks/useCountUp";

const statsData = [
  { target: 12, display: (n: number) => `${n} ans`, label: "d'expérience" },
  { target: 30000, display: (n: number) => `${Math.round(n / 1000)} 000+`, label: "séances de coaching" },
  { target: 2000, display: (n: number) => `${n.toLocaleString("fr-FR")}+`, label: "parents accompagnés" },
  { target: 5, display: (_n: number) => "5.0 / 5", label: "note Google" },
];

const AnimatedStat = ({ stat }: { stat: typeof statsData[0] }) => {
  const { count, ref } = useCountUp(stat.target, 1600);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <p className="font-heading text-3xl font-bold text-brand">{stat.display(count)}</p>
      <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
    </div>
  );
};

const PageHero = ({ tag, title, subtitle, bg }: { tag: string; title: string; subtitle: string; bg: string }) => (
  <section className="relative min-h-[60vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={bg} alt={title} className="w-full h-full object-cover object-top" />
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
        {tag}
      </motion.p>
      <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-white">
        {title}
      </motion.h1>
      <motion.p variants={fadeUp} className="text-white/75 text-xl max-w-xl mx-auto">
        {subtitle}
      </motion.p>
    </motion.div>
  </section>
);

const APropos = () => {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, amount: 0.1 });

  const antoineRef = useRef(null);
  const antoineInView = useInView(antoineRef, { once: true, amount: 0.1 });

  const emilyRef = useRef(null);
  const emilyInView = useInView(emilyRef, { once: true, amount: 0.1 });

  const valeursRef = useRef(null);
  const valeursInView = useInView(valeursRef, { once: true, amount: 0.1 });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        tag="Notre histoire"
        title="Emily & Antoine"
        subtitle="Coachs sportif et bien-être, parents avant tout."
        bg={heroImg}
      />

      {/* Notre histoire */}
      <section className="py-32" ref={storyRef}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Stats card */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              className="rounded-3xl bg-secondary border border-border p-10 flex flex-col justify-center gap-10 relative overflow-hidden"
              style={{ minHeight: "500px" }}
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand/5" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-brand/5" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-l-3xl" />
              <div className="relative">
                <p className="text-brand text-xs font-bold uppercase tracking-widest mb-8">PUP Form en chiffres</p>
                <div className="grid grid-cols-2 gap-8">
                  {statsData.map((s) => (
                    <AnimatedStat key={s.label} stat={s} />
                  ))}
                </div>
              </div>
              {/* Award badge */}
              <div className="relative flex items-center gap-3 pt-6 border-t border-border/60">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm font-medium">Note 5.0 / 5 · 53 avis Google vérifiés</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
            >
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Pourquoi PUP Form</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                On est passés<br />par là aussi.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                On est parents d'une petite fille de 5 ans, débordante d'énergie, qui en demande toujours plus. Et parfois, on se sentait frustrés de ne pas pouvoir en faire plus pour elle.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Notre entourage pro et perso nous demandait d'être présents à 100 %, partout à la fois. On connaît cette sensation d'être à vide alors qu'on voudrait tellement donner plus.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Après <strong className="text-foreground">12 ans d'expérience professionnelle</strong> et <strong className="text-foreground">5 ans de parentalité</strong>, on a choisi de transformer les parents et les couples trop fatigués grâce à des parcours ultra-personnalisés. Parce que profiter le mieux et le plus longtemps possible de ses proches, c'est la seule chose qui vaut VRAIMENT le coup.
              </p>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerFast}
                initial="hidden"
                animate={storyInView ? "visible" : "hidden"}
              >
                {["12 ans d'expérience", "5 ans de parentalité", "30 000+ séances", "2 000+ parents"].map((tag) => (
                  <motion.span
                    key={tag}
                    variants={scaleIn}
                    className="bg-secondary text-foreground text-sm px-4 py-2 rounded-full border border-border hover:border-brand/30 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Antoine */}
      <section className="py-32 bg-secondary" ref={antoineRef}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideLeft} initial="hidden" animate={antoineInView ? "visible" : "hidden"}>
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Le coach sportif & mental</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Antoine</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Spécialisé en développement personnel et coaching identité, Antoine cumule 15 ans d'expérience et <strong className="text-foreground">30 000 séances de coaching</strong> auprès de plus de 2 000 membres.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Sa spécialité : construire avec vous une <strong className="text-foreground">routine hebdomadaire positive</strong> avec des outils novateurs pour optimiser votre temps. Faire juste l'activité physique qu'il faut. Vous rendre plus performant au quotidien sans vous épuiser.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Parce que vous êtes précieux(se), et que vos proches méritent la meilleure version de vous.
              </p>
            </motion.div>
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={antoineInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-brand/10" style={{ zIndex: 0 }} />
              <div className="rounded-2xl overflow-hidden shadow-2xl relative" style={{ zIndex: 1 }}>
                <img
                  src={pupProfile}
                  alt="Antoine coach PUP Form"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emily */}
      <section className="py-32" ref={emilyRef}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Feature card */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={emilyInView ? "visible" : "hidden"}
              className="rounded-3xl bg-secondary border border-border p-10 flex flex-col justify-center gap-8 relative overflow-hidden"
              style={{ minHeight: "500px" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-l-3xl" />
              <div className="relative w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-brand" strokeWidth={1.5} />
              </div>
              <motion.div
                className="space-y-4"
                variants={staggerFast}
                initial="hidden"
                animate={emilyInView ? "visible" : "hidden"}
              >
                {[
                  { icon: Apple, label: "Nutrition & alimentation", desc: "Plans sains, rapides et délicieux" },
                  { icon: Sparkles, label: "Soins corporels", desc: "Soins spécifiques pour la récupération" },
                  { icon: Moon, label: "Bien-être & récupération", desc: "Décompression et détente en profondeur" },
                  { icon: Leaf, label: "Routine bien-être", desc: "Approche douce et bienveillante" },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div key={idx} variants={fadeUp} className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors duration-200">
                      <div className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                        <ItemIcon className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div variants={slideRight} initial="hidden" animate={emilyInView ? "visible" : "hidden"}>
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">La spécialiste bien-être</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Emily</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Co-fondatrice de PUP Form, Emily prend en charge la dimension bien-être, récupération et nutrition. Elle sait cuisiner <strong className="text-foreground">sain ET bon dans un temps court</strong> — et elle vous apprendra à faire pareil.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Son accompagnement complète le travail d'Antoine pour une approche vraiment complète. Le repos et la récupération, c'est aussi de la performance.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Nutrition & bien-être", "Récupération", "Routine quotidienne", "Bien-être global"].map((tag) => (
                  <span key={tag} className="bg-secondary text-foreground text-sm px-4 py-2 rounded-full border border-border hover:border-brand/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-32 bg-secondary" ref={valeursRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            variants={staggerFast}
            initial="hidden"
            animate={valeursInView ? "visible" : "hidden"}
          >
            <motion.p variants={fadeUp} className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Ce qui nous guide</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold">Ce en quoi on croit</motion.h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={valeursInView ? "visible" : "hidden"}
          >
            {[
              {
                title: "La famille d'abord",
                desc: "Profiter le mieux et le plus longtemps possible de ses proches : c'est la seule chose qui vaut VRAIMENT le coup. Tout notre travail part de là.",
              },
              {
                title: "Ultra-personnalisé",
                desc: "On ne fait pas de programme générique. On construit avec vous une routine réaliste, adaptée à votre agenda de parent et à vos vrais objectifs.",
              },
              {
                title: "Prendre soin de soi",
                desc: "Vous êtes précieux(se). Prendre soin de vous, c'est aussi prendre soin de ceux que vous aimez. On vous aidera à le faire, sans culpabilité.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-background rounded-2xl p-8 border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-brand rounded-full" />
                <h3 className="font-heading text-2xl font-bold mb-4 mt-4">{v.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Prêt(e) à nous rencontrer ?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
              30 minutes d'échange gratuit pour comprendre votre situation et voir si PUP Form est fait pour vous.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-block bg-brand text-white font-semibold px-10 py-4 rounded-xl text-lg hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105 shadow-lg shadow-brand/30"
              >
                Prendre rendez-vous
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APropos;
