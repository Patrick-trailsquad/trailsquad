
import { Instagram, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <a 
        href="mailto:hello@trailsquad.dk" 
        className="p-2 rounded-full bg-gray-100 hover:bg-terra hover:text-white transition-all duration-200"
        title="Email us"
      >
        <Mail className="h-4 w-4" />
      </a>
      <a 
        href="https://www.instagram.com/trailsquad_dk" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 rounded-full bg-gray-100 hover:bg-terra hover:text-white transition-all duration-200"
        title="Follow us on Instagram"
      >
        <Instagram className="h-4 w-4" />
      </a>
      <a 
        href="https://www.linkedin.com/company/trail-squad/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 rounded-full bg-gray-100 hover:bg-terra hover:text-white transition-all duration-200"
        title="Connect on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
    </div>
  );
};

export default SocialLinks;
