import CallMeBackCTA from "../../CallMeBackCTA";

const TransylvaniaPricingSection = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Priser fra</p>
          <p className="font-cabinet text-4xl font-bold text-charcoal">9.500 DKK</p>
          <p className="text-sm text-gray-500">inkl. moms</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-2">Rejsestatus</p>
          <span className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-4 py-2 rounded-full font-cabinet text-sm font-bold shadow-md">
            BILLETSALG LUKKET 🎟️
          </span>
        </div>
      </div>
      <button 
        disabled
        className="w-full bg-gray-300 text-gray-600 cursor-not-allowed px-8 py-4 rounded-full font-cabinet font-medium border-2 border-gray-400"
      >
        Ikke tilgængelig for booking i øjeblikket
      </button>
      <div className="mt-4">
        <CallMeBackCTA />
      </div>
    </div>
  );
};

export default TransylvaniaPricingSection;
