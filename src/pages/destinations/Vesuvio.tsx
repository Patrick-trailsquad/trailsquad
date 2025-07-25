import { ArrowLeft, ExternalLink, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { ThumbsUp } from "lucide-react";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";
import VesuvioInfoBanner from "../../components/destinations/vesuvio/VesuvioInfoBanner";

const Vesuvio = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLinesVisible, setIsLinesVisible] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  useScrollToTop();
  usePageTitle("Vesuvio Ultra Marathon");

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

      <VesuvioInfoBanner />

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
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
          </div>
        </div>
        <div className="mt-12">
          <IncludedAmenities className="bg-transparent" />
        </div>
        
        {/* Decorative Lines Section */}
        <div ref={linesRef} className="relative py-12 mb-16 md:mb-24">
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
        
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default Vesuvio;
