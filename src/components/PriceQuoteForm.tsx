
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Info } from "lucide-react";

interface PriceQuoteFormProps {
  destinationName: string;
}

const PriceQuoteForm = ({ destinationName }: PriceQuoteFormProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full bg-[#FFDC00] text-black px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#FFDC00]/90 transition-colors duration-300 border-2 border-black">
          Request price quote
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-cabinet">
            Request Quote for {destinationName}
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
          <div className="bg-stone/50 rounded-lg p-4 flex items-start gap-3 mb-6">
            <Info className="w-5 h-5 mt-0.5 text-gray-600 shrink-0" />
            <p className="text-sm text-gray-600">
              Fill out this form and we'll get back to you with a personalized quote for your 
              adventure. We typically respond within 24 hours during business days.
            </p>
          </div>

          {/* Form placeholder - waiting for requirements */}
          <div className="space-y-4 text-center py-8">
            <p className="text-gray-500">Form fields coming soon...</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PriceQuoteForm;
