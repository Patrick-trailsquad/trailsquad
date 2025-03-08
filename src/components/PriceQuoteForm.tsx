
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Info, CheckCircle2 } from "lucide-react";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import PhoneInput from "./PhoneInput";

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
}

const PriceQuoteForm = ({ destinationName, availableDistances }: PriceQuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      preferredLanguage: 'english'
    }
  });

  const onSubmit = async (data: FormValues) => {
    // Replace this URL with your actual Zapier Webhook URL
    const ZAPIER_WEBHOOK_URL = '';
    
    if (!ZAPIER_WEBHOOK_URL) {
      toast({
        title: "Configuration Error",
        description: "Please set up your Zapier webhook URL first",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Required for Zapier webhooks
        body: JSON.stringify({
          destinationName,
          submittedAt: new Date().toISOString(),
          ...data
        }),
      });

      console.log('Form data sent:', data);
      setIsSubmitted(true);
      
      toast({
        title: "Success",
        description: "Your request has been submitted successfully!",
      });
    } catch (error) {
      console.error('Error sending form data:', error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
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
              <div className="bg-stone/50 rounded-lg p-4 flex items-start gap-3 mb-6">
                <Info className="w-5 h-5 mt-0.5 text-gray-600 shrink-0" />
                <p className="text-sm text-gray-600">
                  Fill out this form and we'll get back to you with a personalized quote for your 
                  adventure. We typically respond within 24 hours during business days.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      onValueChange={(value) => setValue('preferredDistance', value)}
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
                </div>

                <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                  Submit Request
                </Button>
              </form>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PriceQuoteForm;
