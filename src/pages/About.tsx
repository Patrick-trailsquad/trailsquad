
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

  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <AboutHero />
      <TeamSection />
      <StorySection images={galleryImages} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
