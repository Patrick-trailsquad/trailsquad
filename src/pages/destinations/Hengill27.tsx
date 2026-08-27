import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mountain, Users, Heart, Shield, ChevronDown, Plane } from "lucide-react";
import { motion } from "framer-motion";
import Hengill27Itinerary from "../../components/destinations/hengill27/Hengill27Itinerary";
import Hengill27WaitlistForm from "../../components/destinations/hengill27/Hengill27WaitlistForm";
import CallMeBackCTA from "../../components/CallMeBackCTA";
import ShakeoutRunBanner from "../../components/home/ShakeoutRunBanner";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/use-mobile";

const heroImage = "/lovable-uploads/hengill27-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Hengill27 = () => {
  usePageTitle("Hengill Ultra 2027 – Trail Squad");
  useScrollToTop();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-stone">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <img
          src={heroImage}
          alt="Trailløbere ved Hengill-vulkanen under Hengill Ultra på Island"
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
            3.–6. juni 2027 · Hveragerði, Island
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Løb Hengill Ultra
            <br />
            <span className="text-[#FFDC00]">med os ved din side</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Islands største trailløb — vulkaner, dampende jord og varme kilder. Træning, rejse og fællesskab er håndteret.
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
              { icon: Mountain, text: "Hengill-vulkanen & varme kilder" },
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
                Få besked når turen åbner
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
            Få besked når turen åbner
          </button>
        </div>
      )}

      {/* ─── IS THIS FOR YOU? ─── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Er det noget for dig?
          </h2>
          <p className="text-charcoal/60 text-lg mb-12">
            Med 5, 10, 26, 53 og 106 km er der en distance til alle niveauer.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du har løbet trail i Danmark, et halvmarathon eller mere",
              "Du er nysgerrig på islandsk vulkantrail",
              "Du vil have struktur, trænervejledning og en plan",
              "Du foretrækker fællesskab frem for at gøre det alene",
              "Du vil kombinere løb med varme kilder og geotermisk spa",
              "Du drømmer om at løbe blandt dampende jord og vulkaner",
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
                  "Fly København → Keflavík",
                  "Privat transport til Hveragerði",
                  "3 overnatninger tæt på start og mål",
                  "Transport til alle aktiviteter",
                ],
              },
              {
                icon: Heart,
                title: "Oplevelse & fællesskab",
                items: [
                  "Lille, tæt dansk løbegruppe",
                  "Shakeout run og fælles middage",
                  "Bad i den varme flod i Reykjadalur",
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
          alt="Stier omkring Hengill-vulkanen på Island"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            Islands største trailløb
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            Hengill Ultra afvikles for 15. gang i 2027, og start og mål ligger midt i Hveragerði. Ruterne snor sig op gennem Reykjadalur-dalen mod Ölkelduhnúkur og videre ind i Hengill-området — over bjergpas, forbi dampende jordvarme og ned gennem Sleggjubeinsskarð. Udsigten fra Hengill er noget af det smukkeste, Island har at byde på.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { label: "Distancer", value: "5–106 km" },
              { label: "Terræn", value: "Hengill-vulkanen" },
              { label: "Start & mål", value: "Hveragerði" },
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
                a: "Så er 10 eller 26 km et perfekt sted at starte. Coach Emil tilpasser træningen til dit niveau, og du får en plan, der gradvist gør dig klar.",
              },
              {
                q: "Jeg er bange for ikke at kunne følge med",
                a: "Det er ikke et konkurrencehold. Vi løber i vores eget tempo, og du har fuld støtte undervejs — både fra træneren og gruppen.",
              },
              {
                q: "Hvad med vejret på Island?",
                a: "Vejret kan skifte hurtigt, og derfor får du en komplet udstyrsguide tilpasset islandske forhold — inklusive det obligatoriske udstyr til 53 og 106 km.",
              },
              {
                q: "Hvad koster turen?",
                a: "Prisen og tilmeldingen er endnu ikke åben. Skriv dig op med din email nederst på siden, så får du besked først, når turen åbner for booking.",
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
              src="https://app.racedaymap.com/hengillultra"
              className="w-full h-[350px] md:h-[500px] border-0"
              style={{ pointerEvents: 'none' }}
              allow="geolocation"
              loading="lazy"
              title="Hengill Ultra rutekort"
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
          <Hengill27Itinerary variant="overlay" />
        </div>
      </section>

      {/* ─── SHAKEOUT RUN ─── */}
      <ShakeoutRunBanner />

      {/* ─── FINAL CTA ─── */}
      <section id="final-cta" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFDC00] text-charcoal px-4 py-2 rounded-full text-sm font-cabinet font-bold mb-6 shadow-md">
            TILMELDING ÅBNER SNART 🎟️
          </div>

          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">Vær først i køen</h2>
          <p className="text-white/60 text-lg mb-10">
            Pris og tilmelding er endnu ikke klar. Skriv dig op, og du får en email, så snart turen åbner.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-left">
            <Hengill27WaitlistForm />

            <div className="mt-4">
              <CallMeBackCTA />
            </div>

            <p className="text-charcoal/40 text-xs text-center mt-6">Vi vender tilbage inden for 48 timer.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hengill27;
