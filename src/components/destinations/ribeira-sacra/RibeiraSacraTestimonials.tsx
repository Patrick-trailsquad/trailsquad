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
  const [expandedReviews, setExpandedReviews] = useState<{
    [key: number]: boolean;
  }>({});
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
  const ReviewText = ({
    text,
    index
  }: {
    text: string;
    index: number;
  }) => {
    const maxLength = 200;
    const shouldTruncate = text.length > maxLength;
    const isExpanded = expandedReviews[index] || false;
    const displayText = shouldTruncate && !isExpanded ? text.slice(0, maxLength) + '...' : text;
    return <div>
        <p className="text-charcoal/80 text-sm leading-relaxed">{displayText}</p>
        {shouldTruncate && <button onClick={() => toggleReviewExpansion(index)} className="text-[#FFDC00] hover:text-[#FFDC00]/80 text-sm font-medium mt-2 transition-colors">
            {isExpanded ? 'Læs mindre' : 'Læs mere'}
          </button>}
      </div>;
  };
  const renderStars = (rating: number) => {
    return <div className="flex gap-1">
        {[...Array(5)].map((_, i) => <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-[#FFDC00]' : 'fill-gray-300'}`} viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>)}
      </div>;
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
  return <section className="py-16 bg-stone">
      
      <AddTestimonialModal isOpen={isModalOpen} onClose={handleModalClose} destination="Ribeira Sacra" />
    </section>;
};
export default RibeiraSacraTestimonials;