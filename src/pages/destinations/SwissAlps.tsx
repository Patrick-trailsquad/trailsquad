
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";

const SwissAlps = () => {
  usePageTitle('Grand Trail Courmayeur');
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/77fe9c87-3287-4f7a-ba65-68b0b68d853a.png"
          alt="Courmayeur Grand Trail"
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
          Grand Trail Courmayeur, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Embark on an extraordinary adventure through the heart of the Italian Alps at the prestigious Grand Trail Courmayeur. Set against the backdrop of Europe's highest peak, Mont Blanc, this iconic trail running event offers an unparalleled blend of challenging terrain and breathtaking alpine scenery. Wind your way through ancient glacial valleys, pristine mountain lakes, and historic mountain villages that tell tales of centuries-old Alpine culture.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  As you traverse the well-marked trails, you'll experience dramatic elevation changes that reveal new perspectives of the majestic Mont Blanc massif at every turn. The route takes you through flowering meadows in summer bloom and across technical rocky sections that will test your trail running abilities.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  Follow panoramic ridgelines that offer views extending into three countries - Italy, France, and Switzerland. Whether you choose the 30km, 55km, or the ultimate challenge of 100km, each route has been carefully crafted to showcase the most spectacular sections of the Mont Blanc region.
                </p>
              </div>
            </div>

            <a 
              href="https://www.gtcourmayeur.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg hover:bg-charcoal/90 transition-colors mb-6"
            >
              Visit Official Race Website
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">Trip Details</h2>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Courmayeur, Italy</li>
                <li><strong>Date of run:</strong> July 12, 2025</li>
                <li><strong>Trip duration:</strong> July 10-13, 2025 (4 days)</li>
                <li><strong>Available distances:</strong> 30 km, 55 km, 100 km</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">7.500 DKK</p>
                  <p className="text-sm text-gray-500">incl. VAT</p>
                </div>
              </div>
              <button className="w-full bg-terra text-white px-8 py-4 rounded-full font-cabinet font-medium hover:bg-terra/90 transition-colors duration-300">
                Book Your Spot
              </button>
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
      </div>
    </div>
  );
};

export default SwissAlps;
