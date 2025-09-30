import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { useToast } from '@/hooks/use-toast';
import { Clock, ThumbsUp } from 'lucide-react';

const InfiniteTrailsMediaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
      const response = await fetch('https://hooks.zapier.com/hooks/catch/21931910/2l4yeck/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });

      setEmail('');
      setIsSuccess(true);
      toast({
        title: "Succes!",
        description: "Tak for tilmeldingen. Vi giver dig besked når registreringen åbner!"
      });
    } catch (error) {
      toast({
        title: "Fejl",
        description: "Noget gik galt. Prøv venligst igen.",
        variant: "destructive"
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
          <div>
            <p className="text-sm text-gray-600 mb-1">Fra</p>
            <p className="font-cabinet text-4xl font-bold text-charcoal">10.000 DKK</p>
            <p className="text-sm text-gray-500">inkl. moms</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-1">Registreringsstatus</p>
            <div className="bg-[#F1F0FB] px-3 py-1.5 rounded-full">
              <p className="font-cabinet text-sm font-medium text-[#9F9EA1] flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 hidden sm:block" />
                Åbner senere
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <h3 className="font-cabinet text-xl font-bold text-charcoal mb-6">Få besked når tilmeldingen åbner</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
              disabled={isSuccess} 
              placeholder="Indtast din email" 
              className="flex-1 h-[56px] px-6 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-black/20" 
            />
            {isSuccess ? (
              <div className="bg-transparent border-2 border-black text-black h-[56px] px-8 rounded-full flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 animate-fade-in text-black" />
              </div>
            ) : (
              <Button type="submit" variant="black" size="xl" disabled={isSubmitting}>
                {isSubmitting ? 'Indsender...' : 'Giv mig besked'}
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfiniteTrailsMediaSection;
