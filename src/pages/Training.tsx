import { useEffect, useRef } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useIsMobile } from "../hooks/use-mobile";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import trailFoxLogo from "@/assets/trail-fox-logo-white.png";
import trailSquadLogo from "@/assets/trail-squad-logo-black.png";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Training = () => {
  usePageTitle('Training');
  const isMobile = useIsMobile();
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    // YouTube API ready callback
    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        const videoId = 'viCyanUDC3s';
        ytPlayerRef.current = new window.YT.Player(playerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId,
            controls: 0,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            start: 3
          }
        });
      }
    };

    return () => {
      if (ytPlayerRef.current) {
        ytPlayerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section with YouTube Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full" style={{
            transform: isMobile ? 'scale(3.5)' : 'scale(1.5)',
            transformOrigin: 'center center'
          }}>
            <div ref={playerRef} className="absolute inset-0 w-full h-full" />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center z-10 px-6">
          <h1 className="font-cabinet font-bold text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Trail Fox og Trail Squad trail-træning 2025/2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Løbetræning er en holdsport - både for de nye og for de erfarne
          </p>
        </div>
      </section>

      {/* Meet the Team Banner */}
      <section className="w-full bg-yellow py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-charcoal leading-none tracking-tight">
                  Trail Fox og Trail Squad trail-træning
                </h1>
              </div>
            </div>
            
            {/* Images Section - 40% */}
            <div className="lg:col-span-4 flex gap-8 justify-center items-end">
              <div className="relative group transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 mt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img
                    src="/lovable-uploads/trail-runners-forest.jpg"
                    alt="Trail Fox"
                    className="w-52 h-80 md:w-60 md:h-96 object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                  {/* Trail Fox Logo at bottom */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                    <img
                      src={trailFoxLogo}
                      alt="Trail Fox Logo"
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative group transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 mb-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img
                    src="/lovable-uploads/trail-squad-runners.jpg"
                    alt="Trail Squad"
                    className="w-52 h-80 md:w-60 md:h-96 object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                  {/* Trail Squad Logo at top */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                    <img
                      src={trailSquadLogo}
                      alt="Trail Squad Logo"
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Grey Banner with Logos */}
      <section className="w-full bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Trail Fox Side */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={trailFoxLogo}
                alt="Trail Fox Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
              <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-white">
                Trail Fox
              </h1>
              <h3 className="font-cabinet text-xl md:text-2xl text-white/80">
                Elite Trail Running Adventures
              </h3>
            </div>

            {/* Trail Squad Side */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={trailSquadLogo}
                alt="Trail Squad Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
              <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-white">
                Trail Squad
              </h1>
              <h3 className="font-cabinet text-xl md:text-2xl text-white/80">
                Your Trail Running Community
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Explanation */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-left mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl text-charcoal mb-6">
              Hvad er træningsture?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Vores træningsture er perfekte til dig, der gerne vil forberede dig til et kommende trail-løb, eller bare gerne vil blive bedre til at løbe i terrænet.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vi tilbyder guidede træningsture i smukke områder, hvor du kan træne sammen med ligesindede og få professionel vejledning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Træningsturene er typisk kortere end vores eventture og fokuserer på teknik, kondition og fællesskab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Training Trips */}
      <section className="py-24 bg-stone">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Kommende træningsture
            </h2>
            <p className="text-lg text-gray-600">
              Vi opdaterer løbende med nye træningsture
            </p>
          </div>
          
          <div className="text-center text-gray-600">
            <p className="text-lg">Ingen træningsture planlagt endnu. Hold øje med denne side for opdateringer.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
