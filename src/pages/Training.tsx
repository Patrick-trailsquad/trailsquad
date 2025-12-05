import { useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useIsMobile } from "../hooks/use-mobile";
import { useNavigateAndScroll } from "../hooks/useNavigateAndScroll";
import { useYouTubePlayer } from "../hooks/useYouTubePlayer";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { TrainingRegistrationModal } from "@/components/TrainingRegistrationModal";
import trailFoxLogo from "@/assets/trail-fox-logo-white.png";
import trailSquadLogo from "@/assets/trail-squad-logo-yellow.png";
import trainingSession3Image from "@/assets/training-session-3.jpg";
const Training = () => {
  usePageTitle('Training');
  useScrollToTop();
  const isMobile = useIsMobile();
  const navigateAndScroll = useNavigateAndScroll();
  const videoId = 'viCyanUDC3s';
  const {
    playerRef: player2Ref
  } = useYouTubePlayer(videoId, {
    autoplay: 1,
    mute: 1,
    loop: 1,
    playlist: videoId,
    controls: 0,
    showinfo: 0,
    rel: 0,
    iv_load_policy: 3,
    modestbranding: 1,
    playsinline: 1,
    start: 3
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState({
    title: "",
    date: "",
    meetingTime: "",
    endTime: "",
    location: "",
    meetingPlace: ""
  });
  const handleSessionRegistration = (title: string, date: string, meetingTime: string, endTime: string, location: string, meetingPlace: string) => {
    setSelectedSession({
      title,
      date,
      meetingTime,
      endTime,
      location,
      meetingPlace
    });
    setModalOpen(true);
  };
  return <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Meet the Team Banner with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full" style={{
          transform: isMobile ? 'scale(3.5)' : 'scale(1.5)',
          transformOrigin: 'center center'
        }}>
            <div ref={player2Ref} className="absolute inset-0 w-full h-full" />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-5xl xl:text-8xl font-black text-white leading-none tracking-tight drop-shadow-lg">
                  Trail Fox og Trail Squad trail-træning
                </h1>
              </div>
            </div>
            
            {/* Images Section - 40% */}
            <div className="lg:col-span-4 flex gap-8 justify-center items-end mt-0 lg:mt-0">
              <div className="relative mt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/lovable-uploads/trail-runners-forest.jpg" alt="Trail Fox" className="w-52 h-80 md:w-60 md:h-96 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Trail Fox Logo at bottom */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                    <img src={trailFoxLogo} alt="Trail Fox Logo" className="h-16 md:h-20 w-auto object-contain" />
                  </div>
                </div>
              </div>
              
              <div className="relative mb-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img src="/lovable-uploads/trail-squad-runners.jpg" alt="Trail Squad" className="w-52 h-80 md:w-60 md:h-96 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Trail Squad Logo at top */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-36 md:w-44">
                    <img src={trailSquadLogo} alt="Trail Squad Logo" className="w-full h-auto object-contain drop-shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Grey Banner with Logos */}
      <section className="w-full bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Trail Fox Side */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img src={trailFoxLogo} alt="Trail Fox Logo" className="h-20 md:h-24 w-auto object-contain" />
              <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-white">
                Trail Fox
              </h1>
              <h3 className="font-cabinet text-xl md:text-2xl text-white/80">Trail Fox serien er en række af Danmarks fedeste trail-løb. 
Med mange års erfaring inden for eventafvikling, og med tusindvis af loyale racedeltagere, er Trail Fox et fyrtårn i det danske trail-miljø. </h3>
            </div>

            {/* Trail Squad Side */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img src={trailSquadLogo} alt="Trail Squad Logo" className="h-20 md:h-24 w-auto object-contain" />
              <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-white">
                Trail Squad
              </h1>
              <h3 className="font-cabinet text-xl md:text-2xl text-white/80">Trail Squad er et niche rejsebureau med fokus på trail-løb i udlandet. Trail Squad håndplukker de fedeste løb, står for det lavpraktiske, og sørger for, at alle bliver klar, via træningssessions op til race! </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Explanation */}
      <section className="py-16 px-0 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-left mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl text-charcoal mb-6">Månedlige træningssessions!
Skal du med?</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">Er trailløb nyt for dig, og noget som du gerne vil blive klogere på?


Eller er du erfaren løber, der vil være en del af et løbe-community, som løber både trail-races i Danmark og udlandet?


Så vil vores trail træningssessions være noget for dig!</p>
              <p className="text-lg text-gray-600 leading-relaxed">Nåh ja, og så er det gratis at være med!</p>
              
            </div>

            {/* Training Sessions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-12 px-2 md:px-0">
              {/* Session 2 (moved to first position) */}
              <div onClick={() => handleSessionRegistration("Træningssession #2", "16 december 2025", "18:00", "19:30", "Dyrehaven, Klampenborg", "Peter Lieps Vej 5")} className="bg-stone rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                <div className="relative h-80 bg-charcoal/20">
                  <img src="/lovable-uploads/training-session-2.png" alt="Training Session 2" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                  <h3 className="font-cabinet text-2xl font-bold text-white mb-0 absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">Træningssession #2<br />[december]</h3>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="space-y-2 text-gray-600 text-sm mb-6">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Dato:</span> <time dateTime="2025-12-16">16 december 2025</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødetid:</span> <time dateTime="2025-12-16T18:00:00+01:00">18:00</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Vi slutter (ca):</span> <time dateTime="2025-12-16T19:30:00+01:00">19:30</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Sted:</span> Dyrehaven, Klampenborg
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødested:</span> Peter Lieps Vej 5
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    Det er blevet mørkt, og vi skal have pandelamperne på. Bakkerne skal vi nok finde i skumringen. Mødested er Den Røde Port ved Klampenborg Station.
                  </p>
                  <button onClick={() => handleSessionRegistration("Træningssession #2", "16 december 2025", "18:00", "19:30", "Dyrehaven, Klampenborg", "Peter Lieps Vej 5")} className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black">
                    Tilmeld
                  </button>
                </div>
              </div>

              {/* Session 3 */}
              <div onClick={() => handleSessionRegistration("Træningssession #3", "13 januar 2026", "18:00", "19:30", "Dyrehaven, Klampenborg", "Peter Lieps Vej 5")} className="bg-stone rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                <div className="relative h-80 bg-charcoal/20">
                  <img src={trainingSession3Image} alt="Training Session 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                  <h3 className="font-cabinet text-2xl font-bold text-white mb-0 absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">Træningssession #3<br />[januar]</h3>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="space-y-2 text-gray-600 text-sm mb-6">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Dato:</span> <time dateTime="2026-01-13">13 januar 2026</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødetid:</span> <time dateTime="2026-01-13T18:00:00+01:00">kl 18.00</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Vi slutter (ca):</span> <time dateTime="2026-01-13T19:30:00+01:00">19.30</time>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Sted:</span> Dyrehaven, Klampenborg
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Mødested:</span> Peter Lieps Vej 5
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">Nyt år, nye mål! Vi starter 2026 med en mørk session i Dyrehaven, så husk pandelampen. Vi satser på en hyggelig tur på 10-12 km. Vi mødes Den Røde Port, som vi plejer. </p>
                  <button onClick={() => handleSessionRegistration("Træningssession #3", "13 januar 2026", "18:00", "19:30", "Dyrehaven, Klampenborg", "Peter Lieps Vej 5")} className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black">
                    Tilmeld
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Images Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src="/lovable-uploads/trail-runner-mountain-peak.jpg" alt="Trail runner on mountain peak" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/70" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-5xl xl:text-8xl font-black text-charcoal leading-none tracking-tight">
                  På jagt efter dit næste race?
                </h1>
              </div>
            </div>
            
            {/* Images Section - 40% */}
            <div className="lg:col-span-4 flex flex-col gap-6 justify-center mt-0 lg:mt-0">
              <div className="relative">
                <a href="https://trailfoxseries.dk/" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-2xl shadow-2xl drop-shadow-lg transition-transform duration-300 hover:scale-105 cursor-default">
                  <img src="/lovable-uploads/training-landscape-1.jpg" alt="Trail Training" className="w-full h-32 md:h-40 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="bg-[#FFDC00] text-black px-6 py-2 rounded-full font-cabinet font-medium border-2 border-black hover:bg-[#FFDC00]/90 transition-colors duration-300 whitespace-nowrap cursor-pointer">Se kommende Trail Fox løb</span>
                  </div>
                </a>
              </div>
              
              <div className="relative" style={{
              transform: 'translateX(-15px)'
            }}>
                <div onClick={e => {
                e.preventDefault();
                navigateAndScroll('/', 'upcoming-trips');
              }} className="block relative overflow-hidden rounded-2xl shadow-2xl drop-shadow-lg transition-transform duration-300 hover:scale-105 cursor-default">
                  <img src="/lovable-uploads/training-landscape-2.jpg" alt="Trail Training" className="w-full h-32 md:h-40 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="bg-[#FFDC00] text-black px-6 py-2 rounded-full font-cabinet font-medium border-2 border-black hover:bg-[#FFDC00]/90 transition-colors duration-300 whitespace-nowrap cursor-pointer">Se kommende Trail Squad rejser</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Training Trips */}
      
      <TrainingRegistrationModal open={modalOpen} onOpenChange={setModalOpen} sessionTitle={selectedSession.title} sessionDate={selectedSession.date} sessionMeetingTime={selectedSession.meetingTime} sessionEndTime={selectedSession.endTime} sessionLocation={selectedSession.location} sessionMeetingPlace={selectedSession.meetingPlace} />

      <Footer />
    </div>;
};
export default Training;