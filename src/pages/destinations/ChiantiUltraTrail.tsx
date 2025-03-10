import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import PriceQuoteForm from "../../components/PriceQuoteForm";

const ChiantiUltraTrail = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/ce6a399e-3005-4109-a936-5bbeb4762393.png"
          alt="Chianti Ultra Trail"
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
          Chianti Ultra Trail By UTMB, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Experience the breathtaking beauty of the Chianti region as you run through historic vineyards,
                  medieval villages, and rolling hills. This unique ultra trail combines the challenge of trail
                  running with the cultural richness of one of Italy's most famous wine regions.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  The route takes you through the stunning Tuscan landscape, offering panoramic views of
                  endless vineyards, olive groves, and ancient castles. As you traverse the technical trails
                  between the vines, you'll experience the authentic charm of the Chianti region.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  Follow winding paths through historic wine estates and medieval villages, testing your endurance
                  while surrounded by the timeless beauty of Tuscany. Each route is carefully designed to showcase
                  the most spectacular sections of the Chianti wine region.
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
                href="https://www.chiantiultratrail.com"
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
                <li><strong>Location:</strong> Chianti Region, Italy</li>
                <li><strong>Date of race:</strong> March 15, 2026</li>
                <li><strong>Trip duration:</strong> March 13-16, 2026 (4 days)</li>
                <li><strong>Available distances:</strong> 15km, 35km, 60km, 100km</li>
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
                destinationName="Chianti Ultra Trail"
                availableDistances={["15km", "35km", "60km", "100km"]}
              />
            </div>
            <div className="bg-stone p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">What's included in the standard package</h2>
              <ul className="space-y-2 list-disc pl-4">
                <li>Entry ticket to the trail run</li>
                <li>Plane ticket from Copenhagen and back (if other departure airport, let's discuss)</li>
                <li>Transportation from airport to destination hotel</li>
                <li>Minimum 4 star hotel experience for the duration of the trip</li>
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
    </div>
  );
};

export default ChiantiUltraTrail;
