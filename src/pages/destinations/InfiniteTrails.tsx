import React, { useEffect, useRef, useState } from 'react';
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import InfiniteTrailsIncludedAmenities from "../../components/destinations/infinite-trails/InfiniteTrailsIncludedAmenities";
import InfiniteTrailsHero from "../../components/destinations/infinite-trails/InfiniteTrailsHero";
import InfiniteTrailsInfoBanner from "../../components/destinations/infinite-trails/InfiniteTrailsInfoBanner";
import InfiniteTrailsDescription from "../../components/destinations/infinite-trails/InfiniteTrailsDescription";
import InfiniteTrailsMediaSection from "../../components/destinations/infinite-trails/InfiniteTrailsMediaSection";
import InfiniteTrailsAccommodation from "../../components/destinations/infinite-trails/InfiniteTrailsAccommodation";
import InfiniteTrailsDecorativeLines from "../../components/destinations/infinite-trails/InfiniteTrailsDecorativeLines";
import TrailSquadSection from "../../components/destinations/shared/TrailSquadSection";
import { useIsMobile } from "../../hooks/use-mobile";

const InfiniteTrails = () => {
  useScrollToTop();
  usePageTitle('Infinite Trails');
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <InfiniteTrailsHero />
      <InfiniteTrailsInfoBanner />

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <InfiniteTrailsDescription />
          <InfiniteTrailsMediaSection />
        </div>
      </div>
      
      <div className="mt-12 mb-20">
        <InfiniteTrailsIncludedAmenities className="bg-transparent" />
      </div>
      
      <TrailSquadSection />
      
      <InfiniteTrailsDecorativeLines />
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className={isMobile ? "mb-8" : ""}>
          <InfiniteTrailsAccommodation />
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default InfiniteTrails;
