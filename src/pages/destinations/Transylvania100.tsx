import { ExternalLink, Clock, ThumbsUp } from "lucide-react";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useState, useEffect, useRef } from "react";
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
  const [isLinesVisible, setIsLinesVisible] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const spotsLeft = 13;
  useScrollToTop();
  usePageTitle("Transylvania 100");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLinesVisible) {
          setIsLinesVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (linesRef.current) {
      observer.observe(linesRef.current);
    }

    return () => observer.disconnect();
  }, [isLinesVisible]);
  
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

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
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
        <div className="mt-12">
          <TransylvaniaIncludedAmenities className="bg-transparent" />
        </div>
        
        {/* Decorative Lines Section */}
        <div ref={linesRef} className="relative py-12 mb-16">
          <svg 
            className="absolute top-0 left-0 w-full h-32 md:h-64"
            viewBox="0 0 1200 200" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 180 C100 120 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80"
              fill="none"
              stroke="#FFDC00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ 
                strokeDasharray: '1200',
                strokeDashoffset: isLinesVisible ? '0' : '1200',
                opacity: 0.8,
                transition: 'stroke-dashoffset 2s ease-out'
              }}
            />
            <path
              d="M0 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100"
              fill="none"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ 
                strokeDasharray: '1400',
                strokeDashoffset: isLinesVisible ? '0' : '1400',
                opacity: 0.6,
                transition: 'stroke-dashoffset 2.5s ease-out 0.3s'
              }}
            />
            <path
              d="M50 200 C150 170 250 140 350 120 C450 160 550 180 650 190 C750 140 850 100 950 80"
              fill="none"
              stroke="#FFDC00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ 
                strokeDasharray: '1000',
                strokeDashoffset: isLinesVisible ? '0' : '1000',
                opacity: 0.4,
                transition: 'stroke-dashoffset 2.2s ease-out 0.6s'
              }}
            />
            <path
              d="M0 200 C100 160 200 130 300 110 C400 150 500 170 600 185 C700 130 800 90 900 70"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ 
                strokeDasharray: '900',
                strokeDashoffset: isLinesVisible ? '0' : '900',
                opacity: 0.3,
                transition: 'stroke-dashoffset 1.8s ease-out 0.9s'
              }}
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
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
