import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface OptimizeResult {
  originalUrl: string;
  optimizedUrl: string;
  originalSize: number;
  success: boolean;
  error?: string;
}

export const useImageOptimizer = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const optimizeImage = async (imageUrl: string): Promise<OptimizeResult> => {
    try {
      const { data, error } = await supabase.functions.invoke('optimize-image', {
        body: { imageUrl, quality: 85, maxWidth: 1200 }
      });

      if (error) throw error;

      return {
        originalUrl: imageUrl,
        optimizedUrl: data.url,
        originalSize: data.originalSize,
        success: true
      };
    } catch (error) {
      console.error('Failed to optimize image:', imageUrl, error);
      return {
        originalUrl: imageUrl,
        optimizedUrl: imageUrl, // Fallback to original
        originalSize: 0,
        success: false,
        error: error.message
      };
    }
  };

  const batchOptimize = async (imageUrls: string[]): Promise<OptimizeResult[]> => {
    setIsOptimizing(true);
    setProgress({ current: 0, total: imageUrls.length });

    const results: OptimizeResult[] = [];

    for (let i = 0; i < imageUrls.length; i++) {
      const result = await optimizeImage(imageUrls[i]);
      results.push(result);
      setProgress({ current: i + 1, total: imageUrls.length });
      
      if (result.success) {
        toast.success(`Optimized ${i + 1}/${imageUrls.length}`);
      } else {
        toast.error(`Failed to optimize image ${i + 1}`);
      }
    }

    setIsOptimizing(false);
    return results;
  };

  return {
    optimizeImage,
    batchOptimize,
    isOptimizing,
    progress
  };
};
