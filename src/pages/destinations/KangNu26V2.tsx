import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mountain, Users, MapPin, Heart, Shield, ChevronDown, Star, Hourglass, Plane, ChevronLeft, ChevronRight, Ship, Binoculars, CheckCircle2, X, Footprints } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import PriceQuoteForm, { type FormValues } from "../../components/PriceQuoteForm";
import CallMeBackCTA from "../../components/CallMeBackCTA";
import KangNu26Itinerary from "../../components/destinations/kangnu26/KangNu26Itinerary";
import KangNu26Accommodation from "../../components/destinations/kangnu26/KangNu26Accommodation";
import ShakeoutRunBanner from "../../components/home/ShakeoutRunBanner";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/use-mobile";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useToast } from "../../components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const KangNu26V2 = () => {
  usePageTitle("KangNu Running Race – Trail Squad");
  useScrollToTop();
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const [searchParams, setSearchParams] = useSearchParams();
  const paymentStatus = searchParams.get("payment");
  const [showPaymentBanner, setShowPaymentBanner] = useState(paymentStatus === "success");
  const webhookSentRef = useRef(false);

  const [testimonials, setTestimonials] = useState<{ name: string; location: string | null; rating: number; review: string; distance: string; destination: string; photo_url: string[] | null; created_at: string }[]>([]);
  const [activePhotos, setActivePhotos] = useState<Record<number, number>>({});
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  // Send Zapier webhook after successful Stripe payment
  useEffect(() => {
    if (paymentStatus === "success" && !webhookSentRef.current) {
      webhookSentRef.current = true;
      const storedData = sessionStorage.getItem('kangnu_booking_data');
      if (storedData) {
        const bookingData = JSON.parse(storedData);
        
        supabase.from('quote_requests').insert({
          destination: 'KangNu Running Race',
          full_name: bookingData.fullName,
          email: bookingData.email,
          phone: bookingData.phone,
          preferred_distance: bookingData.preferredDistance,
          participants: bookingData.participants,
          accommodation_preference: bookingData.accommodationPreference,
          source: 'kangnu26v2_stripe_deposit',
          payment_status: 'success',
        }).then(() => {});

        fetch('https://hooks.zapier.com/hooks/catch/21931910/2qey8br/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
          body: JSON.stringify({
            ...bookingData,
            source: 'kangnu26v2_stripe_deposit',
            payment_status: 'success',
            submitted_at: new Date().toISOString(),
            triggered_from: window.location.origin,
          }),
        }).catch((err) => console.error('Zapier webhook error:', err));
        sessionStorage.removeItem('kangnu_booking_data');
      }
    }
  }, [paymentStatus]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase
        .from('testimonials')
        .select('name, location, rating, review, distance, destination, photo_url, created_at')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(6);
      if (data) setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const handleStripeCheckout = async (data: FormValues) => {
    const { data: result, error } = await supabase.functions.invoke('create-kangnu-checkout', {
      body: {
        accommodationPreference: data.accommodationPreference,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        preferredDistance: data.preferredDistance,
        participants: data.participants,
        returnPath: '/kangnu_2',
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

    sessionStorage.setItem('kangnu_booking_data', JSON.stringify({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      preferredDistance: data.preferredDistance,
      participants: data.participants,
      accommodationPreference: data.accommodationPreference,
    }));

    window.location.href = result.url;
  };

  const scrollToCTA = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone">
      {showPaymentBanner && (
        <div className="bg-green-600 text-white py-4 px-6 relative z-50">
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div>
                <p className="font-cabinet font-bold text-lg">Depositum betalt! 🎉</p>
                <p className="text-white/90 text-sm">Tak for din tilmelding til KangNu Running Race. Vi vender personligt tilbage til dig inden for 48 timer på hverdage med en bekræftelse.</p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowPaymentBanner(false);
                setSearchParams({});
              }}
              className="shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section className="relative min-h-[95vh] flex items-end md:items-center justify-center overflow-hidden pb-16 md:pb-0">
        <img
          src="/lovable-uploads/kangnu26-hero.jpg"
          alt="KangNu Running Race — løb i Grønlands vilde natur nær Nuuk"
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
            20.–23. august 2026 · Nuuk, Grønland
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Løb KangNu Race
            <br />
            <span className="text-[#FFDC00]">i verdens vildeste natur</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Hvalsafari, arktisk natur og et trailløb du aldrig glemmer — vi håndterer alt, så du kan fokusere på oplevelsen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 text-white/90 text-sm mb-10 max-w-2xl mx-auto"
          >
            {[
              { icon: Footprints, text: "Både vandretur og trailløb" },
              { icon: Plane, text: "Fly & logistik er håndteret" },
              { icon: Users, text: "Lille dansk gruppe (12–16)" },
              { icon: Binoculars, text: "Hvalsafari & arktisk natur" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-4">
                <item.icon className="w-5 h-5 text-[#FFDC00]" />
                <span className="text-center leading-snug">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* ─── FEATURED TESTIMONIAL ─── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-8 bg-black/40 backdrop-blur-sm rounded-2xl md:rounded-full px-6 py-4 md:py-3 mx-auto w-fit max-w-sm md:max-w-none"
          >
            <div className="flex gap-0.5 shrink-0">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-3.5 h-3.5 fill-[#FFDC00] text-[#FFDC00]" />
              ))}
            </div>
            <p className="text-white/90 text-sm md:text-base italic text-center">
              "Helt fantastisk, både løbet og Trail Squad! Jeg var i tvivl om jeg overhovedet kunne gennemføre et ultraløb - men det lykkedes og det var mega fedt!"
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
                onClick={scrollToCTA}
                className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg hover:bg-[#FFDC00]/90 transition-all shadow-lg shadow-[#FFDC00]/20"
              >
                Ansøg om en plads nu
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
            onClick={scrollToCTA}
            className="bg-[#FFDC00] text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg hover:bg-[#FFDC00]/90 transition-all shadow-lg shadow-[#FFDC00]/20"
          >
            Ansøg om en plads nu
          </button>
          <button
            onClick={() => document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-cabinet font-medium hover:border-white/60 transition-all"
          >
            Se hvad du får
          </button>
        </div>
      )}

      {/* ─── URGENCY CTA ─── */}
      <section className="bg-charcoal py-6 md:py-8 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              animate={{ rotate: [0, 180, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
            >
              <Hourglass className="w-5 h-5 text-[#FFDC00]" />
            </motion.div>
            <p className="font-cabinet font-bold text-white text-lg md:text-xl tracking-tight">
              De første 5 pladser er allerede booket!
            </p>
            <motion.div
              animate={{ rotate: [0, 180, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
            >
              <Hourglass className="w-5 h-5 text-[#FFDC00]" />
            </motion.div>
          </div>
          <p className="text-white/60 text-sm md:text-base mb-5 max-w-lg mx-auto">
            Grønland er en once-in-a-lifetime oplevelse — book din plads før din nabo!
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={scrollToCTA}
              className="bg-[#FFDC00] text-charcoal px-7 py-3 rounded-full font-cabinet font-bold text-sm hover:bg-[#FFDC00]/90 transition-colors"
            >
              Ansøg om en plads →
            </button>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FFDC00] text-charcoal text-xs font-bold">
              Kun 16 pladser tilbage
            </span>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      {testimonials.length > 0 && (() => {
        const marina = testimonials.find(t => t.name === 'Marina') || testimonials[0];
        const marinaPhoto = Array.isArray(marina.photo_url) && marina.photo_url.length > 0 ? marina.photo_url[0] : "/lovable-uploads/69dcec0a-0f68-4392-b8d8-b61b254c67b7.png";
        return (
      <section className="bg-charcoal py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Photo */}
            <div className="w-[7.5rem] h-[7.5rem] md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#FFDC00]/30 shrink-0">
              <img
                src={marinaPhoto}
                alt={`Billede fra ${marina.name}`}
                className="w-full h-full object-cover scale-150"
                loading="lazy"
              />
            </div>

            {/* Quote */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className={`w-4 h-4 ${s <= marina.rating ? "fill-[#FFDC00] text-[#FFDC00]" : "text-gray-300"}`} />
                ))}
              </div>
              <blockquote className="text-white/90 italic text-sm md:text-base leading-relaxed mb-2 max-w-[90%]">
                "{marina.review}"
              </blockquote>
              <div className="flex flex-col items-center md:items-start gap-0.5">
                <div className="flex items-center gap-3">
                  <span className="font-cabinet font-bold text-white text-sm">{marina.name}</span>
                  {marina.location && <span className="text-white/50 text-sm">{marina.location}</span>}
                </div>
                <span className="text-white/40 text-xs">Deltager på tur til Trail Ribeira Sacra, Spanien</span>
              </div>
            </div>
          </div>
        </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-12 text-center">
            {[
              { number: "12–16", label: "løbere per tur" },
              { number: "100%", label: "håndteret for dig" },
              { number: "1", label: "dedikeret træner" },
            ].map((stat, i) => (
              <div key={i}>
                <span className="font-cabinet text-2xl md:text-3xl font-bold text-[#FFDC00]">{stat.number}</span>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
      </section>
        );
      })()}

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
            Du behøver ikke være ultraløber. Du skal bare have lysten til eventyr.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du har gennemført et halvt eller helt marathon eller lignende",
              "Du drømmer om at opleve Grønlands vilde natur",
              "Du vil have struktur, trænervejledning og en plan",
              "Du foretrækker fællesskab frem for at gøre det alene",
              "Du vil kombinere løb med hvalsafari og arktisk eventyr",
              "Du vil udfordre dig selv i verdens mest unikke landskab",
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
                  "Tilpasset træningsplan til dit niveau",
                  "Sparring og motivation i gruppen",
                  "Løbsstrategi og race-briefing",
                ],
              },
              {
                icon: Plane,
                title: "Rejse & logistik",
                items: [
                  "Fly København → Nuuk (t/r)",
                  "Transfer til hotel i Nuuk",
                  "3 overnatninger på hotel",
                  "Bådtransport til startområdet",
                ],
              },
              {
                icon: Heart,
                title: "Oplevelse & fællesskab",
                items: [
                  "3-timers hvalsafari i Nuuk-fjorden",
                  "Shakeout run og fælles middage",
                  "Fejring ved målstregen",
                  "Minder for livet i arktisk natur",
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
          src="/lovable-uploads/kangnu26-hero.jpg"
          alt="Grønlands dramatiske fjorde og arktiske natur"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            En oplevelse du aldrig glemmer
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            KangNu Running Race starter med en bådtur til Kobberfjorden og fører dig gennem Grønlands dramatiske arktiske landskab — et af verdens mest uberørte og betagende steder.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { label: "Distancer", value: "15 / 32 / 51 km" },
              { label: "Højdepunkt", value: "Hvalsafari" },
              { label: "Terræn", value: "Arktisk fjeld" },
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
                q: "Jeg har aldrig løbet trail i arktisk natur",
                a: "Perfekt — det er netop det, der gør det til et unikt eventyr. Coach Emil tilpasser træningen til dit niveau, og du får input til hvordan du gradvist træner op til race.",
              },
              {
                q: "Jeg er bange for ikke at kunne følge med",
                a: "Det er ikke et konkurrencehold. Vi løber i vores eget tempo, og du har fuld støtte undervejs — både fra træneren og gruppen.",
              },
              {
                q: "Hvad med udstyr og race-taktik?",
                a: "Vi hjælper dig hele vejen. Du får en komplet udstyrsguide tilpasset forholdene i Grønland, og Coach Emil gennemgår race-taktik, så du føler dig tryg og godt forberedt på startlinjen.",
              },
              {
                q: "Er det dyrt?",
                a: "Priser fra 26.000 DKK inkl. moms. Det dækker fly, hotel, transport, hvalsafari, trænervejledning og hele oplevelsen. Du betaler et depositum på DKK 10.000 pr. billet.",
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
              src="https://app.racedaymap.com/kangnu"
              className="w-full h-[350px] md:h-[500px] border-0"
              style={{ pointerEvents: 'none' }}
              loading="lazy"
              title="KangNu Running Race rutekort"
            />
          </div>
        </div>
      </section>

      {/* ─── 4-DAGS PLAN ─── */}
      <section className="w-full relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/lovable-uploads/hval.webp)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
          <KangNu26Itinerary variant="overlay" />
        </div>
      </section>

      {/* ─── HOTEL ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <KangNu26Accommodation />
        </div>
      </section>

      {/* ─── SHAKEOUT RUN ─── */}
      <ShakeoutRunBanner showLocalClub />

      {/* ─── MADS TESTIMONIAL ─── */}
      {testimonials.length > 0 && (() => {
        const mads = testimonials.find(t => t.name.trim() === 'Mads') || testimonials[0];
        const madsPhoto = Array.isArray(mads.photo_url) && mads.photo_url.length > 0 ? mads.photo_url[0] : "/lovable-uploads/69dcec0a-0f68-4392-b8d8-b61b254c67b7.png";
        return (
      <section className="bg-charcoal py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-[7.5rem] h-[7.5rem] md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#FFDC00]/30 shrink-0">
              <img
                src={madsPhoto}
                alt={`Billede fra ${mads.name}`}
                className="w-full h-full object-cover scale-150"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className={`w-4 h-4 ${s <= mads.rating ? "fill-[#FFDC00] text-[#FFDC00]" : "text-gray-300"}`} />
                ))}
              </div>
              <blockquote className="text-white/90 italic text-sm md:text-base leading-relaxed mb-2 max-w-[90%]">
                "{mads.review}"
              </blockquote>
              <div className="flex flex-col items-center md:items-start gap-0.5">
                <div className="flex items-center gap-3">
                  <span className="font-cabinet font-bold text-white text-sm">{mads.name}</span>
                  {mads.location && <span className="text-white/50 text-sm">{mads.location}</span>}
                </div>
                <span className="text-white/40 text-xs">Deltager på tur til Trail Ribeira Sacra, Spanien</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
      })()}
      <section id="final-cta" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFDC00]/20 text-[#FFDC00] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Hourglass className="w-4 h-4" />
            Kun 16 pladser tilbage
          </div>

          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">
            Tag det første skridt
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Grønland venter — vær en del af det.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-left">
            <div className="mb-6">
              <p className="text-sm text-charcoal/60 mb-1">Pris fra</p>
              <p className="font-cabinet text-3xl font-bold text-charcoal">
                26.000 DKK <span className="text-sm text-charcoal/50 font-normal">inkl. moms</span>
              </p>
              <Accordion type="single" collapsible className="w-full mt-2">
                <AccordionItem value="price-details" className="border-none">
                  <AccordionTrigger
                    className="px-0 py-0 text-left text-sm underline text-primary hover:text-primary/80 shadow-none bg-transparent font-normal font-sans decoration-[1.5px] focus:ring-0 focus:outline-none !flex !items-center !justify-start gap-2"
                    style={{ background: 'none', boxShadow: 'none' }}
                  >
                    Forklar prisvariationer
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 text-charcoal/70 text-sm">
                    <div>
                      Prisen for et <b>Economy Double Værelse på HHE Express</b> (3★) er 26.000 DKK per person.<br /><br />
                      Prisen for et <b>Single Standard Værelse på Hotel SØMA</b> (4★) er 26.550 DKK per person.<br /><br />
                      Prisen for et <b>Single Superior Værelse på Hotel SØMA</b> (4★) er 27.800 DKK per person.<br /><br />
                      Moms er inkluderet i alle priser.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <PriceQuoteForm
              destinationName="KangNu Running Race"
              availableDistances={["15 km", "32 km", "51 km"]}
              maxParticipants={16}
              customInfoText="Udfyld denne formular, betal depositum på DKK 10.000 pr. billet, og vi vender personligt tilbage til dig inden for 48 timer på hverdage."
              onSubmitOverride={handleStripeCheckout}
              getSubmitButtonLabel={(participants) => `Betal depositum — DKK ${(10000 * (participants || 1)).toLocaleString('da-DK')}`}
              accommodationOptions={[
                { value: "hhe-economy", label: "HHE Express — Economy Double (26.000 kr.)", spotsRemaining: 6 },
                { value: "soma-standard", label: "Hotel SØMA — Single Standard (26.550 kr.)", spotsRemaining: 3 },
                { value: "soma-superior", label: "Hotel SØMA — Single Superior (27.800 kr.)", spotsRemaining: 5 },
              ]}
            />
            <div className="mt-4">
              <CallMeBackCTA />
            </div>

            <p className="text-charcoal/40 text-xs text-center mt-6">
              Vi vender tilbage inden for 48 timer med et personligt tilbud.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KangNu26V2;
