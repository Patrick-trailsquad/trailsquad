import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const destinations = [
  {
    image: "/lovable-uploads/af5c6191-258b-4a41-9a6d-7e722d1dad97.png",
    location: "Madeira Island Ultra Trail, Portugal",
    date: "April 2025",
    spots: "12 spots left",
    href: "/destinations/miut"
  },
  {
    image: "/lovable-uploads/77fe9c87-3287-4f7a-ba65-68b0b68d853a.png",
    location: "Grand Trail Courmayeur, Italy",
    date: "July 2025",
    spots: "8 spots left",
    href: "/destinations/gtc"
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    location: "Norwegian Fjords",
    date: "August 2024",
    spots: "6 spots left",
    href: "/destinations/norwegian-fjords"
  },
  {
    image: "/lovable-uploads/609b48d8-13b5-4f5b-b65e-9e75141d6c2d.png",
    location: "Transylvania 100, Romania",
    date: "May 2026",
    spots: "15 spots left",
    href: "/destinations/transylvania"
  },
  {
    image: "/lovable-uploads/e6c9a5c5-4aa1-45c5-95c3-f74254e22e1a.png",
    location: "Mallorca by UTMB, Spain",
    date: "November 2025",
    spots: "20 spots left",
    href: "/destinations/mallorca"
  },
  {
    image: "/lovable-uploads/ce6a399e-3005-4109-a936-5bbeb4762393.png",
    location: "Chianti Ultra Trail By UTMB, Italy",
    date: "March 2026",
    spots: "15 spots left",
    href: "/destinations/chianti"
  }
];

const DestinationsSection = () => {
  return (
    <section id="upcoming-trips" className="py-24 bg-stone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white rounded-full text-charcoal">
            Upcoming Adventures
          </span>
          <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Trail Squad's Upcoming Destinations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((trip, index) => (
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
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-cabinet text-2xl font-bold text-white mb-2">
                    {trip.location}
                  </h3>
                  <p className="font-inter text-white/90 mb-2">{trip.date}</p>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
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
