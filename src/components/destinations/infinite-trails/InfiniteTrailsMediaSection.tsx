import React from 'react';
import PriceQuoteForm from '../../PriceQuoteForm';

const InfiniteTrailsMediaSection = () => {
  const availableDistances = ['TBD'];

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
