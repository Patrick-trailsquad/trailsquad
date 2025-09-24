import trailRunnersImage from "@/assets/trail-runners-forest.jpg";
import trailSquadLogo from "@/assets/trail-squad-logo.png";

const TrailSquadSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex">
          <div className="w-1/2 relative">
            <img 
              src={trailRunnersImage} 
              alt="Trail runners in forest" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/5 flex items-center justify-center">
              <img 
                src={trailSquadLogo} 
                alt="Trail Squad Logo" 
                className="h-12 object-contain"
              />
            </div>
          </div>
          <div className="w-1/2 bg-stone p-12 flex flex-col justify-center">
            <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Trail Squad Experience
            </h1>
            <h2 className="font-cabinet text-2xl md:text-3xl font-medium text-charcoal/80">
              Your Adventure Partner
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailSquadSection;