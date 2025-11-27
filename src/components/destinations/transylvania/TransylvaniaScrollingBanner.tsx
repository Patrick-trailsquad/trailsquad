import React from 'react';

const TransylvaniaScrollingBanner = () => {
  const text = "Husk at sikre dig din billet - vi lukker for billetsalget i løbet af december";
  
  return (
    <div className="w-full bg-charcoal py-3 overflow-hidden">
      <div className="animate-scroll md:animate-scroll-desktop hover:animate-scroll-slow md:hover:animate-scroll-desktop-slow whitespace-nowrap inline-block transition-all">
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
