import { useState, useEffect } from "react";
import { Star, Upload, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AddTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination?: string;
}

const AddTestimonialModal = ({ isOpen, onClose, destination = 'MIUT' }: AddTestimonialModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    distance: "",
    rating: 0,
    review: "",
    photos: [] as File[]
  });
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showImageReminder, setShowImageReminder] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const { toast } = useToast();
  const MAX_IMAGES = 6;

  // Clean up image preview URLs when component unmounts or images change
  useEffect(() => {
    return () => {
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
    };
  }, [imagePreviews]);

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0) {
      const availableSlots = MAX_IMAGES - formData.photos.length;
      const filesToAdd = imageFiles.slice(0, availableSlots);
      
      if (imageFiles.length > availableSlots) {
        toast({
          title: "Maksimalt antal billeder nået",
          description: `Du kan kun uploade ${MAX_IMAGES} billeder i alt.`,
          variant: "destructive"
        });
      }
      
      const newPreviews = filesToAdd.map(file => URL.createObjectURL(file));
      setImagePreviews(prev => [...prev, ...newPreviews]);
      setFormData(prev => ({ ...prev, photos: [...prev.photos, ...filesToAdd] }));
      setShowImageReminder(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
      const availableSlots = MAX_IMAGES - formData.photos.length;
      const filesToAdd = imageFiles.slice(0, availableSlots);
      
      if (imageFiles.length > availableSlots) {
        toast({
          title: "Maksimalt antal billeder nået",
          description: `Du kan kun uploade ${MAX_IMAGES} billeder i alt.`,
          variant: "destructive"
        });
      }
      
      const newPreviews = filesToAdd.map(file => URL.createObjectURL(file));
      setImagePreviews(prev => [...prev, ...newPreviews]);
      setFormData(prev => ({ ...prev, photos: [...prev.photos, ...filesToAdd] }));
      setShowImageReminder(false);
    }
    // Reset input to allow selecting the same file again
    e.target.value = '';
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(imagePreviews[index]);
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({ ...prev, photos: prev.photos.filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.distance || !formData.rating || !formData.review) {
      toast({
        title: "Manglende felter",
        description: "Udfyld venligst alle påkrævede felter.",
        variant: "destructive"
      });
      return;
    }

    // Check if no photos are provided and reminder hasn't been shown
    if (formData.photos.length === 0 && !showImageReminder) {
      setShowImageReminder(true);
      return;
    }

    await submitReview();
  };

  const submitReview = async () => {
    setShowImageReminder(false);  // Hide reminder when submitting

    setIsSubmitting(true);
    
    try {
      let photoUrls: string[] = [];
      
      // Upload all photos if provided
      if (formData.photos.length > 0) {
        for (const photo of formData.photos) {
          const fileExt = photo.name.split('.').pop();
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
          
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('testimonial-photos')
            .upload(fileName, photo);
            
          if (uploadError) {
            console.error('Error uploading photo:', uploadError);
          } else {
            // Get public URL
            const { data: { publicUrl } } = supabase.storage
              .from('testimonial-photos')
              .getPublicUrl(fileName);
            photoUrls.push(publicUrl);
          }
        }
      }

      const { error } = await supabase
        .from('testimonials')
        .insert({
          name: formData.name,
          location: formData.location || null,
          distance: formData.distance,
          rating: formData.rating,
          review: formData.review,
          destination: destination,
          photo_url: photoUrls.length > 0 ? photoUrls : null
          // user_id will be null for unauthenticated users
          // status will default to 'approved' for auto-approval
        });

      if (error) throw error;

      toast({
        title: "Tak for din anmeldelse!",
        description: "Din anmeldelse er nu offentliggjort på siden.",
      });
      
      // Reset form and close modal
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
      setImagePreviews([]);
      setFormData({
        name: "",
        location: "",
        distance: "",
        rating: 0,
        review: "",
        photos: []
      });
      onClose();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast({
        title: "Fejl",
        description: "Der opstod en fejl ved indsendelse af din anmeldelse. Prøv igen.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = () => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              star <= formData.rating
                ? "fill-[#FFDC00] text-[#FFDC00]"
                : "text-gray-300 hover:text-[#FFDC00]"
            }`}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="font-cabinet text-2xl font-bold text-charcoal">
            Tilføj din anmeldelse
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-charcoal font-cabinet font-medium">
                Navn *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1"
                placeholder="Dit navn"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="location" className="text-charcoal font-cabinet font-medium">
                By
              </Label>
              <Input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="mt-1"
                placeholder="F.eks. København"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-charcoal font-cabinet font-medium">
                Distance *
              </Label>
              <Select value={formData.distance} onValueChange={(value) => setFormData(prev => ({ ...prev, distance: value }))}>
                <SelectTrigger className="mt-1 bg-white">
                  <SelectValue placeholder="Vælg din distance" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  {destination === 'MIUT' ? (
                    <>
                      <SelectItem value="MIUT 16km">MIUT 16km</SelectItem>
                      <SelectItem value="MIUT 42km">MIUT 42km</SelectItem>
                      <SelectItem value="MIUT 60km">MIUT 60km</SelectItem>
                      <SelectItem value="MIUT 85km">MIUT 85km</SelectItem>
                      <SelectItem value="MIUT 115km">MIUT 115km</SelectItem>
                    </>
                  ) : destination === 'Ribeira Sacra' ? (
                    <>
                      <SelectItem value="48km">48km</SelectItem>
                    </>
                  ) : null}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-charcoal font-cabinet font-medium">
                Bedømmelse *
              </Label>
              <div className="mt-2">
                {renderStars()}
              </div>
            </div>
          </div>

          <div>
            <Label className="text-charcoal font-cabinet font-medium">
              Tilføj billeder fra turen! (Max {MAX_IMAGES})
            </Label>
            <div
              className={`mt-1 border-2 border-dashed rounded-lg p-4 transition-colors ${
                dragActive 
                  ? "border-[#FFDC00] bg-[#FFDC00]/10" 
                  : "border-gray-300 hover:border-[#FFDC00]"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {formData.photos.length > 0 ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={preview} 
                          alt={`Preview ${index + 1}`} 
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 h-6 w-6 p-0 bg-white/90 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  {formData.photos.length < MAX_IMAGES && (
                    <button
                      type="button"
                      onClick={() => document.getElementById('photo-upload')?.click()}
                      className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-[#FFDC00] hover:text-[#FFDC00] transition-colors"
                    >
                      + Tilføj flere billeder ({formData.photos.length}/{MAX_IMAGES})
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <div className="flex-1 text-left">
                    <p className="text-sm text-gray-600">
                      Træk og slip eller <button type="button" className="text-[#FFDC00] hover:underline" onClick={() => document.getElementById('photo-upload')?.click()}>vælg billeder</button>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Du kan uploade op til {MAX_IMAGES} billeder</p>
                  </div>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="photo-upload"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="review" className="text-charcoal font-cabinet font-medium">
              Din anmeldelse *
            </Label>
            <Textarea
              id="review"
              value={formData.review}
              onChange={(e) => setFormData(prev => ({ ...prev, review: e.target.value }))}
              className="mt-1 min-h-[120px]"
              placeholder={`Fortæl om din oplevelse med ${destination} og Trail Squad...`}
              required
            />
          </div>

          {/* Image Reminder Notice */}
          {showImageReminder && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-4">
              <div className="flex items-start gap-3">
                <Upload className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-cabinet font-bold text-orange-800 mb-2">
                    Mangler du et billede?
                  </h4>
                  <p className="text-sm text-orange-700 mb-4">
                    Billeder gør din anmeldelse mere engagerende og hjælper andre løbere. 
                    <strong> Bemærk: Du kan ikke tilføje billeder efter indsendelse.</strong>
                  </p>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('photo-upload')?.click()}
                      className="border-orange-300 text-orange-700 hover:bg-orange-100"
                    >
                      📸 Tilføj billede
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      onClick={submitReview}
                      disabled={isSubmitting}
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      {isSubmitting ? "Sender..." : "Send uden billede"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Annuller
            </Button>
            {!showImageReminder && (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal font-cabinet font-bold disabled:opacity-50"
              >
                {isSubmitting ? "Sender..." : "Send anmeldelse"}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTestimonialModal;