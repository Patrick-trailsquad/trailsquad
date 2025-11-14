
import { Link } from "react-router-dom";

const destinations = [
  // { name: "Madeira Island Ultra Trail", href: "/destinations/miut", spots: "Løb afsluttet 🏁" },
  { name: "Trail Ribeira Sacra", href: "/destinations/ribeira-sacra", spots: "Løb afsluttet 🏁" },
  { name: "Trail Ribeira Sacra 2026", href: "/destinations/ribeira-sacra-2026", spots: "Åbner senere" },
  { name: "Chianti Ultra Trail", href: "/destinations/chianti", spots: "Åbner senere" },
  { name: "Istria 100 by UTMB", href: "/destinations/istria", spots: "5 pladser" },
  { name: "Vesuvio Ultra Marathon", href: "/destinations/vesuvio", spots: "Åbner senere" },
  { name: "Transylvania 100", href: "/destinations/transylvania", spots: "12 pladser" },
  { name: "Swiss Alps 100", href: "/destinations/swiss-alps-100", spots: "11 pladser" },
  { name: "Infinite Trails", href: "/destinations/infinite-trails", spots: "13 pladser" },
  { name: "La Boucle de l'Étoile", href: "/destinations/la-boucle-de-l-etoile", spots: "Åbner senere" },
];

const DestinationLinks = () => {
  // Filter out Vesuvio, Chianti, and Istria destinations
  const visibleDestinations = destinations.filter(dest => 
    dest.href !== "/destinations/vesuvio" && dest.href !== "/destinations/chianti" && dest.href !== "/destinations/istria"
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
