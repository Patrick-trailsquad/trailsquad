import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import LocationMapModal from './LocationMapModal';

const InfiniteTrailsInfoBanner = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  
  return (
    <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Location</h1>
            <button
              onClick={() => setIsMapModalOpen(true)}
              className="font-cabinet text-lg text-charcoal hover:text-charcoal/80 transition-colors underline decoration-dotted underline-offset-2 flex items-center gap-1 mx-auto"
            >
              <MapPin className="w-4 h-4" />
              Bad Gastein, Austria
            </button>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Race Day</h1>
            <h2 className="font-cabinet text-lg text-charcoal">5. september 2026</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Trip Duration</h1>
            <h2 className="font-cabinet text-lg text-charcoal">3.-6. september 2026 (4 dage)</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distances</h1>
            <h2 className="font-cabinet text-lg text-charcoal">15km, 30km, 45km, 60km</h2>
          </div>
        </div>
      </div>
      
      <LocationMapModal 
        open={isMapModalOpen} 
        onOpenChange={setIsMapModalOpen} 
      />
    </div>
  );
};

export default InfiniteTrailsInfoBanner;
