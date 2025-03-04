import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The trails pushed me to my limits, but the breathtaking views and the sense of accomplishment made every step worth it. This wasn't just a run - it was a life-changing experience.",
    author: "Sarah Mitchell",
    title: "Cappadocia Trail Runner",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
  },
  {
    quote: "From the rugged peaks to the serene valleys, every moment was an adventure. The guides were exceptional, and the group became like family.",
    author: "Michael Chen",
    title: "Swiss Alps Explorer",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    quote: "The fjords were even more magnificent than I imagined. Running through this pristine landscape was truly a once-in-a-lifetime experience.",
    author: "Emma Anderson",
    title: "Norwegian Trails Enthusiast",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-cabinet font-bold text-center text-charcoal mb-16">
          Happy Trail Squad Alumni!
        </h1>
        <Carousel className="mx-auto max-w-7xl">
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
                  <blockquote className="font-cabinet text-lg md:text-xl font-bold text-charcoal mb-4 max-w-[16rem]">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="max-w-[16rem]">
                    <p className="font-cabinet text-lg font-bold text-charcoal">{testimonial.author}</p>
                    <p className="text-charcoal/60">{testimonial.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
