
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
    <div className="space-y-3">
      {destinations.map((destination) => (
        <Link
          key={destination.href}
          to={destination.href}
          className="block text-sm text-gray-600 hover:text-terra transition-colors hover:translate-x-1 transform duration-200"
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
};

export default DestinationLinks;
