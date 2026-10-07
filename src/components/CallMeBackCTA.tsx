import React, { useState } from 'react';
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from './ui/button';
import PhoneInput from './PhoneInput';
import { Phone, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { isBotSubmission } from '@/lib/spamGuard';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21931910/u13r20b/';

interface CallMeBackCTAProps {
  variant?: 'default' | 'banner';
}

const CallMeBackCTA = ({ variant = 'default' }: CallMeBackCTAProps) => {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [openedAt] = useState(() => Date.now());
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Silent bot drop: fake success, nothing is saved or sent
    if (isBotSubmission(honeypot, openedAt, fullName, '')) {
      setIsSubmitted(true);
      return;
    }
    setIsLoading(true);
    
    try {
      // Fail-safe: log the lead in the database before hitting Zapier
      try {
        await supabase.from('quote_requests').insert({
          destination: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
          full_name: fullName,
          email: '',
          phone: phoneNumber,
          source: 'call_back_request',
        });
      } catch (dbErr) {
        console.error('Call-back DB backup failed', dbErr);
      }

      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          full_name: fullName,
          phone_number: phoneNumber,
          request_type: 'call_back_request',
          submitted_at: new Date().toISOString(),
          triggered_from: window.location.origin,
          destination_page: window.location.pathname,
        }),
      });

      setIsSubmitted(true);
      toast({
        title: "Anmodning sendt",
        description: "Vi kontakter dig snarest muligt!",
      });
    } catch (error) {
      console.error('Error sending call back request:', error);
      toast({
        title: "Fejl",
        description: "Kunne ikke sende anmodningen. Prøv venligst igen.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    const confirmation = (
      <div className="bg-green-50 rounded-full p-4 flex items-center justify-center gap-2 border border-green-200">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <span className="text-green-800 font-medium">Vi ringer til dig snarest!</span>
      </div>
    );

    if (variant === 'banner') {
      return (
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6 max-w-xl text-center">{confirmation}</div>
        </section>
      );
    }

    return confirmation;
  }

  if (showPhoneInput) {
    const form = (
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot: invisible to humans, bots fill it */}
        <input
          type="text"
          name="company"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Fulde navn</Label>
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Indtast dit fulde navn"
            required
          />
        </div>
        <PhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={isLoading || !phoneNumber || !fullName}
            className="flex-1 bg-green-600 text-white hover:bg-green-700 border-0"
          >
            {isLoading ? "Sender..." : "Send anmodning"}
          </Button>
          <Button
            type="button"
            className="bg-red-600 text-white hover:bg-red-700 border-0"
            onClick={() => setShowPhoneInput(false)}
            disabled={isLoading}
          >
            Annuller
          </Button>
        </div>
      </form>
    );

    if (variant === 'banner') {
      return (
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6 max-w-xl text-center">
            <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-6">
              🤔 Stadig i tvivl?
            </h2>
            <div className="text-left">{form}</div>
          </div>
        </section>
      );
    }

    return form;
  }

  if (variant === 'banner') {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-3">
            🤔 Stadig i tvivl?
          </h2>
          <p className="font-cabinet text-xl md:text-2xl text-charcoal mb-2">
            Lad Patrick eller Emil ringe dig op
          </p>
          <p className="text-charcoal/60 text-lg mb-8">
            Få svar på spørgsmål om niveau, træning, værelser, program osv.
          </p>
          <Button
            onClick={() => setShowPhoneInput(true)}
            className="bg-yellow text-charcoal hover:bg-yellow/90 rounded-full font-cabinet font-bold text-lg px-8 h-12 shadow-md border-0"
          >
            <Phone className="h-5 w-5" />
            Ja tak – ring mig op
          </Button>
        </div>
      </section>
    );
  }

  return (
    <Button
      onClick={() => setShowPhoneInput(true)}
      variant="outline"
      className="w-full flex items-center gap-2 rounded-full"
    >
      <Phone className="h-4 w-4" />
      Ring mig op
    </Button>
  );
};

export default CallMeBackCTA;