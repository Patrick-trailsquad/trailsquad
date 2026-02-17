import PriceQuoteForm, { type FormValues } from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const KangNu26PricingSection = () => {
  const { toast } = useToast();
  const spotsLeft = 16;

  const handleStripeCheckout = async (data: FormValues) => {
    const { data: result, error } = await supabase.functions.invoke('create-kangnu-checkout', {
      body: {
        accommodationPreference: data.accommodationPreference,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        preferredDistance: data.preferredDistance,
        participants: data.participants,
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

    window.location.href = result.url;
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2 space-y-1">
          <p className="text-sm text-gray-600">Priser fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">
            26.000 DKK <span className="text-sm text-gray-500">inkl. moms</span>
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
                  Prisen for et <b>Economy Double Værelse på HHE Express</b> (3★) er 26.000 DKK per person.<br /><br />
                  Prisen for et <b>Single Standard Værelse på Hotel SØMA</b> (4★) er 26.550 DKK per person.<br /><br />
                  Prisen for et <b>Single Superior Værelse på Hotel SØMA</b> (4★) er 27.800 DKK per person.<br /><br />
                  Moms er inkluderet i alle priser. Scroll ned for at se detaljerne for hvert hotel.
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
        destinationName="KangNu Running Race"
        availableDistances={["20km", "35km", "56km"]}
        maxParticipants={spotsLeft}
        customInfoText="Udfyld denne formular, betal depositum på DKK 10.000, og vi vender personligt tilbage til dig inden for 48 timer på hverdage."
        onSubmitOverride={handleStripeCheckout}
        submitButtonLabel="Betal depositum — DKK 10.000"
        accommodationOptions={[
          { value: "hhe-economy", label: "HHE Express — Economy Double (26.000 kr.)" },
          { value: "soma-standard", label: "Hotel SØMA — Single Standard (26.550 kr.)" },
          { value: "soma-superior", label: "Hotel SØMA — Single Superior (27.800 kr.)" },
        ]}
      />
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default KangNu26PricingSection;
