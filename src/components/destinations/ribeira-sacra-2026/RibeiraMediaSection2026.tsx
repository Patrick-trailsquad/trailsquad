import React from 'react';
import RibeiraPricingSection2026 from './RibeiraPricingSection2026';

const RibeiraMediaSection2026 = () => {
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

      <RibeiraPricingSection2026 />
    </div>
  );
};

export default RibeiraMediaSection2026;

