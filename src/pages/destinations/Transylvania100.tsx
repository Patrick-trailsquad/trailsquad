
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useIsMobile } from "../../hooks/use-mobile";
import { useState, useCallback } from "react";
import { MousePointerClick } from "lucide-react";
import TransylvaniaHero from "../../components/destinations/transylvania/TransylvaniaHero";
import TransylvaniaInfoBanner from "../../components/destinations/transylvania/TransylvaniaInfoBanner";
import TransylvaniaMainContent from "../../components/destinations/transylvania/TransylvaniaMainContent";
import TransylvaniaPricingSection from "../../components/destinations/transylvania/TransylvaniaPricingSection";
import TransylvaniaIncludedAmenities from "../../components/destinations/transylvania/TransylvaniaIncludedAmenities";
import TransylvaniaDecorativeLines from "../../components/destinations/transylvania/TransylvaniaDecorativeLines";
import TransylvaniaAccommodation from "../../components/destinations/transylvania/TransylvaniaAccommodation";
import TrailSquadSection from "../../components/destinations/shared/TrailSquadSection";
import TransylvaniaScrollingBanner from "../../components/destinations/transylvania/TransylvaniaScrollingBanner";

const Transylvania100 = () => {
  const isMobile = useIsMobile();
  const [isMapActive, setIsMapActive] = useState(false);
  const deactivateMap = useCallback(() => setIsMapActive(false), []);
  useScrollToTop();
  usePageTitle("Transylvania 100");

  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <TransylvaniaHero />
      <TransylvaniaInfoBanner />
      
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <TransylvaniaMainContent />
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/UU8bC3vSsV0"
                title="Transylvania 100 Trail Running"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <TransylvaniaPricingSection />
          </div>
          <div className="col-span-full mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg relative">
              {!isMapActive && (
                <div
                  className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center"
                  onClick={() => setIsMapActive(true)}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium backdrop-blur-sm">
                    <MousePointerClick className="w-4 h-4" />
                    Klik for at interagere med kortet
                  </div>
                </div>
              )}
              <iframe
                src="https://app.racedaymap.com/transylvania100"
                title="Transylvania 100 - interaktivt rutekort"
                className={`w-full border-0 ${!isMapActive ? 'pointer-events-none' : ''}`}
                style={{ height: isMobile ? '400px' : '600px' }}
                allowFullScreen
                loading="lazy"
                onMouseLeave={deactivateMap}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 mb-20">
        <TransylvaniaIncludedAmenities className="bg-transparent" />
      </div>
      
      <TrailSquadSection />
      
      <TransylvaniaDecorativeLines />
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className={isMobile ? "mb-8" : ""}>
          <TransylvaniaAccommodation />
        </div>
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default Transylvania100;
