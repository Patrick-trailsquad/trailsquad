
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
              
              // Skip empty lines
              if (!trimmed) return '<br>';
              
              // Check for bullet-like content (lines that are list items)
              if (trimmed.startsWith('Afbestilles') || trimmed.startsWith('•') || trimmed.startsWith('-')) {
                return `• ${line}`;
              }
              
              // Check if line is a section title (standalone short lines that are headers)
              const isTitle = trimmed && 
                !trimmed.endsWith('.') && 
                !trimmed.endsWith(',') && 
                !trimmed.includes(':') &&
                !trimmed.startsWith('•') && 
                !trimmed.startsWith('-') && 
                !trimmed.startsWith('Afbestilles') &&
                trimmed.length < 80 &&
                !trimmed.includes('Trail Squad') &&
                !line.includes('@');
                
              if (isTitle) {
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
