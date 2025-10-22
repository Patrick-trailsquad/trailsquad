import React from 'react';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZugspitzDescription = () => {
  return (
    <div className="space-y-6 mb-8">
      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
        <p className="text-lg">
          Oplev Tysklands mest spektakulære alpine trailløbsevent i de fantastiske bayerske Alper. 
          Zugspitz Ultratrail tager dig gennem uberørte alpine enge, ældgamle skove og dramatiske 
          bjergkamme og tilbyder betagende udsigter over Tysklands højeste top, Zugspitze (2.962m).
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
        <p className="text-lg">
          Da løbene afholdes over flere dage, vil det være muligt at deltage på 5 forskellige distancer. De helt lande starter fredag aften (86 km og 106 km) og lørdagens løb spænder over henholdsvis 16 km, 44 km, og 68 km. Så der er bestemt noget for enhver smag. Hver rute lover unikke udfordringer og uforglemmelige alpine landskaber.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
        <p className="text-lg">
          Fra kortere trails perfekte for nybegyndere til de krævende ultradistancer for erfarne atleter 
          tilbyder hver rute panoramaudsigter og autentisk bayersk kultur. Oplev traditionelle bjerg-
          hytter, der serverer kraftig alpin mad, og fordyb dig i den rige historie fra denne olympiske værtsby 
          - den perfekte blanding af atletisk udfordring og kulturel opdagelse i hjertet af de tyske Alper.
        </p>
      </div>
      
      <Button 
        asChild
        variant="charcoal"
        size="md"
      >
        <a 
          href="https://www.zugspitz-ultratrail.com/en/"
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

export default ZugspitzDescription;
