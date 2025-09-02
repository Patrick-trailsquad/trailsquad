import React from 'react';
import PriceQuoteForm from "../../../components/PriceQuoteForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const IstriaMediaSection = () => {
  const spotsLeft = 5;
  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden aspect-video">
        <iframe
          src="https://www.youtube.com/embed/DLt2z3bCRGM"
          title="Istria 100 by UTMB Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="col-span-2 space-y-1">
            <p className="text-sm text-gray-600">Priser fra</p>
            <p className="font-cabinet text-4xl font-bold text-charcoal">
              7.900 DKK <span className="text-sm text-gray-500">inkl. moms</span>
            </p>
            <Accordion type="single" collapsible className="w-full mt-2">
              <AccordionItem value="price-details" className="border-none">
                <AccordionTrigger
                  className="px-0 py-0 text-left text-sm underline text-primary hover:text-primary/80 shadow-none bg-transparent font-normal font-sans decoration-[1.5px] focus:ring-0 focus:outline-none !flex !items-center !justify-start gap-2"
                  style={{ background: 'none', boxShadow: 'none' }}
                >
                  Forklar prisvariationer
                </AccordionTrigger>
                <AccordionContent className="px-0 pt-2 text-gray-700 text-sm">
                  <div>
                    Prisen for et <b>Delt Olive Garden View Room</b> er 7.900 DKK per person, og du vil dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                    Prisen for et <b>Individuelt Olive Garden View Room</b> er 9.900 DKK.<br /><br />
                    Moms er inkluderet i alle priser.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-600 mb-1">Rejsestatus</p>
            <p className="font-cabinet text-xl font-bold text-charcoal">{spotsLeft} pladser</p>
          </div>
        </div>
        <PriceQuoteForm 
          destinationName="Istria 100 by UTMB"
          availableDistances={["100km"]}
          maxParticipants={spotsLeft}
        />
      </div>
    </div>
  );
};

export default IstriaMediaSection;