import { useState } from "react";
import { Mail, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { isBotSubmission } from "@/lib/spamGuard";

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/21931910/2l4yeck/";

const InfiniteTrails27WaitlistForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openedAt] = useState(() => Date.now());
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();

    if (isBotSubmission(honeypot, openedAt, trimmedName, trimmedEmail)) {
      setIsSuccess(true);
      return;
    }
    if (!trimmedName || trimmedName.length > 100) {
      toast({ title: "Ugyldigt navn", description: "Indtast venligst dit navn.", variant: "destructive" });
      return;
    }
    if (!/^[+\d][\d\s()-]{5,19}$/.test(trimmedPhone)) {
      toast({ title: "Ugyldigt telefonnummer", description: "Indtast venligst et gyldigt telefonnummer.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) || trimmedEmail.length > 255) {
      toast({ title: "Ugyldig email", description: "Indtast venligst en gyldig emailadresse.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          source: "infinite_trails_27_waitlist",
          destination: "Infinite Trails 2027",
          submitted_at: new Date().toISOString(),
        }),
      });
      setIsSuccess(true);
      toast({ title: "Tak!", description: "Du får besked, så snart Trail Squad-turen åbner." });
    } catch (error) {
      console.error("Error submitting Infinite Trails waitlist:", error);
      toast({ title: "Fejl", description: "Der opstod en fejl. Prøv venligst igen.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-muted p-5">
        <ThumbsUp className="h-5 w-5 text-primary shrink-0" />
        <p className="text-charcoal/80 text-sm">Du er skrevet op — vi giver dig besked, så snart Trail Squad-turen åbner.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center gap-2 text-charcoal/70 text-sm">
        <Mail className="h-4 w-4 shrink-0" />
        <span>Få besked før alle andre, når turen åbner</span>
      </div>
      <input
        type="text"
        name="company"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <Input required maxLength={100} placeholder="Dit navn" value={name} onChange={(event) => setName(event.target.value)} className="h-12" />
      <Input type="tel" required maxLength={20} placeholder="Dit telefonnummer" value={phone} onChange={(event) => setPhone(event.target.value)} className="h-12" />
      <Input type="email" required maxLength={255} placeholder="Din email" value={email} onChange={(event) => setEmail(event.target.value)} className="h-12" />
      <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-full font-cabinet bg-yellow text-charcoal hover:bg-yellow/90 shadow-md">
        {isSubmitting ? "Sender..." : "Skriv mig på ventelisten"}
      </Button>
      <p className="text-charcoal/40 text-xs text-center">Ingen binding — vi kontakter dig, når turen åbner.</p>
    </form>
  );
};

export default InfiniteTrails27WaitlistForm;
