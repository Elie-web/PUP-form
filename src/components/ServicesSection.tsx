import coaching5 from "@/assets/coaching-5.jpg";
import coaching3 from "@/assets/coaching-3.jpg";
import coaching6 from "@/assets/coaching-6.jpg";

const services = [
  {
    title: "En salle avec moi",
    location: "Haute-Savoie",
    description: "On bosse ensemble, en face à face. Je corrige, je pousse, je m'adapte en temps réel.",
    image: coaching5,
  },
  {
    title: "Coaching à distance",
    location: "Partout en France",
    description: "Programme perso + suivi vidéo chaque semaine. Comme si j'étais là.",
    image: coaching3,
  },
  {
    title: "Nutrition sur-mesure",
    location: "Inclus dans chaque formule",
    description: "Un plan simple qui colle à ta vie et tes objectifs.",
    image: coaching6,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Comment on travaille ensemble
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Trois façons de bosser. Un seul objectif.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group">
              <div className="h-60 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="pt-6">
                <h3 className="font-heading text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{service.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
