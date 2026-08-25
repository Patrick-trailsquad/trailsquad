import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  "/lovable-uploads/fyri-hotel-1.png",
  "/lovable-uploads/fyri-hotel-2.png",
  "/lovable-uploads/fyri-hotel-3.png",
  "/lovable-uploads/fyri-hotel-4.png",
  "/lovable-uploads/fyri-hotel-5.png",
];

const Fyri26Accommodation = () => {
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
                      alt={`Fýri Resort ${index + 1}`}
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
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Fýri Resort</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Designhotel • Hemsedal, Norge</h2>
          <p className="text-lg">
            <b>Fýri Resort</b> ligger midt i Hemsedal med fjeldet som nabo og løbets start/mål-område
            lige udenfor døren. Hotellet er bygget i norsk træ og sten med store vinduer, åbne
            ildsteder og en rå, nordisk æstetik, der spiller op mod naturen udenfor.
          </p>
          <p className="text-lg mt-4">
            Om sommeren er resortet base for alt fra trailløb og vandreture til stisykling og
            fjeldbad. Efter en lang dag på stierne venter Fýri Spa med pool club, saunaer og
            udendørs bad — det bedste sted i Hemsedal at få benene ovenpå igen.
          </p>
          <p className="text-lg mt-4">
            Vi bor her alle tre nætter, spiser vores fælles middage i hotellets restauranter og
            holder både race-briefing og after-trail-hygge på stedet. Kort sagt: ét sted, hvor løb,
            restitution og fællesskab hænger sammen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fyri26Accommodation;
