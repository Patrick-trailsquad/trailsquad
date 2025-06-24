
import { Link } from "react-router-dom";

const destinations = [
  { name: "Madeira Island Ultra Trail", href: "/destinations/miut" },
  { name: "Trail Ribeira Sacra", href: "/destinations/ribeira-sacra" },
  { name: "Chianti Ultra Trail", href: "/destinations/chianti" },
  { name: "Vesuvio Ultra Marathon", href: "/destinations/vesuvio" },
  { name: "Transylvania 100", href: "/destinations/transylvania" },
  { name: "Zugspitz Ultratrail", href: "/destinations/zugspitz" },
  { name: "Gran Trail Courmayeur", href: "/destinations/gtc" },
];

const DestinationLinks = () => {
  // Filter out Vesuvio destination to match the main destinations section
  const visibleDestinations = destinations.filter(dest => dest.href !== "/destinations/vesuvio");

  return (
    <div className="grid grid-cols-1 gap-3">
      {visibleDestinations.map((destination) => (
        <Link
          key={destination.href}
          to={destination.href}
          className="text-gray-600 hover:text-terra transition-colors duration-200 text-sm"
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
};

export default DestinationLinks;
