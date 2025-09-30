import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfiniteTrailsDescription = () => {
  return (
    <div className="space-y-6 mb-8">
      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
        <p className="text-lg">
          Infinite Trails i Bad Gastein, Østrig, er et spektakulært trailløb der byder på 
          en unik kombination af alpine højder og historisk charme. Løbet finder sted i det 
          smukke bjergområde omkring Bad Gastein, kendt for sine dramatiske vandfald, 
          termalkilder og majestætiske alpelandskaber.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
        <p className="text-lg">
          Løberne vil opleve nogle af de mest betagende alpine trails i Østrig, med ruter 
          der snor sig gennem tætte skove, op ad bjergkamme med panoramaudsigter og gennem 
          traditionelle østrigske bjerglandsbyer. Ruten kombinerer tekniske bjergpassager med 
          smukke skovstier og tilbyder en perfekt balance mellem udfordring og naturskønhed.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
        <p className="text-lg">
          Med distancer på 15km, 30km, 45km og 60km er der en udfordring for alle 
          ambitionsniveauer. Hver rute er omhyggeligt designet til at vise de mest 
          spektakulære dele af området, mens den tester din fysiske udholdenhed og 
          mentale styrke gennem varierende terræner og højdeforskelle.
        </p>
      </div>

      <Button 
        asChild
        variant="charcoal"
        size="md"
        className="mb-8"
      >
        <a 
          href="https://infinite-trails.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          Besøg officiel løbshjemmeside
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default InfiniteTrailsDescription;
