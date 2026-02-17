import { useToast } from "@/hooks/use-toast";
import PriceQuoteForm from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";

const KangNu26PricingSection = () => {
  const spotsLeft = 16;

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">26.000 DKK</p>
          <p className="text-sm text-gray-500">inkl. moms</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-1">Rejsestatus</p>
          <p className="font-cabinet text-xl font-bold text-charcoal">{spotsLeft} pladser tilbage</p>
        </div>
      </div>
      <PriceQuoteForm 
        destinationName="KangNu Running Race"
        availableDistances={["20km", "35km", "56km"]}
        maxParticipants={spotsLeft}
      />
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default KangNu26PricingSection;
