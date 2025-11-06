import { useToast } from "@/hooks/use-toast";
import PriceQuoteForm from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const SwissAlps100PricingSection = () => {
  const spotsLeft = 12;
  const { toast } = useToast();

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2 space-y-1">
          <p className="text-sm text-gray-600">Priser fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">
            14.995 DKK <span className="text-sm text-gray-500">inkl. moms</span>
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
                  Prisen for et <b>Dobbeltværelse</b> er 14.995 DKK per person.<br /><br />
                  Prisen for et <b>Enkeltværelse</b> er 17.495 DKK (tillæg på 2.500 DKK).<br /><br />
                  Prisen varierer afhængigt af distance og roomtype.<br /><br />
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
        destinationName="Swiss Alps 100"
        availableDistances={["Vertical", "50km", "100km", "160km"]}
        maxParticipants={spotsLeft}
      />
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default SwissAlps100PricingSection;
