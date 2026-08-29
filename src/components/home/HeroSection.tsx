import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";
import { useYouTubePlayer } from "../../hooks/useYouTubePlayer";
import { useIsMobile } from "../../hooks/use-mobile";
const HERO_VIDEO_ID = "9K00mO3JpJk";
const HeroSection = () => {
  const navigateAndScroll = useNavigateAndScroll();
  const isMobile = useIsMobile();
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { ytPlayerRef } = useYouTubePlayer(
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
      playsinline: 1,
      disablekb: 1,
      fs: 0,
      cc_load_policy: 0,
      autohide: 1
    },
    (event: any) => {
      event.target.mute();
      event.target.seekTo(0.5, true);
      event.target.playVideo();
      setTimeout(() => setIsVideoVisible(true), 400);
    },
    "yt-hero-player"
  );

  // Seamless loop: restart shortly before the end to avoid the black frame
  // Seek to 0.5s to skip the initial control overlay frame
  useEffect(() => {
    const interval = setInterval(() => {
      const player = ytPlayerRef.current;
      if (!player?.getCurrentTime || !player?.getDuration) return;
      const duration = player.getDuration();
      const current = player.getCurrentTime();
      if (duration > 1 && current >= duration - 0.6) {
        player.seekTo(0.5, true);
        player.playVideo();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [ytPlayerRef]);
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
      <div className="absolute inset-0 z-0 overflow-hidden bg-charcoal">
        <div className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${isVideoVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transform: isMobile ? 'scale(3.5)' : 'scale(1.5)', transformOrigin: 'center center' }}>
          <div dangerouslySetInnerHTML={{ __html: '<div id="yt-hero-player" style="width:100%;height:100%"></div>' }} className="w-full h-full" />
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