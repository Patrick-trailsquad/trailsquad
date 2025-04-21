import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Info, CheckCircle2, ArrowRight } from "lucide-react";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import PhoneInput from "./PhoneInput";
import { Progress } from "./ui/progress";

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
  flightPreference: string;
}

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21931910/2qey8br/';

const PriceQuoteForm = ({ destinationName, availableDistances }: PriceQuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm<FormValues>({
    defaultValues: {
      preferredLanguage: 'english',
      preferredDistance: availableDistances[0],
      accommodationPreference: 'double',
      flightPreference: 'organizer-tickets'
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
        accommodation_preference: data.accommodationPreference,
        flight_preference: data.flightPreference
      };

      console.log('Raw form data object:', formData);
      console.log('Stringified form data:', JSON.stringify(formData));
      
      console.log('Request configuration:', {
        url: ZAPIER_WEBHOOK_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(formData)
      });

      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });

      console.log('Full response object:', response);
      console.log('Response type:', response.type);
      
      setIsSubmitted(true);
      
      toast({
        title: "Success",
        description: "Your request has been submitted successfully!",
      });
    } catch (error) {
      console.error('Error details:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const advanceStep = async () => {
    const isValid = await trigger(['fullName', 'email', 'phone']);
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
                  <p className="text-sm text-gray-600">
                    Fill out this form and we'll get back to you with a personalized quote for your adventure. We typically respond within 24 hours during business days.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-700 font-medium">
                      The quote will contain a Stripe link to pay 75% of the price to confirm. We will revert back 60 days before departure to collect the remaining 25% of the price.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName"
                        {...register("fullName", { required: true })}
                        className="mt-1.5"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">Please enter your full name</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="mt-1.5"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                      )}
                    </div>

                    <PhoneInput 
                      value={watch("phone")}
                      onChange={(value) => setValue("phone", value)}
                      error={!!errors.phone}
                      errorMessage={errors.phone ? "Please enter a valid phone number" : undefined}
                    />

                    <Button 
                      type="button" 
                      className="w-full bg-black text-white hover:bg-black/90 mt-4 flex items-center justify-center gap-2"
                      onClick={advanceStep}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="participants">Number of Participants</Label>
                      <Input 
                        id="participants"
                        type="number"
                        min="1"
                        {...register("participants", { 
                          required: true,
                          min: 1,
                          valueAsNumber: true 
                        })}
                        className="mt-1.5"
                        placeholder="Enter number of participants"
                      />
                      {errors.participants && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid number of participants</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Distance</Label>
                      <RadioGroup 
                        defaultValue={availableDistances[0]}
                        onValueChange={(value) => {
                          setValue('preferredDistance', value);
                        }}
                        className="gap-3"
                      >
                        {availableDistances.map((distance) => (
                          <div key={distance} className="flex items-center space-x-2">
                            <RadioGroupItem value={distance} id={distance} />
                            <Label htmlFor={distance}>{distance}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {errors.preferredDistance && (
                        <p className="text-red-500 text-sm">Please select a preferred distance</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label>Preference for accommodation</Label>
                      <RadioGroup 
                        defaultValue="double"
                        onValueChange={(value) => {
                          setValue('accommodationPreference', value);
                        }}
                        className="gap-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="single" id="single-room" />
                          <Label htmlFor="single-room">Single rooms</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="double" id="double-room" />
                          <Label htmlFor="double-room">Shared double rooms</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both-room" />
                          <Label htmlFor="both-room">Both are ok</Label>
                        </div>
                      </RadioGroup>
                      {errors.accommodationPreference && (
                        <p className="text-red-500 text-sm">Please select an accommodation preference</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label>Preference for flights</Label>
                      <RadioGroup 
                        defaultValue="organizer-tickets"
                        onValueChange={(value) => {
                          setValue('flightPreference', value);
                        }}
                        className="gap-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no-tickets" id="no-tickets" />
                          <Label htmlFor="no-tickets">We'll arrange our own tickets (cheapest and more flexible)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="organizer-tickets" id="organizer-tickets" />
                          <Label htmlFor="organizer-tickets">We prefer Trail Squad to book tickets (everyone on the same planes)</Label>
                        </div>
                      </RadioGroup>
                      {errors.flightPreference && (
                        <p className="text-red-500 text-sm">Please select a flight preference</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Language of upcoming communication</Label>
                      <RadioGroup 
                        defaultValue="english"
                        onValueChange={(value) => setValue('preferredLanguage', value)}
                        className="gap-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="english" id="english" />
                          <Label htmlFor="english">English</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="danish" id="danish" />
                          <Label htmlFor="danish">Danish</Label>
                        </div>
                      </RadioGroup>
                      {errors.preferredLanguage && (
                        <p className="text-red-500 text-sm">Please select a preferred language</p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1 bg-black text-white hover:bg-black/90"
                      >
                        Submit Request
                      </Button>
                    </div>
                  </div>
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
