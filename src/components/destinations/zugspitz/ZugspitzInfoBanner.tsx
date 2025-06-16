
import React from 'react';

const ZugspitzInfoBanner = () => {
  return (
    <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Location</h1>
            <h2 className="font-cabinet text-lg text-charcoal">Garmisch-Partenkirchen, Bavaria, Germany</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Race Day</h1>
            <h2 className="font-cabinet text-lg text-charcoal">June 19, 2026</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Trip Duration</h1>
            <h2 className="font-cabinet text-lg text-charcoal">4 days</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distances</h1>
            <h2 className="font-cabinet text-lg text-charcoal">25km, 50km, 100km</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZugspitzInfoBanner;
