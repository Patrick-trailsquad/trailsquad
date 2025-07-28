
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

const images = [
  "/lovable-uploads/3179d8dd-8bd9-495c-8e95-7e9f275cbb86.png",
  "/lovable-uploads/a459d0b9-06e8-48ef-97f7-2c508cdcdddb.png",
  "/lovable-uploads/cc978616-09fd-4ac0-a6c8-cdeddbf402bc.png",
  "/lovable-uploads/dd40584a-ce0d-4894-977e-6c67d99ecc50.png",
  "/lovable-uploads/414bab4d-7f7c-49d4-bb2f-c3f955fc4e8b.png",
  "/lovable-uploads/5a51837a-4e90-41a3-89f1-77b6635baea3.png" // newly added restaurant image
];

const TransylvaniaAccommodation = () => {
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
                    alt={`Swissôtel Resort Alpin Poiana Brașov room or view ${index + 1}`} 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Swissôtel Poiana Brasov</h1>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">5-Stjernet Luksus Resort • Poiana Brașov, Brașov County</h2>
        <p className="text-lg">
          Beliggende i Karpaterne er <b>Swissôtel Poiana Brasov</b> et elegant 5-stjernet alpint tilflugtssted med moderne schweizisk design, spektakulære bjergudssigter og direkte adgang til Rumæniens førende bjergresort.
        </p>
        <p className="text-lg mt-4">
          Efter en dag på stierne kan du slappe af i rummelige værelser, nyde det avancerede spa og wellness center og opdage et udvalg af gourmetrestauranter.
        </p>
        <p className="text-lg mt-4">
          Det rolige bjergsetting, luksuriøse faciliteter og opmærksomme service gør Swissôtel Poiana Brasov til det perfekte udgangspunkt for dit Transylvania 100-eventyr - kombineret med verdensklasse gæstfrihed og alpin atmosfære blot få minutter fra stierne.
        </p>
      </div>
    </div>
  );
};

export default TransylvaniaAccommodation;
