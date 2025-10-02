
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * The hero section for the Transylvania 100 destination page
 * Includes the main image, "Transylvania 100, Romania" title, and back link.
 */
const TransylvaniaHero = () => {
  return (
    <div className="relative h-[70vh] mt-16">
      <img
        src="/lovable-uploads/a7015d7e-4a4a-418f-b141-b8b7b6ba7528.png"
        alt="Transylvania 100 trail running in the Carpathian Mountains"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <h1 className="font-cabinet text-4xl md:text-6xl font-bold text-white px-4 drop-shadow-md mb-8">
          Transylvania 100, Rumænien
        </h1>
      </div>
    </div>
  );
};

export default TransylvaniaHero;
