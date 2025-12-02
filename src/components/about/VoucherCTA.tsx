import { FC } from 'react';
import { Button } from '../ui/button';
const VoucherCTA: FC = () => {
  const handleVoucherClick = () => {
    window.location.href = 'mailto:info@trailsquad.dk?subject=Gavekort til Trail Squad tur';
  };
  return <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: 'url(/lovable-uploads/voucher-background.jpg)'
    }} />
      
      {/* Gradient Overlay with 50% opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow via-yellow/95 to-orange opacity-50" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-10 left-10 w-32 h-32" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 100 100">
          <path d="M20 50 L80 50 M50 20 L50 80" stroke="currentColor" strokeWidth="2" strokeDasharray="8,4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <img src="/lovable-uploads/voucher-icon.png" alt="Voucher" className="w-40 h-40 mb-6 mx-auto" />

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-cabinet font-bold text-black mb-6">
            Giv en uforglemmelig oplevelse
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-black/90 mb-4 font-medium">🎄 50% rabat resten af december 🎅</p>
          
          <p className="text-lg text-black/80 mb-10 max-w-2xl mx-auto">
            Det perfekte gavekort til dem, der elsker eventyr, natur og løb. Et gavekort til Trail Squad er mere end bare en gave – det er en invitation til at opleve verdens smukkeste trail-destinationer sammen med ligesindede.
          </p>

          {/* CTA Button */}
          <Button onClick={handleVoucherClick} size="lg" className="bg-black text-white hover:bg-black/90 px-10 py-6 text-lg font-cabinet font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Køb gavekort nu
          </Button>

          {/* Small text below */}
          <p className="text-sm text-black/70 mt-6">
            Kontakt os for at høre mere om muligheder og priser
          </p>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60 Q300 20 600 60 T1200 60 L1200 120 L0 120 Z" fill="none" stroke="black" strokeWidth="3" opacity="0.3" />
      </svg>
    </section>;
};
export default VoucherCTA;