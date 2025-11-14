import { ArrowLeft, ExternalLink, Clock, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import LaBoucleDeLEtoileIncludedAmenities from "../../components/destinations/la-boucle-de-l-etoile/LaBoucleDeLEtoileIncludedAmenities";
import LaBoucleDeLEtoileInfoBanner from "../../components/destinations/la-boucle-de-l-etoile/LaBoucleDeLEtoileInfoBanner";
import LaBoucleDeLEtoileDescription from "../../components/destinations/la-boucle-de-l-etoile/LaBoucleDeLEtoileDescription";
import LaBoucleDeLEtoileMediaSection from "../../components/destinations/la-boucle-de-l-etoile/LaBoucleDeLEtoileMediaSection";
import LaBoucleDeLEtoileAccommodation from "../../components/destinations/la-boucle-de-l-etoile/LaBoucleDeLEtoileAccommodation";
import LaBoucleDeLEtoilePricingSection from "../../components/destinations/la-boucle-de-l-etoile/LaBoucleDeLEtoilePricingSection";
import { useIsMobile } from "../../hooks/use-mobile";
import TrailSquadSection from "../../components/destinations/shared/TrailSquadSection";

const LaBoucleDeLEtoile = () => {
  const [isLinesVisible, setIsLinesVisible] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  usePageTitle('La Boucle de l\'Étoile');
  useScrollToTop();
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLinesVisible) {
        setIsLinesVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (linesRef.current) {
      observer.observe(linesRef.current);
    }
    return () => observer.disconnect();
  }, [isLinesVisible]);
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[80vh]">
        <img src="/lovable-uploads/infinite-trails.jpg" alt="La Boucle de l'Étoile" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-stone transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Tilbage til forsiden
          </Link>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <h1 className="font-cabinet text-4xl md:text-6xl font-bold text-white px-4 drop-shadow-md mb-8">
            La Boucle de l'Étoile
          </h1>
        </div>
      </div>

      <LaBoucleDeLEtoileInfoBanner />

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <LaBoucleDeLEtoileDescription />
          <div className="space-y-6">
            <LaBoucleDeLEtoileMediaSection />
            <LaBoucleDeLEtoilePricingSection />
          </div>
        </div>
      </div>
      
      <div className="mt-12 mb-20">
        <LaBoucleDeLEtoileIncludedAmenities className="bg-transparent" />
      </div>
      
      <TrailSquadSection description="Træningsløb er vigtige! Vi inkluderer billetter til de fede Trail Fox løb i Tisvilde (marts), Røsnæs (april) og Møns Klint (august). Vi tager afsted sammen, og får en fest!" />
      
      {/* Decorative Lines Section */}
      <div ref={linesRef} className="relative py-12 mb-16 md:mb-24">
        <svg className="absolute top-0 left-0 w-full h-32 md:h-64 z-0" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 180 C100 120 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80" fill="none" stroke="#FFDC00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{
            strokeDasharray: '1200',
            strokeDashoffset: isLinesVisible ? '0' : '1200',
            opacity: 0.8,
            transition: 'stroke-dashoffset 2s ease-out'
          }} />
          
          <path d="M0 120 C200 80 250 60 400 50 C550 40 600 90 700 110 C750 120 850 80 950 50 C1050 40 1150 45 1200 50" fill="none" stroke="#FFDC00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{
            strokeDasharray: '1200',
            strokeDashoffset: isLinesVisible ? '0' : '1200',
            opacity: 0.5,
            transition: 'stroke-dashoffset 2.5s ease-out 0.3s'
          }} />
          
          <path d="M0 60 C150 100 300 130 450 140 C550 145 650 110 750 85 C850 60 950 70 1050 85 C1150 95 1180 90 1200 85" fill="none" stroke="#FFDC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{
            strokeDasharray: '1200',
            strokeDashoffset: isLinesVisible ? '0' : '1200',
            opacity: 0.3,
            transition: 'stroke-dashoffset 3s ease-out 0.6s'
          }} />
        </svg>
      </div>

      {!isMobile && <LaBoucleDeLEtoileAccommodation />}

      <BackToDestinationsButton />

      <Footer />
    </div>
  );
};

export default LaBoucleDeLEtoile;
