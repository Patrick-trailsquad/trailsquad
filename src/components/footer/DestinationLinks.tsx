
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
      {destinations.map((destination) => (
        <Link
          key={destination.href}
          to={destination.href}
          className="text-sm text-gray-600 hover:text-charcoal transition-colors py-1"
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
};

export default DestinationLinks;
