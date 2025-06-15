
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

const TransylvaniaAccommodation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"}`}>
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {[
                "/lovable-uploads/bec62159-47fc-4e21-9d40-11bebd51957a.png",
                "/lovable-uploads/bf05c5b2-8ce8-4471-a1d3-d57375061f2c.png", 
                "/lovable-uploads/c5ad0d53-d3e9-4acf-9182-5c642ad97194.png",
                "/lovable-uploads/cf8dc3b8-2664-43db-9f7f-b5647f7dea9b.png"
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="h-[450px] rounded-xl overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Bran Castle Hotel image ${index + 1}`} 
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
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Hotel Castel Dracula</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Piatra Fântânele, Brașov County</h2>
          <p className="text-lg">
            Experience the mystique of Transylvania at this unique mountain hotel, perfectly positioned near the legendary 
            Bran Castle. This atmospheric accommodation offers stunning views of the Carpathian Mountains and provides 
            an authentic Romanian experience with traditional architecture and local hospitality.
          </p>
          <p className="text-lg mt-4">
            The hotel features comfortable rooms with mountain views, a restaurant serving traditional Romanian cuisine, 
            and easy access to the trail routes. It's the perfect base for your Transylvania 100 adventure, combining 
            comfort with the legendary atmosphere of Dracula's homeland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransylvaniaAccommodation;
