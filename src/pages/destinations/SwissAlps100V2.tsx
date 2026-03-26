import { usePageTitle } from "../../hooks/usePageTitle";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mountain, Users, MapPin, Heart, Shield, ChevronDown, Star, Hourglass, Plane, ChevronLeft, ChevronRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import CallMeBackCTA from "../../components/CallMeBackCTA";
import SwissAlps100Itinerary from "../../components/destinations/swiss-alps-100/SwissAlps100Itinerary";
import SwissAlps100Accommodation from "../../components/destinations/swiss-alps-100/SwissAlps100Accommodation";
import ShakeoutRunBanner from "../../components/home/ShakeoutRunBanner";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/use-mobile";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

const SwissAlps100V2 = () => {
  usePageTitle("Swiss Alps 100 – Trail Squad");
  useScrollToTop();
  const isMobile = useIsMobile();

  const [testimonials, setTestimonials] = useState<{ name: string; location: string | null; rating: number; review: string; distance: string; destination: string; photo_url: string[] | null; created_at: string }[]>([]);
  const [activePhotos, setActivePhotos] = useState<Record<number, number>>({});
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

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

  const scrollToCTA = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <img
          src="/lovable-uploads/swiss-alps-100-hero-new.jpg"
          alt="Løbere i de schweiziske alper med udsigt over Aletsch-gletsjeren"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="absolute top-6 left-6 z-20">
          <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Trail Squad
          </Link>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#FFDC00] font-cabinet font-semibold text-sm tracking-widest uppercase mb-4"
          >
            6.–9. august 2026 · Fiesch, Schweiz
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-cabinet text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Løb Swiss Alps 100
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
              { icon: Mountain, text: "Aletsch-gletsjeren & alpestier" },
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
            className="flex items-center justify-center gap-3 mb-8 bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 mx-auto w-fit"
          >
            <div className="flex gap-0.5 shrink-0">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-3.5 h-3.5 fill-[#FFDC00] text-[#FFDC00]" />
              ))}
            </div>
            <p className="text-white/90 text-sm md:text-base italic">
              "Helt fantastisk, både løbet og Trail Squad! Det var mit første ultra løb og det kunne ikke havde været bedre."
            </p>
            <span className="text-white/60 text-sm font-cabinet whitespace-nowrap">— Frederik</span>
          </motion.div>

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
              Ansøg om en plads
            </button>
            <button
              onClick={() => document.getElementById("what-you-get")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-cabinet font-medium hover:border-white/60 transition-all"
            >
              Se hvad du får
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

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
              Deadline: ultimo april 2026
            </p>
            <motion.div
              animate={{ rotate: [0, 180, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
            >
              <Hourglass className="w-5 h-5 text-[#FFDC00]" />
            </motion.div>
          </div>
          <p className="text-white/60 text-sm md:text-base mb-5 max-w-lg mx-auto">
            Vi sammensætter den endelige gruppe i slutningen af april — book din plads før din nabo!
          </p>
          <button
            onClick={scrollToCTA}
            className="bg-[#FFDC00] text-charcoal px-7 py-3 rounded-full font-cabinet font-bold text-sm hover:bg-[#FFDC00]/90 transition-colors"
          >
            Ansøg om en plads →
          </button>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      {testimonials.length > 0 && (
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-cabinet font-bold text-center text-white mb-12">
            Hvad siger vores løbere?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, index) => {
              const photos = Array.isArray(t.photo_url) && t.photo_url.length > 0 ? t.photo_url : ["/lovable-uploads/69dcec0a-0f68-4392-b8d8-b61b254c67b7.png"];
              const date = new Date(t.created_at).toLocaleDateString('da-DK', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase());
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-0 h-full">
                    <div className="bg-gray-100 h-60 relative overflow-hidden group">
                      <img
                        src={photos[activePhotos[index] || 0]}
                        alt={`Billede fra ${t.name}`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                        loading="lazy"
                      />
                      {photos.length > 1 && (
                        <>
                          <button
                            onClick={() => setActivePhotos(prev => ({ ...prev, [index]: ((prev[index] || 0) - 1 + photos.length) % photos.length }))}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setActivePhotos(prev => ({ ...prev, [index]: ((prev[index] || 0) + 1) % photos.length }))}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {photos.map((_, pi) => (
                              <button
                                key={pi}
                                onClick={() => setActivePhotos(prev => ({ ...prev, [index]: pi }))}
                                className={`w-2 h-2 rounded-full transition-colors ${(activePhotos[index] || 0) === pi ? "bg-white" : "bg-white/40"}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-cabinet font-bold text-lg text-white">{t.name}</h3>
                          <p className="text-sm text-white/60">{t.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(s => (
                              <Star key={s} className={`w-4 h-4 ${s <= t.rating ? "fill-[#FFDC00] text-[#FFDC00]" : "text-gray-300"}`} />
                            ))}
                          </div>
                          <p className="text-sm text-white/60 mt-1">{date}</p>
                        </div>
                      </div>
                      <p className={`text-white/80 italic text-sm leading-relaxed mb-2 ${expandedReviews[index] ? '' : 'line-clamp-6'}`}>
                        "{t.review}"
                      </p>
                      {t.review.length > 200 && (
                        <button
                          onClick={() => setExpandedReviews(prev => ({ ...prev, [index]: !prev[index] }))}
                          className="text-sm text-[#FFDC00] hover:underline font-medium mb-4"
                        >
                          {expandedReviews[index] ? 'Læs mindre' : 'Læs mere'}
                        </button>
                      )}
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block bg-[#FFDC00] text-charcoal px-3 py-1 rounded-full text-sm font-cabinet font-medium">
                          {t.distance}
                        </span>
                        {t.destination && (
                          <span className="text-xs text-white/60">{t.destination}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-12 text-center">
            {[
              { number: "10–12", label: "løbere per tur" },
              { number: "100%", label: "håndteret for dig" },
              { number: "1", label: "dedikeret træner" },
            ].map((stat, i) => (
              <div key={i}>
                <span className="font-cabinet text-2xl md:text-3xl font-bold text-[#FFDC00]">{stat.number}</span>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
            Du behøver ikke være ultraløber. Du skal bare have lysten.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Du har gennemført et marathon, løbet trail i Danmark eller lignende",
              "Du er nysgerrig på trail- eller ultraløb",
              "Du vil have struktur, trænervejledning og en plan",
              "Du foretrækker fællesskab frem for at gøre det alene",
              "Du drømmer om en oplevelse, der giver dig gåsehud",
              "Du vil udfordre dig selv i et af verdens smukkeste landskaber",
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
                  "Fly København → Zürich",
                  "Privat shuttlebus til Fiesch",
                  "3 overnatninger på alpehotel",
                  "Afhentning af startnumre & race-forberedelse",
                ],
              },
              {
                icon: Heart,
                title: "Oplevelse & fællesskab",
                items: [
                  "Lille, tæt dansk løbegruppe",
                  "Shakeout run og fælles middage",
                  "Fejring ved målstregen",
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
          src="/lovable-uploads/swiss-alps-100-hero-new.jpg"
          alt="Alpine stier i Schweiz"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-6">
            En oplevelse du aldrig glemmer
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            Swiss Alps 100 fører dig gennem UNESCO-verdensarvsområdet ved Aletsch-gletsjeren — Europas største gletsjer. Alpine stier, svævende hængebroer og udsigter der tager pusten fra dig.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { label: "Distancer", value: "50 / 100 / 160 km" },
              { label: "Højdepunkt", value: "Aletsch-gletsjeren" },
              { label: "Terræn", value: "Alpint højfjeld" },
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
                q: "Jeg har aldrig løbet ultra før",
                a: "Perfekt — de fleste i gruppen er i samme båd. Coach Emil tilpasser træningen til dit niveau, og du får en plan der bygger dig op gradvist.",
              },
              {
                q: "Jeg er bange for ikke at kunne følge med",
                a: "Det er ikke et konkurrencehold. Vi løber i vores eget tempo, og du har fuld støtte undervejs — både fra træneren og gruppen.",
              },
              {
                q: "Hvad hvis jeg bliver skadet inden?",
                a: "Vi har fleksible vilkår og hjælper dig med at justere din plan. Din sundhed kommer altid først.",
              },
              {
                q: "Er det dyrt?",
                a: "Priser fra 12.500 DKK inkl. moms. Det dækker fly, hotel, transport, trænervejledning og hele oplevelsen. Du betaler 75% som depositum.",
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
              src="https://app.racedaymap.com/swiss-alps-100"
              className="w-full h-[350px] md:h-[500px] border-0"
              style={{ pointerEvents: 'none' }}
              loading="lazy"
              title="Swiss Alps 100 rutekort"
            />
          </div>
        </div>
      </section>


      {/* ─── 4-DAGS PLAN ─── */}
      <section className="w-full relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/lovable-uploads/ribeira-sacra-dagplan-bg.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
          <SwissAlps100Itinerary variant="overlay" />
        </div>
      </section>

      {/* ─── HOTEL ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <SwissAlps100Accommodation />
        </div>
      </section>

      {/* ─── SHAKEOUT RUN ─── */}
      <ShakeoutRunBanner />

      {/* ─── URGENCY + FINAL CTA ─── */}
      <section id="final-cta" className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFDC00]/20 text-[#FFDC00] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Hourglass className="w-4 h-4" />
            Kun 9 pladser tilbage
          </div>

          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-white mb-4">
            Tag det første skridt
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Lad være med bare at følge med fra sidelinjen — vær en del af det.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-left">
            <div className="mb-6">
              <p className="text-sm text-charcoal/60 mb-1">Pris fra</p>
              <p className="font-cabinet text-3xl font-bold text-charcoal">
                12.500 DKK <span className="text-sm text-charcoal/50 font-normal">inkl. moms</span>
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
                      Hvis du ønsker at dele et <b>Alpine Double Room</b> er prisen 12.500 DKK. Du vil skulle dele værelset med en fra din egen gruppe. Det betyder, at du ikke kan booke et delt værelse, hvis du tilmelder dig alene.<br /><br />
                      Prisen for at bo alene på et <b>Alpine Double Room</b> er 14.600 DKK.<br /><br />
                      Moms er inkluderet i alle priser.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <PriceQuoteForm
              destinationName="Swiss Alps 100"
              availableDistances={["50km", "100km", "160km"]}
              maxParticipants={9}
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


export default SwissAlps100V2;
