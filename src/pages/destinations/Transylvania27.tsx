import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mountain, Users, Heart, Shield, ChevronDown, Plane } from "lucide-react";
import { motion } from "framer-motion";
import Transylvania27Itinerary from "../../components/destinations/transylvania27/Transylvania27Itinerary";
import Transylvania27PricingSection from "../../components/destinations/transylvania27/Transylvania27PricingSection";
import DepositPaymentBanner from "../../components/destinations/shared/DepositPaymentBanner";
import CallMeBackPopup from "../../components/CallMeBackPopup";
import TransylvaniaAccommodation from "../../components/destinations/transylvania/TransylvaniaAccommodation";
import TransylvaniaTestimonials from "../../components/destinations/transylvania/TransylvaniaTestimonials";
import TransylvaniaTripVideoCTA from "../../components/destinations/transylvania/TransylvaniaTripVideoCTA";
import Transylvania27RaceVideo from "../../components/destinations/transylvania27/Transylvania27RaceVideo";
import ShakeoutRunBanner from "../../components/home/ShakeoutRunBanner";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/use-mobile";

const heroImage = "/lovable-uploads/transylvania27-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Transylvania27 = () => {
  usePageTitle("Transylvania 100 2027 – Trail Squad");
  useScrollToTop();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-stone">
      <DepositPaymentBanner />
      <CallMeBackPopup destinationName="Transylvania 100 2027" />
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <img
          src={heroImage}
          alt="Trailløbere i Karpaterne ved Transylvania 100 i Rumænien"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Trail Squad
          </Link>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-24 md:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#FFDC00] font-cabinet font-semibold text-sm tracking-widest uppercase mb-4"
          >
            27.–30. maj 2027 · Bran, Rumænien
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Løb Transylvania 100
            <br />
            <span className="text-[#FFDC00]">med os ved din side</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Start og mål ved Draculas Slot — vi gentager en af vores mest elskede ture. Træning, rejse og fællesskab er håndteret.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 text-white/90 text-sm mb-10 max-w-2xl mx-auto"
          >
            {[
              { icon: Shield, text: "Trænervejledning fra coach Emil" },
              { icon: Plane, text: "Rejse & logistik er håndteret" },
              { icon: Users, text: "Lille dansk gruppe" },
              { icon: Mountain, text: "Karpaterne & Swissôtel 5★" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-4">
                <item.icon className="w-5 h-5 text-[#FFDC00]" />
                <span className="text-center leading-snug">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button
                onClick={() => document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg hover:bg-[#FFDC00]/90 transition-all shadow-lg shadow-[#FFDC00]/20"
              >
                Se hvad du får
              </button>
              <button
                onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-cabinet font-medium hover:border-white/60 transition-all"
              >
                Book din plads
              </button>
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* Mobile CTA buttons below hero fold */}
      {isMobile && (
        <div className="bg-charcoal px-6 py-6 flex flex-col gap-3">
          <button
            onClick={() => document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg hover:bg-[#FFDC00]/90 transition-all shadow-lg shadow-[#FFDC00]/20"
          >
            Se hvad du får
          </button>
          <button
            onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-cabinet font-medium hover:border-white/60 transition-all"
          >
            Book din plads
          </button>
        </div>
      )}

      {/* ─── DOKUMENTAR VIDEO ─── */}
      <section className="bg-stone">
        <TransylvaniaTripVideoCTA
          title="Se videoen fra vores seneste tur til Transylvanien"
          subtitle="Få et indblik i stemningen, trailene i Karpaterne og fællesskabet — filmet på vores forrige tur"
        />
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <TransylvaniaTestimonials showAddReviewCTA={false} />

      {/* ─── IS THIS FOR YOU? ─── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Er det noget for dig?
          </h2>
          <p className="text-charcoal/60 text-lg mb-12">
            Med 20, 30, 50, 80 og 100 km er der en distance til alle niveauer.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du har løbet trail i Danmark, et halvmarathon eller mere",
              "Du er nysgerrig på bjergtrail i Karpaterne",
              "Du vil have struktur, trænervejledning og en plan",
              "Du foretrækker fællesskab frem for at gøre det alene",
              "Du vil kombinere løb med 5-stjernet hotel og spa",
              "Du drømmer om at løbe fra Draculas Slot",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-charcoal">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section id="what-you-get" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Hvad du får med Trail Squad
            </h2>
            <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
              Alt er inkluderet. Du skal bare fokusere på at løbe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Træning & forberedelse",
                items: [
                  "Personlig trænervejledning fra coach Emil",
                  "Tilpasset træningsplan til din distance",
                  "Sparring og motivation i gruppen",
                  "Løbsstrategi og race-briefing",
                ],
              },
              {
                icon: Plane,
                title: "Rejse & logistik",
                items: [
                  "Fly København → Bukarest",
                  "Privat transport til Poiana Brașov",
                  "3 overnatninger på Swissôtel Poiana Brașov",
                  "Transport til start og mål i Bran",
                ],
              },
              {
                icon: Heart,
                title: "Oplevelse & fællesskab",
                items: [
                  "Lille, tæt dansk løbegruppe",
                  "Shakeout run og fælles middage",
                  "Spa, wellness og Draculas Slot",
                  "Minder for livet",
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-stone rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFDC00]/20 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="font-cabinet text-xl font-bold text-charcoal mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-charcoal/70">
                      <CheckCircle className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE EXPERIENCE ─── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src={heroImage}
          alt="Bjergstier i Bucegi-bjergene, Rumænien"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            Østeuropas mest mystiske trails
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            Transylvania 100 afvikles for 12. gang, og den 29. maj 2027 stiller løberne igen op på startlinjen under Draculas Slot i Bran. Snoede singletracks, gamle skovstier, bjergplateauer og forblæste rygge binder ruten sammen i én stor traversering af Bucegi-bjergene — med målstregen tilbage ved slottet.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { label: "Distancer", value: "20–100 km" },
              { label: "Terræn", value: "Bucegi-bjergene" },
              { label: "Start & mål", value: "Draculas Slot" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-[#FFDC00] font-cabinet font-bold text-sm mb-1">{item.label}</p>
                <p className="text-white text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REMOVE FEAR ─── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Bekymret for om du er klar?
            </h2>
            <p className="text-charcoal/60 text-lg">Det er de fleste. Og det er helt okay.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Jeg har aldrig løbet trail i bjerge før",
                a: "Så er 20 km-distancen et perfekt sted at starte. Coach Emil tilpasser træningen til dit niveau, og du får en plan, der gradvist gør dig klar.",
              },
              {
                q: "Jeg er bange for ikke at kunne følge med",
                a: "Det er ikke et konkurrencehold. Vi løber i vores eget tempo, og du har fuld støtte undervejs — både fra træneren og gruppen.",
              },
              {
                q: "Hvad med udstyr og race-taktik?",
                a: "Du får en komplet udstyrsguide tilpasset forholdene i Karpaterne, og vi gennemgår race-taktik sammen, så du er tryg på startlinjen.",
              },
              {
                q: "Hvad koster turen?",
                a: "Turen koster 13.000 DKK for delt dobbeltværelse og 15.250 DKK for single værelse - inkl. moms. Du reserverer din plads med 5.000 DKK i depositum pr. billet, og resten betales 60 dage før afrejse.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-cabinet text-lg font-bold text-charcoal mb-2">"{item.q}"</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RACE ORGANIZER VIDEO ─── */}
      <Transylvania27RaceVideo />

      {/* ─── INTERACTIVE MAP ─── */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">Udforsk ruten</h2>
            <p className="text-white/60 text-lg">Klik på kortet for at interagere</p>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector('[data-map-overlay]') as HTMLElement;
              if (overlay) overlay.style.display = 'flex';
              const iframe = e.currentTarget.querySelector('iframe') as HTMLIFrameElement;
              if (iframe) iframe.style.pointerEvents = 'none';
            }}
          >
            <div
              data-map-overlay
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 cursor-pointer"
              onClick={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
                const iframe = (e.currentTarget.parentElement as HTMLElement).querySelector('iframe') as HTMLIFrameElement;
                if (iframe) iframe.style.pointerEvents = 'auto';
              }}
            >
              <span className="bg-white/90 text-charcoal px-5 py-2.5 rounded-full font-medium text-sm shadow-md">
                Klik for at interagere
              </span>
            </div>
            <iframe
              src="https://app.racedaymap.com/transylvania100"
              className="w-full h-[350px] md:h-[500px] border-0"
              style={{ pointerEvents: 'none' }}
              allow="geolocation"
              loading="lazy"
              title="Transylvania 100 rutekort"
            />
          </div>
        </div>
      </section>

      {/* ─── 4-DAGS PLAN ─── */}
      <section className="w-full relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
          <Transylvania27Itinerary variant="overlay" />
        </div>
      </section>

      {/* ─── HOTEL ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <TransylvaniaAccommodation />
        </div>
      </section>

      {/* ─── SHAKEOUT RUN ─── */}
      <ShakeoutRunBanner />

      {/* ─── FINAL CTA ─── */}
      <section id="final-cta" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFDC00] text-charcoal px-4 py-2 rounded-full text-sm font-cabinet font-bold mb-6 shadow-md">
            TILMELDING ER ÅBEN
          </div>

          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">Book din plads</h2>
          <p className="text-white/60 text-lg mb-10">
            13.000 DKK for delt dobbeltværelse og 15.250 DKK for single værelse. Reservér med 5.000 DKK i depositum pr. billet.
          </p>

          <Transylvania27PricingSection />

          <p className="text-white/40 text-xs text-center mt-6">Vi vender tilbage inden for 48 timer.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transylvania27;
