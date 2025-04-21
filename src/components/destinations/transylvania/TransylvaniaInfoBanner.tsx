
import React from 'react';

const TransylvaniaInfoBanner = () => {
  return (
    <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Location</h1>
            <h2 className="font-cabinet text-lg text-charcoal">Carpathian Mountains, Romania</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Race Day</h1>
            <h2 className="font-cabinet text-lg text-charcoal">May (TBD), 2026</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Trip Duration</h1>
            <h2 className="font-cabinet text-lg text-charcoal">4 days</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distances</h1>
            <h2 className="font-cabinet text-lg text-charcoal">20km, 30km, 50km, 80km, 100km</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransylvaniaInfoBanner;
