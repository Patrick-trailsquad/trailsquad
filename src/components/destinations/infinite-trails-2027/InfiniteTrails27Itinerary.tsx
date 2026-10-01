import { Beer, Bus, Footprints, Mountain, Plane, Trophy, Users, UtensilsCrossed } from "lucide-react";

type ItineraryItem = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  scrollTo?: string;
};

const days: { day: number; date: string; title: string; items: ItineraryItem[] }[] = [
  {
    day: 1,
    date: "torsdag 2. september 2027",
    title: "✈️ Udrejse & shakeout",
    items: [
      { icon: Plane, text: "Fly fra København til München" },
      { icon: Bus, text: "Transfer til Bad Gastein og check-in på The Comodo" },
      { icon: UtensilsCrossed, text: "19:30 – Fælles middag på hotellet" },
    ],
  },
  {
    day: 2,
    date: "fredag 3. september 2027",
    title: "🎒 Registrering & race brief",
    items: [
      { icon: Footprints, text: "Shakeout Run fra hotellet - 4-6 km i roligt tempå", scrollTo: "shakeout-run-section" },
      { icon: Users, text: "Registrering og obligatorisk udstyrstjek" },
      { icon: Mountain, text: "Expo i Alpenarena" },
      { icon: Beer, text: "Fællesmiddag med et par store fadøl" },
      { icon: Users, text: "16:00 – Race briefing på engelsk i Congress Center" },
      { icon: UtensilsCrossed, text: "Fælles pastamiddag og tidligt i seng 🛌" },
    ],
  },
  {
    day: 3,
    date: "lørdag 4. september 2027",
    title: "🏁 Løbsdag",
    items: [
      { icon: Trophy, text: "Start: 60K kl. 6:00 · 45K kl. 6:30 · hold kl. 7:00 · 30K kl. 7:30 · 15K kl. 7:45" },
      { icon: Users, text: "Community Get-Together i Alpentherme efter målgang" },
      { icon: Trophy, text: "20:30 – Prisoverrækkelse og Celebrate the Sport" },
    ],
  },
  {
    day: 4,
    date: "søndag 5. september 2027",
    title: "🥞 Kaiserschmarren & hjemrejse",
    items: [
      { icon: UtensilsCrossed, text: "Morgenmad med ømme stænger" },
      { icon: Bus, text: "Transfer tilbage til München" },
      { icon: Plane, text: "Fly hjem til København" },
    ],
  },
];

const InfiniteTrails27Itinerary = () => (
  <div className="w-full">
    <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-center text-on-dark mb-4">
      4 dage i de østrigske alper
    </h2>
    <p className="text-center text-lg text-on-dark/70 mb-12 max-w-2xl mx-auto">
      Fra København til Gastein — trailløb, termalbad og et stærkt fællesskab
    </p>

    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-yellow" />
      <div className="space-y-10">
        {days.map((day) => (
          <div key={day.day} className="relative pl-16 md:pl-20">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 rounded-full bg-yellow flex flex-col items-center justify-center z-10 shadow-md">
              <span className="font-cabinet text-[10px] md:text-xs font-bold text-charcoal leading-none">DAG</span>
              <span className="font-cabinet text-lg md:text-2xl font-bold text-charcoal leading-none">{day.day}</span>
            </div>
            <div className="rounded-xl shadow-sm border bg-on-dark/10 backdrop-blur-md border-on-dark/20 p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                <h3 className="font-cabinet text-xl md:text-2xl font-bold text-on-dark">{day.title}</h3>
                <span className="text-sm font-medium text-on-dark/50">{day.date}</span>
              </div>
              <ul className="space-y-2.5">
                {day.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 mt-1 shrink-0 text-on-dark/50" />
                    {item.scrollTo ? (
                      <button
                        type="button"
                        onClick={() => document.getElementById(item.scrollTo!)?.scrollIntoView({ behavior: "smooth" })}
                        className="text-left text-on-dark/85 underline decoration-on-dark/40 underline-offset-4 hover:decoration-yellow hover:text-on-dark transition-colors cursor-pointer"
                      >
                        {item.text}
                      </button>
                    ) : (
                      <span className="text-on-dark/85">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    <p className="text-center text-xs text-on-dark/50 mt-10">
      Programmet er foreløbigt og baseret på arrangørens program for 2026. Tider tilpasses flytider og det endelige 2027-program.
    </p>
  </div>
);

export default InfiniteTrails27Itinerary;
