import React from 'react';
import { MapPin } from 'lucide-react';

const KangNu26InfoBanner = () => {
  return (
    <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Lokation</h1>
            <div className="font-cabinet text-lg text-charcoal flex items-center gap-1 mx-auto justify-center">
              <MapPin className="w-4 h-4" />
              Nuuk, Grønland
            </div>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Løbsdagen</h1>
            <h2 className="font-cabinet text-lg text-charcoal">22. august 2026</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Turens varighed</h1>
            <h2 className="font-cabinet text-lg text-charcoal">20.-23. august 2026 (4 dage)</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distancer</h1>
            <h2 className="font-cabinet text-lg text-charcoal">20km, 35km, 56km</h2>
          </div>
        </div>
      </div>
    </div>);

};

export default KangNu26InfoBanner;