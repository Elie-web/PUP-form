const ResultsSection = () => {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Quote */}
          <div>
            <p className="text-background/40 text-6xl font-heading font-bold leading-none mb-6">"</p>
            <p className="text-background text-2xl md:text-3xl font-heading font-bold leading-snug mb-8">
              Profiter le mieux et le plus longtemps possible de ses proches : c'est la seule chose qui vaut VRAIMENT le coup.
            </p>
            <p className="text-background/50 text-sm mb-10">Emily et Antoine, fondateurs PUP Form</p>
            <a
              href="#contact"
              className="inline-block bg-brand text-white font-medium px-8 py-4 rounded-xl text-base hover:bg-brand/90 transition-colors"
            >
              Je veux le même résultat
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "30 000+", label: "Séances réalisées", sub: "en 12 ans" },
              { number: "2 000+", label: "Membres accompagnés", sub: "depuis la création" },
              { number: "15 ans", label: "Expérience cumulée", sub: "Emily et Antoine" },
              { number: "5.0 / 5", label: "Note Google", sub: "53 avis vérifiés" },
            ].map((stat, i) => (
              <div key={i} className="bg-background/8 border border-background/15 rounded-2xl p-7">
                <p className="font-heading text-3xl font-bold text-brand mb-2">{stat.number}</p>
                <p className="font-semibold text-background text-sm mb-1">{stat.label}</p>
                <p className="text-background/40 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
