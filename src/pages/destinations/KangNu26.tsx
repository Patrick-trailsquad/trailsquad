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
import KangNu26Itinerary from "../../components/destinations/kangnu26/KangNu26Itinerary";

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
      
      {/* Whale Safari + Itinerary with parallax background */}
      <section className="w-full relative overflow-hidden">
        {/* Parallax whale background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/lovable-uploads/hval.webp)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
          {/* Whale safari text - left aligned */}
          <div className="max-w-xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-white mb-4">
              Hvalsafari i Nuuk
            </h2>
            <p className="text-lg text-white/85 leading-relaxed">Forestil dig at stå på dækket, mens en pukkelhval bryder vandoverfladen kun få meter fra dig. På vores 3-timers hvalsafari sejler vi ud i de dramatiske fjorde omkring Nuuk — et af verdens bedste steder at opleve hvaler tæt på. 
Arrangeret af et lokalt adventurebureau - og ja, det er selvfølgelig med i prisen 🫰
            </p>
          </div>

          {/* Itinerary inline */}
          <KangNu26Itinerary variant="overlay" />
        </div>
      </section>
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className={isMobile ? "mb-12" : ""}>
          <KangNu26Accommodation />
        </div>
        <BackToDestinationsButton />
      </div>

      {/* Decorative Lines Section */}
      <div ref={linesRef} className="relative h-32 md:h-64 mb-8 md:mb-12">
        <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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

      <TrailSquadSection description="Træningsløb er vigtige! Vi inkluderer billetter til de fede Trail Fox løb i Tisvilde (marts) og Røsnæs (april). Vi tager afsted sammen og får en fest!" />
      <div className="pb-16 md:pb-24" />

      <Footer />
    </div>);

};

export default KangNu26;