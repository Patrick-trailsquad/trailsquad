import { Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" alt="Trail Squad Logo" className="h-8" />
            <span className="font-cabinet text-charcoal font-semibold">Trail Squad ApS</span>
          </div>
          
          <div className="text-charcoal/80 font-inter">hello@trailsquad.dk</div>
          
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-terra transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-terra transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;