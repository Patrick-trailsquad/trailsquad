
import { Link } from "react-router-dom";

const destinations = [
  { name: "Madeira Island Ultra Trail", href: "/destinations/miut", spots: "Løb afsluttet 🏁" },
  { name: "Trail Ribeira Sacra", href: "/destinations/ribeira-sacra", spots: "Billetsalg lukket" },
  { name: "Chianti Ultra Trail", href: "/destinations/chianti", spots: "Åbner senere" },
  { name: "Istria 100 by UTMB", href: "/destinations/istria", spots: "5 pladser" },
  { name: "Vesuvio Ultra Marathon", href: "/destinations/vesuvio", spots: "Åbner senere" },
  { name: "Transylvania 100", href: "/destinations/transylvania", spots: "13 pladser" },
  { name: "Zugspitz Ultratrail", href: "/destinations/zugspitz", spots: "15 pladser" },
  { name: "Gran Trail Courmayeur", href: "/destinations/gtc", spots: "Åbner senere" },
  { name: "Infinite Trails", href: "/destinations/infinite-trails", spots: "13 pladser" },
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
            destination.spots === "Løb afsluttet 🏁" 
              ? "bg-yellow-100 text-yellow-800 border border-yellow-300" 
              : destination.spots === "Åbner senere"
              ? "bg-gray-100 text-gray-600"
              : destination.spots === "Billetsalg lukket"
              ? "bg-orange text-orange-foreground"
              : "bg-[#FFDC00] text-black"
          }`}>
            {destination.spots}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default DestinationLinks;
