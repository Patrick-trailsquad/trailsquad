import { Plane, Ship, Mountain, UtensilsCrossed, Binoculars, Users, Trophy, MapPin, Coffee } from "lucide-react";

const days = [
  {
    day: 1,
    date: "20. august",
    title: "Ankomst til Nuuk",
    items: [
      { icon: Plane, text: "Fly fra København til Nuuk" },
      { icon: MapPin, text: "Transfer fra lufthavn til hotel" },
      { icon: Coffee, text: "Check-in og tid til at udforske Nuuk" },
      { icon: UtensilsCrossed, text: "Velkomst og fælles middag" },
    ],
  },
  {
    day: 2,
    date: "21. august",
    title: "Hvalsafari & forberedelse",
    items: [
      { icon: Binoculars, text: "3-timers hvalsafari i Nuuk-fjorden" },
      { icon: Users, text: "Coaching og løbsstrategi med holdet" },
      { icon: Mountain, text: "Udforsk Nuuk på egen hånd" },
      { icon: UtensilsCrossed, text: "Fælles middag og pre-race briefing" },
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
      { icon: UtensilsCrossed, text: "Fælles afslutnings-middag" },
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

const KangNu26Itinerary = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
          4 dage i Grønland
        </h2>
        <p className="text-center text-charcoal/70 text-lg mb-12 max-w-2xl mx-auto">
          Fra København til Nuuk — en rejse du aldrig glemmer
        </p>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#FFDC00]" />

          <div className="space-y-10">
            {days.map((day) => (
              <div key={day.day} className="relative pl-16 md:pl-20">
                {/* Day badge on the line */}
                <div className="absolute left-0 top-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#FFDC00] flex flex-col items-center justify-center z-10 shadow-md">
                  <span className="font-cabinet text-[10px] md:text-xs font-bold text-charcoal leading-none">DAG</span>
                  <span className="font-cabinet text-lg md:text-2xl font-bold text-charcoal leading-none">{day.day}</span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-sm border border-stone-dark/10 p-5 md:p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-cabinet text-xl md:text-2xl font-bold text-charcoal">
                      {day.title}
                    </h3>
                    <span className="text-sm text-charcoal/50 font-medium whitespace-nowrap ml-3">
                      {day.date}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {day.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-charcoal/40 flex-shrink-0" />
                        <span className="text-charcoal/80">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KangNu26Itinerary;
