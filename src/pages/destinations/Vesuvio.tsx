import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Vesuvio = () => {
  useScrollToTop();
  
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

            <a 
              href="https://www.vesuvioultramarathon.it/en/"
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
                <li><strong>Location:</strong> Mount Vesuvius, Naples, Italy</li>
                <li><strong>Date of run:</strong> May 31, 2026</li>
                <li><strong>Trip duration:</strong> May 29 - June 1, 2026 (4 days)</li>
                <li><strong>Available distances:</strong> 23 km, 45 km, 72 km</li>
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
              <button className="w-full bg-[#FEF7CD] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FEF7CD]/90 transition-colors duration-300">
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

export default Vesuvio;
