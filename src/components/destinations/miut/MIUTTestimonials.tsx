import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AddTestimonialModal from "./AddTestimonialModal";

const testimonials = [
  {
    name: "Kasper Nielsen",
    location: "København",
    rating: 5,
    review: "MIUT var helt fantastisk! Landskaberne var utrolige - fra de grønne levadas til de dramatiske bjergtoppe. Organisationen var perfekt, og oplevelsen var uforglemmelig. Kan varmt anbefales!",
    race: "MIUT 85km",
    date: "April 2024"
  },
  {
    name: "Maria Andersen",
    location: "Aarhus", 
    rating: 5,
    review: "Mit første ultraløb nogensinde, og jeg kunne ikke have valgt bedre! Trail Squad tog sig af alt, så jeg kunne fokusere på løbet. Madeira er simpelthen magisk at løbe gennem.",
    race: "MIUT 42km",
    date: "April 2024"
  },
  {
    name: "Thomas Larsen",
    location: "Odense",
    rating: 4,
    review: "Fantastisk oplevelse! Ruten var udfordrende men smuk. Hotellet var perfekt placeret, og maden var fantastisk. Kommer helt sikkert igen næste år!",
    race: "MIUT 60km", 
    date: "April 2024"
  },
  {
    name: "Anne Møller",
    location: "Aalborg",
    rating: 5,
    review: "Utrolig professionel planlægning fra Trail Squad. Alle detaljer var tænkt igennem. Madeira er et paradis for trailløbere - kan ikke vente med at komme tilbage!",
    race: "MIUT 115km",
    date: "April 2024"
  }
];

const MIUTTestimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-[#FFDC00] text-[#FFDC00]"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Anmeldelser fra deltagere
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Hør hvad vores tidligere deltagere siger om deres MIUT oplevelse
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-cabinet font-bold text-lg text-charcoal">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    {renderStars(testimonial.rating)}
                    <p className="text-sm text-charcoal/60 mt-1">{testimonial.date}</p>
                  </div>
                </div>
                
                <blockquote className="text-charcoal/80 mb-4 italic">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-[#FFDC00] text-charcoal px-3 py-1 rounded-full text-sm font-cabinet font-medium">
                    {testimonial.race}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg transition-colors"
          >
            Tilføj din anmeldelse
          </button>
          <p className="text-sm text-charcoal/60 mt-2">
            Deltog du i MIUT 2024? Del din oplevelse med os
          </p>
        </div>
      </div>

      <AddTestimonialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default MIUTTestimonials;