import { Plane, Mountain, UtensilsCrossed, Users, Trophy, MapPin, Coffee, Footprints, Train } from "lucide-react";

const days = [
  {
    day: 1,
    date: "torsdag 6. august",
    title: "✈️ Udrejse",
    items: [
      { icon: Plane, text: "Fly fra København til Zürich 🇨🇭" },
      { icon: Train, text: "Privat shuttlebus til Fiesch i Valais-regionen" },
      { icon: Coffee, text: "Check-in på hotel og afslapning" },
      { icon: UtensilsCrossed, text: "Middag (fælles eller på egen hånd)" },
    ],
  },
  {
    day: 2,
    date: "fredag 7. august",
    title: "Forberedelse & 100 km-start 🏃",
    items: [
      { icon: Footprints, text: "Shakeout Run", linkText: "(Øhh, hvad er et Shakeout Run...? 👇)", linkTarget: "shakeout-run-section" },
      { icon: Users, text: "Afhentning af startnumre" },
      { icon: Mountain, text: "Løbsstrategi med gruppen" },
      { icon: Trophy, text: "100 km-løbet starter kl. 17:00" },
      { icon: UtensilsCrossed, text: "Middag (fælles eller på egen hånd) 👆husk at carb-loade" },
    ],
  },
  {
    day: 3,
    date: "lørdag 8. august",
    title: "🏁 Løbsdag — 50 km & 160 km",
    items: [
      { icon: Trophy, text: "Race day for løbere af 50 km og 160 km!" },
      { icon: Users, text: "Fejring ved målstregen" },
      { icon: UtensilsCrossed, text: "Fælles afslutningsmiddag" },
    ],
  },
  {
    day: 4,
    date: "søndag 9. august",
    title: "✈️ Hjemrejse",
    items: [
      { icon: Coffee, text: "Morgenmad på hotellet" },
      { icon: Train, text: "Shuttlebus tilbage til Zürich lufthavn" },
      { icon: Plane, text: "Fly hjem til København" },
    ],
  },
];

interface SwissAlps100ItineraryProps {
  variant?: "default" | "overlay";
}

const SwissAlps100Itinerary = ({ variant = "default" }: SwissAlps100ItineraryProps) => {
  const isOverlay = variant === "overlay";
  
  const Wrapper = isOverlay ? "div" : "section";
  
  return (
    <Wrapper className={isOverlay ? "w-full" : "w-full py-12 md:py-20"}>
      <div className={isOverlay ? "" : "container mx-auto px-4 md:px-6"}>
        <h2 className={`font-cabinet text-3xl md:text-4xl font-bold text-center mb-4 ${isOverlay ? "text-white" : "text-charcoal"}`}>
          4 dage i Schweiz
        </h2>
        <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${isOverlay ? "text-white/70" : "text-charcoal/70"}`}>
          Fra København til de schweiziske alper — et episk trail-eventyr
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
                        <span className={isOverlay ? "text-white/85" : "text-charcoal/80"}>
                          {item.text}
                          {"linkText" in item && item.linkText && (
                            <>
                              {" "}
                              <a
                                href={`#${"linkTarget" in item ? item.linkTarget : ""}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  const el = document.getElementById("linkTarget" in item ? (item.linkTarget as string) : "");
                                  if (!el) return;
                                  const targetY = el.getBoundingClientRect().top + window.scrollY;
                                  const startY = window.scrollY;
                                  const distance = targetY - startY;
                                  const isMobileView = window.innerWidth < 768;
                                  const duration = isMobileView ? 1800 : 1000;
                                  let start: number | null = null;
                                  const step = (timestamp: number) => {
                                    if (!start) start = timestamp;
                                    const progress = Math.min((timestamp - start) / duration, 1);
                                    const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
                                    window.scrollTo(0, startY + distance * ease);
                                    if (progress < 1) requestAnimationFrame(step);
                                  };
                                  requestAnimationFrame(step);
                                }}
                                className={`cursor-pointer hover:opacity-70 transition-opacity ${isOverlay ? "text-[#FFE97F]" : "text-charcoal/60"}`}
                              >
                                {item.linkText as string}
                              </a>
                            </>
                          )}
                        </span>
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

export default SwissAlps100Itinerary;
