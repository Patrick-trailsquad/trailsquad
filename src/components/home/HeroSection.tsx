import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";
import { useYouTubePlayer } from "../../hooks/useYouTubePlayer";
import { useIsMobile } from "../../hooks/use-mobile";
const HERO_VIDEO_ID = "9K00mO3JpJk";
const HeroSection = () => {
  const navigateAndScroll = useNavigateAndScroll();
  const isMobile = useIsMobile();
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [activePlayer, setActivePlayer] = useState<0 | 1>(0);
  const isTransitioningRef = useRef(false);
  const playerVars = {
    autoplay: 1,
    mute: 1,
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
  };
  const preparePlayer = (event: any) => {
    event.target.mute();
    event.target.seekTo(1, true);
    event.target.playVideo();
    setTimeout(() => setIsVideoVisible(true), 400);
  };
  const { ytPlayerRef: firstPlayerRef } = useYouTubePlayer(
    HERO_VIDEO_ID,
    playerVars,
    preparePlayer,
    "yt-hero-player-0"
  );
  const { ytPlayerRef: secondPlayerRef } = useYouTubePlayer(
    HERO_VIDEO_ID,
    playerVars,
    preparePlayer,
    "yt-hero-player-1"
  );

  // Restart the hidden player first, then crossfade to it. Any YouTube controls
  // caused by seeking remain invisible behind the currently active player.
  useEffect(() => {
    const interval = setInterval(() => {
      const players = [firstPlayerRef.current, secondPlayerRef.current];
      const player = players[activePlayer];
      if (!player?.getCurrentTime || !player?.getDuration) return;
      const duration = player.getDuration();
      const current = player.getCurrentTime();
      if (duration > 2 && current >= duration - 1.5 && !isTransitioningRef.current) {
        isTransitioningRef.current = true;
        const nextPlayerIndex: 0 | 1 = activePlayer === 0 ? 1 : 0;
        const nextPlayer = players[nextPlayerIndex];
        if (!nextPlayer?.seekTo || !nextPlayer?.playVideo) {
          isTransitioningRef.current = false;
          return;
        }
        nextPlayer.seekTo(1, true);
        nextPlayer.playVideo();
        setTimeout(() => {
          setActivePlayer(nextPlayerIndex);
          setTimeout(() => {
            player.pauseVideo?.();
            isTransitioningRef.current = false;
          }, 1000);
        }, 500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [activePlayer, firstPlayerRef, secondPlayerRef]);
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
        {[0, 1].map((playerIndex) => <div key={playerIndex} className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${isVideoVisible && activePlayer === playerIndex ? 'opacity-100' : 'opacity-0'}`} style={{ transform: isMobile ? 'scale(3.5)' : 'scale(1.5)', transformOrigin: 'center center' }}>
            <div dangerouslySetInnerHTML={{ __html: `<div id="yt-hero-player-${playerIndex}" style="width:100%;height:100%"></div>` }} className="w-full h-full" />
          </div>)}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute left-1/2 top-1/2 h-52 w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-charcoal/95 blur-2xl pointer-events-none" />
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