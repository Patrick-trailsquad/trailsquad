import React from 'react';
import { Button } from '../../ui/button';
import { ExternalLink } from 'lucide-react';

const InfiniteTrailsDescription = () => {
  return (
    <div>
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
          <p className="text-lg">
            Infinite Trails kombinerer det bedste fra alpin trailløb med den unikke charme af Bad Gastein i østrigske alper. 
            Dette spektakulære event tilbyder fire forskellige distancer (15km, 30km, 45km og 60km), alle gennem det 
            betagende bjerglandskab omkring Gasteinertal-dalen med panoramiske udsigter til Hohe Tauern-bjergkæden.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
          <p className="text-lg">
            Bad Gastein er kendt for sin Belle Époque arkitektur, naturlige termalbade og dramatiske vandfald der 
            løber gennem byen. Efter løbet kan du slappe af i de helbredende termalbade, der har tiltrukket besøgende 
            siden romertiden, og nyde den særlige atmosfære i denne historiske kurby.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
          <p className="text-lg">
            Ruterne byder på teknisk varieret terræn fra skovstier til alpine enge og bjergkamme på op til 2.300 meters 
            højde. Den kompakte løbsweekend og de forskellige distancer gør Infinite Trails perfekt for både erfarne 
            ultraløbere og dem der vil prøve kræfter med deres første bjergløb i et sikkert og velorganiseret setup.
          </p>
        </div>
      </div>

      <Button asChild variant="charcoal" size="md" className="mb-8">
        <a href="https://www.infinite-trails.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          Besøg officiel løbshjemmeside
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default InfiniteTrailsDescription;
