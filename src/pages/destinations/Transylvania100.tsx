import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Transylvania100 = () => {
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/609b48d8-13b5-4f5b-b65e-9e75141d6c2d.png"
          alt="Transylvania 100 trail running"
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
          Transylvania 100, Romania
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Experience the mystical challenge of the Transylvania 100 trail running event in Romania. 
              Wind through the dramatic Carpathian Mountains, past medieval castles, and through pristine 
              wilderness in this unforgettable ultra-running adventure.
            </p>
            <p className="text-lg mb-4">
              This legendary race takes you through some of Romania's most spectacular landscapes, 
              from dense forests to rugged mountain peaks. You'll experience the thrill of running 
              through historic paths where legends were born, making this not just a race, but a 
              journey through time and nature.
            </p>
            <a 
              href="#"
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
                <li><strong>Location:</strong> Carpathian Mountains, Romania</li>
                <li><strong>Date of run:</strong> May 15, 2025</li>
                <li><strong>Trip duration:</strong> May 13-16, 2025 (4 days)</li>
                <li><strong>Available distances:</strong> 20km, 50km, 100km</li>
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

export default Transylvania100;
