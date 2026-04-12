import portraitImage from "@/assets/portrait-denilson.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-40">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Je m'appelle Denilson.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Diplômé d'État, ancien champion régional de boxe. Je coach des hommes qui veulent vraiment changer.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Un programme solide, un suivi nutrition adapté, et quelqu'un qui te pousse quand t'as pas envie.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={portraitImage}
              alt="Denilson Monteiro"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
