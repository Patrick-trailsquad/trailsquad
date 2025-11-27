
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useIsMobile } from "../../hooks/use-mobile";
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
  useScrollToTop();
  usePageTitle("Transylvania 100");

  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <TransylvaniaHero />
      <TransylvaniaInfoBanner />
      <TransylvaniaScrollingBanner />
      
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
