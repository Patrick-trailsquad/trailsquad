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
    "/lovable-uploads/e809c741-198a-406a-a1d0-7112f8220309.png",
    "/lovable-uploads/25d3f586-ac0f-49eb-b707-422bf6f2a1a2.png",
    "/lovable-uploads/c5ad0d53-d3e9-4acf-9182-5c642ad97194.png",
    "/lovable-uploads/2b43a391-e48b-4a13-891c-2d98c0c00ced.png",
    "/lovable-uploads/9ea72ff1-70a6-414d-8077-a9b1f279df00.png",
    "/lovable-uploads/237914c4-acc0-4941-870b-d611a3bc5056.png",
    "/lovable-uploads/0e5e44b1-9987-47c2-bce2-d393f955a6a7.png",
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
      <div className="relative h-[60vh] bg-[#FFDC00] flex items-center justify-center overflow-hidden">
        <div className="text-center text-[#000000e6] px-6 md:px-4 flex flex-col relative z-10">
          <h1 className="text-5xl font-cabinet font-bold">About Trail Squad</h1>
          <p className="text-xl max-w-2xl mx-auto mt-2">Trail Squad is a travel company focused on running epic trail races across the globe.</p>
        </div>
        
        {/* Mountain Range Sketch */}
        <svg 
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 200" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'brightness(1.2)' }}
        >
          <path
            d="M0 200 C50 180 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80 L1200 200 L0 200 Z"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              strokeDasharray: '8,8',
              opacity: 0.8 
            }}
          />
          <path
            d="M100 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100 L1200 200 L100 200 Z"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.6 }}
          />
        </svg>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cabinet font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative aspect-square">
              <img 
                src="/lovable-uploads/1023bdb7-a56d-4712-88cb-c6b747627029.png" 
                alt="Patrick Lund" 
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 rounded-lg" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="font-bold text-xl mb-1 text-[#FFDC00]">Patrick Lund</h3>
                <p className="text-[#FFDC00]">Founder & Running enthusiast</p>
              </div>
            </div>
            <div className="relative aspect-square">
              <img 
                src="/lovable-uploads/c9f1a696-b9d9-406b-8ae1-6e14b85b3e22.png" 
                alt="Emil Albrechtsen" 
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 rounded-lg" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="font-bold text-xl mb-1 text-[#FFDC00]">Emil Albrechtsen</h3>
                <p className="text-[#FFDC00]">Co-founder, Running coach & Physiotherapist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-cabinet font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">The Trail Squad project is born from a passion for trail and ultra running, coupled with the awesomeness of going sports adventures in exciting locations. We have been running many races across the continent, and though the pain is real when you hit the wall on the long runs, the post-race celebratory beers taste heavenly and make it all worthwhile.<br /><br />We just want to give many more runners similar experiences - and you will always have the bragging rights at the office on the following Monday!</p>
            
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

      {/* CTA Section */}
      <section className="py-32 bg-[#FFDC00] relative min-h-[600px]">
        <div className="container mx-auto px-4 text-center text-black relative z-10">
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

        {/* Decorative Lines */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-64"
          viewBox="0 0 1200 200" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180 L100 120 L200 180 L300 120 L400 180 L500 120 L600 180 L700 120 L800 180 L900 120 L1000 180 L1100 120 L1200 180"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse opacity-10"
          />
          <path
            d="M50 160 L150 100 L250 160 L350 100 L450 160 L550 100 L650 160 L750 100 L850 160 L950 100 L1050 160 L1150 100"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10,10"
            className="opacity-5"
          />
          <path
            d="M25 140 L125 80 L225 140 L325 80 L425 140 L525 80 L625 140 L725 80 L825 140 L925 80 L1025 140 L1125 80"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5,15"
            className="opacity-10"
          />
        </svg>
      </section>

      <Footer />
    </div>
  );
};

export default About;
