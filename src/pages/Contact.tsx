import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
            alt="Contact PUP Form"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-5">Parlons de toi</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-white">
            On est là.
          </h1>
          <p className="text-white/75 text-xl max-w-xl mx-auto">
            30 minutes d'échange gratuit pour voir si PUP Form est fait pour toi.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">

            {/* Formulaire */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Envoyez nous un message</h2>
              {submitted ? (
                <div className="bg-brand/10 border border-brand/20 rounded-lg p-8 text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground">Nous vous recontacterons dans les 24h pour confirmer votre entretien découverte.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prénom & Nom *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
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
                        className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service qui vous intéresse</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
                    >
                      <option value="">Choisir un service</option>
                      <option value="coaching-sportif">Coaching sportif</option>
                      <option value="bien-etre-nutrition">Bien-être & Nutrition</option>
                      <option value="coaching-mental">Coaching mental</option>
                      <option value="parcours-couple">Parcours couple & famille</option>
                      <option value="programme-complet">Programme complet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Votre situation en quelques mots</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-border rounded-md px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors resize-none"
                      placeholder="Décrivez votre situation, vos objectifs, ce qui vous a amené à nous contacter…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand text-white font-medium px-8 py-4 rounded-md text-base hover:bg-brand/90 transition-colors"
                  >
                    Envoyer ma demande
                  </button>
                  <p className="text-muted-foreground text-xs text-center">Sans engagement · Réponse sous 24h</p>
                </form>
              )}
            </div>

            {/* Informations */}
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-8">Informations pratiques</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Téléphone</p>
                      <a href="tel:0682311224" className="text-muted-foreground hover:text-brand transition-colors">
                        06 82 31 12 24
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Adresse</p>
                      <p className="text-muted-foreground">27 Av. Jean Jaurès</p>
                      <p className="text-muted-foreground">38400 Saint-Martin-d'Hères</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Horaires</p>
                      <p className="text-muted-foreground text-sm">Lundi : 12h00 – 20h00</p>
                      <p className="text-muted-foreground text-sm">Mardi – Vendredi : sur rendez-vous</p>
                      <p className="text-muted-foreground text-sm">Samedi : sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte */}
              <div className="rounded-lg overflow-hidden border border-border h-56">
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
              </div>

              {/* Réassurance */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold mb-4">L’entretien découverte, c’est quoi ?</h3>
                <ul className="space-y-3">
                  {[
                    "30 minutes d’échange avec Emily ou Antoine",
                    "On t’écoute sans jugement",
                    "On te dit franchement si on peut t’aider",
                    "Zéro pression, zéro engagement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-brand shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
