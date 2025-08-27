import React, { useEffect, useRef, useState } from 'react';

const VideoBackgroundSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[95vh] overflow-hidden">
      {/* YouTube video background with parallax */}
      <div 
        className="absolute inset-0 w-full h-[120%]" 
        style={{ 
          transform: `translateY(${scrollY * -0.5}px) scale(1.2)`,
          transformOrigin: 'center center'
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/wgKpri-37EU?autoplay=1&mute=1&loop=1&playlist=wgKpri-37EU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&start=0"
          title="Background Video"
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] transform -translate-x-1/2 -translate-y-1/2 scale-150"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      
      {/* Dark overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-cabinet font-bold mb-4">
            Oplev Eventyret
          </h1>
          <h2 className="text-xl md:text-2xl font-inter font-light">
            Følg med på vores rejse gennem spektakulære landskaber
          </h2>
        </div>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;