
import React from 'react';

const YellowBanner = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#FFDC00] to-[#FFE642] py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
          {/* Text Section - 60% */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
            <div className="space-y-2">
              <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-charcoal leading-none tracking-tight">
                Meet the Trail Squad team
              </h1>
              <p className="font-cabinet text-xl md:text-2xl font-medium text-charcoal/80 leading-relaxed">
                (in Danish 🇩🇰)
              </p>
            </div>
          </div>
          
          {/* Empty space for balance - 40% */}
          <div className="lg:col-span-4"></div>
        </div>
      </div>
    </section>
  );
};

export default YellowBanner;
