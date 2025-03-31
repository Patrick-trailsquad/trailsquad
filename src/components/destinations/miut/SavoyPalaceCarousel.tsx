
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SavoyPalaceCarousel = () => {
  const hotelImages = [
    {
      src: "/lovable-uploads/5eb44d1d-8bcf-42ba-ad78-9e827bcaaa7d.png",
      alt: "Infinity pool overlooking the Atlantic Ocean at Savoy Palace"
    },
    {
      src: "/lovable-uploads/e5f1a61c-d8ee-4747-b9ee-c3744c65fa53.png",
      alt: "Tropical pool area with palm trees at Savoy Palace"
    },
    {
      src: "/lovable-uploads/f0b4816a-1aad-4a27-82c9-84ae38628ed9.png",
      alt: "Luxurious hotel suite with ocean view at Savoy Palace"
    },
    {
      src: "/lovable-uploads/5807e6cc-6048-47bd-980f-c995624820d6.png",
      alt: "Private balcony with ocean view at Savoy Palace"
    },
    {
      src: "/lovable-uploads/a3ae89e6-e7e8-4038-8f6d-73e647114bd7.png",
      alt: "Indoor spa pool at Savoy Palace"
    }
  ];

  return (
    <div className="md:px-8 py-6">
      <Carousel className="w-full">
        <CarouselContent>
          {hotelImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <AspectRatio ratio={16/9} className="bg-stone overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 lg:-left-4" />
        <CarouselNext className="right-2 lg:-right-4" />
      </Carousel>
    </div>
  );
};

export default SavoyPalaceCarousel;
