
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

const GTCAccommodation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {[
              "/lovable-uploads/3ebbfa1f-36d8-475e-b637-37f308efc5cd.png",
              "/lovable-uploads/e2dddc4a-5c0f-4343-b69d-1729e0adf7fd.png"
            ].map((src, index) => (
              <CarouselItem key={index}>
                <div className="h-[450px] rounded-xl overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Au Coeur des Neiges image ${index + 1}`} 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Au Coeur des Neiges</h1>
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">Courmayeur, Italien</h2>
        <p className="text-lg">
          Beliggende i hjertet af Courmayeur tilbyder Au Coeur des Neiges det perfekte alpine tilflugtssted 
          for trailløbere. Dette charmerende boutique hotel kombinerer traditionel bjerggæstfrihed 
          med moderne komfort og giver et ideelt udgangspunkt for dit Gran Trail Courmayeur eventyr.
        </p>
        <p className="text-lg mt-4">
          Beliggende kun få minutter fra løbets start/mål område vil du nyde rummelige værelser med 
          fantastisk udsigt til Mont Blanc, exceptionel lokal madlavning og personlig service, der 
          forstår behovene hos trailløbsatleter. Hotellets wellness faciliteter 
          giver det perfekte restitutionssted efter at have erobret det udfordrende alpine terræn.
        </p>
      </div>
    </div>
  );
};

export default GTCAccommodation;
