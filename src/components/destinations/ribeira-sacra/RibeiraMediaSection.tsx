import React from 'react';
import PriceQuoteForm from "../../../components/PriceQuoteForm";
import { Asterisk } from 'lucide-react';

const RibeiraMediaSection = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden aspect-video">
        <iframe
          src="https://www.youtube.com/embed/AEhnSUNgI-c?si=z53vIFltEnBiUBrn"
          title="Trail Ribeira Sacra"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="flex items-center relative">
              <p className="text-sm text-gray-600 mb-1 mr-0.5">Starting from</p>
              <Asterisk className="w-3 h-3 text-gray-600 relative -top-0.5" />
            </div>
            <p className="font-cabinet text-4xl font-bold text-charcoal">9.500 DKK</p>
            <p className="text-sm text-gray-500">incl. VAT</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Trip status</p>
            <p className="font-cabinet text-xl font-bold text-charcoal">8 spots</p>
          </div>
        </div>
        <PriceQuoteForm 
          destinationName="Trail Ribeira Sacra"
          availableDistances={["48km"]}
        />
        <p className="text-xs text-gray-500 mt-4">
          * Price variations are mainly due to your preferences for sleeping solo or sharing a double room
        </p>
      </div>
    </div>
  );
};

export default RibeiraMediaSection;
