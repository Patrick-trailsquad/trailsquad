
import React from 'react';
import PriceQuoteForm from "../../../components/PriceQuoteForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ZugspitzMediaSection = () => {
  const spotsLeft = 12;
  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden aspect-video">
        <img
          src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1200&q=80"
          alt="Zugspitz Ultratrail mountain scenery"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="col-span-2 space-y-1">
            <p className="text-sm text-gray-600">Prices start at</p>
            <p className="font-cabinet text-4xl font-bold text-charcoal">
              12.500 DKK <span className="text-sm text-gray-500">incl. VAT</span>
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
                    The price for a <b>Shared Superior Room</b> is 12.500 DKK per person and you will share the room with someone from your own group. This means that you cannot book a shared room if you join solo.<br /><br />
                    The price for an <b>Individual Double Room</b> is 14.200 DKK.<br /><br />
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
          destinationName="Zugspitz Ultratrail"
          availableDistances={["25km", "50km", "100km"]}
          maxParticipants={spotsLeft}
        />
      </div>
    </div>
  );
};

export default ZugspitzMediaSection;
