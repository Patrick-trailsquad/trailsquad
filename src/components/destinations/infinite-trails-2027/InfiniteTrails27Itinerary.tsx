import { Bus, Coffee, Footprints, Mountain, Plane, Trophy, Users, UtensilsCrossed } from "lucide-react";

const days = [
  {
    day: 1,
    date: "fredag 3. september 2027",
    title: "✈️ Udrejse til Østrig",
    items: [
      { icon: Plane, text: "Fly fra København til München" },
      { icon: Bus, text: "Transfer til Bad Hofgastein" },
      { icon: Coffee, text: "Check-in på The Comodo" },
      { icon: Users, text: "Startnumre, race brief og fælles forberedelse" },
    ],
  },
  {
    day: 2,
    date: "lørdag 4. september 2027",
    title: "🏁 Løbsdag",
    items: [
      { icon: Trophy, text: "Race day for 15K, 30K, 45K, 60K og holdstafetten" },
      { icon: Mountain, text: "Alpine spor og bjergtoppe i Gasteinertal" },
      { icon: Users, text: "Fejring med squaden i Athlete Garden" },
      { icon: UtensilsCrossed, text: "Fælles middag efter løbet" },
    ],
  },
  {
    day: 3,
    date: "søndag 5. september 2027",
    title: "♨️ Restitution & fællesskab",
    items: [
      { icon: Coffee, text: "Morgenmad og rolig start på dagen" },
      { icon: Footprints, text: "Let restitutionstur i Bad Hofgastein" },
      { icon: Users, text: "Eventets afslutning og fællesskab i Gastein" },
      { icon: Mountain, text: "Tid til termalbad og bjergby" },
    ],
  },
  {
    day: 4,
    date: "mandag 6. september 2027",
    title: "✈️ Hjemrejse",
    items: [
      { icon: Coffee, text: "Morgenmad på hotellet" },
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
                    <span className="text-on-dark/85">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    <p className="text-center text-xs text-on-dark/50 mt-10">
      Programmet er foreløbigt og tilpasses flytider og løbsarrangørens endelige program.
    </p>
  </div>
);

export default InfiniteTrails27Itinerary;
