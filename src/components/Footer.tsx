
import { Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import PolicyModal from "./PolicyModal";

const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const policies = {
    privacy: {
      title: "Privacy Notice",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    cookies: {
      title: "Cookie Policy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    terms: {
      title: "Terms & Conditions",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
  };

  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" alt="Trail Squad Logo" className="h-8" />
            <span className="font-cabinet text-charcoal font-semibold">Trail Squad ApS</span>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="mailto:hello@trailsquad.dk" className="text-charcoal/80 font-inter hover:text-terra transition-colors">
              hello@trailsquad.dk
            </a>
            <div className="flex gap-4 text-sm text-charcoal/60">
              <button 
                onClick={() => setSelectedPolicy(policies.privacy)}
                className="hover:text-terra transition-colors"
              >
                Privacy Notice
              </button>
              <span>•</span>
              <button 
                onClick={() => setSelectedPolicy(policies.cookies)}
                className="hover:text-terra transition-colors"
              >
                Cookie Policy
              </button>
              <span>•</span>
              <button 
                onClick={() => setSelectedPolicy(policies.terms)}
                className="hover:text-terra transition-colors"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-terra transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/trail-squad/" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-terra transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
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
