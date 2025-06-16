
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
              alt="Luxury hotel in Garmisch-Partenkirchen with Alpine views" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Alpine Resort Garmisch</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Garmisch-Partenkirchen, Bavaria</h2>
          <p className="text-lg">
            Stay in a premium 4-star Alpine resort perfectly positioned in the heart of Garmisch-Partenkirchen, 
            with stunning views of the Zugspitze and surrounding Bavarian Alps. The hotel combines traditional 
            Alpine charm with modern luxury amenities.
          </p>
          <p className="text-lg mt-4">
            After your trail adventure, unwind in the spa facilities, enjoy hearty Bavarian cuisine at the 
            on-site restaurant, and take in panoramic mountain views from your comfortable room. The perfect 
            base for exploring Germany's most spectacular Alpine region.
          </p>
          <p className="text-lg mt-4">
            The hotel's location provides easy access to the race start/finish area and offers the authentic 
            Bavarian hospitality that makes this Olympic host town so special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZugspitzAccommodation;
