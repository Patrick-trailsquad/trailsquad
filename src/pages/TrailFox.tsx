import { useScrollToTop } from "@/hooks/useScrollToTop";
import { usePageTitle } from "@/hooks/usePageTitle";

const TrailFox = () => {
  useScrollToTop();
  usePageTitle("TrailFox");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="font-cabinet text-5xl md:text-7xl font-bold mb-6">
            TrailFox
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Danmarks bedste trailløb i naturskønne omgivelser
          </p>
        </div>
        
        {/* Decorative mountain silhouette */}
        <svg 
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200 C50 180 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80 L1200 200 L0 200 Z"
            fill="white"
            opacity="0.1"
          />
        </svg>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/trailfox-1.jpg"
                alt="TrailFox løb gennem skoven"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-white mb-6">
                Løb gennem Danmarks smukkeste skovområder
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                TrailFox byder på en unik oplevelse gennem danske naturperler. Oplev varierede ruter 
                der fører dig gennem tætte skove, over bakker og langs skjulte stier som kun de færreste kender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/trailfox-2.jpg"
                alt="TrailFox deltagere"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-foreground mb-6">
                Fællesskab og konkurrence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mød ligesindede løbere i et stærkt fællesskab hvor alle støtter hinanden. 
                Uanset om du løber for tiden eller bare for oplevelsen, finder du din plads i TrailFox familien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/trailfox-3.jpg"
                alt="TrailFox rute og navigation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-white mb-6">
                Perfekt markerede ruter
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Alle vores ruter er omhyggeligt planlagt og markeret så du kan fokusere på løbet. 
                Fra korte 10km ruter til udfordrende ultraløb på 50km+ - der er noget for enhver smag og niveau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/trailfox-4.jpg"
                alt="TrailFox efter løbet"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mere end bare et løb
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TrailFox handler om oplevelsen før, under og efter løbet. Nyd den fantastiske stemning, 
                det lækre mad og de gode historier der bliver delt når dagens præstation er i mål.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrailFox;