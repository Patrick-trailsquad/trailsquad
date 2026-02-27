import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CallMeBackCTA from "../../CallMeBackCTA";

const RibeiraPricingSection2026 = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">14.999 DKK</p>
          <p className="text-sm text-gray-500">inkl. moms</p>
          <Accordion type="single" collapsible className="w-full mt-2">
            <AccordionItem value="price-details" className="border-none">
              <AccordionTrigger className="px-0 py-0 text-left text-sm underline text-primary hover:text-primary/80 shadow-none bg-transparent font-normal font-sans decoration-[1.5px] focus:ring-0 focus:outline-none !flex !items-center !justify-start gap-2" style={{
                background: 'none',
                boxShadow: 'none'
              }}>
                Forklar prisvariationer
              </AccordionTrigger>
              <AccordionContent className="px-0 pt-2 text-gray-700 text-sm">
                <div>
                  <b>Dobbeltværelse (delt med en anden deltager)</b> er 14.999 DKK per person og du vil dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                  
                  <b>Single værelse</b> er 16.375 DKK per person - du får dit eget værelse.<br /><br />
                  
                  Moms er inkluderet i alle priser.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-1">Registreringsstatus</p>
          <div className="bg-[#FFDC00] px-3 py-1.5 rounded-full min-w-[140px]">
            <p className="font-cabinet text-sm font-medium text-black flex items-center justify-center gap-1">
              14 pladser
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-8">
        <h3 className="font-cabinet text-xl font-bold text-charcoal mb-6">
          Tilmeld dig nu – kun 14 pladser
        </h3>
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default RibeiraPricingSection2026;