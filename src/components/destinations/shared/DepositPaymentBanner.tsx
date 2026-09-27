import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, X } from "lucide-react";

const DepositPaymentBanner = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paymentStatus = searchParams.get("payment");
  const [show, setShow] = useState(paymentStatus === "success");
  const sentRef = useRef(false);

  useEffect(() => {
    if (paymentStatus !== "success" || sentRef.current) return;
    sentRef.current = true;

    // Booking data is saved + sent to Zapier server-side by the stripe-webhook function.
    sessionStorage.removeItem("deposit_booking_data");
  }, [paymentStatus]);

  if (!show) return null;

  return (
    <div className="bg-green-600 text-white py-4 px-6 relative z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <div>
            <p className="font-cabinet font-bold text-lg">Depositum betalt! 🎉</p>
            <p className="text-white/90 text-sm">
              Tak for din tilmelding. Vi vender personligt tilbage til dig inden for 48 timer på hverdage med en bekræftelse.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setShow(false);
            setSearchParams({});
          }}
          className="shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Luk"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DepositPaymentBanner;
