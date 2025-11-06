import { Plane, Hotel, Utensils, Trophy, Car, Users, Calendar, Camera } from "lucide-react";

interface SwissAlps100IncludedAmenitiesProps {
  className?: string;
}

const SwissAlps100IncludedAmenities = ({ className = "" }: SwissAlps100IncludedAmenitiesProps) => {
  const customAmenities = [
    {
      icon: Trophy,
      title: "Løbstilmelding",
      description: "Vi sørger for din tilmelding til Swiss Alps 100"
    },
    {
      icon: Plane,
      title: "Fly til Zürich",
      description: "Fly til og fra Zürich fra København inkluderet"
    },
    {
      icon: Car,
      title: "Transport",
      description: "Al transport mellem lufthavn, hotel og løbet"
    },
    {
      icon: Hotel,
      title: "4 overnatninger",
      description: "Indkvartering på det charmerende Landhaus Goms"
    },
    {
      icon: Utensils,
      title: "Måltider",
      description: "Morgenmad alle dage og fælles middag før og efter løbet"
    },
    {
      icon: Users,
      title: "Trail Squad fællesskab",
      description: "Del oplevelsen med andre danske trail runners"
    },
    {
      icon: Calendar,
      title: "Træningsløb",
      description: "3 x Trail Fox løb (Tisvilde, Røsnæs, Møns Klint)"
    },
    {
      icon: Camera,
      title: "Foto & video",
      description: "Professionelle billeder og video fra turen"
    }
  ];

  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="font-cabinet text-4xl font-bold text-center mb-12">
          Hvad er inkluderet i din pakke
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customAmenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div 
                key={index}
                className="bg-stone-dark p-6 rounded-xl hover:bg-stone-dark/80 transition-colors"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-cabinet text-xl font-bold mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SwissAlps100IncludedAmenities;
