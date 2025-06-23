import { ExternalLink, Clock, ThumbsUp } from "lucide-react";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";
import TransylvaniaInfoBanner from "../../components/destinations/transylvania/TransylvaniaInfoBanner";
import TransylvaniaAccommodation from "../../components/destinations/transylvania/TransylvaniaAccommodation";
import { useIsMobile } from "../../hooks/use-mobile";
import TransylvaniaHero from "../../components/destinations/transylvania/TransylvaniaHero";
import TransylvaniaIncludedAmenities from "../../components/destinations/transylvania/TransylvaniaIncludedAmenities";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Transylvania100 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const spotsLeft = 13;
  useScrollToTop();
  usePageTitle("Transylvania 100");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      email,
      source: 'transylvania_waitlist',
      submitted_at: new Date().toISOString()
    };
    
    console.log('Submitting to Zapier:', payload);
    
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/21931910/2l4yeck/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });
      
      console.log('Zapier response:', response);
      
      setEmail('');
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Thanks for signing up. We'll notify you when registration opens!"
      });
    } catch (error) {
      console.error('Error submitting to Zapier:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone">
      <TransylvaniaHero />

      <TransylvaniaInfoBanner />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Set in the mystical heart of Romania's Carpathian Mountains, the Transylvania 100 
                  offers runners an extraordinary journey through one of Europe's most legendary 
                  landscapes. This challenging ultra trail winds through dense forests, past medieval 
                  castles, and along dramatic mountain ridges, all within sight of the iconic Bran 
                  Castle, known worldwide as "Dracula's Castle."
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  As you traverse this historic route, you'll experience the raw beauty of the 
                  Carpathians while running through pristine wilderness and traditional Romanian 
                  villages. The trail combines technical mountain sections with scenic forest paths, 
                  offering a perfect blend of challenge and natural beauty. Each kilometer brings new 
                  views of the surrounding peaks and valleys, creating an unforgettable mountain 
                  running experience.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  This legendary race tests both physical endurance and mental resilience as you 
                  navigate varying terrains and weather conditions. Whether you choose the 20km, 
                  30km, 50km, 80km, or the ultimate 100km challenge, each route has been carefully 
                  designed to showcase the most spectacular sections of the Carpathian Mountains 
                  while pushing your limits as a trail runner.
                </p>
              </div>
            </div>

            <Button 
              asChild
              variant="charcoal"
              size="md"
              className="mb-8"
            >
              <a 
                href="https://www.transylvania100k.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit Official Race Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/KYjEArAHdiY?si=VyqXLw-q6sxCgPIJ"
                title="Transylvania 100 Trail Running"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="col-span-2 space-y-1">
                  <p className="text-sm text-gray-600">Prices start at</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">
                    8.250 DKK <span className="text-sm text-gray-500">incl. VAT</span>
                  </p>
                  <Accordion type="single" collapsible className="w-full mt-2">
                    <AccordionItem value="price-details" className="border-none">
                      <AccordionTrigger
                        className="px-0 py-0 text-left text-sm underline text-primary hover:text-primary/80 shadow-none bg-transparent font-normal font-sans decoration-[1.5px] after:hidden focus:ring-0 focus:outline-none"
                        style={{ background: 'none', boxShadow: 'none' }}
                      >
                        Explain price variations
                      </AccordionTrigger>
                      <AccordionContent className="px-0 pt-2 text-gray-700 text-sm">
                        <div>
                          The price for a <b>Shared Swiss Grand Room</b> is 8.250 DKK per person and you will share the room with someone from your own group. This means that you cannot book a shared room if you join solo.<br /><br />
                          The price for an <b>Individual Swiss Grand Room</b> is 11.500 DKK.<br /><br />
                          VAT is included in all prices.
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Trip status</p>
                  <p className="font-cabinet text-xl font-bold text-charcoal">{spotsLeft} spots left</p>
                </div>
              </div>
              <PriceQuoteForm 
                destinationName="Transylvania 100"
                availableDistances={["20km", "30km", "50km", "80km", "100km"]}
                maxParticipants={spotsLeft}
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <TransylvaniaIncludedAmenities className="bg-transparent" />
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className={isMobile ? "mb-8" : ""}>
            <TransylvaniaAccommodation />
          </div>
          <BackToDestinationsButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Transylvania100;
