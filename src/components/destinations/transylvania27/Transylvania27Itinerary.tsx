import { Plane, Mountain, UtensilsCrossed, Users, Trophy, Coffee, Footprints, Bus, Bath } from "lucide-react";

const days = [
  {
    day: 1,
    date: "torsdag 27. maj 2027",
    title: "✈️ Udrejse",
    items: [
      { icon: Plane, text: "Aftenfly fra København til Bukarest" },
      { icon: Bus, text: "Privat transport til Poiana Brașov" },
      { icon: Coffee, text: "Check-in på Swissôtel Poiana Brașov" },
      { icon: UtensilsCrossed, text: "På hovedet i seng" },
    ],
  },
  {
    day: 2,
    date: "fredag 28. maj 2027",
    title: "🏃 Forberedelse & Dracula",
    items: [
      { icon: Footprints, text: "Shakeout Run på de lokale bakker" },
      { icon: Users, text: "Afhentning af startnumre i Bran" },
      { icon: Mountain, text: "Besøg ved Draculas Slot og race brief" },
      { icon: UtensilsCrossed, text: "Pasta-middag — husk at carb-loade 🍝" },
    ],
  },
  {
    day: 3,
    date: "lørdag 29. maj 2027",
    title: "🏁 Løbsdag — alle distancer",
    items: [
      { icon: Trophy, text: "Race day: 20, 30, 50, 80 eller 100 km" },
      { icon: Mountain, text: "Start og mål ved Draculas Slot i Bran" },
      { icon: Users, text: "Fejring ved målstregen med squaden" },
      { icon: UtensilsCrossed, text: "Stor middag for dem som er i mål (80 og 100 km løber stadig)" },
    ],
  },
  {
    day: 4,
    date: "søndag 30. maj 2027",
    title: "✈️ Hjemrejse",
    items: [
      { icon: Coffee, text: "Morgenmad på hotellet" },
      { icon: Bath, text: "Wellness og spa på hotellet" },
      { icon: Bus, text: "Transport tilbage til Bukarest" },
      { icon: Plane, text: "Fly hjem til København" },
    ],
  },
];

interface Transylvania27ItineraryProps {
  variant?: "default" | "overlay";
}

const Transylvania27Itinerary = ({ variant = "default" }: Transylvania27ItineraryProps) => {
  const isOverlay = variant === "overlay";
  const Wrapper = isOverlay ? "div" : "section";

  return (
    <Wrapper className={isOverlay ? "w-full" : "w-full py-12 md:py-20"}>
      <div className={isOverlay ? "" : "container mx-auto px-4 md:px-6"}>
        <h2 className={`font-cabinet text-3xl md:text-4xl font-bold text-center mb-4 ${isOverlay ? "text-white" : "text-charcoal"}`}>
          4 dage i Transsylvanien
        </h2>
        <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${isOverlay ? "text-white/70" : "text-charcoal/70"}`}>
          Fra København til Karpaterne — trailløb, fællesskab og Draculas Slot
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

export default Transylvania27Itinerary;
