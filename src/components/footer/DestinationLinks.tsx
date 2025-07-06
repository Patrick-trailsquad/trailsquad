
import { Link } from "react-router-dom";

const destinations = [
  { name: "Madeira Island Ultra Trail", href: "/destinations/miut", spots: "Race finished 🏁" },
  { name: "Trail Ribeira Sacra", href: "/destinations/ribeira-sacra", spots: "8 spots" },
  { name: "Chianti Ultra Trail", href: "/destinations/chianti", spots: "Opens later" },
  { name: "Vesuvio Ultra Marathon", href: "/destinations/vesuvio", spots: "Opens later" },
  { name: "Transylvania 100", href: "/destinations/transylvania", spots: "13 spots" },
  { name: "Zugspitz Ultratrail", href: "/destinations/zugspitz", spots: "15 spots" },
  { name: "Gran Trail Courmayeur", href: "/destinations/gtc", spots: "Opens later" },
];

const DestinationLinks = () => {
  // Filter out Vesuvio and Chianti destinations
  const visibleDestinations = destinations.filter(dest => 
    dest.href !== "/destinations/vesuvio" && dest.href !== "/destinations/chianti"
  );

  return (
    <div className="grid grid-cols-1 gap-4">
      {visibleDestinations.map((destination) => (
        <Link
          key={destination.href}
          to={destination.href}
          className="group flex items-center gap-3"
        >
          <div className="text-gray-600 hover:text-terra transition-colors duration-200 text-sm">
            {destination.name}
          </div>
          <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
            destination.spots === "Race finished 🏁" 
              ? "bg-yellow-100 text-yellow-800 border border-yellow-300" 
              : destination.spots === "Opens later"
              ? "bg-gray-100 text-gray-600"
              : "bg-yellow-400 text-black"
          }`}>
            {destination.spots}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default DestinationLinks;
