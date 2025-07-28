
import { FC } from 'react';
import ImageGallery from './ImageGallery';

interface StorySectionProps {
  images: string[];
}

const StorySection: FC<StorySectionProps> = ({ images }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-cabinet font-bold mb-6">Hvorfor Trail Squad?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Trail Squad projektet er født ud af en passion for trail- og ultraløb, kombineret med det fantastiske ved at tage på eventyr på episke destinationer. Vi har løbet mange løb på tværs af kontinentet, og selvom smerten er ægte, når man rammer muren på de lange løb, så smager de efterfølgende drinks i målområdet himmelsk og gør smerten det hele værd.<br /><br />
            Vi ønsker at give andre løbere lignende oplevelser - og vil på den måde sørge for, at du altid vil have røverhistorier at dele på kontoret den følgende mandag!
          </p>
          
          <ImageGallery images={images} />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
