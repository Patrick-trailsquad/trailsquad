import CallMeBackCTA from "../../CallMeBackCTA";

const TransylvaniaPricingSection = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex justify-center items-center mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Løbsstatus</p>
          <span className="inline-flex items-center gap-2 bg-charcoal text-stone px-4 py-2 rounded-full font-cabinet text-sm font-bold shadow-md">
            LØB AFSLUTTET 🏁
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
