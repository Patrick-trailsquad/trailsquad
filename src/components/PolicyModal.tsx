
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const PolicyModal = ({ isOpen, onClose, title, content }: PolicyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cabinet">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-base leading-relaxed whitespace-pre-line">
          {content}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyModal;
