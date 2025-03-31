
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";

const MIUT = () => {
  useScrollToTop();
  usePageTitle('Madeira Island Ultra Trail');
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
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
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-8">
            Madeira Island Ultra Trail, Portugal
          </h1>
        </div>
      </div>

      {/* Yellow banner underneath hero */}
      <div className="w-full bg-[#FFDC00] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Location</h1>
              <h2 className="font-cabinet text-lg text-charcoal">Funchal, Madeira Island, Portugal</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Race Day</h1>
              <h2 className="font-cabinet text-lg text-charcoal">April 26, 2025</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Trip Duration</h1>
              <h2 className="font-cabinet text-lg text-charcoal">April 24-27, 2025 (4 days)</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distances</h1>
              <h2 className="font-cabinet text-lg text-charcoal">16km, 42km, 60km, 85km, 115km</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Embark on an extraordinary running adventure through the stunning landscapes of Madeira Island, 
                  where the legendary MIUT (Madeira Island Ultra Trail) awaits. This prestigious race takes you 
                  on an unforgettable journey from the northern shores of Porto Moniz to the southern town of 
                  Machico, traversing the entire island through its most breathtaking terrain.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  The trail combines technical mountain paths, ancient levada waterways, and lush laurel forests 
                  that are UNESCO World Heritage sites. As you navigate through diverse microclimates, you'll 
                  encounter everything from misty mountain peaks to subtropical valleys, making this one of 
                  Europe's most unique and challenging ultra-trail experiences.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  With challenging elevation changes and technical terrain, MIUT offers distances for everyone from 
                  the 16km Mini MIUT to the epic 115km ultra that climbs to Pico Ruivo, Madeira's highest peak at 
                  1,862 meters, where the Atlantic Ocean stretches endlessly in every direction.
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
                href="https://www.miutmadeira.com/en/"
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
                src="https://www.youtube.com/embed/xFbDmDJVZpI?si=9iSfgpnVVxAYwuDA"
                title="Madeira Island Ultra Trail"
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
                  <p className="font-cabinet text-4xl font-bold text-charcoal">9.500 DKK</p>
                  <p className="text-sm text-gray-500">incl. VAT</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trip status</p>
                  <p className="font-cabinet text-xl font-bold text-charcoal">8 spots</p>
                </div>
              </div>
              <PriceQuoteForm 
                destinationName="Madeira Island Ultra Trail"
                availableDistances={["16km", "42km", "60km", "85km", "115km"]}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <IncludedAmenities className="bg-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h1 className="font-cabinet text-3xl font-bold text-charcoal mb-2">Savoy Palace</h1>
              <h2 className="font-cabinet text-xl text-terra mb-4">Funchal, Madeira</h2>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-md text-gray-600">5-Star Hotel</span>
              </div>
              <p className="text-lg">
                Located in Funchal's city center, the luxurious Savoy Palace offers breathtaking ocean views and 
                elegant accommodations. Enjoy innovative cuisine at the hotel's restaurants, relax in the 
                infinity pool overlooking the Atlantic, and recover in the world-class spa after your trail 
                adventure. Perfect for both pre-race preparation and post-race relaxation.
              </p>
            </div>
            <div className="h-[400px]">
              <img 
                src="/lovable-uploads/ce6a399e-3005-4109-a936-5bbeb4762393.png" 
                alt="Savoy Palace Hotel in Madeira" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default MIUT;
