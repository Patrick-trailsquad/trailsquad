
import React from 'react';
import { Star } from "lucide-react";
import { useIsMobile } from "../../../hooks/use-mobile";

const ZugspitzAccommodation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"}`}>
        <div className="relative">
          <div className="h-[450px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Werdenfelserei Hotel in Garmisch-Partenkirchen with Alpine views" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Werdenfelserei</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Garmisch-Partenkirchen, Bavaria</h2>
          <p className="text-lg">
            Stay at the charming Werdenfelserei, a traditional Bavarian guesthouse located in the heart of 
            Garmisch-Partenkirchen. This authentic accommodation offers the perfect blend of rustic Alpine 
            charm and modern comfort, providing an intimate and cozy atmosphere for your trail running adventure.
          </p>
          <p className="text-lg mt-4">
            The Werdenfelserei captures the essence of Bavarian hospitality with its warm, welcoming ambiance 
            and traditional decor. Each room is thoughtfully designed to reflect the local heritage while 
            ensuring modern amenities for your comfort after a day on the trails.
          </p>
          <p className="text-lg mt-4">
            Perfectly positioned for exploring the Zugspitz region, the guesthouse offers easy access to 
            the race routes while immersing you in the authentic culture and traditions of this historic 
            Alpine town. Experience genuine Bavarian warmth and hospitality at this special accommodation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZugspitzAccommodation;
