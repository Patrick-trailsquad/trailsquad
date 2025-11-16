import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, ThumbsUp } from "lucide-react";
import CallMeBackCTA from "../../CallMeBackCTA";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
const RibeiraPricingSection2026 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      email,
      source: 'ribeira_sacra_2026_waitlist',
      submitted_at: new Date().toISOString()
    };
    console.log('Submitting to Zapier:', payload);
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/20711644/2528rxx/', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        console.log('Successfully submitted to Zapier');
        setIsSuccess(true);
        toast({
          title: "Tak!",
          description: "Du får besked når tilmeldingen åbner."
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting to Zapier:', error);
      toast({
        title: "Fejl",
        description: "Der opstod en fejl. Prøv venligst igen.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">12.250 DKK</p>
          <p className="text-sm text-gray-500">inkl. moms</p>
          <Accordion type="single" collapsible className="w-full mt-2">
            <AccordionItem value="price-details" className="border-none">
              <AccordionTrigger className="px-0 py-0 text-left text-sm underline text-primary hover:text-primary/80 shadow-none bg-transparent font-normal font-sans decoration-[1.5px] focus:ring-0 focus:outline-none !flex !items-center !justify-start gap-2" style={{
              background: 'none',
              boxShadow: 'none'
            }}>
                Forklar prisvariationer
              </AccordionTrigger>
              <AccordionContent className="px-0 pt-2 text-gray-700 text-sm">
                <div>Dobbeltværelse (delt med en anden deltager) er 12.250 DKK per person og du vil dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.  

Single værelse er 14.750 DKK per person - du får dit eget værelse.

Moms er inkluderet i alle priser.<b>Dobbeltværelse (delt med en anden deltager)</b> er 12.250 DKK per person. Du vil dele værelse med en anden deltager - vi vil for så vidt muligt sørge for, at det er en anden fra Trail Squad. Mix af mænd og kvinder kan forekomme.<br /><br />
                  
                  <b>Single værelse</b> er 14.750 DKK per person - du får dit eget værelse.<br /><br />
                  
                  Moms er inkluderet i alle priser.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-1">Registreringsstatus</p>
          <div className="bg-[#F1F0FB] px-3 py-1.5 rounded-full min-w-[140px]">
            <p className="font-cabinet text-sm font-medium text-[#9F9EA1] flex items-center justify-center gap-1">
              <Clock className="w-4 h-4 hidden sm:block" />
              Åbner senere
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-8">
        <h3 className="font-cabinet text-xl font-bold text-charcoal mb-6">
          Få besked når tilmeldingen åbner
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input type="email" placeholder="Indtast din email" value={email} onChange={e => setEmail(e.target.value)} required disabled={isSuccess} className="flex-1 h-[56px] px-6 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-black/20" />
          {isSuccess ? <div className="bg-transparent border-2 border-black text-black h-[56px] px-8 rounded-full flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 animate-fade-in text-black" />
            </div> : <Button type="submit" variant="black" size="xl" disabled={isSubmitting}>
              {isSubmitting ? 'Indsender...' : 'Giv mig besked'}
            </Button>}
        </form>
      </div>
      <div className="-mt-[5px]">
        <CallMeBackCTA />
      </div>
    </div>;
};
export default RibeiraPricingSection2026;