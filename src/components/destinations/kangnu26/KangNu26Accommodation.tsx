import React from 'react';
import { Star, ExternalLink } from "lucide-react";
import { useIsMobile } from "../../../hooks/use-mobile";

const KangNu26Accommodation = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-16">
      <h2 className="font-cabinet text-3xl font-bold text-charcoal text-center">Vælg dit hotel i Nuuk</h2>
      
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
        {/* Hotel SØMA */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="h-[300px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" 
              alt="Hotel SØMA Nuuk" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <h3 className="font-cabinet text-2xl font-bold text-charcoal mr-2">Hotel SØMA</h3>
              <div className="flex">
                {[...Array(4)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" />
                ))}
              </div>
            </div>
            <h4 className="font-cabinet text-lg text-terra mb-3">Moderne Boutique Hotel • Nuuk centrum</h4>
            <p className="text-base mb-4">
              <b>Hotel SØMA</b> ligger i hjertet af Nuuk og tilbyder et moderne twist på grønlandsk kultur. 
              Hotellet har en fantastisk restaurant, arktisk spa og ligger en kort gåtur fra bymidten, 
              museumsområdet og kolonihavnen. Perfekt til dem der ønsker lidt ekstra komfort og luksus.
            </p>
            <div className="bg-stone rounded-lg p-4 mb-4">
              <p className="font-cabinet font-bold text-charcoal mb-1">Enkeltværelse</p>
              <p className="text-sm text-gray-600">Pris inkluderet i pakken — se prisoverslag</p>
            </div>
            <a 
              href="https://hotelsoma.com/da/nuuk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-sm text-terra hover:text-terra/80 transition-colors underline"
            >
              Besøg hotellets hjemmeside
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* HHE Express */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="h-[300px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
              alt="HHE Express Nuuk" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <h3 className="font-cabinet text-2xl font-bold text-charcoal mr-2">HHE Express</h3>
              <div className="flex">
                {[...Array(3)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" />
                ))}
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
              <p className="font-cabinet font-bold text-charcoal mb-1">Enkeltværelse</p>
              <p className="text-sm text-gray-600">Pris inkluderet i pakken — se prisoverslag</p>
            </div>
            <a 
              href="https://hheexpress.gl/?lang=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-sm text-terra hover:text-terra/80 transition-colors underline"
            >
              Besøg hotellets hjemmeside
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KangNu26Accommodation;
