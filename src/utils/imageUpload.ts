import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

/**
 * Upload and automatically optimize an image
 * @param file - The image file to upload
 * @param path - Optional storage path (defaults to lovable-uploads)
 * @returns The optimized image URL or original URL if optimization fails
 */
export const uploadAndOptimizeImage = async (
  file: File,
  path: string = 'lovable-uploads'
): Promise<string> => {
  try {
    // First, upload the original file
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('gallery-optimized')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get the public URL of the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('gallery-optimized')
      .getPublicUrl(filePath);

    // Try to optimize the image
    toast.info('Optimizing image...');
    
    const { data: optimizeData, error: optimizeError } = await supabase.functions.invoke(
      'optimize-image',
      {
        body: { imageUrl: publicUrl, quality: 85, maxWidth: 1200 }
      }
    );

    if (optimizeError || !optimizeData?.url) {
      console.warn('Image optimization failed, using original:', optimizeError);
      toast.warning('Using original image (optimization failed)');
      return publicUrl;
    }

    toast.success('Image optimized successfully!');
    return optimizeData.url;

  } catch (error) {
    console.error('Error uploading image:', error);
    toast.error('Failed to upload image');
    throw error;
  }
};

/**
 * Helper to handle multiple image uploads
 */
export const uploadAndOptimizeImages = async (
  files: File[]
): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadAndOptimizeImage(file));
  return Promise.all(uploadPromises);
};
