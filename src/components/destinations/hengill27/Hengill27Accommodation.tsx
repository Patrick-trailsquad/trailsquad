import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  "/lovable-uploads/greenhouse-5.jpg",
  "/lovable-uploads/greenhouse-4.jpg",
  "/lovable-uploads/greenhouse-1.jpg",
  "/lovable-uploads/greenhouse-2.jpg",
  "/lovable-uploads/greenhouse-3.jpg",
];

const Hengill27Accommodation = () => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-20">
      <h2 className="font-cabinet text-4xl font-bold mb-8 text-center">Din indkvartering</h2>

      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="h-[450px] rounded-xl overflow-hidden">
                    <img
                      src={image}
                      alt={`The Greenhouse Hotel ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">The Greenhouse Hotel</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Boutiquehotel • Hveragerði, Island</h2>
          <p className="text-lg">
            <b>The Greenhouse Hotel</b> ligger midt i Hveragerði — den lille drivhusby, der er bygget
            oven på geotermiske kilder, og hvor Hengill Ultra har start og mål få minutters gang fra
            hoveddøren. Hotellet er indrettet i et lyst, nordisk design med rolige farver, naturlige
            materialer og store vinduer ud mod bjergene.
          </p>
          <p className="text-lg mt-4">
            Værelserne er moderne og komfortable, og morgenmaden serveres med islandske råvarer —
            perfekt før en tidlig start på stierne. Hotellet har egen restaurant og bar, hvor vi
            spiser vores fælles middage og holder race-briefing.
          </p>
          <p className="text-lg mt-4">
            Efter løbet venter Hveragerðis geotermiske bade og den berømte Reykjadalur-varmeflod
            lige uden for byen — svært at forestille sig en bedre restitution. Vi bor samlet på
            hotellet alle nætter, så løb, hvile og fællesskab hænger sammen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hengill27Accommodation;
