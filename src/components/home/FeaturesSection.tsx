
import { motion } from "framer-motion";
import { Globe2, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-terra" />,
    title: "Epic Destinations",
    description: "Let us do the boring planning so you can travel the world and experience thrilling trails across continents and terrains"
  },
  {
    icon: <Trophy className="w-8 h-8 text-terra" />,
    title: "Wonderful Sports Experiences",
    description: "Set healthy goals for yourself and support an active lifestyle by training towards - and succeeding in - sports adventures"
  },
  {
    icon: <Users className="w-8 h-8 text-terra" />,
    title: "Coaching & Community",
    description: "Supported by running coaches and experts you can safely train towards ambitious running goals while getting special deals from our community"
  }
];

const FeaturesSection = () => {
  return (
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone p-8 rounded-2xl transition-shadow duration-300"
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
  );
};

export default FeaturesSection;
