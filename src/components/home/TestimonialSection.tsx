
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
    title: "Cappadocia Trail Runner"
  },
  {
    quote: "From the rugged peaks to the serene valleys, every moment was an adventure. The guides were exceptional, and the group became like family.",
    author: "Michael Chen",
    title: "Swiss Alps Explorer"
  },
  {
    quote: "The fjords were even more magnificent than I imagined. Running through this pristine landscape was truly a once-in-a-lifetime experience.",
    author: "Emma Anderson",
    title: "Norwegian Trails Enthusiast"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
                      alt="Trail runner in action"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <blockquote className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-cabinet text-xl font-bold text-charcoal">{testimonial.author}</p>
                      <p className="text-charcoal/60">{testimonial.title}</p>
                    </div>
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
