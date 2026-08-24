import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mountain, Users, Heart, Shield, ChevronDown, Star, Plane } from "lucide-react";
import { motion } from "framer-motion";
import Fyri26Itinerary from "../../components/destinations/fyri26/Fyri26Itinerary";
import Fyri26Accommodation from "../../components/destinations/fyri26/Fyri26Accommodation";
import PriceQuoteForm, { type FormValues } from "../../components/PriceQuoteForm";
import CallMeBackCTA from "../../components/CallMeBackCTA";
import CallMeBackPopup from "../../components/CallMeBackPopup";
import ShakeoutRunBanner from "../../components/home/ShakeoutRunBanner";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroAsset from "@/assets/fyri-hero.avif.asset.json";

const heroImage = heroAsset.url;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const DESTINATION_NAME = "Fyri Trail 2026";
const SPOTS_LEFT = 12;

const Fyri26 = () => {
  usePageTitle("Fýri Trail by Salomon 2026 – Trail Squad");
  useScrollToTop();
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleStripeCheckout = async (data: FormValues) => {
    const { data: result, error } = await supabase.functions.invoke('create-deposit-checkout', {
      body: {
        destinationName: DESTINATION_NAME,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        preferredDistance: data.preferredDistance,
        participants: data.participants,
        accommodationPreference: data.accommodationPreference,
        returnPath: '/destinations/fyri26',
      },
    });

    if (error || !result?.url) {
      toast({
        title: "Fejl",
        description: "Kunne ikke oprette betaling. Prøv venligst igen.",
        variant: "destructive",
      });
      throw new Error("Checkout failed");
    }

    sessionStorage.setItem('deposit_booking_data', JSON.stringify({
      destination: DESTINATION_NAME,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      preferredDistance: data.preferredDistance,
      participants: data.participants,
      accommodationPreference: data.accommodationPreference,
    }));

    window.location.href = result.url;
  };

  return (
    <div className="min-h-screen bg-stone">
      <CallMeBackPopup destinationName={DESTINATION_NAME} />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <img
          src={heroImage}
          alt="Trailløbere på fjeldet i Hemsedal, Norge, i aftensol"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1088}
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
            17.–20. september 2026 · Hemsedal, Norge
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Løb Fýri Trail by Salomon
            <br />
            <span className="text-[#FFDC00]">med os ved din side</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Træning, rejse og fællesskab — vi tager os af alt, så du kan fokusere på oplevelsen.
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
              { icon: Users, text: "Lille dansk gruppe (10–12)" },
              { icon: Mountain, text: "Norsk højfjeld & Fýri Resort" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-4">
                <item.icon className="w-5 h-5 text-[#FFDC00]" />
                <span className="text-center leading-snug">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-8 bg-black/40 backdrop-blur-sm rounded-2xl md:rounded-full px-6 py-4 md:py-3 mx-auto w-fit max-w-sm md:max-w-none"
          >
            <div className="flex gap-0.5 shrink-0">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} className="w-3.5 h-3.5 fill-[#FFDC00] text-[#FFDC00]" />
              ))}
            </div>
            <p className="text-white/90 text-sm md:text-base italic text-center">
              "Helt fantastisk, både løbet og Trail Squad! Jeg var i tvivl om jeg overhovedet kunne gennemføre — men det lykkedes og det var mega fedt!"
            </p>
            <span className="text-white/60 text-sm font-cabinet whitespace-nowrap">— Frederik</span>
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
                Reservér din plads
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
            Reservér din plads
          </button>
        </div>
      )}

      {/* ─── IS THIS FOR YOU? ─── */}
      <section className="py-16 md:py-24 bg-stone">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4"
          >
            Er det noget for dig?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-charcoal/60 text-lg mb-12"
          >
            Med 18, 29 og 56 km er der en distance til alle niveauer.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du har løbet trail i Danmark, et halvmarathon eller mere",
              "Du er nysgerrig på trail- eller ultraløb i norsk højfjeld",
              "Du vil have struktur, trænervejledning og en plan",
              "Du foretrækker fællesskab frem for at gøre det alene",
              "Du vil kombinere løb med hotel, sauna og pool club",
              "Du drømmer om en weekend, der giver dig gåsehud",
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
                  "Fly København → Oslo",
                  "Privat shuttlebus til Hemsedal",
                  "3 overnatninger på Fýri Resort",
                  "Startnummer og race-forberedelse",
                ],
              },
              {
                icon: Heart,
                title: "Oplevelse & fællesskab",
                items: [
                  "Lille, tæt dansk løbegruppe",
                  "Shakeout run og fælles middage",
                  "Pool club, sauna og after-trail party",
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
          alt="Norske fjeldstier ved Hemsedal"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            Skandinaviens fineste trails
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            Fýri Trail by Salomon er langt mere end et løb. Det er en hel weekend i Hemsedal med foredrag, testløb, shoe clinics, fjeldbad i Rjukandefossen og en målstreg, hvor alle føler sig som superhelte.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { label: "Distancer", value: "18 / 29 / 56 km" },
              { label: "Højdemeter", value: "600–2.600 m" },
              { label: "Terræn", value: "Norsk højfjeld" },
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
            <p className="text-charcoal/60 text-lg">
              Det er de fleste. Og det er helt okay.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Jeg har aldrig løbet trail i bjerge før",
                a: "Så er 18 km-distancen et perfekt sted at starte. Coach Emil tilpasser træningen til dit niveau, og du får en plan, der gradvist gør dig klar.",
              },
              {
                q: "Jeg er bange for ikke at kunne følge med",
                a: "Det er ikke et konkurrencehold. Vi løber i vores eget tempo, og du har fuld støtte undervejs — både fra træneren og gruppen.",
              },
              {
                q: "Hvad med udstyr og race-taktik?",
                a: "Du får en komplet udstyrsguide tilpasset norske forhold, og vi gennemgår race-taktik sammen, så du er tryg på startlinjen.",
              },
              {
                q: "Hvordan booker jeg?",
                a: "Du reserverer din plads med 5.000 DKK i depositum pr. billet. Vi kontakter dig personligt inden for 48 timer, og resten betales 60 dage før afrejse.",
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
            <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">
              Udforsk ruten
            </h2>
            <p className="text-white/60 text-lg">
              Klik på kortet for at interagere
            </p>
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
              src="https://app.racedaymap.com/fyri-trails"
              className="w-full h-[350px] md:h-[500px] border-0"
              style={{ pointerEvents: 'none' }}
              allow="geolocation"
              loading="lazy"
              title="Fýri Trail rutekort"
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
          <Fyri26Itinerary variant="overlay" />
        </div>
      </section>

      {/* ─── HOTEL ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <Fyri26Accommodation />
        </div>
      </section>

      {/* ─── SHAKEOUT RUN ─── */}
      <ShakeoutRunBanner />

      {/* ─── FINAL CTA ─── */}
      <section id="final-cta" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFDC00] text-charcoal px-4 py-2 rounded-full text-sm font-cabinet font-bold mb-6 shadow-md">
            {SPOTS_LEFT} PLADSER TILBAGE 🎟️
          </div>

          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">
            Reservér din plads
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Vi er kun 10–12 løbere med på turen. Sikr dig en plads med et depositum.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-left">
            <div className="mb-6">
              <p className="text-sm text-charcoal/60 mb-1">Pris fra</p>
              <p className="font-cabinet text-3xl font-bold text-charcoal">
                12.999 DKK <span className="text-sm text-charcoal/50 font-normal">inkl. moms</span>
              </p>
            </div>

            <PriceQuoteForm
              destinationName={DESTINATION_NAME}
              availableDistances={["18km", "29km", "56km"]}
              maxParticipants={SPOTS_LEFT}
              depositPercentage={50}
              onSubmitOverride={handleStripeCheckout}
              customInfoText="Reservér din plads ved at betale 5.000 DKK i depositum pr. billet. Vi vender personligt tilbage inden for 48 timer på hverdage med en bekræftelse, og det resterende beløb opkræves 60 dage før afrejse."
              getSubmitButtonLabel={(p) => `Betal ${(5000 * p).toLocaleString('da-DK')} DKK i depositum`}
            />

            <div className="mt-4">
              <CallMeBackCTA />
            </div>

            <p className="text-charcoal/40 text-xs text-center mt-6">
              Vi vender tilbage inden for 48 timer.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fyri26;
