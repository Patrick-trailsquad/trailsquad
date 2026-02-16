
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";

const destinations = [
  // { name: "Madeira Island Ultra Trail 🇵🇹", href: "/destinations/miut", spots: "Løb afsluttet 🏁" },
  { name: "Trail Ribeira Sacra 🇪🇸", href: "/destinations/ribeira-sacra", spots: "Løb afsluttet 🏁" },
  { name: "Chianti Ultra Trail 🇮🇹", href: "/destinations/chianti", spots: "Åbner senere" },
  { name: "Istria 100 by UTMB 🇭🇷", href: "/destinations/istria", spots: "5 pladser" },
  { name: "Vesuvio Ultra Marathon 🇮🇹", href: "/destinations/vesuvio", spots: "Åbner senere" },
  { name: "Transylvania 100 🇷🇴", href: "/destinations/transylvania", spots: "Billetsalg lukket" },
  { name: "Swiss Alps 100 🇨🇭", href: "/destinations/swiss-alps-100", spots: "9 pladser" },
  { name: "KangNu Running Race 🇬🇱", href: "/destinations/kangnu26", spots: "Åbner senere" },
  { name: "Infinite Trails 🇦🇹", href: "/destinations/infinite-trails", spots: "13 pladser" },
  { name: "Trail Ribeira Sacra 🇪🇸", href: "/destinations/ribeira-sacra-2026", spots: "Åbner senere" },
  { name: "La Boucle de l'Étoile 🇲🇦", href: "/destinations/la-boucle-de-l-etoile", spots: "Åbner senere" },
];

const DestinationLinks = () => {
  const navigateAndScroll = useNavigateAndScroll();
  
  // Filter out Vesuvio, Chianti, and Istria destinations
  const visibleDestinations = destinations.filter(dest => 
    dest.href !== "/destinations/vesuvio" && dest.href !== "/destinations/chianti" && dest.href !== "/destinations/istria"
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateAndScroll(href, 'top');
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {visibleDestinations.map((destination) => (
        <a
          key={destination.href}
          href={destination.href}
          onClick={(e) => handleClick(e, destination.href)}
          className="group flex items-center gap-3 cursor-pointer"
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
        </a>
      ))}
    </div>
  );
};

export default DestinationLinks;
