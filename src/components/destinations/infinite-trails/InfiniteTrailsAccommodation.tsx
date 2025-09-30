import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

// The Comodo hotel images in filename order
const images = [
  "/lovable-uploads/comodo-4.png", // Bar/restaurant area
  "/lovable-uploads/comodo-2.png", // Hotel room
  "/lovable-uploads/comodo-3.png", // Spa/pool area
  "/lovable-uploads/comodo-1.png", // Hotel exterior
  "/lovable-uploads/comodo-5.png", // Restaurant dining
  "/lovable-uploads/comodo-6.png", // Spa with mountain views
  "/lovable-uploads/comodo-7.png", // Fitness center
  "/lovable-uploads/comodo-8.png", // Cinema/conference room
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
                    alt={`The Comodo Bad Gastein ${index + 1}`} 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">The Comodo</h1>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">Boutique Design Hotel • Bad Gastein, Østrig</h2>
        <p className="text-lg">
          <b>The Comodo</b> er et designerhotel i Bad Gastein, der kombinerer moderne luksus med 
          alpecharm. Hotellet ligger i det historiske centrum og tilbyder den perfekte base 
          for dit Infinite Trails eventyr med spektakulære bjergudssigter og førsteklasses faciliteter.
        </p>
        <p className="text-lg mt-4">
          Efter en dag på de krævende trails kan du slappe af i elegante værelser med bjergudssigt, 
          nyde hotellets avancerede spa og wellness-faciliteter, samt træne i det fuldt udstyrede 
          fitnesscenter - alt sammen designet med trail runners' behov for restitution i tankerne.
        </p>
        <p className="text-lg mt-4">
          The Comodo tilbyder også gourmet-dining med fokus på lokal østrigsk cuisine og 
          sunde, energigivende måltider perfekt til at tanke op før og efter løb. Hotellets 
          beliggenhed giver nem adgang til trailruter og Bad Gasteins berømte termalbade.
        </p>
      </div>
    </div>
  );
};

export default InfiniteTrailsAccommodation;
