import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Info, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { Progress } from "./ui/progress";
import PriceQuotePersonalInfoStep from "./PriceQuotePersonalInfoStep";
import PriceQuoteTripDetailsStep from "./PriceQuoteTripDetailsStep";
interface AccommodationOption {
  value: string;
  label: string;
}

interface PriceQuoteFormProps {
  destinationName: string;
  availableDistances: string[];
  maxParticipants?: number;
  depositPercentage?: number;
  accommodationOptions?: AccommodationOption[];
  customInfoText?: string;
}
interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  preferredDistance: string;
  participants: number;
  accommodationPreference: string;
}
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21931910/2qey8br/';
const PriceQuoteForm = ({
  destinationName,
  availableDistances,
  maxParticipants = 100,
  depositPercentage = 75,
  accommodationOptions,
  customInfoText
}: PriceQuoteFormProps) => {
  const {
    toast
  } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const form = useForm<FormValues>({
    defaultValues: {
      preferredDistance: availableDistances[0],
      accommodationPreference: 'single'
    }
  });
  const onSubmit = async (data: FormValues) => {
    try {
      const formData = {
        destination_name: destinationName,
        submitted_at: new Date().toISOString(),
        full_name: data.fullName,
        email_address: data.email,
        phone_number: data.phone,
        preferred_distance: data.preferredDistance,
        number_of_participants: data.participants,
        accommodation_preference: data.accommodationPreference
      };
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(formData)
      });
      setIsSubmitted(true);
      toast({
        title: "Succes",
        description: "Din anmodning er blevet sendt succesfuldt!"
      });
    } catch (error) {
      toast({
        title: "Fejl",
        description: "Kunne ikke sende din anmodning. Prøv venligst igen.",
        variant: "destructive"
      });
    }
  };
  const advanceStep = async () => {
    const isValid = await form.trigger(['fullName', 'email', 'phone']);
    if (isValid) {
      setStep(2);
    }
  };
  return <Sheet>
      <SheetTrigger asChild>
        <button className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black">
          Anmod om pristilbud
        </button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-cabinet">
            Anmod om pris på {destinationName}
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 pb-6">
          {isSubmitted ? <div className="bg-green-50 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
              <div className="space-y-1">
                <p className="font-medium text-green-900">
                  Tilbudsanmodning sendt succesfuldt!
                </p>
                <p className="text-sm text-green-700">
                  Vi vender tilbage til dig med et personligt tilbud inden for 48 timer på hverdage.
                </p>
              </div>
            </div> : <>
              <div className="mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className={step === 1 ? "text-green-600 font-semibold" : "text-gray-500"}>Dine Oplysninger</span>
                    <span className={step === 2 ? "text-green-600 font-semibold" : "text-gray-500"}>Rejsedetaljer</span>
                  </div>
                  <div className="w-[95%] mx-auto">
                    <Progress value={step === 1 ? 50 : 100} className="h-2" variant="success" />
                  </div>
                </div>
              </div>

              <div className="bg-stone/50 rounded-lg p-4 flex items-start gap-3 mb-6">
                <Info className="w-5 h-5 mt-0.5 text-gray-600 shrink-0" />
                <div>
                  {customInfoText ? (
                    <p className="text-sm text-gray-600 mb-2">{customInfoText}</p>
                  ) : (
                    <>
                      <p className="text-sm text-gray-600 mb-2">Udfyld denne formular, og vi vender tilbage til dig med et personligt tilbud på dit eventyr. Vi svarer typisk inden for 48 timer på hverdage.</p>
                      <p className="text-sm text-gray-600 mb-2">
                        Tilbuddet vil indeholde et Stripe-link til at betale {depositPercentage}% af prisen for at bekræfte. Vi vender tilbage 60 dage før afrejse for at indsamle de resterende {100 - depositPercentage}% af prisen.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 ? <PriceQuotePersonalInfoStep form={form} advanceStep={advanceStep} /> : <PriceQuoteTripDetailsStep form={form} availableDistances={availableDistances} onBack={() => setStep(1)} maxParticipants={maxParticipants} accommodationOptions={accommodationOptions} />}
              </form>
            </>}
        </div>
      </SheetContent>
    </Sheet>;
};
export default PriceQuoteForm;