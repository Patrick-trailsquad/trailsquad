import React from 'react';

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
            <p className="text-sm text-gray-600 mb-1">Fra</p>
            <p className="font-cabinet text-4xl font-bold text-charcoal">10.850 DKK</p>
            <p className="text-sm text-gray-500">inkl. moms</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-2">Løbsstatus</p>
            <span className="inline-flex items-center gap-2 bg-charcoal text-stone px-4 py-2 rounded-full font-cabinet text-sm font-bold shadow-md">
              LØB AFSLUTTET 🏁
            </span>
          </div>
        </div>
        <button 
          disabled
          className="w-full bg-gray-300 text-gray-600 cursor-not-allowed px-8 py-4 rounded-full font-cabinet font-medium border-2 border-gray-400"
        >
          Ikke tilgængelig for booking i øjeblikket
        </button>
      </div>
    </div>
  );
};

export default RibeiraMediaSection;
