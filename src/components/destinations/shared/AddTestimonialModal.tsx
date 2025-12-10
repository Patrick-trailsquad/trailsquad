import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AddTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
}

const AddTestimonialModal = ({ isOpen, onClose, destination }: AddTestimonialModalProps) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [distance, setDistance] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      setPhotos(prev => [...prev, ...newPhotos].slice(0, 5));
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const uploadPhotos = async (): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    
    for (const photo of photos) {
      const fileExt = photo.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `testimonials/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('testimonial-photos')
        .upload(filePath, photo);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        continue;
      }

      const { data: urlData } = supabase.storage
        .from('testimonial-photos')
        .getPublicUrl(filePath);

      if (urlData?.publicUrl) {
        uploadedUrls.push(urlData.publicUrl);
      }
    }

    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let photoUrls: string[] = [];
      if (photos.length > 0) {
        photoUrls = await uploadPhotos();
      }

      const { error } = await supabase.from('testimonials').insert({
        name,
        location,
        rating,
        review,
        distance,
        destination,
        photo_url: photoUrls,
        status: 'pending'
      });

      if (error) throw error;

      toast({
        title: "Tak for din anmeldelse!",
        description: "Din anmeldelse er blevet indsendt og vil blive gennemgået.",
      });

      // Reset form
      setName("");
      setLocation("");
      setRating(5);
      setReview("");
      setDistance("");
      setPhotos([]);
      onClose();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast({
        title: "Fejl",
        description: "Der opstod en fejl. Prøv venligst igen.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-cabinet text-2xl">Tilføj din anmeldelse</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Navn *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Dit navn"
            />
          </div>

          <div>
            <Label htmlFor="location">By/Land</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="F.eks. København, Danmark"
            />
          </div>

          <div>
            <Label htmlFor="distance">Distance *</Label>
            <Input
              id="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              required
              placeholder="F.eks. 42km"
            />
          </div>

          <div>
            <Label>Bedømmelse *</Label>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= rating
                        ? "fill-[#FFDC00] text-[#FFDC00]"
                        : "text-gray-300 hover:text-[#FFDC00]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="review">Din anmeldelse *</Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              placeholder="Fortæl om din oplevelse..."
              rows={4}
            />
          </div>

          <div>
            <Label>Billeder (valgfrit, max 5)</Label>
            <div className="mt-2">
              <label className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-[#FFDC00] transition-colors">
                <Upload className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500">Upload billeder</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
            {photos.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Preview ${index + 1}`}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal font-cabinet font-bold"
          >
            {isSubmitting ? "Indsender..." : "Indsend anmeldelse"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTestimonialModal;
