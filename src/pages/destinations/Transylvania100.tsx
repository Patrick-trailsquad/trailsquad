import { ArrowLeft, ExternalLink, Clock, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";

const Transylvania100 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
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
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/a7015d7e-4a4a-418f-b141-b8b7b6ba7528.png"
          alt="Transylvania 100 trail running in the Carpathian Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-stone transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Transylvania 100, Romania
        </h1>
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

            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">Trip Details</h2>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Carpathian Mountains, Romania</li>
                <li><strong>Date of race:</strong> May (to be determined), 2026</li>
                <li><strong>Trip duration:</strong> 4 days</li>
                <li><strong>Available distances:</strong> 20km, 30km, 50km, 80km, 100km</li>
              </ul>
            </div>
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
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">10.000 DKK</p>
                  <p className="text-sm text-gray-500">incl. VAT</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Registration status</p>
                  <div className="bg-[#F1F0FB] px-3 py-1.5 rounded-full">
                    <p className="font-cabinet text-sm font-medium text-[#9F9EA1] flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Opens later
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center py-8">
                <h3 className="font-cabinet text-xl font-bold text-charcoal mb-6">Get notified when registration opens</h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSuccess}
                    placeholder="Enter your email"
                    className="flex-1 h-[56px] px-6 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                  {isSuccess ? (
                    <div className="bg-transparent border-2 border-black text-black h-[56px] px-8 rounded-full flex items-center justify-center">
                      <ThumbsUp className="w-6 h-6 animate-fade-in text-black" />
                    </div>
                  ) : (
                    <Button 
                      type="submit"
                      variant="black"
                      size="xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Notify me'}
                    </Button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <IncludedAmenities className="bg-transparent" />
        </div>
        
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default Transylvania100;
