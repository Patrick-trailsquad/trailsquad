import trailRunnersImage from "@/assets/trail-runners-forest.jpg";
import trailSquadLogo from "@/assets/trail-squad-logo.png";
import { Button } from "@/components/ui/button";

const TrailSquadSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative">
            <img 
              src={trailRunnersImage} 
              alt="Trail runners in forest" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/5 flex items-center justify-center">
              <img 
                src={trailSquadLogo} 
                alt="Trail Squad Logo" 
                className="h-12 object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-stone p-12 flex flex-col justify-center">
            <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Trail Squad & Trail Fox Series
            </h1>
            <h2 className="text-lg text-charcoal/80 mb-6">
              Træningsløb er vigtige! Vi inkluderer billetter til de fede Trail Fox løb i Tisvilde (marts) og Røsnæs (april).
              <br />
              Vi tager afsted sammen, og får en fest!
            </h2>
            <Button 
              asChild
              variant="charcoal"
              size="md"
              className="w-fit"
            >
              <a 
                href="/trailfox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Læs mere
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailSquadSection;