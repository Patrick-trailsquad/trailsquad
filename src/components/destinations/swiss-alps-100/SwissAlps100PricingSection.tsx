import PriceQuoteForm from "../../PriceQuoteForm";
import CallMeBackCTA from "../../CallMeBackCTA";

const SwissAlps100PricingSection = () => {
  return (
    <div className="space-y-6">
      <div className="bg-stone-dark p-6 rounded-xl">
        <h2 className="font-cabinet text-3xl font-bold mb-4">Priser</h2>
        <div className="space-y-2 mb-6">
          <p className="text-lg">
            <span className="font-bold">Fra 14.995 kr.</span> per person (dobbeltværelse)
          </p>
          <p className="text-sm text-muted-foreground">
            Enkeltværelsestillæg: +2.500 kr.
          </p>
          <p className="text-sm text-muted-foreground">
            Prisen varierer afhængigt af distance og roomtype
          </p>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg mb-6">
          <p className="font-bold text-lg mb-2">Kun 12 pladser tilbage!</p>
          <p className="text-sm">Sikr dig en plads på dette spektakulære eventyr</p>
        </div>

        <PriceQuoteForm 
          destinationName="Swiss Alps 100"
          availableDistances={["Vertical", "50km", "100km", "160km"]}
          maxParticipants={12}
        />
      </div>
      
      <CallMeBackCTA />
    </div>
  );
};

export default SwissAlps100PricingSection;
