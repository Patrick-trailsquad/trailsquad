import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { X, PartyPopper } from "lucide-react";
import finisherAsset from "@/assets/finisher-celebration.png.asset.json";
import { assetUrl } from "@/lib/assetUrl";

const PaymentSuccessModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paymentStatus = searchParams.get("payment");
  const [open, setOpen] = useState(paymentStatus === "success");
  const sentRef = useRef(false);

  const closeModal = () => {
    setOpen(false);
    setSearchParams({});
  };

  useEffect(() => {
    if (paymentStatus !== "success" || sentRef.current) return;
    sentRef.current = true;

    // Booking data is saved + sent to Zapier server-side by the stripe-webhook function.
    sessionStorage.removeItem("deposit_booking_data");
  }, [paymentStatus]);

  // Luk med Escape-tasten
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Depositum betalt"
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Luk-knap */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors"
          aria-label="Luk"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Billede */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={assetUrl(finisherAsset)}
            alt="Glad finisher med FINISHER-skilt i mål"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <p className="font-cabinet font-bold text-2xl leading-tight drop-shadow-md">
              Ét skridt nærmere målstregen! 🏁
            </p>
          </div>
        </div>

        {/* Indhold */}
        <div className="p-6 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow/15 text-charcoal rounded-full px-4 py-1.5 mb-4">
            <PartyPopper className="w-4 h-4" />
            <span className="font-cabinet font-bold text-sm">
              Depositum betalt 🎉
            </span>
          </div>

          <p className="text-foreground/90 text-sm leading-relaxed mb-1">
            Din plads er sikret — og du er officielt med på turen.
          </p>
          <p className="text-foreground/70 text-sm leading-relaxed mb-5">
            Vi vender personligt tilbage til dig inden for 48 timer på
            hverdage med en bekræftelse og de næste trin.
          </p>

          <button
            onClick={closeModal}
            className="w-full h-12 bg-yellow text-charcoal hover:bg-yellow/90 rounded-full font-cabinet font-bold text-lg shadow-md transition-colors"
          >
            Fortsæt
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
