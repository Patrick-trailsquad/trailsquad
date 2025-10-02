import { ArrowLeft, ExternalLink, Clock, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import InfiniteTrailsIncludedAmenities from "../../components/destinations/infinite-trails/InfiniteTrailsIncludedAmenities";
import InfiniteTrailsInfoBanner from "../../components/destinations/infinite-trails/InfiniteTrailsInfoBanner";
import InfiniteTrailsDescription from "../../components/destinations/infinite-trails/InfiniteTrailsDescription";
import InfiniteTrailsMediaSection from "../../components/destinations/infinite-trails/InfiniteTrailsMediaSection";
import InfiniteTrailsAccommodation from "../../components/destinations/infinite-trails/InfiniteTrailsAccommodation";
import { useIsMobile } from "../../hooks/use-mobile";

const InfiniteTrails = () => {
  const [isLinesVisible, setIsLinesVisible] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  usePageTitle('Infinite Trails');
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
      <div className="relative h-[60vh]">
        <img src="/lovable-uploads/infinite-trails.jpg" alt="Infinite Trails Bad Gastein" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-stone transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Tilbage til forsiden
          </Link>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-8">
            Infinite Trails, Bad Gastein
          </h1>
        </div>
      </div>

      <InfiniteTrailsInfoBanner />

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <InfiniteTrailsDescription />
          <InfiniteTrailsMediaSection />
        </div>
      </div>
      
      <div className="mt-12">
        <InfiniteTrailsIncludedAmenities className="bg-transparent" />
      </div>
      
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
          <path d="M50 200 C150 170 250 140 350 120 C450 160 550 180 650 190 C750 140 850 100 950 80" fill="none" stroke="#FFDC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{
            strokeDasharray: '1000',
            strokeDashoffset: isLinesVisible ? '0' : '1000',
            opacity: 0.4,
            transition: 'stroke-dashoffset 2.2s ease-out 0.6s'
          }} />
          <path d="M0 200 C100 160 200 130 300 110 C400 150 500 170 600 185 C700 130 800 90 900 70" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{
            strokeDasharray: '900',
            strokeDashoffset: isLinesVisible ? '0' : '900',
            opacity: 0.3,
            transition: 'stroke-dashoffset 1.8s ease-out 0.9s'
          }} />
        </svg>
      </div>
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className={isMobile ? "mb-12" : ""}>
          <InfiniteTrailsAccommodation />
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default InfiniteTrails;
