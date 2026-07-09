import { useToast } from "@/hooks/use-toast";
import PriceQuoteForm, { type FormValues } from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";
import { supabase } from "@/integrations/supabase/client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const RibeiraPricingSection2026 = () => {
  const spotsLeft = 8;
  const { toast } = useToast();

  const handleStripeCheckout = async (data: FormValues) => {
    const { data: result, error } = await supabase.functions.invoke('create-deposit-checkout', {
      body: {
        destinationName: 'Ribeira Sacra 2026',
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        preferredDistance: data.preferredDistance,
        participants: data.participants,
        accommodationPreference: data.accommodationPreference,
        returnPath: '/destinations/ribeira-sacra-2026',
      },
    });

    if (error || !result?.url) {
      toast({
        title: "Fejl",
        description: "Kunne ikke oprette betaling. Prøv venligst igen.",
        variant: "destructive",
      });
      throw new Error("Checkout failed");
    }

    sessionStorage.setItem('deposit_booking_data', JSON.stringify({
      destination: 'Ribeira Sacra 2026',
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      preferredDistance: data.preferredDistance,
      participants: data.participants,
      accommodationPreference: data.accommodationPreference,
    }));

    window.location.href = result.url;
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2 space-y-1">
          <p className="text-sm text-gray-600">Priser fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">
            13.999 DKK <span className="text-sm text-gray-500">inkl. moms</span>
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
                  <b>Dobbeltværelse (delt med en anden deltager)</b> er 13.999 DKK per person og du vil dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                  
                  <b>Single værelse</b> er 15.375 DKK per person - du får dit eget værelse.<br /><br />
                  
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
        destinationName="Ribeira Sacra 2026"
        availableDistances={["48km"]}
        maxParticipants={spotsLeft}
        depositPercentage={50}
        onSubmitOverride={handleStripeCheckout}
        customInfoText="Reservér din plads ved at betale 5.000 DKK i depositum pr. billet. Vi vender personligt tilbage inden for 48 timer på hverdage med en bekræftelse, og det resterende beløb opkræves 60 dage før afrejse."
        getSubmitButtonLabel={(p) => `Betal ${(5000 * p).toLocaleString('da-DK')} DKK i depositum`}
      />
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default RibeiraPricingSection2026;
