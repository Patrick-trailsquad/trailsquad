
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PriceQuoteForm from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const TransylvaniaPricingSection = () => {
  const spotsLeft = 13;
  const { toast } = useToast();

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2 space-y-1">
          <p className="text-sm text-gray-600">Priser fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">
            9.500 DKK <span className="text-sm text-gray-500">inkl. moms</span>
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
                  Prisen for et <b>Delt Swiss Grand Værelse</b> er 9.500 DKK per person, og du vil dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                  Prisen for et <b>Individuelt Swiss Grand Værelse</b> er 12.500 DKK.<br /><br />
                  Moms er inkluderet i alle priser.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-600 mb-1">Rejsestatus</p>
          <p className="font-cabinet text-xl font-bold text-charcoal">{spotsLeft} pladser tilbage</p>
        </div>
      </div>
      <PriceQuoteForm 
        destinationName="Transylvania 100"
        availableDistances={["20km", "30km", "50km", "80km", "100km"]}
        maxParticipants={spotsLeft}
      />
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default TransylvaniaPricingSection;
