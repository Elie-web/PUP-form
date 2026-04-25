import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, staggerFast } from "@/lib/motionVariants";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="max-w-lg mx-auto"
          >
            {/* Big 404 */}
            <motion.div variants={fadeUp} className="relative mb-8 select-none">
              <span className="font-heading text-[10rem] md:text-[14rem] font-bold leading-none text-brand/8 block">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center">
                  <span className="font-heading text-3xl font-bold text-brand">?</span>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-brand text-sm font-medium uppercase tracking-widest mb-4">
              Page introuvable
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cette page n'existe pas.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md mx-auto">
              La page que vous cherchez a peut-être été déplacée ou supprimée. Retournez à l'accueil pour continuer.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand/90 active:scale-[0.98] transition-all hover:scale-105 shadow-lg shadow-brand/30"
              >
                <Home className="w-4 h-4" />
                Retour à l'accueil
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-secondary border border-border text-foreground font-medium px-8 py-4 rounded-xl text-base hover:border-brand/30 hover:shadow-md transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Page précédente
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
