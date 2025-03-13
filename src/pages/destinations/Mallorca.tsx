import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";

const Mallorca = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/e6c9a5c5-4aa1-45c5-95c3-f74254e22e1a.png"
          alt="Mallorca by UTMB"
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
          Mallorca by UTMB, Spain
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Set in the stunning Serra de Tramuntana mountain range, a UNESCO World Heritage site, 
                  Mallorca by UTMB offers runners an exceptional journey through Mediterranean landscapes. 
                  This challenging trail running event takes place along the GR221, also known as the 
                  "Dry Stone Route," showcasing centuries-old engineering and the island's rich cultural heritage.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  As you traverse the ancient pathways, you'll experience the diverse terrains of Mallorca, 
                  from rugged coastlines to limestone peaks reaching heights of 1,100 meters. The route winds 
                  through traditional mountain villages, past historic monasteries, and along spectacular 
                  cliff-top trails offering breathtaking views of the Mediterranean Sea. The mild climate 
                  and varied terrain make this an ideal destination for both seasoned ultra-runners and 
                  those new to trail running.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  Each course presents its own unique challenges, from the intense 112km ultra-trail to 
                  the more accessible 20km route. Runners will navigate technical mountain paths, ancient 
                  stone steps, and rocky terrain while experiencing elevation changes that test both 
                  physical endurance and mental fortitude. The race's inclusion in the UTMB World Series 
                  ensures top-quality organization and an unforgettable trail running experience in one 
                  of Europe's most beautiful islands.
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
                href="https://mallorca.utmb.world/"
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
                <li><strong>Location:</strong> Sóller, Mallorca, Spain</li>
                <li><strong>Date of race:</strong> November 1, 2025</li>
                <li><strong>Dates of trip:</strong> October 30-November 2, 2025</li>
                <li><strong>Duration:</strong> 4 days</li>
                <li><strong>Available distances:</strong> 20 km, 50 km, 100 km, 100 m</li>
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
                  <p className="font-cabinet text-xl font-bold text-charcoal">6 spots left</p>
                </div>
              </div>
              <PriceQuoteForm 
                destinationName="Mallorca by UTMB"
                availableDistances={["20 km", "50 km", "100 km", "100 m"]}
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
      <Footer />
    </div>
  );
};

export default Mallorca;
