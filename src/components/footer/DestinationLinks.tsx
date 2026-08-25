
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";

const destinations = [
  // { name: "Madeira Island Ultra Trail 🇵🇹", href: "/destinations/miut", spots: "Løb afsluttet 🏁", year: "2025" },
  { name: "Trail Ribeira Sacra 🇪🇸", href: "/destinations/ribeira-sacra", spots: "Løb afsluttet 🏁", year: "2025" },
  { name: "Chianti Ultra Trail 🇮🇹", href: "/destinations/chianti", spots: "Åbner senere", year: "2026" },
  { name: "Istria 100 by UTMB 🇭🇷", href: "/destinations/istria", spots: "5 pladser", spotsOriginal: "16", year: "2026" },
  { name: "Vesuvio Ultra Marathon 🇮🇹", href: "/destinations/vesuvio", spots: "Åbner senere", year: "2026" },
  { name: "Transylvania 100 🇷🇴", href: "/destinations/transylvania", spots: "Løb afsluttet 🏁", year: "2026" },
  { name: "Swiss Alps 100 🇨🇭", href: "/destinations/swiss-alps-100", spots: "Løb afsluttet 🏁", year: "2026" },
  { name: "KangNu Running Race 🇬🇱", href: "/destinations/kangnu26", spots: "Løb afsluttet 🏁", year: "2026" },
  { name: "Infinite Trails 🇦🇹", href: "/destinations/infinite-trails", spots: "Billetsalg lukket", year: "2026" },
  { name: "Fýri Trail 🇳🇴", href: "/destinations/fyri26", spots: "Åbner senere", year: "2026" },
  { name: "Trail Ribeira Sacra 🇪🇸", href: "/destinations/ribeira-sacra-2026", spots: "8 pladser", spotsOriginal: "14", year: "2026" },
  { name: "La Boucle de l'Étoile 🇲🇦", href: "/destinations/la-boucle-de-l-etoile", spots: "Åbner senere", year: "2026" },
  { name: "Transylvania 100 🇷🇴", href: "/destinations/transylvania27", spots: "Åbner senere", year: "2027" },
];

const DestinationLinks = () => {
  const navigateAndScroll = useNavigateAndScroll();
  
  // Filter out Vesuvio, Chianti, Istria, La Boucle and Ribeira Sacra 2026 destinations
  const visibleDestinations = destinations.filter(dest => 
    dest.href !== "/destinations/vesuvio" && dest.href !== "/destinations/chianti" && dest.href !== "/destinations/istria" && dest.href !== "/destinations/la-boucle-de-l-etoile" && dest.href !== "/destinations/ribeira-sacra-2026"
  );

  // Group by year, preserving the chronological order of the list
  const years = Array.from(new Set(visibleDestinations.map(d => d.year)));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateAndScroll(href, 'top');
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {years.map((year) => (
        <div key={year} className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-cabinet text-xs font-bold tracking-widest text-charcoal">
              {year}
            </span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>
          {visibleDestinations
            .filter((destination) => destination.year === year)
            .map((destination) => (
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
                  {destination.spotsOriginal && <span className="line-through opacity-60 mr-1">{destination.spotsOriginal}</span>}
                  {destination.spots}
                </span>
              </a>
            ))}
        </div>
      ))}
    </div>
  );
};

export default DestinationLinks;
