
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PriceQuoteForm from "../../PriceQuoteForm";
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
          <p className="text-sm text-gray-600">Prices start at</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">
            9.350 DKK <span className="text-sm text-gray-500">incl. VAT</span>
          </p>
          <Accordion type="single" collapsible className="w-full mt-2">
            <AccordionItem value="price-details" className="border-none">
              <AccordionTrigger
                className="px-0 py-0 text-left text-sm underline text-primary hover:text-primary/80 shadow-none bg-transparent font-normal font-sans decoration-[1.5px] after:hidden focus:ring-0 focus:outline-none"
                style={{ background: 'none', boxShadow: 'none' }}
              >
                Explain price variations
              </AccordionTrigger>
              <AccordionContent className="px-0 pt-2 text-gray-700 text-sm">
                <div>
                  The price for a <b>Shared Swiss Grand Room</b> is 9.350 DKK per person and you will share the room with someone from your own group. This means that you cannot book a shared room if you join solo.<br /><br />
                  The price for an <b>Individual Swiss Grand Room</b> is 12.300 DKK.<br /><br />
                  VAT is included in all prices.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-600 mb-1">Trip status</p>
          <p className="font-cabinet text-xl font-bold text-charcoal">{spotsLeft} spots left</p>
        </div>
      </div>
      <PriceQuoteForm 
        destinationName="Transylvania 100"
        availableDistances={["20km", "30km", "50km", "80km", "100km"]}
        maxParticipants={spotsLeft}
      />
    </div>
  );
};

export default TransylvaniaPricingSection;
