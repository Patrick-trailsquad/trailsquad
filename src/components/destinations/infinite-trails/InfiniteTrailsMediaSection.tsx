import React from 'react';
import PriceQuoteForm from '../../PriceQuoteForm';

const InfiniteTrailsMediaSection = () => {
  const availableDistances = ['15km', '30km', '45km', '60km'];

  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden aspect-video">
        <iframe
          src="https://www.youtube.com/embed/Cu6Tg-eQ-cQ"
          title="Infinite Trails Bad Gastein"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <PriceQuoteForm 
        destinationName="Infinite Trails"
        availableDistances={availableDistances}
      />
    </div>
  );
};

export default InfiniteTrailsMediaSection;
