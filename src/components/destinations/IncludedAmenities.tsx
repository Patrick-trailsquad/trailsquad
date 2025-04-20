
import React from 'react';
import { Bath, Utensils, Shirt, Users } from 'lucide-react';

interface AmenityProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  isLucideIcon?: boolean;
}

const Amenity = ({ icon, title, description, isLucideIcon = false }: AmenityProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3">
        {isLucideIcon ? (
          <div className="w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <img src={icon as string} alt={title} className="w-16 h-16" />
        )}
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
      description: "4 star hotel with half board"
    },
    {
      icon: "/lovable-uploads/9e398900-45e9-4cd0-b353-b07f3c3bfcfb.png",
      title: "Local Cuisine",
      description: "Traditional Spanish meals"
    },
    {
      icon: "/lovable-uploads/04b6b51f-4515-415d-b591-7608f760c49d.png",
      title: "Coaching",
      description: "Pre-race briefing and strategy"
    },
    {
      icon: "/lovable-uploads/a18f161c-12fd-4a39-819c-2ffac95a8982.png",
      title: "Social",
      description: "Social jog and post race celebrations"
    },
    {
      icon: "/lovable-uploads/f7ffb7d1-9191-46d5-ae2a-7b1a4d9c5350.png",
      title: "Recovery",
      description: "Post-race massage therapy"
    },
    {
      icon: "/lovable-uploads/1c4eceb7-97ce-45ca-b50f-0844491ca83a.png",
      title: "Race Kit",
      description: "Official event merchandise"
    },
    {
      icon: "/lovable-uploads/91b914ac-eb58-43d2-b8b9-c464cad202da.png",
      title: "Community",
      description: "Connect with fellow runners"
    }
  ];

  return (
    <div className={`${className}`}>
      <h2 className="font-cabinet text-2xl font-bold mb-8 text-center">What's Included in Your Package</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 container mx-auto px-4">
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
