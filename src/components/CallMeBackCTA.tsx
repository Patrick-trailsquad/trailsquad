import React, { useState } from 'react';
import { Button } from './ui/button';
import PhoneInput from './PhoneInput';
import { Phone, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21931910/u13r20b/';

const CallMeBackCTA = () => {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          phone_number: phoneNumber,
          request_type: 'call_back_request',
          submitted_at: new Date().toISOString(),
          triggered_from: window.location.origin,
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
    return (
      <div className="bg-green-50 rounded-full p-4 flex items-center justify-center gap-2 border border-green-200">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <span className="text-green-800 font-medium">Vi ringer til dig snarest!</span>
      </div>
    );
  }

  if (showPhoneInput) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <PhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <div className="flex gap-2">
          <Button 
            type="submit" 
            disabled={isLoading || !phoneNumber}
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