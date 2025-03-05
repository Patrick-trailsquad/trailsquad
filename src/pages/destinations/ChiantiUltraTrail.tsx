import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ChiantiUltraTrail = () => {
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh]">
        <img
          src="/lovable-uploads/ce6a399e-3005-4109-a936-5bbeb4762393.png"
          alt="Chianti Ultra Trail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-cabinet text-4xl md:text-6xl font-bold text-white mb-4">
              Chianti Ultra Trail By UTMB, Italy
            </h1>
            <p className="font-inter text-xl text-white/90">March 2026</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cabinet text-3xl font-bold text-charcoal mb-8">
            Run Through the Heart of Tuscan Wine Country
          </h2>
          <div className="prose prose-lg">
            <p>
              Experience the breathtaking beauty of the Chianti region as you run through historic vineyards,
              medieval villages, and rolling hills. This unique ultra trail combines the challenge of trail
              running with the cultural richness of one of Italy's most famous wine regions.
            </p>
            <p>
              The route takes you through the stunning Tuscan landscape, offering panoramic views of
              endless vineyards, olive groves, and ancient castles. As you traverse the technical trails
              between the vines, you'll experience the authentic charm of the Chianti region.
            </p>
          </div>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg hover:bg-charcoal/90 transition-colors mb-6"
          >
            Visit Official Race Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChiantiUltraTrail;
