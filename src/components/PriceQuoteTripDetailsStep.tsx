import { useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { UseFormReturn } from "react-hook-form";

interface PriceQuoteTripDetailsStepProps {
  form: UseFormReturn<any>;
  availableDistances: string[];
  onBack: () => void;
  maxParticipants: number;
}

const PriceQuoteTripDetailsStep = ({
  form,
  availableDistances,
  onBack,
  maxParticipants
}: PriceQuoteTripDetailsStepProps) => {
  const { register, setValue, watch, formState: { errors } } = form;

  // Watch the values we care about
  const participants = watch("participants");
  const accommodationPreference = watch("accommodationPreference");

  // If participants is 1 but a non-single option is selected, switch to "single"
  useEffect(() => {
    if (participants === 1 && accommodationPreference !== "single") {
      setValue("accommodationPreference", "single");
    }
  }, [participants, accommodationPreference, setValue]);

  // If participants exceeds max, clamp it down to max
  useEffect(() => {
    if (participants > maxParticipants) {
      setValue("participants", maxParticipants);
    }
  }, [participants, maxParticipants, setValue]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="participants">Number of Participants</Label>
        <Input 
          id="participants"
          type="number"
          min="1"
          max={maxParticipants}
          {...register("participants", { 
            required: true,
            min: 1,
            max: {
              value: maxParticipants,
              message: `There are only ${maxParticipants} spots left`,
            },
            valueAsNumber: true 
          })}
          className="mt-1.5"
          placeholder={`Enter number of participants (max ${maxParticipants})`}
        />
        {errors.participants && (
          <p className="text-red-500 text-sm mt-1">
            {errors.participants.type === "max"
              ? `Cannot exceed ${maxParticipants} participants (spots left).`
              : "Please enter a valid number of participants"}
          </p>
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
          defaultValue="single"
          value={accommodationPreference}
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
            <RadioGroupItem 
              value="double"
              id="double-room"
              disabled={participants === 1}
            />
            <Label htmlFor="double-room" className={participants === 1 ? "opacity-50" : ""}>
              Shared double rooms
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="both"
              id="both-room"
              disabled={participants === 1}
            />
            <Label htmlFor="both-room" className={participants === 1 ? "opacity-50" : ""}>
              Both are ok
            </Label>
          </div>
        </RadioGroup>
        {errors.accommodationPreference && (
          <p className="text-red-500 text-sm">Please select an accommodation preference</p>
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
          onClick={onBack}
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
  );
};

export default PriceQuoteTripDetailsStep;
