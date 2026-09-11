import { Plane, Coffee, UtensilsCrossed, Footprints, Mountain, Fish, Ship, Waves, Moon, Sun, MapPin } from "lucide-react";

const days = [
  {
    day: 1,
    date: "onsdag 25. august 2027",
    title: "✈️ Ankomst til Ilulissat",
    items: [
      { icon: Plane, text: "Direkte fly tur/retur fra København til Ilulissat" },
      { icon: Coffee, text: "Check-in på Hotel Arctic eller Hotel Den Hvide Falk" },
      { icon: Footprints, text: "Første løbetur langs isfjorden" },
      { icon: Fish, text: "Fisketur i isfjorden — middag af egen fangst" },
    ],
  },
  {
    day: 2,
    date: "torsdag 26. august 2027",
    title: "🚶 Guidet tour i Ilimanaq bygden",
    items: [
      { icon: Ship, text: "Sejltur gennem isfjorden til Ilimanaq" },
      { icon: MapPin, text: "Guidet rundtur i Ilimanaq bygden med lokal" },
      { icon: Footprints, text: "Løbetur i det kuperede landskab omkring bygden" },
      { icon: Coffee, text: "Overnatning i hytterne på Ilimanaq Lodge" },
    ],
  },
  {
    day: 3,
    date: "fredag 27. august 2027",
    title: "🛶 Løb & midnatskajak",
    items: [
      { icon: Ship, text: "Retur til Ilulissat med båd" },
      { icon: Mountain, text: "Løbetur i kuperet terræn fra Ilulissat" },
      { icon: Coffee, text: "Check-in på Hotel Icefiord eller Hotel Den Hvide Falk" },
      { icon: Moon, text: "Midnatskajak mellem isbjergene i nattelyset" },
    ],
  },
  {
    day: 4,
    date: "lørdag 28. august 2027",
    title: "✈️ Sidste løb og hjemrejse",
    items: [
      { icon: Sun, text: "Morgenmad med udsigt over isfjorden" },
      { icon: Footprints, text: "Afsluttende let social run i byen" },
      { icon: Waves, text: "Tid til at nyde de sidste isbjerge" },
      { icon: Plane, text: "Fly hjem mod Danmark" },
    ],
  },
];

interface Ilulissat27ItineraryProps {
  variant?: "default" | "overlay";
}

const Ilulissat27Itinerary = ({ variant = "default" }: Ilulissat27ItineraryProps) => {
  const isOverlay = variant === "overlay";
  const Wrapper = isOverlay ? "div" : "section";

  return (
    <Wrapper className={isOverlay ? "w-full" : "w-full py-12 md:py-20"}>
      <div className={isOverlay ? "" : "container mx-auto px-4 md:px-6"}>
        <h2 className={`font-cabinet text-3xl md:text-4xl font-bold text-center mb-4 ${isOverlay ? "text-white" : "text-charcoal"}`}>
          4 dage i Ilulissat
        </h2>
        <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${isOverlay ? "text-white/70" : "text-charcoal/70"}`}>
          Løb hver dag, fisketur i fjorden og kajak mellem isbjergene
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
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-3">
                    <h3 className={`font-cabinet text-lg md:text-2xl font-bold leading-snug ${isOverlay ? "text-white" : "text-charcoal"}`}>
                      {day.title}
                    </h3>
                    <span className={`text-xs md:text-sm font-medium sm:whitespace-nowrap ${isOverlay ? "text-white/50" : "text-charcoal/50"}`}>
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

export default Ilulissat27Itinerary;
