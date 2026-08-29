import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";
import { useYouTubePlayer } from "../../hooks/useYouTubePlayer";
import { useIsMobile } from "../../hooks/use-mobile";
const HERO_VIDEO_ID = "pHQXa6ImpEw";
const HeroSection = () => {
  const navigateAndScroll = useNavigateAndScroll();
  const isMobile = useIsMobile();
  useYouTubePlayer(
    HERO_VIDEO_ID,
    {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: HERO_VIDEO_ID,
      controls: 0,
      showinfo: 0,
      rel: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 1
    },
    undefined,
    "yt-hero-player"
  );
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Snør dine løbesko\nog oplev verden!";
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
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.6)', transformOrigin: 'center center' }}>
          <div id="yt-hero-player" className="w-full h-full pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">
          <h1 className="font-cabinet text-4xl md:text-7xl font-bold text-white mb-6 min-h-[120px] md:min-h-[160px] flex items-center justify-center">
            <span className="whitespace-pre-line">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          {isTypingComplete && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: "auto",
          opacity: 1
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="overflow-hidden">
              <p className="font-inter text-xl text-white/90 mb-8 max-w-2xl mx-auto">Få utrolige oplevelser og boost din aktive livsstil ved at besejre toppene af Europas bjerge</p>
              <button onClick={handleDestinationsClick} className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-medium border-2 border-black hover:bg-white transition-colors duration-300 flex items-center gap-2 mx-auto">
                Se kommende ture
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>}
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;