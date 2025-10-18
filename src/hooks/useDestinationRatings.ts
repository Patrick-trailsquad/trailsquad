import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DestinationRating {
  destination: string;
  averageRating: number;
  count: number;
}

export const useDestinationRatings = () => {
  const [ratings, setRatings] = useState<Record<string, DestinationRating>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('destination, rating')
          .eq('status', 'approved');

        if (error) throw error;

        // Calculate average rating per destination
        const ratingsByDestination: Record<string, DestinationRating> = {};
        
        data?.forEach((testimonial) => {
          const dest = testimonial.destination;
          if (!ratingsByDestination[dest]) {
            ratingsByDestination[dest] = {
              destination: dest,
              averageRating: 0,
              count: 0
            };
          }
          ratingsByDestination[dest].averageRating += testimonial.rating;
          ratingsByDestination[dest].count += 1;
        });

        // Calculate averages
        Object.keys(ratingsByDestination).forEach((dest) => {
          const data = ratingsByDestination[dest];
          data.averageRating = data.averageRating / data.count;
        });

        setRatings(ratingsByDestination);
      } catch (error) {
        console.error('Error fetching destination ratings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRatings();
  }, []);

  return { ratings, isLoading };
};
