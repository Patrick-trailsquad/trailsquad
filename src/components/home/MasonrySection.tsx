
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "River between mountains under white clouds",
    className: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Low angle photography of trees at daytime",
    className: "col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Mountain hit by sun rays",
    className: "col-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Foggy mountain summit",
    className: "col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    alt: "Mountain alps landscape",
    className: "col-span-1"
  }
];

const MasonrySection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={image.className}
            >
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonrySection;
