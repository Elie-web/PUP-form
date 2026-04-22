const ResultsSection = () => {
  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section tag */}
        <p className="text-brand text-sm font-medium uppercase tracking-widest mb-16 text-center">
          Les résultats parlent
        </p>

        {/* Stats row — clean, no decorative overlap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { number: "30 000+", label: "Séances réalisées", sub: "en 15 ans" },
            { number: "2 000+", label: "Parents accompagnés", sub: "depuis la création" },
            { number: "12 ans", label: "Expérience professionnelle", sub: "Emily & Antoine" },
            { number: "5.0 / 5", label: "Note Google", sub: "53 avis vérifiés" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-brand mb-3 leading-none">
                {stat.number}
              </p>
              <p className="font-semibold text-background text-sm mb-1">{stat.label}</p>
              <p className="text-background/40 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Quote block — separate area, no overlap */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-1 bg-brand mx-auto mb-10 rounded-full" />
          <p className="text-background text-2xl md:text-4xl font-heading font-bold leading-snug mb-6">
            "Profiter le mieux et le plus longtemps possible de ses proches — c'est la seule chose qui vaut VRAIMENT le coup."
          </p>
          <p className="text-background/40 text-sm mb-12">
            Emily & Antoine · Fondateurs PUP Form · Parents d'une petite fille de 5 ans
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand/90 transition-all hover:scale-105 shadow-lg shadow-brand/30"
          >
            Je veux retrouver cet élan
          </a>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;
