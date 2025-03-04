
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Transylvania100 = () => {
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/lovable-uploads/609b48d8-13b5-4f5b-b65e-9e75141d6c2d.png"
          alt="Transylvania 100 trail running"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Transylvania 100, Romania
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Experience the mystical challenge of the Transylvania 100 trail running event in Romania. Wind through the dramatic Carpathian Mountains, past medieval castles, and through pristine wilderness in this unforgettable ultra-running adventure.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-bold">Date:</span>
                <span>May 2026</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">Location:</span>
                <span>Carpathian Mountains, Romania</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">Available Spots:</span>
                <span>15</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">What to Expect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Technical mountain trails through the Carpathian range</li>
              <li>Stunning views of medieval castles and mountain peaks</li>
              <li>Professional guides and support throughout the journey</li>
              <li>Authentic Romanian mountain culture experience</li>
              <li>Comprehensive training plan and preparation guidance</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Transylvania100;
