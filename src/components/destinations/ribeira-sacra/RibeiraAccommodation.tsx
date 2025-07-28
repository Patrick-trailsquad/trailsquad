
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

const RibeiraAccommodation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {[
              "/lovable-uploads/8ef737f6-6db5-426b-b7c1-30dd1237f3f5.png",
              "/lovable-uploads/c410cbf0-1be2-4f66-9ae9-cbd7356a5dcf.png", 
              "/lovable-uploads/f28071a7-dd02-4fb2-96e4-f46fe1e26c54.png",
              "/lovable-uploads/817df969-5c3c-456f-ac27-c783a07686ca.png",
              "/lovable-uploads/d82fbf4a-a04e-41cb-8857-059331238963.png",
              "/lovable-uploads/969011ad-2594-4761-bf33-8468779ced1b.png"
            ].map((src, index) => (
              <CarouselItem key={index}>
                <div className="h-[450px] rounded-xl overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Parador de Santo Estevo image ${index + 1}`} 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Parador de Santo Estevo</h1>
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">Nogueira de Ramuín, Ourense</h2>
        <p className="text-lg">
          Beliggende i et fantastisk kloster fra det 12. århundrede tilbyder dette luksushotel et uforglemmelig ophold i hjertet af Ribeira Sacra. 
          Den smukt restaurerede bygning byder på original stenarkitektur, elegante klostergange og storslåede udsigter over de 
          omkringliggende dale. Du vil nyde rummelige værelser, gourmet galicisk køkken og et fredeligt spa - perfekt til restitution 
          efter dit trail-eventyr.
        </p>
        <p className="text-lg mt-4">
          Hotellets restaurant, Dos Abades, tilbyder en dejlig halvpensions-oplevelse med morgenmad og middag, med lokale galiciske specialiteter, der perfekt vil supplere din trailløbs-rejse.
        </p>
      </div>
    </div>
  );
};

export default RibeiraAccommodation;
