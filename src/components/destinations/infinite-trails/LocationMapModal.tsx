import React from 'react';
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
          <DialogTitle className="font-cabinet text-2xl">Infinite Trails Location</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[500px] bg-stone rounded-lg flex items-center justify-center">
          <p className="text-charcoal/60">Map coming soon</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationMapModal;
