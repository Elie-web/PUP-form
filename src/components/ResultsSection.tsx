import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const images = [
  "/results/result-1.png",
  "/results/result-2.png",
  "/results/result-3.png",
  "/results/result-4.png",
  "/results/result-5.png",
  "/results/result-6.png",
  "/results/result-7.png",
];

const ResultsSection = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            90 jours. C'est tout ce qu'il te faut.
          </h2>
          <p className="text-muted-foreground text-lg">
            Une méthode simple, structurée et adaptée à ta vie.
          </p>
        </div>

        <div className="relative px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {images.map((src, i) => (
                <CarouselItem key={i} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <img
                    src={src}
                    alt="Transformation"
                    loading="lazy"
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-foreground/20 text-foreground hover:bg-secondary" />
            <CarouselNext className="border-foreground/20 text-foreground hover:bg-secondary" />
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg italic mb-8">
            "Le corps que tu construis aujourd'hui, c'est ta liberté de demain."
          </p>
          <a
            href="https://www.instagram.com/thebodyisblack/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-background font-medium px-8 py-4 rounded-md text-base hover:bg-foreground/90 transition-colors"
          >
            Je veux le même résultat
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
