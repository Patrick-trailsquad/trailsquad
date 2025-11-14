
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useDestinationRatings } from "@/hooks/useDestinationRatings";

const destinations = [
  {
    image: "/lovable-uploads/af5c6191-258b-4a41-9a6d-7e722d1dad97.png",
    location: "Madeira Island Ultra Trail, Portugal",
    date: "April 2025",
    spots: "Løb afsluttet 🏁",
    href: "/destinations/miut",
    testimonialDestination: "MIUT"
  },
  {
    image: "/lovable-uploads/087fe87f-e6e4-4c2e-b840-bea332c370d2.png",
    location: "Trail Ribeira Sacra, Spanien",
    date: "Oktober 2025",
    spots: "Løb afsluttet 🏁",
    href: "/destinations/ribeira-sacra",
    testimonialDestination: "Ribeira Sacra"
  },
  {
    image: "/lovable-uploads/0388aed3-9930-45a5-adc3-3449136a3d30.png",
    location: "Chianti Ultra Trail by UTMB, Italien",
    date: "Marts 2026",
    spots: "Åbner senere",
    href: "/destinations/chianti"
  },
  {
    image: "/lovable-uploads/252cbd72-9c01-4a8c-b76c-fdc820f43886.png",
    location: "Istria 100 by UTMB, Kroatien",
    date: "April 2026",
    spots: "5 pladser",
    href: "/destinations/istria"
  },
  {
    image: "/lovable-uploads/09591b2b-8dda-48fb-be79-ab98d16ccd30.png",
    location: "Vesuvio Ultra Marathon, Italien",
    date: "Maj 2026",
    spots: "Åbner senere",
    href: "/destinations/vesuvio"
  },
  {
    image: "/lovable-uploads/a7015d7e-4a4a-418f-b141-b8b7b6ba7528.png",
    location: "Transylvania 100, Rumænien",
    date: "Maj 2026",
    spots: "12 pladser",
    href: "/destinations/transylvania"
  },
  {
    image: "/lovable-uploads/77fe9c87-3287-4f7a-ba65-68b0b68d853a.png",
    location: "Gran Trail Courmayeur, Italien",
    date: "Juli 2026",
    spots: "Åbner senere",
    href: "/destinations/gtc"
  },
  {
    image: "/lovable-uploads/swiss-alps-100-hero-new.jpg",
    location: "Swiss Alps 100, Schweiz",
    date: "August 2026",
    spots: "11 pladser",
    href: "/destinations/swiss-alps-100"
  },
  {
    image: "/lovable-uploads/infinite-trails.jpg",
    location: "Infinite Trails, Østrig",
    date: "September 2026",
    spots: "13 pladser",
    href: "/destinations/infinite-trails"
  },
  {
    image: "/lovable-uploads/ribeira-sacra-2026-hero.jpg",
    location: "Trail Ribeira Sacra, Spanien",
    date: "Oktober 2026",
    spots: "Åbner senere",
    href: "/destinations/ribeira-sacra-2026"
  },
  {
    image: "/lovable-uploads/la-boucle-hero.jpg",
    location: "La Boucle de l'Étoile, Marokko",
    date: "November 2026",
    spots: "Åbner senere",
    href: "/destinations/la-boucle-de-l-etoile"
  }
];

const DestinationsSection = () => {
  const { ratings } = useDestinationRatings();
  
  // Filter out Vesuvio, Chianti, Istria, MIUT, and GTC destinations
  const visibleDestinations = destinations.filter(dest => 
    dest.href !== "/destinations/vesuvio" && dest.href !== "/destinations/chianti" && dest.href !== "/destinations/istria" && dest.href !== "/destinations/miut" && dest.href !== "/destinations/gtc"
  );

  return (
    <section id="upcoming-trips" className="py-24 bg-stone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Squad'ens kommende destinationer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDestinations.map((trip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Link to={trip.href} className="block">
                <img
                  src={trip.image}
                  alt={trip.location}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {trip.href === "/destinations/istria" && (
                  <div className="absolute top-4 right-4 bg-yellow-400 border-2 border-charcoal rounded-full px-3 py-2 flex items-center gap-2">
                    <img src="/lovable-uploads/376bace9-3e41-4047-95a9-1d882af06797.png" alt="Lightning icon" className="w-4 h-4" />
                    <span className="text-charcoal font-cabinet font-bold text-sm">Flash-tur</span>
                  </div>
                )}
                {trip.testimonialDestination && ratings[trip.testimonialDestination] && (
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1.5 shadow-lg border border-white/20">
                    <Star className="w-4 h-4 fill-[#FFDC00] text-[#FFDC00]" />
                    <span className="text-charcoal font-cabinet font-bold text-sm">
                      {ratings[trip.testimonialDestination].averageRating.toFixed(1)}
                    </span>
                    <span className="text-gray-500 font-inter text-xs">
                      ({ratings[trip.testimonialDestination].count})
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-cabinet text-2xl font-bold text-white mb-2">
                    {trip.location}
                  </h3>
                  <p className="font-inter text-white/90 mb-2">{trip.date}</p>
                   <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    trip.spots === "Løb afsluttet 🏁" 
                      ? "bg-white/20 backdrop-blur-sm text-white border-2 border-[#FFDC00]" 
                      : trip.spots === "Åbner senere"
                      ? "bg-[#F1F0FB] text-[#9F9EA1]"
                      : trip.spots === "Billetsalg lukket"
                      ? "bg-orange text-orange-foreground"
                      : "bg-[#FFDC00] text-black"
                   }`}>
                    {trip.spots}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
