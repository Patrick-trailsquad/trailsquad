import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";
import istriaHotelExterior from "../../../assets/istria-hotel-exterior.jpg";
import istriaHotelRoom from "../../../assets/istria-hotel-room.jpg";
import istriaHotelRestaurant from "../../../assets/istria-hotel-restaurant.jpg";
import istriaHotelSpa from "../../../assets/istria-hotel-spa.jpg";

const images = [
  istriaHotelExterior,
  istriaHotelRoom,
  istriaHotelRestaurant,
  istriaHotelSpa
];

const IstriaAccommodation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="h-[450px] rounded-xl overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Hotel Kempinski Adriatic Umag image ${index + 1}`} 
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
          <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Hotel Kempinski Adriatic</h1>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
            ))}
          </div>
        </div>
        <h2 className="font-cabinet text-xl text-terra mb-4">5-Stjernet Luksus Resort • Umag, Istria, Kroatien</h2>
        <p className="text-lg">
          Beliggende på Istriahalvøens spektakulære kystlinje er <b>Hotel Kempinski Adriatic</b> et elegant 5-stjernet resort med moderne kroatisk design, fantastiske havudsigter og direkte adgang til Adriaterhavet.
        </p>
        <p className="text-lg mt-4">
          Efter en dag på trailruten kan du slappe af i rummelige værelser med havudsigt, nyde det avancerede spa og wellness center og opdage et udvalg af gourmetrestauranter med mediterran cuisine.
        </p>
        <p className="text-lg mt-4">
          Det rolige kystmiljø, luksuriøse faciliteter og opmærksomme service gør Hotel Kempinski Adriatic til det perfekte udgangspunkt for dit Istria 100-eventyr - kombineret med verdensklasse gæstfrihed og adriatisk atmosfære blot få minutter fra stierne.
        </p>
      </div>
    </div>
  );
};

export default IstriaAccommodation;