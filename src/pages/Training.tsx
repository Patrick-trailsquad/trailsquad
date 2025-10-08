import { useEffect, useRef } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useIsMobile } from "../hooks/use-mobile";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import trailFoxLogo from "@/assets/trail-fox-logo-white.png";
import trailSquadLogo from "@/assets/trail-squad-logo-yellow.png";

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
      <section className="w-full bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight">
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
                      className="h-8 md:h-10 w-auto object-contain"
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
                      className="h-8 md:h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trail Fox & Trail Squad Info */}
      <section className="bg-stone">
        {/* Trail Fox - Full Width */}
        <div className="bg-charcoal py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={trailFoxLogo} 
                  alt="Trail Fox Logo" 
                  className="h-16 w-auto mb-6 object-contain"
                />
                <h3 className="font-cabinet font-bold text-3xl md:text-4xl text-white mb-6">Trail Fox</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Trail Fox står bag en række af Danmarks fedeste trailløb. Flere tusinde løbere deltager årligt på tværs af de 4 races.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/lovable-uploads/trail-runners-forest.jpg" 
                  alt="Trail Fox" 
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trail Squad - Full Width */}
        <div className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1">
                <img 
                  src="/lovable-uploads/trail-squad-runners.jpg" 
                  alt="Trail Squad" 
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-2">
                <img 
                  src={trailSquadLogo} 
                  alt="Trail Squad Logo" 
                  className="h-16 w-auto mb-6 object-contain"
                />
                <h3 className="font-cabinet font-bold text-3xl md:text-4xl text-charcoal mb-6">Trail Squad</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trail Squad er et niche rejsebureau med fokus på trailløb i udlandet. Vi skaber et fællesskab gennem fælles træning og oplevelser.
                </p>
              </div>
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
