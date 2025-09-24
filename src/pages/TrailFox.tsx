import { useScrollToTop } from "@/hooks/useScrollToTop";
import { usePageTitle } from "@/hooks/usePageTitle";
import Menu from "@/components/Menu";
const TrailFox = () => {
  useScrollToTop();
  usePageTitle("TrailFox");
  return <div className="min-h-screen">
      <Menu />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img src="/lovable-uploads/trailfox-hero.png" alt="TrailFox runners in Danish nature" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6 z-10">
          <img src="/lovable-uploads/trailfox-hero-logo.png" alt="TrailFox Series Logo" className="h-16 md:h-20 mx-auto mb-6 object-contain" />
          <h1 className="font-cabinet text-5xl md:text-7xl font-bold mb-6">Trail Squad ♥️ Trail Fox</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Danmarks bedste trailløb i naturskønne omgivelser
          </p>
        </div>
        
        {/* Decorative mountain silhouette */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200 C50 180 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80 L1200 200 L0 200 Z" fill="white" opacity="0.1" />
        </svg>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img src="/lovable-uploads/trailfox-1.jpg" alt="TrailFox løb gennem skoven" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src="/lovable-uploads/trailfox-logo-1.png" alt="North Coast Ultra Logo" className="h-12 mb-4 object-contain" />
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-terra mb-6">
                Danmarks største trail- og ultraløb
              </h2>
              <p className="text-lg text-terra/80 leading-relaxed">
                Hvert år giver vi over 1000 trailløbere mulighed for at opleve de smukke spor. Løbet foregår i Tisvilde Hegn og byder på fantastisk og smuk natur, med skov, strand og klitter.
                <br /><br />
                Trail Squad løber 30 km distancen og sørger for, at vi alle kommer flot over målstregen!
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
              <img src="/lovable-uploads/trailfox-2.jpg" alt="TrailFox deltagere" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src="/lovable-uploads/trailfox-logo-2.png" alt="Røsnæs Trail Logo" className="h-12 mb-4 object-contain" />
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-foreground mb-6">Singletrack, kyst, skov, strand og bakker!</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Det allerede veletablerede trailløb, byder på noget af Danmarks og Kalundborgs absolut smukkeste landskab, masser af bakker, unikke spor og selvfølgelig et top lækkert finisherområde. Alt hvad en trailløber kan be' om.
                <br /><br />
                Team Trail Squad snører løbeskoene stramt og nupper de 32 km.
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
              <img src="/lovable-uploads/trailfox-3.jpg" alt="TrailFox rute og navigation" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src="/lovable-uploads/trailfox-logo-3.png" alt="Trail Fox Logo" className="h-12 mb-4 object-contain" />
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-white mb-6">
                En fantastisk og unik oplevelse ved Møns Klint
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Med GeoCenter Møns Klint som vært, får vi en fantastisk stævneplads med udsigt ud over havet, og Danmarks længste trappe på 500 trin. Området skaber den perfekte ramme for et velorganiseret løb.
                <br /><br />
                Trail Squad tager hurtigbrillerne på og løber sammen ruten på 30 km.
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
              <img src="/lovable-uploads/trailfox-4.jpg" alt="TrailFox efter løbet" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src="/lovable-uploads/trailfox-logo-4.png" alt="Helsingør Trail Logo" className="h-12 mb-4 object-contain" />
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-terra mb-6">
                Løb i det smukke Teglstrup Hegn
              </h2>
              <p className="text-lg text-terra/80 leading-relaxed">
                Helsingør Trail byder på en spændende og smuk lokation i Telgstrup Hegn i Helsingør, og vi inviterer til en fantastisk trailoplevelse, med spor der strækker sig igennem gamle nåletræer og store bøgeskove.
                <br /><br />
                Trail Squad teamet skal have kilometer i stængerne og løber naturligvis de 30 km.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default TrailFox;