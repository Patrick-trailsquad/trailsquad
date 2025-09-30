import React from 'react';
import PriceQuoteForm from '../../PriceQuoteForm';

const InfiniteTrailsMediaSection = () => {
  const availableDistances = ['15km', '30km', '45km', '60km'];

  return (
    <div className="space-y-8">
      <PriceQuoteForm 
        destinationName="Infinite Trails"
        availableDistances={availableDistances}
      />
    </div>
  );
};

export default InfiniteTrailsMediaSection;
