
import React, { useState, useEffect } from "react";
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
    quote: "Grand Trail du Lac var mit første trailløb. Fantastisk oplevelse at presse mig selv til grænsen i et velorganiseret løb. Hele turen var stærkt planlagt og super eksekveret.",
    author: "Simon Meinertz",
    title: "Grand Trail du Lac 🇫🇷",
    image: "/lovable-uploads/9600454e-7c7f-4482-8216-a6e55e2a1c6e.png"
  },
  {
    quote: "Jeg løb GTC30 og jeg kommer tilbage næste år! Ruterne var fantastiske, at bestige bjergtoppene og opleve de vanvittige landskaber var en betagende oplevelse - bogstaveligt talt!",
    author: "Mathias Lund",
    title: "Gran Trail Courmayeur 🇮🇹",
    image: "/lovable-uploads/7225d714-9535-49a1-810d-8357e51c97ef.png"
  },
  {
    quote: "Jeg troede aldrig, jeg kunne skubbe mig selv til at løbe 85 km, men stemningen blandt de andre løbere og den generelle spænding ved at klare den her badboy drev mig gennem løbet! Sikke en dag!",
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
  useEffect(() => {
    if (!api) return;
    
    const onChange = () => {
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
          Glade Trail Squad alumni!
        </h1>
        
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Carousel 
            className="mx-auto max-w-7xl"
            setApi={setApi}
            opts={{ loop: true }}
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
            <CarouselPrevious className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2" />
          </Carousel>
          
          {isMobile && (
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeIndex === index ? "bg-[#FFDC00] border border-[#FFDC00] shadow-sm" : "bg-charcoal/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
