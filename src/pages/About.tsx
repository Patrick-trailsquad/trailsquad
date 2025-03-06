
import { Users, Award, Flag, Mail, Mountains } from "lucide-react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

const About = () => {
  usePageTitle('About');

  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[url('/lovable-uploads/77fe9c87-3287-4f7a-ba65-68b0b68d853a.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-cabinet font-bold mb-4">About Trail Squad</h1>
            <p className="text-xl max-w-2xl mx-auto">Your trusted partner in discovering the world's most breathtaking trail running adventures.</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-cabinet font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">Born from a passion for trail running and adventure, Trail Squad brings together experienced runners and travel enthusiasts to create unforgettable running experiences in the world's most stunning locations.</p>
            <div className="flex items-center justify-center gap-12 mt-12">
              <div className="text-center">
                <Mountains className="w-12 h-12 text-terra mx-auto mb-4" />
                <h3 className="font-bold mb-2">20+ Destinations</h3>
              </div>
              <div className="text-center">
                <Flag className="w-12 h-12 text-terra mx-auto mb-4" />
                <h3 className="font-bold mb-2">5+ Years Experience</h3>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-terra mx-auto mb-4" />
                <h3 className="font-bold mb-2">1000+ Happy Runners</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cabinet font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center">
              <img src="/lovable-uploads/609b48d8-13b5-4f5b-b65e-9e75141d6c2d.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-xl mb-2">Alex Thompson</h3>
              <p className="text-gray-600">Founder & Lead Guide</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <img src="/lovable-uploads/912fc842-fa5a-4c14-ab70-34c62312f9c6.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-xl mb-2">Sarah Chen</h3>
              <p className="text-gray-600">Route Planner</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <img src="/lovable-uploads/ce6a399e-3005-4109-a936-5bbeb4762393.png" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-bold text-xl mb-2">Marco Rossi</h3>
              <p className="text-gray-600">Adventure Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cabinet font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-terra shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Expert Guides</h3>
                <p className="text-gray-600">Our guides are certified professionals with extensive knowledge of trail running and local terrain.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Flag className="w-8 h-8 text-terra shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Unique Routes</h3>
                <p className="text-gray-600">Carefully curated trails that showcase the most breathtaking landscapes and cultural experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-terra">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-cabinet font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join us for an unforgettable trail running experience in some of the world's most stunning locations.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#upcoming-trips" className="bg-white text-terra px-8 py-3 rounded-md font-bold hover:bg-stone transition-colors">
              View Destinations
            </a>
            <a href="mailto:info@trailsquad.com" className="flex items-center gap-2 px-8 py-3 rounded-md font-bold border-2 border-white hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
