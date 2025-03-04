import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NewZealand = () => {
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
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Madeira Island Ultra Trail, Portugal
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Discover the diverse landscapes of New Zealand on foot. From lush forests 
              to volcanic terrains, this adventure will take you through some of the 
              most spectacular running trails in the Southern Hemisphere.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">Trip Details</h2>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Madeira Island, Portugal</li>
                <li><strong>Date of run:</strong> July 15, 2024</li>
                <li><strong>Dates of trip:</strong> July 12-18, 2024</li>
                <li><strong>Duration:</strong> 7 days</li>
                <li><strong>Available distances:</strong> 25km, 42km, 85km</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <button className="w-full bg-terra text-white px-8 py-4 rounded-full font-cabinet font-medium hover:bg-terra/90 transition-colors duration-300">
              Book Your Spot
            </button>
            <div className="bg-stone p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">What's Included</h2>
              <ul className="space-y-2 list-disc pl-4">
                <li>Expert local guides</li>
                <li>Luxury eco-lodge accommodation</li>
                <li>All meals and snacks</li>
                <li>Transportation during the trip</li>
                <li>Cultural experiences with local Maori</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewZealand;
