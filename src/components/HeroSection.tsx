import { motion } from "framer-motion";
import coachingImage from "@/assets/hero.png";
import { Star, Shield, ChevronDown } from "lucide-react";
import { ease, fadeUp, staggerContainer } from "@/lib/motionVariants";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={coachingImage}
          alt="PUP Form coaching"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Brand color accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-24 pt-40">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
              Programme Parent Invincible · Saint-Martin-d'Hères
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-white"
          >
            100%
            <br />
            <span className="text-brand">d'énergie</span>
            <br />
            pour vous.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-white/70 mb-4 leading-relaxed max-w-lg"
          >
            Coaching physique & mental ultra-personnalisé pour les parents épuisés qui veulent être pleinement présents pour ceux qu'ils aiment.
          </motion.p>

          {/* Stars */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand text-brand" />
              ))}
            </div>
            <span className="text-white/60 text-sm">5/5 · 53 avis Google</span>
            <span className="text-white/30 text-sm">·</span>
            <span className="text-white/60 text-sm">2 000+ parents accompagnés</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105 shadow-lg shadow-brand/30"
            >
              Entretien découverte gratuit
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-medium px-8 py-4 rounded-xl text-base hover:bg-white/20 active:scale-[0.98] transition-all backdrop-blur-sm"
            >
              Découvrir Emily & Antoine
            </a>
          </motion.div>
        </motion.div>

        {/* Floating guarantee card */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease }}
          className="absolute bottom-16 right-6 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 max-w-xs shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-brand/20 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Notre garantie</p>
                <p className="text-white/60 text-xs leading-relaxed">
                  100% d'énergie retrouvée ou on continue jusqu'à ce que vous l'ayez.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white text-xs tracking-widest uppercase">Défiler</span>
        <ChevronDown className="w-4 h-4 text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
