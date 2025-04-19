
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ChiantiAccommodation = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/956dbc4e-0e11-433a-9843-6c9ace6e75ab.png" alt="Castello del Nero exterior" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" alt="Castello del Nero pool" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/8902731a-8d1d-4cd3-828d-37acdd57acee.png" alt="Castello del Nero room" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Castello del Nero</h1>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Tavarnelle Val di Pesa, Chianti</h2>
          <p className="text-lg">
            Immerse yourself in Tuscan luxury at the historic Castello del Nero, a 12th-century castle turned 
            five-star hotel. Set among the rolling hills of Chianti, this stunning property offers spectacular 
            views of the surrounding vineyards and olive groves. The hotel features elegant rooms with modern 
            amenities while maintaining its historic charm.
          </p>
          <p className="text-lg mt-4">
            The hotel's renowned restaurant, La Torre, offers exceptional Tuscan cuisine created with local 
            ingredients, many from the castle's own garden. After your trail running adventure, rejuvenate at 
            the world-class ESPA spa with its heated pool and customized treatments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChiantiAccommodation;

