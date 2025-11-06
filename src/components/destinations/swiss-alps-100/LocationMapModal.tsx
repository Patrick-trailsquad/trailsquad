import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface LocationMapModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LocationMapModal = ({ open, onOpenChange }: LocationMapModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-cabinet text-2xl">Goms, Schweiz</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44168.28535384893!2d8.213844!3d46.374999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f0d7e8e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sGoms%2C%20Switzerland!5e0!3m2!1sen!2sdk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Goms, Schweiz"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationMapModal;
