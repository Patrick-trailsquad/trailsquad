import { Plane, Bus, Coffee, UtensilsCrossed, Footprints, Mountain, Dumbbell, Sun, Heart } from "lucide-react";

const days = [
  {
    day: 1,
    date: "torsdag 5. februar 2027",
    title: "✈️ Velkommen til Mallorca",
    items: [
      { icon: Plane, text: "Direkte fly fra København til Palma" },
      { icon: Bus, text: "Privat transport til Port de Sóller" },
      { icon: Coffee, text: "Check-in på Hotel Es Port" },
      { icon: UtensilsCrossed, text: "Fælles velkomstmiddag med squaden" },
    ],
  },
  {
    day: 2,
    date: "fredag 6. februar 2027",
    title: "🏃 Social run & bakketræning",
    items: [
      { icon: Footprints, text: "Social morgenrun i moderat tempo" },
      { icon: Mountain, text: "Udforsk stierne i Serra de Tramuntana" },
      { icon: Dumbbell, text: "Eftermiddagstræning: bakkesprints og teknik" },
      { icon: Sun, text: "Pool og afslapning på hotellet" },
    ],
  },
  {
    day: 3,
    date: "lørdag 7. februar 2027",
    title: "🏃 Højdemeter & styrke",
    items: [
      { icon: Footprints, text: "Social morgenrun med smukke udsigter" },
      { icon: Mountain, text: "Højdemetertræning på lokale stier" },
      { icon: Dumbbell, text: "Eftermiddagstræning: styrke og løbeteknik" },
      { icon: Heart, text: "Fælles middag og hygge" },
    ],
  },
  {
    day: 4,
    date: "søndag 8. februar 2027",
    title: "✈️ Farvel til Sóller",
    items: [
      { icon: Footprints, text: "Afsluttende let social run" },
      { icon: Coffee, text: "Morgenmad på hotellet" },
      { icon: Bus, text: "Transport tilbage til Palma" },
      { icon: Plane, text: "Fly hjem til København" },
    ],
  },
];

interface MallorcaTrainingItineraryProps {
  variant?: "default" | "overlay";
}

const MallorcaTrainingItinerary = ({ variant = "default" }: MallorcaTrainingItineraryProps) => {
  const isOverlay = variant === "overlay";
  const Wrapper = isOverlay ? "div" : "section";

  return (
    <Wrapper className={isOverlay ? "w-full" : "w-full py-12 md:py-20"}>
      <div className={isOverlay ? "" : "container mx-auto px-4 md:px-6"}>
        <h2 className={`font-cabinet text-3xl md:text-4xl font-bold text-center mb-4 ${isOverlay ? "text-white" : "text-charcoal"}`}>
          4 dage på Mallorca
        </h2>
        <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${isOverlay ? "text-white/70" : "text-charcoal/70"}`}>
          Træning, sol og fællesskab i Serra de Tramuntana
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#FFDC00]" />

          <div className="space-y-10">
            {days.map((day) => (
              <div key={day.day} className="relative pl-16 md:pl-20">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#FFDC00] flex flex-col items-center justify-center z-10 shadow-md">
                  <span className="font-cabinet text-[10px] md:text-xs font-bold text-charcoal leading-none">DAG</span>
                  <span className="font-cabinet text-lg md:text-2xl font-bold text-charcoal leading-none">{day.day}</span>
                </div>

                <div className={`rounded-xl shadow-sm border p-5 md:p-6 ${isOverlay ? "bg-white/10 backdrop-blur-md border-white/20" : "bg-white border-stone-dark/10"}`}>
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className={`font-cabinet text-xl md:text-2xl font-bold ${isOverlay ? "text-white" : "text-charcoal"}`}>
                      {day.title}
                    </h3>
                    <span className={`text-sm font-medium whitespace-nowrap ml-3 ${isOverlay ? "text-white/50" : "text-charcoal/50"}`}>
                      {day.date}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {day.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon className={`w-4 h-4 flex-shrink-0 ${isOverlay ? "text-white/50" : "text-charcoal/40"}`} />
                        <span className={isOverlay ? "text-white/85" : "text-charcoal/80"}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MallorcaTrainingItinerary;
