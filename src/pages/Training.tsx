import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
const Training = () => {
  usePageTitle('Training');
  return <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/6ff90756-d658-4625-8641-a8d712215b93.png" alt="Trail runner training on mountain peak" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-500/50" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center z-10 px-6">
          <h1 className="font-cabinet font-bold text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">Work in progress......</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Kom i form sammen med os. Vores træningsture er designet til at forberede dig på de store løb.
          </p>
        </div>
      </section>

      {/* Concept Explanation */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-left mb-12">
            <h2 className="font-cabinet font-bold text-4xl md:text-5xl text-charcoal mb-6">
              Hvad er træningsture?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Vores træningsture er perfekte til dig, der gerne vil forberede dig til et kommende trail-løb, eller bare gerne vil blive bedre til at løbe i terrænet.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vi tilbyder guidede træningsture i smukke områder, hvor du kan træne sammen med ligesindede og få professionel vejledning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Træningsturene er typisk kortere end vores eventture og fokuserer på teknik, kondition og fællesskab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Training Trips */}
      <section className="py-24 bg-stone">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Kommende træningsture
            </h2>
            <p className="text-lg text-gray-600">
              Vi opdaterer løbende med nye træningsture
            </p>
          </div>
          
          <div className="text-center text-gray-600">
            <p className="text-lg">Ingen træningsture planlagt endnu. Hold øje med denne side for opdateringer.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Training;