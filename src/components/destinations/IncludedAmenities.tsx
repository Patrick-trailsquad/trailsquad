
import React from 'react';

interface AmenityProps {
  icon: string;
  title: string;
  description: string;
}

const Amenity = ({ icon, title, description }: AmenityProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3">
        <img src={icon} alt={title} className="w-16 h-16" />
      </div>
      <h4 className="font-cabinet text-lg font-bold mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

interface IncludedAmenitiesProps {
  className?: string;
}

const IncludedAmenities = ({ className = "" }: IncludedAmenitiesProps) => {
  const amenities = [
    {
      icon: "/lovable-uploads/a372fe5f-3385-44a7-bb8b-4961448afc3d.png",
      title: "Race Entry",
      description: "Official entry to the trail run"
    },
    {
      icon: "/lovable-uploads/38b791a4-b1f2-46b4-94e9-3a846f425922.png",
      title: "Flights",
      description: "Round trip from Copenhagen"
    },
    {
      icon: "/lovable-uploads/c84fb355-d0d8-4186-98d2-586a852eff71.png",
      title: "Transportation",
      description: "Airport transfers to accommodation"
    },
    {
      icon: "/lovable-uploads/ba002ac9-1745-47a1-a01f-ca8bfa53b60d.png",
      title: "Luxury Hotel",
      description: "4-star accommodation during your stay"
    },
    {
      icon: "/lovable-uploads/a18f161c-12fd-4a39-819c-2ffac95a8982.png",
      title: "Coaching",
      description: "Pre-race briefing and strategy"
    }
  ];

  return (
    <div className={`bg-white p-8 rounded-xl shadow-sm ${className}`}>
      <h2 className="font-cabinet text-2xl font-bold mb-8 text-center">What's Included in Your Package</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {amenities.map((amenity, index) => (
          <Amenity
            key={index}
            icon={amenity.icon}
            title={amenity.title}
            description={amenity.description}
          />
        ))}
      </div>
    </div>
  );
};

export default IncludedAmenities;
