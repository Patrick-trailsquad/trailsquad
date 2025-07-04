
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
          <h2 className="text-4xl font-cabinet font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-8">
            The Trail Squad project is born from a passion for trail and ultra running, coupled with the awesomeness of going on sports adventures in exciting locations. We have run many races across the continent, and though the pain is real when you hit the wall on the long runs, the post-race celebratory drinks taste heavenly and make it all worthwhile.<br /><br />
            We just want to give many more runners similar experiences - and you will always have the bragging rights at the office on the following Monday!
          </p>
          
          <ImageGallery images={images} />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
