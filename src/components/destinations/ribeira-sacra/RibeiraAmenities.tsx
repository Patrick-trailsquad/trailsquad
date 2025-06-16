
import React from 'react';
import { Plane, Users, Utensils, Car, Bed, MapPin } from "lucide-react";

interface RibeiraAmenitiesProps {
  className?: string;
}

const RibeiraAmenities = ({ className = "" }: RibeiraAmenitiesProps) => {
  const amenities = [
    {
      icon: <Plane className="w-6 h-6 text-terra" />,
      title: "Flight to Spain",
      description: "Return flights included from Copenhagen"
    },
    {
      icon: <Users className="w-6 h-6 text-terra" />,
      title: "Expert support",
      description: "Trail Squad guide throughout the trip"
    },
    {
      icon: <Utensils className="w-6 h-6 text-terra" />,
      title: "Breakfasts and dinners included",
      description: "Half board meal plan throughout your stay"
    },
    {
      icon: <Car className="w-6 h-6 text-terra" />,
      title: "Ground transport",
      description: "Airport transfers and race day shuttles"
    },
    {
      icon: <Bed className="w-6 h-6 text-terra" />,
      title: "4-star hotel accommodation",
      description: "Comfortable rooms with all amenities"
    },
    {
      icon: <MapPin className="w-6 h-6 text-terra" />,
      title: "Race entry included",
      description: "Registration and timing chip provided"
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What's Included
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for an unforgettable trail running experience in Spain
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {amenity.icon}
                </div>
                <div>
                  <h3 className="font-cabinet text-lg font-semibold text-charcoal mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RibeiraAmenities;
