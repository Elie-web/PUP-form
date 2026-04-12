const ContactSection = () => {
  return (
    <section id="contact" className="py-40">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
          Prêt à changer ?
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Places limitées. On discute de tes objectifs en 30 minutes.
        </p>
        <a
          href="#"
          className="inline-block bg-foreground text-background font-medium px-10 py-4 rounded-md text-lg hover:bg-foreground/90 transition-colors mb-4"
        >
          Réserver ma séance découverte
        </a>
        <p className="text-muted-foreground text-sm">
          Sans engagement
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
