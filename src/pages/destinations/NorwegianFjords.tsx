import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NorwegianFjords = () => {
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
          alt="Norwegian Fjords"
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
          Norwegian Fjords
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Experience the dramatic beauty of Norway's fjords on this unique running 
              adventure. Run along ancient Viking paths, through pristine valleys, and 
              beside spectacular fjords in the land of the midnight sun.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">Trip Details</h2>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Bergen Region, Norway</li>
                <li><strong>Date of run:</strong> August 20, 2024</li>
                <li><strong>Dates of trip:</strong> August 18-23, 2024</li>
                <li><strong>Duration:</strong> 6 days</li>
                <li><strong>Available distances:</strong> 21km, 42km</li>
                <li><strong>Spots available:</strong> 6</li>
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
                <li>Professional mountain guides</li>
                <li>Traditional Norwegian accommodation</li>
                <li>All meals with local cuisine</li>
                <li>Fjord cruise experience</li>
                <li>Transfer from/to Bergen Airport</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorwegianFjords;
