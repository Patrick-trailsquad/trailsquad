import { useState, useEffect, useRef } from "react";
import { Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AddTestimonialModal from "./AddTestimonialModal";
import { supabase } from "@/integrations/supabase/client";
interface Testimonial {
  id?: string;
  name: string;
  location: string | null;
  rating: number;
  review: string;
  distance: string;
  photo_url?: string | null;
  created_at?: string;
}
const MIUTTestimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dbTestimonials, setDbTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});
  useEffect(() => {
    fetchTestimonials();
  }, []);
  const fetchTestimonials = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('testimonials').select('*').eq('destination', 'MIUT').order('created_at', {
        ascending: false
      });
      if (error) throw error;
      setDbTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setIsLoading(false);
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
    const textRef = useRef<HTMLDivElement>(null);
    const [needsExpansion, setNeedsExpansion] = useState(false);
    const [fullHeight, setFullHeight] = useState('auto');
    const isExpanded = expandedReviews[index] || false;

    useEffect(() => {
      if (textRef.current) {
        // Temporarily set to auto to measure full height
        textRef.current.style.maxHeight = 'none';
        const scrollHeight = textRef.current.scrollHeight;
        const nineLinesHeight = 216; // 9 lines * 24px line height
        
        setFullHeight(`${scrollHeight}px`);
        setNeedsExpansion(scrollHeight > nineLinesHeight);
        
        // Reset to controlled height
        textRef.current.style.maxHeight = isExpanded ? `${scrollHeight}px` : `${nineLinesHeight}px`;
      }
    }, [text, isExpanded]);

    return (
      <div className="mb-4">
        <div
          ref={textRef}
          className="text-charcoal/80 italic text-sm overflow-hidden transition-all duration-500 ease-in-out whitespace-pre-wrap"
          style={{ 
            lineHeight: '1.5rem',
            maxHeight: isExpanded ? fullHeight : '216px'
          }}
        >
          "{text}"
        </div>
        {needsExpansion && (
          <button
            onClick={() => toggleReviewExpansion(index)}
            className="mt-2 text-sm text-[#FFDC00] hover:underline font-medium transition-colors duration-200"
          >
            {isExpanded ? 'Læs mindre' : 'Læs mere'}
          </button>
        )}
      </div>
    );
  };
  
  const AnimatedStars = () => {
    const [currentRating, setCurrentRating] = useState(1);
    const [isIncreasing, setIsIncreasing] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentRating(prev => {
          if (isIncreasing) {
            if (prev >= 5) {
              setIsIncreasing(false);
              return 4;
            }
            return prev + 1;
          } else {
            if (prev <= 1) {
              setIsIncreasing(true);
              return 2;
            }
            return prev - 1;
          }
        });
      }, 800); // Change every 800ms for smooth animation

      return () => clearInterval(interval);
    }, [isIncreasing]);

    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-16 h-16 transition-all duration-300 ${
              star <= currentRating
                ? "fill-[#FFDC00] text-[#FFDC00]"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const renderStars = (rating: number) => {
    return <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => <Star key={star} className={`w-4 h-4 ${star <= rating ? "fill-[#FFDC00] text-[#FFDC00]" : "text-gray-300"}`} />)}
      </div>;
  };

  // Use only database testimonials
  const allTestimonials = dbTestimonials.map(t => {
    console.log('Photo URL for', t.name, ':', t.photo_url, 'Type:', typeof t.photo_url);
    return {
      name: t.name,
      location: t.location || '',
      rating: t.rating,
      review: t.review,
      race: t.distance,
      photo_url: t.photo_url,
      date: t.created_at ? new Date(t.created_at).toLocaleDateString('da-DK', {
        month: 'long',
        year: 'numeric'
      }).replace(/^\w/, c => c.toUpperCase()) : ''
    };
  });
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {allTestimonials.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Anmeldelser fra deltagere
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Hør hvad vores tidligere deltagere siger om deres MIUT oplevelse
              </p>
            </div>

            {/* Mobile CTA - positioned after header, before reviews */}
            <div className="md:hidden text-center mb-8">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal px-6 py-3 rounded-full font-cabinet font-bold transition-colors">
                Tilføj din anmeldelse
              </button>
            </div>
          </>
        )}

        {allTestimonials.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allTestimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-0 h-full">
                  {/* Image on top */}
                  <div className="bg-gray-100 h-60 flex items-center justify-center">
                    {testimonial.photo_url && testimonial.photo_url !== 'null' ? (
                      <img 
                        src={testimonial.photo_url} 
                        alt={`Photo from ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src="/lovable-uploads/69dcec0a-0f68-4392-b8d8-b61b254c67b7.png" 
                        alt="Trail runner illustration"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Content below image */}
                  <div className="p-6">
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
                    <ReviewText text={testimonial.review} index={index} />
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-[#FFDC00] text-charcoal px-3 py-1 rounded-full text-sm font-cabinet font-medium">
                        {testimonial.race}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        ) : (
          /* Zero State */
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="mb-8">
              <div className="mx-auto mb-6 flex items-center justify-center">
                <AnimatedStars />
              </div>
              <h3 className="font-cabinet text-2xl font-bold text-charcoal mb-4">
                Vær den første til at anmelde!
              </h3>
              <p className="text-lg text-charcoal/70 mb-8">
                Har du deltaget i MIUT? Del din oplevelse og hjælp andre løbere med at forberede sig til eventyret.
              </p>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal px-12 py-6 rounded-full font-cabinet font-bold text-xl transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              ⭐ Skriv den første anmeldelse
            </button>
            
            <p className="text-sm text-charcoal/50 mt-6">
              Det tager under 90 sekunder og er til stor hjælp for fremtidige løbere
            </p>
          </div>
        )}

        {allTestimonials.length > 0 && (
          <div className="text-center mt-12">
            <button onClick={() => setIsModalOpen(true)} className="bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal px-8 py-4 rounded-full font-cabinet font-bold text-lg transition-colors">
              Tilføj din anmeldelse
            </button>
          </div>
        )}
      </div>

      <AddTestimonialModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>;
};
export default MIUTTestimonials;