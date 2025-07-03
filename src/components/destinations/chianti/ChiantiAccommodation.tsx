
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ChiantiAccommodation = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="h-[400px]">
                <img src="/lovable-uploads/4e78b4af-a60b-448a-bfe5-f89b198145ea.png" alt="Castello di Volpaia village view" className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-[400px]">
                <img src="/lovable-uploads/74fb6a18-ce2f-4b9d-ac3c-d46a0363e98f.png" alt="Castello di Volpaia dining area" className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-[400px]">
                <img src="/lovable-uploads/e4bdae1c-8eda-473f-b8ac-bd657a7bc1eb.png" alt="Castello di Volpaia pool area" className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-[400px]">
                <img src="/lovable-uploads/f973a04c-f596-4890-8c98-004b4109659c.png" alt="Castello di Volpaia breakfast spread" className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-[400px]">
                <img src="/lovable-uploads/00d53173-273c-485f-9b44-e1f390781d57.png" alt="Castello di Volpaia bedroom" className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center mb-2">
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Castello di Volpaia</h1>
          <div className="flex">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">Radda, Chianti, Italy</h2>
        <p className="text-lg">
          Experience the enchanting beauty of Castello di Volpaia, a historic castle nestled in the heart of 
          the Chianti region. This stunning property offers a unique blend of medieval architecture and 
          contemporary comfort, providing an authentic Tuscan experience for trail runners and wine enthusiasts alike.
        </p>
        <p className="text-lg mt-4">
          Surrounded by rolling vineyards and olive groves, Castello di Volpaia offers breathtaking views 
          and a serene atmosphere. After your trail running adventure, relax in elegantly appointed rooms 
          that capture the essence of Tuscan hospitality and charm.
        </p>
      </div>
    </div>
  );
};

export default ChiantiAccommodation;
