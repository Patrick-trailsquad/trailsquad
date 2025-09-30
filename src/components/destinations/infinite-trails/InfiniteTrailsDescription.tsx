import React from 'react';

const InfiniteTrailsDescription = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Om løbet
        </h2>
        <div className="space-y-4 text-charcoal/80">
          <p className="font-inter leading-relaxed">
            Infinite Trails er en unik trail running oplevelse, der kombinerer udfordrende terræn 
            med spektakulær natur.
          </p>
          <p className="font-inter leading-relaxed">
            Løbet tilbyder flere distancer, så der er noget for enhver løber - fra begyndere 
            til erfarne ultra-løbere.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-cabinet text-2xl font-bold text-charcoal mb-4">
          Highlights
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#FFDC00] mt-1">●</span>
            <span className="font-inter text-charcoal/80">Spektakulære panoramaudsigter</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#FFDC00] mt-1">●</span>
            <span className="font-inter text-charcoal/80">Teknisk udfordrende trails</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#FFDC00] mt-1">●</span>
            <span className="font-inter text-charcoal/80">Fantastisk stemning og community</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfiniteTrailsDescription;
