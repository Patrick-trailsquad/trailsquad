
import { useState } from "react";
import PolicyModal from "./PolicyModal";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";
import SocialLinks from "./footer/SocialLinks";
import PolicyLinks from "./footer/PolicyLinks";
import { useIsMobile } from "../hooks/use-mobile";

const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const navigateAndScroll = useNavigateAndScroll();
  const isMobile = useIsMobile();

  const rejsegarantiLogo = (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/0a1509e6-e649-4509-a8ee-ec11b8fe295b.png" 
        alt="Rejsegaranti Fonden" 
        className="h-12 object-contain" 
      />
    </div>
  );

  const trailSquadLogo = (
    <button 
      onClick={() => navigateAndScroll('/', 'top')} 
      className="flex items-center gap-4"
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
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* On mobile: Trail Squad logo first */}
          {isMobile && trailSquadLogo}
          
          {/* On desktop: Rejsegaranti logo first (in place of Trail Squad) */}
          {!isMobile && rejsegarantiLogo}
          
          {/* On desktop: Trail Squad logo second (in place of Rejsegaranti) */}
          {!isMobile && trailSquadLogo}
          
          <div className="flex gap-20">
            <SocialLinks />
            <PolicyLinks onPolicyClick={setSelectedPolicy} />
          </div>
          
          {/* On mobile: Rejsegaranti logo last */}
          {isMobile && (
            <div className="mt-6">
              {rejsegarantiLogo}
            </div>
          )}
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
