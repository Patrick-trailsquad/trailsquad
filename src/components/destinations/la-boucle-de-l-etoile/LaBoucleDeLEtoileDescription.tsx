import React from 'react';
import { Button } from '../../ui/button';
import { ExternalLink } from 'lucide-react';

const LaBoucleDeLEtoileDescription = () => {
  return (
    <div>
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
          <p className="text-lg">
            La Boucle de l&apos;Étoile er et unikt trek, trail og ultra trail event i Orientens ørken nær Oujda i Marokko. 
            Dette spektakulære 3-dages løb tilbyder tre forskellige distancer (84km, 104km og 126km) gennem det 
            fascinerende ørkenlandskab med varieret terræn fra sandklitter til stenet plateau.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
          <p className="text-lg">
            Deltag i en autentisk ørkenoplevelse hvor du løber gennem dramatiske landskaber under den nordafrikanske himmel. 
            Løbet kombinerer fysisk udfordring med kulturel fordybelse i Marokkos østlige region, hvor du oplever både 
            ørkennatur, berberkulturen og den unikke atmosfære ved La Boucle de l&apos;Étoile - &quot;Stjernens Loop&quot;.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
          <p className="text-lg">
            De tre distancer er fordelt over tre løbsdage med forskellige profiler for alle niveauer - fra trekking-entusiaster 
            (84km: 32+20+32km) over erfarne trailløbere (104km: 32+40+32km) til ultra-atleter (126km: 32+62+32km). 
            Ruterne byder på varieret terræn, varm dagstemperatur og kolde nætter - en ægte ørkenadventure!
          </p>
        </div>
      </div>

      <Button asChild variant="charcoal" size="md" className="mb-8">
        <a href="https://laboucledeletoile.com/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          Besøg officiel løbshjemmeside
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default LaBoucleDeLEtoileDescription;
