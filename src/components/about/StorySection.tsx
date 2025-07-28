
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
            Trail Squad projektet er født ud af en passion for trail og ultra løb, kombineret med det fantastiske ved at tage på sportseventyr på spændende steder. Vi har løbet mange løb på tværs af kontinentet, og selvom smerten er reel, når man rammer muren på de lange løb, så smager de fejrende drinks efter løbet himmelsk og gør det hele værd.<br /><br />
            Vi ønsker bare at give mange flere løbere lignende oplevelser - og du vil altid have fanterettigheder på kontoret den følgende mandag!
          </p>
          
          <ImageGallery images={images} />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
