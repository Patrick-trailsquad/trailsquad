
import React from 'react';
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "../../../hooks/use-mobile";

const images = [
  // Replace these with real hotel uploads when available
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
];

const TransylvaniaAccommodation = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"}`}>
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="h-[450px] rounded-xl overflow-hidden">
                    <img 
                      src={src}
                      alt={`Swissôtel Resort Alpin Poiana Brașov room or view ${index + 1}`} 
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
            {/* Removed the <Hotel /> icon here */}
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Swissôtel Poiana Brasov</h1>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Poiana Brașov, Brașov County</h2>
          <p className="text-lg">
            Nestled in the heart of the Carpathian Mountains, the <b>Swissôtel Poiana Brasov</b> is an elegant alpine retreat offering unmatched comfort, spectacular views, and direct access to Romania’s premier mountain resort.
          </p>
          <p className="text-lg mt-4">
            After your day on the trails, unwind in spacious rooms and suites featuring modern Swiss design and panoramic mountain vistas. Enjoy the resort’s state-of-the-art spa and wellness center, indoor pool, and a diverse selection of restaurants offering both international favorites and traditional Romanian cuisine.
          </p>
          <p className="text-lg mt-4">
            With its serene mountain setting, luxurious amenities, and attentive service, Swissôtel Poiana Brasov provides the perfect base for your Transylvania 100 adventure—combining relaxation, world-class hospitality, and alpine atmosphere just minutes from trailheads and the enchanting city of Brașov.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransylvaniaAccommodation;

