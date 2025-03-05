import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Vesuvio = () => {
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
            <p className="text-lg mb-4">
              Challenge yourself on the historic trails of Mount Vesuvius in this unique ultra marathon event. 
              Run through volcanic landscapes with breathtaking views of the Bay of Naples and experience the 
              perfect blend of natural beauty and ancient history.
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
                <li><strong>Location:</strong> Mount Vesuvius, Naples, Italy</li>
                <li><strong>Date of run:</strong> May 2026</li>
                <li><strong>Duration:</strong> 4 days</li>
                <li><strong>Available distances:</strong> 20km, 42km, 60km</li>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vesuvio;
