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
      content: `Effective Date: 1st of March 2025

1. Introduction
Welcome to Trail Squad ("we," "our," "us"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or request a price quote.

2. Information We Collect
When you request a price quote or contact us, we may collect the following personal data:
• Name
• Email address
• Phone number (if provided)
• IP address (automatically collected for security and analytics purposes)

3. How We Use Your Information
We use your personal data for the following purposes:
• To provide requested price quotes and respond to inquiries
• To improve our services and customer experience
• To send marketing emails (only if you have provided explicit consent)
• To comply with legal obligations

4. Legal Basis for Processing
We process your personal data based on:
• Contractual necessity (to provide price quotes and respond to inquiries)
• Legitimate interest (to improve our services and security)
• Consent (for marketing communications, which you may opt out of at any time)

5. Data Sharing & Third Parties
We do not sell your personal data. However, we may share it with:
• Service providers who assist in operating our business (e.g., email platforms, cloud hosting)
• Legal authorities, if required by law

All third parties are contractually required to protect your data in compliance with GDPR.

6. Data Retention
We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy. If you request deletion, we will remove your data unless we have a legal obligation to retain it.

7. Your Rights Under GDPR
You have the right to:
• Access your personal data
• Request correction or deletion of your data
• Restrict or object to data processing
• Withdraw consent for marketing communications
• Request data portability (if applicable)

To exercise your rights, contact us at hello@trailsquad.dk.

8. Cookies & Tracking Technologies
We use cookies to enhance your browsing experience. You can manage or disable cookies through your browser settings. For more details, see our Cookie Policy.

9. Data Security
We implement appropriate security measures to protect your personal data from unauthorized access, loss, or misuse.

10. Contact Information
If you have any questions or concerns about this Privacy Policy, please contact us at:

Trail Squad ApS
Email: hello@trailsquad.dk

11. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated effective date.`,
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" alt="Trail Squad Logo" className="h-8" />
            <span className="font-cabinet text-charcoal font-semibold">Trail Squad ApS</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20">
            <div className="flex flex-col items-start gap-2 text-charcoal/80 text-sm">
              <a 
                href="mailto:hello@trailsquad.dk" 
                className="group"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
                  hello@trailsquad.dk
                </span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
                  Instagram
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/company/trail-squad/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="flex flex-col items-start gap-2 text-sm text-charcoal/80">
              <button 
                onClick={() => setSelectedPolicy(policies.privacy)}
                className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Privacy Notice
              </button>
              <button 
                onClick={() => setSelectedPolicy(policies.cookies)}
                className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Cookie Policy
              </button>
              <button 
                onClick={() => setSelectedPolicy(policies.terms)}
                className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-terra after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Terms & Conditions
              </button>
            </div>
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
