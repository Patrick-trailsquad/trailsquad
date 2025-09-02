import React, { useState } from 'react';
import { Clock, ThumbsUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const IstriaMediaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/18341193/23xf8pn/', {
        method: 'POST',
        body: JSON.stringify({ 
          email,
          destination: "Istria 100 by UTMB"
        })
      });
      
      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Tak!",
          description: "Vi giver dig besked, så snart tilmeldingen åbner."
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast({
        title: "Fejl",
        description: "Der opstod en fejl. Prøv igen senere.",
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
          src="https://www.youtube.com/embed/DLt2z3bCRGM"
          title="Istria 100 by UTMB Video"
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
            <p className="font-cabinet text-4xl font-bold text-charcoal">
              7.500 DKK <span className="text-sm text-gray-500">inkl. moms</span>
            </p>
            <Accordion type="single" collapsible className="w-full mt-2">
              <AccordionItem value="price-details" className="border-none">
                <AccordionTrigger
                  className="px-0 py-0 text-left text-sm underline text-primary hover:text-primary/80 shadow-none bg-transparent font-normal font-sans decoration-[1.5px] after:hidden focus:ring-0 focus:outline-none"
                  style={{ background: 'none', boxShadow: 'none' }}
                >
                  Forklar prisvariationer
                </AccordionTrigger>
                <AccordionContent className="px-0 pt-2 text-gray-700 text-sm">
                  <div>
                    Prisen for et <b>Delt hotelværelse</b> er 7.500 DKK per person, og du vil dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                    Prisen for et <b>Individuelt hotelværelse</b> er 8.800 DKK.<br /><br />
                    Moms er inkluderet i alle priser.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-1">Registreringsstatus</p>
            <div className="bg-sage px-3 py-1.5 rounded-full">
              <p className="font-cabinet text-sm font-medium text-white flex items-center justify-center gap-1">
                3 spots tilbage
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <h3 className="font-cabinet text-xl font-bold text-charcoal mb-6">Tilmeld dig nu</h3>
          <Button size="xl" className="bg-sage hover:bg-sage-light text-white px-12">
            Tilmeld dig
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IstriaMediaSection;