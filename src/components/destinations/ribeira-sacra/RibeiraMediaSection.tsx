
import React from 'react';
import PriceQuoteForm from "../../../components/PriceQuoteForm";

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
            <p className="text-sm text-gray-600 mb-1">Starting from</p>
            <p className="font-cabinet text-4xl font-bold text-charcoal">10.000 DKK</p>
            <p className="text-sm text-gray-500">incl. VAT</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Trip status</p>
            <p className="font-cabinet text-xl font-bold text-charcoal">10 spots</p>
          </div>
        </div>
        <PriceQuoteForm 
          destinationName="Trail Ribeira Sacra"
          availableDistances={["48km"]}
        />
      </div>
    </div>
  );
};

export default RibeiraMediaSection;
