
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";

const SwissPeaksTrail = () => {
  useScrollToTop();
  usePageTitle('SwissPeaks Trail');
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/f4d3d6be-2bfe-444a-ab76-ce90fdb7278d.png"
          alt="SwissPeaks Trail"
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
          SwissPeaks Trail, Switzerland
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Immerse yourself in the breathtaking beauty of the Swiss Alps with the SwissPeaks Trail, one of Europe's most spectacular long-distance trail running experiences. This remarkable course takes you through the heart of the Valais canton, offering unparalleled views of 21 peaks over 4,000 meters, including the iconic Matterhorn and Mont Blanc massif.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  As you traverse alpine meadows, cross mountain passes, and follow ancient pathways, you'll experience the diverse microclimate and terrain that make the Swiss Alps a paradise for trail runners. From the rugged high-mountain sections to the charming Swiss villages, each segment of the trail offers a unique glimpse into the natural and cultural heritage of this remarkable region.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  The SwissPeaks Trail offers multiple distance options to suit every level of trail runner. Whether you choose the challenging ultra-distance or a shorter segment, you'll face a rewarding test of endurance as you navigate varying elevations and technical terrain. With a cumulative elevation gain that showcases the true majesty of the Alps, this is an adventure that will push your limits while rewarding you with some of the most stunning panoramic views in the world.
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
                href="https://swisspeaks.ch/?lang=en"
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
                <li><strong>Location:</strong> Valais canton, Switzerland</li>
                <li><strong>Date of race:</strong> September 6-7, 2025</li>
                <li><strong>Trip duration:</strong> September 4-7, 2025 (4 days)</li>
                <li><strong>Available distances:</strong> 21km, 42km, 100km, 170km, 360km</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">12.500 DKK</p>
                  <p className="text-sm text-gray-500">incl. VAT</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trip status</p>
                  <p className="font-cabinet text-xl font-bold text-charcoal">8 spots</p>
                </div>
              </div>
              <PriceQuoteForm 
                destinationName="SwissPeaks Trail" 
                availableDistances={["21km", "42km", "100km", "170km", "360km"]}
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

export default SwissPeaksTrail;
