import { useState } from "react";
import PolicyModal from "./PolicyModal";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";
import SocialLinks from "./footer/SocialLinks";
import PolicyLinks from "./footer/PolicyLinks";
import { useIsMobile } from "../hooks/use-mobile";
import DestinationLinks from "./footer/DestinationLinks";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigateAndScroll = useNavigateAndScroll();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Use webhook for newsletter signup (same as other form submissions)
      const webhookUrl = "https://hooks.zapier.com/hooks/catch/your-webhook-id/"; // Configure your webhook URL
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email,
          type: "newsletter_signup",
          timestamp: new Date().toISOString(),
          source: "footer",
        }),
      });

      setEmail("");
      toast({
        title: "Tak!",
        description: "Du er nu tilmeldt vores nyhedsbrev.",
      });
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Fejl",
        description: "Der opstod en fejl. Prøv venligst igen.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const rejsegarantiLogo = <div className="flex items-center justify-center md:justify-start">
      <img src="/lovable-uploads/e0a85598-cd64-4bf2-b36d-53e9de986ac3.png" alt="Rejsegaranti Fonden - Travel Guarantee Denmark" className={`${isMobile ? 'h-10' : 'h-12'} object-contain`} />
    </div>;
  const trailSquadLogo = <button onClick={() => navigateAndScroll('/', 'top')} className="flex items-center justify-center md:justify-start gap-3 group">
      <img src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" alt="Trail Squad Logo" className="h-8" />
      <span className="font-cabinet text-charcoal font-semibold group-hover:text-terra transition-colors">Trail Squad ApS</span>
    </button>;
  return <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              {trailSquadLogo}
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Episke trailløb på tværs af Europa. Håndplukkede destinationer og værdifuldt fællesskab.
              </p>
              <SocialLinks />
              
              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-cabinet font-semibold text-charcoal text-sm">Nyhedsbrev</h4>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input type="email" placeholder="Din emailadresse" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 text-sm rounded-full" required />
                  <Button type="submit" disabled={isSubmitting} className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 text-sm rounded-full">
                    {isSubmitting ? "..." : "Tilmeld"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="font-cabinet font-semibold text-charcoal text-lg mb-6">
                Kommende destinationer
              </h3>
              <DestinationLinks />
            </div>

            {/* Legal & Support */}
            <div>
              <h3 className="font-cabinet font-semibold text-charcoal text-lg mb-6">
                Betingelser
              </h3>
              <PolicyLinks onPolicyClick={setSelectedPolicy} />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500 text-center md:text-left">
                <div>© {new Date().getFullYear()} Trail Squad ApS. All rights reserved.</div>
                <a href="/admin/login" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  Admin
                </a>
              </div>
              {rejsegarantiLogo}
            </div>
          </div>
        </div>
      </div>

      {selectedPolicy && <PolicyModal isOpen={true} onClose={() => setSelectedPolicy(null)} title={selectedPolicy.title} content={selectedPolicy.content} />}
    </footer>;
};
export default Footer;