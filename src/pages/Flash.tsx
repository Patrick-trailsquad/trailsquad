import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Flash = () => {
  usePageTitle('Flash');
  
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/6ff90756-d658-4625-8641-a8d712215b93.png" 
            alt="Trail runner on mountain peak" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-500/50" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center z-10 px-6">
          <h1 className="font-cabinet font-bold text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Kom på eventyr - in a Flash
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Eksklusiv adgang til begrænsede trail-destinationer. Kun synlig i korte perioder - grib chancen før vinduet lukker.
          </p>
        </div>
      </section>

      {/* Concept Explanation */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Hvad er Flash-ture?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Flash-ture er vores mest eksklusive destinationer - de bliver kun tilgængelige i meget korte perioder, 
              da vinduet for at få løbsbilletter er ekstremt begrænset.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-cabinet font-semibold text-xl text-charcoal mb-3">
                Lynhurtig booking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Når vinduet åbner, har du kun timer eller få dage til at sikre din plads, før det lukker igen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎟️</span>
              </div>
              <h3 className="font-cabinet font-semibold text-xl text-charcoal mb-3">
                Begrænsede billetter
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Disse destinationer har ekstrem begrænsede løbsbilletter, hvilket gør dem til de mest eksklusive oplevelser.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-cabinet font-semibold text-xl text-charcoal mb-3">
                Premium oplevelser
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                De mest eftertragtede trail-løb med unik adgang til destinationer, der normalt er udsolgte på sekunder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⏰</span>
            </div>
            <h2 className="font-cabinet font-semibold text-2xl md:text-3xl text-charcoal mb-4">
              Ingen aktive Flash-ture lige nu
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Hold øje med vores nyhedsbrev og sociale medier. Når en Flash-tur går live, 
              får du besked med det samme - men du skal være hurtig!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full transition-colors"
              >
                Tilbage til destinationer
              </a>
              <a
                href="/#newsletter"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-full transition-colors"
              >
                Tilmeld nyhedsbrev
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flash;