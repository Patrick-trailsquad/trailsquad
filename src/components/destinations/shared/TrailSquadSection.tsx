import trailRunnersImage from "@/assets/trail-runners-forest.jpg";

const TrailSquadSection = () => {
  return (
    <section className="w-full">
      <div className="flex">
        <div className="w-1/2">
          <img 
            src={trailRunnersImage} 
            alt="Trail runners in forest" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-1/2 bg-background p-12 flex flex-col justify-center">
          <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Trail Squad Experience
          </h1>
          <h2 className="font-cabinet text-2xl md:text-3xl font-medium text-charcoal/80">
            Your Adventure Partner
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TrailSquadSection;