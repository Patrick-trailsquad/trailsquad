
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
        <DialogDescription className="text-base leading-relaxed">
          <div dangerouslySetInnerHTML={{
            __html: content.split('\n').map(line => {
              const trimmed = line.trim();
              // Check if line is likely a section title (not empty, doesn't end with period, and appears to be a heading)
              if (trimmed && !trimmed.endsWith('.') && !trimmed.endsWith(',') && !trimmed.startsWith('•') && !trimmed.startsWith('-') && trimmed.length < 100) {
                return `<strong>${line}</strong>`;
              }
              return line;
            }).join('<br>')
          }} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyModal;
