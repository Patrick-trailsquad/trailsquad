import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, ThumbsUp } from "lucide-react";

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/21931910/2l4yeck/";

const Fyri26WaitlistForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || trimmedName.length > 100) {
      toast({
        title: "Ugyldigt navn",
        description: "Indtast venligst dit navn.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[+\d][\d\s()-]{5,19}$/.test(trimmedPhone)) {
      toast({
        title: "Ugyldigt telefonnummer",
        description: "Indtast venligst et gyldigt telefonnummer.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) || trimmedEmail.length > 255) {
      toast({
        title: "Ugyldig email",
        description: "Indtast venligst en gyldig emailadresse.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          source: "fyri26_waitlist",
          destination: "Fyri Trail by Salomon 2027",
          submitted_at: new Date().toISOString(),
        }),
      });
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
        type="text"
        required
        maxLength={100}
        placeholder="Dit navn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-12"
      />
      <Input
        type="tel"
        required
        maxLength={20}
        placeholder="Dit telefonnummer"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-12"
      />
      <Input
        type="email"
        required
        maxLength={255}
        placeholder="Din email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12"
      />
      <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-full font-cabinet bg-yellow text-charcoal hover:bg-yellow/90 shadow-md">
        {isSubmitting ? "Sender..." : "Hold mig opdateret"}
      </Button>
      <p className="text-charcoal/40 text-xs text-center">
        Ingen binding — du får blot besked først, når pladserne åbner.
      </p>
    </form>
  );
};

export default Fyri26WaitlistForm;
