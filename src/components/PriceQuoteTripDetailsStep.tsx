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
        <Label htmlFor="participants">Antal Deltagere</Label>
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
              message: `Der er kun ${maxParticipants} pladser tilbage`,
            },
            valueAsNumber: true 
          })}
          className="mt-1.5"
          placeholder={`Indtast antal deltagere (maks ${maxParticipants})`}
        />
        {errors.participants && (
          <p className="text-red-500 text-sm mt-1">
            {errors.participants.type === "max"
              ? `Kan ikke overstige ${maxParticipants} deltagere (pladser tilbage).`
              : "Venligst indtast et gyldigt antal deltagere"}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <Label>Foretrukken Distance</Label>
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
          <p className="text-red-500 text-sm">Venligst vælg en foretrukken distance</p>
        )}
      </div>

      <div className="space-y-3">
        <Label>Præference for indkvartering</Label>
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
            <Label htmlFor="single-room">Enkeltværelser</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="double"
              id="double-room"
              disabled={participants === 1}
            />
            <Label htmlFor="double-room" className={participants === 1 ? "opacity-50" : ""}>
              Delte dobbeltværelser
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="both"
              id="both-room"
              disabled={participants === 1}
            />
            <Label htmlFor="both-room" className={participants === 1 ? "opacity-50" : ""}>
              Begge er i orden
            </Label>
          </div>
        </RadioGroup>
        {errors.accommodationPreference && (
          <p className="text-red-500 text-sm">Venligst vælg en indkvarteringspræference</p>
        )}
      </div>


      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button 
          type="button" 
          variant="outline"
          className="flex-1"
          onClick={onBack}
        >
          Tilbage
        </Button>
        <Button 
          type="submit" 
          className="flex-1 bg-black text-white hover:bg-black/90"
        >
          Send Anmodning
        </Button>
      </div>
    </div>
  );
};

export default PriceQuoteTripDetailsStep;
