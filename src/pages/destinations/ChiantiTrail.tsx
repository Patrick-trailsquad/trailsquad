
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
import ChiantiAccommodation from "../../components/destinations/chianti/ChiantiAccommodation";
import ChiantiInfoBanner from "../../components/destinations/chianti/ChiantiInfoBanner";

const ChiantiTrail = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  useScrollToTop();
  usePageTitle("Chianti Ultra Trail");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      email,
      source: 'chianti_waitlist',
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
          src="/lovable-uploads/0388aed3-9930-45a5-adc3-3449136a3d30.png"
          alt="Chianti Ultra Trail runner in vineyard"
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

      <ChiantiInfoBanner />

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Chianti Ultra Trail by UTMB, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Experience the enchanting beauty of Tuscany's most renowned wine region at the Chianti Ultra Trail. This unique race takes you through the stunning rolling hills, historic vineyards, and medieval villages that make Chianti one of Italy's most beloved landscapes.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  As you traverse the ancient paths between vineyards and olive groves, you'll experience the authentic charm of Tuscan countryside. The route winds through historic wine estates, past Renaissance villas, and along scenic ridges offering breathtaking views of the Chianti region.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  Choose from multiple distance options as you challenge yourself on this UTMB World Series event. Each route has been carefully designed to showcase the best of Chianti while testing your trail running abilities through varied terrain including vineyard paths, forest trails, and historic stone paths.
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
                href="https://chianti.utmb.world/"
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
            <div className="rounded-xl overflow-hidden aspect-video mb-6">
              <iframe
                src="https://www.youtube.com/embed/i2WF8VcSLCM"
                title="Chianti Ultra Trail Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#F1F0FB] rounded-lg">
                    <h3 className="font-cabinet text-xl font-bold text-charcoal mb-2">Shared Superior Room</h3>
                    <p className="font-cabinet text-3xl font-bold text-charcoal">10.850 DKK</p>
                    <p className="text-sm text-gray-500">incl. VAT</p>
                  </div>
                  <div className="p-6 bg-[#F1F0FB] rounded-lg">
                    <h3 className="font-cabinet text-xl font-bold text-charcoal mb-2">Individual Double Room</h3>
                    <p className="font-cabinet text-3xl font-bold text-charcoal">12.100 DKK</p>
                    <p className="text-sm text-gray-500">incl. VAT</p>
                  </div>
                </div>
                <div className="text-center py-4">
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
        </div>
        <div className="mt-16">
          <IncludedAmenities className="bg-transparent" />
        </div>
        <div className="container mx-auto px-4 py-12">
          <ChiantiAccommodation />
          <BackToDestinationsButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChiantiTrail;
