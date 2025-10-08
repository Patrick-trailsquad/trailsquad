import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { z } from "zod";

interface TrainingRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sessionTitle: string;
  sessionDate: string;
  sessionTime: string;
  sessionLocation: string;
}

const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Navn skal være mindst 2 tegn").max(100),
  email: z.string().trim().email("Ugyldig email-adresse").max(255),
  experience: z.number().min(1).max(5),
  optOutMarketing: z.boolean(),
});

export const TrainingRegistrationModal = ({
  open,
  onOpenChange,
  sessionTitle,
  sessionDate,
  sessionTime,
  sessionLocation,
}: TrainingRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: 3,
    optOutMarketing: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = registrationSchema.parse(formData);
      setLoading(true);

      // TODO: Add actual submission logic here (e.g., Supabase insert)
      console.log("Registration data:", {
        ...validated,
        session: { sessionTitle, sessionDate, sessionTime, sessionLocation },
      });

      toast.success("Tilmelding gennemført!", {
        description: "Vi ser frem til at se dig til træningen.",
      });

      onOpenChange(false);
      setFormData({
        fullName: "",
        email: "",
        experience: 3,
        optOutMarketing: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Fejl i formular", {
          description: error.errors[0].message,
        });
      } else {
        toast.error("Der opstod en fejl", {
          description: "Prøv venligst igen senere.",
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
          <DialogDescription className="text-base space-y-1">
            <div className="font-semibold text-charcoal mt-2">{sessionTitle}</div>
            <div>{sessionDate}</div>
            <div>{sessionTime}</div>
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
              <Input
                id="experience"
                type="range"
                min="1"
                max="5"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) })}
                className="flex-1"
              />
              <span className="font-cabinet text-xl font-bold w-8 text-center">{formData.experience}</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Nybegynder</span>
              <span>Erfaren</span>
            </div>
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="optOutMarketing"
              checked={formData.optOutMarketing}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, optOutMarketing: checked as boolean })
              }
            />
            <Label
              htmlFor="optOutMarketing"
              className="text-sm font-normal leading-relaxed cursor-pointer"
            >
              Jeg ønsker IKKE at modtage markedsføringsmails om fremtidige events og tilbud
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
