
import React from 'react';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const RibeiraDescription = () => {
  return (
    <div className="space-y-6 mb-8">
      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
        <p className="text-lg">
          Oplev den betagende skønhed i Ribeira Sacra-regionen, kendt for sine stejle 
          vinterrasser, der er blevet dyrket siden romertiden. Denne spektakulære trail 
          løber langs de dramatiske kanyoner ved floderne Sil og Miño, gennem gamle klostre 
          og historiske vinregioner i hjertet af Galicien.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
        <p className="text-lg">
          Ruten slynger sig gennem frodige skove, traditionelle stenlandsbyer og langs de ikoniske 
          terrasserede vingårde, der klamrer sig til de stejle kanyonvægge. Med en udfordrende stigning på 
          3.450 D+ vil denne rute teste din udholdenhed, mens den belønner dig med spektakulære udsigter. 
          Vores Trail Squad løbecoach og fysioterapeut vil være der for at støtte dig gennem hele rejsen,
          fra forberedelse før løbet til restitution efter løbet. Deltag i valgfrie sociale aktiviteter, herunder 
          et let fælles løb dagen før løbet for at gøre dig bekendt med terrænet, og fejr 
          din præstation med en velfortjent drink efter løbet sammen med dine medløbere.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
        <p className="text-lg">
          Med udfordrende højdeforskelle, når du stiger ned i og klatrer op af flodkanyonerne, 
          tilbyder denne trail en perfekt blanding af tekniske afsnit og løbbare stier. Ruten giver 
          betagende udsigter ved hvert sving, mens den tester din udholdenhed på de stejle vingårdsskråninger.
        </p>
      </div>
      
      <Button 
        asChild
        variant="charcoal"
        size="md"
      >
        <a 
          href="https://www.trailribeirasacra.es/index-en.html"
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

export default RibeiraDescription;
