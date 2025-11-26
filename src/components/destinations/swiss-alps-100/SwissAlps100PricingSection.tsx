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
  const spotsLeft = 10;
  const { toast } = useToast();

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2 space-y-1">
          <p className="text-sm text-gray-600">Priser fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">
            12.200 DKK <span className="text-sm text-gray-500">inkl. moms</span>
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
                  Prisen for et <b>Single Economy værelse</b> er 12.200 DKK per person. Dette er et småt værelse med plads til én person. Vi har kun adgang til to af disse billige enkeltpersons værelser.<br /><br />
                  Hvis du ønsker at dele et <b>Alpine Double Room</b> er prisen 12.500 DKK. Du vil skulle dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                  Prisen for at bo alene på et <b>Alpine Double Room</b> er 14.600 DKK.<br /><br />
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
