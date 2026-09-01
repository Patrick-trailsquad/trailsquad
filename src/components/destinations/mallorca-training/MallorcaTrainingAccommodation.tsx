import { Star, MapPin, Waves } from "lucide-react";

const images = [
  "/lovable-uploads/mallorca-hotel-es-port.jpg",
];

const MallorcaTrainingAccommodation = () => {
  return (
    <div className="mb-20">
      <h2 className="font-cabinet text-4xl font-bold mb-8 text-center">Din indkvartering</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="h-[450px] rounded-xl overflow-hidden">
            <img
              src={images[0]}
              alt="Hotel Es Port i Port de Sóller"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
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
