import { Plane, Ship, Mountain, UtensilsCrossed, Binoculars, Users, Trophy, MapPin, Coffee, ClipboardList, Footprints } from "lucide-react";

const days = [
  {
    day: 1,
    date: "20. august",
    title: "Ankomst til Nuuk",
    items: [
      { icon: Plane, text: "Fly fra København til Nuuk" },
      { icon: MapPin, text: "Transfer fra lufthavn til hotel" },
      { icon: Coffee, text: "Check-in og tid til at udforske Nuuk" },
      { icon: UtensilsCrossed, text: "Middag (fælles eller på egen hånd)" },
    ],
  },
  {
    day: 2,
    date: "21. august",
    title: "Hvalsafari & forberedelse",
    items: [
      { icon: Footprints, text: "Shakeout run" },
      { icon: Binoculars, text: "3-timers hvalsafari i Nuuk-fjorden" },
      { icon: Users, text: "Løbsstrategi med holdet og afhentning af startnumre" },
      { icon: Mountain, text: "Udforsk Nuuk på egen hånd" },
      { icon: UtensilsCrossed, text: "Middag (fælles eller på egen hånd) 👆husk at carb-loade" },
    ],
  },
  {
    day: 3,
    date: "22. august",
    title: "Løbsdag — KangNu Race",
    items: [
      { icon: Ship, text: "Bådtransport til startområdet i Kobberfjorden" },
      { icon: Trophy, text: "KangNu Running Race (20 / 35 / 56 km)" },
      { icon: Users, text: "Fejring ved målstregen i Nuuk" },
      { icon: UtensilsCrossed, text: "Fælles afslutningsmiddag" },
    ],
  },
  {
    day: 4,
    date: "23. august",
    title: "Hjemrejse",
    items: [
      { icon: Coffee, text: "Morgenmad og farvel til Nuuk" },
      { icon: MapPin, text: "Transfer til lufthavn" },
      { icon: Plane, text: "Fly hjem til København" },
    ],
  },
];

interface KangNu26ItineraryProps {
  variant?: "default" | "overlay";
}

const KangNu26Itinerary = ({ variant = "default" }: KangNu26ItineraryProps) => {
  const isOverlay = variant === "overlay";
  
  const Wrapper = isOverlay ? "div" : "section";
  
  return (
    <Wrapper className={isOverlay ? "w-full" : "w-full py-12 md:py-20"}>
      <div className={isOverlay ? "" : "container mx-auto px-4 md:px-6"}>
        <h2 className={`font-cabinet text-3xl md:text-4xl font-bold text-center mb-4 ${isOverlay ? "text-white" : "text-charcoal"}`}>
          4 dage i Grønland
        </h2>
        <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${isOverlay ? "text-white/70" : "text-charcoal/70"}`}>
          Fra København til Nuuk — et episk trail-eventyr
        </p>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#FFDC00]" />

          <div className="space-y-10">
            {days.map((day) => (
              <div key={day.day} className="relative pl-16 md:pl-20">
                {/* Day badge on the line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#FFDC00] flex flex-col items-center justify-center z-10 shadow-md">
                  <span className="font-cabinet text-[10px] md:text-xs font-bold text-charcoal leading-none">DAG</span>
                  <span className="font-cabinet text-lg md:text-2xl font-bold text-charcoal leading-none">{day.day}</span>
                </div>

                {/* Card */}
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

export default KangNu26Itinerary;
