
import React from 'react';
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import Footer from "../../components/Footer";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";
import RibeiraHero from "../../components/destinations/ribeira-sacra/RibeiraHero";
import RibeiraInfoBanner from "../../components/destinations/ribeira-sacra/RibeiraInfoBanner";
import RibeiraDescription from "../../components/destinations/ribeira-sacra/RibeiraDescription";
import RibeiraMediaSection from "../../components/destinations/ribeira-sacra/RibeiraMediaSection";
import RibeiraAccommodation from "../../components/destinations/ribeira-sacra/RibeiraAccommodation";

const RibeiraSacra = () => {
  useScrollToTop();
  usePageTitle('Trail Ribeira Sacra');
  
  return (
    <div className="min-h-screen bg-stone">
      <RibeiraHero />
      <RibeiraInfoBanner />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <RibeiraDescription />
          <RibeiraMediaSection />
        </div>
      </div>
      
      <div className="mt-16">
        <IncludedAmenities className="bg-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="h-[500px]">
          <RibeiraAccommodation />
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default RibeiraSacra;
