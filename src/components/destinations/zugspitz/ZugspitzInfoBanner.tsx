
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import LocationMapModal from './LocationMapModal';

const ZugspitzInfoBanner = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  return (
    <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Lokation</h1>
            <button
              onClick={() => setIsMapModalOpen(true)}
              className="font-cabinet text-lg text-charcoal hover:text-charcoal/80 transition-colors underline decoration-dotted underline-offset-2 flex items-center gap-1 mx-auto"
            >
              <MapPin className="w-4 h-4" />
              Garmisch-Partenkirchen, Bayern, Tyskland
            </button>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Løbsdag</h1>
            <h2 className="font-cabinet text-lg text-charcoal">19. juni 2026</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Rejsevarighed</h1>
            <h2 className="font-cabinet text-lg text-charcoal">4 dage</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distancer</h1>
            <h2 className="font-cabinet text-lg text-charcoal">16km, 44km, 68km</h2>
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

export default ZugspitzInfoBanner;
