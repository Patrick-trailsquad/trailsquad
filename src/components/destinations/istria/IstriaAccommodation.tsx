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
              "/lovable-uploads/252cbd72-9c01-4a8c-b76c-fdc820f43886.png",
              "/lovable-uploads/252cbd72-9c01-4a8c-b76c-fdc820f43886.png",
              "/lovable-uploads/252cbd72-9c01-4a8c-b76c-fdc820f43886.png"
            ].map((src, index) => (
              <CarouselItem key={index}>
                <div className="h-[450px] rounded-xl overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Hotel Kempinski Adriatic image ${index + 1}`} 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Hotel Kempinski Adriatic</h1>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">Savudrija, Istria, Kroatien</h2>
        <p className="text-lg">
          Velkommen til Hotel Kempinski Adriatic – et luksuriøst golf- og spa-resort beliggende 
          på Istriahalvøens smukke kystlinje. Dette ekstraordinære basecamp tilbyder den 
          perfekte kombination af adriatisk elegance og moderne luksus.
        </p>
        <p className="text-lg mt-4">
          Efter dit trailløbseventyr kan du nyde verdensklasse spa-faciliteter, dykke ned i 
          infinity-poolen med havudsigt eller slappe af på den private strand. Hotellet 
          byder på gourmetmåltider med lokale istriske specialiteter og verdensberømt 
          kroatisk vinkultur.
        </p>
        <p className="text-lg mt-4">
          Afslap dig på terrassen med udsigt over golfbanen og det adriatiske hav, 
          del løbshistorier med medløbere og nyd den perfekte balance mellem atletisk 
          udfordring og luksus rekreation på Istriahalvøen.
        </p>
      </div>
    </div>
  );
};

export default IstriaAccommodation;