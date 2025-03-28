import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";

const GrandRaidCathares = () => {
  useScrollToTop();
  usePageTitle('Grand Raid des Cathares');
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/b1a8a192-9867-4c4b-bf05-de316bf2498f.png"
          alt="Grand Raid des Cathares Mountain Trail"
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
          Grand Raid des Cathares, France
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Experience the majestic landscapes of the Cathar Country in southern France with the Grand Raid des Cathares. This stunning event takes you through the rugged and historical region of Languedoc-Roussillon, offering breathtaking panoramic views, ancient Cathar castles, and challenging mountain terrain that combines natural beauty with rich historical significance.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  As you traverse the historic paths of the Cathar region, you'll immerse yourself in a unique blend of French medieval history and stunning natural landscapes. The route winds through dramatic gorges, medieval villages, and along mountain ridges that provide spectacular views across the Pyrenees and Mediterranean. Follow in the footsteps of the Cathars while testing your endurance on these ancient trails.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  The Grand Raid des Cathares offers multiple distance options for all levels of trail runners. Whether you choose the shorter course or challenge yourself with the legendary longer distance, you'll face a rewarding test of endurance as you navigate technical sections, climb historic passes, and run through diverse terrain. With excellent organization and the spirit of the Cathars guiding you, this is an adventure that perfectly combines history and sport.
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
                href="https://www.grandraid-cathares.fr/"
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
                <li><strong>Location:</strong> Languedoc-Roussillon, Southern France</li>
                <li><strong>Date of race:</strong> October 24-25, 2025</li>
                <li><strong>Trip duration:</strong> October 22-26, 2025 (4 days)</li>
                <li><strong>Available distances:</strong> 12km, 25km, 40km, 63km, 101km, 161km</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">7.000 DKK</p>
                  <p className="text-sm text-gray-500">incl. VAT</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trip status</p>
                  <p className="font-cabinet text-xl font-bold text-charcoal">15 spots</p>
                </div>
              </div>
              <PriceQuoteForm 
                destinationName="Grand Raid des Cathares" 
                availableDistances={["12km", "25km", "40km", "63km", "101km", "161km"]}
              />
            </div>
            <div className="bg-stone p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">What's included in the standard package</h2>
              <ul className="space-y-2 list-disc pl-4">
                <li>Entry ticket to the trail run</li>
                <li>Plane ticket from Copenhagen and back (if other departure airport, let's discuss)</li>
                <li>Transportation from airport to destination hotel (if plane tickets are organised by Trail Squad)</li>
                <li>Minimum 4 star hotel experience for the duration of the trip (if possible)</li>
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

export default GrandRaidCathares;
