import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, ThumbsUp } from "lucide-react";

const Fyri26WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      toast({
        title: "Ugyldig email",
        description: "Indtast venligst en gyldig emailadresse.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/20711644/2528rxx/", {
        method: "POST",
        body: JSON.stringify({
          email: trimmed,
          source: "fyri26_waitlist",
          destination: "Fyri Trail by Salomon 2026",
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setIsSuccess(true);
      toast({
        title: "Tak!",
        description: "Du får besked på email, så snart turen åbner for tilmelding.",
      });
    } catch (error) {
      console.error("Error submitting to Zapier:", error);
      toast({
        title: "Fejl",
        description: "Der opstod en fejl. Prøv venligst igen.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-muted p-4">
        <ThumbsUp className="h-5 w-5 text-primary shrink-0" />
        <p className="text-charcoal/80 text-sm">
          Du er skrevet op — vi sender dig en email, så snart pris og tilmelding er klar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center gap-2 text-charcoal/70 text-sm">
        <Mail className="h-4 w-4 shrink-0" />
        <span>Få besked på email, når turen åbner for tilmelding</span>
      </div>
      <Input
        type="email"
        required
        maxLength={255}
        placeholder="Din email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12"
      />
      <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-full font-cabinet">
        {isSubmitting ? "Sender..." : "Hold mig opdateret"}
      </Button>
      <p className="text-charcoal/40 text-xs text-center">
        Ingen binding — du får blot besked først, når pladserne åbner.
      </p>
    </form>
  );
};

export default Fyri26WaitlistForm;
