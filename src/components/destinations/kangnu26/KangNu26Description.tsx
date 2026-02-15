import React from 'react';
import { Button } from '../../ui/button';
import { ExternalLink } from 'lucide-react';

const KangNu26Description = () => {
  return (
    <div>
      <div className="space-y-6 mb-8">
        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
          <p className="text-lg">
            <b>KangNu Running Race</b> er et trail ultra-løb i Nuuk-fjorden, <i>Kangerluaarsunnguaq</i> (også 
            kendt som Kobberfjorden). Deltagerne bliver transporteret med båd til startområdet i Kobberfjorden — 
            en tur på ca. 15 minutter. Målstregen er ved NUP klubhuset i Nuuk.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
          <p className="text-lg">
            Grønland byder på en helt unik trailløbs-oplevelse med arktisk natur, dramatiske fjorde, 
            midnatssol og farverige huse. Nuuk er verdens mindste hovedstad og tilbyder en fascinerende 
            blanding af moderne byliv og rå arktisk natur. Efter løbet kan du udforske byens museer, 
            restauranter og den imponerende grønlandske kultur.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Distancerne</h2>
          <p className="text-lg">
            Alle er velkomne! Der er tre løbsdistancer at vælge imellem:
          </p>
          <ul className="text-lg mt-2 space-y-1 list-disc list-inside">
            <li>56 km ultra-løb, officielt certificeret af ITRA</li>
            <li>35 km trailløb</li>
            <li>20 km rute som kan løbes eller vandres</li>
          </ul>
        </div>
      </div>

      <Button asChild variant="charcoal" size="md" className="mb-8">
        <a href="https://www.greenlandarcticxplorers.com/adventure-races/event-two-9hggw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          Besøg officiel løbshjemmeside
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default KangNu26Description;
