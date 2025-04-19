
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
                  <img src="/lovable-uploads/956dbc4e-0e11-433a-9843-6c9ace6e75ab.png" alt="Castello di Volpaia exterior" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" alt="Castello di Volpaia interior" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-[400px]">
                  <img src="/lovable-uploads/8902731a-8d1d-4cd3-828d-37acdd57acee.png" alt="Castello di Volpaia room" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        <div className="p-8 flex flex-col justify-center">
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
    </div>
  );
};

export default ChiantiAccommodation;
