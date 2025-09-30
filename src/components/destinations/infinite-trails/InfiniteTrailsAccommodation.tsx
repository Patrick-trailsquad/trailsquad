import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

// Placeholder images - these should be replaced with actual Bad Gastein hotel images
const images = [
  "/lovable-uploads/ba002ac9-1745-47a1-a01f-ca8bfa53b60d.png",
  "/lovable-uploads/ba002ac9-1745-47a1-a01f-ca8bfa53b60d.png",
  "/lovable-uploads/ba002ac9-1745-47a1-a01f-ca8bfa53b60d.png",
];

const InfiniteTrailsAccommodation = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="h-[450px] rounded-xl overflow-hidden">
                  <img 
                    src={src}
                    alt={`Bad Gastein accommodation ${index + 1}`} 
                    className="w-full h-full object-cover" 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Luksus Hotel i Bad Gastein</h1>
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">4-Stjernet Hotel • Bad Gastein, Østrig</h2>
        <p className="text-lg">
          Beliggende i hjertet af Bad Gastein tilbyder vores udvalgte hotel en perfekt kombination 
          af alpeluksus og moderne komfort. Med spektakulære udsigter over de østrigske alper og 
          tæt på løbsruterne, er det det ideelle udgangspunkt for dit Infinite Trails eventyr.
        </p>
        <p className="text-lg mt-4">
          Efter en dag på stierne kan du slappe af i komfortable værelser, nyde hotellets wellness-faciliteter 
          og opleve den autentiske østrigske gæstfrihed med lokale kulinariske specialiteter.
        </p>
        <p className="text-lg mt-4">
          Bad Gasteins unikke atmosfære med sine berømte vandfald, termalbade og charmerende 
          Belle Époque-arkitektur gør opholdet til en uforglemmelig oplevelse - det perfekte sted at 
          restituere og fejre din præstation sammen med Trail Squad.
        </p>
      </div>
    </div>
  );
};

export default InfiniteTrailsAccommodation;
