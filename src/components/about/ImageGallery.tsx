
import { FC } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-12">
      {images.map((image, index) => (
        <div key={index} className="break-inside-avoid mb-4">
          <picture>
            <source 
              type="image/webp"
              srcSet={`${image}?format=webp&width=400 400w, ${image}?format=webp&width=800 800w`}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <img 
              src={image}
              srcSet={`${image}?width=400 400w, ${image}?width=800 800w`}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              alt={`Trail running moment ${index + 1}`}
              className="w-full rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
