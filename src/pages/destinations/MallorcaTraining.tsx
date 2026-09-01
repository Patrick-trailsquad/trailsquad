import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mountain, Users, Heart, Shield, ChevronDown, Sun, Plane, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import MallorcaTrainingItinerary from "../../components/destinations/mallorca-training/MallorcaTrainingItinerary";
import MallorcaTrainingAccommodation from "../../components/destinations/mallorca-training/MallorcaTrainingAccommodation";
import MallorcaTrainingPricingSection from "../../components/destinations/mallorca-training/MallorcaTrainingPricingSection";
import CallMeBackCTA from "../../components/CallMeBackCTA";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/use-mobile";

const heroImage = "/lovable-uploads/mallorca-training-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const DESTINATION_NAME = "Mallorca Træningslejr";

const MallorcaTraining = () => {
  usePageTitle("Mallorca Træningslejr – Trail Squad");
  useScrollToTop();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-stone">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <img
          src={heroImage}
          alt="Trail Squad løbere på Mallorca med Port de Sóller i baggrunden"
          className="absolute inset-0 w-full h-full object-cover"
          width={1344}
          height={896}
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
            Port de Sóller, Mallorca · 5–8 februar 2027 · 3 overnatninger
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Trailløb på Mallorca
            <br />
            <span className="text-[#FFDC00]">med Trail Squad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
          >
            4 dages træningslæejr med bjergløb, træning, spansk klima og godt selskab. Hvad venter du på?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 text-white/90 text-sm mb-10 max-w-2xl mx-auto"
          >
            {[
              { icon: Sun, text: "Sol og bjerge på Mallorca" },
              { icon: Plane, text: "Direkte fly og transport" },
              { icon: Users, text: "Lille dansk løbegruppe" },
              { icon: Dumbbell, text: "Træning for alle niveauer" },
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
                Book din plads
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
            Book din plads
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
            For dig der vil på løbeeventyr
          </h2>
          <p className="text-charcoal/60 text-lg mb-12">
            Alle kan være med. Vi skruer op for fællesskabet og ned for presset.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du vil træne i smukke omgivelser med ligesindede",
              "Du kan lide en blanding af social løb og struktureret træning",
              "Du vil have tips til teknik, bakker og styrke",
              "Du foretrækker fællesskab frem for at træne alene",
              "Du drømmer om en aktiv ferie med sol og bjerge",
              "Du vil have en uforpligtende smagsprøve på Trail Squad",
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
              Træning, logistik og fællesskab — vi tager os af det praktiske.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Træning & vejledning",
                items: [
                  "Social runs (med stigninger) i moderat tempo",
                  "Eftermiddagstræninger for de hårde typer",
                  "Bakkesprints, teknik og styrke",
                  "Personlig feedback fra coach Emil",
                ],
              },
              {
                icon: Plane,
                title: "Rejse & logistik",
                items: [
                  "Direkte fly; København <=> Palma, Mallorca",
                  "Privat transport til Port de Sóller",
                  "3 overnatninger på Hotel Es Port (4-⭐️ hotel)",
                  "Morgenmad og fælles middage",
                ],
              },
              {
                icon: Heart,
                title: "Oplevelse & fællesskab",
                items: [
                  "Lille, tæt dansk løbegruppe",
                  "Pool og afslapning på hotellet",
                  "Udforsk Sóller og havnen",
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
          alt="Bjergstier og havudsigt på Mallorca"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1344}
          height={896}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            Træn hvor bjerge møder hav
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            Serra de Tramuntana byder på nogle af Mallorcas smukkeste stier. Vi løber langs gamle olivenlunde,
            op ad kalkstensklipper og ned gennem pinjeskov — altid med udsigt over Middelhavet. Her er plads
            til både lette social runs og hårdere eftermiddagstræninger.
          </p>
        </div>
      </section>

      {/* ─── REMOVE FEAR ─── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Bekymret for om du kan følge med?
            </h2>
            <p className="text-charcoal/60 text-lg">Det er helt okay. Træningen er tilpasset alle niveauer.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Jeg er ikke så hurtig — kan jeg være med?",
                a: "Helt sikkert. De sociale runs er i moderat tempo, og der er altid en coach med. Du løber aldrig alene. Men det er nok ikke helt skidt, hvis du i hvert fald kan løbe en 10'er i pace 5:30-6:00.",
              },
              {
                q: "Hvad med eftermiddagstræningen?",
                a: "De hurtige kan give den gas med bakkesprints og styrke. Du bestemmer selv intensiteten, og vi sørger for, at alle får noget ud af det.",
              },
              {
                q: "Skal jeg have erfaring med bjergløb?",
                a: "Nej. Vi vejleder dig i teknik og terræn undervejs, så du føler dig tryg på stierne.",
              },
              {
                q: "Hvor skal vi løbe?",
                a: "Coach Emil har løbet UTMB Mallorca, og har styr på ruterne i lokalområdet. Vi finder de bedste segmenter af UTMB løbet og løber dér.",
              },
              {
                q: "Hvornår åbner tilmeldingen?",
                a: "Turen løber af stablen 5–8 februar 2027. Pris og endelig tilmelding åbner snart — skriv dig op, så får du besked først.",
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

      {/* ─── HOTEL ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <MallorcaTrainingAccommodation />
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
          <MallorcaTrainingItinerary variant="overlay" />
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="final-cta" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFDC00] text-charcoal px-4 py-2 rounded-full text-sm font-cabinet font-bold mb-6 shadow-md">
            TILMELDING ER ÅBEN
          </div>

          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">Book din plads</h2>
          <p className="text-white/60 text-lg mb-10">
            9.700 DKK for delt dobbeltværelse og 11.800 DKK for single værelse. Reservér med 5.000 DKK i depositum pr. billet.
          </p>

          <MallorcaTrainingPricingSection />

          <p className="text-white/40 text-xs text-center mt-6">Vi vender tilbage inden for 48 timer.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MallorcaTraining;
