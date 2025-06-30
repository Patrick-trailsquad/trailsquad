
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

const ZugspitzAccommodation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"}`}>
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {[
                "/lovable-uploads/30268898-0fdd-471e-a3a9-0ca6878dc32b.png",
                "/lovable-uploads/1c46acfc-b2ec-40ff-9e27-72808cf9bbb8.png",
                "/lovable-uploads/715b7660-d507-4c4b-a163-b7a7acd5ad33.png",
                "/lovable-uploads/5deacf03-9191-423e-afb9-f74baa238157.png",
                "/lovable-uploads/407a5853-5f96-4506-a6a5-4b0b2d42903f.png",
                "/lovable-uploads/c9ffc027-8e19-41b2-b0ff-c028546bf12b.png",
                "/lovable-uploads/d757c59c-7f4e-451d-8c4c-413dbed9c0b2.png",
                "/lovable-uploads/17b26aa9-6d02-43d3-ac64-3f1d51bb6e93.png",
                "/lovable-uploads/6048864c-8779-4367-b810-28acbdf0456b.png"
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="h-[450px] rounded-xl overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Werdenfelserei image ${index + 1}`} 
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
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Werdenfelserei</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Garmisch-Partenkirchen, Bavaria</h2>
          <p className="text-lg">
            Stay at the charming Werdenfelserei, a traditional Bavarian guesthouse located in the heart of 
            Garmisch-Partenkirchen. This authentic accommodation offers the perfect blend of rustic Alpine 
            charm and modern comfort, providing an intimate and cozy atmosphere for your trail running adventure.
          </p>
          <p className="text-lg mt-4">
            The Werdenfelserei captures the essence of Bavarian hospitality with its warm, welcoming ambiance 
            and traditional decor. Each room is thoughtfully designed to reflect the local heritage while 
            ensuring modern amenities for your comfort after a day on the trails.
          </p>
          <p className="text-lg mt-4">
            Perfectly positioned for exploring the Zugspitz region, the guesthouse offers easy access to 
            the race routes while immersing you in the authentic culture and traditions of this historic 
            Alpine town. Experience genuine Bavarian warmth and hospitality at this special accommodation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZugspitzAccommodation;
