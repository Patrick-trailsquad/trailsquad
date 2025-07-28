

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";

const HeroSection = () => {
  const navigateAndScroll = useNavigateAndScroll();
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Oplev episke destinationer\nmed løbeskoene på";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 50); // Speed of typing effect (50ms per character)

    return () => clearInterval(timer);
  }, []);

  const handleDestinationsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateAndScroll('/', 'upcoming-trips');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/419d5e82-8ab8-4c5f-b1e6-4b77ae8486a8.png" 
          alt="Trail runners in Cappadocia with hot air balloons" 
          className="w-full h-full object-cover md:object-center object-[-450px_center]" 
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
            Episke Trail Eventyr
          </span>
          <h1 className="font-cabinet text-4xl md:text-7xl font-bold text-white mb-6 min-h-[120px] md:min-h-[160px] flex items-center justify-center">
            <span className="whitespace-pre-line">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          {isTypingComplete && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="font-inter text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Få utrolige oplevelser og boost dit aktive livsstil ved at besejre toppene af Europas bjerge
              </p>
              <button 
                onClick={handleDestinationsClick} 
                className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-medium border-2 border-black hover:bg-white transition-colors duration-300 flex items-center gap-2 mx-auto"
              >
                Se kommende ture
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

