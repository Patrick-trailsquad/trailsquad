
import { Instagram, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-start gap-2 text-charcoal/80 text-sm">
      <a 
        href="mailto:hello@trailsquad.dk" 
        className="group flex items-center gap-2"
      >
        <Mail className="h-4 w-4" />
        <span className="relative hidden md:inline after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
          hello@trailsquad.dk
        </span>
      </a>
      <a 
        href="https://www.instagram.com/trailsquad_dk" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center gap-2"
      >
        <Instagram className="h-4 w-4" />
        <span className="relative hidden md:inline after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
          Instagram
        </span>
      </a>
      <a 
        href="https://www.linkedin.com/company/trail-squad/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center gap-2"
      >
        <Linkedin className="h-4 w-4" />
        <span className="relative hidden md:inline after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
          LinkedIn
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
