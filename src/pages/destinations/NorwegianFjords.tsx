import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HotelTile from "../../components/destinations/HotelTile";

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
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <button className="w-full bg-terra text-white px-8 py-4 rounded-full font-cabinet font-medium hover:bg-terra/90 transition-colors duration-300">
              Book Your Spot
            </button>
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

        <div className="mt-16">
          <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-8">
            Hotels we work with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <HotelTile
              name="Hotel Ullensvang"
              imageUrl="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
            />
            <HotelTile
              name="Fretheim Hotel"
              imageUrl="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
            />
            <HotelTile
              name="Storfjord Hotel"
              imageUrl="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorwegianFjords;
