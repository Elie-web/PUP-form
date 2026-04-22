import { Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Première étape</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-4">
            Prends soin de toi
            <br />
            <span className="text-brand">et de tes proches.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            L'entretien découverte est gratuit, sans engagement, et sans pression. Juste 30 minutes pour voir si on peut vraiment vous aider.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* Left — main CTA (2/5) */}
          <div className="lg:col-span-2 bg-foreground rounded-3xl p-10 flex flex-col justify-between gap-8 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand/10" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/3" />

            <div className="relative">
              <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-background mb-3 leading-tight">
                On discute de votre situation en 30 min.
              </h3>
              <p className="text-background/50 text-sm leading-relaxed">
                Places limitées. Emily ou Antoine vous répondront directement.
              </p>
            </div>

            {/* Checklist */}
            <div className="relative space-y-2">
              {[
                "Gratuit et sans engagement",
                "Sur mesure, pas un script",
                "Résultats dès les premières semaines",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <p className="text-background/60 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="tel:0682311224"
              className="relative inline-flex items-center gap-3 bg-brand text-white font-semibold px-7 py-4 rounded-xl text-base hover:bg-brand/90 transition-all hover:scale-105 shadow-lg shadow-brand/30 self-start"
            >
              <Phone className="w-5 h-5" />
              06 82 31 12 24
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Right — info cards (3/5) */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* Location */}
            <div className="bg-background rounded-2xl p-7 border border-border flex items-start gap-5 hover:border-brand/30 transition-colors flex-1">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm mb-1">Studio PUP Form</p>
                <p className="text-muted-foreground text-sm">27 Av. Jean Jaurès</p>
                <p className="text-muted-foreground text-sm mb-3">38400 Saint-Martin-d'Hères</p>
                {/* Mini map placeholder */}
                <div className="w-full h-20 bg-brand/5 rounded-xl border border-brand/10 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-brand/60">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-medium">Saint-Martin-d'Hères, 38400</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours + online */}
            <div className="grid sm:grid-cols-2 gap-4 flex-1">
              <div className="bg-background rounded-2xl p-7 border border-border flex items-start gap-4 hover:border-brand/30 transition-colors">
                <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Entretien découverte</p>
                  <p className="text-muted-foreground text-sm">30 min gratuit</p>
                  <p className="text-muted-foreground text-sm">Sans engagement</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-brand/10 rounded-full px-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span className="text-brand text-xs font-medium">Places limitées</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-7 border border-border flex items-start gap-4 hover:border-brand/30 transition-colors">
                <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">En studio ou en ligne</p>
                  <a href="tel:0682311224" className="text-brand font-semibold text-base hover:underline block">
                    06 82 31 12 24
                  </a>
                  <p className="text-muted-foreground text-xs mt-1">Emily ou Antoine vous répondront</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
