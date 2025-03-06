import { Mail, Award, Flag, ChevronLeft, ChevronRight } from "lucide-react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  usePageTitle('About');
  const navigateAndScroll = useNavigateAndScroll();

  const images = [
    "/lovable-uploads/0ff6cfdb-d0ab-4ba7-8894-63e7eae03549.png",
    "/lovable-uploads/e809c741-198a-406a-a1d0-7112f8220309.png",
    "/lovable-uploads/25d3f586-ac0f-49eb-b707-422bf6f2a1a2.png",
    "/lovable-uploads/8f2e413d-62c8-4590-b8f6-731f17391272.png",
    "/lovable-uploads/c5ad0d53-d3e9-4acf-9182-5c642ad97194.png",
    "/lovable-uploads/cf8dc3b8-2664-43db-9f7f-b5647f7dea9b.png",
    "/lovable-uploads/2b43a391-e48b-4a13-891c-2d98c0c00ced.png",
    "/lovable-uploads/9ea72ff1-70a6-414d-8077-a9b1f279df00.png",
    "/lovable-uploads/237914c4-acc0-4941-870b-d611a3bc5056.png",
    "/lovable-uploads/0e5e44b1-9987-47c2-bce2-d393f955a6a7.png",
    "/lovable-uploads/8dc149c5-e618-4029-a98a-8879e6aeb758.png",
    "/lovable-uploads/1b6826f9-cff2-41ad-96c7-a6aa39c0e051.png"
  ];

  const handleViewDestinations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateAndScroll('/', 'upcoming-trips');
  };

  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#FFDC00] flex items-center justify-center">
        <div className="text-center text-[#000000e6] px-6 md:px-4">
          <h1 className="text-5xl font-cabinet font-bold mb-4">About Trail Squad</h1>
          <p className="text-xl max-w-2xl mx-auto">Trail Squad is a travel company focused on running epic trail races across the globe.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-cabinet font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">Born from a passion for trail running and adventure, Trail Squad brings together experienced runners and travel enthusiasts to create unforgettable running experiences in the world's most stunning locations.</p>
            
            {/* Mobile Carousel */}
            <div className="md:hidden w-full mt-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img 
                          src={image} 
                          alt={`Trail running moment ${index + 1}`}
                          className="w-full h-[200px] rounded-lg object-contain bg-gray-100"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Desktop Masonry Gallery */}
            <div className="hidden md:block columns-2 lg:columns-4 gap-4 mt-12">
              {images.map((image, index) => (
                <div key={index} className="break-inside-avoid mb-4">
                  <img 
                    src={image} 
                    alt={`Trail running moment ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cabinet font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center">
              <img src="/lovable-uploads/609b48d8-13b5-4f5b-b65e-9e75141d6c2d.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-xl mb-2">Alex Thompson</h3>
              <p className="text-gray-600">Founder & Lead Guide</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <img src="/lovable-uploads/912fc842-fa5a-4c14-ab70-34c62312f9c6.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-xl mb-2">Sarah Chen</h3>
              <p className="text-gray-600">Route Planner</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <img src="/lovable-uploads/ce6a399e-3005-4109-a936-5bbeb4762393.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-xl mb-2">Marco Rossi</h3>
              <p className="text-gray-600">Adventure Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cabinet font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-terra shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Expert Guides</h3>
                <p className="text-gray-600">Our guides are certified professionals with extensive knowledge of trail running and local terrain.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Flag className="w-8 h-8 text-terra shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Unique Routes</h3>
                <p className="text-gray-600">Carefully curated trails that showcase the most breathtaking landscapes and cultural experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFDC00]">
        <div className="container mx-auto px-4 text-center text-black">
          <h2 className="text-4xl font-cabinet font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black/90">Join us for an unforgettable trail running experience in some of the world's most stunning locations.</p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="/#upcoming-trips" 
              onClick={handleViewDestinations}
              className="bg-black text-white px-8 py-4 rounded-full font-cabinet font-medium hover:bg-black/90 transition-colors duration-300"
            >
              View Destinations
            </a>
            <a href="mailto:info@trailsquad.com" className="flex items-center gap-2 px-8 py-4 rounded-full font-cabinet font-medium border-2 border-black hover:bg-black/10 transition-colors duration-300">
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
