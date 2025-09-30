import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { useToast } from '@/hooks/use-toast';

const InfiniteTrailsMediaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      email,
      source: 'infinite_trails_waitlist',
      submitted_at: new Date().toISOString()
    };

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/20423393/22ak2au/', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Tak for din interesse!",
          description: "Vi kontakter dig, når bookingen åbner.",
        });
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Der opstod en fejl",
        description: "Prøv venligst igen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden aspect-video">
        <iframe
          src="https://www.youtube.com/embed/Cu6Tg-eQ-cQ"
          title="Infinite Trails Bad Gastein"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-cabinet text-2xl font-bold text-charcoal">Priser</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg text-charcoal">Fra</span>
            <span className="font-cabinet text-3xl font-bold text-terra">DKK 10.000</span>
          </div>
          <p className="text-sm text-charcoal/70">
            Vi åbner bookingen snart. Indtast din email, så giver vi dig besked.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din email"
            required
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terra"
          />
          <Button 
            type="submit" 
            variant="default" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sender...' : 'Tilmeld venteliste'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InfiniteTrailsMediaSection;
