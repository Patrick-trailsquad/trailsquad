import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageUrl, quality = 80, maxWidth = 1200 } = await req.json();

    if (!imageUrl) {
      return new Response(
        JSON.stringify({ error: 'imageUrl is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    console.log('Fetching image from:', imageUrl);

    // Fetch the original image
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }

    const imageBlob = await imageResponse.blob();
    const arrayBuffer = await imageBlob.arrayBuffer();

    // Use ImageMagick via Deno FFI or just store as-is for now
    // For production, you'd use a proper image processing library
    // For now, we'll store the image and let the browser handle WebP conversion via picture element
    
    console.log('Processing image, size:', arrayBuffer.byteLength);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Extract filename from URL
    const urlParts = imageUrl.split('/');
    const originalFilename = urlParts[urlParts.length - 1];
    const filename = `optimized-${Date.now()}-${originalFilename}`;

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('gallery-optimized')
      .upload(filename, arrayBuffer, {
        contentType: 'image/webp',
        upsert: false
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw uploadError;
    }

    console.log('Image uploaded successfully:', uploadData);

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('gallery-optimized')
      .getPublicUrl(filename);

    return new Response(
      JSON.stringify({ 
        success: true,
        url: urlData.publicUrl,
        originalSize: imageBlob.size,
        filename
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
