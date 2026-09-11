import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Users, Shield, ChevronDown, Snowflake, Ship, Footprints, Mountain, Moon, Waves, Fish, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Ilulissat27Itinerary from "../../components/destinations/ilulissat27/Ilulissat27Itinerary";
import Ilulissat27Accommodation from "../../components/destinations/ilulissat27/Ilulissat27Accommodation";
import Ilulissat27WaitlistForm from "../../components/destinations/ilulissat27/Ilulissat27WaitlistForm";
import ParallaxBackground from "../../components/destinations/ilulissat27/ParallaxBackground";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/use-mobile";
import heroImage from "../../assets/ilulissat27-hero.jpg";
import kayakAsset from "../../assets/ilulissat-kayak.jpg.asset.json";
import fishingAsset from "../../assets/ilulissat-fishing.jpg.asset.json";
import day2TourAsset from "../../assets/ilulissat-day2-tour.jpg.asset.json";
import experienceAsset from "../../assets/ilulissat-experience.jpg.asset.json";
import { assetUrl } from "../../lib/assetUrl";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Ilulissat27 = () => {
  usePageTitle("Træningslejr i Ilulissat, Grønland – Trail Squad");
  useScrollToTop();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-stone">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <img
          src={heroImage}
          alt="Trailløbere på sti over Ilulissat Isfjord med isbjerge i Grønland"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1067}
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
            Ilulissat, Grønland · 25.–28. august 2027 · 3 overnatninger
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Trailløb ved isfjorden
            <br />
            <span className="text-[#FFDC00]">med Trail Squad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
          >
            4 dages træningslejr i Ilulissat med løb hver dag, fisketur i fjorden og midnatskajak mellem
            isbjergene.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 text-white/90 text-sm mb-10 max-w-2xl mx-auto"
          >
            {[
              { icon: Snowflake, text: "UNESCO-isfjord som baggrund" },
              { icon: Footprints, text: "Løb alle fire dage" },
              { icon: Ship, text: "Fisketur og midnatskajak" },
              { icon: Users, text: "Lille dansk løbegruppe" },
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
                onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg hover:bg-[#FFDC00]/90 transition-all shadow-lg shadow-[#FFDC00]/20"
              >
                Skriv dig op
              </button>
              <button
                onClick={() => document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-cabinet font-medium hover:border-white/60 transition-all"
              >
                Se hvad du får
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
            onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg hover:bg-[#FFDC00]/90 transition-all shadow-lg shadow-[#FFDC00]/20"
          >
            Skriv dig op
          </button>
          <button
            onClick={() => document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-cabinet font-medium hover:border-white/60 transition-all"
          >
            Se hvad du får
          </button>
        </div>
      )}


      {/* ─── IS THIS FOR YOU? ─── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
            For dig som vil opleve det ægte Grønland - med løbesko på
          </h2>
          <p className="text-charcoal/60 text-lg mb-12">
            Alle kan være med. Vi skruer op for oplevelsen og ned for presset.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du drømmer om at løbe et af verdens mest spektakulære steder",
              "Du kan lide en blanding af social løb og eventyr",
              "Du vil se isbjerge fra kajak ved midnat",
              "Du foretrækker fællesskab frem for at træne alene",
              "Du vil bo tæt på naturen i en grønlandsk bygd",
              "Du har lyst til at fange din egen aftensmad 🎣",
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

      {/* ─── 4-DAGS PLAN ─── */}
      <section className="w-full relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
          <Ilulissat27Itinerary variant="overlay" />
        </div>
      </section>

      {/* ─── LØBETURE OVERSIGT ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
              De planlagte løbeture
            </h2>
            <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
              Fire dage, fire forskellige ruter. Alle ture løbes i roligt tempo med stop til billeder -
              og der er altid en kortere variant, hvis benene siger fra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                day: "Dag 1",
                title: "Shakeout langs Ilulissat Isfjord",
                distance: "8 km",
                elevation: "ca. 150 hm",
                terrain: "Trædæk og klippesti",
                note: "Rolig åbningstur ud til UNESCO-udsigten over isfjorden.",
              },
              {
                day: "Dag 2",
                title: "Bygdeløb i Ilimanaq",
                distance: "12 km",
                elevation: "ca. 300 hm",
                terrain: "Tundra og fåresti",
                note: "Kuperet tur i terrænet omkring bygden med isbjerge i horisonten.",
              },
              {
                day: "Dag 3",
                title: "Dagens lange tur",
                distance: "18 km",
                elevation: "ca. 500 hm",
                terrain: "Klipper, mos og grus",
                note: "Turens højdepunkt - kortere variant på 10 km for dem der vil spare benene.",
              },
              {
                day: "Dag 4",
                title: "Afsluttende morgenløb",
                distance: "6 km",
                elevation: "ca. 80 hm",
                terrain: "Sti og by",
                note: "Let ben-udløsning med kaffe og udsigt inden hjemrejsen.",
              },
            ].map((run, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-stone rounded-2xl p-6 shadow-sm"
              >
                <span className="inline-block bg-[#FFDC00] text-charcoal px-3 py-1 rounded-full text-xs font-cabinet font-bold mb-3">
                  {run.day}
                </span>
                <h3 className="font-cabinet text-xl font-bold text-charcoal mb-3">{run.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-charcoal/70 mb-3">
                  <span className="flex items-center gap-2">
                    <Footprints className="w-4 h-4 text-sage" />
                    {run.distance}
                  </span>
                  <span className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-sage" />
                    {run.elevation}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sage" />
                    {run.terrain}
                  </span>
                </div>
                <p className="text-charcoal/60 text-sm">{run.note}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-charcoal/50 text-sm mt-8">
            Distancer er vejledende og kan justeres efter vejr, is og gruppens ønsker.
          </p>
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
              Løb, logistik og oplevelser — vi tager os af det praktiske.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Løb & vejledning",
                items: [
                  "Løbeture alle fire dage",
                  "Ruter langs isfjorden og i bygden",
                  "Tempo tilpasset alle niveauer",
                  "Erfaren guide og coach med",
                ],
              },
              {
                icon: Ship,
                title: "Oplevelser undervejs",
                items: [
                  "Fisketur i isfjorden",
                  "Midnatskajak mellem isbjergene",
                  "Bådtur til bygden Ilimanaq",
                  "Grønlandsk mad og lokale råvarer",
                ],
              },
              {
                icon: Mountain,
                title: "Logistik & fællesskab",
                items: [
                  "Overnatning på udvalgte hoteller og lodge",
                  "Transport og sejlads på turen",
                  "Lille, tæt dansk løbegruppe",
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

      {/* ─── FISKETUR DAG 2 (parallax) ─── */}
      <section className="relative w-full overflow-hidden">
        <ParallaxBackground image={assetUrl(fishingAsset)} />

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-40 max-w-3xl text-center">
          <p className="text-[#FFDC00] font-cabinet font-semibold text-sm tracking-widest uppercase mb-4">
            DAG 1 · EFTERMIDDAG
          </p>
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            Fisketur og middag af egen fangst
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
            Vi sejler gennem isfjorden til Ilimanaq, kaster stængerne ud og fisker efter dagens måltid. Fangsten tager vi med
            tilbage, hvor den bliver tilberedt og serveret som aftensmad — helt frisk og helt vores egen.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Ship, text: "Sejltur gennem isfjorden" },
              { icon: Fish, text: "Fang din egen middag" },
              { icon: Users, text: "Fælles måltid af dagens fangst" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-5 text-white/90 text-sm"
              >
                <item.icon className="w-5 h-5 text-[#FFDC00]" />
                <span className="text-center leading-snug">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DAG 2: GUIDET TOUR I ILIMANAQ (parallax) ─── */}
      <section className="relative w-full overflow-hidden">
        <ParallaxBackground image={assetUrl(day2TourAsset)} />

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-40 max-w-3xl text-center">
          <p className="text-[#FFDC00] font-cabinet font-semibold text-sm tracking-widest uppercase mb-4">
             DAG 2 · EFTERMIDDAG
          </p>
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            Guidet tour i Ilimanaq bygden
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
            Efter sejlturen gennem isfjorden ankommer vi til den lille bygd Ilimanaq. En lokal guide tager os med
            rundt i bygden, fortæller om livet i det arktiske samfund og viser os de små detaljer, man ikke selv
            ville opdage. Bagefter løber vi en tur i det kuperede terræn omkring bygden.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Ship, text: "Sejltur gennem isfjorden til Ilimanaq" },
              { icon: MapPin, text: "Guidet rundtur med lokal" },
              { icon: Footprints, text: "Løbetur i kuperet terræn" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-5 text-white/90 text-sm"
              >
                <item.icon className="w-5 h-5 text-[#FFDC00]" />
                <span className="text-center leading-snug">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MIDNATSKAJAK (parallax) ─── */}
      <section className="relative w-full overflow-hidden">
        <ParallaxBackground image={assetUrl(kayakAsset)} />

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-40 max-w-3xl text-center">
          <p className="text-[#FFDC00] font-cabinet font-semibold text-sm tracking-widest uppercase mb-4">
            Dag 3 · sent om aftenen
          </p>
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            Midnatskajak mellem isbjergene
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
            Når byen er faldet til ro, sætter vi kajakkerne i vandet. Fjorden ligger spejlblank, solen
            hænger lavt, og de eneste lyde er årerne og isen, der knager. Vi padler stille rundt mellem
            isbjerge på størrelse med huse — én af de oplevelser, du husker resten af livet.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Moon, text: "Padling i midnatslyset" },
              { icon: Waves, text: "Tæt på isbjergene" },
              { icon: Users, text: "Instruktør med — ingen erfaring nødvendig" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-5 text-white/90 text-sm"
              >
                <item.icon className="w-5 h-5 text-[#FFDC00]" />
                <span className="text-center leading-snug">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Godt at vide
            </h2>
            <p className="text-charcoal/60 text-lg">Turen er stadig under planlægning — her er det, vi ved nu.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Hvor svært er det at løbe i Ilulissat?",
                a: "Terrænet er klippefuldt og kuperet, men distancerne er korte og tempoet socialt. Kan du løbe en times tid ad gangen, kan du være med.",
              },
              {
                q: "Hvordan kommer vi til Ilulissat?",
                a: "Vi flyver direkte tur/retur fra København til Ilulissat. Detaljerne omkring afgange lander sammen med prisen.",
              },
              {
                q: "Hvad er midnatskajak?",
                a: "Vi tager kajakkerne ud sent om aftenen på dag 3 og padler mellem isbjergene i det bløde natlys. Ingen erfaring nødvendig - der er instruktør med.",
              },
              {
                q: "Hvad koster turen?",
                a: "Pris og endelig tilmelding åbner senere. Skriv dig op, så får du besked først.",
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

      {/* ─── ACCOMMODATION ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <Ilulissat27Accommodation />
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="final-cta" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFDC00] text-charcoal px-4 py-2 rounded-full text-sm font-cabinet font-bold mb-6 shadow-md">
            ÅBNER SENERE
          </div>

          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">Vær først på listen</h2>
          <p className="text-white/60 text-lg mb-10">
            Pladserne er få. Skriv dig op, så kontakter vi dig, når pris og tilmelding er klar.
          </p>

          <Ilulissat27WaitlistForm />

          <p className="text-white/40 text-xs text-center mt-6">Vi vender tilbage inden for 48 timer.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ilulissat27;
