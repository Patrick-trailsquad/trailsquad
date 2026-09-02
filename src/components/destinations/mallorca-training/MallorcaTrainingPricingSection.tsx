import { useToast } from "@/hooks/use-toast";
import PriceQuoteForm, { type FormValues } from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";
import { supabase } from "@/integrations/supabase/client";
import { ROOM_AVAILABILITY } from "./mallorcaRoomData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const DESTINATION_NAME = "Mallorca Træningslejr";

const MallorcaTrainingPricingSection = () => {
  const { toast } = useToast();

  const handleStripeCheckout = async (data: FormValues) => {
    const { data: result, error } = await supabase.functions.invoke('create-deposit-checkout', {
      body: {
        destinationName: DESTINATION_NAME,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        preferredDistance: data.preferredDistance,
        participants: data.participants,
        accommodationPreference: data.accommodationPreference,
        returnPath: '/destinations/mallorca-training',
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
      destination: DESTINATION_NAME,
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
    <div className="bg-white rounded-xl p-8 shadow-lg text-left">
      <div className="space-y-1 mb-6">
        <p className="text-sm text-gray-600">Priser fra</p>
        <p className="font-cabinet text-4xl font-bold text-charcoal">
          9.700 DKK <span className="text-sm text-gray-500">inkl. moms</span>
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
                Prisen afhænger af, om du deler værelse, og hvilken værelsestype du vælger.<br /><br />
                <b>Delt værelse</b> starter på 9.700 DKK per person, og du deler værelset med en anden deltager fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                <b>Single værelse</b> starter på 11.800 DKK per person — du får dit eget værelse.<br /><br />
                <br />
                Der er nogle opgraderede værelser, som koster et mindre tillæg pr. værelse. Se oversigt ovenfor.&nbsp;<br /><br />
                Moms er inkluderet i alle priser.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <PriceQuoteForm
        destinationName={DESTINATION_NAME}
        availableDistances={["Træningslejr"]}
        accommodationOptions={[
          { value: "shared-deluxe", label: `Delt · Deluxe Dobbeltværelse — 9.700 DKK (${ROOM_AVAILABILITY["deluxe"]} ledige)` },
          { value: "shared-superior", label: `Delt · Superior Dobbeltværelse — 9.875 DKK (${ROOM_AVAILABILITY["superior"]} ledige)` },
          { value: "shared-junior-suite", label: `Delt · Juniorsuite (dobbeltseng) — 10.025 DKK (${ROOM_AVAILABILITY["junior-suite"]} ledige)` },
          { value: "single-deluxe", label: `Single · Deluxe Dobbeltværelse — 11.800 DKK (${ROOM_AVAILABILITY["deluxe"]} ledige)` },
          { value: "single-superior", label: `Single · Superior Dobbeltværelse — 12.150 DKK (${ROOM_AVAILABILITY["superior"]} ledige)` },
          { value: "single-junior-suite", label: `Single · Juniorsuite — 12.450 DKK (${ROOM_AVAILABILITY["junior-suite"]} ledige)` },
        ]}
        depositPercentage={50}
        onSubmitOverride={handleStripeCheckout}
        hideDistance={true}
        customInfoText="Reservér din plads ved at betale 5.000 DKK i depositum pr. billet. Vi vender personligt tilbage inden for 48 timer på hverdage med en bekræftelse, og det resterende beløb opkræves 60 dage før afrejse."
        getSubmitButtonLabel={(p) => `Betal ${(5000 * p).toLocaleString('da-DK')} DKK i depositum`}
      />
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default MallorcaTrainingPricingSection;
