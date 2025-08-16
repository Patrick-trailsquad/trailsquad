import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";
import SavoyPalaceCarousel from "../../components/destinations/miut/SavoyPalaceCarousel";
import MIUTTestimonials from "../../components/destinations/miut/MIUTTestimonials";

const MIUT = () => {
  useScrollToTop();
  usePageTitle('Madeira Island Ultra Trail');
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[60vh]">
        <img
          src="/lovable-uploads/af5c6191-258b-4a41-9a6d-7e722d1dad97.png"
          alt="Madeira Island Ultra Trail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-stone transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Tilbage til forsiden
          </Link>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-2">
            Madeira Island Ultra Trail, Portugal
          </h1>
          <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full font-cabinet font-medium text-sm md:text-base border-2 border-[#FFDC00]">
            LØB AFSLUTTET 🏁
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFDC00] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Lokation</h1>
              <h2 className="font-cabinet text-lg text-charcoal">Funchal, Madeira Island, Portugal</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Løbsdag</h1>
              <h2 className="font-cabinet text-lg text-charcoal">April 26, 2025</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Rejsevarighed</h1>
              <h2 className="font-cabinet text-lg text-charcoal">24.-27. april 2025 (4 dage)</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distancer</h1>
              <h2 className="font-cabinet text-lg text-charcoal">16km, 42km, 60km, 85km, 115km</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Løbet</h2>
                <p className="text-lg">
                  Begiv dig ud på et ekstraordinært løbeeventyr gennem Madeira-øens fantastiske landskaber, 
                  hvor det legendariske MIUT (Madeira Island Ultra Trail) venter. Dette prestigefyldte løb tager dig 
                  på en uforglemmelig rejse fra nordkysten i Porto Moniz til den sydlige by 
                  Machico og krydser hele øen gennem det mest betagende terræn.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Oplevelsen</h2>
                <p className="text-lg">
                  Ruten kombinerer tekniske bjergstier, gamle levada-vandveje og frodige laurbærsove, 
                  der er UNESCO-verdensarvssteder. Når du navigerer gennem forskellige mikroklimaer, vil du 
                  støde på alt fra tågede bjergtoppe til subtropiske dale, hvilket gør dette til en af 
                  Europas mest unikke og udfordrende ultraløbsoplevelser.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">Udfordringen</h2>
                <p className="text-lg">
                  Med udfordrende højdeforskelle og teknisk terræn tilbyder MIUT distancer for alle fra 
                  16km Mini MIUT til det episke 115km ultraløb, der klatrer til Pico Ruivo, Madeiras højeste top på 
                  1.862 meter, hvor Atlanterhavet strækker sig endeløst i alle retninger.
                </p>
              </div>
            </div>

            <Button 
              asChild
              variant="charcoal"
              size="md"
              className="mb-8"
            >
              <a 
                href="https://www.miutmadeira.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Besøg officiel løbshjemmeside
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/0RXss51DMhg?si=I5dBXpbWTdgB_LJ7"
                title="Madeira Island Ultra Trail"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Fra</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">12.000 DKK</p>
                  <p className="text-sm text-gray-500">inkl. moms</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Løbsstatus</p>
                  <p className="font-cabinet text-xl font-bold text-black">LØB AFSLUTTET 🏁</p>
                </div>
              </div>
              <button 
                disabled
                className="w-full bg-gray-300 text-gray-600 cursor-not-allowed px-8 py-4 rounded-full font-cabinet font-medium border-2 border-gray-400"
              >
                Ikke tilgængelig for booking i øjeblikket
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <IncludedAmenities className="bg-transparent" />
      </div>
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <SavoyPalaceCarousel />
      </div>
      
      <MIUTTestimonials />
      
      <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default MIUT;
