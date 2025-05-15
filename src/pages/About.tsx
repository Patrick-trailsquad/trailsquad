
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";
import AboutHero from "../components/about/AboutHero";
import TeamSection from "../components/about/TeamSection";
import StorySection from "../components/about/StorySection";
import CallToAction from "../components/about/CallToAction";
import { galleryImages } from "../config/galleryImages";

const About = () => {
  usePageTitle('About');
  
  const featuredImage = "/lovable-uploads/bf05c5b2-8ce8-4471-a1d3-d57375061f2c.png";

  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <AboutHero />
      <TeamSection />
      <StorySection 
        images={galleryImages} 
        featuredImage={featuredImage} 
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
