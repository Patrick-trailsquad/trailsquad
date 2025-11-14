import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import LocationMapModal from './LocationMapModal';
const LaBoucleDeLEtoileInfoBanner = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  return <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Lokation</h1>
            <button onClick={() => setIsMapModalOpen(true)} className="font-cabinet text-lg text-charcoal hover:text-charcoal/80 transition-colors underline decoration-dotted underline-offset-2 flex items-center gap-1 mx-auto">
              <MapPin className="w-4 h-4" />
              Oujda, Marokko
            </button>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Løbsdagen</h1>
            <h2 className="font-cabinet text-lg text-charcoal">5.-7. november</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Turens varighed</h1>
            <h2 className="font-cabinet text-lg text-charcoal">4.-8. november 2026 (5 dage)</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distancer</h1>
            <h2 className="font-cabinet text-lg text-charcoal">84km, 104km, 126km</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Ledige pladser</h1>
            <h2 className="font-cabinet text-lg text-charcoal">11 pladser</h2>
          </div>
        </div>
      </div>
      
      <LocationMapModal open={isMapModalOpen} onOpenChange={setIsMapModalOpen} />
    </div>;
};
export default LaBoucleDeLEtoileInfoBanner;