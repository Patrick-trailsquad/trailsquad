
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Info, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { Progress } from "./ui/progress";
import PriceQuotePersonalInfoStep from "./PriceQuotePersonalInfoStep";
import PriceQuoteTripDetailsStep from "./PriceQuoteTripDetailsStep";

interface PriceQuoteFormProps {
  destinationName: string;
  availableDistances: string[];
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  preferredDistance: string;
  participants: number;
  preferredLanguage: string;
  accommodationPreference: string;
}

// Updated Zapier webhook URL as requested
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21931910/20kwfiu/';

const PriceQuoteForm = ({ destinationName, availableDistances }: PriceQuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const form = useForm<FormValues>({
    defaultValues: {
      preferredLanguage: 'english',
      preferredDistance: availableDistances[0],
      accommodationPreference: 'double'
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
        preferred_language: data.preferredLanguage,
        accommodation_preference: data.accommodationPreference
      };

      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);

      toast({
        title: "Success",
        description: "Your request has been submitted successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const advanceStep = async () => {
    const isValid = await form.trigger(['fullName', 'email', 'phone']);
    if (isValid) {
      setStep(2);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black">
          Request price quote
        </button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-cabinet">
            Request Quote for {destinationName}
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 pb-6">
          {isSubmitted ? (
            <div className="bg-green-50 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
              <div className="space-y-1">
                <p className="font-medium text-green-900">
                  Quote request sent successfully!
                </p>
                <p className="text-sm text-green-700">
                  We'll get back to you with a personalized quote within 24 hours during business days.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className={step === 1 ? "text-green-600 font-semibold" : "text-gray-500"}>Your Info</span>
                    <span className={step === 2 ? "text-green-600 font-semibold" : "text-gray-500"}>Trip Details</span>
                  </div>
                  <div className="w-[95%] mx-auto">
                    <Progress value={step === 1 ? 50 : 100} className="h-2" variant="success" />
                  </div>
                </div>
              </div>

              <div className="bg-stone/50 rounded-lg p-4 flex items-start gap-3 mb-6">
                <Info className="w-5 h-5 mt-0.5 text-gray-600 shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Fill out this form and we'll get back to you with a personalized quote for your adventure. We typically respond within 24 hours during business days.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    The quote will contain a Stripe link to pay 75% of the price to confirm. We will revert back 60 days before departure to collect the remaining 25% of the price.
                  </p>
                </div>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 ? (
                  <PriceQuotePersonalInfoStep form={form} advanceStep={advanceStep} />
                ) : (
                  <PriceQuoteTripDetailsStep 
                    form={form}
                    availableDistances={availableDistances}
                    onBack={() => setStep(1)}
                  />
                )}
              </form>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PriceQuoteForm;

