
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const RibeiraAccommodation = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/8ef737f6-6db5-426b-b7c1-30dd1237f3f5.png" alt="Aerial view of Parador de Santo Estevo" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/c410cbf0-1be2-4f66-9ae9-cbd7356a5dcf.png" alt="Parador de Santo Estevo courtyard" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/f28071a7-dd02-4fb2-96e4-f46fe1e26c54.png" alt="Parador de Santo Estevo room" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/817df969-5c3c-456f-ac27-c783a07686ca.png" alt="Parador de Santo Estevo spa" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/d82fbf4a-a04e-41cb-8857-059331238963.png" alt="Parador de Santo Estevo room interior" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/969011ad-2594-4761-bf33-8468779ced1b.png" alt="Parador de Santo Estevo monastery view" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
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
