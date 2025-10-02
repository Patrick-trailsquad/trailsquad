
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";

const NewZealand = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[80vh]">
        <img
          src="/lovable-uploads/af5c6191-258b-4a41-9a6d-7e722d1dad97.png"
          alt="Madeira Island Ultra Trail"
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
          Madeira Island Ultra Trail, Portugal
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Embark on an extraordinary running adventure through the stunning landscapes of Madeira Island, 
              where the legendary MIUT (Madeira Island Ultra Trail) awaits. This prestigious race takes you 
              on an unforgettable journey from the northern shores of Porto Moniz to the southern town of 
              Machico, traversing the entire island through its most breathtaking terrain. You'll experience 
              the thrill of running from sea level to Pico Ruivo, Madeira's highest peak at 1,862 meters, 
              where the Atlantic Ocean stretches endlessly in every direction.
            </p>
            <p className="text-lg mb-4">
              The trail combines technical mountain paths, ancient levada waterways, and lush laurel forests 
              that are UNESCO World Heritage sites. As you navigate through diverse microclimates, you'll 
              encounter everything from misty mountain peaks to subtropical valleys, making this one of 
              Europe's most unique and challenging ultra-trail experiences. Whether you're an experienced 
              ultra-runner or taking on your first long-distance trail challenge, MIUT offers various 
              distances to suit your ambitions while showcasing the raw beauty of this Portuguese paradise.
            </p>
            <Button 
              asChild
              variant="charcoal"
              size="md"
              className="mb-8"
            >
              <a 
                href="https://www.miutmadeira.com/en/"
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
                <li><strong>Location:</strong> Funchal, Madeira Island, Portugal</li>
                <li><strong>Date of run:</strong> April 26, 2025</li>
                <li><strong>Trip duration:</strong> April 24-27, 2025 (4 days)</li>
                <li><strong>Available distances:</strong> 16 km, 42 km, 60 km, 85km, 115 km</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trip status</p>
                  <p className="font-cabinet text-2xl font-bold text-charcoal">Sold Out</p>
                  <p className="text-sm text-gray-500">Check back later for new dates</p>
                </div>
              </div>
              <button disabled className="w-full bg-gray-300 text-white px-8 py-4 rounded-full font-cabinet font-medium cursor-not-allowed">
                No More Tickets
              </button>
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
          </div>
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default NewZealand;
