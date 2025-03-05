import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/419d5e82-8ab8-4c5f-b1e6-4b77ae8486a8.png"
          alt="Trail runners in Cappadocia with hot air balloons"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
            Epic Trail Adventures
          </span>
          <h1 className="font-cabinet text-4xl md:text-7xl font-bold text-white mb-6">
            Run in the World's
            <br />
            Most Stunning Locations
          </h1>
          <p className="font-inter text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get incredible experiences and boost your active life style by defeating the summits of Europe's mountains
          </p>
          <button className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-medium border-2 border-black hover:bg-white transition-colors duration-300 flex items-center gap-2 mx-auto">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
