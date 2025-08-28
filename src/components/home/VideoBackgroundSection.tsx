import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoBackgroundSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<any>(null);

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

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    // YouTube API ready callback
    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        ytPlayerRef.current = new window.YT.Player(playerRef.current, {
          videoId: 'wgKpri-37EU',
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: 'wgKpri-37EU',
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

    return () => {
      if (ytPlayerRef.current) {
        ytPlayerRef.current.destroy();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[95vh] overflow-hidden">
      {/* YouTube video background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={isMobile ? {} : {
          transform: `translateY(${scrollY * -0.5}px) scale(1.2)`,
          transformOrigin: 'center center',
          height: '120%'
        }}
      >
        <div 
          ref={playerRef} 
          className={isMobile 
            ? "absolute inset-0 w-full h-full" 
            : "absolute top-1/2 left-1/2 w-[200%] h-[200%] transform -translate-x-1/2 -translate-y-1/2 scale-150"
          } 
        />
      </div>
      
      {/* Dark overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-cabinet font-bold mb-4">Trail Squad fællestræning</h1>
          <h2 className="text-xl md:text-2xl font-inter font-light">
            Løbeteknik, udstyr, energi på løbsdagen...<br />
            Vi har din ryg i forberedelserne op til race day
          </h2>
        </div>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;