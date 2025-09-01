import React from 'react';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const IstriaDescription = () => {
  return (
    <div className="space-y-6 mb-8">
      <div className="bg-yellow-400 border-2 border-black rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <img src="/lovable-uploads/44a37ce3-9606-451d-9697-e984a0ce514e.png" alt="Lightning icon" className="w-6 h-6" />
          <h2 className="font-cabinet text-xl font-bold text-black">Flash Trip</h2>
        </div>
        <p className="text-black font-medium">
          Dette er en særlig Flash Trip - en hurtig og spændende rejse med kort bookingperiode og fantastiske oplevelser!
        </p>
      </div>
      
      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
        <p className="text-lg">
          Oplev Kroatiens mest spektakulære trail running event på den smukke Istria-halvø. 
          Istria 100 by UTMB tager dig gennem vingårde, olivenlunde, kystskrænter og 
          charmerende middelalderlige byer i et af Europas bedst bevarede naturområder.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
        <p className="text-lg">
          Med start og finish i den historiske mineby Labin slynger ruten sig gennem 
          Istrias varierende landskab fra kystlinje til indre bakker. Du vil løbe forbi 
          venetianske villaer, gennem tætte egeskovene og langs dramatiske klipper med 
          udsigt over det adriatiske hav. Vælg mellem 50km eller 100km distancerne, 
          begge designet til at vise det bedste af istrisk natur og kultur.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
        <p className="text-lg">
          Dette UTMB-kvalifikationsløb kombinerer tekniske single tracks med panoramiske 
          ridgelines og udfordrende stigninger. Oplev den unikke blanding af mediterran 
          kystkultur og alpine trail running i nogle af Europas mindst opdagede løbsterræn. 
          Den perfekte destination for løbere, der søger både atletisk udfordring og 
          kulturel fordybelse i hjertet af Istria.
        </p>
      </div>
      
      <Button 
        asChild
        variant="charcoal"
        size="md"
      >
        <a 
          href="https://istria.utmb.world/"
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

export default IstriaDescription;