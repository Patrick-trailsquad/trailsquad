import React, { useRef } from 'react';

const TransylvaniaScrollingBanner = () => {
  const text = "Husk at sikre dig din billet - vi lukker for billetsalget i løbet af december";
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handleMouseEnter = () => {
    if (scrollRef.current) {
      const computedStyle = window.getComputedStyle(scrollRef.current);
      const animationDuration = computedStyle.animationDuration;
      const currentDuration = parseFloat(animationDuration);
      scrollRef.current.style.animationDuration = `${currentDuration * 2}s`;
    }
  };
  
  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationDuration = '';
    }
  };
  
  return (
    <div className="w-full bg-charcoal py-3 overflow-hidden">
      <div 
        ref={scrollRef}
        className="animate-scroll md:animate-scroll-desktop whitespace-nowrap inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'animation-duration 1s ease' }}
      >
        {Array(20).fill(text).map((item, index) => (
          <span key={index} className="inline-block px-8 text-white font-cabinet text-lg">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TransylvaniaScrollingBanner;
