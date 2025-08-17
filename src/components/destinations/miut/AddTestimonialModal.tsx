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
import type { User } from "@supabase/supabase-js";

interface AddTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTestimonialModal = ({ isOpen, onClose }: AddTestimonialModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    distance: "",
    rating: 0,
    review: "",
    photo: null as File | null
  });
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const { toast } = useToast();

  // Check authentication status when modal opens
  useEffect(() => {
    if (isOpen) {
      checkAuth();
    }
  }, [isOpen]);

  const checkAuth = async () => {
    setIsCheckingAuth(true);
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setIsCheckingAuth(false);
  };

  const handleSignIn = async () => {
    // For simplicity, we'll redirect to a signup page or show auth modal
    // This is a basic implementation - you might want to integrate with your auth system
    toast({
      title: "Login påkrævet",
      description: "Du skal være logget ind for at tilføje en anmeldelse. Login funktionalitet skal implementeres.",
      variant: "destructive"
    });
  };

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
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setFormData(prev => ({ ...prev, photo: file }));
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, photo: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Login påkrævet",
        description: "Du skal være logget ind for at tilføje en anmeldelse.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.name || !formData.distance || !formData.rating || !formData.review) {
      toast({
        title: "Manglende felter",
        description: "Udfyld venligst alle påkrævede felter.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      let photoUrl = null;
      
      // Upload photo if provided
      if (formData.photo) {
        const fileExt = formData.photo.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('testimonial-photos')
          .upload(fileName, formData.photo);
          
        if (uploadError) {
          console.error('Error uploading photo:', uploadError);
        } else {
          // Get public URL
          const { data: { publicUrl } } = supabase.storage
            .from('testimonial-photos')
            .getPublicUrl(fileName);
          photoUrl = publicUrl;
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
          destination: 'MIUT',
          photo_url: photoUrl,
          user_id: user.id  // Now required for authentication
          // status will default to 'pending' and require approval
        });

      if (error) throw error;

      toast({
        title: "Tak for din anmeldelse!",
        description: "Din anmeldelse er sendt til godkendelse og vil blive offentliggjort snarest.",
      });
      
      // Reset form and close modal
      setFormData({
        name: "",
        location: "",
        distance: "",
        rating: 0,
        review: "",
        photo: null
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

        {isCheckingAuth ? (
          <div className="text-center py-8">
            <p className="text-charcoal/60">Tjekker login status...</p>
          </div>
        ) : !user ? (
          <div className="text-center py-8 space-y-4">
            <div className="mb-6">
              <Star className="w-16 h-16 text-[#FFDC00] mx-auto mb-4" />
              <h3 className="font-cabinet text-xl font-bold text-charcoal mb-2">
                Login påkrævet
              </h3>
              <p className="text-charcoal/70 mb-6">
                For at forhindre spam og sikre ægte anmeldelser skal du være logget ind for at tilføje en anmeldelse.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onClose}
              >
                Annuller
              </Button>
              <Button
                type="button"
                onClick={handleSignIn}
                className="flex-1 bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal font-cabinet font-bold"
              >
                Log ind / Opret bruger
              </Button>
            </div>
          </div>
        ) : (
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
                    <SelectItem value="MIUT 16km">MIUT 16km</SelectItem>
                    <SelectItem value="MIUT 42km">MIUT 42km</SelectItem>
                    <SelectItem value="MIUT 60km">MIUT 60km</SelectItem>
                    <SelectItem value="MIUT 85km">MIUT 85km</SelectItem>
                    <SelectItem value="MIUT 115km">MIUT 115km</SelectItem>
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
                Tilføj et fedt billede fra turen!
              </Label>
              <div
                className={`mt-1 border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
                  dragActive 
                    ? "border-[#FFDC00] bg-[#FFDC00]/10" 
                    : "border-gray-300 hover:border-[#FFDC00]"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {formData.photo ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal truncate">{formData.photo.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setFormData(prev => ({ ...prev, photo: null }))}
                      className="h-6 w-6 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <div className="flex-1 text-left">
                      <p className="text-sm text-gray-600">
                        Træk og slip eller <button type="button" className="text-[#FFDC00] hover:underline" onClick={() => document.getElementById('photo-upload')?.click()}>vælg billede</button>
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="photo-upload"
                    />
                  </div>
                )}
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
                placeholder="Fortæl om din oplevelse med MIUT og Trail Squad..."
                required
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Bemærk:</strong> Din anmeldelse sendes til gennemgang og godkendelse før den offentliggøres. Dette sikrer kvaliteten af anmeldelserne på siden.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onClose}
              >
                Annuller
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal font-cabinet font-bold disabled:opacity-50"
              >
                {isSubmitting ? "Sender..." : "Send til godkendelse"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddTestimonialModal;