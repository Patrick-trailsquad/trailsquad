
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import IconList from "../../components/destinations/IconList";

const Dolomites = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
          alt="Dolomites Skyrace"
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
          Dolomites Skyrace, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Experience the breathtaking beauty of the Italian Dolomites in this challenging skyrace. 
              Run through dramatic limestone peaks, historic WWI trails, and pristine alpine meadows 
              in one of Europe's most stunning mountain ranges.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">Trip Details</h2>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Dolomites, Italy</li>
                <li><strong>Date of run:</strong> September 15, 2024</li>
                <li><strong>Dates of trip:</strong> September 13-16, 2024</li>
                <li><strong>Duration:</strong> 4 days</li>
                <li><strong>Available distances:</strong> 22km, 45km</li>
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

            <IconList 
              title="What's included in the standard package"
              items={[
                { type: 'entry', text: "Entry ticket to the trail run" },
                { type: 'travel', text: "Assistance with plane tickets from Copenhagen and back (if other departure airport, let's discuss)" },
                { type: 'transport', text: "Transportation from airport to destination hotel (if tickets are organised by Trail Squad)" },
                { type: 'hotel', text: "Minimum 4 star hotel experience for the duration of the trip (if possible)" },
                { type: 'coaching', text: "Pre-race briefing with running coach with running and nutrition strategies" }
              ]}
            />
            
            <IconList 
              title="What can be added"
              items={[
                { type: 'coaching', text: "Dedicated running coach for the group or individually" },
                { type: 'schedule', text: "Weekly run schedules based on participants' current running form" },
                { type: 'marketing', text: "Marketing material if used for corporate trips" },
                { type: 'video', text: "Video material for marketing purposes" }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dolomites;
