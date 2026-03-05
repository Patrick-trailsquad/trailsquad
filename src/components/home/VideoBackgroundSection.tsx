import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/use-mobile';
import { Button } from '../ui/button';

// Global state to track if API is loaded
let isAPILoaded = false;
let isAPILoading = false;

const VideoBackgroundSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const ytPlayerRef = useRef<any>(null);

  const videoId = isMobile ? 'wgKpri-37EU' : 'XdgosFbv_wk';

  useEffect(() => {
    if (!window.YTReadyCallbacks) {
      window.YTReadyCallbacks = [];
    }

    const containerId = 'yt-player-' + videoId;

    const initPlayer = () => {
      const el = document.getElementById(containerId);
      if (el && window.YT && window.YT.Player) {
        ytPlayerRef.current = new window.YT.Player(el, {
          videoId,
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
            start: 4
          },
          events: {
            onReady: (event: any) => {
              event.target.setPlaybackRate(0.8);
            }
          }
        });
      }
    };

    if (isAPILoaded && window.YT && window.YT.Player) {
      initPlayer();
    } else if (!isAPILoading) {
      isAPILoading = true;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
        isAPILoaded = true;
        isAPILoading = false;
        window.YTReadyCallbacks.forEach((cb: () => void) => cb());
        window.YTReadyCallbacks = [];
      };
      window.YTReadyCallbacks.push(initPlayer);
    } else {
      window.YTReadyCallbacks.push(initPlayer);
    }

    return () => {
      if (ytPlayerRef.current?.destroy) {
        try {ytPlayerRef.current.destroy();} catch (e) {}
        ytPlayerRef.current = null;
      }
    };
  }, [videoId]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
      {/* YouTube video background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={isMobile ? {
          transform: 'scale(3.5)',
          transformOrigin: 'center center'
        } : {
          transform: `translateY(${scrollY * -0.5}px) scale(1.25)`,
          transformOrigin: 'center center'
        }}>
        
        <div
          key={videoId}
          className="absolute inset-0 w-full h-full"
          dangerouslySetInnerHTML={{ __html: '<div id="yt-player-' + videoId + '" style="width:100%;height:100%"></div>' }} />
        
        
      </div>
      
      {/* Dark overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-cabinet font-bold mb-4">Fællestræning op mod race</h1>
          <h2 className="text-xl md:text-2xl font-inter font-light mb-8 max-w-2xl mx-auto">Løbeteknik, udstyr, energi på løbsdagen...
Vi har din ryg i forberedelserne op til race day.

Der er månedlig fællestræning og det er gratis at deltage.<br />
            Vi har din ryg i forberedelserne op til race day.<br /><br />
            Der er fællestræning hver 2-3 uge, og tempoet er således, at alle kan være med.<br />
            Vi plejer at løbe i Dyrehaven, Frederiksberg Have, ved Furesøen eller lignende.
          </h2>
          <Link to="/training">
            <Button variant="yellow" size="xl" className="text-lg">
              Tilmeld fællestræning
            </Button>
          </Link>
        </div>
      </div>
    </section>);};export default VideoBackgroundSection;