import { Star, MapPin, Waves } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import img1 from "@/assets/mallorca-hotel-1.webp.asset.json";
import img2 from "@/assets/mallorca-hotel-2-opt.webp.asset.json";
import img3 from "@/assets/mallorca-hotel-3.webp.asset.json";
import img4 from "@/assets/mallorca-hotel-4-opt.webp.asset.json";
import img5 from "@/assets/mallorca-hotel-5.webp.asset.json";
import img6 from "@/assets/mallorca-hotel-6-opt.webp.asset.json";
import img7 from "@/assets/mallorca-hotel-7.webp.asset.json";
import img8 from "@/assets/mallorca-hotel-8.webp.asset.json";

const assetOrigin = "https://trailsquad.lovable.app";
const images = [img1, img2, img3, img4, img5, img6, img7, img8].map(
  (image) => `${assetOrigin}${image.url}`,
);

const MallorcaTrainingAccommodation = () => {
  return (
    <div className="mb-20">
      <h2 className="font-cabinet text-4xl font-bold mb-8 text-center">Trætte ben har behov for en god base</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="h-[300px] md:h-[450px] rounded-xl overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={`Hotel Es Port i Port de Sóller ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      decoding="async"
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
            <h1 className="font-cabinet text-3xl font-bold text-charcoal mr-2">Hotel Es Port</h1>
            <div className="flex">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="font-cabinet text-xl text-terra mb-4">Historisk hotel • Port de Sóller, Mallorca</h2>
          <p className="text-lg">
            <b>Hotel Es Port</b> ligger i hjertet af den charmerende havneby Port de Sóller, omgivet af
            Serra de Tramuntanas dramatiske bjerge. Det historiske hotel byder på autentisk mallorcinsk
            stemning, smukke haver og en fredelig beliggenhed — perfekt til både træning og restitution.
          </p>
          <p className="text-lg mt-4">
            Værelserne er rummelige og komfortable, og morgenmaden serveres med lokale råvarer, så du er
            klar til dagens løb. Efter træningen kan du slappe af ved poolen eller gå en tur langs
            havnefronten.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-charcoal/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Port de Sóller</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal/70">
              <Waves className="w-4 h-4" />
              <span className="text-sm">Tæt på havn og bjerge</span>
            </div>
          </div>
          <p className="text-sm text-charcoal/50 mt-4">
            <a href="https://www.hotelesport.com/en/" target="_blank" rel="noopener noreferrer" className="underline hover:text-terra">
              Se hotellets hjemmeside
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MallorcaTrainingAccommodation;
