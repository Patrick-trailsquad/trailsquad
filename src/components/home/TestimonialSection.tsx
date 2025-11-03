import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id?: string;
  name: string;
  location: string | null;
  rating: number;
  review: string;
  distance: string;
  photo_url?: string | string[] | null;
  created_at?: string;
  destination?: string;
}

const TestimonialSection = () => {
  const [dbTestimonials, setDbTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setDbTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setIsLoading(false);
    }
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
        textRef.current.style.maxHeight = 'none';
        const scrollHeight = textRef.current.scrollHeight;
        const nineLinesHeight = 216;
        
        setFullHeight(`${scrollHeight}px`);
        setNeedsExpansion(scrollHeight > nineLinesHeight);
        
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star 
            key={star} 
            className={`w-4 h-4 ${star <= rating ? "fill-[#FFDC00] text-[#FFDC00]" : "text-gray-300"}`} 
          />
        ))}
      </div>
    );
  };

  const allTestimonials = dbTestimonials.map(t => {
    let photos: string[] = [];
    if (t.photo_url) {
      if (Array.isArray(t.photo_url)) {
        photos = t.photo_url;
      } else if (typeof t.photo_url === 'string' && t.photo_url !== 'null') {
        try {
          const parsed = JSON.parse(t.photo_url);
          photos = Array.isArray(parsed) ? parsed : [t.photo_url];
        } catch {
          photos = [t.photo_url];
        }
      }
    }
    
    return {
      name: t.name,
      location: t.location || '',
      rating: t.rating,
      review: t.review,
      race: t.distance,
      destination: t.destination || '',
      photos: photos.length > 0 ? photos : ["/lovable-uploads/69dcec0a-0f68-4392-b8d8-b61b254c67b7.png"],
      date: t.created_at ? new Date(t.created_at).toLocaleDateString('da-DK', {
        month: 'long',
        year: 'numeric'
      }).replace(/^\w/, c => c.toUpperCase()) : ''
    };
  });

  if (isLoading || allTestimonials.length === 0) {
    return null;
  }
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-cabinet font-bold text-center text-charcoal mb-16">
          Glade Trail Squad alumni!
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {allTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-0 h-full">
                <div className="bg-gray-100 h-60 relative overflow-hidden">
                  {testimonial.photos.length > 1 ? (
                    <Carousel className="w-full h-full" opts={{ loop: true }}>
                      <CarouselContent className="h-60">
                        {testimonial.photos.map((photo, photoIndex) => (
                          <CarouselItem key={photoIndex} className="h-60">
                            <img 
                              src={photo} 
                              alt={`Photo ${photoIndex + 1} from ${testimonial.name}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-0" />
                      <CarouselNext className="right-2 bg-white/80 hover:bg-white border-0" />
                    </Carousel>
                  ) : (
                    <img 
                      src={testimonial.photos[0]} 
                      alt={`Photo from ${testimonial.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                
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
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block bg-[#FFDC00] text-charcoal px-3 py-1 rounded-full text-sm font-cabinet font-medium">
                      {testimonial.race}
                    </span>
                    {testimonial.destination && (
                      <span className="text-xs text-charcoal/60">
                        {testimonial.destination}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
