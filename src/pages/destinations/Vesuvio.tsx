
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Vesuvio = () => {
  return (
    <div className="min-h-screen bg-stone">
      <Menu />
      
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/lovable-uploads/09591b2b-8dda-48fb-be79-ab98d16ccd30.png"
          alt="Vesuvio Ultra Marathon trail running"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Vesuvio Ultra Marathon, Italy
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Challenge yourself on the historic trails of Mount Vesuvius in this unique ultra marathon event. Run through volcanic landscapes with breathtaking views of the Bay of Naples and experience the perfect blend of natural beauty and ancient history.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-bold">Date:</span>
                <span>May 2026</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">Location:</span>
                <span>Mount Vesuvius, Naples, Italy</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">Available Spots:</span>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">What to Expect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Scenic routes around an active volcano</li>
              <li>Technical trails with volcanic terrain</li>
              <li>Panoramic views of the Gulf of Naples</li>
              <li>Professional guides and safety support</li>
              <li>Cultural experience in the Campania region</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Vesuvio;
