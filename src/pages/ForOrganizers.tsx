import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { ArrowRight, Users, Globe, Trophy, Heart } from "lucide-react";
const ForOrganizers = () => {
  usePageTitle('For Organizers');
  useScrollToTop();
  return <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/fff510ec-9973-4a99-8cb6-33660b099c4f.png" alt="Trail runner by mountain lakes in the Dolomites" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cabinet text-4xl md:text-7xl font-bold text-white mb-6">For Race Organisers</h1>
            <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">Trail Squad organises premium trips for enthusiastic runners, who wish to race the best trails across Europe - should we join yours?</p>
            
          </div>
        </div>
      </section>

      {/* This is Trail Squad Section */}
      

      {/* What We Offer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Why partner with Trail Squad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We bring years of experience in organising premium trail running adventures across Europe's most spectacular destinations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 w-full">
                <img src="/lovable-uploads/5217692f-4c41-4575-bb01-9039ef65f988.png" alt="Trail Squad community at various trail running events" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-cabinet text-xl font-bold mb-3">We bring runners to your race</h3>
                <p className="text-gray-600">If your race becomes one of the Trail Squad destinations then we will work our magic to get our network of Nordic runners to join. We fly out of Copenhagen so most of us are probably Danish 🇩🇰</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 w-full">
                <img src="/lovable-uploads/21be0cf9-d864-4e72-a063-93d2cf7cdc0c.png" alt="Trail Squad premium experience" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-cabinet text-xl font-bold mb-3">We create quality content from your race</h3>
                <p className="text-gray-600">We are good at social media and we create action shots and short documentaries from our races. Essentially we will market your race for you with high quality video. Our runners love it - and so will you 🫶</p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Partnership Benefits */}
      

      {/* New Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">What Trail Squad needs from you </h1>
                <h2 className="font-cabinet text-xl md:text-2xl text-gray-600">When you give us access to a number of your race tickets, as well as flexibility across distances, then we can create a full trail run travel package.

              </h2>
                
              </div>
              
              <div className="rounded-xl overflow-hidden">
                <img src="/lovable-uploads/ec4f24fc-7514-4f14-b1fc-db1b9fbd342d.png" alt="Trail Squad founders in branded gear" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      

      <Footer />
    </div>;
};
export default ForOrganizers;