import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

const IstriaAccommodation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {[
              "/lovable-uploads/080f4dbb-4114-41be-925b-4d761cf94714.png",
              "/lovable-uploads/749ebd53-0454-4092-9aec-b2c6d23dcfe3.png",
              "/lovable-uploads/2d192e70-ba60-4dbe-90ab-e847b00f0e7d.png",
              "/lovable-uploads/e576139c-c2c6-4a11-89a2-3837846724d9.png"
            ].map((src, index) => (
              <CarouselItem key={index}>
                <div className="h-[450px] rounded-xl overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Villa An with Private Pool image ${index + 1}`} 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Villa An with Private Pool</h1>
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">Srbarica 55a, Umag, Istria, Kroatien</h2>
        <p className="text-lg">
          Velkommen til Villa An med privat pool – en moderne, luksuriøs villa beliggende 
          i det pittoreske Umag på Istriahalvøens smukke kystlinje. Denne ekstraordinære 
          villa tilbyder den perfekte kombination af moderne komfort og adriatisk charme.
        </p>
        <p className="text-lg mt-4">
          Efter dit trailløbseventyr kan du slappe af i den private pool, nyde de 
          elegante indendørs områder med åben grundplan og moderne design. Villaen 
          byder på fuldt udstyrede køkken- og opholdsområder samt komfortable soveværelser.
        </p>
        <p className="text-lg mt-4">
          Nyd den private terrasse med poolområde og udendørs spiseplads, 
          del løbshistorier med medløbere og oplev den perfekte balance mellem atletisk 
          udfordring og afslappende rekreation i det smukke Istria.
        </p>
      </div>
    </div>
  );
};

export default IstriaAccommodation;