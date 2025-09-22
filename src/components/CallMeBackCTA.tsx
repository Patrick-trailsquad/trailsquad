import React, { useState } from 'react';
import { Button } from './ui/button';
import PhoneInput from './PhoneInput';
import { Phone } from 'lucide-react';

const CallMeBackCTA = () => {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle phone number submission logic here
    console.log('Phone number submitted:', phoneNumber);
  };

  if (showPhoneInput) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <PhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <div className="flex gap-2">
          <Button type="submit" className="flex-1 bg-green-600 text-white hover:bg-green-700 border-0">
            Send anmodning
          </Button>
          <Button 
            type="button" 
            className="bg-red-600 text-white hover:bg-red-700 border-0"
            onClick={() => setShowPhoneInput(false)}
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