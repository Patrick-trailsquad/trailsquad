import { useToast } from "@/hooks/use-toast";
import PriceQuoteForm from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";

const KangNu26PricingSection = () => {
  const { toast } = useToast();

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2 space-y-1">
          <p className="text-sm text-gray-600">Priser fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">
            TBA <span className="text-sm text-gray-500">inkl. moms</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Priser offentliggøres snart. Tilmeld dig for at modtage et prisoverslag.
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-600 mb-1">Rejsestatus</p>
          <p className="font-cabinet text-xl font-bold text-charcoal">Åbner senere</p>
        </div>
      </div>
      <PriceQuoteForm 
        destinationName="KangNu Running Race"
        availableDistances={["20km", "35km", "56km"]}
        maxParticipants={20}
      />
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default KangNu26PricingSection;
