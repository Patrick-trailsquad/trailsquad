import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const IstriaHero = () => {
  return (
    <div className="relative h-[80vh]">
      <img
        src="/lovable-uploads/252cbd72-9c01-4a8c-b76c-fdc820f43886.png"
        alt="Istria 100 by UTMB in Croatia"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-stone transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Tilbage til forsiden
        </Link>
      </div>
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <h1 className="font-cabinet text-4xl md:text-6xl font-bold text-white px-4 drop-shadow-md mb-8">
          Istria 100 by UTMB, Kroatien
        </h1>
      </div>
    </div>
  );
};

export default IstriaHero;