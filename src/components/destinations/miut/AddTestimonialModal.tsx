import { useState } from "react";
import { Star, Upload, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.distance || !formData.rating || !formData.review) {
      toast({
        title: "Manglende felter",
        description: "Udfyld venligst alle påkrævede felter.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Testimonial data:", formData);
    
    toast({
      title: "Tak for din anmeldelse!",
      description: "Din anmeldelse er blevet sendt og vil blive gennemgået inden offentliggørelse.",
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
              Billede
            </Label>
            <div
              className={`mt-1 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
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
                  <span className="text-sm text-charcoal">{formData.photo.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setFormData(prev => ({ ...prev, photo: null }))}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Træk og slip et billede her, eller klik for at vælge
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('photo-upload')?.click()}
                  >
                    Vælg billede
                  </Button>
                </>
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
              className="flex-1 bg-[#FFDC00] hover:bg-[#FFDC00]/90 text-charcoal font-cabinet font-bold"
            >
              Send anmeldelse
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTestimonialModal;