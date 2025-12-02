import { FC, useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useToast } from '@/hooks/use-toast';

const VoucherCTA: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleVoucherClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Fejl",
        description: "Udfyld venligst alle felter",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Fejl",
        description: "Indtast venligst en gyldig email",
        variant: "destructive"
      });
      return;
    }

    window.location.href = 'https://buy.stripe.com/4gM00ia3ff938cvcXa7kc0b';
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
        
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 100 100">
          <path d="M20 50 L80 50 M50 20 L50 80" stroke="currentColor" strokeWidth="2" strokeDasharray="8,4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <img src="/lovable-uploads/voucher-icon.png" alt="Voucher" className="w-40 h-40 mb-6 mx-auto" />

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-cabinet font-bold text-black mb-6">Årets julegaveidé</h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-black/90 mb-4 font-medium">Giv en uforglemmelig oplevelse</p>
          
          <p className="text-lg text-black/80 mb-10 max-w-2xl mx-auto">
            Det perfekte gavekort til dem, der elsker eventyr, natur og løb. Et gavekort til Trail Squad er mere end bare en gave – det er en invitation til at opleve verdens smukkeste trail-destinationer sammen med ligesindede.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleVoucherClick} size="lg" className="bg-black text-white hover:bg-black/90 px-10 py-6 text-lg font-cabinet font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Gavekort 1000 kr (50% rabat)
            </Button>
            
          </div>

          {/* Small text below */}
          
        </div>
      </div>

      {/* Bottom decorative wave */}
      <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60 Q300 20 600 60 T1200 60 L1200 120 L0 120 Z" fill="none" stroke="black" strokeWidth="3" opacity="0.3" />
      </svg>

      {/* Voucher Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-cabinet font-bold">
              Køb et gavekort til 1.000 kr<br />
              For kun 500! 😱
            </DialogTitle>
            <DialogDescription>
              Udfyld dine oplysninger for at fortsætte til betaling. Vi sender kvittering og gavekort til din email efterfølgende.
              <br /><br />
              Gavekort kan bruges hele 2026 (eller senere hvis I er sløve).
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Dit fulde navn</Label>
              <Input
                id="name"
                placeholder="Indtast dit fulde navn"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Din email</Label>
              <Input
                id="email"
                type="email"
                placeholder="din@email.dk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleConfirm}
              disabled={!name.trim() || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
              className="w-full bg-black text-white hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Fortsæt til betaling
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
export default VoucherCTA;