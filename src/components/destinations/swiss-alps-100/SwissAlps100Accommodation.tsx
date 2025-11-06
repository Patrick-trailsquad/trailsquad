import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SwissAlps100Accommodation = () => {
  const isMobile = useIsMobile();
  
  const images = [
    "/lovable-uploads/06049df9-20c8-4b6a-9ea9-e0e36cbab0f7.png",
    "/lovable-uploads/749ebd53-0454-4092-9aec-b2c6d23dcfe3.png",
    "/lovable-uploads/1c46acfc-b2ec-40ff-9e27-72808cf9bbb8.png",
  ];

  return (
    <div className="mb-20">
      <h2 className="font-cabinet text-4xl font-bold mb-8 text-center">Din indkvartering</h2>
      
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="h-[450px] rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Landhaus Goms ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Landhaus Goms</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Alpin Feelgood Hotel • Goms, Valais, Schweiz</h2>
          <p className="text-lg">
            <b>Landhaus Goms</b> er mere end bare et hotel - det er et moderne alpelodge, der kombinerer schweizisk 
            tradition med urban livsstil. Stedet ligger perfekt i hjertet af Goms-området med fantastisk udsigt 
            over bjergene og direkte adgang til trail running-stier.
          </p>
          <p className="text-lg mt-4">
            Hotellet byder på naturlige materialer, primært træ og varme farver, der skaber en autentisk 
            alpe-atmosfære. Her kan du slappe af efter løbet i de hyggelige fællesområder eller nyde den 
            lokale gastronomi i restauranten med fokus på regionale specialiteter.
          </p>
          <p className="text-lg mt-4">
            Med sin perfekte beliggenhed tæt på Aletsch-gletsjeren og løbets start/mål-område, er Landhaus 
            Goms det ideelle basecamp for din Swiss Alps 100 oplevelse. Den autentiske alpeatmosfære og 
            moderne faciliteter gør det til det perfekte sted at restituere før og efter dit bjergløb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwissAlps100Accommodation;
