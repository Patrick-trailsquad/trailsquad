
import React from 'react';

const RibeiraInfoBanner = () => {
  return (
    <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Lokation</h1>
            <h2 className="font-cabinet text-lg text-charcoal">Luintra, Province of Ourense, Spain</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Løbsdag</h1>
            <h2 className="font-cabinet text-lg text-charcoal">12. oktober 2025</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Rejsevarighed</h1>
            <h2 className="font-cabinet text-lg text-charcoal">10.-13. oktober 2025 (4 dage)</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distancer</h1>
            <h2 className="font-cabinet text-lg text-charcoal">48km</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RibeiraInfoBanner;
