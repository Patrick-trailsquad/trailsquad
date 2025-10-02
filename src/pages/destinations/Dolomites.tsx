
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import IconList from "../../components/destinations/IconList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Dolomites = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[80vh]">
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

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
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
          </div>
        </div>

        {/* Hotel Section with Carousel */}
        <div className="mt-16 bg-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                        alt="Hotel Ciasa Salares exterior" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                        alt="Hotel Ciasa Salares view" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                        alt="Hotel Ciasa Salares room" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h1 className="font-cabinet text-3xl font-bold text-charcoal mb-2">Hotel Ciasa Salares</h1>
              <h2 className="font-cabinet text-xl text-terra mb-4">Alta Badia, South Tyrol</h2>
              <p className="text-lg">
                This elegant family-run hotel offers the perfect blend of alpine tradition and modern luxury in the heart of the Dolomites.
                With stunning mountain views from every window, spacious rooms decorated with local wood, and exceptional farm-to-table dining,
                Ciasa Salares provides the ideal base for your Dolomites adventure. After your run, relax in the wellness center with saunas, 
                steam baths, and treatment rooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dolomites;
