import { useState, useEffect, useRef } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { TrainingRegistrationModal } from "@/components/TrainingRegistrationModal";
import squadTrainingHero from "@/assets/squad-training-hero.webp";
import trainingSession3Image from "@/assets/training-session-3.jpg";
import squadTraining12Image from "@/assets/squad-training-12.png";
import trainingSession4Image from "@/assets/training-session-4.jpg";
import dyrehaven7Image from "@/assets/dyrehaven-training-7.png";
import trainingSession5Image from "@/assets/training-session-5.jpg";
import squadTraining13Image from "@/assets/squad-training-13.png";
import squadTraining14Image from "@/assets/squad-training-14.png";
type PickupOption = {
  value: string;
  label: string;
  spotsKey?: string;
};

type TrainingSession = {
  title: string;
  monthLabel: string;
  date: string;
  meetingTime: string;
  endTime: string;
  location: string;
  meetingPlace: string;
  description: string;
  image: string;
  isActive: boolean;
  pickupOptions?: PickupOption[];
};

const trainingSessions: TrainingSession[] = [
  {
    title: "Squad-træning #11",
    monthLabel: "[maj]",
    date: "5 maj 2026",
    meetingTime: "18:00",
    endTime: "19:30",
    location: "Dyrehaven, Klampenborg",
    meetingPlace: "Peter Lieps Vej 5",
    description:
      "En fællestræning med fokus på bakkesprint og bakketeknik, så vi kan arbejde med power, rytme og kontrol på stigningerne. Det er sidste fællestræning inden afgang mod Transylvanien, og vi gennemgår de sidste spørgsmål, udstyr mv.\nMan er dog mere end velkommen, uanset hvilket race man skal løbe 🏃",
    image: trainingSession5Image,
    isActive: true,
  },
  {
    title: "Squad-træning #12",
    monthLabel: "[juni]",
    date: "16 juni 2026",
    meetingTime: "18:00",
    endTime: "19:30",
    location: "Frederiksberg Have",
    meetingPlace: "Frederiksberg Runddel",
    description:
      "En fællestræning med fokus på bakkesprint og bakketeknik, så vi kan arbejde med power, rytme og kontrol på stigningerne. Mere info om rute og setup følger.",
    image: squadTraining12Image,
    isActive: true,
  },
  {
    title: "Squad-træning #13",
    monthLabel: "[juli]",
    date: "7 juli 2026",
    meetingTime: "18:00",
    endTime: "19:30",
    location: "Dyrehaven",
    meetingPlace: "Skodsborg Kurhotel",
    description:
      "Vi starter og slutter på Skodsborg Kurhotel, og vi finder de kringlede og kuperede stier i Dyrehaven. Vi krydrer med et par intervalløb, så pulsen kommer op. \nVi får en tår at drikke til sidst på hotellet.",
    image: squadTraining13Image,
    isActive: true,
  },
  {
    title: "Squad-træning #14",
    monthLabel: "[august]",
    date: "18 august 2026",
    meetingTime: "18:00",
    endTime: "19:30",
    location: "Dyrehaven, Klampenborg",
    meetingPlace: "Peter Lieps Vej 5",
    description:
      "En fællestræning i roligt tempo med plads til gode snakke, fælles forberedelse og spørgsmål til de kommende ture. Mere info følger.",
    image: squadTraining14Image,
    isActive: true,
  },
];

const isPendingSession = (session: TrainingSession) => {
  const values = [session.date, session.meetingTime, session.endTime, session.location, session.meetingPlace];
  return values.some((value) => value === "TBD" || value === "TBA");
};

const SquadTraining = () => {
  usePageTitle('Squad Training');
  useScrollToTop();
  const navigateAndScroll = useNavigateAndScroll();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const img = heroRef.current.querySelector('[data-parallax]') as HTMLElement;
      if (img) {
        img.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState({
    title: "",
    date: "",
    meetingTime: "",
    endTime: "",
    location: "",
    meetingPlace: "",
      pickupOptions: undefined as PickupOption[] | undefined
  });
  const handleSessionRegistration = (title: string, date: string, meetingTime: string, endTime: string, location: string, meetingPlace: string, pickupOptions?: PickupOption[]) => {
    setSelectedSession({
      title,
      date,
      meetingTime,
      endTime,
      location,
      meetingPlace,
      pickupOptions
    });
    setModalOpen(true);
  };
  return <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Meet the Team Banner with Video Background */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={squadTrainingHero} alt="Trail Squad træning" className="absolute inset-0 w-full h-[130%] object-cover will-change-transform" data-parallax />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-5xl xl:text-8xl font-black text-white tracking-tight drop-shadow-lg flex flex-col gap-2 md:gap-4">
                  <span>Dedikerede træningssessions</span>
                  <span>for deltagere på</span>
                  <span>Trail Squads ture</span>
                  <span>👇</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Concept Explanation */}
      <section className="py-16 px-0 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-left mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl text-charcoal mb-6">Træning for dig, der skal med på eventyr 🌋</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">Er du tilmeldt en af Trail Squads rejser? Så kom med til vores månedlige træningssessions, hvor vi løber sammen, snakker om de konkrete races og lærer hinanden at kende op til afgang.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Det er 'en del af pakken', uforpligtende og en god måde at føle sig klar på – uanset niveau.</p>
            </div>

            {/* Training Sessions */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 mt-12 px-2 md:px-0">
              {trainingSessions.map((session) => {
                const isActiveSession = session.isActive && !isPendingSession(session);

                return (
                <div
                  key={session.title}
                  onClick={isActiveSession ? () => handleSessionRegistration(session.title, session.date, session.meetingTime, session.endTime, session.location, session.meetingPlace, session.pickupOptions) : undefined}
                  className={`bg-stone rounded-lg overflow-hidden shadow-lg flex flex-col ${isActiveSession ? "transition-transform duration-300 hover:scale-105 cursor-pointer" : "opacity-50 grayscale pointer-events-none relative"}`}
                >
                  <div className="relative h-80 bg-charcoal/20">
                    <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                    <h3 className="font-cabinet text-2xl font-bold text-white mb-0 absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
                      {session.title}
                      <br />
                      {session.monthLabel}
                    </h3>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="space-y-2 text-gray-600 text-sm mb-6">
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Dato:</span> <time>{session.date}</time>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Mødetid:</span> <time>kl {session.meetingTime.replace(":", ".")}</time>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Vi slutter (ca):</span> <time>{session.endTime.replace(":", ".")}</time>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Sted:</span> {session.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Mødested:</span> {session.meetingPlace}
                      </p>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow whitespace-pre-line">{session.description}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSessionRegistration(session.title, session.date, session.meetingTime, session.endTime, session.location, session.meetingPlace, session.pickupOptions);
                      }}
                      disabled={!isActiveSession}
                      className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black"
                    >
                      {isActiveSession ? "Tilmeld" : "TBD"}
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Current Training Trips */}
      
      <TrainingRegistrationModal open={modalOpen} onOpenChange={setModalOpen} sessionTitle={selectedSession.title} sessionDate={selectedSession.date} sessionMeetingTime={selectedSession.meetingTime} sessionEndTime={selectedSession.endTime} sessionLocation={selectedSession.location} sessionMeetingPlace={selectedSession.meetingPlace} pickupOptions={selectedSession.pickupOptions} />

      <Footer />
    </div>;
};
export default SquadTraining;
