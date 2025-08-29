import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Flash = () => {
  usePageTitle('Flash');
  
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-cabinet font-bold text-4xl md:text-6xl text-charcoal mb-6">
            Flash
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Hurtige updates og nyheder fra Trail Squad
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="font-cabinet font-semibold text-2xl md:text-3xl text-charcoal mb-6">
              Kommende snart
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Denne side er under udvikling. Her vil du snart kunne finde de seneste opdateringer, 
              nyheder og flash-meddelelser fra Trail Squad teamet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full transition-colors"
              >
                Tilbage til forsiden
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