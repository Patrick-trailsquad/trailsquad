// ============= Full file contents =============

import { useState } from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import CallMeBackModal from './CallMeBackModal';
import { assetUrl } from '@/lib/assetUrl';
import patrickPortraitAsset from '@/assets/patrick-portrait.png.asset.json';
import emilPortraitAsset from '@/assets/emil-portrait-2.png.asset.json';

const patrickPortrait = assetUrl(patrickPortraitAsset);
const emilPortrait = assetUrl(emilPortraitAsset);

interface CallMeBackCTAProps {
  variant?: 'default' | 'banner';
  /** Optional explicit destination name; falls back to the current page's destination from the config. */
  destinationName?: string;
}

const CallMeBackCTA = ({ variant = 'default', destinationName }: CallMeBackCTAProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (variant === 'banner') {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-16">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-3">
                Har du spørgsmål? 🙋
              </h2>
              <p className="font-cabinet text-xl md:text-2xl text-charcoal mb-2">
                Lad Patrick eller Emil ringe dig op
              </p>
              <p className="text-charcoal/60 text-lg mb-8">
                Vi kan fortælle mere om:
                <br />• Om træningen passer til dit niveau
                <br />• Hvordan dagene foregår
                <br />• Hvem der typisk tager med
                <br />• Værelser og praktiske detaljer
                <br />• Hvad du får for pengene
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-yellow text-charcoal hover:bg-yellow/90 rounded-full font-cabinet font-bold text-lg px-8 h-12 shadow-md border-0"
              >
                <Phone className="h-5 w-5" />
                Ja tak – ring mig op
              </Button>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <img
                src={patrickPortrait}
                alt="Patrick fra Trail Squad"
                className="w-28 h-36 md:w-40 lg:w-48 md:h-52 lg:h-64 object-cover rounded-2xl border-4 border-yellow shadow-xl -rotate-6 relative z-0"
              />
              <img
                src={emilPortrait}
                alt="Emil fra Trail Squad"
                className="w-28 h-36 md:w-40 lg:w-48 md:h-52 lg:h-64 object-cover rounded-2xl border-4 border-yellow shadow-xl rotate-6 -ml-6 md:-ml-10 lg:-ml-12 relative z-10"
              />
            </div>
          </div>
        </div>
        <CallMeBackModal
          open={modalOpen}
          onDismiss={() => setModalOpen(false)}
          destinationName={destinationName}
        />
      </section>
    );
  }

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        variant="outline"
        className="w-full flex items-center gap-2 rounded-full"
      >
        <Phone className="h-4 w-4" />
        Ring mig op
      </Button>
      <CallMeBackModal
        open={modalOpen}
        onDismiss={() => setModalOpen(false)}
        destinationName={destinationName}
      />
    </>
  );
};

export default CallMeBackCTA;
