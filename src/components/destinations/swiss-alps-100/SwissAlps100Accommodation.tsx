import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

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
      
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'md:grid-cols-2 gap-12 items-center'}`}>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video rounded-xl overflow-hidden">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="space-y-4">
          <div>
            <h3 className="font-cabinet text-3xl font-bold mb-2">Landhaus Goms</h3>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">Goms, Valais, Schweiz</p>
          </div>

          <p className="text-lg">
            Landhaus Goms er mere end bare et hotel - det er et moderne alpelodge, der kombinerer schweizisk tradition med urban livsstil. Stedet ligger perfekt i hjertet af Goms-området med fantastisk udsigt over bjergene og direkte adgang til trail running-stier.
          </p>

          <p className="text-lg">
            Hotellet byder på naturlige materialer, primært træ og varme farver, der skaber en autentisk alpe-atmosfære. Her kan du slappe af efter løbet i de hyggelige fællesområder eller nyde den lokale gastronomi i restauranten.
          </p>

          <p className="text-lg">
            Med sin perfekte beliggenhed tæt på Aletsch-gletsjeren og løbets start/mål-område, er Landhaus Goms det ideelle basecamp for din Swiss Alps 100 oplevelse.
          </p>

          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.open('https://www.landhaus-goms.ch/en', '_blank')}
          >
            Se mere om hotellet
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwissAlps100Accommodation;
