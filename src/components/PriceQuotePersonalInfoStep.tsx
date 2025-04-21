
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import PhoneInput from "./PhoneInput";
import { UseFormReturn } from "react-hook-form";

export interface PriceQuotePersonalInfoStepProps {
  form: UseFormReturn<any>;
  advanceStep: () => void;
}

const PriceQuotePersonalInfoStep = ({
  form,
  advanceStep,
}: PriceQuotePersonalInfoStepProps) => {
  const { register, setValue, watch, formState: { errors } } = form;

  return (
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
  );
};

export default PriceQuotePersonalInfoStep;

