
import React, { useEffect, useRef, useState } from 'react';
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import Footer from "../../components/Footer";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";
import ZugspitzHero from "../../components/destinations/zugspitz/ZugspitzHero";
import ZugspitzInfoBanner from "../../components/destinations/zugspitz/ZugspitzInfoBanner";
import ZugspitzDescription from "../../components/destinations/zugspitz/ZugspitzDescription";
import ZugspitzMediaSection from "../../components/destinations/zugspitz/ZugspitzMediaSection";
import ZugspitzAccommodation from "../../components/destinations/zugspitz/ZugspitzAccommodation";
import { useIsMobile } from "../../hooks/use-mobile";

const ZugspitzUltratrail = () => {
  useScrollToTop();
  usePageTitle('Zugspitz Ultratrail');
  const isMobile = useIsMobile();
  const [isLinesVisible, setIsLinesVisible] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLinesVisible) {
          setIsLinesVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (linesRef.current) {
      observer.observe(linesRef.current);
    }

    return () => observer.disconnect();
  }, [isLinesVisible]);
  
  return (
    <div className="min-h-screen bg-stone">
      <ZugspitzHero />
      <ZugspitzInfoBanner />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <ZugspitzDescription />
          <ZugspitzMediaSection />
        </div>
      </div>
      
      <div className="mt-20">
        <IncludedAmenities className="bg-transparent" />
      </div>
      
      {/* Decorative Lines Section */}
      <div ref={linesRef} className="relative py-20 mb-28">
        <svg 
          className="absolute top-0 left-0 w-full h-32 md:h-64"
          viewBox="0 0 1200 200" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180 C100 120 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80"
            fill="none"
            stroke="#FFDC00"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              strokeDasharray: '1200',
              strokeDashoffset: isLinesVisible ? '0' : '1200',
              opacity: 0.8,
              transition: 'stroke-dashoffset 2s ease-out'
            }}
          />
          <path
            d="M0 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              strokeDasharray: '1400',
              strokeDashoffset: isLinesVisible ? '0' : '1400',
              opacity: 0.6,
              transition: 'stroke-dashoffset 2.5s ease-out 0.3s'
            }}
          />
          <path
            d="M50 200 C150 170 250 140 350 120 C450 160 550 180 650 190 C750 140 850 100 950 80"
            fill="none"
            stroke="#FFDC00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              strokeDasharray: '1000',
              strokeDashoffset: isLinesVisible ? '0' : '1000',
              opacity: 0.4,
              transition: 'stroke-dashoffset 2.2s ease-out 0.6s'
            }}
          />
          <path
            d="M0 200 C100 160 200 130 300 110 C400 150 500 170 600 185 C700 130 800 90 900 70"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              strokeDasharray: '900',
              strokeDashoffset: isLinesVisible ? '0' : '900',
              opacity: 0.3,
              transition: 'stroke-dashoffset 1.8s ease-out 0.9s'
            }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className={isMobile ? "mb-12" : ""}>
          <ZugspitzAccommodation />
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default ZugspitzUltratrail;
