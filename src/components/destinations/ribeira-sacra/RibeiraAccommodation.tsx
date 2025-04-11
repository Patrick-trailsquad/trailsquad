
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const RibeiraAccommodation = () => {
  return <div className="bg-white rounded-xl overflow-hidden">
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
                <Star 
                  key={index} 
                  className="w-5 h-5 text-yellow-500 fill-yellow-500" 
                />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Nogueira de Ramuín, Ourense</h2>
          <p className="text-lg">
            Nestled in a 12th-century monastery, this luxury hotel offers an exceptional stay in Ribeira Sacra. 
            The beautifully restored building showcases original stone architecture, elegant cloisters, and breathtaking 
            valley views, providing a unique blend of historic charm and modern comfort.
          </p>
          <p className="text-lg mt-4">
            Your half board includes breakfast and dinner at the renowned Dos Abades restaurant, 
            where you'll savor authentic Galician cuisine featuring fresh, locally-sourced ingredients 
            that highlight the region's rich culinary traditions.
          </p>
        </div>
      </div>
    </div>;
};

export default RibeiraAccommodation;

