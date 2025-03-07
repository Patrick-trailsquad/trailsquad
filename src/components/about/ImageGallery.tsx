
import { FC } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <>
      {/* Mobile Carousel */}
      <div className="md:hidden w-full mt-12">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img 
                    src={image} 
                    alt={`Trail running moment ${index + 1}`}
                    className="w-full h-[200px] rounded-lg object-contain bg-gray-100"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Desktop Masonry Gallery */}
      <div className="hidden md:block columns-2 lg:columns-4 gap-4 mt-12">
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <img 
              src={image} 
              alt={`Trail running moment ${index + 1}`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
