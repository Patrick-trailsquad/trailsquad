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
          <h3 className="font-cabinet text-3xl font-bold mb-4">Bivouac under stjernerne</h3>
          <p className="text-lg mb-2">Østlig Ørken, Marokko</p>
          <p className="text-lg mb-4">
            Oplev en autentisk ørkeneventyrer i vores fuldt udstyrede bivouac-lejr midt i den østlige ørken. 
            Overnatningen foregår i komfortable telte under Sahara's utrolige stjernehimmel.
          </p>
          <div className="space-y-2 text-lg">
            <p><strong>Overnatning:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Solo telte (mod tillæg) eller duo-telte</li>
              <li>4 eller 6-personers holdtelte</li>
              <li>Komfortable madrasser med sovepose, sæk og inderlaken inkluderet</li>
            </ul>
            <p className="mt-4"><strong>Faciliteter i bivouac:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Restauranttelt med morgenmad, frokost og middag</li>
              <li>Medicinsk telt med sundhedspersonale</li>
              <li>Toiletter, brusere, vand og elektricitet</li>
              <li>Telefonnetværk tilgængeligt</li>
            </ul>
          </div>
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
