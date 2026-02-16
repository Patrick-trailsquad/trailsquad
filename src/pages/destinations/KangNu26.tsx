import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import KangNu26InfoBanner from "../../components/destinations/kangnu26/KangNu26InfoBanner";
import KangNu26Description from "../../components/destinations/kangnu26/KangNu26Description";
import KangNu26MediaSection from "../../components/destinations/kangnu26/KangNu26MediaSection";
import KangNu26PricingSection from "../../components/destinations/kangnu26/KangNu26PricingSection";
import KangNu26IncludedAmenities from "../../components/destinations/kangnu26/KangNu26IncludedAmenities";
import KangNu26Accommodation from "../../components/destinations/kangnu26/KangNu26Accommodation";
import { useIsMobile } from "../../hooks/use-mobile";
import TrailSquadSection from "../../components/destinations/shared/TrailSquadSection";

const KangNu26 = () => {
  const [isLinesVisible, setIsLinesVisible] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  usePageTitle('KangNu Running Race');
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
        <img src="/lovable-uploads/kangnu26-hero.jpg" alt="KangNu Running Race - Nuuk, Grønland" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-stone transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Tilbage til forsiden
          </Link>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <h1 className="font-cabinet text-4xl md:text-6xl font-bold text-white px-4 drop-shadow-md mb-8">
            KangNu Running Race, Grønland
          </h1>
        </div>
      </div>

      <KangNu26InfoBanner />

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <KangNu26Description />
          <div className="space-y-6">
            <KangNu26MediaSection />
            <KangNu26PricingSection />
          </div>
        </div>
      </div>
      
      <div className="mt-12 mb-20">
        <KangNu26IncludedAmenities className="bg-transparent" />
      </div>
      
      {/* Mirrored Trail Squad Section */}
      <section className="w-full">
        <div className="container mx-auto px-2 md:px-6">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-1/2 relative">
              <img 
                src="/lovable-uploads/hval.webp" 
                alt="Hval i Grønland" 
                className="w-full h-full object-cover rounded-xl aspect-square"
              />
            </div>
            <div className="w-full md:w-1/2 bg-stone p-12 flex flex-col justify-center">
              <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Træning & Forberedelse
              </h1>
              <h2 className="text-lg text-charcoal/80 mb-6">
                Vi hjælper dig med at forberede dig til løbet i Grønland. Du får adgang til træningsprogrammer og fælles træningsløb, så du er klar til den store dag.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="py-4 md:py-8" />

      <TrailSquadSection description="Træningsløb er vigtige! Vi inkluderer billetter til de fede Trail Fox løb i Tisvilde (marts) og Røsnæs (april). Vi tager afsted sammen og får en fest!" />
      
      {/* Decorative Lines Section */}
      <div ref={linesRef} className="relative py-12 mb-16 md:mb-24">
        <svg className="absolute top-0 left-0 w-full h-32 md:h-64 z-0" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 180 C100 120 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80" fill="none" stroke="#FFDC00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{
            strokeDasharray: '1200',
            strokeDashoffset: isLinesVisible ? '0' : '1200',
            opacity: 0.8,
            transition: 'stroke-dashoffset 2s ease-out'
          }} />
          <path d="M0 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{
            strokeDasharray: '1400',
            strokeDashoffset: isLinesVisible ? '0' : '1400',
            opacity: 0.6,
            transition: 'stroke-dashoffset 2.5s ease-out 0.3s'
          }} />
        </svg>
      </div>
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className={isMobile ? "mb-12" : ""}>
          <KangNu26Accommodation />
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default KangNu26;
