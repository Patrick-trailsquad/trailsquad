import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const RibeiraAccommodation = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {[
                "/lovable-uploads/8ef737f6-6db5-426b-b7c1-30dd1237f3f5.png",
                "/lovable-uploads/c410cbf0-1be2-4f66-9ae9-cbd7356a5dcf.png", 
                "/lovable-uploads/f28071a7-dd02-4fb2-96e4-f46fe1e26c54.png",
                "/lovable-uploads/817df969-5c3c-456f-ac27-c783a07686ca.png",
                "/lovable-uploads/d82fbf4a-a04e-41cb-8857-059331238963.png",
                "/lovable-uploads/969011ad-2594-4761-bf33-8468779ced1b.png"
              ].map((src, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="w-full h-full flex items-center justify-center">
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
        <div className="p-8 flex flex-col justify-center">
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
            Set in a stunning 12th-century monastery, this luxury hotel offers an unforgettable stay in the heart of the Ribeira Sacra. 
            The beautifully restored building features original stone architecture, elegant cloisters, and magnificent views of the 
            surrounding valleys. You'll enjoy spacious rooms, gourmet Galician cuisine, and a peaceful spa - perfect for recovery 
            after your trail adventure.
          </p>
          <p className="text-lg mt-4">
            The hotel's restaurant, Dos Abades, offers a delightful half-board experience with breakfast and dinner, featuring local Galician specialties that will perfectly complement your trail running journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RibeiraAccommodation;
