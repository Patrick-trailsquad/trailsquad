import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import AddTestimonialModal from "../miut/AddTestimonialModal";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  distance: string;
  photo_url?: string;
  created_at: string;
}

const RibeiraSacraTestimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dbTestimonials, setDbTestimonials] = useState<Testimonial[]>([]);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('testimonials').select('*').eq('destination', 'Ribeira Sacra').order('created_at', {
        ascending: false
      });
      if (error) throw error;
      setDbTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Refresh testimonials when modal closes in case a new one was added
    fetchTestimonials();
  };

  const toggleReviewExpansion = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const ReviewText = ({ text, index }: { text: string; index: number }) => {
    const maxLength = 200;
    const shouldTruncate = text.length > maxLength;
    const isExpanded = expandedReviews[index] || false;
    const displayText = shouldTruncate && !isExpanded ? text.slice(0, maxLength) + '...' : text;

    return (
      <div>
        <p className="text-charcoal/80 text-sm leading-relaxed">{displayText}</p>
        {shouldTruncate && (
          <button
            onClick={() => toggleReviewExpansion(index)}
            className="text-[#FFDC00] hover:text-[#FFDC00]/80 text-sm font-medium mt-2 transition-colors"
          >
            {isExpanded ? 'Læs mindre' : 'Læs mere'}
          </button>
        )}
      </div>
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-[#FFDC00]' : 'fill-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  // Use only database testimonials
  const allTestimonials = dbTestimonials.map(t => {
    const date = new Date(t.created_at).toLocaleDateString('da-DK', { 
      year: 'numeric', 
      month: 'long' 
    });
    return {
      name: t.name,
      location: t.location,
      date: date,
      race: t.distance,
      review: t.review,
      rating: t.rating,
      photo_url: t.photo_url
    };
  });

  return (
    <section className="py-16 bg-stone">
      <div className="container mx-auto px-4">
        {allTestimonials.length > 0 && (
          <div className="text-center mb-12">
            <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Squad'ens anmeldelser
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
              Læs hvad andre løbere har oplevet på Trail Ribeira Sacra
            </p>
          </div>
        )}

        {allTestimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {allTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    {testimonial.photo_url && testimonial.photo_url !== 'null' ? (
                      <img
                        src={testimonial.photo_url} 
                        alt={`Photo from ${testimonial.name}`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-[#FFDC00] flex items-center justify-center">
                        <span className="text-charcoal font-cabinet font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-cabinet font-bold text-lg text-charcoal mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {renderStars(testimonial.rating)}
                        <p className="text-sm text-charcoal/60 mt-1">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                  <ReviewText text={testimonial.review} index={index} />
                  <div className="mt-auto pt-4">
                    <span className="inline-block px-3 py-1 bg-[#FFDC00]/10 text-charcoal text-sm rounded-full font-medium">
                      {testimonial.race}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-charcoal/60 text-lg mb-8">
              Ingen anmeldelser endnu. Vær den første til at dele din oplevelse!
            </p>
          </div>
        )}

        {allTestimonials.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal font-cabinet font-bold px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Del din oplevelse
            </button>
          </div>
        )}
      </div>
      <AddTestimonialModal isOpen={isModalOpen} onClose={handleModalClose} destination="Ribeira Sacra" />
    </section>
  );
};

export default RibeiraSacraTestimonials;
