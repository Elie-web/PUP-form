import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero.png";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerFast } from "@/lib/motionVariants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.1 });

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, amount: 0.1 });

  const inputClass =
    "w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-200 placeholder:text-muted-foreground/50";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Contact PUP Form"
            className="w-full h-full object-cover object-top"
          />
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
            Parlons de toi
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-white">
            On est là.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/75 text-xl max-w-xl mx-auto">
            30 minutes d'échange gratuit pour voir si PUP Form est fait pour toi.
          </motion.p>
        </motion.div>
      </section>

      {/* Contenu principal */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">

            {/* Formulaire */}
            <motion.div
              ref={formRef}
              variants={slideLeft}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Première étape</p>
              <h2 className="font-heading text-3xl font-bold mb-8">Envoyez-nous un message</h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-brand/5 border border-brand/20 rounded-2xl p-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold mb-3">Message envoyé !</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous vous recontacterons dans les 24h pour confirmer votre entretien découverte.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                  >
                    <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Prénom & Nom *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Téléphone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                          placeholder="06 00 00 00 00"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="votre@email.com"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <label className="block text-sm font-medium mb-2">Service qui vous intéresse</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Choisir un service</option>
                        <option value="coaching-sportif">Coaching sportif</option>
                        <option value="bien-etre-nutrition">Bien-être & Nutrition</option>
                        <option value="coaching-mental">Coaching mental</option>
                        <option value="parcours-couple">Parcours couple & famille</option>
                        <option value="programme-complet">Programme complet</option>
                      </select>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <label className="block text-sm font-medium mb-2">Votre situation en quelques mots</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Décrivez votre situation, vos objectifs, ce qui vous a amené à nous contacter…"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <button
                        type="submit"
                        className="w-full bg-brand text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand/90 active:scale-[0.99] transition-all duration-200 shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30"
                      >
                        Envoyer ma demande
                      </button>
                      <p className="text-muted-foreground text-xs text-center mt-3">Sans engagement · Réponse sous 24h</p>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Informations */}
            <motion.div
              ref={infoRef}
              className="space-y-8"
              variants={slideRight}
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
            >
              <div>
                <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">Studio & contact</p>
                <h2 className="font-heading text-3xl font-bold mb-8">Informations pratiques</h2>

                <motion.div
                  className="space-y-4"
                  variants={staggerFast}
                  initial="hidden"
                  animate={infoInView ? "visible" : "hidden"}
                >
                  {[
                    {
                      icon: Phone,
                      label: "Téléphone",
                      content: (
                        <a href="tel:0682311224" className="text-brand font-semibold hover:underline transition-colors">
                          06 82 31 12 24
                        </a>
                      ),
                    },
                    {
                      icon: MapPin,
                      label: "Adresse",
                      content: (
                        <p className="text-muted-foreground text-sm">
                          27 Av. Jean Jaurès<br />38400 Saint-Martin-d'Hères
                        </p>
                      ),
                    },
                    {
                      icon: Clock,
                      label: "Horaires",
                      content: (
                        <div className="text-muted-foreground text-sm space-y-0.5">
                          <p>Lundi : 12h00 – 20h00</p>
                          <p>Mardi – Vendredi : sur rendez-vous</p>
                          <p>Samedi : sur rendez-vous</p>
                        </div>
                      ),
                    },
                  ].map(({ icon: Icon, label, content }, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-brand/30 hover:shadow-md bg-background transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <p className="font-medium text-sm mb-1">{label}</p>
                        {content}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Map */}
              <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-border shadow-sm h-52">
                <iframe
                  title="PUP Form localisation"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.4!2d5.7675!3d45.1621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af463b2a1f7c5%3A0x1!2s27+Av.+Jean+Jaur%C3%A8s%2C+38400+Saint-Martin-d'H%C3%A8res!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* Réassurance */}
              <motion.div
                variants={fadeUp}
                className="bg-secondary rounded-2xl p-7 border border-border relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-l-2xl" />
                <h3 className="font-heading text-lg font-bold mb-5">L'entretien découverte, c'est quoi ?</h3>
                <ul className="space-y-3">
                  {[
                    "30 minutes d'échange avec Emily ou Antoine",
                    "On t'écoute sans jugement",
                    "On te dit franchement si on peut t'aider",
                    "Zéro pression, zéro engagement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
