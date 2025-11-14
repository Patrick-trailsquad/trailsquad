import { useIsMobile } from "../../../hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";

const LaBoucleDeLEtoileAccommodation = () => {
  const isMobile = useIsMobile();

  const images = [
    "/lovable-uploads/la-boucle-bivouac.jpg"
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-stone rounded-xl mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className={isMobile ? "order-2" : ""}>
          <h3 className="font-cabinet text-3xl font-bold mb-4">The Comodo ★★★★</h3>
          <p className="text-lg mb-2">Bad Gastein, Østrig</p>
          <p className="text-lg">
            The Comodo er et moderne 4-stjernet hotel med unik kombination af Belle Époque charme og 
            moderne komfort. Hotellet ligger centralt i Bad Gastein med nem adgang til både termalbadene 
            og løbsruterne. Med lyse værelser, restaurant med lokale specialiteter og wellness-faciliteter, 
            er det den perfekte base for din trailløbs-weekend.
          </p>
        </div>
        <div className={isMobile ? "order-1" : ""}>
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/3] w-full">
                    <img 
                      src={image} 
                      alt={`The Comodo ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LaBoucleDeLEtoileAccommodation;
