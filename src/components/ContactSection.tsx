import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* Left */}
          <div className="bg-foreground text-background rounded-2xl p-10 md:p-14 flex flex-col justify-between gap-12">
            <div>
              <p className="text-background/50 text-sm font-medium uppercase tracking-widest mb-4">Prends rendez-vous</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
                Prends soin de toi<br />et de tes proches.
              </h2>
              <p className="text-background/60 text-base leading-relaxed">
                Places limitées. On discute de ta situation en 30 min, sans engagement.
              </p>
            </div>
            <a
              href="tel:0682311224"
              className="inline-flex items-center gap-3 bg-brand text-white font-medium px-8 py-4 rounded-xl text-base hover:bg-brand/90 transition-colors self-start"
            >
              <Phone className="w-5 h-5" />
              06 82 31 12 24
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <div className="bg-secondary rounded-2xl p-7 border border-border flex items-start gap-5">
              <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Studio</p>
                <p className="text-muted-foreground text-sm">27 Av. Jean Jaurès</p>
                <p className="text-muted-foreground text-sm">38400 Saint-Martin-d'Hères</p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-7 border border-border flex items-start gap-5">
              <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Entretien découverte</p>
                <p className="text-muted-foreground text-sm">30 min d'échange gratuit</p>
                <p className="text-muted-foreground text-sm">Sur mesure, sans engagement</p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-7 border border-border flex items-start gap-5 flex-1">
              <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Appel direct</p>
                <a href="tel:0682311224" className="text-brand font-medium text-sm hover:underline">06 82 31 12 24</a>
                <p className="text-muted-foreground text-xs mt-1">Emily ou Antoine vous répondront</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
