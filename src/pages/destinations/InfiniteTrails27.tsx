import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, ChevronDown, Heart, Mountain, Plane, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useIsMobile } from "../../hooks/use-mobile";
import InfiniteTrailsTripVideoCTA from "../../components/destinations/infinite-trails/InfiniteTrailsTripVideoCTA";
import InfiniteTrailsTestimonials from "../../components/destinations/infinite-trails/InfiniteTrailsTestimonials";
import InfiniteTrailsAccommodation from "../../components/destinations/infinite-trails/InfiniteTrailsAccommodation";
import InfiniteTrails27Itinerary from "../../components/destinations/infinite-trails-2027/InfiniteTrails27Itinerary";
import InfiniteTrails27WaitlistForm from "../../components/destinations/infinite-trails-2027/InfiniteTrails27WaitlistForm";
import ShakeoutRunBanner from "../../components/home/ShakeoutRunBanner";
import Footer from "../../components/Footer";

const heroImage = "/lovable-uploads/infinite-trails.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const InfiniteTrails27 = () => {
  const [isMapActive, setIsMapActive] = useState(false);
  const isMobile = useIsMobile();
  usePageTitle("Infinite Trails 2027 – Trail Squad");
  useScrollToTop();

  const scrollToWaitlist = () => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  const scrollToDetails = () => document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-stone">
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <img src={heroImage} alt="Trailløber i bjergene ved Infinite Trails i Gastein" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />

        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Trail Squad
          </Link>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-24 md:mt-0">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-yellow font-cabinet font-semibold text-sm uppercase mb-4">
            3.–6. september 2027 · Bad Hofgastein, Østrig
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Infinite Trails 2027
            <br />
            <span className="text-yellow">tilbage til Gastein</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Vi vender tilbage til de østrigske alper. Du får bjergløb, termalbad og en erfaren dansk squad omkring dig hele vejen.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="grid grid-cols-2 md:grid-cols-4 gap-3 text-primary-foreground/90 text-sm mb-10 max-w-3xl mx-auto">
            {[
              { icon: Shield, text: "Erfaring fra vores tur i 2026" },
              { icon: Plane, text: "Rejse og logistik håndteret" },
              { icon: Users, text: "Lille dansk gruppe" },
              { icon: Mountain, text: "15K til 60K og holdstafet" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-3 py-4">
                <item.icon className="w-5 h-5 text-yellow" />
                <span className="text-center leading-snug">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {!isMobile && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={scrollToDetails} size="lg" className="rounded-full bg-yellow text-charcoal hover:bg-yellow/90 font-cabinet font-bold text-lg px-8">Se hvad du får</Button>
              <Button onClick={scrollToWaitlist} variant="outline" size="lg" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-cabinet px-8">Skriv dig på ventelisten</Button>
            </motion.div>
          )}
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 text-primary-foreground/50 animate-bounce hidden md:block" />
      </section>

      {isMobile && (
        <div className="bg-charcoal px-6 py-6 flex flex-col gap-3">
          <Button onClick={scrollToDetails} size="lg" className="rounded-full bg-yellow text-charcoal hover:bg-yellow/90 font-cabinet font-bold">Se hvad du får</Button>
          <Button onClick={scrollToWaitlist} variant="outline" size="lg" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">Skriv dig på ventelisten</Button>
        </div>
      )}

      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="font-cabinet font-bold text-orange uppercase text-sm mb-3">Løbet er allerede udsolgt</p>
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">Er Infinite Trails noget for dig?</h2>
          <p className="text-charcoal/60 text-lg mb-12">Fra den tilgængelige 15K til 60K med tre bjergtoppe — og en helt særlig holdstafet.</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du vil prøve alpint trailløb med en plan i hånden",
              "Du søger en distance fra 15K til 60K",
              "Du vil opleve Gastein med løbere, der deler din passion",
              "Du foretrækker fællesskab frem for at stå alene",
              "Du vil kombinere bjergløb med spa og restitution",
              "Du vil have Trail Squads erfaring fra samme tur i 2026",
            ].map((item, index) => (
              <motion.div key={item} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index * 0.5} className="flex items-start gap-3 bg-background rounded-xl p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                <span className="text-charcoal">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InfiniteTrailsTripVideoCTA />
      <InfiniteTrailsTestimonials />

      <section id="what-you-get" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">Hvad du får med Trail Squad</h2>
            <p className="text-charcoal/60 text-lg max-w-xl mx-auto">Vi sørger for alt det praktiske. Du skal bare fokusere på at løbe.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Forberedelse", items: ["Trænervejledning frem mod løbet", "Sparring om distance og udstyr", "Race brief og løbsstrategi", "Erfaring fra vores 2026-tur"] },
              { icon: Plane, title: "Rejse & ophold", items: ["Fly tur/retur fra København", "Transfer til Bad Hofgastein", "3 overnatninger på The Comodo", "Morgenmad på hotellet"] },
              { icon: Heart, title: "Oplevelse", items: ["Lille dansk løbegruppe", "Fælles forberedelse og middage", "Athlete Garden ved Alpentherme", "Fejring efter løbet"] },
            ].map((card, index) => (
              <motion.div key={card.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} className="bg-stone rounded-xl p-8">
                <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center mb-6"><card.icon className="w-6 h-6 text-charcoal" /></div>
                <h3 className="font-cabinet text-xl font-bold text-charcoal mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => <li key={item} className="flex items-start gap-2 text-charcoal/70"><CheckCircle className="w-4 h-4 text-sage mt-0.5 shrink-0" /><span>{item}</span></li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <img src={heroImage} alt="Alpint terræn omkring Gastein" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Én dal. Fem måder at opleve den.</h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10">Infinite Trails løber gennem Gasteinertals alpine enge, skovstier og bjergkamme. Vælg en individuel distance eller del cirka 100 kilometer som et hold på tre.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "15K", value: "ca. 900 hm" },
              { label: "30K / 45K", value: "alpine distancer" },
              { label: "60K", value: "3 bjergtoppe" },
              { label: "Hold", value: "21K + 35K + 44K" },
            ].map((item) => <div key={item.label}><p className="text-yellow font-cabinet font-bold mb-1">{item.label}</p><p className="text-primary-foreground/80 text-sm">{item.value}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Se løbet fra arrangøren</h2>
            <p className="text-primary-foreground/60 text-lg">Bjergene, stemningen og de forskellige ruter i Gastein.</p>
          </div>
          <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
            <iframe src="https://www.youtube.com/embed/Cu6Tg-eQ-cQ" title="Infinite Trails Bad Hofgastein" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">Udforsk ruterne</h2>
            <p className="text-charcoal/60 text-lg">Klik på kortet for at interagere.</p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg" onMouseLeave={() => setIsMapActive(false)}>
            {!isMapActive && (
              <button type="button" aria-label="Aktivér rutekort" className="absolute inset-0 z-10 flex items-center justify-center bg-charcoal/30 cursor-pointer" onClick={() => setIsMapActive(true)}>
                <span className="bg-background/90 text-charcoal px-5 py-2.5 rounded-full font-medium text-sm shadow-md">Klik for at interagere</span>
              </button>
            )}
            <iframe src="https://app.racedaymap.com/infinite-trails" className={`w-full h-[350px] md:h-[500px] border-0 ${isMapActive ? "pointer-events-auto" : "pointer-events-none"}`} allow="geolocation" loading="lazy" title="Infinite Trails rutekort" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6"><InfiniteTrailsAccommodation /></div>
      </section>

      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24"><InfiniteTrails27Itinerary /></div>
      </section>

      <ShakeoutRunBanner />

      <section id="waitlist" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center bg-orange text-orange-foreground px-4 py-2 rounded-full text-sm font-cabinet font-bold mb-6 shadow-md">TUREN ER ENDNU IKKE ÅBEN</div>
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Kom først på listen</h2>
          <p className="text-primary-foreground/60 text-lg mb-10">Løbet er allerede udsolgt hos arrangøren. Skriv dig op, så kontakter vi dig, når Trail Squad-turen og vores pladser er klar.</p>
          <div className="bg-background rounded-xl p-8 shadow-xl text-left"><InfiniteTrails27WaitlistForm /></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfiniteTrails27;
