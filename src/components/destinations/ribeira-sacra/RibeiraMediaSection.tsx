
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
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="col-span-2 space-y-1">
            <p className="text-sm text-gray-600">Prices start at</p>
            <p className="font-cabinet text-4xl font-bold text-charcoal">10.850 DKK</p>
            <p className="text-sm text-gray-500">incl. VAT</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-600 mb-1">Trip status</p>
            <p className="font-cabinet text-xl font-bold text-charcoal">8 spots left</p>
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

