
const PolicyLinks = ({ onPolicyClick }: { onPolicyClick: (policy: { title: string; content: string }) => void }) => {
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

Effective Date: 1st of March 2025

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

Effective Date: 1st of March 2025

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
• Please note: When purchasing trips and package tours through Trail Squad, the right of withdrawal does not apply in accordance with Section 18(2)(12) of the Danish Consumer Contracts Act (Forbrugeraftalelovens § 18, stk. 2, nr. 12). We recommend that you take out travel and cancellation insurance.

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
    <div className="space-y-3">
      <button 
        onClick={() => onPolicyClick(policies.privacy)}
        className="block text-sm text-gray-600 hover:text-terra transition-colors hover:translate-x-1 transform duration-200"
      >
        Privacy Notice
      </button>
      <button 
        onClick={() => onPolicyClick(policies.cookies)}
        className="block text-sm text-gray-600 hover:text-terra transition-colors hover:translate-x-1 transform duration-200"
      >
        Cookie Policy
      </button>
      <button 
        onClick={() => onPolicyClick(policies.terms)}
        className="block text-sm text-gray-600 hover:text-terra transition-colors hover:translate-x-1 transform duration-200"
      >
        Terms & Conditions
      </button>
    </div>
  );
};

export default PolicyLinks;
