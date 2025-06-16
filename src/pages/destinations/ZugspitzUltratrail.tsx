
import React from 'react';
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
  
  return (
    <div className="min-h-screen bg-stone">
      <ZugspitzHero />
      <ZugspitzInfoBanner />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <ZugspitzDescription />
          <ZugspitzMediaSection />
        </div>
      </div>
      
      <div className="mt-16">
        <IncludedAmenities className="bg-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className={isMobile ? "mb-8" : ""}>
          <ZugspitzAccommodation />
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default ZugspitzUltratrail;
