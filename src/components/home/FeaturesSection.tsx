
import { motion } from "framer-motion";

const features = [
  {
    image: "/lovable-uploads/bec62159-47fc-4e21-9d40-11bebd51957a.png", // Trail running in mountains
    title: "Episke Destinationer",
    description: "Lad os tage os af den kedelige planlægning, så du kan rejse verden rundt og opleve spændende trails på tværs af kontinenter og terræner"
  },
  {
    image: "/lovable-uploads/6df07c5b-767f-47d4-8edb-24d097efcb3f.png", // Mountain runner
    title: "Fantastiske Sportsoplevelser",
    description: "Sæt sunde mål for dig selv og støt en aktiv livsstil ved at træne mod - og lykkes med - sportseventyr"
  },
  {
    image: "/lovable-uploads/5bc2909f-5d00-491a-81ad-7524df77eab1.png", // Group training session
    title: "Coaching & Fællesskab",
    description: "Støttet af løbecoaches og eksperter kan du sikkert træne mod ambitiøse løbemål, mens du får særlige tilbud fra vores fællesskab"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Oplev Løb Som Aldrig Før
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone rounded-2xl transition-shadow duration-300 w-full overflow-hidden"
            >
              <div className="w-full h-32 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-cabinet text-xl font-bold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-charcoal/80">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
