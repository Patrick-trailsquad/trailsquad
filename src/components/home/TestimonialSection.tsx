
import React, { useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Grand Trail du Lac was my first trail race. Great experience to push myself to the limits in a well-organised race. The entire trip was planned and executed super smoothly!",
    author: "Simon Meinertz",
    title: "Grand Trail du Lac",
    image: "/lovable-uploads/9600454e-7c7f-4482-8216-a6e55e2a1c6e.png"
  },
  {
    quote: "I ran the GTC30 and I'm going back next year! The trail was awesome, climbing the mountain tops and getting crazy scenaries were a breath-taking experience - quite literally!",
    author: "Mathias Lund",
    title: "Gran Trail Courmayeur",
    image: "/lovable-uploads/7225d714-9535-49a1-810d-8357e51c97ef.png"
  },
  {
    quote: "I never thought I could push myself to run 85 km but the vibe amongst the other runners and the general thrill of nailing this badboy drove me through the race! What a day!",
    author: "Lasse Stokholm",
    title: "Bornholm Hammer Trail",
    image: "/lovable-uploads/a91cfa89-2256-458c-8ba1-bfd2d0b4a1b1.png"
  }
];

const TestimonialSection = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  // Set up the event listener for when the carousel slides
  useCallback(() => {
    if (!api) return;
    
    const onChange = () => {
      if (!api) return;
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onChange);
    
    // Get initial position
    onChange();
    
    return () => {
      api.off("select", onChange);
    };
  }, [api]);
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-cabinet font-bold text-center text-charcoal mb-16">
          Happy Trail Squad Alumni!
        </h1>
        
        {isMobile && (
          <div className="text-center text-charcoal/60 mb-6 flex items-center justify-center gap-2">
            <ChevronLeft className="h-5 w-5" />
            <span>Swipe to see more testimonials</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        )}
        
        <Carousel 
          className="mx-auto max-w-7xl"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-64 aspect-square rounded-2xl overflow-hidden mb-6">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.author} testimonial`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <blockquote className="font-cabinet text-base md:text-lg font-bold text-charcoal mb-4 max-w-[16rem]">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="max-w-[16rem]">
                    <p className="font-cabinet text-base font-bold text-charcoal">{testimonial.author}</p>
                    <p className="text-sm text-charcoal/60">{testimonial.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
        
        {isMobile && (
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-[#FEF7CD] border border-[#FEF7CD] shadow-sm" : "bg-charcoal/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
