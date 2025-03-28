import { ArrowLeft, ExternalLink, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { ThumbsUp } from "lucide-react";

const Vesuvio = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  useScrollToTop();
  usePageTitle("Vesuvio Ultra Marathon");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      email,
      source: 'vesuvio_waitlist',
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
          src="/lovable-uploads/09591b2b-8dda-48fb-be79-ab98d16ccd30.png"
          alt="Vesuvio Ultra Marathon trail running"
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
          Vesuvio Ultra Marathon, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Set against the dramatic backdrop of Italy's most iconic volcano, the Vesuvio Ultra Marathon takes you through a unique landscape where ancient history and raw natural power converge. Mount Vesuvius, standing sentinel over the Gulf of Naples, offers runners an unparalleled opportunity to experience one of the world's most historically significant volcanic regions.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  Wind through pristine pine forests, traverse black lava fields, and follow paths carved by centuries of volcanic activity. As you ascend to heights of up to 1,281 meters, each turn reveals breathtaking new vistas - from the sparkling Gulf of Naples to the islands of Capri and Ischia, and the stunning Amalfi Coast stretched out before you.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  This unique race combines the raw power of volcanic terrain with the rich cultural heritage of the Campania region. Whether you choose the 23 km, 45 km, or the ultimate 72 km challenge, each route has been carefully designed to test your endurance while offering an unforgettable journey where each step tells a story of geological wonder and human perseverance.
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
                href="https://www.vesuvioultramarathon.it/en/"
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
                <li><strong>Location:</strong> Mount Vesuvius, Naples, Italy</li>
                <li><strong>Date of race:</strong> May/June (to be determined), 2026</li>
                <li><strong>Trip duration:</strong> 4 days</li>
                <li><strong>Available distances:</strong> 23 km, 45 km, 72 km</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/lKZvRrlkODQ?si=3oCd8QgkfgjZ5EBs"
                title="Vesuvio Ultra Marathon Trail Running"
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

export default Vesuvio;
