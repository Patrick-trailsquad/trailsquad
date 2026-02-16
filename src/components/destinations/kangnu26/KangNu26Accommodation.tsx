import React, { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "../../../hooks/use-mobile";

const somaImages = [
{ src: "/lovable-uploads/hotel-soma-1.jpg", alt: "Hotel SØMA - eksteriør om vinteren" },
{ src: "/lovable-uploads/hotel-soma-2.png", alt: "Hotel SØMA - restaurant" },
{ src: "/lovable-uploads/hotel-soma-3.jpg", alt: "Hotel SØMA - værelse" },
{ src: "/lovable-uploads/hotel-soma-4.jpg", alt: "Hotel SØMA - morgenmad" }];


const hheImages = [
{ src: "/lovable-uploads/hhe-express-1.jpg", alt: "HHE Express - eksteriør om aftenen" },
{ src: "/lovable-uploads/hhe-express-2.jpg", alt: "HHE Express - værelse" },
{ src: "/lovable-uploads/hhe-express-3.jpg", alt: "HHE Express - morgenmadsbuffet" },
{ src: "/lovable-uploads/hhe-express-4.png", alt: "HHE Express - lobby" }];


const KangNu26Accommodation = () => {
  const isMobile = useIsMobile();
  const [somaIndex, setSomaIndex] = useState(0);
  const [hheIndex, setHheIndex] = useState(0);

  return (
    <div className="space-y-16">
      <h2 className="font-cabinet text-3xl font-bold text-charcoal text-center">Vælg dit hotel i Nuuk</h2>
      
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
        {/* Hotel SØMA */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="h-[300px] overflow-hidden relative group">
            <img
              src={somaImages[somaIndex].src}
              alt={somaImages[somaIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-300" />

            <button
              onClick={() => setSomaIndex((prev) => (prev - 1 + somaImages.length) % somaImages.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">

              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSomaIndex((prev) => (prev + 1) % somaImages.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">

              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {somaImages.map((_, i) =>
              <button key={i} onClick={() => setSomaIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${i === somaIndex ? 'bg-white' : 'bg-white/50'}`} />
              )}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <h3 className="font-cabinet text-2xl font-bold text-charcoal mr-2">Hotel SØMA</h3>
              <div className="flex">
                {[...Array(4)].map((_, index) =>
                <Star key={index} className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" />
                )}
              </div>
            </div>
            <h4 className="font-cabinet text-lg text-terra mb-3">Moderne Boutique Hotel • Nuuk centrum</h4>
            <p className="text-base mb-4">
              <b>Hotel SØMA</b> ligger i hjertet af Nuuk og tilbyder et moderne twist på grønlandsk kultur. 
              Hotellet har en fantastisk restaurant, arktisk spa og ligger en kort gåtur fra bymidten, 
              museumsområdet og kolonihavnen. Perfekt til dem der ønsker lidt ekstra komfort og luksus.
            </p>
            <div className="bg-stone rounded-lg p-4 mb-4">
              <p className="font-cabinet font-bold text-charcoal mb-1">Single Standard Værelse</p>
              <p className="font-cabinet text-2xl font-bold text-charcoal mb-2">26.550 kr. <span className="text-sm font-normal text-gray-500">inkl. moms</span></p>
              <p className="text-sm text-gray-600">Et Standard Plus-værelse er ideelt til én gæst og tilbyder en blanding af komfort og praktisk. </p>
              <p className="text-xs font-cabinet font-semibold text-terra mt-2">4 værelser tilbage</p>
            </div>
            <div className="bg-stone rounded-lg p-4 mb-4">
              <p className="font-cabinet font-bold text-charcoal mb-1">Single Superior Værelse</p>
              <p className="font-cabinet text-2xl font-bold text-charcoal mb-2">27.800 kr. <span className="text-sm font-normal text-gray-500">inkl. moms</span></p>
              <p className="text-sm text-gray-600">Oplev komfort med et strejf af elegance i vores Superior-værelser. Disse værelser er velegnede til par eller solorejsende, der leder efter lidt mere plads. </p>
              <p className="text-xs font-cabinet font-semibold text-terra mt-2">5 værelser tilbage</p>
            </div>
          </div>
        </div>

        {/* HHE Express */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="h-[300px] overflow-hidden relative group">
            <img
              src={hheImages[hheIndex].src}
              alt={hheImages[hheIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-300" />

            <button
              onClick={() => setHheIndex((prev) => (prev - 1 + hheImages.length) % hheImages.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">

              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setHheIndex((prev) => (prev + 1) % hheImages.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">

              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {hheImages.map((_, i) =>
              <button key={i} onClick={() => setHheIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${i === hheIndex ? 'bg-white' : 'bg-white/50'}`} />
              )}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <h3 className="font-cabinet text-2xl font-bold text-charcoal mr-2">HHE Express</h3>
              <div className="flex">
                {[...Array(3)].map((_, index) =>
                <Star key={index} className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" />
                )}
              </div>
            </div>
            <h4 className="font-cabinet text-lg text-terra mb-3">Budget-Venligt Hotel • Nuuk centrum</h4>
            <p className="text-base mb-4">
              <b>HHE Express</b> er Grønlands nye budget-venlige hotel i centrum af Nuuk. 
              Hotellet tilbyder funktionelle og komfortable værelser til en fornuftig pris. 
              Vælg mellem standard dobbeltværelser og værelser med havudsigt. 
              Perfekt til dem der prioriterer beliggenhed og værdi for pengene.
            </p>
            <div className="bg-stone rounded-lg p-4 mb-4">
              <p className="font-cabinet font-bold text-charcoal mb-1">Economy Double Værelse</p>
              <p className="font-cabinet text-2xl font-bold text-charcoal mb-2">26.450 kr. <span className="text-sm font-normal text-gray-500">inkl. moms</span></p>
              <p className="text-sm text-gray-600">Komfortabelt værelse med grand lit (trekvart-seng), skrivebord, lænestol, fladskærms-TV.</p>
              <p className="text-xs font-cabinet font-semibold text-terra mt-2">7 værelser tilbage</p>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default KangNu26Accommodation;
