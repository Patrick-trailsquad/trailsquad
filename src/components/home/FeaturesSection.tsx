
import { motion } from "framer-motion";
import { Globe2, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-terra" />,
    title: "Epic Destinations",
    description: "Access to exclusive trails across different continents and terrains."
  },
  {
    icon: <Trophy className="w-8 h-8 text-terra" />,
    title: "Wonderful Sports Experiences",
    description: "Run with experienced local guides who know every twist and turn."
  },
  {
    icon: <Users className="w-8 h-8 text-terra" />,
    title: "Coaching & Community",
    description: "Carefully planned adventures combining running and cultural experiences."
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
              className="bg-stone p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-cabinet text-xl font-bold text-charcoal mb-3 whitespace-pre-line">
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
