
import React from 'react';
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SavoyPalaceCarousel = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              <CarouselItem>
                <div className="h-[400px]">
                  <img 
                    src="/lovable-uploads/751c3219-e674-4156-8637-0de9be362e5f.png" 
                    alt="Savoy Palace infinity pool with ocean view" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img 
                    src="/lovable-uploads/141a2adc-ec79-4fc5-adf3-9aac915f4f54.png" 
                    alt="Savoy Palace tropical pool with palm trees" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img 
                    src="/lovable-uploads/b9de1552-d71c-460b-b48d-62167e202e0f.png" 
                    alt="Savoy Palace luxury suite with ocean view" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img 
                    src="/lovable-uploads/956dbc4e-0e11-433a-9843-6c9ace6e75ab.png" 
                    alt="Savoy Palace balcony with ocean view" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img 
                    src="/lovable-uploads/8902731a-8d1d-4cd3-828d-37acdd57acee.png" 
                    alt="Savoy Palace indoor spa pool" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
          </Carousel>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mb-2">Savoy Palace</h1>
          <h2 className="font-cabinet text-xl text-terra mb-4">Funchal, Madeira</h2>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-md text-gray-600">5-Star Hotel</span>
          </div>
          <p className="text-lg">
            Located in Funchal's city center, the luxurious Savoy Palace offers breathtaking ocean views and 
            elegant accommodations. Enjoy innovative cuisine at the hotel's restaurants, relax in the 
            infinity pool overlooking the Atlantic, and recover in the world-class spa after your trail 
            adventure. Perfect for both pre-race preparation and post-race relaxation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavoyPalaceCarousel;
