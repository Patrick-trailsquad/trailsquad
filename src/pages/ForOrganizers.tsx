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
            <h1 className="font-cabinet text-4xl md:text-7xl font-bold text-white mb-6">
              For Race Organizers
            </h1>
            <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Trail Squad organizes premium trips for enthusiastic runners, who wish to race the best trails across Europe - should we join yours?
            </p>
            <Button className="bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium border-2 border-black hover:bg-white transition-colors duration-300 flex items-center gap-2 mx-auto text-lg">
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* This is Trail Squad Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-8 text-center">
              We are Trail Squad
            </h2>
            
            <div className="relative flex justify-center min-h-[600px]">
              {/* Image - Center */}
              <img src="/lovable-uploads/e5e63927-e80f-44e4-acb3-662826c72d0d.png" alt="Patrick Lund and Emil Albrechtsen - Trail Squad founders" className="w-full max-w-lg rounded-xl shadow-lg" loading="lazy" />
              
              {/* Emil - Overlaying from left, 15% over the photo */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-[calc(100%-15%+100px)] translate-y-[calc(2rem+90px)]">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-sm border border-gray-100">
                  <h3 className="font-cabinet text-2xl font-bold text-charcoal mb-3">Emil Albrechtsen</h3>
                  <p className="text-gray-600">
                    Experienced ultra and trail runner. Running coach and physiotherapist.
                  </p>
                </div>
              </div>
              
              {/* Patrick - Overlaying from right */}
              <div className="absolute right-1/2 top-1/2 transform translate-x-[calc(100%-15%+100px)] -translate-y-[calc(2rem+300px)]">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-sm border border-gray-100">
                  <h3 className="font-cabinet text-2xl font-bold text-charcoal mb-3">Patrick Lund</h3>
                  <p className="text-gray-600">
                    Trail enthusiast. Travel aficionado and business development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Why partner with Trail Squad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring years of experience in organizing premium trail running adventures 
              across Europe's most spectacular destinations.
            </p>
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
      <section className="py-24 bg-stone">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-12 text-center">
              Partnership Benefits
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/lovable-uploads/8dc149c5-e618-4029-a98a-8879e6aeb758.png" alt="Trail Squad team meeting" className="w-full rounded-xl shadow-lg" loading="lazy" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#FFDC00] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-cabinet text-xl font-bold mb-2">Revenue Sharing</h3>
                    <p className="text-gray-600">
                      Competitive commission structure with transparent revenue sharing 
                      for successful partnerships.
                    </p>
                  </div>
                </div>

                

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#FFDC00] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-cabinet text-xl font-bold mb-2">Operational Excellence</h3>
                    <p className="text-gray-600">
                      Proven systems for participant management, logistics coordination, 
                      and on-ground execution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#FFDC00] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-cabinet text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Rigorous quality standards ensuring exceptional participant 
                      satisfaction and repeat business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
                  Ready to Elevate Your Event?
                </h1>
                <h2 className="font-cabinet text-2xl md:text-3xl text-gray-600">
                  Join our network of premium trail running experiences across Europe
                </h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-56 w-full">
                  <img src="/lovable-uploads/912fc842-fa5a-4c14-ab70-34c62312f9c6.png" alt="Trail Squad partnership opportunity" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-cabinet text-xl font-bold mb-3">Partnership Opportunity</h3>
                  <p className="text-gray-600">Connect with passionate trail runners and expand your event's reach through our curated travel experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Ready to Partner?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how Trail Squad can enhance your trail running events 
              and create unforgettable experiences for your participants.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-stone rounded-xl p-8">
                <h3 className="font-cabinet text-xl font-bold mb-4">Event Organizers</h3>
                <p className="text-gray-600 mb-6">
                  Looking to add premium travel packages to your trail running events? 
                  We handle the complete travel experience for your participants.
                </p>
                <Button className="bg-charcoal text-white hover:bg-gray-800 w-full">
                  Partner as Event Organizer
                </Button>
              </div>

              <div className="bg-stone rounded-xl p-8">
                
                <p className="text-gray-600 mb-6">
                  Expand your portfolio with specialized trail running adventures. 
                  Perfect for agencies focusing on active and adventure travel.
                </p>
                <Button className="bg-charcoal text-white hover:bg-gray-800 w-full">
                  Partner as Travel Agency
                </Button>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-xl">
              <h3 className="font-cabinet text-xl font-bold mb-4">Direct Contact</h3>
              <p className="text-gray-600 mb-4">
                For immediate partnership discussions, reach out directly:
              </p>
              <div className="space-y-2">
                <p className="font-medium">partnerships@trailsquad.com</p>
                <p className="text-gray-600">+45 XX XX XX XX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ForOrganizers;