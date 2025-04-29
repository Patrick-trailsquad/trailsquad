
import { FC } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-12">
      {images.map((image, index) => (
        <div key={index} className="break-inside-avoid mb-4">
          <img 
            src={image} 
            alt={`Trail running moment ${index + 1}`}
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
