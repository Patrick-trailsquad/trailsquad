
import { Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import PolicyModal from "./PolicyModal";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";

const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const navigateAndScroll = useNavigateAndScroll();

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
      content: `Cookie Policy

Effective Date: 1st of March 2026

1. Introduction
Trail Squad ("we," "our," "us") currently does not use any cookies or similar tracking technologies on our website.

2. What Are Cookies?
Cookies are small text files that websites place on your device to store information about your browsing preferences, improve your user experience, and collect anonymous statistical information.

3. Our Current Cookie Usage
• We currently do not use any cookies on our website
• We do not collect any automatic tracking information through cookies
• No third-party cookies are present on our site

4. Future Changes
• If we decide to implement cookies in the future, we will update this policy
• You will be informed of any changes and asked for consent where required by law
• This policy will be updated to detail what cookies are used and their purposes

5. Contact Information
If you have any questions about our cookie practices, please contact us at:

Trail Squad
Email: hello@trailsquad.dk`,
    },
    terms: {
      title: "Terms & Conditions",
      content: `Terms & Conditions

Effective Date: 1st of March 2026

1. Introduction
Welcome to Trail Squad ApS ("we," "our," "us"). By using our website and services, you agree to these Terms & Conditions. If you do not agree, please do not use our services.

2. Services Provided
Trail Squad organizes and facilitates trail running trips across Europe (and globally) for companies and individuals. We act as an intermediary between customers and service providers such as:
• Hotels
• Transport providers
• Event organizers

3. Booking & Payments
• All bookings are subject to availability and confirmation
• Payments must be made in accordance with the payment terms specified during booking
• Failure to complete payment may result in cancellation of your reservation

4. Cancellations & Refunds
• Cancellation policies vary depending on the trip and service providers. Specific details will be provided at the time of booking
• Refunds, if applicable, will be processed based on our refund policy and any supplier terms
• We reserve the right to cancel a trip due to unforeseen circumstances. In such cases, we will offer a rescheduled date or a refund

5. Customer Responsibilities
• You must ensure you are physically fit to participate in trail running activities
• You are responsible for obtaining any necessary travel insurance, visas, and health documents
• You must comply with local laws and regulations during the trip

6. Liability Disclaimer
• Trail Squad is not liable for any injury, illness, loss, or damage incurred during the trip
• We do not take responsibility for delays, cancellations, or changes caused by third-party service providers or force majeure events (e.g., natural disasters, strikes, extreme weather conditions)

7. Data Protection & Privacy
• We collect and process personal data in accordance with our [Privacy Policy]
• By using our services, you consent to the processing of your personal data as outlined in our Privacy Policy

8. Intellectual Property
• All content on our website, including text, images, and branding, is owned by Trail Squad and may not be used without our permission

9. Governing Law & Disputes
• These Terms & Conditions are governed by the laws of Denmark
• Any disputes shall be resolved through negotiation or, if necessary, legal proceedings in Denmark

10. Changes to Terms & Conditions
• We reserve the right to update these Terms & Conditions at any time
• Any changes will be posted on our website with the updated effective date

11. Contact Information
For any inquiries regarding these Terms & Conditions, please contact us at:

Trail Squad
Email: hello@trailsquad.dk`,
    },
  };

  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <button 
            onClick={() => navigateAndScroll('/', 'top')} 
            className="flex items-center gap-4"
          >
            <img 
              src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" 
              alt="Trail Squad Logo" 
              className="h-8 inline-block align-middle" 
            />
            <span className="font-cabinet text-charcoal font-semibold inline-block align-middle">Trail Squad ApS</span>
          </button>
          
          <div className="flex gap-20">
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
                href="https://instagram.com" 
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
