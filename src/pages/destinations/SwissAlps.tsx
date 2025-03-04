import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SwissAlps = () => {
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
          Courmayeur Grand Trail, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Join us for an unforgettable running experience through the majestic Swiss Alps. 
              Experience breathtaking mountain views, crystal-clear lakes, and challenging trails 
              that will test your endurance and reward you with stunning vistas.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">Trip Details</h2>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Courmayeur, Italy</li>
                <li><strong>Date of run:</strong> June 25, 2024</li>
                <li><strong>Dates of trip:</strong> June 23-27, 2024</li>
                <li><strong>Duration:</strong> 5 days</li>
                <li><strong>Available distances:</strong> 30km, 50km, 100km</li>
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
                <li>Professional trail guides</li>
                <li>Accommodation in mountain lodges</li>
                <li>All meals during the trip</li>
                <li>Emergency support</li>
                <li>Photography service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwissAlps;
