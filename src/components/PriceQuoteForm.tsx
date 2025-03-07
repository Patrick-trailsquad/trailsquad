
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Info } from "lucide-react";
import { Label } from "../components/ui/label";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";

interface PriceQuoteFormProps {
  destinationName: string;
  availableDistances: string[];
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  preferredDistance: string;
}

const PriceQuoteForm = ({ destinationName, availableDistances }: PriceQuoteFormProps) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Quote request sent!",
      description: "We'll get back to you within 24 hours during business days.",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black">
          Request price quote
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-cabinet">
            Request Quote for {destinationName}
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
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

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  type="tel"
                  {...register("phone", { required: true })}
                  className="mt-1.5"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">Please enter your phone number</p>
                )}
              </div>

              <div className="space-y-3">
                <Label>Preferred Distance</Label>
                <RadioGroup 
                  {...register("preferredDistance", { required: true })}
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
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
              Submit Request
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PriceQuoteForm;
