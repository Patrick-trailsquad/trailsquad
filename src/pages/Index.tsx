
import Menu from "../components/Menu";
import HeroSection from "../components/home/HeroSection";
import VideoThumbnailBanner from "../components/home/VideoThumbnailBanner";
import VideoThumbnailBannerReverse from "../components/home/VideoThumbnailBannerReverse";
import FeaturesSection from "../components/home/FeaturesSection";
import DestinationsSection from "../components/home/DestinationsSection";
import VideoBackgroundSection from "../components/home/VideoBackgroundSection";
import TestimonialSection from "../components/home/TestimonialSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

const Index = () => {
  usePageTitle('Home');
  
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <HeroSection />
      <VideoThumbnailBannerReverse />
      <VideoThumbnailBanner />
      <FeaturesSection />
      <DestinationsSection />
      <VideoBackgroundSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
