import { useState, useEffect, useRef } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { TrainingRegistrationModal } from "@/components/TrainingRegistrationModal";
import TrainingVideoSection from "@/components/training/TrainingVideoSection";
import trailFoxLogo from "@/assets/trail-fox-logo-white.svg";
import trailSquadLogo from "@/assets/trail-squad-logo-yellow.png";
import squadTrainingHero from "@/assets/squad-training-hero.webp";
import trainingSession3Image from "@/assets/training-session-3.jpg";
import copenhillImage from "@/assets/copenhill-training.avif";
import trainingSession4Image from "@/assets/training-session-4.jpg";
import dyrehaven7Image from "@/assets/dyrehaven-training-7.png";
import trainingSession5Image from "@/assets/training-session-5.jpg";
import tourDeFuresoenImage from "@/assets/tour-de-furesoen.jpg";
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
    pickupOptions: undefined as {value: string;label: string;spotsKey?: string;}[] | undefined
  });
  const handleSessionRegistration = (title: string, date: string, meetingTime: string, endTime: string, location: string, meetingPlace: string, pickupOptions?: {value: string;label: string;spotsKey?: string;}[]) => {
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
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl text-charcoal mb-6">Træning for dig, der skal med på tur</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">Er du tilmeldt en af Trail Squads rejser? Så kom med til vores månedlige træningssessions, hvor vi løber sammen, snakker om de konkrete races og lærer hinanden at kende op til afgang.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Det er gratis, uforpligtende og en god måde at føle sig klar på – uanset niveau.</p>
            </div>

            {/* Training Sessions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 px-2 md:px-0">
              {/* Session 11 */}
              <div onClick={() => handleSessionRegistration("Squad-træning #11", "5 maj 2026", "18:00", "19:30", "Dyrehaven, Klampenborg", "Peter Lieps Vej 5")} className="bg-stone rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                <div className="relative h-80 bg-charcoal/20">
                  <img src={trainingSession5Image} alt="Squad-træning #11" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                  <h3 className="font-cabinet text-2xl font-bold text-white mb-0 absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">Squad-træning #11<br />[maj]</h3>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="space-y-2 text-gray-600 text-sm mb-6">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Dato:</span> <time dateTime="2026-05-05">5 maj 2026</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødetid:</span> <time dateTime="2026-05-05T18:00:00+02:00">kl 18.00</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Vi slutter (ca):</span> <time dateTime="2026-05-05T19:30:00+02:00">19.30</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Sted:</span> Dyrehaven, Klampenborg
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødested:</span> Peter Lieps Vej 5
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Vi løber 10-12 km i roligt tempo. Vi finder de kringlede stier, nogle stigninger at bestige, og ellers bare nyder, at det er ved at være sommer ☀️</p>
                  <button onClick={(e) => { e.stopPropagation(); handleSessionRegistration("Squad-træning #11", "5 maj 2026", "18:00", "19:30", "Dyrehaven, Klampenborg", "Peter Lieps Vej 5"); }} className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black">
                    Tilmeld
                  </button>
                </div>
              </div>

              {/* Session 12 - TBA */}
              <div className="bg-stone rounded-lg overflow-hidden shadow-lg flex flex-col opacity-50 grayscale pointer-events-none relative">
                <div className="absolute top-3 right-3 z-20 bg-charcoal text-white text-xs font-cabinet font-bold px-3 py-1 rounded-full">
                  TBA
                </div>
                <div className="relative h-80 bg-charcoal/20">
                  <img src={dyrehaven7Image} alt="Squad-træning #12" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                  <h3 className="font-cabinet text-2xl font-bold text-white mb-0 absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">Squad-træning #12</h3>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="space-y-2 text-gray-600 text-sm mb-6">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Dato:</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødetid:</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Vi slutter (ca):</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Sted:</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødested:</span> TBA
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Detaljer følger snart.</p>
                  <button disabled className="w-full bg-gray-400 text-white px-8 py-4 rounded-full font-cabinet font-medium cursor-not-allowed border-2 border-gray-400">
                    TBA
                  </button>
                </div>
              </div>

              {/* Session 13 - TBA */}
              <div className="bg-stone rounded-lg overflow-hidden shadow-lg flex flex-col opacity-50 grayscale pointer-events-none relative">
                <div className="absolute top-3 right-3 z-20 bg-charcoal text-white text-xs font-cabinet font-bold px-3 py-1 rounded-full">
                  TBA
                </div>
                <div className="relative h-80 bg-charcoal/20">
                  <img src={copenhillImage} alt="Squad-træning #13" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                  <h3 className="font-cabinet text-2xl font-bold text-white mb-0 absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">Squad-træning #13</h3>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="space-y-2 text-gray-600 text-sm mb-6">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Dato:</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødetid:</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Vi slutter (ca):</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Sted:</span> TBA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødested:</span> TBA
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Detaljer følger snart.</p>
                  <button disabled className="w-full bg-gray-400 text-white px-8 py-4 rounded-full font-cabinet font-medium cursor-not-allowed border-2 border-gray-400">
                    TBA
                  </button>
                </div>
              </div>
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
