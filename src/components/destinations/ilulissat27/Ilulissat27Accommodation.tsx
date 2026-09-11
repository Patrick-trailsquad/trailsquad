import { BedDouble, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";
import { assetUrl } from "../../../lib/assetUrl";
import arctic1 from "../../../assets/arctic1.jpg.asset.json";
import arctic2 from "../../../assets/arctic2.png.asset.json";
import falk1 from "../../../assets/falk1.jpg.asset.json";
import falk2 from "../../../assets/falk2.jpg.asset.json";
import ilimanaq1 from "../../../assets/ilimanaq-1.jpg.asset.json";
import ilimanaq2 from "../../../assets/ilimanaq-2.jpg.asset.json";
import ilimanaq3 from "../../../assets/ilimanaq-3.jpg.asset.json";
import ilimanaq4 from "../../../assets/ilimanaq-4.jpg.asset.json";
import heroImage from "../../../assets/ilulissat27-hero.jpg";

const nights = [
  {
    night: "Nat 1 · 25. august",
    place: "Hotel Arctic eller Hotel Den Hvide Falk",
    location: "Ilulissat",
    images: [assetUrl(arctic1), assetUrl(arctic2), assetUrl(falk1), assetUrl(falk2)],
    text:
      "Vi bor centralt i Ilulissat med udsigt over Diskobugten. Hotel Arctic ligger højt med panorama over isbjergene, mens Hotel Den Hvide Falk ligger tæt på havnen og byens caféer. Vi fordeler squaden på de to hoteller — begge med kort afstand til startlinjen for dagens løbeture.",
  },
  {
    night: "Nat 2 · 26. august",
    place: "Ilimanaq Lodge",
    location: "Ilimanaq",
    images: [
      assetUrl(ilimanaq1),
      assetUrl(ilimanaq2),
      assetUrl(ilimanaq3),
      assetUrl(ilimanaq4),
    ],
    text:
      "En af Grønlands mest specielle overnatninger: moderne hytter på pæle ude ved fjorden i den lille bygd Ilimanaq. Store vinduer mod isbjergene, stilhed hele natten og middag lavet på lokale råvarer — inklusiv dagens fangst fra vores egen fisketur.",
  },
  {
    night: "Nat 3 · 27. august",
    place: "Hotel Icefiord eller Hotel Den Hvide Falk",
    location: "Ilulissat",
    images: [heroImage, heroImage, heroImage],
    text:
      "Tilbage i Ilulissat efter dagens løb. Hotel Icefiord ligger direkte ned til vandet med terrasse mod isfjorden, og Hotel Den Hvide Falk ligger få minutter derfra. Perfekt base inden vi tager kajakkerne ud i midnatslyset.",
  },
];

const Ilulissat27Accommodation = () => {
  return (
    <div>
      <h2 className="font-cabinet text-3xl md:text-4xl font-bold mb-4 text-center text-charcoal">
        Tre nætter, tre helt forskellige oplevelser
      </h2>
      <p className="text-charcoal/60 text-lg text-center mb-12 max-w-2xl mx-auto">
        Vi bor i Ilulissat og i bygden Ilimanaq — tæt på isfjorden hele vejen.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {nights.map((n) => (
          <div key={n.night} className="bg-stone rounded-2xl overflow-hidden flex flex-col">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {n.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] w-full">
                      <img
                        src={image}
                        alt={`${n.place} — billede ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {n.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </>
              )}
            </Carousel>

            <div className="p-6 flex flex-col">
              <span className="font-cabinet text-xs font-bold tracking-widest uppercase text-terra mb-3">
                {n.night}
              </span>
              <div className="flex items-start gap-2 mb-2">
                <BedDouble className="w-5 h-5 text-charcoal/50 mt-1 flex-shrink-0" />
                <h3 className="font-cabinet text-xl font-bold text-charcoal">{n.place}</h3>
              </div>
              <div className="flex items-center gap-2 text-charcoal/60 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{n.location}</span>
              </div>
              <p className="text-charcoal/70 leading-relaxed">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ilulissat27Accommodation;
