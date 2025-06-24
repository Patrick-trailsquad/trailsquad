
import { useState } from "react";
import PolicyModal from "./PolicyModal";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";
import SocialLinks from "./footer/SocialLinks";
import PolicyLinks from "./footer/PolicyLinks";
import { useIsMobile } from "../hooks/use-mobile";
import DestinationLinks from "./footer/DestinationLinks";

const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const navigateAndScroll = useNavigateAndScroll();
  const isMobile = useIsMobile();

  const rejsegarantiLogo = (
    <div className="flex items-center justify-center md:justify-start">
      <img 
        src="/lovable-uploads/e0a85598-cd64-4bf2-b36d-53e9de986ac3.png" 
        alt="Rejsegaranti Fonden - Travel Guarantee Denmark" 
        className={`${isMobile ? 'h-12' : 'h-16'} object-contain`} 
      />
    </div>
  );

  const trailSquadLogo = (
    <button 
      onClick={() => navigateAndScroll('/', 'top')} 
      className="flex items-center justify-center md:justify-start gap-4"
    >
      <img 
        src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" 
        alt="Trail Squad Logo" 
        className="h-8" 
      />
      <span className="font-cabinet text-charcoal font-semibold">Trail Squad ApS</span>
    </button>
  );

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Destinations Section - 2 columns */}
          <div className="mb-12">
            <h3 className="font-cabinet font-semibold text-charcoal text-xl mb-6 text-center md:text-left">
              Our Destinations
            </h3>
            <DestinationLinks />
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8 mb-12">
            <SocialLinks />
            <PolicyLinks onPolicyClick={setSelectedPolicy} />
          </div>

          {/* Logos Section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 pt-8 border-t border-gray-200">
            {trailSquadLogo}
            {rejsegarantiLogo}
          </div>
        </div>
      </div>

      {selectedPolicy && (
        <PolicyModal
          isOpen={true}
          onClose={() => setSelectedPolicy(null)}
          title={selectedPolicy.title}
          content={selectedPolicy.content}
        />
      )}
    </footer>
  );
};

export default Footer;
