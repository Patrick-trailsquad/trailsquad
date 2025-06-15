
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * The hero section for the Transylvania 100 destination page
 * Includes the main image, "Transylvania 100, Romania" title, and back link.
 */
const TransylvaniaHero = () => {
  return (
    <div className="relative h-[60vh]">
      <img
        src="/lovable-uploads/a7015d7e-4a4a-418f-b141-b8b7b6ba7528.png"
        alt="Transylvania 100 trail running in the Carpathian Mountains"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-stone transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-8">
          Transylvania 100, Romania
        </h1>
      </div>
    </div>
  );
};

export default TransylvaniaHero;
