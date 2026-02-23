import { useState, useEffect } from "react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { z } from "zod";

interface PickupOption {
  value: string;
  label: string;
  spotsKey?: string;
}

interface TrainingRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sessionTitle: string;
  sessionDate: string;
  sessionMeetingTime: string;
  sessionEndTime: string;
  sessionLocation: string;
  sessionMeetingPlace: string;
  pickupOptions?: PickupOption[];
}

const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Navn skal være mindst 2 tegn").max(100),
  email: z.string().trim().email("Ugyldig email-adresse").max(255),
  experience: z.number().min(1).max(5),
  pickup: z.string().optional(),
  optOutMarketing: z.boolean()
});

export const TrainingRegistrationModal = ({
  open,
  onOpenChange,
  sessionTitle,
  sessionDate,
  sessionMeetingTime,
  sessionEndTime,
  sessionLocation,
  sessionMeetingPlace,
  pickupOptions
}: TrainingRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: 3,
    pickup: "",
    optOutMarketing: true
  });

  const [loading, setLoading] = useState(false);
  const [spotsRemaining, setSpotsRemaining] = useState<Record<string, number>>({});

  // Fetch remaining spots for pickup options that have spotsKey
  useEffect(() => {
    if (!pickupOptions) return;
    const keys = pickupOptions.filter(o => o.spotsKey).map(o => o.spotsKey!);
    if (keys.length === 0) return;

    const fetchSpots = async () => {
      const { data } = await supabase
        .from('training_spots')
        .select('session_key, spots_remaining')
        .in('session_key', keys);
      if (data) {
        const map: Record<string, number> = {};
        data.forEach(row => { map[row.session_key] = row.spots_remaining; });
        setSpotsRemaining(map);
      }
    };
    fetchSpots();
  }, [pickupOptions, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = registrationSchema.parse(formData);
      setLoading(true);

      // Helper function to determine if a date is in daylight saving time (CEST)
      // In Denmark, DST starts last Sunday of March and ends last Sunday of October
      const isDaylightSavingTime = (year: number, month: number, day: number): boolean => {
        // Create date object for the given date
        const date = new Date(year, month - 1, day);
        
        // Find last Sunday of March
        const marchLast = new Date(year, 2, 31);
        while (marchLast.getDay() !== 0) marchLast.setDate(marchLast.getDate() - 1);
        
        // Find last Sunday of October
        const octoberLast = new Date(year, 9, 31);
        while (octoberLast.getDay() !== 0) octoberLast.setDate(octoberLast.getDate() - 1);
        
        // DST is active if date is between last Sunday of March and last Sunday of October
        return date >= marchLast && date < octoberLast;
      };

      // Send to Zapier webhook
      const webhookData = {
        fullName: validated.fullName,
        email: validated.email,
        experience: validated.experience,
        pickup: validated.pickup || undefined,
        optOutMarketing: validated.optOutMarketing,
        sessionTitle,
        sessionDate: `${sessionDate} ${sessionMeetingTime}`.replace(/^(\d+)\s+\w+\s+(\d+)\s+(\d+:\d+)$/, (_, day, year, time) => {
          const monthMatch = sessionDate.match(/\s(\w+)\s/);
          const monthNames: Record<string, string> = { januar: '01', februar: '02', marts: '03', april: '04', maj: '05', juni: '06', juli: '07', august: '08', september: '09', oktober: '10', november: '11', december: '12' };
          const month = monthNames[monthMatch?.[1]?.toLowerCase() || ''] || '01';
          const offset = isDaylightSavingTime(parseInt(year), parseInt(month), parseInt(day)) ? '+02:00' : '+01:00';
          return `${year}-${month}-${day.padStart(2, '0')}T${time}:00${offset}`;
        }),
        sessionEndTime: `${sessionDate} ${sessionEndTime}`.replace(/^(\d+)\s+\w+\s+(\d+)\s+(\d+:\d+)$/, (_, day, year, time) => {
          const monthMatch = sessionDate.match(/\s(\w+)\s/);
          const monthNames: Record<string, string> = { januar: '01', februar: '02', marts: '03', april: '04', maj: '05', juni: '06', juli: '07', august: '08', september: '09', oktober: '10', november: '11', december: '12' };
          const month = monthNames[monthMatch?.[1]?.toLowerCase() || ''] || '01';
          const offset = isDaylightSavingTime(parseInt(year), parseInt(month), parseInt(day)) ? '+02:00' : '+01:00';
          return `${year}-${month}-${day.padStart(2, '0')}T${time}:00${offset}`;
        }),
        sessionLocation,
        sessionMeetingPlace,
        timestamp: format(new Date(), "MMMM dd yyyy HH:mm:ss")
      };

      try {
        await fetch('https://hooks.zapier.com/hooks/catch/21931910/u53jr77/', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(webhookData),
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
      }

      // Decrement spots if a pickup option with spotsKey was selected
      if (validated.pickup && pickupOptions) {
        const selectedOption = pickupOptions.find(o => o.value === validated.pickup);
        if (selectedOption?.spotsKey) {
          const { data } = await supabase.rpc('decrement_training_spots', {
            p_session_key: selectedOption.spotsKey
          });
          if (typeof data === 'number' && data >= 0) {
            setSpotsRemaining(prev => ({ ...prev, [selectedOption.spotsKey!]: data }));
          }
        }
      }

      toast.success("Tilmelding gennemført!", {
        description: "Vi ser frem til at se dig til træningen."
      });

      onOpenChange(false);
      setFormData({
        fullName: "",
        email: "",
        experience: 3,
        pickup: "",
        optOutMarketing: true
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Fejl i formular", {
          description: error.errors[0].message
        });
      } else {
        toast.error("Der opstod en fejl", {
          description: "Prøv venligst igen senere."
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-cabinet text-2xl">Tilmeld træningssession</DialogTitle>
          <DialogDescription className="text-sm space-y-1">
            <div className="font-semibold text-charcoal mt-2">{sessionTitle}</div>
            <div>{sessionDate}</div>
            <div>Mødetid: {sessionMeetingTime}</div>
            <div>Vi slutter (ca): {sessionEndTime}</div>
            <div>{sessionLocation}</div>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Fulde navn *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              placeholder="Dit fulde navn"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="din@email.dk"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Erfaring med trail-løb (1-5) *</Label>
            <div className="flex items-center gap-4">
              <input
                id="experience"
                type="range"
                min="1"
                max="5"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) })}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-[#FFDC00]
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-black
                  [&::-moz-range-thumb]:w-4
                  [&::-moz-range-thumb]:h-4
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-[#FFDC00]
                  [&::-moz-range-thumb]:border-2
                  [&::-moz-range-thumb]:border-black"
              />
              <span className="font-cabinet text-xl font-bold w-8 text-center">
                {formData.experience}
              </span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Nybegynder</span>
              <span>Erfaren</span>
            </div>
          </div>

          {pickupOptions && pickupOptions.length > 0 && (
            <div className="space-y-2">
              <Label>Transport *</Label>
              <div className="space-y-2">
                {pickupOptions.map((option) => {
                  const spots = option.spotsKey ? spotsRemaining[option.spotsKey] : undefined;
                  const isFull = spots !== undefined && spots <= 0;
                  return (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-colors ${
                        isFull
                          ? "border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed"
                          : formData.pickup === option.value
                            ? "border-[#FFDC00] bg-[#FFDC00]/10 cursor-pointer"
                            : "border-gray-200 hover:border-gray-300 cursor-pointer"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pickup"
                        value={option.value}
                        checked={formData.pickup === option.value}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        disabled={isFull}
                        className="accent-[#FFDC00] w-4 h-4"
                      />
                      <span className="text-sm flex-1">{option.label}</span>
                      {spots !== undefined && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          isFull
                            ? "bg-red-100 text-red-600"
                            : spots <= 3
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700"
                        }`}>
                          {isFull ? "Fuldt" : `${spots} pladser`}
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="optOutMarketing"
              checked={formData.optOutMarketing}
              onCheckedChange={(checked) => setFormData({ ...formData, optOutMarketing: checked as boolean })}
            />
            <Label htmlFor="optOutMarketing" className="text-xs font-normal leading-relaxed cursor-pointer">
              Lad mig endelig høre om kommende træninger, løb fra Trail Fox og Trail Squad ture. Intet spam, bare god energi 🥳<br />
              (Max én mail pr. måned) 😇<br />
              Vi er forøvrigt nogle dovne skribenter, så vi skriver kun hvis det er VIRKELIG vigtigt 😄
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={loading}
            >
              Annuller
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#FFDC00] text-black border-2 border-black rounded-full hover:bg-[#FFDC00]/90 font-cabinet font-medium"
              disabled={loading}
            >
              {loading ? "Sender..." : "Tilmeld"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
