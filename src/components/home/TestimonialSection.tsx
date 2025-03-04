
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
              alt="Tired but happy runner after finishing race"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <blockquote className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-6">
              "The trails pushed me to my limits, but the breathtaking views and the sense of accomplishment made every step worth it. This wasn't just a run - it was a life-changing experience."
            </blockquote>
            <div>
              <p className="font-cabinet text-xl font-bold text-charcoal">Sarah Mitchell</p>
              <p className="text-charcoal/60">Cappadocia Trail Runner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
