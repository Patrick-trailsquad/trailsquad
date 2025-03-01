
import { motion } from "framer-motion";
import { ArrowRight, Globe, Mountain, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/419d5e82-8ab8-4c5f-b1e6-4b77ae8486a8.png"
            alt="Trail runners in Cappadocia with hot air balloons"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Reduced overlay opacity for better visibility */}
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
              Epic Trail Adventures
            </span>
            <h1 className="font-cabinet text-6xl md:text-7xl font-bold text-white mb-6">
              Run in the World's
              <br />
              Most Stunning Locations
            </h1>
            <p className="font-inter text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of trail runners exploring breathtaking routes from Turkey's magical valleys to the world's most spectacular trails.
            </p>
            <button className="bg-white text-charcoal px-8 py-4 rounded-full font-cabinet font-medium hover:bg-stone transition-colors duration-300 flex items-center gap-2 mx-auto">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-stone rounded-full text-charcoal">
              Why Choose Us
            </span>
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Experience Running Like Never Before
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-terra" />,
                title: "Global Destinations",
                description: "Access to exclusive trails across different continents and terrains."
              },
              {
                icon: <Mountain className="w-8 h-8 text-terra" />,
                title: "Expert Guides",
                description: "Run with experienced local guides who know every twist and turn."
              },
              {
                icon: <MapPin className="w-8 h-8 text-terra" />,
                title: "Curated Experiences",
                description: "Carefully planned adventures combining running and cultural experiences."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-stone p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="font-cabinet text-xl font-bold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-charcoal/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trips Section */}
      <section className="py-24 bg-stone">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white rounded-full text-charcoal">
              Upcoming Adventures
            </span>
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Next Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
                location: "Swiss Alps",
                date: "June 2024",
                spots: "8 spots left"
              },
              {
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
                location: "New Zealand",
                date: "July 2024",
                spots: "12 spots left"
              },
              {
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
                location: "Norwegian Fjords",
                date: "August 2024",
                spots: "6 spots left"
              }
            ].map((trip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-terra relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
            alt="Background pattern"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Join our community of trail runners and experience the world's most beautiful paths.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-terra px-8 py-4 rounded-full font-cabinet font-medium hover:bg-stone transition-colors duration-300">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
