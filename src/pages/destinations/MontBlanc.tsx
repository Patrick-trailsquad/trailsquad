
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";

const MontBlanc = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
          alt="Mont Blanc Ultra Trail"
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

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Mont Blanc Ultra Trail, France
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Challenge yourself in one of the most prestigious ultra-trails in the world, 
              circling the Mont Blanc massif through France, Italy, and Switzerland. Experience 
              breathtaking alpine scenery while testing your limits in this legendary race.
            </p>
            <Button 
              asChild
              variant="charcoal"
              size="md"
              className="mb-8"
            >
              <a 
                href="#"
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
                <li><strong>Location:</strong> Chamonix, France</li>
                <li><strong>Date of race:</strong> June 20, 2025</li>
                <li><strong>Trip duration:</strong> June 18-21, 2025 (4 days)</li>
                <li><strong>Available distances:</strong> 40km, 90km, 170km</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">10.000 DKK</p>
                  <p className="text-sm text-gray-500">incl. VAT</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trip status</p>
                  <p className="font-cabinet text-xl font-bold text-charcoal">+15 spots</p>
                </div>
              </div>
              <PriceQuoteForm 
                destinationName="Mont Blanc Ultra Trail" 
                availableDistances={["40km", "90km", "170km"]}
              />
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

export default MontBlanc;
