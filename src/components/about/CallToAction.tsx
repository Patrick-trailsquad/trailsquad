
import { FC } from 'react';
import { Mail } from "lucide-react";
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";

const CallToAction: FC = () => {
  const navigateAndScroll = useNavigateAndScroll();

  const handleViewDestinations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateAndScroll('/', 'upcoming-trips');
  };

  return (
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
        className="absolute bottom-0 left-0 w-full h-32 md:h-64"
        viewBox="0 0 1200 200" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 180 C100 120 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ 
            strokeDasharray: '8,8',
            opacity: 0.8 
          }}
        />
        <path
          d="M0 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.6 }}
        />
        <path
          d="M50 200 C150 170 250 140 350 120 C450 160 550 180 650 190 C750 140 850 100 950 80"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5,15"
          style={{ opacity: 0.4 }}
        />
        <path
          d="M0 200 C100 160 200 130 300 110 C400 150 500 170 600 185 C700 130 800 90 900 70"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.3 }}
        />
      </svg>
    </section>
  );
};

export default CallToAction;
