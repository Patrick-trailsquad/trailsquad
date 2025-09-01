import React from 'react';
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";

const IstriaHero = () => {
  return (
    <div className="relative h-[70vh]">
      <img
        src="/lovable-uploads/252cbd72-9c01-4a8c-b76c-fdc820f43886.png"
        alt="Istria 100 by UTMB"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-8">
          Istria 100 by UTMB, Kroatien
        </h1>
      </div>
    </div>
  );
};

const IstriaInfoBanner = () => {
  return (
    <div className="w-full bg-[#FFDC00] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Lokation</h1>
            <h2 className="font-cabinet text-lg text-charcoal">Istrien, Kroatien</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Løbsdag</h1>
            <h2 className="font-cabinet text-lg text-charcoal">12. april 2026</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Rejsevarighed</h1>
            <h2 className="font-cabinet text-lg text-charcoal">9.-13. april 2026 (5 dage)</h2>
          </div>
          <div>
            <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distancer</h1>
            <h2 className="font-cabinet text-lg text-charcoal">100km, 50km, 25km</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const IstriaDescription = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-12">
        <div>
          <h2 className="font-cabinet text-3xl font-bold mb-6">Løbet</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Istria 100 by UTMB er en del af den prestigefyldte UTMB World Series og finder sted i det smukke Istrien i Kroatien. 
            Dette trail løb byder på spektakulære ruter gennem middelalderlige byer, olivenlunde og langs den dramatiske adriaterhavskyst.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Med tre forskellige distancer - 100km, 50km og 25km - er der mulighed for løbere på alle niveauer at deltage i denne 
            enestående oplevelse i en af Europas mest charmerende regioner.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-3xl font-bold mb-6">Oplevelsen</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Istrien kombinerer det bedste af to verdener - krystalklart adriaterhav og grønne bakker fyldt med vinmarker og oliventræer. 
            Løberne vil passere gennem charmerende byer som Poreč, Rovinj og Pula, hver med deres unikke historie og arkitektur.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Regionen er kendt for sin gastronomiske excellence med trøfler, oliveolie og vine af verdensklasse. Efter løbet kan 
            deltagerne nyde den lokale kultur og cuisine i en af Kroatiens mest attraktive turistdestinationer.
          </p>
        </div>

        <div>
          <h2 className="font-cabinet text-3xl font-bold mb-6">Udfordringen</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Som en del af UTMB World Series repræsenterer Istria 100 en løbsoplevelse i absolut topklasse. 
            De varierede terræner fra kyststi til bakkede indland giver en teknisk udfordrende og samtidig utrolig smuk rute.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Med løbet placeret i april nyder deltagerne perfekte vejrforhold med milde temperaturer og mindre turistmængder, 
            hvilket giver den optimale ramme for en stærk løbspræstation.
          </p>
        </div>

        <div className="bg-stone p-6 rounded-xl">
          <p className="text-lg font-medium mb-4 text-center">
            Vil du vide mere om løbet og tilmeldingsprocessen?
          </p>
          <div className="text-center">
            <a
              href="https://istria.utmb.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terra text-white px-8 py-3 rounded-lg font-medium hover:bg-terra/90 transition-colors"
            >
              Besøg officiel hjemmeside
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Istria100 = () => {
  usePageTitle('Istria 100 by UTMB - Trail Running Kroatien');
  
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      <IstriaHero />
      <IstriaInfoBanner />
      <IstriaDescription />
      <BackToDestinationsButton />
      <Footer />
    </div>
  );
};

export default Istria100;