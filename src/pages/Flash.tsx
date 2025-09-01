import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
const Flash = () => {
  usePageTitle('Flash');
  return <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/6ff90756-d658-4625-8641-a8d712215b93.png" alt="Trail runner on mountain peak" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-500/50" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center z-10 px-6">
          <h1 className="font-cabinet font-bold text-4xl md:text-6xl text-white mb-6 drop-shadow-lg flex items-center justify-center gap-3">
            Kom på eventyr - in a Flash
            <img src="/lovable-uploads/8d81c8f5-9280-4158-b280-f9a85826d595.png" alt="Lightning bolt" className="w-12 h-12 md:w-16 md:h-16" />
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Eksklusiv adgang til begrænsede trail-destinationer. Kun synlig i korte perioder - grib chancen før vinduet lukker.
          </p>
        </div>
      </section>

      {/* Concept Explanation */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-left mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl text-charcoal mb-6">
              Hvad er Flash-ture?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Der er nogle trail-løb, som er sværere at få adgang til end andre. De kan være mere kendte, mere prestigefyldte, der kan være færre pladser osv. Eller det er bare mere besværligt for Trail Squad at få øremærket flere billetter ad gangen (som vi normalt gør).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Derfår må vi gribe til ukonventionelle metoder - Flash-metoder!
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vi booker racebilletterne løbende, og lukker Flash-turen når enten løbet er udsolgt, eller når vi har samlet den lille eksklusiv skare, som skal med.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          
        </div>
      </section>

      <Footer />
    </div>;
};
export default Flash;