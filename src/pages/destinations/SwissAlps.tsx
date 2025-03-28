
import { ArrowLeft, ExternalLink, Clock, ThumbsUp, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Footer from "../../components/Footer";

const SwissAlps = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  usePageTitle('Gran Trail Courmayeur');
  useScrollToTop();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      email,
      source: 'gtc_waitlist',
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
          src="/lovable-uploads/77fe9c87-3287-4f7a-ba65-68b0b68d853a.png"
          alt="Courmayeur Grand Trail"
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
          Gran Trail Courmayeur, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Embark on an extraordinary adventure through the heart of the Italian Alps at the prestigious Gran Trail Courmayeur. Set against the backdrop of Europe's highest peak, Mont Blanc, this iconic trail running event offers an unparalleled blend of challenging terrain and breathtaking alpine scenery. Wind your way through ancient glacial valleys, pristine mountain lakes, and historic mountain villages that tell tales of centuries-old Alpine culture.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  As you traverse the well-marked trails, you'll experience dramatic elevation changes that reveal new perspectives of the majestic Mont Blanc massif at every turn. The route takes you through flowering meadows in summer bloom and across technical rocky sections that will test your trail running abilities.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  Follow panoramic ridgelines that offer views extending into three countries - Italy, France, and Switzerland. Whether you choose the 30km, 55km, or the ultimate challenge of 100km, each route has been carefully crafted to showcase the most spectacular sections of the Mont Blanc region.
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
                href="https://www.gtcourmayeur.com/en/"
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
                <li><strong>Location:</strong> Courmayeur, Italy</li>
                <li><strong>Date of race:</strong> July (to be determined), 2026</li>
                <li><strong>Trip duration:</strong> 4 days</li>
                <li><strong>Available distances:</strong> 30 km, 55 km, 100 km</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* YouTube video embed at the top of right column */}
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/4dWum9fxE0g?si=Ac4yHBjPyU_DZleF"
                title="Gran Trail Courmayeur"
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
            <div className="bg-stone p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">What's included in the standard package</h2>
              <ul className="space-y-2 list-disc pl-4">
                <li>Entry ticket to the trail run</li>
                <li>Assistance with plane tickets from Copenhagen and back (if other departure airport, let's discuss)</li>
                <li>Transportation from airport to destination hotel (if tickets are organised by Trail Squad)</li>
                <li>Minimum 4 star hotel experience for the duration of the trip (if possible)</li>
                <li>Pre-race briefing with running coach with running and nutrition strategies</li>
              </ul>
            </div>
            <div className="bg-stone p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">What can be added</h2>
              <ul className="space-y-2 list-disc pl-4">
                <li>Dedicated running coach for the group or individually</li>
                <li>Weekly run schedules based on participants' current running form</li>
                <li>Marketing material if used for corporate trips</li>
                <li>Video material for marketing purposes</li>
              </ul>
            </div>
          </div>
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default SwissAlps;
