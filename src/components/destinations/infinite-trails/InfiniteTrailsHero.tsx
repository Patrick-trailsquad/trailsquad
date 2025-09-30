import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const InfiniteTrailsHero = () => {
  return (
    <div className="relative h-[60vh] mt-16">
      <img
        src="/lovable-uploads/infinite-trails.jpg"
        alt="Infinite Trails - Bad Gastein, Austria"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-8">
          Infinite Trails, Østrig
        </h1>
      </div>
    </div>
  );
};

export default InfiniteTrailsHero;
