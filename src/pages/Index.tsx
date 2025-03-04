
import Menu from "../components/Menu";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import DestinationsSection from "../components/home/DestinationsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import CTASection from "../components/home/CTASection";
import MasonrySection from "../components/home/MasonrySection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <HeroSection />
      <FeaturesSection />
      <DestinationsSection />
      <TestimonialSection />
      <CTASection />
      <MasonrySection />
      <Footer />
    </div>
  );
};

export default Index;
